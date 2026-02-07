# NutriScan Profile Benchmark — Learnings

## What the Specs Plugin Provided (v3 compact JSON)

### Worked Well
| Data | Source | Verdict |
|------|--------|---------|
| Root background color | `fill: "#0C0C0C"`, `fill_ref: "Default/Grey/grey-100"` | Exact match |
| Root dimensions | `w: 414, h: 1615` | Exact match |
| User name text | `text: "Akash Solanki"`, `font: "Inter Bold"`, `font_size: 24` | Exact match |
| Phone number text | `text: "+91-85xxxxxx53"` | Exact match (new v3 field!) |
| Tag labels | `text: "Vegetarian"`, `text: "Weight Loss"` with font/size | Exact match |
| Layout direction/gap | `direction: "column"`, `gap: 24` on Profile Header | Exact match |
| Padding | `padding: { left: 20, right: 20, top: 20, bottom: 12 }` | Exact match |
| Nested row layouts | Frame 19642: `direction: "row"`, `gap: 16`, `space-between` | Exact match |
| Component dimensions | Avatar `w: 59, h: 59`, icons `w: 20, h: 20` | Exact match |
| Variable references | `fill_ref: "Default/White/white"` maps to token name | Good for theming |

### The v3 Enrichment Made a Real Difference
The new top-level fields (`text`, `w`, `h`, `fill`, `fill_ref`, `font_size`, `font`, `padding`, `gap`) were **directly usable as CSS values** without parsing attribute strings. Before v3:
- Text content was absent entirely
- Colors were buried in truncated attribute arrays
- Font info required parsing `"Font: Inter Bold"` from a flat string

## What Was Missing or Insufficient

### 1. Instance Content Not Expanded (CRITICAL)
**Problem:** 15 of 21 menu items are `INSTANCE` nodes of `Profile Option List Item`. The specs records them as:
```json
{ "name": "Profile Option List Item", "type": "INSTANCE", "instance_of": "Profile Option List Item" }
```
But the **text inside** ("All Meals", "Modify Meal Plan", etc.) is never exposed. The AI has to guess or get it from the screenshot.

**Impact:** Without instance text content, ~70% of the visible UI content is invisible to the AI.

**Fix idea:** For INSTANCE nodes, include a `children_text` field that collects all descendant TEXT `.characters` as an array:
```json
"children_text": ["All Meals"]
```

### 2. Section Header Text Truncated Away
**Problem:** Compact mode limits anatomy to 20 items. The section headers ("General", "Health & Devices", "Support", "About", "Follow Us") are TEXT nodes but are **not in the truncated anatomy output** because the 20-item limit prioritizes the first nodes in tree order.

**Impact:** Section structure (grouping) is completely lost. The AI can't know which items belong to which category.

**Fix idea:** Prioritize TEXT nodes in compact mode (they carry content), or add a `text_index` that lists ALL text nodes with their path and content regardless of the anatomy limit.

### 3. No Stroke/Border Data in Promoted Fields
**Problem:** List items have `border-top: 1px solid var(--grey-90)` (visible as separator lines). The stroke is mentioned in anatomy table as "Stroke: Default/Grey/grey-90" but never appears in the JSON promoted fields.

**Fix idea:** Add `stroke` and `stroke_ref` promoted fields, similar to `fill`/`fill_ref`.

### 4. No Opacity/Visibility Info
**Problem:** Some elements have `hidden="true"` (e.g., chevron arrows on section headers). The anatomy records don't include visibility state.

**Fix idea:** Add `visible: false` to records where the Figma node has `visible === false`.

### 5. Icon Identity Lost
**Problem:** Icons are INSTANCE nodes named "ForkKnife", "Target", "PencilSimple", etc. The name is captured, but there's no SVG path or icon-set reference. The AI can only use the name as a hint to pick from an icon library.

**Impact:** Low — icon names are semantic enough ("ForkKnife" → fork-knife icon). But actual SVG export would be ideal.

**Fix idea:** For small INSTANCE nodes (< 32×32) where `instance_of` maps to a known icon set, include an `icon_hint` or `svg_path` field.

### 6. No Text Style Token (Only Font Parts)
**Problem:** The specs capture `font: "Inter Bold"` and `font_size: 24` separately, but the design system has composite text style tokens like `H5/Bold` and `B1/Regular`. The `fill_ref` field shows `"H5/Bold"` for the name text — but this is actually a **text fill** variable reference, not a text style reference.

**Impact:** The AI can't map to design system typography tokens directly.

**Fix idea:** Add a `text_style` promoted field that captures the applied text style name.

### 7. Deep Instance Tree Not Traversed
**Problem:** The "Sync Apple Health" item has a complex internal structure (icon + title + checkmark + subtitle + refresh button), but as an INSTANCE it's not expanded in the anatomy. The AI needs the internal layout details.

**Fix idea:** For instances that exceed a height threshold (e.g., > 60px), expand one level of children in the anatomy data.

### 8. No Scroll / Overflow Info
**Problem:** The screen is 1615px tall and scrollable within a 414px viewport. There's no indication of scroll behavior or which container clips.

**Fix idea:** Add `overflow: "scroll"` or `clips: true` to layout records.

## What I Had to Get from MCP / Screenshot Instead

| Data | Source Used |
|------|------------|
| Menu item labels ("All Meals" etc.) | MCP `get_metadata` → instance names, screenshot |
| Section header text ("General" etc.) | MCP `get_metadata` → text node names |
| Section grouping structure | MCP `get_metadata` → frame hierarchy |
| Icon appearance | Screenshot (used Unicode placeholders) |
| Border/stroke style on list items | Screenshot + anatomy table text |
| Bottom nav labels | MCP `get_metadata` → instance name "Bottom Nav" + screenshot |
| Active nav state styling (blue) | Screenshot only |
| Home indicator bar style | Screenshot only |

## Score Card

| Category | Score | Notes |
|----------|-------|-------|
| Colors | 9/10 | All fills resolved, missing stroke promoted field |
| Typography | 8/10 | Font + size great, missing text style tokens |
| Dimensions | 10/10 | w/h from bounds, perfect |
| Layout | 9/10 | direction/gap/padding/align all present |
| Text Content | 4/10 | Only top-level TEXT nodes captured; instance children invisible |
| Component Structure | 5/10 | Instances collapsed; hierarchy in path_key but content lost |
| Interactivity Hints | 1/10 | No hover, scroll, active states |
| Icons/Assets | 3/10 | Names only, no SVG or asset URL |
| **Overall** | **6/10** | **Good for skeleton/layout, insufficient for pixel-perfect** |

## Priority Fixes for Specs Plugin

1. **`children_text` on INSTANCE records** — collect all descendant TEXT content
2. **`text_index` array** — ALL text nodes with path + content, exempt from anatomy limit
3. **`stroke` / `stroke_ref` promoted fields** — border data for AI CSS
4. **`text_style` promoted field** — applied text style name
5. **Prioritize TEXT nodes** in compact truncation — they carry the most CSS-relevant data
6. **`visible` field** — skip hidden nodes or flag them

## Conclusion

The v3 enrichment is a **major step forward** — promoted fields let the AI write CSS directly from JSON without parsing attributes. The remaining gap is primarily about **text content inside instances** and **border/stroke data**. Fixing those two would likely push the score from 6/10 to 8/10 for a single-pass AI build.
