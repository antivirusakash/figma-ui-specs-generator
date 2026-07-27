import { describe, expect, it, vi, beforeAll } from 'vitest';

// Mock Figma global
const FIGMA_MIXED = Symbol('figma.mixed');
beforeAll(() => {
  (globalThis as any).figma = { mixed: FIGMA_MIXED };
});

const { collectLayoutData, collectNodeSizing, inferAlignment } = await import('../../src/plugin/sections/layout-section');
const { mapFigmaSizing } = await import('../../src/plugin/sections/data-section');

// Helper to create mock nodes with layout properties
function createMockLayoutNode(overrides: Partial<{
  name: string;
  type: string;
  id: string;
  layoutMode: string;
  primaryAxisAlignItems: string;
  counterAxisAlignItems: string;
  primaryAxisSizingMode: string;
  counterAxisSizingMode: string;
  itemSpacing: number;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
  absoluteBoundingBox: { x: number; y: number; width: number; height: number } | null;
  children: any[];
  visible: boolean;
}> = {}): any {
  return {
    name: 'Frame',
    type: 'FRAME',
    id: 'node-1',
    layoutMode: 'VERTICAL',
    primaryAxisAlignItems: 'MIN',
    counterAxisAlignItems: 'MIN',
    primaryAxisSizingMode: 'AUTO',
    counterAxisSizingMode: 'FIXED',
    itemSpacing: 8,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    absoluteBoundingBox: { x: 0, y: 0, width: 100, height: 200 },
    children: [],
    visible: true,
    ...overrides,
  };
}

