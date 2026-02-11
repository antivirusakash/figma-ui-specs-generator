import { describe, it, expect } from "vitest";
import { computeStructuredDiff } from "../../src/plugin/sections/properties-section";
import type { AnatomyElement } from "../../src/plugin/types";

function makeElement(overrides: Partial<AnatomyElement> & { name: string; type: string }): AnatomyElement {
  return {
    attributes: [],
    nodeId: overrides.nodeId ?? `${overrides.name}:1`,
    pathKey: overrides.pathKey ?? `root/${overrides.name}`,
    ...overrides,
  };
}

describe("computeStructuredDiff", () => {
  it("returns empty when base and variant are identical", () => {
    const base = [makeElement({ name: "Box", type: "FRAME", bounds: { x: 0, y: 0, width: 100, height: 50 } })];
    const variant = [makeElement({ name: "Box", type: "FRAME", bounds: { x: 0, y: 0, width: 100, height: 50 } })];
    const { changes, added, removed } = computeStructuredDiff(base, variant);
    expect(Object.keys(changes)).toHaveLength(0);
    expect(added).toHaveLength(0);
    expect(removed).toHaveLength(0);
  });

  it("detects width/height changes in bounds", () => {
    const base = [makeElement({ name: "Box", type: "FRAME", bounds: { x: 0, y: 0, width: 100, height: 50 } })];
    const variant = [makeElement({ name: "Box", type: "FRAME", bounds: { x: 0, y: 0, width: 200, height: 80 } })];
    const { changes } = computeStructuredDiff(base, variant);
    const key = base[0].pathKey!;
    expect(changes[key]).toBeDefined();
    expect(changes[key].w).toBe(200);
    expect(changes[key].h).toBe(80);
  });

  it("detects attribute value changes", () => {
    const base = [
      makeElement({
        name: "Box",
        type: "FRAME",
        attributes: [{ key: "Fill", value: "#FF0000", format: "HARDCODED" }],
      }),
    ];
    const variant = [
      makeElement({
        name: "Box",
        type: "FRAME",
        attributes: [{ key: "Fill", value: "#00FF00", format: "HARDCODED" }],
      }),
    ];
    const { changes } = computeStructuredDiff(base, variant);
    const key = base[0].pathKey!;
    expect(changes[key]).toBeDefined();
    expect(changes[key]["Fill"]).toBe("#00FF00");
  });

  it("detects added attributes", () => {
    const base = [makeElement({ name: "Box", type: "FRAME", attributes: [] })];
    const variant = [
      makeElement({
        name: "Box",
        type: "FRAME",
        attributes: [{ key: "Stroke", value: "#000000", format: "HARDCODED" }],
      }),
    ];
    const { changes } = computeStructuredDiff(base, variant);
    const key = base[0].pathKey!;
    expect(changes[key]).toBeDefined();
    expect(changes[key]["Stroke"]).toBe("#000000");
  });

  it("detects removed attributes as empty string", () => {
    const base = [
      makeElement({
        name: "Box",
        type: "FRAME",
        attributes: [{ key: "Stroke", value: "#000000", format: "HARDCODED" }],
      }),
    ];
    const variant = [makeElement({ name: "Box", type: "FRAME", attributes: [] })];
    const { changes } = computeStructuredDiff(base, variant);
    const key = base[0].pathKey!;
    expect(changes[key]).toBeDefined();
    expect(changes[key]["Stroke"]).toBe("");
  });

  it("detects text content changes", () => {
    const base = [makeElement({ name: "Label", type: "TEXT", textContent: "Hello" })];
    const variant = [makeElement({ name: "Label", type: "TEXT", textContent: "World" })];
    const { changes } = computeStructuredDiff(base, variant);
    const key = base[0].pathKey!;
    expect(changes[key]).toBeDefined();
    expect(changes[key].text).toBe("World");
  });

  it("detects text removal as empty string", () => {
    const base = [makeElement({ name: "Label", type: "TEXT", textContent: "Hello" })];
    const variant = [makeElement({ name: "Label", type: "TEXT", textContent: undefined })];
    const { changes } = computeStructuredDiff(base, variant);
    const key = base[0].pathKey!;
    expect(changes[key]).toBeDefined();
    expect(changes[key].text).toBe("");
  });

  it("detects removed elements by pathKey", () => {
    const base = [
      makeElement({ name: "Box", type: "FRAME" }),
      makeElement({ name: "Icon", type: "INSTANCE", pathKey: "root/Icon" }),
    ];
    const variant = [makeElement({ name: "Box", type: "FRAME" })];
    const { removed } = computeStructuredDiff(base, variant);
    expect(removed).toContain("root/Icon");
  });

  it("detects added elements by pathKey", () => {
    const base = [makeElement({ name: "Box", type: "FRAME" })];
    const variant = [
      makeElement({ name: "Box", type: "FRAME" }),
      makeElement({ name: "Badge", type: "FRAME", pathKey: "root/Badge" }),
    ];
    const { added } = computeStructuredDiff(base, variant);
    expect(added).toContain("root/Badge");
  });

  it("handles multiple elements with mixed changes", () => {
    const base = [
      makeElement({
        name: "Container",
        type: "FRAME",
        bounds: { x: 0, y: 0, width: 320, height: 48 },
        attributes: [{ key: "Fill", value: "#2563EB", format: "HARDCODED" }],
      }),
      makeElement({ name: "Label", type: "TEXT", textContent: "Click Me" }),
    ];
    const variant = [
      makeElement({
        name: "Container",
        type: "FRAME",
        bounds: { x: 0, y: 0, width: 320, height: 36 },
        attributes: [{ key: "Fill", value: "#FFFFFF", format: "HARDCODED" }],
      }),
      makeElement({ name: "Label", type: "TEXT", textContent: "Submit" }),
    ];
    const { changes } = computeStructuredDiff(base, variant);
    expect(Object.keys(changes)).toHaveLength(2);
    // Container changed height + fill
    const containerKey = base[0].pathKey!;
    expect(changes[containerKey].h).toBe(36);
    expect(changes[containerKey]["Fill"]).toBe("#FFFFFF");
    // Label changed text
    const labelKey = base[1].pathKey!;
    expect(changes[labelKey].text).toBe("Submit");
  });
});
