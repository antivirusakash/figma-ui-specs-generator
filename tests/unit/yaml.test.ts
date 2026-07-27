import { describe, it, expect } from "vitest";
import { toYaml, yamlNeedsQuoting, stripNulls } from "../../src/plugin/sections/data-section";

describe("yamlNeedsQuoting", () => {
  it("quotes empty string", () => expect(yamlNeedsQuoting("")).toBe(true));
  it("quotes strings with colon", () => expect(yamlNeedsQuoting("key: value")).toBe(true));
  it("quotes strings with hash", () => expect(yamlNeedsQuoting("#1A1A2E")).toBe(true));
  it("quotes strings with bracket", () => expect(yamlNeedsQuoting("[1,2]")).toBe(true));
  it("quotes strings with brace", () => expect(yamlNeedsQuoting("{a}")).toBe(true));
  it("quotes leading whitespace", () => expect(yamlNeedsQuoting(" hello")).toBe(true));
  it("quotes trailing whitespace", () => expect(yamlNeedsQuoting("hello ")).toBe(true));
  it("quotes numeric strings", () => expect(yamlNeedsQuoting("123")).toBe(true));
  it("quotes boolean-like strings", () => {
    expect(yamlNeedsQuoting("true")).toBe(true);
    expect(yamlNeedsQuoting("false")).toBe(true);
    expect(yamlNeedsQuoting("null")).toBe(true);
    expect(yamlNeedsQuoting("yes")).toBe(true);
    expect(yamlNeedsQuoting("no")).toBe(true);
  });
  it("does not quote simple strings", () => {
    expect(yamlNeedsQuoting("hello")).toBe(false);
    expect(yamlNeedsQuoting("FRAME")).toBe(false);
    expect(yamlNeedsQuoting("Inter Medium")).toBe(false);
  });
});

describe("toYaml", () => {
  it("serializes primitives", () => {
    expect(toYaml(42)).toBe("42");
    expect(toYaml(true)).toBe("true");
    expect(toYaml("hello")).toBe("hello");
    expect(toYaml("true")).toBe('"true"');
  });

  it("serializes flat object", () => {
    const result = toYaml({ name: "Header", type: "FRAME", w: 375 });
    expect(result).toBe("name: Header\ntype: FRAME\nw: 375");
  });

  it("serializes nested object", () => {
    const result = toYaml({ selection: { node_id: "14304:14047", name: "Profile" } });
    expect(result).toBe("selection:\n  node_id: \"14304:14047\"\n  name: Profile");
  });

  it("serializes short primitive array inline", () => {
    const result = toYaml({ ids: ["a", "b", "c"] });
    expect(result).toBe("ids:\n  [a, b, c]");
  });

  it("serializes array of objects in block form", () => {
    const result = toYaml({
      items: [
        { name: "A", type: "FRAME" },
        { name: "B", type: "TEXT" }
      ]
    });
    expect(result).toContain("- name: A");
    expect(result).toContain("  type: FRAME");
    expect(result).toContain("- name: B");
    expect(result).toContain("  type: TEXT");
  });

  it("quotes hex colors", () => {
    const result = toYaml({ fill: "#1A1A2E" });
    expect(result).toBe('fill: "#1A1A2E"');
  });

  it("handles empty array", () => {
    expect(toYaml({ items: [] })).toBe("items:\n  []");
  });

  it("handles empty object", () => {
    expect(toYaml({})).toBe("{}");
  });

  it("serializes a realistic agent-ready snippet", () => {
    const data = {
      schema: "specs-plugin.agent_pack.v5.yaml",
      selection: { node_id: "14304:14047", name: "Profile Screen", type: "FRAME" },
      chunks: [
        {
          chunk_id: "anatomy_1",
          kind: "anatomy",
          items: [
            { node_id: "14304:14052", name: "Header", type: "FRAME", fill: "#1A1A2E", w: 375, h: 64 }
          ]
        }
      ]
    };
    const yaml = toYaml(data);
    expect(yaml).toContain("schema: specs-plugin.agent_pack.v5.yaml");
    expect(yaml).toContain('node_id: "14304:14047"');
    expect(yaml).toContain("name: Profile Screen");
    expect(yaml).toContain("chunk_id: anatomy_1");
    expect(yaml).toContain('fill: "#1A1A2E"');
    expect(yaml).toContain("w: 375");
    // No JSON artifacts
    expect(yaml).not.toContain("{");
    expect(yaml).not.toContain("}");
  });

  it("handles null and undefined gracefully", () => {
    expect(toYaml(null)).toBe("null");
    expect(toYaml(undefined)).toBe("null");
  });
});