describe('collectLayoutData', () => {
  it('collects auto-layout frames', () => {
    const root = createMockLayoutNode({
      name: 'Root',
      layoutMode: 'VERTICAL',
      itemSpacing: 12,
    });
    const result = collectLayoutData(root);
    expect(result).toHaveLength(1);
    expect(result[0]?.layoutMode).toBe('VERTICAL');
    expect(result[0]?.itemSpacing).toBe(12);
    expect(result[0]?.name).toBe('Root');
  });

  it('skips nodes without auto-layout', () => {
    const root = createMockLayoutNode({
      layoutMode: 'NONE',
      children: [],
    });
    const result = collectLayoutData(root);
    expect(result).toHaveLength(0);
  });

  it('collects nested layouts', () => {
    const child = createMockLayoutNode({
      name: 'Inner',
      id: 'child-1',
      layoutMode: 'HORIZONTAL',
      itemSpacing: 4,
      absoluteBoundingBox: { x: 10, y: 10, width: 80, height: 40 },
    });
    const root = createMockLayoutNode({
      name: 'Outer',
      layoutMode: 'VERTICAL',
      itemSpacing: 8,
      children: [child],
    });
    const result = collectLayoutData(root);
    expect(result).toHaveLength(2);
    expect(result[0]?.name).toBe('Outer');
    expect(result[1]?.name).toBe('Inner');
  });

  it('computes relative bounds from root', () => {
    const child = createMockLayoutNode({
      name: 'Child',
      id: 'child-1',
      absoluteBoundingBox: { x: 50, y: 100, width: 40, height: 30 },
    });
    const root = createMockLayoutNode({
      name: 'Root',
      absoluteBoundingBox: { x: 20, y: 80, width: 200, height: 300 },
      children: [child],
    });
    const result = collectLayoutData(root);
    // Root is at position (0,0) relative to itself
    expect(result[0]?.bounds).toEqual({ x: 0, y: 0, width: 200, height: 300 });
    // Child is at (30, 20) relative to root
    expect(result[1]?.bounds).toEqual({ x: 30, y: 20, width: 40, height: 30 });
  });

  it('records padding values', () => {
    const root = createMockLayoutNode({
      paddingLeft: 12,
      paddingRight: 16,
      paddingTop: 8,
      paddingBottom: 20,
    });
    const result = collectLayoutData(root);
    expect(result[0]?.padding).toEqual({
      left: 12,
      right: 16,
      top: 8,
      bottom: 20,
    });
  });

  it('generates unique pathKeys for same-name siblings', () => {
    const child1 = createMockLayoutNode({
      name: 'Row',
      id: 'c1',
      absoluteBoundingBox: { x: 0, y: 0, width: 100, height: 50 },
    });
    const child2 = createMockLayoutNode({
      name: 'Row',
      id: 'c2',
      absoluteBoundingBox: { x: 0, y: 50, width: 100, height: 50 },
    });
    const root = createMockLayoutNode({
      name: 'Parent',
      children: [child1, child2],
    });
    const result = collectLayoutData(root);
    const childPaths = result.filter((r) => r.name === 'Row').map((r) => r.pathKey);
    expect(childPaths).toHaveLength(2);
    // Second duplicate should have [2] suffix
    expect(childPaths[1]).toContain('[2]');
  });

  it('computes gapLine for horizontal layout', () => {
    const child1 = createMockLayoutNode({
      name: 'A',
      id: 'a',
      layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 10, y: 10, width: 30, height: 20 },
      visible: true,
    });
    const child2 = createMockLayoutNode({
      name: 'B',
      id: 'b',
      layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 50, y: 10, width: 30, height: 20 },
      visible: true,
    });
    const root = createMockLayoutNode({
      name: 'HRow',
      layoutMode: 'HORIZONTAL',
      itemSpacing: 10,
      absoluteBoundingBox: { x: 0, y: 0, width: 90, height: 40 },
      children: [child1, child2],
    });
    const result = collectLayoutData(root);
    const spec = result.find((r) => r.name === 'HRow');
    expect(spec?.gapLine).toBeDefined();
    // Gap line should be horizontal between the two children
    expect(spec?.gapLine?.y1).toBe(spec?.gapLine?.y2);
  });

  it('computes gapLine for vertical layout', () => {
    const child1 = createMockLayoutNode({
      name: 'A',
      id: 'a',
      layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 10, y: 10, width: 30, height: 20 },
      visible: true,
    });
    const child2 = createMockLayoutNode({
      name: 'B',
      id: 'b',
      layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 10, y: 40, width: 30, height: 20 },
      visible: true,
    });
    const root = createMockLayoutNode({
      name: 'VCol',
      layoutMode: 'VERTICAL',
      itemSpacing: 10,
      absoluteBoundingBox: { x: 0, y: 0, width: 50, height: 70 },
      children: [child1, child2],
    });
    const result = collectLayoutData(root);
    const spec = result.find((r) => r.name === 'VCol');
    expect(spec?.gapLine).toBeDefined();
    // Gap line should be vertical between the two children
    expect(spec?.gapLine?.x1).toBe(spec?.gapLine?.x2);
  });

  it('returns no gapLine when less than 2 visible children', () => {
    const child1 = createMockLayoutNode({
      name: 'A',
      id: 'a',
      layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 10, y: 10, width: 30, height: 20 },
      visible: true,
    });
    const root = createMockLayoutNode({
      name: 'Single',
      children: [child1],
    });
    const result = collectLayoutData(root);
    const spec = result.find((r) => r.name === 'Single');
    expect(spec?.gapLine).toBeUndefined();
  });

  it('records sizing modes', () => {
    const root = createMockLayoutNode({
      primaryAxisSizingMode: 'FIXED',
      counterAxisSizingMode: 'AUTO',
    });
    const result = collectLayoutData(root);
    expect(result[0]?.primaryAxisSizingMode).toBe('FIXED');
    expect(result[0]?.counterAxisSizingMode).toBe('AUTO');
  });

  it('records alignment', () => {
    const root = createMockLayoutNode({
      primaryAxisAlignItems: 'CENTER',
      counterAxisAlignItems: 'MAX',
    });
    const result = collectLayoutData(root);
    expect(result[0]?.primaryAxisAlignItems).toBe('CENTER');
    expect(result[0]?.counterAxisAlignItems).toBe('MAX');
  });

  it('infers VERTICAL direction from vertically stacked children', () => {
    const child1 = createMockLayoutNode({
      name: 'A', id: 'a', layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 0, y: 0, width: 100, height: 50 },
      visible: true,
    });
    const child2 = createMockLayoutNode({
      name: 'B', id: 'b', layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 0, y: 60, width: 100, height: 50 },
      visible: true,
    });
    const root = createMockLayoutNode({
      name: 'NoLayout', layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 0, y: 0, width: 100, height: 110 },
      children: [child1, child2],
    });
    const result = collectLayoutData(root);
    const spec = result.find((r) => r.name === 'NoLayout');
    expect(spec).toBeDefined();
    expect(spec?.layoutMode).toBe('VERTICAL');
    expect(spec?.inferred).toBe(true);
  });

  it('infers HORIZONTAL direction from side-by-side children', () => {
    const child1 = createMockLayoutNode({
      name: 'A', id: 'a', layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 0, y: 0, width: 50, height: 100 },
      visible: true,
    });
    const child2 = createMockLayoutNode({
      name: 'B', id: 'b', layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 60, y: 0, width: 50, height: 100 },
      visible: true,
    });
    const root = createMockLayoutNode({
      name: 'HRow', layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 0, y: 0, width: 110, height: 100 },
      children: [child1, child2],
    });
    const result = collectLayoutData(root);
    const spec = result.find((r) => r.name === 'HRow');
    expect(spec).toBeDefined();
    expect(spec?.layoutMode).toBe('HORIZONTAL');
    expect(spec?.inferred).toBe(true);
  });

  it('does NOT infer direction for single-child frame', () => {
    const child1 = createMockLayoutNode({
      name: 'A', id: 'a', layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 0, y: 0, width: 100, height: 50 },
      visible: true,
    });
    const root = createMockLayoutNode({
      name: 'SingleChild', layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 0, y: 0, width: 100, height: 50 },
      children: [child1],
    });
    const result = collectLayoutData(root);
    expect(result.find((r) => r.name === 'SingleChild')).toBeUndefined();
  });

  it('estimates gap between inferred children', () => {
    const child1 = createMockLayoutNode({
      name: 'A', id: 'a', layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 0, y: 0, width: 100, height: 50 },
      visible: true,
    });
    const child2 = createMockLayoutNode({
      name: 'B', id: 'b', layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 0, y: 62, width: 100, height: 50 },
      visible: true,
    });
    const root = createMockLayoutNode({
      name: 'Gapped', layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 0, y: 0, width: 100, height: 112 },
      children: [child1, child2],
    });
    const result = collectLayoutData(root);
    const spec = result.find((r) => r.name === 'Gapped');
    expect(spec?.itemSpacing).toBe(12);
  });

  it('skips nodes whose IDs are in skipNodeIds set', () => {
    const child1 = createMockLayoutNode({
      name: 'Keep',
      id: 'keep-1',
      layoutMode: 'HORIZONTAL',
      absoluteBoundingBox: { x: 0, y: 0, width: 100, height: 50 },
    });
    const child2 = createMockLayoutNode({
      name: 'Skip',
      id: 'skip-1',
      layoutMode: 'VERTICAL',
      absoluteBoundingBox: { x: 0, y: 60, width: 100, height: 50 },
    });
    const root = createMockLayoutNode({
      name: 'Parent',
      children: [child1, child2],
    });
    const skipIds = new Set(['skip-1']);
    const result = collectLayoutData(root, skipIds);
    const names = result.map(r => r.name);
    expect(names).toContain('Parent');
    expect(names).toContain('Keep');
    expect(names).not.toContain('Skip');
  });

  it('skips deeply nested children of skipped nodes', () => {
    const grandchild = createMockLayoutNode({
      name: 'Deep',
      id: 'deep-1',
      layoutMode: 'HORIZONTAL',
      absoluteBoundingBox: { x: 0, y: 0, width: 50, height: 20 },
    });
    const child = createMockLayoutNode({
      name: 'Mid',
      id: 'mid-1',
      layoutMode: 'VERTICAL',
      absoluteBoundingBox: { x: 0, y: 0, width: 80, height: 40 },
      children: [grandchild],
    });
    const root = createMockLayoutNode({
      name: 'Root',
      children: [child],
    });
    // Skip the mid-level node — its children should also be skipped
    const skipIds = new Set(['mid-1']);
    const result = collectLayoutData(root, skipIds);
    expect(result.map(r => r.name)).toEqual(['Root']);
  });

  it('computes actual alignment for inferred layouts instead of INFERRED', () => {
    const child1 = createMockLayoutNode({
      name: 'A', id: 'a', layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 0, y: 0, width: 100, height: 50 },
      visible: true,
    });
    const child2 = createMockLayoutNode({
      name: 'B', id: 'b', layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 0, y: 60, width: 100, height: 50 },
      visible: true,
    });
    const root = createMockLayoutNode({
      name: 'InferAlign', layoutMode: 'NONE' as any,
      absoluteBoundingBox: { x: 0, y: 0, width: 100, height: 200 },
      children: [child1, child2],
    });
    const result = collectLayoutData(root);
    const spec = result.find((r) => r.name === 'InferAlign');
    // Children start at top-left with extra space at bottom, so primary=MIN
    expect(spec?.primaryAxisAlignItems).toBe('MIN');
    expect(spec?.counterAxisAlignItems).toBe('MIN');
    expect(spec?.inferred).toBe(true);
  });
});

