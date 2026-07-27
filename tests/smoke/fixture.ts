/**
 * Multibrand design-system fixture for the end-to-end smoke test.
 *
 * This module is deliberately dependency-free (no `src/` imports) so the exact same
 * document can be replayed against an older checkout of `src/` to produce a payload
 * baseline. Installing the Figma mock is a module side effect: it must be in place
 * before any `src/` module runs a function that touches `figma`.
 */

export const FIGMA_MIXED = Symbol("figma.mixed");

type Any = any;

function alias(id: string) {
  return { type: "VARIABLE_ALIAS", id };
}

function solid(r: number, g: number, b: number, a = 1) {
  return { type: "SOLID", visible: true, opacity: 1, color: { r, g, b, a } };
}

// ─── Variable collections ─────────────────────────────────────────────────────
// "Theme" carries two modes whose values are ALIASES — the exact shape that used to
// stringify to "[object Object]". "Primitive" holds the leaf colours.

export const COLLECTIONS: Record<string, Any> = {
  "col:theme": {
    id: "col:theme",
    name: "Theme",
    defaultModeId: "mode:light",
    modes: [
      { modeId: "mode:light", name: "Light" },
      { modeId: "mode:dark", name: "Dark" }
    ]
  },
  "col:primitive": {
    id: "col:primitive",
    name: "Primitive",
    defaultModeId: "mode:default",
    modes: [{ modeId: "mode:default", name: "Default" }]
  }
};

export const VARIABLES: Record<string, Any> = {
  // Level 1 — semantic, per-mode aliases
  "var:surface": {
    id: "var:surface",
    name: "Semantic/Surface",
    variableCollectionId: "col:theme",
    valuesByMode: {
      "mode:light": alias("var:brand500"),
      "mode:dark": alias("var:brand700")
    }
  },
  // Level 2 — brand ramp, still an alias
  "var:brand500": {
    id: "var:brand500",
    name: "Brand/Blue/500",
    variableCollectionId: "col:theme",
    valuesByMode: {
      "mode:light": alias("var:blue500"),
      "mode:dark": alias("var:blue500")
    }
  },
  "var:brand700": {
    id: "var:brand700",
    name: "Brand/Blue/700",
    variableCollectionId: "col:theme",
    valuesByMode: {
      "mode:light": alias("var:blue700"),
      "mode:dark": alias("var:blue700")
    }
  },
  // Level 3 — primitives (different collection)
  "var:blue500": {
    id: "var:blue500",
    name: "blue-500",
    variableCollectionId: "col:primitive",
    valuesByMode: { "mode:default": { r: 10 / 255, g: 102 / 255, b: 1, a: 1 } }
  },
  "var:blue700": {
    id: "var:blue700",
    name: "blue-700",
    variableCollectionId: "col:primitive",
    valuesByMode: { "mode:default": { r: 7 / 255, g: 71 / 255, b: 178 / 255, a: 1 } }
  },
  // RGBA with alpha 0.5 — must not collapse to an opaque hex
  "var:scrim": {
    id: "var:scrim",
    name: "overlay/scrim",
    variableCollectionId: "col:primitive",
    valuesByMode: { "mode:default": { r: 0, g: 0, b: 0, a: 0.5 } }
  },
  "var:borderStrong": {
    id: "var:borderStrong",
    name: "Semantic/Border/Strong",
    variableCollectionId: "col:theme",
    valuesByMode: {
      "mode:light": alias("var:blue500"),
      "mode:dark": alias("var:blue500")
    }
  }
};

/** The full alias path the deepest variable resolves through. */
export const DEEPEST_VARIABLE_PATH = "Primitive/blue-500";
export const ROOT_VARIABLE_PATH = "Theme/Semantic/Surface";
export const MID_VARIABLE_PATH = "Theme/Brand/Blue/500";
export const SCRIM_VARIABLE_PATH = "Primitive/overlay/scrim";
export const COMPONENT_SET_NAME = "Icon Button";
export const COMPONENT_SET_VARIANT = "Size=Large, Type=Primary";
export const COLON_LAYER_NAME = "Icon: left";
export const NOTES_TEXT = "- Note: multibrand tokens\nsecond line";

