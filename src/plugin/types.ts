export type SpecTextRole = "title" | "heading" | "body" | "muted" | "label" | "caption";

export type Framework = "auto" | "react" | "nextjs" | "flutter" | "html" | "vue" | "svelte" | "react-native";

export type Settings = {
  anatomy: boolean;
  tabularAnatomy: boolean;
  completeAnatomy: boolean;
  includeNestedComponents: boolean;
  properties: boolean;
  twoWay: boolean;
  twoWayPropA: string;
  twoWayPropB: string;
  layout: boolean;
  data: boolean;
  inventory: boolean;
  variables: boolean;
  modes: boolean;
  includeDataAttributes: boolean;
  agentReadyData: boolean;
  aiCompactMode: boolean;
  showOuterLayout: boolean;
  multiColumn: boolean;
  sectionWidth?: number;
  columnCount: number;
  colorFormat: "hex" | "hsla";
  typographyFormat: boolean;
  spacingUnit: "px" | "rem";
  remBase: number;
  valuePrecision: number;
  showRawValues: boolean;
  valuePreference: "variable" | "token";
  framework: Framework;
  schemaVersion: "v11" | "v12" | "v13" | "v14";
};

export type Theme = {
  background: string;
  section: string;
  sectionBg: string;
  tableHeaderBg: string;
  tableRowAlt: string;
  border: string;
  text: string;
  muted: string;
  accent: string;
  accentSoft: string;
  overlayBlue: string;
  overlayGreen: string;
  overlayOrange: string;
};

export type AttributeFormat = "PROPERTY" | "HARDCODED" | "STYLE" | "VARIABLE" | "TOKEN";

export type FillSegment = { text: string; fill: string };

export type Attribute = {
  key?: string;
  propertyName?: string;
  value: string;
  format: AttributeFormat;
  rawValue?: string | number | boolean;
  systemId?: string;
  fillSegments?: FillSegment[];
  imageHash?: string;
  /** Full alias chain (outermost first) when format === "VARIABLE". */
  aliasChain?: string[];
  /** Index of the paint this attribute describes. */
  paintIndex?: number;
  gradient?: { angle: number; stops: Array<{ pos: number; color: string }> };
  /** SOLID | GRADIENT_LINEAR | IMAGE | ... */
  fillType?: string;
  scaleMode?: string;
};

export type BoundVariablesMap = {
  [key: string]: VariableAlias | VariableAlias[];
};

export type TokenValueMap = Map<string, string>;

export type AnatomyElement = {
  name: string;
  type: string;
  instanceOf?: string;
  attributes: Attribute[];
  bounds?: Rect;
  nodeId?: string;
  pathKey?: string;
  textContent?: string;
  childrenText?: string[];
  // Layout (optional — only for nodes with auto-layout or inferred layout)
  layoutDirection?: string;
  /** @deprecated use layoutJustify + layoutAlignItems */
  layoutAlign?: string;
  /** @deprecated use layoutWSizing + layoutHSizing */
  layoutSizing?: string;
  layoutJustify?: string;
  layoutAlignItems?: string;
  /** Sourced from the node's own layoutSizingHorizontal — not the parent's counter/primary axis sizing mode. */
  layoutWSizing?: string;
  /** Sourced from the node's own layoutSizingVertical — not the parent's counter/primary axis sizing mode. */
  layoutHSizing?: string;
  layoutClips?: boolean;
  layoutInferred?: boolean;
  /** Real tree depth (root = 0). Not derived from pathKey — pathKeys join with "/" and carry no spaces. */
  depth?: number;
  /** Offset from the parent's top-left, set only when the parent's layout was inferred rather
   *  than read from auto-layout. The guessed direction/justify cannot reproduce the real
   *  positions on its own, so the coordinates travel with the child. */
  parentOffset?: { x: number; y: number };
  /** Variant selection of the instance, e.g. "Size=Large, Type=Primary" — split out of instanceOf. */
  instanceVariant?: string;
  layoutGrow?: number;
  layoutWrap?: string;
};

