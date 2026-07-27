import { describe, it, expect, beforeAll, beforeEach, vi } from "vitest";

// ─── Figma mock ───

type MockVariable = {
  id: string;
  name: string;
  variableCollectionId: string;
  valuesByMode: Record<string, any>;
};

const variables = new Map<string, MockVariable>();
const collections = new Map<string, any>();
const createdFrames: any[] = [];

function mockFrame() {
  const frame: any = {
    name: "",
    children: [] as any[],
    fills: [],
    appendChild: (child: any) => frame.children.push(child),
    resizeWithoutConstraints: () => {},
    remove: () => {},
  };
  createdFrames.push(frame);
  return frame;
}

beforeAll(() => {
  (globalThis as any).figma = {
    mixed: Symbol("figma.mixed"),
    createFrame: () => mockFrame(),
    variables: {
      getVariableByIdAsync: async (id: string) => variables.get(id) ?? null,
      getVariableCollectionByIdAsync: async (id: string) => collections.get(id) ?? null,
    },
  };
});

const mod = await import("../../src/plugin/sections/variables-section");
const { clearVariableCache } = await import("../../src/plugin/helpers/variable-resolver");

const settings: any = {
  spacingUnit: "px",
  remBase: 16,
  valuePrecision: 0,
  colorFormat: "hex",
  showRawValues: false,
  valuePreference: "variable",
  multiColumn: false,
  columnCount: 2,
};

const theme: any = { text: "#000000", muted: "#666666", bg: "#FFFFFF" };

// Captures every string that reaches the canvas, so "[object Object]" is detectable.
let emitted: string[] = [];
let wrapped: string[] = [];

function makeDeps(overrides: Record<string, any> = {}) {
  return {
    createSectionFrame: (title: string) => {
      const frame = mockFrame();
      frame.name = title;
      return frame;
    },
    createText: (text: string) => {
      emitted.push(text);
      return { characters: text, type: "TEXT" } as any;
    },
    fitTextToWidth: (node: any) => wrapped.push(node.characters),
    createContentCard: () => mockFrame(),
    createArtworkFrame: async () => mockFrame(),
    getSectionContentWidth: () => 800,
    truncateText: (value: string, maxLength: number) =>
      value.length <= maxLength ? value : `${value.slice(0, maxLength - 1)}…`,
    log: vi.fn(),
    logError: vi.fn(),
    ...overrides,
  } as any;
}

function inventoryWith(ids: string[]) {
  return { getVariableIds: () => ids } as any;
}

function defineCollection(id: string, name: string, modeIds: string[]) {
  collections.set(id, {
    id,
    name,
    defaultModeId: modeIds[0],
    modes: modeIds.map((modeId) => ({ modeId, name: modeId })),
  });
}

function defineVariable(id: string, name: string, valuesByMode: Record<string, any>, collectionId = "c1") {
  variables.set(id, { id, name, variableCollectionId: collectionId, valuesByMode });
}

function alias(id: string) {
  return { type: "VARIABLE_ALIAS", id };
}

beforeEach(() => {
  variables.clear();
  collections.clear();
  createdFrames.length = 0;
  emitted = [];
  wrapped = [];
  clearVariableCache();
});