describe('inferAlignment', () => {
  const parent = { x: 0, y: 0, width: 200, height: 200 };

  it('detects MIN/MIN for top-left aligned children', () => {
    const kids = [
      { absoluteBoundingBox: { x: 0, y: 0, width: 50, height: 30 } },
      { absoluteBoundingBox: { x: 60, y: 0, width: 50, height: 30 } },
    ];
    const result = inferAlignment(kids, parent, 'HORIZONTAL');
    expect(result.primary).toBe('MIN');
    expect(result.counter).toBe('MIN');
  });

  it('detects CENTER primary for horizontally centered children', () => {
    const kids = [
      { absoluteBoundingBox: { x: 50, y: 0, width: 40, height: 30 } },
      { absoluteBoundingBox: { x: 110, y: 0, width: 40, height: 30 } },
    ];
    const result = inferAlignment(kids, parent, 'HORIZONTAL');
    expect(result.primary).toBe('CENTER');
  });

  it('detects MAX primary for right-aligned children', () => {
    const kids = [
      { absoluteBoundingBox: { x: 100, y: 0, width: 40, height: 30 } },
      { absoluteBoundingBox: { x: 150, y: 0, width: 50, height: 30 } },
    ];
    const result = inferAlignment(kids, parent, 'HORIZONTAL');
    expect(result.primary).toBe('MAX');
  });

  it('detects SPACE_BETWEEN when children span full width', () => {
    const kids = [
      { absoluteBoundingBox: { x: 0, y: 0, width: 50, height: 30 } },
      { absoluteBoundingBox: { x: 150, y: 0, width: 50, height: 30 } },
    ];
    const result = inferAlignment(kids, parent, 'HORIZONTAL');
    expect(result.primary).toBe('SPACE_BETWEEN');
  });

  it('detects CENTER counter for vertically centered child in horizontal layout', () => {
    const kids = [
      { absoluteBoundingBox: { x: 0, y: 85, width: 50, height: 30 } },
      { absoluteBoundingBox: { x: 60, y: 85, width: 50, height: 30 } },
    ];
    const result = inferAlignment(kids, parent, 'HORIZONTAL');
    expect(result.counter).toBe('CENTER');
  });

  it('detects MAX counter for bottom-aligned child in horizontal layout', () => {
    const kids = [
      { absoluteBoundingBox: { x: 0, y: 170, width: 50, height: 30 } },
      { absoluteBoundingBox: { x: 60, y: 170, width: 50, height: 30 } },
    ];
    const result = inferAlignment(kids, parent, 'HORIZONTAL');
    expect(result.counter).toBe('MAX');
  });

  it('works for VERTICAL mode', () => {
    const kids = [
      { absoluteBoundingBox: { x: 75, y: 0, width: 50, height: 30 } },
      { absoluteBoundingBox: { x: 75, y: 170, width: 50, height: 30 } },
    ];
    const result = inferAlignment(kids, parent, 'VERTICAL');
    expect(result.primary).toBe('SPACE_BETWEEN');
    expect(result.counter).toBe('CENTER');
  });

  it('handles non-zero parent origin correctly', () => {
    const offsetParent = { x: 100, y: 50, width: 200, height: 200 };
    const kids = [
      { absoluteBoundingBox: { x: 100, y: 50, width: 50, height: 30 } },
      { absoluteBoundingBox: { x: 210, y: 50, width: 50, height: 30 } },
    ];
    const result = inferAlignment(kids, offsetParent, 'HORIZONTAL');
    expect(result.primary).toBe('MIN');
    expect(result.counter).toBe('MIN');
  });

  it('single child never returns SPACE_BETWEEN', () => {
    const kids = [
      { absoluteBoundingBox: { x: 0, y: 0, width: 200, height: 200 } },
    ];
    const result = inferAlignment(kids, parent, 'HORIZONTAL');
    expect(result.primary).not.toBe('SPACE_BETWEEN');
  });
});

