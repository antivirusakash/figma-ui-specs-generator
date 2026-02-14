"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import {
  AndroidLogo,
  ArrowRight,
  Atom,
  Browsers,
  BracketsAngle,
  FileVue,
  ChartLineUp,
  Database,
  DeviceMobile,
  FileCode,
  GithubLogo,
  GlobeHemisphereWest,
  ListChecks,
  Sparkle,
  Stack,
  Terminal,
} from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Story", href: "#story" },
  { label: "Workflow", href: "#workflow" },
  { label: "Architecture", href: "#architecture" },
  { label: "Open Source", href: "#opensource" },
  { label: "FAQ", href: "#faq" },
];

const researchFacts = [
  {
    title: "Context windows are finite",
    detail:
      "Claude documents a 200K token baseline with premium tiers beyond that.",
    href: "https://docs.anthropic.com/en/docs/build-with-claude/context-windows",
    source: "Anthropic",
    icon: Stack,
  },
  {
    title: "Tokens affect cost directly",
    detail:
      "OpenAI pricing is token-based, so oversized prompts convert directly into spend.",
    href: "https://openai.com/api/pricing",
    source: "OpenAI",
    icon: ChartLineUp,
  },
  {
    title: "Dev Mode is handoff-first",
    detail:
      "Great for humans, but compact deterministic agent payloads still need custom shaping.",
    href: "https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode",
    source: "Figma",
    icon: FileCode,
  },
  {
    title: "Rate limits are real",
    detail:
      "Raw repeated extraction can hit seat/plan/endpoint limits in large team workflows.",
    href: "https://help.figma.com/hc/en-us/articles/34963238552855-What-if-I-m-rate-limited",
    source: "Figma",
    icon: ListChecks,
  },
];

const storyBeats = [
  {
    title: "Scene 1 · The handoff bottleneck",
    body: "A designer shares a polished frame, but the coding agent receives too much raw detail and loses focus.",
    image: "https://placehold.co/640x360/F5F3F1/57534E/png?text=Large+Raw+Context",
  },
  {
    title: "Scene 2 · Translation friction",
    body: "The team keeps translating design intent by hand, retry after retry, while momentum slows down.",
    image: "https://placehold.co/640x360/F5F3F1/57534E/png?text=Handoff+Gap",
  },
  {
    title: "Scene 3 · Clear brief, faster shipping",
    body: "figma-specs turns the same screen into a compact brief, so Claude or OpenAI Codex can build with fewer retries.",
    image: "https://placehold.co/640x360/F5F3F1/57534E/png?text=Compact+Spec+Pack",
  },
];

const architecturePillars = [
  {
    title: "Orchestration Core",
    file: "src/code.ts",
    detail:
      "Coordinates inventory, anatomy collection, layout merge, section rendering, and payload generation.",
    icon: Stack,
  },
  {
    title: "Anatomy + Dedup",
    file: "src/plugin/helpers/anatomy-collector.ts",
    detail:
      "Fingerprint-based repeat detection + diff encoding to avoid sending duplicate structures.",
    icon: Database,
  },
  {
    title: "Compact Data Output",
    file: "src/plugin/sections/data-section.ts",
    detail:
      "Agent-ready chunked YAML with compact schema and resolved token output.",
    icon: FileCode,
  },
  {
    title: "Safety Limits",
    file: "src/plugin/limits.ts",
    detail:
      "Centralized truncation and numeric caps keep payload size bounded.",
    icon: ListChecks,
  },
];

const workflowBlocks = [
  {
    step: "01",
    title: "Select in Figma",
    caption: "Frame + intent",
    icon: Stack,
    image: "https://placehold.co/520x320/F5F3F1/57534E/png?text=Select+Frame",
  },
  {
    step: "02",
    title: "Generate specs",
    caption: "Compact agent brief",
    icon: FileCode,
    image: "https://placehold.co/520x320/F5F3F1/57534E/png?text=Specs+Output",
  },
  {
    step: "03",
    title: "Build in agent",
    caption: "Claude or OpenAI Codex",
    icon: BracketsAngle,
    image: "https://placehold.co/520x320/F5F3F1/57534E/png?text=Ship+UI",
  },
];

