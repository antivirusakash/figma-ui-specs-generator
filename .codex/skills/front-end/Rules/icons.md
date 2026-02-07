---
title: Icon Rules
impact: MEDIUM
impactDescription: Phosphor icon library usage
tags: rules, icons, phosphor, symbol
---

# Icon Rules

> Load when: `icon`, `phosphor`, `symbol`, `glyph`

---

## Library

**Phosphor Icons only** (`@phosphor-icons/react`)

- Repo: https://github.com/phosphor-icons/homepage
- Browse: https://phosphor.duber.com/

```tsx
import { Bell, User, House } from "@phosphor-icons/react";
```

---

## Naming

Icons use **PascalCase**. Multi-word icons concatenate without separator.

| Search term | Import name |
|-------------|-------------|
| `arrow-left` | `ArrowLeft` |
| `user-circle` | `UserCircle` |
| `chat-dots` | `ChatDots` |
| `calendar-blank` | `CalendarBlank` |

---

## Sizes

### By Typography Context

| Context | Size | Use with |
|---------|------|----------|
| Caption | `size={16}` | Small labels, metadata, timestamps |
| Title | `size={20}` | Section titles, card headers |
| Heading | `size={24}` | Page headings, prominent UI |

### By UI Context

| Context | Size | Example |
|---------|------|---------|
| Inline metadata | `size={12}` | Timestamps, badges |
| Buttons / inputs | `size={16}` | Button icons, form fields |
| Standalone | `size={20}` | List item icons, nav items |
| Large UI | `size={24}` | Empty states, feature cards |
| Hero | `size={32}` – `size={48}` | Onboarding, marketing |

Tailwind classes (`size-4`, etc.) also work via className.

---

## Styling

| Property | Value |
|----------|-------|
| Weight | Default `regular`. Options: `thin`, `light`, `regular`, `bold`, `fill`, `duotone` |
| Color | `currentColor` via Tailwind text color (`text-foreground`, `text-muted-foreground`) |
| Fill weight | Use `weight="fill"` for status indicators or active states |

```tsx
<Bell size={16} weight="regular" />
<Bell size={16} weight="fill" />  // active/selected state
```

---

## Accessibility

- Icon-only buttons MUST have tooltips (300ms delay)
- Icon-only buttons MUST have `aria-label`
- Decorative icons inside labeled buttons need no extra aria

---

## Migration: Lucide → Phosphor

### Import Change

```diff
- import { Bell, User, Home } from "lucide-react";
+ import { Bell, User, House } from "@phosphor-icons/react";
```

### API Differences

| Lucide | Phosphor |
|--------|----------|
| `strokeWidth={2}` | `weight="regular"` (or `bold`) |
| `className="size-4"` | `size={16}` (or className) |
| `fill="currentColor"` | `weight="fill"` |

### Common Name Mappings

| Lucide | Phosphor |
|--------|----------|
| `Home` | `House` |
| `Settings` | `Gear` |
| `Trash` | `Trash` |
| `Trash2` | `TrashSimple` |
| `X` | `X` |
| `Check` | `Check` |
| `ChevronDown` | `CaretDown` |
| `ChevronRight` | `CaretRight` |
| `MoreHorizontal` | `DotsThree` |
| `MoreVertical` | `DotsThreeVertical` |
| `Search` | `MagnifyingGlass` |
| `Plus` | `Plus` |
| `Minus` | `Minus` |
| `Edit` | `PencilSimple` |
| `Copy` | `Copy` |
| `Mail` | `Envelope` |
| `Calendar` | `Calendar` |
| `Clock` | `Clock` |
| `AlertCircle` | `WarningCircle` |
| `Info` | `Info` |
| `Eye` | `Eye` |
| `EyeOff` | `EyeSlash` |
| `Loader2` | `CircleNotch` (use `className="animate-spin"`) |

### Detection

Find Lucide usage: `grep -r "lucide-react" src/`
