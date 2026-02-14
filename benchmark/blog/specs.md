## Figma Component: Desktop

### Figma URL
https://www.figma.com/design/w2W0AS12sA2VhAhVXDawLa/Figma-Specs-Sample-Files?node-id=1-14654&t=1FQjO4OdTEPEP7Dl-11

### Implementation Instructions
1. Use get_screenshot on the Figma URL above and **save it to `.figma/desktop.png`** (relative to working directory). Reference this local file whenever you need to check the design — do not call get_screenshot again.
2. Read the anatomy tree below to understand the component structure.
3. Read the YAML specs — it has every layer, color, font, spacing, and token value you need.
4. Check the project's working directory or `package.json` for the icon library in use (e.g. Phosphor, Lucide, Heroicons). Use matching icons from that library based on the `instance_of` names in the anatomy (e.g. `instance_of: ForkKnife` → use ForkKnife from the detected library).
5. Check the project's `package.json` to detect the framework in use, then build the component accordingly.
6. Build the component exactly as specified. Match the structure, styles (fills, strokes, fonts), and layout (direction, gap, padding).
7. Use resolved_tokens to map token names to actual values (e.g. hex colors, font names).
8. Keep it minimal — only implement what the specs describe, nothing more.
9. **Visual QA** — render your component at 1440×4263px (1x scale, no device emulation). Take a screenshot and compare with `.figma/desktop.png`. Verify:
   - Layout structure matches (correct direction, nesting, alignment)
   - Spacing is correct (gap, padding values from specs)
   - Colors match fills/strokes in the spec (within #±02 per channel)
   - Font sizes, weights, and families match
   - Border radius values match
   - Text content is complete (no unintended truncation)
   Fix any differences and re-compare until all checks pass.

### Component Anatomy
```
- Desktop (FRAME)
- Dropdown header navigation (INSTANCE) — instance of Open=False, Mobile subnav open=False, Type=Featured card, Breakpoint=Desktop
- Header (FRAME)
- Container (FRAME)
- Content (FRAME)
- Logo (INSTANCE) — instance of Dark mode=False
- Logomark (INSTANCE) — instance of Logomark
- Navigation (FRAME)
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
- _Dropdown header navigation trigger (INSTANCE) — instance of Open=False, Type=Featured card, Breakpoint=Desktop
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link gray, Icon=Trailing, Destructive=False, State=Default
- _Button base (INSTANCE) — instance of Size=lg, Icon=Trailing
- Text (TEXT) — "Products"
- chevron-down (INSTANCE) — instance of chevron-down
- _Dropdown header navigation trigger (INSTANCE) — instance of Open=False, Type=Featured card, Breakpoint=Desktop
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
- _Navigation actions (INSTANCE) — instance of Logged in=False, Breakpoint=Desktop
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Tertiary gray, Icon=False, Destructive=False, State=Default
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
- Blog page header (FRAME)
- Section (FRAME)
- Container (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading and badge (FRAME)
- Badge (INSTANCE) — instance of Size=lg, Icon=False, Color=Primary
- _Badge base (INSTANCE) — instance of Icon=False
- Text (TEXT) — "Our blog"
- Heading (TEXT) — "Resources and insights"
- Supporting text (TEXT) — "The latest industry news, interviews, t…"
- Input field (INSTANCE) — instance of Type=Default, Leading icon=True, Label=False, Hint text=False, Help icon=False, Destructive=False, State=Placeholder
- _Input field base (INSTANCE) — instance of Type=Default, Destructive=False
- Input with label (FRAME)
- Input (FRAME)
- Content (FRAME)
- search (INSTANCE) — instance of search
- Text (TEXT) — "Search"
- Background pattern (FRAME)
- Background (VECTOR)
- Right band 3 (VECTOR)
- Right band 2 (VECTOR)
- Right band 1 (VECTOR)
- Left band 1 (VECTOR)
- Left band 2 (VECTOR)
- Section (FRAME)
- Container (FRAME)
- Content (FRAME)
- Row (FRAME)
- Blog post card (INSTANCE) — instance of Type=Card border 01, Orientation=Vertical, Breakpoint=Desktop
- Image (FRAME)
- Content (FRAME)
- Heading and subheading (FRAME)
- Subheading (TEXT) — "Design"
- Heading and text (FRAME)
- Heading and icon (FRAME)
- Heading (TEXT) — "UX review presentations"
- Icon wrap (FRAME)
- arrow-up-right (INSTANCE) — instance of arrow-up-right
- Supporting text (TEXT) — "How do you create compelling presentati…"
- Avatar label group (INSTANCE) — instance of Size=md, Status icon=False, State=Default
- Avatar (INSTANCE) — instance of Size=md, Placeholder=False, Text=False, Status icon=False, State=Default
- Text and supporting text (FRAME)
- Text (TEXT) — "Olivia Rhye"
- Supporting text (TEXT) — "20 Jan 2022"
- Blog post card (INSTANCE) — instance of Type=Card border 01, Orientation=Vertical, Breakpoint=Desktop
- Blog post card (INSTANCE) — instance of Type=Card border 01, Orientation=Vertical, Breakpoint=Desktop
- Row (FRAME)
- Blog post card (INSTANCE) — instance of Type=Card border 01, Orientation=Vertical, Breakpoint=Desktop
- Blog post card (INSTANCE) — instance of Type=Card border 01, Orientation=Vertical, Breakpoint=Desktop
- Blog post card (INSTANCE) — instance of Type=Card border 01, Orientation=Vertical, Breakpoint=Desktop
- Row (FRAME)
- Blog post card (INSTANCE) — instance of Type=Card border 01, Orientation=Vertical, Breakpoint=Desktop
- Blog post card (INSTANCE) — instance of Type=Card border 01, Orientation=Vertical, Breakpoint=Desktop
- Blog post card (INSTANCE) — instance of Type=Card border 01, Orientation=Vertical, Breakpoint=Desktop
- Action (FRAME)
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Secondary color, Icon=Leading, Destructive=False, State=Default
- _Button base (INSTANCE) — instance of Size=xl, Icon=Leading
- arrow-down (INSTANCE) — instance of arrow-down
- Text (TEXT) — "Load more"
- –––– Divider –––– (INSTANCE) — instance of Breakpoint=Desktop
- Container (FRAME)
- Divider (VECTOR)
- CTA section (FRAME)
- Container (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading (TEXT) — "Start your 30-day free trial"
- Supporting text (TEXT) — "Join over 4,000+ startups already growi…"
- Actions (FRAME)
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Secondary gray, Icon=False, Destructive=False, State=Default
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
- Container (FRAME)
- Content (FRAME)
- 3:2 screen mockup (INSTANCE) — instance of Size=2xl
- Screen mockup (REPLACE FILL) (FRAME)
- CTA section (FRAME)
- Container (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading (TEXT) — "Start your free trial"
- Supporting text (TEXT) — "Join over 4,000+ startups already growi…"
- Actions (FRAME)
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Secondary gray, Icon=False, Destructive=False, State=Default
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
- Footer (INSTANCE) — instance of Type=Large 05, Theme=Default, Breakpoint=Desktop
- Container (FRAME)
- Content (FRAME)
- Text and supporting text (FRAME)
- Text (TEXT) — "Join our newsletter"
- Supporting text (TEXT) — "We’ll send you a nice letter once per w…"
- Email capture (FRAME)
- Input field (INSTANCE) — instance of Type=Default, Leading icon=False, Label=False, Hint text=False, Help icon=False, Destructive=False, State=Placeholder
- _Input field base (INSTANCE) — instance of Type=Default, Destructive=False
- Input with label (FRAME)
- Input (FRAME)
- Content (FRAME)
- Text (TEXT) — "Enter your email"
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
- Divider (RECTANGLE)
- Container (FRAME)
- Content (FRAME)
- _Footer links column (INSTANCE) — instance of Color=Gray, Theme=Light
- Heading (TEXT) — "Product"
- Footer links (FRAME)
- _Footer link (INSTANCE) — instance of Badge=False, Color=Gray, Theme=Light, State=Default
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
- _Footer link (INSTANCE) — instance of Badge=False, Color=Gray, Theme=Light, State=Default
- _Footer link (INSTANCE) — instance of Badge=True, Color=Gray, Theme=Light, State=Default
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
- Badge (INSTANCE) — instance of Size=sm, Icon=False, Color=Success
- _Footer link (INSTANCE) — instance of Badge=False, Color=Gray, Theme=Light, State=Default
- _Footer link (INSTANCE) — instance of Badge=False, Color=Gray, Theme=Light, State=Default
- _Footer link (INSTANCE) — instance of Badge=False, Color=Gray, Theme=Light, State=Default
- _Footer links column (INSTANCE) — instance of Color=Gray, Theme=Light
- Heading (TEXT) — "Company"
- Footer links (FRAME)
- _Footer link (INSTANCE) — instance of Badge=False, Color=Gray, Theme=Light, State=Default
- _Footer link (INSTANCE) — instance of Badge=False, Color=Gray, Theme=Light, State=Default
- _Footer link (INSTANCE) — instance of Badge=False, Color=Gray, Theme=Light, State=Default
- _Footer link (INSTANCE) — instance of Badge=False, Color=Gray, Theme=Light, State=Default
- _Footer link (INSTANCE) — instance of Badge=False, Color=Gray, Theme=Light, State=Default
- _Footer link (INSTANCE) — instance of Badge=False, Color=Gray, Theme=Light, State=Default
- _Footer links column (INSTANCE) — instance of Color=Gray, Theme=Light
- _Footer links column (INSTANCE) — instance of Color=Gray, Theme=Light
- _Footer links column (INSTANCE) — instance of Color=Gray, Theme=Light
- _Footer links column (INSTANCE) — instance of Color=Gray, Theme=Light
- Container (FRAME)
- Divider (RECTANGLE)
- Content (FRAME)
- Logo (INSTANCE) — instance of Dark mode=False
- Footer text (TEXT) — "© 2077 Untitled UI. All rights reserved."
- Logo wrap (FRAME)
- Content (FRAME)
- Grid (FRAME)
- _Button base (INSTANCE)
```

### Specs Data (YAML)
```yaml
schema: specs-plugin.agent_pack.v14.yaml.compact
generated_at: "2026-02-12T16:05:11.721Z"
selection:
  node_id: "1624:472083"
  name: Desktop
  type: FRAME
  clips_content: true
defaults_omitted:
  justify: flex-start
  align: flex-start
  direction: row
summary:
  anatomy_nodes_total: 155
  property_groups_total: 0
  property_variants_total: 0
  variable_refs_total: 0
  instance_templates: 7
  deduplicated_instances: 35
  chunks_total: 9
  truncated:
    anatomy: false
    anatomy_included: 155
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
  White: "#FFFFFF"
  Primary/50: "#F9F5FF"
  Gray/100: "#F2F4F7"
  Text md/Semibold: "#6941C6"
  Text sm/Medium: "#6941C6"
  Display lg/Semibold: "#42307D"
  Text xl/Regular: "#6941C6"
  Gray/300: "#D0D5DD"
  Text md/Regular: "#98A2B3"
  Primary/100: "#F4EBFF"
  Primary/200: "#E9D7FE"
  Primary/300: "#D6BBFB"
  Text sm/Semibold: "#98A2B3"
  Display xs/Semibold: "#101828"
  Avatar user square/Olivia Rhye (color background): "#C7B9DA"
  Text sm/Regular: "#667085"
  Gray/200: "#EAECF0"
  Display md/Semibold: "#42307D"
  Text xl/Medium: "#101828"
chunks:
  - chunk_id: anatomy_1
    kind: anatomy
    item_count: 50
    items:
      - node_id: "1624:472083"
        name: Desktop
        type: FRAME
        w: 1440
        h: 4263
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        direction: column
        align: center
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "1624:472084"
        name: Dropdown header navigation
        type: INSTANCE
        instance_of: Open=False, Mobile subnav open=False, Type=Featured card, Breakpoint=Desktop
        children_text:
          [Home, Products, Resources, Pricing, Log in, Sign up]
        w: 1440
        h: 80
        fill: "#F9F5FF"
        fill_ref: Primary/50
        fill_ref_type: color_style
        stroke: "#F2F4F7"
        stroke_ref: Gray/100
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
      - node_id: "I1624:472084;1288:30712"
        name: Header
        type: FRAME
        w: 1440
        h: 80
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "I1624:472084;1288:30713"
        name: Container
        type: FRAME
        w: 1280
        h: 44
        justify: space-between
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I1624:472084;1288:30714"
        name: Content
        type: FRAME
        w: 586
        h: 32
        gap: 40
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:472084;1288:30715;1083:50705"
        name: Logomark
        type: INSTANCE
        instance_of: Logomark
        w: 32
        h: 32
        fill: "#D0D5DD"
        shadow: 0px 1px 2px rgba(16,24,40,0.06)
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:472084;1288:30716"
        name: Navigation
        type: FRAME
        w: 404
        h: 32
        gap: 32
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:472084;1288:30718;1288:478"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link gray, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Products]
        w: 98
        h: 24
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:472084;1288:30718;1288:478;1042:35579"
        name: _Button base
        type: INSTANCE
        instance_of: Size=lg, Icon=Trailing
        children_text:
          [Products]
        w: 98
        h: 24
        gap: 8
        justify: center
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:472084;1288:30718;1288:478;1042:35579;1054:7014"
        name: Text
        type: TEXT
        text: Products
        w: 70
        h: 24
        fill: "#667085"
        fill_ref: Text md/Semibold
        fill_ref_type: color_style
        font_size: 16
        font: Inter Semi Bold
        line_height: 24px
        text_style: Text md/Semibold
      - node_id: "I1624:472084;1288:30718;1288:478;1042:35579;1054:7015"
        name: chevron-down
        type: INSTANCE
        instance_of: chevron-down
        w: 20
        h: 20
        fill: "#667085"
      - node_id: "I1624:472084;1624:307186"
        name: _Navigation actions
        type: INSTANCE
        instance_of: Logged in=False, Breakpoint=Desktop
        children_text:
          [Log in, Sign up]
        w: 190
        h: 44
        gap: 12
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2842:297309"
        name: Blog page header
        type: FRAME
        w: 1440
        h: 2482
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        direction: column
        align: center
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2842:297310"
        name: Section
        type: FRAME
        w: 1440
        h: 438
        fill: "#F9F5FF"
        fill_ref: Primary/50
        fill_ref_type: color_style
        padding: "96"
        direction: column
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297311"
        name: Container
        type: FRAME
        w: 1280
        h: 246
        gap: 32
        direction: column
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297312"
        name: Content
        type: FRAME
        w: 1216
        h: 246
        gap: 40
        direction: column
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297313"
        name: Heading and supporting text
        type: FRAME
        w: 1024
        h: 158
        gap: 24
        direction: column
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297314"
        name: Heading and badge
        type: FRAME
        w: 1024
        h: 104
        gap: 16
        direction: column
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297315;1046:3827"
        name: _Badge base
        type: INSTANCE
        instance_of: Icon=False
        children_text:
          [Our blog]
        w: 82
        h: 28
        fill: "#F9F5FF"
        fill_ref: Primary/50
        fill_ref_type: color_style
        radius: 16
        padding: "4"
        justify: center
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "I2842:297315;1046:3827;1046:26"
        name: Text
        type: TEXT
        text: Our blog
        w: 58
        h: 20
        fill: "#6941C6"
        fill_ref: Text sm/Medium
        fill_ref_type: color_style
        font_size: 14
        font: Inter Medium
        line_height: 20px
        text_align: center
        text_style: Text sm/Medium
      - node_id: "2842:297316"
        name: Heading
        type: TEXT
        text: Resources and insights
        w: 1024
        h: 60
        fill: "#42307D"
        fill_ref: Display lg/Semibold
        fill_ref_type: color_style
        font_size: 48
        font: Inter Semi Bold
        line_height: 60px
        text_align: center
        text_style: Display lg/Semibold
      - node_id: "2842:297317"
        name: Supporting text
        type: TEXT
        text: The latest industry news, interviews, technologies, and resources.
        w: 1024
        h: 30
        fill: "#6941C6"
        fill_ref: Text xl/Regular
        fill_ref_type: color_style
        font_size: 20
        font: Inter Regular
        line_height: 30px
        text_align: center
        text_style: Text xl/Regular
      - node_id: "2842:297318"
        name: Input field
        type: INSTANCE
        instance_of: Type=Default, Leading icon=True, Label=False, Hint text=False, Help icon=False, Destructive=False, State=Placeholder
        children_text:
          [Search]
        w: 320
        h: 48
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297318;1091:63836"
        name: _Input field base
        type: INSTANCE
        instance_of: Type=Default, Destructive=False
        children_text:
          [Search]
        w: 320
        h: 48
        gap: 6
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297318;1091:63836;1088:109"
        name: Input with label
        type: FRAME
        w: 320
        h: 48
        gap: 6
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297318;1091:63836;1088:4"
        name: Input
        type: FRAME
        w: 320
        h: 48
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        radius: 8
        padding: "12"
        gap: 8
        stroke: "#D0D5DD"
        stroke_ref: Gray/300
        stroke_align: inside
        stroke_sides: all
        shadow: 0px 1px 2px rgba(16,24,40,0.05)
        align: center
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "I2842:297318;1091:63836;1088:10"
        name: Content
        type: FRAME
        w: 288
        h: 24
        gap: 8
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297318;1091:63836;1088:11"
        name: search
        type: INSTANCE
        instance_of: search
        w: 20
        h: 20
        fill: "#667085"
      - node_id: "I2842:297318;1091:63836;1088:6"
        name: Text
        type: TEXT
        text: Search
        w: 260
        h: 24
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "2842:297319"
        name: Background pattern
        type: FRAME
        w: 1440
        h: 96
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2842:297320"
        name: Background
        type: VECTOR
        w: 2400
        h: 420
        fill: "#F9F5FF"
        fill_ref: Primary/50
        fill_ref_type: color_style
        backdrop_blur: 111.11112976074219px
      - node_id: "2842:297321"
        name: Right band 3
        type: VECTOR
        w: 467
        h: 129
        fill: "#F4EBFF"
        fill_ref: Primary/100
        fill_ref_type: color_style
      - node_id: "2842:297322"
        name: Right band 2
        type: VECTOR
        w: 680
        h: 156
        fill: "#E9D7FE"
        fill_ref: Primary/200
        fill_ref_type: color_style
      - node_id: "2842:297323"
        name: Right band 1
        type: VECTOR
        w: 467
        h: 129
        fill: "#D6BBFB"
        fill_ref: Primary/300
        fill_ref_type: color_style
      - node_id: "2842:297324"
        name: Left band 1
        type: VECTOR
        w: 467
        h: 129
        fill: "#F4EBFF"
        fill_ref: Primary/100
        fill_ref_type: color_style
      - node_id: "2842:297325"
        name: Left band 2
        type: VECTOR
        w: 467
        h: 129
        fill: "#D6BBFB"
        fill_ref: Primary/300
        fill_ref_type: color_style
      - node_id: "2842:297326"
        name: Section
        type: FRAME
        w: 1440
        h: 2044
        direction: column
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297327"
        name: Container
        type: FRAME
        w: 1280
        h: 1948
        gap: 64
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297328"
        name: Content
        type: FRAME
        w: 1216
        h: 1836
        gap: 48
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297329"
        name: Row
        type: FRAME
        w: 1216
        h: 580
        gap: 32
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297330;1390:2546"
        name: Image
        type: FRAME
        w: 336
        h: 240
        fill: image
        fill_type: IMAGE
        image_hash: 9ca412fa840de131974162b09d68033e23a850b5
      - node_id: "I2842:297330;1390:2547"
        name: Content
        type: FRAME
        w: 336
        h: 252
        gap: 32
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "I2842:297330;1390:2548"
        name: Heading and subheading
        type: FRAME
        w: 336
        h: 148
        gap: 12
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297330;1390:2549"
        name: Subheading
        type: TEXT
        text: Design
        w: 336
        h: 20
        fill: "#6941C6"
        fill_ref: Text sm/Semibold
        fill_ref_type: color_style
        font_size: 14
        font: Inter Semi Bold
        line_height: 20px
        text_style: Text sm/Semibold
      - node_id: "I2842:297330;1390:2550"
        name: Heading and text
        type: FRAME
        w: 336
        h: 116
        gap: 12
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297330;1390:2551"
        name: Heading and icon
        type: FRAME
        w: 336
        h: 32
        gap: 16
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297330;1390:2552"
        name: Heading
        type: TEXT
        text: UX review presentations
        w: 296
        h: 32
        fill: "#101828"
        fill_ref: Display xs/Semibold
        fill_ref_type: color_style
        font_size: 24
        font: Inter Semi Bold
        line_height: 32px
        text_style: Display xs/Semibold
      - node_id: "I2842:297330;1390:2553"
        name: Icon wrap
        type: FRAME
        w: 24
        h: 28
        padding: "4"
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "I2842:297330;1390:2554"
        name: arrow-up-right
        type: INSTANCE
        instance_of: arrow-up-right
        w: 24
        h: 24
        fill: "#101828"
      - node_id: "I2842:297330;1390:2555"
        name: Supporting text
        type: TEXT
        text: How do you create compelling presentations that wow your colleagues and impress your managers?
        w: 336
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
  - chunk_id: anatomy_2
    kind: anatomy
    item_count: 50
    items:
      - node_id: "I2842:297330;1390:2556"
        name: Avatar label group
        type: INSTANCE
        instance_of: Size=md, Status icon=False, State=Default
        children_text:
          [Olivia Rhye, 20 Jan 2022]
        w: 135
        h: 40
        gap: 12
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "I2842:297330;1390:2556;1109:488"
        name: Avatar
        type: INSTANCE
        instance_of: Size=md, Placeholder=False, Text=False, Status icon=False, State=Default
        w: 40
        h: 40
        fill: "#C7B9DA"
        fill_ref: Avatar user square/Olivia Rhye (color background)
        fill_ref_type: color_style
        radius: 200
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "I2842:297330;1390:2556;1109:489"
        name: Text and supporting text
        type: FRAME
        w: 83
        h: 40
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "I2842:297330;1390:2556;1109:490"
        name: Text
        type: TEXT
        text: Olivia Rhye
        w: 75
        h: 20
        fill: "#101828"
        fill_ref: Text sm/Semibold
        fill_ref_type: color_style
        font_size: 14
        font: Inter Semi Bold
        line_height: 20px
        text_style: Text sm/Semibold
      - node_id: "I2842:297330;1390:2556;1109:491"
        name: Supporting text
        type: TEXT
        text: 20 Jan 2022
        w: 83
        h: 20
        fill: "#667085"
        fill_ref: Text sm/Regular
        fill_ref_type: color_style
        font_size: 14
        font: Inter Regular
        line_height: 20px
        text_style: Text sm/Regular
      - node_id: "2842:297333"
        name: Row
        type: FRAME
        w: 1216
        h: 580
        gap: 32
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297337"
        name: Row
        type: FRAME
        w: 1216
        h: 580
        gap: 32
      - node_id: "2842:297341"
        name: Action
        type: FRAME
        w: 1216
        h: 48
      - node_id: "2842:297342"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Secondary color, Icon=Leading, Destructive=False, State=Default
        children_text:
          [Load more]
        w: 150
        h: 48
        radius: 8
      - node_id: "I2842:297342;1041:35187"
        name: _Button base
        type: INSTANCE
        instance_of: Size=xl, Icon=Leading
        children_text:
          [Load more]
        w: 150
        h: 48
        fill: "#F9F5FF"
        fill_ref: Primary/50
        fill_ref_type: color_style
        radius: 8
        padding: "12"
        gap: 8
        stroke: "#F9F5FF"
        stroke_ref: Primary/50
        stroke_align: inside
        stroke_sides: all
        shadow: 0px 1px 2px rgba(16,24,40,0.05)
      - node_id: "I2842:297342;1041:35187;1054:6998"
        name: arrow-down
        type: INSTANCE
        instance_of: arrow-down
        w: 20
        h: 20
        fill: "#6941C6"
      - node_id: "I2842:297342;1041:35187;1054:6999"
        name: Text
        type: TEXT
        text: Load more
        w: 82
        h: 24
        fill: "#6941C6"
        fill_ref: Text md/Semibold
        fill_ref_type: color_style
        font_size: 16
        font: Inter Semi Bold
        line_height: 24px
        text_style: Text md/Semibold
      - node_id: "1626:303000"
        name: –––– Divider ––––
        type: INSTANCE
        instance_of: Breakpoint=Desktop
        w: 1440
        h: 1
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
      - node_id: "I1626:303000;1624:462458"
        name: Container
        type: FRAME
        w: 1280
        h: 1
        gap: 32
      - node_id: "I1626:303000;1624:462459"
        name: Divider
        type: VECTOR
        w: 1216
        h: 1
        fill: "#EAECF0"
        fill_ref: Gray/200
        fill_ref_type: color_style
      - node_id: "2842:297943"
        name: CTA section
        type: FRAME
        w: 1440
        h: 742
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        padding: "96"
        gap: 64
      - node_id: "2842:297944"
        name: Container
        type: FRAME
        w: 1280
        h: 182
        gap: 32
      - node_id: "2842:297945"
        name: Content
        type: FRAME
        w: 1216
        h: 182
        gap: 40
      - node_id: "2842:297946"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 94
        gap: 20
      - node_id: "2842:297947"
        name: Heading
        type: TEXT
        text: Start your 30-day free trial
        w: 768
        h: 44
        fill: "#101828"
        fill_ref: Display md/Semibold
        fill_ref_type: color_style
        font_size: 36
        font: Inter Semi Bold
        line_height: 44px
        text_align: center
        text_style: Display md/Semibold
      - node_id: "2842:297948"
        name: Supporting text
        type: TEXT
        text: Join over 4,000+ startups already growing with Untitled.
        w: 768
        h: 30
        fill: "#667085"
        fill_ref: Text xl/Regular
        fill_ref_type: color_style
        font_size: 20
        font: Inter Regular
        line_height: 30px
        text_align: center
        text_style: Text xl/Regular
      - node_id: "2842:297949"
        name: Actions
        type: FRAME
        w: 269
        h: 48
        gap: 12
      - node_id: "2842:297952"
        name: Container
        type: FRAME
        w: 1280
        h: 400
        gap: 32
      - node_id: "2842:297953"
        name: Content
        type: FRAME
        w: 1216
        h: 400
        fill: "#FFFFFF"
      - node_id: "2842:297954"
        name: "3:2 screen mockup"
        type: INSTANCE
        instance_of: Size=2xl
        w: 1216
        h: 810
        fill: "#FFFFFF"
        radius: 12
        stroke: "#EAECF0"
        stroke_ref: Gray/200
        stroke_align: inside
        stroke_sides: all
      - node_id: "I2842:297954;1296:926"
        name: Screen mockup (REPLACE FILL)
        type: FRAME
        w: 1216
        h: 810
        fill: image
        fill_type: IMAGE
        image_hash: 85b42fc8e141b80565f28cff8ba1d70ac8e47064
        radius: 12
        stroke: "#F2F4F7"
        stroke_ref: Gray/100
        stroke_align: inside
        stroke_sides: all
      - node_id: "2842:297974"
        name: CTA section
        type: FRAME
        w: 1440
        h: 286
        fill: "#F9F5FF"
        fill_ref: Primary/50
        fill_ref_type: color_style
        padding: "96"
        gap: 64
      - node_id: "2842:297975"
        name: Container
        type: FRAME
        w: 1280
        h: 94
        gap: 32
      - node_id: "2842:297976"
        name: Content
        type: FRAME
        w: 1216
        h: 94
        gap: 32
      - node_id: "2842:297977"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 94
        gap: 20
      - node_id: "2842:297978"
        name: Heading
        type: TEXT
        text: Start your free trial
        w: 768
        h: 44
        fill: "#42307D"
        fill_ref: Display md/Semibold
        fill_ref_type: color_style
        font_size: 36
        font: Inter Semi Bold
        line_height: 44px
        text_style: Display md/Semibold
      - node_id: "2842:297979"
        name: Supporting text
        type: TEXT
        text: Join over 4,000+ startups already growing with Untitled.
        w: 768
        h: 30
        fill: "#6941C6"
        fill_ref: Text xl/Regular
        fill_ref_type: color_style
        font_size: 20
        font: Inter Regular
        line_height: 30px
        text_style: Text xl/Regular
      - node_id: "2842:297980"
        name: Actions
        type: FRAME
        w: 269
        h: 48
        gap: 12
      - node_id: "1626:303003"
        name: Footer
        type: INSTANCE
        instance_of: Type=Large 05, Theme=Default, Breakpoint=Desktop
        children_text:
          - Join our newsletter
          - We’ll send you a nice letter once per week. No spam.
          - Enter your email
          - Subscribe
          - Product
          - Overview
          - Features
          - Solutions
          - New
          - Tutorials
          - Pricing
          - Releases
          - Company
          - About us
          - Careers
          - Press
          - News
          - Media kit
          - Contact
          - Resources
          - Blog
          - Newsletter
          - Events
          - Help centre
          - Tutorials
          - Support
          - Use cases
          - Startups
          - Enterprise
          - Government
          - SaaS
          - Marketplaces
          - Ecommerce
          - Social
          - Twitter
          - LinkedIn
          - Facebook
          - GitHub
          - AngelList
          - Dribbble
          - Legal
          - Terms
          - Privacy
          - Cookies
          - Licenses
          - Settings
          - Contact
          - © 2077 Untitled UI. All rights reserved.
        w: 1440
        h: 672
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        padding: "64"
        gap: 64
      - node_id: "I1626:303003;1508:252783"
        name: Container
        type: FRAME
        w: 1280
        h: 127
        gap: 64
      - node_id: "I1626:303003;1508:252784"
        name: Content
        type: FRAME
        w: 1216
        h: 62
        gap: 32
      - node_id: "I1626:303003;1508:252785"
        name: Text and supporting text
        type: FRAME
        w: 773
        h: 62
        gap: 8
      - node_id: "I1626:303003;1508:252786"
        name: Text
        type: TEXT
        text: Join our newsletter
        w: 773
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I1626:303003;1508:252787"
        name: Supporting text
        type: TEXT
        text: We’ll send you a nice letter once per week. No spam.
        w: 773
        h: 24
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I1626:303003;1508:252788"
        name: Email capture
        type: FRAME
        w: 411
        h: 44
        gap: 16
      - node_id: "I1626:303003;1508:252789"
        name: Input field
        type: INSTANCE
        instance_of: Type=Default, Leading icon=False, Label=False, Hint text=False, Help icon=False, Destructive=False, State=Placeholder
        children_text:
          [Enter your email]
        w: 280
        h: 44
      - node_id: "I1626:303003;1508:252789;1091:63800"
        name: _Input field base
        type: INSTANCE
        instance_of: Type=Default, Destructive=False
        children_text:
          [Enter your email]
        w: 280
        h: 44
        gap: 6
      - node_id: "I1626:303003;1508:252789;1091:63800;1088:109"
        name: Input with label
        type: FRAME
        w: 280
        h: 44
        gap: 6
      - node_id: "I1626:303003;1508:252789;1091:63800;1088:4"
        name: Input
        type: FRAME
        w: 280
        h: 44
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        radius: 8
        padding: "10"
        gap: 8
        stroke: "#D0D5DD"
        stroke_ref: Gray/300
        stroke_align: inside
        stroke_sides: all
        shadow: 0px 1px 2px rgba(16,24,40,0.05)
      - node_id: "I1626:303003;1508:252789;1091:63800;1088:10"
        name: Content
        type: FRAME
        w: 252
        h: 24
        gap: 8
      - node_id: "I1626:303003;1508:252789;1091:63800;1088:6"
        name: Text
        type: TEXT
        text: Enter your email
        w: 252
        h: 24
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I1626:303003;1508:252802"
        name: Divider
        type: RECTANGLE
        w: 1216
        h: 1
        fill: "#EAECF0"
        fill_ref: Gray/200
        fill_ref_type: color_style
      - node_id: "I1626:303003;1508:252333"
        name: Container
        type: FRAME
        w: 1280
        h: 240
        gap: 48
      - node_id: "I1626:303003;1508:252334"
        name: Content
        type: FRAME
        w: 1216
        h: 240
        gap: 32
      - node_id: "I1626:303003;1510:267383"
        name: _Footer links column
        type: INSTANCE
        instance_of: Color=Gray, Theme=Light
        children_text:
          - Product
          - Overview
          - Features
          - Solutions
          - New
          - Tutorials
          - Pricing
          - Releases
        w: 176
        h: 240
        gap: 16
  - chunk_id: anatomy_3
    kind: anatomy
    item_count: 13
    items:
      - node_id: "I1626:303003;1510:267383;1510:266786"
        name: Heading
        type: TEXT
        text: Product
        w: 176
        h: 20
        fill: "#98A2B3"
        fill_ref: Text sm/Semibold
        fill_ref_type: color_style
        font_size: 14
        font: Inter Semi Bold
        line_height: 20px
        text_style: Text sm/Semibold
      - node_id: "I1626:303003;1510:267383;1510:266835"
        name: Footer links
        type: FRAME
        w: 176
        h: 204
        gap: 12
      - node_id: "I1626:303003;1510:267383;1510:266838"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=True, Color=Gray, Theme=Light, State=Default
        children_text:
          [Solutions, New]
        w: 123
        h: 24
        gap: 8
      - node_id: "I1626:303003;1510:268817;1510:266786"
        name: Heading
        type: TEXT
        text: Company
        w: 176
        h: 20
        fill: "#98A2B3"
        fill_ref: Text sm/Semibold
        fill_ref_type: color_style
        font_size: 14
        font: Inter Semi Bold
        line_height: 20px
        text_style: Text sm/Semibold
      - node_id: "I1626:303003;1510:268817;1510:266835"
        name: Footer links
        type: FRAME
        w: 176
        h: 204
        gap: 12
      - node_id: "I1626:303003;1508:254418"
        name: Container
        type: FRAME
        w: 1280
        h: 65
        gap: 32
      - node_id: "I1626:303003;1508:254419"
        name: Divider
        type: RECTANGLE
        w: 1216
        h: 1
        fill: "#EAECF0"
        fill_ref: Gray/200
        fill_ref_type: color_style
      - node_id: "I1626:303003;1508:254420"
        name: Content
        type: FRAME
        w: 1216
        h: 32
      - node_id: "I1626:303003;1508:254422"
        name: Footer text
        type: TEXT
        text: © 2077 Untitled UI. All rights reserved.
        w: 293
        h: 24
        fill: "#98A2B3"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I1624:472084;1288:30715;4276:168026"
        name: Logo wrap
        type: FRAME
        w: 142
        h: 32
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "I1624:472084;1288:30715;1083:50705;1101:66343"
        name: Content
        type: FRAME
        w: 32
        h: 32
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "I1624:472084;1288:30715;1083:50705;1081:89"
        name: Grid
        type: FRAME
        w: 32
        h: 32
        direction: column
        align: center
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "I1624:472084;1288:30717;1042:35615"
        name: _Button base
        type: INSTANCE
        w: 46
        h: 24
        justify: center
        align: center
        w_sizing: auto
        h_sizing: auto
  - chunk_id: repeats_2
    kind: repeats
    template_node_id: "I1624:472084;1288:30717"
    instance_of: Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
    repeat_count: 10
    template_attributes:
      children_text:
        [Home]
      w: 46
      h: 24
      w_sizing: auto
      h_sizing: auto
    varying_keys:
      - Button/Hierarchy
      - Button/Size
      - Button/_Button base/Size
      - Button/_Button base/Text/fill
      - Button/_Button base/Text/text
      - Button/_Button base/Text/width
      - Button/width
    items:
      - node_id: "I1624:472084;1288:30720"
        diffs:
          [4, Pricing, 7, "54"]
      - node_id: "I1624:472084;1624:307186;1624:262067"
        diffs:
          [0, Tertiary gray, 4, Log in, 7, "83", 5, "47"]
      - node_id: "I1624:472084;1624:307186;1624:262069"
        diffs:
          [0, Primary, 4, Sign up, 3, "#FFFFFF", 7, "95", 5, "59"]
      - node_id: "2842:297950"
        diffs:
          - 1
          - xl
          - 0
          - Secondary gray
          - 2
          - xl
          - 4
          - Learn more
          - 3
          - "#344054"
          - 7
          - "128"
          - 5
          - "88"
      - node_id: "2842:297951"
        diffs:
          - 1
          - xl
          - 0
          - Primary
          - 2
          - xl
          - 4
          - Get started
          - 3
          - "#FFFFFF"
          - 7
          - "129"
          - 5
          - "89"
      - node_id: "2842:297981"
        diffs:
          - 1
          - xl
          - 0
          - Secondary gray
          - 2
          - xl
          - 4
          - Learn more
          - 3
          - "#344054"
          - 7
          - "128"
          - 5
          - "88"
      - node_id: "2842:297982"
        diffs:
          - 1
          - xl
          - 0
          - Primary
          - 2
          - xl
          - 4
          - Get started
          - 3
          - "#FFFFFF"
          - 7
          - "129"
          - 5
          - "89"
      - node_id: "I1626:303003;1508:252790"
        diffs:
          [0, Primary, 4, Subscribe, 3, "#FFFFFF", 7, "115", 5, "79"]
      - node_id: "I1626:303003;1510:267383;1510:266836;1507:253519"
        diffs:
          [4, Overview, 7, "74"]
      - node_id: "I1626:303003;1510:267383;1510:266838;1507:253529"
        diffs:
          [4, Solutions, 7, "73"]
  - chunk_id: repeats_3
    kind: repeats
    template_node_id: "I1624:472084;1288:30718"
    instance_of: Open=False, Type=Featured card, Breakpoint=Desktop
    repeat_count: 1
    template_attributes:
      children_text:
        [Products]
      w: 98
      h: 32
      padding: "4"
      direction: column
      align: center
      w_sizing: auto
      h_sizing: auto
    varying_keys:
      - _Dropdown header navigation trigger/Button/_Button base/Text/text
      - _Dropdown header navigation trigger/Button/_Button base/Text/width
      - _Dropdown header navigation trigger/width
    items:
      - node_id: "I1624:472084;1288:30719"
        diffs:
          [0, Resources, 4, "110", 1, "82"]
  - chunk_id: repeats_4
    kind: repeats
    template_node_id: "2842:297315"
    instance_of: Size=lg, Icon=False, Color=Primary
    repeat_count: 1
    template_attributes:
      children_text:
        [Our blog]
      w: 82
      h: 28
      w_sizing: auto
      h_sizing: auto
    varying_keys:
      - Badge/Color
      - Badge/Size
      - Badge/_Badge base/Text/fill
      - Badge/_Badge base/Text/text
      - Badge/_Badge base/Text/width
      - Badge/_Badge base/fill
      - Badge/width
    items:
      - node_id: "I1626:303003;1510:267383;1510:266838;1507:253530"
        diffs:
          - 1
          - sm
          - 0
          - Success
          - 5
          - "#ECFDF3"
          - 3
          - New
          - 2
          - "#027A48"
          - 7
          - "42"
          - 4
          - "26"
  - chunk_id: repeats_5
    kind: repeats
    template_node_id: "2842:297330"
    instance_of: Type=Card border 01, Orientation=Vertical, Breakpoint=Desktop
    repeat_count: 8
    template_attributes:
      children_text:
        - Design
        - UX review presentations
        - How do you create compelling presentations that wow your colleagues and impress your managers?
        - Olivia Rhye
        - 20 Jan 2022
      w: 384
      h: 580
      fill: "#FFFFFF"
      fill_ref: White
      fill_ref_type: color_style
      padding: "24"
      gap: 32
      shadow: 0px 4px 6px -2px rgba(16,24,40,0.03)
      direction: column
      w_sizing: fixed
      h_sizing: fixed
    varying_keys:
      - Blog post card/Content/Avatar label group/Avatar/fill
      - Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/text
      - Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/width
      - Blog post card/Content/Avatar label group/Text and supporting text/Text/text
      - Blog post card/Content/Avatar label group/Text and supporting text/Text/width
      - Blog post card/Content/Avatar label group/Text and supporting text/width
      - Blog post card/Content/Avatar label group/width
      - Blog post card/Content/Heading and subheading/Heading and text/Heading and icon/Heading/text
      - Blog post card/Content/Heading and subheading/Heading and text/Supporting text/text
      - Blog post card/Content/Heading and subheading/Subheading/text
    items:
      - node_id: "2842:297331"
        diffs:
          - 9
          - Product
          - 7
          - Migrating to Linear 101
          - 8
          - Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.
          - 0
          - "#AA9C75"
          - 3
          - Phoenix Baker
          - 1
          - 19 Jan 2022
          - 6
          - "149"
          - 5
          - "97"
          - 2
          - "81"
      - node_id: "2842:297332"
        diffs:
          - 9
          - Software Engineering
          - 7
          - Building your API Stack
          - 8
          - The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
          - 0
          - "#D4B5AD"
          - 3
          - Lana Steiner
          - 1
          - 18 Jan 2022
          - 6
          - "137"
          - 5
          - "85"
          - 2
          - "81"
      - node_id: "2842:297334"
        diffs:
          - 9
          - Management
          - 7
          - Bill Walsh leadership lessons
          - 8
          - Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
          - 0
          - "#ABB677"
          - 3
          - Alec Whitten
          - 1
          - 17 Jan 2022
          - 6
          - "140"
          - 5
          - "88"
          - 2
          - "81"
      - node_id: "2842:297335"
        diffs:
          - 9
          - Product
          - 7
          - PM mental models
          - 8
          - Mental models are simple expressions of complex processes or relationships.
          - 0
          - "#BEA887"
          - 3
          - Demi WIlkinson
          - 1
          - 16 Jan 2022
          - 6
          - "157"
          - 5
          - "105"
          - 2
          - "81"
      - node_id: "2842:297336"
        diffs:
          - 7
          - What is Wireframing?
          - 8
          - Introduction to Wireframing and its Principles. Learn from the best in the industry.
          - 0
          - "#A2A8CD"
          - 3
          - Candice Wu
          - 1
          - 15 Jan 2022
          - 6
          - "134"
          - 5
          - "82"
          - 2
          - "81"
      - node_id: "2842:297338"
        diffs:
          - 7
          - How collaboration makes us better designers
          - 8
          - Collaboration can make our teams stronger, and our individual designs better.
          - 0
          - "#D1BAA9"
          - 3
          - Natali Craig
          - 1
          - 14 Jan 2022
          - 6
          - "134"
          - 5
          - "82"
          - 4
          - "79"
      - node_id: "2842:297339"
        diffs:
          - 9
          - Product
          - 7
          - Our top 10 Javascript frameworks to use
          - 8
          - JavaScript frameworks make development easy with extensive features and functionalities.
          - 0
          - "#D1DFC3"
          - 3
          - Drew Cano
          - 1
          - 13 Jan 2022
          - 6
          - "134"
          - 5
          - "82"
      - node_id: "2842:297340"
        diffs:
          - 9
          - Customer Success
          - 7
          - "Podcast: Creating a better CX Community"
          - 8
          - Starting a community doesn’t need to be complicated, but how do you get started?
          - 0
          - "#CFC3A7"
          - 3
          - Orlando Diggs
          - 1
          - 12 Jan 2022
          - 6
          - "149"
          - 5
          - "97"
          - 2
          - "81"
  - chunk_id: repeats_6
    kind: repeats
    template_node_id: "I1626:303003;1510:267383;1510:266836"
    instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
    repeat_count: 10
    template_attributes:
      children_text:
        [Overview]
      w: 74
      h: 24
      gap: 8
    varying_keys:
      [_Footer link/Button/_Button base/Text/text, _Footer link/width]
    items:
      - node_id: "I1626:303003;1510:267383;1510:266837"
        diffs:
          [0, Features, 4, "68"]
      - node_id: "I1626:303003;1510:267383;1510:266839"
        diffs:
          [0, Tutorials, 4, "68"]
      - node_id: "I1626:303003;1510:267383;1510:266840"
        diffs:
          [0, Pricing, 4, "54"]
      - node_id: "I1626:303003;1510:267383;1510:266841"
        diffs:
          [0, Releases, 4, "70"]
      - node_id: "I1626:303003;1510:268817;1510:266836"
        diffs:
          [0, About us, 4, "70"]
      - node_id: "I1626:303003;1510:268817;1510:266837"
        diffs:
          [0, Careers, 4, "62"]
      - node_id: "I1626:303003;1510:268817;1510:266838"
        diffs:
          [0, Press, 4, "44"]
      - node_id: "I1626:303003;1510:268817;1510:266839"
        diffs:
          [0, News, 4, "44"]
      - node_id: "I1626:303003;1510:268817;1510:266840"
        diffs:
          [0, Media kit, 4, "71"]
      - node_id: "I1626:303003;1510:268817;1510:266841"
        diffs:
          [0, Contact, 4, "62"]
  - chunk_id: repeats_7
    kind: repeats
    template_node_id: "I1626:303003;1510:268817"
    instance_of: Color=Gray, Theme=Light
    repeat_count: 4
    template_attributes:
      children_text:
        [Company, About us, Careers, Press, News, Media kit, Contact]
      w: 176
      h: 240
      gap: 16
    varying_keys:
      - _Footer links column/Footer links/_Footer link/Button/_Button base/Text/text
      - _Footer links column/Footer links/_Footer link/width
      - "_Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/text"
      - "_Footer links column/Footer links/_Footer link[2]/width"
      - "_Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/text"
      - "_Footer links column/Footer links/_Footer link[3]/width"
      - "_Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/text"
      - "_Footer links column/Footer links/_Footer link[4]/width"
      - "_Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/text"
      - "_Footer links column/Footer links/_Footer link[5]/width"
      - "_Footer links column/Footer links/_Footer link[6]/Button/_Button base/Text/text"
      - "_Footer links column/Footer links/_Footer link[6]/width"
      - _Footer links column/Heading/text
    items:
      - node_id: "I1626:303003;1510:270256"
        diffs:
          - 30
          - Resources
          - 0
          - Blog
          - 5
          - Newsletter
          - 10
          - Events
          - 15
          - Help centre
          - 20
          - Tutorials
          - 25
          - Support
          - 4
          - "35"
          - 9
          - "86"
          - 14
          - "53"
          - 19
          - "90"
          - 24
          - "68"
          - 29
          - "63"
      - node_id: "I1626:303003;1510:270757"
        diffs:
          - 30
          - Use cases
          - 0
          - Startups
          - 5
          - Enterprise
          - 10
          - Government
          - 15
          - SaaS
          - 20
          - Marketplaces
          - 25
          - Ecommerce
          - 4
          - "68"
          - 9
          - "81"
          - 14
          - "96"
          - 19
          - "40"
          - 24
          - "106"
          - 29
          - "92"
      - node_id: "I1626:303003;1510:272166"
        diffs:
          - 30
          - Social
          - 0
          - Twitter
          - 5
          - LinkedIn
          - 10
          - Facebook
          - 15
          - GitHub
          - 20
          - AngelList
          - 25
          - Dribbble
          - 4
          - "56"
          - 9
          - "66"
          - 14
          - "76"
          - 19
          - "55"
          - 24
          - "74"
          - 29
          - "66"
      - node_id: "I1626:303003;1510:273057"
        diffs:
          - 30
          - Legal
          - 0
          - Terms
          - 5
          - Privacy
          - 10
          - Cookies
          - 15
          - Licenses
          - 20
          - Settings
          - 4
          - "49"
          - 9
          - "58"
          - 14
          - "63"
          - 19
          - "69"
          - 24
          - "65"
```

<!-- chars: 55173 | ~tokens: 11533 -->