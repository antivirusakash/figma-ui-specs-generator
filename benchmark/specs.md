## Figma Component: Apple Health

### Implementation Instructions
1. Use get_screenshot on the Figma URL below and **save it to `.figma/apple_health.png`** (relative to working directory). Reference this local file whenever you need to check the design — do not call get_screenshot again.
2. Read the anatomy tree below to understand the component structure.
3. Read the YAML specs — it has every layer, color, font, spacing, and token value you need.
4. Check the project's working directory or `package.json` for the icon library in use (e.g. Phosphor, Lucide, Heroicons). Use matching icons from that library based on the `instance_of` names in the anatomy (e.g. `instance_of: ForkKnife` → use ForkKnife from the detected library).
5. Build the component exactly as specified. Match the structure, styles (fills, strokes, fonts), and layout (direction, gap, padding).
6. Use resolved_tokens to map token names to actual values (e.g. hex colors, font names).
7. Keep it minimal — only implement what the specs describe, nothing more.
8. **After implementation is complete**, take a screenshot of your front-end output and compare it side-by-side with `.figma/apple_health.png`. Fix any visual differences until they match.

### Figma URL
https://www.figma.com/design/YKbY29IDDVia5S27lVBfox/NutriScan-App-Design?node-id=14304-14047&t=rwZoM8Hib6oP0cI8-11

