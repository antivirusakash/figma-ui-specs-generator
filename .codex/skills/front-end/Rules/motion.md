---
title: Motion Rules
impact: MEDIUM-HIGH
impactDescription: Animation and transition constraints
tags: rules, motion, animation, transition, hover
---

# Motion Rules

> Load when: `animation`, `transition`, `motion`, `animate`, `hover`, `entrance`, `exit`

---

## CSS Transitions (Allowed by Default)

| Use | Duration |
|-----|----------|
| State transitions | 150ms ease-out |
| Page transitions | 300ms ease-out |
| Loading | 1000ms linear |

---

## @keyframes Animations (Require Approval)

**NEVER add @keyframes animation unless explicitly requested by designer.**

---

## Constraints

| Rule | Detail |
|------|--------|
| MUST animate only compositor props | `transform`, `opacity` only |
| NEVER animate layout props | No `width`, `height`, `top`, `left`, `margin`, `padding` |
| SHOULD avoid paint props | Except small UI (text, icons) |
| SHOULD use `ease-out` on entrance | |
| NEVER exceed 200ms for interaction feedback | Direct response to user action |
| MUST pause looping animations when off-screen | |
| MUST honor `prefers-reduced-motion` | Provide reduced variant or disable |
| NEVER introduce custom easing | Unless explicitly requested |
| SHOULD avoid animating large images/full-screen | |

---

## Transition Rules

| Rule | Detail |
|------|--------|
| NEVER `transition: all` | List properties explicitly |
| Set `transform-origin` | Correct origin for intended effect |
| Animations interruptible | Respond to user input mid-animation |

---

## SVG Animation

| Rule | Detail |
|------|--------|
| Transforms on `<g>` wrapper | Not on individual elements |
| Use `transform-box: fill-box` | For proper origin |
| Use `transform-origin: center` | Unless specific origin needed |

---

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable or provide reduced variant */
}
```

---

## Violations (Auto-Fail)

```
transition: all          → List properties explicitly
@keyframes               → Requires designer approval
cubic-bezier             → No custom easing without approval
animate-.*width          → No layout property animation
animate-.*height         → No layout property animation
prefers-reduced-motion   → Must be honored if animations present
```
