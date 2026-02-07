---
name: front-end
description: Front-end skill for UI code review, component validation, Figma implementation check. Use when reviewing React/TSX code, checking design tokens, validating states/accessibility, or auditing theming.
---

# Front-End Skill

> **Autonomous. No stopping until `<promise>COMPLETED REPORT</promise>`.**

**Memory**: [memory.yaml](memory.yaml) — Read before, write after every run

**Knowledge**: [design-knowledge.md](design-knowledge.md) — Tacit design rules and philosophy

**Rules**: [RULES.md](RULES.md) — Module index, loading protocol, related skills

---

## Protocol

| Phase | Action |
|-------|--------|
| 1. Load | Read memory.yaml → design-knowledge.md |
| 2. Check | Run all 53 checks below using Grep/Glob tools |
| 3. Report | Output `<promise>COMPLETED REPORT</promise>` |
| 4. Memory | Update runs/decisions/mistakes/patterns in memory.yaml |

---

## Checks (53 total)

### A. Tokens (4)
| Check | Violation |
|-------|-----------|
| Spacing | `margin:\s*[0-9]` `padding:\s*[0-9]` |
| Colors | `#[0-9a-fA-F]{3,6}` |
| Radius | `border-radius:\s*[0-9]` |
| Icons | `lucide-react\|heroicons\|feather` (use `@phosphor-icons/react`) |

### B. Components (4)
| Check | Violation |
|-------|-----------|
| shadcn | Modified source |
| CSS | `*.module.css` exists |
| Inline | `style={{` or `style="` |
| Hardcoded | Raw px/hex |

### C. States (8)
| Check | Violation |
|-------|-----------|
| Default state | Component missing resting appearance |
| Hover feedback | Clickable element missing `hover:` |
| Focus visible | Interactive element missing `focus-visible:` |
| Active/pressed | Button/link missing `active:` feedback |
| Disabled visual | Disabled state not visually distinct |
| Loading state | Action missing loading indicator |
| Error state | Form/action missing error handling |
| Empty state | List/content missing empty state UI |

### D. Mobile (5)
Touch 44px, Forms single-col, Tables scroll, 640px, 1024px

### E. A11y (4)
Contrast 4.5:1, Focus ring, Keyboard nav, ARIA labels

### F. UI (6)
Skeleton/spinner context, Empty+CTA, AlertDialog destructive, Icon tooltips, Bottom toast, Modal types

### G. Interactions (4)
| Check | Violation |
|-------|-----------|
| Paste blocking | `onPaste.*preventDefault` |
| h-screen | `h-screen` (should be `h-dvh`) |
| safe-area | Fixed elements missing `safe-area-inset` |
| Error placement | Errors far from action trigger |

### H. Animation (5)
| Check | Violation |
|-------|-----------|
| Unapproved keyframes | `@keyframes` without designer approval |
| Layout animation | `animate-.*width\|height\|top\|left\|margin\|padding` |
| Paint animation | Large surface `background` or `color` animations |
| Custom easing | `cubic-bezier` or custom timing functions |
| Missing reduced-motion | `@keyframes` without `prefers-reduced-motion` check |

### I. Typography (4)
| Check | Violation |
|-------|-----------|
| Heading balance | Headings missing `text-balance` |
| Body pretty | Body text missing `text-pretty` |
| Table nums | Tables without `tabular-nums` |
| Letter spacing | `tracking-` or `letter-spacing:` |

### J. Design (7)
| Check | Violation |
|-------|-----------|
| Gradients | `gradient` `bg-gradient` without explicit request |
| Purple gradient | `purple\|violet` in gradient contexts |
| Multicolor gradient | `from-.*via-.*to-` (3+ colors) |
| Glow affordance | `shadow-.*glow\|ring-.*glow` as primary |
| Empty CTA count | Empty states with 0 or 2+ CTAs |
| Accent overuse | Multiple accent colors per route |
| Dark mode | Gradient/glow assumptions that break in dark mode |

### K. Theming (6)
| Check | Violation |
|-------|-----------|
| Hardcoded bg | `bg-white` `bg-black` instead of `bg-background` |
| Hardcoded text | `text-white` `text-black` instead of `text-foreground` |
| Hardcoded border | `border-gray-` instead of `border-border` |
| Hardcoded muted | `bg-gray-100` `text-gray-500` instead of semantic |
| Missing dark variant | Custom colors without `.dark` CSS variable |
| Theme toggle test | UI not verified in both light and dark modes |

---

## Related Skills

Invoke these skills for specialized tasks:

| Trigger | Skill | Use Case |
|---------|-------|----------|
| React/Next.js perf, bundle size, hydration, re-renders | `/react-best-practices` | Performance optimization, code review |
| Browser test, visual QA, headless, screenshot, E2E | `/agent-browser` | Automated testing, visual regression |

### When to Invoke

| Task | Action |
|------|--------|
| "Review this component for performance" | Load front-end rules + invoke `/react-best-practices` |
| "Test this page in browser" | Invoke `/agent-browser` |
| "Full QA of feature X" | Load `qa-checklist.md` + invoke `/agent-browser` for visual verification |

---

## Memory Updates

After each run, update in memory.yaml:

| Section | Data |
|---------|------|
| `runs` | id, date, score, issues, commands, rca, reflections |
| `decisions` | date, decision, rationale, alternatives |
| `mistakes` | 5-whys RCA, correction, prevention |
| `patterns` | new violations found |
| `statistics` | recalculate totals |

Templates in memory.yaml — follow structure there.

---

## Rules

- **COMPLETE** — Run until `<promise>COMPLETED REPORT</promise>`
- **LOG ALL** — Findings, decisions, patterns found
- **WRITE MEMORY** — Update memory.yaml after each run
- **CLARIFY IF BLOCKED** — Ask if target files/scope unclear

---

**v1.6.0** | [memory.yaml](memory.yaml) | [design-knowledge.md](design-knowledge.md) | [RULES.md](RULES.md)
