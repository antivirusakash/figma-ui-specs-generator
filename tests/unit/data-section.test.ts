import { describe, it, expect } from "vitest";
import { simplifyPadding, mapFigmaAlign, mapFigmaSizing } from "../../src/plugin/sections/data-section";

describe("simplifyPadding", () => {
  it("reduces all-equal padding to a single number", () => {
    expect(simplifyPadding("32 32 32 32")).toBe(32);
  });

  it("reduces TB=LR padding to two values", () => {
    expect(simplifyPadding("16 32 16 32")).toBe("16 32");
  });

  it("keeps full form when all sides differ", () => {
    expect(simplifyPadding("16 32 16 24")).toBe("16 32 16 24");
  });

  it("keeps full form when only 3 sides match", () => {
    expect(simplifyPadding("10 10 10 20")).toBe("10 10 10 20");
  });

  it("handles single zero", () => {
    expect(simplifyPadding("0 0 0 0")).toBe(0);
  });

  it("handles decimal values", () => {
    expect(simplifyPadding("8.5 8.5 8.5 8.5")).toBe(8.5);
  });

  it("passes through non-4-value strings", () => {
    expect(simplifyPadding("16")).toBe("16");
    expect(simplifyPadding("16 32")).toBe("16 32");
  });

  it("handles rem values", () => {
    expect(simplifyPadding("2rem 2rem 2rem 2rem")).toBe("2rem");
  });
});

describe("mapFigmaAlign", () => {
  it("maps MIN to flex-start", () => {
    expect(mapFigmaAlign("MIN")).toBe("flex-start");
  });

  it("maps CENTER to center", () => {
    expect(mapFigmaAlign("CENTER")).toBe("center");
  });

  it("maps MAX to flex-end", () => {
    expect(mapFigmaAlign("MAX")).toBe("flex-end");
  });

  it("maps SPACE_BETWEEN to space-between", () => {
    expect(mapFigmaAlign("SPACE_BETWEEN")).toBe("space-between");
  });

  it("lowercases unknown values", () => {
    expect(mapFigmaAlign("BASELINE")).toBe("baseline");
  });
});

describe("mapFigmaSizing", () => {
  it("maps FIXED to fixed", () => {
    expect(mapFigmaSizing("FIXED")).toBe("fixed");
  });

  it("maps HUG to auto", () => {
    expect(mapFigmaSizing("HUG")).toBe("auto");
  });

  it("maps AUTO to auto", () => {
    expect(mapFigmaSizing("AUTO")).toBe("auto");
  });

  it("maps FILL to fill", () => {
    expect(mapFigmaSizing("FILL")).toBe("fill");
  });

  it("lowercases unknown values", () => {
    expect(mapFigmaSizing("STRETCH")).toBe("stretch");
  });
});
