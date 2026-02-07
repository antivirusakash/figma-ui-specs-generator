---
title: Handoff & Maintainability Knowledge
impact: LOW-MEDIUM
impactDescription: Extensibility and specification gaps
tags: knowledge, handoff, maintainability, specification
---

# Handoff & Maintainability Knowledge

> **Pairs with**: [Rules/handoff.md](../Rules/handoff.md)
> **Load when**: `handoff`, `engineer`, `implementation`, `figma`, `spec`

---

## What Makes Design Extensible

| Factor | Detail |
|--------|--------|
| Clear component boundaries | Patterns that repeat, not bespoke one-offs |
| Room for additional states | Space planned for what might come; no layout shifts |
| Predictable behavior | Similar components work similarly |

---

## Always Specify (Most Forgotten)

1. **Error behavior** — What happens on error and how to recover
2. **State transitions** — Not just final states, but hover/focus/active
3. **Responsive rules** — Not just mobile comp, but transition logic
4. **Edge case handling** — Empty, single, many, overflow

---

## The Regret Pattern

> "Over-designed for launch, under-designed for maintenance"

Beautiful but impossible to extend = failure

**Signs of over-design:**
- Custom everything (no reusable patterns)
- Pixel-perfect requirements for dynamic content
- Animation that breaks with different content lengths

---

## Handoff Checklist

Before handing off, can you answer:

- [ ] What happens on error?
- [ ] What's the empty state?
- [ ] How does this scale to 100+ items?
- [ ] What's the loading state?
- [ ] How does this work on mobile?
- [ ] What are the touch targets?
- [ ] What will engineers have to guess?

---

## Communication Protocol

| Phase | Approach |
|-------|----------|
| Before | Document decisions, not just outcomes |
| During | "Ask if unclear, flag issues" |
| After | Review together, iterate |