export type ComponentSetContext = {
  componentSet: ComponentSetNode;
  baseComponent: ComponentNode;
};

export type PropertyOption = {
  name: string;
  elements: AnatomyElement[];
  differences: string[];
};

export type PropertySpec = {
  name: string;
  type: string;
  default: string | boolean;
  options: PropertyOption[];
};

export type TwoWaySpec = {
  propA: string;
  propB: string;
  combinations: Array<{ a: string; b: string; differences: string[] }>;
};

export type LayoutSpec = {
  nodeId: string;
  name: string;
  type: string;
  pathKey?: string;
  layoutMode: string;
  primaryAxisAlignItems: string;
  counterAxisAlignItems: string;
  primaryAxisSizingMode: string;
  counterAxisSizingMode: string;
  itemSpacing: number;
  padding: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
  bounds?: Rect;
  clipsContent?: boolean;
  gapLine?: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
  inferred?: boolean;
  /** Tree depth of the node, so a spec-only element can be placed when it is merged back into
   *  the anatomy list rather than appended at the end. */
  depth?: number;
  /** Ids of the visible children whose positions were used to infer the layout. Only set when
   *  `inferred` is true. */
  inferredChildIds?: string[];
  layoutWrap?: string;
  counterAxisSpacing?: number;
  counterAxisAlignContent?: string;
  layoutPositioning?: string;
  strokesIncludedInLayout?: boolean;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  /** Bound-variable ids captured synchronously by collectLayoutData (which must stay sync);
   *  resolved later inside the async createLayoutSection. */
  varIds?: {
    itemSpacing?: string;
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    counterAxisSpacing?: string;
  };
  /** Modes this node resolves each variable collection to (collectionId → modeId), captured
   *  alongside varIds so the token column resolves in the node's mode, not the default one. */
  varModes?: Record<string, string>;
};

/** Per-node sizing behaviour on each axis: "FIXED" | "HUG" | "FILL". */
export type NodeSizing = {
  nodeId: string;
  w?: string;
  h?: string;
  grow?: number;
};

export type InstanceRepeatRow = {
  nodeId: string;
  pathKey: string;
  bounds?: Rect;
  childrenText?: string[];
  diffs: Record<string, string>;
};

export type InstanceTemplate = {
  templateNodeId: string;
  templatePathKey: string;
  fingerprint: string;
  instanceOf: string;
  repeatCount: number;
  varyingKeys: string[];
  repeats: InstanceRepeatRow[];
};

/** v13: per-element attribute changes for a variant configuration.
 *  Keys are element path keys (stable across clones), values are changed attributes. */
export type VariantChange = Record<string, Record<string, string | number | boolean>>;

/** v13: a single variant diff entry */
export type VariantDiff = {
  config: Record<string, string | boolean>;
  changes: VariantChange;
  /** Element path keys added in this variant but absent from base */
  added?: string[];
  /** Element path keys present in base but removed in this variant */
  removed?: string[];
};

/** v13: property definition within a component blueprint */
export type ComponentPropertyDef = {
  name: string;
  type: string;
  default: string | boolean;
  options?: string[];
};

/** v13: component blueprint — structure once, diffs per variant */
export type ComponentDefinition = {
  componentSetName: string;
  baseNodeId: string;
  properties: ComponentPropertyDef[];
  variantDiffs: VariantDiff[];
  /** Element path key -> live document node id, so variant_diffs keys are addressable. */
  nodeIds?: Record<string, string>;
};

export type DataModel = {
  anatomy: AnatomyElement[];
  properties: PropertySpec[];
  instanceTemplates?: InstanceTemplate[];
  /** v13: component blueprint (populated when target is a component with variants) */
  componentDefinition?: ComponentDefinition;
};
