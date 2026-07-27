import { describe, it, expect, vi, beforeAll } from "vitest";
import { LIMITS } from "../../src/plugin/limits";

// Mock Figma global
const FIGMA_MIXED = Symbol("figma.mixed");
beforeAll(() => {
  (globalThis as any).figma = { mixed: FIGMA_MIXED };
});

const mod = await import("../../src/plugin/helpers/anatomy-collector");

// Helper to create a minimal mock SceneNode
function mockNode(
  type: string,
  name: string,
  opts: {
    children?: any[];
    visible?: boolean;
    characters?: string;
    fills?: any[];
    absoluteBoundingBox?: { x: number; y: number; width: number; height: number };
    id?: string;
    getMainComponentAsync?: () => Promise<any>;
    parent?: any;
  } = {}
): any {
  const node: any = {
    type,
    name,
    visible: opts.visible ?? true,
    id: opts.id ?? `${Math.random().toString(36).slice(2)}`,
    absoluteBoundingBox: opts.absoluteBoundingBox ?? { x: 0, y: 0, width: 100, height: 40 },
  };
  if (opts.children !== undefined) {
    node.children = opts.children;
  }
  if (type === "TEXT") {
    node.characters = opts.characters ?? "";
  }
  if (opts.fills !== undefined) {
    node.fills = opts.fills;
  }
  if (opts.getMainComponentAsync) {
    node.getMainComponentAsync = opts.getMainComponentAsync;
  }
  if (opts.parent) {
    node.parent = opts.parent;
  }
  return node;
}

function solidFill(hex: string): any {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return { type: "SOLID", color: { r, g, b }, visible: true };
}

// ─── computeChildSignature ───

describe("computeChildSignature", () => {
  it("produces identical string for nodes with same type:name tree", () => {
    const nodeA = mockNode("FRAME", "card", {
      children: [
        mockNode("TEXT", "title"),
        mockNode("TEXT", "desc"),
        mockNode("FRAME", "inner", { children: [mockNode("RECTANGLE", "bg")] }),
      ],
    });
    const nodeB = mockNode("FRAME", "card", {
      children: [
        mockNode("TEXT", "title"),
        mockNode("TEXT", "desc"),
        mockNode("FRAME", "inner", { children: [mockNode("RECTANGLE", "bg")] }),
      ],
    });
    expect(mod.computeChildSignature(nodeA)).toBe(mod.computeChildSignature(nodeB));
  });

  it("produces different string when child names differ", () => {
    const nodeA = mockNode("FRAME", "card", {
      children: [mockNode("TEXT", "title"), mockNode("TEXT", "desc")],
    });
    const nodeB = mockNode("FRAME", "card", {
      children: [mockNode("TEXT", "title"), mockNode("TEXT", "subtitle")],
    });
    expect(mod.computeChildSignature(nodeA)).not.toBe(mod.computeChildSignature(nodeB));
  });

  it("produces different string when child types differ", () => {
    const nodeA = mockNode("FRAME", "card", {
      children: [mockNode("TEXT", "label")],
    });
    const nodeB = mockNode("FRAME", "card", {
      children: [mockNode("RECTANGLE", "label")],
    });
    expect(mod.computeChildSignature(nodeA)).not.toBe(mod.computeChildSignature(nodeB));
  });

  it("ignores invisible children", () => {
    const nodeA = mockNode("FRAME", "card", {
      children: [mockNode("TEXT", "title"), mockNode("TEXT", "hidden", { visible: false })],
    });
    const nodeB = mockNode("FRAME", "card", {
      children: [mockNode("TEXT", "title")],
    });
    expect(mod.computeChildSignature(nodeA)).toBe(mod.computeChildSignature(nodeB));
  });

  it("returns empty string for leaf nodes", () => {
    const leaf = mockNode("TEXT", "hello");
    expect(mod.computeChildSignature(leaf)).toBe("");
  });

  it("respects max depth", () => {
    const deep = mockNode("FRAME", "a", {
      children: [
        mockNode("FRAME", "b", {
          children: [mockNode("TEXT", "deep")],
        }),
      ],
    });
    // depth=1 should see b but not b's children
    const sig1 = mod.computeChildSignature(deep, 1);
    expect(sig1).toBe("FRAME:b");
    // depth=2 should see b and its children
    const sig2 = mod.computeChildSignature(deep, 2);
    expect(sig2).toBe("FRAME:b(TEXT:deep)");
  });
});

