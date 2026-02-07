## Figma Component: Apple Health

### Implementation Instructions
1. Use get_screenshot on the Figma URL below to see what this component looks like.
2. Read the anatomy tree below to understand the component structure.
3. Read the YAML specs — it has every layer, color, font, spacing, and token value you need.
4. Build the component exactly as specified. Match the structure, styles (fills, strokes, fonts), and layout (direction, gap, padding).
5. Use resolved_tokens to map token names to actual values (e.g. hex colors, font names).
6. Keep it minimal — only implement what the specs describe, nothing more.

### Figma Links
- UI: https://www.figma.com/design/YKbY29IDDVia5S27lVBfox/NutriScan-App-Design?node-id=14304-14047&t=rwZoM8Hib6oP0cI8-11 (use get_screenshot for visual)
- Specs: https://www.figma.com/design/YKbY29IDDVia5S27lVBfox/NutriScan-App-Design?node-id=14388-1136198&t=rwZoM8Hib6oP0cI8-11 (use get_metadata on this specs frame)

### Component Anatomy
```
- Apple Health (FRAME)
- Profile Header (FRAME)
- Frame 19642 (FRAME)
- Frame 19514 (FRAME)
- Avatar (INSTANCE) — instance of Property 1=No
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
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
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
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 313907 (FRAME)
- Profile Option List Item (FRAME)
- About (TEXT) — "About"
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Frame 313909 (FRAME)
- Profile Option List Item (FRAME)
- Follow Us (TEXT) — "Follow Us"
- Frame 313910 (FRAME)
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Profile Option List Item (INSTANCE) — instance of Profile Option List Item
- Profile Option List Item (FRAME)
- App Version 1.2.1 (40) (TEXT) — "App Version 1.2.1 (40)"
- Bottom Nav (INSTANCE) — instance of Bottom Nav
- Home Indicator (INSTANCE) — instance of Darkmode=True
- Frame 408 (FRAME)
- Status Bar (INSTANCE) — instance of Status Bar
- Frame 19455 (FRAME)
- Profile (TEXT) — "Profile"
```

### MCP Tool Guide
| Tool | Use For |
|------|---------|
| get_screenshot | Visual reference of the component |
| get_metadata | Structural XML of node tree (lightweight) |
| get_design_context | Full code-oriented context (heavy) |
| get_variable_defs | Design token/variable definitions |