describe("createVariablesSection", () => {
  it("renders an alias as a full chain, never '[object Object]'", async () => {
    defineCollection("c1", "Color", ["light"]);
    defineVariable("v1", "Semantic/Surface/Brand", { light: alias("v2") });
    defineVariable("v2", "Brand/Blue/500", { light: { r: 0.04, g: 0.4, b: 1, a: 1 } });

    await mod.createVariablesSection(inventoryWith(["v1"]), settings, theme, makeDeps());

    expect(emitted.join("\n")).not.toContain("[object Object]");
    // The header names the variable; the mode line resolves that mode's alias target onward.
    expect(emitted).toContain("Color / Semantic/Surface/Brand");
    expect(emitted).toContain("light: Color/Brand/Blue/500 -> #0A66FF");
  });

  it("preserves alpha on an RGBA variable instead of forcing opacity 1", async () => {
    defineCollection("c1", "Color", ["light"]);
    defineVariable("v1", "Overlay/Scrim", { light: { r: 0, g: 0, b: 0, a: 0.5 } });

    await mod.createVariablesSection(inventoryWith(["v1"]), settings, theme, makeDeps());

    expect(emitted).toContain("light: hsla(0, 0%, 0%, 0.50)");
  });

  it("marks a cyclic alias as unresolved rather than printing a wrong value", async () => {
    defineCollection("c1", "Color", ["light"]);
    defineVariable("v1", "A", { light: alias("v2") });
    defineVariable("v2", "B", { light: alias("v1") });

    await mod.createVariablesSection(inventoryWith(["v1"]), settings, theme, makeDeps());

    expect(emitted.join("\n")).toContain("(unresolved: alias cycle or depth limit)");
  });

  it("wraps the variable header instead of leaving it clipped", async () => {
    defineCollection("c1", "Color", ["light"]);
    const longName = "Group/".repeat(40) + "Leaf";
    defineVariable("v1", longName, { light: "#000000" });

    await mod.createVariablesSection(inventoryWith(["v1"]), settings, theme, makeDeps());

    const header = `Color / ${longName}`;
    expect(emitted).toContain(header);
    // The path is only ever capped by TRUNC_VARIABLE_PATH (4000), never by a name cap.
    expect(wrapped).toContain(header);
  });

  it("reports no bound variables without touching the variable API", async () => {
    const section = await mod.createVariablesSection(inventoryWith([]), settings, theme, makeDeps());
    expect(section.children.length).toBe(1);
    expect(emitted).toEqual(["No bound variables detected."]);
  });
});

describe("createModesSection", () => {
  const target: any = { clone: () => ({ setExplicitVariableModeForCollection: () => {}, remove: () => {} }) };

  it("keeps a variable whose modes alias different ids, even when both currently resolve alike", async () => {
    // The alias targets are resolved in their OWN collection's default mode, so two
    // genuinely per-mode aliases can coincide there (a multibrand primitives collection).
    // Collapsing them would drop a mode-varying variable from the Modes section entirely.
    defineCollection("c1", "Color", ["light", "dark"]);
    defineVariable("v1", "Semantic/Surface", { light: alias("a1"), dark: alias("a2") });
    defineVariable("a1", "Brand/Blue/500", { light: { r: 0, g: 0, b: 1, a: 1 } });
    defineVariable("a2", "Legacy/Blue", { light: { r: 0, g: 0, b: 1, a: 1 } });

    const section = await mod.createModesSection(target, inventoryWith(["v1"]), settings, theme, makeDeps());
    expect(section).not.toBeNull();
  });

  it("filters out a variable whose modes hold the identical value", async () => {
    defineCollection("c1", "Color", ["light", "dark"]);
    defineVariable("v1", "Semantic/Surface", {
      light: { r: 0, g: 0, b: 1, a: 1 },
      dark: { r: 0, g: 0, b: 1, a: 1 }
    });

    const section = await mod.createModesSection(target, inventoryWith(["v1"]), settings, theme, makeDeps());
    expect(section).toBeNull();
  });

  it("keeps a variable whose modes resolve to different primitives", async () => {
    defineCollection("c1", "Color", ["light", "dark"]);
    defineVariable("v1", "Semantic/Surface", { light: alias("a1"), dark: alias("a2") });
    defineVariable("a1", "Brand/White", { light: { r: 1, g: 1, b: 1, a: 1 } });
    defineVariable("a2", "Brand/Black", { light: { r: 0, g: 0, b: 0, a: 1 } });

    const section = await mod.createModesSection(target, inventoryWith(["v1"]), settings, theme, makeDeps());
    expect(section).not.toBeNull();
    // Lines are prefixed with the collection name so same-named variables stay distinguishable.
    expect(emitted).toContain("Color / Semantic/Surface: Color/Brand/White -> #FFFFFF");
    expect(emitted).toContain("Color / Semantic/Surface: Color/Brand/Black -> #000000");
  });

  it("returns null when there are no variables at all", async () => {
    const section = await mod.createModesSection(target, inventoryWith([]), settings, theme, makeDeps());
    expect(section).toBeNull();
  });
});