// ─── computeInstanceFingerprint ───

describe("computeInstanceFingerprint", () => {
  it("matches for instances of the same component with same children", async () => {
    const mainComp = { id: "comp:1", name: "Card", parent: { type: "COMPONENT_SET", id: "set:1" } };
    const instA = mockNode("INSTANCE", "card", {
      children: [mockNode("TEXT", "title"), mockNode("TEXT", "desc")],
      getMainComponentAsync: () => Promise.resolve(mainComp),
    });
    const instB = mockNode("INSTANCE", "card", {
      children: [mockNode("TEXT", "title"), mockNode("TEXT", "desc")],
      getMainComponentAsync: () => Promise.resolve(mainComp),
    });
    const fpA = await mod.computeInstanceFingerprint(instA);
    const fpB = await mod.computeInstanceFingerprint(instB);
    expect(fpA).toBe(fpB);
    expect(fpA).toContain("set:1");
  });

  it("differs for instances with different child structure", async () => {
    const mainComp = { id: "comp:1", name: "Card", parent: { type: "COMPONENT_SET", id: "set:1" } };
    const instA = mockNode("INSTANCE", "card", {
      children: [mockNode("TEXT", "title"), mockNode("TEXT", "desc")],
      getMainComponentAsync: () => Promise.resolve(mainComp),
    });
    const instB = mockNode("INSTANCE", "card", {
      children: [mockNode("TEXT", "title"), mockNode("RECTANGLE", "bg")],
      getMainComponentAsync: () => Promise.resolve(mainComp),
    });
    const fpA = await mod.computeInstanceFingerprint(instA);
    const fpB = await mod.computeInstanceFingerprint(instB);
    expect(fpA).not.toBe(fpB);
  });

  it("returns null when main component cannot be resolved", async () => {
    const inst = mockNode("INSTANCE", "broken", {
      children: [],
      getMainComponentAsync: () => Promise.resolve(null),
    });
    expect(await mod.computeInstanceFingerprint(inst)).toBeNull();
  });
});

// ─── collectRepeatDiffs ───

