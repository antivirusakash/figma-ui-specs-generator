# Remotion Demo (`demo`)

Standalone Remotion setup for creating and rendering demo videos.

This demo now mirrors the landing-page design system:
- full `shadcn/ui` component set in `src/components/ui/`
- shared utility and hook files in `src/lib/utils.ts` and `src/hooks/use-mobile.ts`
- shared theme tokens/styles in `src/styles/globals.css`
- Remotion Tailwind v4 integration in `remotion.config.ts`

## Commands

- `npm install`
- `npm run dev` to open Remotion Studio
- `npm run render` (alias for `render:demo`)
- `npm run render:demo` to render `out/demo.mp4`
- `npm run render:square` to render `out/square-social.mp4`
- `npm run render:launch` to render `out/plugin-launch-60s.mp4` (60 seconds, 1920x1080)
- `npm run typecheck` for TypeScript validation

## Compositions

- `Demo` (1920x1080)
- `SquareSocial` (1080x1080)
- `PluginLaunch60` (1920x1080, 60 seconds)
- entry: `src/index.ts`
- root: `src/Root.tsx`
- components: `src/DemoComposition.tsx`, `src/SquareSocialComposition.tsx`, `src/PluginLaunchComposition.tsx`

## Dynamic Props

Schemas are enforced via Remotion `schema={...}` so CLI props are validated at render-time.

### Demo composition with custom props

```bash
cd demo
npm run render:demo -- --props='{"title":"Launch Week","subtitle":"Schema-validated CLI props are now wired","accentColor":"#22c55e","motionPreset":"snappy"}'
```

### SquareSocial composition with custom props

```bash
cd demo
npm run render:square -- --props='{"title":"Figma Specs","subtitle":"Generate clean implementation specs straight from selection","badgeLabel":"LIVE","theme":"sunset"}'
```

### Env-based props scripts

```bash
cd demo
REMOTION_PROPS='{"title":"Creator Mode","subtitle":"Using REMOTION_PROPS env variable","accentColor":"#f97316","motionPreset":"smooth"}' npm run render:demo:props
REMOTION_PROPS='{"title":"Plugin","subtitle":"Square variant with strict enum props","badgeLabel":"BETA","theme":"forest"}' npm run render:square:props
REMOTION_PROPS='{"productName":"Figma Specs","launchTagline":"Generate compact specs for coding agents without burning tokens.","audience":"For designers and developers shipping together."}' npm run render:launch:props
```

## Notes

- Uses `zod@3.22.3` for Remotion schema support.
- Uses `staticFile('preview.jpg')` from `demo/public/preview.jpg`.
- `Demo` composition uses `Card`, `Badge`, and `Button` from mirrored shadcn components.
- `PluginLaunch60` uses a minimal set of essential plugin screenshots from `demo/public/plugin-shots/`.
