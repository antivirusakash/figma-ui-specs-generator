---
title: Form Design Knowledge
impact: HIGH
impactDescription: Form layout and validation timing
tags: knowledge, forms, validation, field, layout
---

# Form Design Knowledge

> **Pairs with**: [Rules/forms.md](../Rules/forms.md)
> **Load when**: `form`, `input`, `field`, `validation`, `submit`

---

## Non-Negotiables

| Rule | Rationale |
|------|-----------|
| One column always | Vertical scanning, predictable flow |
| Labels above fields | Labels persist; placeholders vanish |
| Validation before submit when possible | Real-time feedback, not post-submit surprise |
| Primary action dominant, secondary muted | "Submit" obvious, "Cancel" quiet |

---

## Field Order Logic

1. **Most required first** — Don't hide mandatory fields
2. **Logical grouping** — Related fields together
3. **Easy to hard** — Build momentum with simple fields first
4. **Sensitive last** — Payment, password after commitment

---

## Validation Timing

| When | Use For |
|------|---------|
| On blur | Format validation (email, phone) |
| On change | Character limits, real-time feedback |
| On submit | Cross-field validation, server-side checks |

**Never**: Validate while typing (too aggressive)

---

## Common Form Mistakes

| Mistake | Problem |
|---------|---------|
| Placeholder as label | Disappears on focus |
| Inline labels | Hard to scan, accessibility issues |
| Multi-column on mobile | Breaks scanning pattern |
| "Submit" button | Generic; use specific action verb |
