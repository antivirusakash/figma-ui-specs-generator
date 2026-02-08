import { logError } from "../logger";
import type { Inventory } from "../inventory";
import type { AnatomyElement, ComponentSetContext, InstanceTemplate, Settings } from "../types";
import { collectAttributes } from "./attributes";
import { detectTokensStudio } from "./attributes";

const MAX_ANATOMY_ELEMENTS = 150;
const MAX_WALK_DEPTH = 12;
const MAX_SIGNATURE_DEPTH = 3;
export const MAX_DIFF_DEPTH = 6;

export type CollectAnatomyResult = {
  elements: AnatomyElement[];
  instanceTemplates: InstanceTemplate[];
  dedupedNodeIds: Set<string>;
};

/** Build a type:name tree string for visible children up to maxDepth */
export function computeChildSignature(node: SceneNode, maxDepth = MAX_SIGNATURE_DEPTH): string {
  if (maxDepth <= 0) return "";
  if (!("children" in node)) return "";
  const parts: string[] = [];
  for (const child of (node as FrameNode).children) {
    if (!child.visible) continue;
    const childSig = computeChildSignature(child, maxDepth - 1);
    const entry = childSig ? `${child.type}:${child.name}(${childSig})` : `${child.type}:${child.name}`;
    parts.push(entry);
  }
  return parts.join(",");
}

/** Fingerprint = componentSetId (or mainComponentId) + "|" + childSignature.
 *  If mainComponent is provided, skip the async resolve (caller already has it). */
export async function computeInstanceFingerprint(
  instance: InstanceNode,
  mainComponent?: ComponentNode | null
): Promise<string | null> {
  const main = mainComponent !== undefined ? mainComponent : await getMainComponentSafe(instance);
  if (!main) return null;
  const compId = main.parent?.type === "COMPONENT_SET" ? main.parent.id : main.id;
  const sig = computeChildSignature(instance, MAX_SIGNATURE_DEPTH);
  return `${compId}|${sig}`;
}

/**
 * Walk template and repeat children in parallel, collecting diffs (text, fill, width, visibility).
 * `currentPath` is the fully-qualified path for the current node pair.
 */
