---
title: CSS Rules
impact: HIGH
impactDescription: Styling patterns and constraints
tags: rules, css, tailwind, globals, theme, dark-mode
---

# CSS Rules

> Load when: `css`, `style`, `tailwind`, `class`, `globals`, `theme`, `dark mode`

---

## Allowed

- CSS variables
- shadcn classes
- Tailwind utilities
- `globals.css` modifications
- `shared.css` modifications

---

## Forbidden

| Pattern | Reason |
|---------|--------|
| Inline styles | Inconsistent, hard to maintain |
| Component CSS files | Use global/shared only |
| Hardcoded values | Use tokens |
| `!important` | Specificity wars |
| Source modifications | Wrap shadcn, don't modify |
| Hex codes | Use `--color-{x}` variables |
| Arbitrary px | Use `--spacing-{n}` tokens |

---

## File Locations

| File | Purpose |
|------|---------|
| `globals.css` | Token overrides, global styles |
| `shared.css` | Shared component styles |

---

## Dark Mode & Theming

> **CRITICAL**: ALL UI must work in both dark and light mode. Test both before shipping.

### shadcn Theme Architecture

shadcn uses CSS variables that automatically adapt to theme. Use these patterns:

| Use | Not |
|-----|-----|
| `bg-background` | `bg-white` or `bg-black` |
| `text-foreground` | `text-black` or `text-white` |
| `bg-muted` | `bg-gray-100` |
| `text-muted-foreground` | `text-gray-500` |
| `bg-card` | `bg-white` |
| `border-border` | `border-gray-200` |
| `bg-primary` / `text-primary-foreground` | Hardcoded brand colors |
| `bg-destructive` / `text-destructive` | `bg-red-500` |

### Theme Variables (globals.css)

```css
:root {
  --background: 0 0% 100%;      /* Light mode */
  --foreground: 0 0% 3.9%;
}

.dark {
  --background: 0 0% 3.9%;      /* Dark mode */
  --foreground: 0 0% 98%;
}
```

### Required Setup

| Rule | Detail |
|------|--------|
| `color-scheme: dark` | On `<html>` for dark themes (fixes scrollbar, inputs) |
| `<meta name="theme-color">` | Matches page background |
| Native `<select>` | Explicit `background-color` and `color` (Windows dark mode) |
| Theme toggle | Use `next-themes` or shadcn pattern |

### Common Pitfalls (Auto-Fail in Dark Mode)

| Violation | Fix |
|-----------|-----|
| `bg-white` / `bg-black` | Use `bg-background` |
| `text-black` / `text-white` | Use `text-foreground` |
| `border-gray-*` | Use `border-border` or `border-muted` |
| `shadow-*` without opacity | Shadows may be invisible in dark mode |
| Images without dark variants | Provide dark mode alternative or use transparency |
| Hardcoded brand colors | Define as CSS variable with dark variant |

### Testing Requirement

Before shipping any UI:
1. Toggle to light mode → verify all elements visible and readable
2. Toggle to dark mode → verify all elements visible and readable
3. Check borders, shadows, and subtle elements in both modes

---

## Scrollbar Handling

| Rule | Detail |
|------|--------|
| Avoid unwanted scrollbars | `overflow-x-hidden` on containers |
| Fix content overflow | Before shipping |
| Dark mode scrollbars | `color-scheme: dark` fixes them |

---

## Violations (Auto-Fail)

```
style={{               → Use Tailwind
*.module.css           → Use globals.css
#[0-9a-fA-F]{3,6}      → Use --color-{x}
margin: Xpx            → Use --spacing-{n}
!important             → Avoid specificity hacks
bg-white               → Use bg-background
bg-black               → Use bg-background
text-white             → Use text-foreground or text-*-foreground
text-black             → Use text-foreground
border-gray-           → Use border-border or border-muted
```
