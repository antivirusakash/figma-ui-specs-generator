import { describe, it, expect, vi } from "vitest";
import { toAgentReadyDataPayload, stripNulls } from "../../src/plugin/sections/data-section";
import type { DataModel, Settings } from "../../src/plugin/types";
import { decodeDiffs } from "../../src/plugin/helpers/v12-repeat-diff";

// Minimal fixture
function makeDataModel(): DataModel {
  return {
    anatomy: [
      {
        name: "Header",
        type: "FRAME",
        nodeId: "1:1",
        pathKey: "root/Header",
        attributes: [{ key: "Fill", value: "#FF0000", format: "HARDCODED" }],
        bounds: { x: 0, y: 0, width: 375, height: 64 },
        textContent: undefined,
        childrenText: undefined,
      },
      {
        name: "Title",
        type: "TEXT",
        nodeId: "1:2",
        pathKey: "root/Header/Title",
        attributes: [{ key: "Fill", value: "#000000", format: "HARDCODED" }],
        bounds: { x: 16, y: 16, width: 200, height: 24 },
        textContent: "Hello World",
        childrenText: undefined,
      },
      {
        name: "Card",
        type: "INSTANCE",
        nodeId: "1:3",
        pathKey: "root/Card",
        instanceOf: "CardComponent",
        attributes: [],
        bounds: { x: 0, y: 64, width: 375, height: 200 },
        childrenText: ["Item 1", "Description"],
      },
      // Repeat instance (same fingerprint as Card)
      {
        name: "Card",
        type: "INSTANCE",
        nodeId: "1:4",
        pathKey: "root/Card[2]",
        instanceOf: "CardComponent",
        attributes: [],
        bounds: { x: 0, y: 264, width: 375, height: 200 },
        childrenText: ["Item 2", "Other desc"],
      },
    ],
    properties: [
      {
        name: "Size",
        type: "VARIANT",
        default: "Medium",
        options: [
          {
            name: "Small",
            elements: [{ name: "Header", type: "FRAME", nodeId: "1:1", attributes: [] }],
            differences: ["Header height changed from 64 to 48"],
          },
        ],
      },
    ],
    instanceTemplates: [
      {
        templateNodeId: "1:3",
        templatePathKey: "root/Card",
        fingerprint: "fp1",
        instanceOf: "CardComponent",
        repeatCount: 1,
        varyingKeys: ["Card/text", "Card/width"],
        repeats: [
          {
            nodeId: "1:4",
            pathKey: "root/Card[2]",
            bounds: { x: 0, y: 264, width: 375, height: 200 },
            childrenText: ["Item 2", "Other desc"],
            diffs: { "Card/text": "Item 2", "Card/width": "300" },
          },
        ],
      },
    ],
  };
}

function makeDeps() {
  return {
    createSectionFrame: vi.fn(),
    createText: vi.fn(),
    createContentCard: vi.fn(),
    fitTextToWidth: vi.fn(),
    getSectionContentWidth: vi.fn(() => 800),
    truncateText: vi.fn((v: string) => v),
    log: vi.fn(),
  };
}

function makeTarget() {
  return {
    id: "99:1",
    name: "TestComponent",
    type: "COMPONENT",
  } as unknown as SceneNode;
}

function makeInventory() {
  return {
    getVariableIds: () => [],
  } as any;
}

const baseSettings: Settings = {
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
  schemaVersion: "v11",
};

// ─── v11 Contract Tests ───────────────────────────────────────

