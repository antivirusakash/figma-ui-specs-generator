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

  it('folds the colour own alpha into the rendered alpha', () => {
    const paint = { type: 'SOLID' as const, color: { r: 1, g: 0, b: 0, a: 0.5 }, opacity: 1 };
    expect(fmt.formatColor(paint, baseSettings)).toBe('hsla(0, 100%, 50%, 0.50)');
  });

  it('multiplies paint opacity by the colour alpha', () => {
    const paint = { type: 'SOLID' as const, color: { r: 1, g: 0, b: 0, a: 0.5 }, opacity: 0.5 };
    expect(fmt.formatColor(paint, baseSettings)).toBe('hsla(0, 100%, 50%, 0.25)');
  });

  it('renders a linear gradient as CSS instead of the bare type', () => {
    const paint = {
      type: 'GRADIENT_LINEAR' as const,
      gradientStops: [
        { position: 0, color: { r: 1, g: 0, b: 0, a: 1 } },
        { position: 1, color: { r: 0, g: 0, b: 1, a: 1 } },
      ],
      gradientTransform: [[0, 1, 0], [-1, 0, 1]],
    } as any;
    expect(fmt.formatColor(paint, baseSettings)).toBe(
      'linear-gradient(180deg, #FF0000 0%, #0000FF 100%)'
    );
  });

  it('derives the gradient angle from gradientTransform row 0', () => {
    const identity = {
      type: 'GRADIENT_LINEAR' as const,
      gradientStops: [{ position: 0, color: { r: 0, g: 0, b: 0, a: 1 } }],
      gradientTransform: [[1, 0, 0], [0, 1, 0]],
    } as any;
    // Figma's identity transform runs left → right, which is 90deg in CSS.
    expect(fmt.gradientAngle(identity)).toBe(90);
    expect(fmt.gradientAngle({ type: 'GRADIENT_LINEAR' } as any)).toBe(180);
  });

  it('returns a structured gradient from formatGradient', () => {
    const paint = {
      type: 'GRADIENT_RADIAL' as const,
      gradientStops: [
        { position: 0, color: { r: 1, g: 1, b: 1, a: 1 } },
        { position: 0.5, color: { r: 0, g: 0, b: 0, a: 1 } },
      ],
      gradientTransform: [[1, 0, 0], [0, 1, 0]],
    } as any;
    expect(fmt.formatGradient(paint, baseSettings)).toEqual({
      angle: 90,
      stops: [
        { pos: 0, color: '#FFFFFF' },
        { pos: 0.5, color: '#000000' },
      ],
    });
  });

  it('scales the gradient axis by the node size before taking the angle', () => {
    // A visually 45deg gradient on a 320x64 node: the NORMALIZED direction is (1/320, 1/64).
    const paint = {
      type: 'GRADIENT_LINEAR' as const,
      gradientStops: [{ position: 0, color: { r: 0, g: 0, b: 0, a: 1 } }],
      gradientTransform: [[0.003125, 0.015625, 0], [0, 0, 0]],
    } as any;
    expect(fmt.gradientAngle(paint)).toBe(169);
    expect(fmt.gradientAngle(paint, { width: 320, height: 64 })).toBe(135);
  });

  it('leaves the square / default cases untouched when a size is supplied', () => {
    const topToBottom = {
      type: 'GRADIENT_LINEAR' as const,
      gradientStops: [{ position: 0, color: { r: 0, g: 0, b: 0, a: 1 } }],
      gradientTransform: [[0, 1, 0], [-1, 0, 1]],
    } as any;
    expect(fmt.gradientAngle(topToBottom, { width: 328, height: 120 })).toBe(180);
  });

  it('folds the gradient paint opacity into every stop', () => {
    const paint = {
      type: 'GRADIENT_LINEAR' as const,
      opacity: 0.4,
      gradientStops: [
        { position: 0, color: { r: 1, g: 0, b: 0, a: 1 } },
        { position: 1, color: { r: 0, g: 0, b: 1, a: 1 } },
      ],
      gradientTransform: [[0, 1, 0], [-1, 0, 1]],
    } as any;
    expect(fmt.formatGradient(paint, baseSettings).stops.map((s: any) => s.color)).toEqual([
      'hsla(0, 100%, 50%, 0.40)',
      'hsla(240, 100%, 50%, 0.40)',
    ]);
    expect(fmt.formatColor(paint, baseSettings)).toContain('hsla(0, 100%, 50%, 0.40) 0%');
  });

  it('returns the paint type for image paints', () => {
    const paint = { type: 'IMAGE' as const, imageHash: 'abc', scaleMode: 'FILL' } as any;
    expect(fmt.formatColor(paint, baseSettings)).toBe('IMAGE');
  });
});

