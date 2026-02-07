export type SpecTextRole = "title" | "heading" | "body" | "muted" | "label" | "caption";

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

export type Attribute = {
  key?: string;
  propertyName?: string;
  value: string;
  format: AttributeFormat;
  rawValue?: string | number | boolean;
  systemId?: string;
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
};

export type DataModel = {
  anatomy: AnatomyElement[];
  properties: PropertySpec[];
  layout: LayoutSpec[];
};
