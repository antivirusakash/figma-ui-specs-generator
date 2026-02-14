import { describe, expect, it } from "vitest";
import {
  isArtworkExportTooLargeError,
  resolveArtworkExportScalePlan
} from "../../src/plugin/helpers/frame-builders";

describe("resolveArtworkExportScalePlan", () => {
  it("uses high-quality-first plan for small targets in auto mode", () => {
    expect(resolveArtworkExportScalePlan(1200, 900)).toEqual([2, 1, 0.5, 0.25]);
  });

  it("starts at 1x for medium-large targets in auto mode", () => {
    expect(resolveArtworkExportScalePlan(3000, 1800)).toEqual([1, 0.5, 0.25]);
  });

  it("starts at 0.5x for very large targets in auto mode", () => {
    expect(resolveArtworkExportScalePlan(5000, 3000)).toEqual([0.5, 0.25]);
  });
});

describe("isArtworkExportTooLargeError", () => {
  it("detects known Figma export-size error text", () => {
    expect(isArtworkExportTooLargeError(new Error("Target is too large to export as an image."))).toBe(true);
  });

  it("detects createImage overflow message", () => {
    expect(isArtworkExportTooLargeError(new Error("in createImage: Image is too large"))).toBe(true);
  });

  it("returns false for unrelated errors", () => {
    expect(isArtworkExportTooLargeError(new Error("Network failed"))).toBe(false);
  });
});
