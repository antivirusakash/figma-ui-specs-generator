## Figma Component: Desktop

### Figma URL
https://www.figma.com/design/4rL4UfUHaoz4AaeQIuEUOl/%E2%9D%96-Untitled-UI-%E2%80%93-FREE-Figma-UI-kit-and-design-system--Community-?node-id=1639-434862&t=ZJIw99N63UHkDQQf-11

### Implementation Instructions
1. Use get_screenshot on the Figma URL above and **save it to `.figma/desktop.png`** (relative to working directory). Reference this local file whenever you need to check the design — do not call get_screenshot again.
2. Read the anatomy tree below to understand the component structure.
3. Read the YAML specs — it has every layer, color, font, spacing, and token value you need.
4. Check the project's working directory or `package.json` for the icon library in use (e.g. Phosphor, Lucide, Heroicons). Use matching icons from that library based on the `instance_of` names in the anatomy (e.g. `instance_of: ForkKnife` → use ForkKnife from the detected library).
5. Check the project's `package.json` to detect the framework in use, then build the component accordingly.
6. Build the component exactly as specified. Match the structure, styles (fills, strokes, fonts), and layout (direction, gap, padding).
7. Use resolved_tokens to map token names to actual values (e.g. hex colors, font names).
8. Keep it minimal — only implement what the specs describe, nothing more.
9. **Visual QA** — render your component at 1440×6391px (1x scale, no device emulation). Take a screenshot and compare with `.figma/desktop.png`. Verify:
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
- Header section (FRAME)
- Container (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading and subheading (FRAME)
- Subheading (TEXT) — "About us"
- Heading (TEXT) — "About the company"
- Supporting text (TEXT) — "Learn more about the company and the te…"
- Metrics section (FRAME)
- Container (FRAME)
- Image (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading and subheading (FRAME)
- Subheading (TEXT) — "We’ve helped hundreds of companies"
- Heading (TEXT) — "We’re only just getting started on our …"
- Content (FRAME)
- Row (FRAME)
- _Metric item (INSTANCE) — instance of Action=False, Type=Left aligned text, Breakpoint=Desktop
- Number and text (FRAME)
- Number (TEXT) — "400+"
- Text (TEXT) — "Projects completed"
- _Metric item (INSTANCE) — instance of Action=False, Type=Left aligned text, Breakpoint=Desktop
- Row (FRAME)
- _Metric item (INSTANCE) — instance of Action=False, Type=Left aligned text, Breakpoint=Desktop
- _Metric item (INSTANCE) — instance of Action=False, Type=Left aligned text, Breakpoint=Desktop
- Social proof section (FRAME)
- Container (FRAME)
- Text (TEXT) — "From startups to the world’s largest co…"
- Logos (FRAME)
- Company logo (INSTANCE) — instance of Company=Layers, Logotype=True, Color=Gray, Theme=Light
- Company logo (INSTANCE) — instance of Company=Sisyphus, Logotype=True, Color=Gray, Theme=Light
- Company logo (INSTANCE) — instance of Company=Circooles, Logotype=True, Color=Gray, Theme=Light
- Company logo (INSTANCE) — instance of Company=Catalog, Logotype=True, Color=Gray, Theme=Light
- Company logo (INSTANCE) — instance of Company=Quotient, Logotype=True, Color=Gray, Theme=Light
- –––– Divider –––– (INSTANCE) — instance of Breakpoint=Desktop
- Container (FRAME)
- Divider (VECTOR)
- Team section (INSTANCE) — instance of Type=Simple 04, Theme=Default, Breakpoint=Desktop
- Container (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading and subheading (FRAME)
- Subheading (TEXT) — "We’re hiring!"
- Heading (TEXT) — "Meet our team"
- Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work. (TEXT) — "Our philosophy is simple — hire a team …"
- Actions (FRAME)
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Secondary gray, Icon=False, Destructive=False, State=Default
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
- Container (FRAME)
- Content (FRAME)
- Team member wrap (FRAME)
- _Team member (INSTANCE) — instance of Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
- Avatar (INSTANCE) — instance of Size=2xl, Placeholder=False, Text=False, Status icon=False, State=Default
- Text and social links (FRAME)
- Name and supporting text (FRAME)
- Name and role (FRAME)
- Name (TEXT) — "Olivia Rhye"
- Role (TEXT) — "Founder & CEO"
- Supporting text (TEXT) — "Former co-founder of Opendoor. Early st…"
- Social icons (FRAME)
- Social icon (INSTANCE) — instance of Platform=Twitter, Color=Gray, State=Default
- Social icon (INSTANCE) — instance of Platform=LinkedIn, Color=Gray, State=Default
- Social icon (INSTANCE) — instance of Platform=Dribbble, Color=Gray, State=Default
- Team member wrap (FRAME)
- _Team member (INSTANCE) — instance of Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
- Frame 1 (FRAME)
- Team member wrap (INSTANCE) — instance of Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
- Frame 1 (FRAME)
- Team member wrap (INSTANCE) — instance of Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
- Avatar (INSTANCE) — instance of Size=2xl, Placeholder=False, Text=False, Status icon=False, State=Default
- Text and social links (FRAME)
- Name and supporting text (FRAME)
- Name and role (FRAME)
- Name (TEXT) — "Demi Wilkinson"
- Role (TEXT) — "Frontend Developer"
- Former frontend dev for Linear, Coinbase, and Postscript. (TEXT) — "Former frontend dev for Linear, Coinbas…"
- Social icons (FRAME)
- Social icon (INSTANCE) — instance of Platform=Twitter, Color=Gray, State=Default
- Social icon (INSTANCE) — instance of Platform=LinkedIn, Color=Gray, State=Default
- Social icon (INSTANCE) — instance of Platform=Dribbble, Color=Gray, State=Default
- Content (FRAME)
- Team member wrap (FRAME)
- _Team member (INSTANCE) — instance of Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
- Team member wrap (FRAME)
- _Team member (INSTANCE) — instance of Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
- Team member wrap (FRAME)
- _Team member (INSTANCE) — instance of Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
- Team member wrap (FRAME)
- _Team member (INSTANCE) — instance of Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
- Features section (FRAME)
- Container (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading and subheading (FRAME)
- Subheading (TEXT) — "Our values"
- Heading (TEXT) — "How we work at Untitled"
- Supporting text (TEXT) — "Our shared values keep us connected and…"
- Container (FRAME)
- Content (FRAME)
- _Feature text (INSTANCE) — instance of Type=Featured icon top centered, Action=False, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle
- Text and supporting text (FRAME)
- Text (TEXT) — "Care about our team"
- Supporting text (TEXT) — "Understand what matters to our employee…"
- _Feature text (INSTANCE) — instance of Type=Featured icon top centered, Action=False, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle
- Text and supporting text (FRAME)
- Text (TEXT) — "Be excellent to each other"
- Supporting text (TEXT) — "No games. No bullshit. We rely on our p…"
- _Feature text (INSTANCE) — instance of Type=Featured icon top centered, Action=False, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle
- Text and supporting text (FRAME)
- Text (TEXT) — "Pride in what we do"
- Supporting text (TEXT) — "Value quality and integrity in everythi…"
- Content (FRAME)
- _Feature text (INSTANCE) — instance of Type=Featured icon top centered, Action=False, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle
- Text and supporting text (FRAME)
- Text (TEXT) — "Don't #!&$ the customer"
- Supporting text (TEXT) — "Understand customers' stated and unstat…"
- _Feature text (INSTANCE) — instance of Type=Featured icon top centered, Action=False, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle
- Text and supporting text (FRAME)
- Text (TEXT) — "Do the impossible"
- Supporting text (TEXT) — "Be energized by difficult problems. Rev…"
- _Feature text (INSTANCE) — instance of Type=Featured icon top centered, Action=False, Breakpoint=Desktop
- Featured icon (INSTANCE) — instance of Size=lg, Color=Primary, Theme=Light circle
- Text and supporting text (FRAME)
- Text (TEXT) — "Sweat the small stuff"
- Supporting text (TEXT) — "We believe the best products come from …"
- Careers section (FRAME)
- Container (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading and badge (FRAME)
- Badge (INSTANCE) — instance of Size=lg, Icon=False, Color=Primary
- _Badge base (INSTANCE) — instance of Icon=False
- Text (TEXT) — "Open positions"
- Heading (TEXT) — "We’re looking for talented people"
- Supporting text (TEXT) — "We’re a 100% remote team spread all acr…"
- Container (FRAME)
- Content (FRAME)
- Image (FRAME)
- Container (FRAME)
- Content (FRAME)
- Text (TEXT) — "Design"
- Items (FRAME)
- _Job post (INSTANCE) — instance of Details=True, Badge/subheading=False, Type=Card badge group, Breakpoint=Desktop
- Content (FRAME)
- Text and supporting text (FRAME)
- Text (TEXT) — "Product Designer"
- Supporting text (TEXT) — "We’re looking for a mid-level product d…"
- Details (FRAME)
- Type of work wrap (FRAME)
- clock (INSTANCE) — instance of clock
- Type of work (TEXT) — "Full-time"
- Salary wrap (FRAME)
- dollar-sign (INSTANCE) — instance of dollar-sign
- Salary (TEXT) — "80k - 100k"
- _Job post (INSTANCE) — instance of Details=True, Badge/subheading=False, Type=Card badge group, Breakpoint=Desktop
- Container (FRAME)
- Content (FRAME)
- Text (TEXT) — "Software Development"
- Items (FRAME)
- _Job post (INSTANCE) — instance of Details=True, Badge/subheading=False, Type=Card badge group, Breakpoint=Desktop
- _Job post (INSTANCE) — instance of Details=True, Badge/subheading=False, Type=Card badge group, Breakpoint=Desktop
- _Job post (INSTANCE) — instance of Details=True, Badge/subheading=False, Type=Card badge group, Breakpoint=Desktop
- Container (FRAME)
- Content (FRAME)
- Text (TEXT) — "Customer Success"
- Items (FRAME)
- _Job post (INSTANCE) — instance of Details=True, Badge/subheading=False, Type=Card badge group, Breakpoint=Desktop
- Footer (INSTANCE) — instance of Type=Large 10, Theme=Default, Breakpoint=Desktop
- Container (FRAME)
- Content (FRAME)
- Heading and supporting text (FRAME)
- Heading (TEXT) — "Start your 30-day free trial"
- Supporting text (TEXT) — "Join over 4,000+ startups already growi…"
- Actions (FRAME)
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Secondary gray, Icon=False, Destructive=False, State=Default
- Button (INSTANCE) — instance of Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
- Divider (RECTANGLE)
- Container (FRAME)
- Content (FRAME)
- Logo and supporting text (FRAME)
- Logo (INSTANCE) — instance of Dark mode=False
- Supporting text (TEXT) — "Design amazing digital experiences that…"
- Links (FRAME)
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
- Container (FRAME)
- Divider (RECTANGLE)
- Content (FRAME)
- Footer text (TEXT) — "© 2077 Untitled UI. All rights reserved."
- Social icons (FRAME)
- Social icon (INSTANCE) — instance of Platform=Twitter, Color=Gray, State=Default
- Social icon (INSTANCE) — instance of Platform=LinkedIn, Color=Gray, State=Default
- Social icon (INSTANCE) — instance of Platform=Facebook, Color=Gray, State=Default
- Social icon (INSTANCE) — instance of Platform=GitHub, Color=Gray, State=Default
- Social icon (INSTANCE) — instance of Platform=AngelList, Color=Gray, State=Default
- Social icon (INSTANCE) — instance of Platform=Dribbble, Color=Gray, State=Default
- Logo wrap (FRAME)
- Content (FRAME)
- Grid (FRAME)
- _Button base (INSTANCE)
- Logomark (FRAME)
- Logomark (FRAME)
- Logomark (FRAME)
- Logomark (FRAME)
- Logomark (FRAME)
```

### Specs Data (YAML)
```yaml
schema: specs-plugin.agent_pack.v11.yaml.compact
generated_at: "2026-02-09T16:30:21.838Z"
selection:
  node_id: "1639:434862"
  name: Desktop
  type: FRAME
  clips_content: true
summary:
  anatomy_nodes_total: 252
  property_groups_total: 0
  property_variants_total: 0
  variable_refs_total: 0
  instance_templates: 12
  deduplicated_instances: 49
  chunks_total: 18
  truncated:
    anatomy: false
    anatomy_included: 252
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
  Text xl/Regular: "#667085"
  Gray/50: "#F9FAFB"
  Display xl/Semibold: "#7F56D9"
  Text lg/Medium: "#101828"
  Text md/Medium: "#667085"
  Gray/200: "#EAECF0"
  Display md/Semibold: "#101828"
  Avatar user square/Olivia Rhye (color background): "#C7B9DA"
  Text lg/Semibold: "#101828"
  Text md/Regular: "#98A2B3"
  Avatar user square/Demi Wilkinson (color background): "#BEA887"
  Text xl/Medium: "#101828"
  Primary/50: "#F9F5FF"
  Text sm/Medium: "#6941C6"
  Display sm/Semibold: "#101828"
  Text sm/Semibold: "#98A2B3"
text_index:
  - id: "1639:434863"
    path: "root/Desktop/INSTANCE:Dropdown header navigation"
    children_text:
      [Home, Products, Resources, Pricing, Log in, Sign up]
  - id: "I1639:434863;1288:30717"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:Button"
    children_text:
      [Home]
  - id: "I1639:434863;1288:30718"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:_Dropdown header navigation trigger"
    children_text:
      [Products]
  - id: "I1639:434863;1288:30718;1288:478"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/INSTANCE:Button"
    children_text:
      [Products]
  - id: "I1639:434863;1288:30718;1288:478;1042:35579"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/INSTANCE:_Button base"
    children_text:
      [Products]
  - id: "I1639:434863;1288:30718;1288:478;1042:35579;1054:7014"
    path: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/_Button base/TEXT:Text"
    text: Products
  - id: "I1639:434863;1624:307186"
    path: "root/Desktop/Dropdown header navigation/Header/Container/INSTANCE:_Navigation actions"
    children_text:
      [Log in, Sign up]
  - id: "2842:298550"
    path: "root/Desktop/Header section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
    text: About us
  - id: "2842:298551"
    path: "root/Desktop/Header section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
    text: About the company
  - id: "2842:298552"
    path: "root/Desktop/Header section/Container/Content/Heading and supporting text/TEXT:Supporting text"
    text: Learn more about the company and the team behind it.
  - id: "2842:298587"
    path: "root/Desktop/Metrics section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
    text: We’ve helped hundreds of companies
  - id: "2842:298588"
    path: "root/Desktop/Metrics section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
    text: We’re only just getting started on our journey
  - id: "2842:298591"
    path: "root/Desktop/Metrics section/Container/Content/Content/Row/INSTANCE:_Metric item"
    children_text:
      [400+, Projects completed]
  - id: "I2842:298591;1369:546"
    path: "root/Desktop/Metrics section/Container/Content/Content/Row/_Metric item/Number and text/TEXT:Number"
    text: 400+
  - id: "I2842:298591;1369:548"
    path: "root/Desktop/Metrics section/Container/Content/Content/Row/_Metric item/Number and text/TEXT:Text"
    text: Projects completed
  - id: "2842:298661"
    path: "root/Desktop/Social proof section/Container/TEXT:Text"
    text: From startups to the world’s largest companies
  - id: "1639:458058"
    path: "root/Desktop/INSTANCE:Team section"
    children_text:
      - We’re hiring!
      - Meet our team
      - Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.
      - About us
      - Open positions
      - Olivia Rhye
      - Founder & CEO
      - Former co-founder of Opendoor. Early staff at Spotify and Clearbit.
      - Phoenix Baker
      - Engineering Manager
      - Lead engineering teams at Figma, Pitch, and Protocol Labs.
      - Lana Steiner
      - Product Manager
      - Former PM for Linear, Lambda School, and On Deck.
      - Demi Wilkinson
      - Frontend Developer
      - Former frontend dev for Linear, Coinbase, and Postscript.
      - Candice Wu
      - Backend Developer
      - Lead backend dev at Clearbit. Former Clearbit and Loom.
      - Natali Craig
      - Product Designer
      - Founding design team at Figma. Former Pleo, Stripe, and Tile.
      - Drew Cano
      - UX Researcher
      - Lead user research for Slack. Contractor for Netflix and Udacity.
      - Orlando Diggs
      - Customer Success
      - Lead CX at Wealthsimple. Former PagerDuty and Sqreen.
  - id: "I1639:458058;1486:786"
    path: "root/Desktop/Team section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
    text: We’re hiring!
  - id: "I1639:458058;1486:787"
    path: "root/Desktop/Team section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
    text: Meet our team
  - id: "I1639:458058;1486:788"
    path: "root/Desktop/Team section/Container/Content/Heading and supporting text/TEXT:Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work."
    text: Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.
  - id: "I1639:458058;1486:1050"
    path: "root/Desktop/Team section/Container/Content/Team member wrap/INSTANCE:_Team member"
    children_text:
      - Olivia Rhye
      - Founder & CEO
      - Former co-founder of Opendoor. Early staff at Spotify and Clearbit.
  - id: "I1639:458058;1486:1050;1458:240561"
    path: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/Text and social links/Name and supporting text/Name and role/TEXT:Name"
    text: Olivia Rhye
  - id: "I1639:458058;1486:1050;1458:240562"
    path: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/Text and social links/Name and supporting text/Name and role/TEXT:Role"
    text: Founder & CEO
  - id: "I1639:458058;1486:1050;1458:240563"
    path: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/Text and social links/Name and supporting text/TEXT:Supporting text"
    text: Former co-founder of Opendoor. Early staff at Spotify and Clearbit.
  - id: "I1639:458058;1486:1053"
    path: "root/Desktop/Team section/Container/Content/Frame 1/INSTANCE:Team member wrap[2]"
    children_text:
      - Demi Wilkinson
      - Frontend Developer
      - Former frontend dev for Linear, Coinbase, and Postscript.
  - id: "I1639:458058;1486:1053;1458:240561"
    path: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/Name and supporting text/Name and role/TEXT:Name"
    text: Demi Wilkinson
  - id: "I1639:458058;1486:1053;1458:240562"
    path: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/Name and supporting text/Name and role/TEXT:Role"
    text: Frontend Developer
  - id: "I1639:458058;1486:1053;1458:240563"
    path: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/Name and supporting text/TEXT:Former frontend dev for Linear, Coinbase, and Postscript."
    text: Former frontend dev for Linear, Coinbase, and Postscript.
  - id: "2842:298752"
    path: "root/Desktop/Features section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
    text: Our values
  - id: "2842:298753"
    path: "root/Desktop/Features section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
    text: How we work at Untitled
  - id: "2842:298754"
    path: "root/Desktop/Features section/Container/Content/Heading and supporting text/TEXT:Supporting text"
    text: Our shared values keep us connected and guide us as one team.
  - id: "2842:298757"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text"
    children_text:
      - Care about our team
      - Understand what matters to our employees. Give them what they need to do their best work.
  - id: "I2842:298757;1327:180874"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text"
    text: Care about our team
  - id: "I2842:298757;1327:180875"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text"
    text: Understand what matters to our employees. Give them what they need to do their best work.
  - id: "2842:298758"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[2]"
    children_text:
      - Be excellent to each other
      - No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.
  - id: "I2842:298758;1327:180874"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[2]"
    text: Be excellent to each other
  - id: "I2842:298758;1327:180875"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[2]"
    text: No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.
  - id: "2842:298759"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[3]"
    children_text:
      - Pride in what we do
      - Value quality and integrity in everything we do. At all times. No exceptions.
  - id: "I2842:298759;1327:180874"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[3]"
    text: Pride in what we do
  - id: "I2842:298759;1327:180875"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[3]"
    text: Value quality and integrity in everything we do. At all times. No exceptions.
  - id: "2842:298761"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[4]"
    children_text:
      - "Don't #!&$ the customer"
      - Understand customers' stated and unstated needs. Make them wildly successful.
  - id: "I2842:298761;1327:180874"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[4]"
    text: "Don't #!&$ the customer"
  - id: "I2842:298761;1327:180875"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[4]"
    text: Understand customers' stated and unstated needs. Make them wildly successful.
  - id: "2842:298762"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[5]"
    children_text:
      - Do the impossible
      - Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question, "Why not?"
  - id: "I2842:298762;1327:180874"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[5]"
    text: Do the impossible
  - id: "I2842:298762;1327:180875"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[5]"
    text: Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question, "Why not?"
  - id: "2842:298763"
    path: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[6]"
    children_text:
      - Sweat the small stuff
      - We believe the best products come from the best attention to detail. Sweat the small stuff.
  - id: "I2842:298763;1327:180874"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[6]"
    text: Sweat the small stuff
  - id: "I2842:298763;1327:180875"
    path: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[6]"
    text: We believe the best products come from the best attention to detail. Sweat the small stuff.
  - id: "2842:298913"
    path: "root/Desktop/Careers section/Container/Content/Heading and supporting text/Heading and badge/INSTANCE:Badge"
    children_text:
      [Open positions]
  - id: "I2842:298913;1046:3827"
    path: "root/Desktop/Careers section/Container/Content/Heading and supporting text/Heading and badge/Badge/INSTANCE:_Badge base"
    children_text:
      [Open positions]
  - id: "I2842:298913;1046:3827;1046:26"
    path: "root/Desktop/Careers section/Container/Content/Heading and supporting text/Heading and badge/Badge/_Badge base/TEXT:Text"
    text: Open positions
  - id: "2842:298914"
    path: "root/Desktop/Careers section/Container/Content/Heading and supporting text/Heading and badge/TEXT:Heading"
    text: We’re looking for talented people
  - id: "2842:298915"
    path: "root/Desktop/Careers section/Container/Content/Heading and supporting text/TEXT:Supporting text"
    text: We’re a 100% remote team spread all across the world. Join us!
  - id: "2842:298921"
    path: "root/Desktop/Careers section/Container/Content/TEXT:Text"
    text: Design
  - id: "2842:298923"
    path: "root/Desktop/Careers section/Container/Content/Items/INSTANCE:_Job post"
    children_text:
      - Product Designer
      - We’re looking for a mid-level product designer to join our team.
      - Full-time
      - 80k - 100k
  - id: "I2842:298923;1506:250229"
    path: "root/Desktop/Careers section/Container/Content/Items/_Job post/Content/Text and supporting text/TEXT:Text"
    text: Product Designer
  - id: "I2842:298923;1506:250231"
    path: "root/Desktop/Careers section/Container/Content/Items/_Job post/Content/Text and supporting text/TEXT:Supporting text"
    text: We’re looking for a mid-level product designer to join our team.
  - id: "I2842:298923;1506:250235"
    path: "root/Desktop/Careers section/Container/Content/Items/_Job post/Content/Details/Type of work wrap/TEXT:Type of work"
    text: Full-time
  - id: "I2842:298923;1506:250238"
    path: "root/Desktop/Careers section/Container/Content/Items/_Job post/Content/Details/Salary wrap/TEXT:Salary"
    text: 80k - 100k
  - id: "2842:298927"
    path: "root/Desktop/Careers section/Container/Content/TEXT:Text[2]"
    text: Software Development
  - id: "2842:298934"
    path: "root/Desktop/Careers section/Container/Content/TEXT:Text[3]"
    text: Customer Success
  - id: "4746:175420"
    path: "root/Desktop/INSTANCE:Footer"
    children_text:
      - Start your 30-day free trial
      - Join over 4,000+ startups already growing with Untitled.
      - Learn more
      - Get started
      - Design amazing digital experiences that create more happy in the world.
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
  - id: "I4746:175420;1509:257174"
    path: "root/Desktop/Footer/Container/Content/Heading and supporting text/TEXT:Heading"
    text: Start your 30-day free trial
  - id: "I4746:175420;1509:257175"
    path: "root/Desktop/Footer/Container/Content/Heading and supporting text/TEXT:Supporting text"
    text: Join over 4,000+ startups already growing with Untitled.
  - id: "I4746:175420;1509:256695"
    path: "root/Desktop/Footer/Container/Content/Logo and supporting text/TEXT:Supporting text"
    text: Design amazing digital experiences that create more happy in the world.
  - id: "I4746:175420;1510:291641"
    path: "root/Desktop/Footer/Container/Content/Links/INSTANCE:_Footer links column"
    children_text:
      - Product
      - Overview
      - Features
      - Solutions
      - New
      - Tutorials
      - Pricing
      - Releases
  - id: "I4746:175420;1510:291641;1510:266786"
    path: "root/Desktop/Footer/Container/Content/Links/_Footer links column/TEXT:Heading"
    text: Product
  - id: "I4746:175420;1510:291641;1510:266836"
    path: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link"
    children_text:
      [Overview]
  - id: "I4746:175420;1510:291641;1510:266838"
    path: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[3]"
    children_text:
      [Solutions, New]
  - id: "I4746:175420;1510:291642"
    path: "root/Desktop/Footer/Container/Content/Links/INSTANCE:_Footer links column[2]"
    children_text:
      [Company, About us, Careers, Press, News, Media kit, Contact]
  - id: "I4746:175420;1510:291642;1510:266786"
    path: "root/Desktop/Footer/Container/Content/Links/_Footer links column/TEXT:Heading[2]"
    text: Company
  - id: "I4746:175420;1509:256715"
    path: "root/Desktop/Footer/Container/Content/TEXT:Footer text"
    text: © 2077 Untitled UI. All rights reserved.
chunks:
  - chunk_id: anatomy_1
    kind: anatomy
    item_count: 50
    path_range:
      - "root/FRAME:Desktop"
      - "root/Desktop/Social proof section/Container/Logos/INSTANCE:Company logo"
    node_ids:
      - "1639:434862"
      - "1639:434863"
      - "I1639:434863;1288:30712"
      - "I1639:434863;1288:30713"
      - "I1639:434863;1288:30714"
      - "I1639:434863;1288:30715"
      - "I1639:434863;1288:30715;1083:50705"
      - "I1639:434863;1288:30716"
      - "I1639:434863;1288:30717"
      - "I1639:434863;1288:30718"
      - "I1639:434863;1288:30718;1288:478"
      - "I1639:434863;1288:30718;1288:478;1042:35579"
      - "I1639:434863;1288:30718;1288:478;1042:35579;1054:7014"
      - "I1639:434863;1288:30718;1288:478;1042:35579;1054:7015"
      - "I1639:434863;1288:30719"
      - "I1639:434863;1288:30720"
      - "I1639:434863;1624:307186"
      - "I1639:434863;1624:307186;1624:262067"
      - "I1639:434863;1624:307186;1624:262069"
      - "2842:298545"
      - "2842:298546"
      - "2842:298547"
      - "2842:298548"
      - "2842:298549"
      - "2842:298550"
      - "2842:298551"
      - "2842:298552"
      - "2842:298581"
      - "2842:298582"
      - "2842:298583"
      - "2842:298584"
      - "2842:298585"
      - "2842:298586"
      - "2842:298587"
      - "2842:298588"
      - "2842:298589"
      - "2842:298590"
      - "2842:298591"
      - "I2842:298591;1369:545"
      - "I2842:298591;1369:546"
      - "I2842:298591;1369:548"
      - "2842:298592"
      - "2842:298593"
      - "2842:298594"
      - "2842:298595"
      - "2842:298659"
      - "2842:298660"
      - "2842:298661"
      - "2842:298662"
      - "2842:298663"
    items:
      - node_id: "1639:434862"
        path_key: "root/FRAME:Desktop"
        name: Desktop
        type: FRAME
        w: 1440
        h: 6391
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
      - node_id: "1639:434863"
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
        fill_ref_type: color_style
        stroke: "#F2F4F7"
        stroke_ref: Gray/100
        stroke_align: inside
        stroke_sides: "bottom: 1px"
      - node_id: "I1639:434863;1288:30712"
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
      - node_id: "I1639:434863;1288:30713"
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
      - node_id: "I1639:434863;1288:30714"
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
      - node_id: "I1639:434863;1288:30715"
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
      - node_id: "I1639:434863;1288:30715;1083:50705"
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
      - node_id: "I1639:434863;1288:30716"
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
      - node_id: "I1639:434863;1288:30717"
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
      - node_id: "I1639:434863;1288:30718"
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
      - node_id: "I1639:434863;1288:30718;1288:478"
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
      - node_id: "I1639:434863;1288:30718;1288:478;1042:35579"
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
      - node_id: "I1639:434863;1288:30718;1288:478;1042:35579;1054:7014"
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
      - node_id: "I1639:434863;1288:30718;1288:478;1042:35579;1054:7015"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/_Dropdown header navigation trigger/Button/_Button base/INSTANCE:chevron-down"
        name: chevron-down
        type: INSTANCE
        instance_of: chevron-down
        w: 20
        h: 20
        fill: "#667085"
      - node_id: "I1639:434863;1288:30719"
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
      - node_id: "I1639:434863;1288:30720"
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
      - node_id: "I1639:434863;1624:307186"
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
      - node_id: "I1639:434863;1624:307186;1624:262067"
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
      - node_id: "I1639:434863;1624:307186;1624:262069"
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
      - node_id: "2842:298545"
        path_key: "root/Desktop/FRAME:Header section"
        name: Header section
        type: FRAME
        w: 1440
        h: 342
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        padding: "96"
        gap: 64
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298546"
        path_key: "root/Desktop/Header section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 150
        padding: "0"
        gap: 32
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298547"
        path_key: "root/Desktop/Header section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 150
        padding: "0"
        gap: 48
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298548"
        path_key: "root/Desktop/Header section/Container/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 960
        h: 150
        padding: "0"
        gap: 24
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298549"
        path_key: "root/Desktop/Header section/Container/Content/Heading and supporting text/FRAME:Heading and subheading"
        name: Heading and subheading
        type: FRAME
        w: 960
        h: 96
        padding: "0"
        gap: 12
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298550"
        path_key: "root/Desktop/Header section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
        name: Subheading
        type: TEXT
        text: About us
        w: 960
        h: 24
        fill: "#7F56D9"
        fill_ref: Text md/Semibold
        fill_ref_type: color_style
        font_size: 16
        font: Inter Semi Bold
        line_height: 24px
        text_style: Text md/Semibold
      - node_id: "2842:298551"
        path_key: "root/Desktop/Header section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
        name: Heading
        type: TEXT
        text: About the company
        w: 960
        h: 60
        fill: "#101828"
        fill_ref: Display lg/Semibold
        fill_ref_type: color_style
        font_size: 48
        font: Inter Semi Bold
        line_height: 60px
        text_style: Display lg/Semibold
      - node_id: "2842:298552"
        path_key: "root/Desktop/Header section/Container/Content/Heading and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Learn more about the company and the team behind it.
        w: 768
        h: 30
        fill: "#667085"
        fill_ref: Text xl/Regular
        fill_ref_type: color_style
        font_size: 20
        font: Inter Regular
        line_height: 30px
        text_style: Text xl/Regular
      - node_id: "2842:298581"
        path_key: "root/Desktop/FRAME:Metrics section"
        name: Metrics section
        type: FRAME
        w: 1440
        h: 752
        fill: "#F9FAFB"
        fill_ref: Gray/50
        fill_ref_type: color_style
        padding: "96"
        gap: 64
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2842:298582"
        path_key: "root/Desktop/Metrics section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 560
        padding: "0"
        gap: 96
        direction: row
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298583"
        path_key: "root/Desktop/Metrics section/Container/FRAME:Image"
        name: Image
        type: FRAME
        w: 560
        h: 560
        fill: image
        fill_type: IMAGE
        image_hash: 316b4cdf618efd0eb492fb14d243590a84e346b4
      - node_id: "2842:298584"
        path_key: "root/Desktop/Metrics section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 560
        h: 492
        padding: "0"
        gap: 64
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298585"
        path_key: "root/Desktop/Metrics section/Container/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 560
        h: 156
        padding: "0"
        gap: 20
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298586"
        path_key: "root/Desktop/Metrics section/Container/Content/Heading and supporting text/FRAME:Heading and subheading"
        name: Heading and subheading
        type: FRAME
        w: 560
        h: 156
        padding: "0"
        gap: 12
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298587"
        path_key: "root/Desktop/Metrics section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
        name: Subheading
        type: TEXT
        text: We’ve helped hundreds of companies
        w: 560
        h: 24
        fill: "#6941C6"
        fill_ref: Text md/Semibold
        fill_ref_type: color_style
        font_size: 16
        font: Inter Semi Bold
        line_height: 24px
        text_style: Text md/Semibold
      - node_id: "2842:298588"
        path_key: "root/Desktop/Metrics section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
        name: Heading
        type: TEXT
        text: We’re only just getting started on our journey
        w: 560
        h: 120
        fill: "#101828"
        fill_ref: Display lg/Semibold
        fill_ref_type: color_style
        font_size: 48
        font: Inter Semi Bold
        line_height: 60px
        text_style: Display lg/Semibold
      - node_id: "2842:298589"
        path_key: "root/Desktop/Metrics section/Container/Content/FRAME:Content"
        name: Content
        type: FRAME
        w: 560
        h: 272
        padding: "0"
        gap: 48
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298590"
        path_key: "root/Desktop/Metrics section/Container/Content/Content/FRAME:Row"
        name: Row
        type: FRAME
        w: 560
        h: 112
        padding: "0"
        gap: 32
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298591"
        path_key: "root/Desktop/Metrics section/Container/Content/Content/Row/INSTANCE:_Metric item"
        name: _Metric item
        type: INSTANCE
        instance_of: Action=False, Type=Left aligned text, Breakpoint=Desktop
        children_text:
          [400+, Projects completed]
        w: 264
        h: 112
        padding: "0"
        gap: 20
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:298591;1369:545"
        path_key: "root/Desktop/Metrics section/Container/Content/Content/Row/_Metric item/FRAME:Number and text"
        name: Number and text
        type: FRAME
        w: 264
        h: 112
        padding: "0"
        gap: 12
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2842:298591;1369:546"
        path_key: "root/Desktop/Metrics section/Container/Content/Content/Row/_Metric item/Number and text/TEXT:Number"
        name: Number
        type: TEXT
        text: 400+
        w: 264
        h: 72
        fill: "#7F56D9"
        fill_ref: Display xl/Semibold
        fill_ref_type: color_style
        font_size: 60
        font: Inter Semi Bold
        line_height: 72px
        text_style: Display xl/Semibold
      - node_id: "I2842:298591;1369:548"
        path_key: "root/Desktop/Metrics section/Container/Content/Content/Row/_Metric item/Number and text/TEXT:Text"
        name: Text
        type: TEXT
        text: Projects completed
        w: 264
        h: 28
        fill: "#101828"
        fill_ref: Text lg/Medium
        fill_ref_type: color_style
        font_size: 18
        font: Inter Medium
        line_height: 28px
        text_style: Text lg/Medium
      - node_id: "2842:298592"
        path_key: "root/Desktop/Metrics section/Container/Content/Content/Row/INSTANCE:_Metric item[2]"
        name: _Metric item
        type: INSTANCE
        instance_of: Action=False, Type=Left aligned text, Breakpoint=Desktop
        children_text:
          [600%, Return on investment]
        w: 264
        h: 112
        padding: "0"
        gap: 20
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298593"
        path_key: "root/Desktop/Metrics section/Container/Content/Content/FRAME:Row[2]"
        name: Row
        type: FRAME
        w: 560
        h: 112
        padding: "0"
        gap: 32
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298594"
        path_key: "root/Desktop/Metrics section/Container/Content/Content/Row/INSTANCE:_Metric item[3]"
        name: _Metric item
        type: INSTANCE
        instance_of: Action=False, Type=Left aligned text, Breakpoint=Desktop
        children_text:
          [10k, Global downloads]
        w: 264
        h: 112
        padding: "0"
        gap: 20
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298595"
        path_key: "root/Desktop/Metrics section/Container/Content/Content/Row/INSTANCE:_Metric item[4]"
        name: _Metric item
        type: INSTANCE
        instance_of: Action=False, Type=Left aligned text, Breakpoint=Desktop
        children_text:
          [200+, 5-star reviews]
        w: 264
        h: 112
        padding: "0"
        gap: 20
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298659"
        path_key: "root/Desktop/FRAME:Social proof section"
        name: Social proof section
        type: FRAME
        w: 1440
        h: 296
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        padding: "96"
        direction: row
        justify: center
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298660"
        path_key: "root/Desktop/Social proof section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 104
        padding: "0"
        gap: 32
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298661"
        path_key: "root/Desktop/Social proof section/Container/TEXT:Text"
        name: Text
        type: TEXT
        text: From startups to the world’s largest companies
        w: 1216
        h: 24
        fill: "#667085"
        fill_ref: Text md/Medium
        fill_ref_type: color_style
        font_size: 16
        font: Inter Medium
        line_height: 24px
        text_style: Text md/Medium
      - node_id: "2842:298662"
        path_key: "root/Desktop/Social proof section/Container/FRAME:Logos"
        name: Logos
        type: FRAME
        w: 1216
        h: 48
        padding: "0"
        gap: 32
        direction: row
        justify: space-between
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2842:298663"
        path_key: "root/Desktop/Social proof section/Container/Logos/INSTANCE:Company logo"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Layers, Logotype=True, Color=Gray, Theme=Light
        w: 146
        h: 48
  - chunk_id: anatomy_2
    kind: anatomy
    item_count: 50
    path_range:
      - "root/Desktop/Social proof section/Container/Logos/INSTANCE:Company logo[2]"
      - "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/Social icons/INSTANCE:Social icon[3]"
    node_ids:
      - "2842:298664"
      - "2842:298665"
      - "2842:298666"
      - "2842:298667"
      - "1639:489192"
      - "I1639:489192;1624:462458"
      - "I1639:489192;1624:462459"
      - "1639:458058"
      - "I1639:458058;1486:782"
      - "I1639:458058;1486:783"
      - "I1639:458058;1486:784"
      - "I1639:458058;1486:785"
      - "I1639:458058;1486:786"
      - "I1639:458058;1486:787"
      - "I1639:458058;1486:788"
      - "I1639:458058;1486:882"
      - "I1639:458058;1486:883"
      - "I1639:458058;1486:884"
      - "I1639:458058;1486:789"
      - "I1639:458058;1486:1049"
      - "I1639:458058;1486:1299"
      - "I1639:458058;1486:1050"
      - "I1639:458058;1486:1050;1458:240492"
      - "I1639:458058;1486:1050;1458:240558"
      - "I1639:458058;1486:1050;1458:240559"
      - "I1639:458058;1486:1050;1458:240560"
      - "I1639:458058;1486:1050;1458:240561"
      - "I1639:458058;1486:1050;1458:240562"
      - "I1639:458058;1486:1050;1458:240563"
      - "I1639:458058;1486:1050;1458:240564"
      - "I1639:458058;1486:1050;1458:240565"
      - "I1639:458058;1486:1050;1458:240566"
      - "I1639:458058;1486:1050;1458:240567"
      - "I1639:458058;1488:480"
      - "I1639:458058;1488:497"
      - "I1639:458058;1488:513"
      - "I1639:458058;1486:1052"
      - "I1639:458058;1488:514"
      - "I1639:458058;1486:1053"
      - "I1639:458058;1486:1053;1458:240492"
      - "I1639:458058;1486:1053;1458:240558"
      - "I1639:458058;1486:1053;1458:240559"
      - "I1639:458058;1486:1053;1458:240560"
      - "I1639:458058;1486:1053;1458:240561"
      - "I1639:458058;1486:1053;1458:240562"
      - "I1639:458058;1486:1053;1458:240563"
      - "I1639:458058;1486:1053;1458:240564"
      - "I1639:458058;1486:1053;1458:240565"
      - "I1639:458058;1486:1053;1458:240566"
      - "I1639:458058;1486:1053;1458:240567"
    items:
      - node_id: "2842:298664"
        path_key: "root/Desktop/Social proof section/Container/Logos/INSTANCE:Company logo[2]"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Sisyphus, Logotype=True, Color=Gray, Theme=Light
        w: 169
        h: 48
      - node_id: "2842:298665"
        path_key: "root/Desktop/Social proof section/Container/Logos/INSTANCE:Company logo[3]"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Circooles, Logotype=True, Color=Gray, Theme=Light
        w: 183
        h: 48
      - node_id: "2842:298666"
        path_key: "root/Desktop/Social proof section/Container/Logos/INSTANCE:Company logo[4]"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Catalog, Logotype=True, Color=Gray, Theme=Light
        w: 160
        h: 48
      - node_id: "2842:298667"
        path_key: "root/Desktop/Social proof section/Container/Logos/INSTANCE:Company logo[5]"
        name: Company logo
        type: INSTANCE
        instance_of: Company=Quotient, Logotype=True, Color=Gray, Theme=Light
        w: 187
        h: 48
      - node_id: "1639:489192"
        path_key: "root/Desktop/INSTANCE:–––– Divider ––––"
        name: –––– Divider ––––
        type: INSTANCE
        instance_of: Breakpoint=Desktop
        w: 1440
        h: 1
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        padding: "0"
        direction: row
        justify: center
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I1639:489192;1624:462458"
        path_key: "root/Desktop/–––– Divider ––––/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 1
        padding: "0"
        gap: 32
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I1639:489192;1624:462459"
        path_key: "root/Desktop/–––– Divider ––––/Container/VECTOR:Divider"
        name: Divider
        type: VECTOR
        w: 1216
        h: 1
        fill: "#EAECF0"
        fill_ref: Gray/200
        fill_ref_type: color_style
      - node_id: "1639:458058"
        path_key: "root/Desktop/INSTANCE:Team section"
        name: Team section
        type: INSTANCE
        instance_of: Type=Simple 04, Theme=Default, Breakpoint=Desktop
        children_text:
          - We’re hiring!
          - Meet our team
          - Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.
          - About us
          - Open positions
          - Olivia Rhye
          - Founder & CEO
          - Former co-founder of Opendoor. Early staff at Spotify and Clearbit.
          - Phoenix Baker
          - Engineering Manager
          - Lead engineering teams at Figma, Pitch, and Protocol Labs.
          - Lana Steiner
          - Product Manager
          - Former PM for Linear, Lambda School, and On Deck.
          - Demi Wilkinson
          - Frontend Developer
          - Former frontend dev for Linear, Coinbase, and Postscript.
          - Candice Wu
          - Backend Developer
          - Lead backend dev at Clearbit. Former Clearbit and Loom.
          - Natali Craig
          - Product Designer
          - Founding design team at Figma. Former Pleo, Stripe, and Tile.
          - Drew Cano
          - UX Researcher
          - Lead user research for Slack. Contractor for Netflix and Udacity.
          - Orlando Diggs
          - Customer Success
          - Lead CX at Wealthsimple. Former PagerDuty and Sqreen.
        w: 1440
        h: 1200
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        padding: "96"
        gap: 64
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "I1639:458058;1486:782"
        path_key: "root/Desktop/Team section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 248
        padding: "0"
        gap: 32
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I1639:458058;1486:783"
        path_key: "root/Desktop/Team section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 248
        padding: "0"
        gap: 40
      - node_id: "I1639:458058;1486:784"
        path_key: "root/Desktop/Team section/Container/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 160
        padding: "0"
        gap: 20
      - node_id: "I1639:458058;1486:785"
        path_key: "root/Desktop/Team section/Container/Content/Heading and supporting text/FRAME:Heading and subheading"
        name: Heading and subheading
        type: FRAME
        w: 768
        h: 80
        padding: "0"
        gap: 12
      - node_id: "I1639:458058;1486:786"
        path_key: "root/Desktop/Team section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
        name: Subheading
        type: TEXT
        text: We’re hiring!
        w: 768
        h: 24
        fill: "#6941C6"
        fill_ref: Text md/Semibold
        fill_ref_type: color_style
        font_size: 16
        font: Inter Semi Bold
        line_height: 24px
        text_style: Text md/Semibold
      - node_id: "I1639:458058;1486:787"
        path_key: "root/Desktop/Team section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
        name: Heading
        type: TEXT
        text: Meet our team
        w: 768
        h: 44
        fill: "#101828"
        fill_ref: Display md/Semibold
        fill_ref_type: color_style
        font_size: 36
        font: Inter Semi Bold
        line_height: 44px
        text_style: Display md/Semibold
      - node_id: "I1639:458058;1486:788"
        path_key: "root/Desktop/Team section/Container/Content/Heading and supporting text/TEXT:Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work."
        name: Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.
        type: TEXT
        text: Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.
        w: 768
        h: 60
        fill: "#667085"
        fill_ref: Text xl/Regular
        fill_ref_type: color_style
        font_size: 20
        font: Inter Regular
        line_height: 30px
        text_style: Text xl/Regular
      - node_id: "I1639:458058;1486:882"
        path_key: "root/Desktop/Team section/Container/Content/FRAME:Actions"
        name: Actions
        type: FRAME
        w: 279
        h: 48
        padding: "0"
        gap: 12
      - node_id: "I1639:458058;1486:883"
        path_key: "root/Desktop/Team section/Container/Content/Actions/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Secondary gray, Icon=False, Destructive=False, State=Default
        children_text:
          [About us]
        w: 110
        h: 48
        radius: 8
        padding: "0"
      - node_id: "I1639:458058;1486:884"
        path_key: "root/Desktop/Team section/Container/Content/Actions/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
        children_text:
          [Open positions]
        w: 157
        h: 48
        radius: 8
        padding: "0"
      - node_id: "I1639:458058;1486:789"
        path_key: "root/Desktop/Team section/FRAME:Container[2]"
        name: Container
        type: FRAME
        w: 1280
        h: 696
        padding: "0"
        gap: 64
      - node_id: "I1639:458058;1486:1049"
        path_key: "root/Desktop/Team section/Container/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 1216
        h: 316
        padding: "0"
        gap: 32
      - node_id: "I1639:458058;1486:1299"
        path_key: "root/Desktop/Team section/Container/Content/FRAME:Team member wrap"
        name: Team member wrap
        type: FRAME
        w: 280
        h: 316
        fill: "#F9FAFB"
        fill_ref: Gray/50
        fill_ref_type: color_style
        padding: "24"
      - node_id: "I1639:458058;1486:1050"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/INSTANCE:_Team member"
        name: _Team member
        type: INSTANCE
        instance_of: Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
        children_text:
          - Olivia Rhye
          - Founder & CEO
          - Former co-founder of Opendoor. Early staff at Spotify and Clearbit.
        w: 232
        h: 268
        padding: "0"
        gap: 20
      - node_id: "I1639:458058;1486:1050;1458:240492"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/INSTANCE:Avatar"
        name: Avatar
        type: INSTANCE
        instance_of: Size=2xl, Placeholder=False, Text=False, Status icon=False, State=Default
        w: 80
        h: 80
        fill: "#C7B9DA"
        fill_ref: Avatar user square/Olivia Rhye (color background)
        fill_ref_type: color_style
        radius: 40
        padding: "0"
      - node_id: "I1639:458058;1486:1050;1458:240558"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/FRAME:Text and social links"
        name: Text and social links
        type: FRAME
        w: 232
        h: 168
        padding: "0"
        gap: 16
      - node_id: "I1639:458058;1486:1050;1458:240559"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/Text and social links/FRAME:Name and supporting text"
        name: Name and supporting text
        type: FRAME
        w: 232
        h: 132
        padding: "0"
        gap: 8
      - node_id: "I1639:458058;1486:1050;1458:240560"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/Text and social links/Name and supporting text/FRAME:Name and role"
        name: Name and role
        type: FRAME
        w: 232
        h: 52
        padding: "0"
      - node_id: "I1639:458058;1486:1050;1458:240561"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/Text and social links/Name and supporting text/Name and role/TEXT:Name"
        name: Name
        type: TEXT
        text: Olivia Rhye
        w: 232
        h: 28
        fill: "#101828"
        fill_ref: Text lg/Semibold
        fill_ref_type: color_style
        font_size: 18
        font: Inter Semi Bold
        line_height: 28px
        text_style: Text lg/Semibold
      - node_id: "I1639:458058;1486:1050;1458:240562"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/Text and social links/Name and supporting text/Name and role/TEXT:Role"
        name: Role
        type: TEXT
        text: Founder & CEO
        w: 232
        h: 24
        fill: "#6941C6"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I1639:458058;1486:1050;1458:240563"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/Text and social links/Name and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Former co-founder of Opendoor. Early staff at Spotify and Clearbit.
        w: 232
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I1639:458058;1486:1050;1458:240564"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/Text and social links/FRAME:Social icons"
        name: Social icons
        type: FRAME
        w: 232
        h: 20
        padding: "0"
        gap: 16
      - node_id: "I1639:458058;1486:1050;1458:240565"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/Text and social links/Social icons/INSTANCE:Social icon"
        name: Social icon
        type: INSTANCE
        instance_of: Platform=Twitter, Color=Gray, State=Default
        w: 20
        h: 20
        fill: "#98A2B3"
      - node_id: "I1639:458058;1486:1050;1458:240566"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/Text and social links/Social icons/INSTANCE:Social icon[2]"
        name: Social icon
        type: INSTANCE
        instance_of: Platform=LinkedIn, Color=Gray, State=Default
        w: 20
        h: 20
        fill: "#98A2B3"
      - node_id: "I1639:458058;1486:1050;1458:240567"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/Text and social links/Social icons/INSTANCE:Social icon[3]"
        name: Social icon
        type: INSTANCE
        instance_of: Platform=Dribbble, Color=Gray, State=Default
        w: 20
        h: 20
        fill: "#98A2B3"
      - node_id: "I1639:458058;1488:480"
        path_key: "root/Desktop/Team section/Container/Content/FRAME:Team member wrap[2]"
        name: Team member wrap
        type: FRAME
        w: 280
        h: 316
        fill: "#F9FAFB"
        fill_ref: Gray/50
        fill_ref_type: color_style
        padding: "24"
      - node_id: "I1639:458058;1488:497"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/INSTANCE:_Team member[2]"
        name: _Team member
        type: INSTANCE
        instance_of: Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
        children_text:
          - Phoenix Baker
          - Engineering Manager
          - Lead engineering teams at Figma, Pitch, and Protocol Labs.
        w: 232
        h: 268
        padding: "0"
        gap: 20
      - node_id: "I1639:458058;1488:513"
        path_key: "root/Desktop/Team section/Container/Content/FRAME:Frame 1"
        name: Frame 1
        type: FRAME
        w: 280
        h: 316
        fill: "#F9FAFB"
        fill_ref: Gray/50
        fill_ref_type: color_style
        padding: "24"
      - node_id: "I1639:458058;1486:1052"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/INSTANCE:Team member wrap"
        name: Team member wrap
        type: INSTANCE
        instance_of: Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
        children_text:
          - Lana Steiner
          - Product Manager
          - Former PM for Linear, Lambda School, and On Deck.
        w: 232
        h: 244
        padding: "0"
        gap: 20
      - node_id: "I1639:458058;1488:514"
        path_key: "root/Desktop/Team section/Container/Content/FRAME:Frame 1[2]"
        name: Frame 1
        type: FRAME
        w: 280
        h: 316
        fill: "#F9FAFB"
        fill_ref: Gray/50
        fill_ref_type: color_style
        padding: "24"
      - node_id: "I1639:458058;1486:1053"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/INSTANCE:Team member wrap[2]"
        name: Team member wrap
        type: INSTANCE
        instance_of: Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
        children_text:
          - Demi Wilkinson
          - Frontend Developer
          - Former frontend dev for Linear, Coinbase, and Postscript.
        w: 232
        h: 268
        padding: "0"
        gap: 20
      - node_id: "I1639:458058;1486:1053;1458:240492"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/INSTANCE:Avatar"
        name: Avatar
        type: INSTANCE
        instance_of: Size=2xl, Placeholder=False, Text=False, Status icon=False, State=Default
        w: 80
        h: 80
        fill: "#BEA887"
        fill_ref: Avatar user square/Demi Wilkinson (color background)
        fill_ref_type: color_style
        radius: 40
        padding: "0"
      - node_id: "I1639:458058;1486:1053;1458:240558"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/FRAME:Text and social links"
        name: Text and social links
        type: FRAME
        w: 232
        h: 168
        padding: "0"
        gap: 16
      - node_id: "I1639:458058;1486:1053;1458:240559"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/FRAME:Name and supporting text"
        name: Name and supporting text
        type: FRAME
        w: 232
        h: 132
        padding: "0"
        gap: 8
      - node_id: "I1639:458058;1486:1053;1458:240560"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/Name and supporting text/FRAME:Name and role"
        name: Name and role
        type: FRAME
        w: 232
        h: 52
        padding: "0"
      - node_id: "I1639:458058;1486:1053;1458:240561"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/Name and supporting text/Name and role/TEXT:Name"
        name: Name
        type: TEXT
        text: Demi Wilkinson
        w: 232
        h: 28
        fill: "#101828"
        fill_ref: Text lg/Semibold
        fill_ref_type: color_style
        font_size: 18
        font: Inter Semi Bold
        line_height: 28px
        text_style: Text lg/Semibold
      - node_id: "I1639:458058;1486:1053;1458:240562"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/Name and supporting text/Name and role/TEXT:Role"
        name: Role
        type: TEXT
        text: Frontend Developer
        w: 232
        h: 24
        fill: "#6941C6"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I1639:458058;1486:1053;1458:240563"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/Name and supporting text/TEXT:Former frontend dev for Linear, Coinbase, and Postscript."
        name: Former frontend dev for Linear, Coinbase, and Postscript.
        type: TEXT
        text: Former frontend dev for Linear, Coinbase, and Postscript.
        w: 232
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I1639:458058;1486:1053;1458:240564"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/FRAME:Social icons"
        name: Social icons
        type: FRAME
        w: 232
        h: 20
        padding: "0"
        gap: 16
      - node_id: "I1639:458058;1486:1053;1458:240565"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/Social icons/INSTANCE:Social icon"
        name: Social icon
        type: INSTANCE
        instance_of: Platform=Twitter, Color=Gray, State=Default
        w: 20
        h: 20
        fill: "#98A2B3"
      - node_id: "I1639:458058;1486:1053;1458:240566"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/Social icons/INSTANCE:Social icon[2]"
        name: Social icon
        type: INSTANCE
        instance_of: Platform=LinkedIn, Color=Gray, State=Default
        w: 20
        h: 20
        fill: "#98A2B3"
      - node_id: "I1639:458058;1486:1053;1458:240567"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/Social icons/INSTANCE:Social icon[3]"
        name: Social icon
        type: INSTANCE
        instance_of: Platform=Dribbble, Color=Gray, State=Default
        w: 20
        h: 20
        fill: "#98A2B3"
  - chunk_id: anatomy_3
    kind: anatomy
    item_count: 50
    path_range:
      - "root/Desktop/Team section/Container/FRAME:Content[3]"
      - "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[6]"
    node_ids:
      - "I1639:458058;1486:1054"
      - "I1639:458058;1488:515"
      - "I1639:458058;1486:1055"
      - "I1639:458058;1488:516"
      - "I1639:458058;1486:1056"
      - "I1639:458058;1488:517"
      - "I1639:458058;1486:1057"
      - "I1639:458058;1488:518"
      - "I1639:458058;1486:1058"
      - "2842:298747"
      - "2842:298748"
      - "2842:298749"
      - "2842:298750"
      - "2842:298751"
      - "2842:298752"
      - "2842:298753"
      - "2842:298754"
      - "2842:298755"
      - "2842:298756"
      - "2842:298757"
      - "I2842:298757;1327:180872"
      - "I2842:298757;1327:180873"
      - "I2842:298757;1327:180874"
      - "I2842:298757;1327:180875"
      - "2842:298758"
      - "I2842:298758;1327:180872"
      - "I2842:298758;1327:180873"
      - "I2842:298758;1327:180874"
      - "I2842:298758;1327:180875"
      - "2842:298759"
      - "I2842:298759;1327:180872"
      - "I2842:298759;1327:180873"
      - "I2842:298759;1327:180874"
      - "I2842:298759;1327:180875"
      - "2842:298760"
      - "2842:298761"
      - "I2842:298761;1327:180872"
      - "I2842:298761;1327:180873"
      - "I2842:298761;1327:180874"
      - "I2842:298761;1327:180875"
      - "2842:298762"
      - "I2842:298762;1327:180872"
      - "I2842:298762;1327:180873"
      - "I2842:298762;1327:180874"
      - "I2842:298762;1327:180875"
      - "2842:298763"
      - "I2842:298763;1327:180872"
      - "I2842:298763;1327:180873"
      - "I2842:298763;1327:180874"
      - "I2842:298763;1327:180875"
    items:
      - node_id: "I1639:458058;1486:1054"
        path_key: "root/Desktop/Team section/Container/FRAME:Content[3]"
        name: Content
        type: FRAME
        w: 1216
        h: 316
        padding: "0"
        gap: 32
      - node_id: "I1639:458058;1488:515"
        path_key: "root/Desktop/Team section/Container/Content/FRAME:Team member wrap[3]"
        name: Team member wrap
        type: FRAME
        w: 280
        h: 316
        fill: "#F9FAFB"
        fill_ref: Gray/50
        fill_ref_type: color_style
        padding: "24"
      - node_id: "I1639:458058;1486:1055"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/INSTANCE:_Team member[3]"
        name: _Team member
        type: INSTANCE
        instance_of: Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
        children_text:
          - Candice Wu
          - Backend Developer
          - Lead backend dev at Clearbit. Former Clearbit and Loom.
        w: 232
        h: 244
        padding: "0"
        gap: 20
      - node_id: "I1639:458058;1488:516"
        path_key: "root/Desktop/Team section/Container/Content/FRAME:Team member wrap[4]"
        name: Team member wrap
        type: FRAME
        w: 280
        h: 316
        fill: "#F9FAFB"
        fill_ref: Gray/50
        fill_ref_type: color_style
        padding: "24"
      - node_id: "I1639:458058;1486:1056"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/INSTANCE:_Team member[4]"
        name: _Team member
        type: INSTANCE
        instance_of: Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
        children_text:
          - Natali Craig
          - Product Designer
          - Founding design team at Figma. Former Pleo, Stripe, and Tile.
        w: 232
        h: 268
        padding: "0"
        gap: 20
      - node_id: "I1639:458058;1488:517"
        path_key: "root/Desktop/Team section/Container/Content/FRAME:Team member wrap[5]"
        name: Team member wrap
        type: FRAME
        w: 280
        h: 316
        fill: "#F9FAFB"
        fill_ref: Gray/50
        fill_ref_type: color_style
        padding: "24"
      - node_id: "I1639:458058;1486:1057"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/INSTANCE:_Team member[5]"
        name: _Team member
        type: INSTANCE
        instance_of: Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
        children_text:
          - Drew Cano
          - UX Researcher
          - Lead user research for Slack. Contractor for Netflix and Udacity.
        w: 232
        h: 268
        padding: "0"
        gap: 20
      - node_id: "I1639:458058;1488:518"
        path_key: "root/Desktop/Team section/Container/Content/FRAME:Team member wrap[6]"
        name: Team member wrap
        type: FRAME
        w: 280
        h: 316
        fill: "#F9FAFB"
        fill_ref: Gray/50
        fill_ref_type: color_style
        padding: "24"
      - node_id: "I1639:458058;1486:1058"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/INSTANCE:_Team member[6]"
        name: _Team member
        type: INSTANCE
        instance_of: Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
        children_text:
          - Orlando Diggs
          - Customer Success
          - Lead CX at Wealthsimple. Former PagerDuty and Sqreen.
        w: 232
        h: 268
        padding: "0"
        gap: 20
      - node_id: "2842:298747"
        path_key: "root/Desktop/FRAME:Features section"
        name: Features section
        type: FRAME
        w: 1440
        h: 782
        fill: "#F9FAFB"
        fill_ref: Gray/50
        fill_ref_type: color_style
        padding: "96"
        gap: 64
      - node_id: "2842:298748"
        path_key: "root/Desktop/Features section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 130
        padding: "0"
        gap: 32
      - node_id: "2842:298749"
        path_key: "root/Desktop/Features section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 130
        padding: "0"
        gap: 48
      - node_id: "2842:298750"
        path_key: "root/Desktop/Features section/Container/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 130
        padding: "0"
        gap: 20
      - node_id: "2842:298751"
        path_key: "root/Desktop/Features section/Container/Content/Heading and supporting text/FRAME:Heading and subheading"
        name: Heading and subheading
        type: FRAME
        w: 768
        h: 80
        padding: "0"
        gap: 12
      - node_id: "2842:298752"
        path_key: "root/Desktop/Features section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Subheading"
        name: Subheading
        type: TEXT
        text: Our values
        w: 768
        h: 24
        fill: "#6941C6"
        fill_ref: Text md/Semibold
        fill_ref_type: color_style
        font_size: 16
        font: Inter Semi Bold
        line_height: 24px
        text_style: Text md/Semibold
      - node_id: "2842:298753"
        path_key: "root/Desktop/Features section/Container/Content/Heading and supporting text/Heading and subheading/TEXT:Heading"
        name: Heading
        type: TEXT
        text: How we work at Untitled
        w: 768
        h: 44
        fill: "#101828"
        fill_ref: Display md/Semibold
        fill_ref_type: color_style
        font_size: 36
        font: Inter Semi Bold
        line_height: 44px
        text_style: Display md/Semibold
      - node_id: "2842:298754"
        path_key: "root/Desktop/Features section/Container/Content/Heading and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Our shared values keep us connected and guide us as one team.
        w: 768
        h: 30
        fill: "#667085"
        fill_ref: Text xl/Regular
        fill_ref_type: color_style
        font_size: 20
        font: Inter Regular
        line_height: 30px
        text_style: Text xl/Regular
      - node_id: "2842:298755"
        path_key: "root/Desktop/Features section/FRAME:Container[2]"
        name: Container
        type: FRAME
        w: 1280
        h: 396
        padding: "0"
        gap: 64
      - node_id: "2842:298756"
        path_key: "root/Desktop/Features section/Container/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 1216
        h: 154
        padding: "0"
        gap: 32
      - node_id: "2842:298757"
        path_key: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon top centered, Action=False, Breakpoint=Desktop
        children_text:
          - Care about our team
          - Understand what matters to our employees. Give them what they need to do their best work.
        w: 384
        h: 154
        padding: "0"
        gap: 20
      - node_id: "I2842:298757;1327:180872"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 24
      - node_id: "I2842:298757;1327:180873"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 86
        padding: "0"
        gap: 8
      - node_id: "I2842:298757;1327:180874"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text"
        name: Text
        type: TEXT
        text: Care about our team
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:298757;1327:180875"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Understand what matters to our employees. Give them what they need to do their best work.
        w: 384
        h: 48
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "2842:298758"
        path_key: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[2]"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon top centered, Action=False, Breakpoint=Desktop
        children_text:
          - Be excellent to each other
          - No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.
        w: 384
        h: 154
        padding: "0"
        gap: 20
      - node_id: "I2842:298758;1327:180872"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[2]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 24
      - node_id: "I2842:298758;1327:180873"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[2]"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 86
        padding: "0"
        gap: 8
      - node_id: "I2842:298758;1327:180874"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[2]"
        name: Text
        type: TEXT
        text: Be excellent to each other
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:298758;1327:180875"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[2]"
        name: Supporting text
        type: TEXT
        text: No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.
        w: 384
        h: 48
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "2842:298759"
        path_key: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[3]"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon top centered, Action=False, Breakpoint=Desktop
        children_text:
          - Pride in what we do
          - Value quality and integrity in everything we do. At all times. No exceptions.
        w: 384
        h: 154
        padding: "0"
        gap: 20
      - node_id: "I2842:298759;1327:180872"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[3]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 24
      - node_id: "I2842:298759;1327:180873"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[3]"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 86
        padding: "0"
        gap: 8
      - node_id: "I2842:298759;1327:180874"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[3]"
        name: Text
        type: TEXT
        text: Pride in what we do
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:298759;1327:180875"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[3]"
        name: Supporting text
        type: TEXT
        text: Value quality and integrity in everything we do. At all times. No exceptions.
        w: 384
        h: 48
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "2842:298760"
        path_key: "root/Desktop/Features section/Container/FRAME:Content[3]"
        name: Content
        type: FRAME
        w: 1216
        h: 178
        padding: "0"
        gap: 32
      - node_id: "2842:298761"
        path_key: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[4]"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon top centered, Action=False, Breakpoint=Desktop
        children_text:
          - "Don't #!&$ the customer"
          - Understand customers' stated and unstated needs. Make them wildly successful.
        w: 384
        h: 154
        padding: "0"
        gap: 20
      - node_id: "I2842:298761;1327:180872"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[4]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 24
      - node_id: "I2842:298761;1327:180873"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[4]"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 86
        padding: "0"
        gap: 8
      - node_id: "I2842:298761;1327:180874"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[4]"
        name: Text
        type: TEXT
        text: "Don't #!&$ the customer"
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:298761;1327:180875"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[4]"
        name: Supporting text
        type: TEXT
        text: Understand customers' stated and unstated needs. Make them wildly successful.
        w: 384
        h: 48
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "2842:298762"
        path_key: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[5]"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon top centered, Action=False, Breakpoint=Desktop
        children_text:
          - Do the impossible
          - Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question, "Why not?"
        w: 384
        h: 178
        padding: "0"
        gap: 20
      - node_id: "I2842:298762;1327:180872"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[5]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 24
      - node_id: "I2842:298762;1327:180873"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[5]"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 110
        padding: "0"
        gap: 8
      - node_id: "I2842:298762;1327:180874"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[5]"
        name: Text
        type: TEXT
        text: Do the impossible
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:298762;1327:180875"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[5]"
        name: Supporting text
        type: TEXT
        text: Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question, "Why not?"
        w: 384
        h: 72
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "2842:298763"
        path_key: "root/Desktop/Features section/Container/Content/INSTANCE:_Feature text[6]"
        name: _Feature text
        type: INSTANCE
        instance_of: Type=Featured icon top centered, Action=False, Breakpoint=Desktop
        children_text:
          - Sweat the small stuff
          - We believe the best products come from the best attention to detail. Sweat the small stuff.
        w: 384
        h: 154
        padding: "0"
        gap: 20
      - node_id: "I2842:298763;1327:180872"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/INSTANCE:Featured icon[6]"
        name: Featured icon
        type: INSTANCE
        instance_of: Size=lg, Color=Primary, Theme=Light circle
        w: 48
        h: 48
        fill: "#7F56D9"
        radius: 24
      - node_id: "I2842:298763;1327:180873"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/FRAME:Text and supporting text[6]"
        name: Text and supporting text
        type: FRAME
        w: 384
        h: 86
        padding: "0"
        gap: 8
      - node_id: "I2842:298763;1327:180874"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Text[6]"
        name: Text
        type: TEXT
        text: Sweat the small stuff
        w: 384
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "I2842:298763;1327:180875"
        path_key: "root/Desktop/Features section/Container/Content/_Feature text/Text and supporting text/TEXT:Supporting text[6]"
        name: Supporting text
        type: TEXT
        text: We believe the best products come from the best attention to detail. Sweat the small stuff.
        w: 384
        h: 48
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
  - chunk_id: anatomy_4
    kind: anatomy
    item_count: 50
    path_range:
      - "root/Desktop/FRAME:Careers section"
      - "root/Desktop/Footer/Container/Content/Actions/INSTANCE:Button"
    node_ids:
      - "2842:298908"
      - "2842:298909"
      - "2842:298910"
      - "2842:298911"
      - "2842:298912"
      - "2842:298913"
      - "I2842:298913;1046:3827"
      - "I2842:298913;1046:3827;1046:26"
      - "2842:298914"
      - "2842:298915"
      - "2842:298916"
      - "2842:298917"
      - "2842:298918"
      - "2842:298919"
      - "2842:298920"
      - "2842:298921"
      - "2842:298922"
      - "2842:298923"
      - "I2842:298923;1506:250226"
      - "I2842:298923;1506:250227"
      - "I2842:298923;1506:250229"
      - "I2842:298923;1506:250231"
      - "I2842:298923;1506:250232"
      - "I2842:298923;1506:250233"
      - "I2842:298923;1506:250234"
      - "I2842:298923;1506:250235"
      - "I2842:298923;1506:250236"
      - "I2842:298923;1506:250237"
      - "I2842:298923;1506:250238"
      - "2842:298924"
      - "2842:298925"
      - "2842:298926"
      - "2842:298927"
      - "2842:298928"
      - "2842:298929"
      - "2842:298930"
      - "2842:298931"
      - "2842:298932"
      - "2842:298933"
      - "2842:298934"
      - "2842:298935"
      - "2842:298936"
      - "4746:175420"
      - "I4746:175420;1509:257153"
      - "I4746:175420;1509:257154"
      - "I4746:175420;1509:257173"
      - "I4746:175420;1509:257174"
      - "I4746:175420;1509:257175"
      - "I4746:175420;1509:257176"
      - "I4746:175420;1509:257177"
    items:
      - node_id: "2842:298908"
        path_key: "root/Desktop/FRAME:Careers section"
        name: Careers section
        type: FRAME
        w: 1440
        h: 2252
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        padding: "96"
        gap: 64
      - node_id: "2842:298909"
        path_key: "root/Desktop/Careers section/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 138
        padding: "0"
        gap: 32
      - node_id: "2842:298910"
        path_key: "root/Desktop/Careers section/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 138
        padding: "0"
        gap: 48
      - node_id: "2842:298911"
        path_key: "root/Desktop/Careers section/Container/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 768
        h: 138
        padding: "0"
        gap: 20
      - node_id: "2842:298912"
        path_key: "root/Desktop/Careers section/Container/Content/Heading and supporting text/FRAME:Heading and badge"
        name: Heading and badge
        type: FRAME
        w: 768
        h: 88
        padding: "0"
        gap: 16
      - node_id: "2842:298913"
        path_key: "root/Desktop/Careers section/Container/Content/Heading and supporting text/Heading and badge/INSTANCE:Badge"
        name: Badge
        type: INSTANCE
        instance_of: Size=lg, Icon=False, Color=Primary
        children_text:
          [Open positions]
        w: 125
        h: 28
        padding: "0"
      - node_id: "I2842:298913;1046:3827"
        path_key: "root/Desktop/Careers section/Container/Content/Heading and supporting text/Heading and badge/Badge/INSTANCE:_Badge base"
        name: _Badge base
        type: INSTANCE
        instance_of: Icon=False
        children_text:
          [Open positions]
        w: 125
        h: 28
        fill: "#F9F5FF"
        fill_ref: Primary/50
        fill_ref_type: color_style
        radius: 16
        padding: "4"
      - node_id: "I2842:298913;1046:3827;1046:26"
        path_key: "root/Desktop/Careers section/Container/Content/Heading and supporting text/Heading and badge/Badge/_Badge base/TEXT:Text"
        name: Text
        type: TEXT
        text: Open positions
        w: 101
        h: 20
        fill: "#6941C6"
        fill_ref: Text sm/Medium
        fill_ref_type: color_style
        font_size: 14
        font: Inter Medium
        line_height: 20px
        text_style: Text sm/Medium
      - node_id: "2842:298914"
        path_key: "root/Desktop/Careers section/Container/Content/Heading and supporting text/Heading and badge/TEXT:Heading"
        name: Heading
        type: TEXT
        text: We’re looking for talented people
        w: 768
        h: 44
        fill: "#101828"
        fill_ref: Display md/Semibold
        fill_ref_type: color_style
        font_size: 36
        font: Inter Semi Bold
        line_height: 44px
        text_style: Display md/Semibold
      - node_id: "2842:298915"
        path_key: "root/Desktop/Careers section/Container/Content/Heading and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: We’re a 100% remote team spread all across the world. Join us!
        w: 768
        h: 30
        fill: "#667085"
        fill_ref: Text xl/Regular
        fill_ref_type: color_style
        font_size: 20
        font: Inter Regular
        line_height: 30px
        text_style: Text xl/Regular
      - node_id: "2842:298916"
        path_key: "root/Desktop/Careers section/FRAME:Container[2]"
        name: Container
        type: FRAME
        w: 1280
        h: 400
        padding: "0"
        gap: 96
      - node_id: "2842:298917"
        path_key: "root/Desktop/Careers section/Container/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 1216
        h: 400
        padding: "0"
        gap: 64
      - node_id: "2842:298918"
        path_key: "root/Desktop/Careers section/Container/Content/FRAME:Image"
        name: Image
        type: FRAME
        w: 1216
        h: 400
        fill: image
        fill_type: IMAGE
        image_hash: ac72332da29bfeed57652b64347557e7a86f73f8
      - node_id: "2842:298919"
        path_key: "root/Desktop/Careers section/FRAME:Container[3]"
        name: Container
        type: FRAME
        w: 1280
        h: 422
        padding: "0"
        gap: 64
      - node_id: "2842:298920"
        path_key: "root/Desktop/Careers section/Container/FRAME:Content[3]"
        name: Content
        type: FRAME
        w: 768
        h: 422
        padding: "0"
        gap: 32
      - node_id: "2842:298921"
        path_key: "root/Desktop/Careers section/Container/Content/TEXT:Text"
        name: Text
        type: TEXT
        text: Design
        w: 768
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "2842:298922"
        path_key: "root/Desktop/Careers section/Container/Content/FRAME:Items"
        name: Items
        type: FRAME
        w: 768
        h: 360
        padding: "0"
        gap: 24
      - node_id: "2842:298923"
        path_key: "root/Desktop/Careers section/Container/Content/Items/INSTANCE:_Job post"
        name: _Job post
        type: INSTANCE
        instance_of: Details=True, Badge/subheading=False, Type=Card badge group, Breakpoint=Desktop
        children_text:
          - Product Designer
          - We’re looking for a mid-level product designer to join our team.
          - Full-time
          - 80k - 100k
        w: 768
        h: 168
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        radius: 16
        padding: "24"
        gap: 24
        stroke: "#EAECF0"
        stroke_ref: Gray/200
        stroke_align: inside
        stroke_sides: all
      - node_id: "I2842:298923;1506:250226"
        path_key: "root/Desktop/Careers section/Container/Content/Items/_Job post/FRAME:Content"
        name: Content
        type: FRAME
        w: 720
        h: 116
        padding: "0"
        gap: 32
      - node_id: "I2842:298923;1506:250227"
        path_key: "root/Desktop/Careers section/Container/Content/Items/_Job post/Content/FRAME:Text and supporting text"
        name: Text and supporting text
        type: FRAME
        w: 720
        h: 60
        padding: "0"
        gap: 8
      - node_id: "I2842:298923;1506:250229"
        path_key: "root/Desktop/Careers section/Container/Content/Items/_Job post/Content/Text and supporting text/TEXT:Text"
        name: Text
        type: TEXT
        text: Product Designer
        w: 720
        h: 28
        fill: "#101828"
        fill_ref: Text lg/Medium
        fill_ref_type: color_style
        font_size: 18
        font: Inter Medium
        line_height: 28px
        text_style: Text lg/Medium
      - node_id: "I2842:298923;1506:250231"
        path_key: "root/Desktop/Careers section/Container/Content/Items/_Job post/Content/Text and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: We’re looking for a mid-level product designer to join our team.
        w: 720
        h: 24
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I2842:298923;1506:250232"
        path_key: "root/Desktop/Careers section/Container/Content/Items/_Job post/Content/FRAME:Details"
        name: Details
        type: FRAME
        w: 720
        h: 24
        padding: "0"
        gap: 24
      - node_id: "I2842:298923;1506:250233"
        path_key: "root/Desktop/Careers section/Container/Content/Items/_Job post/Content/Details/FRAME:Type of work wrap"
        name: Type of work wrap
        type: FRAME
        w: 96
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I2842:298923;1506:250234"
        path_key: "root/Desktop/Careers section/Container/Content/Items/_Job post/Content/Details/Type of work wrap/INSTANCE:clock"
        name: clock
        type: INSTANCE
        instance_of: clock
        w: 20
        h: 20
        fill: "#98A2B3"
      - node_id: "I2842:298923;1506:250235"
        path_key: "root/Desktop/Careers section/Container/Content/Items/_Job post/Content/Details/Type of work wrap/TEXT:Type of work"
        name: Type of work
        type: TEXT
        text: Full-time
        w: 68
        h: 24
        fill: "#667085"
        fill_ref: Text md/Medium
        fill_ref_type: color_style
        font_size: 16
        font: Inter Medium
        line_height: 24px
        text_style: Text md/Medium
      - node_id: "I2842:298923;1506:250236"
        path_key: "root/Desktop/Careers section/Container/Content/Items/_Job post/Content/Details/FRAME:Salary wrap"
        name: Salary wrap
        type: FRAME
        w: 111
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I2842:298923;1506:250237"
        path_key: "root/Desktop/Careers section/Container/Content/Items/_Job post/Content/Details/Salary wrap/INSTANCE:dollar-sign"
        name: dollar-sign
        type: INSTANCE
        instance_of: dollar-sign
        w: 20
        h: 20
        fill: "#98A2B3"
      - node_id: "I2842:298923;1506:250238"
        path_key: "root/Desktop/Careers section/Container/Content/Items/_Job post/Content/Details/Salary wrap/TEXT:Salary"
        name: Salary
        type: TEXT
        text: 80k - 100k
        w: 83
        h: 24
        fill: "#667085"
        fill_ref: Text md/Medium
        fill_ref_type: color_style
        font_size: 16
        font: Inter Medium
        line_height: 24px
        text_style: Text md/Medium
      - node_id: "2842:298924"
        path_key: "root/Desktop/Careers section/Container/Content/Items/INSTANCE:_Job post[2]"
        name: _Job post
        type: INSTANCE
        instance_of: Details=True, Badge/subheading=False, Type=Card badge group, Breakpoint=Desktop
        children_text:
          - UX Designer
          - We’re looking for a mid-level UX designer to join our team.
          - Full-time
          - 80k - 100k
        w: 768
        h: 168
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        radius: 16
        padding: "24"
        gap: 24
        stroke: "#EAECF0"
        stroke_ref: Gray/200
        stroke_align: inside
        stroke_sides: all
      - node_id: "2842:298925"
        path_key: "root/Desktop/Careers section/FRAME:Container[4]"
        name: Container
        type: FRAME
        w: 1280
        h: 614
        padding: "0"
        gap: 64
      - node_id: "2842:298926"
        path_key: "root/Desktop/Careers section/Container/FRAME:Content[4]"
        name: Content
        type: FRAME
        w: 768
        h: 614
        padding: "0"
        gap: 32
      - node_id: "2842:298927"
        path_key: "root/Desktop/Careers section/Container/Content/TEXT:Text[2]"
        name: Text
        type: TEXT
        text: Software Development
        w: 768
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "2842:298928"
        path_key: "root/Desktop/Careers section/Container/Content/FRAME:Items[2]"
        name: Items
        type: FRAME
        w: 768
        h: 552
        padding: "0"
        gap: 24
      - node_id: "2842:298929"
        path_key: "root/Desktop/Careers section/Container/Content/Items/INSTANCE:_Job post[3]"
        name: _Job post
        type: INSTANCE
        instance_of: Details=True, Badge/subheading=False, Type=Card badge group, Breakpoint=Desktop
        children_text:
          - Engineering Manager
          - We’re looking for an experienced engineering manager to join our team.
          - Full-time
          - 80k - 100k
        w: 768
        h: 168
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        radius: 16
        padding: "24"
        gap: 24
        stroke: "#EAECF0"
        stroke_ref: Gray/200
        stroke_align: inside
        stroke_sides: all
      - node_id: "2842:298930"
        path_key: "root/Desktop/Careers section/Container/Content/Items/INSTANCE:_Job post[4]"
        name: _Job post
        type: INSTANCE
        instance_of: Details=True, Badge/subheading=False, Type=Card badge group, Breakpoint=Desktop
        children_text:
          - Frontend Developer
          - We’re looking for an experienced frontend developer to join our team.
          - Full-time
          - 80k - 100k
        w: 768
        h: 168
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        radius: 16
        padding: "24"
        gap: 24
        stroke: "#EAECF0"
        stroke_ref: Gray/200
        stroke_align: inside
        stroke_sides: all
      - node_id: "2842:298931"
        path_key: "root/Desktop/Careers section/Container/Content/Items/INSTANCE:_Job post[5]"
        name: _Job post
        type: INSTANCE
        instance_of: Details=True, Badge/subheading=False, Type=Card badge group, Breakpoint=Desktop
        children_text:
          - Backend Beveloper
          - We’re looking for an experienced backend developer to join our team.
          - Full-time
          - 80k - 100k
        w: 768
        h: 168
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        radius: 16
        padding: "24"
        gap: 24
        stroke: "#EAECF0"
        stroke_ref: Gray/200
        stroke_align: inside
        stroke_sides: all
      - node_id: "2842:298932"
        path_key: "root/Desktop/Careers section/FRAME:Container[5]"
        name: Container
        type: FRAME
        w: 1280
        h: 230
        padding: "0"
        gap: 64
      - node_id: "2842:298933"
        path_key: "root/Desktop/Careers section/Container/FRAME:Content[5]"
        name: Content
        type: FRAME
        w: 768
        h: 230
        padding: "0"
        gap: 32
      - node_id: "2842:298934"
        path_key: "root/Desktop/Careers section/Container/Content/TEXT:Text[3]"
        name: Text
        type: TEXT
        text: Customer Success
        w: 768
        h: 30
        fill: "#101828"
        fill_ref: Text xl/Medium
        fill_ref_type: color_style
        font_size: 20
        font: Inter Medium
        line_height: 30px
        text_style: Text xl/Medium
      - node_id: "2842:298935"
        path_key: "root/Desktop/Careers section/Container/Content/FRAME:Items[3]"
        name: Items
        type: FRAME
        w: 768
        h: 168
        padding: "0"
        gap: 24
      - node_id: "2842:298936"
        path_key: "root/Desktop/Careers section/Container/Content/Items/INSTANCE:_Job post[6]"
        name: _Job post
        type: INSTANCE
        instance_of: Details=True, Badge/subheading=False, Type=Card badge group, Breakpoint=Desktop
        children_text:
          - Customer Success Manager
          - We’re looking for a mid-level product designer to join our team.
          - Full-time
          - 80k - 100k
        w: 768
        h: 168
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        radius: 16
        padding: "24"
        gap: 24
        stroke: "#EAECF0"
        stroke_ref: Gray/200
        stroke_align: inside
        stroke_sides: all
      - node_id: "4746:175420"
        path_key: "root/Desktop/INSTANCE:Footer"
        name: Footer
        type: INSTANCE
        instance_of: Type=Large 10, Theme=Default, Breakpoint=Desktop
        children_text:
          - Start your 30-day free trial
          - Join over 4,000+ startups already growing with Untitled.
          - Learn more
          - Get started
          - Design amazing digital experiences that create more happy in the world.
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
        h: 686
        fill: "#FFFFFF"
        fill_ref: White
        fill_ref_type: color_style
        padding: "64"
        gap: 64
      - node_id: "I4746:175420;1509:257153"
        path_key: "root/Desktop/Footer/FRAME:Container"
        name: Container
        type: FRAME
        w: 1280
        h: 149
        padding: "0"
        gap: 64
      - node_id: "I4746:175420;1509:257154"
        path_key: "root/Desktop/Footer/Container/FRAME:Content"
        name: Content
        type: FRAME
        w: 1216
        h: 84
        padding: "0"
        gap: 32
      - node_id: "I4746:175420;1509:257173"
        path_key: "root/Desktop/Footer/Container/Content/FRAME:Heading and supporting text"
        name: Heading and supporting text
        type: FRAME
        w: 915
        h: 84
        padding: "0"
        gap: 16
      - node_id: "I4746:175420;1509:257174"
        path_key: "root/Desktop/Footer/Container/Content/Heading and supporting text/TEXT:Heading"
        name: Heading
        type: TEXT
        text: Start your 30-day free trial
        w: 915
        h: 38
        fill: "#101828"
        fill_ref: Display sm/Semibold
        fill_ref_type: color_style
        font_size: 30
        font: Inter Semi Bold
        line_height: 38px
        text_style: Display sm/Semibold
      - node_id: "I4746:175420;1509:257175"
        path_key: "root/Desktop/Footer/Container/Content/Heading and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Join over 4,000+ startups already growing with Untitled.
        w: 915
        h: 30
        fill: "#667085"
        fill_ref: Text xl/Regular
        fill_ref_type: color_style
        font_size: 20
        font: Inter Regular
        line_height: 30px
        text_style: Text xl/Regular
      - node_id: "I4746:175420;1509:257176"
        path_key: "root/Desktop/Footer/Container/Content/FRAME:Actions"
        name: Actions
        type: FRAME
        w: 269
        h: 48
        padding: "0"
        gap: 12
      - node_id: "I4746:175420;1509:257177"
        path_key: "root/Desktop/Footer/Container/Content/Actions/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Secondary gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Learn more]
        w: 128
        h: 48
        radius: 8
        padding: "0"
  - chunk_id: anatomy_5
    kind: anatomy
    item_count: 50
    path_range:
      - "root/Desktop/Footer/Container/Content/Actions/INSTANCE:Button[2]"
      - "root/Desktop/Social proof section/Container/Logos/Company logo/FRAME:Logomark[3]"
    node_ids:
      - "I4746:175420;1509:257178"
      - "I4746:175420;1509:257161"
      - "I4746:175420;1509:256691"
      - "I4746:175420;1509:256692"
      - "I4746:175420;1509:256693"
      - "I4746:175420;1509:256694"
      - "I4746:175420;1509:256695"
      - "I4746:175420;1510:291640"
      - "I4746:175420;1510:291641"
      - "I4746:175420;1510:291641;1510:266786"
      - "I4746:175420;1510:291641;1510:266835"
      - "I4746:175420;1510:291641;1510:266836"
      - "I4746:175420;1510:291641;1510:266836;1507:253519"
      - "I4746:175420;1510:291641;1510:266837"
      - "I4746:175420;1510:291641;1510:266838"
      - "I4746:175420;1510:291641;1510:266838;1507:253529"
      - "I4746:175420;1510:291641;1510:266838;1507:253530"
      - "I4746:175420;1510:291641;1510:266839"
      - "I4746:175420;1510:291641;1510:266840"
      - "I4746:175420;1510:291641;1510:266841"
      - "I4746:175420;1510:291642"
      - "I4746:175420;1510:291642;1510:266786"
      - "I4746:175420;1510:291642;1510:266835"
      - "I4746:175420;1510:291642;1510:266836"
      - "I4746:175420;1510:291642;1510:266837"
      - "I4746:175420;1510:291642;1510:266838"
      - "I4746:175420;1510:291642;1510:266839"
      - "I4746:175420;1510:291642;1510:266840"
      - "I4746:175420;1510:291642;1510:266841"
      - "I4746:175420;1510:291643"
      - "I4746:175420;1510:291644"
      - "I4746:175420;1510:291645"
      - "I4746:175420;1509:256712"
      - "I4746:175420;1509:256713"
      - "I4746:175420;1509:256714"
      - "I4746:175420;1509:256715"
      - "I4746:175420;1509:256716"
      - "I4746:175420;1509:256717"
      - "I4746:175420;1509:256718"
      - "I4746:175420;1509:256719"
      - "I4746:175420;1509:256720"
      - "I4746:175420;1509:256721"
      - "I4746:175420;1509:256722"
      - "I1639:434863;1288:30715;4276:168026"
      - "I1639:434863;1288:30715;1083:50705;1101:66343"
      - "I1639:434863;1288:30715;1083:50705;1081:89"
      - "I1639:434863;1288:30717;1042:35615"
      - "I2842:298663;1294:161741"
      - "I2842:298664;1294:161805"
      - "I2842:298665;1294:161852"
    items:
      - node_id: "I4746:175420;1509:257178"
        path_key: "root/Desktop/Footer/Container/Content/Actions/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        instance_of: Size=xl, Hierarchy=Primary, Icon=False, Destructive=False, State=Default
        children_text:
          [Get started]
        w: 129
        h: 48
        radius: 8
        padding: "0"
      - node_id: "I4746:175420;1509:257161"
        path_key: "root/Desktop/Footer/Container/RECTANGLE:Divider"
        name: Divider
        type: RECTANGLE
        w: 1216
        h: 1
        fill: "#EAECF0"
        fill_ref: Gray/200
        fill_ref_type: color_style
      - node_id: "I4746:175420;1509:256691"
        path_key: "root/Desktop/Footer/FRAME:Container[2]"
        name: Container
        type: FRAME
        w: 1280
        h: 240
        padding: "0"
        gap: 48
      - node_id: "I4746:175420;1509:256692"
        path_key: "root/Desktop/Footer/Container/FRAME:Content[2]"
        name: Content
        type: FRAME
        w: 1216
        h: 240
        padding: "0"
        gap: 64
      - node_id: "I4746:175420;1509:256693"
        path_key: "root/Desktop/Footer/Container/Content/FRAME:Logo and supporting text"
        name: Logo and supporting text
        type: FRAME
        w: 320
        h: 112
        padding: "0"
        gap: 32
      - node_id: "I4746:175420;1509:256694"
        path_key: "root/Desktop/Footer/Container/Content/Logo and supporting text/INSTANCE:Logo"
        name: Logo
        type: INSTANCE
        instance_of: Dark mode=False
        w: 142
        h: 32
        padding: "0"
      - node_id: "I4746:175420;1509:256695"
        path_key: "root/Desktop/Footer/Container/Content/Logo and supporting text/TEXT:Supporting text"
        name: Supporting text
        type: TEXT
        text: Design amazing digital experiences that create more happy in the world.
        w: 320
        h: 48
        fill: "#667085"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I4746:175420;1510:291640"
        path_key: "root/Desktop/Footer/Container/Content/FRAME:Links"
        name: Links
        type: FRAME
        w: 832
        h: 240
        padding: "0"
        gap: 32
      - node_id: "I4746:175420;1510:291641"
        path_key: "root/Desktop/Footer/Container/Content/Links/INSTANCE:_Footer links column"
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
        w: 141
        h: 240
        padding: "0"
        gap: 16
      - node_id: "I4746:175420;1510:291641;1510:266786"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/TEXT:Heading"
        name: Heading
        type: TEXT
        text: Product
        w: 141
        h: 20
        fill: "#98A2B3"
        fill_ref: Text sm/Semibold
        fill_ref_type: color_style
        font_size: 14
        font: Inter Semi Bold
        line_height: 20px
        text_style: Text sm/Semibold
      - node_id: "I4746:175420;1510:291641;1510:266835"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/FRAME:Footer links"
        name: Footer links
        type: FRAME
        w: 141
        h: 204
        padding: "0"
        gap: 12
      - node_id: "I4746:175420;1510:291641;1510:266836"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Overview]
        w: 74
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I4746:175420;1510:291641;1510:266836;1507:253519"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/_Footer link/INSTANCE:Button"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Overview]
        w: 74
        h: 24
        padding: "0"
      - node_id: "I4746:175420;1510:291641;1510:266837"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[2]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Features]
        w: 68
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I4746:175420;1510:291641;1510:266838"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[3]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=True, Color=Gray, Theme=Light, State=Default
        children_text:
          [Solutions, New]
        w: 123
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I4746:175420;1510:291641;1510:266838;1507:253529"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/_Footer link/INSTANCE:Button[2]"
        name: Button
        type: INSTANCE
        instance_of: Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
        children_text:
          [Solutions]
        w: 73
        h: 24
        padding: "0"
      - node_id: "I4746:175420;1510:291641;1510:266838;1507:253530"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/_Footer link/INSTANCE:Badge"
        name: Badge
        type: INSTANCE
        instance_of: Size=sm, Icon=False, Color=Success
        children_text:
          [New]
        w: 42
        h: 22
        padding: "0"
      - node_id: "I4746:175420;1510:291641;1510:266839"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[4]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Tutorials]
        w: 68
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I4746:175420;1510:291641;1510:266840"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[5]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Pricing]
        w: 54
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I4746:175420;1510:291641;1510:266841"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[6]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Releases]
        w: 70
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I4746:175420;1510:291642"
        path_key: "root/Desktop/Footer/Container/Content/Links/INSTANCE:_Footer links column[2]"
        name: _Footer links column
        type: INSTANCE
        instance_of: Color=Gray, Theme=Light
        children_text:
          [Company, About us, Careers, Press, News, Media kit, Contact]
        w: 141
        h: 240
        padding: "0"
        gap: 16
      - node_id: "I4746:175420;1510:291642;1510:266786"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/TEXT:Heading[2]"
        name: Heading
        type: TEXT
        text: Company
        w: 141
        h: 20
        fill: "#98A2B3"
        fill_ref: Text sm/Semibold
        fill_ref_type: color_style
        font_size: 14
        font: Inter Semi Bold
        line_height: 20px
        text_style: Text sm/Semibold
      - node_id: "I4746:175420;1510:291642;1510:266835"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/FRAME:Footer links[2]"
        name: Footer links
        type: FRAME
        w: 141
        h: 204
        padding: "0"
        gap: 12
      - node_id: "I4746:175420;1510:291642;1510:266836"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[7]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [About us]
        w: 70
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I4746:175420;1510:291642;1510:266837"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[8]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Careers]
        w: 62
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I4746:175420;1510:291642;1510:266838"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[9]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Press]
        w: 44
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I4746:175420;1510:291642;1510:266839"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[10]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [News]
        w: 44
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I4746:175420;1510:291642;1510:266840"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[11]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Media kit]
        w: 71
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I4746:175420;1510:291642;1510:266841"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[12]"
        name: _Footer link
        type: INSTANCE
        instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
        children_text:
          [Contact]
        w: 62
        h: 24
        padding: "0"
        gap: 8
      - node_id: "I4746:175420;1510:291643"
        path_key: "root/Desktop/Footer/Container/Content/Links/INSTANCE:_Footer links column[3]"
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
        w: 141
        h: 240
        padding: "0"
        gap: 16
      - node_id: "I4746:175420;1510:291644"
        path_key: "root/Desktop/Footer/Container/Content/Links/INSTANCE:_Footer links column[4]"
        name: _Footer links column
        type: INSTANCE
        instance_of: Color=Gray, Theme=Light
        children_text:
          [Social, Twitter, LinkedIn, Facebook, GitHub, AngelList, Dribbble]
        w: 141
        h: 240
        padding: "0"
        gap: 16
      - node_id: "I4746:175420;1510:291645"
        path_key: "root/Desktop/Footer/Container/Content/Links/INSTANCE:_Footer links column[5]"
        name: _Footer links column
        type: INSTANCE
        instance_of: Color=Gray, Theme=Light
        children_text:
          [Legal, Terms, Privacy, Cookies, Licenses, Settings, Contact]
        w: 141
        h: 240
        padding: "0"
        gap: 16
      - node_id: "I4746:175420;1509:256712"
        path_key: "root/Desktop/Footer/FRAME:Container[3]"
        name: Container
        type: FRAME
        w: 1280
        h: 57
        padding: "0"
        gap: 32
      - node_id: "I4746:175420;1509:256713"
        path_key: "root/Desktop/Footer/Container/RECTANGLE:Divider[2]"
        name: Divider
        type: RECTANGLE
        w: 1216
        h: 1
        fill: "#EAECF0"
        fill_ref: Gray/200
        fill_ref_type: color_style
      - node_id: "I4746:175420;1509:256714"
        path_key: "root/Desktop/Footer/Container/FRAME:Content[3]"
        name: Content
        type: FRAME
        w: 1216
        h: 24
        padding: "0"
        gap: 32
      - node_id: "I4746:175420;1509:256715"
        path_key: "root/Desktop/Footer/Container/Content/TEXT:Footer text"
        name: Footer text
        type: TEXT
        text: © 2077 Untitled UI. All rights reserved.
        w: 920
        h: 24
        fill: "#98A2B3"
        fill_ref: Text md/Regular
        fill_ref_type: color_style
        font_size: 16
        font: Inter Regular
        line_height: 24px
        text_style: Text md/Regular
      - node_id: "I4746:175420;1509:256716"
        path_key: "root/Desktop/Footer/Container/Content/FRAME:Social icons"
        name: Social icons
        type: FRAME
        w: 264
        h: 24
        padding: "0"
        gap: 24
      - node_id: "I4746:175420;1509:256717"
        path_key: "root/Desktop/Footer/Container/Content/Social icons/INSTANCE:Social icon"
        name: Social icon
        type: INSTANCE
        instance_of: Platform=Twitter, Color=Gray, State=Default
        w: 24
        h: 24
        fill: "#98A2B3"
      - node_id: "I4746:175420;1509:256718"
        path_key: "root/Desktop/Footer/Container/Content/Social icons/INSTANCE:Social icon[2]"
        name: Social icon
        type: INSTANCE
        instance_of: Platform=LinkedIn, Color=Gray, State=Default
        w: 24
        h: 24
        fill: "#98A2B3"
      - node_id: "I4746:175420;1509:256719"
        path_key: "root/Desktop/Footer/Container/Content/Social icons/INSTANCE:Social icon[3]"
        name: Social icon
        type: INSTANCE
        instance_of: Platform=Facebook, Color=Gray, State=Default
        w: 24
        h: 24
        fill: "#98A2B3"
      - node_id: "I4746:175420;1509:256720"
        path_key: "root/Desktop/Footer/Container/Content/Social icons/INSTANCE:Social icon[4]"
        name: Social icon
        type: INSTANCE
        instance_of: Platform=GitHub, Color=Gray, State=Default
        w: 24
        h: 24
        fill: "#98A2B3"
      - node_id: "I4746:175420;1509:256721"
        path_key: "root/Desktop/Footer/Container/Content/Social icons/INSTANCE:Social icon[5]"
        name: Social icon
        type: INSTANCE
        instance_of: Platform=AngelList, Color=Gray, State=Default
        w: 24
        h: 24
        fill: "#98A2B3"
      - node_id: "I4746:175420;1509:256722"
        path_key: "root/Desktop/Footer/Container/Content/Social icons/INSTANCE:Social icon[6]"
        name: Social icon
        type: INSTANCE
        instance_of: Platform=Dribbble, Color=Gray, State=Default
        w: 24
        h: 24
        fill: "#98A2B3"
      - node_id: "I1639:434863;1288:30715;4276:168026"
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
      - node_id: "I1639:434863;1288:30715;1083:50705;1101:66343"
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
      - node_id: "I1639:434863;1288:30715;1083:50705;1081:89"
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
      - node_id: "I1639:434863;1288:30717;1042:35615"
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
      - node_id: "I2842:298663;1294:161741"
        path_key: "root/Desktop/Social proof section/Container/Logos/Company logo/FRAME:Logomark"
        name: Logomark
        type: FRAME
        w: 44
        h: 44
        direction: row
        justify: inferred
        align: inferred
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "I2842:298664;1294:161805"
        path_key: "root/Desktop/Social proof section/Container/Logos/Company logo/FRAME:Logomark[2]"
        name: Logomark
        type: FRAME
        w: 29
        h: 48
        direction: row
        justify: inferred
        align: inferred
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "I2842:298665;1294:161852"
        path_key: "root/Desktop/Social proof section/Container/Logos/Company logo/FRAME:Logomark[3]"
        name: Logomark
        type: FRAME
        w: 44
        h: 44
        direction: column
        justify: inferred
        align: inferred
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
  - chunk_id: anatomy_6
    kind: anatomy
    item_count: 2
    path_range:
      - "root/Desktop/Social proof section/Container/Logos/Company logo/FRAME:Logomark[4]"
      - "root/Desktop/Social proof section/Container/Logos/Company logo/FRAME:Logomark[5]"
    node_ids:
      ["I2842:298666;1294:161896", "I2842:298667;1294:161940"]
    items:
      - node_id: "I2842:298666;1294:161896"
        path_key: "root/Desktop/Social proof section/Container/Logos/Company logo/FRAME:Logomark[4]"
        name: Logomark
        type: FRAME
        w: 44
        h: 44
        direction: column
        justify: inferred
        align: inferred
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "I2842:298667;1294:161940"
        path_key: "root/Desktop/Social proof section/Container/Logos/Company logo/FRAME:Logomark[5]"
        name: Logomark
        type: FRAME
        w: 44
        h: 44
        direction: column
        justify: inferred
        align: inferred
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
  - chunk_id: repeats_1
    kind: repeats
    template_node_id: "I1639:434863;1288:30715"
    template_path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/INSTANCE:Logo"
    instance_of: Dark mode=False
    repeat_count: 1
    varying_keys:
      []
    items:
      - node_id: "I4746:175420;1509:256694"
        path_key: "root/Desktop/Footer/Container/Content/Logo and supporting text/INSTANCE:Logo"
        diffs:
          {}
  - chunk_id: repeats_2
    kind: repeats
    template_node_id: "I1639:434863;1288:30717"
    template_path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:Button"
    instance_of: Size=lg, Hierarchy=Link gray, Icon=False, Destructive=False, State=Default
    repeat_count: 9
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
      - node_id: "I1639:434863;1288:30720"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/Content/Navigation/INSTANCE:Button[2]"
        diffs:
          Button/width: "54"
          Button/_Button base/width: "54"
          Button/_Button base/Text/text: Pricing
          Button/_Button base/Text/width: "54"
        children_text:
          [Pricing]
      - node_id: "I1639:434863;1624:307186;1624:262067"
        path_key: "root/Desktop/Dropdown header navigation/Header/Container/_Navigation actions/INSTANCE:Button"
        diffs:
          Button/width: "83"
          Button/Hierarchy: Tertiary gray
          Button/_Button base/width: "83"
          Button/_Button base/Text/text: Log in
          Button/_Button base/Text/width: "47"
        children_text:
          [Log in]
      - node_id: "I1639:434863;1624:307186;1624:262069"
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
      - node_id: "I1639:458058;1486:883"
        path_key: "root/Desktop/Team section/Container/Content/Actions/INSTANCE:Button"
        diffs:
          Button/width: "110"
          Button/Size: xl
          Button/Hierarchy: Secondary gray
          Button/_Button base/width: "110"
          Button/_Button base/Size: xl
          Button/_Button base/Text/text: About us
          Button/_Button base/Text/fill: "#344054"
          Button/_Button base/Text/width: "70"
        children_text:
          [About us]
      - node_id: "I1639:458058;1486:884"
        path_key: "root/Desktop/Team section/Container/Content/Actions/INSTANCE:Button[2]"
        diffs:
          Button/width: "157"
          Button/Size: xl
          Button/Hierarchy: Primary
          Button/_Button base/width: "157"
          Button/_Button base/Size: xl
          Button/_Button base/Text/text: Open positions
          Button/_Button base/Text/fill: "#FFFFFF"
          Button/_Button base/Text/width: "117"
        children_text:
          [Open positions]
      - node_id: "I4746:175420;1509:257177"
        path_key: "root/Desktop/Footer/Container/Content/Actions/INSTANCE:Button"
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
      - node_id: "I4746:175420;1509:257178"
        path_key: "root/Desktop/Footer/Container/Content/Actions/INSTANCE:Button[2]"
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
      - node_id: "I4746:175420;1510:291641;1510:266836;1507:253519"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/_Footer link/INSTANCE:Button"
        diffs:
          Button/width: "74"
          Button/_Button base/width: "74"
          Button/_Button base/Text/text: Overview
          Button/_Button base/Text/width: "74"
        children_text:
          [Overview]
      - node_id: "I4746:175420;1510:291641;1510:266838;1507:253529"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/_Footer link/INSTANCE:Button[2]"
        diffs:
          Button/width: "73"
          Button/_Button base/width: "73"
          Button/_Button base/Text/text: Solutions
          Button/_Button base/Text/width: "73"
        children_text:
          [Solutions]
  - chunk_id: repeats_3
    kind: repeats
    template_node_id: "I1639:434863;1288:30718"
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
      - node_id: "I1639:434863;1288:30719"
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
    template_node_id: "2842:298591"
    template_path_key: "root/Desktop/Metrics section/Container/Content/Content/Row/INSTANCE:_Metric item"
    instance_of: Action=False, Type=Left aligned text, Breakpoint=Desktop
    repeat_count: 3
    varying_keys:
      - _Metric item/Number and text/Number/text
      - _Metric item/Number and text/Text/text
    items:
      - node_id: "2842:298592"
        path_key: "root/Desktop/Metrics section/Container/Content/Content/Row/INSTANCE:_Metric item[2]"
        diffs:
          _Metric item/Number and text/Number/text: 600%
          _Metric item/Number and text/Text/text: Return on investment
        children_text:
          [600%, Return on investment]
      - node_id: "2842:298594"
        path_key: "root/Desktop/Metrics section/Container/Content/Content/Row/INSTANCE:_Metric item[3]"
        diffs:
          _Metric item/Number and text/Number/text: 10k
          _Metric item/Number and text/Text/text: Global downloads
        children_text:
          [10k, Global downloads]
      - node_id: "2842:298595"
        path_key: "root/Desktop/Metrics section/Container/Content/Content/Row/INSTANCE:_Metric item[4]"
        diffs:
          _Metric item/Number and text/Number/text: 200+
          _Metric item/Number and text/Text/text: 5-star reviews
        children_text:
          [200+, 5-star reviews]
  - chunk_id: repeats_5
    kind: repeats
    template_node_id: "I1639:458058;1486:1050"
    template_path_key: "root/Desktop/Team section/Container/Content/Team member wrap/INSTANCE:_Team member"
    instance_of: Type=Simple center aligned, Text and icons=True, Breakpoint=Desktop
    repeat_count: 6
    varying_keys:
      - _Team member/Avatar/fill
      - _Team member/Text and social links/Name and supporting text/Name and role/Name/text
      - _Team member/Text and social links/Name and supporting text/Name and role/Role/text
      - _Team member/Text and social links/Name and supporting text/Supporting text/text
      - Team member wrap/Avatar/fill
      - Team member wrap/Text and social links/Name and supporting text/Name and role/Name/text
      - Team member wrap/Text and social links/Name and supporting text/Name and role/Role/text
      - Team member wrap/Text and social links/Name and supporting text/Supporting text/text
    items:
      - node_id: "I1639:458058;1488:497"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/INSTANCE:_Team member[2]"
        diffs:
          _Team member/Avatar/fill: "#AA9C75"
          _Team member/Text and social links/Name and supporting text/Name and role/Name/text: Phoenix Baker
          _Team member/Text and social links/Name and supporting text/Name and role/Role/text: Engineering Manager
          _Team member/Text and social links/Name and supporting text/Supporting text/text: Lead engineering teams at Figma, Pitch, and Protocol Labs.
        children_text:
          - Phoenix Baker
          - Engineering Manager
          - Lead engineering teams at Figma, Pitch, and Protocol Labs.
      - node_id: "I1639:458058;1486:1052"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/INSTANCE:Team member wrap"
        diffs:
          Team member wrap/Avatar/fill: "#D4B5AD"
          Team member wrap/Text and social links/Name and supporting text/Name and role/Name/text: Lana Steiner
          Team member wrap/Text and social links/Name and supporting text/Name and role/Role/text: Product Manager
          Team member wrap/Text and social links/Name and supporting text/Supporting text/text: Former PM for Linear, Lambda School, and On Deck.
        children_text:
          - Lana Steiner
          - Product Manager
          - Former PM for Linear, Lambda School, and On Deck.
      - node_id: "I1639:458058;1486:1055"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/INSTANCE:_Team member[3]"
        diffs:
          _Team member/Avatar/fill: "#A2A8CD"
          _Team member/Text and social links/Name and supporting text/Name and role/Name/text: Candice Wu
          _Team member/Text and social links/Name and supporting text/Name and role/Role/text: Backend Developer
          _Team member/Text and social links/Name and supporting text/Supporting text/text: Lead backend dev at Clearbit. Former Clearbit and Loom.
        children_text:
          - Candice Wu
          - Backend Developer
          - Lead backend dev at Clearbit. Former Clearbit and Loom.
      - node_id: "I1639:458058;1486:1056"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/INSTANCE:_Team member[4]"
        diffs:
          _Team member/Avatar/fill: "#D1BAA9"
          _Team member/Text and social links/Name and supporting text/Name and role/Name/text: Natali Craig
          _Team member/Text and social links/Name and supporting text/Name and role/Role/text: Product Designer
          _Team member/Text and social links/Name and supporting text/Supporting text/text: Founding design team at Figma. Former Pleo, Stripe, and Tile.
        children_text:
          - Natali Craig
          - Product Designer
          - Founding design team at Figma. Former Pleo, Stripe, and Tile.
      - node_id: "I1639:458058;1486:1057"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/INSTANCE:_Team member[5]"
        diffs:
          _Team member/Avatar/fill: "#D1DFC3"
          _Team member/Text and social links/Name and supporting text/Name and role/Name/text: Drew Cano
          _Team member/Text and social links/Name and supporting text/Name and role/Role/text: UX Researcher
          _Team member/Text and social links/Name and supporting text/Supporting text/text: Lead user research for Slack. Contractor for Netflix and Udacity.
        children_text:
          - Drew Cano
          - UX Researcher
          - Lead user research for Slack. Contractor for Netflix and Udacity.
      - node_id: "I1639:458058;1486:1058"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/INSTANCE:_Team member[6]"
        diffs:
          _Team member/Avatar/fill: "#CFC3A7"
          _Team member/Text and social links/Name and supporting text/Name and role/Name/text: Orlando Diggs
          _Team member/Text and social links/Name and supporting text/Name and role/Role/text: Customer Success
          _Team member/Text and social links/Name and supporting text/Supporting text/text: Lead CX at Wealthsimple. Former PagerDuty and Sqreen.
        children_text:
          - Orlando Diggs
          - Customer Success
          - Lead CX at Wealthsimple. Former PagerDuty and Sqreen.
  - chunk_id: repeats_6
    kind: repeats
    template_node_id: "I1639:458058;1486:1050;1458:240492"
    template_path_key: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/INSTANCE:Avatar"
    instance_of: Size=2xl, Placeholder=False, Text=False, Status icon=False, State=Default
    repeat_count: 1
    varying_keys:
      [Avatar/fill]
    items:
      - node_id: "I1639:458058;1486:1053;1458:240492"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/INSTANCE:Avatar"
        diffs:
          Avatar/fill: "#BEA887"
  - chunk_id: repeats_7
    kind: repeats
    template_node_id: "I1639:458058;1486:1050;1458:240565"
    template_path_key: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/Text and social links/Social icons/INSTANCE:Social icon"
    instance_of: Platform=Twitter, Color=Gray, State=Default
    repeat_count: 7
    varying_keys:
      [Social icon/Platform, Social icon/width, Social icon/Vector/width]
    items:
      - node_id: "I1639:458058;1486:1050;1458:240567"
        path_key: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/Text and social links/Social icons/INSTANCE:Social icon[3]"
        diffs:
          Social icon/Platform: Dribbble
      - node_id: "I1639:458058;1486:1053;1458:240565"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/Social icons/INSTANCE:Social icon"
        diffs:
          {}
      - node_id: "I1639:458058;1486:1053;1458:240567"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/Social icons/INSTANCE:Social icon[3]"
        diffs:
          Social icon/Platform: Dribbble
      - node_id: "I4746:175420;1509:256717"
        path_key: "root/Desktop/Footer/Container/Content/Social icons/INSTANCE:Social icon"
        diffs:
          Social icon/width: "24"
          Social icon/Vector/width: "24"
      - node_id: "I4746:175420;1509:256719"
        path_key: "root/Desktop/Footer/Container/Content/Social icons/INSTANCE:Social icon[3]"
        diffs:
          Social icon/width: "24"
          Social icon/Platform: Facebook
          Social icon/Vector/width: "24"
      - node_id: "I4746:175420;1509:256721"
        path_key: "root/Desktop/Footer/Container/Content/Social icons/INSTANCE:Social icon[5]"
        diffs:
          Social icon/width: "24"
          Social icon/Platform: AngelList
          Social icon/Vector/width: "17"
      - node_id: "I4746:175420;1509:256722"
        path_key: "root/Desktop/Footer/Container/Content/Social icons/INSTANCE:Social icon[6]"
        diffs:
          Social icon/width: "24"
          Social icon/Platform: Dribbble
          Social icon/Vector/width: "24"
  - chunk_id: repeats_8
    kind: repeats
    template_node_id: "I1639:458058;1486:1050;1458:240566"
    template_path_key: "root/Desktop/Team section/Container/Content/Team member wrap/_Team member/Text and social links/Social icons/INSTANCE:Social icon[2]"
    instance_of: Platform=LinkedIn, Color=Gray, State=Default
    repeat_count: 2
    varying_keys:
      - Social icon/width
      - Social icon/Group/width
      - Social icon/Group/Vector/width
    items:
      - node_id: "I1639:458058;1486:1053;1458:240566"
        path_key: "root/Desktop/Team section/Container/Content/Frame 1/Team member wrap/Text and social links/Social icons/INSTANCE:Social icon[2]"
        diffs:
          {}
      - node_id: "I4746:175420;1509:256718"
        path_key: "root/Desktop/Footer/Container/Content/Social icons/INSTANCE:Social icon[2]"
        diffs:
          Social icon/width: "24"
          Social icon/Group/width: "24"
          Social icon/Group/Vector/width: "24"
  - chunk_id: repeats_9
    kind: repeats
    template_node_id: "2842:298913"
    template_path_key: "root/Desktop/Careers section/Container/Content/Heading and supporting text/Heading and badge/INSTANCE:Badge"
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
      - node_id: "I4746:175420;1510:291641;1510:266838;1507:253530"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/_Footer link/INSTANCE:Badge"
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
  - chunk_id: repeats_10
    kind: repeats
    template_node_id: "2842:298923"
    template_path_key: "root/Desktop/Careers section/Container/Content/Items/INSTANCE:_Job post"
    instance_of: Details=True, Badge/subheading=False, Type=Card badge group, Breakpoint=Desktop
    repeat_count: 5
    varying_keys:
      - _Job post/Content/Text and supporting text/Text/text
      - _Job post/Content/Text and supporting text/Supporting text/text
    items:
      - node_id: "2842:298924"
        path_key: "root/Desktop/Careers section/Container/Content/Items/INSTANCE:_Job post[2]"
        diffs:
          _Job post/Content/Text and supporting text/Text/text: UX Designer
          _Job post/Content/Text and supporting text/Supporting text/text: We’re looking for a mid-level UX designer to join our team.
        children_text:
          - UX Designer
          - We’re looking for a mid-level UX designer to join our team.
          - Full-time
          - 80k - 100k
      - node_id: "2842:298929"
        path_key: "root/Desktop/Careers section/Container/Content/Items/INSTANCE:_Job post[3]"
        diffs:
          _Job post/Content/Text and supporting text/Text/text: Engineering Manager
          _Job post/Content/Text and supporting text/Supporting text/text: We’re looking for an experienced engineering manager to join our team.
        children_text:
          - Engineering Manager
          - We’re looking for an experienced engineering manager to join our team.
          - Full-time
          - 80k - 100k
      - node_id: "2842:298930"
        path_key: "root/Desktop/Careers section/Container/Content/Items/INSTANCE:_Job post[4]"
        diffs:
          _Job post/Content/Text and supporting text/Text/text: Frontend Developer
          _Job post/Content/Text and supporting text/Supporting text/text: We’re looking for an experienced frontend developer to join our team.
        children_text:
          - Frontend Developer
          - We’re looking for an experienced frontend developer to join our team.
          - Full-time
          - 80k - 100k
      - node_id: "2842:298931"
        path_key: "root/Desktop/Careers section/Container/Content/Items/INSTANCE:_Job post[5]"
        diffs:
          _Job post/Content/Text and supporting text/Text/text: Backend Beveloper
          _Job post/Content/Text and supporting text/Supporting text/text: We’re looking for an experienced backend developer to join our team.
        children_text:
          - Backend Beveloper
          - We’re looking for an experienced backend developer to join our team.
          - Full-time
          - 80k - 100k
      - node_id: "2842:298936"
        path_key: "root/Desktop/Careers section/Container/Content/Items/INSTANCE:_Job post[6]"
        diffs:
          _Job post/Content/Text and supporting text/Text/text: Customer Success Manager
        children_text:
          - Customer Success Manager
          - We’re looking for a mid-level product designer to join our team.
          - Full-time
          - 80k - 100k
  - chunk_id: repeats_11
    kind: repeats
    template_node_id: "I4746:175420;1510:291641;1510:266836"
    template_path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link"
    instance_of: Badge=False, Color=Gray, Theme=Light, State=Default
    repeat_count: 10
    varying_keys:
      - _Footer link/width
      - _Footer link/Button/width
      - _Footer link/Button/_Button base/width
      - _Footer link/Button/_Button base/Text/text
      - _Footer link/Button/_Button base/Text/width
    items:
      - node_id: "I4746:175420;1510:291641;1510:266837"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[2]"
        diffs:
          _Footer link/width: "68"
          _Footer link/Button/width: "68"
          _Footer link/Button/_Button base/width: "68"
          _Footer link/Button/_Button base/Text/text: Features
          _Footer link/Button/_Button base/Text/width: "68"
        children_text:
          [Features]
      - node_id: "I4746:175420;1510:291641;1510:266839"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[4]"
        diffs:
          _Footer link/width: "68"
          _Footer link/Button/width: "68"
          _Footer link/Button/_Button base/width: "68"
          _Footer link/Button/_Button base/Text/text: Tutorials
          _Footer link/Button/_Button base/Text/width: "68"
        children_text:
          [Tutorials]
      - node_id: "I4746:175420;1510:291641;1510:266840"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[5]"
        diffs:
          _Footer link/width: "54"
          _Footer link/Button/width: "54"
          _Footer link/Button/_Button base/width: "54"
          _Footer link/Button/_Button base/Text/text: Pricing
          _Footer link/Button/_Button base/Text/width: "54"
        children_text:
          [Pricing]
      - node_id: "I4746:175420;1510:291641;1510:266841"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[6]"
        diffs:
          _Footer link/width: "70"
          _Footer link/Button/width: "70"
          _Footer link/Button/_Button base/width: "70"
          _Footer link/Button/_Button base/Text/text: Releases
          _Footer link/Button/_Button base/Text/width: "70"
        children_text:
          [Releases]
      - node_id: "I4746:175420;1510:291642;1510:266836"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[7]"
        diffs:
          _Footer link/width: "70"
          _Footer link/Button/width: "70"
          _Footer link/Button/_Button base/width: "70"
          _Footer link/Button/_Button base/Text/text: About us
          _Footer link/Button/_Button base/Text/width: "70"
        children_text:
          [About us]
      - node_id: "I4746:175420;1510:291642;1510:266837"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[8]"
        diffs:
          _Footer link/width: "62"
          _Footer link/Button/width: "62"
          _Footer link/Button/_Button base/width: "62"
          _Footer link/Button/_Button base/Text/text: Careers
          _Footer link/Button/_Button base/Text/width: "62"
        children_text:
          [Careers]
      - node_id: "I4746:175420;1510:291642;1510:266838"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[9]"
        diffs:
          _Footer link/width: "44"
          _Footer link/Button/width: "44"
          _Footer link/Button/_Button base/width: "44"
          _Footer link/Button/_Button base/Text/text: Press
          _Footer link/Button/_Button base/Text/width: "44"
        children_text:
          [Press]
      - node_id: "I4746:175420;1510:291642;1510:266839"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[10]"
        diffs:
          _Footer link/width: "44"
          _Footer link/Button/width: "44"
          _Footer link/Button/_Button base/width: "44"
          _Footer link/Button/_Button base/Text/text: News
          _Footer link/Button/_Button base/Text/width: "44"
        children_text:
          [News]
      - node_id: "I4746:175420;1510:291642;1510:266840"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[11]"
        diffs:
          _Footer link/width: "71"
          _Footer link/Button/width: "71"
          _Footer link/Button/_Button base/width: "71"
          _Footer link/Button/_Button base/Text/text: Media kit
          _Footer link/Button/_Button base/Text/width: "71"
        children_text:
          [Media kit]
      - node_id: "I4746:175420;1510:291642;1510:266841"
        path_key: "root/Desktop/Footer/Container/Content/Links/_Footer links column/Footer links/INSTANCE:_Footer link[12]"
        diffs:
          _Footer link/width: "62"
          _Footer link/Button/width: "62"
          _Footer link/Button/_Button base/width: "62"
          _Footer link/Button/_Button base/Text/text: Contact
          _Footer link/Button/_Button base/Text/width: "62"
        children_text:
          [Contact]
  - chunk_id: repeats_12
    kind: repeats
    template_node_id: "I4746:175420;1510:291642"
    template_path_key: "root/Desktop/Footer/Container/Content/Links/INSTANCE:_Footer links column[2]"
    instance_of: Color=Gray, Theme=Light
    repeat_count: 3
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
      - node_id: "I4746:175420;1510:291643"
        path_key: "root/Desktop/Footer/Container/Content/Links/INSTANCE:_Footer links column[3]"
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
      - node_id: "I4746:175420;1510:291644"
        path_key: "root/Desktop/Footer/Container/Content/Links/INSTANCE:_Footer links column[4]"
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
      - node_id: "I4746:175420;1510:291645"
        path_key: "root/Desktop/Footer/Container/Content/Links/INSTANCE:_Footer links column[5]"
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

<!-- chars: 181530 -->