const codingLanguages = [
  { label: "Next.js", icon: GlobeHemisphereWest },
  { label: "Flutter", icon: AndroidLogo },
  { label: "React", icon: Atom },
  { label: "Vue", icon: FileVue },
  { label: "React Native", icon: DeviceMobile },
  { label: "HTML/CSS", icon: Browsers },
];

const showcaseCards = [
  {
    title: "Plugin Panel",
    subtitle: "Selection + options + compact mode",
    image: "https://placehold.co/900x520/F5F3F1/57534E/png?text=Plugin+Panel+UI",
  },
  {
    title: "Generated Spec Frames",
    subtitle: "Annotated anatomy and layout visuals",
    image: "https://placehold.co/900x520/F5F3F1/57534E/png?text=Spec+Frames+on+Canvas",
  },
  {
    title: "Agent Payload",
    subtitle: "Chunked YAML and playbook metadata",
    image: "https://placehold.co/900x520/F5F3F1/57534E/png?text=Agent+Ready+YAML",
  },
  {
    title: "Agent Rules Snippet",
    subtitle:
      "Ready-to-paste CLAUDE.md / AGENTS.md rules so your coding agent knows how to consume specs output.",
    image: "https://placehold.co/900x520/F5F3F1/57534E/png?text=CLAUDE.md+%2B+AGENTS.md+Rules",
  },
];

const blogSpecSnippet = String.raw`<!-- chars: 55173 | ~tokens: 11533 -->
## Figma Component: Desktop

### Figma URL
https://www.figma.com/design/w2W0AS12sA2VhAhVXDawLa/Figma-Specs-Sample-Files?node-id=1-14654&m=dev

### Implementation Instructions
1. Use get_screenshot and save to .figma/desktop.png.
2. Read anatomy tree and YAML specs.
3. Map tokens via resolved_tokens.
4. Keep output minimal and visually accurate.

### Component Anatomy
- Desktop (FRAME)
- Dropdown header navigation (INSTANCE)
- Blog page header (FRAME)
- Input field (INSTANCE)
- Row (FRAME)
- Blog post card (INSTANCE)
- CTA section (FRAME)
- Footer (INSTANCE)

### Specs Data (YAML)
schema: specs-plugin.agent_pack.v14.yaml.compact
generated_at: "2026-02-12T16:05:11.721Z"
selection:
  node_id: "1624:472083"
  name: Desktop
  type: FRAME
summary:
  anatomy_nodes_total: 155
  instance_templates: 7
  deduplicated_instances: 35
  chunks_total: 9
resolved_tokens:
  White: "#FFFFFF"
  Primary/50: "#F9F5FF"
  Gray/100: "#F2F4F7"
chunks:
  - chunk_id: anatomy_1
    kind: anatomy
    item_count: 50
    items:
      - node_id: "1624:472083"
        name: Desktop
        type: FRAME
        w: 1440
        h: 4263
      - node_id: "1624:472084"
        name: Dropdown header navigation
        type: INSTANCE
        children_text: [Home, Products, Resources, Pricing, Log in, Sign up]
      - node_id: "I1624:472084;1288:30713"
        name: Container
        type: FRAME
        justify: space-between
        align: center

# ...excerpted from benchmark/blog/specs.md`;
const blogSpecLines = blogSpecSnippet.split("\n");

const getSnippetLineClass = (line: string) => {
  const trimmed = line.trim();

  if (!trimmed) return "text-brand-code-line/70";
  if (/^#{2,3}\s/.test(trimmed)) return "font-semibold text-brand-code-heading";
  if (/^\d+\.\s/.test(trimmed)) return "text-brand-code-accent";
  if (/^\s*[A-Za-z_][\w-]*:\s/.test(line)) return "text-brand-code-key";
  if (/^\s*-\s/.test(line)) return "text-brand-code-text";
  if (/^\s*#/.test(line)) return "text-brand-code-note";
  if (/^\s*\[[^\]]+\]\([^)]+\)\s*$/.test(line)) return "text-brand-code-accent";
  if (/"[^"]*"/.test(line)) return "text-brand-code-number";
  return "text-brand-code-text";
};