describe("v11 contract", () => {
  it("emits v11 schema string", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    expect(payload.schema).toBe("specs-plugin.agent_pack.v11.yaml.compact");
  });

  it("includes path_key on anatomy items", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    expect(anatomyChunk).toBeDefined();
    for (const item of anatomyChunk.items) {
      expect(item).toHaveProperty("path_key");
    }
  });

  it("includes template_path_key on repeats chunks", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    expect(repeatsChunk).toBeDefined();
    expect(repeatsChunk).toHaveProperty("template_path_key");
  });

  it("includes path_key on repeat items", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    for (const item of repeatsChunk.items) {
      expect(item).toHaveProperty("path_key");
    }
  });

  it("includes path on text_index entries (non-compact)", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, aiCompactMode: false, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    expect(payload.text_index).toBeDefined();
    expect(payload.text_index.length).toBeGreaterThan(0);
    for (const entry of payload.text_index) {
      expect(entry).toHaveProperty("path");
    }
  });

  it("includes path_range on anatomy chunks", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    expect(anatomyChunk).toHaveProperty("path_range");
  });

  it("diffs are Record<string, string> (not array)", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    for (const item of repeatsChunk.items) {
      expect(typeof item.diffs).toBe("object");
      expect(Array.isArray(item.diffs)).toBe(false);
    }
  });

  it("mcp_playbook.preferred_keys includes path_key", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    expect(payload.mcp_playbook.preferred_keys).toContain("path_key");
  });

  it("anatomy chunks exclude repeat node_ids in v11", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    // 1:4 is a repeat item, 1:3 is a repeat template — both excluded from anatomy
    const allNodeIds = anatomyChunk.items.map((i: any) => i.node_id);
    expect(allNodeIds).not.toContain("1:4");
    expect(allNodeIds).not.toContain("1:3");
  });
});

// ─── v12 Contract Tests ───────────────────────────────────────

describe("v12 contract", () => {
  it("emits v12 schema string", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v12" },
      makeInventory(), makeDeps()
    );
    expect(payload.schema).toBe("specs-plugin.agent_pack.v12.yaml.compact");
  });

  it("omits path_key from anatomy items", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v12" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    for (const item of anatomyChunk.items) {
      expect(item).not.toHaveProperty("path_key");
    }
  });

  it("omits template_path_key from repeats chunks", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v12" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    expect(repeatsChunk).not.toHaveProperty("template_path_key");
  });

  it("omits path_key from repeat items", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v12" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    for (const item of repeatsChunk.items) {
      expect(item).not.toHaveProperty("path_key");
    }
  });

  it("omits path_range from anatomy chunks", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v12" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    expect(anatomyChunk).not.toHaveProperty("path_range");
  });

  it("omits text_index entirely", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v12" },
      makeInventory(), makeDeps()
    );
    expect(payload.text_index).toBeUndefined();
  });

  it("diffs are encoded as array (indexed tuples)", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v12" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    for (const item of repeatsChunk.items) {
      expect(Array.isArray(item.diffs)).toBe(true);
    }
  });

  it("indexed diffs roundtrip to original values", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v12" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    const varyingKeys = repeatsChunk.varying_keys;
    for (const item of repeatsChunk.items) {
      const decoded = decodeDiffs(item.diffs, varyingKeys);
      // No cascade in this fixture (Card/width has no child width), both survive
      expect(decoded["Card/text"]).toBe("Item 2");
      expect(decoded["Card/width"]).toBe("300");
      expect(Object.keys(decoded)).toHaveLength(2);
    }
  });

  it("mcp_playbook.preferred_keys does NOT include path_key", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v12" },
      makeInventory(), makeDeps()
    );
    expect(payload.mcp_playbook.preferred_keys).not.toContain("path_key");
  });

  it("anatomy chunks exclude repeat node_ids (O1)", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v12" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    const anatomyNodeIds = new Set(anatomyChunk.items.map((i: any) => i.node_id));
    const repeatNodeIds = new Set(repeatsChunk.items.map((i: any) => i.node_id));
    // No overlap
    for (const nid of repeatNodeIds) {
      expect(anatomyNodeIds.has(nid)).toBe(false);
    }
  });

  it("varying_keys are sorted alphabetically", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v12" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    const keys = repeatsChunk.varying_keys;
    const sorted = [...keys].sort();
    expect(keys).toEqual(sorted);
  });
});

// ─── v13 Contract Tests ───────────────────────────────────────

