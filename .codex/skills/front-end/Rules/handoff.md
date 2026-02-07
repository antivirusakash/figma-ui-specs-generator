---
title: Handoff Rules
impact: LOW-MEDIUM
impactDescription: Design-to-engineering handoff process
tags: rules, handoff, figma, implementation
---

# Handoff Rules

> Load when: `handoff`, `figma`, `design review`, `engineer`, `implementation`

---

## Before (Design)

- All states in Figma
- Spacing uses 4px grid
- Colors use tokens
- Responsive behavior documented

---

## During (Implementation)

- Ask if unclear (don't assume)
- Flag issues (don't silently fix)

---

## After (Review)

- Chromatic approved
- Code reviewed
- A11y clean

---

## Token Sync

Manual export process:
1. Designer exports JSON
2. Developer updates CSS
3. Both review PR
