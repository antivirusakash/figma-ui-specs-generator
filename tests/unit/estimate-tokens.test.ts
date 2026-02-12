import { describe, expect, it } from 'vitest';
import { estimateTokens } from '../../src/plugin/helpers/estimate-tokens';

describe('estimateTokens', () => {
  it('returns 0 for empty string', () => {
    expect(estimateTokens('')).toBe(0);
  });

  it('returns 0 for whitespace-only string', () => {
    expect(estimateTokens('   \n\t  ')).toBe(0);
  });

  it('counts short words as 1 token each', () => {
    // "hi you" => 2 words, both <=4 chars => 2 tokens
    expect(estimateTokens('hi you')).toBe(2);
  });

  it('counts longer words proportionally', () => {
    // "authentication" = 14 chars => ceil(14/4) = 4 tokens
    expect(estimateTokens('authentication')).toBe(4);
  });

  it('handles YAML-like structured text', () => {
    const yaml = `component: Button
  variant: primary
  background: "#3B82F6"
  padding: 12px 24px
  border-radius: 8px`;
    const tokens = estimateTokens(yaml);
    // Should be a reasonable estimate (not wildly off)
    expect(tokens).toBeGreaterThan(10);
    expect(tokens).toBeLessThan(40);
  });

  it('handles code-like content with punctuation', () => {
    const code = 'color: rgba(59, 130, 246, 0.5);';
    const tokens = estimateTokens(code);
    expect(tokens).toBeGreaterThan(3);
  });
});
