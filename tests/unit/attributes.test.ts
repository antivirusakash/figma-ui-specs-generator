import { describe, it, expect, beforeAll } from "vitest";

// Mock Figma global
const FIGMA_MIXED = Symbol("figma.mixed");
beforeAll(() => {
  (globalThis as any).figma = { mixed: FIGMA_MIXED };
});

const mod = await import("../../src/plugin/helpers/attributes");

// Helper to create a minimal mock TextNode with getStyledTextSegments
function mockTextNode(segments: Array<{ characters: string; fills: any[] }>): any {
  return {
    type: "TEXT",
    name: "test-text",
    fills: FIGMA_MIXED,
    getStyledTextSegments: (_fields: string[]) => segments,
  };
}

function solidFill(hex: string, visible = true): any {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return { type: "SOLID", color: { r, g, b }, visible, opacity: 1 };
}

// ─── mergeAdjacentSameFill ───

describe("mergeAdjacentSameFill", () => {
  it("extracts two segments with different fills", () => {
    const node = mockTextNode([
      { characters: "53mg", fills: [solidFill("#FFFFFF")] },
      { characters: " / 100mg", fills: [solidFill("#929299")] },
    ]);
    const result = mod.mergeAdjacentSameFill(node);
    expect(result).toEqual([
      { text: "53mg", fill: "#FFFFFF" },
      { text: " / 100mg", fill: "#929299" },
    ]);
  });

  it("merges adjacent segments with the same fill", () => {
    const node = mockTextNode([
      { characters: "Hello", fills: [solidFill("#FF0000")] },
      { characters: " World", fills: [solidFill("#FF0000")] },
      { characters: "!", fills: [solidFill("#00FF00")] },
    ]);
    const result = mod.mergeAdjacentSameFill(node);
    expect(result).toEqual([
      { text: "Hello World", fill: "#FF0000" },
      { text: "!", fill: "#00FF00" },
    ]);
  });

  it("returns single segment for uniform fill", () => {
    const node = mockTextNode([
      { characters: "All", fills: [solidFill("#AABBCC")] },
      { characters: " same", fills: [solidFill("#AABBCC")] },
    ]);
    const result = mod.mergeAdjacentSameFill(node);
    expect(result).toEqual([{ text: "All same", fill: "#AABBCC" }]);
  });

  it("caps at 10 segments", () => {
    const segments = Array.from({ length: 15 }, (_, i) => ({
      characters: `s${i}`,
      fills: [solidFill(`#${(i * 17).toString(16).padStart(2, "0")}0000`)],
    }));
    const node = mockTextNode(segments);
    const result = mod.mergeAdjacentSameFill(node);
    expect(result.length).toBeLessThanOrEqual(10);
  });

  it("skips segments with no visible solid fill", () => {
    const node = mockTextNode([
      { characters: "visible", fills: [solidFill("#FF0000")] },
      { characters: "hidden", fills: [solidFill("#00FF00", false)] },
      { characters: "also visible", fills: [solidFill("#0000FF")] },
    ]);
    const result = mod.mergeAdjacentSameFill(node);
    expect(result).toEqual([
      { text: "visible", fill: "#FF0000" },
      { text: "also visible", fill: "#0000FF" },
    ]);
  });

  it("returns empty array when getStyledTextSegments throws", () => {
    const node = {
      type: "TEXT",
      name: "broken",
      fills: FIGMA_MIXED,
      getStyledTextSegments: () => { throw new Error("API not available"); },
    };
    const result = mod.mergeAdjacentSameFill(node as any);
    expect(result).toEqual([]);
  });

  it("handles three different segments", () => {
    const node = mockTextNode([
      { characters: "A", fills: [solidFill("#FF0000")] },
      { characters: "B", fills: [solidFill("#00FF00")] },
      { characters: "C", fills: [solidFill("#0000FF")] },
    ]);
    const result = mod.mergeAdjacentSameFill(node);
    expect(result).toHaveLength(3);
    expect(result[0].fill).toBe("#FF0000");
    expect(result[1].fill).toBe("#00FF00");
    expect(result[2].fill).toBe("#0000FF");
  });
});

// ─── collectAttributes: shadow rgba format (Fix 3) ───

// Minimal inventory stub
function stubInventory(): any {
  return {
    add: () => {},
    trackVariable: () => {},
  };
}

const defaultSettings: any = {
  spacingUnit: "px",
  remBase: 16,
  valuePrecision: 0,
  colorFormat: "hex",
  showRawValues: false,
  valuePreference: "variable",
};

// Build a minimal SceneNode mock for collectAttributes
function mockSceneNode(overrides: Record<string, any> = {}): any {
  return {
    name: "test-node",
    type: "RECTANGLE",
    id: "mock-1",
    width: 100,
    height: 50,
    opacity: 1,
    fills: [],
    strokes: [],
    effects: [],
    boundVariables: {},
    getSharedPluginDataKeys: () => [],
    getSharedPluginData: () => "",
    ...overrides,
  };
}

