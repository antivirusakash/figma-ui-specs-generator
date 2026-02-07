---
title: Performance Rules
impact: MEDIUM
impactDescription: Virtualization, hydration, layout optimization
tags: rules, performance, virtualize, preload, hydration
---

# Performance Rules

> Load when: `performance`, `virtualize`, `lazy`, `preload`, `hydration`, `render`

---

## Core Web Vitals

| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |

---

## Large Lists

| Rule | Detail |
|------|--------|
| >50 items | Virtualize (`virtua`, `content-visibility: auto`) |
| Long arrays `.map()` | Must use virtualization |

---

## Layout Reads in Render

**NEVER** read layout in render:

```tsx
// BAD - causes layout thrashing
const height = element.offsetHeight;
const rect = element.getBoundingClientRect();
const scroll = element.scrollTop;
```

| Forbidden in Render | Reason |
|---------------------|--------|
| `getBoundingClientRect()` | Forces layout |
| `offsetHeight/offsetWidth` | Forces layout |
| `scrollTop/scrollLeft` | Forces layout |

**Batch DOM reads/writes; avoid interleaving.**

---

## Input Performance

| Rule | Detail |
|------|--------|
| Prefer uncontrolled inputs | `defaultValue` over `value` |
| Controlled inputs | Must be cheap per keystroke |

---

## Resource Hints

| Resource | Hint |
|----------|------|
| CDN/asset domains | `<link rel="preconnect">` |
| Critical fonts | `<link rel="preload" as="font">` with `font-display: swap` |

---

## Hydration Safety

| Rule | Detail |
|------|--------|
| Inputs with `value` | Need `onChange` (or use `defaultValue`) |
| Date/time rendering | Guard against server/client mismatch |
| `suppressHydrationWarning` | Only where truly needed |

---

## Violations (Auto-Fail)

```
.map() on 50+ items     → Virtualize large lists
getBoundingClientRect() → No layout reads in render
offsetHeight/offsetWidth → No layout reads in render
value without onChange   → Use defaultValue for uncontrolled
```
