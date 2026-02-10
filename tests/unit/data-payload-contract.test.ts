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

  it("includes path on text_index entries", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
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

  it("anatomy chunks include repeat node_ids in v11", () => {
    const payload = toAgentReadyDataPayload(
      makeDataModel(), false, makeTarget(),
      { ...baseSettings, schemaVersion: "v11" },
      makeInventory(), makeDeps()
    );
    const anatomyChunk = payload.chunks.find((c: any) => c.kind === "anatomy");
    // 1:4 is a repeat node and should be in anatomy in v11
    const allNodeIds = anatomyChunk.items.map((i: any) => i.node_id);
    expect(allNodeIds).toContain("1:4");
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
      // Should contain the original diff values (possibly fewer due to width dedup)
      expect(decoded["Card/text"]).toBe("Item 2");
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