/** Installs the Figma global the collectors read from. Idempotent. */
export function installFigmaMock() {
  (globalThis as Any).figma = {
    mixed: FIGMA_MIXED,
    getStyleByIdAsync: async () => null,
    variables: {
      getVariableByIdAsync: async (id: string) => VARIABLES[id] ?? null,
      getVariableCollectionByIdAsync: async (id: string) => COLLECTIONS[id] ?? null
    }
  };
}

installFigmaMock();

// ─── Document ─────────────────────────────────────────────────────────────────

function box(x: number, y: number, width: number, height: number) {
  return { x, y, width, height };
}

/** Wire `parent` on every descendant so component-set / auto-layout lookups work. */
function link(node: Any): Any {
  if (Array.isArray(node.children)) {
    for (const child of node.children) {
      child.parent = node;
      link(child);
    }
  }
  return node;
}

function textNode(over: Any): Any {
  return {
    type: "TEXT",
    visible: true,
    opacity: 1,
    fills: [solid(17 / 255, 24 / 255, 39 / 255)],
    strokes: [],
    fontName: { family: "Inter", style: "Regular" },
    fontSize: 14,
    lineHeight: { unit: "AUTO" },
    letterSpacing: { unit: "PIXELS", value: 0 },
    textAlignHorizontal: "LEFT",
    textCase: "ORIGINAL",
    textDecoration: "NONE",
    paragraphSpacing: 0,
    textAutoResize: "HEIGHT",
    textStyleId: "",
    getStyledTextSegments: () => [],
    ...over
  };
}

