---
title: Modal & Overlay Knowledge
impact: MEDIUM
impactDescription: Pattern selection and interruption hierarchy
tags: knowledge, modals, dialog, overlay, interruption
---

# Modal & Overlay Knowledge

> **Pairs with**: [Rules/modals.md](../Rules/modals.md)
> **Load when**: `modal`, `dialog`, `overlay`, `popup`, `sheet`, `inline`

---

## Pattern Selection

| Pattern | Use When |
|---------|----------|
| Modal | Interruption requiring acknowledgment (confirmations, blocking choices) |
| Inline expansion | Context-preserving detail or edit (don't lose place) |
| New page | Complex task or major context shift (many fields, distinct workflow) |

---

## Modal Decision Framework

Ask in order:

1. **Must the user acknowledge this before continuing?** → Yes = Modal
2. **Does the user need to see the original context?** → Yes = Inline or Sheet
3. **Is this a complex multi-step task?** → Yes = New page
4. **Is this a quick selection or confirmation?** → Yes = Modal or Sheet

---

## Modal Anti-Patterns

| Anti-Pattern | Problem |
|--------------|---------|
| Modal spawning modal | Confusing stack, lose context |
| Long forms in modal | Should be a page |
| Modal for non-blocking info | Should be inline or toast |
| Unclosable modal | Trapped user, frustration |

---

## Hierarchy of Interruption

From least to most disruptive:

1. **Inline** — No interruption, context preserved
2. **Toast** — Brief notification, auto-dismisses
3. **Bottom sheet** — Partial interruption, context visible
4. **Modal** — Full interruption, focus trapped
5. **Full-screen** — Complete context switch
