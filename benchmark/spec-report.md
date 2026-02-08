## Figma Component: Full Report

### Implementation Instructions
1. Use get_screenshot on the Figma URL below and **save it to `.figma/full_report.png`** (relative to working directory). Reference this local file whenever you need to check the design — do not call get_screenshot again.
2. Read the anatomy tree below to understand the component structure.
3. Read the YAML specs — it has every layer, color, font, spacing, and token value you need.
4. Check the project's working directory or `package.json` for the icon library in use (e.g. Phosphor, Lucide, Heroicons). Use matching icons from that library based on the `instance_of` names in the anatomy (e.g. `instance_of: ForkKnife` → use ForkKnife from the detected library).
5. Build the component exactly as specified. Match the structure, styles (fills, strokes, fonts), and layout (direction, gap, padding).
6. Use resolved_tokens to map token names to actual values (e.g. hex colors, font names).
7. Keep it minimal — only implement what the specs describe, nothing more.
8. **After implementation is complete**, take a screenshot of your front-end output and compare it side-by-side with `.figma/full_report.png`. Fix any visual differences until they match.

### Figma URL
https://www.figma.com/design/YKbY29IDDVia5S27lVBfox/NutriScan-App-Design?node-id=14398-1137535&t=rwZoM8Hib6oP0cI8-11

### Component Anatomy
```
- Full Report (FRAME)
- Frame 313966 (FRAME)
- Frame 19455 (FRAME)
- Frame 313972 (FRAME)
- Body Health Report (TEXT) — "Body Health Report"
- Frame 313961 (INSTANCE) — instance of Frame 313959
- Button (FRAME)
- 🥣 Breakfast (TEXT) — "Last 7 days"
- Button (FRAME)
- CaretDown (INSTANCE) — instance of CaretDown
- Track food everyday to watch hidden dangers. Check report on your nutrients for Muscle Building goal. (TEXT) — "Track food everyday to watch hidden dan…"
- Frame 313971 (FRAME)
- card (INSTANCE) — instance of card
- Frame 313977 (FRAME)
- title (TEXT) — "Magnesium 😰"
- description (TEXT) — "Why?"
- description (TEXT) — "If low, muscle cramps"
- Progress (INSTANCE) — instance of Property 1=bad
- Frame 313967 (FRAME)
- description (TEXT) — "Average:"
- description (TEXT) — "53mg / 100mg"
- Frame 313976 (FRAME)
- description (TEXT) — "Cramp episodes spike 25 %; strength dip…"
- card (INSTANCE) — instance of card
- card (INSTANCE) — instance of card
- card (INSTANCE) — instance of card
- card (INSTANCE) — instance of card
- card (INSTANCE) — instance of card
- card (INSTANCE) — instance of card
- card (INSTANCE) — instance of card
- Frame 313977 (FRAME)
- title (TEXT) — "Omega-3 😀"
- description (TEXT) — "Why?"
- description (TEXT) — "If low, more soreness"
- Progress (INSTANCE) — instance of Property 1=good
- description (TEXT) — "Average:"
- description (TEXT) — "120mg / 100mg"
- Review (FRAME)
- Frame 313816 (FRAME)
- Star (INSTANCE) — instance of Star
- Star (INSTANCE) — instance of Star
- Star (INSTANCE) — instance of Star
- Star (INSTANCE) — instance of Star
- Star (INSTANCE) — instance of Star
- In just 7 days, I found something about my eating I’d never realized before, I finally got that actually makes sense for my lifestyle. (TEXT) — "In just 7 days, I found something about…"
- Jasmine, New York (TEXT) — "Jasmine, New York"
- card (FRAME)
- Frame 313977 (FRAME)
- title (TEXT) — "Boost your health report by 30% this we…"
- title (TEXT) — "Join 14,283 users already on a precisio…"
- Frame 313961 (INSTANCE) — instance of Frame 313959
- Button (FRAME)
- 🥣 Breakfast (TEXT) — "⚡ See Your Fix Plan (Premium)"
- image (RECTANGLE)
- Legend (FRAME)
- Frame 314021 (FRAME)
- rating (FRAME)
- Optimal (TEXT) — "Optimal"
- Frame 314023 (FRAME)
- rating (FRAME)
- Caution (TEXT) — "Caution"
- Frame 314024 (FRAME)
- rating (FRAME)
- Deficient (TEXT) — "Deficient"
- Bottom Nav (FRAME)
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
- Bottom Nav-item (INSTANCE) — instance of Status=Active
- UsersThree (INSTANCE) — instance of UsersThree
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Home (TEXT) — "Club"
- Bottom Nav-item (INSTANCE) — instance of Status=Active
- ChartLineUp (INSTANCE) — instance of ChartLineUp
- Vector (VECTOR)
- Vector (VECTOR)
- Home (TEXT) — "Report"
- Bottom Nav-item (INSTANCE) — instance of Status=Inactive
- Cookie (INSTANCE) — instance of Cookie
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Home (TEXT) — "NutriBites"
- Bottom Nav-item (INSTANCE) — instance of Status=Inactive
- User (INSTANCE) — instance of User
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- Home (TEXT) — "Profile"
- Frame 408 (FRAME)
- Status Bar (INSTANCE) — instance of Status Bar
- Time (TEXT) — "9:41"
- Frame 301 (FRAME)
- Cellular Connection (BOOLEAN_OPERATION)
- Wifi (BOOLEAN_OPERATION)
```