const faqItems = [
  {
    q: "Why not rely only on Figma MCP?",
    a: "MCP solves transport. figma-specs solves payload shaping and compaction for coding agents.",
  },
  {
    q: "How much token reduction should we expect?",
    a: "Teams usually report a big drop after moving from raw handoff dumps to compact spec packs. A common journey is around 80k+ down toward ~20k, which gives agents more room to actually build.",
  },
  {
    q: "Will this replace Figma Dev Mode?",
    a: "No. Dev Mode stays great for human inspection. figma-specs adds an agent-friendly brief so coding assistants need less guesswork.",
  },
  {
    q: "Who is this for?",
    a: "Designers and coders working together with Claude Code, OpenAI Codex, Cursor, and similar AI coding workflows.",
  },
  {
    q: "What does the plugin actually generate?",
    a: "Two things: visual spec frames on canvas for quick review, and compact YAML for AI coding prompts.",
  },
  {
    q: "How does it avoid repeated component noise?",
    a: "The plugin fingerprints repeated instances and stores deltas, so agents read one clear template plus meaningful differences instead of duplicates.",
  },
  {
    q: "Can we control output size for large screens?",
    a: "Yes. Caps and truncation live in one limits file, so teams can tune payload size without rewriting core logic.",
  },
  {
    q: "Do we need to migrate our design system first?",
    a: "No migration is required. You can start with existing files and still get structured output for anatomy, layout, text, and tokens.",
  },
  {
    q: "Can we audit this before adoption?",
    a: "Yes. It is open source, with module-level architecture and unit tests for payload contracts, formatting, layout collection, and dedup behavior.",
  },
  {
    q: "What schema should we pick first?",
    a: "Start with the default schema if you want familiarity. Use compact schemas when you need smaller payloads and tighter agent loops.",
  },
];

