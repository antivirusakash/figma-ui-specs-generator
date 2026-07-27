/**
 * Folds `collectLayoutData` results into the anatomy list.
 *
 * Three call sites in `src/code.ts` carried near-identical copies of this merge; they are
 * consolidated here so a fix lands on all of them at once.
 */
import type { AnatomyElement, LayoutSpec } from "../types";

/** `root/a/FRAME:b` -> `root/a/b/`, the prefix every child of that node carries in its pathKey.
 *  Both walkers build keys as `${parentPath}/${TYPE}:${name}` while recursing with the bare
 *  name, so the leaf's type prefix and de-duplication suffix have to come off. */
function childPathPrefix(pathKey: string): string {
  const cut = pathKey.lastIndexOf("/");
  const leaf = pathKey
    .slice(cut + 1)
    .replace(/^[A-Z_]+:/, "")
    .replace(/\[\d+\]$/, "");
  return `${pathKey.slice(0, cut + 1)}${leaf}/`;
}

function applySpec(el: AnatomyElement, ls: LayoutSpec) {
  el.layoutDirection = ls.layoutMode;
  el.layoutJustify = ls.primaryAxisAlignItems;
  el.layoutAlignItems = ls.counterAxisAlignItems;
  el.layoutWSizing =
    ls.layoutMode === "HORIZONTAL" ? ls.primaryAxisSizingMode : ls.counterAxisSizingMode;
  el.layoutHSizing =
    ls.layoutMode === "HORIZONTAL" ? ls.counterAxisSizingMode : ls.primaryAxisSizingMode;
  if (ls.layoutWrap) el.layoutWrap = ls.layoutWrap;
  if (ls.clipsContent) el.layoutClips = true;
  if (ls.inferred) el.layoutInferred = true;
}

/** Mutates `anatomy` in place: merges layout onto matching elements, inserts layout-only nodes
 *  at their real position in the tree, and stamps children of inferred containers with their
 *  offset from the parent. */
export function mergeLayoutIntoAnatomy(anatomy: AnatomyElement[], layoutData: LayoutSpec[]): void {
  if (layoutData.length === 0) return;

  const layoutMap = new Map(layoutData.map((s) => [s.nodeId, s]));
  anatomy.forEach((el) => {
    const ls = el.nodeId ? layoutMap.get(el.nodeId) : undefined;
    if (ls) applySpec(el, ls);
  });

  // `isRelevantNode` drops undecorated frames past depth 3, but they still produce a layout
  // spec. Appending them left them with no depth, so the anatomy tree drew them at root as
  // siblings of the selection — and left a two-level indentation hole where they belonged.
  // Insert each one ahead of its first child instead, carrying the spec's depth.
  const present = new Set<string>();
  anatomy.forEach((el) => {
    if (el.nodeId) present.add(el.nodeId);
  });
  layoutData.forEach((ls) => {
    if (present.has(ls.nodeId)) return;
    present.add(ls.nodeId);
    const el: AnatomyElement = {
      name: ls.name,
      type: ls.type,
      attributes: [],
      bounds: ls.bounds,
      nodeId: ls.nodeId,
      pathKey: ls.pathKey,
      depth: ls.depth,
      layoutClips: ls.clipsContent || undefined,
      layoutInferred: ls.inferred || undefined
    };
    applySpec(el, ls);
    const prefix = ls.pathKey ? childPathPrefix(ls.pathKey) : undefined;
    const firstChild = prefix
      ? anatomy.findIndex((other) => other.pathKey?.startsWith(prefix))
      : -1;
    if (firstChild >= 0) anatomy.splice(firstChild, 0, el);
    else anatomy.push(el);
  });

  // A frame with no auto-layout gets its direction/justify/gap guessed from the first two
  // children. That guess is emitted in the same keys as real auto-layout, so an agent has no
  // way to tell it is reading an estimate — and reordering or space-between will move layers
  // that Figma draws somewhere else entirely. Carry the true offsets so the geometry survives.
  const byId = new Map<string, AnatomyElement>();
  anatomy.forEach((el) => {
    if (el.nodeId) byId.set(el.nodeId, el);
  });
  layoutData.forEach((ls) => {
    if (!ls.inferred || !ls.inferredChildIds || !ls.bounds) return;
    for (const childId of ls.inferredChildIds) {
      const child = byId.get(childId);
      if (!child?.bounds) continue;
      child.parentOffset = {
        x: Math.round(child.bounds.x - ls.bounds.x),
        y: Math.round(child.bounds.y - ls.bounds.y)
      };
    }
  });
}
