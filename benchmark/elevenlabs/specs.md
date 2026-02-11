## Figma Component: 1440w default

### Figma URL
[Paste Figma frame URL here]

### Implementation Instructions
1. Use get_screenshot on the Figma URL above and **save it to `.figma/1440w_default.png`** (relative to working directory). Reference this local file whenever you need to check the design — do not call get_screenshot again.
2. Read the anatomy tree below to understand the component structure.
3. Read the YAML specs — it has every layer, color, font, spacing, and token value you need.
4. Check the project's working directory or `package.json` for the icon library in use (e.g. Phosphor, Lucide, Heroicons). Use matching icons from that library based on the `instance_of` names in the anatomy (e.g. `instance_of: ForkKnife` → use ForkKnife from the detected library).
5. Check the project's `package.json` to detect the framework in use, then build the component accordingly.
6. Build the component exactly as specified. Match the structure, styles (fills, strokes, fonts), and layout (direction, gap, padding).
7. Use resolved_tokens to map token names to actual values (e.g. hex colors, font names).
8. Keep it minimal — only implement what the specs describe, nothing more.
9. **Visual QA** — render your component at 1440×5373px (1x scale, no device emulation). Take a screenshot and compare with `.figma/1440w_default.png`. Verify:
   - Layout structure matches (correct direction, nesting, alignment)
   - Spacing is correct (gap, padding values from specs)
   - Colors match fills/strokes in the spec (within #±02 per channel)
   - Font sizes, weights, and families match
   - Border radius values match
   - Text content is complete (no unintended truncation)
   Fix any differences and re-compare until all checks pass.

### Component Anatomy
```
- 1440w default (FRAME)
- Main (FRAME)
- Background (FRAME)
- Container (FRAME)
- Container (FRAME)
- Nav → List (FRAME)
- Item (FRAME)
- Link - ElevenLabs (FRAME)
- Item (FRAME)
- List (FRAME)
- Item (FRAME)
- Button (FRAME)
- Container (FRAME)
- Creative Platform (TEXT) — "Creative Platform"
- Item (FRAME)
- Button (FRAME)
- Container (FRAME)
- Agents Platform (TEXT) — "Agents Platform"
- Item (FRAME)
- Button (FRAME)
- Container (FRAME)
- Developers (TEXT) — "Developers"
- Item (FRAME)
- Button (FRAME)
- Container (FRAME)
- Resources (TEXT) — "Resources"
- Item → Link (FRAME)
- Container (FRAME)
- Enterprise (TEXT) — "Enterprise"
- Item → Link (FRAME)
- Container (FRAME)
- Pricing (TEXT) — "Pricing"
- Margin (FRAME)
- Container (FRAME)
- Container (FRAME)
- Link (FRAME)
- Log in (TEXT) — "Log in"
- Link (FRAME)
- Sign up (TEXT) — "Sign up"
- Background (FRAME)
- Container (FRAME)
- Container (FRAME)
- Container (FRAME)
- Container (FRAME)
- Container (FRAME)
- Heading 1 (FRAME)
- Heading (TEXT) — "Bringing
technology to life"
- Container (FRAME)
- Link (FRAME)
- Sign up (TEXT) — "Sign up"
- Link (FRAME)
- Contact sales (TEXT) — "Contact sales"
- Container (FRAME)
- Container (FRAME)
- Description (TEXT) — "Powering the best enterprises, creators…"
- Container (FRAME)
- Container (FRAME)
- Container (FRAME)
- Background (FRAME)
- Container (FRAME)
- Container (FRAME)
- Container (FRAME)
- Tablist (FRAME)
- Tab (FRAME)
- Container (FRAME)
- Container (FRAME)
- Tab name (TEXT) — "Text to Speech"
- Tab (FRAME)
- Container (FRAME)
- Container (FRAME)
- Tab name (TEXT) — "Agents"
- Tab (FRAME)
- Container (FRAME)
- Container (FRAME)
- Tab name (TEXT) — "Music"
- Tab (FRAME)
- Container (FRAME)
- Container (FRAME)
- Tab name (TEXT) — "Speech to Text"
- Tab (FRAME)
- Container (FRAME)
- Container (FRAME)
- Tab name (TEXT) — "Voice Cloning"
- Tabpanel (FRAME)
- Container (FRAME)
- Background+Shadow (FRAME)
- Container (FRAME)
- Container (FRAME)
- Container (FRAME)
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Background+Shadow (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Mark"
- Button - Preview (FRAME)
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Spuds Oxley"
- Container (FRAME)
- Voice description (TEXT) — "Wise and Approachable"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "James"
- Container (FRAME)
- Voice description (TEXT) — "Husky, Engaging and Bold"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Cassidy"
- Container (FRAME)
- Voice description (TEXT) — "Crisp, Direct and Clear"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Michael C. Vincent"
- Container (FRAME)
- Voice description (TEXT) — "Confident, Expressive"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Hope"
- Container (FRAME)
- Voice description (TEXT) — "Upbeat and Clear"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Christopher"
- Container (FRAME)
- Voice description (TEXT) — "Gentle and Trustworthy"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Adam"
- Container (FRAME)
- Voice description (TEXT) — "American, Dark and Tough"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "John Doe"
- Container (FRAME)
- Voice description (TEXT) — "Deep"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Mark"
- Container (FRAME)
- Voice description (TEXT) — "Casual, Relaxed and Light"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Peter"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Arabella"
- Container (FRAME)
- Voice description (TEXT) — "Mysterious and Emotive"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Jessica Anne Bogart"
- Container (FRAME)
- Voice description (TEXT) — "A VO Professional; now …"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Ian Cartwell"
- Container (FRAME)
- Voice description (TEXT) — "Suspense and Mystery"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Alex"
- Container (FRAME)
- Voice description (TEXT) — "Upbeat, Energetic and Clear"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Declan Sage"
- Container (FRAME)
- Voice description (TEXT) — "Wise and Captivating"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Bradford"
- Container (FRAME)
- Voice description (TEXT) — "Expressive and Articulate"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "David Castlemore"
- Container (FRAME)
- Voice description (TEXT) — "Newsreader and Educator"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Frederick Surrey"
- Container (FRAME)
- Voice description (TEXT) — "Smooth and Velvery"
- Label (FRAME)
- Container (FRAME)
- Container (FRAME)
- image (FRAME)
- Container (FRAME)
- Voice name (TEXT) — "Jon"
- Container (FRAME)
- Voice description (TEXT) — "Warm & Grounded Storyteller"
- Container (FRAME)
- Link (FRAME)
- Explore voices link (TEXT) — "Explore 10,000+ voices"
- Button - Previous:margin (FRAME)
- Button - Previous (FRAME)
- Button - Next (FRAME)
- Container (FRAME)
- Container (FRAME)
- Container (FRAME)
- Sample text (TEXT) — "In the ancient land of Eldoria, where s…"
- Textarea - Enter your text here, ElevenLabs AI Voice Generator will read it for you (FRAME)
- Container (FRAME)
- Sample text (TEXT) — "In the ancient land of Eldoria, where s…"
- Margin (FRAME)
- Gradient (FRAME)
- Container (FRAME)
- Container (FRAME)
- Container (FRAME)
- Enter text prompt (TEXT) — "Enter your own text"
- Container (FRAME)
- Container (FRAME)
- Button listbox - Language (FRAME)
- Container (FRAME)
- Container (FRAME)
- us.svg:align-center (FRAME)
- us.svg (FRAME)
- us.svg fill (FRAME)
- Container (FRAME)
- Language (TEXT) — "English"
- Button - Play:margin (FRAME)
- Button - Play (FRAME)
- Play button (TEXT) — "Play"
- Container (FRAME)
- Container (FRAME)
- Container (FRAME)
- Section title (TEXT) — "Text to Speech"
- Container (FRAME)
- Section description (TEXT) — "Transform text into lifelike speech acr…"
- Container (FRAME)
- Link (FRAME)
- Sign up link (TEXT) — "Sign up"
- Container (FRAME)
- Border (FRAME)
- Heading 2 (FRAME)
- Two platforms built on the same research foundation (TEXT) — "Two platforms built on the
same researc…"
- Background (FRAME)
- Background (FRAME)
- Container (FRAME)
- Border (FRAME)
- Container (FRAME)
- Container (FRAME)
- Container (FRAME)
- Heading 3 (FRAME)
- Creative Platform (TEXT) — "Creative Platform"
- Container (FRAME)
- Generate ultra-realistic speech, videos, music, and sound effects. (TEXT) — "Generate ultra-realistic speech,
videos…"
- Container (FRAME)
- Container (FRAME)
- Heading 3 (FRAME)
- Agents Platform (TEXT) — "Agents Platform"
- Container (FRAME)
- Configure, deploy and monitor conversational agents. (TEXT) — "Configure, deploy and monitor
conversat…"
- Background (FRAME)
- Screenshot of the ElevenLabs Creative Platform (FRAME)
- Container (FRAME)
- Background (FRAME)
- Screenshot of the ElevenLabs Agents Platform (FRAME)
- Overlay+Shadow (FRAME)
- Container (FRAME)
- Border (FRAME)
- Container (FRAME)
- Container (FRAME)
- Creative Platform (TEXT) — "Creative Platform"
- Container (FRAME)
- Container (FRAME)
- Heading 2 (FRAME)
- Create, edit and localize in one AI platform (TEXT) — "Create, edit and localize
in one AI pla…"
- Container (FRAME)
- Link (FRAME)
- Learn more (TEXT) — "Learn more"
- Container (FRAME)
- Container (FRAME)
- Create ultra-realistic speech, turn ideas into videos, compose music in any genre, or design immersive sound effects. Craft your next film, ad, audiobook, or podcast with our all-in-one platform. (TEXT) — "Create ultra-realistic speech, turn ide…"
- Background (FRAME)
- Background (FRAME)
- Container (FRAME)
- Border (FRAME)
- Background (FRAME)
- image (FRAME)
- Heading 3 (FRAME)
- All-in-one AI editor (TEXT) — "All-in-one AI editor"
- Container (FRAME)
- Create podcasts, audiobooks and voiceovers in an editor built on all of ElevenLabs’ audio research combined. (TEXT) — "Create podcasts, audiobooks and voiceov…"
- Container (FRAME)
- Background (FRAME)
- Container (FRAME)
- Container (FRAME)
- Container (FRAME)
- Amidst the outer atmosphere of the planet Aurora, the sky shimmered with fractured light, as though the planet's veil were made of stained glass suspended in space. (TEXT) — "Amidst the outer atmosphere of the plan…"
- Container (FRAME)
- Sensors pulsed with irregular patterns, the kind no algorithm could quite reconcile. (TEXT) — "Sensors pulsed with irregular patterns,…"
- VerticalBorder (FRAME)
- image (FRAME)
- HorizontalBorder (FRAME)
- Overlay+Shadow (FRAME)
- image (FRAME)
- Container (FRAME)
- Background+Shadow (FRAME)
- Amidst the outer atmosphere of the planet … (TEXT) — "Amidst the outer atmosphere of the plan…"
- Background+Shadow (FRAME)
- Overlay+Shadow (FRAME)
- Background (FRAME)
- Heading 3 (FRAME)
- Ultra-realistic speech (TEXT) — "Ultra-realistic speech"
- Container (FRAME)
- Create controllable, expressive speech layered across 70+ languages. (TEXT) — "Create controllable, expressive speech …"
- Container (FRAME)
- Container (FRAME)
- Background+Shadow (FRAME)
- Container (FRAME)
- Container (FRAME)
- Container (FRAME)
- Container (FRAME)
- In the ancient land of Eldoria, where skies shimmered and forests, whispered secrets to the wind, lived a dragon named Zephyros. [sarcastically] Not the “burn it all down” kind... [giggles] but he was gentle, wise, with eyes like old stars. [whispers] Even the birds fell silent when he passed. (TEXT) — "In the ancient land of Eldoria, where s…"
- Textarea - Enter your text here, ElevenLabs AI Voice Generator will read it for you (FRAME)
- Container (FRAME)
- In the ancient land of Eldoria, where skies shimmered and forests, whispered secrets to the wind, lived a dragon named Zephyros. [sarcastically] Not the “burn it all down” kind... [giggles] but he was gentle, wise, with eyes like old stars. [whispers] Even the birds fell silent when he passed. (TEXT) — "In the ancient land of Eldoria, where s…"
- Margin (FRAME)
- Gradient (FRAME)
- Container (FRAME)
- Container (FRAME)
- Button listbox - Language (FRAME)
- Container (FRAME)
- Container (FRAME)
- us.svg:align-center (FRAME)
- us.svg (FRAME)
- us.svg fill (FRAME)
- Container (FRAME)
- English (TEXT) — "English"
- Container (FRAME)
- Button listbox - Voice (FRAME)
- Container (FRAME)
- Container (FRAME)
- image:align-center (FRAME)
- image (FRAME)
- Container (FRAME)
- Mark (TEXT) — "Mark"
- Button - Play:margin (FRAME)
- Button - Play (FRAME)
- Play (TEXT) — "Play"
- Overlay+Shadow (FRAME)
- Background (FRAME)
- Container (FRAME)
- Margin (FRAME)
- Overlay+Shadow (FRAME)
- Heading 3 (FRAME)
- Music (TEXT) — "Music"
- Container (FRAME)
- Generate studio-quality tracks instantly, any genre, any style, vocals or instrumental. (TEXT) — "Generate studio-quality
tracks instantl…"
- Overlay+Shadow (FRAME)
- Background (FRAME)
- Container (FRAME)
- Margin (FRAME)
- Overlay+Shadow (FRAME)
- Heading 3 (FRAME)
- SFX (TEXT) — "SFX"
- Container (FRAME)
- Create custom sound effects and ambient audio. (TEXT) — "Create custom sound effects
and ambient…"
- Overlay+Shadow (FRAME)
- Background (FRAME)
- Container (FRAME)
- Margin (FRAME)
- Overlay+Shadow (FRAME)
- Heading 3 (FRAME)
- Voices (TEXT) — "Voices"
- Container (FRAME)
- Clone a replica of your own voice, design one from a prompt, or explore 1000s of voices from the library. (TEXT) — "Clone a replica of your own
voice, desi…"
- Overlay+Shadow (FRAME)
- Background (FRAME)
- Container (FRAME)
- Margin (FRAME)
- Overlay+Shadow (FRAME)
- Heading 3 (FRAME)
- Image & Video (TEXT) — "Image & Video"
- Container (FRAME)
- Create or edit images and turn ideas into videos with leading models like Veo, Sora, Wan, Kling and Seedance. (TEXT) — "Create or edit images and
turn ideas in…"
- Overlay+Shadow (FRAME)
- Container (FRAME)
- Border (FRAME)
- Container (FRAME)
- Tablist (FRAME)
- Tab - Nvidia (FRAME)
- nvidia.svg (FRAME)
- nvidia.svg fill (FRAME)
- Tab - Mozart AI (FRAME)
- image (FRAME)
- Tab - Duolingo (FRAME)
- duolingo.svg (FRAME)
- duolingo.svg fill (FRAME)
- Tabpanel (FRAME)
- Paragraph (FRAME)
- Nvidia (TEXT) — "Nvidia"
- Using synthetic voice technology to power multilingual marketing content (TEXT) — "Using synthetic voice technology to pow…"
- Container (FRAME)
- Container (FRAME)
- Link (FRAME)
- Mozart AI (TEXT) — "Mozart AI"
- Delivering AI music creation and low-latency streaming with Eleven Music (TEXT) — "Delivering AI music creation and low-la…"
- Container (FRAME)
- Paragraph (FRAME)
- Duolingo (TEXT) — "Duolingo"
- Character voices for learning and marketing (TEXT) — "Character voices for learning and marke…"
- Container (FRAME)
- Link (FRAME)
- Get started (TEXT) — "Get started"
- Container (FRAME)
- Border (FRAME)
- Container (FRAME)
- Container (FRAME)
- Agents Platform (TEXT) — "Agents Platform"
- Container (FRAME)
- Container (FRAME)
- Heading 2 (FRAME)
- Deploy agents that talk, type, and take action (TEXT) — "Deploy agents that talk,
type, and take…"
- Container (FRAME)
- Link (FRAME)
- Learn more (TEXT) — "Learn more"
- Container (FRAME)
- Container (FRAME)
- Configure, deploy and monitor natural, human-sounding agents in 32 languages with leading accuracy and ultra-low latency across voice or chat. (TEXT) — "Configure, deploy and monitor natural, …"
- Background (FRAME)
- Background (FRAME)
- Container (FRAME)
- Border (FRAME)
- Background (FRAME)
- image (FRAME)
- Heading 3 (FRAME)
- Omnichannel agents (TEXT) — "Omnichannel agents"
- Container (FRAME)
- Agents listen, read and interact just like humans would across phone, chat, email and WhatsApp. (TEXT) — "Agents listen, read and interact just l…"
- Container (FRAME)
- Container (FRAME)
- Overlay+Shadow (FRAME)
- Can I get a refund? (TEXT) — "Can I get a refund?"
- Background+Shadow (FRAME)
- Sure. Can you share your order number please? (TEXT) — "Sure. Can you share your order
number p…"
- Overlay+Shadow (FRAME)
- It's EL4543490 (TEXT) — "It's EL4543490"
- Container (FRAME)
- Container (FRAME)
- Background+Shadow (FRAME)
- Thank you. I have initiated the order refund process. (TEXT) — "Thank you. I have initiated the
order r…"
- Background+Shadow (FRAME)
- Container (FRAME)
- Margin (FRAME)
- Refund completed (TEXT) — "Refund completed"
- Background+Shadow (FRAME)
- Background+Shadow (FRAME)
- Container (FRAME)
- Overlay+Shadow (FRAME)
- Background (FRAME)
- Heading 3 (FRAME)
- Analytics (TEXT) — "Analytics"
- Container (FRAME)
- Easily measure success rates and CX metrics, optimizing flows over time. (TEXT) — "Easily measure success rates and CX met…"
- Container (FRAME)
- Container (FRAME)
- Background+Shadow (FRAME)
- Container (FRAME)
- Success rate (TEXT) — "Success rate"
- Container (FRAME)
- 61.5% (TEXT) — "61.5%"
- Container (FRAME)
- Container (FRAME)
- 100% (TEXT) — "100%"
- Margin (FRAME)
- Container (FRAME)
- 50% (TEXT) — "50%"
- Container (FRAME)
- 0% (TEXT) — "0%"
- Container (FRAME)
- Container (FRAME)
- 17 Aug (TEXT) — "17 Aug"
- Container (FRAME)
- 24 Aug (TEXT) — "24 Aug"
- Background+Shadow (FRAME)
- Container (FRAME)
- Container (FRAME)
- 87.37% (TEXT) — "87.37%"
- Container (FRAME)
- Container (FRAME)
- 61.71% (TEXT) — "61.71%"
- Overlay+Shadow (FRAME)
- Background (FRAME)
- Container (FRAME)
- Margin (FRAME)
- Overlay+Shadow (FRAME)
- Heading 3 (FRAME)
- Testing (TEXT) — "Testing"
- Container (FRAME)
- Simulate real-world conversations to validate agents behave as expected. (TEXT) — "Simulate real-world conversations to
va…"
- Overlay+Shadow (FRAME)
- Background (FRAME)
- Margin (FRAME)
- Overlay+Shadow (FRAME)
- Heading 3 (FRAME)
- Guardrails (TEXT) — "Guardrails"
- Container (FRAME)
- Establish clear behavioral and compliance rules that keep agent responses aligned with policy. (TEXT) — "Establish clear behavioral and complian…"
- Overlay+Shadow (FRAME)
- Background (FRAME)
- Margin (FRAME)
- Overlay+Shadow (FRAME)
- Heading 3 (FRAME)
- Workflows (TEXT) — "Workflows"
- Container (FRAME)
- Handle complex conversation flows, apply business logic and connect securely to systems. (TEXT) — "Handle complex conversation flows, appl…"
- Overlay+Shadow (FRAME)
- Container (FRAME)
- Border (FRAME)
- Container (FRAME)
- Container (FRAME)
- Heading 2 (FRAME)
- Safety, built in (TEXT) — "Safety, built in"
- Container (FRAME)
- Link (FRAME)
- Learn more (TEXT) — "Learn more"
- Background (FRAME)
- Background (FRAME)
- Container (FRAME)
- Border (FRAME)
- List (FRAME)
- Item (FRAME)
- Background (FRAME)
- Img - Moderation:margin (FRAME)
- Moderation (FRAME)
- safety-moderation.svg fill (FRAME)
- Heading 3 (FRAME)
- Moderation (TEXT) — "Moderation"
- Container (FRAME)
- We actively monitor content generated with our technology. (TEXT) — "We actively monitor content generated
w…"
- Overlay+Shadow (FRAME)
- Item (FRAME)
- Background (FRAME)
- Img - Accountability:margin (FRAME)
- Accountability (FRAME)
- safety-accountability.svg fill (FRAME)
- Heading 3 (FRAME)
- Accountability (TEXT) — "Accountability"
- Container (FRAME)
- We believe misuse must have consequences. (TEXT) — "We believe misuse must have
consequence…"
- Overlay+Shadow (FRAME)
- Item (FRAME)
- Background (FRAME)
- Img - Provenance:margin (FRAME)
- Provenance (FRAME)
- safety-provenance.svg fill (FRAME)
- Heading 3 (FRAME)
- Provenance (TEXT) — "Provenance"
- Container (FRAME)
- We believe that you should know if audio is AI-generated. (TEXT) — "We believe that you should know if audi…"
- Overlay+Shadow (FRAME)
- Background (FRAME)
- Background+Border (FRAME)
- Border (FRAME)
- Margin (FRAME)
- Container (FRAME)
- The most realistic voice AI platform (TEXT) — "The most realistic voice AI platform"
- Container (FRAME)
- Link (FRAME)
- Create an AI agent (TEXT) — "Create an AI agent"
- Background (FRAME)
- Background (FRAME)
- Background (FRAME)
- Background (FRAME)
- Link (FRAME)
- Skip to content (TEXT) — "Skip to content"
- SVG (FRAME)
```

### Specs Data (YAML)
```yaml
schema: specs-plugin.agent_pack.v13.yaml.compact
generated_at: "2026-02-11T17:34:06.071Z"
selection:
  node_id: "1:4"
  name: 1440w default
  type: FRAME
summary:
  anatomy_nodes_total: 625
  property_groups_total: 0
  property_variants_total: 0
  variable_refs_total: 0
  instance_templates: 0
  deduplicated_instances: 0
  chunks_total: 13
  truncated:
    anatomy: false
    anatomy_included: 625
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
chunks:
  - chunk_id: anatomy_1
    kind: anatomy
    item_count: 50
    items:
      - node_id: "1:4"
        name: 1440w default
        type: FRAME
        w: 1440
        h: 5373
        fill: "#FFFFFF"
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:5"
        name: Main
        type: FRAME
        w: 1440
        h: 5373
        gap: -1
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:6"
        name: Background
        type: FRAME
        w: 1440
        h: 64
        fill: "#FDFCFC"
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:7"
        name: Container
        type: FRAME
        w: 1188
        h: 64
        gap: 36.00199890136719
        direction: row
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "1:8"
        name: Container
        type: FRAME
        w: 790
        h: 36
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "1:9"
        name: Nav → List
        type: FRAME
        w: 790
        h: 36
        gap: 24
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "1:10"
        name: Item
        type: FRAME
        w: 141
        h: 36
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: fixed
      - node_id: "1:11"
        name: Link - ElevenLabs
        type: FRAME
        w: 141
        h: 36
        radius: 9999
        direction: row
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: fixed
      - node_id: "1:16"
        name: Item
        type: FRAME
        w: 625
        h: 36
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: fixed
      - node_id: "1:17"
        name: List
        type: FRAME
        w: 625
        h: 36
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: auto
      - node_id: "1:18"
        name: Item
        type: FRAME
        w: 139
        h: 36
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: fixed
      - node_id: "1:19"
        name: Button
        type: FRAME
        w: 139
        h: 36
        direction: row
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "1:20"
        name: Container
        type: FRAME
        w: 139
        h: 36
        radius: 18
        padding: "8"
        direction: column
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "1:21"
        name: Creative Platform
        type: TEXT
        text: Creative Platform
        w: 115
        h: 20
        fill: "#000000"
        font_size: 14
        font: Inter Regular
        line_height: 20px
        text_align: center
      - node_id: "1:22"
        name: Item
        type: FRAME
        w: 131
        h: 36
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: fixed
      - node_id: "1:23"
        name: Button
        type: FRAME
        w: 131
        h: 36
        direction: row
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "1:24"
        name: Container
        type: FRAME
        w: 131
        h: 36
        radius: 18
        padding: "8"
        direction: column
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "1:25"
        name: Agents Platform
        type: TEXT
        text: Agents Platform
        w: 107
        h: 20
        fill: "#000000"
        font_size: 14
        font: Inter Regular
        line_height: 20px
        text_align: center
      - node_id: "1:26"
        name: Item
        type: FRAME
        w: 99
        h: 36
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: fixed
      - node_id: "1:27"
        name: Button
        type: FRAME
        w: 99
        h: 36
        direction: row
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "1:28"
        name: Container
        type: FRAME
        w: 99
        h: 36
        radius: 18
        padding: "8"
        direction: column
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "1:29"
        name: Developers
        type: TEXT
        text: Developers
        w: 75
        h: 20
        fill: "#000000"
        font_size: 14
        font: Inter Regular
        line_height: 20px
        text_align: center
      - node_id: "1:30"
        name: Item
        type: FRAME
        w: 94
        h: 36
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: auto
        h_sizing: fixed
      - node_id: "1:31"
        name: Button
        type: FRAME
        w: 94
        h: 36
        direction: row
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "1:32"
        name: Container
        type: FRAME
        w: 94
        h: 36
        radius: 18
        padding: "8"
        direction: column
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "1:33"
        name: Resources
        type: TEXT
        text: Resources
        w: 70
        h: 20
        fill: "#000000"
        font_size: 14
        font: Inter Regular
        line_height: 20px
        text_align: center
      - node_id: "1:34"
        name: Item → Link
        type: FRAME
        w: 92
        h: 36
        direction: row
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: fixed
      - node_id: "1:35"
        name: Container
        type: FRAME
        w: 92
        h: 36
        radius: 18
        padding: "8"
        direction: column
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "1:36"
        name: Enterprise
        type: TEXT
        text: Enterprise
        w: 68
        h: 20
        fill: "#000000"
        font_size: 14
        font: Inter Regular
        line_height: 20px
        text_align: center
      - node_id: "1:37"
        name: Item → Link
        type: FRAME
        w: 70
        h: 36
        direction: row
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: fixed
      - node_id: "1:38"
        name: Container
        type: FRAME
        w: 70
        h: 36
        radius: 18
        padding: "8"
        direction: column
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "1:39"
        name: Pricing
        type: TEXT
        text: Pricing
        w: 46
        h: 20
        fill: "#000000"
        font_size: 14
        font: Inter Regular
        line_height: 20px
        text_align: center
      - node_id: "1:40"
        name: Margin
        type: FRAME
        w: 362
        h: 28
        direction: column
        justify: flex-start
        align: flex-end
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:41"
        name: Container
        type: FRAME
        w: 147
        h: 28
        direction: row
        justify: flex-end
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "1:42"
        name: Container
        type: FRAME
        w: 147
        h: 28
        gap: 8
        direction: row
        justify: flex-start
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "1:43"
        name: Link
        type: FRAME
        w: 65
        h: 28
        fill: "#FFFFFF"
        radius: 9999
        padding: "3.700000047683716"
        shadow: 0px 2px 4px rgba(0,0,0,0.04)
        direction: row
        justify: center
        align: center
        w_sizing: auto
        h_sizing: fixed
        clips: true
      - node_id: "1:44"
        name: Log in
        type: TEXT
        text: Log in
        w: 41
        h: 20
        fill: "#000000"
        font_size: 14
        font: Inter Regular
        line_height: 19.60px
        text_align: center
      - node_id: "1:45"
        name: Link
        type: FRAME
        w: 74
        h: 28
        fill: "#000000"
        radius: 9999
        padding: "3.700000047683716"
        direction: row
        justify: center
        align: center
        w_sizing: auto
        h_sizing: fixed
      - node_id: "1:46"
        name: Sign up
        type: TEXT
        text: Sign up
        w: 50
        h: 20
        fill: "#FFFFFF"
        font_size: 14
        font: Inter Regular
        line_height: 19.60px
        text_align: center
      - node_id: "1:47"
        name: Background
        type: FRAME
        w: 1440
        h: 5098
        fill: "#FDFCFC"
        padding: "1"
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:48"
        name: Container
        type: FRAME
        w: 1440
        h: 5097
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:49"
        name: Container
        type: FRAME
        w: 1440
        h: 327
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:50"
        name: Container
        type: FRAME
        w: 1176
        h: 327
        padding: "111.5"
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:51"
        name: Container
        type: FRAME
        w: 1176
        h: 175
        gap: 48
        direction: row
        justify: center
        align: flex-end
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:52"
        name: Container
        type: FRAME
        w: 564
        h: 175
        gap: 23
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "1:53"
        name: Heading 1
        type: FRAME
        w: 564
        h: 104
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:54"
        name: Heading
        type: TEXT
        text: Bringing
technology to life
        w: 564
        h: 104
        fill: "#000000"
        font_size: 47.400001525878906
        font: Inter Light
        line_height: 52px
      - node_id: "1:55"
        name: Container
        type: FRAME
        w: 564
        h: 48
        gap: 8
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:56"
        name: Link
        type: FRAME
        w: 97
        h: 48
        fill: "#000000"
        radius: 9999
        direction: row
        justify: center
        align: center
        w_sizing: auto
        h_sizing: fixed
      - node_id: "1:57"
        name: Sign up
        type: TEXT
        text: Sign up
        w: 57
        h: 23
        fill: "#FFFFFF"
        font_size: 16
        font: Inter Regular
        line_height: 22.40px
        text_align: center
  - chunk_id: anatomy_2
    kind: anatomy
    item_count: 50
    items:
      - node_id: "1:58"
        name: Link
        type: FRAME
        w: 144
        h: 48
        fill: "#FFFFFF"
        radius: 9999
        shadow: 0px 2px 4px rgba(0,0,0,0.04)
        direction: row
        justify: center
        align: center
        w_sizing: auto
        h_sizing: fixed
        clips: true
      - node_id: "1:59"
        name: Contact sales
        type: TEXT
        text: Contact sales
        w: 104
        h: 23
        fill: "#000000"
        font_size: 16
        font: Inter Regular
        line_height: 22.40px
        text_align: center
      - node_id: "1:60"
        name: Container
        type: FRAME
        w: 564
        h: 167
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "1:62"
        name: Container
        type: FRAME
        w: 564
        h: 72
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:63"
        name: Description
        type: TEXT
        text: Powering the best enterprises, creators, and developers. From the
Agents Platform for customer experience, the Creative Platform for
content creation, to the leading AI voice generator.
        w: 516
        h: 72
        fill: "#000000"
        font_size: 16
        font: Inter Regular
        line_height: 24px
      - node_id: "1:65"
        name: Container
        type: FRAME
        w: 1440
        h: 712
        direction: column
        justify: flex-start
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:66"
        name: Container
        type: FRAME
        w: 1176
        h: 712
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:67"
        name: Container
        type: FRAME
        w: 1176
        h: 592
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:68"
        name: Background
        type: FRAME
        w: 1176
        h: 592
        fill: "#F5F3F1"
        radius: 24
        padding: "12"
        gap: -12
        direction: column
        justify: flex-start
        align: flex-end
        w_sizing: fixed
        h_sizing: fixed
        clips: true
      - node_id: "1:69"
        name: Container
        type: FRAME
        w: 1144
        h: 68
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
      - node_id: "1:70"
        name: Container
        type: FRAME
        w: 1176
        h: 68
        padding: "12"
        direction: column
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "1:71"
        name: Container
        type: FRAME
        w: 1176
        h: 44
      - node_id: "1:72"
        name: Tablist
        type: FRAME
        w: 627
        h: 44
        radius: 9999
      - node_id: "1:73"
        name: Tab
        type: FRAME
        w: 153
        h: 44
        radius: 9999
      - node_id: "1:75"
        name: Container
        type: FRAME
        w: 116
        h: 24
      - node_id: "1:76"
        name: Container
        type: FRAME
        w: 116
        h: 24
      - node_id: "1:77"
        name: Tab name
        type: TEXT
        text: Text to Speech
        w: 116
        h: 24
        fill: "#000000"
        font_size: 16
        font: Inter Regular
        line_height: 24px
      - node_id: "1:78"
        name: Tab
        type: FRAME
        w: 93
        h: 44
        radius: 9999
      - node_id: "1:79"
        name: Container
        type: FRAME
        w: 55
        h: 24
      - node_id: "1:80"
        name: Container
        type: FRAME
        w: 55
        h: 24
      - node_id: "1:81"
        name: Tab name
        type: TEXT
        text: Agents
        w: 55
        h: 24
        fill: "#57534E"
        font_size: 16
        font: Inter Regular
        line_height: 24px
      - node_id: "1:82"
        name: Tab
        type: FRAME
        w: 84
        h: 44
        radius: 9999
      - node_id: "1:83"
        name: Container
        type: FRAME
        w: 46
        h: 24
      - node_id: "1:84"
        name: Container
        type: FRAME
        w: 46
        h: 24
      - node_id: "1:85"
        name: Tab name
        type: TEXT
        text: Music
        w: 46
        h: 24
        fill: "#57534E"
        font_size: 16
        font: Inter Regular
        line_height: 24px
      - node_id: "1:86"
        name: Tab
        type: FRAME
        w: 154
        h: 44
        radius: 9999
      - node_id: "1:87"
        name: Container
        type: FRAME
        w: 116
        h: 24
      - node_id: "1:88"
        name: Container
        type: FRAME
        w: 116
        h: 24
      - node_id: "1:89"
        name: Tab name
        type: TEXT
        text: Speech to Text
        w: 116
        h: 24
        fill: "#57534E"
        font_size: 16
        font: Inter Regular
        line_height: 24px
      - node_id: "1:90"
        name: Tab
        type: FRAME
        w: 143
        h: 44
        radius: 9999
      - node_id: "1:91"
        name: Container
        type: FRAME
        w: 106
        h: 24
      - node_id: "1:92"
        name: Container
        type: FRAME
        w: 106
        h: 24
      - node_id: "1:93"
        name: Tab name
        type: TEXT
        text: Voice Cloning
        w: 106
        h: 24
        fill: "#57534E"
        font_size: 16
        font: Inter Regular
        line_height: 24px
      - node_id: "1:94"
        name: Tabpanel
        type: FRAME
        w: 1112
        h: 524
      - node_id: "1:95"
        name: Container
        type: FRAME
        w: 1112
        h: 458
        padding: "51"
      - node_id: "1:96"
        name: Background+Shadow
        type: FRAME
        w: 832
        h: 320
        fill: "#FFFFFF"
        radius: 24
        inner_shadow: "0px 0px 0px 0.5px #e7e5e4"
      - node_id: "1:98"
        name: Container
        type: FRAME
        w: 832
        h: 320
      - node_id: "1:99"
        name: Container
        type: FRAME
        w: 416
        h: 320
      - node_id: "1:101"
        name: Container
        type: FRAME
        w: 416
        h: 59
      - node_id: "1:102"
        name: Label
        type: FRAME
        w: 416
        h: 59
        padding: "11"
      - node_id: "1:103"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:105"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:106"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: 77c174300f6a37a9f07f8a8f15f4945abdfe9436
        radius: 9999
      - node_id: "1:107"
        name: Background+Shadow
        type: FRAME
        w: 12
        h: 12
        fill: "#000000"
        radius: 9999
        shadow: "0px 0px 0px 2px #f5f3f1"
        position: absolute
        x: 340
        y: 531
        constraints: "h:max, v:min"
      - node_id: "1:110"
        name: Container
        type: FRAME
        w: 334
        h: 20
      - node_id: "1:111"
        name: Voice name
        type: TEXT
        text: Mark
        w: 334
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:112"
        name: Button - Preview
        type: FRAME
        w: 36
        h: 36
        fill: "#FFFFFF"
        radius: 9999
        shadow: 0px 4px 4px rgba(0,0,0,0.04)
        position: absolute
        x: 664
        y: 527
        constraints: "h:max, v:min"
      - node_id: "1:115"
        name: Label
        type: FRAME
        w: 416
        h: 48
      - node_id: "1:116"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:118"
        name: Container
        type: FRAME
        w: 20
        h: 20
  - chunk_id: anatomy_3
    kind: anatomy
    item_count: 50
    items:
      - node_id: "1:119"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: 9eebf6b1912a6a7270a677f2cbfbe93020b29193
        radius: 9999
      - node_id: "1:120"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 84.25
      - node_id: "1:121"
        name: Voice name
        type: TEXT
        text: Spuds Oxley
        w: 90
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:122"
        name: Container
        type: FRAME
        w: 159
        h: 20
      - node_id: "1:123"
        name: Voice description
        type: TEXT
        text: Wise and Approachable
        w: 159
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:124"
        name: Label
        type: FRAME
        w: 416
        h: 48
      - node_id: "1:125"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:127"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:128"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: a2c99fc895a06f26bf43bc114eca269f6dbddc15
        radius: 9999
      - node_id: "1:129"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 111.9800033569336
      - node_id: "1:130"
        name: Voice name
        type: TEXT
        text: James
        w: 47
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:131"
        name: Container
        type: FRAME
        w: 174
        h: 20
      - node_id: "1:132"
        name: Voice description
        type: TEXT
        text: Husky, Engaging and Bold
        w: 174
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:133"
        name: Label
        type: FRAME
        w: 416
        h: 48
      - node_id: "1:134"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:136"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:137"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: 73aed6ee1ecff1f5c02c107e1d1ee065c2d5d6e8
        radius: 9999
      - node_id: "1:138"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 125.33000183105469
      - node_id: "1:139"
        name: Voice name
        type: TEXT
        text: Cassidy
        w: 58
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:140"
        name: Container
        type: FRAME
        w: 151
        h: 20
      - node_id: "1:141"
        name: Voice description
        type: TEXT
        text: Crisp, Direct and Clear
        w: 151
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:142"
        name: Label
        type: FRAME
        w: 416
        h: 59
      - node_id: "1:143"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:145"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:146"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: 4fa20faa4f9e2d1df97aa8e04e7ffa2c21b28e0a
        radius: 9999
      - node_id: "1:147"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 52.529998779296875
      - node_id: "1:148"
        name: Voice name
        type: TEXT
        text: Michael C. Vincent
        w: 134
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:149"
        name: Container
        type: FRAME
        w: 147
        h: 20
      - node_id: "1:150"
        name: Voice description
        type: TEXT
        text: Confident, Expressive
        w: 147
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:151"
        name: Label
        type: FRAME
        w: 416
        h: 59
        padding: "11"
      - node_id: "1:152"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:154"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:155"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: d5b0693cad44ff2fc0648566bed8c1d4431194a3
        radius: 9999
      - node_id: "1:156"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 178.94000244140625
      - node_id: "1:157"
        name: Voice name
        type: TEXT
        text: Hope
        w: 39
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:158"
        name: Container
        type: FRAME
        w: 117
        h: 20
      - node_id: "1:159"
        name: Voice description
        type: TEXT
        text: Upbeat and Clear
        w: 117
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:160"
        name: Label
        type: FRAME
        w: 416
        h: 48
      - node_id: "1:161"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:163"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:164"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: 28e6b0d34d75c3bc50309c2768d76fa2fed306f9
        radius: 9999
      - node_id: "1:165"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 91.88999938964844
      - node_id: "1:166"
        name: Voice name
        type: TEXT
        text: Christopher
        w: 85
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:167"
        name: Container
        type: FRAME
        w: 159
        h: 20
      - node_id: "1:168"
        name: Voice description
        type: TEXT
        text: Gentle and Trustworthy
        w: 159
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:169"
        name: Label
        type: FRAME
        w: 416
        h: 48
      - node_id: "1:170"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:172"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:173"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: 20dfa159a89901a6fd5ff5e9b6e227c2013cdd65
        radius: 9999
      - node_id: "1:174"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 114.2699966430664
  - chunk_id: anatomy_4
    kind: anatomy
    item_count: 50
    items:
      - node_id: "1:175"
        name: Voice name
        type: TEXT
        text: Adam
        w: 42
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:176"
        name: Container
        type: FRAME
        w: 177
        h: 20
      - node_id: "1:177"
        name: Voice description
        type: TEXT
        text: American, Dark and Tough
        w: 177
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:178"
        name: Label
        type: FRAME
        w: 416
        h: 48
      - node_id: "1:179"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:181"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:182"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: 77c174300f6a37a9f07f8a8f15f4945abdfe9436
        radius: 9999
      - node_id: "1:183"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 230.33999633789062
      - node_id: "1:184"
        name: Voice name
        type: TEXT
        text: John Doe
        w: 68
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:185"
        name: Container
        type: FRAME
        w: 36
        h: 20
      - node_id: "1:186"
        name: Voice description
        type: TEXT
        text: Deep
        w: 36
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:187"
        name: Label
        type: FRAME
        w: 416
        h: 59
      - node_id: "1:188"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:190"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:191"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: 9eebf6b1912a6a7270a677f2cbfbe93020b29193
        radius: 9999
      - node_id: "1:192"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 125.11000061035156
      - node_id: "1:193"
        name: Voice name
        type: TEXT
        text: Mark
        w: 37
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:194"
        name: Container
        type: FRAME
        w: 173
        h: 20
      - node_id: "1:195"
        name: Voice description
        type: TEXT
        text: Casual, Relaxed and Light
        w: 173
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:196"
        name: Label
        type: FRAME
        w: 416
        h: 59
        padding: "11"
      - node_id: "1:197"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:199"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:200"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: a2c99fc895a06f26bf43bc114eca269f6dbddc15
        radius: 9999
      - node_id: "1:201"
        name: Container
        type: FRAME
        w: 334
        h: 20
      - node_id: "1:202"
        name: Voice name
        type: TEXT
        text: Peter
        w: 334
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:203"
        name: Label
        type: FRAME
        w: 416
        h: 48
      - node_id: "1:204"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:206"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:207"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: 73aed6ee1ecff1f5c02c107e1d1ee065c2d5d6e8
        radius: 9999
      - node_id: "1:208"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 114.04000091552734
      - node_id: "1:209"
        name: Voice name
        type: TEXT
        text: Arabella
        w: 59
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:210"
        name: Container
        type: FRAME
        w: 161
        h: 20
      - node_id: "1:211"
        name: Voice description
        type: TEXT
        text: Mysterious and Emotive
        w: 161
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:212"
        name: Label
        type: FRAME
        w: 416
        h: 48
      - node_id: "1:213"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:215"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:216"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: 4fa20faa4f9e2d1df97aa8e04e7ffa2c21b28e0a
        radius: 9999
      - node_id: "1:217"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 12
      - node_id: "1:218"
        name: Voice name
        type: TEXT
        text: Jessica Anne Bogart
        w: 148
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:219"
        name: Container
        type: FRAME
        w: 172
        h: 20
      - node_id: "1:220"
        name: Voice description
        type: TEXT
        text: A VO Professional; now …
        w: 171
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:221"
        name: Label
        type: FRAME
        w: 416
        h: 48
      - node_id: "1:222"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:224"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:225"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: d5b0693cad44ff2fc0648566bed8c1d4431194a3
        radius: 9999
      - node_id: "1:226"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 95.33000183105469
      - node_id: "1:227"
        name: Voice name
        type: TEXT
        text: Ian Cartwell
        w: 86
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:228"
        name: Container
        type: FRAME
        w: 154
        h: 20
      - node_id: "1:229"
        name: Voice description
        type: TEXT
        text: Suspense and Mystery
        w: 154
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:230"
        name: Label
        type: FRAME
        w: 416
        h: 59
  - chunk_id: anatomy_5
    kind: anatomy
    item_count: 50
    items:
      - node_id: "1:231"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:233"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:234"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: 28e6b0d34d75c3bc50309c2768d76fa2fed306f9
        radius: 9999
      - node_id: "1:235"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 114.6500015258789
      - node_id: "1:236"
        name: Voice name
        type: TEXT
        text: Alex
        w: 32
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:237"
        name: Container
        type: FRAME
        w: 189
        h: 20
      - node_id: "1:238"
        name: Voice description
        type: TEXT
        text: Upbeat, Energetic and Clear
        w: 189
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:239"
        name: Label
        type: FRAME
        w: 416
        h: 59
        padding: "11"
      - node_id: "1:240"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:242"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:243"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: 20dfa159a89901a6fd5ff5e9b6e227c2013cdd65
        radius: 9999
      - node_id: "1:244"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 101.80999755859375
      - node_id: "1:245"
        name: Voice name
        type: TEXT
        text: Declan Sage
        w: 90
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:246"
        name: Container
        type: FRAME
        w: 143
        h: 20
      - node_id: "1:247"
        name: Voice description
        type: TEXT
        text: Wise and Captivating
        w: 143
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:248"
        name: Label
        type: FRAME
        w: 416
        h: 48
      - node_id: "1:249"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:251"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:252"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: 77c174300f6a37a9f07f8a8f15f4945abdfe9436
        radius: 9999
      - node_id: "1:253"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 101.41000366210938
      - node_id: "1:254"
        name: Voice name
        type: TEXT
        text: Bradford
        w: 63
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:255"
        name: Container
        type: FRAME
        w: 171
        h: 20
      - node_id: "1:256"
        name: Voice description
        type: TEXT
        text: Expressive and Articulate
        w: 171
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:257"
        name: Label
        type: FRAME
        w: 416
        h: 48
      - node_id: "1:258"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:260"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:261"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: 9eebf6b1912a6a7270a677f2cbfbe93020b29193
        radius: 9999
      - node_id: "1:262"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 33.040000915527344
      - node_id: "1:263"
        name: Voice name
        type: TEXT
        text: David Castlemore
        w: 128
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:264"
        name: Container
        type: FRAME
        w: 175
        h: 20
      - node_id: "1:265"
        name: Voice description
        type: TEXT
        text: Newsreader and Educator
        w: 175
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:266"
        name: Label
        type: FRAME
        w: 416
        h: 48
      - node_id: "1:267"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:269"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:270"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: a2c99fc895a06f26bf43bc114eca269f6dbddc15
        radius: 9999
      - node_id: "1:271"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 80.25
      - node_id: "1:272"
        name: Voice name
        type: TEXT
        text: Frederick Surrey
        w: 119
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:273"
        name: Container
        type: FRAME
        w: 135
        h: 20
      - node_id: "1:274"
        name: Voice description
        type: TEXT
        text: Smooth and Velvery
        w: 135
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:275"
        name: Label
        type: FRAME
        w: 416
        h: 59
      - node_id: "1:276"
        name: Container
        type: FRAME
        w: 392
        h: 48
        radius: 12
        gap: 10
      - node_id: "1:278"
        name: Container
        type: FRAME
        w: 20
        h: 20
      - node_id: "1:279"
        name: image
        type: FRAME
        w: 20
        h: 20
        fill: image
        fill_type: IMAGE
        image_hash: 73aed6ee1ecff1f5c02c107e1d1ee065c2d5d6e8
        radius: 9999
      - node_id: "1:280"
        name: Container
        type: FRAME
        w: 334
        h: 20
        gap: 111.66000366210938
      - node_id: "1:281"
        name: Voice name
        type: TEXT
        text: Jon
        w: 27
        h: 20
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:282"
        name: Container
        type: FRAME
        w: 196
        h: 20
      - node_id: "1:283"
        name: Voice description
        type: TEXT
        text: Warm & Grounded Storyteller
        w: 196
        h: 20
        fill: "#79716B"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:284"
        name: Container
        type: FRAME
        w: 416
        h: 48
      - node_id: "1:285"
        name: Link
        type: FRAME
        w: 193
        h: 36
        fill: "#FFFFFF"
        radius: 9999
        shadow: 0px 4px 4px rgba(0,0,0,0.04)
      - node_id: "1:286"
        name: Explore voices link
        type: TEXT
        text: Explore 10,000+ voices
        w: 165
        h: 15
        fill: "#000000"
        font_size: 15
        font: Inter Regular
        line_height: 15px
        text_align: center
  - chunk_id: anatomy_6
    kind: anatomy
    item_count: 50
    items:
      - node_id: "1:287"
        name: "Button - Previous:margin"
        type: FRAME
        w: 163
        h: 36
      - node_id: "1:288"
        name: Button - Previous
        type: FRAME
        w: 36
        h: 36
        radius: 9999
      - node_id: "1:291"
        name: Button - Next
        type: FRAME
        w: 36
        h: 36
        radius: 9999
      - node_id: "1:294"
        name: Container
        type: FRAME
        w: 416
        h: 320
      - node_id: "1:296"
        name: Container
        type: FRAME
        w: 416
        h: 216
      - node_id: "1:297"
        name: Container
        type: FRAME
        w: 416
        h: 180
        padding: "12"
      - node_id: "1:298"
        name: Sample text
        type: TEXT
        text: "In the ancient land of Eldoria, where skies 
shimmered and forests, whispered secrets to the 
wind, lived a dragon named Zephyros. 
[sarcastically] Not the “burn it all down” kind... 
[giggles] but he was gentle, wise, with eyes like 
old stars. [whispers] Even the birds fell silent 
when he passed."
        w: 376
        h: 168
        fill: mixed
        fill_segments:
          - text: "In the ancient land of Eldoria, where skies 
shimmered and forests, whispered secrets to the 
wind, lived a dragon named Zephyros. 
"
            fill: "#000000"
          - text: "[sarcastically]"
            fill: "#A6A09B"
          - text: " Not the “burn it all down” kind... 
"
            fill: "#000000"
          - text: "[giggles]"
            fill: "#A6A09B"
          - text: " but he was gentle, wise, with eyes like 
old stars. "
            fill: "#000000"
          - text: "[whispers]"
            fill: "#A6A09B"
          - text: " Even the birds fell silent 
when he passed."
            fill: "#000000"
        font_size: 16
        font: Inter Regular
        line_height: 24px
      - node_id: "1:299"
        name: Textarea - Enter your text here, ElevenLabs AI Voice Generator will read it for you
        type: FRAME
        w: 416
        h: 216
        padding: "12"
        position: absolute
        x: 720
        y: 542
        constraints: "h:stretch, v:stretch"
      - node_id: "1:300"
        name: Container
        type: FRAME
        w: 376
        h: 168
      - node_id: "1:301"
        name: Sample text
        type: TEXT
        text: "In the ancient land of Eldoria, where skies 
shimmered and forests, whispered secrets to the 
wind, lived a dragon named Zephyros. 
[sarcastically] Not the “burn it all down” kind... 
[giggles] but he was gentle, wise, with eyes like 
old stars. [whispers] Even the birds fell silent 
when he passed."
        w: 376
        h: 168
        font_size: 16
        font: Inter Regular
        line_height: 24px
      - node_id: "1:307"
        name: Margin
        type: FRAME
        w: 416
        h: 24
      - node_id: "1:311"
        name: Gradient
        type: FRAME
        w: 415
        h: 24
      - node_id: "1:319"
        name: Container
        type: FRAME
        w: 416
        h: 44
        padding: "16.5"
      - node_id: "1:321"
        name: Container
        type: FRAME
        w: 132
        h: 21
      - node_id: "1:322"
        name: Container
        type: FRAME
        w: 132
        h: 21
      - node_id: "1:323"
        name: Enter text prompt
        type: TEXT
        text: Enter your own text
        w: 132
        h: 21
        fill: "#79716B"
        font_size: 14
        font: Inter Regular
        line_height: 21px
      - node_id: "1:324"
        name: Container
        type: FRAME
        w: 416
        h: 48
        gap: 0.0010000000474974513
      - node_id: "1:325"
        name: Container
        type: FRAME
        w: 120
        h: 36
      - node_id: "1:326"
        name: Button listbox - Language
        type: FRAME
        w: 120
        h: 36
        radius: 12
        gap: 8
      - node_id: "1:327"
        name: Container
        type: FRAME
        w: 76
        h: 22
      - node_id: "1:328"
        name: Container
        type: FRAME
        w: 76
        h: 22
        gap: 8
      - node_id: "1:329"
        name: "us.svg:align-center"
        type: FRAME
        w: 16
        h: 22
      - node_id: "1:330"
        name: us.svg
        type: FRAME
        w: 16
        h: 16
        fill: "#E7E5E4"
        radius: 9999
      - node_id: "1:331"
        name: us.svg fill
        type: FRAME
        w: 16
        h: 16
      - node_id: "1:341"
        name: Container
        type: FRAME
        w: 52
        h: 22
      - node_id: "1:342"
        name: Language
        type: TEXT
        text: English
        w: 52
        h: 22
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 22px
        text_align: center
      - node_id: "1:345"
        name: "Button - Play:margin"
        type: FRAME
        w: 272
        h: 36
      - node_id: "1:346"
        name: Button - Play
        type: FRAME
        w: 58
        h: 36
        fill: "#000000"
        radius: 9999
      - node_id: "1:347"
        name: Play button
        type: TEXT
        text: Play
        w: 30
        h: 15
        fill: "#FFFFFF"
        font_size: 15
        font: Inter Regular
        line_height: 15px
        text_align: center
      - node_id: "1:349"
        name: Container
        type: FRAME
        w: 1112
        h: 66
        gap: 641.3300170898438
      - node_id: "1:350"
        name: Container
        type: FRAME
        w: 381
        h: 45
      - node_id: "1:351"
        name: Container
        type: FRAME
        w: 381
        h: 24
      - node_id: "1:352"
        name: Section title
        type: TEXT
        text: Text to Speech
        w: 116
        h: 24
        fill: "#000000"
        font_size: 16
        font: Inter Regular
        line_height: 24px
      - node_id: "1:353"
        name: Container
        type: FRAME
        w: 381
        h: 21
      - node_id: "1:354"
        name: Section description
        type: TEXT
        text: Transform text into lifelike speech across 70+ languages
        w: 381
        h: 21
        fill: "#79716B"
        font_size: 14
        font: Inter Regular
        line_height: 21px
      - node_id: "1:356"
        name: Container
        type: FRAME
        w: 89
        h: 40
      - node_id: "1:358"
        name: Link
        type: FRAME
        w: 89
        h: 40
        fill: "#FFFFFF"
        radius: 9999
        shadow: 0px 2px 4px rgba(0,0,0,0.04)
      - node_id: "1:359"
        name: Sign up link
        type: TEXT
        text: Sign up
        w: 57
        h: 23
        fill: "#000000"
        font_size: 16
        font: Inter Regular
        line_height: 22.40px
        text_align: center
      - node_id: "1:904"
        name: Container
        type: FRAME
        w: 1440
        h: 269
      - node_id: "1:905"
        name: Border
        type: FRAME
        w: 1176
        h: 269
        stroke: hsla(0, 0%, 0%, 0.05)
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
      - node_id: "1:907"
        name: Heading 2
        type: FRAME
        w: 515
        h: 84
      - node_id: "1:908"
        name: Two platforms built on the same research foundation
        type: TEXT
        text: Two platforms built on the
same research foundation
        w: 435
        h: 84
        fill: "#000000"
        font_size: 35.70000076293945
        font: Inter Light
        line_height: 42px
      - node_id: "1:911"
        name: Background
        type: FRAME
        w: 20
        h: 20
        fill: "#FDFCFC"
        radius: 9999
      - node_id: "1:913"
        name: Background
        type: FRAME
        w: 20
        h: 20
        fill: "#FDFCFC"
        radius: 9999
      - node_id: "1:915"
        name: Container
        type: FRAME
        w: 1440
        h: 526
      - node_id: "1:916"
        name: Border
        type: FRAME
        w: 1176
        h: 526
        stroke: hsla(0, 0%, 0%, 0.05)
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
      - node_id: "1:917"
        name: Container
        type: FRAME
        w: 1110
        h: 514
      - node_id: "1:921"
        name: Container
        type: FRAME
        w: 431
        h: 72
      - node_id: "1:922"
        name: Container
        type: FRAME
        w: 256
        h: 72
        gap: 3.5
      - node_id: "1:923"
        name: Heading 3
        type: FRAME
        w: 256
        h: 24
  - chunk_id: anatomy_7
    kind: anatomy
    item_count: 50
    items:
      - node_id: "1:924"
        name: Creative Platform
        type: TEXT
        text: Creative Platform
        w: 256
        h: 24
        fill: "#000000"
        font_size: 16
        font: Inter Medium
        line_height: 24px
      - node_id: "1:925"
        name: Container
        type: FRAME
        w: 256
        h: 44
      - node_id: "1:926"
        name: Generate ultra-realistic speech, videos, music, and sound effects.
        type: TEXT
        text: Generate ultra-realistic speech,
videos, music, and sound effects.
        w: 256
        h: 44
        fill: "#79716B"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:927"
        name: Container
        type: FRAME
        w: 647
        h: 72
      - node_id: "1:928"
        name: Container
        type: FRAME
        w: 256
        h: 72
        gap: 3.5
      - node_id: "1:929"
        name: Heading 3
        type: FRAME
        w: 256
        h: 24
      - node_id: "1:930"
        name: Agents Platform
        type: TEXT
        text: Agents Platform
        w: 256
        h: 24
        fill: "#000000"
        font_size: 16
        font: Inter Medium
        line_height: 24px
      - node_id: "1:931"
        name: Container
        type: FRAME
        w: 256
        h: 44
      - node_id: "1:932"
        name: Configure, deploy and monitor conversational agents.
        type: TEXT
        text: Configure, deploy and monitor
conversational agents.
        w: 256
        h: 44
        fill: "#79716B"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:936"
        name: Background
        type: FRAME
        w: 647
        h: 370
        fill: "#FFFFFF"
      - node_id: "1:937"
        name: Screenshot of the ElevenLabs Creative Platform
        type: FRAME
        w: 647
        h: 370
        fill: image
        fill_type: IMAGE
        image_hash: ae831898f2a48f9393b1720792ec348f281fe724
      - node_id: "1:938"
        name: Container
        type: FRAME
        w: 647
        h: 406
        padding: "36"
      - node_id: "1:941"
        name: Background
        type: FRAME
        w: 647
        h: 370
        fill: "#FFFFFF"
      - node_id: "1:942"
        name: Screenshot of the ElevenLabs Agents Platform
        type: FRAME
        w: 647
        h: 370
        fill: image
        fill_type: IMAGE
        image_hash: e4790164ed05d2a3596f80b785f9d5d5bf2dffde
      - node_id: "1:944"
        name: Overlay+Shadow
        type: FRAME
        w: 1142
        h: 406
        fill: hsla(0, 0%, 100%, 0)
        radius: 24
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.08)
      - node_id: "1:945"
        name: Container
        type: FRAME
        w: 1440
        h: 388
      - node_id: "1:946"
        name: Border
        type: FRAME
        w: 1176
        h: 388
        gap: 154
        stroke: hsla(0, 0%, 0%, 0.05)
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
      - node_id: "1:948"
        name: Container
        type: FRAME
        w: 1078
        h: 193
        gap: 15.5
      - node_id: "1:949"
        name: Container
        type: FRAME
        w: 1078
        h: 22
      - node_id: "1:950"
        name: Creative Platform
        type: TEXT
        text: Creative Platform
        w: 1078
        h: 22
        fill: "#79716B"
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:951"
        name: Container
        type: FRAME
        w: 1078
        h: 156
        gap: 48
      - node_id: "1:952"
        name: Container
        type: FRAME
        w: 515
        h: 156
        gap: 23.5
      - node_id: "1:953"
        name: Heading 2
        type: FRAME
        w: 515
        h: 84
      - node_id: "1:954"
        name: Create, edit and localize in one AI platform
        type: TEXT
        text: Create, edit and localize
in one AI platform
        w: 515
        h: 84
        fill: "#000000"
        font_size: 35.400001525878906
        font: Inter Light
        line_height: 42px
      - node_id: "1:955"
        name: Container
        type: FRAME
        w: 515
        h: 48
      - node_id: "1:956"
        name: Link
        type: FRAME
        w: 126
        h: 48
        fill: "#000000"
        radius: 9999
      - node_id: "1:957"
        name: Learn more
        type: TEXT
        text: Learn more
        w: 86
        h: 23
        fill: "#FFFFFF"
        font_size: 16
        font: Inter Regular
        line_height: 22.40px
        text_align: center
      - node_id: "1:958"
        name: Container
        type: FRAME
        w: 515
        h: 148
      - node_id: "1:960"
        name: Container
        type: FRAME
        w: 515
        h: 72
      - node_id: "1:961"
        name: Create ultra-realistic speech, turn ideas into videos, compose music in any genre, or design immersive sound effects. Craft your next film, ad, audiobook, or podcast with our all-in-one platform.
        type: TEXT
        text: Create ultra-realistic speech, turn ideas into videos, compose
music in any genre, or design immersive sound effects. Craft your
next film, ad, audiobook, or podcast with our all-in-one platform.
        w: 506
        h: 72
        fill: "#000000"
        font_size: 16
        font: Inter Regular
        line_height: 24px
      - node_id: "1:965"
        name: Background
        type: FRAME
        w: 20
        h: 20
        fill: "#FDFCFC"
        radius: 9999
        position: absolute
        x: 123
        y: 1888
        constraints: "h:min, v:min"
      - node_id: "1:967"
        name: Background
        type: FRAME
        w: 20
        h: 20
        fill: "#FDFCFC"
        radius: 9999
        position: absolute
        x: 1297
        y: 1888
        constraints: "h:max, v:min"
      - node_id: "1:969"
        name: Container
        type: FRAME
        w: 1440
        h: 854
      - node_id: "1:970"
        name: Border
        type: FRAME
        w: 1176
        h: 854
        stroke: hsla(0, 0%, 0%, 0.05)
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
      - node_id: "1:972"
        name: Background
        type: FRAME
        w: 563
        h: 568
        fill: "#F5F3F1"
        radius: 20
      - node_id: "1:974"
        name: image
        type: FRAME
        w: 563
        h: 568
        fill: image
        fill_type: IMAGE
        image_hash: 321a51ff2d42a3707d0fe71337ff740f2663f724
      - node_id: "1:977"
        name: Heading 3
        type: FRAME
        w: 507
        h: 22
      - node_id: "1:978"
        name: All-in-one AI editor
        type: TEXT
        text: All-in-one AI editor
        w: 139
        h: 22
        fill: hsla(0, 0%, 100%, 0.80)
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:980"
        name: Container
        type: FRAME
        w: 507
        h: 44
      - node_id: "1:981"
        name: Create podcasts, audiobooks and voiceovers in an editor built on all of ElevenLabs’ audio research combined.
        type: TEXT
        text: Create podcasts, audiobooks and voiceovers in an editor built on all
of ElevenLabs’ audio research combined.
        w: 490
        h: 44
        fill: "#FFFFFF"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:982"
        name: Container
        type: FRAME
        w: 507
        h: 474
      - node_id: "1:983"
        name: Background
        type: FRAME
        w: 535
        h: 426
        fill: "#F5F3F1"
      - node_id: "1:984"
        name: Container
        type: FRAME
        w: 535
        h: 306
      - node_id: "1:985"
        name: Container
        type: FRAME
        w: 375
        h: 306
        padding: "32"
        gap: 16
      - node_id: "1:986"
        name: Container
        type: FRAME
        w: 311
        h: 84
      - node_id: "1:987"
        name: Amidst the outer atmosphere of the planet Aurora, the sky shimmered with fractured light, as though the planet's veil were made of stained glass suspended in space.
        type: TEXT
        text: Amidst the outer atmosphere of the planet
Aurora, the sky shimmered with fractured
light, as though the planet's veil were made
of stained glass suspended in space.
        w: 311
        h: 84
        fill: "#44403B"
        font_size: 14
        font: Inter Regular
        line_height: 21px
      - node_id: "1:988"
        name: Container
        type: FRAME
        w: 311
        h: 42
      - node_id: "1:989"
        name: Sensors pulsed with irregular patterns, the kind no algorithm could quite reconcile.
        type: TEXT
        text: Sensors pulsed with irregular patterns, the
kind no algorithm could quite reconcile.
        w: 311
        h: 42
        fill: "#A6A09B"
        font_size: 14
        font: Inter Regular
        line_height: 21px
      - node_id: "1:990"
        name: VerticalBorder
        type: FRAME
        w: 161
        h: 306
        padding: "40"
        stroke: "#E7E5E4"
        stroke_align: inside
        stroke_sides: "border-left: 1px"
      - node_id: "1:991"
        name: image
        type: FRAME
        w: 120
        h: 226
        fill: image
        fill_type: IMAGE
        image_hash: 01d3fcfdc4331a16c9e862431d4cbba6f3ee6f41
        opacity: 0.10000000149011612
  - chunk_id: anatomy_8
    kind: anatomy
    item_count: 50
    items:
      - node_id: "1:992"
        name: HorizontalBorder
        type: FRAME
        w: 535
        h: 120
        padding: "16"
        gap: 12
        stroke: "#E7E5E4"
        stroke_align: inside
        stroke_sides: "border-top: 1px"
      - node_id: "1:993"
        name: Overlay+Shadow
        type: FRAME
        w: 247
        h: 39
        fill: hsla(0, 0%, 100%, 0)
        radius: 11.5
        padding: "3.5"
        inner_shadow: "0px 0px 0px 1.5px #000000"
      - node_id: "1:995"
        name: image
        type: FRAME
        w: 240
        h: 32
        fill: image
        fill_type: IMAGE
        image_hash: 589c4bc33191e96df209a5b6bbec0d29d47f5ec5
      - node_id: "1:996"
        name: Container
        type: FRAME
        w: 503
        h: 36
        gap: 8
      - node_id: "1:997"
        name: Background+Shadow
        type: FRAME
        w: 320
        h: 36
        fill: "#FFFFFF"
        radius: 8
        shadow: 0px 2px 4px rgba(0,0,0,0.04)
      - node_id: "1:999"
        name: Amidst the outer atmosphere of the planet …
        type: TEXT
        text: Amidst the outer atmosphere of the planet …
        w: 297
        h: 29
        fill: "#79716B"
        font_size: 14
        font: Inter Regular
        line_height: 28.80px
      - node_id: "1:1000"
        name: Background+Shadow
        type: FRAME
        w: 56
        h: 36
        fill: "#FFFFFF"
        radius: 8
        shadow: 0px 2px 4px rgba(0,0,0,0.04)
      - node_id: "1:1003"
        name: Overlay+Shadow
        type: FRAME
        w: 563
        h: 568
        fill: hsla(0, 0%, 100%, 0)
        radius: 20
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.08)
      - node_id: "1:1004"
        name: Background
        type: FRAME
        w: 563
        h: 568
        fill: "#F5F3F1"
        radius: 20
      - node_id: "1:1007"
        name: Heading 3
        type: FRAME
        w: 507
        h: 22
      - node_id: "1:1009"
        name: Ultra-realistic speech
        type: TEXT
        text: Ultra-realistic speech
        w: 158
        h: 22
        fill: "#79716B"
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:1013"
        name: Container
        type: FRAME
        w: 507
        h: 22
      - node_id: "1:1014"
        name: Create controllable, expressive speech layered across 70+ languages.
        type: TEXT
        text: Create controllable, expressive speech layered across 70+ languages.
        w: 506
        h: 22
        fill: "#000000"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:1015"
        name: Container
        type: FRAME
        w: 507
        h: 474
      - node_id: "1:1016"
        name: Container
        type: FRAME
        w: 507
        h: 474
        padding: "115"
      - node_id: "1:1017"
        name: Background+Shadow
        type: FRAME
        w: 507
        h: 208
        fill: "#FFFFFF"
        radius: 24
        inner_shadow: "0px 0px 0px 0.5px #e7e5e4"
      - node_id: "1:1018"
        name: Container
        type: FRAME
        w: 507
        h: 208
      - node_id: "1:1019"
        name: Container
        type: FRAME
        w: 507
        h: 160
      - node_id: "1:1020"
        name: Container
        type: FRAME
        w: 507
        h: 136
      - node_id: "1:1021"
        name: Container
        type: FRAME
        w: 507
        h: 136
        padding: "16"
      - node_id: "1:1022"
        name: "In the ancient land of Eldoria, where skies shimmered and forests, whispered secrets to the wind, lived a dragon named Zephyros. [sarcastically] Not the “burn it all down” kind... [giggles] but he wa…"
        type: TEXT
        text: "In the ancient land of Eldoria, where skies shimmered and 
forests, whispered secrets to the wind, lived a dragon named 
Zephyros. [sarcastically] Not the “burn it all down” kind... 
[giggles] but he was gentle, wise, with eyes like old stars. 
[whispers] Even the birds fell silent when he passed."
        w: 467
        h: 120
        fill: mixed
        fill_segments:
          - text: "In the ancient land of Eldoria, where skies shimmered and 
forests, whispered secrets to the wind, lived a dragon named 
Zephyros. "
            fill: "#000000"
          - text: "[sarcastically]"
            fill: "#A6A09B"
          - text: " Not the “burn it all down” kind... 
"
            fill: "#000000"
          - text: "[giggles]"
            fill: "#A6A09B"
          - text: " but he was gentle, wise, with eyes like old stars. 
"
            fill: "#000000"
          - text: "[whispers]"
            fill: "#A6A09B"
          - text: " Even the birds fell silent when he passed."
            fill: "#000000"
        font_size: 16
        font: Inter Regular
        line_height: 24px
      - node_id: "1:1023"
        name: Textarea - Enter your text here, ElevenLabs AI Voice Generator will read it for you
        type: FRAME
        w: 507
        h: 136
        padding: "16"
        position: absolute
        x: 756
        y: 2401
        constraints: "h:stretch, v:stretch"
      - node_id: "1:1024"
        name: Container
        type: FRAME
        w: 467
        h: 120
      - node_id: "1:1025"
        name: "In the ancient land of Eldoria, where skies shimmered and forests, whispered secrets to the wind, lived a dragon named Zephyros. [sarcastically] Not the “burn it all down” kind... [giggles] but he wa…"
        type: TEXT
        text: "In the ancient land of Eldoria, where skies shimmered and 
forests, whispered secrets to the wind, lived a dragon named 
Zephyros. [sarcastically] Not the “burn it all down” kind... 
[giggles] but he was gentle, wise, with eyes like old stars. 
[whispers] Even the birds fell silent when he passed."
        w: 467
        h: 120
        font_size: 16
        font: Inter Regular
        line_height: 24px
      - node_id: "1:1029"
        name: Margin
        type: FRAME
        w: 507
        h: 24
      - node_id: "1:1033"
        name: Gradient
        type: FRAME
        w: 506
        h: 24
      - node_id: "1:1034"
        name: Container
        type: FRAME
        w: 507
        h: 48
      - node_id: "1:1035"
        name: Container
        type: FRAME
        w: 120
        h: 36
      - node_id: "1:1036"
        name: Button listbox - Language
        type: FRAME
        w: 120
        h: 36
        radius: 12
        gap: 8
      - node_id: "1:1037"
        name: Container
        type: FRAME
        w: 76
        h: 22
      - node_id: "1:1038"
        name: Container
        type: FRAME
        w: 76
        h: 22
        gap: 8
      - node_id: "1:1039"
        name: "us.svg:align-center"
        type: FRAME
        w: 16
        h: 22
      - node_id: "1:1040"
        name: us.svg
        type: FRAME
        w: 16
        h: 16
        fill: "#E7E5E4"
        radius: 9999
      - node_id: "1:1041"
        name: us.svg fill
        type: FRAME
        w: 16
        h: 16
      - node_id: "1:1051"
        name: Container
        type: FRAME
        w: 52
        h: 22
      - node_id: "1:1052"
        name: English
        type: TEXT
        text: English
        w: 52
        h: 22
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 22px
        text_align: center
      - node_id: "1:1055"
        name: Container
        type: FRAME
        w: 105
        h: 36
      - node_id: "1:1056"
        name: Button listbox - Voice
        type: FRAME
        w: 105
        h: 36
        radius: 12
        gap: 8
      - node_id: "1:1057"
        name: Container
        type: FRAME
        w: 61
        h: 22
      - node_id: "1:1058"
        name: Container
        type: FRAME
        w: 61
        h: 22
        gap: 8
      - node_id: "1:1059"
        name: "image:align-center"
        type: FRAME
        w: 16
        h: 22
      - node_id: "1:1060"
        name: image
        type: FRAME
        w: 16
        h: 16
        fill: "#E7E5E4"
        radius: 9999
      - node_id: "1:1061"
        name: Container
        type: FRAME
        w: 37
        h: 22
      - node_id: "1:1062"
        name: Mark
        type: TEXT
        text: Mark
        w: 37
        h: 22
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 22px
        text_align: center
      - node_id: "1:1065"
        name: "Button - Play:margin"
        type: FRAME
        w: 258
        h: 36
      - node_id: "1:1066"
        name: Button - Play
        type: FRAME
        w: 58
        h: 36
        fill: "#000000"
        radius: 9999
      - node_id: "1:1067"
        name: Play
        type: TEXT
        text: Play
        w: 30
        h: 15
        fill: "#FFFFFF"
        font_size: 15
        font: Inter Regular
        line_height: 15px
        text_align: center
      - node_id: "1:1068"
        name: Overlay+Shadow
        type: FRAME
        w: 563
        h: 568
        fill: hsla(0, 0%, 100%, 0)
        radius: 20
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.08)
      - node_id: "1:1069"
        name: Background
        type: FRAME
        w: 274
        h: 270
        fill: "#F5F3F1"
        radius: 20
      - node_id: "1:1070"
        name: Container
        type: FRAME
        w: 274
        h: 270
        padding: "28"
        gap: -5.5
  - chunk_id: anatomy_9
    kind: anatomy
    item_count: 50
    items:
      - node_id: "1:1071"
        name: Margin
        type: FRAME
        w: 40
        h: 104
      - node_id: "1:1072"
        name: Overlay+Shadow
        type: FRAME
        w: 40
        h: 40
        fill: hsla(0, 0%, 100%, 0)
        radius: 10
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.1)
      - node_id: "1:1075"
        name: Heading 3
        type: FRAME
        w: 218
        h: 22
      - node_id: "1:1077"
        name: Music
        type: TEXT
        text: Music
        w: 44
        h: 22
        fill: "#79716B"
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:1081"
        name: Container
        type: FRAME
        w: 218
        h: 88
      - node_id: "1:1082"
        name: Generate studio-quality tracks instantly, any genre, any style, vocals or instrumental.
        type: TEXT
        text: Generate studio-quality
tracks instantly, any genre,
any style, vocals or
instrumental.
        w: 195
        h: 88
        fill: "#000000"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:1083"
        name: Overlay+Shadow
        type: FRAME
        w: 274
        h: 270
        fill: hsla(0, 0%, 100%, 0)
        radius: 20
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.08)
        position: absolute
        x: 149
        y: 2870
        constraints: "h:stretch, v:stretch"
      - node_id: "1:1084"
        name: Background
        type: FRAME
        w: 274
        h: 270
        fill: "#F5F3F1"
        radius: 20
      - node_id: "1:1085"
        name: Container
        type: FRAME
        w: 274
        h: 270
        padding: "28"
      - node_id: "1:1086"
        name: Margin
        type: FRAME
        w: 40
        h: 104
      - node_id: "1:1087"
        name: Overlay+Shadow
        type: FRAME
        w: 40
        h: 40
        fill: hsla(0, 0%, 100%, 0)
        radius: 10
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.1)
      - node_id: "1:1091"
        name: Heading 3
        type: FRAME
        w: 218
        h: 22
      - node_id: "1:1093"
        name: SFX
        type: TEXT
        text: SFX
        w: 30
        h: 22
        fill: "#79716B"
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:1097"
        name: Container
        type: FRAME
        w: 218
        h: 44
      - node_id: "1:1098"
        name: Create custom sound effects and ambient audio.
        type: TEXT
        text: Create custom sound effects
and ambient audio.
        w: 210
        h: 44
        fill: "#000000"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:1099"
        name: Overlay+Shadow
        type: FRAME
        w: 274
        h: 270
        fill: hsla(0, 0%, 100%, 0)
        radius: 20
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.08)
        position: absolute
        x: 439
        y: 2870
        constraints: "h:stretch, v:stretch"
      - node_id: "1:1100"
        name: Background
        type: FRAME
        w: 274
        h: 270
        fill: "#F5F3F1"
        radius: 20
      - node_id: "1:1101"
        name: Container
        type: FRAME
        w: 274
        h: 270
        padding: "28"
        gap: -5.5
      - node_id: "1:1102"
        name: Margin
        type: FRAME
        w: 40
        h: 104
      - node_id: "1:1103"
        name: Overlay+Shadow
        type: FRAME
        w: 40
        h: 40
        fill: hsla(0, 0%, 100%, 0)
        radius: 10
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.1)
      - node_id: "1:1106"
        name: Heading 3
        type: FRAME
        w: 218
        h: 22
      - node_id: "1:1108"
        name: Voices
        type: TEXT
        text: Voices
        w: 49
        h: 22
        fill: "#79716B"
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:1112"
        name: Container
        type: FRAME
        w: 218
        h: 88
      - node_id: "1:1113"
        name: Clone a replica of your own voice, design one from a prompt, or explore 1000s of voices from the library.
        type: TEXT
        text: Clone a replica of your own
voice, design one from a
prompt, or explore 1000s of
voices from the library.
        w: 201
        h: 88
        fill: "#000000"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:1114"
        name: Overlay+Shadow
        type: FRAME
        w: 274
        h: 270
        fill: hsla(0, 0%, 100%, 0)
        radius: 20
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.08)
        position: absolute
        x: 728
        y: 2870
        constraints: "h:stretch, v:stretch"
      - node_id: "1:1115"
        name: Background
        type: FRAME
        w: 274
        h: 270
        fill: "#F5F3F1"
        radius: 20
      - node_id: "1:1116"
        name: Container
        type: FRAME
        w: 274
        h: 270
        padding: "28"
        gap: -5.5
      - node_id: "1:1117"
        name: Margin
        type: FRAME
        w: 40
        h: 104
      - node_id: "1:1118"
        name: Overlay+Shadow
        type: FRAME
        w: 40
        h: 40
        fill: hsla(0, 0%, 100%, 0)
        radius: 10
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.1)
      - node_id: "1:1121"
        name: Heading 3
        type: FRAME
        w: 218
        h: 22
      - node_id: "1:1123"
        name: Image & Video
        type: TEXT
        text: Image & Video
        w: 106
        h: 22
        fill: "#79716B"
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:1127"
        name: Container
        type: FRAME
        w: 218
        h: 88
      - node_id: "1:1128"
        name: Create or edit images and turn ideas into videos with leading models like Veo, Sora, Wan, Kling and Seedance.
        type: TEXT
        text: Create or edit images and
turn ideas into videos with
leading models like Veo, Sora,
Wan, Kling and Seedance.
        w: 216
        h: 88
        fill: "#000000"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:1129"
        name: Overlay+Shadow
        type: FRAME
        w: 274
        h: 270
        fill: hsla(0, 0%, 100%, 0)
        radius: 20
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.08)
        position: absolute
        x: 1018
        y: 2870
        constraints: "h:stretch, v:stretch"
      - node_id: "1:1130"
        name: Container
        type: FRAME
        w: 1440
        h: 124
      - node_id: "1:1131"
        name: Border
        type: FRAME
        w: 1176
        h: 124
        padding: "40"
        stroke: hsla(0, 0%, 0%, 0.05)
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
      - node_id: "1:1132"
        name: Container
        type: FRAME
        w: 1078
        h: 44
        gap: 40
      - node_id: "1:1134"
        name: Tablist
        type: FRAME
        w: 174
        h: 54
        gap: 6
      - node_id: "1:1135"
        name: Tab - Nvidia
        type: FRAME
        w: 54
        h: 54
      - node_id: "1:1139"
        name: nvidia.svg
        type: FRAME
        w: 44
        h: 44
        position: absolute
        x: 181
        y: 3180
        constraints: "h:stretch, v:stretch"
      - node_id: "1:1140"
        name: nvidia.svg fill
        type: FRAME
        w: 44
        h: 44
      - node_id: "1:1143"
        name: Tab - Mozart AI
        type: FRAME
        w: 54
        h: 54
      - node_id: "1:1146"
        name: image
        type: FRAME
        w: 44
        h: 44
        fill: image
        fill_type: IMAGE
        image_hash: eda6edfc783da8fc9bfac17116351ff33deaa345
        position: absolute
        x: 241
        y: 3180
        constraints: "h:stretch, v:stretch"
      - node_id: "1:1147"
        name: Tab - Duolingo
        type: FRAME
        w: 54
        h: 54
      - node_id: "1:1150"
        name: duolingo.svg
        type: FRAME
        w: 44
        h: 44
        position: absolute
        x: 301
        y: 3180
        constraints: "h:stretch, v:stretch"
      - node_id: "1:1151"
        name: duolingo.svg fill
        type: FRAME
        w: 44
        h: 44
      - node_id: "1:1155"
        name: Tabpanel
        type: FRAME
        w: 530
        h: 42
        radius: 4
      - node_id: "1:1158"
        name: Paragraph
        type: FRAME
        w: 531
        h: 45
        gap: 1
      - node_id: "1:1159"
        name: Nvidia
        type: TEXT
        text: Nvidia
        w: 46
        h: 22
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:1160"
        name: Using synthetic voice technology to power multilingual marketing content
        type: TEXT
        text: Using synthetic voice technology to power multilingual marketing content
        w: 531
        h: 22
        fill: "#79716B"
        font_size: 15
        font: Inter Regular
        line_height: 22px
  - chunk_id: anatomy_10
    kind: anatomy
    item_count: 50
    items:
      - node_id: "1:1161"
        name: Container
        type: FRAME
        w: 533
        h: 42
        radius: 4
      - node_id: "1:1164"
        name: Container
        type: FRAME
        w: 531
        h: 45
        gap: 1
      - node_id: "1:1165"
        name: Link
        type: FRAME
        w: 87
        h: 22
        radius: 2
      - node_id: "1:1166"
        name: Mozart AI
        type: TEXT
        text: Mozart AI
        w: 71
        h: 22
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:1169"
        name: Delivering AI music creation and low-latency streaming with Eleven Music
        type: TEXT
        text: Delivering AI music creation and low-latency streaming with Eleven Music
        w: 531
        h: 22
        fill: "#79716B"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:1170"
        name: Container
        type: FRAME
        w: 318
        h: 42
        radius: 4
      - node_id: "1:1173"
        name: Paragraph
        type: FRAME
        w: 317
        h: 45
        gap: 1
      - node_id: "1:1174"
        name: Duolingo
        type: TEXT
        text: Duolingo
        w: 65
        h: 22
        fill: "#000000"
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:1175"
        name: Character voices for learning and marketing
        type: TEXT
        text: Character voices for learning and marketing
        w: 317
        h: 22
        fill: "#79716B"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:1177"
        name: Container
        type: FRAME
        w: 127
        h: 48
      - node_id: "1:1178"
        name: Link
        type: FRAME
        w: 127
        h: 48
        fill: "#FFFFFF"
        radius: 9999
        shadow: 0px 2px 4px rgba(0,0,0,0.04)
      - node_id: "1:1179"
        name: Get started
        type: TEXT
        text: Get started
        w: 87
        h: 23
        fill: "#000000"
        font_size: 16
        font: Inter Regular
        line_height: 22.40px
        text_align: center
      - node_id: "1:1180"
        name: Container
        type: FRAME
        w: 1440
        h: 388
      - node_id: "1:1181"
        name: Border
        type: FRAME
        w: 1176
        h: 388
        gap: 154
        stroke: hsla(0, 0%, 0%, 0.05)
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
      - node_id: "1:1183"
        name: Container
        type: FRAME
        w: 1078
        h: 193
        gap: 15.5
      - node_id: "1:1184"
        name: Container
        type: FRAME
        w: 1078
        h: 22
      - node_id: "1:1185"
        name: Agents Platform
        type: TEXT
        text: Agents Platform
        w: 1078
        h: 22
        fill: "#79716B"
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:1186"
        name: Container
        type: FRAME
        w: 1078
        h: 156
        gap: 48
      - node_id: "1:1187"
        name: Container
        type: FRAME
        w: 515
        h: 156
        gap: 23.5
      - node_id: "1:1188"
        name: Heading 2
        type: FRAME
        w: 515
        h: 84
      - node_id: "1:1189"
        name: Deploy agents that talk, type, and take action
        type: TEXT
        text: Deploy agents that talk,
type, and take action
        w: 515
        h: 84
        fill: "#000000"
        font_size: 35.400001525878906
        font: Inter Light
        line_height: 42px
      - node_id: "1:1190"
        name: Container
        type: FRAME
        w: 515
        h: 48
      - node_id: "1:1191"
        name: Link
        type: FRAME
        w: 126
        h: 48
        fill: "#000000"
        radius: 9999
      - node_id: "1:1192"
        name: Learn more
        type: TEXT
        text: Learn more
        w: 86
        h: 23
        fill: "#FFFFFF"
        font_size: 16
        font: Inter Regular
        line_height: 22.40px
        text_align: center
      - node_id: "1:1193"
        name: Container
        type: FRAME
        w: 515
        h: 148
      - node_id: "1:1195"
        name: Container
        type: FRAME
        w: 515
        h: 72
      - node_id: "1:1196"
        name: Configure, deploy and monitor natural, human-sounding agents in 32 languages with leading accuracy and ultra-low latency across voice or chat.
        type: TEXT
        text: Configure, deploy and monitor natural, human-sounding agents in
32 languages with leading accuracy and ultra-low latency across
voice or chat.
        w: 507
        h: 72
        fill: "#000000"
        font_size: 16
        font: Inter Regular
        line_height: 24px
      - node_id: "1:1200"
        name: Background
        type: FRAME
        w: 20
        h: 20
        fill: "#FDFCFC"
        radius: 9999
        position: absolute
        x: 123
        y: 3254
        constraints: "h:min, v:min"
      - node_id: "1:1202"
        name: Background
        type: FRAME
        w: 20
        h: 20
        fill: "#FDFCFC"
        radius: 9999
        position: absolute
        x: 1297
        y: 3254
        constraints: "h:max, v:min"
      - node_id: "1:1204"
        name: Container
        type: FRAME
        w: 1440
        h: 832
      - node_id: "1:1205"
        name: Border
        type: FRAME
        w: 1176
        h: 832
        stroke: hsla(0, 0%, 0%, 0.05)
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
      - node_id: "1:1207"
        name: Background
        type: FRAME
        w: 563
        h: 568
        fill: "#F5F3F1"
        radius: 20
      - node_id: "1:1209"
        name: image
        type: FRAME
        w: 563
        h: 568
        fill: image
        fill_type: IMAGE
        image_hash: 4a379b146a038453d8a57ed6707e391138c89613
      - node_id: "1:1212"
        name: Heading 3
        type: FRAME
        w: 507
        h: 22
      - node_id: "1:1213"
        name: Omnichannel agents
        type: TEXT
        text: Omnichannel agents
        w: 150
        h: 22
        fill: hsla(0, 0%, 100%, 0.80)
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:1215"
        name: Container
        type: FRAME
        w: 507
        h: 44
      - node_id: "1:1216"
        name: Agents listen, read and interact just like humans would across phone, chat, email and WhatsApp.
        type: TEXT
        text: Agents listen, read and interact just like humans would across phone,
chat, email and WhatsApp.
        w: 500
        h: 44
        fill: "#FFFFFF"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:1217"
        name: Container
        type: FRAME
        w: 507
        h: 474
      - node_id: "1:1218"
        name: Container
        type: FRAME
        w: 507
        h: 474
        padding: "96"
      - node_id: "1:1220"
        name: Overlay+Shadow
        type: FRAME
        w: 155
        h: 40
        fill: hsla(0, 0%, 100%, 0)
        radius: 9999
        padding: "10"
        inner_shadow: 0px 0px 0px 1px rgba(255,255,255,0.6)
      - node_id: "1:1221"
        name: Can I get a refund?
        type: TEXT
        text: Can I get a refund?
        w: 127
        h: 20
        fill: "#FFFFFF"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:1222"
        name: Background+Shadow
        type: FRAME
        w: 239
        h: 60
        fill: "#FFFFFF"
        radius: 20
        padding: "10"
        shadow: 0px 1.6770000457763672px 3.3540000915527344px rgba(0,0,0,0.04)
      - node_id: "1:1223"
        name: Sure. Can you share your order number please?
        type: TEXT
        text: Sure. Can you share your order
number please?
        w: 206
        h: 40
        fill: "#000000"
        font_size: 14
        font: Inter Regular
        line_height: 20px
      - node_id: "1:1224"
        name: Overlay+Shadow
        type: FRAME
        w: 131
        h: 40
        fill: hsla(0, 0%, 100%, 0)
        radius: 9999
        padding: "10"
        inner_shadow: 0px 0px 0px 1px rgba(255,255,255,0.6)
      - node_id: "1:1225"
        name: It's EL4543490
        type: TEXT
        text: It's EL4543490
        w: 103
        h: 20
        fill: "#FFFFFF"
        font_size: 14
        font: Inter Medium
        line_height: 20px
      - node_id: "1:1226"
        name: Container
        type: FRAME
        w: 288
        h: 20
      - node_id: "1:1227"
        name: Container
        type: FRAME
        w: 288
        h: 108
        gap: 8
        position: absolute
        x: 287
        y: 3912
        constraints: "h:stretch, v:min"
      - node_id: "1:1228"
        name: Background+Shadow
        type: FRAME
        w: 240
        h: 60
        fill: "#FFFFFF"
        radius: 20
        padding: "10"
        shadow: 0px 1.6770000457763672px 3.3540000915527344px rgba(0,0,0,0.04)
      - node_id: "1:1229"
        name: Thank you. I have initiated the order refund process.
        type: TEXT
        text: Thank you. I have initiated the
order refund process.
        w: 199
        h: 40
        fill: "#000000"
        font_size: 14
        font: Inter Regular
        line_height: 20px
      - node_id: "1:1230"
        name: Background+Shadow
        type: FRAME
        w: 176
        h: 40
        fill: "#FFFFFF"
        radius: 20
        shadow: 0px 1.6770000457763672px 3.3540000915527344px rgba(0,0,0,0.04)
  - chunk_id: anatomy_11
    kind: anatomy
    item_count: 50
    items:
      - node_id: "1:1231"
        name: Container
        type: FRAME
        w: 40
        h: 40
      - node_id: "1:1235"
        name: Margin
        type: FRAME
        w: 136
        h: 20
      - node_id: "1:1236"
        name: Refund completed
        type: TEXT
        text: Refund completed
        w: 122
        h: 20
        fill: "#000000"
        font_size: 14
        font: Inter Regular
        line_height: 20px
      - node_id: "1:1238"
        name: Background+Shadow
        type: FRAME
        w: 28
        h: 20
        fill: "#FFFFFF"
        radius: 20
        shadow: 0px 1.6770000457763672px 3.3540000915527344px rgba(0,0,0,0.04)
      - node_id: "1:1239"
        name: Background+Shadow
        type: FRAME
        w: 40
        h: 40
        fill: "#FFFFFF"
        radius: 20
        shadow: 0px 1.6770000457763672px 3.3540000915527344px rgba(0,0,0,0.04)
        opacity: 0
      - node_id: "1:1240"
        name: Container
        type: FRAME
        w: 40
        h: 40
      - node_id: "1:1245"
        name: Overlay+Shadow
        type: FRAME
        w: 563
        h: 568
        fill: hsla(0, 0%, 100%, 0)
        radius: 20
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.08)
      - node_id: "1:1246"
        name: Background
        type: FRAME
        w: 563
        h: 568
        fill: "#F5F3F1"
        radius: 20
      - node_id: "1:1248"
        name: Heading 3
        type: FRAME
        w: 507
        h: 22
      - node_id: "1:1249"
        name: Analytics
        type: TEXT
        text: Analytics
        w: 68
        h: 22
        fill: "#79716B"
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:1251"
        name: Container
        type: FRAME
        w: 507
        h: 44
      - node_id: "1:1252"
        name: Easily measure success rates and CX metrics, optimizing flows over time.
        type: TEXT
        text: Easily measure success rates and CX metrics, optimizing flows
over time.
        w: 453
        h: 44
        fill: "#000000"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:1253"
        name: Container
        type: FRAME
        w: 507
        h: 474
      - node_id: "1:1254"
        name: Container
        type: FRAME
        w: 507
        h: 474
      - node_id: "1:1255"
        name: Background+Shadow
        type: FRAME
        w: 507
        h: 286
        fill: "#FFFFFF"
        radius: 20
        padding: "16"
        gap: 4
        shadow: 0px 1.649999976158142px 3.299999952316284px rgba(0,0,0,0.04)
      - node_id: "1:1256"
        name: Container
        type: FRAME
        w: 475
        h: 16
      - node_id: "1:1257"
        name: Success rate
        type: TEXT
        text: Success rate
        w: 475
        h: 16
        fill: "#0C0A09"
        font_size: 12
        font: Inter Medium
        line_height: 16px
      - node_id: "1:1258"
        name: Container
        type: FRAME
        w: 475
        h: 20
      - node_id: "1:1259"
        name: 61.5%
        type: TEXT
        text: 61.5%
        w: 475
        h: 20
        fill: "#79716B"
        font_size: 15
        font: Inter Medium
        line_height: 20px
      - node_id: "1:1262"
        name: Container
        type: FRAME
        w: 27
        h: 180
      - node_id: "1:1263"
        name: Container
        type: FRAME
        w: 27
        h: 16
      - node_id: "1:1264"
        name: 100%
        type: TEXT
        text: 100%
        w: 27
        h: 16
        fill: "#79716B"
        font_size: 10
        font: Inter Regular
        line_height: 16px
      - node_id: "1:1265"
        name: Margin
        type: FRAME
        w: 27
        h: 148
        padding: "66"
      - node_id: "1:1266"
        name: Container
        type: FRAME
        w: 27
        h: 16
      - node_id: "1:1267"
        name: 50%
        type: TEXT
        text: 50%
        w: 27
        h: 16
        fill: "#79716B"
        font_size: 10
        font: Inter Regular
        line_height: 16px
      - node_id: "1:1268"
        name: Container
        type: FRAME
        w: 27
        h: 16
      - node_id: "1:1269"
        name: 0%
        type: TEXT
        text: 0%
        w: 27
        h: 16
        fill: "#79716B"
        font_size: 10
        font: Inter Regular
        line_height: 16px
      - node_id: "1:1270"
        name: Container
        type: FRAME
        w: 442
        h: 16
        gap: 376.8299865722656
      - node_id: "1:1271"
        name: Container
        type: FRAME
        w: 32
        h: 16
      - node_id: "1:1272"
        name: 17 Aug
        type: TEXT
        text: 17 Aug
        w: 32
        h: 16
        fill: "#79716B"
        font_size: 10
        font: Inter Regular
        line_height: 16px
      - node_id: "1:1273"
        name: Container
        type: FRAME
        w: 34
        h: 16
      - node_id: "1:1274"
        name: 24 Aug
        type: TEXT
        text: 24 Aug
        w: 34
        h: 16
        fill: "#79716B"
        font_size: 10
        font: Inter Regular
        line_height: 16px
      - node_id: "1:1292"
        name: Background+Shadow
        type: FRAME
        w: 70
        h: 44
        fill: "#FFFFFF"
        radius: 8
        padding: "8"
        gap: 4
        shadow: 0px 1.649999976158142px 3.299999952316284px rgba(0,0,0,0.04)
      - node_id: "1:1293"
        name: Container
        type: FRAME
        w: 50
        h: 12
        gap: 4
      - node_id: "1:1295"
        name: Container
        type: FRAME
        w: 40
        h: 12
      - node_id: "1:1296"
        name: 87.37%
        type: TEXT
        text: 87.37%
        w: 40
        h: 12
        fill: "#000000"
        font_size: 12
        font: Inter Regular
        line_height: 12px
      - node_id: "1:1297"
        name: Container
        type: FRAME
        w: 50
        h: 12
        gap: 4
      - node_id: "1:1299"
        name: Container
        type: FRAME
        w: 38
        h: 12
      - node_id: "1:1300"
        name: 61.71%
        type: TEXT
        text: 61.71%
        w: 38
        h: 12
        fill: "#000000"
        font_size: 12
        font: Inter Regular
        line_height: 12px
      - node_id: "1:1301"
        name: Overlay+Shadow
        type: FRAME
        w: 563
        h: 568
        fill: hsla(0, 0%, 100%, 0)
        radius: 20
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.08)
      - node_id: "1:1302"
        name: Background
        type: FRAME
        w: 370
        h: 248
        fill: "#F5F3F1"
        radius: 20
      - node_id: "1:1303"
        name: Container
        type: FRAME
        w: 370
        h: 248
        padding: "28"
      - node_id: "1:1304"
        name: Margin
        type: FRAME
        w: 40
        h: 104
      - node_id: "1:1305"
        name: Overlay+Shadow
        type: FRAME
        w: 40
        h: 40
        fill: hsla(0, 0%, 100%, 0)
        radius: 10
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.1)
      - node_id: "1:1309"
        name: Heading 3
        type: FRAME
        w: 314
        h: 22
      - node_id: "1:1310"
        name: Testing
        type: TEXT
        text: Testing
        w: 54
        h: 22
        fill: "#79716B"
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:1312"
        name: Container
        type: FRAME
        w: 314
        h: 44
      - node_id: "1:1313"
        name: Simulate real-world conversations to validate agents behave as expected.
        type: TEXT
        text: Simulate real-world conversations to
validate agents behave as expected.
        w: 265
        h: 44
        fill: "#000000"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:1314"
        name: Overlay+Shadow
        type: FRAME
        w: 370
        h: 248
        fill: hsla(0, 0%, 100%, 0)
        radius: 20
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.08)
        position: absolute
        x: 149
        y: 4236
        constraints: "h:stretch, v:stretch"
      - node_id: "1:1315"
        name: Background
        type: FRAME
        w: 370
        h: 248
        fill: "#F5F3F1"
        radius: 20
  - chunk_id: anatomy_12
    kind: anatomy
    item_count: 50
    items:
      - node_id: "1:1317"
        name: Margin
        type: FRAME
        w: 40
        h: 104
      - node_id: "1:1318"
        name: Overlay+Shadow
        type: FRAME
        w: 40
        h: 40
        fill: hsla(0, 0%, 100%, 0)
        radius: 10
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.1)
      - node_id: "1:1321"
        name: Heading 3
        type: FRAME
        w: 314
        h: 22
      - node_id: "1:1322"
        name: Guardrails
        type: TEXT
        text: Guardrails
        w: 75
        h: 22
        fill: "#79716B"
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:1324"
        name: Container
        type: FRAME
        w: 314
        h: 66
      - node_id: "1:1325"
        name: Establish clear behavioral and compliance rules that keep agent responses aligned with policy.
        type: TEXT
        text: Establish clear behavioral and compliance
rules that keep agent responses aligned
with policy.
        w: 303
        h: 66
        fill: "#000000"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:1326"
        name: Overlay+Shadow
        type: FRAME
        w: 370
        h: 248
        fill: hsla(0, 0%, 100%, 0)
        radius: 20
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.08)
      - node_id: "1:1327"
        name: Background
        type: FRAME
        w: 370
        h: 248
        fill: "#F5F3F1"
        radius: 20
      - node_id: "1:1329"
        name: Margin
        type: FRAME
        w: 40
        h: 104
      - node_id: "1:1330"
        name: Overlay+Shadow
        type: FRAME
        w: 40
        h: 40
        fill: hsla(0, 0%, 100%, 0)
        radius: 10
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.1)
      - node_id: "1:1336"
        name: Heading 3
        type: FRAME
        w: 314
        h: 22
      - node_id: "1:1337"
        name: Workflows
        type: TEXT
        text: Workflows
        w: 77
        h: 22
        fill: "#79716B"
        font_size: 15
        font: Inter Medium
        line_height: 22px
      - node_id: "1:1339"
        name: Container
        type: FRAME
        w: 314
        h: 66
      - node_id: "1:1340"
        name: Handle complex conversation flows, apply business logic and connect securely to systems.
        type: TEXT
        text: Handle complex conversation flows, apply
business logic and connect securely
to systems.
        w: 305
        h: 66
        fill: "#000000"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:1341"
        name: Overlay+Shadow
        type: FRAME
        w: 370
        h: 248
        fill: hsla(0, 0%, 100%, 0)
        radius: 20
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.08)
      - node_id: "1:1833"
        name: Container
        type: FRAME
        w: 1440
        h: 227
      - node_id: "1:1834"
        name: Border
        type: FRAME
        w: 1176
        h: 227
        gap: 160
        stroke: hsla(0, 0%, 0%, 0.05)
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
      - node_id: "1:1838"
        name: Container
        type: FRAME
        w: 1078
        h: 26
        padding: "1"
        gap: 48
      - node_id: "1:1839"
        name: Container
        type: FRAME
        w: 515
        h: 42
      - node_id: "1:1840"
        name: Heading 2
        type: FRAME
        w: 515
        h: 42
      - node_id: "1:1841"
        name: Safety, built in
        type: TEXT
        text: Safety, built in
        w: 515
        h: 42
        fill: "#000000"
        font_size: 35
        font: Inter Light
        line_height: 42px
      - node_id: "1:1843"
        name: Container
        type: FRAME
        w: 126
        h: 48
      - node_id: "1:1844"
        name: Link
        type: FRAME
        w: 126
        h: 48
        fill: "#FFFFFF"
        radius: 9999
        shadow: 0px 2px 4px rgba(0,0,0,0.04)
      - node_id: "1:1845"
        name: Learn more
        type: TEXT
        text: Learn more
        w: 86
        h: 23
        fill: "#000000"
        font_size: 16
        font: Inter Regular
        line_height: 22.40px
        text_align: center
      - node_id: "1:1846"
        name: Background
        type: FRAME
        w: 20
        h: 20
        fill: "#FDFCFC"
        radius: 9999
        position: absolute
        x: 123
        y: 4474
        constraints: "h:min, v:min"
      - node_id: "1:1848"
        name: Background
        type: FRAME
        w: 20
        h: 20
        fill: "#FDFCFC"
        radius: 9999
        position: absolute
        x: 1297
        y: 4474
        constraints: "h:max, v:min"
      - node_id: "1:1850"
        name: Container
        type: FRAME
        w: 1440
        h: 450
      - node_id: "1:1851"
        name: Border
        type: FRAME
        w: 1176
        h: 450
        stroke: hsla(0, 0%, 0%, 0.05)
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
      - node_id: "1:1852"
        name: List
        type: FRAME
        w: 1174
        h: 486
        padding: "16"
        gap: 16
      - node_id: "1:1853"
        name: Item
        type: FRAME
        w: 370
        h: 450
      - node_id: "1:1854"
        name: Background
        type: FRAME
        w: 370
        h: 450
        fill: "#F5F3F1"
        radius: 20
      - node_id: "1:1856"
        name: "Img - Moderation:margin"
        type: FRAME
        w: 314
        h: 322
        padding: "48"
      - node_id: "1:1857"
        name: Moderation
        type: FRAME
        w: 203
        h: 202
      - node_id: "1:1858"
        name: safety-moderation.svg fill
        type: FRAME
        w: 203
        h: 202
      - node_id: "1:1862"
        name: Heading 3
        type: FRAME
        w: 314
        h: 26
      - node_id: "1:1863"
        name: Moderation
        type: TEXT
        text: Moderation
        w: 99
        h: 26
        fill: "#000000"
        font_size: 18
        font: Inter Regular
        line_height: 26px
      - node_id: "1:1865"
        name: Container
        type: FRAME
        w: 314
        h: 44
      - node_id: "1:1866"
        name: We actively monitor content generated with our technology.
        type: TEXT
        text: We actively monitor content generated
with our technology.
        w: 281
        h: 44
        fill: "#79716B"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:1867"
        name: Overlay+Shadow
        type: FRAME
        w: 370
        h: 450
        fill: hsla(0, 0%, 100%, 0)
        radius: 20
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.08)
      - node_id: "1:1868"
        name: Item
        type: FRAME
        w: 370
        h: 450
      - node_id: "1:1869"
        name: Background
        type: FRAME
        w: 370
        h: 450
        fill: "#F5F3F1"
        radius: 20
      - node_id: "1:1871"
        name: "Img - Accountability:margin"
        type: FRAME
        w: 314
        h: 322
        padding: "48"
      - node_id: "1:1872"
        name: Accountability
        type: FRAME
        w: 202
        h: 202
      - node_id: "1:1873"
        name: safety-accountability.svg fill
        type: FRAME
        w: 202
        h: 202
      - node_id: "1:1879"
        name: Heading 3
        type: FRAME
        w: 314
        h: 26
      - node_id: "1:1880"
        name: Accountability
        type: TEXT
        text: Accountability
        w: 124
        h: 26
        fill: "#000000"
        font_size: 18
        font: Inter Regular
        line_height: 26px
      - node_id: "1:1882"
        name: Container
        type: FRAME
        w: 314
        h: 44
      - node_id: "1:1883"
        name: We believe misuse must have consequences.
        type: TEXT
        text: We believe misuse must have
consequences.
        w: 212
        h: 44
        fill: "#79716B"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:1884"
        name: Overlay+Shadow
        type: FRAME
        w: 370
        h: 450
        fill: hsla(0, 0%, 100%, 0)
        radius: 20
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.08)
      - node_id: "1:1885"
        name: Item
        type: FRAME
        w: 370
        h: 450
  - chunk_id: anatomy_13
    kind: anatomy
    item_count: 25
    items:
      - node_id: "1:1886"
        name: Background
        type: FRAME
        w: 370
        h: 450
        fill: "#F5F3F1"
        radius: 20
      - node_id: "1:1888"
        name: "Img - Provenance:margin"
        type: FRAME
        w: 314
        h: 322
        padding: "48"
      - node_id: "1:1889"
        name: Provenance
        type: FRAME
        w: 202
        h: 202
      - node_id: "1:1890"
        name: safety-provenance.svg fill
        type: FRAME
        w: 202
        h: 202
      - node_id: "1:1899"
        name: Heading 3
        type: FRAME
        w: 314
        h: 26
      - node_id: "1:1900"
        name: Provenance
        type: TEXT
        text: Provenance
        w: 102
        h: 26
        fill: "#000000"
        font_size: 18
        font: Inter Regular
        line_height: 26px
      - node_id: "1:1902"
        name: Container
        type: FRAME
        w: 314
        h: 44
      - node_id: "1:1903"
        name: We believe that you should know if audio is AI-generated.
        type: TEXT
        text: We believe that you should know if audio is
AI-generated.
        w: 312
        h: 44
        fill: "#79716B"
        font_size: 15
        font: Inter Regular
        line_height: 22px
      - node_id: "1:1904"
        name: Overlay+Shadow
        type: FRAME
        w: 370
        h: 450
        fill: hsla(0, 0%, 100%, 0)
        radius: 20
        inner_shadow: 0px 0px 0px 0.5px rgba(0,0,0,0.08)
      - node_id: "1:1936"
        name: Background
        type: FRAME
        w: 1440
        h: 213
        fill: "#FDFCFC"
      - node_id: "1:1937"
        name: Background+Border
        type: FRAME
        w: 1439
        h: 194
        fill: "#FDFCFC"
        stroke: hsla(0, 0%, 0%, 0.05)
        stroke_align: inside
        stroke_sides: "border-top: 1px, border-bottom: 1px"
      - node_id: "1:1938"
        name: Border
        type: FRAME
        w: 1176
        h: 192
        padding: "72"
        gap: 64
        stroke: hsla(0, 0%, 0%, 0.05)
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
      - node_id: "1:1939"
        name: Margin
        type: FRAME
        w: 833
        h: 48
        padding: "6"
      - node_id: "1:1940"
        name: Container
        type: FRAME
        w: 833
        h: 36
      - node_id: "1:1941"
        name: The most realistic voice AI platform
        type: TEXT
        text: The most realistic voice AI platform
        w: 833
        h: 36
        fill: "#000000"
        font_size: 31.600000381469727
        font: Inter Light
        line_height: 36px
      - node_id: "1:1942"
        name: Container
        type: FRAME
        w: 181
        h: 48
        gap: 7.989999771118164
      - node_id: "1:1945"
        name: Link
        type: FRAME
        w: 181
        h: 48
        fill: "#000000"
        radius: 9999
      - node_id: "1:1946"
        name: Create an AI agent
        type: TEXT
        text: Create an AI agent
        w: 141
        h: 23
        fill: "#FFFFFF"
        font_size: 16
        font: Inter Regular
        line_height: 22.40px
        text_align: center
      - node_id: "1:1947"
        name: Background
        type: FRAME
        w: 20
        h: 20
        fill: "#FDFCFC"
        radius: 9999
        position: absolute
        x: 123
        y: 5160
        constraints: "h:min, v:min"
      - node_id: "1:1949"
        name: Background
        type: FRAME
        w: 20
        h: 20
        fill: "#FDFCFC"
        radius: 9999
        position: absolute
        x: 1297
        y: 5160
        constraints: "h:max, v:min"
      - node_id: "1:1951"
        name: Background
        type: FRAME
        w: 20
        h: 20
        fill: "#FDFCFC"
        radius: 9999
        position: absolute
        x: 123
        y: 5352
        constraints: "h:min, v:max"
      - node_id: "1:1953"
        name: Background
        type: FRAME
        w: 20
        h: 20
        fill: "#FDFCFC"
        radius: 9999
        position: absolute
        x: 1297
        y: 5352
        constraints: "h:max, v:max"
      - node_id: "1:2212"
        name: Link
        type: FRAME
        w: 147
        h: 40
        fill: "#000000"
        radius: 9999
        position: absolute
        x: -99999
        y: 20
        constraints: "h:min, v:min"
      - node_id: "1:2213"
        name: Skip to content
        type: TEXT
        text: Skip to content
        w: 115
        h: 23
        fill: "#FFFFFF"
        font_size: 16
        font: Inter Regular
        line_height: 22.40px
        text_align: center
      - node_id: "1:12"
        name: SVG
        type: FRAME
        w: 117
        h: 15
        direction: row
        justify: flex-start
        align: flex-start
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
```

<!-- chars: 133439 -->