### Specs Data (YAML)
```yaml
schema: specs-plugin.agent_pack.v8.yaml.compact
generated_at: "2026-02-08T07:04:34.949Z"
selection:
  node_id: "14398:1137535"
  name: Full Report
  type: FRAME
  clips_content: true
summary:
  anatomy_nodes_total: 121
  layout_nodes_total: 50
  property_groups_total: 0
  property_variants_total: 0
  variable_refs_total: 6
  instance_templates: 3
  deduplicated_instances: 11
  chunks_total: 19
  truncated:
    anatomy: false
    anatomy_included: 121
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
  Default/Grey/grey-90: "#1C1C1E"
  Default/Grey/grey-80: "#2F2F33"
  Default/White/white: "#FFFFFF"
  B1/Bold: "#FFFFFF"
  Default/Grey/grey-40: "#929299"
  Default/Grey/grey-20: "#CECED2"
  B2 14px/Regular: "#D0D5DD"
text_index:
  - id: "14398:1137539"
    path: "root/Full Report/Frame 313966/Frame 19455/Frame 313972/TEXT:Body Health Report"
    text: Body Health Report
  - id: "14398:1137540"
    path: "root/Full Report/Frame 313966/Frame 19455/Frame 313972/INSTANCE:Frame 313961"
    children_text:
      [Last 7 days]
  - id: "I14398:1137540;9959:502"
    path: "root/Full Report/Frame 313966/Frame 19455/Frame 313972/Frame 313961/Button/TEXT:🥣 Breakfast"
    text: Last 7 days
  - id: "14398:1137541"
    path: "root/Full Report/Frame 313966/Frame 19455/TEXT:Track food everyday to watch hidden dangers. Check report on your nutrients for Muscle Building goal."
    text: Track food everyday to watch hidden dangers. Check report on your nutrients for…
  - id: "14398:1137543"
    path: "root/Full Report/Frame 313971/INSTANCE:card"
    children_text:
      - Magnesium 😰
      - Why?
      - If low, muscle cramps
      - "Average:"
      - 53mg / 100mg
      - Cramp episodes spike 25 %; strength dips 5 %.
  - id: "I14398:1137543;10637:2654"
    path: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/Frame 313974/TEXT:title"
    text: Magnesium 😰
  - id: "I14398:1137543;10648:9021"
    path: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/Frame 313974/TEXT:description"
    text: Why?
  - id: "I14398:1137543;10637:2655"
    path: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/TEXT:description"
    text: If low, muscle cramps
  - id: "I14398:1137543;10637:6613"
    path: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Frame 313970/TEXT:description"
    text: "Average:"
  - id: "I14398:1137543;10637:6644"
    path: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Frame 313970/TEXT:description[2]"
    text: 53mg / 100mg
  - id: "I14398:1137543;10637:5290"
    path: "root/Full Report/Frame 313971/card/Frame 313976/TEXT:description"
    text: Cramp episodes spike 25 %; strength dips 5 %.
  - id: "14398:1137544"
    path: "root/Full Report/Frame 313971/INSTANCE:card[2]"
    children_text:
      - Calcium 😰
      - Why?
      - If low, cramps, weak lifts
      - "Average:"
      - 53mg / 100mg
      - Cramp risk doubles; lift capacity dips 5 %.
  - id: "14398:1137545"
    path: "root/Full Report/Frame 313971/INSTANCE:card[3]"
    children_text:
      - Vitamin E 😰
      - Why?
      - If low, muscle weakness, tingling
      - "Average:"
      - 53mg / 100mg
      - Grip weakness & tingling nerves 25 % more likely.
  - id: "14398:1137546"
    path: "root/Full Report/Frame 313971/INSTANCE:card[4]"
    children_text:
      - Zinc 😥
      - Why?
      - If low, muscle repair slow, low testosterone
      - "Average:"
      - 53mg / 100mg
      - Testosterone may fall 5–10 %; wounds heal 25 % slower.
  - id: "14398:1137547"
    path: "root/Full Report/Frame 313971/INSTANCE:card[5]"
    children_text:
      - Calcium 😥
      - Why?
      - If low, cramps, weak lifts
      - "Average:"
      - 53mg / 100mg
      - Cramp risk doubles; lift capacity dips 5 %.
  - id: "14398:1137548"
    path: "root/Full Report/Frame 313971/INSTANCE:card[6]"
    children_text:
      - Iron 😥
      - Why?
      - If low, low stamina, breath issue
      - "Average:"
      - 53mg / 100mg
      - Endurance drops 10 % from poor oxygen delivery.
  - id: "14398:1137549"
    path: "root/Full Report/Frame 313971/INSTANCE:card[7]"
    children_text:
      - Vitamin C 🙂
      - Why?
      - If low, slow muscle fix
      - "Average:"
      - 80mg / 150mg
      - Muscle fibre repair slows ~15 %, gains delayed.
  - id: "14398:1137550"
    path: "root/Full Report/Frame 313971/INSTANCE:card[8]"
    children_text:
      [Omega-3 😀, Why?, If low, more soreness, "Average:", 120mg / 100mg]
  - id: "I14398:1137550;10637:2654"
    path: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/Frame 313974/TEXT:title[2]"
    text: Omega-3 😀
  - id: "I14398:1137550;10648:9021"
    path: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/Frame 313974/TEXT:description[2]"
    text: Why?
  - id: "I14398:1137550;10637:2655"
    path: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/TEXT:description[2]"
    text: If low, more soreness
  - id: "I14398:1137550;10637:6613"
    path: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Frame 313970/TEXT:description[3]"
    text: "Average:"
  - id: "I14398:1137550;10637:6644"
    path: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Frame 313970/TEXT:description[4]"
    text: 120mg / 100mg
  - id: "14398:1137558"
    path: "root/Full Report/Frame 313971/Review/TEXT:In just 7 days, I found something about my eating I’d never realized before, I finally got that actually makes sense for my lifestyle."
    text: In just 7 days, I found something about my eating I’d never realized before, I …
  - id: "14398:1137559"
    path: "root/Full Report/Frame 313971/Review/TEXT:Jasmine, New York"
    text: Jasmine, New York
  - id: "14398:1137563"
    path: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313979/TEXT:title"
    text: Boost your health report by 30% this week with small steps
  - id: "14398:1137564"
    path: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313979/TEXT:title[2]"
    text: Join 14,283 users already on a precision plan
  - id: "14398:1137565"
    path: "root/Full Report/Frame 313971/card/Frame 313977/INSTANCE:Frame 313961"
    children_text:
      [⚡ See Your Fix Plan (Premium)]
  - id: "I14398:1137565;9959:502"
    path: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/Button/TEXT:🥣 Breakfast"
    text: ⚡ See Your Fix Plan (Premium)
  - id: "14398:1137570"
    path: "root/Full Report/Legend/Frame 314021/TEXT:Optimal"
    text: Optimal
  - id: "14398:1137573"
    path: "root/Full Report/Legend/Frame 314023/TEXT:Caution"
    text: Caution
  - id: "14398:1137576"
    path: "root/Full Report/Legend/Frame 314024/TEXT:Deficient"
    text: Deficient
  - id: "14398:1137578"
    path: "root/Full Report/Bottom Nav/INSTANCE:Bottom Nav-item"
    children_text:
      [Meals]
  - id: "I14398:1137578;302:12910"
    path: "root/Full Report/Bottom Nav/Bottom Nav-item/TEXT:Home"
    text: Meals
  - id: "14398:1137579"
    path: "root/Full Report/Bottom Nav/INSTANCE:Bottom Nav-item[2]"
    children_text:
      [Diet Plan]
  - id: "I14398:1137579;302:12910"
    path: "root/Full Report/Bottom Nav/Bottom Nav-item/TEXT:Home[2]"
    text: Diet Plan
  - id: "14398:1137580"
    path: "root/Full Report/Bottom Nav/INSTANCE:Bottom Nav-item[3]"
    children_text:
      [Club]
  - id: "I14398:1137580;302:12893"
    path: "root/Full Report/Bottom Nav/Bottom Nav-item/TEXT:Home[3]"
    text: Club
  - id: "14398:1137581"
    path: "root/Full Report/Bottom Nav/INSTANCE:Bottom Nav-item[4]"
    children_text:
      [Report]
  - id: "I14398:1137581;302:12893"
    path: "root/Full Report/Bottom Nav/Bottom Nav-item/TEXT:Home[4]"
    text: Report
  - id: "14398:1137582"
    path: "root/Full Report/Bottom Nav/INSTANCE:Bottom Nav-item[5]"
    children_text:
      [NutriBites]
  - id: "I14398:1137582;302:12910"
    path: "root/Full Report/Bottom Nav/Bottom Nav-item/TEXT:Home[5]"
    text: NutriBites
  - id: "14398:1137583"
    path: "root/Full Report/Bottom Nav/INSTANCE:Bottom Nav-item[6]"
    children_text:
      [Profile]
  - id: "I14398:1137583;302:12910"
    path: "root/Full Report/Bottom Nav/Bottom Nav-item/TEXT:Home[6]"
    text: Profile
  - id: "14398:1137585"
    path: "root/Full Report/Frame 408/INSTANCE:Status Bar"
    children_text:
      ["9:41"]
  - id: "I14398:1137585;40:2108"
    path: "root/Full Report/Frame 408/Status Bar/TEXT:Time"
    text: "9:41"
chunks:
  - chunk_id: anatomy_1
    kind: anatomy
    item_count: 12
    path_range:
      ["root/FRAME:Full Report", "root/Full Report/FRAME:Frame 313971"]
    node_ids:
      - "14398:1137535"
      - "14398:1137536"
      - "14398:1137537"
      - "14398:1137538"
      - "14398:1137539"
      - "14398:1137540"
      - "I14398:1137540;9959:501"
      - "I14398:1137540;9959:502"
      - "I14398:1137540;9959:503"
      - "I14398:1137540;9959:504"
      - "14398:1137541"
      - "14398:1137542"
    items:
      - node_id: "14398:1137535"
        path_key: "root/FRAME:Full Report"
        name: Full Report
        type: FRAME
        w: 414
        h: 2560
        fill: "#0C0C0C"
        fill_ref: Default/Grey/grey-100
        stroke_align: inside
      - node_id: "14398:1137536"
        path_key: "root/Full Report/FRAME:Frame 313966"
        name: Frame 313966
        type: FRAME
        w: 414
        h: 128
        padding: 0
        stroke_align: inside
      - node_id: "14398:1137537"
        path_key: "root/Full Report/Frame 313966/FRAME:Frame 19455"
        name: Frame 19455
        type: FRAME
        w: 414
        h: 128
        padding: 24
        gap: 12
        stroke_align: inside
      - node_id: "14398:1137538"
        path_key: "root/Full Report/Frame 313966/Frame 19455/FRAME:Frame 313972"
        name: Frame 313972
        type: FRAME
        w: 374
        h: 34
        padding: 0
        gap: 16
        stroke_align: inside
      - node_id: "14398:1137539"
        path_key: "root/Full Report/Frame 313966/Frame 19455/Frame 313972/TEXT:Body Health Report"
        name: Body Health Report
        type: TEXT
        text: Body Health Report
        w: 237
        h: 34
        fill: "#FFFFFF"
        font_size: 24
        font: Inter Bold
        stroke_align: outside
      - node_id: "14398:1137540"
        path_key: "root/Full Report/Frame 313966/Frame 19455/Frame 313972/INSTANCE:Frame 313961"
        name: Frame 313961
        type: INSTANCE
        instance_of: Frame 313959
        children_text:
          [Last 7 days]
        w: 121
        h: 32
        fill: "#1C1C1E"
        fill_ref: Default/Grey/grey-90
        radius: 40
        padding: 0
        stroke: "#2F2F33"
        stroke_ref: Default/Grey/grey-80
        stroke_align: inside
        stroke_sides: all
      - node_id: "I14398:1137540;9959:501"
        path_key: "root/Full Report/Frame 313966/Frame 19455/Frame 313972/Frame 313961/FRAME:Button"
        name: Button
        type: FRAME
        w: 89
        h: 32
        padding: 6
        gap: 12
      - node_id: "I14398:1137540;9959:502"
        path_key: "root/Full Report/Frame 313966/Frame 19455/Frame 313972/Frame 313961/Button/TEXT:🥣 Breakfast"
        name: 🥣 Breakfast
        type: TEXT
        text: Last 7 days
        w: 77
        h: 22
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 14
        font: Inter Medium
        stroke_align: outside
        text_style: B2/Medium
      - node_id: "I14398:1137540;9959:503"
        path_key: "root/Full Report/Frame 313966/Frame 19455/Frame 313972/Frame 313961/FRAME:Button[2]"
        name: Button
        type: FRAME
        w: 32
        h: 32
        padding: 6
        gap: 12
      - node_id: "I14398:1137540;9959:504"
        path_key: "root/Full Report/Frame 313966/Frame 19455/Frame 313972/Frame 313961/Button/INSTANCE:CaretDown"
        name: CaretDown
        type: INSTANCE
        instance_of: CaretDown
        w: 12
        h: 12
        fill: "#FFFFFF"
        stroke_align: inside
      - node_id: "14398:1137541"
        path_key: "root/Full Report/Frame 313966/Frame 19455/TEXT:Track food everyday to watch hidden dangers. Check report on your nutrients for Muscle Building goal."
        name: Track food everyday to watch hi…
        type: TEXT
        text: Track food everyday to watch hidden dangers. Check report on your nutrients for…
        w: 374
        h: 42
        fill: mixed
        font_size: 14
        font: Inter Regular
        stroke_align: outside
      - node_id: "14398:1137542"
        path_key: "root/Full Report/FRAME:Frame 313971"
        name: Frame 313971
        type: FRAME
        w: 374
        h: 1878
        padding: 0
        gap: 16
        stroke_align: inside
  - chunk_id: anatomy_2
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Full Report/Frame 313971/INSTANCE:card"
      - "root/Full Report/Frame 313971/INSTANCE:card[2]"
    node_ids:
      - "14398:1137543"
      - "I14398:1137543;10653:11950"
      - "I14398:1137543;10637:2654"
      - "I14398:1137543;10648:9021"
      - "I14398:1137543;10637:2655"
      - "I14398:1137543;10637:6620"
      - "I14398:1137543;10637:6620;10637:6598"
      - "I14398:1137543;10637:6613"
      - "I14398:1137543;10637:6644"
      - "I14398:1137543;10653:11229"
      - "I14398:1137543;10637:5290"
      - "14398:1137544"
    items:
      - node_id: "14398:1137543"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card"
        name: card
        type: INSTANCE
        instance_of: card
        children_text:
          - Magnesium 😰
          - Why?
          - If low, muscle cramps
          - "Average:"
          - 53mg / 100mg
          - Cramp episodes spike 25 %; strength dips 5 %.
        w: 374
        h: 174
        fill: "#1C1C1E"
        fill_ref: Default/Grey/grey-90
        radius: 8
        padding: 0
        stroke_align: inside
      - node_id: "I14398:1137543;10653:11950"
        path_key: "root/Full Report/Frame 313971/card/FRAME:Frame 313977"
        name: Frame 313977
        type: FRAME
        w: 374
        h: 136
        padding: 16
        gap: 16
        stroke_align: inside
      - node_id: "I14398:1137543;10637:2654"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/Frame 313974/TEXT:title"
        name: title
        type: TEXT
        text: Magnesium 😰
        w: 296
        h: 24
        fill: "#FFFFFF"
        fill_ref: B1/Bold
        font_size: 16
        font: Inter Bold
        stroke_align: outside
        text_style: B1/Bold
      - node_id: "I14398:1137543;10648:9021"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/Frame 313974/TEXT:description"
        name: description
        type: TEXT
        text: Why?
        w: 38
        h: 22
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 14
        font: Inter Medium
        stroke_align: outside
        text_style: B2/Medium
      - node_id: "I14398:1137543;10637:2655"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/TEXT:description"
        name: description
        type: TEXT
        text: If low, muscle cramps
        w: 342
        h: 22
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        font_size: 14
        font: Inter Regular
        stroke_align: outside
        text_style: B2/Regular
      - node_id: "I14398:1137543;10637:6620"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/INSTANCE:Progress"
        name: Progress
        type: INSTANCE
        instance_of: Property 1=bad
        w: 342
        h: 4
        stroke_align: inside
      - node_id: "I14398:1137543;10637:6620;10637:6598"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Progress/FRAME:Frame 313967"
        name: Frame 313967
        type: FRAME
        w: 188
        h: 4
        fill: "#EF4B23"
        radius: 40
        padding: 0
        gap: 180
        stroke_align: inside
      - node_id: "I14398:1137543;10637:6613"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Frame 313970/TEXT:description"
        name: description
        type: TEXT
        text: "Average:"
        w: 58
        h: 22
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        font_size: 14
        font: Inter Regular
        stroke_align: outside
        text_style: B2/Regular
      - node_id: "I14398:1137543;10637:6644"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Frame 313970/TEXT:description[2]"
        name: description
        type: TEXT
        text: 53mg / 100mg
        w: 97
        h: 22
        fill: mixed
        font_size: 14
        font: Inter Regular
        stroke_align: outside
      - node_id: "I14398:1137543;10653:11229"
        path_key: "root/Full Report/Frame 313971/card/FRAME:Frame 313976"
        name: Frame 313976
        type: FRAME
        w: 374
        h: 38
        fill: "#2F2F33"
        fill_ref: Default/Grey/grey-80
        padding: 8
        gap: 8
        stroke_align: inside
      - node_id: "I14398:1137543;10637:5290"
        path_key: "root/Full Report/Frame 313971/card/Frame 313976/TEXT:description"
        name: description
        type: TEXT
        text: Cramp episodes spike 25 %; strength dips 5 %.
        w: 342
        h: 22
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 14
        font: Inter Regular
        stroke_align: outside
        text_style: B2/Regular
      - node_id: "14398:1137544"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[2]"
        name: card
        type: INSTANCE
        instance_of: card
        children_text:
          - Calcium 😰
          - Why?
          - If low, cramps, weak lifts
          - "Average:"
          - 53mg / 100mg
          - Cramp risk doubles; lift capacity dips 5 %.
        w: 374
        h: 174
        fill: "#1C1C1E"
        fill_ref: Default/Grey/grey-90
        radius: 8
        padding: 0
        stroke_align: inside
  - chunk_id: anatomy_3
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Full Report/Frame 313971/INSTANCE:card[3]"
      - "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Frame 313970/TEXT:description[3]"
    node_ids:
      - "14398:1137545"
      - "14398:1137546"
      - "14398:1137547"
      - "14398:1137548"
      - "14398:1137549"
      - "14398:1137550"
      - "I14398:1137550;10653:11950"
      - "I14398:1137550;10637:2654"
      - "I14398:1137550;10648:9021"
      - "I14398:1137550;10637:2655"
      - "I14398:1137550;10637:6620"
      - "I14398:1137550;10637:6613"
    items:
      - node_id: "14398:1137545"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[3]"
        name: card
        type: INSTANCE
        instance_of: card
        children_text:
          - Vitamin E 😰
          - Why?
          - If low, muscle weakness, tingling
          - "Average:"
          - 53mg / 100mg
          - Grip weakness & tingling nerves 25 % more likely.
        w: 374
        h: 174
        fill: "#1C1C1E"
        fill_ref: Default/Grey/grey-90
        radius: 8
        padding: 0
        stroke_align: inside
      - node_id: "14398:1137546"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[4]"
        name: card
        type: INSTANCE
        instance_of: card
        children_text:
          - Zinc 😥
          - Why?
          - If low, muscle repair slow, low testosterone
          - "Average:"
          - 53mg / 100mg
          - Testosterone may fall 5–10 %; wounds heal 25 % slower.
        w: 374
        h: 196
        fill: "#1C1C1E"
        fill_ref: Default/Grey/grey-90
        radius: 8
        padding: 0
        stroke_align: inside
      - node_id: "14398:1137547"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[5]"
        name: card
        type: INSTANCE
        instance_of: card
        children_text:
          - Calcium 😥
          - Why?
          - If low, cramps, weak lifts
          - "Average:"
          - 53mg / 100mg
          - Cramp risk doubles; lift capacity dips 5 %.
        w: 374
        h: 174
        fill: "#1C1C1E"
        fill_ref: Default/Grey/grey-90
        radius: 8
        padding: 0
        stroke_align: inside
      - node_id: "14398:1137548"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[6]"
        name: card
        type: INSTANCE
        instance_of: card
        children_text:
          - Iron 😥
          - Why?
          - If low, low stamina, breath issue
          - "Average:"
          - 53mg / 100mg
          - Endurance drops 10 % from poor oxygen delivery.
        w: 374
        h: 174
        fill: "#1C1C1E"
        fill_ref: Default/Grey/grey-90
        radius: 8
        padding: 0
        stroke_align: inside
      - node_id: "14398:1137549"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[7]"
        name: card
        type: INSTANCE
        instance_of: card
        children_text:
          - Vitamin C 🙂
          - Why?
          - If low, slow muscle fix
          - "Average:"
          - 80mg / 150mg
          - Muscle fibre repair slows ~15 %, gains delayed.
        w: 374
        h: 174
        fill: "#1C1C1E"
        fill_ref: Default/Grey/grey-90
        radius: 8
        padding: 0
        stroke_align: inside
      - node_id: "14398:1137550"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[8]"
        name: card
        type: INSTANCE
        instance_of: card
        children_text:
          [Omega-3 😀, Why?, If low, more soreness, "Average:", 120mg / 100mg]
        w: 374
        h: 136
        fill: "#1C1C1E"
        fill_ref: Default/Grey/grey-90
        radius: 8
        padding: 0
        stroke_align: inside
      - node_id: "I14398:1137550;10653:11950"
        path_key: "root/Full Report/Frame 313971/card/FRAME:Frame 313977[2]"
        name: Frame 313977
        type: FRAME
        w: 374
        h: 136
        padding: 16
        gap: 16
        stroke_align: inside
      - node_id: "I14398:1137550;10637:2654"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/Frame 313974/TEXT:title[2]"
        name: title
        type: TEXT
        text: Omega-3 😀
        w: 296
        h: 24
        fill: "#FFFFFF"
        fill_ref: B1/Bold
        font_size: 16
        font: Inter Bold
        stroke_align: outside
        text_style: B1/Bold
      - node_id: "I14398:1137550;10648:9021"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/Frame 313974/TEXT:description[2]"
        name: description
        type: TEXT
        text: Why?
        w: 38
        h: 22
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 14
        font: Inter Medium
        stroke_align: outside
        text_style: B2/Medium
      - node_id: "I14398:1137550;10637:2655"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/TEXT:description[2]"
        name: description
        type: TEXT
        text: If low, more soreness
        w: 342
        h: 22
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        font_size: 14
        font: Inter Regular
        stroke_align: outside
        text_style: B2/Regular
      - node_id: "I14398:1137550;10637:6620"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/INSTANCE:Progress[2]"
        name: Progress
        type: INSTANCE
        instance_of: Property 1=good
        w: 342
        h: 4
        stroke_align: inside
      - node_id: "I14398:1137550;10637:6613"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Frame 313970/TEXT:description[3]"
        name: description
        type: TEXT
        text: "Average:"
        w: 58
        h: 22
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        font_size: 14
        font: Inter Regular
        stroke_align: outside
        text_style: B2/Regular
  - chunk_id: anatomy_4
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Frame 313970/TEXT:description[4]"
      - "root/Full Report/Frame 313971/card/FRAME:Frame 313977[3]"
    node_ids:
      - "I14398:1137550;10637:6644"
      - "14398:1137551"
      - "14398:1137552"
      - "14398:1137553"
      - "14398:1137554"
      - "14398:1137555"
      - "14398:1137556"
      - "14398:1137557"
      - "14398:1137558"
      - "14398:1137559"
      - "14398:1137560"
      - "14398:1137561"
    items:
      - node_id: "I14398:1137550;10637:6644"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Frame 313970/TEXT:description[4]"
        name: description
        type: TEXT
        text: 120mg / 100mg
        w: 104
        h: 22
        fill: mixed
        font_size: 14
        font: Inter Regular
        stroke_align: outside
      - node_id: "14398:1137551"
        path_key: "root/Full Report/Frame 313971/FRAME:Review"
        name: Review
        type: FRAME
        w: 374
        h: 182
        fill: "#1C1C1E"
        fill_ref: Default/Grey/grey-90
        radius: 8
        padding: 16
        gap: 16
        stroke_align: inside
      - node_id: "14398:1137552"
        path_key: "root/Full Report/Frame 313971/Review/FRAME:Frame 313816"
        name: Frame 313816
        type: FRAME
        w: 136
        h: 24
        padding: 0
        gap: 4
        stroke_align: inside
      - node_id: "14398:1137553"
        path_key: "root/Full Report/Frame 313971/Review/Frame 313816/INSTANCE:Star"
        name: Star
        type: INSTANCE
        instance_of: Star
        w: 24
        h: 24
        fill: "#FFFFFF"
        stroke_align: inside
      - node_id: "14398:1137554"
        path_key: "root/Full Report/Frame 313971/Review/Frame 313816/INSTANCE:Star[2]"
        name: Star
        type: INSTANCE
        instance_of: Star
        w: 24
        h: 24
        fill: "#FFFFFF"
        stroke_align: inside
      - node_id: "14398:1137555"
        path_key: "root/Full Report/Frame 313971/Review/Frame 313816/INSTANCE:Star[3]"
        name: Star
        type: INSTANCE
        instance_of: Star
        w: 24
        h: 24
        fill: "#FFFFFF"
        stroke_align: inside
      - node_id: "14398:1137556"
        path_key: "root/Full Report/Frame 313971/Review/Frame 313816/INSTANCE:Star[4]"
        name: Star
        type: INSTANCE
        instance_of: Star
        w: 24
        h: 24
        fill: "#FFFFFF"
        stroke_align: inside
      - node_id: "14398:1137557"
        path_key: "root/Full Report/Frame 313971/Review/Frame 313816/INSTANCE:Star[5]"
        name: Star
        type: INSTANCE
        instance_of: Star
        w: 24
        h: 24
        fill: "#FFFFFF"
        stroke_align: inside
      - node_id: "14398:1137558"
        path_key: "root/Full Report/Frame 313971/Review/TEXT:In just 7 days, I found something about my eating I’d never realized before, I finally got that actually makes sense for my lifestyle."
        name: In just 7 days, I found somethi…
        type: TEXT
        text: In just 7 days, I found something about my eating I’d never realized before, I …
        w: 342
        h: 72
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 16
        font: Inter Regular
        stroke_align: outside
        text_style: B1/Regular
      - node_id: "14398:1137559"
        path_key: "root/Full Report/Frame 313971/Review/TEXT:Jasmine, New York"
        name: Jasmine, New York
        type: TEXT
        text: Jasmine, New York
        w: 342
        h: 22
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        font_size: 14
        font: Inter Regular
        stroke_align: outside
        text_style: B2/Regular
      - node_id: "14398:1137560"
        path_key: "root/Full Report/Frame 313971/FRAME:card"
        name: card
        type: FRAME
        w: 374
        h: 176
        fill: "#254047"
        radius: 8
        padding: 0
        stroke: "#325761"
        stroke_align: inside
        stroke_sides: all
      - node_id: "14398:1137561"
        path_key: "root/Full Report/Frame 313971/card/FRAME:Frame 313977[3]"
        name: Frame 313977
        type: FRAME
        w: 374
        h: 176
        padding: 16
        gap: 16
        stroke_align: inside
  - chunk_id: anatomy_5
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Full Report/Frame 313971/card/Frame 313977/Frame 313979/TEXT:title"
      - "root/Full Report/Legend/Frame 314023/FRAME:rating"
    node_ids:
      - "14398:1137563"
      - "14398:1137564"
      - "14398:1137565"
      - "I14398:1137565;9959:501"
      - "I14398:1137565;9959:502"
      - "14398:1137566"
      - "14398:1137567"
      - "14398:1137568"
      - "14398:1137569"
      - "14398:1137570"
      - "14398:1137571"
      - "14398:1137572"
    items:
      - node_id: "14398:1137563"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313979/TEXT:title"
        name: title
        type: TEXT
        text: Boost your health report by 30% this week with small steps
        w: 342
        h: 60
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 20
        font: Inter Semi Bold
        stroke_align: outside
      - node_id: "14398:1137564"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313979/TEXT:title[2]"
        name: title
        type: TEXT
        text: Join 14,283 users already on a precision plan
        w: 342
        h: 22
        fill: "#CECED2"
        fill_ref: Default/Grey/grey-20
        font_size: 14
        font: Inter Regular
        stroke_align: outside
        text_style: B2/Regular
      - node_id: "14398:1137565"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/INSTANCE:Frame 313961"
        name: Frame 313961
        type: INSTANCE
        instance_of: Frame 313959
        children_text:
          [⚡ See Your Fix Plan (Premium)]
        w: 239
        h: 38
        fill: "#1C1C1E"
        fill_ref: Default/Grey/grey-90
        radius: 40
        padding: 0
        stroke: "#2F2F33"
        stroke_ref: Default/Grey/grey-80
        stroke_align: inside
        stroke_sides: all
      - node_id: "I14398:1137565;9959:501"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/FRAME:Button"
        name: Button
        type: FRAME
        w: 239
        h: 38
        padding: 8
        gap: 12
      - node_id: "I14398:1137565;9959:502"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/Button/TEXT:🥣 Breakfast"
        name: 🥣 Breakfast
        type: TEXT
        text: ⚡ See Your Fix Plan (Premium)
        w: 207
        h: 22
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 14
        font: Inter Medium
        stroke_align: outside
        text_style: B2/Medium
      - node_id: "14398:1137566"
        path_key: "root/Full Report/RECTANGLE:image"
        name: image
        type: RECTANGLE
        w: 413
        h: 251
        stroke_align: inside
      - node_id: "14398:1137567"
        path_key: "root/Full Report/FRAME:Legend"
        name: Legend
        type: FRAME
        w: 331
        h: 36
        padding: 8
        gap: 24
        stroke_align: inside
      - node_id: "14398:1137568"
        path_key: "root/Full Report/Legend/FRAME:Frame 314021"
        name: Frame 314021
        type: FRAME
        w: 72
        h: 20
        padding: 0
        gap: 8
        stroke_align: inside
      - node_id: "14398:1137569"
        path_key: "root/Full Report/Legend/Frame 314021/FRAME:rating"
        name: rating
        type: FRAME
        w: 13
        h: 12
        fill: "#0F8B50"
        radius: 8
        padding: 4
        gap: 8
        stroke_align: inside
      - node_id: "14398:1137570"
        path_key: "root/Full Report/Legend/Frame 314021/TEXT:Optimal"
        name: Optimal
        type: TEXT
        text: Optimal
        w: 51
        h: 20
        fill: "#D0D5DD"
        fill_ref: B2 14px/Regular
        font_size: 14
        font: Inter Regular
        stroke_align: outside
        text_style: B2 14px/Regular
      - node_id: "14398:1137571"
        path_key: "root/Full Report/Legend/FRAME:Frame 314023"
        name: Frame 314023
        type: FRAME
        w: 72
        h: 20
        padding: 0
        gap: 8
        stroke_align: inside
      - node_id: "14398:1137572"
        path_key: "root/Full Report/Legend/Frame 314023/FRAME:rating"
        name: rating
        type: FRAME
        w: 12
        h: 12
        fill: "#FECB27"
        radius: 8
        padding: 4
        gap: 8
        stroke_align: inside
  - chunk_id: anatomy_6
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Full Report/Legend/Frame 314023/TEXT:Caution"
      - "root/Full Report/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[5]"
    node_ids:
      - "14398:1137573"
      - "14398:1137574"
      - "14398:1137575"
      - "14398:1137576"
      - "14398:1137577"
      - "14398:1137578"
      - "I14398:1137578;302:12909"
      - "I14398:1137578;302:12909;28:4040"
      - "I14398:1137578;302:12909;28:4041"
      - "I14398:1137578;302:12909;28:4042"
      - "I14398:1137578;302:12909;28:4043"
      - "I14398:1137578;302:12909;28:4044"
    items:
      - node_id: "14398:1137573"
        path_key: "root/Full Report/Legend/Frame 314023/TEXT:Caution"
        name: Caution
        type: TEXT
        text: Caution
        w: 52
        h: 20
        fill: "#D0D5DD"
        fill_ref: B2 14px/Regular
        font_size: 14
        font: Inter Regular
        stroke_align: outside
        text_style: B2 14px/Regular
      - node_id: "14398:1137574"
        path_key: "root/Full Report/Legend/FRAME:Frame 314024"
        name: Frame 314024
        type: FRAME
        w: 80
        h: 20
        padding: 0
        gap: 8
        stroke_align: inside
      - node_id: "14398:1137575"
        path_key: "root/Full Report/Legend/Frame 314024/FRAME:rating"
        name: rating
        type: FRAME
        w: 12
        h: 12
        fill: "#EF4B23"
        radius: 8
        padding: 4
        gap: 8
        stroke_align: inside
      - node_id: "14398:1137576"
        path_key: "root/Full Report/Legend/Frame 314024/TEXT:Deficient"
        name: Deficient
        type: TEXT
        text: Deficient
        w: 60
        h: 20
        fill: "#D0D5DD"
        fill_ref: B2 14px/Regular
        font_size: 14
        font: Inter Regular
        stroke_align: outside
        text_style: B2 14px/Regular
      - node_id: "14398:1137577"
        path_key: "root/Full Report/FRAME:Bottom Nav"
        name: Bottom Nav
        type: FRAME
        w: 414
        h: 96
        fill: "#1C1C1E"
        fill_ref: Default/Grey/grey-90
        padding: 0
        stroke: "#2F2F33"
        stroke_ref: Default/Grey/grey-80
        stroke_align: inside
        stroke_sides: "top: 1px"
      - node_id: "14398:1137578"
        path_key: "root/Full Report/Bottom Nav/INSTANCE:Bottom Nav-item"
        name: Bottom Nav-item
        type: INSTANCE
        instance_of: Status=Inactive
        children_text:
          [Meals]
        w: 69
        h: 96
        padding: 12
        gap: 4
        stroke_align: inside
      - node_id: "I14398:1137578;302:12909"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/INSTANCE:CookingPot"
        name: CookingPot
        type: INSTANCE
        instance_of: CookingPot
        w: 24
        h: 24
        fill: "#929299"
        stroke_align: inside
      - node_id: "I14398:1137578;302:12909;28:4040"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector"
        name: Vector
        type: VECTOR
        w: 24
        h: 24
        stroke_align: inside
      - node_id: "I14398:1137578;302:12909;28:4041"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[2]"
        name: Vector
        type: VECTOR
        w: 0
        h: 3
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137578;302:12909;28:4042"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[3]"
        name: Vector
        type: VECTOR
        w: 0
        h: 3
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137578;302:12909;28:4043"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[4]"
        name: Vector
        type: VECTOR
        w: 0
        h: 3
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137578;302:12909;28:4044"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[5]"
        name: Vector
        type: VECTOR
        w: 17
        h: 12
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
  - chunk_id: anatomy_7
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Full Report/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[6]"
      - "root/Full Report/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector[7]"
    node_ids:
      - "I14398:1137578;302:12909;28:4045"
      - "I14398:1137578;302:12909;28:4046"
      - "I14398:1137578;302:12910"
      - "14398:1137579"
      - "I14398:1137579;302:12909"
      - "I14398:1137579;302:12909;28:4560"
      - "I14398:1137579;302:12909;28:4561"
      - "I14398:1137579;302:12909;28:4562"
      - "I14398:1137579;302:12909;28:4563"
      - "I14398:1137579;302:12909;28:4564"
      - "I14398:1137579;302:12909;28:4565"
      - "I14398:1137579;302:12909;28:4566"
    items:
      - node_id: "I14398:1137578;302:12909;28:4045"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[6]"
        name: Vector
        type: VECTOR
        w: 3
        h: 2
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137578;302:12909;28:4046"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/CookingPot/VECTOR:Vector[7]"
        name: Vector
        type: VECTOR
        w: 3
        h: 2
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137578;302:12910"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/TEXT:Home"
        name: Home
        type: TEXT
        text: Meals
        w: 69
        h: 20
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        font_size: 12
        font: Inter Medium
        stroke_align: outside
        text_style: B3/Medium
      - node_id: "14398:1137579"
        path_key: "root/Full Report/Bottom Nav/INSTANCE:Bottom Nav-item[2]"
        name: Bottom Nav-item
        type: INSTANCE
        instance_of: Status=Inactive
        children_text:
          [Diet Plan]
        w: 69
        h: 96
        padding: 12
        gap: 4
        stroke_align: inside
      - node_id: "I14398:1137579;302:12909"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/INSTANCE:Calendar"
        name: Calendar
        type: INSTANCE
        instance_of: Calendar
        w: 24
        h: 24
        fill: "#929299"
        stroke_align: inside
      - node_id: "I14398:1137579;302:12909;28:4560"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector"
        name: Vector
        type: VECTOR
        w: 24
        h: 24
        stroke_align: inside
      - node_id: "I14398:1137579;302:12909;28:4561"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector[2]"
        name: Vector
        type: VECTOR
        w: 17
        h: 17
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137579;302:12909;28:4562"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector[3]"
        name: Vector
        type: VECTOR
        w: 0
        h: 3
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137579;302:12909;28:4563"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector[4]"
        name: Vector
        type: VECTOR
        w: 0
        h: 3
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137579;302:12909;28:4564"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector[5]"
        name: Vector
        type: VECTOR
        w: 17
        h: 0
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137579;302:12909;28:4565"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector[6]"
        name: Vector
        type: VECTOR
        w: 3
        h: 5
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137579;302:12909;28:4566"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/Calendar/VECTOR:Vector[7]"
        name: Vector
        type: VECTOR
        w: 2
        h: 5
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
  - chunk_id: anatomy_8
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Full Report/Bottom Nav/Bottom Nav-item/TEXT:Home[2]"
      - "root/Full Report/Bottom Nav/INSTANCE:Bottom Nav-item[4]"
    node_ids:
      - "I14398:1137579;302:12910"
      - "14398:1137580"
      - "I14398:1137580;302:10361"
      - "I14398:1137580;302:10361;28:836"
      - "I14398:1137580;302:10361;28:837"
      - "I14398:1137580;302:10361;28:838"
      - "I14398:1137580;302:10361;28:839"
      - "I14398:1137580;302:10361;28:840"
      - "I14398:1137580;302:10361;28:841"
      - "I14398:1137580;302:10361;28:842"
      - "I14398:1137580;302:12893"
      - "14398:1137581"
    items:
      - node_id: "I14398:1137579;302:12910"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/TEXT:Home[2]"
        name: Home
        type: TEXT
        text: Diet Plan
        w: 69
        h: 20
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        font_size: 12
        font: Inter Medium
        stroke_align: outside
        text_style: B3/Medium
      - node_id: "14398:1137580"
        path_key: "root/Full Report/Bottom Nav/INSTANCE:Bottom Nav-item[3]"
        name: Bottom Nav-item
        type: INSTANCE
        instance_of: Status=Active
        children_text:
          [Club]
        w: 69
        h: 96
        padding: 12
        gap: 4
        stroke_align: inside
      - node_id: "I14398:1137580;302:10361"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/INSTANCE:UsersThree"
        name: UsersThree
        type: INSTANCE
        instance_of: UsersThree
        w: 24
        h: 24
        fill: "#929299"
        stroke_align: inside
      - node_id: "I14398:1137580;302:10361;28:836"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/UsersThree/VECTOR:Vector"
        name: Vector
        type: VECTOR
        w: 24
        h: 24
        stroke_align: inside
      - node_id: "I14398:1137580;302:10361;28:837"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/UsersThree/VECTOR:Vector[2]"
        name: Vector
        type: VECTOR
        w: 8
        h: 8
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137580;302:10361;28:838"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/UsersThree/VECTOR:Vector[3]"
        name: Vector
        type: VECTOR
        w: 5
        h: 2
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137580;302:10361;28:839"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/UsersThree/VECTOR:Vector[4]"
        name: Vector
        type: VECTOR
        w: 5
        h: 2
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137580;302:10361;28:840"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/UsersThree/VECTOR:Vector[5]"
        name: Vector
        type: VECTOR
        w: 11
        h: 3
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137580;302:10361;28:841"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/UsersThree/VECTOR:Vector[6]"
        name: Vector
        type: VECTOR
        w: 6
        h: 6
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137580;302:10361;28:842"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/UsersThree/VECTOR:Vector[7]"
        name: Vector
        type: VECTOR
        w: 6
        h: 6
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137580;302:12893"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/TEXT:Home[3]"
        name: Home
        type: TEXT
        text: Club
        w: 69
        h: 20
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        font_size: 12
        font: Inter Medium
        stroke_align: outside
        text_style: B3/Medium
      - node_id: "14398:1137581"
        path_key: "root/Full Report/Bottom Nav/INSTANCE:Bottom Nav-item[4]"
        name: Bottom Nav-item
        type: INSTANCE
        instance_of: Status=Active
        children_text:
          [Report]
        w: 69
        h: 96
        padding: 12
        gap: 4
        stroke_align: inside
  - chunk_id: anatomy_9
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Full Report/Bottom Nav/Bottom Nav-item/INSTANCE:ChartLineUp"
      - "root/Full Report/Bottom Nav/Bottom Nav-item/Cookie/VECTOR:Vector[6]"
    node_ids:
      - "I14398:1137581;302:10361"
      - "I14398:1137581;302:10361;28:7782"
      - "I14398:1137581;302:10361;28:7783"
      - "I14398:1137581;302:12893"
      - "14398:1137582"
      - "I14398:1137582;302:12909"
      - "I14398:1137582;302:12909;28:4048"
      - "I14398:1137582;302:12909;28:4049"
      - "I14398:1137582;302:12909;28:4050"
      - "I14398:1137582;302:12909;28:4051"
      - "I14398:1137582;302:12909;28:4052"
      - "I14398:1137582;302:12909;28:4053"
    items:
      - node_id: "I14398:1137581;302:10361"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/INSTANCE:ChartLineUp"
        name: ChartLineUp
        type: INSTANCE
        instance_of: ChartLineUp
        w: 24
        h: 24
        fill: "#FFFFFF"
        stroke_align: inside
      - node_id: "I14398:1137581;302:10361;28:7782"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/ChartLineUp/VECTOR:Vector"
        name: Vector
        type: VECTOR
        w: 24
        h: 24
        stroke_align: inside
      - node_id: "I14398:1137581;302:10361;28:7783"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/ChartLineUp/VECTOR:Vector[2]"
        name: Vector
        type: VECTOR
        w: 20
        h: 17
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        stroke_align: inside
      - node_id: "I14398:1137581;302:12893"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/TEXT:Home[4]"
        name: Home
        type: TEXT
        text: Report
        w: 69
        h: 20
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 12
        font: Inter Bold
        stroke_align: outside
        text_style: B3/Bold
      - node_id: "14398:1137582"
        path_key: "root/Full Report/Bottom Nav/INSTANCE:Bottom Nav-item[5]"
        name: Bottom Nav-item
        type: INSTANCE
        instance_of: Status=Inactive
        children_text:
          [NutriBites]
        w: 69
        h: 96
        padding: 12
        gap: 4
        stroke_align: inside
      - node_id: "I14398:1137582;302:12909"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/INSTANCE:Cookie"
        name: Cookie
        type: INSTANCE
        instance_of: Cookie
        w: 24
        h: 24
        fill: "#929299"
        stroke_align: inside
      - node_id: "I14398:1137582;302:12909;28:4048"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/Cookie/VECTOR:Vector"
        name: Vector
        type: VECTOR
        w: 24
        h: 24
        stroke_align: inside
      - node_id: "I14398:1137582;302:12909;28:4049"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/Cookie/VECTOR:Vector[2]"
        name: Vector
        type: VECTOR
        w: 18
        h: 18
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137582;302:12909;28:4050"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/Cookie/VECTOR:Vector[3]"
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
      - node_id: "I14398:1137582;302:12909;28:4051"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/Cookie/VECTOR:Vector[4]"
        name: Vector
        type: VECTOR
        w: 2
        h: 2
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        stroke_align: inside
      - node_id: "I14398:1137582;302:12909;28:4052"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/Cookie/VECTOR:Vector[5]"
        name: Vector
        type: VECTOR
        w: 2
        h: 2
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        stroke_align: inside
      - node_id: "I14398:1137582;302:12909;28:4053"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/Cookie/VECTOR:Vector[6]"
        name: Vector
        type: VECTOR
        w: 2
        h: 2
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        stroke_align: inside
  - chunk_id: anatomy_10
    kind: anatomy
    item_count: 12
    path_range:
      - "root/Full Report/Bottom Nav/Bottom Nav-item/TEXT:Home[5]"
      - "root/Full Report/Frame 408/Status Bar/Frame 301/BOOLEAN_OPERATION:Cellular Connection"
    node_ids:
      - "I14398:1137582;302:12910"
      - "14398:1137583"
      - "I14398:1137583;302:12909"
      - "I14398:1137583;302:12909;28:937"
      - "I14398:1137583;302:12909;28:938"
      - "I14398:1137583;302:12909;28:939"
      - "I14398:1137583;302:12910"
      - "14398:1137584"
      - "14398:1137585"
      - "I14398:1137585;40:2108"
      - "I14398:1137585;40:2109"
      - "I14398:1137585;40:2102"
    items:
      - node_id: "I14398:1137582;302:12910"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/TEXT:Home[5]"
        name: Home
        type: TEXT
        text: NutriBites
        w: 69
        h: 20
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        font_size: 12
        font: Inter Medium
        stroke_align: outside
        text_style: B3/Medium
      - node_id: "14398:1137583"
        path_key: "root/Full Report/Bottom Nav/INSTANCE:Bottom Nav-item[6]"
        name: Bottom Nav-item
        type: INSTANCE
        instance_of: Status=Inactive
        children_text:
          [Profile]
        w: 69
        h: 96
        padding: 12
        gap: 4
        stroke_align: inside
      - node_id: "I14398:1137583;302:12909"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/INSTANCE:User"
        name: User
        type: INSTANCE
        instance_of: User
        w: 24
        h: 24
        fill: "#929299"
        stroke_align: inside
      - node_id: "I14398:1137583;302:12909;28:937"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/User/VECTOR:Vector"
        name: Vector
        type: VECTOR
        w: 24
        h: 24
        stroke_align: inside
      - node_id: "I14398:1137583;302:12909;28:938"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/User/VECTOR:Vector[2]"
        name: Vector
        type: VECTOR
        w: 12
        h: 12
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137583;302:12909;28:939"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/User/VECTOR:Vector[3]"
        name: Vector
        type: VECTOR
        w: 18
        h: 5
        stroke: "#929299"
        stroke_ref: Default/Grey/grey-40
        stroke_sides: all
      - node_id: "I14398:1137583;302:12910"
        path_key: "root/Full Report/Bottom Nav/Bottom Nav-item/TEXT:Home[6]"
        name: Home
        type: TEXT
        text: Profile
        w: 69
        h: 20
        fill: "#929299"
        fill_ref: Default/Grey/grey-40
        font_size: 12
        font: Inter Medium
        stroke_align: outside
        text_style: B3/Medium
      - node_id: "14398:1137584"
        path_key: "root/Full Report/FRAME:Frame 408"
        name: Frame 408
        type: FRAME
        w: 414
        h: 44
        fill: "#0C0C0C"
        fill_ref: Default/Grey/grey-100
        padding: 0
        stroke_align: inside
      - node_id: "14398:1137585"
        path_key: "root/Full Report/Frame 408/INSTANCE:Status Bar"
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
      - node_id: "I14398:1137585;40:2108"
        path_key: "root/Full Report/Frame 408/Status Bar/TEXT:Time"
        name: Time
        type: TEXT
        text: "9:41"
        w: 54
        h: 20
        fill: "#FFFFFF"
        fill_ref: Default/White/white
        font_size: 15
        font: SF Pro Text Semibold
      - node_id: "I14398:1137585;40:2109"
        path_key: "root/Full Report/Frame 408/Status Bar/FRAME:Frame 301"
        name: Frame 301
        type: FRAME
        w: 66
        h: 11
        padding: 0
        gap: 5
        stroke_align: inside
      - node_id: "I14398:1137585;40:2102"
        path_key: "root/Full Report/Frame 408/Status Bar/Frame 301/BOOLEAN_OPERATION:Cellular Connection"
        name: Cellular Connection
        type: BOOLEAN_OPERATION
        w: 17
        h: 11
        fill: "#FFFFFF"
        fill_ref: Default/White/white
  - chunk_id: anatomy_11
    kind: anatomy
    item_count: 1
    path_range:
      - "root/Full Report/Frame 408/Status Bar/Frame 301/BOOLEAN_OPERATION:Wifi"
      - "root/Full Report/Frame 408/Status Bar/Frame 301/BOOLEAN_OPERATION:Wifi"
    node_ids:
      ["I14398:1137585;40:2098"]
    items:
      - node_id: "I14398:1137585;40:2098"
        path_key: "root/Full Report/Frame 408/Status Bar/Frame 301/BOOLEAN_OPERATION:Wifi"
        name: Wifi
        type: BOOLEAN_OPERATION
        w: 15
        h: 11
        fill: "#FFFFFF"
        fill_ref: Default/White/white
  - chunk_id: layout_1
    kind: layout
    item_count: 12
    path_range:
      - "root/FRAME:Full Report"
      - "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/FRAME:Frame 313974"
    node_ids:
      - "14398:1137535"
      - "14398:1137536"
      - "14398:1137537"
      - "14398:1137538"
      - "14398:1137540"
      - "I14398:1137540;9959:501"
      - "I14398:1137540;9959:503"
      - "14398:1137542"
      - "14398:1137543"
      - "I14398:1137543;10653:11950"
      - "I14398:1137543;10637:2653"
      - "I14398:1137543;10648:8993"
    items:
      - node_id: "14398:1137535"
        path_key: "root/FRAME:Full Report"
        name: Full Report
        type: FRAME
        direction: column
        gap: 359
        align: INFERRED / INFERRED
        sizing: FIXED / FIXED
        clips: true
        inferred: true
      - node_id: "14398:1137536"
        path_key: "root/Full Report/FRAME:Frame 313966"
        name: Frame 313966
        type: FRAME
        direction: column
        gap: 0
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "14398:1137537"
        path_key: "root/Full Report/Frame 313966/FRAME:Frame 19455"
        name: Frame 19455
        type: FRAME
        direction: column
        gap: 12
        align: CENTER / MIN
        sizing: AUTO / FIXED
        padding:
          left: 20
          right: 20
          top: 24
          bottom: 16
      - node_id: "14398:1137538"
        path_key: "root/Full Report/Frame 313966/Frame 19455/FRAME:Frame 313972"
        name: Frame 313972
        type: FRAME
        direction: row
        gap: 16
        align: MIN / MIN
        sizing: FIXED / AUTO
      - node_id: "14398:1137540"
        path_key: "root/Full Report/Frame 313966/Frame 19455/Frame 313972/INSTANCE:Frame 313961"
        name: Frame 313961
        type: INSTANCE
        direction: row
        gap: 0
        align: CENTER / CENTER
        sizing: AUTO / AUTO
      - node_id: "I14398:1137540;9959:501"
        path_key: "root/Full Report/Frame 313966/Frame 19455/Frame 313972/Frame 313961/FRAME:Button"
        name: Button
        type: FRAME
        direction: row
        gap: 12
        align: CENTER / CENTER
        sizing: AUTO / FIXED
        padding:
          left: 12
          right: 0
          top: 6
          bottom: 6
      - node_id: "I14398:1137540;9959:503"
        path_key: "root/Full Report/Frame 313966/Frame 19455/Frame 313972/Frame 313961/FRAME:Button[2]"
        name: Button
        type: FRAME
        direction: row
        gap: 12
        align: CENTER / CENTER
        sizing: AUTO / FIXED
        padding:
          left: 8
          right: 12
          top: 6
          bottom: 6
      - node_id: "14398:1137542"
        path_key: "root/Full Report/FRAME:Frame 313971"
        name: Frame 313971
        type: FRAME
        direction: column
        gap: 16
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "14398:1137543"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card"
        name: card
        type: INSTANCE
        direction: column
        gap: 0
        align: CENTER / MIN
        sizing: AUTO / FIXED
        clips: true
      - node_id: "I14398:1137543;10653:11950"
        path_key: "root/Full Report/Frame 313971/card/FRAME:Frame 313977"
        name: Frame 313977
        type: FRAME
        direction: column
        gap: 16
        align: MIN / MIN
        sizing: AUTO / FIXED
        padding:
          left: 16
          right: 16
          top: 16
          bottom: 16
      - node_id: "I14398:1137543;10637:2653"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/FRAME:Frame 313961"
        name: Frame 313961
        type: FRAME
        direction: column
        gap: 8
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "I14398:1137543;10648:8993"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/FRAME:Frame 313974"
        name: Frame 313974
        type: FRAME
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
  - chunk_id: layout_2
    kind: layout
    item_count: 12
    path_range:
      - "root/Full Report/Frame 313971/card/Frame 313977/FRAME:Frame 313968"
      - "root/Full Report/Frame 313971/card/FRAME:Frame 313976[2]"
    node_ids:
      - "I14398:1137543;10637:6614"
      - "I14398:1137543;10637:6620;10637:6598"
      - "I14398:1137543;10637:6645"
      - "I14398:1137543;10653:11229"
      - "14398:1137544"
      - "I14398:1137544;10653:11950"
      - "I14398:1137544;10637:2653"
      - "I14398:1137544;10648:8993"
      - "I14398:1137544;10637:6614"
      - "I14398:1137544;10637:6620;10637:6598"
      - "I14398:1137544;10637:6645"
      - "I14398:1137544;10653:11229"
    items:
      - node_id: "I14398:1137543;10637:6614"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/FRAME:Frame 313968"
        name: Frame 313968
        type: FRAME
        direction: column
        gap: 8
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "I14398:1137543;10637:6620;10637:6598"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Progress/FRAME:Frame 313967"
        name: Frame 313967
        type: FRAME
        direction: row
        gap: 180
        align: MIN / CENTER
        sizing: AUTO / AUTO
      - node_id: "I14398:1137543;10637:6645"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/FRAME:Frame 313970"
        name: Frame 313970
        type: FRAME
        direction: row
        gap: 8
        align: MAX / CENTER
        sizing: FIXED / AUTO
      - node_id: "I14398:1137543;10653:11229"
        path_key: "root/Full Report/Frame 313971/card/FRAME:Frame 313976"
        name: Frame 313976
        type: FRAME
        direction: row
        gap: 8
        align: CENTER / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 16
          right: 16
          top: 8
          bottom: 8
        clips: true
      - node_id: "14398:1137544"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[2]"
        name: card
        type: INSTANCE
        direction: column
        gap: 0
        align: CENTER / MIN
        sizing: AUTO / FIXED
        clips: true
      - node_id: "I14398:1137544;10653:11950"
        path_key: "root/Full Report/Frame 313971/card/FRAME:Frame 313977[2]"
        name: Frame 313977
        type: FRAME
        direction: column
        gap: 16
        align: MIN / MIN
        sizing: AUTO / FIXED
        padding:
          left: 16
          right: 16
          top: 16
          bottom: 16
      - node_id: "I14398:1137544;10637:2653"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/FRAME:Frame 313961[2]"
        name: Frame 313961
        type: FRAME
        direction: column
        gap: 8
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "I14398:1137544;10648:8993"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/FRAME:Frame 313974[2]"
        name: Frame 313974
        type: FRAME
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "I14398:1137544;10637:6614"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/FRAME:Frame 313968[2]"
        name: Frame 313968
        type: FRAME
        direction: column
        gap: 8
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "I14398:1137544;10637:6620;10637:6598"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Progress/FRAME:Frame 313967[2]"
        name: Frame 313967
        type: FRAME
        direction: row
        gap: 180
        align: MIN / CENTER
        sizing: AUTO / AUTO
      - node_id: "I14398:1137544;10637:6645"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/FRAME:Frame 313970[2]"
        name: Frame 313970
        type: FRAME
        direction: row
        gap: 8
        align: MAX / CENTER
        sizing: FIXED / AUTO
      - node_id: "I14398:1137544;10653:11229"
        path_key: "root/Full Report/Frame 313971/card/FRAME:Frame 313976[2]"
        name: Frame 313976
        type: FRAME
        direction: row
        gap: 8
        align: CENTER / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 16
          right: 16
          top: 8
          bottom: 8
        clips: true
  - chunk_id: layout_3
    kind: layout
    item_count: 12
    path_range:
      - "root/Full Report/Frame 313971/INSTANCE:card[3]"
      - "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/FRAME:Frame 313974[4]"
    node_ids:
      - "14398:1137545"
      - "I14398:1137545;10653:11950"
      - "I14398:1137545;10637:2653"
      - "I14398:1137545;10648:8993"
      - "I14398:1137545;10637:6614"
      - "I14398:1137545;10637:6620;10637:6598"
      - "I14398:1137545;10637:6645"
      - "I14398:1137545;10653:11229"
      - "14398:1137546"
      - "I14398:1137546;10653:11950"
      - "I14398:1137546;10637:2653"
      - "I14398:1137546;10648:8993"
    items:
      - node_id: "14398:1137545"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[3]"
        name: card
        type: INSTANCE
        direction: column
        gap: 0
        align: CENTER / MIN
        sizing: AUTO / FIXED
        clips: true
      - node_id: "I14398:1137545;10653:11950"
        path_key: "root/Full Report/Frame 313971/card/FRAME:Frame 313977[3]"
        name: Frame 313977
        type: FRAME
        direction: column
        gap: 16
        align: MIN / MIN
        sizing: AUTO / FIXED
        padding:
          left: 16
          right: 16
          top: 16
          bottom: 16
      - node_id: "I14398:1137545;10637:2653"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/FRAME:Frame 313961[3]"
        name: Frame 313961
        type: FRAME
        direction: column
        gap: 8
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "I14398:1137545;10648:8993"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/FRAME:Frame 313974[3]"
        name: Frame 313974
        type: FRAME
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "I14398:1137545;10637:6614"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/FRAME:Frame 313968[3]"
        name: Frame 313968
        type: FRAME
        direction: column
        gap: 8
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "I14398:1137545;10637:6620;10637:6598"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Progress/FRAME:Frame 313967[3]"
        name: Frame 313967
        type: FRAME
        direction: row
        gap: 180
        align: MIN / CENTER
        sizing: AUTO / AUTO
      - node_id: "I14398:1137545;10637:6645"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/FRAME:Frame 313970[3]"
        name: Frame 313970
        type: FRAME
        direction: row
        gap: 8
        align: MAX / CENTER
        sizing: FIXED / AUTO
      - node_id: "I14398:1137545;10653:11229"
        path_key: "root/Full Report/Frame 313971/card/FRAME:Frame 313976[3]"
        name: Frame 313976
        type: FRAME
        direction: row
        gap: 8
        align: CENTER / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 16
          right: 16
          top: 8
          bottom: 8
        clips: true
      - node_id: "14398:1137546"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[4]"
        name: card
        type: INSTANCE
        direction: column
        gap: 0
        align: CENTER / MIN
        sizing: AUTO / FIXED
        clips: true
      - node_id: "I14398:1137546;10653:11950"
        path_key: "root/Full Report/Frame 313971/card/FRAME:Frame 313977[4]"
        name: Frame 313977
        type: FRAME
        direction: column
        gap: 16
        align: MIN / MIN
        sizing: AUTO / FIXED
        padding:
          left: 16
          right: 16
          top: 16
          bottom: 16
      - node_id: "I14398:1137546;10637:2653"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/FRAME:Frame 313961[4]"
        name: Frame 313961
        type: FRAME
        direction: column
        gap: 8
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "I14398:1137546;10648:8993"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/FRAME:Frame 313974[4]"
        name: Frame 313974
        type: FRAME
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
  - chunk_id: layout_4
    kind: layout
    item_count: 12
    path_range:
      - "root/Full Report/Frame 313971/card/Frame 313977/FRAME:Frame 313968[4]"
      - "root/Full Report/Frame 313971/card/FRAME:Frame 313976[5]"
    node_ids:
      - "I14398:1137546;10637:6614"
      - "I14398:1137546;10637:6620;10637:6598"
      - "I14398:1137546;10637:6645"
      - "I14398:1137546;10653:11229"
      - "14398:1137547"
      - "I14398:1137547;10653:11950"
      - "I14398:1137547;10637:2653"
      - "I14398:1137547;10648:8993"
      - "I14398:1137547;10637:6614"
      - "I14398:1137547;10637:6620;10637:6598"
      - "I14398:1137547;10637:6645"
      - "I14398:1137547;10653:11229"
    items:
      - node_id: "I14398:1137546;10637:6614"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/FRAME:Frame 313968[4]"
        name: Frame 313968
        type: FRAME
        direction: column
        gap: 8
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "I14398:1137546;10637:6620;10637:6598"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Progress/FRAME:Frame 313967[4]"
        name: Frame 313967
        type: FRAME
        direction: row
        gap: 180
        align: MIN / CENTER
        sizing: AUTO / AUTO
      - node_id: "I14398:1137546;10637:6645"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/FRAME:Frame 313970[4]"
        name: Frame 313970
        type: FRAME
        direction: row
        gap: 8
        align: MAX / CENTER
        sizing: FIXED / AUTO
      - node_id: "I14398:1137546;10653:11229"
        path_key: "root/Full Report/Frame 313971/card/FRAME:Frame 313976[4]"
        name: Frame 313976
        type: FRAME
        direction: row
        gap: 8
        align: CENTER / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 16
          right: 16
          top: 8
          bottom: 8
        clips: true
      - node_id: "14398:1137547"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[5]"
        name: card
        type: INSTANCE
        direction: column
        gap: 0
        align: CENTER / MIN
        sizing: AUTO / FIXED
        clips: true
      - node_id: "I14398:1137547;10653:11950"
        path_key: "root/Full Report/Frame 313971/card/FRAME:Frame 313977[5]"
        name: Frame 313977
        type: FRAME
        direction: column
        gap: 16
        align: MIN / MIN
        sizing: AUTO / FIXED
        padding:
          left: 16
          right: 16
          top: 16
          bottom: 16
      - node_id: "I14398:1137547;10637:2653"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/FRAME:Frame 313961[5]"
        name: Frame 313961
        type: FRAME
        direction: column
        gap: 8
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "I14398:1137547;10648:8993"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313961/FRAME:Frame 313974[5]"
        name: Frame 313974
        type: FRAME
        direction: row
        gap: 8
        align: MIN / CENTER
        sizing: FIXED / AUTO
      - node_id: "I14398:1137547;10637:6614"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/FRAME:Frame 313968[5]"
        name: Frame 313968
        type: FRAME
        direction: column
        gap: 8
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "I14398:1137547;10637:6620;10637:6598"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/Progress/FRAME:Frame 313967[5]"
        name: Frame 313967
        type: FRAME
        direction: row
        gap: 180
        align: MIN / CENTER
        sizing: AUTO / AUTO
      - node_id: "I14398:1137547;10637:6645"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/FRAME:Frame 313970[5]"
        name: Frame 313970
        type: FRAME
        direction: row
        gap: 8
        align: MAX / CENTER
        sizing: FIXED / AUTO
      - node_id: "I14398:1137547;10653:11229"
        path_key: "root/Full Report/Frame 313971/card/FRAME:Frame 313976[5]"
        name: Frame 313976
        type: FRAME
        direction: row
        gap: 8
        align: CENTER / CENTER
        sizing: FIXED / AUTO
        padding:
          left: 16
          right: 16
          top: 8
          bottom: 8
        clips: true
  - chunk_id: layout_5
    kind: layout
    item_count: 2
    path_range:
      - "root/Full Report/Frame 313971/INSTANCE:card[6]"
      - "root/Full Report/Frame 313971/card/FRAME:Frame 313977[6]"
    node_ids:
      ["14398:1137548", "I14398:1137548;10653:11950"]
    items:
      - node_id: "14398:1137548"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[6]"
        name: card
        type: INSTANCE
        direction: column
        gap: 0
        align: CENTER / MIN
        sizing: AUTO / FIXED
        clips: true
      - node_id: "I14398:1137548;10653:11950"
        path_key: "root/Full Report/Frame 313971/card/FRAME:Frame 313977[6]"
        name: Frame 313977
        type: FRAME
        direction: column
        gap: 16
        align: MIN / MIN
        sizing: AUTO / FIXED
        padding:
          left: 16
          right: 16
          top: 16
          bottom: 16
  - chunk_id: repeats_1
    kind: repeats
    template_node_id: "14398:1137543"
    template_path_key: "root/Full Report/Frame 313971/INSTANCE:card"
    instance_of: card
    repeat_count: 6
    varying_keys:
      [card/Frame 313976/description/text]
    items:
      - node_id: "14398:1137544"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[2]"
        diffs:
          card/Frame 313976/description/text: Cramp risk doubles; lift capacity dips 5 %.
        children_text:
          - Calcium 😰
          - Why?
          - If low, cramps, weak lifts
          - "Average:"
          - 53mg / 100mg
          - Cramp risk doubles; lift capacity dips 5 %.
      - node_id: "14398:1137545"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[3]"
        diffs:
          card/Frame 313976/description/text: Grip weakness & tingling nerves 25 % more likely.
        children_text:
          - Vitamin E 😰
          - Why?
          - If low, muscle weakness, tingling
          - "Average:"
          - 53mg / 100mg
          - Grip weakness & tingling nerves 25 % more likely.
      - node_id: "14398:1137546"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[4]"
        diffs:
          card/Frame 313976/description/text: Testosterone may fall 5–10 %; wounds heal 25 % slower.
        children_text:
          - Zinc 😥
          - Why?
          - If low, muscle repair slow, low testosterone
          - "Average:"
          - 53mg / 100mg
          - Testosterone may fall 5–10 %; wounds heal 25 % slower.
      - node_id: "14398:1137547"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[5]"
        diffs:
          card/Frame 313976/description/text: Cramp risk doubles; lift capacity dips 5 %.
        children_text:
          - Calcium 😥
          - Why?
          - If low, cramps, weak lifts
          - "Average:"
          - 53mg / 100mg
          - Cramp risk doubles; lift capacity dips 5 %.
      - node_id: "14398:1137548"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[6]"
        diffs:
          card/Frame 313976/description/text: Endurance drops 10 % from poor oxygen delivery.
        children_text:
          - Iron 😥
          - Why?
          - If low, low stamina, breath issue
          - "Average:"
          - 53mg / 100mg
          - Endurance drops 10 % from poor oxygen delivery.
      - node_id: "14398:1137549"
        path_key: "root/Full Report/Frame 313971/INSTANCE:card[7]"
        diffs:
          card/Frame 313976/description/text: Muscle fibre repair slows ~15 %, gains delayed.
        children_text:
          - Vitamin C 🙂
          - Why?
          - If low, slow muscle fix
          - "Average:"
          - 80mg / 150mg
          - Muscle fibre repair slows ~15 %, gains delayed.
  - chunk_id: repeats_2
    kind: repeats
    template_node_id: "I14398:1137543;10637:6620"
    template_path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/INSTANCE:Progress"
    instance_of: Property 1=bad
    repeat_count: 1
    varying_keys:
      [Progress/Frame 313967/fill, Progress/Frame 313967/width]
    items:
      - node_id: "I14398:1137550;10637:6620"
        path_key: "root/Full Report/Frame 313971/card/Frame 313977/Frame 313968/INSTANCE:Progress[2]"
        diffs:
          Progress/Frame 313967/fill: "#41D9B3"
          Progress/Frame 313967/width: "342"
  - chunk_id: repeats_3
    kind: repeats
    template_node_id: "14398:1137553"
    template_path_key: "root/Full Report/Frame 313971/Review/Frame 313816/INSTANCE:Star"
    instance_of: Star
    repeat_count: 4
    varying_keys:
      []
    items:
      - node_id: "14398:1137554"
        path_key: "root/Full Report/Frame 313971/Review/Frame 313816/INSTANCE:Star[2]"
        diffs:
          {}
      - node_id: "14398:1137555"
        path_key: "root/Full Report/Frame 313971/Review/Frame 313816/INSTANCE:Star[3]"
        diffs:
          {}
      - node_id: "14398:1137556"
        path_key: "root/Full Report/Frame 313971/Review/Frame 313816/INSTANCE:Star[4]"
        diffs:
          {}
      - node_id: "14398:1137557"
        path_key: "root/Full Report/Frame 313971/Review/Frame 313816/INSTANCE:Star[5]"
        diffs:
          {}
```