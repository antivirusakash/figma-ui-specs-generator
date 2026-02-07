---
title: Accessibility Rules
impact: HIGH
impactDescription: WCAG compliance and semantic HTML
tags: rules, accessibility, a11y, aria, wcag, focus
---

# Accessibility Rules

> Load when: `a11y`, `accessibility`, `aria`, `screen reader`, `wcag`, `contrast`, `focus`

---

## Standard

WCAG 2.1 AA compliance required.

---

## Contrast

| Element | Ratio |
|---------|-------|
| Text | 4.5:1 minimum |
| UI components | 3:1 minimum |

---

## Semantic HTML

Use semantic elements before ARIA:

| Need | Use | Not |
|------|-----|-----|
| Actions | `<button>` | `<div onClick>` |
| Navigation | `<a>` / `<Link>` | `<span onClick>` |
| Form labels | `<label>` | `<div>` |
| Data | `<table>` | `<div>` grid |

---

## ARIA Requirements

| Element | Requirement |
|---------|-------------|
| Icon-only buttons | `aria-label` required |
| Form controls | `<label>` or `aria-label` |
| Decorative icons | `aria-hidden="true"` |
| Async updates | `aria-live="polite"` (toasts, validation) |
| Custom components | Appropriate `role` |
| Images | `alt` (or `alt=""` if decorative) |

---

## Focus States

| Rule | Detail |
|------|--------|
| MUST have visible focus | `focus-visible:ring-*` or equivalent |
| NEVER `outline-none` alone | Must provide focus replacement |
| Use `:focus-visible` | Not `:focus` (avoids ring on click) |
| Compound controls | Use `:focus-within` for group focus |

---

## Keyboard

| Rule | Detail |
|------|--------|
| Full keyboard nav | Tab order logical |
| No keyboard traps | Can always escape |
| Interactive elements | Need `onKeyDown`/`onKeyUp` handlers |
| Skip link | Include for main content |

---

## Headings

- Hierarchical `<h1>`–`<h6>` structure
- `scroll-margin-top` on heading anchors
- Include skip link to main content

---

## Motion

MUST honor `prefers-reduced-motion`

---

## Violations (Auto-Fail)

```
<div onClick>           → Use <button> or <a>
<span onClick>          → Use <button> or <a>
outline-none            → Must have focus-visible replacement
aria-label missing      → Icon buttons need aria-label
<img> without alt       → All images need alt attribute
form input no label     → Inputs need <label> or aria-label
```
