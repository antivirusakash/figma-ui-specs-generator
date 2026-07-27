import { describe, it, expect, beforeAll, beforeEach } from "vitest";
import { LIMITS } from "../../src/plugin/limits";

// Mock Figma global — the resolver only touches figma.variables.*Async and figma.mixed.
const FIGMA_MIXED = Symbol("figma.mixed");

type MockVariable = {
  id: string;
  name: string;
  variableCollectionId: string;
  valuesByMode: Record<string, any>;
};

const variables = new Map<string, MockVariable>();
const collections = new Map<string, { id: string; name: string; defaultModeId: string; modes: { modeId: string }[] }>();

beforeAll(() => {
  (globalThis as any).figma = {
    mixed: FIGMA_MIXED,
    variables: {
      getVariableByIdAsync: async (id: string) => variables.get(id) ?? null,
      getVariableCollectionByIdAsync: async (id: string) => collections.get(id) ?? null,
    },
  };
});

const mod = await import("../../src/plugin/helpers/variable-resolver");

const settings: any = {
  spacingUnit: "px",
  remBase: 16,
  valuePrecision: 0,
  colorFormat: "hex",
  showRawValues: false,
  valuePreference: "variable",
};

function defineCollection(id: string, name: string) {
  collections.set(id, { id, name, defaultModeId: "m1", modes: [{ modeId: "m1" }] });
}

function defineVariable(id: string, name: string, value: any, collectionId = "c1") {
  variables.set(id, { id, name, variableCollectionId: collectionId, valuesByMode: { m1: value } });
}

function alias(id: string) {
  return { type: "VARIABLE_ALIAS", id };
}

beforeEach(() => {
  variables.clear();
  collections.clear();
  mod.clearVariableCache();
  defineCollection("c1", "Color");
});

describe("resolveVariableById – alias chains", () => {
  it("resolves a 3-level chain down to the primitive", async () => {
    defineVariable("v1", "Semantic/Surface/Brand", alias("v2"));
    defineVariable("v2", "Brand/Blue/500", alias("v3"));
    defineVariable("v3", "Palette/Blue/500", { r: 0.04, g: 0.4, b: 1, a: 1 });

    const resolved = (await mod.resolveVariableById("v1", settings))!;
    expect(resolved.chain).toEqual([
      "Color/Semantic/Surface/Brand",
      "Color/Brand/Blue/500",
      "Color/Palette/Blue/500",
    ]);
    expect(resolved.value).toBe("#0A66FF");
    expect(resolved.unresolved).toBeUndefined();
    expect(mod.formatAliasChain(resolved)).toBe(
      "Color/Semantic/Surface/Brand -> Color/Brand/Blue/500 -> Color/Palette/Blue/500 -> #0A66FF"
    );
  });

  it("never truncates the resolved path", async () => {
    const longName = "A".repeat(500) + "/" + "B".repeat(500);
    defineVariable("v1", longName, "#000000");
    const resolved = (await mod.resolveVariableById("v1", settings))!;
    expect(resolved.name).toBe(`Color/${longName}`);
    expect(resolved.name.length).toBeLessThan(LIMITS.TRUNC_VARIABLE_PATH);
  });

  it("marks a cyclic alias pair as unresolved instead of looping forever", async () => {
    defineVariable("v1", "A", alias("v2"));
    defineVariable("v2", "B", alias("v1"));

    const resolved = (await mod.resolveVariableById("v1", settings))!;
    expect(resolved.unresolved).toBe(true);
    expect(resolved.chain).toEqual(["Color/A", "Color/B"]);
  });

  it("marks a self-referencing variable as unresolved", async () => {
    defineVariable("v1", "Loop", alias("v1"));
    const resolved = (await mod.resolveVariableById("v1", settings))!;
    expect(resolved.unresolved).toBe(true);
  });

  it("stops at MAX_ALIAS_CHAIN_DEPTH and flags the result unresolved", async () => {
    const depth = LIMITS.MAX_ALIAS_CHAIN_DEPTH;
    for (let i = 1; i <= depth + 3; i++) {
      defineVariable(`v${i}`, `Level/${i}`, alias(`v${i + 1}`));
    }
    defineVariable(`v${depth + 4}`, "Leaf", "#FFFFFF");

    const resolved = (await mod.resolveVariableById("v1", settings))!;
    expect(resolved.unresolved).toBe(true);
    expect(resolved.chain).toHaveLength(depth);
  });

  it("flags a dangling alias target as unresolved", async () => {
    defineVariable("v1", "Dangling", alias("missing"));
    const resolved = (await mod.resolveVariableById("v1", settings))!;
    expect(resolved.unresolved).toBe(true);
    expect(resolved.chain).toEqual(["Color/Dangling", "missing"]);
  });

  it("returns null for an unknown variable id", async () => {
    expect(await mod.resolveVariableById("nope", settings)).toBeNull();
  });
});

