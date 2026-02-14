/** Central configuration for all caps, limits, and truncation values.
 *  Adjust these for stress testing or output size tuning. */

export const LIMITS = {
  // ── Tree Walking ──
  MAX_ANATOMY_ELEMENTS: 4000,
  MAX_WALK_DEPTH: 24,
  MAX_SIGNATURE_DEPTH: 6,
  MAX_DIFF_DEPTH: 12,
  MAX_INSTANCE_TEXT_DEPTH: 12,
  ICON_SKIP_MAX_PX: 48,

  // ── Data Output (agent-ready YAML) ──
  MAX_ANATOMY_RECORDS: 4000,
  MAX_PROPERTY_RECORDS: 200,
  ANATOMY_CHUNK_SIZE: 50,
  PROPERTY_CHUNK_SIZE: 50,
  SAMPLE_SIZE: 2000,

  // ── Truncation: Text Content ──
  TRUNC_TEXT_CONTENT: 2000,
  TRUNC_CHILDREN_TEXT: 2000,
  TRUNC_FILL_SEGMENT_TEXT: 2000,
  TRUNC_REPEAT_CHILDREN_TEXT: 2000,
  TRUNC_TEXT_INDEX_TEXT: 2000,
  TRUNC_TEXT_INDEX_CHILDREN: 2000,

  // ── Truncation: Names & Refs ──
  TRUNC_ELEMENT_NAME: 200,
  TRUNC_INSTANCE_OF: 500,
  TRUNC_FILL_REF: 200,
  TRUNC_STROKE_REF: 200,
  TRUNC_FONT: 200,
  TRUNC_TEXT_STYLE: 200,
  TRUNC_ATTRIBUTE_VALUE: 500,
  TRUNC_PROPERTY_DIFF: 500,

  // ── Attributes ──
  MAX_COMPONENT_PROPS: 4,
  MAX_FILL_SEGMENTS: 10,

  // ── Canvas Display (Figma frame rendering) ──
  CANVAS_TEXT_CHUNK_CHARS: 4000,
  CANVAS_MAX_TEXT_CHUNKS: 3,
  CANVAS_SPLIT_TEXT_CHARS: 8000,
  CANVAS_ANATOMY_TEXT_TRUNC: 40,
  ANATOMY_HIGHLIGHTS_DEFAULT: 20,
  ANATOMY_HIGHLIGHTS_TABULAR: 24,
  ANATOMY_HIGHLIGHTS_COMPACT: 16,
  // Heuristic thresholds for artwork export scale planning.
  // If target area exceeds these pixel counts we start from lower scales.
  ARTWORK_EXPORT_AUTO_AREA_START_AT_1X: 4_000_000,
  ARTWORK_EXPORT_AUTO_AREA_START_AT_05X: 12_000_000,

  // ── Layout Section ──
  MAX_LAYOUT_SPECS: 120,

  // ── Properties Section (canvas) ──
  MAX_VARIANT_OPTIONS: 8,
  MAX_TWO_WAY_COMBOS: 20,
  MAX_NESTED_COMPONENTS: 8,
  MAX_ANATOMY_VARIANTS: 20,
} as const;

export type LimitKey = keyof typeof LIMITS;
export type LimitOverrides = Partial<Record<LimitKey, number>>;
export type ComplexityTier = "standard" | "large" | "enterprise";

export const ARTWORK_EXPORT_SCALE_PLAN = {
  default: [2, 1, 0.5, 0.25],
  large: [1, 0.5, 0.25],
  huge: [0.5, 0.25]
} as const;

export const COMPLEXITY_TIER_THRESHOLDS = {
  large: {
    visibleNodes: 1200,
    instanceNodes: 300,
    maxDepth: 14
  },
  enterprise: {
    visibleNodes: 3000,
    instanceNodes: 900,
    maxDepth: 20
  }
} as const;

export const COMPLEXITY_TIER_LIMIT_OVERRIDES: Record<ComplexityTier, LimitOverrides> = {
  standard: {},
  large: {
    MAX_ANATOMY_ELEMENTS: 7000,
    MAX_ANATOMY_RECORDS: 7000,
    MAX_LAYOUT_SPECS: 220,
    MAX_ANATOMY_VARIANTS: 28,
    MAX_WALK_DEPTH: 32,
    MAX_DIFF_DEPTH: 16,
    ANATOMY_HIGHLIGHTS_DEFAULT: 28,
    ANATOMY_HIGHLIGHTS_TABULAR: 32,
    ANATOMY_HIGHLIGHTS_COMPACT: 20,
    CANVAS_MAX_TEXT_CHUNKS: 5,
    SAMPLE_SIZE: 2500
  },
  enterprise: {
    MAX_ANATOMY_ELEMENTS: 12000,
    MAX_ANATOMY_RECORDS: 12000,
    MAX_LAYOUT_SPECS: 360,
    MAX_ANATOMY_VARIANTS: 40,
    MAX_WALK_DEPTH: 40,
    MAX_SIGNATURE_DEPTH: 8,
    MAX_DIFF_DEPTH: 20,
    MAX_INSTANCE_TEXT_DEPTH: 16,
    ANATOMY_HIGHLIGHTS_DEFAULT: 36,
    ANATOMY_HIGHLIGHTS_TABULAR: 44,
    ANATOMY_HIGHLIGHTS_COMPACT: 28,
    CANVAS_MAX_TEXT_CHUNKS: 6,
    SAMPLE_SIZE: 3000
  }
};

let runtimeLimitOverrides: LimitOverrides = {};

export function setRuntimeLimitOverrides(overrides: LimitOverrides) {
  runtimeLimitOverrides = { ...overrides };
}

export function clearRuntimeLimitOverrides() {
  runtimeLimitOverrides = {};
}

export function getLimit<K extends LimitKey>(key: K): (typeof LIMITS)[K] {
  const runtime = runtimeLimitOverrides[key];
  return (runtime ?? LIMITS[key]) as (typeof LIMITS)[K];
}

export function getActiveLimits() {
  return {
    ...LIMITS,
    ...runtimeLimitOverrides
  };
}