describe("v13 contract", () => {
  function makeV13DataModel(): DataModel {
    const model = makeDataModel();
    model.componentDefinition = {
      componentSetName: "Button",
      baseNodeId: "1:1",
      properties: [
        { name: "Size", type: "VARIANT", default: "Medium", options: ["Small", "Medium", "Large"] },
        { name: "Show Icon", type: "BOOLEAN", default: true, options: ["true", "false"] },
      ],
      variantDiffs: [
        {
          config: { Size: "Small" },
          changes: { "1:1": { h: 36, Fill: "#CCCCCC" } },
        },
        {
          config: { Size: "Large" },
          changes: { "1:1": { h: 72 } },
        },
        {
          config: { "Show Icon": false },
          changes: { "1:3": { visible: false } },
          removed: ["1:99"],
        },
      ],
    };
    return model;
  }

  it("emits v13 schema string", () => {
    const payload = toAgentReadyDataPayload(
      makeV13DataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v13" },
      makeInventory(), makeDeps()
    );
    expect(payload.schema).toBe("specs-plugin.agent_pack.v13.yaml.compact");
  });

  it("includes component_definition chunk", () => {
    const payload = toAgentReadyDataPayload(
      makeV13DataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v13" },
      makeInventory(), makeDeps()
    );
    const defChunk = payload.chunks.find((c: any) => c.kind === "component_definition");
    expect(defChunk).toBeDefined();
    expect(defChunk.component_set).toBe("Button");
    expect(defChunk.base_node_id).toBe("1:1");
  });

  it("component_definition has property schema", () => {
    const payload = toAgentReadyDataPayload(
      makeV13DataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v13" },
      makeInventory(), makeDeps()
    );
    const defChunk = payload.chunks.find((c: any) => c.kind === "component_definition");
    expect(defChunk.properties).toHaveLength(2);
    expect(defChunk.properties[0].name).toBe("Size");
    expect(defChunk.properties[0].type).toBe("VARIANT");
    expect(defChunk.properties[0].default).toBe("Medium");
    expect(defChunk.properties[0].options).toEqual(["Small", "Medium", "Large"]);
  });

  it("component_definition has variant_diffs", () => {
    const payload = toAgentReadyDataPayload(
      makeV13DataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v13" },
      makeInventory(), makeDeps()
    );
    const defChunk = payload.chunks.find((c: any) => c.kind === "component_definition");
    expect(defChunk.variant_diffs).toHaveLength(3);
    // First diff: Size=Small
    expect(defChunk.variant_diffs[0].config).toEqual({ Size: "Small" });
    expect(defChunk.variant_diffs[0].changes["1:1"].h).toBe(36);
    expect(defChunk.variant_diffs[0].changes["1:1"].Fill).toBe("#CCCCCC");
  });

  it("variant_diffs include added/removed when present", () => {
    const payload = toAgentReadyDataPayload(
      makeV13DataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v13" },
      makeInventory(), makeDeps()
    );
    const defChunk = payload.chunks.find((c: any) => c.kind === "component_definition");
    const iconDiff = defChunk.variant_diffs.find((d: any) => d.config["Show Icon"] === false);
    expect(iconDiff).toBeDefined();
    expect(iconDiff.removed).toEqual(["1:99"]);
  });

  it("skips properties chunks when component_definition exists", () => {
    const payload = toAgentReadyDataPayload(
      makeV13DataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v13" },
      makeInventory(), makeDeps()
    );
    const propChunks = payload.chunks.filter((c: any) => c.kind === "properties");
    expect(propChunks).toHaveLength(0);
  });

  it("still includes anatomy chunks (filtered like v12)", () => {
    const payload = toAgentReadyDataPayload(
      makeV13DataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v13" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    expect(anatomyChunk).toBeDefined();
    // Repeat node 1:4 should be excluded (v12/v13 O1)
    const nodeIds = anatomyChunk.items.map((i: any) => i.node_id);
    expect(nodeIds).not.toContain("1:4");
  });

  it("still includes repeats chunks", () => {
    const payload = toAgentReadyDataPayload(
      makeV13DataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v13" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    expect(repeatsChunk).toBeDefined();
  });

  it("inherits v12 optimizations (no path_key)", () => {
    const payload = toAgentReadyDataPayload(
      makeV13DataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v13" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    for (const item of anatomyChunk.items) {
      expect(item).not.toHaveProperty("path_key");
    }
    expect(payload.text_index).toBeUndefined();
  });

  it("summary includes component_definition flag", () => {
    const payload = toAgentReadyDataPayload(
      makeV13DataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v13" },
      makeInventory(), makeDeps()
    );
    expect(payload.summary.component_definition).toBe(true);
    expect(payload.summary.variant_diffs_total).toBe(3);
  });

  it("no component_definition chunk when dataModel lacks it", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v13" },
      makeInventory(), makeDeps()
    );
    const defChunk = payload.chunks.find((c: any) => c.kind === "component_definition");
    expect(defChunk).toBeUndefined();
    // Properties should be included when no component_definition
    const propChunks = payload.chunks.filter((c: any) => c.kind === "properties");
    expect(propChunks.length).toBeGreaterThan(0);
  });
});