const GITHUB_REPO = "https://github.com/antivirusakash/figma-ui-specs-generator";
const PLUGIN_LINK = "https://www.figma.com/community/plugins";
const SITE_URL = "https://figma-specs.dev";
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Figma Specs",
      url: SITE_URL,
      logo: `${SITE_URL}/figma-logo.svg`,
      sameAs: [GITHUB_REPO, PLUGIN_LINK],
    },
    {
      "@type": "WebSite",
      name: "Figma Specs",
      url: SITE_URL,
    },
    {
      "@type": "SoftwareApplication",
      name: "Figma Specs",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      description:
        "Generate compact, agent-ready Figma specs without burning too many tokens. Open-source plugin for Claude Code and OpenAI Codex workflows.",
      url: SITE_URL,
      codeRepository: GITHUB_REPO,
      softwareHelp: `${SITE_URL}/#faq`,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-reveal]",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.06,
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-dvh overflow-x-hidden bg-brand-canvas text-brand-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand-action focus:px-4 focus:py-2 focus:text-brand-inverse"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-brand-hairline bg-brand-canvas/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-[1188px] items-center justify-between px-4 sm:px-6 lg:px-0">
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[-0.015em] text-brand-text transition-colors hover:text-brand-text-muted"
          >
            <Terminal size={15} weight="bold" className="terminal-icon-blink" />
            <span>Figma Specs</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium tracking-[-0.01em] text-brand-text-muted transition-colors hover:bg-brand-hairline hover:text-brand-text"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="h-8 rounded-full border-brand-border bg-brand-panel px-3 text-xs">
                <GithubLogo size={14} />
                GitHub
              </Button>
            </a>
            <a href={PLUGIN_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="h-8 rounded-full bg-brand-action px-3 text-xs text-brand-inverse hover:bg-brand-action-hover">
                <Image src="/figma-logo.svg" alt="" aria-hidden width={14} height={14} className="h-3.5 w-3.5" />
                Get Plugin
              </Button>
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-9 items-center rounded-full border border-brand-border px-3 text-sm md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-brand-hairline px-4 pb-4 pt-3 md:hidden">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-brand-text-muted hover:bg-brand-hairline hover:text-brand-text"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 flex gap-2">
              <a href={PLUGIN_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button className="h-9 w-full rounded-full bg-brand-action text-xs text-brand-inverse hover:bg-brand-action-hover">
                  <Image src="/figma-logo.svg" alt="" aria-hidden width={14} height={14} className="h-3.5 w-3.5" />
                  Get Plugin
                </Button>
              </a>
              <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" className="h-9 w-full rounded-full border-brand-border bg-brand-panel text-xs">
                  <GithubLogo size={14} />
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main id="top">
        <section className="mx-auto w-full max-w-[1188px] px-4 pb-16 pt-12 sm:px-6 lg:px-0 lg:pb-24 lg:pt-16">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
            <div data-reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-panel px-3 py-1 text-xs font-medium text-brand-text-muted">
                <Sparkle size={12} />
                Open-source Figma plugin for agent-ready specs
              </p>
              <h1 className="mt-5 max-w-[720px] text-[28px] font-light leading-[1.02] tracking-[-0.036em] sm:text-[40px] lg:text-[54px]">
                Generate Figma specs for{" "}
                <span className="inline-flex items-center gap-1.5 align-baseline whitespace-nowrap">
                  <Image src="/claude.svg" alt="" aria-hidden width={28} height={28} className="h-[0.85em] w-[0.85em] object-contain" />
                  <span>Claude Code</span>
                </span>{" "}
                and{" "}
                <span className="inline-flex items-center gap-1.5 align-baseline whitespace-nowrap">
                  <Image
                    src="/chatgpt.svg"
                    alt=""
                    aria-hidden
                    width={28}
                    height={28}
                    className="h-[0.85em] w-[0.85em] object-contain"
                  />
                  <span>Codex</span>
                </span>{" "}
                without burning too many tokens.
              </h1>
              <p className="mt-5 max-w-[620px] text-base leading-7 text-brand-text-muted sm:text-lg">
                figma-specs converts selected Figma UI into compact, structured
                YAML so agents get anatomy, layout, tokens, repeats, and less
                context waste than raw dumps.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <a href={PLUGIN_LINK} target="_blank" rel="noopener noreferrer">
                  <Button className="h-11 rounded-full bg-brand-action px-5 text-sm text-brand-inverse hover:bg-brand-action-hover">
                    <Image src="/figma-logo.svg" alt="" aria-hidden width={14} height={14} className="h-3.5 w-3.5" />
                    Get Plugin
                    <ArrowRight size={14} />
                  </Button>
                </a>
                <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="h-11 rounded-full border-brand-border bg-brand-panel px-5 text-sm">
                    <GithubLogo size={15} />
                    GitHub Repo
                  </Button>
                </a>
              </div>

              <div className="mt-7 max-w-[620px] rounded-2xl border border-brand-hairline bg-brand-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-text-subtle">
                  Built for coding agents
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-xl border border-brand-border bg-brand-panel px-4 py-3">
                    <Image src="/claude.svg" alt="Claude Code" width={24} height={24} className="h-6 w-6 object-contain" />
                    <div>
                      <p className="text-sm font-medium tracking-[-0.01em]">Claude Code</p>
                      <p className="text-xs text-brand-text-muted">Token-aware handoff</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-brand-border bg-brand-panel px-4 py-3">
                    <Image src="/chatgpt.svg" alt="OpenAI Codex" width={24} height={24} className="h-6 w-6 object-contain" />
                    <div>
                      <p className="text-sm font-medium tracking-[-0.01em]">OpenAI Codex</p>
                      <p className="text-xs text-brand-text-muted">Deterministic builds</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 max-w-[620px] rounded-2xl border border-brand-hairline bg-brand-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-text-subtle">
                  Works for coding languages
                </p>
                <div className="mt-3 overflow-x-auto">
                  <div className="flex w-max min-w-full items-center gap-5 whitespace-nowrap">
                  {codingLanguages.map((item) => (
                    <span key={item.label} className="inline-flex items-center gap-2 text-sm font-medium text-brand-text">
                      <item.icon size={16} className="text-brand-text-subtle" />
                      {item.label}
                    </span>
                  ))}
                  </div>
                </div>
              </div>
            </div>

            <div data-reveal className="space-y-4">
              <div className="relative overflow-hidden rounded-3xl border border-brand-hairline bg-brand-surface p-3">
                <Image
                  src="https://placehold.co/920x560/F5F3F1/57534E/png?text=Plugin+UI+%28Placeholder%29"
                  alt="Plugin UI placeholder"
                  width={920}
                  height={560}
                  className="h-auto w-full rounded-2xl border border-brand-border object-cover"
                />
                <div className="absolute bottom-6 left-6 rounded-xl border border-brand-border bg-brand-panel px-3 py-2 text-xs text-brand-text-muted shadow-sm">
                  Plugin panel + live options
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-brand-hairline bg-brand-surface p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-text-subtle">Token impact</p>
                  <p className="mt-2 text-sm leading-6 text-brand-text-muted">
                    The story we keep hearing: teams start with raw Figma MCP
                    dumps around <span className="font-semibold text-brand-text">80k+ tokens</span>, then
                    move to figma-specs and often work closer to{" "}
                    <span className="font-semibold text-brand-text">~20k tokens</span>.
                  </p>
                  <div className="mt-3 rounded-xl border border-brand-border bg-brand-panel p-3">
                    <div className="flex items-center justify-between text-[11px] text-brand-text-subtle">
                      <span>Before (raw handoff)</span>
                      <span>80k+ tokens</span>
                    </div>
                    <div className="mt-1 h-2 rounded bg-brand-border">
                      <div className="h-2 w-full rounded bg-brand-orange" />
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-brand-text-subtle">
                      <span>After (figma-specs)</span>
                      <span>~20k tokens</span>
                    </div>
                    <div className="mt-1 h-2 rounded bg-brand-border">
                      <div className="h-2 w-1/4 rounded bg-brand-blue" />
                    </div>
                    <p className="mt-3 text-xs text-brand-text-muted">
                      Less bloat means more room for actual building, less retry stress, and steadier delivery.
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-brand-hairline bg-brand-surface p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-text-subtle">Agent payload</p>
                  <p className="mt-2 text-sm leading-6 text-brand-text-muted">
                    Instead of handing your coding agent a noisy wall of layers,
                    you hand over a clean brief it can follow with confidence.
                  </p>
                  <div className="mt-3 rounded-xl border border-brand-border bg-brand-panel p-3">
                    <div className="rounded-lg border border-brand-border bg-brand-surface px-3 py-2">
                      <p className="text-[11px] font-medium text-brand-text-subtle">
                        Before
                      </p>
                      <p className="mt-1 text-xs text-brand-text-muted">
                        Scattered context, repeated details, and more guesswork.
                      </p>
                    </div>
                    <div className="my-2 h-px bg-brand-border" />
                    <div className="rounded-lg border border-brand-border bg-brand-surface px-3 py-2">
                      <p className="text-[11px] font-medium text-brand-text-subtle">
                        After
                      </p>
                      <p className="mt-1 text-xs text-brand-text-muted">
                        One compact pack: structure, key details, and repeat patterns in the right order.
                      </p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                      <span className="rounded-full bg-brand-surface px-2 py-1 text-brand-text-subtle">Anatomy</span>
                      <span className="rounded-full bg-brand-surface px-2 py-1 text-brand-text-subtle">Layout</span>
                      <span className="rounded-full bg-brand-surface px-2 py-1 text-brand-text-subtle">Tokens</span>
                      <span className="rounded-full bg-brand-surface px-2 py-1 text-brand-text-subtle">Repeats</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1188px] px-4 pb-16 sm:px-6 lg:px-0 lg:pb-24">
          <div data-reveal>
            <div className="flex items-center justify-between">
              <h2 className="text-[30px] tracking-[-0.03em] sm:text-[40px]">What you can generate</h2>
              <a href="#workflow" className="text-sm font-medium text-brand-text-muted hover:text-brand-text">
                See flow
              </a>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {showcaseCards.map((card) => (
                <article key={card.title} className="overflow-hidden rounded-2xl border border-brand-hairline bg-brand-surface">
                  <Image
                    src={card.image}
                    alt={`${card.title} placeholder`}
                    width={900}
                    height={520}
                    className="h-auto w-full border-b border-brand-border object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg tracking-[-0.01em]">{card.title}</h3>
                    <p className="mt-1 text-sm text-brand-text-muted">{card.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1188px] px-4 pb-16 sm:px-6 lg:px-0 lg:pb-24">
          <div data-reveal>
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-[30px] tracking-[-0.03em] sm:text-[40px]">Sample spec: Blog Page</h2>
              <span className="rounded-full border border-brand-border bg-brand-panel px-3 py-1 text-xs text-brand-text-subtle">
                benchmark/blog/specs.md
              </span>
            </div>
            <p className="mt-3 max-w-[760px] text-base leading-7 text-brand-text-muted">
              Real sample handoff from the specs generator: preview on the left, agent-ready excerpt on the right.
            </p>
            <div className="mt-6 grid items-start gap-4 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-2xl border border-brand-hairline bg-brand-surface p-3">
                <p className="px-1 pb-2 text-xs font-medium text-brand-text-subtle">Preview</p>
                <div className="max-h-[556px] overflow-hidden rounded-xl border border-brand-border bg-brand-panel">
                  <div className="flex items-center gap-3 border-b border-brand-border bg-brand-surface/95 px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-lavender-2" />
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
                    </div>
                    <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-full border border-brand-border bg-brand-panel px-3 py-1 text-[11px] text-brand-text-subtle">
                      <GlobeHemisphereWest size={12} />
                      <span className="truncate">figma-specs.dev/preview/blog-page</span>
                    </div>
                    <span className="hidden text-[11px] font-medium text-brand-text-subtle sm:inline">
                      Live preview
                    </span>
                  </div>
                  <div className="max-h-[512px] overflow-auto bg-brand-canvas/70 p-2 sm:p-3">
                    <div className="mx-auto overflow-hidden rounded-lg border border-brand-border bg-brand-panel shadow-[0_10px_28px_rgba(0,0,0,0.06)]">
                      <Image
                        src="/blog-landing-page.jpg"
                        alt="Blog landing page sample"
                        width={576}
                        height={1080}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-0 rounded-2xl border border-brand-hairline bg-brand-surface p-3">
                <p className="px-1 pb-2 text-xs font-medium text-brand-text-subtle">Specs snippet</p>
                <div className="max-h-[556px] overflow-auto rounded-xl border border-brand-code-border bg-brand-code-bg">
                  <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-brand-code-border bg-brand-code-chrome/95 px-3 py-2 backdrop-blur">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-code-dot-red" />
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-code-dot-yellow" />
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-code-dot-green" />
                    </div>
                    <div className="flex min-w-0 items-center gap-1.5 text-[11px] text-brand-code-line">
                      <FileCode size={12} />
                      <span className="truncate">benchmark/blog/specs.md</span>
                    </div>
                    <span className="hidden rounded-full border border-brand-code-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-brand-code-line sm:inline-flex">
                      Markdown + YAML
                    </span>
                  </div>
                  <div className="min-w-[620px] px-0 py-2 font-mono text-[11px] leading-5">
                    {blogSpecLines.map((line, index) => (
                      <div key={index} className="grid grid-cols-[42px_1fr] px-2">
                        <span className="select-none pr-2 text-right text-brand-code-line/70">
                          {index + 1}
                        </span>
                        <span className={`whitespace-pre ${getSnippetLineClass(line)}`}>
                          {line || " "}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="mx-auto w-full max-w-[1188px] px-4 pb-16 sm:px-6 lg:px-0 lg:pb-24">
          <div data-reveal>
            <h2 className="text-[32px] leading-[1.1] tracking-[-0.03em] sm:text-[40px]">
              The problem, backed by docs
            </h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {researchFacts.map((fact) => (
                  <article key={fact.title} className="rounded-2xl border border-brand-hairline bg-brand-surface p-5">
                    <span className="inline-flex rounded-full border border-brand-border bg-brand-panel p-2 text-brand-text-subtle">
                      <fact.icon size={14} />
                    </span>
                    <h3 className="mt-3 text-base tracking-[-0.01em]">{fact.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-brand-text-muted">{fact.detail}</p>
                    <a
                      href={fact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs font-medium text-brand-text-subtle underline underline-offset-2"
                    >
                      Source: {fact.source}
                    </a>
                  </article>
                ))}
              </div>
              <div className="rounded-2xl border border-brand-hairline bg-brand-surface p-4">
                <Image
                  src="/figma.png"
                  alt="Token burn flow placeholder"
                  width={760}
                  height={520}
                  className="h-auto w-full rounded-xl border border-brand-border object-cover"
                />
                <div className="mt-3 rounded-xl border border-brand-border bg-brand-panel p-3 text-sm text-brand-text-muted">
                  Visualizing the real cost: large raw context + retries + repeated extraction.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="mx-auto w-full max-w-[1188px] px-4 pb-16 sm:px-6 lg:px-0 lg:pb-24">
          <div data-reveal>
            <h2 className="text-[32px] leading-[1.1] tracking-[-0.03em] sm:text-[40px]">
              The story behind better handoff
            </h2>
            <p className="mt-3 max-w-[720px] text-base leading-7 text-brand-text-muted">
              This is the pattern teams describe again and again: less prompt noise, less manual translation, and faster delivery.
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {storyBeats.map((beat) => (
                <article key={beat.title} className="overflow-hidden rounded-2xl border border-brand-hairline bg-brand-surface">
                  <Image
                    src={beat.image}
                    alt={`${beat.title} placeholder`}
                    width={640}
                    height={360}
                    className="h-auto w-full border-b border-brand-border object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl tracking-[-0.02em]">{beat.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-brand-text-muted">{beat.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="mx-auto w-full max-w-[1188px] px-4 pb-16 sm:px-6 lg:px-0 lg:pb-24">
          <div data-reveal>
            <h2 className="text-[32px] leading-[1.1] tracking-[-0.03em] sm:text-[40px]">
              Workflow: from selected frame to shipped UI
            </h2>
            <p className="mt-3 max-w-[520px] text-base leading-7 text-brand-text-muted">
              Three steps. Connected, compact, and clear.
            </p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-brand-hairline bg-brand-surface p-4 sm:p-6">
              <div className="relative hidden lg:block">
                <div className="pointer-events-none absolute left-[16%] right-[16%] top-5 h-[2px] rounded-full bg-brand-border">
                  <span data-workflow-rail-progress className="absolute inset-y-0 left-0 w-full rounded-full bg-brand-action/35" />
                </div>
                <div className="relative z-10 grid grid-cols-3 gap-3">
                  {workflowBlocks.map((block) => {
                    const Icon = block.icon;
                    return (
                      <article key={block.step} data-workflow-card className="rounded-2xl border border-brand-border bg-brand-panel p-3">
                        <div className="flex justify-center">
                          <span data-workflow-node className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-border bg-brand-canvas text-brand-text">
                            <Icon size={14} />
                          </span>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <p className="inline-flex h-5 items-center rounded-full border border-brand-border px-1.5 text-[10px] font-semibold text-brand-text-subtle">
                            {block.step}
                          </p>
                          <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-brand-text-subtle">{block.caption}</p>
                        </div>
                        <h3 className="mt-2 text-[17px] tracking-[-0.02em]">{block.title}</h3>
                        <Image
                          src={block.image}
                          alt={`${block.title} workflow panel`}
                          width={520}
                          height={320}
                          className="mt-2 h-[98px] w-full rounded-lg border border-brand-border object-cover"
                        />
                      </article>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2 lg:hidden">
                {workflowBlocks.map((block, index) => {
                  const Icon = block.icon;
                  return (
                    <div key={block.step} className="grid grid-cols-[28px_1fr] gap-2">
                      <div className="flex flex-col items-center">
                        <div data-workflow-node className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-brand-border bg-brand-panel">
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-action text-brand-inverse">
                            <Icon size={12} />
                          </span>
                        </div>
                        {index < workflowBlocks.length - 1 ? (
                          <div className="relative mt-1 h-9 w-[2px] rounded bg-brand-border">
                            <span data-workflow-rail-progress className="absolute left-0 top-0 h-1/2 w-full rounded bg-brand-action/45" />
                          </div>
                        ) : null}
                      </div>
                      <article data-workflow-card className="rounded-2xl border border-brand-border bg-brand-panel p-3">
                        <div className="flex items-center justify-between gap-2">
                          <p className="inline-flex h-5 items-center rounded-full border border-brand-border px-1.5 text-[10px] font-semibold text-brand-text-subtle">
                            {block.step}
                          </p>
                          <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-brand-text-subtle">{block.caption}</p>
                        </div>
                        <h3 className="mt-2 text-[15px] tracking-[-0.015em]">{block.title}</h3>
                        <Image
                          src={block.image}
                          alt={`${block.title} workflow panel`}
                          width={520}
                          height={320}
                          className="mt-2 h-[86px] w-full rounded-lg border border-brand-border object-cover"
                        />
                      </article>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="architecture" className="mx-auto w-full max-w-[1188px] px-4 pb-16 sm:px-6 lg:px-0 lg:pb-24">
          <div data-reveal>
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[32px] leading-[1.1] tracking-[-0.03em] sm:text-[40px]">
                Specs Plugin architecture in the repo
              </h2>
              <div className="hidden items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-3 py-1 text-xs text-brand-text-muted sm:flex">
                <ChartLineUp size={12} />
                Codebase-driven claims
              </div>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {architecturePillars.map((pillar) => (
                  <article key={pillar.title} className="rounded-2xl border border-brand-hairline bg-brand-surface p-5">
                    <div className="inline-flex rounded-full bg-brand-panel p-2">
                      <pillar.icon size={18} />
                    </div>
                    <h3 className="mt-3 text-lg tracking-[-0.01em]">{pillar.title}</h3>
                    <p className="mt-1 break-all font-mono text-xs text-brand-text-subtle">{pillar.file}</p>
                    <p className="mt-2 text-sm leading-6 text-brand-text-muted">{pillar.detail}</p>
                  </article>
                ))}
              </div>
              <div className="rounded-2xl border border-brand-hairline bg-brand-surface p-4">
                <Image
                  src="https://placehold.co/900x620/F5F3F1/57534E/png?text=Plugin+Architecture+Map+%28Placeholder%29"
                  alt="Plugin architecture map placeholder"
                  width={900}
                  height={620}
                  className="h-auto w-full rounded-xl border border-brand-border object-cover"
                />
                <pre className="mt-3 overflow-x-auto rounded-xl border border-brand-border bg-brand-panel p-3 text-[11px] leading-4 text-brand-text-muted">
{`src/
  code.ts                 orchestration
  plugin/helpers/*        anatomy + tokens + dedup
  plugin/sections/*       render + payload sections
tests/unit/*              contracts + regression coverage`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section id="opensource" className="mx-auto w-full max-w-[1188px] px-4 pb-16 sm:px-6 lg:px-0 lg:pb-24">
          <div data-reveal className="rounded-3xl border border-brand-hairline bg-brand-surface p-6 sm:p-8">
            <h2 className="text-[32px] leading-[1.1] tracking-[-0.03em] sm:text-[40px]">
              Open source, so every claim is auditable
            </h2>
            <p className="mt-4 max-w-[780px] text-base leading-7 text-brand-text-muted">
              Inspect implementation, tests, and roadmap directly from the repo.
              Ship with confidence, not marketing-only screenshots.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={PLUGIN_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="h-11 rounded-full bg-brand-action px-5 text-sm text-brand-inverse hover:bg-brand-action-hover">
                  <Image src="/figma-logo.svg" alt="" aria-hidden width={15} height={15} className="h-[15px] w-[15px]" />
                  Get Plugin (soon update)
                </Button>
              </a>
              <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="h-11 rounded-full border-brand-border bg-brand-panel px-5 text-sm">
                  <GithubLogo size={15} />
                  GitHub Repo
                </Button>
              </a>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Image
                src="https://placehold.co/760x420/F5F3F1/57534E/png?text=Repo+README+Preview+%28Placeholder%29"
                alt="Repository preview placeholder"
                width={760}
                height={420}
                className="h-auto w-full rounded-2xl border border-brand-border object-cover"
              />
              <Image
                src="https://placehold.co/760x420/F5F3F1/57534E/png?text=Plugin+Demo+Flow+%28Placeholder%29"
                alt="Plugin demo flow placeholder"
                width={760}
                height={420}
                className="h-auto w-full rounded-2xl border border-brand-border object-cover"
              />
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto w-full max-w-[1188px] px-4 pb-18 sm:px-6 lg:px-0 lg:pb-24">
          <div data-reveal>
            <h2 className="text-[32px] leading-[1.1] tracking-[-0.03em] sm:text-[40px]">FAQ</h2>
            <p className="mt-3 max-w-[860px] text-base leading-7 text-brand-text-muted">
              Practical answers for teams deciding whether to adopt figma-specs in real shipping workflows.
            </p>
            <Accordion type="single" collapsible className="mt-6 rounded-2xl border border-brand-hairline bg-brand-surface px-5">
              {faqItems.map((item, index) => (
                <AccordionItem key={item.q} value={`faq-${index + 1}`} className="border-brand-hairline">
                  <AccordionTrigger className="py-4 text-base tracking-[-0.01em] hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-6 text-brand-text-muted">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-hairline py-6">
        <div className="mx-auto flex w-full max-w-[1188px] flex-wrap items-center justify-between gap-3 px-4 text-sm text-brand-text-subtle sm:px-6 lg:px-0">
          <p>figma-specs · Open-source Figma specs for agentic coding workflows.</p>
          <div className="flex items-center gap-2">
            <BracketsAngle size={15} />
            <span>Built with Next.js, shadcn/ui, GSAP, and Phosphor Icons</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