describe('collectNodeSizing', () => {
  function sizingNode(overrides: Record<string, any> = {}): any {
    return {
      name: 'Node',
      type: 'FRAME',
      id: 'n-1',
      layoutMode: 'NONE',
      children: [],
      parent: null,
      ...overrides,
    };
  }

  it('records a FILL/HUG child of an auto-layout parent', () => {
    const child = sizingNode({
      id: 'child-1',
      layoutSizingHorizontal: 'FILL',
      layoutSizingVertical: 'HUG',
      layoutGrow: 1,
    });
    const root = sizingNode({ id: 'root-1', layoutMode: 'HORIZONTAL', children: [child] });
    const result = collectNodeSizing(root);
    expect(result).toContainEqual({ nodeId: 'child-1', w: 'FILL', h: 'HUG', grow: 1 });
  });

  it('records LEAF text nodes under an auto-layout parent', () => {
    const label = sizingNode({
      id: 'text-1',
      type: 'TEXT',
      layoutSizingHorizontal: 'FILL',
      layoutSizingVertical: 'HUG',
    });
    delete (label as any).children;
    const root = sizingNode({ id: 'root-2', layoutMode: 'VERTICAL', children: [label] });
    const result = collectNodeSizing(root);
    expect(result).toContainEqual({ nodeId: 'text-1', w: 'FILL', h: 'HUG' });
  });

  it('does not lose a FILL root whose own parent is the auto-layout frame', () => {
    const root = sizingNode({
      id: 'root-3',
      layoutSizingHorizontal: 'FILL',
      layoutSizingVertical: 'FIXED',
      parent: { type: 'FRAME', layoutMode: 'VERTICAL' },
    });
    expect(collectNodeSizing(root)).toEqual([{ nodeId: 'root-3', w: 'FILL', h: 'FIXED' }]);
  });

  it('returns nothing for a node with no auto-layout involvement', () => {
    const child = sizingNode({ id: 'child-2', layoutSizingHorizontal: 'FIXED' });
    const root = sizingNode({ id: 'root-4', children: [child] });
    expect(collectNodeSizing(root)).toEqual([]);
  });

  it('omits grow when it is 0', () => {
    const child = sizingNode({ id: 'child-3', layoutSizingHorizontal: 'FIXED', layoutGrow: 0 });
    const root = sizingNode({ id: 'root-5', layoutMode: 'HORIZONTAL', children: [child] });
    const entry = collectNodeSizing(root).find((s) => s.nodeId === 'child-3');
    expect(entry).toEqual({ nodeId: 'child-3', w: 'FIXED' });
  });

  it('honours skipNodeIds by skipping the whole subtree', () => {
    const grandchild = sizingNode({ id: 'gc-1', layoutSizingHorizontal: 'FILL' });
    const child = sizingNode({ id: 'child-4', layoutMode: 'VERTICAL', layoutSizingHorizontal: 'FILL', children: [grandchild] });
    const root = sizingNode({ id: 'root-6', layoutMode: 'HORIZONTAL', children: [child] });
    const ids = collectNodeSizing(root, new Set(['child-4'])).map((s) => s.nodeId);
    expect(ids).not.toContain('child-4');
    expect(ids).not.toContain('gc-1');
  });

  it('tolerates nodes that expose no layoutSizing properties at all', () => {
    const child = sizingNode({ id: 'child-5' });
    const root = sizingNode({ id: 'root-7', layoutMode: 'HORIZONTAL', children: [child] });
    expect(collectNodeSizing(root)).toEqual([]);
  });

  it('maps collected sizing through mapFigmaSizing to the CSS vocabulary', () => {
    const fill = sizingNode({ id: 'c-fill', layoutSizingHorizontal: 'FILL', layoutSizingVertical: 'HUG' });
    const fixed = sizingNode({ id: 'c-fixed', layoutSizingHorizontal: 'FIXED', layoutSizingVertical: 'FIXED' });
    const root = sizingNode({ id: 'root-8', layoutMode: 'HORIZONTAL', children: [fill, fixed] });
    const byId = new Map(collectNodeSizing(root).map((s) => [s.nodeId, s]));
    expect(mapFigmaSizing(byId.get('c-fill')!.w!)).toBe('fill');
    expect(mapFigmaSizing(byId.get('c-fill')!.h!)).toBe('auto');
    expect(mapFigmaSizing(byId.get('c-fixed')!.w!)).toBe('fixed');
  });
});

