import { describe, expect, it, vi, beforeAll } from 'vitest';

// Mock Figma global
const FIGMA_MIXED = Symbol('figma.mixed');
beforeAll(() => {
  (globalThis as any).figma = { mixed: FIGMA_MIXED };
});

const { collectLayoutData } = await import('../../src/plugin/sections/layout-section');

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
});
