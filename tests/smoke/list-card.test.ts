/**
 * End-to-end regression cover for the defects found in a real "Profile" screen pack.
 *
 * Every case here was reproduced from that pack before it was fixed:
 *   - identical repeated instances were deleted from the output entirely
 *   - the coverage counters reported the deleted nodes as included
 *   - rows whose divider had been removed still reported `stroke_sides`
 *   - a typography style overwrote `fill_ref` and landed in `resolved_tokens` as a hex
 *   - undecorated frames were re-attached at root instead of inside the tree
 *   - children of a guessed layout carried no coordinates, so a top bar built at the bottom
 */
import { describe, it, expect, beforeEach } from "vitest";
import "./fixture";
import { runPipeline, anatomyRecords } from "./pipeline";
import type { Settings } from "../../src/plugin/types";

type Any = any;

const settings = {
  units: "px",
  colorFormat: "hex",
  schemaVersion: "v14",
  compact: true
} as unknown as Settings;

const TEXT_STYLE_ID = "S:textstyle";

function link(node: Any): Any {
  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      child.parent = node;
      link(child);
    }
  }
  return node;
}

function solid(hex: { r: number; g: number; b: number }) {
  return { type: "SOLID", visible: true, opacity: 1, color: { ...hex, a: 1 } };
}

const GREY = { r: 0.18, g: 0.18, b: 0.2 };
const WHITE = { r: 1, g: 1, b: 1 };

/** A 20x20 icon instance. Two icons with the same name/size/fill fingerprint the same. */
function icon(id: string, name: string, x: number, y: number): Any {
  const main = { id: `main:${name}`, name, type: "COMPONENT", parent: null };
  return {
    id,
    name,
    type: "INSTANCE",
    visible: true,
    opacity: 1,
    width: 20,
    height: 20,
    absoluteBoundingBox: { x, y, width: 20, height: 20 },
    fills: [solid({ r: 0.46, g: 0.46, b: 0.49 })],
    strokes: [],
    effects: [],
    children: [],
    mainComponent: main,
    getMainComponentAsync: async () => main,
    componentProperties: {}
  };
}

/**
 * A list row. `withDivider: false` models the last row of a card: the designer deleted the
 * stroke paint but Figma keeps `strokeBottomWeight` at 1.
 */
function listRow(id: string, y: number, leading: string, withDivider: boolean): Any {
  return {
    id,
    name: "Option Row",
    type: "FRAME",
    visible: true,
    opacity: 1,
    width: 320,
    height: 56,
    absoluteBoundingBox: { x: 0, y, width: 320, height: 56 },
    layoutMode: "HORIZONTAL",
    primaryAxisAlignItems: "SPACE_BETWEEN",
    counterAxisAlignItems: "CENTER",
    primaryAxisSizingMode: "FIXED",
    counterAxisSizingMode: "AUTO",
    itemSpacing: 8,
    paddingTop: 16,
    paddingRight: 20,
    paddingBottom: 16,
    paddingLeft: 20,
    fills: [],
    strokes: withDivider ? [solid(GREY)] : [],
    strokeWeight: 1,
    strokeAlign: "INSIDE",
    strokeTopWeight: 0,
    strokeRightWeight: 0,
    strokeBottomWeight: 1,
    strokeLeftWeight: 0,
    effects: [],
    children: [icon(`${id}:lead`, leading, 20, y + 18), icon(`${id}:caret`, "CaretRight", 280, y + 18)]
  };
}

