## Figma Component: Desktop

### Figma URL
[Paste Figma frame URL here]

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
schema: specs-plugin.agent_pack.v11.yaml.compact
generated_at: "2026-02-11T17:04:07.159Z"
selection:
  node_id: "1624:472083"
  name: Desktop
  type: FRAME
  clips_content: true
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
    [node_id, path_key, kind, items]
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
text_index:
  - id: "1624:472084"
    path: "root/Desktop/INSTANCE:Dropdown header navigation"
    children_text:
      [Home, Products, Resources, Pricing, Log in, Sign up]
  - id: "I1624:472084;1288:30718;1288:478"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/INSTANCE:Button"
    children_text:
      [Products]
  - id: "I1624:472084;1288:30718;1288:478;1042:35579"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/INSTANCE:_Button base"
    children_text:
      [Products]
  - id: "I1624:472084;1288:30718;1288:478;1042:35579;1054:7014"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/_Button base/TEXT:Text"
    text: Products
  - id: "I1624:472084;1624:307186"
    path: "root/Desktop/Dropdown header navigation/Header/Container/INSTANCE:_Navigation actions"
    children_text:
      [Log in, Sign up]
  - id: "I2842:297315;1046:3827"
    path: "root/Desktop/Blog page header/Section/Container/Content/Heading and supporting text/Heading and badge/Badge/INSTANCE:_Badge base"
    children_text:
      [Our blog]
  - id: "I2842:297315;1046:3827;1046:26"
    path: "root/Desktop/Blog page header/Section/Container/Content/Heading and supporting text/Heading and badge/Badge/_Badge base/TEXT:Text"
    text: Our blog
  - id: "2842:297316"
    path: "root/Desktop/Blog page header/Section/Container/Content/Heading and supporting text/Heading and badge/TEXT:Heading"
    text: Resources and insights
  - id: "2842:297317"
    path: "root/Desktop/Blog page header/Section/Container/Content/Heading and supporting text/TEXT:Supporting text"
    text: The latest industry news, interviews, technologies, and resources.
  - id: "2842:297318"
    path: "root/Desktop/Blog page header/Section/Container/Content/INSTANCE:Input field"
    children_text:
      [Search]
  - id: "I2842:297318;1091:63836"
    path: "root/Desktop/Blog page header/Section/Container/Content/Input field/INSTANCE:_Input field base"
    children_text:
      [Search]
  - id: "I2842:297318;1091:63836;1088:6"
    path: "root/Desktop/Blog page header/Section/Container/Content/Input field/_Input field base/Input with label/Input/Content/TEXT:Text"
    text: Search
  - id: "I2842:297330;1390:2549"
    path: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Heading and subheading/TEXT:Subheading"
    text: Design
  - id: "I2842:297330;1390:2552"
    path: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Heading and subheading/Heading and text/Heading and icon/TEXT:Heading"
    text: UX review presentations
  - id: "I2842:297330;1390:2555"
    path: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Heading and subheading/Heading and text/TEXT:Supporting text"
    text: How do you create compelling presentations that wow your colleagues and impress your managers?
  - id: "I2842:297330;1390:2556"
    path: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/INSTANCE:Avatar label group"
    children_text:
      [Olivia Rhye, 20 Jan 2022]
  - id: "I2842:297330;1390:2556;1109:490"
    path: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Avatar label group/Text and supporting text/TEXT:Text"
    text: Olivia Rhye
  - id: "I2842:297330;1390:2556;1109:491"
    path: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Avatar label group/Text and supporting text/TEXT:Supporting text"
    text: 20 Jan 2022
  - id: "2842:297342"
    path: "root/Desktop/Blog page header/Section/Container/Action/INSTANCE:Button"
    children_text:
      [Load more]
  - id: "I2842:297342;1041:35187"
    path: "root/Desktop/Blog page header/Section/Container/Action/Button/INSTANCE:_Button base"
    children_text:
      [Load more]
  - id: "I2842:297342;1041:35187;1054:6999"
    path: "root/Desktop/Blog page header/Section/Container/Action/Button/_Button base/TEXT:Text"
    text: Load more
  - id: "2842:297947"
    path: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Heading"
    text: Start your 30-day free trial
  - id: "2842:297948"
    path: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Supporting text"
    text: Join over 4,000+ startups already growing with Untitled.
  - id: "2842:297978"
    path: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Heading[2]"
    text: Start your free trial
  - id: "2842:297979"
    path: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Supporting text[2]"
    text: Join over 4,000+ startups already growing with Untitled.
  - id: "1626:303003"
    path: "root/Desktop/INSTANCE:Footer"
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
  - id: "I1626:303003;1508:252786"
    path: "root/Desktop/Footer/Container/Content/Text and supporting text/TEXT:Text"
    text: Join our newsletter
  - id: "I1626:303003;1508:252787"
    path: "root/Desktop/Footer/Container/Content/Text and supporting text/TEXT:Supporting text"
    text: We’ll send you a nice letter once per week. No spam.
  - id: "I1626:303003;1508:252789"
    path: "root/Desktop/Footer/Container/Content/Email capture/INSTANCE:Input field"
    children_text:
      [Enter your email]
  - id: "I1626:303003;1508:252789;1091:63800"
    path: "root/Desktop/Footer/Container/Content/Email capture/Input field/INSTANCE:_Input field base"
    children_text:
      [Enter your email]
  - id: "I1626:303003;1508:252789;1091:63800;1088:6"
    path: "root/Desktop/Footer/Container/Content/Email capture/Input field/_Input field base/Input with label/Input/Content/TEXT:Text"
    text: Enter your email
  - id: "I1626:303003;1510:267383"
    path: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column"
    children_text:
      - Product
      - Overview
      - Features
      - Solutions
      - New
      - Tutorials
      - Pricing
      - Releases
  - id: "I1626:303003;1510:267383;1510:266786"
    path: "root/Desktop/Footer/Container/Content/_Footer links column/TEXT:Heading"
    text: Product
  - id: "I1626:303003;1510:267383;1510:266838"
    path: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[3]"
    children_text:
      [Solutions, New]
  - id: "I1626:303003;1510:268817;1510:266786"
    path: "root/Desktop/Footer/Container/Content/_Footer links column/TEXT:Heading[2]"
    text: Company
  - id: "I1626:303003;1508:254422"
    path: "root/Desktop/Footer/Container/Content/TEXT:Footer text"
    text: © 2077 Untitled UI. All rights reserved.
