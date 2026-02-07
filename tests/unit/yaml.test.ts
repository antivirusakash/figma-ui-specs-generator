import { describe, it, expect } from "vitest";
import { toYaml, yamlNeedsQuoting } from "../../src/plugin/sections/data-section";

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
