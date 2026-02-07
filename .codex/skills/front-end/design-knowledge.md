---
title: Design Knowledge Index
impact: CRITICAL
impactDescription: Master index for tacit design knowledge - entry point
tags: knowledge, index, loading, cross-mapping
---

# Design Knowledge Index

> **Tacit design rules captured from designer interview. The "dark knowledge" that drives quality.**

> **Load `design-knowledge/core.md` ALWAYS. Then load topic-specific modules.**

---

## Loading Protocol

1. **Always load**: `design-knowledge/core.md`
2. **Detect task keywords** → **load matching modules**
3. **Load with Rules pair** when implementation specs needed

---

## Cross-Mapping: Rules ↔ Design Knowledge

| Keywords | Rules Module | Design Knowledge Module |
|----------|--------------|------------------------|
| *always* | [Rules/core.md](Rules/core.md) | [design-knowledge/core.md](design-knowledge/core.md) |
| text, font, heading, type | [Rules/typography.md](Rules/typography.md) | [design-knowledge/typography.md](design-knowledge/typography.md) |
| animation, transition, motion | [Rules/motion.md](Rules/motion.md) | [design-knowledge/motion.md](design-knowledge/motion.md) |
| loading, empty, skeleton, state | [Rules/states.md](Rules/states.md) | [design-knowledge/states.md](design-knowledge/states.md) |
| form, input, validation, field | [Rules/forms.md](Rules/forms.md) | [design-knowledge/forms.md](design-knowledge/forms.md) |
| modal, dialog, sheet, overlay | [Rules/modals.md](Rules/modals.md) | [design-knowledge/modals.md](design-knowledge/modals.md) |
| error, message, copy, label | [Rules/errors.md](Rules/errors.md) | [design-knowledge/copy.md](design-knowledge/copy.md) |
| handoff, figma, engineer | [Rules/handoff.md](Rules/handoff.md) | [design-knowledge/handoff.md](design-knowledge/handoff.md) |
| component, design system, token | [Rules/components.md](Rules/components.md) | [design-knowledge/system.md](design-knowledge/system.md) |

---

## Standalone Modules (No Rules Pair)

| Keywords | Module | Content |
|----------|--------|---------|
| hierarchy, layout, prominence | [hierarchy.md](design-knowledge/hierarchy.md) | Mental models, hierarchy tools |
| ux law, hick, fitts, jakob | [ux-laws.md](design-knowledge/ux-laws.md) | Core UX laws, problem→law mapping |
| visual, alignment, polish | [visual-perception.md](design-knowledge/visual-perception.md) | Optical alignment, premium signals |
| stuck, blocked, decision | [process.md](design-knowledge/process.md) | Unblocking, research vs instinct |
| enterprise, table, navigation, density, document, sync | [enterprise.md](design-knowledge/enterprise.md) | Enterprise UI, data tables, collaboration |
| ai, chat, streaming, citations, context | [ai-core.md](design-knowledge/ai-core.md) | AI interfaces, streaming, trust |
| twin, agent, meeting proxy, persona | [viven-product.md](design-knowledge/viven-product.md) | Twin lifecycle, meeting proxy |
| onboarding, education, tooltip, wizard, guidance, hint, first-time, setup, progressive disclosure, coachmark | [user-education.md](design-knowledge/user-education.md) | Onboarding, wizards, feature discovery, education patterns |
| customer, jtbd, pain point, need, value prop, voice of customer | [customers.md](design-knowledge/customers.md) | Jobs-to-be-done, pain points, buyer segments |
| persona, user type, archetype, who is this for | [personas.md](design-knowledge/personas.md) | User archetypes, goals, frustrations, design implications |

---

## Module Overview

### Always Load
- **[core.md](design-knowledge/core.md)** — Philosophy, forcing functions

### Paired with Rules
| Module | Content |
|--------|---------|
| [typography.md](design-knowledge/typography.md) | Type hierarchy |
| [motion.md](design-knowledge/motion.md) | When animation adds value |
| [states.md](design-knowledge/states.md) | Edge cases |
| [forms.md](design-knowledge/forms.md) | Validation timing |
| [modals.md](design-knowledge/modals.md) | Pattern selection |
| [copy.md](design-knowledge/copy.md) | Button labels, errors |
| [handoff.md](design-knowledge/handoff.md) | Specification gaps |
| [system.md](design-knowledge/system.md) | Token philosophy |

### Standalone
| Module | Content |
|--------|---------|
| [hierarchy.md](design-knowledge/hierarchy.md) | Reading patterns |
| [ux-laws.md](design-knowledge/ux-laws.md) | Hick, Fitts, etc. |
| [visual-perception.md](design-knowledge/visual-perception.md) | Premium signals |
| [process.md](design-knowledge/process.md) | Unblocking |
| [enterprise.md](design-knowledge/enterprise.md) | Tables, nav, collaboration |
| [ai-core.md](design-knowledge/ai-core.md) | Streaming, citations, context |
| [viven-product.md](design-knowledge/viven-product.md) | Twin, meeting proxy |
| [user-education.md](design-knowledge/user-education.md) | Onboarding, wizards, tooltips, feature discovery |
| [customers.md](design-knowledge/customers.md) | JTBD, pain points, buyer segments |
| [personas.md](design-knowledge/personas.md) | User archetypes, design implications |

---

## Usage Examples

| Task | Load |
|------|------|
| "Build a login form" | core, forms, states |
| "Design data table" | core, enterprise, states |
| "Build AI chat" | core, ai-core, states |
| "Design twin config" | core, viven-product, forms |
| "Meeting proxy setup" | core, viven-product |
| "Document collaboration" | core, enterprise |
| "Agent permissions UI" | core, viven-product, enterprise |
| "Design onboarding flow" | core, user-education, states |
| "Add tooltips to feature" | core, user-education, copy |
| "First-time user experience" | core, user-education, viven-product |
| "Setup wizard for Twin" | core, user-education, viven-product, forms |
| "Who are we designing for?" | core, personas, customers |
| "What problem does this solve?" | core, customers, viven-product |
| "Prioritize feature for persona" | core, personas, customers |
| "Design for solo consultant" | core, personas, customers, viven-product |
| "Enterprise buyer journey" | core, customers, personas, enterprise |

---

**Source**: Designer interview, captured tacit knowledge; Customer data from 500+ demo requests
