---
title: States & Edge Cases Knowledge
impact: HIGH
impactDescription: Edge case design priority and testing
tags: knowledge, states, edge-case, empty, error, loading
---

# States & Edge Cases Knowledge

> **Pairs with**: [Rules/states.md](../Rules/states.md)
> **Load when**: `state`, `edge case`, `empty`, `loading`, `error`, `extreme`

---

## Always Design These (Even When Not Requested)

| Edge Case | Why |
|-----------|-----|
| Empty state (zero items) | First-time and cleared-out experience |
| Single item vs many items (100+) | Does design work at both extremes? |
| Long content / truncation | What happens when text overflows? |
| Worst realistic state | Error + slow + edge case combined |

---

## Review Questions to Ask

- "What happens when this content is 10x longer/shorter?"
- "What's the worst realistic state this can be in?"
- "If I remove this element, what actually breaks?"
- "What will engineers assume that I haven't specified?"

---

## State Design Priority

Design in this order:

1. **Error state** — What goes wrong?
2. **Empty state** — What's the starting point?
3. **Loading state** — What does waiting look like?
4. **Default state** — Normal operation
5. **Success state** — Confirmation feedback

**Why this order?** Unhappy paths reveal constraints that inform happy paths.

---

## Extreme Content Testing

| Test | What It Reveals |
|------|-----------------|
| Zero items | Empty state quality |
| One item | Singular grammar, lonely UI |
| 100+ items | Performance, scroll, pagination |
| Max length text | Truncation, wrapping behavior |
| Min length text | Awkward whitespace |
