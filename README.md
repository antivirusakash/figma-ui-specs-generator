# Specs

Extract design specs from any Figma component, frame, or page — and turn them into structured, readable annotations that both humans and AI agents can consume.

Select a layer in Figma, run Specs, and get a full breakdown: component anatomy, layout rules, spacing values, design tokens, variant properties, and a styling inventory. The output lives directly on your canvas as auto-layout frames — no context switching, no copy-pasting, no stale docs.

![Specs Plugin](assets/quick-layouts.png)

## Why

Design handoff is broken. Designers spend time redlining. Engineers spend time inspecting. AI agents can't read Figma files without structured context. Specs fixes all three:

- **For designers** — Generate spec annotations in seconds. Document component anatomy, variant behavior, and spacing rules without manually drawing redlines. Use it for design reviews, critiques, and QA.
- **For front-end engineers** — Get exact values: auto-layout direction, alignment, padding, gap, color tokens, typography scales, variable bindings. No more guessing from the inspector panel. Everything is right there on the canvas.
- **For AI agents** — Structured data output that tools like Claude Code, Cursor, and Codex can read via Figma MCP. The agent gets component hierarchy, spacing in px/rem, resolved design tokens, and layout constraints — everything it needs to write accurate UI code from a mockup.

## Features

- **Anatomy** — Walks the component tree and lists every element with its type, name, and visual attributes (fills, strokes, corner radius, typography, effects, opacity)
- **Layout & Spacing** — Detects auto-layout and annotates direction, alignment, padding, gap, and sizing modes with visual markers on the artwork
- **Properties** — Extracts component properties and variants, highlights visual differences between each option
- **Two-Way Comparison** — Cross-references two property dimensions to show how combinations affect the component
- **Variables & Tokens** — Resolves Figma variables and Tokens Studio references to their actual values, shows binding source
- **Modes** — Iterates over variable collection modes (light/dark, density, themes) and shows how the component changes
- **Inventory** — Collects all unique colors, typography styles, and effects used across the selection into a summary table
- **Data Model** — Outputs raw structured data (anatomy tree, layout specs, property matrix) for programmatic consumption
- **Multi-column** — Arranges sections in multi-column grid or side-by-side layouts for large components
- **Format options** — HEX or HSLA colors, px or rem spacing, configurable rem base, variable-first or token-first resolution

## Using with AI Agents

![AI-Ready Data](assets/ai-ready.png)

Specs was built with AI-assisted development in mind. The workflow:

1. Select a frame or component in Figma
2. Run Specs — annotations are generated on canvas
3. Connect your AI agent to Figma via [MCP](https://modelcontextprotocol.io/) (e.g. [Figma MCP Server](https://github.com/nicholasgriffintn/figma-mcp-server))
4. The agent reads the spec frames and gets structured design data — spacing, colors, typography, component hierarchy, token bindings — without manual handoff

This closes the loop between design and code. The designer generates specs, the agent reads them, and the engineer reviews the output. No screenshots, no Zeplin exports, no "what's the padding here?" in Slack.

## Install

```bash
git clone <repo-url>
cd specs
npm install
npm run build
```

Then in Figma: **Plugins > Development > Import plugin from manifest** > select `manifest.json`

## Development

```bash
npm run build        # Production build (esbuild)
npm run watch        # Watch mode
npm run test:unit    # Unit tests (vitest)
npm run test:ui      # E2E tests (playwright)
npm run typecheck    # TypeScript check
npm run test         # All checks: typecheck + unit + build + e2e
```

## Project Structure

```
src/
├── code.ts                    # Plugin backend — orchestration, state, Figma API
├── ui-app.tsx                 # Plugin UI panel (React + Tailwind)
├── plugin/
│   ├── sections/              # Section generators (anatomy, layout, properties, etc.)
│   ├── helpers/               # Shared utilities (text, frames, formatting, tokens)
│   ├── theme.ts               # Color theme for generated annotations
│   ├── types.ts               # TypeScript types
│   └── constants.ts           # Layout constants
└── ui/
    └── components/            # UI components (Radix primitives)
```

## Contributing

Issues and PRs welcome. If you're adding a new section type, follow the existing pattern: export a function that receives `deps` (injected helpers) and `settings`, returns a Figma frame.

## License

MIT
