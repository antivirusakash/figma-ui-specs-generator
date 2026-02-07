import { describe, expect, it, vi, beforeAll } from 'vitest';

// Mock Figma global before importing the module
const FIGMA_MIXED = Symbol('figma.mixed');
beforeAll(() => {
  (globalThis as any).figma = { mixed: FIGMA_MIXED };
});

// Dynamic import so the mock is in place
const fmt = await import('../../src/plugin/helpers/format');

describe('hexToRgb', () => {
  it('converts 6-digit hex', () => {
    const rgb = fmt.hexToRgb('#FF0000');
    expect(rgb.r).toBeCloseTo(1);
    expect(rgb.g).toBeCloseTo(0);
    expect(rgb.b).toBeCloseTo(0);
  });

  it('converts without hash prefix', () => {
    const rgb = fmt.hexToRgb('00FF00');
    expect(rgb.r).toBeCloseTo(0);
    expect(rgb.g).toBeCloseTo(1);
    expect(rgb.b).toBeCloseTo(0);
  });

  it('converts black', () => {
    const rgb = fmt.hexToRgb('#000000');
    expect(rgb).toEqual({ r: 0, g: 0, b: 0 });
  });

  it('converts white', () => {
    const rgb = fmt.hexToRgb('#FFFFFF');
    expect(rgb.r).toBeCloseTo(1);
    expect(rgb.g).toBeCloseTo(1);
    expect(rgb.b).toBeCloseTo(1);
  });
});

describe('formatNumber', () => {
  it('rounds to precision 0', () => {
    expect(fmt.formatNumber(3.7, 0)).toBe('4');
  });

  it('formats precision 1 and strips trailing zeros', () => {
    expect(fmt.formatNumber(5.0, 1)).toBe('5');
  });

  it('keeps significant decimals', () => {
    expect(fmt.formatNumber(3.14, 2)).toBe('3.14');
  });

  it('rounds correctly at precision 2', () => {
    expect(fmt.formatNumber(1.999, 2)).toBe('2');
  });

  it('handles zero', () => {
    expect(fmt.formatNumber(0, 1)).toBe('0');
  });
});

describe('formatSpacing', () => {
  const baseSettings = {
    spacingUnit: 'px' as const,
    remBase: 16,
    valuePrecision: 1,
    colorFormat: 'hex' as const,
    anatomy: false, tabularAnatomy: false, completeAnatomy: false,
    includeNestedComponents: false, properties: false, twoWay: false,
    twoWayPropA: '', twoWayPropB: '', layout: false, data: false,
    inventory: false, variables: false, modes: false,
    includeDataAttributes: false, agentReadyData: false, aiCompactMode: false,
    showOuterLayout: false, multiColumn: false, columnCount: 2,
    typographyFormat: false, showRawValues: false,
    valuePreference: 'variable' as const,
  };

  it('formats px values', () => {
    expect(fmt.formatSpacing(16, baseSettings)).toBe('16px');
  });

  it('formats rem values', () => {
    const remSettings = { ...baseSettings, spacingUnit: 'rem' as const };
    expect(fmt.formatSpacing(16, remSettings)).toBe('1rem');
  });

  it('uses custom remBase', () => {
    const remSettings = { ...baseSettings, spacingUnit: 'rem' as const, remBase: 10 };
    expect(fmt.formatSpacing(15, remSettings)).toBe('1.5rem');
  });

  it('falls back to 16 for invalid remBase', () => {
    const remSettings = { ...baseSettings, spacingUnit: 'rem' as const, remBase: 0 };
    expect(fmt.formatSpacing(32, remSettings)).toBe('2rem');
  });

  it('respects precision', () => {
    const preciseSettings = { ...baseSettings, valuePrecision: 2 };
    expect(fmt.formatSpacing(10.5, preciseSettings)).toBe('10.50px');
  });
});

describe('rgbToHsl', () => {
  it('converts pure red', () => {
    const hsl = fmt.rgbToHsl(255, 0, 0);
    expect(hsl.h).toBeCloseTo(0);
    expect(hsl.s).toBeCloseTo(100);
    expect(hsl.l).toBeCloseTo(50);
  });

  it('converts pure green', () => {
    const hsl = fmt.rgbToHsl(0, 255, 0);
    expect(hsl.h).toBeCloseTo(120);
    expect(hsl.s).toBeCloseTo(100);
    expect(hsl.l).toBeCloseTo(50);
  });

  it('converts pure blue', () => {
    const hsl = fmt.rgbToHsl(0, 0, 255);
    expect(hsl.h).toBeCloseTo(240);
    expect(hsl.s).toBeCloseTo(100);
    expect(hsl.l).toBeCloseTo(50);
  });

  it('converts white', () => {
    const hsl = fmt.rgbToHsl(255, 255, 255);
    expect(hsl.l).toBeCloseTo(100);
    expect(hsl.s).toBeCloseTo(0);
  });

  it('converts black', () => {
    const hsl = fmt.rgbToHsl(0, 0, 0);
    expect(hsl.l).toBeCloseTo(0);
    expect(hsl.s).toBeCloseTo(0);
  });

  it('converts grey', () => {
    const hsl = fmt.rgbToHsl(128, 128, 128);
    expect(hsl.s).toBeCloseTo(0);
    expect(hsl.l).toBeCloseTo(50, 0);
  });
});