describe('resolveTopPaint / resolveTopSolidPaint', () => {
  it('returns undefined for null/undefined', () => {
    expect(fmt.resolveTopPaint(null)).toBeUndefined();
    expect(fmt.getFirstSolidPaint(null)).toBeUndefined();
    expect(fmt.getFirstSolidPaint(undefined)).toBeUndefined();
  });

  it('returns undefined for figma.mixed', () => {
    expect(fmt.resolveTopPaint(FIGMA_MIXED as any)).toBeUndefined();
    expect(fmt.getFirstSolidPaint(FIGMA_MIXED as any)).toBeUndefined();
  });

  it('returns the TOPMOST paint — Figma stores paints bottom-first', () => {
    const red = { type: 'SOLID' as const, color: { r: 1, g: 0, b: 0 }, opacity: 1 };
    const blue = { type: 'SOLID' as const, color: { r: 0, g: 0, b: 1 }, opacity: 1 };
    const result = fmt.resolveTopPaint([red, blue] as Paint[]);
    expect(result).toEqual({ paint: blue, index: 1 });
    expect(fmt.getFirstSolidPaint([red, blue] as Paint[])).toBe(blue);
  });

  it('skips hidden paints — a hidden fill must not win', () => {
    const red = { type: 'SOLID' as const, color: { r: 1, g: 0, b: 0 }, opacity: 1 };
    const hiddenBlue = { type: 'SOLID' as const, color: { r: 0, g: 0, b: 1 }, opacity: 1, visible: false };
    expect(fmt.resolveTopPaint([red, hiddenBlue] as Paint[])).toEqual({ paint: red, index: 0 });
    expect(fmt.getFirstSolidPaint([red, hiddenBlue] as Paint[])).toBe(red);
  });

  it('resolveTopPaint keeps non-solid paints; resolveTopSolidPaint skips past them', () => {
    const solid = { type: 'SOLID' as const, color: { r: 1, g: 0, b: 0 }, opacity: 1 };
    const gradient = { type: 'GRADIENT_LINEAR' as const, gradientStops: [] } as any;
    const paints = [solid, gradient] as Paint[];
    expect(fmt.resolveTopPaint(paints)).toEqual({ paint: gradient, index: 1 });
    expect(fmt.resolveTopSolidPaint(paints)).toEqual({ paint: solid, index: 0 });
  });

  it('resolveTopPaint surfaces image paints that have no solid sibling', () => {
    const image = { type: 'IMAGE' as const, imageHash: 'abc', scaleMode: 'FILL' } as any;
    expect(fmt.resolveTopPaint([image] as Paint[])).toEqual({ paint: image, index: 0 });
    expect(fmt.getFirstSolidPaint([image] as Paint[])).toBeUndefined();
  });

  it('returns undefined when every paint is hidden', () => {
    const paints = [{ type: 'SOLID' as const, color: { r: 0, g: 0, b: 0 }, opacity: 1, visible: false }] as Paint[];
    expect(fmt.resolveTopPaint(paints)).toBeUndefined();
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