describe("resolved_tokens in YAML output", () => {
  it("serializes resolved_tokens map correctly", () => {
    const data = {
      schema: "specs-plugin.agent_pack.v5.yaml",
      resolved_tokens: {
        "Default/Grey/grey-90": "#2B3345",
        "H5/Bold": "Inter Bold",
        "Default/White/white": "#FFFFFF"
      }
    };
    const yaml = toYaml(data);
    expect(yaml).toContain("resolved_tokens:");
    expect(yaml).toContain('Default/Grey/grey-90: "#2B3345"');
    expect(yaml).toContain("H5/Bold: Inter Bold");
    expect(yaml).toContain('Default/White/white: "#FFFFFF"');
  });

  it("omits resolved_tokens when undefined (via stripNulls)", () => {
    const data = {
      schema: "test",
      resolved_tokens: undefined,
      chunks: []
    };
    const cleaned = stripNulls(data);
    expect(cleaned).not.toHaveProperty("resolved_tokens");
    const yaml = toYaml(cleaned);
    expect(yaml).not.toContain("resolved_tokens");
  });

  it("includes resolved_tokens in a full payload structure", () => {
    const data = {
      schema: "specs-plugin.agent_pack.v5.yaml.compact",
      selection: { node_id: "1:2", name: "Button", type: "COMPONENT" },
      resolved_tokens: {
        "Primary/Blue/500": "#3B82F6"
      },
      chunks: []
    };
    const yaml = toYaml(stripNulls(data));
    expect(yaml).toContain("resolved_tokens:");
    expect(yaml).toContain('Primary/Blue/500: "#3B82F6"');
    expect(yaml).toContain("schema: specs-plugin.agent_pack.v5.yaml.compact");
  });

  it("handles empty resolved_tokens (stripped as undefined)", () => {
    const data = {
      schema: "test",
      resolved_tokens: undefined
    };
    const cleaned = stripNulls(data);
    const yaml = toYaml(cleaned);
    expect(yaml).not.toContain("resolved_tokens");
  });
});

describe("toYaml – quoting contract", () => {
  it("quotes a mapping key that contains a colon", () => {
    expect(toYaml({ "Icon: left": "a" })).toBe('"Icon: left": a');
  });

  it("quotes mapping keys inside block arrays too", () => {
    expect(toYaml([{ "Icon: left": "a", "b#1": "c" }])).toBe('- "Icon: left": a\n  "b#1": c');
  });

  it("keeps a multi-line value on one line as an escaped double-quoted scalar", () => {
    expect(toYaml({ text: "a\nb" })).toBe('text: "a\\nb"');
    expect(toYaml({ text: "a\tb\r\nc" })).toBe('text: "a\\tb\\r\\nc"');
  });

  it("quotes a value with a leading dash so it is not read as a sequence", () => {
    expect(toYaml({ label: "- item" })).toBe('label: "- item"');
    expect(yamlNeedsQuoting("- item")).toBe(true);
  });

  it("quotes values starting with other YAML indicator characters", () => {
    for (const value of ["?x", "&anchor", "*alias", "!tag", "|block", ">fold", "%directive", "@at", "`tick", "'q", '"q']) {
      expect(yamlNeedsQuoting(value)).toBe(true);
    }
  });

  it("escapes backslashes and embedded double quotes losslessly", () => {
    expect(toYaml({ path: 'C:\\a "b"' })).toBe('path: "C:\\\\a \\"b\\""');
  });

  it("does not quote a value whose dash is not in first position", () => {
    expect(yamlNeedsQuoting("mid-dash")).toBe(false);
    expect(toYaml({ label: "mid-dash" })).toBe("label: mid-dash");
  });
});

describe("yamlNeedsQuoting – silent retyping guards", () => {
  it("quotes every YAML 1.1 boolean/null spelling, not just the lowercase five", () => {
    for (const value of ["No", "Yes", "ON", "OFF", "True", "TRUE", "Null", "NULL", "~", "y", "N"]) {
      expect(yamlNeedsQuoting(value)).toBe(true);
    }
  });

  it("quotes signed, exponent and radix numbers", () => {
    for (const value of ["+5", "-3", "1e6", "-2.5e-3", "0x1F", "0o17", "0b1010", ".inf", ".nan"]) {
      expect(yamlNeedsQuoting(value)).toBe(true);
    }
  });

  it("still leaves ordinary label-shaped strings bare", () => {
    for (const value of ["16px", "Inter Medium", "FRAME", "row", "Yesterday", "onboarding"]) {
      expect(yamlNeedsQuoting(value)).toBe(false);
    }
  });

  it("quotes every unprintable character, not only \\n \\r \\t", () => {
    for (const code of [0x00, 0x08, 0x0b, 0x0c, 0x1f, 0x7f, 0x85, 0x9f, 0x2028, 0x2029]) {
      expect(yamlNeedsQuoting(`a${String.fromCharCode(code)}b`)).toBe(true);
    }
  });
});

describe("toYaml – unprintable characters", () => {
  it("escapes an unprintable character instead of emitting it raw", () => {
    const out = toYaml({ text: "By continuing\u2028you agree" });
    expect(out).toBe('text: "By continuing\\u2028you agree"');
    expect(out).not.toContain("\u2028");
  });

  it("escapes a vertical tab (Word's Shift+Enter) as \\x0b", () => {
    const out = toYaml({ text: "line one\u000bline two" });
    expect(out).toBe('text: "line one\\x0bline two"');
  });

  it("never lets an unprintable character reach any emitted line", () => {
    const control = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F\u2028\u2029]/;
    const payload = { items: [{ text: "a\u0007b" }, { name: "c\u0085d" }] };
    for (const line of toYaml(payload).split("\n")) {
      expect(control.test(line)).toBe(false);
    }
  });
});

describe("toYaml – nested sequences", () => {
  it("keeps a sequence nested inside a sequence indented under its parent item", () => {
    const out = toYaml({ a: [true, [["plain"], "x", { k: true }]] });
    for (const line of out.split("\n")) {
      // Only the top-level key may start at column 0.
      if (line === "a:") continue;
      expect(line.startsWith(" ")).toBe(true);
    }
    expect(out).toBe(["a:", "  - true", "  - - [plain]", "    - x", "    - k: true"].join("\n"));
  });
});