describe("collectRepeatDiffs", () => {
  it("detects text content changes", () => {
    const template = mockNode("TEXT", "title", { characters: "Vitamin D" });
    const repeat = mockNode("TEXT", "title", { characters: "Calcium" });
    const diffs = mod.collectRepeatDiffs(template, repeat);
    expect(diffs["title/text"]).toBe("Calcium");
  });

  it("detects fill color changes", () => {
    const template = mockNode("RECTANGLE", "progress", { fills: [solidFill("#4CAF50")] });
    const repeat = mockNode("RECTANGLE", "progress", { fills: [solidFill("#FFB660")] });
    const diffs = mod.collectRepeatDiffs(template, repeat);
    expect(diffs["progress/fill"]).toBe("#FFB660");
  });

  it("detects width changes", () => {
    const template = mockNode("RECTANGLE", "bar", {
      absoluteBoundingBox: { x: 0, y: 0, width: 100, height: 4 },
    });
    const repeat = mockNode("RECTANGLE", "bar", {
      absoluteBoundingBox: { x: 0, y: 0, width: 60, height: 4 },
    });
    const diffs = mod.collectRepeatDiffs(template, repeat);
    expect(diffs["bar/width"]).toBe("60");
  });

  it("detects visibility changes", () => {
    const template = mockNode("FRAME", "badge", { visible: true });
    const repeat = mockNode("FRAME", "badge", { visible: false });
    const diffs = mod.collectRepeatDiffs(template, repeat);
    expect(diffs["badge/visible"]).toBe("false");
  });

  it("recurses into children for nested diffs", () => {
    const template = mockNode("FRAME", "card", {
      children: [
        mockNode("TEXT", "title", { characters: "Vitamin D" }),
        mockNode("RECTANGLE", "progress", { fills: [solidFill("#4CAF50")] }),
      ],
    });
    const repeat = mockNode("FRAME", "card", {
      children: [
        mockNode("TEXT", "title", { characters: "Calcium" }),
        mockNode("RECTANGLE", "progress", { fills: [solidFill("#FFB660")] }),
      ],
    });
    const diffs = mod.collectRepeatDiffs(template, repeat);
    expect(diffs["card/title/text"]).toBe("Calcium");
    expect(diffs["card/progress/fill"]).toBe("#FFB660");
  });

  it("returns empty diffs for identical nodes", () => {
    const template = mockNode("TEXT", "title", { characters: "Same" });
    const repeat = mockNode("TEXT", "title", { characters: "Same" });
    const diffs = mod.collectRepeatDiffs(template, repeat);
    expect(Object.keys(diffs)).toHaveLength(0);
  });

  it("disambiguates sibling children with the same name", () => {
    const template = mockNode("FRAME", "card", {
      children: [
        mockNode("TEXT", "label", { characters: "Vitamin D" }),
        mockNode("TEXT", "label", { characters: "23 ng/mL" }),
      ],
    });
    const repeat = mockNode("FRAME", "card", {
      children: [
        mockNode("TEXT", "label", { characters: "Calcium" }),
        mockNode("TEXT", "label", { characters: "45 ng/mL" }),
      ],
    });
    const diffs = mod.collectRepeatDiffs(template, repeat);
    // First child keeps its name, second gets [2] suffix
    expect(diffs["card/label/text"]).toBe("Calcium");
    expect(diffs["card/label[2]/text"]).toBe("45 ng/mL");
    expect(Object.keys(diffs)).toHaveLength(2);
  });

  it("detects componentProperties changes on INSTANCE nodes", () => {
    const template = mockNode("INSTANCE", "progress", {
      children: [],
      fills: [],
    });
    (template as any).componentProperties = {
      "Property 1#123:0": { type: "VARIANT", value: "good" },
      "Size#456:1": { type: "VARIANT", value: "medium" },
    };

    const repeat = mockNode("INSTANCE", "progress", {
      children: [],
      fills: [],
    });
    (repeat as any).componentProperties = {
      "Property 1#123:0": { type: "VARIANT", value: "bad" },
      "Size#456:1": { type: "VARIANT", value: "medium" },
    };

    const diffs = mod.collectRepeatDiffs(template, repeat);
    // Should strip #uniqueID suffix and detect the change
    expect(diffs["progress/Property 1"]).toBe("bad");
    // Size didn't change, should not appear
    expect(diffs["progress/Size"]).toBeUndefined();
  });

  it("strips #uniqueID suffix from componentProperties keys", () => {
    const template = mockNode("INSTANCE", "bar", { children: [], fills: [] });
    (template as any).componentProperties = {
      "State#789:2": { type: "VARIANT", value: "active" },
    };
    const repeat = mockNode("INSTANCE", "bar", { children: [], fills: [] });
    (repeat as any).componentProperties = {
      "State#789:2": { type: "VARIANT", value: "inactive" },
    };
    const diffs = mod.collectRepeatDiffs(template, repeat);
    expect(diffs["bar/State"]).toBe("inactive");
    // The raw key with #id should NOT appear
    expect(Object.keys(diffs).some(k => k.includes("#"))).toBe(false);
  });

  it("reaches text at depth 6 with default MAX_DIFF_DEPTH", () => {
    // card → frame1 → frame2 → frame3 → frame4 → title TEXT (depth 5 from card)
    const tTitle = mockNode("TEXT", "title", { characters: "Original" });
    const rTitle = mockNode("TEXT", "title", { characters: "Changed" });

    const wrapInFrames = (leaf: any, depth: number, prefix: string): any => {
      let current = leaf;
      for (let i = depth; i >= 1; i--) {
        current = mockNode("FRAME", `${prefix}${i}`, { children: [current] });
      }
      return current;
    };

    const template = wrapInFrames(tTitle, 5, "f");
    const repeat = wrapInFrames(rTitle, 5, "f");

    const diffs = mod.collectRepeatDiffs(template, repeat);
    expect(diffs["f1/f2/f3/f4/f5/title/text"]).toBe("Changed");
  });

  it("does NOT reach text beyond MAX_DIFF_DEPTH", () => {
    const beyondDepth = LIMITS.MAX_DIFF_DEPTH + 1;
    const tTitle = mockNode("TEXT", "title", { characters: "Original" });
    const rTitle = mockNode("TEXT", "title", { characters: "Changed" });

    const wrapInFrames = (leaf: any, depth: number, prefix: string): any => {
      let current = leaf;
      for (let i = depth; i >= 1; i--) {
        current = mockNode("FRAME", `${prefix}${i}`, { children: [current] });
      }
      return current;
    };

    const template = wrapInFrames(tTitle, beyondDepth, "f");
    const repeat = wrapInFrames(rTitle, beyondDepth, "f");

    const diffs = mod.collectRepeatDiffs(template, repeat);
    // Beyond MAX_DIFF_DEPTH — text node is unreachable
    expect(Object.keys(diffs)).toHaveLength(0);
  });

  it("detects nested instance componentProperties via recursion", () => {
    const innerTemplate = mockNode("INSTANCE", "indicator", { children: [], fills: [] });
    (innerTemplate as any).componentProperties = {
      "Status#1:0": { type: "VARIANT", value: "normal" },
    };
    const template = mockNode("FRAME", "card", {
      children: [mockNode("TEXT", "title", { characters: "Same" }), innerTemplate],
    });

    const innerRepeat = mockNode("INSTANCE", "indicator", { children: [], fills: [] });
    (innerRepeat as any).componentProperties = {
      "Status#1:0": { type: "VARIANT", value: "warning" },
    };
    const repeat = mockNode("FRAME", "card", {
      children: [mockNode("TEXT", "title", { characters: "Same" }), innerRepeat],
    });

    const diffs = mod.collectRepeatDiffs(template, repeat);
    expect(diffs["card/indicator/Status"]).toBe("warning");
  });
});

