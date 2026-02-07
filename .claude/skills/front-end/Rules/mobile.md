---
title: Mobile Rules
impact: MEDIUM-HIGH
impactDescription: Responsive and touch interaction patterns
tags: rules, mobile, responsive, touch, viewport
---

# Mobile Rules

> Load when: `mobile`, `responsive`, `touch`, `breakpoint`, `viewport`, `tablet`, `phone`

---

## Touch Targets

44x44px minimum for all interactive elements.

---

## Layout Patterns

| Element | Rule |
|---------|------|
| Navigation | Hamburger menu |
| Forms | Single column always |
| Tables | Horizontal scroll |
| Typography | Same sizes (adjust layout only) |

---

## Viewport

| Rule | Detail |
|------|--------|
| NEVER use `h-screen` | Use `h-dvh` (dynamic viewport height) |
| MUST respect `safe-area-inset` | All fixed elements use `env(safe-area-inset-*)` |
| NEVER disable zoom | No `user-scalable=no` or `maximum-scale=1` |

---

## Safe Areas

Full-bleed layouts need `env(safe-area-inset-*)` for notches:

```css
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
padding-left: env(safe-area-inset-left);
padding-right: env(safe-area-inset-right);
```

---

## Touch Interaction

| Rule | Detail |
|------|--------|
| `touch-action: manipulation` | Prevents double-tap zoom delay |
| `-webkit-tap-highlight-color` | Set intentionally (not default) |
| `overscroll-behavior: contain` | In modals/drawers/sheets |
| `autoFocus` | Desktop only; avoid on mobile |

---

## Drag Interactions

| Rule | Detail |
|------|--------|
| Disable text selection | During drag operations |
| `inert` on dragged elements | Prevent accidental interaction |

---

## Responsive Approach

Desktop-first. Test all breakpoints before merge.

---

## Layout Rules

| Rule | Detail |
|------|--------|
| Avoid unwanted scrollbars | `overflow-x-hidden` on containers |
| Flex/grid over JS measurement | For responsive layout |
| Fix content overflow | Before shipping |

---

## Violations (Auto-Fail)

```
h-screen                → Use h-dvh
user-scalable=no        → Never disable zoom
maximum-scale=1         → Never disable zoom
safe-area-inset missing → Fixed elements need safe areas
autoFocus on mobile     → Avoid on mobile devices
```
