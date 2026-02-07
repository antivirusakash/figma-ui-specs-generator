import { describe, expect, it } from 'vitest';
import { Inventory } from '../../src/plugin/inventory';

describe('Inventory', () => {
  describe('add', () => {
    it('adds a single item', () => {
      const inv = new Inventory();
      inv.add('variable', 'colors/primary', 'Fill', 'Button');
      const items = inv.list('variable');
      expect(items).toHaveLength(1);
      expect(items[0]?.name).toBe('colors/primary');
      expect(items[0]?.appliedAs).toBe('Fill');
    });

    it('tracks duplicate application counts', () => {
      const inv = new Inventory();
      inv.add('variable', 'colors/primary', 'Fill', 'Button');
      inv.add('variable', 'colors/primary', 'Fill', 'Button');
      const items = inv.list('variable');
      expect(items).toHaveLength(1);
      expect(items[0]?.appliedTo.get('Button')).toBe(2);
    });

    it('tracks multiple appliedTo targets', () => {
      const inv = new Inventory();
      inv.add('color-style', 'Primary', 'Fill', 'Button');
      inv.add('color-style', 'Primary', 'Fill', 'Card');
      const items = inv.list('color-style');
      expect(items).toHaveLength(1);
      expect(items[0]?.appliedTo.get('Button')).toBe(1);
      expect(items[0]?.appliedTo.get('Card')).toBe(1);
    });

    it('separates items by kind', () => {
      const inv = new Inventory();
      inv.add('variable', 'var1', 'Fill', 'Node1');
      inv.add('color-style', 'style1', 'Fill', 'Node2');
      expect(inv.list('variable')).toHaveLength(1);
      expect(inv.list('color-style')).toHaveLength(1);
    });
  });

  describe('trackVariable', () => {
    it('tracks unique variable IDs', () => {
      const inv = new Inventory();
      inv.trackVariable('id-1');
      inv.trackVariable('id-2');
      expect(inv.getVariableIds()).toEqual(['id-1', 'id-2']);
    });

    it('deduplicates variable IDs', () => {
      const inv = new Inventory();
      inv.trackVariable('id-1');
      inv.trackVariable('id-1');
      expect(inv.getVariableIds()).toEqual(['id-1']);
    });
  });

  describe('getVariableIds', () => {
    it('returns empty array when no variables tracked', () => {
      const inv = new Inventory();
      expect(inv.getVariableIds()).toEqual([]);
    });
  });

  describe('list', () => {
    it('returns empty array for unknown kind', () => {
      const inv = new Inventory();
      expect(inv.list('nonexistent')).toEqual([]);
    });

    it('filters by kind', () => {
      const inv = new Inventory();
      inv.add('variable', 'v1', 'Fill', 'N1');
      inv.add('text-style', 't1', 'Typography', 'N2');
      expect(inv.list('variable').length).toBe(1);
      expect(inv.list('text-style').length).toBe(1);
      expect(inv.list('tokens-studio').length).toBe(0);
    });
  });

  describe('hasAny', () => {
    it('returns false for empty inventory', () => {
      const inv = new Inventory();
      expect(inv.hasAny()).toBe(false);
    });

    it('returns true after adding items', () => {
      const inv = new Inventory();
      inv.add('variable', 'v1', 'Fill', 'N1');
      expect(inv.hasAny()).toBe(true);
    });
  });
});