describe("formatRGBA – alpha preservation", () => {
  it("preserves alpha < 1 as hsla instead of an opaque hex", async () => {
    defineVariable("v1", "Overlay/Scrim", { r: 0, g: 0, b: 0, a: 0.5 });
    const resolved = (await mod.resolveVariableById("v1", settings))!;
    expect(resolved.value).toBe("hsla(0, 0%, 0%, 0.50)");
  });

  it("renders a fully opaque colour as hex", () => {
    expect(mod.formatRGBA({ r: 1, g: 0, b: 0, a: 1 } as any, settings)).toBe("#FF0000");
    expect(mod.formatRGBA({ r: 1, g: 0, b: 0 } as any, settings)).toBe("#FF0000");
  });

  it("honours the hsla colour format even at full alpha", () => {
    const hsla = mod.formatRGBA({ r: 1, g: 0, b: 0, a: 1 } as any, { ...settings, colorFormat: "hsla" });
    expect(hsla).toMatch(/^hsla\(/);
  });
});

describe("resolveVariableValue – never '[object Object]'", () => {
  it("resolves an alias to its full chain", async () => {
    defineVariable("v1", "Semantic/Text/Primary", alias("v2"));
    defineVariable("v2", "Palette/Grey/900", { r: 0, g: 0, b: 0, a: 1 });

    const result = (await mod.resolveVariableValue(alias("v1") as any, settings)) as any;
    expect(mod.formatAliasChain(result)).toBe(
      "Color/Semantic/Text/Primary -> Color/Palette/Grey/900 -> #000000"
    );
    expect(result.value).not.toContain("[object Object]");
  });

  it("falls back to the alias id (not '[object Object]') when the target is gone", async () => {
    const result = await mod.resolveVariableValue(alias("ghost") as any, settings);
    expect(result.value).toBe("ghost");
  });

  it("formats every primitive VariableValue shape without stringifying an object", async () => {
    const cases: Array<[any, string]> = [
      [16, "16px"],
      ["Inter", "Inter"],
      [true, "true"],
      [false, "false"],
      [{ r: 1, g: 1, b: 1, a: 1 }, "#FFFFFF"],
    ];
    for (const [value, expected] of cases) {
      const result = await mod.resolveVariableValue(value, settings);
      expect(result.value).toBe(expected);
    }
  });

  it("serializes an unknown object shape structurally", async () => {
    const result = await mod.resolveVariableValue({ weird: 1 } as any, settings);
    expect(result.value).toBe('{"weird":1}');
    expect(result.value).not.toContain("[object Object]");
  });
});

describe("variable cache", () => {
  it("caches per id and clearVariableCache re-reads the document", async () => {
    defineVariable("v1", "Spacing/md", 16);
    expect((await mod.resolveVariableById("v1", settings))!.value).toBe("16px");

    defineVariable("v1", "Spacing/md", 24);
    expect((await mod.resolveVariableById("v1", settings))!.value).toBe("16px");

    mod.clearVariableCache();
    expect((await mod.resolveVariableById("v1", settings))!.value).toBe("24px");
  });

  it("invalidates the cache when value-formatting settings change", async () => {
    defineVariable("v1", "Spacing/md", 16);
    expect((await mod.resolveVariableById("v1", settings))!.value).toBe("16px");
    const rem = { ...settings, spacingUnit: "rem" };
    expect((await mod.resolveVariableById("v1", rem))!.value).toBe("1rem");
  });
});

describe("resolveVariableById – consumer mode context", () => {
  function defineMultiModeCollection(id: string, name: string) {
    collections.set(id, {
      id,
      name,
      defaultModeId: "comfortable",
      modes: [{ modeId: "comfortable" }, { modeId: "compact" }],
    });
  }

  it("resolves in the mode the consuming node renders in, not the collection default", async () => {
    defineMultiModeCollection("c2", "Density");
    variables.set("gap", {
      id: "gap",
      name: "Spacing/Gap/md",
      variableCollectionId: "c2",
      valuesByMode: { comfortable: 16, compact: 8 },
    });

    const asDefault = (await mod.resolveVariableById("gap", settings))!;
    expect(asDefault.value).toBe("16px");

    const asCompact = (await mod.resolveVariableById("gap", settings, { c2: "compact" }))!;
    expect(asCompact.value).toBe("8px");
    // Both results coexist: the cache is keyed by mode context, not by variable id alone.
    expect((await mod.resolveVariableById("gap", settings))!.value).toBe("16px");
  });

  it("follows the consumer's mode through an alias chain", async () => {
    defineMultiModeCollection("c2", "Theme");
    variables.set("semantic", {
      id: "semantic",
      name: "Semantic/Border",
      variableCollectionId: "c2",
      valuesByMode: { comfortable: alias("light"), compact: alias("dark") },
    });
    defineVariable("light", "Gray/200", { r: 1, g: 1, b: 1, a: 1 });
    defineVariable("dark", "Gray/900", { r: 0, g: 0, b: 0, a: 1 });

    expect((await mod.resolveVariableById("semantic", settings))!.value).toBe("#FFFFFF");
    expect((await mod.resolveVariableById("semantic", settings, { c2: "compact" }))!.value).toBe("#000000");
  });

  it("falls back to the collection default when the consumer resolves no mode for it", async () => {
    defineMultiModeCollection("c2", "Density");
    variables.set("gap", {
      id: "gap",
      name: "Spacing/Gap/md",
      variableCollectionId: "c2",
      valuesByMode: { comfortable: 16, compact: 8 },
    });
    const resolved = (await mod.resolveVariableById("gap", settings, { "some-other-collection": "x" }))!;
    expect(resolved.value).toBe("16px");
  });
});

describe("readModeContext", () => {
  it("reads resolvedVariableModes off a node", () => {
    expect(mod.readModeContext({ resolvedVariableModes: { c1: "m1" } } as any)).toEqual({ c1: "m1" });
  });

  it("returns undefined when the API is absent, empty or throws", () => {
    expect(mod.readModeContext(undefined)).toBeUndefined();
    expect(mod.readModeContext({} as any)).toBeUndefined();
    expect(mod.readModeContext({ resolvedVariableModes: {} } as any)).toBeUndefined();
    const throwing = {
      get resolvedVariableModes(): any {
        throw new Error("not supported");
      },
    };
    expect(mod.readModeContext(throwing as any)).toBeUndefined();
  });
});