describe('truncateText', () => {
  it('returns original when under limit', () => {
    expect(fmt.truncateText('hello', 10)).toBe('hello');
  });

  it('returns original when at limit', () => {
    expect(fmt.truncateText('hello', 5)).toBe('hello');
  });

  it('truncates with ellipsis when over limit', () => {
    const result = fmt.truncateText('hello world', 6);
    expect(result).toBe('hello…');
    expect(result.length).toBe(6);
  });

  it('handles empty string', () => {
    expect(fmt.truncateText('', 5)).toBe('');
  });
});

describe('solidFill', () => {
  it('creates solid paint with default opacity', () => {
    const fill = fmt.solidFill('#FF0000');
    expect(fill.type).toBe('SOLID');
    expect(fill.opacity).toBe(1);
    expect(fill.color.r).toBeCloseTo(1);
  });

  it('creates solid paint with custom opacity', () => {
    const fill = fmt.solidFill('#000000', 0.5);
    expect(fill.opacity).toBe(0.5);
  });
});

describe('formatColor', () => {
  const baseSettings = {
    colorFormat: 'hex' as const,
    spacingUnit: 'px' as const,
    remBase: 16,
    valuePrecision: 1,
    anatomy: false, tabularAnatomy: false, completeAnatomy: false,
    includeNestedComponents: false, properties: false, twoWay: false,
    twoWayPropA: '', twoWayPropB: '', layout: false, data: false,
    inventory: false, variables: false, modes: false,
    includeDataAttributes: false, agentReadyData: false, aiCompactMode: false,
    showOuterLayout: false, multiColumn: false, columnCount: 2,
    typographyFormat: false, showRawValues: false,
    valuePreference: 'variable' as const,
  };

  it('returns hex for solid paint', () => {
    const paint = { type: 'SOLID' as const, color: { r: 1, g: 0, b: 0 }, opacity: 1 };
    expect(fmt.formatColor(paint, baseSettings)).toBe('#FF0000');
  });

  it('returns hsla when colorFormat is hsla', () => {
    const paint = { type: 'SOLID' as const, color: { r: 1, g: 0, b: 0 }, opacity: 1 };
    const hslaSettings = { ...baseSettings, colorFormat: 'hsla' as const };
    const result = fmt.formatColor(paint, hslaSettings);
    expect(result).toMatch(/^hsla\(/);
  });

  it('returns hsla when opacity is less than 1', () => {
    const paint = { type: 'SOLID' as const, color: { r: 0, g: 0, b: 1 }, opacity: 0.5 };
    const result = fmt.formatColor(paint, baseSettings);
    expect(result).toMatch(/^hsla\(/);
  });

  it('returns "Unknown" for undefined paint', () => {
    expect(fmt.formatColor(undefined, baseSettings)).toBe('Unknown');
  });

  it('returns paint type for non-solid', () => {
    const paint = { type: 'GRADIENT_LINEAR' as const } as any;
    expect(fmt.formatColor(paint, baseSettings)).toBe('GRADIENT_LINEAR');
  });
});

describe('getFirstSolidPaint', () => {
  it('returns undefined for null/undefined', () => {
    expect(fmt.getFirstSolidPaint(null)).toBeUndefined();
    expect(fmt.getFirstSolidPaint(undefined)).toBeUndefined();
  });

  it('returns undefined for figma.mixed', () => {
    expect(fmt.getFirstSolidPaint(FIGMA_MIXED as any)).toBeUndefined();
  });

  it('finds solid paint in array', () => {
    const paints = [
      { type: 'GRADIENT_LINEAR' as const },
      { type: 'SOLID' as const, color: { r: 1, g: 0, b: 0 }, opacity: 1 }
    ] as Paint[];
    const result = fmt.getFirstSolidPaint(paints);
    expect(result?.type).toBe('SOLID');
  });

  it('returns undefined when no solid paint exists', () => {
    const paints = [{ type: 'GRADIENT_LINEAR' as const }] as Paint[];
    expect(fmt.getFirstSolidPaint(paints)).toBeUndefined();
  });
});

describe('isMixed', () => {
  it('returns true for figma.mixed', () => {
    expect(fmt.isMixed(FIGMA_MIXED)).toBe(true);
  });

  it('returns false for normal values', () => {
    expect(fmt.isMixed('hello')).toBe(false);
    expect(fmt.isMixed(42)).toBe(false);
    expect(fmt.isMixed(null)).toBe(false);
  });
});
