---
title: Modal Rules
impact: MEDIUM
impactDescription: Dialog and overlay patterns
tags: rules, modals, dialog, sheet, overlay
---

# Modal Rules

> Load when: `modal`, `dialog`, `sheet`, `overlay`, `popup`, `alert`

---

## Type Selection

| Use Case | Type |
|----------|------|
| Confirmation/destructive | AlertDialog |
| Quick selection | Bottom sheet |
| Settings/complex forms | Full-screen (mobile) |

---

## Destructive Actions

- MUST use AlertDialog
- MUST explain consequence clearly
- Use "Delete" not "OK"
- Always confirm before executing

---

## General

- Trap focus within modal
- Close on Escape key
- Close on backdrop click (except destructive)
