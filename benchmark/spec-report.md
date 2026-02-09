## Figma Component: Desktop

### Figma URL
https://www.figma.com/design/4rL4UfUHaoz4AaeQIuEUOl/%E2%9D%96-Untitled-UI-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=1623-261471&t=ZJIw99N63UHkDQQf-11

### Implementation Instructions
1. Use get_screenshot on the Figma URL above and **save it to `.figma/desktop.png`** (relative to working directory). Reference this local file whenever you need to check the design — do not call get_screenshot again.
2. Read the anatomy tree below to understand the component structure.
3. Read the YAML specs — it has every layer, color, font, spacing, and token value you need.
4. Check the project's working directory or `package.json` for the icon library in use (e.g. Phosphor, Lucide, Heroicons). Use matching icons from that library based on the `instance_of` names in the anatomy (e.g. `instance_of: ForkKnife` → use ForkKnife from the detected library).
5. Check the project's `package.json` to detect the framework in use, then build the component accordingly.
6. Build the component exactly as specified. Match the structure, styles (fills, strokes, fonts), and layout (direction, gap, padding).
7. Use resolved_tokens to map token names to actual values (e.g. hex colors, font names).
8. Keep it minimal — only implement what the specs describe, nothing more.
9. **Visual QA** — render your component at 1440×3741px (1x scale, no device emulation). Take a screenshot and compare with `.figma/desktop.png`. Verify:
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
- Header section (INSTANCE) — instance of Alignment=Left, Actions=False, Color=Default, Breakpoint=Desktop
- Container (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading and subheading (FRAME)
- Subheading (TEXT) — "Pricing"
- Heading (TEXT) — "Simple, transparent pricing"
- Supporting text (TEXT) — "We believe Untitled should be accessibl…"
- Section (FRAME)
- Container (FRAME)
- Content (FRAME)
- _Pricing tier card (FRAME)
- Header (FRAME)
- Price (TEXT) — "$10/mth"
- Hand-drawn arrow (INSTANCE) — instance of Arrow=09, Type=Smooth
- Text (TEXT) — "Most popular!"
- Heading and supporting text (FRAME)
- Heading (TEXT) — "Basic plan"
- Supporting text (TEXT) — "Billed annually."
- Content (FRAME)
- Check items (FRAME)
- Check item text (INSTANCE) — instance of Size=sm, Color=Success, Breakpoint=Desktop
- Check icon (INSTANCE) — instance of Size=sm, Color=Success
- Text wrap (FRAME)
- Text (TEXT) — "Access to all basic features"
- Check item text (INSTANCE) — instance of Size=sm, Color=Success, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Success, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Success, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Success, Breakpoint=Desktop
- Footer (FRAME)
- Actions (FRAME)
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
- _Pricing tier card (FRAME)
- Header (FRAME)
- Price (TEXT) — "$20/mth"
- Heading and supporting text (FRAME)
- Heading (TEXT) — "Business plan"
- Supporting text (TEXT) — "Billed annually."
- Content (FRAME)
- Check items (FRAME)
- Check item text (INSTANCE) — instance of Size=sm, Color=Success, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Success, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Success, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Success, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Success, Breakpoint=Desktop
- Footer (FRAME)
- Actions (FRAME)
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
- _Pricing tier card (FRAME)
- Header (FRAME)
- Price (TEXT) — "$40/mth"
- Heading and supporting text (FRAME)
- Heading (TEXT) — "Enterprise plan"
- Supporting text (TEXT) — "Billed annually."
- Content (FRAME)
- Check items (FRAME)
- Check item text (INSTANCE) — instance of Size=sm, Color=Success, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Success, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Success, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Success, Breakpoint=Desktop
- Check item text (INSTANCE) — instance of Size=sm, Color=Success, Breakpoint=Desktop
- Footer (FRAME)
- Actions (FRAME)
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
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle
- Text and supporting text (FRAME)
- Text (TEXT) — "Share team inboxes"
- Supporting text (TEXT) — "Whether you have a team of 2 or 200, ou…"
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
- _Button base (INSTANCE) — instance of Size=lg, Icon=Trailing
- Text (TEXT) — "Learn more"
- arrow-right (INSTANCE) — instance of arrow-right
- _Feature text (INSTANCE) — instance of Type=Featured icon top left, Action=True, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle
- Text and supporting text (FRAME)
- Text (TEXT) — "Deliver instant answers"
- Supporting text (TEXT) — "An all-in-one customer service platform…"
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
- _Feature text (INSTANCE) — instance of Type=Featured icon top left, Action=True, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle
- Text and supporting text (FRAME)
- Text (TEXT) — "Manage your team with reports"
- Supporting text (TEXT) — "Measure what matters with Untitled’s ea…"
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
- Content (FRAME)
- _Feature text (INSTANCE) — instance of Type=Featured icon top left, Action=True, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle
- Text and supporting text (FRAME)
- Text (TEXT) — "Connect with customers"
- Supporting text (TEXT) — "Solve a problem or close a sale in real…"
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
- _Feature text (INSTANCE) — instance of Type=Featured icon top left, Action=True, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle
- Text and supporting text (FRAME)
- Text (TEXT) — "Connect the tools you already use"
- Supporting text (TEXT) — "Explore 100+ integrations that make you…"
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
- _Feature text (INSTANCE) — instance of Type=Featured icon top left, Action=True, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle
- Text and supporting text (FRAME)
- Text (TEXT) — "Our people make the difference"
- Supporting text (TEXT) — "We’re an extension of your customer ser…"
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
- FAQ section (FRAME)
- Container (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading (TEXT) — "FAQs"
- Supporting text (TEXT) — "Everything you need to know about the p…"
- Container (FRAME)
- Content (FRAME)
- _FAQ item (INSTANCE) — instance of Expanded=True, Divider=False, Icon=False, Breakpoint=Desktop
- Content (FRAME)
- Text and supporting text (FRAME)
- Text (TEXT) — "Is there a free trial available?"
- Supporting text (TEXT) — "Yes, you can try us for free for 30 day…"
- _FAQ item (INSTANCE) — instance of Expanded=True, Divider=False, Icon=False, Breakpoint=Desktop
- _FAQ item (INSTANCE) — instance of Expanded=True, Divider=False, Icon=False, Breakpoint=Desktop
- Content (FRAME)
- _FAQ item (INSTANCE) — instance of Expanded=True, Divider=False, Icon=False, Breakpoint=Desktop
- _FAQ item (INSTANCE) — instance of Expanded=True, Divider=False, Icon=False, Breakpoint=Desktop
- _FAQ item (INSTANCE) — instance of Expanded=True, Divider=False, Icon=False, Breakpoint=Desktop
- Container (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading (TEXT) — "Still have questions?"
- Supporting text (TEXT) — "Can’t find the answer you’re looking fo…"
- Actions (FRAME)
- Button (INSTANCE) — instance of Size=lg, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
- CTA section (FRAME)
- Container (FRAME)
- Content (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading (TEXT) — "Start your 30-day free trial"
- Supporting text (TEXT) — "Join over 4,000+ startups already growi…"
- Logos (FRAME)
- Row (FRAME)
- Company logo (INSTANCE) — instance of Company=Layers, Logotype=True, Color=Primary, Theme=Dark
- Company logo (INSTANCE) — instance of Company=Sisyphus, Logotype=True, Color=Primary, Theme=Dark
- Company logo (INSTANCE) — instance of Company=Circooles, Logotype=True, Color=Primary, Theme=Dark
- Row (FRAME)
- Company logo (INSTANCE) — instance of Company=Catalog, Logotype=True, Color=Primary, Theme=Dark
- Company logo (INSTANCE) — instance of Company=Quotient, Logotype=True, Color=Primary, Theme=Dark
- Company logo (INSTANCE) — instance of Company=Hourglass, Logotype=True, Color=Primary, Theme=Dark
- Actions (FRAME)
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Secondary gray, Icon=False, Destructive=False, State=Default
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
- Footer (INSTANCE) — instance of Type=Large 01, Theme=Default, Breakpoint=Desktop
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
- Price (FRAME)
- Check item text (INSTANCE)
- Check item text (INSTANCE)
- Check item text (INSTANCE)
- Check item text (INSTANCE)
- Check item text (INSTANCE)
- Button (INSTANCE)
```

### Specs Data (YAML)
```yaml
schema: specs-plugin.agent_pack.v10.yaml.compact
generated_at: "2026-02-09T15:59:58.596Z"
selection:
  node_id: "1623:261471"
  name: Desktop
  type: FRAME
  clips_content: true
summary:
  anatomy_nodes_total: 223
  property_groups_total: 0
  property_variants_total: 0
  variable_refs_total: 0
  instance_templates: 8
  deduplicated_instances: 51
  chunks_total: 13
  truncated:
    anatomy: false
    anatomy_included: 223
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
  Gray/100: "#F2F4F7"
  Text md/Semibold: "#6941C6"
  Display lg/Semibold: "#101828"
  Text xl/Regular: "#E9D7FE"
  Gray/200: "#EAECF0"
  Text sm/Medium: "#6941C6"
  Text xl/Semibold: "#101828"
  Text md/Regular: "#98A2B3"
  Gray/50: "#F9FAFB"
  Display md/Semibold: "#FFFFFF"
  Text xl/Medium: "#101828"
  Gray/500: "#667085"
  Text lg/Medium: "#101828"
  Text lg/Regular: "#667085"
  Primary/800: "#53389E"
  Text sm/Semibold: "#98A2B3"
text_index:
  - id: "1623:261472"
    path: "root/Desktop/INSTANCE:Dropdown header navigation"
    children_text:
      [Home, Products, Resources, Pricing, Log in, Sign up]
  - id: "I1623:261472;1288:30717"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:Button"
    children_text:
      [Home]
  - id: "I1623:261472;1288:30718"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:_Dropdown header navigation trigger"
    children_text:
      [Products]
  - id: "I1623:261472;1288:30718;1288:478"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/INSTANCE:Button"
    children_text:
      [Products]
  - id: "I1623:261472;1288:30718;1288:478;1042:35579"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/INSTANCE:_Button base"
    children_text:
      [Products]
  - id: "I1623:261472;1288:30718;1288:478;1042:35579;1054:7014"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/_Button base/TEXT:Text"
    text: Products
  - id: "I1623:261472;1624:307186"
    path: "root/Desktop/Dropdown header navigation/Header/Container/INSTANCE:_Navigation actions"
    children_text:
      [Log in, Sign up]
  - id: "2842:296252"
    path: "root/Desktop/Pricing page header/INSTANCE:Header section"
    children_text:
      - Pricing
      - Simple, transparent pricing
      - We believe Untitled should be accessible to all companies, no matter the size.
  - id: "I2842:296252;1322:2057"
    path: "root/Desktop/Pricing page header/Header section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
    text: Pricing
  - id: "I2842:296252;1322:2058"
    path: "root/Desktop/Pricing page header/Header section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
    text: Simple, transparent pricing
  - id: "I2842:296252;1322:2059"
    path: "root/Desktop/Pricing page header/Header section/Container/Content/Heading and supporting text/TEXT:Supporting text"
    text: We believe Untitled should be accessible to all companies, no matter the size.
  - id: "4551:168696"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Price/TEXT:Price"
    text: $10/mth
  - id: "4551:168698"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Price/TEXT:Text"
    text: Most popular!
  - id: "4551:168700"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and supporting text/TEXT:Heading"
    text: Basic plan
  - id: "4551:168701"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and supporting text/TEXT:Supporting text"
    text: Billed annually.
  - id: "4551:168704"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text"
    children_text:
      [Access to all basic features]
  - id: "I4551:168704;1345:2754"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/Check item text/Text wrap/TEXT:Text"
    text: Access to all basic features
  - id: "4551:168627"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Price/TEXT:Price[2]"
    text: $20/mth
  - id: "4551:168631"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and supporting text/TEXT:Heading[2]"
    text: Business plan
  - id: "4551:168632"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and supporting text/TEXT:Supporting text[2]"
    text: Billed annually.
  - id: "4551:168767"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Price/TEXT:Price[3]"
    text: $40/mth
  - id: "4551:168771"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and supporting text/TEXT:Heading[3]"
    text: Enterprise plan
  - id: "4551:168772"
    path: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and supporting text/TEXT:Supporting text[3]"
    text: Billed annually.
  - id: "2842:296492"
    path: "root/Desktop/Features section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
    text: Features
  - id: "2842:296493"
    path: "root/Desktop/Features section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
    text: Beautiful analytics to grow smarter
  - id: "2842:296494"
    path: "root/Desktop/Features section/Container/Content/Heading and supporting text/TEXT:Supporting text"
    text: Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
  - id: "2842:296497"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text"
    children_text:
      - Share team inboxes
      - Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
      - Learn more
  - id: "I2842:296497;1361:1687"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text"
    text: Share team inboxes
  - id: "I2842:296497;1361:1688"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text"
    text: Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
  - id: "I2842:296497;1361:1693"
    path: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button"
    children_text:
      [Learn more]
  - id: "I2842:296497;1361:1693;1041:38683"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Button/INSTANCE:_Button base"
    children_text:
      [Learn more]
  - id: "I2842:296497;1361:1693;1041:38683;1054:7014"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Button/_Button base/TEXT:Text"
    text: Learn more
  - id: "2842:296498"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[2]"
    children_text:
      - Deliver instant answers
      - An all-in-one customer service platform that helps you balance everything your customers need to be happy.
      - Learn more
  - id: "I2842:296498;1361:1687"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[2]"
    text: Deliver instant answers
  - id: "I2842:296498;1361:1688"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[2]"
    text: An all-in-one customer service platform that helps you balance everything your customers need to be happy.
  - id: "2842:296499"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[3]"
    children_text:
      - Manage your team with reports
      - Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
      - Learn more
  - id: "I2842:296499;1361:1687"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[3]"
    text: Manage your team with reports
  - id: "I2842:296499;1361:1688"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[3]"
    text: Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
  - id: "2842:296501"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[4]"
    children_text:
      - Connect with customers
      - Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
      - Learn more
  - id: "I2842:296501;1361:1687"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[4]"
    text: Connect with customers
  - id: "I2842:296501;1361:1688"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[4]"
    text: Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
  - id: "2842:296502"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[5]"
    children_text:
      - Connect the tools you already use
      - Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
      - Learn more
  - id: "I2842:296502;1361:1687"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[5]"
    text: Connect the tools you already use
  - id: "I2842:296502;1361:1688"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[5]"
    text: Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
  - id: "2842:296503"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[6]"
    children_text:
      - Our people make the difference
      - We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
      - Learn more
  - id: "I2842:296503;1361:1687"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[6]"
    text: Our people make the difference
  - id: "I2842:296503;1361:1688"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[6]"
    text: We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
  - id: "2842:296657"
    path: "root/Desktop/FAQ section/Container/Content/Heading and supporting text/TEXT:Heading"
    text: FAQs
  - id: "2842:296658"
    path: "root/Desktop/FAQ section/Container/Content/Heading and supporting text/TEXT:Supporting text"
    text: Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.
  - id: "2842:296661"
    path: "root/Desktop/FAQ section/Container/Content/INSTANCE:_FAQ item"
    children_text:
      - Is there a free trial available?
      - Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
  - id: "I2842:296661;1359:191527"
    path: "root/Desktop/FAQ section/Container/Content/_FAQ item/Content/Text and supporting text/TEXT:Text"
    text: Is there a free trial available?
  - id: "I2842:296661;1359:191528"
    path: "root/Desktop/FAQ section/Container/Content/_FAQ item/Content/Text and supporting text/TEXT:Supporting text"
    text: Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
  - id: "2842:296671"
    path: "root/Desktop/FAQ section/Container/Content/Heading and supporting text/TEXT:Heading[2]"
    text: Still have questions?
  - id: "2842:296672"
    path: "root/Desktop/FAQ section/Container/Content/Heading and supporting text/TEXT:Supporting text[2]"
    text: Can’t find the answer you’re looking for? Please chat to our friendly team.
  - id: "2842:296706"
    path: "root/Desktop/CTA section/Container/Content/Content/Heading and supporting text/TEXT:Heading"
    text: Start your 30-day free trial
  - id: "2842:296707"
    path: "root/Desktop/CTA section/Container/Content/Content/Heading and supporting text/TEXT:Supporting text"
    text: Join over 4,000+ startups already growing with Untitled.
  - id: "1623:261474"
    path: "root/Desktop/INSTANCE:Footer"
    children_text:
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
  - id: "I1623:261474;1510:278119"
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
  - id: "I1623:261474;1510:278119;1510:266786"
    path: "root/Desktop/Footer/Container/Content/_Footer links column/TEXT:Heading"
    text: Product
  - id: "I1623:261474;1510:278119;1510:266836"
    path: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link"
    children_text:
      [Overview]
  - id: "I1623:261474;1510:278119;1510:266838"
    path: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[3]"
    children_text:
      [Solutions, New]
  - id: "I1623:261474;1510:278119;1510:266838;1507:253530"
    path: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/_Footer link/INSTANCE:Badge"
    children_text:
      [New]
  - id: "I1623:261474;1510:278120"
    path: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[2]"
    children_text:
      [Company, About us, Careers, Press, News, Media kit, Contact]
  - id: "I1623:261474;1510:278120;1510:266786"
    path: "root/Desktop/Footer/Container/Content/_Footer links column/TEXT:Heading[2]"
    text: Company
  - id: "I1623:261474;1508:252807"
    path: "root/Desktop/Footer/Container/Content/TEXT:Footer text"
    text: © 2077 Untitled UI. All rights reserved.
chunks:
  - chunk_id: anatomy_1
    kind: anatomy
    item_count: 50
    path_range:
      - "root/FRAME:Desktop"
      - "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Footer"
    node_ids:
      - "1623:261471"
      - "1623:261472"
      - "I1623:261472;1288:30712"
      - "I1623:261472;1288:30713"
      - "I1623:261472;1288:30714"
      - "I1623:261472;1288:30715"
      - "I1623:261472;1288:30715;1083:50705"
      - "I1623:261472;1288:30716"
      - "I1623:261472;1288:30717"
      - "I1623:261472;1288:30718"
      - "I1623:261472;1288:30718;1288:478"
      - "I1623:261472;1288:30718;1288:478;1042:35579"
      - "I1623:261472;1288:30718;1288:478;1042:35579;1054:7014"
      - "I1623:261472;1288:30718;1288:478;1042:35579;1054:7015"
      - "I1623:261472;1288:30719"
      - "I1623:261472;1288:30720"
      - "I1623:261472;1624:307186"
      - "I1623:261472;1624:307186;1624:262067"
      - "I1623:261472;1624:307186;1624:262069"
      - "2842:296251"
      - "2842:296252"
      - "I2842:296252;1322:2053"
      - "I2842:296252;1322:2054"
      - "I2842:296252;1322:2055"
      - "I2842:296252;1322:2056"
      - "I2842:296252;1322:2057"
      - "I2842:296252;1322:2058"
      - "I2842:296252;1322:2059"
      - "2842:296253"
      - "2842:296254"
      - "2842:296255"
      - "4551:168693"
      - "4551:168694"
      - "4551:168696"
      - "4551:168697"
      - "4551:168698"
      - "4551:168699"
      - "4551:168700"
      - "4551:168701"
      - "4551:168702"
      - "4551:168703"
      - "4551:168704"
      - "I4551:168704;1345:2752"
      - "I4551:168704;1345:2753"
      - "I4551:168704;1345:2754"
      - "4551:168705"
      - "4551:168706"
      - "4551:168707"
      - "4551:168708"
      - "4551:168714"
    items:
      - node_id: "1623:261471"
        path_key: "root/FRAME:Desktop"
        name: Desktop
        type: FRAME
        w: 1440
        h: 3741
        fill: "#FFFFFF"
        fill_ref: White
        padding: 0
        direction: column
        align: MIN / CENTER
        sizing: AUTO / FIXED
        clips: true
      - node_id: "1623:261472"
        path_key: "root/Desktop/INSTANCE:Dropdown header navigation"
        name: Dropdown header navigation
        type: INSTANCE
        instance_of: Open=False, Mobile subnav open=False, Type=Featured card, Breakpoint=Desktop
        children_text:
          [Home, Products, Resources, Pricing, Log in, Sign up]
        w: 1440
        h: 80
        fill: "#FFFFFF"
        fill_ref: White
        stroke: "#F2F4F7"
        stroke_ref: Gray/100
        stroke_align: inside
        stroke_sides: "bottom: 1px"
      - node_id: "I1623:261472;1288:30712"
        path_key: "root/Desktop/Dropdown header navigation/FRAME:Header"
        name: Header
        type: FRAME
        w: 1440
        h: 80
        padding: 0
        direction: column
        align: CENTER / CENTER
        sizing: FIXED / FIXED
      - node_id: "I1623:261472;1288:30713"
        path_key: "root/Desktop/Dropdown header navigation/Header/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 44
        padding: 0
        direction: row
        align: SPACE_BETWEEN / CENTER
        sizing: FIXED / AUTO
      - node_id: "I1623:261472;1288:30714"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 586
        h: 32
        padding: 0
        gap: 40
        direction: row
        align: MIN / CENTER
        sizing: AUTO / AUTO
      - node_id: "I1623:261472;1288:30715"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/INSTANCE:Logo"
        name: Logo
        type: INSTANCE
        instance_of: Dark mode=False
        w: 142
        h: 32
        padding: 0
        direction: row
        align: MIN / MIN
        sizing: AUTO / AUTO
      - node_id: "I1623:261472;1288:30715;1083:50705"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Logo/Logo wrap/INSTANCE:Logomark"
        name: Logomark
        type: INSTANCE
        instance_of: Logomark
        w: 32
        h: 32
        fill: "#D0D5DD"
        padding: 0
        shadow: "0px 1px 2px #101828/6%"
        direction: row
        align: MIN / MIN
        sizing: AUTO / AUTO
      - node_id: "I1623:261472;1288:30716"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/FRAME:Navigation"
        name: Navigation
        type: FRAME
        w: 404
        h: 32
        padding: 0
        gap: 32
        direction: row
        align: MIN / CENTER
        sizing: AUTO / AUTO
      - node_id: "I1623:261472;1288:30717"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Home]
        w: 46
        h: 24
        fill: "#FFFFFF"
        padding: 0
        direction: row
        align: MIN / MIN
        sizing: AUTO / AUTO
      - node_id: "I1623:261472;1288:30718"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:_Dropdown header navigation trigger"
        name: _Dropdown header navigation trigger
        type: INSTANCE
        instance_of: Open=False, Type=Featured card, Breakpoint=Desktop
        children_text:
          [Products]
        w: 98
        h: 32
        padding: 4
        direction: column
        align: MIN / CENTER
        sizing: AUTO / AUTO
      - node_id: "I1623:261472;1288:30718;1288:478"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link gray, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Products]
        w: 98
        h: 24
        fill: "#FFFFFF"
        padding: 0
        direction: row
        align: MIN / MIN
        sizing: AUTO / AUTO
      - node_id: "I1623:261472;1288:30718;1288:478;1042:35579"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/INSTANCE:_Button base"
        name: _Button base
        type: INSTANCE
        instance_of: Size=lg, Icon=Trailing
        children_text:
          [Products]
        w: 98
        h: 24
        padding: 0
        gap: 8
        direction: row
        align: CENTER / CENTER
        sizing: AUTO / AUTO
      - node_id: "I1623:261472;1288:30718;1288:478;1042:35579;1054:7014"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/_Button base/TEXT:Text"
        name: Text
        type: TEXT
        text: Products
        w: 70
        h: 24
        fill: "#667085"
        fill_ref: Text md/Semibold
        font_size: 16
        font: Inter Semi Bold
        line_height: 24px
        text_style: Text md/Semibold
      - node_id: "I1623:261472;1288:30718;1288:478;1042:35579;1054:7015"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/_Button base/INSTANCE:chevron-down"
        name: chevron-down
        type: INSTANCE
        instance_of: chevron-down
        w: 20
        h: 20
        fill: "#667085"
      - node_id: "I1623:261472;1288:30719"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:_Dropdown header navigation trigger[2]"
        name: _Dropdown header navigation trigger
        type: INSTANCE
        instance_of: Open=False, Type=Featured card, Breakpoint=Desktop
        children_text:
          [Resources]
        w: 110
        h: 32
        padding: 4
        direction: column
        align: MIN / CENTER
        sizing: AUTO / AUTO
      - node_id: "I1623:261472;1288:30720"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Pricing]
        w: 54
        h: 24
        fill: "#FFFFFF"
        padding: 0
        direction: row
        align: MIN / MIN
        sizing: AUTO / AUTO
      - node_id: "I1623:261472;1624:307186"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/INSTANCE:_Navigation actions"
        name: _Navigation actions
        type: INSTANCE
        instance_of: Logged in=False, Breakpoint=Desktop
        children_text:
          [Log in, Sign up]
        w: 190
        h: 44
        padding: 0
        gap: 12
        direction: row
        align: MIN / CENTER
        sizing: AUTO / AUTO
      - node_id: "I1623:261472;1624:307186;1624:262067"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/_Navigation actions/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Tertiary gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Log in]
        w: 83
        h: 44
        fill: "#FFFFFF"
        radius: 8
        padding: 0
        direction: row
        align: MIN / MIN
        sizing: AUTO / AUTO
      - node_id: "I1623:261472;1624:307186;1624:262069"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/_Navigation actions/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
        children_text:
          [Sign up]
        w: 95
        h: 44
        fill: "#FFFFFF"
        radius: 8
        padding: 0
        direction: row
        align: MIN / MIN
        sizing: AUTO / AUTO
      - node_id: "2842:296251"
        path_key: "root/Desktop/FRAME:Pricing page header"
        name: Pricing page header
        type: FRAME
        w: 1440
        h: 948
        fill: "#FFFFFF"
        fill_ref: White
        padding: 0
        direction: column
        align: MIN / CENTER
        sizing: AUTO / FIXED
        clips: true
      - node_id: "2842:296252"
        path_key: "root/Desktop/Pricing page header/INSTANCE:Header section"
        name: Header section
        type: INSTANCE
        instance_of: Alignment=Left, Actions=False, Color=Default, Breakpoint=Desktop
        children_text:
          - Pricing
          - Simple, transparent pricing
          - We believe Untitled should be accessible to all companies, no matter the size.
        w: 1440
        h: 342
        fill: "#FFFFFF"
        fill_ref: White
        padding: 96
        gap: 64
        direction: column
        align: MIN / CENTER
        sizing: AUTO / FIXED
      - node_id: "I2842:296252;1322:2053"
        path_key: "root/Desktop/Pricing page header/Header section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 150
        padding: 0
        gap: 32
        direction: column
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "I2842:296252;1322:2054"
        path_key: "root/Desktop/Pricing page header/Header section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 150
        padding: 0
        gap: 40
        direction: column
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "I2842:296252;1322:2055"
        path_key: "root/Desktop/Pricing page header/Header section/Container/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 150
        padding: 0
        gap: 24
        direction: column
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "I2842:296252;1322:2056"
        path_key: "root/Desktop/Pricing page header/Header section/Container/Content/Heading and supporting text/FRAME:Heading and subheading"
        name: Heading and subheading
        type: FRAME
        w: 768
        h: 96
        padding: 0
        gap: 12
        direction: column
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "I2842:296252;1322:2057"
        path_key: "root/Desktop/Pricing page header/Header section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
        name: Subheading
        type: TEXT
        text: Pricing
        w: 768
        h: 24
        fill: "#7F56D9"
        fill_ref: Text md/Semibold
        font_size: 16
        font: Inter Semi Bold
        line_height: 24px
        text_style: Text md/Semibold
      - node_id: "I2842:296252;1322:2058"
        path_key: "root/Desktop/Pricing page header/Header section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
        name: Heading
        type: TEXT
        text: Simple, transparent pricing
        w: 768
        h: 60
        fill: "#101828"
        fill_ref: Display lg/Semibold
        font_size: 48
        font: Inter Semi Bold
        line_height: 60px
        text_style: Display lg/Semibold
      - node_id: "I2842:296252;1322:2059"
        path_key: "root/Desktop/Pricing page header/Header section/Container/Content/Heading and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: We believe Untitled should be accessible to all companies, no matter the size.
        w: 768
        h: 30
        fill: "#667085"
        fill_ref: Text xl/Regular
        font_size: 20
        font: Inter Regular
        line_height: 30px
        text_style: Text xl/Regular
      - node_id: "2842:296253"
        path_key: "root/Desktop/Pricing page header/FRAME:Section"
        name: Section
        type: FRAME
        w: 1440
        h: 606
        fill: "#FFFFFF"
        fill_ref: White
        padding: 0
        gap: 64
        direction: column
        align: MIN / CENTER
        sizing: AUTO / FIXED
      - node_id: "2842:296254"
        path_key: "root/Desktop/Pricing page header/Section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 510
        padding: 0
        gap: 32
        direction: column
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "2842:296255"
        path_key: "root/Desktop/Pricing page header/Section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 510
        padding: 0
        gap: 32
        direction: row
        align: CENTER / MIN
        sizing: FIXED / AUTO
      - node_id: "4551:168693"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/FRAME:_Pricing tier card"
        name: _Pricing tier card
        type: FRAME
        w: 384
        h: 510
        fill: "#FFFFFF"
        fill_ref: White
        radius: 16
        padding: 0
        stroke: "#EAECF0"
        stroke_ref: Gray/200
        stroke_align: inside
        stroke_sides: all
        shadow: "0px 4px 6px -2px #101828/3%"
        direction: column
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "4551:168694"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Header"
        name: Header
        type: FRAME
        w: 384
        h: 174
        padding: 40
        gap: 16
        direction: column
        align: MIN / CENTER
        sizing: AUTO / FIXED
      - node_id: "4551:168696"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Price/TEXT:Price"
        name: Price
        type: TEXT
        text: $10/mth
        w: 190
        h: 60
        fill: "#101828"
        fill_ref: Display lg/Semibold
        font_size: 48
        font: Inter Semi Bold
        line_height: 60px
        text_style: Display lg/Semibold
      - node_id: "4551:168697"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Price/INSTANCE:Hand-drawn arrow"
        name: Hand-drawn arrow
        type: INSTANCE
        instance_of: Arrow=09, Type=Smooth
        w: 69
        h: 57
        fill: "#FFFFFF"
      - node_id: "4551:168698"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Price/TEXT:Text"
        name: Text
        type: TEXT
        text: Most popular!
        w: 93
        h: 20
        fill: "#6941C6"
        fill_ref: Text sm/Medium
        font_size: 14
        font: Inter Medium
        line_height: 20px
        text_style: Text sm/Medium
      - node_id: "4551:168699"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 320
        h: 58
        padding: 0
        gap: 4
        direction: column
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "4551:168700"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and supporting text/TEXT:Heading"
        name: Heading
        type: TEXT
        text: Basic plan
        w: 320
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Semibold
        font_size: 20
        font: Inter Semi Bold
        line_height: 30px
        text_style: Text xl/Semibold
      - node_id: "4551:168701"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Billed annually.
        w: 320
        h: 24
        fill: "#667085"
        fill_ref: Text md/Regular
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "4551:168702"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Content"
        name: Content
        type: FRAME
        w: 384
        h: 256
        padding: 32
        gap: 24
        direction: column
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "4551:168703"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/FRAME:Check items"
        name: Check items
        type: FRAME
        w: 320
        h: 184
        padding: 0
        gap: 16
        direction: column
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "4551:168704"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Success, Breakpoint=Desktop
        children_text:
          [Access to all basic features]
        w: 320
        h: 24
        padding: 0
        gap: 12
        direction: row
        align: MIN / MIN
        sizing: FIXED / AUTO
      - node_id: "I4551:168704;1345:2752"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/Check item text/INSTANCE:Check icon"
        name: Check icon
        type: INSTANCE
        instance_of: Size=sm, Color=Success
        w: 24
        h: 24
        fill: "#12B76A"
        radius: 12
      - node_id: "I4551:168704;1345:2753"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/Check item text/FRAME:Text wrap"
        name: Text wrap
        type: FRAME
        w: 284
        h: 24
        padding: 0
        direction: column
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "I4551:168704;1345:2754"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/Check item text/Text wrap/TEXT:Text"
        name: Text
        type: TEXT
        text: Access to all basic features
        w: 284
        h: 24
        fill: "#667085"
        fill_ref: Text md/Regular
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "4551:168705"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[2]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Success, Breakpoint=Desktop
        children_text:
          [Basic reporting and analytics]
        w: 320
        h: 24
        padding: 0
        gap: 12
        direction: row
        align: MIN / MIN
        sizing: FIXED / AUTO
      - node_id: "4551:168706"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[3]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Success, Breakpoint=Desktop
        children_text:
          [Up to 10 individual users]
        w: 320
        h: 24
        padding: 0
        gap: 12
        direction: row
        align: MIN / MIN
        sizing: FIXED / AUTO
      - node_id: "4551:168707"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[4]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Success, Breakpoint=Desktop
        children_text:
          [20GB individual data each user]
        w: 320
        h: 24
        padding: 0
        gap: 12
        direction: row
        align: MIN / MIN
        sizing: FIXED / AUTO
      - node_id: "4551:168708"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[5]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Success, Breakpoint=Desktop
        children_text:
          [Basic chat and email support]
        w: 320
        h: 24
        padding: 0
        gap: 12
        direction: row
        align: MIN / MIN
        sizing: FIXED / AUTO
      - node_id: "4551:168714"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Footer"
        name: Footer
        type: FRAME
        w: 384
        h: 80
        padding: 0
        gap: 24
        direction: column
        align: MIN / MIN
        sizing: AUTO / FIXED
  - chunk_id: anatomy_2
    kind: anatomy
    item_count: 50
    path_range:
      - "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/FRAME:Actions"
      - "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button"
    node_ids:
      - "4551:168715"
      - "4551:168716"
      - "4551:168624"
      - "4551:168625"
      - "4551:168627"
      - "4551:168630"
      - "4551:168631"
      - "4551:168632"
      - "4551:168633"
      - "4551:168634"
      - "4551:168635"
      - "4551:168636"
      - "4551:168637"
      - "4551:168638"
      - "4551:168639"
      - "4551:168645"
      - "4551:168646"
      - "4551:168647"
      - "4551:168764"
      - "4551:168765"
      - "4551:168767"
      - "4551:168770"
      - "4551:168771"
      - "4551:168772"
      - "4551:168773"
      - "4551:168774"
      - "4551:168775"
      - "4551:168776"
      - "4551:168777"
      - "4551:168778"
      - "4551:168779"
      - "4551:168785"
      - "4551:168786"
      - "4551:168787"
      - "2842:296487"
      - "2842:296488"
      - "2842:296489"
      - "2842:296490"
      - "2842:296491"
      - "2842:296492"
      - "2842:296493"
      - "2842:296494"
      - "2842:296495"
      - "2842:296496"
      - "2842:296497"
      - "I2842:296497;1361:1685"
      - "I2842:296497;1361:1686"
      - "I2842:296497;1361:1687"
      - "I2842:296497;1361:1688"
      - "I2842:296497;1361:1693"
    items:
      - node_id: "4551:168715"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/FRAME:Actions"
        name: Actions
        type: FRAME
        w: 320
        h: 48
        padding: 0
        gap: 12
        direction: column
        align: MIN / MIN
        sizing: AUTO / FIXED
      - node_id: "4551:168716"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/Actions/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
        children_text:
          [Get started]
        w: 320
        h: 48
        fill: "#FFFFFF"
        radius: 8
        padding: 0
        direction: row
        align: MIN / MIN
        sizing: FIXED / AUTO
      - node_id: "4551:168624"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/FRAME:_Pricing tier card[2]"
        name: _Pricing tier card
        type: FRAME
        w: 384
        h: 510
        fill: "#FFFFFF"
        fill_ref: White
        radius: 16
        padding: 0
        stroke: "#EAECF0"
        stroke_ref: Gray/200
        stroke_align: inside
        stroke_sides: all
        shadow: "0px 4px 6px -2px #101828/3%"
      - node_id: "4551:168625"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Header[2]"
        name: Header
        type: FRAME
        w: 384
        h: 174
        padding: 40
        gap: 16
      - node_id: "4551:168627"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Price/TEXT:Price[2]"
        name: Price
        type: TEXT
        text: $20/mth
        w: 197
        h: 60
        fill: "#101828"
        fill_ref: Display lg/Semibold
        font_size: 48
        font: Inter Semi Bold
        line_height: 60px
        text_style: Display lg/Semibold
      - node_id: "4551:168630"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/FRAME:Heading and supporting text[2]"
        name: Heading and supporting text
        type: FRAME
        w: 320
        h: 58
        padding: 0
        gap: 4
      - node_id: "4551:168631"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and supporting text/TEXT:Heading[2]"
        name: Heading
        type: TEXT
        text: Business plan
        w: 320
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Semibold
        font_size: 20
        font: Inter Semi Bold
        line_height: 30px
        text_style: Text xl/Semibold
      - node_id: "4551:168632"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and supporting text/TEXT:Supporting text[2]"
        name: Supporting text
        type: TEXT
        text: Billed annually.
        w: 320
        h: 24
        fill: "#667085"
        fill_ref: Text md/Regular
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "4551:168633"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 384
        h: 256
        padding: 32
        gap: 24
      - node_id: "4551:168634"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/FRAME:Check items[2]"
        name: Check items
        type: FRAME
        w: 320
        h: 184
        padding: 0
        gap: 16
      - node_id: "4551:168635"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[6]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Success, Breakpoint=Desktop
        children_text:
          [200+ integrations]
        w: 320
        h: 24
        padding: 0
        gap: 12
      - node_id: "4551:168636"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[7]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Success, Breakpoint=Desktop
        children_text:
          [Advanced reporting and analytics]
        w: 320
        h: 24
        padding: 0
        gap: 12
      - node_id: "4551:168637"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[8]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Success, Breakpoint=Desktop
        children_text:
          [Up to 20 individual users]
        w: 320
        h: 24
        padding: 0
        gap: 12
      - node_id: "4551:168638"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[9]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Success, Breakpoint=Desktop
        children_text:
          [40GB individual data each user]
        w: 320
        h: 24
        padding: 0
        gap: 12
      - node_id: "4551:168639"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[10]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Success, Breakpoint=Desktop
        children_text:
          [Priority chat and email support]
        w: 320
        h: 24
        padding: 0
        gap: 12
      - node_id: "4551:168645"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Footer[2]"
        name: Footer
        type: FRAME
        w: 384
        h: 80
        padding: 0
        gap: 24
      - node_id: "4551:168646"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/FRAME:Actions[2]"
        name: Actions
        type: FRAME
        w: 320
        h: 48
        padding: 0
        gap: 12
      - node_id: "4551:168647"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/Actions/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
        children_text:
          [Get started]
        w: 320
        h: 48
        fill: "#FFFFFF"
        radius: 8
        padding: 0
      - node_id: "4551:168764"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/FRAME:_Pricing tier card[3]"
        name: _Pricing tier card
        type: FRAME
        w: 384
        h: 510
        fill: "#FFFFFF"
        fill_ref: White
        radius: 16
        padding: 0
        stroke: "#EAECF0"
        stroke_ref: Gray/200
        stroke_align: inside
        stroke_sides: all
        shadow: "0px 4px 6px -2px #101828/3%"
      - node_id: "4551:168765"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Header[3]"
        name: Header
        type: FRAME
        w: 384
        h: 174
        padding: 40
        gap: 16
      - node_id: "4551:168767"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Price/TEXT:Price[3]"
        name: Price
        type: TEXT
        text: $40/mth
        w: 199
        h: 60
        fill: "#101828"
        fill_ref: Display lg/Semibold
        font_size: 48
        font: Inter Semi Bold
        line_height: 60px
        text_style: Display lg/Semibold
      - node_id: "4551:168770"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/FRAME:Heading and supporting text[3]"
        name: Heading and supporting text
        type: FRAME
        w: 320
        h: 58
        padding: 0
        gap: 4
      - node_id: "4551:168771"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and supporting text/TEXT:Heading[3]"
        name: Heading
        type: TEXT
        text: Enterprise plan
        w: 320
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Semibold
        font_size: 20
        font: Inter Semi Bold
        line_height: 30px
        text_style: Text xl/Semibold
      - node_id: "4551:168772"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/Heading and supporting text/TEXT:Supporting text[3]"
        name: Supporting text
        type: TEXT
        text: Billed annually.
        w: 320
        h: 24
        fill: "#667085"
        fill_ref: Text md/Regular
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "4551:168773"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Content[3]"
        name: Content
        type: FRAME
        w: 384
        h: 256
        padding: 32
        gap: 24
      - node_id: "4551:168774"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/FRAME:Check items[3]"
        name: Check items
        type: FRAME
        w: 320
        h: 184
        padding: 0
        gap: 16
      - node_id: "4551:168775"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[11]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Success, Breakpoint=Desktop
        children_text:
          [Advanced custom fields]
        w: 320
        h: 24
        padding: 0
        gap: 12
      - node_id: "4551:168776"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[12]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Success, Breakpoint=Desktop
        children_text:
          [Audit log and data history]
        w: 320
        h: 24
        padding: 0
        gap: 12
      - node_id: "4551:168777"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[13]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Success, Breakpoint=Desktop
        children_text:
          [Unlimited individual users]
        w: 320
        h: 24
        padding: 0
        gap: 12
      - node_id: "4551:168778"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[14]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Success, Breakpoint=Desktop
        children_text:
          [Unlimited individual data]
        w: 320
        h: 24
        padding: 0
        gap: 12
      - node_id: "4551:168779"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[15]"
        name: Check item text
        type: INSTANCE
        instance_of: Size=sm, Color=Success, Breakpoint=Desktop
        children_text:
          [Personalised+priotity service]
        w: 320
        h: 24
        padding: 0
        gap: 12
      - node_id: "4551:168785"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/FRAME:Footer[3]"
        name: Footer
        type: FRAME
        w: 384
        h: 80
        padding: 0
        gap: 24
      - node_id: "4551:168786"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/FRAME:Actions[3]"
        name: Actions
        type: FRAME
        w: 320
        h: 48
        padding: 0
        gap: 12
      - node_id: "4551:168787"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/Actions/INSTANCE:Button[3]"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
        children_text:
          [Get started]
        w: 320
        h: 48
        fill: "#FFFFFF"
        radius: 8
        padding: 0
      - node_id: "2842:296487"
        path_key: "root/Desktop/FRAME:Features section"
        name: Features section
        type: FRAME
        w: 1440
        h: 924
        fill: "#F9FAFB"
        fill_ref: Gray/50
        padding: 96
        gap: 64
      - node_id: "2842:296488"
        path_key: "root/Desktop/Features section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 160
        padding: 0
        gap: 32
      - node_id: "2842:296489"
        path_key: "root/Desktop/Features section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 160
        padding: 0
        gap: 48
      - node_id: "2842:296490"
        path_key: "root/Desktop/Features section/Container/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 160
        padding: 0
        gap: 20
      - node_id: "2842:296491"
        path_key: "root/Desktop/Features section/Container/Content/Heading and supporting text/FRAME:Heading and subheading"
        name: Heading and subheading
        type: FRAME
        w: 768
        h: 80
        padding: 0
        gap: 12
      - node_id: "2842:296492"
        path_key: "root/Desktop/Features section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
        name: Subheading
        type: TEXT
        text: Features
        w: 768
        h: 24
        fill: "#6941C6"
        fill_ref: Text md/Semibold
        font_size: 16
        font: Inter Semi Bold
        line_height: 24px
        text_style: Text md/Semibold
      - node_id: "2842:296493"
        path_key: "root/Desktop/Features section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
        name: Heading
        type: TEXT
        text: Beautiful analytics to grow smarter
        w: 768
        h: 44
        fill: "#101828"
        fill_ref: Display md/Semibold
        font_size: 36
        font: Inter Semi Bold
        line_height: 44px
        text_style: Display md/Semibold
      - node_id: "2842:296494"
        path_key: "root/Desktop/Features section/Container/Content/Heading and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        w: 768
        h: 60
        fill: "#667085"
        fill_ref: Text xl/Regular
        font_size: 20
        font: Inter Regular
        line_height: 30px
        text_style: Text xl/Regular
      - node_id: "2842:296495"
        path_key: "root/Desktop/Features section/FRAME:Container[2]"
        name: Container
        type: FRAME
        w: 1280
        h: 508
        padding: 0
        gap: 64
      - node_id: "2842:296496"
        path_key: "root/Desktop/Features section/Container/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 1216
        h: 222
        padding: 0
        gap: 32
      - node_id: "2842:296497"
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
        padding: 0
        gap: 20
      - node_id: "I2842:296497;1361:1685"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 24
      - node_id: "I2842:296497;1361:1686"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 110
        padding: 0
        gap: 8
      - node_id: "I2842:296497;1361:1687"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text"
        name: Text
        type: TEXT
        text: Share team inboxes
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:296497;1361:1688"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
        w: 384
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I2842:296497;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 116
        h: 24
        fill: "#FFFFFF"
        padding: 0
  - chunk_id: anatomy_3
    kind: anatomy
    item_count: 50
    path_range:
      - "root/Desktop/Features section/Container/Content/_Feature text/Button/INSTANCE:_Button base"
      - "root/Desktop/FAQ section/Container/FRAME:Content[3]"
    node_ids:
      - "I2842:296497;1361:1693;1041:38683"
      - "I2842:296497;1361:1693;1041:38683;1054:7014"
      - "I2842:296497;1361:1693;1041:38683;1054:7015"
      - "2842:296498"
      - "I2842:296498;1361:1685"
      - "I2842:296498;1361:1686"
      - "I2842:296498;1361:1687"
      - "I2842:296498;1361:1688"
      - "I2842:296498;1361:1693"
      - "2842:296499"
      - "I2842:296499;1361:1685"
      - "I2842:296499;1361:1686"
      - "I2842:296499;1361:1687"
      - "I2842:296499;1361:1688"
      - "I2842:296499;1361:1693"
      - "2842:296500"
      - "2842:296501"
      - "I2842:296501;1361:1685"
      - "I2842:296501;1361:1686"
      - "I2842:296501;1361:1687"
      - "I2842:296501;1361:1688"
      - "I2842:296501;1361:1693"
      - "2842:296502"
      - "I2842:296502;1361:1685"
      - "I2842:296502;1361:1686"
      - "I2842:296502;1361:1687"
      - "I2842:296502;1361:1688"
      - "I2842:296502;1361:1693"
      - "2842:296503"
      - "I2842:296503;1361:1685"
      - "I2842:296503;1361:1686"
      - "I2842:296503;1361:1687"
      - "I2842:296503;1361:1688"
      - "I2842:296503;1361:1693"
      - "2842:296653"
      - "2842:296654"
      - "2842:296655"
      - "2842:296656"
      - "2842:296657"
      - "2842:296658"
      - "2842:296659"
      - "2842:296660"
      - "2842:296661"
      - "I2842:296661;1359:191525"
      - "I2842:296661;1359:191526"
      - "I2842:296661;1359:191527"
      - "I2842:296661;1359:191528"
      - "2842:296662"
      - "2842:296663"
      - "2842:296664"
    items:
      - node_id: "I2842:296497;1361:1693;1041:38683"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Button/INSTANCE:_Button base"
        name: _Button base
        type: INSTANCE
        instance_of: Size=lg, Icon=Trailing
        children_text:
          [Learn more]
        w: 116
        h: 24
        padding: 0
        gap: 8
      - node_id: "I2842:296497;1361:1693;1041:38683;1054:7014"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Button/_Button base/TEXT:Text"
        name: Text
        type: TEXT
        text: Learn more
        w: 88
        h: 24
        fill: "#6941C6"
        fill_ref: Text md/Semibold
        font_size: 16
        font: Inter Semi Bold
        line_height: 24px
        text_style: Text md/Semibold
      - node_id: "I2842:296497;1361:1693;1041:38683;1054:7015"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Button/_Button base/INSTANCE:arrow-right"
        name: arrow-right
        type: INSTANCE
        instance_of: arrow-right
        w: 20
        h: 20
        fill: "#6941C6"
      - node_id: "2842:296498"
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
        padding: 0
        gap: 20
      - node_id: "I2842:296498;1361:1685"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[2]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 24
      - node_id: "I2842:296498;1361:1686"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[2]"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 110
        padding: 0
        gap: 8
      - node_id: "I2842:296498;1361:1687"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[2]"
        name: Text
        type: TEXT
        text: Deliver instant answers
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:296498;1361:1688"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[2]"
        name: Supporting text
        type: TEXT
        text: An all-in-one customer service platform that helps you balance everything your customers need to be happy.
        w: 384
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I2842:296498;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 116
        h: 24
        fill: "#FFFFFF"
        padding: 0
      - node_id: "2842:296499"
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
        padding: 0
        gap: 20
      - node_id: "I2842:296499;1361:1685"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[3]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 24
      - node_id: "I2842:296499;1361:1686"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[3]"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 110
        padding: 0
        gap: 8
      - node_id: "I2842:296499;1361:1687"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[3]"
        name: Text
        type: TEXT
        text: Manage your team with reports
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:296499;1361:1688"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[3]"
        name: Supporting text
        type: TEXT
        text: Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
        w: 384
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I2842:296499;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[3]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 116
        h: 24
        fill: "#FFFFFF"
        padding: 0
      - node_id: "2842:296500"
        path_key: "root/Desktop/Features section/Container/FRAME:Content[3]"
        name: Content
        type: FRAME
        w: 1216
        h: 222
        padding: 0
        gap: 32
      - node_id: "2842:296501"
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
        padding: 0
        gap: 20
      - node_id: "I2842:296501;1361:1685"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[4]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 24
      - node_id: "I2842:296501;1361:1686"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[4]"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 110
        padding: 0
        gap: 8
      - node_id: "I2842:296501;1361:1687"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[4]"
        name: Text
        type: TEXT
        text: Connect with customers
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:296501;1361:1688"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[4]"
        name: Supporting text
        type: TEXT
        text: Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
        w: 384
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I2842:296501;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[4]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 116
        h: 24
        fill: "#FFFFFF"
        padding: 0
      - node_id: "2842:296502"
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
        padding: 0
        gap: 20
      - node_id: "I2842:296502;1361:1685"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[5]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 24
      - node_id: "I2842:296502;1361:1686"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[5]"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 110
        padding: 0
        gap: 8
      - node_id: "I2842:296502;1361:1687"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[5]"
        name: Text
        type: TEXT
        text: Connect the tools you already use
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:296502;1361:1688"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[5]"
        name: Supporting text
        type: TEXT
        text: Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
        w: 384
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I2842:296502;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[5]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 116
        h: 24
        fill: "#FFFFFF"
        padding: 0
      - node_id: "2842:296503"
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
        padding: 0
        gap: 20
      - node_id: "I2842:296503;1361:1685"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[6]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 24
      - node_id: "I2842:296503;1361:1686"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[6]"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 110
        padding: 0
        gap: 8
      - node_id: "I2842:296503;1361:1687"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[6]"
        name: Text
        type: TEXT
        text: Our people make the difference
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:296503;1361:1688"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[6]"
        name: Supporting text
        type: TEXT
        text: We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
        w: 384
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I2842:296503;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[6]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 116
        h: 24
        fill: "#FFFFFF"
        padding: 0
      - node_id: "2842:296653"
        path_key: "root/Desktop/FRAME:FAQ section"
        name: FAQ section
        type: FRAME
        w: 1440
        h: 902
        fill: "#FFFFFF"
        fill_ref: White
        padding: 96
        gap: 64
      - node_id: "2842:296654"
        path_key: "root/Desktop/FAQ section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 124
        padding: 0
        gap: 32
      - node_id: "2842:296655"
        path_key: "root/Desktop/FAQ section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 124
        padding: 0
        gap: 48
      - node_id: "2842:296656"
        path_key: "root/Desktop/FAQ section/Container/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 124
        padding: 0
        gap: 20
      - node_id: "2842:296657"
        path_key: "root/Desktop/FAQ section/Container/Content/Heading and supporting text/TEXT:Heading"
        name: Heading
        type: TEXT
        text: FAQs
        w: 768
        h: 44
        fill: "#101828"
        fill_ref: Display md/Semibold
        font_size: 36
        font: Inter Semi Bold
        line_height: 44px
        text_style: Display md/Semibold
      - node_id: "2842:296658"
        path_key: "root/Desktop/FAQ section/Container/Content/Heading and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.
        w: 768
        h: 60
        fill: "#667085"
        fill_ref: Gray/500
        font_size: 20
        font: Inter Regular
        line_height: 30px
      - node_id: "2842:296659"
        path_key: "root/Desktop/FAQ section/FRAME:Container[2]"
        name: Container
        type: FRAME
        w: 1280
        h: 328
        padding: 0
        gap: 64
      - node_id: "2842:296660"
        path_key: "root/Desktop/FAQ section/Container/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 1216
        h: 132
        padding: 0
        gap: 32
      - node_id: "2842:296661"
        path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_FAQ item"
        name: _FAQ item
        type: INSTANCE
        instance_of: Expanded=True, Divider=False, Icon=False, Breakpoint=Desktop
        children_text:
          - Is there a free trial available?
          - Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
        w: 384
        h: 132
        padding: 0
      - node_id: "I2842:296661;1359:191525"
        path_key: "root/Desktop/FAQ section/Container/Content/_FAQ item/FRAME:Content"
        name: Content
        type: FRAME
        w: 384
        h: 132
        padding: 0
        gap: 24
      - node_id: "I2842:296661;1359:191526"
        path_key: "root/Desktop/FAQ section/Container/Content/_FAQ item/Content/FRAME:Text and supporting text"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 132
        padding: 0
        gap: 8
      - node_id: "I2842:296661;1359:191527"
        path_key: "root/Desktop/FAQ section/Container/Content/_FAQ item/Content/Text and supporting text/TEXT:Text"
        name: Text
        type: TEXT
        text: Is there a free trial available?
        w: 384
        h: 28
        fill: "#101828"
        fill_ref: Text lg/Medium
        font_size: 18
        font: Inter Medium
        line_height: 28px
        text_style: Text lg/Medium
      - node_id: "I2842:296661;1359:191528"
        path_key: "root/Desktop/FAQ section/Container/Content/_FAQ item/Content/Text and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
        w: 384
        h: 96
        fill: "#667085"
        fill_ref: Text md/Regular
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "2842:296662"
        path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_FAQ item[2]"
        name: _FAQ item
        type: INSTANCE
        instance_of: Expanded=True, Divider=False, Icon=False, Breakpoint=Desktop
        children_text:
          - Can I change my plan later?
          - Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.
        w: 384
        h: 108
        padding: 0
      - node_id: "2842:296663"
        path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_FAQ item[3]"
        name: _FAQ item
        type: INSTANCE
        instance_of: Expanded=True, Divider=False, Icon=False, Breakpoint=Desktop
        children_text:
          - What is your cancellation policy?
          - We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.
        w: 384
        h: 108
        padding: 0
      - node_id: "2842:296664"
        path_key: "root/Desktop/FAQ section/Container/FRAME:Content[3]"
        name: Content
        type: FRAME
        w: 1216
        h: 132
        padding: 0
        gap: 32
  - chunk_id: anatomy_4
    kind: anatomy
    item_count: 50
    path_range:
      - "root/Desktop/FAQ section/Container/Content/INSTANCE:_FAQ item[4]"
      - "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[9]"
    node_ids:
      - "2842:296665"
      - "2842:296666"
      - "2842:296667"
      - "2842:296668"
      - "2842:296669"
      - "2842:296670"
      - "2842:296671"
      - "2842:296672"
      - "2842:296673"
      - "2842:296674"
      - "2842:296701"
      - "2842:296702"
      - "2842:296703"
      - "2842:296704"
      - "2842:296705"
      - "2842:296706"
      - "2842:296707"
      - "2842:296708"
      - "2842:296709"
      - "2842:296710"
      - "2842:296711"
      - "2842:296712"
      - "2842:296713"
      - "2842:296714"
      - "2842:296715"
      - "2842:296716"
      - "2842:296717"
      - "2842:296718"
      - "2842:296719"
      - "1623:261474"
      - "I1623:261474;1507:255697"
      - "I1623:261474;1510:278118"
      - "I1623:261474;1510:278119"
      - "I1623:261474;1510:278119;1510:266786"
      - "I1623:261474;1510:278119;1510:266835"
      - "I1623:261474;1510:278119;1510:266836"
      - "I1623:261474;1510:278119;1510:266836;1507:253519"
      - "I1623:261474;1510:278119;1510:266837"
      - "I1623:261474;1510:278119;1510:266838"
      - "I1623:261474;1510:278119;1510:266838;1507:253529"
      - "I1623:261474;1510:278119;1510:266838;1507:253530"
      - "I1623:261474;1510:278119;1510:266839"
      - "I1623:261474;1510:278119;1510:266840"
      - "I1623:261474;1510:278119;1510:266841"
      - "I1623:261474;1510:278120"
      - "I1623:261474;1510:278120;1510:266786"
      - "I1623:261474;1510:278120;1510:266835"
      - "I1623:261474;1510:278120;1510:266836"
      - "I1623:261474;1510:278120;1510:266837"
      - "I1623:261474;1510:278120;1510:266838"
    items:
      - node_id: "2842:296665"
        path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_FAQ item[4]"
        name: _FAQ item
        type: INSTANCE
        instance_of: Expanded=True, Divider=False, Icon=False, Breakpoint=Desktop
        children_text:
          - Can other info be added to an invoice?
          - Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
        w: 384
        h: 132
        padding: 0
      - node_id: "2842:296666"
        path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_FAQ item[5]"
        name: _FAQ item
        type: INSTANCE
        instance_of: Expanded=True, Divider=False, Icon=False, Breakpoint=Desktop
        children_text:
          - How does billing work?
          - Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.
        w: 384
        h: 110
        padding: 0
      - node_id: "2842:296667"
        path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_FAQ item[6]"
        name: _FAQ item
        type: INSTANCE
        instance_of: Expanded=True, Divider=False, Icon=False, Breakpoint=Desktop
        children_text:
          - How do I change my account email?
          - You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.
        w: 384
        h: 110
        padding: 0
      - node_id: "2842:296668"
        path_key: "root/Desktop/FAQ section/FRAME:Container[3]"
        name: Container
        type: FRAME
        w: 1280
        h: 130
        padding: 0
        gap: 32
      - node_id: "2842:296669"
        path_key: "root/Desktop/FAQ section/Container/FRAME:Content[4]"
        name: Content
        type: FRAME
        w: 1216
        h: 130
        fill: "#F9FAFB"
        fill_ref: Gray/50
        radius: 16
        padding: 32
        gap: 32
      - node_id: "2842:296670"
        path_key: "root/Desktop/FAQ section/Container/Content/FRAME:Heading and supporting text[2]"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 66
        padding: 0
        gap: 8
      - node_id: "2842:296671"
        path_key: "root/Desktop/FAQ section/Container/Content/Heading and supporting text/TEXT:Heading[2]"
        name: Heading
        type: TEXT
        text: Still have questions?
        w: 768
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "2842:296672"
        path_key: "root/Desktop/FAQ section/Container/Content/Heading and supporting text/TEXT:Supporting text[2]"
        name: Supporting text
        type: TEXT
        text: Can’t find the answer you’re looking for? Please chat to our friendly team.
        w: 768
        h: 28
        fill: "#667085"
        fill_ref: Text lg/Regular
        font_size: 18
        font: Inter Regular
        line_height: 28px
        text_style: Text lg/Regular
      - node_id: "2842:296673"
        path_key: "root/Desktop/FAQ section/Container/Content/FRAME:Actions"
        name: Actions
        type: FRAME
        w: 130
        h: 44
        padding: 0
        gap: 12
      - node_id: "2842:296674"
        path_key: "root/Desktop/FAQ section/Container/Content/Actions/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
        children_text:
          [Get in touch]
        w: 130
        h: 44
        fill: "#FFFFFF"
        radius: 8
        padding: 0
      - node_id: "2842:296701"
        path_key: "root/Desktop/FRAME:CTA section"
        name: CTA section
        type: FRAME
        w: 1440
        h: 406
        fill: "#53389E"
        fill_ref: Primary/800
        padding: 96
        gap: 64
      - node_id: "2842:296702"
        path_key: "root/Desktop/CTA section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 214
        padding: 0
        gap: 32
      - node_id: "2842:296703"
        path_key: "root/Desktop/CTA section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 214
        padding: 0
        gap: 32
      - node_id: "2842:296704"
        path_key: "root/Desktop/CTA section/Container/Content/FRAME:Content"
        name: Content
        type: FRAME
        w: 915
        h: 214
        padding: 0
        gap: 40
      - node_id: "2842:296705"
        path_key: "root/Desktop/CTA section/Container/Content/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 94
        padding: 0
        gap: 20
      - node_id: "2842:296706"
        path_key: "root/Desktop/CTA section/Container/Content/Content/Heading and supporting text/TEXT:Heading"
        name: Heading
        type: TEXT
        text: Start your 30-day free trial
        w: 768
        h: 44
        fill: "#FFFFFF"
        fill_ref: Display md/Semibold
        font_size: 36
        font: Inter Semi Bold
        line_height: 44px
        text_style: Display md/Semibold
      - node_id: "2842:296707"
        path_key: "root/Desktop/CTA section/Container/Content/Content/Heading and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Join over 4,000+ startups already growing with Untitled.
        w: 768
        h: 30
        fill: "#E9D7FE"
        fill_ref: Text xl/Regular
        font_size: 20
        font: Inter Regular
        line_height: 30px
        text_style: Text xl/Regular
      - node_id: "2842:296708"
        path_key: "root/Desktop/CTA section/Container/Content/Content/FRAME:Logos"
        name: Logos
        type: FRAME
        w: 421
        h: 80
        padding: 0
        gap: 16
      - node_id: "2842:296709"
        path_key: "root/Desktop/CTA section/Container/Content/Content/Logos/FRAME:Row"
        name: Row
        type: FRAME
        w: 421
        h: 32
        padding: 0
        gap: 32
      - node_id: "2842:296710"
        path_key: "root/Desktop/CTA section/Container/Content/Content/Logos/Row/INSTANCE:Company logo"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Layers, Logotype=True, Color=Primary, Theme=Dark
        w: 96
        h: 32
      - node_id: "2842:296711"
        path_key: "root/Desktop/CTA section/Container/Content/Content/Logos/Row/INSTANCE:Company logo[2]"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Sisyphus, Logotype=True, Color=Primary, Theme=Dark
        w: 112
        h: 32
      - node_id: "2842:296712"
        path_key: "root/Desktop/CTA section/Container/Content/Content/Logos/Row/INSTANCE:Company logo[3]"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Circooles, Logotype=True, Color=Primary, Theme=Dark
        w: 121
        h: 32
      - node_id: "2842:296713"
        path_key: "root/Desktop/CTA section/Container/Content/Content/Logos/FRAME:Row[2]"
        name: Row
        type: FRAME
        w: 421
        h: 32
        padding: 0
        gap: 32
      - node_id: "2842:296714"
        path_key: "root/Desktop/CTA section/Container/Content/Content/Logos/Row/INSTANCE:Company logo[4]"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Catalog, Logotype=True, Color=Primary, Theme=Dark
        w: 106
        h: 32
      - node_id: "2842:296715"
        path_key: "root/Desktop/CTA section/Container/Content/Content/Logos/Row/INSTANCE:Company logo[5]"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Quotient, Logotype=True, Color=Primary, Theme=Dark
        w: 124
        h: 32
      - node_id: "2842:296716"
        path_key: "root/Desktop/CTA section/Container/Content/Content/Logos/Row/INSTANCE:Company logo[6]"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Hourglass, Logotype=True, Color=Primary, Theme=Dark
        w: 128
        h: 32
      - node_id: "2842:296717"
        path_key: "root/Desktop/CTA section/Container/Content/FRAME:Actions"
        name: Actions
        type: FRAME
        w: 269
        h: 48
        padding: 0
        gap: 12
      - node_id: "2842:296718"
        path_key: "root/Desktop/CTA section/Container/Content/Actions/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Secondary gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 128
        h: 48
        fill: "#FFFFFF"
        radius: 8
        padding: 0
      - node_id: "2842:296719"
        path_key: "root/Desktop/CTA section/Container/Content/Actions/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
        children_text:
          [Get started]
        w: 129
        h: 48
        fill: "#FFFFFF"
        radius: 8
        padding: 0
      - node_id: "1623:261474"
        path_key: "root/Desktop/INSTANCE:Footer"
        name: Footer
        type: INSTANCE
        instance_of: Type=Large 01, Theme=Default, Breakpoint=Desktop
        children_text:
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
        h: 481
        fill: "#FFFFFF"
        fill_ref: White
        padding: 64
        gap: 64
      - node_id: "I1623:261474;1507:255697"
        path_key: "root/Desktop/Footer/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 240
        padding: 0
        gap: 48
      - node_id: "I1623:261474;1510:278118"
        path_key: "root/Desktop/Footer/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 240
        padding: 0
        gap: 32
      - node_id: "I1623:261474;1510:278119"
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
        padding: 0
        gap: 16
      - node_id: "I1623:261474;1510:278119;1510:266786"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/TEXT:Heading"
        name: Heading
        type: TEXT
        text: Product
        w: 176
        h: 20
        fill: "#98A2B3"
        fill_ref: Text sm/Semibold
        font_size: 14
        font: Inter Semi Bold
        line_height: 20px
        text_style: Text sm/Semibold
      - node_id: "I1623:261474;1510:278119;1510:266835"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/FRAME:Footer links"
        name: Footer links
        type: FRAME
        w: 176
        h: 204
        padding: 0
        gap: 12
      - node_id: "I1623:261474;1510:278119;1510:266836"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Overview]
        w: 74
        h: 24
        padding: 0
        gap: 8
      - node_id: "I1623:261474;1510:278119;1510:266836;1507:253519"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/_Footer link/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Overview]
        w: 74
        h: 24
        fill: "#FFFFFF"
        padding: 0
      - node_id: "I1623:261474;1510:278119;1510:266837"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[2]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Features]
        w: 68
        h: 24
        padding: 0
        gap: 8
      - node_id: "I1623:261474;1510:278119;1510:266838"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[3]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=True, Color=Gray, Theme=Light, State=Default
        children_text:
          [Solutions, New]
        w: 123
        h: 24
        padding: 0
        gap: 8
      - node_id: "I1623:261474;1510:278119;1510:266838;1507:253529"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/_Footer link/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Solutions]
        w: 73
        h: 24
        fill: "#FFFFFF"
        padding: 0
      - node_id: "I1623:261474;1510:278119;1510:266838;1507:253530"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/_Footer link/INSTANCE:Badge"
        name: Badge
        type: INSTANCE
        instance_of: Size=sm, Icon=False, Color=Success
        children_text:
          [New]
        w: 42
        h: 22
        fill: "#FFFFFF"
        padding: 0
      - node_id: "I1623:261474;1510:278119;1510:266839"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[4]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Tutorials]
        w: 68
        h: 24
        padding: 0
        gap: 8
      - node_id: "I1623:261474;1510:278119;1510:266840"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[5]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Pricing]
        w: 54
        h: 24
        padding: 0
        gap: 8
      - node_id: "I1623:261474;1510:278119;1510:266841"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[6]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Releases]
        w: 70
        h: 24
        padding: 0
        gap: 8
      - node_id: "I1623:261474;1510:278120"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[2]"
        name: _Footer links column
        type: INSTANCE
        instance_of: Color=Gray, Theme=Light
        children_text:
          [Company, About us, Careers, Press, News, Media kit, Contact]
        w: 176
        h: 240
        padding: 0
        gap: 16
      - node_id: "I1623:261474;1510:278120;1510:266786"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/TEXT:Heading[2]"
        name: Heading
        type: TEXT
        text: Company
        w: 176
        h: 20
        fill: "#98A2B3"
        fill_ref: Text sm/Semibold
        font_size: 14
        font: Inter Semi Bold
        line_height: 20px
        text_style: Text sm/Semibold
      - node_id: "I1623:261474;1510:278120;1510:266835"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/FRAME:Footer links[2]"
        name: Footer links
        type: FRAME
        w: 176
        h: 204
        padding: 0
        gap: 12
      - node_id: "I1623:261474;1510:278120;1510:266836"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[7]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [About us]
        w: 70
        h: 24
        padding: 0
        gap: 8
      - node_id: "I1623:261474;1510:278120;1510:266837"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[8]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Careers]
        w: 62
        h: 24
        padding: 0
        gap: 8
      - node_id: "I1623:261474;1510:278120;1510:266838"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[9]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Press]
        w: 44
        h: 24
        padding: 0
        gap: 8
  - chunk_id: anatomy_5
    kind: anatomy
    item_count: 23
    path_range:
      - "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[10]"
      - "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/Actions/INSTANCE:Button[2]"
    node_ids:
      - "I1623:261474;1510:278120;1510:266839"
      - "I1623:261474;1510:278120;1510:266840"
      - "I1623:261474;1510:278120;1510:266841"
      - "I1623:261474;1510:278121"
      - "I1623:261474;1510:278122"
      - "I1623:261474;1510:278123"
      - "I1623:261474;1510:278124"
      - "I1623:261474;1508:252803"
      - "I1623:261474;1508:252804"
      - "I1623:261474;1508:252805"
      - "I1623:261474;1508:252806"
      - "I1623:261474;1508:252807"
      - "I1623:261472;1288:30715;4276:168026"
      - "I1623:261472;1288:30715;1083:50705;1101:66343"
      - "I1623:261472;1288:30715;1083:50705;1081:89"
      - "I1623:261472;1288:30717;1042:35615"
      - "4551:168695"
      - "4551:168709"
      - "4551:168710"
      - "4551:168711"
      - "4551:168712"
      - "4551:168713"
      - "4551:168717"
    items:
      - node_id: "I1623:261474;1510:278120;1510:266839"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[10]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [News]
        w: 44
        h: 24
        padding: 0
        gap: 8
      - node_id: "I1623:261474;1510:278120;1510:266840"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[11]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Media kit]
        w: 71
        h: 24
        padding: 0
        gap: 8
      - node_id: "I1623:261474;1510:278120;1510:266841"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[12]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Contact]
        w: 62
        h: 24
        padding: 0
        gap: 8
      - node_id: "I1623:261474;1510:278121"
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
        padding: 0
        gap: 16
      - node_id: "I1623:261474;1510:278122"
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
        padding: 0
        gap: 16
      - node_id: "I1623:261474;1510:278123"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[5]"
        name: _Footer links column
        type: INSTANCE
        instance_of: Color=Gray, Theme=Light
        children_text:
          [Social, Twitter, LinkedIn, Facebook, GitHub, AngelList, Dribbble]
        w: 176
        h: 240
        padding: 0
        gap: 16
      - node_id: "I1623:261474;1510:278124"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:_Footer links column[6]"
        name: _Footer links column
        type: INSTANCE
        instance_of: Color=Gray, Theme=Light
        children_text:
          [Legal, Terms, Privacy, Cookies, Licenses, Settings, Contact]
        w: 176
        h: 240
        padding: 0
        gap: 16
      - node_id: "I1623:261474;1508:252803"
        path_key: "root/Desktop/Footer/FRAME:Container[2]"
        name: Container
        type: FRAME
        w: 1280
        h: 65
        padding: 0
        gap: 32
      - node_id: "I1623:261474;1508:252804"
        path_key: "root/Desktop/Footer/Container/RECTANGLE:Divider"
        name: Divider
        type: RECTANGLE
        w: 1216
        h: 1
        fill: "#EAECF0"
        fill_ref: Gray/200
      - node_id: "I1623:261474;1508:252805"
        path_key: "root/Desktop/Footer/Container/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 1216
        h: 32
        padding: 0
      - node_id: "I1623:261474;1508:252806"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:Logo"
        name: Logo
        type: INSTANCE
        instance_of: Dark mode=False
        w: 142
        h: 32
        padding: 0
      - node_id: "I1623:261474;1508:252807"
        path_key: "root/Desktop/Footer/Container/Content/TEXT:Footer text"
        name: Footer text
        type: TEXT
        text: © 2077 Untitled UI. All rights reserved.
        w: 293
        h: 24
        fill: "#98A2B3"
        fill_ref: Text md/Regular
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I1623:261472;1288:30715;4276:168026"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Logo/FRAME:Logo wrap"
        name: Logo wrap
        type: FRAME
        w: 142
        h: 32
        direction: row
        align: INFERRED / INFERRED
        sizing: FIXED / FIXED
        inferred: true
      - node_id: "I1623:261472;1288:30715;1083:50705;1101:66343"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Logo/Logo wrap/Logomark/FRAME:Content"
        name: Content
        type: FRAME
        w: 32
        h: 32
        direction: column
        align: INFERRED / INFERRED
        sizing: FIXED / FIXED
        clips: true
        inferred: true
      - node_id: "I1623:261472;1288:30715;1083:50705;1081:89"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Logo/Logo wrap/Logomark/Content/FRAME:Grid"
        name: Grid
        type: FRAME
        w: 32
        h: 32
        direction: column
        align: INFERRED / INFERRED
        sizing: FIXED / FIXED
        inferred: true
      - node_id: "I1623:261472;1288:30717;1042:35615"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/Button/INSTANCE:_Button base"
        name: _Button base
        type: INSTANCE
        w: 46
        h: 24
        direction: row
        align: CENTER / CENTER
        sizing: AUTO / AUTO
      - node_id: "4551:168695"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Header/FRAME:Price"
        name: Price
        type: FRAME
        w: 320
        h: 60
        direction: row
        align: INFERRED / INFERRED
        sizing: FIXED / FIXED
        inferred: true
      - node_id: "4551:168709"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[6]"
        name: Check item text
        type: INSTANCE
        w: 294
        h: 84
        direction: row
        align: MIN / MIN
        sizing: FIXED / AUTO
      - node_id: "4551:168710"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[7]"
        name: Check item text
        type: INSTANCE
        w: 294
        h: 84
        direction: row
        align: MIN / MIN
        sizing: FIXED / AUTO
      - node_id: "4551:168711"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[8]"
        name: Check item text
        type: INSTANCE
        w: 294
        h: 84
        direction: row
        align: MIN / MIN
        sizing: FIXED / AUTO
      - node_id: "4551:168712"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[9]"
        name: Check item text
        type: INSTANCE
        w: 294
        h: 84
        direction: row
        align: MIN / MIN
        sizing: FIXED / AUTO
      - node_id: "4551:168713"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[10]"
        name: Check item text
        type: INSTANCE
        w: 294
        h: 84
        direction: row
        align: MIN / MIN
        sizing: FIXED / AUTO
      - node_id: "4551:168717"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Footer/Actions/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        w: 294
        h: 48
        direction: row
        align: MIN / MIN
        sizing: FIXED / AUTO
  - chunk_id: repeats_1
    kind: repeats
    template_node_id: "I1623:261472;1288:30715"
    template_path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/INSTANCE:Logo"
    instance_of: Dark mode=False
    repeat_count: 1
    varying_keys:
      []
    items:
      - node_id: "I1623:261474;1508:252806"
        path_key: "root/Desktop/Footer/Container/Content/INSTANCE:Logo"
        diffs:
          {}
  - chunk_id: repeats_2
    kind: repeats
    template_node_id: "I1623:261472;1288:30717"
    template_path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:Button"
    instance_of: Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
    repeat_count: 11
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
      - node_id: "I1623:261472;1288:30720"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:Button[2]"
        diffs:
          Button/width: "54"
          Button/_Button base/width: "54"
          Button/_Button base/Text/text: Pricing
          Button/_Button base/Text/width: "54"
        children_text:
          [Pricing]
      - node_id: "I1623:261472;1624:307186;1624:262067"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/_Navigation actions/INSTANCE:Button"
        diffs:
          Button/width: "83"
          Button/Hierarchy: Tertiary gray
          Button/_Button base/width: "83"
          Button/_Button base/Text/text: Log in
          Button/_Button base/Text/width: "47"
        children_text:
          [Log in]
      - node_id: "I1623:261472;1624:307186;1624:262069"
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
      - node_id: "4551:168716"
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
      - node_id: "4551:168647"
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
      - node_id: "4551:168787"
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
      - node_id: "2842:296674"
        path_key: "root/Desktop/FAQ section/Container/Content/Actions/INSTANCE:Button"
        diffs:
          Button/width: "130"
          Button/Hierarchy: Primary
          Button/_Button base/width: "130"
          Button/_Button base/Text/text: Get in touch
          Button/_Button base/Text/fill: "#FFFFFF"
          Button/_Button base/Text/width: "94"
        children_text:
          [Get in touch]
      - node_id: "2842:296718"
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
      - node_id: "2842:296719"
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
      - node_id: "I1623:261474;1510:278119;1510:266836;1507:253519"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/_Footer link/INSTANCE:Button"
        diffs:
          Button/width: "74"
          Button/_Button base/width: "74"
          Button/_Button base/Text/text: Overview
          Button/_Button base/Text/width: "74"
        children_text:
          [Overview]
      - node_id: "I1623:261474;1510:278119;1510:266838;1507:253529"
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
    template_node_id: "I1623:261472;1288:30718"
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
      - node_id: "I1623:261472;1288:30719"
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
    template_node_id: "4551:168704"
    template_path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text"
    instance_of: Size=sm, Color=Success, Breakpoint=Desktop
    repeat_count: 14
    varying_keys:
      [Check item text/Text wrap/Text/text]
    items:
      - node_id: "4551:168705"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[2]"
        diffs:
          Check item text/Text wrap/Text/text: Basic reporting and analytics
        children_text:
          [Basic reporting and analytics]
      - node_id: "4551:168706"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[3]"
        diffs:
          Check item text/Text wrap/Text/text: Up to 10 individual users
        children_text:
          [Up to 10 individual users]
      - node_id: "4551:168707"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[4]"
        diffs:
          Check item text/Text wrap/Text/text: 20GB individual data each user
        children_text:
          [20GB individual data each user]
      - node_id: "4551:168708"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[5]"
        diffs:
          Check item text/Text wrap/Text/text: Basic chat and email support
        children_text:
          [Basic chat and email support]
      - node_id: "4551:168635"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[6]"
        diffs:
          Check item text/Text wrap/Text/text: 200+ integrations
        children_text:
          [200+ integrations]
      - node_id: "4551:168636"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[7]"
        diffs:
          Check item text/Text wrap/Text/text: Advanced reporting and analytics
        children_text:
          [Advanced reporting and analytics]
      - node_id: "4551:168637"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[8]"
        diffs:
          Check item text/Text wrap/Text/text: Up to 20 individual users
        children_text:
          [Up to 20 individual users]
      - node_id: "4551:168638"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[9]"
        diffs:
          Check item text/Text wrap/Text/text: 40GB individual data each user
        children_text:
          [40GB individual data each user]
      - node_id: "4551:168639"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[10]"
        diffs:
          Check item text/Text wrap/Text/text: Priority chat and email support
        children_text:
          [Priority chat and email support]
      - node_id: "4551:168775"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[11]"
        diffs:
          Check item text/Text wrap/Text/text: Advanced custom fields
        children_text:
          [Advanced custom fields]
      - node_id: "4551:168776"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[12]"
        diffs:
          Check item text/Text wrap/Text/text: Audit log and data history
        children_text:
          [Audit log and data history]
      - node_id: "4551:168777"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[13]"
        diffs:
          Check item text/Text wrap/Text/text: Unlimited individual users
        children_text:
          [Unlimited individual users]
      - node_id: "4551:168778"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[14]"
        diffs:
          Check item text/Text wrap/Text/text: Unlimited individual data
        children_text:
          [Unlimited individual data]
      - node_id: "4551:168779"
        path_key: "root/Desktop/Pricing page header/Section/Container/Content/_Pricing tier card/Content/Check items/INSTANCE:Check item text[15]"
        diffs:
          Check item text/Text wrap/Text/text: Personalised+priotity service
        children_text:
          [Personalised+priotity service]
  - chunk_id: repeats_5
    kind: repeats
    template_node_id: "I2842:296497;1361:1693"
    template_path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button"
    instance_of: Size=lg, Hierarchy=Link color, Icon=Trailing, Destructive=False, State=Default
    repeat_count: 5
    varying_keys:
      []
    items:
      - node_id: "I2842:296498;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[2]"
        diffs:
          {}
        children_text:
          [Learn more]
      - node_id: "I2842:296499;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[3]"
        diffs:
          {}
        children_text:
          [Learn more]
      - node_id: "I2842:296501;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[4]"
        diffs:
          {}
        children_text:
          [Learn more]
      - node_id: "I2842:296502;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[5]"
        diffs:
          {}
        children_text:
          [Learn more]
      - node_id: "I2842:296503;1361:1693"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Button[6]"
        diffs:
          {}
        children_text:
          [Learn more]
  - chunk_id: repeats_6
    kind: repeats
    template_node_id: "2842:296661"
    template_path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_FAQ item"
    instance_of: Expanded=True, Divider=False, Icon=False, Breakpoint=Desktop
    repeat_count: 5
    varying_keys:
      - _FAQ item/Content/Text and supporting text/Text/text
      - _FAQ item/Content/Text and supporting text/Supporting text/text
    items:
      - node_id: "2842:296662"
        path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_FAQ item[2]"
        diffs:
          _FAQ item/Content/Text and supporting text/Text/text: Can I change my plan later?
          _FAQ item/Content/Text and supporting text/Supporting text/text: Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.
        children_text:
          - Can I change my plan later?
          - Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.
      - node_id: "2842:296663"
        path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_FAQ item[3]"
        diffs:
          _FAQ item/Content/Text and supporting text/Text/text: What is your cancellation policy?
          _FAQ item/Content/Text and supporting text/Supporting text/text: We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.
        children_text:
          - What is your cancellation policy?
          - We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.
      - node_id: "2842:296665"
        path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_FAQ item[4]"
        diffs:
          _FAQ item/Content/Text and supporting text/Text/text: Can other info be added to an invoice?
        children_text:
          - Can other info be added to an invoice?
          - Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
      - node_id: "2842:296666"
        path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_FAQ item[5]"
        diffs:
          _FAQ item/Content/Text and supporting text/Text/text: How does billing work?
          _FAQ item/Content/Text and supporting text/Supporting text/text: Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.
        children_text:
          - How does billing work?
          - Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.
      - node_id: "2842:296667"
        path_key: "root/Desktop/FAQ section/Container/Content/INSTANCE:_FAQ item[6]"
        diffs:
          _FAQ item/Content/Text and supporting text/Text/text: How do I change my account email?
          _FAQ item/Content/Text and supporting text/Supporting text/text: You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.
        children_text:
          - How do I change my account email?
          - You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.
  - chunk_id: repeats_7
    kind: repeats
    template_node_id: "I1623:261474;1510:278119;1510:266836"
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
      - node_id: "I1623:261474;1510:278119;1510:266837"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[2]"
        diffs:
          _Footer link/width: "68"
          _Footer link/Button/width: "68"
          _Footer link/Button/_Button base/width: "68"
          _Footer link/Button/_Button base/Text/text: Features
          _Footer link/Button/_Button base/Text/width: "68"
        children_text:
          [Features]
      - node_id: "I1623:261474;1510:278119;1510:266839"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[4]"
        diffs:
          _Footer link/width: "68"
          _Footer link/Button/width: "68"
          _Footer link/Button/_Button base/width: "68"
          _Footer link/Button/_Button base/Text/text: Tutorials
          _Footer link/Button/_Button base/Text/width: "68"
        children_text:
          [Tutorials]
      - node_id: "I1623:261474;1510:278119;1510:266840"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[5]"
        diffs:
          _Footer link/width: "54"
          _Footer link/Button/width: "54"
          _Footer link/Button/_Button base/width: "54"
          _Footer link/Button/_Button base/Text/text: Pricing
          _Footer link/Button/_Button base/Text/width: "54"
        children_text:
          [Pricing]
      - node_id: "I1623:261474;1510:278119;1510:266841"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[6]"
        diffs:
          _Footer link/width: "70"
          _Footer link/Button/width: "70"
          _Footer link/Button/_Button base/width: "70"
          _Footer link/Button/_Button base/Text/text: Releases
          _Footer link/Button/_Button base/Text/width: "70"
        children_text:
          [Releases]
      - node_id: "I1623:261474;1510:278120;1510:266836"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[7]"
        diffs:
          _Footer link/width: "70"
          _Footer link/Button/width: "70"
          _Footer link/Button/_Button base/width: "70"
          _Footer link/Button/_Button base/Text/text: About us
          _Footer link/Button/_Button base/Text/width: "70"
        children_text:
          [About us]
      - node_id: "I1623:261474;1510:278120;1510:266837"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[8]"
        diffs:
          _Footer link/width: "62"
          _Footer link/Button/width: "62"
          _Footer link/Button/_Button base/width: "62"
          _Footer link/Button/_Button base/Text/text: Careers
          _Footer link/Button/_Button base/Text/width: "62"
        children_text:
          [Careers]
      - node_id: "I1623:261474;1510:278120;1510:266838"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[9]"
        diffs:
          _Footer link/width: "44"
          _Footer link/Button/width: "44"
          _Footer link/Button/_Button base/width: "44"
          _Footer link/Button/_Button base/Text/text: Press
          _Footer link/Button/_Button base/Text/width: "44"
        children_text:
          [Press]
      - node_id: "I1623:261474;1510:278120;1510:266839"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[10]"
        diffs:
          _Footer link/width: "44"
          _Footer link/Button/width: "44"
          _Footer link/Button/_Button base/width: "44"
          _Footer link/Button/_Button base/Text/text: News
          _Footer link/Button/_Button base/Text/width: "44"
        children_text:
          [News]
      - node_id: "I1623:261474;1510:278120;1510:266840"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[11]"
        diffs:
          _Footer link/width: "71"
          _Footer link/Button/width: "71"
          _Footer link/Button/_Button base/width: "71"
          _Footer link/Button/_Button base/Text/text: Media kit
          _Footer link/Button/_Button base/Text/width: "71"
        children_text:
          [Media kit]
      - node_id: "I1623:261474;1510:278120;1510:266841"
        path_key: "root/Desktop/Footer/Container/Content/_Footer links column/Footer links/INSTANCE:_Footer link[12]"
        diffs:
          _Footer link/width: "62"
          _Footer link/Button/width: "62"
          _Footer link/Button/_Button base/width: "62"
          _Footer link/Button/_Button base/Text/text: Contact
          _Footer link/Button/_Button base/Text/width: "62"
        children_text:
          [Contact]
  - chunk_id: repeats_8
    kind: repeats
    template_node_id: "I1623:261474;1510:278120"
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
      - node_id: "I1623:261474;1510:278121"
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
      - node_id: "I1623:261474;1510:278122"
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
      - node_id: "I1623:261474;1510:278123"
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
      - node_id: "I1623:261474;1510:278124"
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