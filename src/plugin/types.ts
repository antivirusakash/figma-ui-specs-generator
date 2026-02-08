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
  layoutAlign?: string;
  layoutSizing?: string;
  layoutClips?: boolean;
  layoutInferred?: boolean;
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

export type DataModel = {
  anatomy: AnatomyElement[];
  properties: PropertySpec[];
  instanceTemplates?: InstanceTemplate[];
};
