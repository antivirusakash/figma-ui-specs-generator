import {
  COMPLEXITY_TIER_LIMIT_OVERRIDES,
  COMPLEXITY_TIER_THRESHOLDS,
  type ComplexityTier,
  type LimitOverrides
} from "../limits";

export type ComplexitySnapshot = {
  totalNodes: number;
  visibleNodes: number;
  instanceNodes: number;
  textNodes: number;
  maxDepth: number;
  tier: ComplexityTier;
};

export function analyzeNodeComplexity(root: SceneNode): ComplexitySnapshot {
  let totalNodes = 0;
  let visibleNodes = 0;
  let instanceNodes = 0;
  let textNodes = 0;
  let maxDepth = 0;

  const walk = (node: SceneNode, depth: number) => {
    totalNodes += 1;
    if (node.visible) visibleNodes += 1;
    if (node.type === "INSTANCE") instanceNodes += 1;
    if (node.type === "TEXT") textNodes += 1;
    if (depth > maxDepth) maxDepth = depth;

    if (!("children" in node)) return;
    for (const child of node.children) {
      walk(child, depth + 1);
    }
  };

  walk(root, 0);

  const tier = classifyComplexityTier({ visibleNodes, instanceNodes, maxDepth });
  return {
    totalNodes,
    visibleNodes,
    instanceNodes,
    textNodes,
    maxDepth,
    tier
  };
}

function classifyComplexityTier(input: {
  visibleNodes: number;
  instanceNodes: number;
  maxDepth: number;
}): ComplexityTier {
  if (
    input.visibleNodes >= COMPLEXITY_TIER_THRESHOLDS.enterprise.visibleNodes ||
    input.instanceNodes >= COMPLEXITY_TIER_THRESHOLDS.enterprise.instanceNodes ||
    input.maxDepth >= COMPLEXITY_TIER_THRESHOLDS.enterprise.maxDepth
  ) {
    return "enterprise";
  }
  if (
    input.visibleNodes >= COMPLEXITY_TIER_THRESHOLDS.large.visibleNodes ||
    input.instanceNodes >= COMPLEXITY_TIER_THRESHOLDS.large.instanceNodes ||
    input.maxDepth >= COMPLEXITY_TIER_THRESHOLDS.large.maxDepth
  ) {
    return "large";
  }
  return "standard";
}

export function resolveRuntimeLimitOverrides(snapshot: ComplexitySnapshot): LimitOverrides {
  return { ...(COMPLEXITY_TIER_LIMIT_OVERRIDES[snapshot.tier] ?? {}) };
}