export function collectRepeatDiffs(
  templateNode: SceneNode,
  repeatNode: SceneNode,
  currentPath = "",
  maxDepth = MAX_DIFF_DEPTH
): Record<string, string> {
  const diffs: Record<string, string> = {};
  if (maxDepth <= 0) return diffs;

  // If no path provided (top-level call), use the node name
  const path = currentPath || repeatNode.name;

  // Text content diff
  if (templateNode.type === "TEXT" && repeatNode.type === "TEXT") {
    const tChars = (templateNode as TextNode).characters;
    const rChars = (repeatNode as TextNode).characters;
    if (tChars !== rChars) {
      diffs[`${path}/text`] = rChars;
    }
  }

  // Fill color diff
  if ("fills" in templateNode && "fills" in repeatNode) {
    const tFill = getFirstSolidFillHex(templateNode);
    const rFill = getFirstSolidFillHex(repeatNode);
    if (tFill && rFill && tFill !== rFill) {
      diffs[`${path}/fill`] = rFill;
    }
  }

  // Width diff
  if (templateNode.absoluteBoundingBox && repeatNode.absoluteBoundingBox) {
    const tW = Math.round(templateNode.absoluteBoundingBox.width);
    const rW = Math.round(repeatNode.absoluteBoundingBox.width);
    if (tW !== rW) {
      diffs[`${path}/width`] = String(rW);
    }
  }

  // Visibility diff
  if (templateNode.visible !== repeatNode.visible) {
    diffs[`${path}/visible`] = String(repeatNode.visible);
  }

  // Instance variant property diffs (e.g. Property 1=bad → Property 1=good)
  if (templateNode.type === "INSTANCE" && repeatNode.type === "INSTANCE") {
    const tProps = (templateNode as InstanceNode).componentProperties;
    const rProps = (repeatNode as InstanceNode).componentProperties;
    if (tProps && rProps) {
      for (const [key, rVal] of Object.entries(rProps)) {
        const tVal = tProps[key];
        if (tVal && String(tVal.value) !== String(rVal.value)) {
          const cleanKey = key.replace(/#[\d:]+$/, "");
          diffs[`${path}/${cleanKey}`] = String(rVal.value);
        }
      }
    }
  }

  // Recurse into children — disambiguate siblings with duplicate names
  if ("children" in templateNode && "children" in repeatNode) {
    const tChildren = (templateNode as FrameNode).children;
    const rChildren = (repeatNode as FrameNode).children;
    const len = Math.min(tChildren.length, rChildren.length);
    const nameCounts = new Map<string, number>();
    for (let i = 0; i < len; i++) {
      const childName = rChildren[i].name;
      const count = (nameCounts.get(childName) ?? 0) + 1;
      nameCounts.set(childName, count);
      // Build full child path; append [N] suffix when sibling names collide
      const childSegment = count > 1 ? `${childName}[${count}]` : childName;
      const childPath = `${path}/${childSegment}`;
      const childDiffs = collectRepeatDiffs(tChildren[i], rChildren[i], childPath, maxDepth - 1);
      Object.assign(diffs, childDiffs);
    }
  }

  return diffs;
}

function getFirstSolidFillHex(node: SceneNode): string | null {
  if (!("fills" in node)) return null;
  const fills = node.fills;
  if (!fills || fills === figma.mixed || fills.length === 0) return null;
  const solid = (fills as readonly Paint[]).find(
    (f): f is SolidPaint => f.type === "SOLID" && f.visible !== false
  );
  if (!solid) return null;
  const r = Math.round(solid.color.r * 255);
  const g = Math.round(solid.color.g * 255);
  const b = Math.round(solid.color.b * 255);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`.toUpperCase();
}

export async function collectAnatomyElements(
  root: SceneNode,
  inventory: Inventory,
  settings: Settings
): Promise<CollectAnatomyResult> {
  const elements: AnatomyElement[] = [];
  const instanceTemplates: InstanceTemplate[] = [];
  const dedupedNodeIds = new Set<string>();
  const rootBounds = root.absoluteBoundingBox;
  const nameCounts = new Map<string, number>();

  // Fingerprint → { template info, templateNode reference }
  const templateMap = new Map<string, { template: InstanceTemplate; node: InstanceNode }>();

  const walk = async (node: SceneNode, path: string, depth: number) => {
    if (!node.visible) return;
    if (elements.length >= MAX_ANATOMY_ELEMENTS) return;
    if (depth > MAX_WALK_DEPTH) return;

    const isElement = isRelevantNode(node, depth);

    if (isElement) {
      const baseKey = `${path}/${node.type}:${node.name}`;
      const count = (nameCounts.get(baseKey) ?? 0) + 1;
      nameCounts.set(baseKey, count);
      const key = count > 1 ? `${baseKey}[${count}]` : baseKey;
      const bounds = node.absoluteBoundingBox;
      const relativeBounds =
        bounds && rootBounds
          ? {
              x: bounds.x - rootBounds.x,
              y: bounds.y - rootBounds.y,
              width: bounds.width,
              height: bounds.height
            }
          : undefined;

      detectTokensStudio(node, inventory);

      // Resolve main component once for both instanceOf and fingerprinting
      const mainComponent = node.type === "INSTANCE"
        ? await getMainComponentSafe(node as InstanceNode)
        : null;
      const instanceOf = mainComponent?.name;

      // Instance dedup: check fingerprint for INSTANCE nodes (not root)
      if (node.type === "INSTANCE" && depth > 0) {
        const fp = await computeInstanceFingerprint(node as InstanceNode, mainComponent);
        if (fp) {
          const existing = templateMap.get(fp);
          if (existing) {
            // This is a repeat — collect diffs, skip walking children
            const childrenText = collectInstanceText(node as InstanceNode);
            const diffs = collectRepeatDiffs(existing.node, node as InstanceNode);

            // Add top-level element (but don't recurse into children)
            elements.push({
              name: node.name,
              type: node.type,
              instanceOf,
              attributes: await collectAttributes(node, inventory, settings),
              bounds: relativeBounds,
              nodeId: node.id,
              pathKey: key,
              childrenText: childrenText?.length ? childrenText : undefined
            });

            existing.template.repeatCount += 1;
            existing.template.repeats.push({
              nodeId: node.id,
              pathKey: key,
              bounds: relativeBounds,
              childrenText: childrenText?.length ? childrenText : undefined,
              diffs
            });

            // Collect varying keys
            for (const diffKey of Object.keys(diffs)) {
              if (!existing.template.varyingKeys.includes(diffKey)) {
                existing.template.varyingKeys.push(diffKey);
              }
            }

            // Collect all children IDs for layout skip
            collectDescendantIds(node as InstanceNode, dedupedNodeIds);
            return; // Skip walking children — this is the key node savings
          }

          // First occurrence — register as template, walk children normally
          const tpl: InstanceTemplate = {
            templateNodeId: node.id,
            templatePathKey: key,
            fingerprint: fp,
            instanceOf: instanceOf ?? node.name,
            repeatCount: 0,
            varyingKeys: [],
            repeats: []
          };
          templateMap.set(fp, { template: tpl, node: node as InstanceNode });
          instanceTemplates.push(tpl);
        }
      }

      const textContent = node.type === "TEXT"
        ? (node as TextNode).characters
        : undefined;

      const childrenText = node.type === "INSTANCE"
        ? collectInstanceText(node as InstanceNode)
        : undefined;

      elements.push({
        name: node.name,
        type: node.type,
        instanceOf,
        attributes: await collectAttributes(node, inventory, settings),
        bounds: relativeBounds,
        nodeId: node.id,
        pathKey: key,
        textContent,
        childrenText: childrenText?.length ? childrenText : undefined
      });
    }

    // Skip children of icon-sized instances (≤48px) — agent only needs instance_of
    if (node.type === "INSTANCE" && depth > 0 && Math.max(node.width, node.height) <= 48) {
      return;
    }

    if ("children" in node) {
      for (const child of node.children) {
        await walk(child, `${path}/${node.name}`, depth + 1);
      }
    }
  };

  await walk(root, "root", 0);

  // Remove templates with no repeats (single occurrence — no dedup needed)
  const validTemplates = instanceTemplates.filter(t => t.repeatCount > 0);

  return { elements, instanceTemplates: validTemplates, dedupedNodeIds };
}

function collectDescendantIds(node: SceneNode, ids: Set<string>) {
  if ("children" in node) {
    for (const child of (node as FrameNode).children) {
      ids.add(child.id);
      collectDescendantIds(child, ids);
    }
  }
}

export async function getMainComponentSafe(instance: InstanceNode) {
  try {
    return await instance.getMainComponentAsync();
  } catch (error) {
    logError("Failed to resolve main component", { id: instance.id, name: instance.name, error });
    return null;
  }
}

export async function resolveComponentSet(target?: SceneNode): Promise<ComponentSetContext | null> {
  if (!target) return null;
  if (target.type === "COMPONENT_SET") {
    const set = target as ComponentSetNode;
    const baseComponent =
      set.defaultVariant ??
      (set.children.find((child) => child.type === "COMPONENT") as ComponentNode | undefined);
    if (!baseComponent) return null;
    return { componentSet: set, baseComponent };
  }
  if (target.type === "COMPONENT") {
    const component = target as ComponentNode;
    if (component.parent?.type === "COMPONENT_SET") {
      const set = component.parent as ComponentSetNode;
      const baseComponent =
        set.defaultVariant ??
        (set.children.find((child) => child.type === "COMPONENT") as ComponentNode | undefined) ??
        component;
      return { componentSet: set, baseComponent };
    }
  }
  if (target.type === "INSTANCE") {
    const instance = target as InstanceNode;
    const main = await getMainComponentSafe(instance);
    if (main?.parent?.type === "COMPONENT_SET") {
      const set = main.parent as ComponentSetNode;
      const baseComponent =
        set.defaultVariant ??
        (set.children.find((child) => child.type === "COMPONENT") as ComponentNode | undefined) ??
        main;
      return { componentSet: set, baseComponent };
    }
  }
  return null;
}

export function isRelevantNode(node: SceneNode, depth = 0) {
  // Always include instances, text, components, boolean ops
  if (node.type === "INSTANCE") return true;
  if (node.type === "TEXT") return true;
  if (node.type === "COMPONENT") return true;
  if (node.type === "BOOLEAN_OPERATION") return true;

  // Include frames with auto-layout at any depth (needed for inline layout data)
  if ((node.type === "FRAME" || node.type === "COMPONENT_SET") &&
      "layoutMode" in node && (node as any).layoutMode !== "NONE") {
    return true;
  }

  // Skip purely structural frames/groups at depth > 3
  if (depth > 3 && (node.type === "FRAME" || node.type === "GROUP")) {
    if (!hasVisualProperties(node)) return false;
  }

  // Skip deep vectors/shapes at depth > 4 (usually icon internals)
  if (depth > 4 && (node.type === "VECTOR" || node.type === "RECTANGLE"
      || node.type === "ELLIPSE" || node.type === "LINE"
      || node.type === "POLYGON" || node.type === "STAR")) {
    return false;
  }

  if (node.type === "FRAME" || node.type === "GROUP"
      || node.type === "RECTANGLE" || node.type === "ELLIPSE"
      || node.type === "VECTOR" || node.type === "LINE"
      || node.type === "POLYGON" || node.type === "STAR") return true;

  return false;
}

export function collectInstanceText(instance: InstanceNode, maxDepth = 3): string[] {
  const texts: string[] = [];
  const walk = (n: SceneNode, depth: number) => {
    if (depth > maxDepth || !n.visible) return;
    if (n.type === "TEXT") {
      const chars = (n as TextNode).characters;
      if (chars) texts.push(chars);
    }
    if ("children" in n) {
      for (const child of (n as FrameNode).children) walk(child, depth + 1);
    }
  };
  for (const child of instance.children) walk(child, 0);
  return texts;
}

function hasVisualProperties(node: SceneNode): boolean {
  if (!("fills" in node)) return false;
  const fills = node.fills;
  if (fills && fills !== figma.mixed && fills.length > 0) {
    const hasVisibleFill = (fills as readonly Paint[]).some(f => f.visible !== false);
    if (hasVisibleFill) return true;
  }
  if ("strokes" in node) {
    const strokes = node.strokes;
    if (strokes && strokes.length > 0) return true;
  }
  if ("effects" in node) {
    const effects = node.effects;
    if (effects && effects.length > 0) {
      const hasVisibleEffect = (effects as readonly Effect[]).some(e => e.visible !== false);
      if (hasVisibleEffect) return true;
    }
  }
  return false;
}