### Specs Data (YAML)
```yaml
schema: specs-plugin.agent_pack.v5.yaml.compact
generated_at: "2026-02-07T20:27:58.218Z"
selection:
  node_id: "14304:14047"
  name: Apple Health
  type: FRAME
summary:
  anatomy_nodes_total: 62
  layout_nodes_total: 50
  property_groups_total: 0
  property_variants_total: 0
  variable_refs_total: 5
  chunks_total: 4
  truncated:
    anatomy: true
    layout: true
    properties: false
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
  Default/White/white: "#FFFFFF"
  Default/Grey/grey-90: "#1C1C1E"
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
  - id: "14304:14069"
    path: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[2]"
    children_text:
      [Modify Meal Plan]
  - id: "14304:14070"
    path: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[3]"
    children_text:
      [Modify Macros]
  - id: "14304:14071"
    path: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[4]"
    children_text:
      [Share Food Timeline]
  - id: "14304:14072"
    path: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[5]"
    children_text:
      [Manage Repeat Meals]
  - id: "14304:14073"
    path: "root/Apple Health/Frame 19645/Frame 313906/INSTANCE:Profile Option List Item[6]"
    children_text:
      [Refer a Friend]
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
  - id: "14304:14094"
    path: "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item[2]"
    children_text:
      [Change Langauge]
  - id: "14304:14095"
    path: "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item[3]"
    children_text:
      [Leave a Review]
  - id: "14304:14096"
    path: "root/Apple Health/Frame 19645/Frame 313908/INSTANCE:Profile Option List Item[4]"
    children_text:
      [Contact Us]
  - id: "14304:14099"
    path: "root/Apple Health/Frame 19645/Frame 313907/Profile Option List Item/TEXT:About"
    text: About
  - id: "14304:14101"
    path: "root/Apple Health/Frame 19645/Frame 313907/INSTANCE:Profile Option List Item"
    children_text:
      [App Contributors]
  - id: "14304:14102"
    path: "root/Apple Health/Frame 19645/Frame 313907/INSTANCE:Profile Option List Item[2]"
    children_text:
      [About NutriScan]
  - id: "14304:14103"
    path: "root/Apple Health/Frame 19645/Frame 313907/INSTANCE:Profile Option List Item[3]"
    children_text:
      [Logout]
  - id: "14304:14106"
    path: "root/Apple Health/Frame 19645/Frame 313909/Profile Option List Item/TEXT:Follow Us"
    text: Follow Us
  - id: "14304:14109"
    path: "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/INSTANCE:Profile Option List Item"
    children_text:
      [X (Twitter)]
  - id: "14304:14110"
    path: "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/INSTANCE:Profile Option List Item[2]"
    children_text:
      [Instagram]
  - id: "14304:14111"
    path: "root/Apple Health/Frame 19645/Frame 313909/Frame 313910/INSTANCE:Profile Option List Item[3]"
    children_text:
      [Website]
  - id: "14304:14113"
    path: "root/Apple Health/Frame 19645/Profile Option List Item/TEXT:App Version 1.2.1 (40)"
    text: App Version 1.2.1 (40)
  - id: "14304:14115"
    path: "root/Apple Health/INSTANCE:Bottom Nav"
    children_text:
      [Meals, Diet Plan, NutriBites, Profile]
  - id: "14304:14118"
    path: "root/Apple Health/Frame 408/INSTANCE:Status Bar"
    children_text:
      ["9:41"]
  - id: "14304:14120"
    path: "root/Apple Health/Frame 408/Frame 19455/TEXT:Profile"
    text: Profile
chunks:
  - chunk_id: anatomy_1
    kind: anatomy
    item_count: 10
    node_ids:
      - "14304:14047"
      - "14304:14048"
      - "14304:14049"
      - "14304:14050"
      - "14304:14051"
      - "14304:14053"
      - "14304:14054"
      - "14304:14055"
      - "14304:14056"
      - "14304:14057"
    items:
      - node_id: "14304:14047"
        path_key: "root/FRAME:Apple Health"
        name: Apple Health
        type: FRAME
        w: 414
        h: 1615
        fill: "#0C0C0C"
        fill_ref: Default/Grey/grey-100
      - node_id: "14304:14048"
        path_key: "root/Apple Health/FRAME:Profile Header"
        name: Profile Header
        type: FRAME
        w: 414
        h: 141
        padding: 20
        gap: 24
      - node_id: "14304:14049"
        path_key: "root/Apple Health/Profile Header/FRAME:Frame 19642"
        name: Frame 19642
        type: FRAME
        w: 374
        h: 59
        padding: 0
        gap: 16
      - node_id: "14304:14050"
        path_key: "root/Apple Health/Profile Header/Frame 19642/FRAME:Frame 19514"
        name: Frame 19514
        type: FRAME
        w: 342
        h: 59
        padding: 0
        gap: 16
      - node_id: "14304:14051"
        path_key: "root/Apple Health/Profile Header/Frame 19642/Frame 19514/INSTANCE:Avatar"
        name: Avatar
        type: INSTANCE
        instance_of: Property 1=No
        w: 59
        h: 59
        fill: "#FFFFFF"
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
        text_style: B2/Medium
      - node_id: "14304:14055"
        path_key: "root/Apple Health/Profile Header/Frame 19642/INSTANCE:PencilSimple"
        name: PencilSimple
        type: INSTANCE
        instance_of: PencilSimple
        w: 32
        h: 32
        fill: "#FFFFFF"
      - node_id: "14304:14056"
        path_key: "root/Apple Health/Profile Header/FRAME:Frame 19643"
        name: Frame 19643
        type: FRAME
        w: 374
        h: 26
        padding: 0
        gap: 7
      - node_id: "14304:14057"
        path_key: "root/Apple Health/Profile Header/Frame 19643/FRAME:Frame 19560"
        name: Frame 19560
        type: FRAME
        w: 187
        h: 26
        padding: 0
        gap: 12
  - chunk_id: anatomy_2
    kind: anatomy
    item_count: 10
    node_ids:
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
      - node_id: "14304:14058"
        path_key: "root/Apple Health/Profile Header/Frame 19643/Frame 19560/INSTANCE:ForkKnife"
        name: ForkKnife
        type: INSTANCE
        instance_of: ForkKnife
        w: 20
        h: 20
        fill: "#FFFFFF"
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
        text_style: B0/Medium
      - node_id: "14304:14060"
        path_key: "root/Apple Health/Profile Header/Frame 19643/FRAME:Frame 19561"
        name: Frame 19561
        type: FRAME
        w: 187
        h: 26
        padding: 0
        gap: 12
      - node_id: "14304:14061"
        path_key: "root/Apple Health/Profile Header/Frame 19643/Frame 19561/INSTANCE:Target"
        name: Target
        type: INSTANCE
        instance_of: Target
        w: 20
        h: 20
        fill: "#FFFFFF"
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
        text_style: B0/Medium
      - node_id: "14304:14063"
        path_key: "root/Apple Health/FRAME:Frame 19645"
        name: Frame 19645
        type: FRAME
        w: 414
        h: 1170
        padding: 0
        gap: 24
      - node_id: "14304:14064"
        path_key: "root/Apple Health/Frame 19645/FRAME:Frame 313906"
        name: Frame 313906
        type: FRAME
        w: 414
        h: 374
        padding: 0
      - node_id: "14304:14065"
        path_key: "root/Apple Health/Frame 19645/Frame 313906/FRAME:Profile Option List Item"
        name: Profile Option List Item
        type: FRAME
        w: 414
        h: 26
        padding: 0
        gap: 8
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
  - chunk_id: layout_1
    kind: layout
    item_count: 8
    node_ids:
      - "14304:14048"
      - "14304:14049"
      - "14304:14050"
      - "14304:14052"
      - "14304:14056"
      - "14304:14057"
      - "14304:14060"
      - "14304:14063"
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
  - chunk_id: layout_2
    kind: layout
    item_count: 8
    node_ids:
      - "14304:14064"
      - "14304:14065"
      - "14304:14068"
      - "I14304:14068;1190:55080"
      - "14304:14069"
      - "I14304:14069;1190:55080"
      - "14304:14070"
      - "I14304:14070;1190:55080"
    items:
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
```