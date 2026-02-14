# Figma Community Plugin Listing

> Reference document for the Figma Community listing of **Figma Specs**.
> Copy each section into the corresponding field when publishing or updating the plugin.

---

## Plugin Name

```
Specs - Prompt for Design to Code for Claude Code & Codex
```

## Tagline

```
Generate compact, agent-ready specs from selected Figma UI for Claude Code, OpenAI Codex, and other AI coding agents.
```

## Category

```
Software development
```

## Tags (max 5, each ≤ 25 chars)

```
design-to-code
ai-agent
claude-code
codex
specs
```

---

## Description

Plain text description ready to paste into Figma Community's description field.

---

What is Figma Specs?

Figma Specs is an open-source plugin that converts any selected frame, component, or instance into two outputs:

- Visual spec frames placed directly on the canvas for human review.
- Compact structured YAML optimized for AI coding agents like Claude Code, OpenAI Codex, Cursor, and similar tools.

The goal is simple: give your coding agent a clean, token-efficient brief instead of a noisy wall of raw layer data.


Why use it?

Design handoff to AI agents typically sends too much raw context. That inflates token usage, increases retries, and slows down delivery.

Teams using Figma Specs commonly report moving from 80k+ tokens of raw handoff data down to roughly ~20k tokens of structured specs, depending on screen complexity. Less noise means fewer retries, lower cost, and faster builds.


What does the plugin generate?

- Anatomy — full tree of elements, nesting, and relationships.
- Layout — auto-layout direction, spacing, alignment, sizing modes.
- Properties & Variants — variant dimensions, component properties, and behavior deltas.
- Inventory — colors, typography, effects used across the selection.
- Variables / Tokens — resolved Figma variables and design token values.
- Agent Payload — chunked YAML with resolved_tokens, repeat dedup, and compact schema.
- Agent Rules Snippet — ready-to-paste instructions for CLAUDE.md or AGENTS.md files.


How it works

1. Select a frame, component, or instance in Figma.
2. Run the plugin and choose your output sections (anatomy, layout, properties, data, etc.).
3. Generate — the plugin creates annotated spec frames on your canvas and prepares agent-ready YAML.
4. Copy AI Specs — one click copies the structured YAML payload with implementation instructions, anatomy tree, and resolved tokens.
5. Paste into your coding agent prompt (Claude Code, Codex, Cursor, etc.) and build.


Key features

- Token-efficient output — compact YAML schema (v11 through v14) with progressive optimizations that keep payloads small.
- Instance dedup — fingerprints repeated instances and stores only the template plus meaningful diffs, avoiding duplicate noise.
- Resolved tokens — maps design token names to actual values (hex colors, font names) so agents don't need to look them up.
- Framework-aware instructions — select your target framework (React, Next.js, Flutter, Vue, Svelte, React Native, HTML/CSS) and the generated prompt includes framework-specific build guidance.
- Visual QA step — generated instructions include a pixel-comparison QA step with specific dimensions so agents self-verify against the design.
- Complexity-aware limits — automatically adjusts anatomy, layout, and data caps based on selection complexity (standard / large / enterprise tiers).
- Artwork preview — renders a visual preview of the selected component directly in the spec frame, with auto-scale fallback for large screens.
- Side-by-side anatomy + layout — anatomy and layout sections render next to each other for easier review.
- Multi-column layout — optionally generate specs in 2-4 column grids for wide components.
- Schema versions — choose from v11 (verbose) to v14 (most compact, omits CSS defaults) depending on your token budget.


Supported frameworks

The Copy AI Specs output includes framework-specific implementation instructions for:

- Next.js
- React
- Flutter
- Vue
- Svelte
- React Native
- HTML/CSS
- Auto-detect (reads package.json)


Who is this for?

Designers and developers working together with AI coding tools — Claude Code, OpenAI Codex, Cursor, Windsurf, and similar AI-assisted development workflows.


Setup

1. Install the plugin from Figma Community.
2. Select any frame, component, or instance.
3. Open the plugin and pick your sections.
4. Click Generate to create canvas specs, or Copy AI Specs to copy the agent-ready YAML.
5. Optionally, go to the Learn tab to copy a CLAUDE.md / AGENTS.md rules snippet into your project so your coding agent knows how to consume specs output.

No migration or design system setup required. Works with any existing Figma file.


Privacy & data

- The plugin runs entirely within Figma's sandbox.
- No network access — the manifest explicitly sets allowedDomains: ["none"].
- No data leaves your Figma file. No third-party accounts or services required.
- Open source — inspect the full implementation at the GitHub repo linked below.


Open source

The full source code, tests (289+ unit tests), and architecture docs are available on GitHub. Every claim is auditable.


Links

- GitHub: https://github.com/antivirusakash/figma-ui-specs-generator
- Website: https://figma-specs.dev
- Created by Akash Solanki — https://www.linkedin.com/in/antivirusakash/

### Changelog

_Update this section each time you publish a new version._

**v14 (Latest)**
- CSS default omission — omits `justify: flex-start`, `align: flex-start`, `direction: row` from anatomy records for smaller payloads.
- Anatomy dedup improvements — template + repeat instance nodes excluded from anatomy chunks across all schema versions.
- `template_attributes` field on repeat chunks embeds template layout/style attributes without duplicating full anatomy entries.
- Width dedup and padding zero filter applied to all versions.

**v13**
- Component Blueprint schema — defines component structure once, stores only diffs per variant.
- `component_definition` chunk kind with properties schema and variant diffs.

**v12**
- Compact YAML optimizations — indexed repeat diffs, path field removal, anatomy/repeat node dedup, width cascade dedup.

**v11**
- Spec output quality fixes — inferred layout alignment, text_align, CSS-native shadow colors, CSS border-side strokes.
- Mixed fill segments, deeper repeat diffs, framework-aware specs.

---

## Icon

```
128 x 128 px
```

## Thumbnail / Cover Image

```
1920 x 1080 px
```

## Supporting Images (up to 10, each 1920x1080)

Suggested shots:

1. Plugin panel open on a selected component (Generate tab)
2. Generated spec frames on canvas — anatomy section
3. Generated spec frames on canvas — layout section
4. Copy AI Specs result with YAML preview
5. Learn tab showing CLAUDE.md snippet
6. Before/after token comparison (80k vs ~20k)
7. Side-by-side anatomy + layout view
8. Multi-column spec output
9. Framework selector dropdown
10. Agent workflow: Figma > Specs > Claude Code > shipped UI

---

## Pre-publish Checklist

Based on [Figma Plugin Review Guidelines](https://help.figma.com/hc/en-us/articles/360039958914-Plugin-and-widget-review-guidelines) and [Community Growth Tips](https://help.figma.com/hc/en-us/articles/22166943560983-Grow-your-audience-on-Community):

- [ ] Description accurately reflects all plugin functionality
- [ ] No hidden features — everything is described upfront
- [ ] No third-party account required (documented in Privacy section)
- [ ] No network access (manifest: `allowedDomains: ["none"]`)
- [ ] Screenshots show real plugin UI and output, not mockups
- [ ] Tags are relevant and within 25-character limit
- [ ] Changelog updated for latest version
- [ ] Support contact / GitHub issues link included
- [ ] Icon is 128x128, thumbnail is 1920x1080
- [ ] Description uses headings and bullet points for scannability
