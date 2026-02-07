# Specs Plugin (Local)

A local Figma plugin implementation aligned to the Specs Plugin documentation. Generates sections for Anatomy, Properties, Layout & Spacing, Data (JSON), Styling Inventory, Variables & Modes, plus Two-way comparisons and formatting controls.

## Setup

1. Install dependencies

```bash
cd /Users/antivirusakash/Documents/specs
npm install
```

2. Build

```bash
npm run build
```

3. Load in Figma

- Figma desktop → Plugins → Development → Import plugin from manifest
- Select `manifest.json` in this folder

## Use

- Select a component, instance, or frame
- Run the plugin and use:
  - `Actions` tab for presets, sections, formatting, and generation
  - `How it works` tab for educational guidance and low-token workflow tips
- Click **Generate Specs**

## Tests

```bash
npm test
```

## Notes

- Properties diffs are attribute-based (size, opacity, fill/stroke, typography, layout).
- Two-way compares the selected property pair (or defaults to the first two variant properties).
- Tokens Studio detection scans shared plugin data in common namespaces.
- `Agent extraction` preset is tuned for lower-token JSON-first output (`AI compact mode` enabled).