// ─── isRelevantNode with icon-sized instance check ───

describe("isRelevantNode", () => {
  it("returns true for INSTANCE nodes", () => {
    expect(mod.isRelevantNode(mockNode("INSTANCE", "Icon"), 0)).toBe(true);
  });

  it("returns true for TEXT nodes", () => {
    expect(mod.isRelevantNode(mockNode("TEXT", "label"), 0)).toBe(true);
  });

  it("returns false for deep VECTOR nodes (depth > 4)", () => {
    expect(mod.isRelevantNode(mockNode("VECTOR", "path"), 5)).toBe(false);
  });

  it("returns true for VECTOR at depth ≤ 4", () => {
    expect(mod.isRelevantNode(mockNode("VECTOR", "path"), 4)).toBe(true);
  });
});

// ─── collectInstanceText ───

describe("collectInstanceText", () => {
  it("collects text from instance children", () => {
    const inst = mockNode("INSTANCE", "card", {
      children: [
        mockNode("TEXT", "title", { characters: "Hello" }),
        mockNode("FRAME", "inner", {
          children: [mockNode("TEXT", "desc", { characters: "World" })],
        }),
      ],
    }) as any;
    const texts = mod.collectInstanceText(inst);
    expect(texts).toEqual(["Hello", "World"]);
  });
});

// ─── resolveInstanceIdentity ───

describe("resolveInstanceIdentity", () => {
  it("resolves instanceOf to the COMPONENT_SET name and splits out the variant", () => {
    const main = { name: "Size=Large, Type=Primary", parent: { type: "COMPONENT_SET", name: "Button" } } as any;
    expect(mod.resolveInstanceIdentity(main)).toEqual({
      instanceOf: "Button",
      instanceVariant: "Size=Large, Type=Primary",
    });
  });

  it("keeps the component name and omits the variant for a non-variant component", () => {
    for (const parentType of ["FRAME", "PAGE"]) {
      const main = { name: "Avatar", parent: { type: parentType, name: "Page 1" } } as any;
      const identity = mod.resolveInstanceIdentity(main);
      expect(identity.instanceOf).toBe("Avatar");
      expect(identity.instanceVariant).toBeUndefined();
    }
  });

  it("returns an empty identity for a detached/missing main component", () => {
    expect(mod.resolveInstanceIdentity(null)).toEqual({});
    expect(mod.resolveInstanceIdentity(undefined)).toEqual({});
  });
});