// ─── v14 CSS Default Omission ─────────────────────────────────

describe("v14 CSS default omission", () => {
  function makeModelWithLayout(overrides: Partial<DataModel["anatomy"][0]> = {}): DataModel {
    return {
      anatomy: [
        {
          name: "Container",
          type: "FRAME",
          nodeId: "7:1",
          pathKey: "root/Container",
          attributes: [],
          bounds: { x: 0, y: 0, width: 200, height: 100 },
          layoutDirection: "HORIZONTAL",
          layoutJustify: "MIN",
          layoutAlignItems: "MIN",
          layoutWSizing: "FIXED",
          layoutHSizing: "HUG",
          ...overrides,
        },
      ],
      properties: [],
      instanceTemplates: [],
    };
  }

  it("omits justify: flex-start in v14", () => {
    const payload = toAgentReadyDataPayload(
      makeModelWithLayout(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v14" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    const item = anatomyChunk.items.find((i: any) => i.node_id === "7:1");
    expect(item.justify).toBeUndefined();
  });

  it("omits align: flex-start in v14", () => {
    const payload = toAgentReadyDataPayload(
      makeModelWithLayout(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v14" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    const item = anatomyChunk.items.find((i: any) => i.node_id === "7:1");
    expect(item.align).toBeUndefined();
  });

  it("omits direction: row in v14", () => {
    const payload = toAgentReadyDataPayload(
      makeModelWithLayout(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v14" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    const item = anatomyChunk.items.find((i: any) => i.node_id === "7:1");
    expect(item.direction).toBeUndefined();
  });

  it("preserves non-default justify in v14", () => {
    const payload = toAgentReadyDataPayload(
      makeModelWithLayout({ layoutJustify: "CENTER" }), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v14" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    const item = anatomyChunk.items.find((i: any) => i.node_id === "7:1");
    expect(item.justify).toBe("center");
  });

  it("preserves non-default align in v14", () => {
    const payload = toAgentReadyDataPayload(
      makeModelWithLayout({ layoutAlignItems: "MAX" }), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v14" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    const item = anatomyChunk.items.find((i: any) => i.node_id === "7:1");
    expect(item.align).toBe("flex-end");
  });

  it("preserves non-default direction in v14", () => {
    const payload = toAgentReadyDataPayload(
      makeModelWithLayout({ layoutDirection: "VERTICAL" }), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v14" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    const item = anatomyChunk.items.find((i: any) => i.node_id === "7:1");
    expect(item.direction).toBe("column");
  });

  it("includes defaults_omitted map in v14", () => {
    const payload = toAgentReadyDataPayload(
      makeModelWithLayout(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v14" },
      makeInventory(), makeDeps()
    );
    expect(payload.defaults_omitted).toBeDefined();
    expect(payload.defaults_omitted).toEqual({
      justify: "flex-start",
      align: "flex-start",
      direction: "row",
    });
  });

  it("no defaults_omitted in v13", () => {
    const payload = toAgentReadyDataPayload(
      makeModelWithLayout(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v13" },
      makeInventory(), makeDeps()
    );
    expect(payload.defaults_omitted).toBeUndefined();
  });

  it("v14 inherits v13 optimizations", () => {
    const payload = toAgentReadyDataPayload(
      makeModelWithLayout(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v14" },
      makeInventory(), makeDeps()
    );
    // v14 schema string
    expect(payload.schema).toBe("specs-plugin.agent_pack.v14.yaml.compact");
    // inherits v12: no path_key
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    for (const item of anatomyChunk.items) {
      expect(item).not.toHaveProperty("path_key");
    }
    // inherits v12: no text_index
    expect(payload.text_index).toBeUndefined();
    // inherits compact: no node_ids on chunk level
    expect(anatomyChunk).not.toHaveProperty("node_ids");
  });
});

// ─── Attribute → payload field mapping ────────────────────────

describe("attribute field mapping", () => {
  function makeModelWithAttr(attr: { key: string; value: string; format: string }): DataModel {
    return {
      anatomy: [
        {
          name: "Box",
          type: "FRAME",
          nodeId: "2:1",
          pathKey: "root/Box",
          attributes: [attr],
          bounds: { x: 0, y: 0, width: 100, height: 100 },
          textContent: undefined,
          childrenText: undefined,
        },
      ],
      properties: [],
      instanceTemplates: [],
    };
  }

  it("text_align attribute maps to text_align field", () => {
    const model = makeModelWithAttr({ key: "Text align", value: "center", format: "HARDCODED" });
    const payload = toAgentReadyDataPayload(
      model, false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    const item = anatomyChunk.items.find((i: any) => i.node_id === "2:1");
    expect(item.text_align).toBe("center");
  });

  it("shadow attribute with rgba maps to shadow field", () => {
    const model = makeModelWithAttr({ key: "Shadow", value: "0px 4px 8px rgba(0,0,0,0.25)", format: "HARDCODED" });
    const payload = toAgentReadyDataPayload(
      model, false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    const item = anatomyChunk.items.find((i: any) => i.node_id === "2:1");
    expect(item.shadow).toBe("0px 4px 8px rgba(0,0,0,0.25)");
  });

  it("stroke_sides attribute with border-* maps to stroke_sides field", () => {
    const model = makeModelWithAttr({ key: "Stroke sides", value: "border-bottom: 1px", format: "HARDCODED" });
    const payload = toAgentReadyDataPayload(
      model, false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    const item = anatomyChunk.items.find((i: any) => i.node_id === "2:1");
    expect(item.stroke_sides).toBe("border-bottom: 1px");
  });
});

// ─── Non-compact mode ─────────────────────────────────────────

describe("non-compact mode", () => {
  it("emits v11 non-compact schema", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, aiCompactMode: false, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    expect(payload.schema).toBe("specs-plugin.agent_pack.v11.yaml");
  });

  it("v12 is ignored when compact is off", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, aiCompactMode: false, schemaVersion: "v12" },
      makeInventory(), makeDeps()
    );
    // isV12 = compact && schemaVersion === "v12", so with compact off it should be v11
    expect(payload.schema).toBe("specs-plugin.agent_pack.v11.yaml");
  });
});

// ─── Width dedup in v11 ───────────────────────────────────────

describe("width dedup applies to all schema versions", () => {
  function makeModelWithWidthCascade(): DataModel {
    return {
      anatomy: [
        {
          name: "Outer",
          type: "FRAME",
          nodeId: "3:1",
          pathKey: "root/Outer",
          attributes: [],
          bounds: { x: 0, y: 0, width: 200, height: 100 },
        },
      ],
      properties: [],
      instanceTemplates: [
        {
          templateNodeId: "3:1",
          templatePathKey: "root/Outer",
          fingerprint: "fp2",
          instanceOf: "OuterComponent",
          repeatCount: 1,
          varyingKeys: ["Outer/width", "Outer/Inner/width", "Outer/Inner/Deep/width", "Outer/text"],
          repeats: [
            {
              nodeId: "3:2",
              pathKey: "root/Outer[2]",
              bounds: { x: 0, y: 100, width: 200, height: 100 },
              childrenText: [],
              diffs: {
                "Outer/width": "86",
                "Outer/Inner/width": "86",
                "Outer/Inner/Deep/width": "86",
                "Outer/text": "Hello",
              },
            },
          ],
        },
      ],
    };
  }

  it("v11 deduplicates cascading width diffs", () => {
    const payload = toAgentReadyDataPayload(
      makeModelWithWidthCascade(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    const item = repeatsChunk.items[0];
    // Only outermost width should survive
    expect(item.diffs["Outer/width"]).toBe("86");
    expect(item.diffs["Outer/Inner/width"]).toBeUndefined();
    expect(item.diffs["Outer/Inner/Deep/width"]).toBeUndefined();
    expect(item.diffs["Outer/text"]).toBe("Hello");
  });

  it("varying_keys are pruned after width dedup in v11", () => {
    const payload = toAgentReadyDataPayload(
      makeModelWithWidthCascade(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    expect(repeatsChunk.varying_keys).toContain("Outer/width");
    expect(repeatsChunk.varying_keys).toContain("Outer/text");
    expect(repeatsChunk.varying_keys).not.toContain("Outer/Inner/width");
    expect(repeatsChunk.varying_keys).not.toContain("Outer/Inner/Deep/width");
  });

  it("does not dedup sibling widths with same value", () => {
    const model: DataModel = {
      anatomy: [
        {
          name: "Container",
          type: "FRAME",
          nodeId: "6:1",
          pathKey: "root/Container",
          attributes: [],
          bounds: { x: 0, y: 0, width: 200, height: 100 },
        },
      ],
      properties: [],
      instanceTemplates: [
        {
          templateNodeId: "6:1",
          templatePathKey: "root/Container",
          fingerprint: "fp3",
          instanceOf: "ContainerComponent",
          repeatCount: 1,
          varyingKeys: ["A/width", "B/width"],
          repeats: [
            {
              nodeId: "6:2",
              pathKey: "root/Container[2]",
              bounds: { x: 0, y: 100, width: 200, height: 100 },
              childrenText: [],
              diffs: { "A/width": "86", "B/width": "86" },
            },
          ],
        },
      ],
    };
    const payload = toAgentReadyDataPayload(
      model, false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    const item = repeatsChunk.items[0];
    // Siblings (not parent-child) should both survive
    expect(item.diffs["A/width"]).toBe("86");
    expect(item.diffs["B/width"]).toBe("86");
  });

  it("varying_keys are pruned after width dedup in v12", () => {
    const payload = toAgentReadyDataPayload(
      makeModelWithWidthCascade(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v12" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    expect(repeatsChunk.varying_keys).toContain("Outer/text");
    expect(repeatsChunk.varying_keys).toContain("Outer/width");
    expect(repeatsChunk.varying_keys).not.toContain("Outer/Inner/width");
    expect(repeatsChunk.varying_keys).not.toContain("Outer/Inner/Deep/width");
  });
});

// ─── Padding zero filter ──────────────────────────────────────

describe("padding zero filter", () => {
  function makeModelWithPadding(paddingValue: string): DataModel {
    return {
      anatomy: [
        {
          name: "Box",
          type: "FRAME",
          nodeId: "4:1",
          pathKey: "root/Box",
          attributes: [{ key: "Padding", value: paddingValue, rawValue: paddingValue, format: "HARDCODED" }],
          bounds: { x: 0, y: 0, width: 100, height: 100 },
        },
      ],
      properties: [],
      instanceTemplates: [],
    };
  }

  it("filters padding '0' after simplification", () => {
    // "0 0 0 0" is already filtered by the pre-check, but "0" (simplified from e.g. "0 0 0 0" rawValue)
    // could slip through. Test with a value that simplifies to "0".
    const model = makeModelWithPadding("0");
    const payload = toAgentReadyDataPayload(
      model, false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    const item = anatomyChunk.items.find((i: any) => i.node_id === "4:1");
    expect(item.padding).toBeUndefined();
  });

  it("keeps non-zero padding", () => {
    const model = makeModelWithPadding("16 24 16 24");
    const payload = toAgentReadyDataPayload(
      model, false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    const item = anatomyChunk.items.find((i: any) => i.node_id === "4:1");
    expect(item.padding).toBeDefined();
  });
});

// ─── Template attributes on repeats ───────────────────────────

describe("template_attributes on repeats chunks", () => {
  it("includes template_attributes with w/h from template element", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    expect(repeatsChunk).toBeDefined();
    expect(repeatsChunk.template_attributes).toBeDefined();
    // Template node 1:3 has bounds 375×200
    expect(repeatsChunk.template_attributes.w).toBe(375);
    expect(repeatsChunk.template_attributes.h).toBe(200);
  });

  it("template_attributes does not include identity fields", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    const attrs = repeatsChunk.template_attributes;
    // Identity fields are on the chunk itself, not duplicated in template_attributes
    expect(attrs.node_id).toBeUndefined();
    expect(attrs.name).toBeUndefined();
    expect(attrs.type).toBeUndefined();
    expect(attrs.instance_of).toBeUndefined();
  });

  it("template_attributes includes children_text from template element", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    expect(repeatsChunk.template_attributes.children_text).toEqual(["Item 1", "Description"]);
  });
});

// ─── Empty repeats chunk filtering ────────────────────────────

describe("empty repeats chunk filtering", () => {
  function makeModelWithEmptyRepeats(): DataModel {
    return {
      anatomy: [
        {
          name: "Logo",
          type: "INSTANCE",
          nodeId: "5:1",
          pathKey: "root/Logo",
          instanceOf: "LogoComponent",
          attributes: [],
          bounds: { x: 0, y: 0, width: 100, height: 40 },
        },
        {
          name: "Logo",
          type: "INSTANCE",
          nodeId: "5:2",
          pathKey: "root/Logo[2]",
          instanceOf: "LogoComponent",
          attributes: [],
          bounds: { x: 0, y: 100, width: 100, height: 40 },
        },
      ],
      properties: [],
      instanceTemplates: [
        {
          templateNodeId: "5:1",
          templatePathKey: "root/Logo",
          fingerprint: "fp_logo",
          instanceOf: "LogoComponent",
          repeatCount: 1,
          varyingKeys: [],
          repeats: [
            {
              nodeId: "5:2",
              pathKey: "root/Logo[2]",
              bounds: { x: 0, y: 100, width: 100, height: 40 },
              childrenText: [],
              diffs: {},
            },
          ],
        },
      ],
    };
  }

  it("skips repeats chunks with empty varying_keys and empty diffs", () => {
    const payload = toAgentReadyDataPayload(
      makeModelWithEmptyRepeats(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const repeatsChunks = payload.chunks.filter((c: any) => c.kind === "repeats");
    expect(repeatsChunks).toHaveLength(0);
  });

  it("keeps repeats chunks with non-empty diffs", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const repeatsChunks = payload.chunks.filter((c: any) => c.kind === "repeats");
    expect(repeatsChunks.length).toBeGreaterThan(0);
  });
});

// ─── Compact mode size reductions (Phase 2) ───────────────────

describe("compact mode size reductions", () => {
  it("text_index omitted in v11 compact mode", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, aiCompactMode: true, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    expect(payload.text_index).toBeUndefined();
  });

  it("text_index present in v11 non-compact mode", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, aiCompactMode: false, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    expect(payload.text_index).toBeDefined();
    expect(payload.text_index.length).toBeGreaterThan(0);
  });

  it("node_ids omitted from anatomy chunks in compact mode", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, aiCompactMode: true, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    expect(anatomyChunk).toBeDefined();
    expect(anatomyChunk).not.toHaveProperty("node_ids");
  });

  it("node_ids present on anatomy chunks in non-compact mode", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, aiCompactMode: false, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    expect(anatomyChunk).toBeDefined();
    expect(anatomyChunk).toHaveProperty("node_ids");
    expect(Array.isArray(anatomyChunk.node_ids)).toBe(true);
  });

  it("children_text omitted from repeat items in compact mode", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, aiCompactMode: true, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    expect(repeatsChunk).toBeDefined();
    for (const item of repeatsChunk.items) {
      expect(item).not.toHaveProperty("children_text");
    }
  });

  it("children_text present on repeat items in non-compact mode", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, aiCompactMode: false, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const repeatsChunk = payload.chunks.find((c: any) => c.kind === "repeats");
    expect(repeatsChunk).toBeDefined();
    const itemWithText = repeatsChunk.items.find((i: any) => i.children_text);
    expect(itemWithText).toBeDefined();
    expect(itemWithText.children_text).toEqual(["Item 2", "Other desc"]);
  });
});
