## Figma Component: Desktop

### Figma URL
https://www.figma.com/design/4rL4UfUHaoz4AaeQIuEUOl/%E2%9D%96-Untitled-UI-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=1624-430477&t=ZVjlOlHlNQQs5AMe-11

### Implementation Instructions
1. Use get_screenshot on the Figma URL above and **save it to `.figma/desktop.png`** (relative to working directory). Reference this local file whenever you need to check the design — do not call get_screenshot again.
2. Read the anatomy tree below to understand the component structure.
3. Read the YAML specs — it has every layer, color, font, spacing, and token value you need.
4. Check the project's working directory or `package.json` for the icon library in use (e.g. Phosphor, Lucide, Heroicons). Use matching icons from that library based on the `instance_of` names in the anatomy (e.g. `instance_of: ForkKnife` → use ForkKnife from the detected library).
5. Check the project's `package.json` to detect the framework in use, then build the component accordingly.
6. Build the component exactly as specified. Match the structure, styles (fills, strokes, fonts), and layout (direction, gap, padding).
7. Use resolved_tokens to map token names to actual values (e.g. hex colors, font names).
8. Keep it minimal — only implement what the specs describe, nothing more.
9. **Visual QA** — render your component at 1440×4538px (1x scale, no device emulation). Take a screenshot and compare with `.figma/desktop.png`. Verify:
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
- Pricing page header (FRAME)
- Section (FRAME)
- Container (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading and badge (FRAME)
- Badge (INSTANCE) — instance of Size=lg, Icon=False, Color=Primary
- _Badge base (INSTANCE) — instance of Icon=False
- Text (TEXT) — "Pricing plans"
- Heading (TEXT) — "Plans for all sizes"
- Supporting text (TEXT) — "Simple, transparent pricing that grows …"
- Toggle (INSTANCE) — instance of Pressed=True, Size=md, Text=True, Supporting text=False, State=Default
- _Toggle base (INSTANCE) — instance of Pressed=True, Size=md, Theme=Dark, State=Default
- Text (TEXT) — "Annual pricing (save 20%)"
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
- _Pricing tier card (FRAME)
- Header (FRAME)
- Heading and price (FRAME)
- Heading and icon (FRAME)
- Featured icon (INSTANCE) — instance of Size=md, Color=Primary, Theme=Light circle outline
- Heading (TEXT) — "Basic plan"
- Price (TEXT) — "$10/mth"
- Supporting text (TEXT) — "Billed annually."
- Content (FRAME)
- Check items (FRAME)
- Check item text (INSTANCE) — instance of Size=sm, Color=Primary, Breakpoint=Desktop
- Check icon (INSTANCE) — instance of Size=sm, Color=Primary
- Text wrap (FRAME)
- Text (TEXT) — "Access to all basic features"
- Check item text (INSTANCE) — instance of Size=sm, Color=Primary, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Primary, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Primary, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Primary, Breakpoint=Desktop
- Footer (FRAME)
- Actions (FRAME)
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
- _Pricing tier card (FRAME)
- Header (FRAME)
- Heading and price (FRAME)
- Heading and icon (FRAME)
- Featured icon (INSTANCE) — instance of Size=md, Color=Primary, Theme=Light circle outline
- Heading (TEXT) — "Business plan"
- Price (TEXT) — "$20/mth"
- Supporting text (TEXT) — "Billed annually."
- Content (FRAME)
- Check items (FRAME)
- Check item text (INSTANCE) — instance of Size=sm, Color=Primary, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Primary, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Primary, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Primary, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Primary, Breakpoint=Desktop
- Footer (FRAME)
- Actions (FRAME)
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
- _Pricing tier card (FRAME)
- Header (FRAME)
- Heading and price (FRAME)
- Heading and icon (FRAME)
- Featured icon (INSTANCE) — instance of Size=md, Color=Primary, Theme=Light circle outline
- Heading (TEXT) — "Enterprise plan"
- Price (TEXT) — "$40/mth"
- Supporting text (TEXT) — "Billed annually."
- Content (FRAME)
- Check items (FRAME)
- Check item text (INSTANCE) — instance of Size=sm, Color=Primary, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Primary, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Primary, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Primary, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Primary, Breakpoint=Desktop
- Footer (FRAME)
- Actions (FRAME)
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
- CTA section (FRAME)
- Container (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading (TEXT) — "Start your 30-day free trial"
- Supporting text (TEXT) — "Join over 4,000+ startups already growi…"
- Actions (FRAME)
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Secondary gray, Icon=False, Destructive=False, State=Default
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
- Features section (FRAME)
- Container (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading and subheading (FRAME)
- Subheading (TEXT) — "Features"
- Heading (TEXT) — "Beautiful analytics to grow smarter"
- Supporting text (TEXT) — "Powerful, self-serve product and growth…"
- Container (FRAME)
- Content (FRAME)
- _Feature text (INSTANCE) — instance of Type=Featured icon top left, Action=True, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle outline
- Text and supporting text (FRAME)
- Text (TEXT) — "Share team inboxes"
- Supporting text (TEXT) — "Whether you have a team of 2 or 200, ou…"
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
- _Button base (INSTANCE) — instance of Size=lg, Icon=Trailing
- Text (TEXT) — "Learn more"
- arrow-right (INSTANCE) — instance of arrow-right
- _Feature text (INSTANCE) — instance of Type=Featured icon top left, Action=True, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle outline
- Text and supporting text (FRAME)
- Text (TEXT) — "Deliver instant answers"
- Supporting text (TEXT) — "An all-in-one customer service platform…"
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
- _Feature text (INSTANCE) — instance of Type=Featured icon top left, Action=True, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle outline
- Text and supporting text (FRAME)
- Text (TEXT) — "Manage your team with reports"
- Supporting text (TEXT) — "Measure what matters with Untitled’s ea…"
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
- Content (FRAME)
- _Feature text (INSTANCE) — instance of Type=Featured icon top left, Action=True, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle outline
- Text and supporting text (FRAME)
- Text (TEXT) — "Connect with customers"
- Supporting text (TEXT) — "Solve a problem or close a sale in real…"
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
- _Feature text (INSTANCE) — instance of Type=Featured icon top left, Action=True, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle outline
- Text and supporting text (FRAME)
- Text (TEXT) — "Connect the tools you already use"
- Supporting text (TEXT) — "Explore 100+ integrations that make you…"
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
- _Feature text (INSTANCE) — instance of Type=Featured icon top left, Action=True, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle outline
- Text and supporting text (FRAME)
- Text (TEXT) — "Our people make the difference"
- Supporting text (TEXT) — "We’re an extension of your customer ser…"
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
- Social proof section (FRAME)
- Container (FRAME)
- Text (TEXT) — "Join 4,000+ companies already growing"
- Logos (FRAME)
- Company logo (INSTANCE) — instance of Company=Layers, Logotype=True, Color=Primary, Theme=Light
- Company logo (INSTANCE) — instance of Company=Sisyphus, Logotype=True, Color=Primary, Theme=Light
- Company logo (INSTANCE) — instance of Company=Circooles, Logotype=True, Color=Primary, Theme=Light
- Company logo (INSTANCE) — instance of Company=Catalog, Logotype=True, Color=Primary, Theme=Light
- Company logo (INSTANCE) — instance of Company=Quotient, Logotype=True, Color=Primary, Theme=Light
- FAQ section (FRAME)
- Container (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading and subheading (FRAME)
- Subheading (TEXT) — "Support"
- Heading (TEXT) — "Frequently asked questions"
- Supporting text (TEXT) — "Everything you need to know about the p…"
- Container (FRAME)
- Content (FRAME)
- _Feature text (INSTANCE) — instance of Type=Featured icon left, Action=False, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle outline
- Text and supporting text (FRAME)
- Text (TEXT) — "Is there a free trial available?"
- Supporting text (TEXT) — "Yes, you can try us for free for 30 day…"
- _Feature text (INSTANCE) — instance of Type=Featured icon left, Action=False, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle outline
- Text and supporting text (FRAME)
- Text (TEXT) — "Can I change my plan later?"
- Supporting text (TEXT) — "Of course. Our pricing scales with your…"
- _Feature text (INSTANCE) — instance of Type=Featured icon left, Action=False, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle outline
- Text and supporting text (FRAME)
- Text (TEXT) — "What is your cancellation policy?"
- Supporting text (TEXT) — "We understand that things change. You c…"
- _Feature text (INSTANCE) — instance of Type=Featured icon left, Action=False, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle outline
- Text and supporting text (FRAME)
- Text (TEXT) — "Can other info be added to an invoice?"
- Supporting text (TEXT) — "At the moment, the only way to add addi…"
- Image (FRAME)
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
- Check item text (INSTANCE)
- Check item text (INSTANCE)
- Check item text (INSTANCE)
- Check item text (INSTANCE)
```

### Specs Data (YAML)
```yaml
schema: specs-plugin.agent_pack.v11.yaml.compact
generated_at: "2026-02-10T11:46:46.244Z"
selection:
  node_id: "1624:430477"
  name: Desktop
  type: FRAME
  clips_content: true
summary:
  anatomy_nodes_total: 263
  property_groups_total: 0
  property_variants_total: 0
  variable_refs_total: 0
  instance_templates: 9
  deduplicated_instances: 50
  chunks_total: 15
  truncated:
    anatomy: false
    anatomy_included: 263
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
  Display lg/Semibold: "#101828"
  Text xl/Regular: "#E9D7FE"
  Primary/600: "#7F56D9"
  Primary/100: "#F4EBFF"
  Primary/200: "#E9D7FE"
  Primary/300: "#D6BBFB"
  Gray/200: "#EAECF0"
  Text xl/Semibold: "#6941C6"
  Text md/Regular: "#98A2B3"
  Gray/50: "#F9FAFB"
  Display sm/Semibold: "#42307D"
  Display md/Semibold: "#FFFFFF"
  Text xl/Medium: "#101828"
  Text md/Medium: "#6941C6"
  Gray/500: "#667085"
  Primary/800: "#53389E"
  Gray/300: "#D0D5DD"
  Text sm/Semibold: "#98A2B3"
text_index:
  - id: "1624:430479"
    path: "root/Desktop/INSTANCE:Dropdown header navigation"
    children_text:
      [Home, Products, Resources, Pricing, Log in, Sign up]
  - id: "I1624:430479;1288:30717"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:Button"
    children_text:
      [Home]
  - id: "I1624:430479;1288:30718"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:_Dropdown header navigation trigger"
    children_text:
      [Products]
  - id: "I1624:430479;1288:30718;1288:478"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/INSTANCE:Button"
    children_text:
      [Products]
  - id: "I1624:430479;1288:30718;1288:478;1042:35579"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/INSTANCE:_Button base"
    children_text:
      [Products]
  - id: "I1624:430479;1288:30718;1288:478;1042:35579;1054:7014"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/_Button base/TEXT:Text"
    text: Products
  - id: "I1624:430479;1624:307186"
    path: "root/Desktop/Dropdown header navigation/Header/Container/INSTANCE:_Navigation actions"
    children_text:
      [Log in, Sign up]
  - id: "2842:296020"
    path: "root/Desktop/Pricing page header/Section/Container/Content/Heading and supporting text/Heading and badge/INSTANCE:Badge"
    children_text:
      [Pricing plans]
  - id: "I2842:296020;1046:3827"
    path: "root/Desktop/Pricing page header/Section/Container/Content/Heading and supporting text/Heading and badge/Badge/INSTANCE:_Badge base"
    children_text:
      [Pricing plans]
  - id: "I2842:296020;1046:3827;1046:26"
    path: "root/Desktop/Pricing page header/Section/Container/Content/Heading and supporting text/Heading and badge/Badge/_Badge base/TEXT:Text"
    text: Pricing plans
  - id: "2842:296021"
    path: "root/Desktop/Pricing page header/Section/Container/Content/Heading and supporting text/Heading and badge/TEXT:Heading"
    text: Plans for all sizes
  - id: "2842:296022"
    path: "root/Desktop/Pricing page header/Section/Container/Content/Heading and supporting text/TEXT:Supporting text"
    text: Simple, transparent pricing that grows with you. Try any plan free for 30 days.
  - id: "2842:296023"
    path: "root/Desktop/Pricing page header/Section/Container/Content/INSTANCE:Toggle"
    children_text:
      [Annual pricing (save 20%)]
  - id: "I2842:296023;1102:4317"
    path: "root/Desktop/Pricing page header/Section/Container/Content/Toggle/TEXT:Text"
    text: Annual pricing (save 20%)
  - id: "4551:168418"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/Heading and icon/TEXT:Heading"
    text: Basic plan
  - id: "4551:168419"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/TEXT:Price"
    text: $10/mth
  - id: "4551:168420"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/TEXT:Supporting text"
    text: Billed annually.
  - id: "4551:168423"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text"
    children_text:
      [Access to all basic features]
  - id: "I4551:168423;1345:2762"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/Check item text/Text wrap/TEXT:Text"
    text: Access to all basic features
  - id: "4551:168488"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/Heading and icon/TEXT:Heading[2]"
    text: Business plan
  - id: "4551:168489"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/TEXT:Price[2]"
    text: $20/mth
  - id: "4551:168490"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/TEXT:Supporting text[2]"
    text: Billed annually.
  - id: "4551:168558"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/Heading and icon/TEXT:Heading[3]"
    text: Enterprise plan
  - id: "4551:168559"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/TEXT:Price[3]"
    text: $40/mth
  - id: "4551:168560"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/TEXT:Supporting text[3]"
    text: Billed annually.
  - id: "2842:296951"
    path: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Heading"
    text: Start your 30-day free trial
  - id: "2842:296952"
    path: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Supporting text"
    text: Join over 4,000+ startups already growing with Untitled.
  - id: "2842:296575"
    path: "root/Desktop/Features section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
    text: Features
  - id: "2842:296576"
    path: "root/Desktop/Features section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
    text: Beautiful analytics to grow smarter
  - id: "2842:296577"
    path: "root/Desktop/Features section/Container/Content/Heading and supporting text/TEXT:Supporting text"
    text: Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
  - id: "2842:296580"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text"
    children_text:
      - Share team inboxes
      - Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
      - Learn more
  - id: "I2842:296580;1361:1687"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text"
    text: Share team inboxes
  - id: "I2842:296580;1361:1688"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text"
    text: Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
  - id: "I2842:296580;1361:1693"
    path: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button"
    children_text:
      [Learn more]
  - id: "I2842:296580;1361:1693;1041:38683"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Button/INSTANCE:_Button base"
    children_text:
      [Learn more]
  - id: "I2842:296580;1361:1693;1041:38683;1054:7014"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Button/_Button base/TEXT:Text"
    text: Learn more
  - id: "2842:296581"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[2]"
    children_text:
      - Deliver instant answers
      - An all-in-one customer service platform that helps you balance everything your customers need to be happy.
      - Learn more
  - id: "I2842:296581;1361:1687"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[2]"
    text: Deliver instant answers
  - id: "I2842:296581;1361:1688"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[2]"
    text: An all-in-one customer service platform that helps you balance everything your customers need to be happy.
  - id: "2842:296582"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[3]"
    children_text:
      - Manage your team with reports
      - Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
      - Learn more
  - id: "I2842:296582;1361:1687"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[3]"
    text: Manage your team with reports
  - id: "I2842:296582;1361:1688"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[3]"
    text: Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
  - id: "2842:296584"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[4]"
    children_text:
      - Connect with customers
      - Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
      - Learn more
  - id: "I2842:296584;1361:1687"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[4]"
    text: Connect with customers
  - id: "I2842:296584;1361:1688"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[4]"
    text: Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
  - id: "2842:296585"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[5]"
    children_text:
      - Connect the tools you already use
      - Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
      - Learn more
  - id: "I2842:296585;1361:1687"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[5]"
    text: Connect the tools you already use
  - id: "I2842:296585;1361:1688"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[5]"
    text: Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
  - id: "2842:296586"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[6]"
    children_text:
      - Our people make the difference
      - We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
      - Learn more
  - id: "I2842:296586;1361:1687"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[6]"
    text: Our people make the difference
  - id: "I2842:296586;1361:1688"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[6]"
    text: We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
  - id: "2842:296975"
    path: "root/Desktop/Social proof section/Container/TEXT:Text"
    text: Join 4,000+ companies already growing
  - id: "2842:297014"
    path: "root/Desktop/FAQ section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
    text: Support
  - id: "2842:297015"
    path: "root/Desktop/FAQ section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
    text: Frequently asked questions
  - id: "2842:297016"
    path: "root/Desktop/FAQ section/Container/Content/Heading and supporting text/TEXT:Supporting text"
    text: Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.
  - id: "2842:297019"
    path: "root/Desktop/FAQ section/Container/Content/INSTANCE:_Feature text"
    children_text:
      - Is there a free trial available?
      - Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.
  - id: "I2842:297019;1327:180817"
    path: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Text"
    text: Is there a free trial available?
  - id: "I2842:297019;1327:180818"
    path: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text"
    text: Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.
  - id: "2842:297020"
    path: "root/Desktop/FAQ section/Container/Content/INSTANCE:_Feature text[2]"
    children_text:
      - Can I change my plan later?
      - Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.
  - id: "I2842:297020;1327:180817"
    path: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[2]"
    text: Can I change my plan later?
  - id: "I2842:297020;1327:180818"
    path: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[2]"
    text: Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.
  - id: "2842:297021"
    path: "root/Desktop/FAQ section/Container/Content/INSTANCE:_Feature text[3]"
    children_text:
      - What is your cancellation policy?
      - We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.
  - id: "I2842:297021;1327:180817"
    path: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[3]"
    text: What is your cancellation policy?
  - id: "I2842:297021;1327:180818"
    path: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[3]"
    text: We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.
  - id: "2842:297022"
    path: "root/Desktop/FAQ section/Container/Content/INSTANCE:_Feature text[4]"
    children_text:
      - Can other info be added to an invoice?
      - At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.
  - id: "I2842:297022;1327:180817"
    path: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[4]"
    text: Can other info be added to an invoice?
  - id: "I2842:297022;1327:180818"
    path: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[4]"
    text: At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.
  - id: "2842:297052"
    path: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Heading[2]"
    text: Start your free trial
  - id: "2842:297053"
    path: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Supporting text[2]"
    text: Join over 4,000+ startups already growing with Untitled.
  - id: "1624:430486"
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
  - id: "I1624:430486;1508:252786"
    path: "root/Desktop/Footer/Container/Content/Text and supporting text/TEXT:Text"
    text: Join our newsletter
  - id: "I1624:430486;1508:252787"
    path: "root/Desktop/Footer/Container/Content/Text and supporting text/TEXT:Supporting text"
    text: We’ll send you a nice letter once per week. No spam.
  - id: "I1624:430486;1508:252789"
    path: "root/Desktop/Footer/Container/Content/Email capture/INSTANCE:Input field"
    children_text:
      [Enter your email]
  - id: "I1624:430486;1508:252789;1091:63800"
    path: "root/Desktop/Footer/Container/Content/Email capture/Input field/INSTANCE:_Input field base"
    children_text:
      [Enter your email]
  - id: "I1624:430486;1508:252789;1091:63800;1088:6"
    path: "root/Desktop/Footer/Container/Content/Email capture/Input field/_Input field base/Input with label/Input/Content/TEXT:Text"
    text: Enter your email
  - id: "I1624:430486;1510:267383"
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
  - id: "I1624:430486;1510:267383;1510:266786"
    path: "root/Desktop/Footer/Container/Content/_Footer links column/TEXT:Heading"
    text: Product
  - id: "I1624:430486;1510:267383;1510:266836"
    path: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link"
    children_text:
      [Overview]
  - id: "I1624:430486;1510:267383;1510:266838"
    path: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[3]"
    children_text:
      [Solutions, New]
  - id: "I1624:430486;1510:268817"
    path: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[2]"
    children_text:
      [Company, About us, Careers, Press, News, Media kit, Contact]
  - id: "I1624:430486;1510:268817;1510:266786"
    path: "root/Desktop/Footer/Container/Content/_Footer links column/TEXT:Heading[2]"
    text: Company
  - id: "I1624:430486;1508:254422"
    path: "root/Desktop/Footer/Container/Content/TEXT:Footer text"
    text: © 2077 Untitled UI. All rights reserved.
chunks:
  - chunk_id: anatomy_1
    kind: anatomy
    item_count: 50
    path_range:
      - "root/FRAME:Desktop"
      - "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/TEXT:Price"
    node_ids:
      - "1624:430477"
      - "1624:430479"
      - "I1624:430479;1288:30712"
      - "I1624:430479;1288:30713"
      - "I1624:430479;1288:30714"
      - "I1624:430479;1288:30715"
      - "I1624:430479;1288:30715;1083:50705"
      - "I1624:430479;1288:30716"
      - "I1624:430479;1288:30717"
      - "I1624:430479;1288:30718"
      - "I1624:430479;1288:30718;1288:478"
      - "I1624:430479;1288:30718;1288:478;1042:35579"
      - "I1624:430479;1288:30718;1288:478;1042:35579;1054:7014"
      - "I1624:430479;1288:30718;1288:478;1042:35579;1054:7015"
      - "I1624:430479;1288:30719"
      - "I1624:430479;1288:30720"
      - "I1624:430479;1624:307186"
      - "I1624:430479;1624:307186;1624:262067"
      - "I1624:430479;1624:307186;1624:262069"
      - "2842:296014"
      - "2842:296015"
      - "2842:296016"
      - "2842:296017"
      - "2842:296018"
      - "2842:296019"
      - "2842:296020"
      - "I2842:296020;1046:3827"
      - "I2842:296020;1046:3827;1046:26"
      - "2842:296021"
      - "2842:296022"
      - "2842:296023"
      - "I2842:296023;1102:4289"
      - "I2842:296023;1102:4317"
      - "2842:296024"
      - "2842:296025"
      - "2842:296026"
      - "2842:296027"
      - "2842:296028"
      - "2842:296029"
      - "2842:296030"
      - "2842:296031"
      - "2842:296032"
      - "2842:296033"
      - "4551:168413"
      - "4551:168414"
      - "4551:168415"
      - "4551:168416"
      - "4551:168417"
      - "4551:168418"
      - "4551:168419"
    items:
      - node_id: "1624:430477"
        path_key: "root/FRAME:Desktop"
        name: Desktop
        type: FRAME
        w: 1440
        h: 4538
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        padding: "0"
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "1624:430479"
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
        stroke_sides: "bottom: 1px"
      - node_id: "I1624:430479;1288:30712"
        path_key: "root/Desktop/Dropdown header navigation/FRAME:Header"
        name: Header
        type: FRAME
        w: 1440
        h: 80
        padding: "0"
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "I1624:430479;1288:30713"
        path_key: "root/Desktop/Dropdown header navigation/Header/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 44
        padding: "0"
        direction: row
        justify: space-between
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I1624:430479;1288:30714"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 586
        h: 32
        padding: "0"
        gap: 40
        direction: row
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:430479;1288:30715"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/INSTANCE:Logo"
        name: Logo
        type: INSTANCE
        instance_of: Dark mode=False
        w: 142
        h: 32
        padding: "0"
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:430479;1288:30715;1083:50705"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Logo/Logo wrap/INSTANCE:Logomark"
        name: Logomark
        type: INSTANCE
        instance_of: Logomark
        w: 32
        h: 32
        fill: "#D0D5DD"
        padding: "0"
        shadow: "0px 1px 2px #101828/6%"
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:430479;1288:30716"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/FRAME:Navigation"
        name: Navigation
        type: FRAME
        w: 404
        h: 32
        padding: "0"
        gap: 32
        direction: row
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:430479;1288:30717"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Home]
        w: 46
        h: 24
        padding: "0"
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:430479;1288:30718"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:_Dropdown header navigation trigger"
        name: _Dropdown header navigation trigger
        type: INSTANCE
        instance_of: Open=False, Type=Featured card, Breakpoint=Desktop
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
      - node_id: "I1624:430479;1288:30718;1288:478"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link gray, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Products]
        w: 98
        h: 24
        padding: "0"
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:430479;1288:30718;1288:478;1042:35579"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/INSTANCE:_Button base"
        name: _Button base
        type: INSTANCE
        instance_of: Size=lg, Icon=Trailing
        children_text:
          [Products]
        w: 98
        h: 24
        padding: "0"
        gap: 8
        direction: row
        justify: center
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:430479;1288:30718;1288:478;1042:35579;1054:7014"
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
      - node_id: "I1624:430479;1288:30718;1288:478;1042:35579;1054:7015"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/_Button base/INSTANCE:chevron-down"
        name: chevron-down
        type: INSTANCE
        instance_of: chevron-down
        w: 20
        h: 20
        fill: "#667085"
      - node_id: "I1624:430479;1288:30719"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:_Dropdown header navigation trigger[2]"
        name: _Dropdown header navigation trigger
        type: INSTANCE
        instance_of: Open=False, Type=Featured card, Breakpoint=Desktop
        children_text:
          [Resources]
        w: 110
        h: 32
        padding: "4"
        direction: column
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:430479;1288:30720"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Pricing]
        w: 54
        h: 24
        padding: "0"
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:430479;1624:307186"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/INSTANCE:_Navigation actions"
        name: _Navigation actions
        type: INSTANCE
        instance_of: Logged in=False, Breakpoint=Desktop
        children_text:
          [Log in, Sign up]
        w: 190
        h: 44
        padding: "0"
        gap: 12
        direction: row
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:430479;1624:307186;1624:262067"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/_Navigation actions/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Tertiary gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Log in]
        w: 83
        h: 44
        radius: 8
        padding: "0"
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "I1624:430479;1624:307186;1624:262069"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/_Navigation actions/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
        children_text:
          [Sign up]
        w: 95
        h: 44
        radius: 8
        padding: "0"
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "2842:296014"
        path_key: "root/Desktop/FRAME:Pricing page header"
        name: Pricing page header
        type: FRAME
        w: 1440
        h: 1092
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        padding: "0"
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2842:296015"
        path_key: "root/Desktop/Pricing page header/FRAME:Section"
        name: Section
        type: FRAME
        w: 1440
        h: 414
        fill: "#F9F5FF"
        fill_ref: Primary/50
        fill_ref_type: color_style
        padding: "96"
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:296016"
        path_key: "root/Desktop/Pricing page header/Section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 222
        padding: "0"
        gap: 32
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:296017"
        path_key: "root/Desktop/Pricing page header/Section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 222
        padding: "0"
        gap: 40
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:296018"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 1024
        h: 158
        padding: "0"
        gap: 24
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:296019"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/Heading and supporting text/FRAME:Heading and badge"
        name: Heading and badge
        type: FRAME
        w: 1024
        h: 104
        padding: "0"
        gap: 16
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:296020"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/Heading and supporting text/Heading and badge/INSTANCE:Badge"
        name: Badge
        type: INSTANCE
        instance_of: Size=lg, Icon=False, Color=Primary
        children_text:
          [Pricing plans]
        w: 110
        h: 28
        padding: "0"
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "I2842:296020;1046:3827"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/Heading and supporting text/Heading and badge/Badge/INSTANCE:_Badge base"
        name: _Badge base
        type: INSTANCE
        instance_of: Icon=False
        children_text:
          [Pricing plans]
        w: 110
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
      - node_id: "I2842:296020;1046:3827;1046:26"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/Heading and supporting text/Heading and badge/Badge/_Badge base/TEXT:Text"
        name: Text
        type: TEXT
        text: Pricing plans
        w: 86
        h: 20
        fill: "#6941C6"
        fill_ref: Text sm/Medium
        fill_ref_type: color_style
        font_size: 14
        font: Inter Medium
        line_height: 20px
        text_style: Text sm/Medium
      - node_id: "2842:296021"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/Heading and supporting text/Heading and badge/TEXT:Heading"
        name: Heading
        type: TEXT
        text: Plans for all sizes
        w: 1024
        h: 60
        fill: "#42307D"
        fill_ref: Display lg/Semibold
        fill_ref_type: color_style
        font_size: 48
        font: Inter Semi Bold
        line_height: 60px
        text_style: Display lg/Semibold
      - node_id: "2842:296022"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/Heading and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Simple, transparent pricing that grows with you. Try any plan free for 30 days.
        w: 1024
        h: 30
        fill: "#6941C6"
        fill_ref: Text xl/Regular
        fill_ref_type: color_style
        font_size: 20
        font: Inter Regular
        line_height: 30px
        text_style: Text xl/Regular
      - node_id: "2842:296023"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/INSTANCE:Toggle"
        name: Toggle
        type: INSTANCE
        instance_of: Pressed=True, Size=md, Text=True, Supporting text=False, State=Default
        children_text:
          [Annual pricing (save 20%)]
        w: 256
        h: 24
        padding: "0"
        gap: 12
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "I2842:296023;1102:4289"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/Toggle/INSTANCE:_Toggle base"
        name: _Toggle base
        type: INSTANCE
        instance_of: Pressed=True, Size=md, Theme=Dark, State=Default
        w: 44
        h: 24
        fill: "#7F56D9"
        fill_ref: Primary/600
        fill_ref_type: color_style
        radius: 12
        padding: "2"
        direction: row
        justify: flex-end
        align: center
        w_sizing: fixed
        h_sizing: fixed
        clips: true
      - node_id: "I2842:296023;1102:4317"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/Toggle/TEXT:Text"
        name: Text
        type: TEXT
        text: Annual pricing (save 20%)
        w: 200
        h: 24
        fill: mixed
        fill_segments:
          - text: Annual pricing
            fill: "#42307D"
          - text: " (save 20%)"
            fill: "#6941C6"
        font_size: 16
        font: Inter Medium
        line_height: 24px
        text_style: Text md/Medium
      - node_id: "2842:296024"
        path_key: "root/Desktop/Pricing page header/Section/FRAME:Background pattern"
        name: Background pattern
        type: FRAME
        w: 1440
        h: 96
        direction: row
        justify: inferred
        align: inferred
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2842:296025"
        path_key: "root/Desktop/Pricing page header/Section/Background pattern/VECTOR:Background"
        name: Background
        type: VECTOR
        w: 2400
        h: 420
        fill: "#F9F5FF"
        fill_ref: Primary/50
        fill_ref_type: color_style
        backdrop_blur: 111.11112976074219px
      - node_id: "2842:296026"
        path_key: "root/Desktop/Pricing page header/Section/Background pattern/VECTOR:Right band 3"
        name: Right band 3
        type: VECTOR
        w: 467
        h: 129
        fill: "#F4EBFF"
        fill_ref: Primary/100
        fill_ref_type: color_style
      - node_id: "2842:296027"
        path_key: "root/Desktop/Pricing page header/Section/Background pattern/VECTOR:Right band 2"
        name: Right band 2
        type: VECTOR
        w: 680
        h: 156
        fill: "#E9D7FE"
        fill_ref: Primary/200
        fill_ref_type: color_style
      - node_id: "2842:296028"
        path_key: "root/Desktop/Pricing page header/Section/Background pattern/VECTOR:Right band 1"
        name: Right band 1
        type: VECTOR
        w: 467
        h: 129
        fill: "#D6BBFB"
        fill_ref: Primary/300
        fill_ref_type: color_style
      - node_id: "2842:296029"
        path_key: "root/Desktop/Pricing page header/Section/Background pattern/VECTOR:Left band 1"
        name: Left band 1
        type: VECTOR
        w: 467
        h: 129
        fill: "#F4EBFF"
        fill_ref: Primary/100
        fill_ref_type: color_style
      - node_id: "2842:296030"
        path_key: "root/Desktop/Pricing page header/Section/Background pattern/VECTOR:Left band 2"
        name: Left band 2
        type: VECTOR
        w: 467
        h: 129
        fill: "#D6BBFB"
        fill_ref: Primary/300
        fill_ref_type: color_style
      - node_id: "2842:296031"
        path_key: "root/Desktop/Pricing page header/FRAME:Section[2]"
        name: Section
        type: FRAME
        w: 1440
        h: 678
        padding: "0"
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:296032"
        path_key: "root/Desktop/Pricing page header/Section/FRAME:Container[2]"
        name: Container
        type: FRAME
        w: 1280
        h: 582
        padding: "0"
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:296033"
        path_key: "root/Desktop/Pricing page header/Section/Container/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 1216
        h: 582
        padding: "0"
        gap: 32
        direction: row
        justify: center
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "4551:168413"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/FRAME:_Pricing tier card"
        name: _Pricing tier card
        type: FRAME
        w: 384
        h: 582
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        radius: 16
        padding: "0"
        stroke: "#EAECF0"
        stroke_ref: Gray/200
        stroke_align: inside
        stroke_sides: all
        shadow: "0px 4px 6px -2px #101828/3%"
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "4551:168414"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Header"
        name: Header
        type: FRAME
        w: 384
        h: 222
        padding: "32"
        gap: 24
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "4551:168415"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/FRAME:Heading and price"
        name: Heading and price
        type: FRAME
        w: 320
        h: 190
        padding: "0"
        gap: 8
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "4551:168416"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/FRAME:Heading and icon"
        name: Heading and icon
        type: FRAME
        w: 320
        h: 90
        padding: "0"
        gap: 20
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "4551:168417"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/Heading and icon/INSTANCE:Featured icon"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=md, Color=Primary, Theme=Light circle outline
        w: 40
        h: 40
        fill: "#7F56D9"
        radius: 28
        stroke: "#F9F5FF"
        stroke_ref: Primary/50
        stroke_sides: all
      - node_id: "4551:168418"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/Heading and icon/TEXT:Heading"
        name: Heading
        type: TEXT
        text: Basic plan
        w: 320
        h: 30
        fill: "#6941C6"
        fill_ref: Text xl/Semibold
        fill_ref_type: color_style
        font_size: 20
        font: Inter Semi Bold
        line_height: 30px
        text_style: Text xl/Semibold
      - node_id: "4551:168419"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/TEXT:Price"
        name: Price
        type: TEXT
        text: $10/mth
        w: 320
        h: 60
        fill: "#101828"
        fill_ref: Display lg/Semibold
        fill_ref_type: color_style
        font_size: 48
        font: Inter Semi Bold
        line_height: 60px
        text_style: Display lg/Semibold
  - chunk_id: anatomy_2
    kind: anatomy
    item_count: 50
    path_range:
      - "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/TEXT:Supporting text"
      - "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/Actions/INSTANCE:Button[3]"
    node_ids:
      - "4551:168420"
      - "4551:168421"
      - "4551:168422"
      - "4551:168423"
      - "I4551:168423;1345:2760"
      - "I4551:168423;1345:2761"
      - "I4551:168423;1345:2762"
      - "4551:168424"
      - "4551:168425"
      - "4551:168426"
      - "4551:168427"
      - "4551:168433"
      - "4551:168434"
      - "4551:168435"
      - "4551:168483"
      - "4551:168484"
      - "4551:168485"
      - "4551:168486"
      - "4551:168487"
      - "4551:168488"
      - "4551:168489"
      - "4551:168490"
      - "4551:168491"
      - "4551:168492"
      - "4551:168493"
      - "4551:168494"
      - "4551:168495"
      - "4551:168496"
      - "4551:168497"
      - "4551:168503"
      - "4551:168504"
      - "4551:168505"
      - "4551:168553"
      - "4551:168554"
      - "4551:168555"
      - "4551:168556"
      - "4551:168557"
      - "4551:168558"
      - "4551:168559"
      - "4551:168560"
      - "4551:168561"
      - "4551:168562"
      - "4551:168563"
      - "4551:168564"
      - "4551:168565"
      - "4551:168566"
      - "4551:168567"
      - "4551:168573"
      - "4551:168574"
      - "4551:168575"
    items:
      - node_id: "4551:168420"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Billed annually.
        w: 320
        h: 24
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "4551:168421"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Content"
        name: Content
        type: FRAME
        w: 384
        h: 248
        padding: "32"
        gap: 24
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "4551:168422"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/FRAME:Check items"
        name: Check items
        type: FRAME
        w: 320
        h: 184
        padding: "0"
        gap: 16
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "4551:168423"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
        children_text:
          [Access to all basic features]
        w: 320
        h: 24
        padding: "0"
        gap: 12
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I4551:168423;1345:2760"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/Check item text/INSTANCE:Check icon"
        name: Check icon
        type: INSTANCE
        instance_of: Size=sm, Color=Primary
        w: 24
        h: 24
        fill: "#9E77ED"
        radius: 12
      - node_id: "I4551:168423;1345:2761"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/Check item text/FRAME:Text wrap"
        name: Text wrap
        type: FRAME
        w: 284
        h: 24
        padding: "0"
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I4551:168423;1345:2762"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/Check item text/Text wrap/TEXT:Text"
        name: Text
        type: TEXT
        text: Access to all basic features
        w: 284
        h: 24
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "4551:168424"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[2]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
        children_text:
          [Basic reporting and analytics]
        w: 320
        h: 24
        padding: "0"
        gap: 12
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "4551:168425"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[3]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
        children_text:
          [Up to 10 individual users]
        w: 320
        h: 24
        padding: "0"
        gap: 12
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "4551:168426"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[4]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
        children_text:
          [20GB individual data each user]
        w: 320
        h: 24
        padding: "0"
        gap: 12
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "4551:168427"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[5]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
        children_text:
          [Basic chat and email support]
        w: 320
        h: 24
        padding: "0"
        gap: 12
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "4551:168433"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Footer"
        name: Footer
        type: FRAME
        w: 384
        h: 112
        fill: "#F9FAFB"
        fill_ref: Gray/50
        fill_ref_type: color_style
        padding: "32"
        gap: 24
      - node_id: "4551:168434"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/FRAME:Actions"
        name: Actions
        type: FRAME
        w: 320
        h: 48
        padding: "0"
        gap: 12
      - node_id: "4551:168435"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/Actions/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
        children_text:
          [Get started]
        w: 320
        h: 48
        radius: 8
        padding: "0"
      - node_id: "4551:168483"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/FRAME:_Pricing tier card[2]"
        name: _Pricing tier card
        type: FRAME
        w: 384
        h: 582
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        radius: 16
        padding: "0"
        stroke: "#EAECF0"
        stroke_ref: Gray/200
        stroke_align: inside
        stroke_sides: all
        shadow: "0px 4px 6px -2px #101828/3%"
      - node_id: "4551:168484"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Header[2]"
        name: Header
        type: FRAME
        w: 384
        h: 222
        padding: "32"
        gap: 24
      - node_id: "4551:168485"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/FRAME:Heading and price[2]"
        name: Heading and price
        type: FRAME
        w: 320
        h: 190
        padding: "0"
        gap: 8
      - node_id: "4551:168486"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/FRAME:Heading and icon[2]"
        name: Heading and icon
        type: FRAME
        w: 320
        h: 90
        padding: "0"
        gap: 20
      - node_id: "4551:168487"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/Heading and icon/INSTANCE:Featured icon[2]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=md, Color=Primary, Theme=Light circle outline
        w: 40
        h: 40
        fill: "#7F56D9"
        radius: 28
        stroke: "#F9F5FF"
        stroke_ref: Primary/50
        stroke_sides: all
      - node_id: "4551:168488"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/Heading and icon/TEXT:Heading[2]"
        name: Heading
        type: TEXT
        text: Business plan
        w: 320
        h: 30
        fill: "#6941C6"
        fill_ref: Text xl/Semibold
        fill_ref_type: color_style
        font_size: 20
        font: Inter Semi Bold
        line_height: 30px
        text_style: Text xl/Semibold
      - node_id: "4551:168489"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/TEXT:Price[2]"
        name: Price
        type: TEXT
        text: $20/mth
        w: 320
        h: 60
        fill: "#101828"
        fill_ref: Display lg/Semibold
        fill_ref_type: color_style
        font_size: 48
        font: Inter Semi Bold
        line_height: 60px
        text_style: Display lg/Semibold
      - node_id: "4551:168490"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/TEXT:Supporting text[2]"
        name: Supporting text
        type: TEXT
        text: Billed annually.
        w: 320
        h: 24
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "4551:168491"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 384
        h: 248
        padding: "32"
        gap: 24
      - node_id: "4551:168492"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/FRAME:Check items[2]"
        name: Check items
        type: FRAME
        w: 320
        h: 184
        padding: "0"
        gap: 16
      - node_id: "4551:168493"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[6]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
        children_text:
          [200+ integrations]
        w: 320
        h: 24
        padding: "0"
        gap: 12
      - node_id: "4551:168494"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[7]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
        children_text:
          [Advanced reporting and analytics]
        w: 320
        h: 24
        padding: "0"
        gap: 12
      - node_id: "4551:168495"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[8]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
        children_text:
          [Up to 20 individual users]
        w: 320
        h: 24
        padding: "0"
        gap: 12
      - node_id: "4551:168496"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[9]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
        children_text:
          [40GB individual data each user]
        w: 320
        h: 24
        padding: "0"
        gap: 12
      - node_id: "4551:168497"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[10]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
        children_text:
          [Priority chat and email support]
        w: 320
        h: 24
        padding: "0"
        gap: 12
      - node_id: "4551:168503"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Footer[2]"
        name: Footer
        type: FRAME
        w: 384
        h: 112
        fill: "#F9FAFB"
        fill_ref: Gray/50
        fill_ref_type: color_style
        padding: "32"
        gap: 24
      - node_id: "4551:168504"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/FRAME:Actions[2]"
        name: Actions
        type: FRAME
        w: 320
        h: 48
        padding: "0"
        gap: 12
      - node_id: "4551:168505"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/Actions/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
        children_text:
          [Get started]
        w: 320
        h: 48
        radius: 8
        padding: "0"
      - node_id: "4551:168553"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/FRAME:_Pricing tier card[3]"
        name: _Pricing tier card
        type: FRAME
        w: 384
        h: 582
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        radius: 16
        padding: "0"
        stroke: "#EAECF0"
        stroke_ref: Gray/200
        stroke_align: inside
        stroke_sides: all
        shadow: "0px 4px 6px -2px #101828/3%"
      - node_id: "4551:168554"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Header[3]"
        name: Header
        type: FRAME
        w: 384
        h: 222
        padding: "32"
        gap: 24
      - node_id: "4551:168555"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/FRAME:Heading and price[3]"
        name: Heading and price
        type: FRAME
        w: 320
        h: 190
        padding: "0"
        gap: 8
      - node_id: "4551:168556"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/FRAME:Heading and icon[3]"
        name: Heading and icon
        type: FRAME
        w: 320
        h: 90
        padding: "0"
        gap: 20
      - node_id: "4551:168557"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/Heading and icon/INSTANCE:Featured icon[3]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=md, Color=Primary, Theme=Light circle outline
        w: 40
        h: 40
        fill: "#7F56D9"
        radius: 28
        stroke: "#F9F5FF"
        stroke_ref: Primary/50
        stroke_sides: all
      - node_id: "4551:168558"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/Heading and icon/TEXT:Heading[3]"
        name: Heading
        type: TEXT
        text: Enterprise plan
        w: 320
        h: 30
        fill: "#6941C6"
        fill_ref: Text xl/Semibold
        fill_ref_type: color_style
        font_size: 20
        font: Inter Semi Bold
        line_height: 30px
        text_style: Text xl/Semibold
      - node_id: "4551:168559"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/TEXT:Price[3]"
        name: Price
        type: TEXT
        text: $40/mth
        w: 320
        h: 60
        fill: "#101828"
        fill_ref: Display lg/Semibold
        fill_ref_type: color_style
        font_size: 48
        font: Inter Semi Bold
        line_height: 60px
        text_style: Display lg/Semibold
      - node_id: "4551:168560"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/TEXT:Supporting text[3]"
        name: Supporting text
        type: TEXT
        text: Billed annually.
        w: 320
        h: 24
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "4551:168561"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Content[3]"
        name: Content
        type: FRAME
        w: 384
        h: 248
        padding: "32"
        gap: 24
      - node_id: "4551:168562"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/FRAME:Check items[3]"
        name: Check items
        type: FRAME
        w: 320
        h: 184
        padding: "0"
        gap: 16
      - node_id: "4551:168563"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[11]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
        children_text:
          [Advanced custom fields]
        w: 320
        h: 24
        padding: "0"
        gap: 12
      - node_id: "4551:168564"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[12]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
        children_text:
          [Audit log and data history]
        w: 320
        h: 24
        padding: "0"
        gap: 12
      - node_id: "4551:168565"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[13]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
        children_text:
          [Unlimited individual users]
        w: 320
        h: 24
        padding: "0"
        gap: 12
      - node_id: "4551:168566"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[14]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
        children_text:
          [Unlimited individual data]
        w: 320
        h: 24
        padding: "0"
        gap: 12
      - node_id: "4551:168567"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[15]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
        children_text:
          [Personalised+priotity service]
        w: 320
        h: 24
        padding: "0"
        gap: 12
      - node_id: "4551:168573"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Footer[3]"
        name: Footer
        type: FRAME
        w: 384
        h: 112
        fill: "#F9FAFB"
        fill_ref: Gray/50
        fill_ref_type: color_style
        padding: "32"
        gap: 24
      - node_id: "4551:168574"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/FRAME:Actions[3]"
        name: Actions
        type: FRAME
        w: 320
        h: 48
        padding: "0"
        gap: 12
      - node_id: "4551:168575"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/Actions/INSTANCE:Button[3]"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
        children_text:
          [Get started]
        w: 320
        h: 48
        radius: 8
        padding: "0"
  - chunk_id: anatomy_3
    kind: anatomy
    item_count: 50
    path_range:
      - "root/Desktop/FRAME:CTA section"
      - "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[5]"
    node_ids:
      - "2842:296947"
      - "2842:296948"
      - "2842:296949"
      - "2842:296950"
      - "2842:296951"
      - "2842:296952"
      - "2842:296953"
      - "2842:296954"
      - "2842:296955"
      - "2842:296570"
      - "2842:296571"
      - "2842:296572"
      - "2842:296573"
      - "2842:296574"
      - "2842:296575"
      - "2842:296576"
      - "2842:296577"
      - "2842:296578"
      - "2842:296579"
      - "2842:296580"
      - "I2842:296580;1361:1685"
      - "I2842:296580;1361:1686"
      - "I2842:296580;1361:1687"
      - "I2842:296580;1361:1688"
      - "I2842:296580;1361:1693"
      - "I2842:296580;1361:1693;1041:38683"
      - "I2842:296580;1361:1693;1041:38683;1054:7014"
      - "I2842:296580;1361:1693;1041:38683;1054:7015"
      - "2842:296581"
      - "I2842:296581;1361:1685"
      - "I2842:296581;1361:1686"
      - "I2842:296581;1361:1687"
      - "I2842:296581;1361:1688"
      - "I2842:296581;1361:1693"
      - "2842:296582"
      - "I2842:296582;1361:1685"
      - "I2842:296582;1361:1686"
      - "I2842:296582;1361:1687"
      - "I2842:296582;1361:1688"
      - "I2842:296582;1361:1693"
      - "2842:296583"
      - "2842:296584"
      - "I2842:296584;1361:1685"
      - "I2842:296584;1361:1686"
      - "I2842:296584;1361:1687"
      - "I2842:296584;1361:1688"
      - "I2842:296584;1361:1693"
      - "2842:296585"
      - "I2842:296585;1361:1685"
      - "I2842:296585;1361:1686"
    items:
      - node_id: "2842:296947"
        path_key: "root/Desktop/FRAME:CTA section"
        name: CTA section
        type: FRAME
        w: 1440
        h: 308
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        padding: "0"
      - node_id: "2842:296948"
        path_key: "root/Desktop/CTA section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 212
        padding: "0"
        gap: 32
      - node_id: "2842:296949"
        path_key: "root/Desktop/CTA section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 212
        fill: "#F9F5FF"
        fill_ref: Primary/50
        fill_ref_type: color_style
        radius: 16
        padding: "64"
        gap: 32
      - node_id: "2842:296950"
        path_key: "root/Desktop/CTA section/Container/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 84
        padding: "0"
        gap: 16
      - node_id: "2842:296951"
        path_key: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Heading"
        name: Heading
        type: TEXT
        text: Start your 30-day free trial
        w: 768
        h: 38
        fill: "#42307D"
        fill_ref: Display sm/Semibold
        fill_ref_type: color_style
        font_size: 30
        font: Inter Semi Bold
        line_height: 38px
        text_style: Display sm/Semibold
      - node_id: "2842:296952"
        path_key: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Supporting text"
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
      - node_id: "2842:296953"
        path_key: "root/Desktop/CTA section/Container/Content/FRAME:Actions"
        name: Actions
        type: FRAME
        w: 269
        h: 48
        padding: "0"
        gap: 12
      - node_id: "2842:296954"
        path_key: "root/Desktop/CTA section/Container/Content/Actions/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Secondary gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 128
        h: 48
        radius: 8
        padding: "0"
      - node_id: "2842:296955"
        path_key: "root/Desktop/CTA section/Container/Content/Actions/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
        children_text:
          [Get started]
        w: 129
        h: 48
        radius: 8
        padding: "0"
      - node_id: "2842:296570"
        path_key: "root/Desktop/FRAME:Features section"
        name: Features section
        type: FRAME
        w: 1440
        h: 828
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        padding: "0"
        gap: 64
      - node_id: "2842:296571"
        path_key: "root/Desktop/Features section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 160
        padding: "0"
        gap: 32
      - node_id: "2842:296572"
        path_key: "root/Desktop/Features section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 160
        padding: "0"
        gap: 48
      - node_id: "2842:296573"
        path_key: "root/Desktop/Features section/Container/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 160
        padding: "0"
        gap: 20
      - node_id: "2842:296574"
        path_key: "root/Desktop/Features section/Container/Content/Heading and supporting text/FRAME:Heading and subheading"
        name: Heading and subheading
        type: FRAME
        w: 768
        h: 80
        padding: "0"
        gap: 12
      - node_id: "2842:296575"
        path_key: "root/Desktop/Features section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
        name: Subheading
        type: TEXT
        text: Features
        w: 768
        h: 24
        fill: "#6941C6"
        fill_ref: Text md/Semibold
        fill_ref_type: color_style
        font_size: 16
        font: Inter Semi Bold
        line_height: 24px
        text_style: Text md/Semibold
      - node_id: "2842:296576"
        path_key: "root/Desktop/Features section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
        name: Heading
        type: TEXT
        text: Beautiful analytics to grow smarter
        w: 768
        h: 44
        fill: "#101828"
        fill_ref: Display md/Semibold
        fill_ref_type: color_style
        font_size: 36
        font: Inter Semi Bold
        line_height: 44px
        text_style: Display md/Semibold
      - node_id: "2842:296577"
        path_key: "root/Desktop/Features section/Container/Content/Heading and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        w: 768
        h: 60
        fill: "#667085"
        fill_ref: Text xl/Regular
        fill_ref_type: color_style
        font_size: 20
        font: Inter Regular
        line_height: 30px
        text_style: Text xl/Regular
      - node_id: "2842:296578"
        path_key: "root/Desktop/Features section/FRAME:Container[2]"
        name: Container
        type: FRAME
        w: 1280
        h: 508
        padding: "0"
        gap: 64
      - node_id: "2842:296579"
        path_key: "root/Desktop/Features section/Container/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 1216
        h: 222
        padding: "0"
        gap: 32
      - node_id: "2842:296580"
        path_key: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon top left, Action=True, Breakpoint=Desktop
        children_text:
          - Share team inboxes
          - Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          - Learn more
        w: 384
        h: 222
        padding: "0"
        gap: 20
      - node_id: "I2842:296580;1361:1685"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle outline
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 28
        stroke: "#F9F5FF"
        stroke_ref: Primary/50
        stroke_sides: all
      - node_id: "I2842:296580;1361:1686"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 110
        padding: "0"
        gap: 8
      - node_id: "I2842:296580;1361:1687"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text"
        name: Text
        type: TEXT
        text: Share team inboxes
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:296580;1361:1688"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
        w: 384
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I2842:296580;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 116
        h: 24
        padding: "0"
      - node_id: "I2842:296580;1361:1693;1041:38683"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Button/INSTANCE:_Button base"
        name: _Button base
        type: INSTANCE
        instance_of: Size=lg, Icon=Trailing
        children_text:
          [Learn more]
        w: 116
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I2842:296580;1361:1693;1041:38683;1054:7014"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Button/_Button base/TEXT:Text"
        name: Text
        type: TEXT
        text: Learn more
        w: 88
        h: 24
        fill: "#6941C6"
        fill_ref: Text md/Semibold
        fill_ref_type: color_style
        font_size: 16
        font: Inter Semi Bold
        line_height: 24px
        text_style: Text md/Semibold
      - node_id: "I2842:296580;1361:1693;1041:38683;1054:7015"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Button/_Button base/INSTANCE:arrow-right"
        name: arrow-right
        type: INSTANCE
        instance_of: arrow-right
        w: 20
        h: 20
        fill: "#6941C6"
      - node_id: "2842:296581"
        path_key: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[2]"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon top left, Action=True, Breakpoint=Desktop
        children_text:
          - Deliver instant answers
          - An all-in-one customer service platform that helps you balance everything your customers need to be happy.
          - Learn more
        w: 384
        h: 222
        padding: "0"
        gap: 20
      - node_id: "I2842:296581;1361:1685"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[2]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle outline
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 28
        stroke: "#F9F5FF"
        stroke_ref: Primary/50
        stroke_sides: all
      - node_id: "I2842:296581;1361:1686"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[2]"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 110
        padding: "0"
        gap: 8
      - node_id: "I2842:296581;1361:1687"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[2]"
        name: Text
        type: TEXT
        text: Deliver instant answers
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:296581;1361:1688"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[2]"
        name: Supporting text
        type: TEXT
        text: An all-in-one customer service platform that helps you balance everything your customers need to be happy.
        w: 384
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I2842:296581;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 116
        h: 24
        padding: "0"
      - node_id: "2842:296582"
        path_key: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[3]"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon top left, Action=True, Breakpoint=Desktop
        children_text:
          - Manage your team with reports
          - Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
          - Learn more
        w: 384
        h: 222
        padding: "0"
        gap: 20
      - node_id: "I2842:296582;1361:1685"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[3]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle outline
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 28
        stroke: "#F9F5FF"
        stroke_ref: Primary/50
        stroke_sides: all
      - node_id: "I2842:296582;1361:1686"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[3]"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 110
        padding: "0"
        gap: 8
      - node_id: "I2842:296582;1361:1687"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[3]"
        name: Text
        type: TEXT
        text: Manage your team with reports
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:296582;1361:1688"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[3]"
        name: Supporting text
        type: TEXT
        text: Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
        w: 384
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I2842:296582;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[3]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 116
        h: 24
        padding: "0"
      - node_id: "2842:296583"
        path_key: "root/Desktop/Features section/Container/FRAME:Content[3]"
        name: Content
        type: FRAME
        w: 1216
        h: 222
        padding: "0"
        gap: 32
      - node_id: "2842:296584"
        path_key: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[4]"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon top left, Action=True, Breakpoint=Desktop
        children_text:
          - Connect with customers
          - Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
          - Learn more
        w: 384
        h: 222
        padding: "0"
        gap: 20
      - node_id: "I2842:296584;1361:1685"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[4]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle outline
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 28
        stroke: "#F9F5FF"
        stroke_ref: Primary/50
        stroke_sides: all
      - node_id: "I2842:296584;1361:1686"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[4]"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 110
        padding: "0"
        gap: 8
      - node_id: "I2842:296584;1361:1687"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[4]"
        name: Text
        type: TEXT
        text: Connect with customers
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:296584;1361:1688"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[4]"
        name: Supporting text
        type: TEXT
        text: Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
        w: 384
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I2842:296584;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[4]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 116
        h: 24
        padding: "0"
      - node_id: "2842:296585"
        path_key: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[5]"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon top left, Action=True, Breakpoint=Desktop
        children_text:
          - Connect the tools you already use
          - Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
          - Learn more
        w: 384
        h: 222
        padding: "0"
        gap: 20
      - node_id: "I2842:296585;1361:1685"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[5]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle outline
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 28
        stroke: "#F9F5FF"
        stroke_ref: Primary/50
        stroke_sides: all
      - node_id: "I2842:296585;1361:1686"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[5]"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 110
        padding: "0"
        gap: 8
  - chunk_id: anatomy_4
    kind: anatomy
    item_count: 50
    path_range:
      - "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[5]"
      - "root/Desktop/FRAME:CTA section[2]"
    node_ids:
      - "I2842:296585;1361:1687"
      - "I2842:296585;1361:1688"
      - "I2842:296585;1361:1693"
      - "2842:296586"
      - "I2842:296586;1361:1685"
      - "I2842:296586;1361:1686"
      - "I2842:296586;1361:1687"
      - "I2842:296586;1361:1688"
      - "I2842:296586;1361:1693"
      - "2842:296973"
      - "2842:296974"
      - "2842:296975"
      - "2842:296976"
      - "2842:296977"
      - "2842:296978"
      - "2842:296979"
      - "2842:296980"
      - "2842:296981"
      - "2842:297009"
      - "2842:297010"
      - "2842:297011"
      - "2842:297012"
      - "2842:297013"
      - "2842:297014"
      - "2842:297015"
      - "2842:297016"
      - "2842:297017"
      - "2842:297018"
      - "2842:297019"
      - "I2842:297019;1327:180837"
      - "I2842:297019;1327:180816"
      - "I2842:297019;1327:180817"
      - "I2842:297019;1327:180818"
      - "2842:297020"
      - "I2842:297020;1327:180837"
      - "I2842:297020;1327:180816"
      - "I2842:297020;1327:180817"
      - "I2842:297020;1327:180818"
      - "2842:297021"
      - "I2842:297021;1327:180837"
      - "I2842:297021;1327:180816"
      - "I2842:297021;1327:180817"
      - "I2842:297021;1327:180818"
      - "2842:297022"
      - "I2842:297022;1327:180837"
      - "I2842:297022;1327:180816"
      - "I2842:297022;1327:180817"
      - "I2842:297022;1327:180818"
      - "2842:297023"
      - "2842:297048"
    items:
      - node_id: "I2842:296585;1361:1687"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[5]"
        name: Text
        type: TEXT
        text: Connect the tools you already use
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:296585;1361:1688"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[5]"
        name: Supporting text
        type: TEXT
        text: Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
        w: 384
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I2842:296585;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[5]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 116
        h: 24
        padding: "0"
      - node_id: "2842:296586"
        path_key: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[6]"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon top left, Action=True, Breakpoint=Desktop
        children_text:
          - Our people make the difference
          - We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
          - Learn more
        w: 384
        h: 222
        padding: "0"
        gap: 20
      - node_id: "I2842:296586;1361:1685"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[6]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle outline
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 28
        stroke: "#F9F5FF"
        stroke_ref: Primary/50
        stroke_sides: all
      - node_id: "I2842:296586;1361:1686"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[6]"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 110
        padding: "0"
        gap: 8
      - node_id: "I2842:296586;1361:1687"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[6]"
        name: Text
        type: TEXT
        text: Our people make the difference
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:296586;1361:1688"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[6]"
        name: Supporting text
        type: TEXT
        text: We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
        w: 384
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I2842:296586;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[6]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 116
        h: 24
        padding: "0"
      - node_id: "2842:296973"
        path_key: "root/Desktop/FRAME:Social proof section"
        name: Social proof section
        type: FRAME
        w: 1440
        h: 296
        fill: "#F9F5FF"
        fill_ref: Primary/50
        fill_ref_type: color_style
        padding: "96"
      - node_id: "2842:296974"
        path_key: "root/Desktop/Social proof section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 104
        padding: "0"
        gap: 32
      - node_id: "2842:296975"
        path_key: "root/Desktop/Social proof section/Container/TEXT:Text"
        name: Text
        type: TEXT
        text: Join 4,000+ companies already growing
        w: 1216
        h: 24
        fill: "#6941C6"
        fill_ref: Text md/Medium
        fill_ref_type: color_style
        font_size: 16
        font: Inter Medium
        line_height: 24px
        text_style: Text md/Medium
      - node_id: "2842:296976"
        path_key: "root/Desktop/Social proof section/Container/FRAME:Logos"
        name: Logos
        type: FRAME
        w: 1216
        h: 48
        padding: "0"
        gap: 32
      - node_id: "2842:296977"
        path_key: "root/Desktop/Social proof section/Container/Logos/INSTANCE:Company logo"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Layers, Logotype=True, Color=Primary, Theme=Light
        w: 146
        h: 48
      - node_id: "2842:296978"
        path_key: "root/Desktop/Social proof section/Container/Logos/INSTANCE:Company logo[2]"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Sisyphus, Logotype=True, Color=Primary, Theme=Light
        w: 169
        h: 48
      - node_id: "2842:296979"
        path_key: "root/Desktop/Social proof section/Container/Logos/INSTANCE:Company logo[3]"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Circooles, Logotype=True, Color=Primary, Theme=Light
        w: 183
        h: 48
      - node_id: "2842:296980"
        path_key: "root/Desktop/Social proof section/Container/Logos/INSTANCE:Company logo[4]"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Catalog, Logotype=True, Color=Primary, Theme=Light
        w: 160
        h: 48
      - node_id: "2842:296981"
        path_key: "root/Desktop/Social proof section/Container/Logos/INSTANCE:Company logo[5]"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Quotient, Logotype=True, Color=Primary, Theme=Light
        w: 187
        h: 48
      - node_id: "2842:297009"
        path_key: "root/Desktop/FRAME:FAQ section"
        name: FAQ section
        type: FRAME
        w: 1440
        h: 976
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        padding: "96"
        gap: 64
      - node_id: "2842:297010"
        path_key: "root/Desktop/FAQ section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 160
        padding: "0"
        gap: 32
      - node_id: "2842:297011"
        path_key: "root/Desktop/FAQ section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 160
        padding: "0"
        gap: 48
      - node_id: "2842:297012"
        path_key: "root/Desktop/FAQ section/Container/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 160
        padding: "0"
        gap: 20
      - node_id: "2842:297013"
        path_key: "root/Desktop/FAQ section/Container/Content/Heading and supporting text/FRAME:Heading and subheading"
        name: Heading and subheading
        type: FRAME
        w: 768
        h: 80
        padding: "0"
        gap: 12
      - node_id: "2842:297014"
        path_key: "root/Desktop/FAQ section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
        name: Subheading
        type: TEXT
        text: Support
        w: 768
        h: 24
        fill: "#6941C6"
        fill_ref: Text md/Semibold
        fill_ref_type: color_style
        font_size: 16
        font: Inter Semi Bold
        line_height: 24px
        text_style: Text md/Semibold
      - node_id: "2842:297015"
        path_key: "root/Desktop/FAQ section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
        name: Heading
        type: TEXT
        text: Frequently asked questions
        w: 768
        h: 44
        fill: "#101828"
        fill_ref: Display md/Semibold
        fill_ref_type: color_style
        font_size: 36
        font: Inter Semi Bold
        line_height: 44px
        text_style: Display md/Semibold
      - node_id: "2842:297016"
        path_key: "root/Desktop/FAQ section/Container/Content/Heading and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.
        w: 768
        h: 60
        fill: "#667085"
        fill_ref: Gray/500
        fill_ref_type: color_style
        font_size: 20
        font: Inter Regular
        line_height: 30px
      - node_id: "2842:297017"
        path_key: "root/Desktop/FAQ section/FRAME:Container[2]"
        name: Container
        type: FRAME
        w: 1280
        h: 560
        padding: "0"
        gap: 96
      - node_id: "2842:297018"
        path_key: "root/Desktop/FAQ section/Container/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 560
        h: 528
        padding: "0"
        gap: 48
      - node_id: "2842:297019"
        path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_Feature text"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon left, Action=False, Breakpoint=Desktop
        children_text:
          - Is there a free trial available?
          - Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.
        w: 560
        h: 96
        padding: "0"
        gap: 16
      - node_id: "I2842:297019;1327:180837"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/INSTANCE:Featured icon"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle outline
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 28
        stroke: "#F9F5FF"
        stroke_ref: Primary/50
        stroke_sides: all
      - node_id: "I2842:297019;1327:180816"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/FRAME:Text and supporting text"
        name: Text and supporting text
        type: FRAME
        w: 496
        h: 96
        padding: "10"
        gap: 8
      - node_id: "I2842:297019;1327:180817"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Text"
        name: Text
        type: TEXT
        text: Is there a free trial available?
        w: 496
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:297019;1327:180818"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.
        w: 496
        h: 48
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "2842:297020"
        path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_Feature text[2]"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon left, Action=False, Breakpoint=Desktop
        children_text:
          - Can I change my plan later?
          - Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.
        w: 560
        h: 96
        padding: "0"
        gap: 16
      - node_id: "I2842:297020;1327:180837"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/INSTANCE:Featured icon[2]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle outline
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 28
        stroke: "#F9F5FF"
        stroke_ref: Primary/50
        stroke_sides: all
      - node_id: "I2842:297020;1327:180816"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/FRAME:Text and supporting text[2]"
        name: Text and supporting text
        type: FRAME
        w: 496
        h: 96
        padding: "10"
        gap: 8
      - node_id: "I2842:297020;1327:180817"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[2]"
        name: Text
        type: TEXT
        text: Can I change my plan later?
        w: 496
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:297020;1327:180818"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[2]"
        name: Supporting text
        type: TEXT
        text: Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.
        w: 496
        h: 48
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "2842:297021"
        path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_Feature text[3]"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon left, Action=False, Breakpoint=Desktop
        children_text:
          - What is your cancellation policy?
          - We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.
        w: 560
        h: 96
        padding: "0"
        gap: 16
      - node_id: "I2842:297021;1327:180837"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/INSTANCE:Featured icon[3]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle outline
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 28
        stroke: "#F9F5FF"
        stroke_ref: Primary/50
        stroke_sides: all
      - node_id: "I2842:297021;1327:180816"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/FRAME:Text and supporting text[3]"
        name: Text and supporting text
        type: FRAME
        w: 496
        h: 96
        padding: "10"
        gap: 8
      - node_id: "I2842:297021;1327:180817"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[3]"
        name: Text
        type: TEXT
        text: What is your cancellation policy?
        w: 496
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:297021;1327:180818"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[3]"
        name: Supporting text
        type: TEXT
        text: We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.
        w: 496
        h: 48
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "2842:297022"
        path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_Feature text[4]"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon left, Action=False, Breakpoint=Desktop
        children_text:
          - Can other info be added to an invoice?
          - At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.
        w: 560
        h: 96
        padding: "0"
        gap: 16
      - node_id: "I2842:297022;1327:180837"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/INSTANCE:Featured icon[4]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle outline
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 28
        stroke: "#F9F5FF"
        stroke_ref: Primary/50
        stroke_sides: all
      - node_id: "I2842:297022;1327:180816"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/FRAME:Text and supporting text[4]"
        name: Text and supporting text
        type: FRAME
        w: 496
        h: 96
        padding: "10"
        gap: 8
      - node_id: "I2842:297022;1327:180817"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[4]"
        name: Text
        type: TEXT
        text: Can other info be added to an invoice?
        w: 496
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:297022;1327:180818"
        path_key: "root/Desktop/FAQ section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[4]"
        name: Supporting text
        type: TEXT
        text: At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.
        w: 496
        h: 48
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "2842:297023"
        path_key: "root/Desktop/FAQ section/Container/FRAME:Image"
        name: Image
        type: FRAME
        w: 560
        h: 560
        fill: image
        fill_type: IMAGE
        image_hash: b44a7794498161d39efdf4a4769594c2d0cd20ac
      - node_id: "2842:297048"
        path_key: "root/Desktop/FRAME:CTA section[2]"
        name: CTA section
        type: FRAME
        w: 1440
        h: 286
        fill: "#53389E"
        fill_ref: Primary/800
        fill_ref_type: color_style
        padding: "96"
        gap: 64
  - chunk_id: anatomy_5
    kind: anatomy
    item_count: 50
    path_range:
      - "root/Desktop/CTA section/FRAME:Container[2]"
      - "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[6]"
    node_ids:
      - "2842:297049"
      - "2842:297050"
      - "2842:297051"
      - "2842:297052"
      - "2842:297053"
      - "2842:297054"
      - "2842:297055"
      - "2842:297056"
      - "1624:430486"
      - "I1624:430486;1508:252783"
      - "I1624:430486;1508:252784"
      - "I1624:430486;1508:252785"
      - "I1624:430486;1508:252786"
      - "I1624:430486;1508:252787"
      - "I1624:430486;1508:252788"
      - "I1624:430486;1508:252789"
      - "I1624:430486;1508:252789;1091:63800"
      - "I1624:430486;1508:252789;1091:63800;1088:109"
      - "I1624:430486;1508:252789;1091:63800;1088:4"
      - "I1624:430486;1508:252789;1091:63800;1088:10"
      - "I1624:430486;1508:252789;1091:63800;1088:6"
      - "I1624:430486;1508:252790"
      - "I1624:430486;1508:252802"
      - "I1624:430486;1508:252333"
      - "I1624:430486;1508:252334"
      - "I1624:430486;1510:267383"
      - "I1624:430486;1510:267383;1510:266786"
      - "I1624:430486;1510:267383;1510:266835"
      - "I1624:430486;1510:267383;1510:266836"
      - "I1624:430486;1510:267383;1510:266836;1507:253519"
      - "I1624:430486;1510:267383;1510:266837"
      - "I1624:430486;1510:267383;1510:266838"
      - "I1624:430486;1510:267383;1510:266838;1507:253529"
      - "I1624:430486;1510:267383;1510:266838;1507:253530"
      - "I1624:430486;1510:267383;1510:266839"
      - "I1624:430486;1510:267383;1510:266840"
      - "I1624:430486;1510:267383;1510:266841"
      - "I1624:430486;1510:268817"
      - "I1624:430486;1510:268817;1510:266786"
      - "I1624:430486;1510:268817;1510:266835"
      - "I1624:430486;1510:268817;1510:266836"
      - "I1624:430486;1510:268817;1510:266837"
      - "I1624:430486;1510:268817;1510:266838"
      - "I1624:430486;1510:268817;1510:266839"
      - "I1624:430486;1510:268817;1510:266840"
      - "I1624:430486;1510:268817;1510:266841"
      - "I1624:430486;1510:270256"
      - "I1624:430486;1510:270757"
      - "I1624:430486;1510:272166"
      - "I1624:430486;1510:273057"
    items:
      - node_id: "2842:297049"
        path_key: "root/Desktop/CTA section/FRAME:Container[2]"
        name: Container
        type: FRAME
        w: 1280
        h: 94
        padding: "0"
        gap: 32
      - node_id: "2842:297050"
        path_key: "root/Desktop/CTA section/Container/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 1216
        h: 94
        padding: "0"
        gap: 32
      - node_id: "2842:297051"
        path_key: "root/Desktop/CTA section/Container/Content/FRAME:Heading and supporting text[2]"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 94
        padding: "0"
        gap: 20
      - node_id: "2842:297052"
        path_key: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Heading[2]"
        name: Heading
        type: TEXT
        text: Start your free trial
        w: 768
        h: 44
        fill: "#FFFFFF"
        fill_ref: Display md/Semibold
        fill_ref_type: color_style
        font_size: 36
        font: Inter Semi Bold
        line_height: 44px
        text_style: Display md/Semibold
      - node_id: "2842:297053"
        path_key: "root/Desktop/CTA section/Container/Content/Heading and supporting text/TEXT:Supporting text[2]"
        name: Supporting text
        type: TEXT
        text: Join over 4,000+ startups already growing with Untitled.
        w: 768
        h: 30
        fill: "#E9D7FE"
        fill_ref: Text xl/Regular
        fill_ref_type: color_style
        font_size: 20
        font: Inter Regular
        line_height: 30px
        text_style: Text xl/Regular
      - node_id: "2842:297054"
        path_key: "root/Desktop/CTA section/Container/Content/FRAME:Actions[2]"
        name: Actions
        type: FRAME
        w: 269
        h: 48
        padding: "0"
        gap: 12
      - node_id: "2842:297055"
        path_key: "root/Desktop/CTA section/Container/Content/Actions/INSTANCE:Button[3]"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Secondary gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 128
        h: 48
        radius: 8
        padding: "0"
      - node_id: "2842:297056"
        path_key: "root/Desktop/CTA section/Container/Content/Actions/INSTANCE:Button[4]"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
        children_text:
          [Get started]
        w: 129
        h: 48
        radius: 8
        padding: "0"
      - node_id: "1624:430486"
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
      - node_id: "I1624:430486;1508:252783"
        path_key: "root/Desktop/Footer/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 127
        padding: "0"
        gap: 64
      - node_id: "I1624:430486;1508:252784"
        path_key: "root/Desktop/Footer/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 62
        padding: "0"
        gap: 32
      - node_id: "I1624:430486;1508:252785"
        path_key: "root/Desktop/Footer/Container/Content/FRAME:Text and supporting text"
        name: Text and supporting text
        type: FRAME
        w: 773
        h: 62
        padding: "0"
        gap: 8
      - node_id: "I1624:430486;1508:252786"
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
      - node_id: "I1624:430486;1508:252787"
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
      - node_id: "I1624:430486;1508:252788"
        path_key: "root/Desktop/Footer/Container/Content/FRAME:Email capture"
        name: Email capture
        type: FRAME
        w: 411
        h: 44
        padding: "0"
        gap: 16
      - node_id: "I1624:430486;1508:252789"
        path_key: "root/Desktop/Footer/Container/Content/Email capture/INSTANCE:Input field"
        name: Input field
        type: INSTANCE
        instance_of: Type=Default, Leading icon=False, Label=False, Hint text=False, Help icon=False, Destructive=False, State=Placeholder
        children_text:
          [Enter your email]
        w: 280
        h: 44
        padding: "0"
      - node_id: "I1624:430486;1508:252789;1091:63800"
        path_key: "root/Desktop/Footer/Container/Content/Email capture/Input field/INSTANCE:_Input field base"
        name: _Input field base
        type: INSTANCE
        instance_of: Type=Default, Destructive=False
        children_text:
          [Enter your email]
        w: 280
        h: 44
        padding: "0"
        gap: 6
      - node_id: "I1624:430486;1508:252789;1091:63800;1088:109"
        path_key: "root/Desktop/Footer/Container/Content/Email capture/Input field/_Input field base/FRAME:Input with label"
        name: Input with label
        type: FRAME
        w: 280
        h: 44
        padding: "0"
        gap: 6
      - node_id: "I1624:430486;1508:252789;1091:63800;1088:4"
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
        shadow: "0px 1px 2px #101828/5%"
      - node_id: "I1624:430486;1508:252789;1091:63800;1088:10"
        path_key: "root/Desktop/Footer/Container/Content/Email capture/Input field/_Input field base/Input with label/Input/FRAME:Content"
        name: Content
        type: FRAME
        w: 252
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I1624:430486;1508:252789;1091:63800;1088:6"
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
      - node_id: "I1624:430486;1508:252790"
        path_key: "root/Desktop/Footer/Container/Content/Email capture/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
        children_text:
          [Subscribe]
        w: 115
        h: 44
        radius: 8
        padding: "0"
      - node_id: "I1624:430486;1508:252802"
        path_key: "root/Desktop/Footer/Container/RECTANGLE:Divider"
        name: Divider
        type: RECTANGLE
        w: 1216
        h: 1
        fill: "#EAECF0"
        fill_ref: Gray/200
        fill_ref_type: color_style
      - node_id: "I1624:430486;1508:252333"
        path_key: "root/Desktop/Footer/FRAME:Container[2]"
        name: Container
        type: FRAME
        w: 1280
        h: 240
        padding: "0"
        gap: 48
      - node_id: "I1624:430486;1508:252334"
        path_key: "root/Desktop/Footer/Container/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 1216
        h: 240
        padding: "0"
        gap: 32
      - node_id: "I1624:430486;1510:267383"
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
        padding: "0"
        gap: 16
      - node_id: "I1624:430486;1510:267383;1510:266786"
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
      - node_id: "I1624:430486;1510:267383;1510:266835"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/FRAME:Footer links"
        name: Footer links
        type: FRAME
        w: 176
        h: 204
        padding: "0"
        gap: 12
      - node_id: "I1624:430486;1510:267383;1510:266836"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Overview]
        w: 74
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I1624:430486;1510:267383;1510:266836;1507:253519"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/_Footer link/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Overview]
        w: 74
        h: 24
        padding: "0"
      - node_id: "I1624:430486;1510:267383;1510:266837"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[2]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Features]
        w: 68
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I1624:430486;1510:267383;1510:266838"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[3]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=True, Color=Gray, Theme=Light, State=Default
        children_text:
          [Solutions, New]
        w: 123
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I1624:430486;1510:267383;1510:266838;1507:253529"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/_Footer link/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Solutions]
        w: 73
        h: 24
        padding: "0"
      - node_id: "I1624:430486;1510:267383;1510:266838;1507:253530"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/_Footer link/INSTANCE:Badge"
        name: Badge
        type: INSTANCE
        instance_of: Size=sm, Icon=False, Color=Success
        children_text:
          [New]
        w: 42
        h: 22
        padding: "0"
      - node_id: "I1624:430486;1510:267383;1510:266839"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[4]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Tutorials]
        w: 68
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I1624:430486;1510:267383;1510:266840"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[5]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Pricing]
        w: 54
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I1624:430486;1510:267383;1510:266841"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[6]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Releases]
        w: 70
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I1624:430486;1510:268817"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[2]"
        name: _Footer links column
        type: INSTANCE
        instance_of: Color=Gray, Theme=Light
        children_text:
          [Company, About us, Careers, Press, News, Media kit, Contact]
        w: 176
        h: 240
        padding: "0"
        gap: 16
      - node_id: "I1624:430486;1510:268817;1510:266786"
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
      - node_id: "I1624:430486;1510:268817;1510:266835"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/FRAME:Footer links[2]"
        name: Footer links
        type: FRAME
        w: 176
        h: 204
        padding: "0"
        gap: 12
      - node_id: "I1624:430486;1510:268817;1510:266836"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[7]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [About us]
        w: 70
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I1624:430486;1510:268817;1510:266837"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[8]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Careers]
        w: 62
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I1624:430486;1510:268817;1510:266838"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[9]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Press]
        w: 44
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I1624:430486;1510:268817;1510:266839"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[10]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [News]
        w: 44
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I1624:430486;1510:268817;1510:266840"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[11]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Media kit]
        w: 71
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I1624:430486;1510:268817;1510:266841"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[12]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Contact]
        w: 62
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I1624:430486;1510:270256"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[3]"
        name: _Footer links column
        type: INSTANCE
        instance_of: Color=Gray, Theme=Light
        children_text:
          - Resources
          - Blog
          - Newsletter
          - Events
          - Help centre
          - Tutorials
          - Support
        w: 176
        h: 240
        padding: "0"
        gap: 16
      - node_id: "I1624:430486;1510:270757"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[4]"
        name: _Footer links column
        type: INSTANCE
        instance_of: Color=Gray, Theme=Light
        children_text:
          - Use cases
          - Startups
          - Enterprise
          - Government
          - SaaS
          - Marketplaces
          - Ecommerce
        w: 176
        h: 240
        padding: "0"
        gap: 16
      - node_id: "I1624:430486;1510:272166"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[5]"
        name: _Footer links column
        type: INSTANCE
        instance_of: Color=Gray, Theme=Light
        children_text:
          [Social, Twitter, LinkedIn, Facebook, GitHub, AngelList, Dribbble]
        w: 176
        h: 240
        padding: "0"
        gap: 16
      - node_id: "I1624:430486;1510:273057"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[6]"
        name: _Footer links column
        type: INSTANCE
        instance_of: Color=Gray, Theme=Light
        children_text:
          [Legal, Terms, Privacy, Cookies, Licenses, Settings, Contact]
        w: 176
        h: 240
        padding: "0"
        gap: 16
  - chunk_id: anatomy_6
    kind: anatomy
    item_count: 13
    path_range:
      - "root/Desktop/Footer/FRAME:Container[3]"
      - "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[9]"
    node_ids:
      - "I1624:430486;1508:254418"
      - "I1624:430486;1508:254419"
      - "I1624:430486;1508:254420"
      - "I1624:430486;1508:254421"
      - "I1624:430486;1508:254422"
      - "I1624:430479;1288:30715;4276:168026"
      - "I1624:430479;1288:30715;1083:50705;1101:66343"
      - "I1624:430479;1288:30715;1083:50705;1081:89"
      - "I1624:430479;1288:30717;1042:35615"
      - "4551:168428"
      - "4551:168429"
      - "4551:168430"
      - "4551:168431"
    items:
      - node_id: "I1624:430486;1508:254418"
        path_key: "root/Desktop/Footer/FRAME:Container[3]"
        name: Container
        type: FRAME
        w: 1280
        h: 65
        padding: "0"
        gap: 32
      - node_id: "I1624:430486;1508:254419"
        path_key: "root/Desktop/Footer/Container/RECTANGLE:Divider[2]"
        name: Divider
        type: RECTANGLE
        w: 1216
        h: 1
        fill: "#EAECF0"
        fill_ref: Gray/200
        fill_ref_type: color_style
      - node_id: "I1624:430486;1508:254420"
        path_key: "root/Desktop/Footer/Container/FRAME:Content[3]"
        name: Content
        type: FRAME
        w: 1216
        h: 32
        padding: "0"
      - node_id: "I1624:430486;1508:254421"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:Logo"
        name: Logo
        type: INSTANCE
        instance_of: Dark mode=False
        w: 142
        h: 32
        padding: "0"
      - node_id: "I1624:430486;1508:254422"
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
      - node_id: "I1624:430479;1288:30715;4276:168026"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Logo/FRAME:Logo wrap"
        name: Logo wrap
        type: FRAME
        w: 142
        h: 32
        direction: row
        justify: inferred
        align: inferred
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "I1624:430479;1288:30715;1083:50705;1101:66343"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Logo/Logo wrap/Logomark/FRAME:Content"
        name: Content
        type: FRAME
        w: 32
        h: 32
        direction: column
        justify: inferred
        align: inferred
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "I1624:430479;1288:30715;1083:50705;1081:89"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Logo/Logo wrap/Logomark/Content/FRAME:Grid"
        name: Grid
        type: FRAME
        w: 32
        h: 32
        direction: column
        justify: inferred
        align: inferred
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "I1624:430479;1288:30717;1042:35615"
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
      - node_id: "4551:168428"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[6]"
        name: Check item text
        type: INSTANCE
        w: 294
        h: 84
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "4551:168429"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[7]"
        name: Check item text
        type: INSTANCE
        w: 294
        h: 84
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "4551:168430"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[8]"
        name: Check item text
        type: INSTANCE
        w: 294
        h: 84
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "4551:168431"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[9]"
        name: Check item text
        type: INSTANCE
        w: 294
        h: 84
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
  - chunk_id: repeats_1
    kind: repeats
    template_node_id: "I1624:430479;1288:30715"
    template_path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/INSTANCE:Logo"
    instance_of: Dark mode=False
    repeat_count: 1
    varying_keys:
      []
    items:
      - node_id: "I1624:430486;1508:254421"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:Logo"
        diffs:
          {}
  - chunk_id: repeats_2
    kind: repeats
    template_node_id: "I1624:430479;1288:30717"
    template_path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:Button"
    instance_of: Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
    repeat_count: 13
    varying_keys:
      - Button/width
      - Button/_Button base/width
      - Button/_Button base/Text/text
      - Button/_Button base/Text/width
      - Button/Hierarchy
      - Button/_Button base/Text/fill
      - Button/Size
      - Button/_Button base/Size
    items:
      - node_id: "I1624:430479;1288:30720"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:Button[2]"
        diffs:
          Button/width: "54"
          Button/_Button base/width: "54"
          Button/_Button base/Text/text: Pricing
          Button/_Button base/Text/width: "54"
        children_text:
          [Pricing]
      - node_id: "I1624:430479;1624:307186;1624:262067"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/_Navigation actions/INSTANCE:Button"
        diffs:
          Button/width: "83"
          Button/Hierarchy: Tertiary gray
          Button/_Button base/width: "83"
          Button/_Button base/Text/text: Log in
          Button/_Button base/Text/width: "47"
        children_text:
          [Log in]
      - node_id: "I1624:430479;1624:307186;1624:262069"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/_Navigation actions/INSTANCE:Button[2]"
        diffs:
          Button/width: "95"
          Button/Hierarchy: Primary
          Button/_Button base/width: "95"
          Button/_Button base/Text/text: Sign up
          Button/_Button base/Text/fill: "#FFFFFF"
          Button/_Button base/Text/width: "59"
        children_text:
          [Sign up]
      - node_id: "4551:168435"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/Actions/INSTANCE:Button"
        diffs:
          Button/width: "320"
          Button/Size: xl
          Button/Hierarchy: Primary
          Button/_Button base/width: "320"
          Button/_Button base/Size: xl
          Button/_Button base/Text/text: Get started
          Button/_Button base/Text/fill: "#FFFFFF"
          Button/_Button base/Text/width: "89"
        children_text:
          [Get started]
      - node_id: "4551:168505"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/Actions/INSTANCE:Button[2]"
        diffs:
          Button/width: "320"
          Button/Size: xl
          Button/Hierarchy: Primary
          Button/_Button base/width: "320"
          Button/_Button base/Size: xl
          Button/_Button base/Text/text: Get started
          Button/_Button base/Text/fill: "#FFFFFF"
          Button/_Button base/Text/width: "89"
        children_text:
          [Get started]
      - node_id: "4551:168575"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/Actions/INSTANCE:Button[3]"
        diffs:
          Button/width: "320"
          Button/Size: xl
          Button/Hierarchy: Primary
          Button/_Button base/width: "320"
          Button/_Button base/Size: xl
          Button/_Button base/Text/text: Get started
          Button/_Button base/Text/fill: "#FFFFFF"
          Button/_Button base/Text/width: "89"
        children_text:
          [Get started]
      - node_id: "2842:296954"
        path_key: "root/Desktop/CTA section/Container/Content/Actions/INSTANCE:Button"
        diffs:
          Button/width: "128"
          Button/Size: xl
          Button/Hierarchy: Secondary gray
          Button/_Button base/width: "128"
          Button/_Button base/Size: xl
          Button/_Button base/Text/text: Learn more
          Button/_Button base/Text/fill: "#344054"
          Button/_Button base/Text/width: "88"
        children_text:
          [Learn more]
      - node_id: "2842:296955"
        path_key: "root/Desktop/CTA section/Container/Content/Actions/INSTANCE:Button[2]"
        diffs:
          Button/width: "129"
          Button/Size: xl
          Button/Hierarchy: Primary
          Button/_Button base/width: "129"
          Button/_Button base/Size: xl
          Button/_Button base/Text/text: Get started
          Button/_Button base/Text/fill: "#FFFFFF"
          Button/_Button base/Text/width: "89"
        children_text:
          [Get started]
      - node_id: "2842:297055"
        path_key: "root/Desktop/CTA section/Container/Content/Actions/INSTANCE:Button[3]"
        diffs:
          Button/width: "128"
          Button/Size: xl
          Button/Hierarchy: Secondary gray
          Button/_Button base/width: "128"
          Button/_Button base/Size: xl
          Button/_Button base/Text/text: Learn more
          Button/_Button base/Text/fill: "#344054"
          Button/_Button base/Text/width: "88"
        children_text:
          [Learn more]
      - node_id: "2842:297056"
        path_key: "root/Desktop/CTA section/Container/Content/Actions/INSTANCE:Button[4]"
        diffs:
          Button/width: "129"
          Button/Size: xl
          Button/Hierarchy: Primary
          Button/_Button base/width: "129"
          Button/_Button base/Size: xl
          Button/_Button base/Text/text: Get started
          Button/_Button base/Text/fill: "#FFFFFF"
          Button/_Button base/Text/width: "89"
        children_text:
          [Get started]
      - node_id: "I1624:430486;1508:252790"
        path_key: "root/Desktop/Footer/Container/Content/Email capture/INSTANCE:Button"
        diffs:
          Button/width: "115"
          Button/Hierarchy: Primary
          Button/_Button base/width: "115"
          Button/_Button base/Text/text: Subscribe
          Button/_Button base/Text/fill: "#FFFFFF"
          Button/_Button base/Text/width: "79"
        children_text:
          [Subscribe]
      - node_id: "I1624:430486;1510:267383;1510:266836;1507:253519"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/_Footer link/INSTANCE:Button"
        diffs:
          Button/width: "74"
          Button/_Button base/width: "74"
          Button/_Button base/Text/text: Overview
          Button/_Button base/Text/width: "74"
        children_text:
          [Overview]
      - node_id: "I1624:430486;1510:267383;1510:266838;1507:253529"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/_Footer link/INSTANCE:Button[2]"
        diffs:
          Button/width: "73"
          Button/_Button base/width: "73"
          Button/_Button base/Text/text: Solutions
          Button/_Button base/Text/width: "73"
        children_text:
          [Solutions]
  - chunk_id: repeats_3
    kind: repeats
    template_node_id: "I1624:430479;1288:30718"
    template_path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:_Dropdown header navigation trigger"
    instance_of: Open=False, Type=Featured card, Breakpoint=Desktop
    repeat_count: 1
    varying_keys:
      - _Dropdown header navigation trigger/width
      - _Dropdown header navigation trigger/Button/width
      - _Dropdown header navigation trigger/Button/_Button base/width
      - _Dropdown header navigation trigger/Button/_Button base/Text/text
      - _Dropdown header navigation trigger/Button/_Button base/Text/width
    items:
      - node_id: "I1624:430479;1288:30719"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:_Dropdown header navigation trigger[2]"
        diffs:
          _Dropdown header navigation trigger/width: "110"
          _Dropdown header navigation trigger/Button/width: "110"
          _Dropdown header navigation trigger/Button/_Button base/width: "110"
          _Dropdown header navigation trigger/Button/_Button base/Text/text: Resources
          _Dropdown header navigation trigger/Button/_Button base/Text/width: "82"
        children_text:
          [Resources]
  - chunk_id: repeats_4
    kind: repeats
    template_node_id: "2842:296020"
    template_path_key: "root/Desktop/Pricing page header/Section/Container/Content/Heading and supporting text/Heading and badge/INSTANCE:Badge"
    instance_of: Size=lg, Icon=False, Color=Primary
    repeat_count: 1
    varying_keys:
      - Badge/width
      - Badge/Size
      - Badge/Color
      - Badge/_Badge base/fill
      - Badge/_Badge base/width
      - Badge/_Badge base/Text/text
      - Badge/_Badge base/Text/fill
      - Badge/_Badge base/Text/width
    items:
      - node_id: "I1624:430486;1510:267383;1510:266838;1507:253530"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/_Footer link/INSTANCE:Badge"
        diffs:
          Badge/width: "42"
          Badge/Size: sm
          Badge/Color: Success
          Badge/_Badge base/fill: "#ECFDF3"
          Badge/_Badge base/width: "42"
          Badge/_Badge base/Text/text: New
          Badge/_Badge base/Text/fill: "#027A48"
          Badge/_Badge base/Text/width: "26"
        children_text:
          [New]
  - chunk_id: repeats_5
    kind: repeats
    template_node_id: "4551:168417"
    template_path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and price/Heading and icon/INSTANCE:Featured icon"
    instance_of: Size=md, Color=Primary, Theme=Light circle outline
    repeat_count: 1
    varying_keys:
      - Featured icon/width
      - Featured icon/Size
      - Featured icon/zap/width
      - Featured icon/zap/Icon/width
    items:
      - node_id: "I2842:296581;1361:1685"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[2]"
        diffs:
          Featured icon/width: "48"
          Featured icon/Size: lg
          Featured icon/zap/width: "24"
          Featured icon/zap/Icon/width: "18"
  - chunk_id: repeats_6
    kind: repeats
    template_node_id: "4551:168423"
    template_path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text"
    instance_of: Size=sm, Color=Primary, Breakpoint=Desktop
    repeat_count: 14
    varying_keys:
      [Check item text/Text wrap/Text/text]
    items:
      - node_id: "4551:168424"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[2]"
        diffs:
          Check item text/Text wrap/Text/text: Basic reporting and analytics
        children_text:
          [Basic reporting and analytics]
      - node_id: "4551:168425"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[3]"
        diffs:
          Check item text/Text wrap/Text/text: Up to 10 individual users
        children_text:
          [Up to 10 individual users]
      - node_id: "4551:168426"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[4]"
        diffs:
          Check item text/Text wrap/Text/text: 20GB individual data each user
        children_text:
          [20GB individual data each user]
      - node_id: "4551:168427"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[5]"
        diffs:
          Check item text/Text wrap/Text/text: Basic chat and email support
        children_text:
          [Basic chat and email support]
      - node_id: "4551:168493"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[6]"
        diffs:
          Check item text/Text wrap/Text/text: 200+ integrations
        children_text:
          [200+ integrations]
      - node_id: "4551:168494"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[7]"
        diffs:
          Check item text/Text wrap/Text/text: Advanced reporting and analytics
        children_text:
          [Advanced reporting and analytics]
      - node_id: "4551:168495"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[8]"
        diffs:
          Check item text/Text wrap/Text/text: Up to 20 individual users
        children_text:
          [Up to 20 individual users]
      - node_id: "4551:168496"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[9]"
        diffs:
          Check item text/Text wrap/Text/text: 40GB individual data each user
        children_text:
          [40GB individual data each user]
      - node_id: "4551:168497"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[10]"
        diffs:
          Check item text/Text wrap/Text/text: Priority chat and email support
        children_text:
          [Priority chat and email support]
      - node_id: "4551:168563"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[11]"
        diffs:
          Check item text/Text wrap/Text/text: Advanced custom fields
        children_text:
          [Advanced custom fields]
      - node_id: "4551:168564"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[12]"
        diffs:
          Check item text/Text wrap/Text/text: Audit log and data history
        children_text:
          [Audit log and data history]
      - node_id: "4551:168565"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[13]"
        diffs:
          Check item text/Text wrap/Text/text: Unlimited individual users
        children_text:
          [Unlimited individual users]
      - node_id: "4551:168566"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[14]"
        diffs:
          Check item text/Text wrap/Text/text: Unlimited individual data
        children_text:
          [Unlimited individual data]
      - node_id: "4551:168567"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[15]"
        diffs:
          Check item text/Text wrap/Text/text: Personalised+priotity service
        children_text:
          [Personalised+priotity service]
  - chunk_id: repeats_7
    kind: repeats
    template_node_id: "I2842:296580;1361:1693"
    template_path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button"
    instance_of: Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
    repeat_count: 5
    varying_keys:
      []
    items:
      - node_id: "I2842:296581;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[2]"
        diffs:
          {}
        children_text:
          [Learn more]
      - node_id: "I2842:296582;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[3]"
        diffs:
          {}
        children_text:
          [Learn more]
      - node_id: "I2842:296584;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[4]"
        diffs:
          {}
        children_text:
          [Learn more]
      - node_id: "I2842:296585;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[5]"
        diffs:
          {}
        children_text:
          [Learn more]
      - node_id: "I2842:296586;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[6]"
        diffs:
          {}
        children_text:
          [Learn more]
  - chunk_id: repeats_8
    kind: repeats
    template_node_id: "I1624:430486;1510:267383;1510:266836"
    template_path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link"
    instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
    repeat_count: 10
    varying_keys:
      - _Footer link/width
      - _Footer link/Button/width
      - _Footer link/Button/_Button base/width
      - _Footer link/Button/_Button base/Text/text
      - _Footer link/Button/_Button base/Text/width
    items:
      - node_id: "I1624:430486;1510:267383;1510:266837"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[2]"
        diffs:
          _Footer link/width: "68"
          _Footer link/Button/width: "68"
          _Footer link/Button/_Button base/width: "68"
          _Footer link/Button/_Button base/Text/text: Features
          _Footer link/Button/_Button base/Text/width: "68"
        children_text:
          [Features]
      - node_id: "I1624:430486;1510:267383;1510:266839"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[4]"
        diffs:
          _Footer link/width: "68"
          _Footer link/Button/width: "68"
          _Footer link/Button/_Button base/width: "68"
          _Footer link/Button/_Button base/Text/text: Tutorials
          _Footer link/Button/_Button base/Text/width: "68"
        children_text:
          [Tutorials]
      - node_id: "I1624:430486;1510:267383;1510:266840"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[5]"
        diffs:
          _Footer link/width: "54"
          _Footer link/Button/width: "54"
          _Footer link/Button/_Button base/width: "54"
          _Footer link/Button/_Button base/Text/text: Pricing
          _Footer link/Button/_Button base/Text/width: "54"
        children_text:
          [Pricing]
      - node_id: "I1624:430486;1510:267383;1510:266841"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[6]"
        diffs:
          _Footer link/width: "70"
          _Footer link/Button/width: "70"
          _Footer link/Button/_Button base/width: "70"
          _Footer link/Button/_Button base/Text/text: Releases
          _Footer link/Button/_Button base/Text/width: "70"
        children_text:
          [Releases]
      - node_id: "I1624:430486;1510:268817;1510:266836"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[7]"
        diffs:
          _Footer link/width: "70"
          _Footer link/Button/width: "70"
          _Footer link/Button/_Button base/width: "70"
          _Footer link/Button/_Button base/Text/text: About us
          _Footer link/Button/_Button base/Text/width: "70"
        children_text:
          [About us]
      - node_id: "I1624:430486;1510:268817;1510:266837"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[8]"
        diffs:
          _Footer link/width: "62"
          _Footer link/Button/width: "62"
          _Footer link/Button/_Button base/width: "62"
          _Footer link/Button/_Button base/Text/text: Careers
          _Footer link/Button/_Button base/Text/width: "62"
        children_text:
          [Careers]
      - node_id: "I1624:430486;1510:268817;1510:266838"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[9]"
        diffs:
          _Footer link/width: "44"
          _Footer link/Button/width: "44"
          _Footer link/Button/_Button base/width: "44"
          _Footer link/Button/_Button base/Text/text: Press
          _Footer link/Button/_Button base/Text/width: "44"
        children_text:
          [Press]
      - node_id: "I1624:430486;1510:268817;1510:266839"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[10]"
        diffs:
          _Footer link/width: "44"
          _Footer link/Button/width: "44"
          _Footer link/Button/_Button base/width: "44"
          _Footer link/Button/_Button base/Text/text: News
          _Footer link/Button/_Button base/Text/width: "44"
        children_text:
          [News]
      - node_id: "I1624:430486;1510:268817;1510:266840"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[11]"
        diffs:
          _Footer link/width: "71"
          _Footer link/Button/width: "71"
          _Footer link/Button/_Button base/width: "71"
          _Footer link/Button/_Button base/Text/text: Media kit
          _Footer link/Button/_Button base/Text/width: "71"
        children_text:
          [Media kit]
      - node_id: "I1624:430486;1510:268817;1510:266841"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[12]"
        diffs:
          _Footer link/width: "62"
          _Footer link/Button/width: "62"
          _Footer link/Button/_Button base/width: "62"
          _Footer link/Button/_Button base/Text/text: Contact
          _Footer link/Button/_Button base/Text/width: "62"
        children_text:
          [Contact]
  - chunk_id: repeats_9
    kind: repeats
    template_node_id: "I1624:430486;1510:268817"
    template_path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[2]"
    instance_of: Color=Gray, Theme=Light
    repeat_count: 4
    varying_keys:
      - _Footer links column/Heading/text
      - _Footer links column/Footer links/_Footer link/width
      - _Footer links column/Footer links/_Footer link/Button/width
      - _Footer links column/Footer links/_Footer link/Button/_Button base/width
      - _Footer links column/Footer links/_Footer link/Button/_Button base/Text/text
      - _Footer links column/Footer links/_Footer link/Button/_Button base/Text/width
      - "_Footer links column/Footer links/_Footer link[2]/width"
      - "_Footer links column/Footer links/_Footer link[2]/Button/width"
      - "_Footer links column/Footer links/_Footer link[2]/Button/_Button base/width"
      - "_Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/text"
      - "_Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/width"
      - "_Footer links column/Footer links/_Footer link[3]/width"
      - "_Footer links column/Footer links/_Footer link[3]/Button/width"
      - "_Footer links column/Footer links/_Footer link[3]/Button/_Button base/width"
      - "_Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/text"
      - "_Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/width"
      - "_Footer links column/Footer links/_Footer link[4]/width"
      - "_Footer links column/Footer links/_Footer link[4]/Button/width"
      - "_Footer links column/Footer links/_Footer link[4]/Button/_Button base/width"
      - "_Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/text"
      - "_Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/width"
      - "_Footer links column/Footer links/_Footer link[5]/width"
      - "_Footer links column/Footer links/_Footer link[5]/Button/width"
      - "_Footer links column/Footer links/_Footer link[5]/Button/_Button base/width"
      - "_Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/text"
      - "_Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/width"
      - "_Footer links column/Footer links/_Footer link[6]/width"
      - "_Footer links column/Footer links/_Footer link[6]/Button/width"
      - "_Footer links column/Footer links/_Footer link[6]/Button/_Button base/width"
      - "_Footer links column/Footer links/_Footer link[6]/Button/_Button base/Text/text"
      - "_Footer links column/Footer links/_Footer link[6]/Button/_Button base/Text/width"
    items:
      - node_id: "I1624:430486;1510:270256"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[3]"
        diffs:
          _Footer links column/Heading/text: Resources
          _Footer links column/Footer links/_Footer link/width: "35"
          _Footer links column/Footer links/_Footer link/Button/width: "35"
          _Footer links column/Footer links/_Footer link/Button/_Button base/width: "35"
          _Footer links column/Footer links/_Footer link/Button/_Button base/Text/text: Blog
          _Footer links column/Footer links/_Footer link/Button/_Button base/Text/width: "35"
          _Footer links column/Footer links/_Footer link[2]/width: "86"
          _Footer links column/Footer links/_Footer link[2]/Button/width: "86"
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/width: "86"
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/text: Newsletter
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/width: "86"
          _Footer links column/Footer links/_Footer link[3]/width: "53"
          _Footer links column/Footer links/_Footer link[3]/Button/width: "53"
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/width: "53"
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/text: Events
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/width: "53"
          _Footer links column/Footer links/_Footer link[4]/width: "90"
          _Footer links column/Footer links/_Footer link[4]/Button/width: "90"
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/width: "90"
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/text: Help centre
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/width: "90"
          _Footer links column/Footer links/_Footer link[5]/width: "68"
          _Footer links column/Footer links/_Footer link[5]/Button/width: "68"
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/width: "68"
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/text: Tutorials
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/width: "68"
          _Footer links column/Footer links/_Footer link[6]/width: "63"
          _Footer links column/Footer links/_Footer link[6]/Button/width: "63"
          _Footer links column/Footer links/_Footer link[6]/Button/_Button base/width: "63"
          _Footer links column/Footer links/_Footer link[6]/Button/_Button base/Text/text: Support
          _Footer links column/Footer links/_Footer link[6]/Button/_Button base/Text/width: "63"
        children_text:
          - Resources
          - Blog
          - Newsletter
          - Events
          - Help centre
          - Tutorials
          - Support
      - node_id: "I1624:430486;1510:270757"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[4]"
        diffs:
          _Footer links column/Heading/text: Use cases
          _Footer links column/Footer links/_Footer link/width: "68"
          _Footer links column/Footer links/_Footer link/Button/width: "68"
          _Footer links column/Footer links/_Footer link/Button/_Button base/width: "68"
          _Footer links column/Footer links/_Footer link/Button/_Button base/Text/text: Startups
          _Footer links column/Footer links/_Footer link/Button/_Button base/Text/width: "68"
          _Footer links column/Footer links/_Footer link[2]/width: "81"
          _Footer links column/Footer links/_Footer link[2]/Button/width: "81"
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/width: "81"
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/text: Enterprise
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/width: "81"
          _Footer links column/Footer links/_Footer link[3]/width: "96"
          _Footer links column/Footer links/_Footer link[3]/Button/width: "96"
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/width: "96"
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/text: Government
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/width: "96"
          _Footer links column/Footer links/_Footer link[4]/width: "40"
          _Footer links column/Footer links/_Footer link[4]/Button/width: "40"
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/width: "40"
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/text: SaaS
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/width: "40"
          _Footer links column/Footer links/_Footer link[5]/width: "106"
          _Footer links column/Footer links/_Footer link[5]/Button/width: "106"
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/width: "106"
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/text: Marketplaces
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/width: "106"
          _Footer links column/Footer links/_Footer link[6]/width: "92"
          _Footer links column/Footer links/_Footer link[6]/Button/width: "92"
          _Footer links column/Footer links/_Footer link[6]/Button/_Button base/width: "92"
          _Footer links column/Footer links/_Footer link[6]/Button/_Button base/Text/text: Ecommerce
          _Footer links column/Footer links/_Footer link[6]/Button/_Button base/Text/width: "92"
        children_text:
          - Use cases
          - Startups
          - Enterprise
          - Government
          - SaaS
          - Marketplaces
          - Ecommerce
      - node_id: "I1624:430486;1510:272166"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[5]"
        diffs:
          _Footer links column/Heading/text: Social
          _Footer links column/Footer links/_Footer link/width: "56"
          _Footer links column/Footer links/_Footer link/Button/width: "56"
          _Footer links column/Footer links/_Footer link/Button/_Button base/width: "56"
          _Footer links column/Footer links/_Footer link/Button/_Button base/Text/text: Twitter
          _Footer links column/Footer links/_Footer link/Button/_Button base/Text/width: "56"
          _Footer links column/Footer links/_Footer link[2]/width: "66"
          _Footer links column/Footer links/_Footer link[2]/Button/width: "66"
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/width: "66"
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/text: LinkedIn
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/width: "66"
          _Footer links column/Footer links/_Footer link[3]/width: "76"
          _Footer links column/Footer links/_Footer link[3]/Button/width: "76"
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/width: "76"
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/text: Facebook
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/width: "76"
          _Footer links column/Footer links/_Footer link[4]/width: "55"
          _Footer links column/Footer links/_Footer link[4]/Button/width: "55"
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/width: "55"
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/text: GitHub
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/width: "55"
          _Footer links column/Footer links/_Footer link[5]/width: "74"
          _Footer links column/Footer links/_Footer link[5]/Button/width: "74"
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/width: "74"
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/text: AngelList
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/width: "74"
          _Footer links column/Footer links/_Footer link[6]/width: "66"
          _Footer links column/Footer links/_Footer link[6]/Button/width: "66"
          _Footer links column/Footer links/_Footer link[6]/Button/_Button base/width: "66"
          _Footer links column/Footer links/_Footer link[6]/Button/_Button base/Text/text: Dribbble
          _Footer links column/Footer links/_Footer link[6]/Button/_Button base/Text/width: "66"
        children_text:
          [Social, Twitter, LinkedIn, Facebook, GitHub, AngelList, Dribbble]
      - node_id: "I1624:430486;1510:273057"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[6]"
        diffs:
          _Footer links column/Heading/text: Legal
          _Footer links column/Footer links/_Footer link/width: "49"
          _Footer links column/Footer links/_Footer link/Button/width: "49"
          _Footer links column/Footer links/_Footer link/Button/_Button base/width: "49"
          _Footer links column/Footer links/_Footer link/Button/_Button base/Text/text: Terms
          _Footer links column/Footer links/_Footer link/Button/_Button base/Text/width: "49"
          _Footer links column/Footer links/_Footer link[2]/width: "58"
          _Footer links column/Footer links/_Footer link[2]/Button/width: "58"
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/width: "58"
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/text: Privacy
          _Footer links column/Footer links/_Footer link[2]/Button/_Button base/Text/width: "58"
          _Footer links column/Footer links/_Footer link[3]/width: "63"
          _Footer links column/Footer links/_Footer link[3]/Button/width: "63"
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/width: "63"
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/text: Cookies
          _Footer links column/Footer links/_Footer link[3]/Button/_Button base/Text/width: "63"
          _Footer links column/Footer links/_Footer link[4]/width: "69"
          _Footer links column/Footer links/_Footer link[4]/Button/width: "69"
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/width: "69"
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/text: Licenses
          _Footer links column/Footer links/_Footer link[4]/Button/_Button base/Text/width: "69"
          _Footer links column/Footer links/_Footer link[5]/width: "65"
          _Footer links column/Footer links/_Footer link[5]/Button/width: "65"
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/width: "65"
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/text: Settings
          _Footer links column/Footer links/_Footer link[5]/Button/_Button base/Text/width: "65"
        children_text:
          [Legal, Terms, Privacy, Cookies, Licenses, Settings, Contact]
```

<!-- chars: 187596 -->