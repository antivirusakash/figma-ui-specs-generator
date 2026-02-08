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