chunks:
  - chunk_id: anatomy_1
    kind: anatomy
    item_count: 50
    path_range:
      - "root/FRAME:Desktop"
      - "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Heading and subheading/Heading and text/TEXT:Supporting text"
    node_ids:
      - "1624:472083"
      - "1624:472084"
      - "I1624:472084;1288:30712"
      - "I1624:472084;1288:30713"
      - "I1624:472084;1288:30714"
      - "I1624:472084;1288:30715;1083:50705"
      - "I1624:472084;1288:30716"
      - "I1624:472084;1288:30718;1288:478"
      - "I1624:472084;1288:30718;1288:478;1042:35579"
      - "I1624:472084;1288:30718;1288:478;1042:35579;1054:7014"
      - "I1624:472084;1288:30718;1288:478;1042:35579;1054:7015"
      - "I1624:472084;1624:307186"
      - "2842:297309"
      - "2842:297310"
      - "2842:297311"
      - "2842:297312"
      - "2842:297313"
      - "2842:297314"
      - "I2842:297315;1046:3827"
      - "I2842:297315;1046:3827;1046:26"
      - "2842:297316"
      - "2842:297317"
      - "2842:297318"
      - "I2842:297318;1091:63836"
      - "I2842:297318;1091:63836;1088:109"
      - "I2842:297318;1091:63836;1088:4"
      - "I2842:297318;1091:63836;1088:10"
      - "I2842:297318;1091:63836;1088:11"
      - "I2842:297318;1091:63836;1088:6"
      - "2842:297319"
      - "2842:297320"
      - "2842:297321"
      - "2842:297322"
      - "2842:297323"
      - "2842:297324"
      - "2842:297325"
      - "2842:297326"
      - "2842:297327"
      - "2842:297328"
      - "2842:297329"
      - "I2842:297330;1390:2546"
      - "I2842:297330;1390:2547"
      - "I2842:297330;1390:2548"
      - "I2842:297330;1390:2549"
      - "I2842:297330;1390:2550"
      - "I2842:297330;1390:2551"
      - "I2842:297330;1390:2552"
      - "I2842:297330;1390:2553"
      - "I2842:297330;1390:2554"
      - "I2842:297330;1390:2555"
    items:
      - node_id: "1624:472083"
        path_key: "root/FRAME:Desktop"
        name: Desktop
        type: FRAME
        w: 1440
        h: 4263
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "1624:472084"
        path_key: "root/Desktop/INSTANCE:Dropdown header navigation"
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
        path_key: "root/Desktop/Dropdown header navigation/FRAME:Header"
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
        path_key: "root/Desktop/Dropdown header navigation/Header/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 44
        direction: row
        justify: space-between
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I1624:472084;1288:30714"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 586
        h: 32
        gap: 40
        direction: row
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:472084;1288:30715;1083:50705"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Logo/Logo wrap/INSTANCE:Logomark"
        name: Logomark
        type: INSTANCE
        instance_of: Logomark
        w: 32
        h: 32
        fill: "#D0D5DD"
        shadow: 0px 1px 2px rgba(16,24,40,0.06)
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:472084;1288:30716"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/FRAME:Navigation"
        name: Navigation
        type: FRAME
        w: 404
        h: 32
        gap: 32
        direction: row
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:472084;1288:30718;1288:478"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link gray, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Products]
        w: 98
        h: 24
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:472084;1288:30718;1288:478;1042:35579"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/INSTANCE:_Button base"
        name: _Button base
        type: INSTANCE
        instance_of: Size=lg, Icon=Trailing
        children_text:
          [Products]
        w: 98
        h: 24
        gap: 8
        direction: row
        justify: center
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:472084;1288:30718;1288:478;1042:35579;1054:7014"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/_Button base/TEXT:Text"
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
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/_Button base/INSTANCE:chevron-down"
        name: chevron-down
        type: INSTANCE
        instance_of: chevron-down
        w: 20
        h: 20
        fill: "#667085"
      - node_id: "I1624:472084;1624:307186"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/INSTANCE:_Navigation actions"
        name: _Navigation actions
        type: INSTANCE
        instance_of: Logged in=False, Breakpoint=Desktop
        children_text:
          [Log in, Sign up]
        w: 190
        h: 44
        gap: 12
        direction: row
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2842:297309"
        path_key: "root/Desktop/FRAME:Blog page header"
        name: Blog page header
        type: FRAME
        w: 1440
        h: 2482
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2842:297310"
        path_key: "root/Desktop/Blog page header/FRAME:Section"
        name: Section
        type: FRAME
        w: 1440
        h: 438
        fill: "#F9F5FF"
        fill_ref: Primary/50
        fill_ref_type: color_style
        padding: "96"
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297311"
        path_key: "root/Desktop/Blog page header/Section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 246
        gap: 32
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297312"
        path_key: "root/Desktop/Blog page header/Section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 246
        gap: 40
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297313"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 1024
        h: 158
        gap: 24
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297314"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Heading and supporting text/FRAME:Heading and badge"
        name: Heading and badge
        type: FRAME
        w: 1024
        h: 104
        gap: 16
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297315;1046:3827"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Heading and supporting text/Heading and badge/Badge/INSTANCE:_Badge base"
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
        direction: row
        justify: center
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "I2842:297315;1046:3827;1046:26"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Heading and supporting text/Heading and badge/Badge/_Badge base/TEXT:Text"
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
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Heading and supporting text/Heading and badge/TEXT:Heading"
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
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Heading and supporting text/TEXT:Supporting text"
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
        path_key: "root/Desktop/Blog page header/Section/Container/Content/INSTANCE:Input field"
        name: Input field
        type: INSTANCE
        instance_of: Type=Default, Leading icon=True, Label=False, Hint text=False, Help icon=False, Destructive=False, State=Placeholder
        children_text:
          [Search]
        w: 320
        h: 48
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297318;1091:63836"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Input field/INSTANCE:_Input field base"
        name: _Input field base
        type: INSTANCE
        instance_of: Type=Default, Destructive=False
        children_text:
          [Search]
        w: 320
        h: 48
        gap: 6
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297318;1091:63836;1088:109"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Input field/_Input field base/FRAME:Input with label"
        name: Input with label
        type: FRAME
        w: 320
        h: 48
        gap: 6
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297318;1091:63836;1088:4"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Input field/_Input field base/Input with label/FRAME:Input"
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
        direction: row
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "I2842:297318;1091:63836;1088:10"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Input field/_Input field base/Input with label/Input/FRAME:Content"
        name: Content
        type: FRAME
        w: 288
        h: 24
        gap: 8
        direction: row
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297318;1091:63836;1088:11"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Input field/_Input field base/Input with label/Input/Content/INSTANCE:search"
        name: search
        type: INSTANCE
        instance_of: search
        w: 20
        h: 20
        fill: "#667085"
      - node_id: "I2842:297318;1091:63836;1088:6"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Input field/_Input field base/Input with label/Input/Content/TEXT:Text"
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
        path_key: "root/Desktop/Blog page header/Section/FRAME:Background pattern"
        name: Background pattern
        type: FRAME
        w: 1440
        h: 96
        direction: row
        justify: space-between
        align: flex-start
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2842:297320"
        path_key: "root/Desktop/Blog page header/Section/Background pattern/VECTOR:Background"
        name: Background
        type: VECTOR
        w: 2400
        h: 420
        fill: "#F9F5FF"
        fill_ref: Primary/50
        fill_ref_type: color_style
        backdrop_blur: 111.11112976074219px
      - node_id: "2842:297321"
        path_key: "root/Desktop/Blog page header/Section/Background pattern/VECTOR:Right band 3"
        name: Right band 3
        type: VECTOR
        w: 467
        h: 129
        fill: "#F4EBFF"
        fill_ref: Primary/100
        fill_ref_type: color_style
      - node_id: "2842:297322"
        path_key: "root/Desktop/Blog page header/Section/Background pattern/VECTOR:Right band 2"
        name: Right band 2
        type: VECTOR
        w: 680
        h: 156
        fill: "#E9D7FE"
        fill_ref: Primary/200
        fill_ref_type: color_style
      - node_id: "2842:297323"
        path_key: "root/Desktop/Blog page header/Section/Background pattern/VECTOR:Right band 1"
        name: Right band 1
        type: VECTOR
        w: 467
        h: 129
        fill: "#D6BBFB"
        fill_ref: Primary/300
        fill_ref_type: color_style
      - node_id: "2842:297324"
        path_key: "root/Desktop/Blog page header/Section/Background pattern/VECTOR:Left band 1"
        name: Left band 1
        type: VECTOR
        w: 467
        h: 129
        fill: "#F4EBFF"
        fill_ref: Primary/100
        fill_ref_type: color_style
      - node_id: "2842:297325"
        path_key: "root/Desktop/Blog page header/Section/Background pattern/VECTOR:Left band 2"
        name: Left band 2
        type: VECTOR
        w: 467
        h: 129
        fill: "#D6BBFB"
        fill_ref: Primary/300
        fill_ref_type: color_style
      - node_id: "2842:297326"
        path_key: "root/Desktop/Blog page header/FRAME:Section[2]"
        name: Section
        type: FRAME
        w: 1440
        h: 2044
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297327"
        path_key: "root/Desktop/Blog page header/Section/FRAME:Container[2]"
        name: Container
        type: FRAME
        w: 1280
        h: 1948
        gap: 64
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297328"
        path_key: "root/Desktop/Blog page header/Section/Container/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 1216
        h: 1836
        gap: 48
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297329"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/FRAME:Row"
        name: Row
        type: FRAME
        w: 1216
        h: 580
        gap: 32
        direction: row
        justify: center
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297330;1390:2546"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/FRAME:Image"
        name: Image
        type: FRAME
        w: 336
        h: 240
        fill: image
        fill_type: IMAGE
        image_hash: 9ca412fa840de131974162b09d68033e23a850b5
      - node_id: "I2842:297330;1390:2547"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/FRAME:Content"
        name: Content
        type: FRAME
        w: 336
        h: 252
        gap: 32
        direction: column
        justify: space-between
        align: flex-start
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "I2842:297330;1390:2548"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/FRAME:Heading and subheading"
        name: Heading and subheading
        type: FRAME
        w: 336
        h: 148
        gap: 12
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297330;1390:2549"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Heading and subheading/TEXT:Subheading"
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
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Heading and subheading/FRAME:Heading and text"
        name: Heading and text
        type: FRAME
        w: 336
        h: 116
        gap: 12
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297330;1390:2551"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Heading and subheading/Heading and text/FRAME:Heading and icon"
        name: Heading and icon
        type: FRAME
        w: 336
        h: 32
        gap: 16
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:297330;1390:2552"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Heading and subheading/Heading and text/Heading and icon/TEXT:Heading"
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
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Heading and subheading/Heading and text/Heading and icon/FRAME:Icon wrap"
        name: Icon wrap
        type: FRAME
        w: 24
        h: 28
        padding: "4"
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "I2842:297330;1390:2554"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Heading and subheading/Heading and text/Heading and icon/Icon wrap/INSTANCE:arrow-up-right"
        name: arrow-up-right
        type: INSTANCE
        instance_of: arrow-up-right
        w: 24
        h: 24
        fill: "#101828"
      - node_id: "I2842:297330;1390:2555"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Heading and subheading/Heading and text/TEXT:Supporting text"
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
    path_range:
      - "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/INSTANCE:Avatar label group"
      - "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column"
    node_ids:
      - "I2842:297330;1390:2556"
      - "I2842:297330;1390:2556;1109:488"
      - "I2842:297330;1390:2556;1109:489"
      - "I2842:297330;1390:2556;1109:490"
      - "I2842:297330;1390:2556;1109:491"
      - "2842:297333"
      - "2842:297337"
      - "2842:297341"
      - "2842:297342"
      - "I2842:297342;1041:35187"
      - "I2842:297342;1041:35187;1054:6998"
      - "I2842:297342;1041:35187;1054:6999"
      - "1626:303000"
      - "I1626:303000;1624:462458"
      - "I1626:303000;1624:462459"
      - "2842:297943"
      - "2842:297944"
      - "2842:297945"
      - "2842:297946"
      - "2842:297947"
      - "2842:297948"
      - "2842:297949"
      - "2842:297952"
      - "2842:297953"
      - "2842:297954"
      - "I2842:297954;1296:926"
      - "2842:297974"
      - "2842:297975"
      - "2842:297976"
      - "2842:297977"
      - "2842:297978"
      - "2842:297979"
      - "2842:297980"
      - "1626:303003"
      - "I1626:303003;1508:252783"
      - "I1626:303003;1508:252784"
      - "I1626:303003;1508:252785"
      - "I1626:303003;1508:252786"
      - "I1626:303003;1508:252787"
      - "I1626:303003;1508:252788"
      - "I1626:303003;1508:252789"
      - "I1626:303003;1508:252789;1091:63800"
      - "I1626:303003;1508:252789;1091:63800;1088:109"
      - "I1626:303003;1508:252789;1091:63800;1088:4"
      - "I1626:303003;1508:252789;1091:63800;1088:10"
      - "I1626:303003;1508:252789;1091:63800;1088:6"
      - "I1626:303003;1508:252802"
      - "I1626:303003;1508:252333"
      - "I1626:303003;1508:252334"
      - "I1626:303003;1510:267383"
    items:
      - node_id: "I2842:297330;1390:2556"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/INSTANCE:Avatar label group"
        name: Avatar label group
        type: INSTANCE
        instance_of: Size=md, Status icon=False, State=Default
        children_text:
          [Olivia Rhye, 20 Jan 2022]
        w: 135
        h: 40
        gap: 12
        direction: row
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "I2842:297330;1390:2556;1109:488"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Avatar label group/INSTANCE:Avatar"
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
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Avatar label group/FRAME:Text and supporting text"
        name: Text and supporting text
        type: FRAME
        w: 83
        h: 40
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "I2842:297330;1390:2556;1109:490"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Avatar label group/Text and supporting text/TEXT:Text"
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
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/Blog post card/Content/Avatar label group/Text and supporting text/TEXT:Supporting text"
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
        path_key: "root/Desktop/Blog page header/Section/Container/Content/FRAME:Row[2]"
        name: Row
        type: FRAME
        w: 1216
        h: 580
        gap: 32
        direction: row
        justify: center
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:297337"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/FRAME:Row[3]"
        name: Row
        type: FRAME
        w: 1216
        h: 580
        gap: 32
      - node_id: "2842:297341"
        path_key: "root/Desktop/Blog page header/Section/Container/FRAME:Action"
        name: Action
        type: FRAME
        w: 1216
        h: 48
      - node_id: "2842:297342"
        path_key: "root/Desktop/Blog page header/Section/Container/Action/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Secondary color, Icon=Leading, Destructive=False, State=Default
        children_text:
          [Load more]
        w: 150
        h: 48
        radius: 8
      - node_id: "I2842:297342;1041:35187"
        path_key: "root/Desktop/Blog page header/Section/Container/Action/Button/INSTANCE:_Button base"
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
        path_key: "root/Desktop/Blog page header/Section/Container/Action/Button/_Button base/INSTANCE:arrow-down"
        name: arrow-down
        type: INSTANCE
        instance_of: arrow-down
        w: 20
        h: 20
        fill: "#6941C6"
      - node_id: "I2842:297342;1041:35187;1054:6999"
        path_key: "root/Desktop/Blog page header/Section/Container/Action/Button/_Button base/TEXT:Text"
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
        path_key: "root/Desktop/INSTANCE:–––– Divider ––––"
        name: –––– Divider ––––
        type: INSTANCE
        instance_of: Breakpoint=Desktop
        w: 1440
        h: 1
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
      - node_id: "I1626:303000;1624:462458"
        path_key: "root/Desktop/–––– Divider ––––/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 1
        gap: 32
      - node_id: "I1626:303000;1624:462459"
        path_key: "root/Desktop/–––– Divider ––––/Container/VECTOR:Divider"
        name: Divider
        type: VECTOR
        w: 1216
        h: 1
        fill: "#EAECF0"
        fill_ref: Gray/200
        fill_ref_type: color_style
      - node_id: "2842:297943"
        path_key: "root/Desktop/FRAME:CTA section"
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
        path_key: "root/Desktop/CTA section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 182
        gap: 32
      - node_id: "2842:297945"
        path_key: "root/Desktop/CTA section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 182
        gap: 40
      - node_id: "2842:297946"
        path_key: "root/Desktop/CTA section/Container/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 94
        gap: 20
      - node_id: "2842:297947"
        path_key: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Heading"
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
        path_key: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Supporting text"
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
        path_key: "root/Desktop/CTA section/Container/Content/FRAME:Actions"
        name: Actions
        type: FRAME
        w: 269
        h: 48
        gap: 12
      - node_id: "2842:297952"
        path_key: "root/Desktop/CTA section/FRAME:Container[2]"
        name: Container
        type: FRAME
        w: 1280
        h: 400
        gap: 32
      - node_id: "2842:297953"
        path_key: "root/Desktop/CTA section/Container/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 1216
        h: 400
        fill: "#FFFFFF"
      - node_id: "2842:297954"
        path_key: "root/Desktop/CTA section/Container/Content/INSTANCE:3:2 screen mockup"
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
        path_key: "root/Desktop/CTA section/Container/Content/3:2 screen mockup/FRAME:Screen mockup (REPLACE FILL)"
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
        path_key: "root/Desktop/FRAME:CTA section[2]"
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
        path_key: "root/Desktop/CTA section/FRAME:Container[3]"
        name: Container
        type: FRAME
        w: 1280
        h: 94
        gap: 32
      - node_id: "2842:297976"
        path_key: "root/Desktop/CTA section/Container/FRAME:Content[3]"
        name: Content
        type: FRAME
        w: 1216
        h: 94
        gap: 32
      - node_id: "2842:297977"
        path_key: "root/Desktop/CTA section/Container/Content/FRAME:Heading and supporting text[2]"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 94
        gap: 20
      - node_id: "2842:297978"
        path_key: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Heading[2]"
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
        path_key: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Supporting text[2]"
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
        path_key: "root/Desktop/CTA section/Container/Content/FRAME:Actions[2]"
        name: Actions
        type: FRAME
        w: 269
        h: 48
        gap: 12
      - node_id: "1626:303003"
        path_key: "root/Desktop/INSTANCE:Footer"
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
        path_key: "root/Desktop/Footer/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 127
        gap: 64
      - node_id: "I1626:303003;1508:252784"
        path_key: "root/Desktop/Footer/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 62
        gap: 32
      - node_id: "I1626:303003;1508:252785"
        path_key: "root/Desktop/Footer/Container/Content/FRAME:Text and supporting text"
        name: Text and supporting text
        type: FRAME
        w: 773
        h: 62
        gap: 8
      - node_id: "I1626:303003;1508:252786"
        path_key: "root/Desktop/Footer/Container/Content/Text and supporting text/TEXT:Text"
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
        path_key: "root/Desktop/Footer/Container/Content/Text and supporting text/TEXT:Supporting text"
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
        path_key: "root/Desktop/Footer/Container/Content/FRAME:Email capture"
        name: Email capture
        type: FRAME
        w: 411
        h: 44
        gap: 16
      - node_id: "I1626:303003;1508:252789"
        path_key: "root/Desktop/Footer/Container/Content/Email capture/INSTANCE:Input field"
        name: Input field
        type: INSTANCE
        instance_of: Type=Default, Leading icon=False, Label=False, Hint text=False, Help icon=False, Destructive=False, State=Placeholder
        children_text:
          [Enter your email]
        w: 280
        h: 44
      - node_id: "I1626:303003;1508:252789;1091:63800"
        path_key: "root/Desktop/Footer/Container/Content/Email capture/Input field/INSTANCE:_Input field base"
        name: _Input field base
        type: INSTANCE
        instance_of: Type=Default, Destructive=False
        children_text:
          [Enter your email]
        w: 280
        h: 44
        gap: 6
      - node_id: "I1626:303003;1508:252789;1091:63800;1088:109"
        path_key: "root/Desktop/Footer/Container/Content/Email capture/Input field/_Input field base/FRAME:Input with label"
        name: Input with label
        type: FRAME
        w: 280
        h: 44
        gap: 6
      - node_id: "I1626:303003;1508:252789;1091:63800;1088:4"
        path_key: "root/Desktop/Footer/Container/Content/Email capture/Input field/_Input field base/Input with label/FRAME:Input"
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
        path_key: "root/Desktop/Footer/Container/Content/Email capture/Input field/_Input field base/Input with label/Input/FRAME:Content"
        name: Content
        type: FRAME
        w: 252
        h: 24
        gap: 8
      - node_id: "I1626:303003;1508:252789;1091:63800;1088:6"
        path_key: "root/Desktop/Footer/Container/Content/Email capture/Input field/_Input field base/Input with label/Input/Content/TEXT:Text"
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
        path_key: "root/Desktop/Footer/Container/RECTANGLE:Divider"
        name: Divider
        type: RECTANGLE
        w: 1216
        h: 1
        fill: "#EAECF0"
        fill_ref: Gray/200
        fill_ref_type: color_style
      - node_id: "I1626:303003;1508:252333"
        path_key: "root/Desktop/Footer/FRAME:Container[2]"
        name: Container
        type: FRAME
        w: 1280
        h: 240
        gap: 48
      - node_id: "I1626:303003;1508:252334"
        path_key: "root/Desktop/Footer/Container/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 1216
        h: 240
        gap: 32
      - node_id: "I1626:303003;1510:267383"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column"
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
    path_range:
      - "root/Desktop/Footer/Container/Content/_Footer links column/TEXT:Heading"
      - "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/Button/INSTANCE:_Button base"
    node_ids:
      - "I1626:303003;1510:267383;1510:266786"
      - "I1626:303003;1510:267383;1510:266835"
      - "I1626:303003;1510:267383;1510:266838"
      - "I1626:303003;1510:268817;1510:266786"
      - "I1626:303003;1510:268817;1510:266835"
      - "I1626:303003;1508:254418"
      - "I1626:303003;1508:254419"
      - "I1626:303003;1508:254420"
      - "I1626:303003;1508:254422"
      - "I1624:472084;1288:30715;4276:168026"
      - "I1624:472084;1288:30715;1083:50705;1101:66343"
      - "I1624:472084;1288:30715;1083:50705;1081:89"
      - "I1624:472084;1288:30717;1042:35615"
    items:
      - node_id: "I1626:303003;1510:267383;1510:266786"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/TEXT:Heading"
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
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/FRAME:Footer links"
        name: Footer links
        type: FRAME
        w: 176
        h: 204
        gap: 12
      - node_id: "I1626:303003;1510:267383;1510:266838"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[3]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=True, Color=Gray, Theme=Light, State=Default
        children_text:
          [Solutions, New]
        w: 123
        h: 24
        gap: 8
      - node_id: "I1626:303003;1510:268817;1510:266786"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/TEXT:Heading[2]"
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
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/FRAME:Footer links[2]"
        name: Footer links
        type: FRAME
        w: 176
        h: 204
        gap: 12
      - node_id: "I1626:303003;1508:254418"
        path_key: "root/Desktop/Footer/FRAME:Container[3]"
        name: Container
        type: FRAME
        w: 1280
        h: 65
        gap: 32
      - node_id: "I1626:303003;1508:254419"
        path_key: "root/Desktop/Footer/Container/RECTANGLE:Divider[2]"
        name: Divider
        type: RECTANGLE
        w: 1216
        h: 1
        fill: "#EAECF0"
        fill_ref: Gray/200
        fill_ref_type: color_style
      - node_id: "I1626:303003;1508:254420"
        path_key: "root/Desktop/Footer/Container/FRAME:Content[3]"
        name: Content
        type: FRAME
        w: 1216
        h: 32
      - node_id: "I1626:303003;1508:254422"
        path_key: "root/Desktop/Footer/Container/Content/TEXT:Footer text"
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
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Logo/FRAME:Logo wrap"
        name: Logo wrap
        type: FRAME
        w: 142
        h: 32
        direction: row
        justify: space-between
        align: flex-start
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "I1624:472084;1288:30715;1083:50705;1101:66343"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Logo/Logo wrap/Logomark/FRAME:Content"
        name: Content
        type: FRAME
        w: 32
        h: 32
        direction: column
        justify: space-between
        align: flex-start
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "I1624:472084;1288:30715;1083:50705;1081:89"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Logo/Logo wrap/Logomark/Content/FRAME:Grid"
        name: Grid
        type: FRAME
        w: 32
        h: 32
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "I1624:472084;1288:30717;1042:35615"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/Button/INSTANCE:_Button base"
        name: _Button base
        type: INSTANCE
        w: 46
        h: 24
        direction: row
        justify: center
        align: center
        w_sizing: auto
        h_sizing: auto
  - chunk_id: repeats_2
    kind: repeats
    template_node_id: "I1624:472084;1288:30717"
    template_path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:Button"
    instance_of: Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
    repeat_count: 10
    template_attributes:
      children_text:
        [Home]
      w: 46
      h: 24
      direction: row
      justify: flex-start
      align: flex-start
      w_sizing: auto
      h_sizing: auto
    varying_keys:
      - Button/width
      - Button/_Button base/Text/text
      - Button/_Button base/Text/width
      - Button/Hierarchy
      - Button/_Button base/Text/fill
      - Button/Size
      - Button/_Button base/Size
    items:
      - node_id: "I1624:472084;1288:30720"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:Button[2]"
        diffs:
          Button/_Button base/Text/text: Pricing
          Button/width: "54"
        children_text:
          [Pricing]
      - node_id: "I1624:472084;1624:307186;1624:262067"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/_Navigation actions/INSTANCE:Button"
        diffs:
          Button/Hierarchy: Tertiary gray
          Button/_Button base/Text/text: Log in
          Button/width: "83"
          Button/_Button base/Text/width: "47"
        children_text:
          [Log in]
      - node_id: "I1624:472084;1624:307186;1624:262069"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/_Navigation actions/INSTANCE:Button[2]"
        diffs:
          Button/Hierarchy: Primary
          Button/_Button base/Text/text: Sign up
          Button/_Button base/Text/fill: "#FFFFFF"
          Button/width: "95"
          Button/_Button base/Text/width: "59"
        children_text:
          [Sign up]
      - node_id: "2842:297950"
        path_key: "root/Desktop/CTA section/Container/Content/Actions/INSTANCE:Button"
        diffs:
          Button/Size: xl
          Button/Hierarchy: Secondary gray
          Button/_Button base/Size: xl
          Button/_Button base/Text/text: Learn more
          Button/_Button base/Text/fill: "#344054"
          Button/width: "128"
          Button/_Button base/Text/width: "88"
        children_text:
          [Learn more]
      - node_id: "2842:297951"
        path_key: "root/Desktop/CTA section/Container/Content/Actions/INSTANCE:Button[2]"
        diffs:
          Button/Size: xl
          Button/Hierarchy: Primary
          Button/_Button base/Size: xl
          Button/_Button base/Text/text: Get started
          Button/_Button base/Text/fill: "#FFFFFF"
          Button/width: "129"
          Button/_Button base/Text/width: "89"
        children_text:
          [Get started]
      - node_id: "2842:297981"
        path_key: "root/Desktop/CTA section/Container/Content/Actions/INSTANCE:Button[3]"
        diffs:
          Button/Size: xl
          Button/Hierarchy: Secondary gray
          Button/_Button base/Size: xl
          Button/_Button base/Text/text: Learn more
          Button/_Button base/Text/fill: "#344054"
          Button/width: "128"
          Button/_Button base/Text/width: "88"
        children_text:
          [Learn more]
      - node_id: "2842:297982"
        path_key: "root/Desktop/CTA section/Container/Content/Actions/INSTANCE:Button[4]"
        diffs:
          Button/Size: xl
          Button/Hierarchy: Primary
          Button/_Button base/Size: xl
          Button/_Button base/Text/text: Get started
          Button/_Button base/Text/fill: "#FFFFFF"
          Button/width: "129"
          Button/_Button base/Text/width: "89"
        children_text:
          [Get started]
      - node_id: "I1626:303003;1508:252790"
        path_key: "root/Desktop/Footer/Container/Content/Email capture/INSTANCE:Button"
        diffs:
          Button/Hierarchy: Primary
          Button/_Button base/Text/text: Subscribe
          Button/_Button base/Text/fill: "#FFFFFF"
          Button/width: "115"
          Button/_Button base/Text/width: "79"
        children_text:
          [Subscribe]
      - node_id: "I1626:303003;1510:267383;1510:266836;1507:253519"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/_Footer link/INSTANCE:Button"
        diffs:
          Button/_Button base/Text/text: Overview
          Button/width: "74"
        children_text:
          [Overview]
      - node_id: "I1626:303003;1510:267383;1510:266838;1507:253529"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/_Footer link/INSTANCE:Button[2]"
        diffs:
          Button/_Button base/Text/text: Solutions
          Button/width: "73"
        children_text:
          [Solutions]
  - chunk_id: repeats_3
    kind: repeats
    template_node_id: "I1624:472084;1288:30718"
    template_path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:_Dropdown header navigation trigger"
    instance_of: Open=False, Type=Featured card, Breakpoint=Desktop
    repeat_count: 1
    template_attributes:
      children_text:
        [Products]
      w: 98
      h: 32
      padding: "4"
      direction: column
      justify: flex-start
      align: center
      w_sizing: auto
      h_sizing: auto
    varying_keys:
      - _Dropdown header navigation trigger/width
      - _Dropdown header navigation trigger/Button/_Button base/Text/text
      - _Dropdown header navigation trigger/Button/_Button base/Text/width
    items:
      - node_id: "I1624:472084;1288:30719"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:_Dropdown header navigation trigger[2]"
        diffs:
          _Dropdown header navigation trigger/Button/_Button base/Text/text: Resources
          _Dropdown header navigation trigger/width: "110"
          _Dropdown header navigation trigger/Button/_Button base/Text/width: "82"
        children_text:
          [Resources]
  - chunk_id: repeats_4
    kind: repeats
    template_node_id: "2842:297315"
    template_path_key: "root/Desktop/Blog page header/Section/Container/Content/Heading and supporting text/Heading and badge/INSTANCE:Badge"
    instance_of: Size=lg, Icon=False, Color=Primary
    repeat_count: 1
    template_attributes:
      children_text:
        [Our blog]
      w: 82
      h: 28
      direction: row
      justify: flex-start
      align: flex-start
      w_sizing: auto
      h_sizing: auto
    varying_keys:
      - Badge/width
      - Badge/Size
      - Badge/Color
      - Badge/_Badge base/fill
      - Badge/_Badge base/Text/text
      - Badge/_Badge base/Text/fill
      - Badge/_Badge base/Text/width
    items:
      - node_id: "I1626:303003;1510:267383;1510:266838;1507:253530"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/_Footer link/INSTANCE:Badge"
        diffs:
          Badge/Size: sm
          Badge/Color: Success
          Badge/_Badge base/fill: "#ECFDF3"
          Badge/_Badge base/Text/text: New
          Badge/_Badge base/Text/fill: "#027A48"
          Badge/width: "42"
          Badge/_Badge base/Text/width: "26"
        children_text:
          [New]
  - chunk_id: repeats_5
    kind: repeats
    template_node_id: "2842:297330"
    template_path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/INSTANCE:Blog post card"
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
      justify: flex-start
      align: flex-start
      w_sizing: fixed
      h_sizing: fixed
    varying_keys:
      - Blog post card/Content/Heading and subheading/Subheading/text
      - Blog post card/Content/Heading and subheading/Heading and text/Heading and icon/Heading/text
      - Blog post card/Content/Heading and subheading/Heading and text/Supporting text/text
      - Blog post card/Content/Avatar label group/width
      - Blog post card/Content/Avatar label group/Avatar/fill
      - Blog post card/Content/Avatar label group/Text and supporting text/width
      - Blog post card/Content/Avatar label group/Text and supporting text/Text/text
      - Blog post card/Content/Avatar label group/Text and supporting text/Text/width
      - Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/text
      - Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/width
    items:
      - node_id: "2842:297331"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/INSTANCE:Blog post card[2]"
        diffs:
          Blog post card/Content/Heading and subheading/Subheading/text: Product
          Blog post card/Content/Heading and subheading/Heading and text/Heading and icon/Heading/text: Migrating to Linear 101
          Blog post card/Content/Heading and subheading/Heading and text/Supporting text/text: Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.
          Blog post card/Content/Avatar label group/Avatar/fill: "#AA9C75"
          Blog post card/Content/Avatar label group/Text and supporting text/Text/text: Phoenix Baker
          Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/text: 19 Jan 2022
          Blog post card/Content/Avatar label group/width: "149"
          Blog post card/Content/Avatar label group/Text and supporting text/width: "97"
          Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/width: "81"
        children_text:
          - Product
          - Migrating to Linear 101
          - Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.
          - Phoenix Baker
          - 19 Jan 2022
      - node_id: "2842:297332"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/INSTANCE:Blog post card[3]"
        diffs:
          Blog post card/Content/Heading and subheading/Subheading/text: Software Engineering
          Blog post card/Content/Heading and subheading/Heading and text/Heading and icon/Heading/text: Building your API Stack
          Blog post card/Content/Heading and subheading/Heading and text/Supporting text/text: The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
          Blog post card/Content/Avatar label group/Avatar/fill: "#D4B5AD"
          Blog post card/Content/Avatar label group/Text and supporting text/Text/text: Lana Steiner
          Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/text: 18 Jan 2022
          Blog post card/Content/Avatar label group/width: "137"
          Blog post card/Content/Avatar label group/Text and supporting text/width: "85"
          Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/width: "81"
        children_text:
          - Software Engineering
          - Building your API Stack
          - The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
          - Lana Steiner
          - 18 Jan 2022
      - node_id: "2842:297334"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/INSTANCE:Blog post card[4]"
        diffs:
          Blog post card/Content/Heading and subheading/Subheading/text: Management
          Blog post card/Content/Heading and subheading/Heading and text/Heading and icon/Heading/text: Bill Walsh leadership lessons
          Blog post card/Content/Heading and subheading/Heading and text/Supporting text/text: Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
          Blog post card/Content/Avatar label group/Avatar/fill: "#ABB677"
          Blog post card/Content/Avatar label group/Text and supporting text/Text/text: Alec Whitten
          Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/text: 17 Jan 2022
          Blog post card/Content/Avatar label group/width: "140"
          Blog post card/Content/Avatar label group/Text and supporting text/width: "88"
          Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/width: "81"
        children_text:
          - Management
          - Bill Walsh leadership lessons
          - Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?
          - Alec Whitten
          - 17 Jan 2022
      - node_id: "2842:297335"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/INSTANCE:Blog post card[5]"
        diffs:
          Blog post card/Content/Heading and subheading/Subheading/text: Product
          Blog post card/Content/Heading and subheading/Heading and text/Heading and icon/Heading/text: PM mental models
          Blog post card/Content/Heading and subheading/Heading and text/Supporting text/text: Mental models are simple expressions of complex processes or relationships.
          Blog post card/Content/Avatar label group/Avatar/fill: "#BEA887"
          Blog post card/Content/Avatar label group/Text and supporting text/Text/text: Demi WIlkinson
          Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/text: 16 Jan 2022
          Blog post card/Content/Avatar label group/width: "157"
          Blog post card/Content/Avatar label group/Text and supporting text/width: "105"
          Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/width: "81"
        children_text:
          - Product
          - PM mental models
          - Mental models are simple expressions of complex processes or relationships.
          - Demi WIlkinson
          - 16 Jan 2022
      - node_id: "2842:297336"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/INSTANCE:Blog post card[6]"
        diffs:
          Blog post card/Content/Heading and subheading/Heading and text/Heading and icon/Heading/text: What is Wireframing?
          Blog post card/Content/Heading and subheading/Heading and text/Supporting text/text: Introduction to Wireframing and its Principles. Learn from the best in the industry.
          Blog post card/Content/Avatar label group/Avatar/fill: "#A2A8CD"
          Blog post card/Content/Avatar label group/Text and supporting text/Text/text: Candice Wu
          Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/text: 15 Jan 2022
          Blog post card/Content/Avatar label group/width: "134"
          Blog post card/Content/Avatar label group/Text and supporting text/width: "82"
          Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/width: "81"
        children_text:
          - Design
          - What is Wireframing?
          - Introduction to Wireframing and its Principles. Learn from the best in the industry.
          - Candice Wu
          - 15 Jan 2022
      - node_id: "2842:297338"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/INSTANCE:Blog post card[7]"
        diffs:
          Blog post card/Content/Heading and subheading/Heading and text/Heading and icon/Heading/text: How collaboration makes us better designers
          Blog post card/Content/Heading and subheading/Heading and text/Supporting text/text: Collaboration can make our teams stronger, and our individual designs better.
          Blog post card/Content/Avatar label group/Avatar/fill: "#D1BAA9"
          Blog post card/Content/Avatar label group/Text and supporting text/Text/text: Natali Craig
          Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/text: 14 Jan 2022
          Blog post card/Content/Avatar label group/width: "134"
          Blog post card/Content/Avatar label group/Text and supporting text/width: "82"
          Blog post card/Content/Avatar label group/Text and supporting text/Text/width: "79"
        children_text:
          - Design
          - How collaboration makes us better designers
          - Collaboration can make our teams stronger, and our individual designs better.
          - Natali Craig
          - 14 Jan 2022
      - node_id: "2842:297339"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/INSTANCE:Blog post card[8]"
        diffs:
          Blog post card/Content/Heading and subheading/Subheading/text: Product
          Blog post card/Content/Heading and subheading/Heading and text/Heading and icon/Heading/text: Our top 10 Javascript frameworks to use
          Blog post card/Content/Heading and subheading/Heading and text/Supporting text/text: JavaScript frameworks make development easy with extensive features and functionalities.
          Blog post card/Content/Avatar label group/Avatar/fill: "#D1DFC3"
          Blog post card/Content/Avatar label group/Text and supporting text/Text/text: Drew Cano
          Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/text: 13 Jan 2022
          Blog post card/Content/Avatar label group/width: "134"
          Blog post card/Content/Avatar label group/Text and supporting text/width: "82"
        children_text:
          - Product
          - Our top 10 Javascript frameworks to use
          - JavaScript frameworks make development easy with extensive features and functionalities.
          - Drew Cano
          - 13 Jan 2022
      - node_id: "2842:297340"
        path_key: "root/Desktop/Blog page header/Section/Container/Content/Row/INSTANCE:Blog post card[9]"
        diffs:
          Blog post card/Content/Heading and subheading/Subheading/text: Customer Success
          Blog post card/Content/Heading and subheading/Heading and text/Heading and icon/Heading/text: "Podcast: Creating a better CX Community"
          Blog post card/Content/Heading and subheading/Heading and text/Supporting text/text: Starting a community doesn’t need to be complicated, but how do you get started?
          Blog post card/Content/Avatar label group/Avatar/fill: "#CFC3A7"
          Blog post card/Content/Avatar label group/Text and supporting text/Text/text: Orlando Diggs
          Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/text: 12 Jan 2022
          Blog post card/Content/Avatar label group/width: "149"
          Blog post card/Content/Avatar label group/Text and supporting text/width: "97"
          Blog post card/Content/Avatar label group/Text and supporting text/Supporting text/width: "81"
        children_text:
          - Customer Success
          - "Podcast: Creating a better CX Community"
          - Starting a community doesn’t need to be complicated, but how do you get started?
          - Orlando Diggs
          - 12 Jan 2022
  - chunk_id: repeats_6
    kind: repeats
    template_node_id: "I1626:303003;1510:267383;1510:266836"
    template_path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link"
    instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
    repeat_count: 10
    template_attributes:
      children_text:
        [Overview]
      w: 74
      h: 24
      gap: 8
    varying_keys:
      [_Footer link/width, _Footer link/Button/_Button base/Text/text]
    items:
      - node_id: "I1626:303003;1510:267383;1510:266837"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[2]"
        diffs:
          _Footer link/Button/_Button base/Text/text: Features
          _Footer link/width: "68"
        children_text:
          [Features]
      - node_id: "I1626:303003;1510:267383;1510:266839"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[4]"
        diffs:
          _Footer link/Button/_Button base/Text/text: Tutorials
          _Footer link/width: "68"
        children_text:
          [Tutorials]
      - node_id: "I1626:303003;1510:267383;1510:266840"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[5]"
        diffs:
          _Footer link/Button/_Button base/Text/text: Pricing
          _Footer link/width: "54"
        children_text:
          [Pricing]
      - node_id: "I1626:303003;1510:267383;1510:266841"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[6]"
        diffs:
          _Footer link/Button/_Button base/Text/text: Releases
          _Footer link/width: "70"
        children_text:
          [Releases]
      - node_id: "I1626:303003;1510:268817;1510:266836"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[7]"
        diffs:
          _Footer link/Button/_Button base/Text/text: About us
          _Footer link/width: "70"
        children_text:
          [About us]
      - node_id: "I1626:303003;1510:268817;1510:266837"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[8]"
        diffs:
          _Footer link/Button/_Button base/Text/text: Careers
          _Footer link/width: "62"
        children_text:
          [Careers]
      - node_id: "I1626:303003;1510:268817;1510:266838"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[9]"
        diffs:
          _Footer link/Button/_Button base/Text/text: Press
          _Footer link/width: "44"
        children_text:
          [Press]
      - node_id: "I1626:303003;1510:268817;1510:266839"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[10]"
        diffs:
          _Footer link/Button/_Button base/Text/text: News
          _Footer link/width: "44"
        children_text:
          [News]
      - node_id: "I1626:303003;1510:268817;1510:266840"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[11]"
        diffs:
          _Footer link/Button/_Button base/Text/text: Media kit
          _Footer link/width: "71"
        children_text:
          [Media kit]
      - node_id: "I1626:303003;1510:268817;1510:266841"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[12]"
        diffs:
          _Footer link/Button/_Button base/Text/text: Contact
          _Footer link/width: "62"
        children_text:
          [Contact]
  - chunk_id: repeats_7
    kind: repeats
    template_node_id: "I1626:303003;1510:268817"
    template_path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[2]"
    instance_of: Color=Gray, Theme=Light
    repeat_count: 4
    template_attributes:
      children_text:
        [Company, About us, Careers, Press, News, Media kit, Contact]
      w: 176
      h: 240
      gap: 16
    varying_keys:
      - _Footer links column/Heading/text
      - _Footer links column/Footer links/_Footer link/width
      - _Footer links column/Footer links/_Footer link/Button/_Button base/Text/text
      - "_Footer links column/Footer links/_Footer link[2]/width"
      - "_Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/text"
      - "_Footer links column/Footer links/_Footer link[3]/width"
      - "_Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/text"
      - "_Footer links column/Footer links/_Footer link[4]/width"
      - "_Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/text"
      - "_Footer links column/Footer links/_Footer link[5]/width"
      - "_Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/text"
      - "_Footer links column/Footer links/_Footer link[6]/width"
      - "_Footer links column/Footer links/_Footer link[6]/Button/_Button base/Text/text"
    items:
      - node_id: "I1626:303003;1510:270256"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[3]"
        diffs:
          _Footer links column/Heading/text: Resources
          _Footer links column/Footer links/_Footer link/Button/_Button base/Text/text: Blog
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/text: Newsletter
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/text: Events
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/text: Help centre
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/text: Tutorials
          _Footer links column/Footer links/_Footer link[6]/Button/_Button base/Text/text: Support
          _Footer links column/Footer links/_Footer link/width: "35"
          _Footer links column/Footer links/_Footer link[2]/width: "86"
          _Footer links column/Footer links/_Footer link[3]/width: "53"
          _Footer links column/Footer links/_Footer link[4]/width: "90"
          _Footer links column/Footer links/_Footer link[5]/width: "68"
          _Footer links column/Footer links/_Footer link[6]/width: "63"
        children_text:
          - Resources
          - Blog
          - Newsletter
          - Events
          - Help centre
          - Tutorials
          - Support
      - node_id: "I1626:303003;1510:270757"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[4]"
        diffs:
          _Footer links column/Heading/text: Use cases
          _Footer links column/Footer links/_Footer link/Button/_Button base/Text/text: Startups
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/text: Enterprise
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/text: Government
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/text: SaaS
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/text: Marketplaces
          _Footer links column/Footer links/_Footer link[6]/Button/_Button base/Text/text: Ecommerce
          _Footer links column/Footer links/_Footer link/width: "68"
          _Footer links column/Footer links/_Footer link[2]/width: "81"
          _Footer links column/Footer links/_Footer link[3]/width: "96"
          _Footer links column/Footer links/_Footer link[4]/width: "40"
          _Footer links column/Footer links/_Footer link[5]/width: "106"
          _Footer links column/Footer links/_Footer link[6]/width: "92"
        children_text:
          - Use cases
          - Startups
          - Enterprise
          - Government
          - SaaS
          - Marketplaces
          - Ecommerce
      - node_id: "I1626:303003;1510:272166"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[5]"
        diffs:
          _Footer links column/Heading/text: Social
          _Footer links column/Footer links/_Footer link/Button/_Button base/Text/text: Twitter
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/text: LinkedIn
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/text: Facebook
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/text: GitHub
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/text: AngelList
          _Footer links column/Footer links/_Footer link[6]/Button/_Button base/Text/text: Dribbble
          _Footer links column/Footer links/_Footer link/width: "56"
          _Footer links column/Footer links/_Footer link[2]/width: "66"
          _Footer links column/Footer links/_Footer link[3]/width: "76"
          _Footer links column/Footer links/_Footer link[4]/width: "55"
          _Footer links column/Footer links/_Footer link[5]/width: "74"
          _Footer links column/Footer links/_Footer link[6]/width: "66"
        children_text:
          [Social, Twitter, LinkedIn, Facebook, GitHub, AngelList, Dribbble]
      - node_id: "I1626:303003;1510:273057"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[6]"
        diffs:
          _Footer links column/Heading/text: Legal
          _Footer links column/Footer links/_Footer link/Button/_Button base/Text/text: Terms
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/text: Privacy
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/text: Cookies
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/text: Licenses
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/text: Settings
          _Footer links column/Footer links/_Footer link/width: "49"
          _Footer links column/Footer links/_Footer link[2]/width: "58"
          _Footer links column/Footer links/_Footer link[3]/width: "63"
          _Footer links column/Footer links/_Footer link[4]/width: "69"
          _Footer links column/Footer links/_Footer link[5]/width: "65"
        children_text:
          [Legal, Terms, Privacy, Cookies, Licenses, Settings, Contact]
```

<!-- chars: 96769 -->