describe('collectLayoutData – bound variables and wrap', () => {
  it('captures bound-variable ids into varIds', () => {
    const root = createMockLayoutNode({
      id: 'var-root',
      boundVariables: {
        itemSpacing: { type: 'VARIABLE_ALIAS', id: 'VariableID:1' },
        paddingLeft: { type: 'VARIABLE_ALIAS', id: 'VariableID:2' },
      },
    } as any);
    const spec = collectLayoutData(root)[0]!;
    expect(spec.varIds).toEqual({ itemSpacing: 'VariableID:1', paddingLeft: 'VariableID:2' });
  });

  it('leaves varIds undefined when the node has no boundVariables', () => {
    const spec = collectLayoutData(createMockLayoutNode({ id: 'no-vars' }))[0]!;
    expect(spec.varIds).toBeUndefined();
  });

  it('records counterAxisSpacing only when layoutWrap is WRAP', () => {
    const wrapped = collectLayoutData(createMockLayoutNode({
      id: 'wrap-1', layoutWrap: 'WRAP', counterAxisSpacing: 12, counterAxisAlignContent: 'SPACE_BETWEEN',
    } as any))[0]!;
    expect(wrapped.layoutWrap).toBe('WRAP');
    expect(wrapped.counterAxisSpacing).toBe(12);
    expect(wrapped.counterAxisAlignContent).toBe('SPACE_BETWEEN');

    const noWrap = collectLayoutData(createMockLayoutNode({
      id: 'wrap-2', layoutWrap: 'NO_WRAP', counterAxisSpacing: 12,
    } as any))[0]!;
    expect(noWrap.counterAxisSpacing).toBeUndefined();
    expect(noWrap.counterAxisAlignContent).toBeUndefined();
  });
});
