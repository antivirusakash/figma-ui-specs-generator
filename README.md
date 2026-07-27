# Figma Specs

Generate compact, agent-ready Figma specs for **Claude Code** and **OpenAI Codex** without burning too many tokens.

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](https://github.com/antivirusakash/figma-ui-specs-generator/blob/main/LICENSE)
[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-black.svg)](https://github.com/antivirusakash/figma-ui-specs-generator)

- Website: `figmaspecs.dev`
- GitHub: `https://github.com/antivirusakash/figma-ui-specs-generator`
- Figma Plugin: `https://www.figma.com/community/plugins` (listing refresh in progress)

![Figma Specs Plugin](assets/quick-layouts.png)

## Why Figma Specs

Design handoff usually sends too much raw context to coding agents. That increases retries, prompt churn, and cost.

Figma Specs turns selected UI into:
- visual spec frames on the canvas for humans
- compact structured YAML for agents
- cleaner prompts that preserve intent and reduce noise

Common team outcome: moving from large raw payloads (often `80k+` tokens) toward compact specs around `~20k` depending on screen complexity.

## What It Generates

| Output | What you get |
|---|---|
| Anatomy | Tree of elements and relationships |
| Layout | Auto-layout direction, spacing, alignment, sizing |
| Properties & Variants | Variant dimensions and behavior deltas |
| Inventory | Colors, typography, effects used across selection |
| Variables / Tokens | Resolved Figma variables and token values |
| Agent Payload | Chunked YAML (`resolved_tokens`, `token_aliases`, repeats, compact schema) |
| Agent Rules Snippet | Ready instructions for `CLAUDE.md` / `AGENTS.md` |

![AI Ready Data](assets/ai-ready.png)

## AI Agent Workflow

1. Select a frame/component in Figma.
2. Run Figma Specs to generate on-canvas specs + YAML.
3. Add project rules snippet to:
   - `CLAUDE.md` for Claude Code
   - `AGENTS.md` for Codex and other coding agents
4. Paste prompt + YAML into your coding agent.
5. Build and compare to reference screenshot.

This creates a cleaner handoff loop for both designers and coders.

## Architecture Highlights

- `src/code.ts` orchestrates plugin flow and dependency wiring.
- `src/plugin/limits.ts` is the single configuration page for tunables:
  - base caps/truncation limits
  - complexity tier thresholds (`standard` / `large` / `enterprise`)
  - per-tier runtime override profiles
  - artwork export auto-scale plans and area thresholds
- Complexity-aware runtime budgets auto-scale anatomy/layout/data limits per selection (`standard` / `large` / `enterprise`) without exposing manual UI controls.
- Artwork preview export is stress-safe: auto scale fallback (`2x/1x/0.5x/0.25x`) retries only when Figma hits image-size limits, so large landing pages still finish spec generation.
- `src/plugin/helpers/anatomy-collector.ts` handles repeat fingerprinting and diff logic.
- `src/plugin/sections/data-section.ts` builds chunked agent payload YAML.
- `src/ui-app.tsx` provides the plugin UI, including `CLAUDE.md / AGENTS.md` helper tab.
- `src/ui.css` maps plugin theme tokens to the same light palette used by `landing-page/src/app/globals.css`.

## Stress Readiness Notes

- Full Handoff and Quick Check force visual anatomy mode (`tabularAnatomy: false`) so UI previews remain visible.
- Compact mode only skips artwork when Data + Agent Pack + Compact are all enabled.
- Agent YAML summary includes `runtime_budget` and truncation metadata to make stress behavior observable in generated specs.
- Operational checklist for repeatable validation: `benchmark/stress-sanity-todo.md`.

## Quick Start

### Plugin (root)

```bash
git clone https://github.com/antivirusakash/figma-ui-specs-generator.git
cd figma-ui-specs-generator
npm install
npm run build
```

In Figma: `Plugins -> Development -> Import plugin from manifest...` and select `manifest.json`.

### Landing page (`landing-page/`)

```bash
cd landing-page
npm install
npm run dev
```

## Development Commands

### Plugin

```bash
npm run build
npm run watch
npm run typecheck
npm run test:unit
npm run test:ui
npm run test
```

### Landing Page

```bash
cd landing-page
npm run dev
npm run lint
npm run build
```

## Repo Layout

```text
src/
  code.ts
  ui-app.tsx
  plugin/
    helpers/
    sections/
landing-page/
  src/app/page.tsx
  src/app/globals.css
benchmark/
  blog/specs.md
```

## Contributing

Issues and PRs are welcome.

- Keep changes focused and testable.
- Follow module injection patterns in section generators.
- Preserve schema compatibility unless intentionally versioning.

## License

MIT