describe("collectAttributes – shadow rgba (Fix 3)", () => {
  it("shadow with alpha < 1 outputs rgba() format", async () => {
    const node = mockSceneNode({
      effects: [
        {
          type: "DROP_SHADOW",
          visible: true,
          offset: { x: 0, y: 4 },
          radius: 8,
          spread: 0,
          color: { r: 0, g: 0, b: 0, a: 0.25 },
        },
      ],
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const shadow = attrs.find((a: any) => a.key === "Shadow");
    expect(shadow).toBeDefined();
    expect(shadow!.value).toContain("rgba(0,0,0,0.25)");
  });

  it("shadow with alpha = 1 outputs hex format (no rgba)", async () => {
    const node = mockSceneNode({
      effects: [
        {
          type: "DROP_SHADOW",
          visible: true,
          offset: { x: 2, y: 2 },
          radius: 4,
          spread: 0,
          color: { r: 1, g: 0, b: 0, a: 1 },
        },
      ],
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const shadow = attrs.find((a: any) => a.key === "Shadow");
    expect(shadow).toBeDefined();
    expect(shadow!.value).toContain("#ff0000");
    expect(shadow!.value).not.toContain("rgba");
  });

  it("shadow with spread includes spread pixel value", async () => {
    const node = mockSceneNode({
      effects: [
        {
          type: "DROP_SHADOW",
          visible: true,
          offset: { x: 0, y: 0 },
          radius: 10,
          spread: 5,
          color: { r: 0, g: 0, b: 0, a: 0.5 },
        },
      ],
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const shadow = attrs.find((a: any) => a.key === "Shadow");
    expect(shadow).toBeDefined();
    expect(shadow!.value).toContain("5px");
  });
});

// ─── collectAttributes: stroke border-* format (Fix 4) ───

describe("collectAttributes – stroke sides border-* (Fix 4)", () => {
  it("single side (bottom only) outputs border-bottom", async () => {
    const node = mockSceneNode({
      strokeTopWeight: 0,
      strokeRightWeight: 0,
      strokeBottomWeight: 1,
      strokeLeftWeight: 0,
      strokes: [{ type: "SOLID", color: { r: 0, g: 0, b: 0 }, visible: true, opacity: 1 }],
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const sides = attrs.find((a: any) => a.key === "Stroke sides");
    expect(sides).toBeDefined();
    expect(sides!.value).toBe("border-bottom: 1px");
  });

  it("all sides equal outputs 'all'", async () => {
    const node = mockSceneNode({
      strokeTopWeight: 2,
      strokeRightWeight: 2,
      strokeBottomWeight: 2,
      strokeLeftWeight: 2,
      strokes: [{ type: "SOLID", color: { r: 0, g: 0, b: 0 }, visible: true, opacity: 1 }],
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const sides = attrs.find((a: any) => a.key === "Stroke sides");
    expect(sides).toBeDefined();
    expect(sides!.value).toBe("all");
  });

  it("multiple sides outputs comma-separated border-* values", async () => {
    const node = mockSceneNode({
      strokeTopWeight: 1,
      strokeRightWeight: 0,
      strokeBottomWeight: 2,
      strokeLeftWeight: 0,
      strokes: [{ type: "SOLID", color: { r: 0, g: 0, b: 0 }, visible: true, opacity: 1 }],
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const sides = attrs.find((a: any) => a.key === "Stroke sides");
    expect(sides).toBeDefined();
    expect(sides!.value).toBe("border-top: 1px, border-bottom: 2px");
  });
});

// ─── collectAttributes: text_align (Fix 2) ───

describe("collectAttributes – text align (Fix 2)", () => {
  function mockTextSceneNode(textAlignHorizontal: string): any {
    return {
      name: "text-node",
      type: "TEXT",
      id: "text-1",
      width: 200,
      height: 24,
      opacity: 1,
      fills: [{ type: "SOLID", color: { r: 0, g: 0, b: 0 }, visible: true, opacity: 1 }],
      strokes: [],
      effects: [],
      boundVariables: {},
      getSharedPluginDataKeys: () => [],
      getSharedPluginData: () => "",
      fontName: { family: "Inter", style: "Regular" },
      fontSize: 14,
      lineHeight: { unit: "AUTO" },
      letterSpacing: { unit: "PIXELS", value: 0 },
      textAlignHorizontal,
      textStyleId: "",
    };
  }

  it("CENTER text emits text align attribute with value 'center'", async () => {
    const node = mockTextSceneNode("CENTER");
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const align = attrs.find((a: any) => a.key === "Text align");
    expect(align).toBeDefined();
    expect(align!.value).toBe("center");
  });

  it("LEFT text does NOT emit text align attribute (default skipped)", async () => {
    const node = mockTextSceneNode("LEFT");
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const align = attrs.find((a: any) => a.key === "Text align");
    expect(align).toBeUndefined();
  });

  it("RIGHT text emits text align attribute with value 'right'", async () => {
    const node = mockTextSceneNode("RIGHT");
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const align = attrs.find((a: any) => a.key === "Text align");
    expect(align).toBeDefined();
    expect(align!.value).toBe("right");
  });
});
