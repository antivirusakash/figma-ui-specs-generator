---
title: Interaction Rules
impact: MEDIUM-HIGH
impactDescription: User interaction and navigation patterns
tags: rules, interactions, click, keyboard, navigation
---

# Interaction Rules

> Load when: `click`, `hover`, `focus`, `keyboard`, `paste`, `scroll`, `touch`, `navigation`

---

## Input Behavior

| Rule | Detail |
|------|--------|
| NEVER block paste | Inputs/textareas must accept paste; can parse/format after |

---

## Viewport

| Rule | Detail |
|------|--------|
| NEVER use `h-screen` | Use `h-dvh` (dynamic viewport height) |
| MUST respect `safe-area-inset` | All fixed elements use `env(safe-area-inset-*)` |

---

## Hover States

| Rule | Detail |
|------|--------|
| Buttons/links need `hover:` | Visual feedback required |
| Increase contrast on hover | Hover/active/focus more prominent than rest |

---

## Navigation & Links

| Rule | Detail |
|------|--------|
| Links use `<a>`/`<Link>` | Support Cmd/Ctrl+click, middle-click |
| URL reflects state | Filters, tabs, pagination in query params |
| Deep-link stateful UI | If uses `useState`, consider URL sync |

---

## Destructive Actions

| Rule | Detail |
|------|--------|
| Confirmation required | Modal or undo window |
| Never immediate | Always allow recovery |

---

## Tooltips

- Required on: icon-only buttons, truncated text
- Delay: 300ms

---

## Notifications

Toast (bottom center):
- Success: 3s
- Error: 5s
- Warning: 4s
- Info: 3s

---

## Keyboard

| Rule | Detail |
|------|--------|
| Tab/arrow navigation | Required for a11y |
| No hotkeys | No Cmd+K, etc. |
| `autoFocus` sparingly | Desktop only, single primary input |

---

## Violations (Auto-Fail)

```
onPaste.*preventDefault  → Never block paste
h-screen                 → Use h-dvh
<div onClick> navigation → Use <a> or <Link>
hover: missing           → Buttons/links need hover state
```
