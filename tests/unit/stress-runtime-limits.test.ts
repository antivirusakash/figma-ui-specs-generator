import { afterEach, describe, expect, it, vi } from "vitest";
import { toAgentReadyDataPayload } from "../../src/plugin/sections/data-section";
import { clearRuntimeLimitOverrides, COMPLEXITY_TIER_LIMIT_OVERRIDES, setRuntimeLimitOverrides } from "../../src/plugin/limits";
import type { DataModel, Settings } from "../../src/plugin/types";

function makeLargeDataModel(anatomyCount: number): DataModel {
  return {
    anatomy: Array.from({ length: anatomyCount }, (_, index) => ({
      name: `Node ${index + 1}`,
      type: index % 7 === 0 ? "INSTANCE" : "FRAME",
      nodeId: `1:${index + 1}`,
      pathKey: `root/Node${index + 1}`,
      attributes: [],
      bounds: { x: 0, y: index * 2, width: 300, height: 48 },
      textContent: undefined,
      childrenText: undefined
    })),
    properties: [],
    instanceTemplates: []
  };
}

function makeDeps() {
  return {
    createSectionFrame: vi.fn(),
    createText: vi.fn(),
    createContentCard: vi.fn(),
    fitTextToWidth: vi.fn(),
    getSectionContentWidth: vi.fn(() => 800),
    truncateText: (value: string, maxLength: number) => value.slice(0, maxLength),
    log: vi.fn()
  };
}

const settings: Settings = {
  anatomy: true,
  tabularAnatomy: false,
  completeAnatomy: false,
  includeNestedComponents: false,
  properties: false,
  twoWay: false,
  twoWayPropA: "",
  twoWayPropB: "",
  layout: false,
  data: true,
  inventory: false,
  variables: false,
  modes: false,
  includeDataAttributes: false,
  agentReadyData: true,
  aiCompactMode: true,
  showOuterLayout: false,
  multiColumn: false,
  columnCount: 2,
  colorFormat: "hex",
  typographyFormat: true,
  spacingUnit: "px",
  remBase: 16,
  valuePrecision: 2,
  showRawValues: false,
  valuePreference: "variable",
  framework: "auto",
  schemaVersion: "v14"
};

const target = { id: "1:999", name: "Stress Frame", type: "FRAME" } as unknown as SceneNode;
const inventory = { getVariableIds: () => [] } as any;

describe("runtime limit stress handling", () => {
  afterEach(() => {
    clearRuntimeLimitOverrides();
  });

  it("truncates large anatomy payloads at default cap", () => {
    const payload = toAgentReadyDataPayload(
      makeLargeDataModel(4500),
      false,
      target,
      settings,
      inventory,
      makeDeps()
    );

    expect(payload.summary.truncated.anatomy).toBe(true);
    expect(payload.summary.truncated.anatomy_included).toBe(4000);
    expect(payload.summary.runtime_budget.max_anatomy_records).toBe(4000);
  });

  it("keeps large anatomy payloads when enterprise overrides are active", () => {
    setRuntimeLimitOverrides(COMPLEXITY_TIER_LIMIT_OVERRIDES.enterprise);
    const payload = toAgentReadyDataPayload(
      makeLargeDataModel(4500),
      false,
      target,
      settings,
      inventory,
      makeDeps()
    );

    expect(payload.summary.truncated.anatomy).toBe(false);
    expect(payload.summary.truncated.anatomy_included).toBe(4500);
    expect(payload.summary.runtime_budget.max_anatomy_records).toBe(12000);
  });
});
