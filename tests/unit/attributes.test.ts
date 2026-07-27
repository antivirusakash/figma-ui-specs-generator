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

  it("omits the sides when the per-side weights survive a deleted stroke paint", async () => {
    // Deleting the paint in Figma leaves strokeBottomWeight at 1. The all-sides branch already
    // required a visible stroke; without the same guard here the last row of every list card
    // reported a divider the design does not draw.
    const node = mockSceneNode({
      strokeTopWeight: 0,
      strokeRightWeight: 0,
      strokeBottomWeight: 1,
      strokeLeftWeight: 0,
      strokes: [],
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    expect(attrs.find((a: any) => a.key === "Stroke sides")).toBeUndefined();
  });

  it("omits the sides when the only stroke paint is hidden", async () => {
    const node = mockSceneNode({
      strokeTopWeight: 0,
      strokeRightWeight: 0,
      strokeBottomWeight: 1,
      strokeLeftWeight: 0,
      strokes: [{ type: "SOLID", color: { r: 0, g: 0, b: 0 }, visible: false, opacity: 1 }],
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    expect(attrs.find((a: any) => a.key === "Stroke sides")).toBeUndefined();
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

// ─── collectAttributes: topmost + visible-only paint selection ───

describe("collectAttributes – paint selection", () => {
  it("uses the TOPMOST fill, not the first one in the array", async () => {
    const node = mockSceneNode({
      fills: [solidFill("#FF0000"), solidFill("#0000FF")],
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const fill = attrs.find((a: any) => a.key === "Fill");
    expect(fill!.value).toBe("#0000FF");
    expect(fill!.paintIndex).toBe(1);
  });

  it("a hidden fill must NOT win over the visible one below it", async () => {
    const node = mockSceneNode({
      fills: [solidFill("#FF0000"), solidFill("#0000FF", false)],
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const fill = attrs.find((a: any) => a.key === "Fill");
    expect(fill!.value).toBe("#FF0000");
    expect(fill!.paintIndex).toBe(0);
  });

  it("emits no Fill when every fill is hidden", async () => {
    const node = mockSceneNode({ fills: [solidFill("#FF0000", false)] });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    expect(attrs.find((a: any) => a.key === "Fill")).toBeUndefined();
  });

  it("gradient fills produce a gradient attribute instead of being dropped", async () => {
    const node = mockSceneNode({
      fills: [
        {
          type: "GRADIENT_LINEAR",
          visible: true,
          opacity: 1,
          gradientStops: [
            { position: 0, color: { r: 1, g: 0, b: 0, a: 1 } },
            { position: 1, color: { r: 0, g: 0, b: 1, a: 1 } },
          ],
          gradientTransform: [[0, 1, 0], [-1, 0, 1]],
        },
      ],
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const fill = attrs.find((a: any) => a.key === "Fill");
    expect(fill).toBeDefined();
    expect(fill!.fillType).toBe("GRADIENT_LINEAR");
    expect(fill!.value).toBe("linear-gradient(180deg, #FF0000 0%, #0000FF 100%)");
    expect(fill!.gradient).toEqual({
      angle: 180,
      stops: [
        { pos: 0, color: "#FF0000" },
        { pos: 1, color: "#0000FF" },
      ],
    });
  });

  it("image fills surface imageHash and scaleMode", async () => {
    const node = mockSceneNode({
      fills: [{ type: "IMAGE", visible: true, opacity: 1, imageHash: "hash-1", scaleMode: "FILL" }],
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const fill = attrs.find((a: any) => a.key === "Fill");
    expect(fill).toBeDefined();
    expect(fill!.value).toBe("image");
    expect(fill!.fillType).toBe("IMAGE");
    expect(fill!.imageHash).toBe("hash-1");
    expect(fill!.scaleMode).toBe("FILL");
  });

  it("gradient STROKES produce a stroke attribute instead of being dropped", async () => {
    const node = mockSceneNode({
      strokes: [
        {
          type: "GRADIENT_LINEAR",
          visible: true,
          opacity: 1,
          gradientStops: [
            { position: 0, color: { r: 0, g: 0, b: 0, a: 1 } },
            { position: 1, color: { r: 1, g: 1, b: 1, a: 1 } },
          ],
          gradientTransform: [[0, 1, 0], [-1, 0, 1]],
        },
      ],
      strokeWeight: 1,
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const stroke = attrs.find((a: any) => a.key === "Stroke");
    expect(stroke).toBeDefined();
    expect(stroke!.fillType).toBe("GRADIENT_LINEAR");
    expect(stroke!.value).toBe("linear-gradient(180deg, #000000 0%, #FFFFFF 100%)");
  });
});

// ─── collectAttributes: figma.mixed fallbacks ───

describe("collectAttributes – figma.mixed fallbacks", () => {
  it("mixed strokeWeight falls back to the four side weights", async () => {
    const node = mockSceneNode({
      strokes: [solidFill("#000000")],
      strokeWeight: FIGMA_MIXED,
      strokeTopWeight: 1,
      strokeRightWeight: 0,
      strokeBottomWeight: 2,
      strokeLeftWeight: 0,
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const width = attrs.find((a: any) => a.key === "Stroke width");
    expect(width).toBeDefined();
    expect(width!.value).toBe("1px 0px 2px 0px");
  });

  it("mixed strokeWeight with no side weights emits no Stroke width", async () => {
    const node = mockSceneNode({
      strokes: [solidFill("#000000")],
      strokeWeight: FIGMA_MIXED,
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    expect(attrs.find((a: any) => a.key === "Stroke width")).toBeUndefined();
  });

  it("mixed cornerRadius falls back to the 'tl tr br bl' string", async () => {
    const node = mockSceneNode({
      cornerRadius: FIGMA_MIXED,
      topLeftRadius: 8,
      topRightRadius: 8,
      bottomRightRadius: 0,
      bottomLeftRadius: 0,
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const radius = attrs.find((a: any) => a.key === "Corner radius");
    expect(radius).toBeDefined();
    expect(radius!.value).toBe("8px 8px 0px 0px");
  });

  it("mixed cornerRadius with all-zero corners emits no Corner radius", async () => {
    const node = mockSceneNode({
      cornerRadius: FIGMA_MIXED,
      topLeftRadius: 0,
      topRightRadius: 0,
      bottomRightRadius: 0,
      bottomLeftRadius: 0,
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    expect(attrs.find((a: any) => a.key === "Corner radius")).toBeUndefined();
  });
});

// ─── collectAttributes: newly collected node properties ───

describe("collectAttributes – node property family", () => {
  it("emits dash pattern for a dashed stroke and omits it for a solid one", async () => {
    const dashed = mockSceneNode({ strokes: [solidFill("#000000")], strokeWeight: 1, dashPattern: [4, 2] });
    const dashAttrs = await mod.collectAttributes(dashed, stubInventory(), defaultSettings);
    expect(dashAttrs.find((a: any) => a.key === "Dash pattern")!.value).toBe("4px 2px");

    const solid = mockSceneNode({ strokes: [solidFill("#000000")], strokeWeight: 1, dashPattern: [] });
    const solidAttrs = await mod.collectAttributes(solid, stubInventory(), defaultSettings);
    expect(solidAttrs.find((a: any) => a.key === "Dash pattern")).toBeUndefined();
  });

  it("emits rotation in CSS (clockwise-positive) degrees and omits it at 0", async () => {
    // Figma's rotation is counter-clockwise-positive; the emitted value is consumed as
    // CSS transform: rotate(), which is clockwise-positive, so the sign must be flipped.
    const rotated = await mod.collectAttributes(mockSceneNode({ rotation: 45 }), stubInventory(), defaultSettings);
    expect(rotated.find((a: any) => a.key === "Rotation")!.value).toBe("-45deg");
    expect(rotated.find((a: any) => a.key === "Rotation")!.rawValue).toBe(-45);

    const clockwise = await mod.collectAttributes(mockSceneNode({ rotation: -90 }), stubInventory(), defaultSettings);
    expect(clockwise.find((a: any) => a.key === "Rotation")!.value).toBe("90deg");

    const flat = await mod.collectAttributes(mockSceneNode({ rotation: 0 }), stubInventory(), defaultSettings);
    expect(flat.find((a: any) => a.key === "Rotation")).toBeUndefined();
  });

  it("emits blend mode only when it is not NORMAL/PASS_THROUGH", async () => {
    const multiply = await mod.collectAttributes(mockSceneNode({ blendMode: "MULTIPLY" }), stubInventory(), defaultSettings);
    expect(multiply.find((a: any) => a.key === "Blend mode")!.value).toBe("multiply");

    for (const mode of ["NORMAL", "PASS_THROUGH"]) {
      const attrs = await mod.collectAttributes(mockSceneNode({ blendMode: mode }), stubInventory(), defaultSettings);
      expect(attrs.find((a: any) => a.key === "Blend mode")).toBeUndefined();
    }
  });

  it("emits Mask only for isMask nodes", async () => {
    const masked = await mod.collectAttributes(mockSceneNode({ isMask: true }), stubInventory(), defaultSettings);
    expect(masked.find((a: any) => a.key === "Mask")!.value).toBe("true");

    const plain = await mod.collectAttributes(mockSceneNode({ isMask: false }), stubInventory(), defaultSettings);
    expect(plain.find((a: any) => a.key === "Mask")).toBeUndefined();
  });

  it("strips the '#95:0' id suffix from component property names but keeps it in systemId", async () => {
    const node = mockSceneNode({
      type: "INSTANCE",
      componentProperties: { "Icon#95:0": { type: "BOOLEAN", value: true } },
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    const prop = attrs.find((a: any) => a.format === "PROPERTY");
    expect(prop).toBeDefined();
    expect(prop!.propertyName).toBe("Icon");
    expect(prop!.systemId).toBe("Icon#95:0");
  });
});

// ─── collectAttributes: text case / decoration / letter spacing ───

describe("collectAttributes – text styling", () => {
  function mockStyledText(overrides: Record<string, any> = {}): any {
    return {
      name: "text-node",
      type: "TEXT",
      id: "text-2",
      width: 200,
      height: 24,
      opacity: 1,
      fills: [solidFill("#000000")],
      strokes: [],
      effects: [],
      boundVariables: {},
      getSharedPluginDataKeys: () => [],
      getSharedPluginData: () => "",
      fontName: { family: "Inter", style: "Regular" },
      fontSize: 14,
      lineHeight: { unit: "AUTO" },
      letterSpacing: { unit: "PIXELS", value: 0 },
      textAlignHorizontal: "LEFT",
      textCase: "ORIGINAL",
      textDecoration: "NONE",
      textStyleId: "",
      ...overrides,
    };
  }

  it("collects UPPER text case and omits ORIGINAL", async () => {
    const upper = await mod.collectAttributes(mockStyledText({ textCase: "UPPER" }), stubInventory(), defaultSettings);
    expect(upper.find((a: any) => a.key === "Text case")!.value).toBe("upper");

    const original = await mod.collectAttributes(mockStyledText(), stubInventory(), defaultSettings);
    expect(original.find((a: any) => a.key === "Text case")).toBeUndefined();
  });

  it("collects UNDERLINE text decoration and omits NONE", async () => {
    const underline = await mod.collectAttributes(
      mockStyledText({ textDecoration: "UNDERLINE" }), stubInventory(), defaultSettings
    );
    expect(underline.find((a: any) => a.key === "Text decoration")!.value).toBe("underline");

    const none = await mod.collectAttributes(mockStyledText(), stubInventory(), defaultSettings);
    expect(none.find((a: any) => a.key === "Text decoration")).toBeUndefined();
  });

  it("derives mixed text case from the styled segments, keeping the untransformed run", async () => {
    // "original" stays in the list: dropping it would read as a whole-node transform
    // and the agent would uppercase the run Figma renders as authored.
    const node = mockStyledText({
      textCase: FIGMA_MIXED,
      getStyledTextSegments: () => [
        { characters: "A", textCase: "UPPER" },
        { characters: "b", textCase: "ORIGINAL" },
        { characters: "C", textCase: "LOWER" },
      ],
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    expect(attrs.find((a: any) => a.key === "Text case")!.value).toBe("upper, original, lower");
  });

  it("omits text case when every mixed segment is untransformed", async () => {
    const node = mockStyledText({
      textCase: FIGMA_MIXED,
      getStyledTextSegments: () => [
        { characters: "A", textCase: "ORIGINAL" },
        { characters: "b", textCase: "ORIGINAL" },
      ],
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    expect(attrs.find((a: any) => a.key === "Text case")).toBeUndefined();
  });

  it("keeps the undecorated run when text decoration is mixed", async () => {
    const node = mockStyledText({
      textDecoration: FIGMA_MIXED,
      getStyledTextSegments: () => [
        { characters: "link", textDecoration: "UNDERLINE" },
        { characters: " plain", textDecoration: "NONE" },
      ],
    });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    expect(attrs.find((a: any) => a.key === "Text decoration")!.value).toBe("underline, none");
  });

  it("always reports letter spacing, including an explicit 0", async () => {
    // "explicitly 0" and "unspecified" are different statements; the zero is dropped from
    // the compact YAML record by data-section, not from the attribute list.
    const zero = await mod.collectAttributes(mockStyledText(), stubInventory(), defaultSettings);
    expect(zero.find((a: any) => a.key === "Letter spacing")!.value).toBe("0px");

    const spaced = await mod.collectAttributes(
      mockStyledText({ letterSpacing: { unit: "PIXELS", value: 2 } }), stubInventory(), defaultSettings
    );
    expect(spaced.find((a: any) => a.key === "Letter spacing")!.value).toBe("2px");
  });

  it("omits text auto resize at Figma's NONE default and emits every other value", async () => {
    const fixed = await mod.collectAttributes(
      mockStyledText({ textAutoResize: "NONE" }), stubInventory(), defaultSettings
    );
    expect(fixed.find((a: any) => a.key === "Text auto resize")).toBeUndefined();

    const hugging = await mod.collectAttributes(
      mockStyledText({ textAutoResize: "HEIGHT" }), stubInventory(), defaultSettings
    );
    expect(hugging.find((a: any) => a.key === "Text auto resize")!.value).toBe("height");
  });

  it("emits paragraph spacing and max lines when set", async () => {
    const node = mockStyledText({ paragraphSpacing: 12, maxLines: 2 });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    expect(attrs.find((a: any) => a.key === "Paragraph spacing")!.value).toBe("12px");
    expect(attrs.find((a: any) => a.key === "Max lines")!.value).toBe("2");

    const bare = await mod.collectAttributes(mockStyledText({ paragraphSpacing: 0 }), stubInventory(), defaultSettings);
    expect(bare.find((a: any) => a.key === "Paragraph spacing")).toBeUndefined();
    expect(bare.find((a: any) => a.key === "Max lines")).toBeUndefined();
  });
});

// ─── collectAttributes: paint ↔ variable binding ───

describe("collectAttributes – paint variable binding", () => {
  function alias(id: string) {
    return { type: "VARIABLE_ALIAS", id };
  }

  it("does not attribute a LOWER paint's variable to an unbound top paint", async () => {
    // boundVariables.fills only carries an entry for the bound paint. Falling back to
    // index 0 would stamp the white surface token onto the red overlay and poison
    // resolved_tokens with the overlay colour.
    const node = mockSceneNode({
      fills: [solidFill("#FFFFFF"), solidFill("#FF0000")],
      boundVariables: { fills: [alias("VarSurface")] },
    });
    const fill = (await mod.collectAttributes(node, stubInventory(), defaultSettings))
      .find((a: any) => a.key === "Fill");
    expect(fill!.value).toBe("#FF0000");
    expect(fill!.format).toBe("HARDCODED");
    expect(fill!.systemId).toBeUndefined();
  });

  it("reads the node-level alias at the resolved paint's own index", async () => {
    const node = mockSceneNode({
      fills: [solidFill("#FFFFFF"), solidFill("#FF0000")],
      boundVariables: { fills: [undefined, alias("VarTop")] },
    });
    const fill = (await mod.collectAttributes(node, stubInventory(), defaultSettings))
      .find((a: any) => a.key === "Fill");
    expect(fill!.format).toBe("VARIABLE");
    expect(fill!.systemId).toBe("VarTop");
    expect(fill!.rawValue).toBe("#FF0000");
  });

  it("prefers the binding recorded on the paint itself", async () => {
    const top = { ...solidFill("#FF0000"), boundVariables: { color: alias("VarPaint") } };
    const node = mockSceneNode({ fills: [solidFill("#FFFFFF"), top], boundVariables: {} });
    const fill = (await mod.collectAttributes(node, stubInventory(), defaultSettings))
      .find((a: any) => a.key === "Fill");
    expect(fill!.format).toBe("VARIABLE");
    expect(fill!.systemId).toBe("VarPaint");
  });

  it("keeps the surface token when an IMAGE covers a bound solid", async () => {
    const node = mockSceneNode({
      fills: [
        solidFill("#FFFFFF"),
        { type: "IMAGE", visible: true, opacity: 1, imageHash: "hash-1", scaleMode: "FILL" },
      ],
      boundVariables: { fills: [alias("VarSurface")] },
    });
    const fill = (await mod.collectAttributes(node, stubInventory(), defaultSettings))
      .find((a: any) => a.key === "Fill");
    expect(fill!.format).toBe("VARIABLE");
    expect(fill!.systemId).toBe("VarSurface");
    expect(fill!.rawValue).toBe("#FFFFFF");
    // The image details still describe the paint that is actually on top.
    expect(fill!.fillType).toBe("IMAGE");
    expect(fill!.imageHash).toBe("hash-1");
  });

  it("still reports a bare image when nothing is painted underneath", async () => {
    const node = mockSceneNode({
      fills: [{ type: "IMAGE", visible: true, opacity: 1, imageHash: "hash-2", scaleMode: "FIT" }],
    });
    const fill = (await mod.collectAttributes(node, stubInventory(), defaultSettings))
      .find((a: any) => a.key === "Fill");
    expect(fill!.value).toBe("image");
    expect(fill!.imageHash).toBe("hash-2");
  });
});

// ─── collectAttributes: corner radius bindings ───

describe("collectAttributes – corner radius variables", () => {
  function alias(id: string) {
    return { type: "VARIABLE_ALIAS", id };
  }

  it("resolves a uniform radius from the four per-corner bindings", async () => {
    // `cornerRadius` is not a VariableBindableNodeField — Figma records the binding on
    // topLeftRadius/topRightRadius/bottomRightRadius/bottomLeftRadius instead.
    const node = mockSceneNode({
      cornerRadius: 8,
      boundVariables: {
        topLeftRadius: alias("RadiusMd"),
        topRightRadius: alias("RadiusMd"),
        bottomRightRadius: alias("RadiusMd"),
        bottomLeftRadius: alias("RadiusMd"),
      },
    });
    const radius = (await mod.collectAttributes(node, stubInventory(), defaultSettings))
      .find((a: any) => a.key === "Corner radius");
    expect(radius!.format).toBe("VARIABLE");
    expect(radius!.systemId).toBe("RadiusMd");
    expect(radius!.rawValue).toBe(8);
  });

  it("reports differing corners side by side and keeps the literal raw value", async () => {
    const node = mockSceneNode({
      cornerRadius: FIGMA_MIXED,
      topLeftRadius: 12,
      topRightRadius: 12,
      bottomRightRadius: 0,
      bottomLeftRadius: 0,
      boundVariables: { topLeftRadius: alias("RadiusLg"), topRightRadius: alias("RadiusLg") },
    });
    const radius = (await mod.collectAttributes(node, stubInventory(), defaultSettings))
      .find((a: any) => a.key === "Corner radius");
    expect(radius!.value).toBe("tl: RadiusLg, tr: RadiusLg, br: 0px, bl: 0px");
    expect(radius!.rawValue).toBe("12px 12px 0px 0px");
  });

  it("stays HARDCODED when no corner carries a binding", async () => {
    const node = mockSceneNode({ cornerRadius: 8, boundVariables: {} });
    const radius = (await mod.collectAttributes(node, stubInventory(), defaultSettings))
      .find((a: any) => a.key === "Corner radius");
    expect(radius!.format).toBe("HARDCODED");
    expect(radius!.value).toBe("8px");
  });
});

// ─── collectAttributes: stroke width only with a stroke ───

describe("collectAttributes – stroke width gating", () => {
  it("omits stroke width on a strokeless node that still reports strokeWeight 1", async () => {
    const node = mockSceneNode({ strokes: [], strokeWeight: 1 });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    expect(attrs.find((a: any) => a.key === "Stroke width")).toBeUndefined();
  });

  it("reports stroke width once a visible stroke exists", async () => {
    const node = mockSceneNode({ strokes: [solidFill("#000000")], strokeWeight: 2 });
    const attrs = await mod.collectAttributes(node, stubInventory(), defaultSettings);
    expect(attrs.find((a: any) => a.key === "Stroke width")!.value).toBe("2px");
  });
});