### Component Anatomy
```
- Apple Health (FRAME)
- Profile Header (FRAME)
- Frame 19642 (FRAME)
- Frame 19514 (FRAME)
- Avatar (INSTANCE) — instance of Property 1=No
- Card Checkbox/Header/person (INSTANCE) — instance of Card Checkbox/Header/person
- Akash Solanki (TEXT) — "Akash Solanki"
- +91-85xxxxxx53 (TEXT) — "+91-85xxxxxx53"
- PencilSimple (INSTANCE) — instance of PencilSimple
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
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
- BowlFood (INSTANCE) — instance of Weight=Regular
- Orders (TEXT) — "All Meals"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Calendar (INSTANCE) — instance of Calendar
- Orders (TEXT) — "Modify Meal Plan"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- ChartPieSlice (INSTANCE) — instance of ChartPieSlice
- Orders (TEXT) — "Modify Macros"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- ShareNetwork (INSTANCE) — instance of ShareNetwork
- Orders (TEXT) — "Share Food Timeline"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Repeat (INSTANCE) — instance of Weight=Regular
- Orders (TEXT) — "Manage Repeat Meals"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Gift (INSTANCE) — instance of Gift
- Orders (TEXT) — "Refer a Friend"
- CaretRight (INSTANCE) — instance of CaretRight
- Frame 313910 (FRAME)
- Profile Option List Item (FRAME)
- Health & Devices (TEXT) — "Health & Devices"
- Profile Option List Item (FRAME)
- Apple-health (INSTANCE) — instance of Apple-health
- Sync Apple Health (TEXT) — "Sync Apple Health"
- CheckCircle (INSTANCE) — instance of Weight=Fill
- Last sync: Sept 25, 2025 11:34PM (TEXT) — "Last sync: Sept 25, 2025 11:34PM"
- ArrowsClockwise (INSTANCE) — instance of Weight=Regular
- Frame 313908 (FRAME)
- Profile Option List Item (FRAME)
- Support (TEXT) — "Support"
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- CurrencyCircleDollar (INSTANCE) — instance of Weight=Regular
- Orders (TEXT) — "Manage Subscription"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Translate (INSTANCE) — instance of Translate
- Orders (TEXT) — "Change Langauge"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Star (INSTANCE) — instance of Star
- Orders (TEXT) — "Leave a Review"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Question (INSTANCE) — instance of Question
- Orders (TEXT) — "Contact Us"
- CaretRight (INSTANCE) — instance of CaretRight
- Frame 313907 (FRAME)
- Profile Option List Item (FRAME)
- About (TEXT) — "About"
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- UsersThree (INSTANCE) — instance of UsersThree
- Orders (TEXT) — "App Contributors"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- DeviceMobile (INSTANCE) — instance of DeviceMobile
- Orders (TEXT) — "About NutriScan"
- CaretRight (INSTANCE) — instance of CaretRight
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- SignOut (INSTANCE) — instance of SignOut
- Orders (TEXT) — "Logout"
- Frame 313909 (FRAME)
- Profile Option List Item (FRAME)
- Follow Us (TEXT) — "Follow Us"
- Frame 313910 (FRAME)
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Orders (TEXT) — "X (Twitter)"
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Orders (TEXT) — "Instagram"
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Orders (TEXT) — "Website"
- Profile Option List Item (FRAME)
- App Version 1.2.1 (40) (TEXT) — "App Version 1.2.1 (40)"
- Bottom Nav (INSTANCE) — instance of Bottom Nav
- Bottom Nav-item (INSTANCE) — instance of Status=Inactive
- CookingPot (INSTANCE) — instance of CookingPot
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Home (TEXT) — "Meals"
- Bottom Nav-item (INSTANCE) — instance of Status=Inactive
- Calendar (INSTANCE) — instance of Calendar
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Home (TEXT) — "Diet Plan"
- Bottom Nav-item (INSTANCE) — instance of Status=Inactive
- Cookie (INSTANCE) — instance of Cookie
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Home (TEXT) — "NutriBites"
- Bottom Nav-item (INSTANCE) — instance of Status=Active
- User (INSTANCE) — instance of User
- Vector (VECTOR)
- Vector (VECTOR)
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
schema: specs-plugin.agent_pack.v7.yaml.compact
generated_at: "2026-02-08T06:05:28.883Z"
selection:
  node_id: "14304:14047"
  name: Apple Health
  type: FRAME
  clips_content: true
summary:
  anatomy_nodes_total: 147
  layout_nodes_total: 50
  property_groups_total: 0
  property_variants_total: 0
  variable_refs_total: 7
  chunks_total: 18
  truncated:
    anatomy: false
    anatomy_included: 147
    anatomy_dropped: 0
    layout: false
    layout_included: 50
    layout_dropped: 0
    properties: false
    properties_included: 0
    properties_dropped: 0
mcp_playbook:
  tools:
    [get_metadata, get_design_context, get_screenshot, get_variable_defs]
  parse_root: chunks
  preferred_keys:
    [node_id, path_key, kind, items]
resolved_tokens:
  Default/Grey/grey-100: "#0C0C0C"
  H5/Bold: "#FFFFFF"
  Default/Grey/grey-50: "#75757D"
  Default/Primary/primary: "#0A84FF"
  Default/White/white: "#FFFFFF"
  Default/Grey/grey-90: "#1C1C1E"
  Default/Grey/grey-80: "#2F2F33"
  Default/Grey/grey-40: "#929299"
text_index:
  - id: "14304:14053"
    path: "root/Apple Health/Profile Header/Frame 19642/Frame 19514/Frame 13297/TEXT:Akash Solanki"
    text: Akash Solanki
  - id: "14304:14054"
    path: "root/Apple Health/Profile Header/Frame 19642/Frame 19514/Frame 13297/TEXT:+91-85xxxxxx53"
    text: +91-85xxxxxx53
  - id: "14304:14059"
    path: "root/Apple Health/Profile Header/Frame 19643/Frame 19560/TEXT:Vegetarian"
    text: Vegetarian
  - id: "14304:14062"
    path: "root/Apple Health/Profile Header/Frame 19643/Frame 19561/TEXT:Weight Loss"
    text: Weight Loss
  - id: "14304:14066"
    path: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/TEXT:General"
    text: General
  - id: "14304:14068"
    path: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item"
    children_text:
      [All Meals]
  - id: "I14304:14068;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/TEXT:Orders"
    text: All Meals
  - id: "14304:14069"
    path: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[2]"
    children_text:
      [Modify Meal Plan]
  - id: "I14304:14069;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/TEXT:Orders[2]"
    text: Modify Meal Plan
  - id: "14304:14070"
    path: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[3]"
    children_text:
      [Modify Macros]
  - id: "I14304:14070;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/TEXT:Orders[3]"
    text: Modify Macros
  - id: "14304:14071"
    path: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[4]"
    children_text:
      [Share Food Timeline]
  - id: "I14304:14071;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/TEXT:Orders[4]"
    text: Share Food Timeline
  - id: "14304:14072"
    path: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[5]"
    children_text:
      [Manage Repeat Meals]
  - id: "I14304:14072;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/TEXT:Orders[5]"
    text: Manage Repeat Meals
  - id: "14304:14073"
    path: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[6]"
    children_text:
      [Refer a Friend]
  - id: "I14304:14073;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/TEXT:Orders[6]"
    text: Refer a Friend
  - id: "14304:14076"
    path: "root/Apple Health/Frame 19645/Frame 313910/Profile Option List Item/TEXT:Health & Devices"
    text: Health & Devices
  - id: "14304:14084"
    path: "root/Apple Health/Frame 19645/Frame 313910/Profile Option List Item/Frame 19560/Frame 314027/Frame 314058/TEXT:Sync Apple Health"
    text: Sync Apple Health
  - id: "14304:14086"
    path: "root/Apple Health/Frame 19645/Frame 313910/Profile Option List Item/Frame 19560/Frame 314027/TEXT:Last sync: Sept 25, 2025 11:34PM"
    text: "Last sync: Sept 25, 2025 11:34PM"
  - id: "14304:14091"
    path: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/TEXT:Support"
    text: Support
  - id: "14304:14093"
    path: "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item"
    children_text:
      [Manage Subscription]
  - id: "I14304:14093;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/Frame 19560/TEXT:Orders"
    text: Manage Subscription
  - id: "14304:14094"
    path: "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item[2]"
    children_text:
      [Change Langauge]
  - id: "I14304:14094;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/Frame 19560/TEXT:Orders[2]"
    text: Change Langauge
  - id: "14304:14095"
    path: "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item[3]"
    children_text:
      [Leave a Review]
  - id: "I14304:14095;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/Frame 19560/TEXT:Orders[3]"
    text: Leave a Review
  - id: "14304:14096"
    path: "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item[4]"
    children_text:
      [Contact Us]
  - id: "I14304:14096;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/Frame 19560/TEXT:Orders[4]"
    text: Contact Us
  - id: "14304:14099"
    path: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/TEXT:About"
    text: About
  - id: "14304:14101"
    path: "root/Apple Health/Frame 19645/Frame 313907/INSTANCE:Profile Option List Item"
    children_text:
      [App Contributors]
  - id: "I14304:14101;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/Frame 19560/TEXT:Orders"
    text: App Contributors
  - id: "14304:14102"
    path: "root/Apple Health/Frame 19645/Frame 313907/INSTANCE:Profile Option List Item[2]"
    children_text:
      [About NutriScan]
  - id: "I14304:14102;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/Frame 19560/TEXT:Orders[2]"
    text: About NutriScan
  - id: "14304:14103"
    path: "root/Apple Health/Frame 19645/Frame 313907/INSTANCE:Profile Option List Item[3]"
    children_text:
      [Logout]
  - id: "I14304:14103;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/Frame 19560/TEXT:Orders[3]"
    text: Logout
  - id: "14304:14106"
    path: "root/Apple Health/Frame 19645/Frame 313909/Profile Option List Item/TEXT:Follow Us"
    text: Follow Us
  - id: "14304:14109"
    path: "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/INSTANCE:Profile Option List Item"
    children_text:
      [X (Twitter)]
  - id: "I14304:14109;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/Profile Option List Item/Frame 19560/TEXT:Orders"
    text: X (Twitter)
  - id: "14304:14110"
    path: "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/INSTANCE:Profile Option List Item[2]"
    children_text:
      [Instagram]
  - id: "I14304:14110;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/Profile Option List Item/Frame 19560/TEXT:Orders[2]"
    text: Instagram
  - id: "14304:14111"
    path: "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/INSTANCE:Profile Option List Item[3]"
    children_text:
      [Website]
  - id: "I14304:14111;1190:55082"
    path: "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/Profile Option List Item/Frame 19560/TEXT:Orders[3]"
    text: Website
  - id: "14304:14113"
    path: "root/Apple Health/Frame 19645/Profile Option List Item/TEXT:App Version 1.2.1 (40)"
    text: App Version 1.2.1 (40)
  - id: "14304:14115"
    path: "root/Apple Health/INSTANCE:Bottom Nav"
    children_text:
      [Meals, Diet Plan, NutriBites, Profile]
  - id: "I14304:14115;8519:3329"
    path: "root/Apple Health/Bottom Nav/INSTANCE:Bottom Nav-item"
    children_text:
      [Meals]
  - id: "I14304:14115;8519:3329;302:12910"
    path: "root/Apple Health/Bottom Nav/Bottom Nav-item/TEXT:Home"
    text: Meals
  - id: "I14304:14115;8519:3330"
    path: "root/Apple Health/Bottom Nav/INSTANCE:Bottom Nav-item[2]"
    children_text:
      [Diet Plan]
  - id: "I14304:14115;8519:3330;302:12910"
    path: "root/Apple Health/Bottom Nav/Bottom Nav-item/TEXT:Home[2]"
    text: Diet Plan
  - id: "I14304:14115;8519:3337"
    path: "root/Apple Health/Bottom Nav/INSTANCE:Bottom Nav-item[3]"
    children_text:
      [NutriBites]
  - id: "I14304:14115;8519:3337;302:12910"
    path: "root/Apple Health/Bottom Nav/Bottom Nav-item/TEXT:Home[3]"
    text: NutriBites
  - id: "I14304:14115;8519:3397"
    path: "root/Apple Health/Bottom Nav/INSTANCE:Bottom Nav-item[4]"
    children_text:
      [Profile]
  - id: "I14304:14115;8519:3397;302:12893"
    path: "root/Apple Health/Bottom Nav/Bottom Nav-item/TEXT:Home[4]"
    text: Profile
  - id: "14304:14118"
    path: "root/Apple Health/Frame 408/INSTANCE:Status Bar"
    children_text:
      ["9:41"]
  - id: "I14304:14118;40:2108"
    path: "root/Apple Health/Frame 408/Status Bar/TEXT:Time"
    text: "9:41"
  - id: "14304:14120"
    path: "root/Apple Health/Frame 408/Frame 19455/TEXT:Profile"
    text: Profile
chunks:
  - chunk_id: anatomy_1
    kind: anatomy
    item_count: 12
    path_range:
      - "root/FRAME:Apple Health"
      - "root/Apple Health/Profile Header/Frame 19642/PencilSimple/VECTOR:Vector[3]"
    node_ids:
      - "14304:14047"
      - "14304:14048"
      - "14304:14049"
      - "14304:14050"
      - "14304:14051"
      - "I14304:14051;40:2153"
      - "14304:14053"
      - "14304:14054"
      - "14304:14055"
      - "I14304:14055;28:2231"
      - "I14304:14055;28:2232"
      - "I14304:14055;28:2233"
    items:
      - node_id: "14304:14047"
        path_key: "root/FRAME:Apple Health"
        name: Apple Health
        type: FRAME
        w: 414
        h: 1615
        fill: "#0C0C0C"
        fill_ref: Default/Grey/grey-100
        stroke_align: inside
      - node_id: "14304:14048"
        path_key: "root/Apple Health/FRAME:Profile Header"
        name: Profile Header
        type: FRAME
        w: 414
        h: 141
        padding: 20
        gap: 24
        stroke_align: inside
      - node_id: "14304:14049"
        path_key: "root/Apple Health/Profile Header/FRAME:Frame 19642"
        name: Frame 19642
        type: FRAME
        w: 374
        h: 59
        padding: 0
        gap: 16
        stroke_align: inside
      - node_id: "14304:14050"
        path_key: "root/Apple Health/Profile Header/Frame 19642/FRAME:Frame 19514"
        name: Frame 19514
        type: FRAME
        w: 342
        h: 59
        padding: 0
        gap: 16
        stroke_align: inside
      - node_id: "14304:14051"
        path_key: "root/Apple Health/Profile Header/Frame 19642/Frame 19514/INSTANCE:Avatar"
        name: Avatar
        type: INSTANCE
        instance_of: Property 1=No
        w: 59
        h: 59
        fill: "#FFFFFF"
        stroke_align: inside
      - node_id: "I14304:14051;40:2153"
        path_key: "root/Apple Health/Profile Header/Frame 19642/Frame 19514/Avatar/INSTANCE:Card Checkbox/Header/person"
        name: Card Checkbox/Header/person
        type: INSTANCE
        instance_of: Card Checkbox/Header/person
        w: 34
        h: 34
        stroke_align: inside
      - node_id: "14304:14053"
        path_key: "root/Apple Health/Profile Header/Frame 19642/Frame 19514/Frame 13297/TEXT:Akash Solanki"
        name: Akash Solanki
        type: TEXT
        text: Akash Solanki
        w: 267
        h: 29
        fill: "#FFFFFF"
        fill_ref: H5/Bold
        font_size: 24
        font: Inter Bold
        stroke_align: outside
        text_style: H5/Bold
      - node_id: "14304:14054"
        path_key: "root/Apple Health/Profile Header/Frame 19642/Frame 19514/Frame 13297/TEXT:+91-85xxxxxx53"
        name: +91-85xxxxxx53
        type: TEXT
        text: +91-85xxxxxx53
        w: 267
        h: 22
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        font_size: 14
        font: Inter Medium
        stroke_align: outside
        text_style: B2/Medium
      - node_id: "14304:14055"
        path_key: "root/Apple Health/Profile Header/Frame 19642/INSTANCE:PencilSimple"
        name: PencilSimple
        type: INSTANCE
        instance_of: PencilSimple
        w: 32
        h: 32
        fill: "#0A84FF"
        stroke_align: inside
      - node_id: "I14304:14055;28:2231"
        path_key: "root/Apple Health/Profile Header/Frame 19642/PencilSimple/VECTOR:Vector"
        name: Vector
        type: VECTOR
        w: 32
        h: 32
        stroke_align: inside
      - node_id: "I14304:14055;28:2232"
        path_key: "root/Apple Health/Profile Header/Frame 19642/PencilSimple/VECTOR:Vector[2]"
        name: Vector
        type: VECTOR
        w: 23
        h: 23
        stroke: "#0A84FF"
        stroke_ref: Default/Primary/primary
        stroke_sides: all
      - node_id: "I14304:14055;28:2233"
        path_key: "root/Apple Health/Profile Header/Frame 19642/PencilSimple/VECTOR:Vector[3]"
        name: Vector
        type: VECTOR
        w: 7
        h: 7
        stroke: "#0A84FF"
        stroke_ref: Default/Primary/primary
        stroke_sides: all
  - chunk_id: anatomy_2
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Apple Health/Profile Header/FRAME:Frame 19643"
      - "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item"
    node_ids:
      - "14304:14056"
      - "14304:14057"
      - "14304:14058"
      - "14304:14059"
      - "14304:14060"
      - "14304:14061"
      - "14304:14062"
      - "14304:14063"
      - "14304:14064"
      - "14304:14065"
      - "14304:14066"
      - "14304:14068"
    items:
      - node_id: "14304:14056"
        path_key: "root/Apple Health/Profile Header/FRAME:Frame 19643"
        name: Frame 19643
        type: FRAME
        w: 374
        h: 26
        padding: 0
        gap: 7
        stroke_align: inside
      - node_id: "14304:14057"
        path_key: "root/Apple Health/Profile Header/Frame 19643/FRAME:Frame 19560"
        name: Frame 19560
        type: FRAME
        w: 187
        h: 26
        padding: 0
        gap: 12
        stroke_align: inside
      - node_id: "14304:14058"
        path_key: "root/Apple Health/Profile Header/Frame 19643/Frame 19560/INSTANCE:ForkKnife"
        name: ForkKnife
        type: INSTANCE
        instance_of: ForkKnife
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "14304:14059"
        path_key: "root/Apple Health/Profile Header/Frame 19643/Frame 19560/TEXT:Vegetarian"
        name: Vegetarian
        type: TEXT
        text: Vegetarian
        w: 155
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "14304:14060"
        path_key: "root/Apple Health/Profile Header/Frame 19643/FRAME:Frame 19561"
        name: Frame 19561
        type: FRAME
        w: 187
        h: 26
        padding: 0
        gap: 12
        stroke_align: inside
      - node_id: "14304:14061"
        path_key: "root/Apple Health/Profile Header/Frame 19643/Frame 19561/INSTANCE:Target"
        name: Target
        type: INSTANCE
        instance_of: Target
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "14304:14062"
        path_key: "root/Apple Health/Profile Header/Frame 19643/Frame 19561/TEXT:Weight Loss"
        name: Weight Loss
        type: TEXT
        text: Weight Loss
        w: 155
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "14304:14063"
        path_key: "root/Apple Health/FRAME:Frame 19645"
        name: Frame 19645
        type: FRAME
        w: 414
        h: 1170
        padding: 0
        gap: 24
        stroke_align: inside
      - node_id: "14304:14064"
        path_key: "root/Apple Health/Frame 19645/FRAME:Frame 313906"
        name: Frame 313906
        type: FRAME
        w: 414
        h: 374
        padding: 0
        stroke_align: inside
      - node_id: "14304:14065"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/FRAME:Profile Option List Item"
        name: Profile Option List Item
        type: FRAME
        w: 414
        h: 26
        padding: 0
        gap: 8
        stroke_align: inside
      - node_id: "14304:14066"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/TEXT:General"
        name: General
        type: TEXT
        text: General
        w: 374
        h: 26
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        font_size: 18
        font: Inter Semi Bold
        stroke_align: outside
        text_style: B0/Semibold
      - node_id: "14304:14068"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [All Meals]
        w: 414
        h: 58
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
  - chunk_id: anatomy_3
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/INSTANCE:BowlFood"
      - "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[4]"
    node_ids:
      - "I14304:14068;1190:55081"
      - "I14304:14068;1190:55082"
      - "I14304:14068;1190:55096"
      - "14304:14069"
      - "I14304:14069;1190:55081"
      - "I14304:14069;1190:55082"
      - "I14304:14069;1190:55096"
      - "14304:14070"
      - "I14304:14070;1190:55081"
      - "I14304:14070;1190:55082"
      - "I14304:14070;1190:55096"
      - "14304:14071"
    items:
      - node_id: "I14304:14068;1190:55081"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/INSTANCE:BowlFood"
        name: BowlFood
        type: INSTANCE
        instance_of: Weight=Regular
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "I14304:14068;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/TEXT:Orders"
        name: Orders
        type: TEXT
        text: All Meals
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "I14304:14068;1190:55096"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/INSTANCE:CaretRight"
        name: CaretRight
        type: INSTANCE
        instance_of: CaretRight
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "14304:14069"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[2]"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Modify Meal Plan]
        w: 414
        h: 58
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
      - node_id: "I14304:14069;1190:55081"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/INSTANCE:Calendar"
        name: Calendar
        type: INSTANCE
        instance_of: Calendar
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "I14304:14069;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/TEXT:Orders[2]"
        name: Orders
        type: TEXT
        text: Modify Meal Plan
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "I14304:14069;1190:55096"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/INSTANCE:CaretRight[2]"
        name: CaretRight
        type: INSTANCE
        instance_of: CaretRight
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "14304:14070"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[3]"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Modify Macros]
        w: 414
        h: 58
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
      - node_id: "I14304:14070;1190:55081"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/INSTANCE:ChartPieSlice"
        name: ChartPieSlice
        type: INSTANCE
        instance_of: ChartPieSlice
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "I14304:14070;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/TEXT:Orders[3]"
        name: Orders
        type: TEXT
        text: Modify Macros
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "I14304:14070;1190:55096"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/INSTANCE:CaretRight[3]"
        name: CaretRight
        type: INSTANCE
        instance_of: CaretRight
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "14304:14071"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[4]"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Share Food Timeline]
        w: 414
        h: 58
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
  - chunk_id: anatomy_4
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/INSTANCE:ShareNetwork"
      - "root/Apple Health/Frame 19645/FRAME:Frame 313910"
    node_ids:
      - "I14304:14071;1190:55081"
      - "I14304:14071;1190:55082"
      - "I14304:14071;1190:55096"
      - "14304:14072"
      - "I14304:14072;1190:55081"
      - "I14304:14072;1190:55082"
      - "I14304:14072;1190:55096"
      - "14304:14073"
      - "I14304:14073;1190:55081"
      - "I14304:14073;1190:55082"
      - "I14304:14073;1190:55096"
      - "14304:14074"
    items:
      - node_id: "I14304:14071;1190:55081"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/INSTANCE:ShareNetwork"
        name: ShareNetwork
        type: INSTANCE
        instance_of: ShareNetwork
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "I14304:14071;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/TEXT:Orders[4]"
        name: Orders
        type: TEXT
        text: Share Food Timeline
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "I14304:14071;1190:55096"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/INSTANCE:CaretRight[4]"
        name: CaretRight
        type: INSTANCE
        instance_of: CaretRight
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "14304:14072"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[5]"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Manage Repeat Meals]
        w: 414
        h: 58
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
      - node_id: "I14304:14072;1190:55081"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/INSTANCE:Repeat"
        name: Repeat
        type: INSTANCE
        instance_of: Weight=Regular
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "I14304:14072;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/TEXT:Orders[5]"
        name: Orders
        type: TEXT
        text: Manage Repeat Meals
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "I14304:14072;1190:55096"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/INSTANCE:CaretRight[5]"
        name: CaretRight
        type: INSTANCE
        instance_of: CaretRight
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "14304:14073"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[6]"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Refer a Friend]
        w: 414
        h: 58
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
      - node_id: "I14304:14073;1190:55081"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/INSTANCE:Gift"
        name: Gift
        type: INSTANCE
        instance_of: Gift
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "I14304:14073;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/Frame 19560/TEXT:Orders[6]"
        name: Orders
        type: TEXT
        text: Refer a Friend
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "I14304:14073;1190:55096"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/INSTANCE:CaretRight[6]"
        name: CaretRight
        type: INSTANCE
        instance_of: CaretRight
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "14304:14074"
        path_key: "root/Apple Health/Frame 19645/FRAME:Frame 313910"
        name: Frame 313910
        type: FRAME
        w: 414
        h: 110
        padding: 0
        stroke_align: inside
  - chunk_id: anatomy_5
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Apple Health/Frame 19645/Frame 313910/FRAME:Profile Option List Item"
      - "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item"
    node_ids:
      - "14304:14075"
      - "14304:14076"
      - "14304:14078"
      - "14304:14081"
      - "14304:14084"
      - "14304:14085"
      - "14304:14086"
      - "14304:14088"
      - "14304:14089"
      - "14304:14090"
      - "14304:14091"
      - "14304:14093"
    items:
      - node_id: "14304:14075"
        path_key: "root/Apple Health/Frame 19645/Frame 313910/FRAME:Profile Option List Item"
        name: Profile Option List Item
        type: FRAME
        w: 414
        h: 26
        padding: 0
        gap: 8
        stroke_align: inside
      - node_id: "14304:14076"
        path_key: "root/Apple Health/Frame 19645/Frame 313910/Profile Option List Item/TEXT:Health & Devices"
        name: Health & Devices
        type: TEXT
        text: Health & Devices
        w: 374
        h: 26
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        font_size: 18
        font: Inter Semi Bold
        stroke_align: outside
        text_style: B0/Semibold
      - node_id: "14304:14078"
        path_key: "root/Apple Health/Frame 19645/Frame 313910/FRAME:Profile Option List Item[2]"
        name: Profile Option List Item
        type: FRAME
        w: 414
        h: 84
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
      - node_id: "14304:14081"
        path_key: "root/Apple Health/Frame 19645/Frame 313910/Profile Option List Item/Frame 19560/Frame 314026/INSTANCE:Apple-health"
        name: Apple-health
        type: INSTANCE
        instance_of: Apple-health
        w: 20
        h: 20
        stroke_align: inside
      - node_id: "14304:14084"
        path_key: "root/Apple Health/Frame 19645/Frame 313910/Profile Option List Item/Frame 19560/Frame 314027/Frame 314058/TEXT:Sync Apple Health"
        name: Sync Apple Health
        type: TEXT
        text: Sync Apple Health
        w: 159
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "14304:14085"
        path_key: "root/Apple Health/Frame 19645/Frame 313910/Profile Option List Item/Frame 19560/Frame 314027/Frame 314058/INSTANCE:CheckCircle"
        name: CheckCircle
        type: INSTANCE
        instance_of: Weight=Fill
        w: 20
        h: 20
        fill: "#41D9B3"
        stroke_align: inside
      - node_id: "14304:14086"
        path_key: "root/Apple Health/Frame 19645/Frame 313910/Profile Option List Item/Frame 19560/Frame 314027/TEXT:Last sync: Sept 25, 2025 11:34PM"
        name: "Last sync: Sept 25, 2025 11:34PM"
        type: TEXT
        text: "Last sync: Sept 25, 2025 11:34PM"
        w: 310
        h: 22
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        font_size: 14
        font: Inter Medium
        stroke_align: outside
        text_style: B2/Medium
      - node_id: "14304:14088"
        path_key: "root/Apple Health/Frame 19645/Frame 313910/Profile Option List Item/Frame 314059/INSTANCE:ArrowsClockwise"
        name: ArrowsClockwise
        type: INSTANCE
        instance_of: Weight=Regular
        w: 24
        h: 24
        fill: "#75757D"
        stroke_align: inside
      - node_id: "14304:14089"
        path_key: "root/Apple Health/Frame 19645/FRAME:Frame 313908"
        name: Frame 313908
        type: FRAME
        w: 414
        h: 258
        padding: 0
        stroke_align: inside
      - node_id: "14304:14090"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/FRAME:Profile Option List Item"
        name: Profile Option List Item
        type: FRAME
        w: 414
        h: 26
        padding: 0
        gap: 8
        stroke_align: inside
      - node_id: "14304:14091"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/TEXT:Support"
        name: Support
        type: TEXT
        text: Support
        w: 374
        h: 26
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        font_size: 18
        font: Inter Semi Bold
        stroke_align: outside
        text_style: B0/Semibold
      - node_id: "14304:14093"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Manage Subscription]
        w: 414
        h: 58
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
  - chunk_id: anatomy_6
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/Frame 19560/INSTANCE:CurrencyCircleDollar"
      - "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item[4]"
    node_ids:
      - "I14304:14093;1190:55081"
      - "I14304:14093;1190:55082"
      - "I14304:14093;1190:55096"
      - "14304:14094"
      - "I14304:14094;1190:55081"
      - "I14304:14094;1190:55082"
      - "I14304:14094;1190:55096"
      - "14304:14095"
      - "I14304:14095;1190:55081"
      - "I14304:14095;1190:55082"
      - "I14304:14095;1190:55096"
      - "14304:14096"
    items:
      - node_id: "I14304:14093;1190:55081"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/Frame 19560/INSTANCE:CurrencyCircleDollar"
        name: CurrencyCircleDollar
        type: INSTANCE
        instance_of: Weight=Regular
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "I14304:14093;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/Frame 19560/TEXT:Orders"
        name: Orders
        type: TEXT
        text: Manage Subscription
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "I14304:14093;1190:55096"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/INSTANCE:CaretRight"
        name: CaretRight
        type: INSTANCE
        instance_of: CaretRight
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "14304:14094"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item[2]"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Change Langauge]
        w: 414
        h: 58
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
      - node_id: "I14304:14094;1190:55081"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/Frame 19560/INSTANCE:Translate"
        name: Translate
        type: INSTANCE
        instance_of: Translate
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "I14304:14094;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/Frame 19560/TEXT:Orders[2]"
        name: Orders
        type: TEXT
        text: Change Langauge
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "I14304:14094;1190:55096"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/INSTANCE:CaretRight[2]"
        name: CaretRight
        type: INSTANCE
        instance_of: CaretRight
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "14304:14095"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item[3]"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Leave a Review]
        w: 414
        h: 58
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
      - node_id: "I14304:14095;1190:55081"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/Frame 19560/INSTANCE:Star"
        name: Star
        type: INSTANCE
        instance_of: Star
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "I14304:14095;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/Frame 19560/TEXT:Orders[3]"
        name: Orders
        type: TEXT
        text: Leave a Review
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "I14304:14095;1190:55096"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/INSTANCE:CaretRight[3]"
        name: CaretRight
        type: INSTANCE
        instance_of: CaretRight
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "14304:14096"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item[4]"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Contact Us]
        w: 414
        h: 58
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
  - chunk_id: anatomy_7
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/Frame 19560/INSTANCE:Question"
      - "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/Frame 19560/INSTANCE:DeviceMobile"
    node_ids:
      - "I14304:14096;1190:55081"
      - "I14304:14096;1190:55082"
      - "I14304:14096;1190:55096"
      - "14304:14097"
      - "14304:14098"
      - "14304:14099"
      - "14304:14101"
      - "I14304:14101;1190:55081"
      - "I14304:14101;1190:55082"
      - "I14304:14101;1190:55096"
      - "14304:14102"
      - "I14304:14102;1190:55081"
    items:
      - node_id: "I14304:14096;1190:55081"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/Frame 19560/INSTANCE:Question"
        name: Question
        type: INSTANCE
        instance_of: Question
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "I14304:14096;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/Frame 19560/TEXT:Orders[4]"
        name: Orders
        type: TEXT
        text: Contact Us
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "I14304:14096;1190:55096"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/INSTANCE:CaretRight[4]"
        name: CaretRight
        type: INSTANCE
        instance_of: CaretRight
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "14304:14097"
        path_key: "root/Apple Health/Frame 19645/FRAME:Frame 313907"
        name: Frame 313907
        type: FRAME
        w: 414
        h: 200
        padding: 0
        stroke_align: inside
      - node_id: "14304:14098"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/FRAME:Profile Option List Item"
        name: Profile Option List Item
        type: FRAME
        w: 414
        h: 26
        padding: 0
        gap: 8
        stroke_align: inside
      - node_id: "14304:14099"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/TEXT:About"
        name: About
        type: TEXT
        text: About
        w: 374
        h: 26
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        font_size: 18
        font: Inter Semi Bold
        stroke_align: outside
        text_style: B0/Semibold
      - node_id: "14304:14101"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/INSTANCE:Profile Option List Item"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [App Contributors]
        w: 414
        h: 58
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
      - node_id: "I14304:14101;1190:55081"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/Frame 19560/INSTANCE:UsersThree"
        name: UsersThree
        type: INSTANCE
        instance_of: UsersThree
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "I14304:14101;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/Frame 19560/TEXT:Orders"
        name: Orders
        type: TEXT
        text: App Contributors
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "I14304:14101;1190:55096"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/INSTANCE:CaretRight"
        name: CaretRight
        type: INSTANCE
        instance_of: CaretRight
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "14304:14102"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/INSTANCE:Profile Option List Item[2]"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [About NutriScan]
        w: 414
        h: 58
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
      - node_id: "I14304:14102;1190:55081"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/Frame 19560/INSTANCE:DeviceMobile"
        name: DeviceMobile
        type: INSTANCE
        instance_of: DeviceMobile
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
  - chunk_id: anatomy_8
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/Frame 19560/TEXT:Orders[2]"
      - "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/INSTANCE:Profile Option List Item[2]"
    node_ids:
      - "I14304:14102;1190:55082"
      - "I14304:14102;1190:55096"
      - "14304:14103"
      - "I14304:14103;1190:55081"
      - "I14304:14103;1190:55082"
      - "14304:14104"
      - "14304:14105"
      - "14304:14106"
      - "14304:14108"
      - "14304:14109"
      - "I14304:14109;1190:55082"
      - "14304:14110"
    items:
      - node_id: "I14304:14102;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/Frame 19560/TEXT:Orders[2]"
        name: Orders
        type: TEXT
        text: About NutriScan
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "I14304:14102;1190:55096"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/INSTANCE:CaretRight[2]"
        name: CaretRight
        type: INSTANCE
        instance_of: CaretRight
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "14304:14103"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/INSTANCE:Profile Option List Item[3]"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Logout]
        w: 414
        h: 58
        padding: 16
        gap: 8
        stroke_align: inside
      - node_id: "I14304:14103;1190:55081"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/Frame 19560/INSTANCE:SignOut"
        name: SignOut
        type: INSTANCE
        instance_of: SignOut
        w: 20
        h: 20
        fill: "#75757D"
        stroke_align: inside
      - node_id: "I14304:14103;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/Frame 19560/TEXT:Orders[3]"
        name: Orders
        type: TEXT
        text: Logout
        w: 310
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "14304:14104"
        path_key: "root/Apple Health/Frame 19645/FRAME:Frame 313909"
        name: Frame 313909
        type: FRAME
        w: 414
        h: 84
        padding: 0
        stroke_align: inside
      - node_id: "14304:14105"
        path_key: "root/Apple Health/Frame 19645/Frame 313909/FRAME:Profile Option List Item"
        name: Profile Option List Item
        type: FRAME
        w: 414
        h: 26
        padding: 0
        gap: 8
        stroke_align: inside
      - node_id: "14304:14106"
        path_key: "root/Apple Health/Frame 19645/Frame 313909/Profile Option List Item/TEXT:Follow Us"
        name: Follow Us
        type: TEXT
        text: Follow Us
        w: 374
        h: 26
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        font_size: 18
        font: Inter Semi Bold
        stroke_align: outside
        text_style: B0/Semibold
      - node_id: "14304:14108"
        path_key: "root/Apple Health/Frame 19645/Frame 313909/FRAME:Frame 313910"
        name: Frame 313910
        type: FRAME
        w: 414
        h: 58
        padding: 0
        stroke_align: inside
      - node_id: "14304:14109"
        path_key: "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/INSTANCE:Profile Option List Item"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [X (Twitter)]
        w: 138
        h: 58
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
      - node_id: "I14304:14109;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/Profile Option List Item/Frame 19560/TEXT:Orders"
        name: Orders
        type: TEXT
        text: X (Twitter)
        w: 92
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "14304:14110"
        path_key: "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/INSTANCE:Profile Option List Item[2]"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Instagram]
        w: 138
        h: 58
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
  - chunk_id: anatomy_9
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/Profile Option List Item/Frame 19560/TEXT:Orders[2]"
      - "root/Apple Health/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[4]"
    node_ids:
      - "I14304:14110;1190:55082"
      - "14304:14111"
      - "I14304:14111;1190:55082"
      - "14304:14112"
      - "14304:14113"
      - "14304:14115"
      - "I14304:14115;8519:3329"
      - "I14304:14115;8519:3329;302:12909"
      - "I14304:14115;8519:3329;302:12909;28:4040"
      - "I14304:14115;8519:3329;302:12909;28:4041"
      - "I14304:14115;8519:3329;302:12909;28:4042"
      - "I14304:14115;8519:3329;302:12909;28:4043"
    items:
      - node_id: "I14304:14110;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/Profile Option List Item/Frame 19560/TEXT:Orders[2]"
        name: Orders
        type: TEXT
        text: Instagram
        w: 87
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "14304:14111"
        path_key: "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/INSTANCE:Profile Option List Item[3]"
        name: Profile Option List Item
        type: INSTANCE
        instance_of: Profile Option List Item
        children_text:
          [Website]
        w: 138
        h: 58
        padding: 16
        gap: 8
        stroke: "#1C1C1E"
        stroke_ref: Default/Grey/grey-90
        stroke_align: inside
      - node_id: "I14304:14111;1190:55082"
        path_key: "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/Profile Option List Item/Frame 19560/TEXT:Orders[3]"
        name: Orders
        type: TEXT
        text: Website
        w: 70
        h: 26
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 18
        font: Inter Medium
        stroke_align: outside
        text_style: B0/Medium
      - node_id: "14304:14112"
        path_key: "root/Apple Health/Frame 19645/FRAME:Profile Option List Item"
        name: Profile Option List Item
        type: FRAME
        w: 414
        h: 24
        padding: 0
        gap: 8
        stroke_align: inside
      - node_id: "14304:14113"
        path_key: "root/Apple Health/Frame 19645/Profile Option List Item/TEXT:App Version 1.2.1 (40)"
        name: App Version 1.2.1 (40)
        type: TEXT
        text: App Version 1.2.1 (40)
        w: 164
        h: 24
        fill: "#75757D"
        fill_ref: Default/Grey/grey-50
        font_size: 16
        font: Inter Regular
        stroke_align: outside
        text_style: B1/Regular
      - node_id: "14304:14115"
        path_key: "root/Apple Health/INSTANCE:Bottom Nav"
        name: Bottom Nav
        type: INSTANCE
        instance_of: Bottom Nav
        children_text:
          [Meals, Diet Plan, NutriBites, Profile]
        w: 414
        h: 96
        fill: "#1C1C1E"
        fill_ref: Default/Grey/grey-90
        padding: 0
        stroke: "#2F2F33"
        stroke_ref: Default/Grey/grey-80
        stroke_align: inside
      - node_id: "I14304:14115;8519:3329"
        path_key: "root/Apple Health/Bottom Nav/INSTANCE:Bottom Nav-item"
        name: Bottom Nav-item
        type: INSTANCE
        instance_of: Status=Inactive
        children_text:
          [Meals]
        w: 104
        h: 96
        padding: 12
        gap: 4
        stroke_align: inside
      - node_id: "I14304:14115;8519:3329;302:12909"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/INSTANCE:CookingPot"
        name: CookingPot
        type: INSTANCE
        instance_of: CookingPot
        w: 24
        h: 24
        fill: "#929299"
        stroke_align: inside
      - node_id: "I14304:14115;8519:3329;302:12909;28:4040"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector"
        name: Vector
        type: VECTOR
        w: 24
        h: 24
        stroke_align: inside
      - node_id: "I14304:14115;8519:3329;302:12909;28:4041"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[2]"
        name: Vector
        type: VECTOR
        w: 0
        h: 3
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14304:14115;8519:3329;302:12909;28:4042"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[3]"
        name: Vector
        type: VECTOR
        w: 0
        h: 3
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14304:14115;8519:3329;302:12909;28:4043"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[4]"
        name: Vector
        type: VECTOR
        w: 0
        h: 3
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
  - chunk_id: anatomy_10
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Apple Health/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[5]"
      - "root/Apple Health/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector[6]"
    node_ids:
      - "I14304:14115;8519:3329;302:12909;28:4044"
      - "I14304:14115;8519:3329;302:12909;28:4045"
      - "I14304:14115;8519:3329;302:12909;28:4046"
      - "I14304:14115;8519:3329;302:12910"
      - "I14304:14115;8519:3330"
      - "I14304:14115;8519:3330;302:12909"
      - "I14304:14115;8519:3330;302:12909;28:4560"
      - "I14304:14115;8519:3330;302:12909;28:4561"
      - "I14304:14115;8519:3330;302:12909;28:4562"
      - "I14304:14115;8519:3330;302:12909;28:4563"
      - "I14304:14115;8519:3330;302:12909;28:4564"
      - "I14304:14115;8519:3330;302:12909;28:4565"
    items:
      - node_id: "I14304:14115;8519:3329;302:12909;28:4044"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[5]"
        name: Vector
        type: VECTOR
        w: 17
        h: 12
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14304:14115;8519:3329;302:12909;28:4045"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[6]"
        name: Vector
        type: VECTOR
        w: 3
        h: 2
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14304:14115;8519:3329;302:12909;28:4046"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[7]"
        name: Vector
        type: VECTOR
        w: 3
        h: 2
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14304:14115;8519:3329;302:12910"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/TEXT:Home"
        name: Home
        type: TEXT
        text: Meals
        w: 104
        h: 20
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        font_size: 12
        font: Inter Medium
        stroke_align: outside
        text_style: B3/Medium
      - node_id: "I14304:14115;8519:3330"
        path_key: "root/Apple Health/Bottom Nav/INSTANCE:Bottom Nav-item[2]"
        name: Bottom Nav-item
        type: INSTANCE
        instance_of: Status=Inactive
        children_text:
          [Diet Plan]
        w: 104
        h: 96
        padding: 12
        gap: 4
        stroke_align: inside
      - node_id: "I14304:14115;8519:3330;302:12909"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/INSTANCE:Calendar"
        name: Calendar
        type: INSTANCE
        instance_of: Calendar
        w: 24
        h: 24
        fill: "#929299"
        stroke_align: inside
      - node_id: "I14304:14115;8519:3330;302:12909;28:4560"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector"
        name: Vector
        type: VECTOR
        w: 24
        h: 24
        stroke_align: inside
      - node_id: "I14304:14115;8519:3330;302:12909;28:4561"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector[2]"
        name: Vector
        type: VECTOR
        w: 17
        h: 17
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14304:14115;8519:3330;302:12909;28:4562"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector[3]"
        name: Vector
        type: VECTOR
        w: 0
        h: 3
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14304:14115;8519:3330;302:12909;28:4563"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector[4]"
        name: Vector
        type: VECTOR
        w: 0
        h: 3
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14304:14115;8519:3330;302:12909;28:4564"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector[5]"
        name: Vector
        type: VECTOR
        w: 17
        h: 0
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14304:14115;8519:3330;302:12909;28:4565"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector[6]"
        name: Vector
        type: VECTOR
        w: 3
        h: 5
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
  - chunk_id: anatomy_11
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Apple Health/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector[7]"
      - "root/Apple Health/Bottom Nav/INSTANCE:Bottom Nav-item[4]"
    node_ids:
      - "I14304:14115;8519:3330;302:12909;28:4566"
      - "I14304:14115;8519:3330;302:12910"
      - "I14304:14115;8519:3337"
      - "I14304:14115;8519:3337;302:12909"
      - "I14304:14115;8519:3337;302:12909;28:4048"
      - "I14304:14115;8519:3337;302:12909;28:4049"
      - "I14304:14115;8519:3337;302:12909;28:4050"
      - "I14304:14115;8519:3337;302:12909;28:4051"
      - "I14304:14115;8519:3337;302:12909;28:4052"
      - "I14304:14115;8519:3337;302:12909;28:4053"
      - "I14304:14115;8519:3337;302:12910"
      - "I14304:14115;8519:3397"
    items:
      - node_id: "I14304:14115;8519:3330;302:12909;28:4566"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector[7]"
        name: Vector
        type: VECTOR
        w: 2
        h: 5
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14304:14115;8519:3330;302:12910"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/TEXT:Home[2]"
        name: Home
        type: TEXT
        text: Diet Plan
        w: 104
        h: 20
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        font_size: 12
        font: Inter Medium
        stroke_align: outside
        text_style: B3/Medium
      - node_id: "I14304:14115;8519:3337"
        path_key: "root/Apple Health/Bottom Nav/INSTANCE:Bottom Nav-item[3]"
        name: Bottom Nav-item
        type: INSTANCE
        instance_of: Status=Inactive
        children_text:
          [NutriBites]
        w: 104
        h: 96
        padding: 12
        gap: 4
        stroke_align: inside
      - node_id: "I14304:14115;8519:3337;302:12909"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/INSTANCE:Cookie"
        name: Cookie
        type: INSTANCE
        instance_of: Cookie
        w: 24
        h: 24
        fill: "#929299"
        stroke_align: inside
      - node_id: "I14304:14115;8519:3337;302:12909;28:4048"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/Cookie/VECTOR:Vector"
        name: Vector
        type: VECTOR
        w: 24
        h: 24
        stroke_align: inside
      - node_id: "I14304:14115;8519:3337;302:12909;28:4049"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/Cookie/VECTOR:Vector[2]"
        name: Vector
        type: VECTOR
        w: 18
        h: 18
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14304:14115;8519:3337;302:12909;28:4050"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/Cookie/VECTOR:Vector[3]"
        name: Vector
        type: VECTOR
        w: 2
        h: 2
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_align: inside
        stroke_sides: all
      - node_id: "I14304:14115;8519:3337;302:12909;28:4051"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/Cookie/VECTOR:Vector[4]"
        name: Vector
        type: VECTOR
        w: 2
        h: 2
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        stroke_align: inside
      - node_id: "I14304:14115;8519:3337;302:12909;28:4052"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/Cookie/VECTOR:Vector[5]"
        name: Vector
        type: VECTOR
        w: 2
        h: 2
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        stroke_align: inside
      - node_id: "I14304:14115;8519:3337;302:12909;28:4053"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/Cookie/VECTOR:Vector[6]"
        name: Vector
        type: VECTOR
        w: 2
        h: 2
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        stroke_align: inside
      - node_id: "I14304:14115;8519:3337;302:12910"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/TEXT:Home[3]"
        name: Home
        type: TEXT
        text: NutriBites
        w: 104
        h: 20
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        font_size: 12
        font: Inter Medium
        stroke_align: outside
        text_style: B3/Medium
      - node_id: "I14304:14115;8519:3397"
        path_key: "root/Apple Health/Bottom Nav/INSTANCE:Bottom Nav-item[4]"
        name: Bottom Nav-item
        type: INSTANCE
        instance_of: Status=Active
        children_text:
          [Profile]
        w: 104
        h: 96
        padding: 12
        gap: 4
        stroke_align: inside
  - chunk_id: anatomy_12
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Apple Health/Bottom Nav/Bottom Nav-item/INSTANCE:User"
      - "root/Apple Health/Frame 408/Status Bar/Frame 301/BOOLEAN_OPERATION:Cellular Connection"
    node_ids:
      - "I14304:14115;8519:3397;302:10361"
      - "I14304:14115;8519:3397;302:10361;28:5740"
      - "I14304:14115;8519:3397;302:10361;28:5741"
      - "I14304:14115;8519:3397;302:12893"
      - "14304:14116"
      - "I14304:14116;2784:33819"
      - "I14304:14116;2784:33819;2784:33817"
      - "14304:14117"
      - "14304:14118"
      - "I14304:14118;40:2108"
      - "I14304:14118;40:2109"
      - "I14304:14118;40:2102"
    items:
      - node_id: "I14304:14115;8519:3397;302:10361"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/INSTANCE:User"
        name: User
        type: INSTANCE
        instance_of: User
        w: 24
        h: 24
        fill: "#FFFFFF"
        stroke_align: inside
      - node_id: "I14304:14115;8519:3397;302:10361;28:5740"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/User/VECTOR:Vector"
        name: Vector
        type: VECTOR
        w: 24
        h: 24
        stroke_align: inside
      - node_id: "I14304:14115;8519:3397;302:10361;28:5741"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/User/VECTOR:Vector[2]"
        name: Vector
        type: VECTOR
        w: 20
        h: 19
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        stroke_align: inside
      - node_id: "I14304:14115;8519:3397;302:12893"
        path_key: "root/Apple Health/Bottom Nav/Bottom Nav-item/TEXT:Home[4]"
        name: Home
        type: TEXT
        text: Profile
        w: 104
        h: 20
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 12
        font: Inter Bold
        stroke_align: outside
        text_style: B3/Bold
      - node_id: "14304:14116"
        path_key: "root/Apple Health/INSTANCE:Home Indicator"
        name: Home Indicator
        type: INSTANCE
        instance_of: Darkmode=True
        w: 414
        h: 34
        fill: "#FFFFFF"
        stroke_align: inside
      - node_id: "I14304:14116;2784:33819"
        path_key: "root/Apple Health/Home Indicator/INSTANCE:Home Indicator"
        name: Home Indicator
        type: INSTANCE
        instance_of: Darkmode=False
        w: 414
        h: 34
        stroke_align: inside
      - node_id: "I14304:14116;2784:33819;2784:33817"
        path_key: "root/Apple Health/Home Indicator/Home Indicator/RECTANGLE:Home Indicator"
        name: Home Indicator
        type: RECTANGLE
        w: 134
        h: 5
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        radius: 100
      - node_id: "14304:14117"
        path_key: "root/Apple Health/FRAME:Frame 408"
        name: Frame 408
        type: FRAME
        w: 414
        h: 113
        fill: "#0C0C0C"
        fill_ref: Default/Grey/grey-100
        padding: 0
        stroke_align: inside
      - node_id: "14304:14118"
        path_key: "root/Apple Health/Frame 408/INSTANCE:Status Bar"
        name: Status Bar
        type: INSTANCE
        instance_of: Status Bar
        children_text:
          ["9:41"]
        w: 414
        h: 44
        padding: 12
        gap: 219
        stroke_align: inside
      - node_id: "I14304:14118;40:2108"
        path_key: "root/Apple Health/Frame 408/Status Bar/TEXT:Time"
        name: Time
        type: TEXT
        text: "9:41"
        w: 54
        h: 20
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 15
        font: SF Pro Text Semibold
      - node_id: "I14304:14118;40:2109"
        path_key: "root/Apple Health/Frame 408/Status Bar/FRAME:Frame 301"
        name: Frame 301
        type: FRAME
        w: 66
        h: 11
        padding: 0
        gap: 5
        stroke_align: inside
      - node_id: "I14304:14118;40:2102"
        path_key: "root/Apple Health/Frame 408/Status Bar/Frame 301/BOOLEAN_OPERATION:Cellular Connection"
        name: Cellular Connection
        type: BOOLEAN_OPERATION
        w: 17
        h: 11
        fill: "#FFFFFF"
        fill_ref: Default/White/white
  - chunk_id: anatomy_13
    kind: anatomy
    item_count: 3
    path_range:
      - "root/Apple Health/Frame 408/Status Bar/Frame 301/BOOLEAN_OPERATION:Wifi"
      - "root/Apple Health/Frame 408/Frame 19455/TEXT:Profile"
    node_ids:
      ["I14304:14118;40:2098", "14304:14119", "14304:14120"]
    items:
      - node_id: "I14304:14118;40:2098"
        path_key: "root/Apple Health/Frame 408/Status Bar/Frame 301/BOOLEAN_OPERATION:Wifi"
        name: Wifi
        type: BOOLEAN_OPERATION
        w: 15
        h: 11
        fill: "#FFFFFF"
        fill_ref: Default/White/white
      - node_id: "14304:14119"
        path_key: "root/Apple Health/Frame 408/FRAME:Frame 19455"
        name: Frame 19455
        type: FRAME
        w: 414
        h: 69
        padding: 24
        gap: 16
        stroke_align: inside
      - node_id: "14304:14120"
        path_key: "root/Apple Health/Frame 408/Frame 19455/TEXT:Profile"
        name: Profile
        type: TEXT
        text: Profile
        w: 374
        h: 29
        fill: "#FFFFFF"
        fill_ref: H5/Bold
        font_size: 24
        font: Inter Bold
        stroke_align: outside
        text_style: H5/Bold
  - chunk_id: layout_1
    kind: layout
    item_count: 12
    path_range:
      - "root/Apple Health/FRAME:Profile Header"
      - "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/FRAME:Frame 19560"
    node_ids:
      - "14304:14048"
      - "14304:14049"
      - "14304:14050"
      - "14304:14052"
      - "14304:14056"
      - "14304:14057"
      - "14304:14060"
      - "14304:14063"
      - "14304:14064"
      - "14304:14065"
      - "14304:14068"
      - "I14304:14068;1190:55080"
    items:
      - node_id: "14304:14048"
        path_key: "root/Apple Health/FRAME:Profile Header"
        name: Profile Header
        type: FRAME
        direction: column
        gap: 24
        align: CENTER / MIN
        sizing: AUTO / FIXED
        padding:
          left: 20
          right: 20
          top: 20
          bottom: 12
      - node_id: "14304:14049"
        path_key: "root/Apple Health/Profile Header/FRAME:Frame 19642"
        name: Frame 19642
        type: FRAME
        direction: row
        gap: 16
        align: SPACE_BETWEEN / CENTER
        sizing: FIXED / AUTO
      - node_id: "14304:14050"
        path_key: "root/Apple Health/Profile Header/Frame 19642/FRAME:Frame 19514"
        name: Frame 19514
        type: FRAME
        direction: row
        gap: 16
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "14304:14052"
        path_key: "root/Apple Health/Profile Header/Frame 19642/Frame 19514/FRAME:Frame 13297"
        name: Frame 13297
        type: FRAME
        direction: column
        gap: 4
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "14304:14056"
        path_key: "root/Apple Health/Profile Header/FRAME:Frame 19643"
        name: Frame 19643
        type: FRAME
        direction: row
        gap: 7
        align: SPACE_BETWEEN / CENTER
        sizing: FIXED / AUTO
      - node_id: "14304:14057"
        path_key: "root/Apple Health/Profile Header/Frame 19643/FRAME:Frame 19560"
        name: Frame 19560
        type: FRAME
        direction: row
        gap: 12
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "14304:14060"
        path_key: "root/Apple Health/Profile Header/Frame 19643/FRAME:Frame 19561"
        name: Frame 19561
        type: FRAME
        direction: row
        gap: 12
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "14304:14063"
        path_key: "root/Apple Health/FRAME:Frame 19645"
        name: Frame 19645
        type: FRAME
        direction: column
        gap: 24
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "14304:14064"
        path_key: "root/Apple Health/Frame 19645/FRAME:Frame 313906"
        name: Frame 313906
        type: FRAME
        direction: column
        gap: 0
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "14304:14065"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/FRAME:Profile Option List Item"
        name: Profile Option List Item
        type: FRAME
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 0
          bottom: 0
      - node_id: "14304:14068"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item"
        name: Profile Option List Item
        type: INSTANCE
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 16
          bottom: 16
      - node_id: "I14304:14068;1190:55080"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/FRAME:Frame 19560"
        name: Frame 19560
        type: FRAME
        direction: row
        gap: 12
        align: MIN / CENTER
        sizing: FIXED / AUTO
  - chunk_id: layout_2
    kind: layout
    item_count: 12
    path_range:
      - "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[2]"
      - "root/Apple Health/Frame 19645/Frame 313910/FRAME:Profile Option List Item"
    node_ids:
      - "14304:14069"
      - "I14304:14069;1190:55080"
      - "14304:14070"
      - "I14304:14070;1190:55080"
      - "14304:14071"
      - "I14304:14071;1190:55080"
      - "14304:14072"
      - "I14304:14072;1190:55080"
      - "14304:14073"
      - "I14304:14073;1190:55080"
      - "14304:14074"
      - "14304:14075"
    items:
      - node_id: "14304:14069"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[2]"
        name: Profile Option List Item
        type: INSTANCE
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 16
          bottom: 16
      - node_id: "I14304:14069;1190:55080"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/FRAME:Frame 19560[2]"
        name: Frame 19560
        type: FRAME
        direction: row
        gap: 12
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "14304:14070"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[3]"
        name: Profile Option List Item
        type: INSTANCE
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 16
          bottom: 16
      - node_id: "I14304:14070;1190:55080"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/FRAME:Frame 19560[3]"
        name: Frame 19560
        type: FRAME
        direction: row
        gap: 12
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "14304:14071"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[4]"
        name: Profile Option List Item
        type: INSTANCE
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 16
          bottom: 16
      - node_id: "I14304:14071;1190:55080"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/FRAME:Frame 19560[4]"
        name: Frame 19560
        type: FRAME
        direction: row
        gap: 12
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "14304:14072"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[5]"
        name: Profile Option List Item
        type: INSTANCE
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 16
          bottom: 16
      - node_id: "I14304:14072;1190:55080"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/FRAME:Frame 19560[5]"
        name: Frame 19560
        type: FRAME
        direction: row
        gap: 12
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "14304:14073"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[6]"
        name: Profile Option List Item
        type: INSTANCE
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 16
          bottom: 16
      - node_id: "I14304:14073;1190:55080"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/Profile Option List Item/FRAME:Frame 19560[6]"
        name: Frame 19560
        type: FRAME
        direction: row
        gap: 12
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "14304:14074"
        path_key: "root/Apple Health/Frame 19645/FRAME:Frame 313910"
        name: Frame 313910
        type: FRAME
        direction: column
        gap: 0
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "14304:14075"
        path_key: "root/Apple Health/Frame 19645/Frame 313910/FRAME:Profile Option List Item"
        name: Profile Option List Item
        type: FRAME
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 0
          bottom: 0
  - chunk_id: layout_3
    kind: layout
    item_count: 12
    path_range:
      - "root/Apple Health/Frame 19645/Frame 313910/FRAME:Profile Option List Item[2]"
      - "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/FRAME:Frame 19560[2]"
    node_ids:
      - "14304:14078"
      - "14304:14079"
      - "14304:14080"
      - "14304:14082"
      - "14304:14083"
      - "14304:14087"
      - "14304:14089"
      - "14304:14090"
      - "14304:14093"
      - "I14304:14093;1190:55080"
      - "14304:14094"
      - "I14304:14094;1190:55080"
    items:
      - node_id: "14304:14078"
        path_key: "root/Apple Health/Frame 19645/Frame 313910/FRAME:Profile Option List Item[2]"
        name: Profile Option List Item
        type: FRAME
        direction: row
        gap: 8
        align: MIN / MIN
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 16
          bottom: 16
      - node_id: "14304:14079"
        path_key: "root/Apple Health/Frame 19645/Frame 313910/Profile Option List Item/FRAME:Frame 19560"
        name: Frame 19560
        type: FRAME
        direction: row
        gap: 12
        align: MIN / MIN
        sizing: FIXED / AUTO
      - node_id: "14304:14080"
        path_key: "root/Apple Health/Frame 19645/Frame 313910/Profile Option List Item/Frame 19560/FRAME:Frame 314026"
        name: Frame 314026
        type: FRAME
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: AUTO / AUTO
        padding:
          left: 0
          right: 0
          top: 3
          bottom: 3
      - node_id: "14304:14082"
        path_key: "root/Apple Health/Frame 19645/Frame 313910/Profile Option List Item/Frame 19560/FRAME:Frame 314027"
        name: Frame 314027
        type: FRAME
        direction: column
        gap: 4
        align: CENTER / MIN
        sizing: AUTO / FIXED
      - node_id: "14304:14083"
        path_key: "root/Apple Health/Frame 19645/Frame 313910/Profile Option List Item/Frame 19560/Frame 314027/FRAME:Frame 314058"
        name: Frame 314058
        type: FRAME
        direction: row
        gap: 8
        align: CENTER / CENTER
        sizing: AUTO / AUTO
      - node_id: "14304:14087"
        path_key: "root/Apple Health/Frame 19645/Frame 313910/Profile Option List Item/FRAME:Frame 314059"
        name: Frame 314059
        type: FRAME
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: AUTO / AUTO
        padding:
          left: 0
          right: 0
          top: 3
          bottom: 3
      - node_id: "14304:14089"
        path_key: "root/Apple Health/Frame 19645/FRAME:Frame 313908"
        name: Frame 313908
        type: FRAME
        direction: column
        gap: 0
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "14304:14090"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/FRAME:Profile Option List Item"
        name: Profile Option List Item
        type: FRAME
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 0
          bottom: 0
      - node_id: "14304:14093"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item"
        name: Profile Option List Item
        type: INSTANCE
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 16
          bottom: 16
      - node_id: "I14304:14093;1190:55080"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/FRAME:Frame 19560"
        name: Frame 19560
        type: FRAME
        direction: row
        gap: 12
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "14304:14094"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item[2]"
        name: Profile Option List Item
        type: INSTANCE
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 16
          bottom: 16
      - node_id: "I14304:14094;1190:55080"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/FRAME:Frame 19560[2]"
        name: Frame 19560
        type: FRAME
        direction: row
        gap: 12
        align: MIN / CENTER
        sizing: FIXED / AUTO
  - chunk_id: layout_4
    kind: layout
    item_count: 12
    path_range:
      - "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item[3]"
      - "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/FRAME:Frame 19560[3]"
    node_ids:
      - "14304:14095"
      - "I14304:14095;1190:55080"
      - "14304:14096"
      - "I14304:14096;1190:55080"
      - "14304:14097"
      - "14304:14098"
      - "14304:14101"
      - "I14304:14101;1190:55080"
      - "14304:14102"
      - "I14304:14102;1190:55080"
      - "14304:14103"
      - "I14304:14103;1190:55080"
    items:
      - node_id: "14304:14095"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item[3]"
        name: Profile Option List Item
        type: INSTANCE
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 16
          bottom: 16
      - node_id: "I14304:14095;1190:55080"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/FRAME:Frame 19560[3]"
        name: Frame 19560
        type: FRAME
        direction: row
        gap: 12
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "14304:14096"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item[4]"
        name: Profile Option List Item
        type: INSTANCE
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 16
          bottom: 16
      - node_id: "I14304:14096;1190:55080"
        path_key: "root/Apple Health/Frame 19645/Frame 313908/Profile Option List Item/FRAME:Frame 19560[4]"
        name: Frame 19560
        type: FRAME
        direction: row
        gap: 12
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "14304:14097"
        path_key: "root/Apple Health/Frame 19645/FRAME:Frame 313907"
        name: Frame 313907
        type: FRAME
        direction: column
        gap: 0
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "14304:14098"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/FRAME:Profile Option List Item"
        name: Profile Option List Item
        type: FRAME
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 0
          bottom: 0
      - node_id: "14304:14101"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/INSTANCE:Profile Option List Item"
        name: Profile Option List Item
        type: INSTANCE
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 16
          bottom: 16
      - node_id: "I14304:14101;1190:55080"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/FRAME:Frame 19560"
        name: Frame 19560
        type: FRAME
        direction: row
        gap: 12
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "14304:14102"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/INSTANCE:Profile Option List Item[2]"
        name: Profile Option List Item
        type: INSTANCE
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 16
          bottom: 16
      - node_id: "I14304:14102;1190:55080"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/FRAME:Frame 19560[2]"
        name: Frame 19560
        type: FRAME
        direction: row
        gap: 12
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "14304:14103"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/INSTANCE:Profile Option List Item[3]"
        name: Profile Option List Item
        type: INSTANCE
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 16
          bottom: 16
      - node_id: "I14304:14103;1190:55080"
        path_key: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/FRAME:Frame 19560[3]"
        name: Frame 19560
        type: FRAME
        direction: row
        gap: 12
        align: MIN / CENTER
        sizing: FIXED / AUTO
  - chunk_id: layout_5
    kind: layout
    item_count: 2
    path_range:
      - "root/Apple Health/Frame 19645/FRAME:Frame 313909"
      - "root/Apple Health/Frame 19645/Frame 313909/FRAME:Profile Option List Item"
    node_ids:
      ["14304:14104", "14304:14105"]
    items:
      - node_id: "14304:14104"
        path_key: "root/Apple Health/Frame 19645/FRAME:Frame 313909"
        name: Frame 313909
        type: FRAME
        direction: column
        gap: 0
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "14304:14105"
        path_key: "root/Apple Health/Frame 19645/Frame 313909/FRAME:Profile Option List Item"
        name: Profile Option List Item
        type: FRAME
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 20
          right: 20
          top: 0
          bottom: 0
```