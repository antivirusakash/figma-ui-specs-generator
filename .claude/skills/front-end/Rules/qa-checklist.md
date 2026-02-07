---
title: QA Checklist
impact: MEDIUM
impactDescription: Pre-merge verification checklist
tags: rules, qa, checklist, review, verify
---

# QA Checklist

> Load when: `qa`, `checklist`, `review`, `verify`, `audit`, `check`

---

## Pre-Dev

- [ ] Context/Concept/Commitment documented
- [ ] All states in Figma
- [ ] Tokens mapped

---

## Tokens

- [ ] Spacing uses 4px grid (`--spacing-{n}`)
- [ ] Colors from variables (`--color-{x}`)
- [ ] Radii from tokens (`--radius-{n}`)
- [ ] Phosphor icons only

---

## States

- [ ] Default
- [ ] Hover
- [ ] Focus
- [ ] Active
- [ ] Disabled
- [ ] Loading
- [ ] Error
- [ ] Empty
- [ ] Single item
- [ ] Many items (100+)

---

## Accessibility

- [ ] Contrast WCAG AA (4.5:1 text, 3:1 UI)
- [ ] Focus visible
- [ ] Keyboard nav works
- [ ] ARIA labels present
- [ ] A11y addon clean

---

## Mobile

- [ ] All breakpoints tested
- [ ] Touch targets 44px
- [ ] Forms single column
- [ ] Tables horizontal scroll

---

## UI Patterns

- [ ] Skeletons for content loading
- [ ] Spinners for actions
- [ ] Empty states with single CTA
- [ ] AlertDialog for destructive
- [ ] Tooltips on icon-only buttons
- [ ] Toast notifications configured

---

## Interactions

- [ ] No paste blocking
- [ ] `h-dvh` not `h-screen`
- [ ] `safe-area-inset` on fixed elements
- [ ] Errors shown where action happens

---

## Animation

- [ ] No @keyframes without approval
- [ ] Compositor props only (`transform`, `opacity`)
- [ ] `prefers-reduced-motion` honored

---

## Typography

- [ ] `text-balance` on headings
- [ ] `text-pretty` on body
- [ ] `tabular-nums` in tables
- [ ] No custom `letter-spacing`

---

## Design Constraints

- [ ] No gradients (unless requested)
- [ ] No purple/multicolor gradients
- [ ] No glow affordances
- [ ] One accent per route

---

## Visual QA (Browser)

- [ ] Use `agent-browser` skill to launch and inspect the running UI
- [ ] Verify component renders correctly at each breakpoint
- [ ] Confirm hover, focus, and active states match Figma
- [ ] Screenshot key states for comparison

---

## Final

- [ ] Chromatic approved
- [ ] Code reviewed
- [ ] Matches Figma