/** Text carrying a text style and a plain (unbound, unstyled) white fill. */
function styledText(id: string, x: number, y: number, chars: string): Any {
  return {
    id,
    name: chars,
    type: "TEXT",
    visible: true,
    opacity: 1,
    width: 120,
    height: 24,
    absoluteBoundingBox: { x, y, width: 120, height: 24 },
    characters: chars,
    fills: [solid(WHITE)],
    strokes: [],
    effects: [],
    fontName: { family: "Inter", style: "Bold" },
    fontSize: 24,
    lineHeight: { unit: "PERCENT", value: 120 },
    letterSpacing: { unit: "PIXELS", value: 0 },
    textAlignHorizontal: "LEFT",
    textCase: "ORIGINAL",
    textDecoration: "NONE",
    paragraphSpacing: 0,
    textAutoResize: "HEIGHT",
    textStyleId: TEXT_STYLE_ID,
    fillStyleId: "",
    getStyledTextSegments: () => []
  };
}

/**
 * Root has no auto-layout, so its layout is guessed. `TopBar` is the LAST child but sits at
 * the top of the screen — following the guessed column order alone builds it at the bottom.
 */
function createScreen(): Any {
  const rows = [
    listRow("row:0", 100, "BowlFood", true),
    listRow("row:1", 156, "Repeat", true),
    listRow("row:2", 212, "Repeat", false)
  ];

  // depth 4, no fill/stroke/effect: isRelevantNode drops it, collectLayoutData still infers it.
  const plain = {
    id: "plain",
    name: "Plain Group",
    type: "FRAME",
    visible: true,
    opacity: 1,
    width: 120,
    height: 48,
    absoluteBoundingBox: { x: 0, y: 268, width: 120, height: 48 },
    fills: [],
    strokes: [],
    effects: [],
    children: [styledText("plain:a", 0, 268, "Akash"), styledText("plain:b", 0, 292, "Solanki")]
  };

  const footer = {
    id: "footer",
    name: "Footer",
    type: "FRAME",
    visible: true,
    opacity: 1,
    width: 320,
    height: 48,
    absoluteBoundingBox: { x: 0, y: 268, width: 320, height: 48 },
    layoutMode: "HORIZONTAL",
    primaryAxisAlignItems: "MIN",
    counterAxisAlignItems: "CENTER",
    primaryAxisSizingMode: "FIXED",
    counterAxisSizingMode: "AUTO",
    itemSpacing: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    fills: [],
    strokes: [],
    effects: [],
    children: [plain]
  };

  const body = {
    id: "body",
    name: "Body",
    type: "FRAME",
    visible: true,
    opacity: 1,
    width: 320,
    height: 216,
    absoluteBoundingBox: { x: 0, y: 100, width: 320, height: 216 },
    layoutMode: "VERTICAL",
    primaryAxisAlignItems: "MIN",
    counterAxisAlignItems: "MIN",
    primaryAxisSizingMode: "AUTO",
    counterAxisSizingMode: "FIXED",
    itemSpacing: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    fills: [solid({ r: 0.11, g: 0.11, b: 0.12 })],
    strokes: [],
    effects: [],
    children: [...rows, footer]
  };

  const topBar = {
    id: "topbar",
    name: "TopBar",
    type: "FRAME",
    visible: true,
    opacity: 1,
    width: 320,
    height: 60,
    absoluteBoundingBox: { x: 0, y: 0, width: 320, height: 60 },
    layoutMode: "HORIZONTAL",
    primaryAxisAlignItems: "CENTER",
    counterAxisAlignItems: "CENTER",
    primaryAxisSizingMode: "FIXED",
    counterAxisSizingMode: "FIXED",
    itemSpacing: 8,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    fills: [solid({ r: 0.05, g: 0.05, b: 0.05 })],
    strokes: [],
    effects: [],
    children: []
  };

  return link({
    id: "screen",
    name: "Screen",
    type: "FRAME",
    visible: true,
    opacity: 1,
    width: 320,
    height: 380,
    absoluteBoundingBox: { x: 0, y: 0, width: 320, height: 380 },
    fills: [solid({ r: 0.05, g: 0.05, b: 0.05 })],
    strokes: [],
    effects: [],
    clipsContent: true,
    // Deliberately out of visual order: TopBar renders at y=0 but is listed last.
    children: [body, topBar]
  });
}