// ─── isRelevantNode: stroke-only visual nodes ───

describe("isRelevantNode – deep stroke-only shapes", () => {
  function strokedNode(type: string, strokes: any[], strokeWeight: unknown, size?: { width: number; height: number }): any {
    const node = mockNode(type, "divider");
    node.strokes = strokes;
    node.strokeWeight = strokeWeight;
    if (size) {
      node.width = size.width;
      node.height = size.height;
    }
    return node;
  }

  it("keeps a deep hairline shape and any LINE that carries a drawn stroke (dividers/rules)", () => {
    expect(mod.isRelevantNode(strokedNode("RECTANGLE", [solidFill("#000000")], 1, { width: 320, height: 1 }), 5)).toBe(true);
    expect(mod.isRelevantNode(strokedNode("LINE", [solidFill("#000000")], 1, { width: 320, height: 320 }), 6)).toBe(true);
  });

  it("drops a deep stroked VECTOR that is icon-glyph sized, not a rule", () => {
    // Outline icon sets draw every glyph as a stroked VECTOR; readmitting them at depth > 4
    // burns the MAX_ANATOMY_ELEMENTS budget that later real components need.
    expect(mod.isRelevantNode(strokedNode("VECTOR", [solidFill("#000000")], 1, { width: 20, height: 20 }), 5)).toBe(false);
  });

  it("keeps a deep stroked shape whose size cannot be read", () => {
    expect(mod.isRelevantNode(strokedNode("VECTOR", [solidFill("#000000")], 1), 5)).toBe(true);
  });

  it("still drops a deep VECTOR whose stroke weight is 0", () => {
    expect(mod.isRelevantNode(strokedNode("VECTOR", [solidFill("#000000")], 0), 5)).toBe(false);
  });

  it("still drops a deep VECTOR whose only stroke is hidden", () => {
    const hidden = { ...solidFill("#000000"), visible: false };
    expect(mod.isRelevantNode(strokedNode("VECTOR", [hidden], 1), 5)).toBe(false);
  });

  it("keeps a deep shape with mixed per-side stroke weights", () => {
    expect(mod.isRelevantNode(strokedNode("RECTANGLE", [solidFill("#000000")], FIGMA_MIXED), 5)).toBe(true);
  });
});

// ─── collectRepeatDiffs: name pairing, stroke and radius ───

