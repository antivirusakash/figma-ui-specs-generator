import { describe, it, expect } from "vitest";
import { encodeDiffs, decodeDiffs, deduplicateWidthDiffs } from "../../src/plugin/helpers/v12-repeat-diff";

describe("encodeDiffs", () => {
  it("encodes diffs as indexed tuples", () => {
    const diffs = { "Foo/text": "Hello", "Foo/width": "200" };
    const keys = ["Foo/text", "Foo/width"];
    expect(encodeDiffs(diffs, keys)).toEqual([0, "Hello", 1, "200"]);
  });

  it("returns empty array for empty diffs", () => {
    expect(encodeDiffs({}, ["a", "b"])).toEqual([]);
  });

  it("skips keys not in varying_keys", () => {
    const diffs = { "Foo/text": "Hello", "unknown/key": "value" };
    const keys = ["Foo/text"];
    expect(encodeDiffs(diffs, keys)).toEqual([0, "Hello"]);
  });

  it("handles multiple keys in sorted order", () => {
    const diffs = { "b/fill": "#F00", "a/text": "Hi" };
    const keys = ["a/text", "b/fill"];
    const encoded = encodeDiffs(diffs, keys);
    // order depends on Object.entries iteration, but decode must roundtrip
    const decoded = decodeDiffs(encoded, keys);
    expect(decoded).toEqual(diffs);
  });
});

describe("decodeDiffs", () => {
  it("decodes indexed tuples back to diff map", () => {
    const keys = ["Foo/text", "Foo/width"];
    const encoded = [0, "Hello", 1, "200"];
    expect(decodeDiffs(encoded, keys)).toEqual({
      "Foo/text": "Hello",
      "Foo/width": "200"
    });
  });

  it("returns empty object for empty array", () => {
    expect(decodeDiffs([], ["a"])).toEqual({});
  });

  it("handles out-of-range index safely", () => {
    const keys = ["Foo/text"];
    const encoded = [0, "Hello", 99, "bad"];
    const decoded = decodeDiffs(encoded, keys);
    expect(decoded).toEqual({ "Foo/text": "Hello" });
  });

  it("handles non-number index safely", () => {
    const keys = ["Foo/text"];
    const encoded = ["bad_index", "value", 0, "Hello"];
    const decoded = decodeDiffs(encoded, keys);
    expect(decoded).toEqual({ "Foo/text": "Hello" });
  });

  it("handles negative index safely", () => {
    const keys = ["Foo/text"];
    const encoded = [-1, "value", 0, "Hello"];
    const decoded = decodeDiffs(encoded, keys);
    expect(decoded).toEqual({ "Foo/text": "Hello" });
  });

  it("handles odd-length array (missing last value)", () => {
    const keys = ["a", "b"];
    const encoded = [0, "val", 1];
    const decoded = decodeDiffs(encoded, keys);
    expect(decoded).toEqual({ "a": "val" });
  });
});

describe("roundtrip encode/decode", () => {
  it("roundtrips simple diffs losslessly", () => {
    const diffs = { "Foo/text": "Hello World", "Foo/width": "200", "Bar/fill": "#FF0000" };
    const keys = Object.keys(diffs).sort();
    expect(decodeDiffs(encodeDiffs(diffs, keys), keys)).toEqual(diffs);
  });

  it("roundtrips empty diffs", () => {
    expect(decodeDiffs(encodeDiffs({}, []), [])).toEqual({});
  });

  it("roundtrips single entry", () => {
    const diffs = { "text": "Hi" };
    const keys = ["text"];
    expect(decodeDiffs(encodeDiffs(diffs, keys), keys)).toEqual(diffs);
  });

  it("roundtrips with special characters in values", () => {
    const diffs = { "a/text": "Hello: World #1 [test]", "b/text": "true" };
    const keys = ["a/text", "b/text"];
    expect(decodeDiffs(encodeDiffs(diffs, keys), keys)).toEqual(diffs);
  });
});

describe("deduplicateWidthDiffs", () => {
  it("removes child width diffs that match parent width", () => {
    const diffs = {
      "Foo/width": "86",
      "Foo/Bar/width": "86",
      "Foo/Bar/Baz/width": "86",
      "Foo/text": "Hi"
    };
    const result = deduplicateWidthDiffs(diffs);
    expect(result).toEqual({
      "Foo/width": "86",
      "Foo/text": "Hi"
    });
  });

  it("keeps non-cascading width diffs", () => {
    const diffs = {
      "Foo/width": "86",
      "Bar/width": "100"
    };
    const result = deduplicateWidthDiffs(diffs);
    expect(result).toEqual(diffs);
  });

  it("keeps child width when value differs from parent", () => {
    const diffs = {
      "Foo/width": "86",
      "Foo/Bar/width": "100"
    };
    const result = deduplicateWidthDiffs(diffs);
    expect(result).toEqual(diffs);
  });

  it("handles empty diffs", () => {
    expect(deduplicateWidthDiffs({})).toEqual({});
  });

  it("handles no width diffs", () => {
    const diffs = { "Foo/text": "Hello", "Bar/fill": "#F00" };
    expect(deduplicateWidthDiffs(diffs)).toEqual(diffs);
  });

  it("deduplicates multiple cascading groups independently", () => {
    const diffs = {
      "A/width": "50",
      "A/B/width": "50",
      "X/width": "100",
      "X/Y/width": "100",
      "X/Y/Z/width": "100"
    };
    const result = deduplicateWidthDiffs(diffs);
    expect(result).toEqual({
      "A/width": "50",
      "X/width": "100"
    });
  });
});
