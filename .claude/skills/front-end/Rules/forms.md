---
title: Form Rules
impact: HIGH
impactDescription: Form validation and input patterns
tags: rules, forms, input, validation, submit
---

# Form Rules

> Load when: `form`, `input`, `validation`, `field`, `submit`, `textarea`, `select`

---

## Validation Patterns

| Error Type | Pattern |
|------------|---------|
| Field validation | Inline (red text + border) |
| Form submission | Inline + toast |
| Cross-field validation | Inline on relevant field + form summary |

**MUST show errors next to where the action happens.**
**Focus first error field on submit.**

---

## Layout

- Mobile: Single column always
- Desktop: Can use multi-column for related fields

---

## Input Requirements

| Attribute | Rule |
|-----------|------|
| `autocomplete` | Required on all inputs |
| `name` | Meaningful, descriptive names |
| `type` | Correct type: `email`, `tel`, `url`, `number` |
| `inputmode` | Match expected input: `numeric`, `tel`, etc. |
| `spellCheck={false}` | On emails, codes, usernames |
| `autocomplete="off"` | On non-auth fields (avoid password manager) |

---

## Label Requirements

| Rule | Detail |
|------|--------|
| Labels clickable | Use `htmlFor` or wrap control |
| Checkboxes/radios | Label + control share single hit target |
| No dead zones | Entire row should be clickable |
| Placeholders | End with `…`, show example pattern |

---

## Interactions

| Rule | Detail |
|------|--------|
| NEVER block paste | Inputs must accept paste; can parse/format after |
| Warn unsaved changes | `beforeunload` or router guard before navigation |

---

## Submit States

| State | Behavior |
|-------|----------|
| Default | Enabled, specific label ("Save API Key" not "Submit") |
| Submitting | Spinner inside button, button disabled |
| Success | Toast notification |
| Error | Inline errors + toast, focus first error |

**Submit button stays enabled until request starts.**

---

## Violations (Auto-Fail)

```
onPaste.*preventDefault  → Never block paste
placeholder="..."        → Use "…" not "..."
autocomplete missing     → All inputs need autocomplete
<input> without label    → Must have <label> or aria-label
```