async function run() {
  return runPipeline(createScreen(), settings);
}

describe("list card pack", () => {
  beforeEach(() => {
    (globalThis as Any).figma.getStyleByIdAsync = async (id: string) =>
      id === TEXT_STYLE_ID ? { id, name: "H5/Bold", type: "TEXT" } : null;
  });

  it("keeps identical repeated instances reachable", async () => {
    const { payload } = await run();
    const anatomyIds = new Set(anatomyRecords(payload).keys());
    const repeats = payload.chunks.filter((c: Any) => c.kind === "repeats");
    const repeatIds = new Set<string>(
      repeats.flatMap((c: Any) => [c.template_node_id, ...c.items.map((i: Any) => i.node_id)])
    );

    // The three chevrons are byte-identical, so they dedup to one template with no diffs.
    for (const id of ["row:0:caret", "row:1:caret", "row:2:caret"]) {
      expect(anatomyIds.has(id) || repeatIds.has(id)).toBe(true);
    }
    const caretChunk = repeats.find((c: Any) => c.instance_of === "CaretRight");
    expect(caretChunk).toBeDefined();
    expect(caretChunk.varying_keys).toBeUndefined();
  });

  it("reconciles the coverage counters with what it emitted", async () => {
    const { payload, dataModel } = await run();
    const emitted = payload.chunks
      .filter((c: Any) => c.kind === "anatomy")
      .reduce((n: number, c: Any) => n + c.items.length, 0);
    const { anatomy_included, anatomy_deduplicated, anatomy_dropped } = payload.summary.truncated;

    expect(anatomy_included).toBe(emitted);
    expect(anatomy_included + anatomy_deduplicated + anatomy_dropped).toBe(dataModel.anatomy.length);
  });

  it("reports a divider only on rows that still have a stroke paint", async () => {
    const { payload } = await run();
    const records = anatomyRecords(payload);

    expect(records.get("row:0")!.stroke_sides).toBe("border-bottom: 1px");
    expect(records.get("row:0")!.stroke).toBeDefined();
    // Paint deleted, weight retained — must not claim a border.
    expect(records.get("row:2")!.stroke_sides).toBeUndefined();
    expect(records.get("row:2")!.stroke).toBeUndefined();
  });

  it("never puts a typography style in fill_ref or resolved_tokens", async () => {
    const { payload } = await run();
    const record = anatomyRecords(payload).get("plain:a")!;

    expect(record.text_style).toBe("H5/Bold");
    expect(record.fill).toBe("#FFFFFF");
    expect(record.fill_ref).toBeUndefined();
    expect(record.fill_ref_type).toBeUndefined();
    expect(payload.resolved_tokens?.["H5/Bold"]).toBeUndefined();
  });

  it("nests undecorated frames instead of re-attaching them at root", async () => {
    const { dataModel } = await run();
    const plain = dataModel.anatomy.find((el) => el.nodeId === "plain")!;
    const child = dataModel.anatomy.find((el) => el.nodeId === "plain:a")!;

    expect(plain).toBeDefined();
    expect(plain.depth).toBeGreaterThan(0);
    // A parent renders one level shallower than its child, and ahead of it in the tree.
    expect(plain.depth).toBe((child.depth ?? 0) - 1);
    expect(dataModel.anatomy.indexOf(plain)).toBeLessThan(dataModel.anatomy.indexOf(child));
  });

  it("carries real coordinates for children of a guessed layout", async () => {
    const { payload } = await run();
    const records = anatomyRecords(payload);
    const screen = records.get("screen")!;
    const topBar = records.get("topbar")!;
    const body = records.get("body")!;

    expect(screen.inferred).toBe(true);
    // TopBar is the last child but sits at the top; without the offsets an agent following
    // the guessed column order builds it below the body.
    expect(topBar.parent_y).toBe(0);
    expect(body.parent_y).toBe(100);
    expect(topBar.parent_y).toBeLessThan(body.parent_y);
  });
});
