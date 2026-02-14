import { describe, expect, test } from "vitest";
import { analyzeNodeComplexity, resolveRuntimeLimitOverrides } from "../../src/plugin/helpers/complexity";

type NodeShape = {
  type: string;
  visible?: boolean;
  children?: NodeShape[];
};

function makeTree(opts: {
  depth: number;
  branchFactor?: number;
  type?: string;
  visible?: boolean;
  childType?: string;
}): SceneNode {
  const branchFactor = opts.branchFactor ?? 1;
  const type = opts.type ?? "FRAME";
  const childType = opts.childType ?? "FRAME";

  const build = (remainingDepth: number): NodeShape => {
    if (remainingDepth <= 0) {
      return { type: childType, visible: opts.visible ?? true, children: [] };
    }
    return {
      type: remainingDepth === opts.depth ? type : childType,
      visible: opts.visible ?? true,
      children: Array.from({ length: branchFactor }, () => build(remainingDepth - 1))
    };
  };

  return build(opts.depth) as unknown as SceneNode;
}

describe("complexity helper", () => {
  test("classifies standard trees by default", () => {
    const root = makeTree({ depth: 4, branchFactor: 2 });
    const snapshot = analyzeNodeComplexity(root);

    expect(snapshot.tier).toBe("standard");
    expect(snapshot.maxDepth).toBe(4);
    expect(snapshot.totalNodes).toBeGreaterThan(0);
  });

  test("classifies large trees when visible node threshold is exceeded", () => {
    const root = makeTree({ depth: 10, branchFactor: 2 });
    const snapshot = analyzeNodeComplexity(root);

    expect(snapshot.visibleNodes).toBeGreaterThanOrEqual(1200);
    expect(snapshot.tier).toBe("large");
  });

  test("classifies enterprise trees when depth threshold is exceeded", () => {
    const root = makeTree({ depth: 20, branchFactor: 1 });
    const snapshot = analyzeNodeComplexity(root);

    expect(snapshot.maxDepth).toBe(20);
    expect(snapshot.tier).toBe("enterprise");
  });

  test("classifies enterprise trees when instance threshold is exceeded", () => {
    const root = makeTree({ depth: 7, branchFactor: 4, type: "INSTANCE", childType: "INSTANCE" });
    const snapshot = analyzeNodeComplexity(root);

    expect(snapshot.instanceNodes).toBeGreaterThanOrEqual(900);
    expect(snapshot.tier).toBe("enterprise");
  });

  test("returns no overrides for standard tier", () => {
    const root = makeTree({ depth: 3, branchFactor: 2 });
    const snapshot = analyzeNodeComplexity(root);
    const overrides = resolveRuntimeLimitOverrides(snapshot);

    expect(snapshot.tier).toBe("standard");
    expect(overrides).toEqual({});
  });

  test("returns larger runtime budgets for enterprise tier", () => {
    const root = makeTree({ depth: 20, branchFactor: 1 });
    const snapshot = analyzeNodeComplexity(root);
    const overrides = resolveRuntimeLimitOverrides(snapshot);

    expect(snapshot.tier).toBe("enterprise");
    expect(overrides.MAX_ANATOMY_ELEMENTS).toBe(12000);
    expect(overrides.MAX_LAYOUT_SPECS).toBe(360);
    expect(overrides.CANVAS_MAX_TEXT_CHUNKS).toBe(6);
  });
});
