/**
 * End-to-end smoke test.
 *
 * Drives the real pipeline (collectAnatomyElements -> collectAttributes ->
 * collectLayoutData / collectNodeSizing -> toAgentReadyDataPayload -> toYaml)
 * over a mocked multibrand design-system component and asserts on the produced
 * YAML string and payload object.
 *
 * `baseline-head.json` is the payload the same fixture produced on commit 124cecc
 * (the state of `src/` before this round of fixes). It exists so the last test can
 * prove no field silently disappeared while the regressions were being fixed.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { parse as parseYaml } from "yaml";
import baselineHead from "./baseline-head.json";
import {
  COLON_LAYER_NAME,
  COMPONENT_SET_NAME,
  COMPONENT_SET_VARIANT,
  DEEPEST_VARIABLE_PATH,
  MID_VARIABLE_PATH,
  NOTES_TEXT,
  ROOT_VARIABLE_PATH,
  SCRIM_VARIABLE_PATH,
  SMOKE_SETTINGS,
  createDocument
} from "./fixture";
import { anatomyRecords, runPipeline } from "./pipeline";
import { clearVariableCache, resolveVariableById } from "../../src/plugin/helpers/variable-resolver";

const ID = {
  root: "1:0",
  header: "1:1",
  icon: "1:2",
  title: "1:3",
  spacer: "1:4",
  banner: "1:5",
  divider: "1:6",
  thumb: "1:7",
  chip: "1:8",
  notes: "1:9",
  list: "1:10",
  rowTemplate: "1:11"
};

let payload: any;
let yaml: string;
let records: Map<string, any>;
let parsed: any;

beforeAll(async () => {
  clearVariableCache();
  const result = await runPipeline(createDocument(), SMOKE_SETTINGS);
  payload = result.payload;
  yaml = result.yaml;
  records = anatomyRecords(payload);
  parsed = parseYaml(yaml);
});

describe("borders", () => {
  it("1. reports stroke_width for the uniform 2px border", () => {
    const chip = records.get(ID.chip);
    expect(chip).toBeDefined();
    expect(chip.stroke_width).toBeDefined();
    expect(String(chip.stroke_width)).toMatch(/^2(px)?$/);
  });

  it("1. reports stroke_width for the per-side border (top 2 / bottom 1 / left-right 0)", () => {
    const divider = records.get(ID.divider);
    expect(divider).toBeDefined();
    expect(divider.stroke_width).toBeDefined();
    // "t r b l" order
    expect(String(divider.stroke_width)).toBe("2px 0px 1px 0px");
    expect(divider.stroke_sides).toBe("border-top: 2px, border-bottom: 1px");
  });
});

describe("corner radii", () => {
  it("2. carries all four corners for the per-corner frame", () => {
    const thumb = records.get(ID.thumb);
    expect(thumb).toBeDefined();
    expect(thumb.radius).toBeDefined();
    // "tl tr br bl"
    expect(String(thumb.radius)).toBe("12px 12px 0px 0px");
  });
});

describe("typography", () => {
  it("3. reports text_case as the UPPER transform and keeps letter_spacing", () => {
    const title = records.get(ID.title);
    expect(title).toBeDefined();
    expect(title.text_case).toBeDefined();
    // The collector lower-cases the enum for output; it must still name the UPPER transform.
    expect(String(title.text_case).toUpperCase()).toBe("UPPER");
    expect(title.letter_spacing).toBeDefined();
    expect(parseFloat(String(title.letter_spacing))).toBe(0.5);
  });
});

describe("auto-layout sizing", () => {
  it("4. reports w_sizing fill / h_sizing auto for the FILL+HUG child", () => {
    const spacer = records.get(ID.spacer);
    expect(spacer).toBeDefined();
    expect(spacer.w_sizing).toBe("fill");
    expect(["auto", "hug"]).toContain(spacer.h_sizing);
  });

  it("4. the auto-layout row itself reports its own sizing, not the parent-derived guess", () => {
    const header = records.get(ID.header);
    expect(header.direction).toBe("row");
    expect(header.w_sizing).toBe("fill");
  });
});

describe("component identity", () => {
  it("5. instance_of is the COMPONENT_SET name and the variant is a separate field", () => {
    const icon = records.get(ID.icon);
    expect(icon).toBeDefined();
    expect(icon.instance_of).toBe(COMPONENT_SET_NAME);
    expect(icon.instance_variant).toBe(COMPONENT_SET_VARIANT);
    expect(icon.instance_of).not.toContain("=");
  });

  it("keeps the colon-bearing layer name intact", () => {
    expect(records.get(ID.icon).name).toBe(COLON_LAYER_NAME);
  });
});

describe("gradients", () => {
  it("6. emits both the gradient fill and the gradient stroke", () => {
    const banner = records.get(ID.banner);
    expect(banner).toBeDefined();

    expect(banner.fill_type).toBe("GRADIENT_LINEAR");
    expect(String(banner.fill)).toContain("linear-gradient(");
    expect(banner.gradient).toBeDefined();
    expect(banner.gradient.stops).toHaveLength(2);
    expect(banner.gradient.stops[0].color).toBe("#0A66FF");
    expect(banner.gradient.stops[1].color).toBe("#FF3366");

    expect(banner.stroke).toBeDefined();
    expect(String(banner.stroke)).toContain("gradient(");
    expect(banner.stroke_width).toBeDefined();
    // A gradient stroke must be as machine-readable as a gradient fill — not a CSS string
    // the agent has to parse back.
    expect(banner.stroke_type).toBe("GRADIENT_ANGULAR");
    expect(banner.stroke_gradient).toBeDefined();
    expect(banner.stroke_gradient.stops).toHaveLength(2);
    expect(banner.stroke_gradient.stops[0].color).toBe("#FF3366");
    expect(banner.stroke_gradient.stops[1].color).toBe("#0A66FF");
  });
});

describe("variable resolution", () => {
  it("7. surfaces the full untruncated alias chain down to the deepest primitive", () => {
    const title = records.get(ID.title);
    expect(title.fill_ref).toBe(ROOT_VARIABLE_PATH);
    expect(title.fill_ref_type).toBe("variable");

    expect(payload.token_aliases).toBeDefined();
    expect(payload.token_aliases[ROOT_VARIABLE_PATH]).toEqual([
      MID_VARIABLE_PATH,
      DEEPEST_VARIABLE_PATH
    ]);
    // The deepest path survives into the emitted document, uncut.
    expect(yaml).toContain(DEEPEST_VARIABLE_PATH);
    expect(payload.resolved_tokens[ROOT_VARIABLE_PATH]).toBe("#0A66FF");
  });

  it("7. a 3-level chain crossing two collections resolves to the leaf colour", async () => {
    const resolved = await resolveVariableById("var:surface", SMOKE_SETTINGS);
    expect(resolved).not.toBeNull();
    expect(resolved!.chain).toEqual([
      ROOT_VARIABLE_PATH,
      MID_VARIABLE_PATH,
      DEEPEST_VARIABLE_PATH
    ]);
    expect(resolved!.value).toBe("#0A66FF");
    expect(resolved!.unresolved).toBeUndefined();
  });

  it("preserves alpha on the RGBA 0.5 variable instead of collapsing to an opaque hex", async () => {
    const resolved = await resolveVariableById("var:scrim", SMOKE_SETTINGS);
    expect(resolved!.value).toBe("hsla(0, 0%, 0%, 0.50)");

    const thumb = records.get(ID.thumb);
    expect(thumb.fill_ref).toBe(SCRIM_VARIABLE_PATH);
    expect(String(thumb.fill)).toContain("0.50");
    expect(String(thumb.fill)).not.toBe("#000000");
  });
});

describe("instance dedup", () => {
  it("collapses the three sibling rows into one template plus two repeats", () => {
    const repeats = payload.chunks.filter((c: any) => c.kind === "repeats");
    expect(repeats).toHaveLength(1);
    const chunk = repeats[0];
    expect(chunk.template_node_id).toBe(ID.rowTemplate);
    expect(chunk.repeat_count).toBe(2);
    expect(chunk.varying_keys).toContain("Row/Label/text");
    expect(chunk.items.map((i: any) => i.diffs["Row/Label/text"])).toEqual(["Beta", "Gamma"]);
    // Repeat nodes must not also appear in the anatomy chunks.
    expect(records.has("1:12")).toBe(false);
    expect(records.has("1:13")).toBe(false);
  });
});

describe("output integrity", () => {
  it('8. never emits "[object Object]"', () => {
    expect(yaml.split("[object Object]").length - 1).toBe(0);
    expect(JSON.stringify(payload).split("[object Object]").length - 1).toBe(0);
  });

  it("9. the YAML parses and round-trips the awkward scalars", () => {
    expect(parsed).toBeTruthy();
    expect(parsed.schema).toBe(payload.schema);
    expect(parsed.chunks).toHaveLength(payload.chunks.length);

    const reparsed = new Map<string, any>();
    for (const chunk of parsed.chunks) {
      if (chunk.kind !== "anatomy") continue;
      for (const item of chunk.items) reparsed.set(item.node_id, item);
    }
    // A newline + colon + leading dash must survive the round trip verbatim.
    expect(reparsed.get(ID.notes).text).toBe(NOTES_TEXT);
    expect(reparsed.get(ID.icon).name).toBe(COLON_LAYER_NAME);
    expect(reparsed.get(ID.divider).stroke_sides).toBe("border-top: 2px, border-bottom: 1px");
    expect(reparsed.get(ID.thumb).radius).toBe("12px 12px 0px 0px");
  });

  it("9. no raw control character leaks into a scalar", () => {
    // Belt and braces on top of the parser: a bare newline inside a scalar is what
    // broke the document before, so nothing unprintable may reach the output.
    const control = /[\u0000-\u0008\u000B\u000C\u000E-\u001F]/;
    for (const line of yaml.split("\n")) {
      expect(control.test(line)).toBe(false);
    }
  });
});

describe("regression guard", () => {
  it("10. every field HEAD produced for this fixture is still produced", () => {
    const collect = (value: any, path: string, out: Set<string>) => {
      if (Array.isArray(value)) {
        value.forEach((entry, index) => collect(entry, `${path}[${index}]`, out));
      } else if (value && typeof value === "object") {
        for (const [key, entry] of Object.entries(value)) {
          collect(entry, path ? `${path}.${key}` : key, out);
        }
      }
      if (path) out.add(path);
    };

    const before = new Set<string>();
    collect(baselineHead, "", before);
    const after = new Set<string>();
    collect(payload, "", after);
    // generated_at is stripped from the stored baseline (it is not reproducible).
    after.delete("generated_at");

    const missing = [...before].filter((path) => !after.has(path)).sort();
    expect(missing).toEqual([]);
  });
});
