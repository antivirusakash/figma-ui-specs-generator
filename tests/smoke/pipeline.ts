/**
 * Drives the real spec pipeline end-to-end against a mocked Figma document.
 *
 * `src/code.ts` cannot be imported from a test (it calls `figma.showUI` at module
 * scope), so the orchestration below mirrors its `data`-path wiring 1:1:
 *   collectAnatomyElements -> collectLayoutData / collectNodeSizing -> merge
 *   -> toAgentReadyDataPayload -> stripNulls -> toYaml
 */
import "./fixture";
import { collectAnatomyElements } from "../../src/plugin/helpers/anatomy-collector";
import { collectLayoutData, collectNodeSizing } from "../../src/plugin/sections/layout-section";
import { stripNulls, toAgentReadyDataPayload, toYaml } from "../../src/plugin/sections/data-section";
import { truncateText } from "../../src/plugin/helpers/format";
import { Inventory } from "../../src/plugin/inventory";
import type { AnatomyElement, DataModel, NodeSizing, Settings } from "../../src/plugin/types";

/** Mirrors `applyNodeSizing` in src/code.ts. */
function applyNodeSizing(elements: AnatomyElement[], sizing: NodeSizing[]) {
  if (sizing.length === 0) return;
  const sizingMap = new Map(sizing.map((s) => [s.nodeId, s]));
  elements.forEach((el) => {
    const own = el.nodeId ? sizingMap.get(el.nodeId) : undefined;
    if (!own) return;
    if (own.w) el.layoutWSizing = own.w;
    if (own.h) el.layoutHSizing = own.h;
    if (own.grow) el.layoutGrow = own.grow;
  });
}

function makeDeps() {
  return {
    createSectionFrame: (() => {
      throw new Error("canvas deps are not exercised by the data payload");
    }) as any,
    createText: (() => {
      throw new Error("canvas deps are not exercised by the data payload");
    }) as any,
    createContentCard: (() => {
      throw new Error("canvas deps are not exercised by the data payload");
    }) as any,
    fitTextToWidth: () => undefined,
    getSectionContentWidth: () => 800,
    truncateText,
    log: () => undefined
  };
}

export type PipelineResult = {
  payload: any;
  yaml: string;
  dataModel: DataModel;
};

export async function runPipeline(
  root: SceneNode,
  settings: Settings,
  includeAttributes = false
): Promise<PipelineResult> {
  const inventory = new Inventory();

  const { elements, instanceTemplates, dedupedNodeIds } = await collectAnatomyElements(
    root,
    inventory,
    settings
  );

  const dataModel: DataModel = {
    anatomy: elements,
    properties: [],
    instanceTemplates
  };

  const layoutData = collectLayoutData(root, dedupedNodeIds);
  const nodeSizing = collectNodeSizing(root, dedupedNodeIds);

  // — identical to src/code.ts: layout merge, then node-own sizing wins —
  const layoutMap = new Map(layoutData.map((s) => [s.nodeId, s]));
  dataModel.anatomy.forEach((el) => {
    const ls = el.nodeId ? layoutMap.get(el.nodeId) : undefined;
    if (!ls) return;
    el.layoutDirection = ls.layoutMode;
    el.layoutJustify = ls.primaryAxisAlignItems;
    el.layoutAlignItems = ls.counterAxisAlignItems;
    el.layoutWSizing = ls.layoutMode === "HORIZONTAL" ? ls.primaryAxisSizingMode : ls.counterAxisSizingMode;
    el.layoutHSizing = ls.layoutMode === "HORIZONTAL" ? ls.counterAxisSizingMode : ls.primaryAxisSizingMode;
    if (ls.clipsContent) el.layoutClips = true;
    if (ls.inferred) el.layoutInferred = true;
  });
  layoutData.forEach((ls) => {
    if (dataModel.anatomy.some((el) => el.nodeId === ls.nodeId)) return;
    dataModel.anatomy.push({
      name: ls.name,
      type: ls.type,
      attributes: [],
      bounds: ls.bounds,
      nodeId: ls.nodeId,
      pathKey: ls.pathKey,
      layoutDirection: ls.layoutMode,
      layoutJustify: ls.primaryAxisAlignItems,
      layoutAlignItems: ls.counterAxisAlignItems,
      layoutWSizing: ls.layoutMode === "HORIZONTAL" ? ls.primaryAxisSizingMode : ls.counterAxisSizingMode,
      layoutHSizing: ls.layoutMode === "HORIZONTAL" ? ls.counterAxisSizingMode : ls.primaryAxisSizingMode,
      layoutClips: ls.clipsContent || undefined,
      layoutInferred: ls.inferred || undefined
    });
  });
  applyNodeSizing(dataModel.anatomy, nodeSizing);

  const payload = stripNulls(
    toAgentReadyDataPayload(dataModel, includeAttributes, root, settings, inventory, makeDeps())
  );

  return { payload, yaml: toYaml(payload), dataModel };
}

/** Every anatomy record across every anatomy chunk, keyed by node_id. */
export function anatomyRecords(payload: any): Map<string, any> {
  const byId = new Map<string, any>();
  for (const chunk of payload.chunks ?? []) {
    if (chunk.kind !== "anatomy") continue;
    for (const item of chunk.items ?? []) byId.set(item.node_id, item);
  }
  return byId;
}
