---
title: Front-End Rules Index
impact: CRITICAL
impactDescription: Master index for module loading - entry point
tags: rules, index, loading, cross-mapping
---

# Front-End Rules Index

> **AI AGENTS: Load `Rules/core.md` + `design-knowledge/core.md` ALWAYS. Then load paired modules by keyword.**

> **SYNC: Any change to `Front-end/` MUST also update `/.cursorrules`. See [SKILL.md](SKILL.md).**

---

## Loading Protocol

1. **Always load**: `Rules/core.md` + `design-knowledge/core.md`
2. **Detect keywords** in task → **load ALL matching modules** (not just primary)
3. **For QA/review**: Load `Rules/qa-checklist.md`
4. **For related skills**: See [Related Skills](#related-skills) below

### Loading Behavior

| Scenario | Behavior |
|----------|----------|
| Multiple keyword matches | Load all matches (comprehensive > token-saving) |
| Rule conflicts with knowledge | **Specificity wins** — agent interprets which is more specific to context |
| No keyword match | **Ask for clarification** — list module options, let user choose |
| Cross-cutting concern | Lives in **primary home** — other modules link, don't duplicate |

---

## Cross-Mapping: Keywords → Paired Modules

| Keywords | Rules | Design Knowledge |
|----------|-------|------------------|
| *always* | [Rules/core.md](Rules/core.md) | [design-knowledge/core.md](design-knowledge/core.md) |
| text, font, heading, paragraph, label | [Rules/typography.md](Rules/typography.md) | [design-knowledge/typography.md](design-knowledge/typography.md) |
| animation, transition, motion | [Rules/motion.md](Rules/motion.md) | [design-knowledge/motion.md](design-knowledge/motion.md) |
| icon, phosphor, symbol | [Rules/icons.md](Rules/icons.md) | — |
| mobile, responsive, touch, viewport | [Rules/mobile.md](Rules/mobile.md) | — |
| loading, empty, skeleton, spinner, hover, focus, active, disabled, state | [Rules/states.md](Rules/states.md) | [design-knowledge/states.md](design-knowledge/states.md) |
| form, input, validation, field, submit | [Rules/forms.md](Rules/forms.md) | [design-knowledge/forms.md](design-knowledge/forms.md) |
| modal, dialog, sheet, overlay, alert | [Rules/modals.md](Rules/modals.md) | [design-knowledge/modals.md](design-knowledge/modals.md) |
| error, exception, message, copy, label | [Rules/errors.md](Rules/errors.md) | [design-knowledge/copy.md](design-knowledge/copy.md) |
| click, keyboard, paste, scroll, navigation | [Rules/interactions.md](Rules/interactions.md) | — |
| a11y, accessibility, aria, wcag, focus | [Rules/accessibility.md](Rules/accessibility.md) | — |
| component, shadcn, primitive, design system | [Rules/components.md](Rules/components.md) | [design-knowledge/system.md](design-knowledge/system.md) |
| css, style, tailwind, globals, theme, dark mode | [Rules/css.md](Rules/css.md) | — |
| storybook, chromatic, visual test | [Rules/storybook.md](Rules/storybook.md) | — |
| handoff, figma, engineer | [Rules/handoff.md](Rules/handoff.md) | [design-knowledge/handoff.md](design-knowledge/handoff.md) |
| qa, checklist, review, verify | [Rules/qa-checklist.md](Rules/qa-checklist.md) | — |
| image, img, picture, lazy, alt | [Rules/images.md](Rules/images.md) | — |
| performance, virtualize, preload, hydration | [Rules/performance.md](Rules/performance.md) | — |
| i18n, locale, date, time, number, currency | [Rules/i18n.md](Rules/i18n.md) | — |
| sample, placeholder, mock, dummy, test data | [Rules/sample-data.md](Rules/sample-data.md) | — |
| hierarchy, layout, prominence, visual weight | — | [design-knowledge/hierarchy.md](design-knowledge/hierarchy.md) |
| ux law, hick, fitts, jakob, psychology | — | [design-knowledge/ux-laws.md](design-knowledge/ux-laws.md) |

---

## Design Knowledge Only

| Keywords | Module |
|----------|--------|
| visual, alignment, polish, premium, feels off | [design-knowledge/visual-perception.md](design-knowledge/visual-perception.md) |
| stuck, blocked, decision, research, process | [design-knowledge/process.md](design-knowledge/process.md) |
| customer, vision, phases, productivity, hal | [design-knowledge/customer-review.md](design-knowledge/customer-review.md) |
| hierarchy, layout, prominence | [design-knowledge/hierarchy.md](design-knowledge/hierarchy.md) |
| ux law, hick, fitts, jakob | [design-knowledge/ux-laws.md](design-knowledge/ux-laws.md) |

---

## Module Overview

### Always Load (Both)
| Rules | Design Knowledge |
|-------|------------------|
| [core.md](Rules/core.md) — Compliance, stack, tokens | [core.md](design-knowledge/core.md) — Philosophy, forcing functions |

### Task-Specific (Paired)
| Topic | Rules | Design Knowledge |
|-------|-------|------------------|
| Typography | [typography.md](Rules/typography.md) | [typography.md](design-knowledge/typography.md) |
| Motion | [motion.md](Rules/motion.md) | [motion.md](design-knowledge/motion.md) |
| States | [states.md](Rules/states.md) | [states.md](design-knowledge/states.md) |
| Forms | [forms.md](Rules/forms.md) | [forms.md](design-knowledge/forms.md) |
| Modals | [modals.md](Rules/modals.md) | [modals.md](design-knowledge/modals.md) |
| Errors/Copy | [errors.md](Rules/errors.md) | [copy.md](design-knowledge/copy.md) |
| Components | [components.md](Rules/components.md) | [system.md](design-knowledge/system.md) |
| Handoff | [handoff.md](Rules/handoff.md) | [handoff.md](design-knowledge/handoff.md) |

### Rules Only
| Module | Content |
|--------|---------|
| [icons.md](Rules/icons.md) | Phosphor sizes, weights, accessibility |
| [mobile.md](Rules/mobile.md) | Touch targets, viewport, safe areas |
| [interactions.md](Rules/interactions.md) | Navigation, hover, keyboard, destructive actions |
| [accessibility.md](Rules/accessibility.md) | WCAG, contrast, focus, semantic HTML, ARIA |
| [css.md](Rules/css.md) | Allowed/forbidden patterns, dark mode, theming |
| [storybook.md](Rules/storybook.md) | Required stories, Chromatic |
| [qa-checklist.md](Rules/qa-checklist.md) | Full verification checklist |
| [images.md](Rules/images.md) | Dimensions, alt, lazy loading, priority |
| [performance.md](Rules/performance.md) | Virtualization, hydration, layout reads |
| [i18n.md](Rules/i18n.md) | Intl.DateTimeFormat, Intl.NumberFormat |
| [sample-data.md](Rules/sample-data.md) | Placeholder names, emails, teams for mocks |

### Design Knowledge Only
| Module | Content |
|--------|---------|
| [hierarchy.md](design-knowledge/hierarchy.md) | Mental models, visual hierarchy, reading patterns |
| [ux-laws.md](design-knowledge/ux-laws.md) | Jakob, Hick, Fitts, Miller, Doherty |
| [visual-perception.md](design-knowledge/visual-perception.md) | Off detector, optical alignment, premium signals |
| [process.md](design-knowledge/process.md) | Unblocking, research vs instinct, anti-patterns |

---

## Failure Signals

Restructure if you observe:
- **Constant cross-referencing** — Every task requires 5+ modules
- **Context loss** — Breaking up loses holistic understanding

---

## Usage Examples

| Task | Load |
|------|------|
| "Build a login form" | Rules: core, forms, states, accessibility / DK: core, forms, states, copy |
| "Add loading skeleton" | Rules: core, states / DK: core, states |
| "Modal confirmation" | Rules: core, modals / DK: core, modals, copy |
| "Hover animation" | Rules: core, motion, interactions / DK: core, motion |
| "Typography feels off" | Rules: core, typography / DK: core, typography, visual-perception |
| "Add image gallery" | Rules: core, images, performance / DK: core |
| "Format dates/numbers" | Rules: core, i18n / DK: core |
| "Virtualize long list" | Rules: core, performance, states / DK: core, states |
| "Dark mode styling" | Rules: core, css, components / DK: core, system |
| "Theme colors" | Rules: core, css, components / DK: core |
| "QA review" | Rules: core, qa-checklist / DK: core |
| "Handoff to eng" | Rules: core, handoff, qa-checklist / DK: core, handoff |
| "Need placeholder users" | Rules: core, sample-data / DK: core |
| "Figma mock data" | Rules: core, sample-data / DK: core |

---
