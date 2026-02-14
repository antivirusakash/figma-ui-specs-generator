## Figma Specs Landing Page

Marketing site for **Figma Specs** (`figma-specs.dev`) built with Next.js + shadcn/ui.

### Stack

- Next.js App Router + TypeScript
- shadcn/ui components
- GSAP reveal animations
- Phosphor Icons

### SEO Implementation

Implemented in `src/app/`:

- `layout.tsx`
  - canonical metadata base (`https://figma-specs.dev`)
  - title template + description + keywords
  - Open Graph metadata
  - Twitter metadata
  - robots directives (`index/follow`, rich Googlebot preview settings)
- `robots.ts`
  - generates `robots.txt` with sitemap + host
- `sitemap.ts`
  - generates `sitemap.xml` for the homepage
- `opengraph-image.tsx`
  - dynamic OG image (`1200x630`)
- `twitter-image.tsx`
  - Twitter card image route (reuses OG image)
- `page.tsx`
  - JSON-LD structured data (`Organization`, `WebSite`, `SoftwareApplication`)

### Local Run

```bash
npm install
npm run dev
```

### Validation

```bash
npm run lint
npm run build
```
