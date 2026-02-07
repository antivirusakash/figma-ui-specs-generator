---
title: Image Rules
impact: MEDIUM
impactDescription: Image attributes and loading strategy
tags: rules, images, img, lazy, priority, alt
---

# Image Rules

> Load when: `image`, `img`, `picture`, `lazy`, `priority`, `alt`

---

## Required Attributes

| Attribute | Rule |
|-----------|------|
| `width` | Explicit width required (prevents CLS) |
| `height` | Explicit height required (prevents CLS) |
| `alt` | Descriptive text (or `alt=""` if decorative) |

---

## Loading Strategy

| Position | Attribute |
|----------|-----------|
| Above fold (critical) | `priority` or `fetchpriority="high"` |
| Below fold | `loading="lazy"` |

---

## Decorative Images

- `alt=""` (empty string, not missing)
- Consider using CSS background instead

---

## Performance

| Rule | Detail |
|------|--------|
| Explicit dimensions | Prevents Cumulative Layout Shift (CLS) |
| Lazy load below fold | Reduce initial page weight |
| Preload critical images | Above-fold hero images |

---

## Next.js Image Component

```tsx
// Above fold - critical
<Image src="..." alt="..." priority />

// Below fold - lazy
<Image src="..." alt="..." loading="lazy" />
```

---

## Violations (Auto-Fail)

```
<img> without width      → Must have explicit width
<img> without height     → Must have explicit height
<img> without alt        → Must have alt attribute
Above-fold without priority → Critical images need priority
```
