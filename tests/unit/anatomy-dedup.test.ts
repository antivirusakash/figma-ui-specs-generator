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
