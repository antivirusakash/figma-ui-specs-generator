---
title: UI States Rules
impact: HIGH
impactDescription: Required 8-state coverage for all components
tags: rules, states, loading, empty, skeleton, disabled, hover, focus, active
---

# UI States Rules

> Load when: `loading`, `empty`, `skeleton`, `spinner`, `progress`, `disabled`, `state`, `hover`, `focus`, `active`

---

## Required States (8)

Every interactive component must handle ALL:

| State | Purpose |
|-------|---------|
| Default | Resting appearance |
| Hover | Mouse over feedback |
| Focus | Keyboard navigation indicator |
| Active/Pressed | Click/tap feedback |
| Disabled | Non-interactive state |
| Loading | Action in progress |
| Error | Validation/submission failure |
| Empty | No content available |

---

## Interactive State Hierarchy

Visual prominence must increase through the interaction flow:

```
Default → Hover → Active/Pressed → Focus
   ↑         ↑          ↑            ↑
 lowest    subtle    stronger    strongest
```

| Principle | Detail |
|-----------|--------|
| Hover < Active < Focus | Focus must be most prominent (a11y) |
| Additive feedback | Each state adds to previous, doesn't replace |
| Consistent direction | If hover darkens, active darkens more |

---

## Hover State Patterns

| Rule | Detail |
|------|--------|
| Required on | Buttons, links, cards, list items, any clickable |
| Feedback type | Background change, border change, or subtle lift |
| Timing | Immediate (no delay on hover-in) |
| Contrast | Must increase visual prominence from default |
| Touch devices | Hover states should not be required for functionality |

### Hover Anti-Patterns

| Don't | Why |
|-------|-----|
| Color-only feedback | Fails for colorblind users |
| Dramatic animations | Distracting on frequent interactions |
| Hidden content on hover | Unusable on touch devices |
| Hover-dependent actions | Must work without hover |

---

## Focus State Patterns

| Rule | Detail |
|------|--------|
| MUST be visible | 2px+ ring or outline |
| Use `:focus-visible` | Not `:focus` (avoids ring on mouse click) |
| Ring offset | Slight offset from element for visibility |
| Color | High contrast against background |
| NEVER remove | No `outline-none` without replacement |

### Focus Scope

| Component Type | Focus Behavior |
|----------------|----------------|
| Single elements | Focus ring on element |
| Compound controls | Use `:focus-within` on container |
| Groups/cards | Focus ring on interactive child, not container |
| Modals | Trap focus within, return on close |

---

## Active/Pressed State Patterns

| Rule | Detail |
|------|--------|
| Visual feedback | Immediate on mousedown/touchstart |
| Direction | Typically darker/inset (feels "pressed") |
| Duration | Visible only while pressed |
| Scale | Subtle scale-down (0.98) acceptable, not required |

---

## State Layering

When multiple states occur simultaneously:

| Combination | Behavior |
|-------------|----------|
| Hover + Focus | Show both — hover bg + focus ring |
| Active + Focus | Show both — pressed bg + focus ring |
| Disabled + any | Disabled wins — no hover/focus feedback |
| Loading + any | Loading wins — no hover/focus feedback |

---

## Transition Timing

| State Change | Duration |
|--------------|----------|
| Hover in/out | 150ms |
| Focus in/out | Immediate (no transition for a11y) |
| Active/pressed | Immediate |
| Disabled | Immediate |
| Loading enter | Immediate |
| Loading exit | 150ms |

### Transition Properties

| Do | Don't |
|----|-------|
| Transition `background-color` | Transition `all` |
| Transition `border-color` | Transition `width`/`height` |
| Transition `opacity` | Transition layout properties |
| Transition `transform` (scale) | Transition `box-shadow` size |

---

## Loading Patterns

| Pattern | Use Case |
|---------|----------|
| Structural skeletons | Content loading (lists, cards, data areas) |
| Spinner | Action loading (button clicks, form submits) |
| Progress bar inline | Long operations |

Loading text ends with `…`: `"Loading…"`, `"Saving…"`

---

## Empty States

### Structure

| Element | Spec |
|---------|------|
| Icon | 40px (`size={40}`) |
| Copy | Concise message explaining the empty state |
| CTA | **Conditional** — only if page has action-based items |

### CTA Logic

| Page Context | CTA? |
|--------------|------|
| Action-based (create, add, upload) | Yes — single CTA |
| Read-only / informational | No CTA needed |
| Filtered results (no matches) | Clear filters action |

### Rules

- Handle gracefully — don't render broken UI for empty strings/arrays
- Check page context before adding CTA
- Never show multiple CTAs in empty state

---

## Offline State

Persistent top banner. Online-only app.

---

## Disabled State

- Reduced opacity
- No pointer events
- Clear visual distinction from enabled

---

## Content Handling

| Rule | Detail |
|------|--------|
| Handle long content | `truncate`, `line-clamp-*`, or `break-words` |
| Flex children | Need `min-w-0` for truncation |
| Empty arrays/strings | Don't render broken UI |
| User content | Anticipate short, average, very long |

---

## Edge Cases (Always Design)

| Case | Why |
|------|-----|
| Zero items | First-time, cleared-out experience |
| Single item | Singular grammar, lonely UI |
| Many items (100+) | Performance, scroll, pagination |
| Max length text | Truncation, wrapping |
| Min length text | Awkward whitespace |

---

## Custom Interactive Elements

When bypassing shadcn `<Button>` (e.g., split buttons, custom triggers), you MUST manually add:

| State | Implementation |
|-------|---------------|
| Hover | `hover:bg-*` or `hover:opacity-*` |
| Focus | `focus-visible:ring-2 focus-visible:ring-ring` |
| Active | `active:scale-[0.98]` or `active:bg-*` |
| Disabled | `disabled:opacity-50 disabled:pointer-events-none` |
| Transition | `transition-colors` (never `transition-all`) |

**Detection**: Any raw `<button>` or `<a>` without `hover:` classes is a violation.

---

## Violations (Auto-Fail)

```
Empty array → broken UI     → Handle empty state gracefully
Long text → overflow        → Add truncate/line-clamp/break-words
Missing hover:              → Clickable elements need hover feedback
Missing focus-visible:      → Interactive elements need focus ring
outline-none alone          → Must have focus replacement
transition: all             → List specific properties
Hover-only content          → Must work on touch devices
Raw <button> without hover: → Use shadcn <Button> or add states manually
rounded-full on buttons     → Use rounded-md (design system radius)
```
