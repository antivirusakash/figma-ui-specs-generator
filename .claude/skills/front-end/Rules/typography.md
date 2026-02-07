---
title: Typography Rules
impact: MEDIUM-HIGH
impactDescription: Text rendering and formatting patterns
tags: rules, typography, text, font, heading
---

# Typography Rules

> Load when: `text`, `font`, `heading`, `paragraph`, `label`, `truncate`

---

## Required Patterns

| Rule | Detail |
|------|--------|
| MUST use `text-balance` for headings | Prevents orphans/widows |
| MUST use `text-pretty` for body/paragraphs | Better line breaks |
| MUST use `tabular-nums` in tables/data grids | Aligned columns |
| SHOULD use `truncate` or `line-clamp` for dense UI | |
| NEVER modify `letter-spacing` | No `tracking-*` unless requested |

---

## Font Stack

System font stack for now. Font tokens deferred to future phase.

---

## Component Font Sizes

| Context | Size | Tailwind |
|---------|------|----------|
| Caption / description | 12px | `text-xs` |
| Title | 14px | `text-sm` |
| Tabs | 14px | `text-sm` |
| Heading (small) | 16px | `text-base` |
| Heading (large) | 20px | `text-xl` |

---

## Usage Context

| Context | Pattern |
|---------|---------|
| Headings | `text-balance` |
| Body text | `text-pretty` |
| Data/numbers | `tabular-nums` |
| Overflow | `truncate` or `line-clamp-{n}` |
| Labels | Keep concise, no truncation preferred |

---

## Character Rules

| Use | Not |
|-----|-----|
| `…` (ellipsis) | `...` (three dots) |
| `"` `"` (curly quotes) | `"` (straight quotes) |
| `&nbsp;` (non-breaking space) | Regular space in: `10 MB`, `⌘ K`, brand names |

---

## Loading Text

Loading states end with `…`:
- `"Loading…"`
- `"Saving…"`
- `"Processing…"`

---

## Content Handling

| Rule | Detail |
|------|--------|
| Text containers | Handle long content: `truncate`, `line-clamp-*`, `break-words` |
| Flex children | Need `min-w-0` to allow truncation |
| User content | Anticipate short, average, and very long inputs |

---

## Violations (Auto-Fail)

```
tracking-              → No letter-spacing modification
letter-spacing:        → No letter-spacing modification
"..."                  → Use "…" (single ellipsis character)
```