/** Builds the mocked document and returns its root node. */
export function createDocument(): Any {
  // COMPONENT_SET the icon instance points into — instance_of must resolve to the SET
  // name, never to the variant string carried by the COMPONENT itself.
  const iconVariant: Any = {
    id: "90:1",
    name: COMPONENT_SET_VARIANT,
    type: "COMPONENT"
  };
  iconVariant.parent = { id: "90:0", name: COMPONENT_SET_NAME, type: "COMPONENT_SET" };

  // Plain component behind the repeated rows.
  const rowComponent: Any = { id: "91:0", name: "List Row", type: "COMPONENT", parent: null };

  const row = (id: string, y: number, label: string): Any => ({
    id,
    name: "Row",
    type: "INSTANCE",
    visible: true,
    opacity: 1,
    width: 328,
    height: 40,
    absoluteBoundingBox: box(16, y, 328, 40),
    fills: [solid(1, 1, 1)],
    strokes: [],
    strokeWeight: 0,
    cornerRadius: 0,
    effects: [],
    componentProperties: {},
    getMainComponentAsync: async () => rowComponent,
    layoutSizingHorizontal: "FILL",
    layoutSizingVertical: "FIXED",
    children: [
      textNode({
        id: `${id}:1`,
        name: "Label",
        characters: label,
        width: 200,
        height: 20,
        absoluteBoundingBox: box(16, y + 10, 200, 20),
        layoutSizingHorizontal: "HUG",
        layoutSizingVertical: "HUG"
      })
    ]
  });

  const root: Any = {
    id: "1:0",
    name: "Product Card",
    type: "FRAME",
    visible: true,
    opacity: 1,
    width: 360,
    height: 520,
    absoluteBoundingBox: box(0, 0, 360, 520),
    fills: [solid(1, 1, 1)],
    strokes: [],
    strokeWeight: 0,
    cornerRadius: 16,
    effects: [],
    clipsContent: true,
    layoutMode: "VERTICAL",
    layoutWrap: "NO_WRAP",
    primaryAxisAlignItems: "MIN",
    counterAxisAlignItems: "MIN",
    primaryAxisSizingMode: "AUTO",
    counterAxisSizingMode: "FIXED",
    itemSpacing: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    layoutSizingHorizontal: "FIXED",
    layoutSizingVertical: "HUG",
    children: [
      // ── Auto-layout row: FILL child + colon-bearing layer + variant instance ──
      {
        id: "1:1",
        name: "Header",
        type: "FRAME",
        visible: true,
        opacity: 1,
        width: 328,
        height: 24,
        absoluteBoundingBox: box(16, 16, 328, 24),
        fills: [],
        strokes: [],
        strokeWeight: 0,
        cornerRadius: 0,
        effects: [],
        clipsContent: false,
        layoutMode: "HORIZONTAL",
        layoutWrap: "NO_WRAP",
        primaryAxisAlignItems: "MIN",
        counterAxisAlignItems: "CENTER",
        primaryAxisSizingMode: "FIXED",
        counterAxisSizingMode: "AUTO",
        itemSpacing: 8,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        layoutSizingHorizontal: "FILL",
        layoutSizingVertical: "HUG",
        children: [
          {
            id: "1:2",
            name: COLON_LAYER_NAME,
            type: "INSTANCE",
            visible: true,
            opacity: 1,
            width: 24,
            height: 24,
            absoluteBoundingBox: box(16, 16, 24, 24),
            fills: [],
            strokes: [],
            strokeWeight: 0,
            cornerRadius: 0,
            effects: [],
            componentProperties: {
              "Size#90:2": { type: "VARIANT", value: "Large" },
              "Type#90:3": { type: "VARIANT", value: "Primary" }
            },
            getMainComponentAsync: async () => iconVariant,
            layoutSizingHorizontal: "FIXED",
            layoutSizingVertical: "FIXED",
            children: [
              {
                id: "1:2:1",
                name: "vector",
                type: "VECTOR",
                visible: true,
                opacity: 1,
                width: 24,
                height: 24,
                absoluteBoundingBox: box(16, 16, 24, 24),
                fills: [solid(10 / 255, 102 / 255, 1)],
                strokes: [],
                strokeWeight: 0,
                effects: []
              }
            ]
          },
          // UPPER text case + 0.5px letter spacing + 3-level variable alias fill
          textNode({
            id: "1:3",
            name: "Title",
            characters: "Multibrand card",
            width: 200,
            height: 24,
            absoluteBoundingBox: box(48, 16, 200, 24),
            fontName: { family: "Inter", style: "Semi Bold" },
            fontSize: 18,
            lineHeight: { unit: "PIXELS", value: 24 },
            letterSpacing: { unit: "PIXELS", value: 0.5 },
            textCase: "UPPER",
            textAutoResize: "WIDTH_AND_HEIGHT",
            fills: [solid(10 / 255, 102 / 255, 1)],
            boundVariables: { fills: [alias("var:surface")] },
            layoutSizingHorizontal: "HUG",
            layoutSizingVertical: "HUG"
          }),
          // FILL horizontally, HUG vertically
          {
            id: "1:4",
            name: "Spacer",
            type: "FRAME",
            visible: true,
            opacity: 1,
            width: 96,
            height: 24,
            absoluteBoundingBox: box(256, 16, 96, 24),
            fills: [],
            strokes: [],
            strokeWeight: 0,
            cornerRadius: 0,
            effects: [],
            children: [],
            layoutSizingHorizontal: "FILL",
            layoutSizingVertical: "HUG"
          }
        ]
      },
      // ── Gradient fill + gradient stroke ──
      {
        id: "1:5",
        name: "Banner",
        type: "FRAME",
        visible: true,
        opacity: 1,
        width: 328,
        height: 120,
        absoluteBoundingBox: box(16, 56, 328, 120),
        fills: [
          {
            type: "GRADIENT_LINEAR",
            visible: true,
            opacity: 1,
            gradientTransform: [
              [1, 0, 0],
              [0, 1, 0]
            ],
            gradientStops: [
              { position: 0, color: { r: 10 / 255, g: 102 / 255, b: 1, a: 1 } },
              { position: 1, color: { r: 1, g: 51 / 255, b: 102 / 255, a: 1 } }
            ]
          }
        ],
        strokes: [
          {
            type: "GRADIENT_ANGULAR",
            visible: true,
            opacity: 1,
            gradientTransform: [
              [0, 1, 0],
              [1, 0, 0]
            ],
            gradientStops: [
              { position: 0, color: { r: 1, g: 51 / 255, b: 102 / 255, a: 1 } },
              { position: 1, color: { r: 10 / 255, g: 102 / 255, b: 1, a: 1 } }
            ]
          }
        ],
        strokeWeight: 1,
        strokeAlign: "INSIDE",
        cornerRadius: 8,
        effects: [],
        children: [],
        layoutSizingHorizontal: "FILL",
        layoutSizingVertical: "FIXED"
      },
      // ── Per-side border weights: top 2, bottom 1, left/right 0 ──
      {
        id: "1:6",
        name: "Divider",
        type: "FRAME",
        visible: true,
        opacity: 1,
        width: 328,
        height: 24,
        absoluteBoundingBox: box(16, 192, 328, 24),
        fills: [],
        strokes: [solid(229 / 255, 231 / 255, 235 / 255)],
        strokeWeight: FIGMA_MIXED,
        strokeAlign: "CENTER",
        strokeTopWeight: 2,
        strokeRightWeight: 0,
        strokeBottomWeight: 1,
        strokeLeftWeight: 0,
        cornerRadius: 0,
        effects: [],
        children: [],
        layoutSizingHorizontal: "FILL",
        layoutSizingVertical: "FIXED"
      },
      // ── Per-corner radii 12/12/0/0 + alpha-0.5 variable fill ──
      {
        id: "1:7",
        name: "Thumb",
        type: "FRAME",
        visible: true,
        opacity: 1,
        width: 328,
        height: 80,
        absoluteBoundingBox: box(16, 232, 328, 80),
        fills: [solid(0, 0, 0, 0.5)],
        boundVariables: { fills: [alias("var:scrim")] },
        strokes: [],
        strokeWeight: 0,
        cornerRadius: FIGMA_MIXED,
        topLeftRadius: 12,
        topRightRadius: 12,
        bottomRightRadius: 0,
        bottomLeftRadius: 0,
        effects: [],
        children: [],
        layoutSizingHorizontal: "FILL",
        layoutSizingVertical: "FIXED"
      },
      // ── Uniform 2px border (the classic stroke_width regression) ──
      {
        id: "1:8",
        name: "Chip",
        type: "FRAME",
        visible: true,
        opacity: 1,
        width: 120,
        height: 32,
        absoluteBoundingBox: box(16, 328, 120, 32),
        fills: [solid(1, 1, 1)],
        strokes: [solid(10 / 255, 102 / 255, 1)],
        boundVariables: { strokes: [alias("var:borderStrong")] },
        strokeWeight: 2,
        strokeAlign: "INSIDE",
        strokeTopWeight: 2,
        strokeRightWeight: 2,
        strokeBottomWeight: 2,
        strokeLeftWeight: 2,
        cornerRadius: 8,
        effects: [],
        children: [],
        layoutSizingHorizontal: "HUG",
        layoutSizingVertical: "FIXED"
      },
      // ── Newline + colon + leading dash in the characters ──
      textNode({
        id: "1:9",
        name: "Notes",
        characters: NOTES_TEXT,
        width: 328,
        height: 36,
        absoluteBoundingBox: box(16, 376, 328, 36),
        layoutSizingHorizontal: "FILL",
        layoutSizingVertical: "HUG"
      }),
      // ── Three sibling instances of the same component, differing text ──
      {
        id: "1:10",
        name: "List",
        type: "FRAME",
        visible: true,
        opacity: 1,
        width: 328,
        height: 136,
        absoluteBoundingBox: box(16, 428, 328, 136),
        fills: [],
        strokes: [],
        strokeWeight: 0,
        cornerRadius: 0,
        effects: [],
        clipsContent: false,
        layoutMode: "VERTICAL",
        layoutWrap: "NO_WRAP",
        primaryAxisAlignItems: "MIN",
        counterAxisAlignItems: "MIN",
        primaryAxisSizingMode: "AUTO",
        counterAxisSizingMode: "FIXED",
        itemSpacing: 8,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        layoutSizingHorizontal: "FILL",
        layoutSizingVertical: "HUG",
        children: [
          row("1:11", 428, "Alpha"),
          row("1:12", 476, "Beta"),
          row("1:13", 524, "Gamma")
        ]
      }
    ]
  };

  link(root);
  root.parent = { id: "0:1", name: "Page 1", type: "PAGE" };
  return root;
}

export const SMOKE_SETTINGS: Any = {
  anatomy: true,
  tabularAnatomy: false,
  completeAnatomy: false,
  includeNestedComponents: false,
  properties: false,
  twoWay: false,
  twoWayPropA: "",
  twoWayPropB: "",
  layout: true,
  data: true,
  inventory: false,
  variables: true,
  modes: true,
  includeDataAttributes: false,
  agentReadyData: true,
  aiCompactMode: true,
  showOuterLayout: false,
  multiColumn: false,
  columnCount: 2,
  colorFormat: "hex",
  typographyFormat: true,
  spacingUnit: "px",
  remBase: 16,
  valuePrecision: 2,
  showRawValues: false,
  valuePreference: "variable",
  framework: "react",
  schemaVersion: "v11"
};
