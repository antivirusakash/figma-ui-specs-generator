import { describe, it, expect, vi, beforeAll } from "vitest";

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
