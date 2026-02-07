import { describe, expect, it, vi, beforeAll } from 'vitest';

// Mock Figma global
const FIGMA_MIXED = Symbol('figma.mixed');
beforeAll(() => {
  (globalThis as any).figma = { mixed: FIGMA_MIXED };
});

const tokens = await import('../../src/plugin/helpers/tokens');

describe('normalizeTokenKey', () => {
  it('lowercases and strips non-alphanumeric', () => {
    expect(tokens.normalizeTokenKey('Fill-Color')).toBe('fillcolor');
  });

  it('handles empty string', () => {
    expect(tokens.normalizeTokenKey('')).toBe('');
  });

  it('preserves digits', () => {
    expect(tokens.normalizeTokenKey('spacing-4x')).toBe('spacing4x');
  });

  it('strips dots, slashes, underscores', () => {
    expect(tokens.normalizeTokenKey('color.primary_bg/fill')).toBe('colorprimarybgfill');
  });
});

describe('findTokenValue', () => {
  it('finds direct match', () => {
    const map = new Map([['fillcolor', 'red-500']]);
    expect(tokens.findTokenValue(map, ['fillcolor'])).toBe('red-500');
  });

  it('finds by normalized key', () => {
    const map = new Map([['fillcolor', 'red-500']]);
    expect(tokens.findTokenValue(map, ['Fill-Color'])).toBe('red-500');
  });

  it('finds partial match', () => {
    const map = new Map([['backgroundfillcolor', 'blue-700']]);
    expect(tokens.findTokenValue(map, ['fillcolor'])).toBe('blue-700');
  });

  it('returns undefined for no match', () => {
    const map = new Map([['padding', '16px']]);
    expect(tokens.findTokenValue(map, ['color'])).toBeUndefined();
  });

  it('respects priority order of candidates', () => {
    const map = new Map([
      ['fillcolor', 'from-fill'],
      ['backgroundcolor', 'from-bg']
    ]);
    // First candidate wins
    expect(tokens.findTokenValue(map, ['fillcolor', 'backgroundcolor'])).toBe('from-fill');
  });

  it('handles empty map', () => {
    const map = new Map<string, string>();
    expect(tokens.findTokenValue(map, ['anything'])).toBeUndefined();
  });

  it('handles empty candidates', () => {
    const map = new Map([['fill', 'value']]);
    expect(tokens.findTokenValue(map, [])).toBeUndefined();
  });
});

describe('getSafeSharedPluginDataKeys', () => {
  it('returns keys for valid namespace', () => {
    const node = {
      name: 'TestNode',
      getSharedPluginDataKeys: vi.fn(() => ['key1', 'key2'])
    } as any;
    expect(tokens.getSafeSharedPluginDataKeys(node, 'tokens')).toEqual(['key1', 'key2']);
  });

  it('rejects namespace with unsupported characters', () => {
    const node = {
      name: 'TestNode',
      getSharedPluginDataKeys: vi.fn()
    } as any;
    expect(tokens.getSafeSharedPluginDataKeys(node, 'invalid namespace!')).toEqual([]);
    expect(node.getSharedPluginDataKeys).not.toHaveBeenCalled();
  });

  it('catches runtime errors from getSharedPluginDataKeys', () => {
    const node = {
      name: 'TestNode',
      getSharedPluginDataKeys: vi.fn(() => { throw new Error('runtime error'); })
    } as any;
    expect(tokens.getSafeSharedPluginDataKeys(node, 'tokens')).toEqual([]);
  });

  it('allows figma.tokens namespace', () => {
    const node = {
      name: 'TestNode',
      getSharedPluginDataKeys: vi.fn(() => ['a'])
    } as any;
    expect(tokens.getSafeSharedPluginDataKeys(node, 'figma.tokens')).toEqual(['a']);
  });
});

describe('SHARED_PLUGIN_NAMESPACES', () => {
  it('contains known namespaces', () => {
    expect(tokens.SHARED_PLUGIN_NAMESPACES).toContain('tokens');
    expect(tokens.SHARED_PLUGIN_NAMESPACES).toContain('tokensstudio');
    expect(tokens.SHARED_PLUGIN_NAMESPACES).toContain('figma.tokens');
  });
});

describe('SHARED_NAMESPACE_PATTERN', () => {
  it('matches valid namespaces', () => {
    expect(tokens.SHARED_NAMESPACE_PATTERN.test('tokens')).toBe(true);
    expect(tokens.SHARED_NAMESPACE_PATTERN.test('figma.tokens')).toBe(true);
    expect(tokens.SHARED_NAMESPACE_PATTERN.test('tokensstudio')).toBe(true);
  });

  it('rejects invalid namespaces', () => {
    expect(tokens.SHARED_NAMESPACE_PATTERN.test('invalid namespace')).toBe(false);
    expect(tokens.SHARED_NAMESPACE_PATTERN.test('foo@bar')).toBe(false);
    expect(tokens.SHARED_NAMESPACE_PATTERN.test('')).toBe(false);
  });
});