describe("collectRepeatDiffs – pairing and new diff kinds", () => {
  it("pairs children by NAME, not array index", () => {
    const template = mockNode("FRAME", "card", {
      children: [
        mockNode("TEXT", "title", { characters: "A" }),
        mockNode("TEXT", "subtitle", { characters: "B" }),
      ],
    });
    // Same children, reversed order — must still pair title↔title and subtitle↔subtitle
    const repeat = mockNode("FRAME", "card", {
      children: [
        mockNode("TEXT", "subtitle", { characters: "B2" }),
        mockNode("TEXT", "title", { characters: "A2" }),
      ],
    });
    const diffs = mod.collectRepeatDiffs(template, repeat);
    expect(diffs["card/title/text"]).toBe("A2");
    expect(diffs["card/subtitle/text"]).toBe("B2");
  });

  it("diffs a surviving child even when an earlier sibling was dropped", () => {
    const template = mockNode("FRAME", "card", {
      children: [mockNode("INSTANCE", "icon"), mockNode("TEXT", "label", { characters: "One" })],
    });
    const repeat = mockNode("FRAME", "card", {
      children: [mockNode("TEXT", "label", { characters: "Two" })],
    });
    const diffs = mod.collectRepeatDiffs(template, repeat);
    expect(diffs["card/label/text"]).toBe("Two");
  });

  it("emits a /stroke diff when the stroke colour changes", () => {
    const template = mockNode("FRAME", "card");
    template.strokes = [solidFill("#000000")];
    const repeat = mockNode("FRAME", "card");
    repeat.strokes = [solidFill("#FF0000")];
    expect(mod.collectRepeatDiffs(template, repeat)["card/stroke"]).toBe("#FF0000");
  });

  it("emits a /radius diff for a single changed radius", () => {
    const template = mockNode("FRAME", "card");
    template.cornerRadius = 8;
    const repeat = mockNode("FRAME", "card");
    repeat.cornerRadius = 12;
    expect(mod.collectRepeatDiffs(template, repeat)["card/radius"]).toBe("12");
  });

  it("emits 'tl tr br bl' when the repeat has mixed corners", () => {
    const template = mockNode("FRAME", "card");
    template.cornerRadius = 8;
    const repeat = mockNode("FRAME", "card");
    repeat.cornerRadius = FIGMA_MIXED;
    repeat.topLeftRadius = 12;
    repeat.topRightRadius = 12;
    repeat.bottomRightRadius = 0;
    repeat.bottomLeftRadius = 0;
    expect(mod.collectRepeatDiffs(template, repeat)["card/radius"]).toBe("12 12 0 0");
  });

  it("emits no stroke or radius diff when they are identical", () => {
    const template = mockNode("FRAME", "card");
    template.strokes = [solidFill("#000000")];
    template.cornerRadius = 8;
    const repeat = mockNode("FRAME", "card");
    repeat.strokes = [solidFill("#000000")];
    repeat.cornerRadius = 8;
    const diffs = mod.collectRepeatDiffs(template, repeat);
    expect(diffs["card/stroke"]).toBeUndefined();
    expect(diffs["card/radius"]).toBeUndefined();
  });
});

// ─── collectAnatomyElements: real tree depth ───

describe("collectAnatomyElements – depth", () => {
  const settings: any = {
    spacingUnit: "px", remBase: 16, valuePrecision: 0, colorFormat: "hex",
    showRawValues: false, valuePreference: "variable",
  };
  const inventory: any = { add: () => {}, trackVariable: () => {} };

  function walkableNode(type: string, name: string, id: string, children?: any[]): any {
    const node = mockNode(type, name, { id, ...(children ? { children } : {}) });
    node.fills = [];
    node.strokes = [];
    node.effects = [];
    node.boundVariables = {};
    node.opacity = 1;
    node.width = 100;
    node.height = 40;
    node.getSharedPluginDataKeys = () => [];
    node.getSharedPluginData = () => "";
    if (type === "TEXT") {
      node.fontName = { family: "Inter", style: "Regular" };
      node.fontSize = 14;
      node.lineHeight = { unit: "AUTO" };
      node.letterSpacing = { unit: "PIXELS", value: 0 };
      node.textAlignHorizontal = "LEFT";
      node.textStyleId = "";
    }
    return node;
  }

  it("records the real walk depth: root 0, child 1, grandchild 2", async () => {
    const grandchild = walkableNode("TEXT", "label", "gc");
    const child = walkableNode("FRAME", "row", "c", [grandchild]);
    const root = walkableNode("FRAME", "card", "r", [child]);
    const { elements } = await mod.collectAnatomyElements(root, inventory, settings);
    const byId = new Map(elements.map((e: any) => [e.nodeId, e]));
    expect(byId.get("r")!.depth).toBe(0);
    expect(byId.get("c")!.depth).toBe(1);
    expect(byId.get("gc")!.depth).toBe(2);
  });

  it("does not derive depth from pathKey (pathKeys carry no spaces)", async () => {
    const child = walkableNode("TEXT", "label", "c2");
    const root = walkableNode("FRAME", "card", "r2", [child]);
    const { elements } = await mod.collectAnatomyElements(root, inventory, settings);
    const leaf = elements.find((e: any) => e.nodeId === "c2")!;
    expect(leaf.pathKey).not.toContain(" / ");
    expect(leaf.depth).toBe(1);
  });
});
