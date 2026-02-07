---
title: Core Rules
impact: CRITICAL
impactDescription: Foundation for all front-end work - load always
tags: rules, core, tokens, compliance, stack
---

# Core Rules (Always Load)

> **Load when**: always (mandatory for all tasks)

> **MANDATORY**: These rules apply to ALL front-end work. Violations = broken build.

---

## Compliance Gate

Before writing ANY code, confirm:

| Requirement | Token/Pattern |
|-------------|---------------|
| Spacing | `--spacing-{n}` only (4px base). NO arbitrary px. |
| Colors | `--color-{x}` semantic variables only. NO hex codes. NO direct Tailwind palette colors (`bg-emerald-600`, `text-red-500`) — use semantic tokens (`bg-primary`, `text-destructive`). |
| **Theming** | **ALL UI must work in dark AND light mode. Use shadcn theme variables.** |
| Typography | System font stack. Font tokens deferred. |
| Radius | `--radius-{n}` only. `rounded-full` reserved for dots/avatars/badges — NEVER on buttons. |
| Icons | Phosphor (`@phosphor-icons/react`). 12/16/20/24px sizes (hero 32-48px exception). |
| Components | Wrap shadcn. NEVER modify source. |
| CSS | globals.css/shared.css ONLY. NO component CSS. |
| States | ALL states: default, hover, focus, active, disabled, loading, error, empty. |
| Mobile | 44px touch targets. Single column forms. Horizontal scroll tables. |

**If you cannot confirm ALL above, STOP and clarify before proceeding.**

---

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js (App Router) |
| UI Components | shadcn/ui (design system layer) |
| Storybook | `/Users/mem_yaml/Documents/storybook/` |
| Visual Testing | Chromatic (every PR, changes block) |
| Icons | Phosphor (`@phosphor-icons/react`) |
| Styling | CSS Variables only |
| A11y | WCAG 2.1 AA |

---

## Design Philosophy

| Principle | Decision |
|-----------|----------|
| Core tradeoff | Simplicity vs. Power (progressive disclosure) |
| Responsive | Desktop-first |
| Density | Comfortable (spacious) |
| Color | Semantic + brand accents |
| Motion | Minimal/functional only |
| Interactions | Minimal + tooltips on hover |
| Shortcuts | No hotkeys. Tab/arrow keyboard nav required for a11y. |
| i18n | English only |
| Offline | Online-only (show banner) |
| Real-time | Manual refresh |
| Persistence | Selective (theme, density only) |

---

## Design Constraints

| Rule | Detail |
|------|--------|
| NEVER use gradients | Unless explicitly requested |
| NEVER use purple or multicolor gradients | AI code anti-pattern; suppress LLM defaults |
| NEVER use glow effects as primary affordances | |
| MUST give empty states one clear next action | Single CTA |
| SHOULD limit to one dominant accent per route | Muted/disabled variants allowed |

---

## Tokens

### Spacing (4px base)

`--spacing-{1|2|3|4|5|6|8|10|12|16}` = 4px to 64px

### Radius

`--radius-{none|sm|md|lg|xl|full}`

### Colors

Use `--color-{semantic-name}` variables only. NO hex codes.
