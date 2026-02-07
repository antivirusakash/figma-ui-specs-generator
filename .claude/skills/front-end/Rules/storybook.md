---
title: Storybook Rules
impact: LOW-MEDIUM
impactDescription: Component story and visual testing requirements
tags: rules, storybook, chromatic, visual-test
---

# Storybook Rules

> Load when: `storybook`, `story`, `stories`, `chromatic`, `visual test`

---

## Location

`/Users/mem_yaml/Documents/storybook/`

---

## Required Stories

Every component needs stories for:
- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Error
- Empty
- Single item
- Many items (100+)

---

## Chromatic

- Run on every PR
- Visual diff blocks merge until designer approves
- No exceptions

---

## Review

Both must approve:
- Engineer (code quality)
- Designer (visual accuracy)
