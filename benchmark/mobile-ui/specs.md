## Figma Component: Apple Health

### Figma URL
[Paste Figma frame URL here]

### Implementation Instructions
1. Use get_screenshot on the Figma URL above and **save it to `.figma/apple_health.png`** (relative to working directory). Reference this local file whenever you need to check the design — do not call get_screenshot again.
2. Read the anatomy tree below to understand the component structure.
3. Read the YAML specs — it has every layer, color, font, spacing, and token value you need.
4. Check the project's working directory or `package.json` for the icon library in use (e.g. Phosphor, Lucide, Heroicons). Use matching icons from that library based on the `instance_of` names in the anatomy (e.g. `instance_of: ForkKnife` → use ForkKnife from the detected library).
5. Check the project's `package.json` to detect the framework in use, then build the component accordingly.
6. Build the component exactly as specified. Match the structure, styles (fills, strokes, fonts), and layout (direction, gap, padding).
7. Use resolved_tokens to map token names to actual values (e.g. hex colors, font names).
8. Keep it minimal — only implement what the specs describe, nothing more.
9. **Visual QA** — render your component at 414×1615px (1x scale, no device emulation). Take a screenshot and compare with `.figma/apple_health.png`. Verify:
   - Layout structure matches (correct direction, nesting, alignment)
   - Spacing is correct (gap, padding values from specs)
   - Colors match fills/strokes in the spec (within #±02 per channel)
   - Font sizes, weights, and families match
   - Border radius values match
   - Text content is complete (no unintended truncation)
   Fix any differences and re-compare until all checks pass.

### Component Anatomy
```
- Apple Health (FRAME)
- Profile Header (FRAME)
- Frame 19642 (FRAME)
- Frame 19514 (FRAME)
- Avatar (INSTANCE) — instance of Property 1=No
- Card Checkbox/Header/person (INSTANCE) — instance of Card Checkbox/Header/person
- Frame 13297 (FRAME)
- Akash Solanki (TEXT) — "Akash Solanki"
- +91-85xxxxxx53 (TEXT) — "+91-85xxxxxx53"
- PencilSimple (INSTANCE) — instance of PencilSimple
- Frame 19643 (FRAME)
- Frame 19560 (FRAME)
- ForkKnife (INSTANCE) — instance of ForkKnife
- Vegetarian (TEXT) — "Vegetarian"
- Frame 19561 (FRAME)
- Target (INSTANCE) — instance of Target
- Weight Loss (TEXT) — "Weight Loss"
- Frame 19645 (FRAME)
- Frame 313906 (FRAME)
- Profile Option List Item (FRAME)
- General (TEXT) — "General"
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 19560 (FRAME)
- BowlFood (INSTANCE) — instance of Weight=Regular
- Orders (TEXT) — "All Meals"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 19560 (FRAME)
- Calendar (INSTANCE) — instance of Calendar
- Orders (TEXT) — "Modify Meal Plan"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 19560 (FRAME)
- ChartPieSlice (INSTANCE) — instance of ChartPieSlice
- Orders (TEXT) — "Modify Macros"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 19560 (FRAME)
- ShareNetwork (INSTANCE) — instance of ShareNetwork
- Orders (TEXT) — "Share Food Timeline"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 19560 (FRAME)
- Repeat (INSTANCE) — instance of Weight=Regular
- Orders (TEXT) — "Manage Repeat Meals"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 19560 (FRAME)
- Gift (INSTANCE) — instance of Gift
- Orders (TEXT) — "Refer a Friend"
- CaretRight (INSTANCE) — instance of CaretRight
- Frame 313910 (FRAME)
- Profile Option List Item (FRAME)
- Health & Devices (TEXT) — "Health & Devices"
- Profile Option List Item (FRAME)
- Frame 19560 (FRAME)
- Frame 314026 (FRAME)
- Apple-health (INSTANCE) — instance of Apple-health
- Frame 314027 (FRAME)
- Frame 314058 (FRAME)
- Sync Apple Health (TEXT) — "Sync Apple Health"
- CheckCircle (INSTANCE) — instance of Weight=Fill
- Last sync: Sept 25, 2025 11:34PM (TEXT) — "Last sync: Sept 25, 2025 11:34PM"
- Frame 314059 (FRAME)
- ArrowsClockwise (INSTANCE) — instance of Weight=Regular
- Frame 313908 (FRAME)
- Profile Option List Item (FRAME)
- Support (TEXT) — "Support"
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 19560 (FRAME)
- CurrencyCircleDollar (INSTANCE) — instance of Weight=Regular
- Orders (TEXT) — "Manage Subscription"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 19560 (FRAME)
- Translate (INSTANCE) — instance of Translate
- Orders (TEXT) — "Change Langauge"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 19560 (FRAME)
- Star (INSTANCE) — instance of Star
- Orders (TEXT) — "Leave a Review"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 19560 (FRAME)
- Question (INSTANCE) — instance of Question
- Orders (TEXT) — "Contact Us"
- CaretRight (INSTANCE) — instance of CaretRight
- Frame 313907 (FRAME)
- Profile Option List Item (FRAME)
- About (TEXT) — "About"
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 19560 (FRAME)
- UsersThree (INSTANCE) — instance of UsersThree
- Orders (TEXT) — "App Contributors"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 19560 (FRAME)
- DeviceMobile (INSTANCE) — instance of DeviceMobile
- Orders (TEXT) — "About NutriScan"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 19560 (FRAME)
- SignOut (INSTANCE) — instance of SignOut
- Orders (TEXT) — "Logout"
- Frame 313909 (FRAME)
- Profile Option List Item (FRAME)
- Follow Us (TEXT) — "Follow Us"
- Frame 313910 (FRAME)
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 19560 (FRAME)
- Orders (TEXT) — "X (Twitter)"
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Profile Option List Item (FRAME)
- App Version 1.2.1 (40) (TEXT) — "App Version 1.2.1 (40)"
- Bottom Nav (INSTANCE) — instance of Bottom Nav
- Bottom Nav-item (INSTANCE) — instance of Status=Inactive
- CookingPot (INSTANCE) — instance of CookingPot
- Home (TEXT) — "Meals"
- Bottom Nav-item (INSTANCE) — instance of Status=Inactive
- Calendar (INSTANCE) — instance of Calendar
- Home (TEXT) — "Diet Plan"
- Bottom Nav-item (INSTANCE) — instance of Status=Inactive
- Cookie (INSTANCE) — instance of Cookie
- Home (TEXT) — "NutriBites"
- Bottom Nav-item (INSTANCE) — instance of Status=Active
- User (INSTANCE) — instance of User
- Home (TEXT) — "Profile"
- Home Indicator (INSTANCE) — instance of Darkmode=True
- Home Indicator (INSTANCE) — instance of Darkmode=False
- Home Indicator (RECTANGLE)
- Frame 408 (FRAME)
- Status Bar (INSTANCE) — instance of Status Bar
- Time (TEXT) — "9:41"
- Frame 301 (FRAME)
- Cellular Connection (BOOLEAN_OPERATION)
- Wifi (BOOLEAN_OPERATION)
- Frame 19455 (FRAME)
- Profile (TEXT) — "Profile"
```

### Specs Data (YAML)
```yaml
schema: specs-plugin.agent_pack.v14.yaml.compact
generated_at: "2026-02-12T16:15:50.448Z"
selection:
  node_id: "14304:14047"
  name: Apple Health
  type: FRAME
  clips_content: true
defaults_omitted:
  justify: flex-start
  align: flex-start
  direction: row
summary:
  anatomy_nodes_total: 140
  property_groups_total: 0
  property_variants_total: 0
  variable_refs_total: 6
  instance_templates: 3
  deduplicated_instances: 14
  chunks_total: 5
  truncated:
    anatomy: false
    anatomy_included: 140
    anatomy_dropped: 0
    properties: false
    properties_included: 0
    properties_dropped: 0
mcp_playbook:
  tools:
    [get_metadata, get_design_context, get_screenshot, get_variable_defs]
  parse_root: chunks
  preferred_keys:
    [node_id, kind, items]
resolved_tokens:
  Default/Grey/grey-100: "#0C0C0C"
  H5/Bold: "#FFFFFF"
  Default/Grey/grey-50: "#75757D"
  Default/White/white: "#FFFFFF"
  Default/Grey/grey-90: "#1C1C1E"
  Default/Grey/grey-80: "#2F2F33"
  Default/Grey/grey-40: "#929299"
chunks:
  - chunk_id: anatomy_1
    kind: anatomy
    item_count: 50
    items:
      - node_id: "14304:14047"
        name: Apple Health
        type: FRAME
        w: 414
        h: 1615
        fill: "#0C0C0C"
        fill_ref: Default/Grey/grey-100
        fill_ref_type: variable
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "14304:14048"
        name: Profile Header
        type: FRAME
        w: 414
        h: 141
        padding: "20"
        gap: 24
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14049"
        name: Frame 19642
        type: FRAME
        w: 374
        h: 59
        gap: 16
        justify: space-between
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14050"
        name: Frame 19514
        type: FRAME
        w: 342
        h: 59
        gap: 16
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14051"
        name: Avatar
        type: INSTANCE
        instance_of: Property 1=No
        w: 59
        h: 59
        fill: "#FFFFFF"
      - node_id: "I14304:14051;40:2153"
        name: Card Checkbox/Header/person
        type: INSTANCE
        instance_of: Card Checkbox/Header/person
        w: 34
        h: 34
      - node_id: "14304:14052"
        name: Frame 13297
        type: FRAME
        w: 267
        h: 55
        gap: 4
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14053"
        name: Akash Solanki
        type: TEXT
        text: Akash Solanki
        w: 267
        h: 29
        fill: "#FFFFFF"
        fill_ref: H5/Bold
        fill_ref_type: color_style
        font_size: 24
        font: Inter Bold
        line_height: 120%
        text_style: H5/Bold
      - node_id: "14304:14054"
        name: +91-85xxxxxx53
        type: TEXT
        text: +91-85xxxxxx53
        w: 267
        h: 22
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        fill_ref_type: variable
        font_size: 14
        font: Inter Medium
        line_height: 22px
        text_style: B2/Medium
      - node_id: "14304:14055"
        name: PencilSimple
        type: INSTANCE
        instance_of: PencilSimple
        w: 32
        h: 32
        fill: "#0A84FF"
      - node_id: "14304:14056"
        name: Frame 19643
        type: FRAME
        w: 374
        h: 26
        gap: 7
        justify: space-between
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14057"
        name: Frame 19560
        type: FRAME
        w: 187
        h: 26
        gap: 12
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14058"
        name: ForkKnife
        type: INSTANCE
        instance_of: ForkKnife
        w: 20
        h: 20
        fill: "#75757D"
      - node_id: "14304:14059"
        name: Vegetarian
        type: TEXT
        text: Vegetarian
        w: 155
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14060"
        name: Frame 19561
        type: FRAME
        w: 187
        h: 26
        gap: 12
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14061"
        name: Target
        type: INSTANCE
        instance_of: Target
        w: 20
        h: 20
        fill: "#75757D"
      - node_id: "14304:14062"
        name: Weight Loss
        type: TEXT
        text: Weight Loss
        w: 155
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14063"
        name: Frame 19645
        type: FRAME
        w: 414
        h: 1170
        gap: 24
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14064"
        name: Frame 313906
        type: FRAME
        w: 414
        h: 374
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14065"
        name: Profile Option List Item
        type: FRAME
        w: 414
        h: 26
        gap: 8
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14066"
        name: General
        type: TEXT
        text: General
        w: 374
        h: 26
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        fill_ref_type: variable
        font_size: 18
        font: Inter Semi Bold
        line_height: 26px
        text_style: B0/Semibold
      - node_id: "14304:14068"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [All Meals]
        w: 414
        h: 58
        padding: "16"
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14068;1190:55080"
        name: Frame 19560
        type: FRAME
        w: 346
        h: 26
        gap: 12
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14068;1190:55081"
        name: BowlFood
        type: INSTANCE
        instance_of: Weight=Regular
        w: 20
        h: 20
        fill: "#75757D"
      - node_id: "I14304:14068;1190:55082"
        name: Orders
        type: TEXT
        text: All Meals
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14069"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Modify Meal Plan]
        w: 414
        h: 58
        padding: "16"
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14069;1190:55080"
        name: Frame 19560
        type: FRAME
        w: 346
        h: 26
        gap: 12
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14069;1190:55082"
        name: Orders
        type: TEXT
        text: Modify Meal Plan
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14070"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Modify Macros]
        w: 414
        h: 58
        padding: "16"
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14070;1190:55080"
        name: Frame 19560
        type: FRAME
        w: 346
        h: 26
        gap: 12
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14070;1190:55081"
        name: ChartPieSlice
        type: INSTANCE
        instance_of: ChartPieSlice
        w: 20
        h: 20
        fill: "#75757D"
      - node_id: "I14304:14070;1190:55082"
        name: Orders
        type: TEXT
        text: Modify Macros
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14071"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Share Food Timeline]
        w: 414
        h: 58
        padding: "16"
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14071;1190:55080"
        name: Frame 19560
        type: FRAME
        w: 346
        h: 26
        gap: 12
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14071;1190:55081"
        name: ShareNetwork
        type: INSTANCE
        instance_of: ShareNetwork
        w: 20
        h: 20
        fill: "#75757D"
      - node_id: "I14304:14071;1190:55082"
        name: Orders
        type: TEXT
        text: Share Food Timeline
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14072"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Manage Repeat Meals]
        w: 414
        h: 58
        padding: "16"
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14072;1190:55080"
        name: Frame 19560
        type: FRAME
        w: 346
        h: 26
        gap: 12
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14072;1190:55081"
        name: Repeat
        type: INSTANCE
        instance_of: Weight=Regular
        w: 20
        h: 20
        fill: "#75757D"
      - node_id: "I14304:14072;1190:55082"
        name: Orders
        type: TEXT
        text: Manage Repeat Meals
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14073"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Refer a Friend]
        w: 414
        h: 58
        padding: "16"
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14073;1190:55080"
        name: Frame 19560
        type: FRAME
        w: 346
        h: 26
        gap: 12
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14073;1190:55081"
        name: Gift
        type: INSTANCE
        instance_of: Gift
        w: 20
        h: 20
        fill: "#75757D"
      - node_id: "I14304:14073;1190:55082"
        name: Orders
        type: TEXT
        text: Refer a Friend
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14074"
        name: Frame 313910
        type: FRAME
        w: 414
        h: 110
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14075"
        name: Profile Option List Item
        type: FRAME
        w: 414
        h: 26
        gap: 8
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14076"
        name: Health & Devices
        type: TEXT
        text: Health & Devices
        w: 374
        h: 26
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        fill_ref_type: variable
        font_size: 18
        font: Inter Semi Bold
        line_height: 26px
        text_style: B0/Semibold
      - node_id: "14304:14078"
        name: Profile Option List Item
        type: FRAME
        w: 414
        h: 84
        padding: "16"
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14079"
        name: Frame 19560
        type: FRAME
        w: 342
        h: 52
        gap: 12
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14080"
        name: Frame 314026
        type: FRAME
        w: 20
        h: 26
        padding: "3"
        gap: 8
        align: center
        w_sizing: auto
        h_sizing: auto
  - chunk_id: anatomy_2
    kind: anatomy
    item_count: 50
    items:
      - node_id: "14304:14081"
        name: Apple-health
        type: INSTANCE
        instance_of: Apple-health
        w: 20
        h: 20
      - node_id: "14304:14082"
        name: Frame 314027
        type: FRAME
        w: 310
        h: 52
        gap: 4
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14083"
        name: Frame 314058
        type: FRAME
        w: 187
        h: 26
        gap: 8
        justify: center
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "14304:14084"
        name: Sync Apple Health
        type: TEXT
        text: Sync Apple Health
        w: 159
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14085"
        name: CheckCircle
        type: INSTANCE
        instance_of: Weight=Fill
        w: 20
        h: 20
        fill: "#41D9B3"
      - node_id: "14304:14086"
        name: "Last sync: Sept 25, 2025 11:34PM"
        type: TEXT
        text: "Last sync: Sept 25, 2025 11:34PM"
        w: 310
        h: 22
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        fill_ref_type: variable
        font_size: 14
        font: Inter Medium
        line_height: 22px
        text_style: B2/Medium
      - node_id: "14304:14087"
        name: Frame 314059
        type: FRAME
        w: 24
        h: 30
        padding: "3"
        gap: 8
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "14304:14088"
        name: ArrowsClockwise
        type: INSTANCE
        instance_of: Weight=Regular
        w: 24
        h: 24
        fill: "#75757D"
      - node_id: "14304:14089"
        name: Frame 313908
        type: FRAME
        w: 414
        h: 258
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14090"
        name: Profile Option List Item
        type: FRAME
        w: 414
        h: 26
        gap: 8
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14091"
        name: Support
        type: TEXT
        text: Support
        w: 374
        h: 26
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        fill_ref_type: variable
        font_size: 18
        font: Inter Semi Bold
        line_height: 26px
        text_style: B0/Semibold
      - node_id: "14304:14093"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Manage Subscription]
        w: 414
        h: 58
        padding: "16"
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14093;1190:55080"
        name: Frame 19560
        type: FRAME
        w: 346
        h: 26
        gap: 12
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14093;1190:55081"
        name: CurrencyCircleDollar
        type: INSTANCE
        instance_of: Weight=Regular
        w: 20
        h: 20
        fill: "#75757D"
      - node_id: "I14304:14093;1190:55082"
        name: Orders
        type: TEXT
        text: Manage Subscription
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14094"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Change Langauge]
        w: 414
        h: 58
        padding: "16"
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14094;1190:55080"
        name: Frame 19560
        type: FRAME
        w: 346
        h: 26
        gap: 12
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14094;1190:55081"
        name: Translate
        type: INSTANCE
        instance_of: Translate
        w: 20
        h: 20
        fill: "#75757D"
      - node_id: "I14304:14094;1190:55082"
        name: Orders
        type: TEXT
        text: Change Langauge
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14095"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Leave a Review]
        w: 414
        h: 58
        padding: "16"
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14095;1190:55080"
        name: Frame 19560
        type: FRAME
        w: 346
        h: 26
        gap: 12
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14095;1190:55081"
        name: Star
        type: INSTANCE
        instance_of: Star
        w: 20
        h: 20
        fill: "#75757D"
      - node_id: "I14304:14095;1190:55082"
        name: Orders
        type: TEXT
        text: Leave a Review
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14096"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Contact Us]
        w: 414
        h: 58
        padding: "16"
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14096;1190:55080"
        name: Frame 19560
        type: FRAME
        w: 346
        h: 26
        gap: 12
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14096;1190:55081"
        name: Question
        type: INSTANCE
        instance_of: Question
        w: 20
        h: 20
        fill: "#75757D"
      - node_id: "I14304:14096;1190:55082"
        name: Orders
        type: TEXT
        text: Contact Us
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14097"
        name: Frame 313907
        type: FRAME
        w: 414
        h: 200
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14098"
        name: Profile Option List Item
        type: FRAME
        w: 414
        h: 26
        gap: 8
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14099"
        name: About
        type: TEXT
        text: About
        w: 374
        h: 26
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        fill_ref_type: variable
        font_size: 18
        font: Inter Semi Bold
        line_height: 26px
        text_style: B0/Semibold
      - node_id: "14304:14101"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [App Contributors]
        w: 414
        h: 58
        padding: "16"
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14101;1190:55080"
        name: Frame 19560
        type: FRAME
        w: 346
        h: 26
        gap: 12
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14101;1190:55081"
        name: UsersThree
        type: INSTANCE
        instance_of: UsersThree
        w: 20
        h: 20
        fill: "#75757D"
      - node_id: "I14304:14101;1190:55082"
        name: Orders
        type: TEXT
        text: App Contributors
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14102"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [About NutriScan]
        w: 414
        h: 58
        padding: "16"
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14102;1190:55080"
        name: Frame 19560
        type: FRAME
        w: 346
        h: 26
        gap: 12
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14102;1190:55081"
        name: DeviceMobile
        type: INSTANCE
        instance_of: DeviceMobile
        w: 20
        h: 20
        fill: "#75757D"
      - node_id: "I14304:14102;1190:55082"
        name: Orders
        type: TEXT
        text: About NutriScan
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14103"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Logout]
        w: 414
        h: 58
        padding: "16"
        gap: 8
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14103;1190:55080"
        name: Frame 19560
        type: FRAME
        w: 374
        h: 26
        gap: 12
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I14304:14103;1190:55081"
        name: SignOut
        type: INSTANCE
        instance_of: SignOut
        w: 20
        h: 20
        fill: "#75757D"
      - node_id: "I14304:14103;1190:55082"
        name: Orders
        type: TEXT
        text: Logout
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14104"
        name: Frame 313909
        type: FRAME
        w: 414
        h: 84
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "14304:14105"
        name: Profile Option List Item
        type: FRAME
        w: 414
        h: 26
        gap: 8
        stroke_sides: "border-bottom: 1px"
      - node_id: "14304:14106"
        name: Follow Us
        type: TEXT
        text: Follow Us
        w: 374
        h: 26
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        fill_ref_type: variable
        font_size: 18
        font: Inter Semi Bold
        line_height: 26px
        text_style: B0/Semibold
      - node_id: "14304:14108"
        name: Frame 313910
        type: FRAME
        w: 414
        h: 58
      - node_id: "I14304:14109;1190:55080"
        name: Frame 19560
        type: FRAME
        w: 92
        h: 26
        gap: 12
      - node_id: "I14304:14109;1190:55082"
        name: Orders
        type: TEXT
        text: X (Twitter)
        w: 92
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 18
        font: Inter Medium
        line_height: 26px
        text_style: B0/Medium
      - node_id: "14304:14112"
        name: Profile Option List Item
        type: FRAME
        w: 414
        h: 24
        gap: 8
        stroke_sides: "border-bottom: 1px"
      - node_id: "14304:14113"
        name: App Version 1.2.1 (40)
        type: TEXT
        text: App Version 1.2.1 (40)
        w: 164
        h: 24
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        fill_ref_type: variable
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: B1/Regular
  - chunk_id: anatomy_3
    kind: anatomy
    item_count: 23
    items:
      - node_id: "14304:14115"
        name: Bottom Nav
        type: INSTANCE
        instance_of: Bottom Nav
        children_text:
          [Meals, Diet Plan, NutriBites, Profile]
        w: 414
        h: 96
        fill: "#1C1C1E"
        fill_ref: Default/Grey/grey-90
        fill_ref_type: variable
        stroke: "#2F2F33"
        stroke_ref: Default/Grey/grey-80
        stroke_align: inside
        stroke_sides: "border-top: 1px"
      - node_id: "I14304:14115;8519:3329"
        name: Bottom Nav-item
        type: INSTANCE
        instance_of: Status=Inactive
        children_text:
          [Meals]
        w: 104
        h: 96
        padding: "12"
        gap: 4
      - node_id: "I14304:14115;8519:3329;302:12909"
        name: CookingPot
        type: INSTANCE
        instance_of: CookingPot
        w: 24
        h: 24
        fill: "#929299"
      - node_id: "I14304:14115;8519:3329;302:12910"
        name: Home
        type: TEXT
        text: Meals
        w: 104
        h: 20
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        fill_ref_type: variable
        font_size: 12
        font: Inter Medium
        line_height: 20px
        text_align: center
        text_style: B3/Medium
      - node_id: "I14304:14115;8519:3330"
        name: Bottom Nav-item
        type: INSTANCE
        instance_of: Status=Inactive
        children_text:
          [Diet Plan]
        w: 104
        h: 96
        padding: "12"
        gap: 4
      - node_id: "I14304:14115;8519:3330;302:12910"
        name: Home
        type: TEXT
        text: Diet Plan
        w: 104
        h: 20
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        fill_ref_type: variable
        font_size: 12
        font: Inter Medium
        line_height: 20px
        text_align: center
        text_style: B3/Medium
      - node_id: "I14304:14115;8519:3337"
        name: Bottom Nav-item
        type: INSTANCE
        instance_of: Status=Inactive
        children_text:
          [NutriBites]
        w: 104
        h: 96
        padding: "12"
        gap: 4
      - node_id: "I14304:14115;8519:3337;302:12909"
        name: Cookie
        type: INSTANCE
        instance_of: Cookie
        w: 24
        h: 24
        fill: "#929299"
      - node_id: "I14304:14115;8519:3337;302:12910"
        name: Home
        type: TEXT
        text: NutriBites
        w: 104
        h: 20
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        fill_ref_type: variable
        font_size: 12
        font: Inter Medium
        line_height: 20px
        text_align: center
        text_style: B3/Medium
      - node_id: "I14304:14115;8519:3397"
        name: Bottom Nav-item
        type: INSTANCE
        instance_of: Status=Active
        children_text:
          [Profile]
        w: 104
        h: 96
        padding: "12"
        gap: 4
      - node_id: "I14304:14115;8519:3397;302:10361"
        name: User
        type: INSTANCE
        instance_of: User
        w: 24
        h: 24
        fill: "#FFFFFF"
      - node_id: "I14304:14115;8519:3397;302:12893"
        name: Home
        type: TEXT
        text: Profile
        w: 104
        h: 20
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 12
        font: Inter Bold
        line_height: 20px
        text_align: center
        text_style: B3/Bold
      - node_id: "14304:14116"
        name: Home Indicator
        type: INSTANCE
        instance_of: Darkmode=True
        w: 414
        h: 34
        fill: "#FFFFFF"
      - node_id: "I14304:14116;2784:33819"
        name: Home Indicator
        type: INSTANCE
        instance_of: Darkmode=False
        w: 414
        h: 34
      - node_id: "I14304:14116;2784:33819;2784:33817"
        name: Home Indicator
        type: RECTANGLE
        w: 134
        h: 5
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        radius: 100
      - node_id: "14304:14117"
        name: Frame 408
        type: FRAME
        w: 414
        h: 113
        fill: "#0C0C0C"
        fill_ref: Default/Grey/grey-100
        fill_ref_type: variable
        backdrop_blur: 12px
      - node_id: "14304:14118"
        name: Status Bar
        type: INSTANCE
        instance_of: Status Bar
        children_text:
          ["9:41"]
        w: 414
        h: 44
        padding: "12"
        gap: 219
      - node_id: "I14304:14118;40:2108"
        name: Time
        type: TEXT
        text: "9:41"
        w: 54
        h: 20
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
        font_size: 15
        font: SF Pro Text Semibold
        line_height: 20px
        text_align: center
      - node_id: "I14304:14118;40:2109"
        name: Frame 301
        type: FRAME
        w: 66
        h: 11
        gap: 5
      - node_id: "I14304:14118;40:2102"
        name: Cellular Connection
        type: BOOLEAN_OPERATION
        w: 17
        h: 11
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
      - node_id: "I14304:14118;40:2098"
        name: Wifi
        type: BOOLEAN_OPERATION
        w: 15
        h: 11
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        fill_ref_type: variable
      - node_id: "14304:14119"
        name: Frame 19455
        type: FRAME
        w: 414
        h: 69
        padding: "24"
        gap: 16
      - node_id: "14304:14120"
        name: Profile
        type: TEXT
        text: Profile
        w: 374
        h: 29
        fill: "#FFFFFF"
        fill_ref: H5/Bold
        fill_ref_type: color_style
        font_size: 24
        font: Inter Bold
        line_height: 120%
        text_style: H5/Bold
  - chunk_id: repeats_2
    kind: repeats
    template_node_id: "I14304:14069;1190:55081"
    instance_of: Calendar
    repeat_count: 1
    template_attributes:
      w: 20
      h: 20
      fill: "#75757D"
    varying_keys:
      - "Calendar/Vector[2]/width"
      - "Calendar/Vector[5]/width"
      - "Calendar/Vector[6]/width"
      - "Calendar/Vector[7]/width"
      - Calendar/width
    items:
      - node_id: "I14304:14115;8519:3330;302:12909"
        diffs:
          [5, "24", 1, "17", 2, "17", 3, "3", 4, "2"]
  - chunk_id: repeats_3
    kind: repeats
    template_node_id: "14304:14109"
    instance_of: Profile Option List Item
    repeat_count: 2
    template_attributes:
      children_text:
        [X (Twitter)]
      w: 138
      h: 58
      padding: "16"
      gap: 8
      stroke: "#1C1C1E"
      stroke_ref: Default/Grey/grey-90
      stroke_align: inside
      stroke_sides: "border-bottom: 1px"
    varying_keys:
      - Profile Option List Item/Frame 19560/Orders/text
      - Profile Option List Item/Frame 19560/width
    items:
      - node_id: "14304:14110"
        diffs:
          [0, Instagram, 2, "87"]
      - node_id: "14304:14111"
        diffs:
          [0, Website, 2, "70"]
```

<!-- chars: 42485 | ~tokens: 8859 -->