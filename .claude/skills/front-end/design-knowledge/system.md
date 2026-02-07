---
title: Design System Knowledge
impact: MEDIUM
impactDescription: System red flags and token philosophy
tags: knowledge, design-system, tokens, components
---

# Design System Knowledge

> **Pairs with**: [Rules/components.md](../Rules/components.md)
> **Load when**: `design system`, `component`, `token`, `pattern`, `consistency`

---

## Design System Red Flags

| Smell | Problem |
|-------|---------|
| Colors named by hue | "Blue500" instead of "interactive" or "primary" |
| Spacing values off-scale | 12px, 14px, 18px, 22px — arbitrary, not systematic |
| Too many component variants | ButtonPrimary, ButtonSecondary, ButtonGhost, ButtonDanger... |
| No "when to use" documentation | Components without guidance |

---

## Good System Characteristics

| Characteristic | Why It Matters |
|----------------|----------------|
| Semantic naming | "danger" not "red" — meaning over appearance |
| Constrained choices | Limited options = faster decisions |
| Clear hierarchy | Primary, secondary, tertiary — not 10 levels |
| Usage documentation | "When to use X vs Y" |

---

## Component Boundary Rules

| Good Boundary | Bad Boundary |
|---------------|--------------|
| Reusable across contexts | One-off for specific page |
| Single responsibility | Does multiple unrelated things |
| Predictable API | Surprising behavior |
| Composable | Monolithic |

---

## Token Philosophy

| Token Type | Naming Strategy |
|------------|-----------------|
| Color | Semantic (interactive, danger, muted) |
| Spacing | Scale-based (1, 2, 3, 4...) |
| Typography | Role-based (heading, body, caption) |
| Radius | Scale-based (sm, md, lg) |

---

## System Evolution

When to add vs. reuse:

- **Add** only when existing components genuinely can't serve the need
- **Extend** existing components before creating new ones
- **Document** why a new component was needed
