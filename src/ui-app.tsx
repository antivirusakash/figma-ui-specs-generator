import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowsOutCardinalIcon,
  BracketsCurlyIcon,
  CheckCircleIcon,
  CopyIcon,
  CubeIcon,
  FadersHorizontalIcon,
  FlowArrowIcon,
  GridFourIcon,
  InfoIcon,
  RowsIcon,
  SparkleIcon,
  StackIcon,
  SwatchesIcon,
} from '@phosphor-icons/react';
import { Button } from './ui/components/button';
import { Checkbox } from './ui/components/checkbox';
import { Input } from './ui/components/input';
import { Label } from './ui/components/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/components/select';
import { CollapsibleSection } from './ui/components/collapsible-section';
import { PresetCard } from './ui/components/preset-card';

type Framework = 'auto' | 'react' | 'nextjs' | 'flutter' | 'html' | 'vue' | 'svelte' | 'react-native';

type Settings = {
  anatomy: boolean;
  tabularAnatomy: boolean;
  completeAnatomy: boolean;
  includeNestedComponents: boolean;
  properties: boolean;
  twoWay: boolean;
  twoWayPropA: string;
  twoWayPropB: string;
  layout: boolean;
  inventory: boolean;
  data: boolean;
  variables: boolean;
  modes: boolean;
  includeDataAttributes: boolean;
  agentReadyData: boolean;
  aiCompactMode: boolean;
  showOuterLayout: boolean;
  multiColumn: boolean;
  columnCount: number;
  colorFormat: 'hex' | 'hsla';
  typographyFormat: boolean;
  spacingUnit: 'px' | 'rem';
  remBase: number;
  valuePrecision: number;
  showRawValues: boolean;
  valuePreference: 'variable' | 'token';
  framework: Framework;
};

type PluginMessage =
  | { type: 'variant-props'; props: string[] }
  | { type: 'generate'; settings: Settings }
  | { type: 'close' }
  | { type: 'error'; message: string }
  | { type: 'copy-ai-specs-result'; text: string }
  | { type: 'generate-success' };

type Preset = 'handoff' | 'agent' | 'compact';
type AppTab = 'generate' | 'learn' | 'agents';

const AUTO_VALUE = '__auto__';

const DEFAULT_SETTINGS: Settings = {
  anatomy: true,
  tabularAnatomy: false,
  completeAnatomy: false,
  includeNestedComponents: false,
  properties: false,
  twoWay: false,
  twoWayPropA: '',
  twoWayPropB: '',
  layout: false,
  inventory: false,
  data: true,
  variables: false,
  modes: false,
  includeDataAttributes: false,
  agentReadyData: true,
  aiCompactMode: true,
  showOuterLayout: false,
  multiColumn: false,
  columnCount: 2,
  colorFormat: 'hex',
  typographyFormat: true,
  spacingUnit: 'px',
  remBase: 16,
  valuePrecision: 2,
  showRawValues: false,
  valuePreference: 'variable',
  framework: 'auto'
};

const panelClass = 'rounded-xl border border-border bg-card/95 p-4 shadow-sm';
const controlLabelClass =
  'group flex min-h-11 items-start gap-3 rounded-lg border border-border bg-background/60 px-3 py-2 text-sm text-foreground transition-colors hover:bg-accent/40';
const controlTitleClass = 'text-sm font-medium text-foreground';
const controlHintClass = 'text-pretty text-xs text-muted-foreground';
const inputTriggerClass = 'h-11 w-full';

type ToggleFieldProps = {
  id: string;
  title: string;
  hint: string;
  checked: boolean;
  disabled?: boolean;
  onCheckedChange: (value: boolean | 'indeterminate') => void;
};

const ToggleField = ({ id, title, hint, checked, disabled, onCheckedChange }: ToggleFieldProps) => (
  <Label className={controlLabelClass}>
    <Checkbox
      id={id}
      checked={checked}
      disabled={disabled}
      onCheckedChange={onCheckedChange}
      className="mt-0.5 h-5 w-5"
    />
    <span className="flex min-w-0 flex-col gap-1">
      <span className={controlTitleClass}>{title}</span>
      <span className={controlHintClass}>{hint}</span>
    </span>
  </Label>
);

const App = () => {
  const [activeTab, setActiveTab] = useState<AppTab>('generate');
  const [settings, setSettings] = useState<Settings>(() => ({ ...DEFAULT_SETTINGS }));
  const [variantProps, setVariantProps] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [generateSuccess, setGenerateSuccess] = useState(false);
  const [snippetCopied, setSnippetCopied] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<Preset | null>('agent');

  useEffect(() => {
    console.log('[SpecsPlugin UI] mounted');
    const handler = (event: MessageEvent) => {
      const message = event.data?.pluginMessage as PluginMessage | undefined;
      if (!message) return;
      console.log('[SpecsPlugin UI] message', message);
      if (message.type === 'variant-props') {
        setVariantProps(message.props || []);
      }
      if (message.type === 'generate-success') {
        setIsGenerating(false);
        setGenerateSuccess(true);
      }
      if (message.type === 'error') {
        setIsGenerating(false);
        setGenerateSuccess(false);
        setErrorMessage(message.message || 'Something went wrong.');
      }
      if (message.type === 'copy-ai-specs-result') {
        try {
          const textarea = document.createElement('textarea');
          textarea.value = message.text;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          setCopySuccess(true);
          setIsCopying(false);
          setTimeout(() => setCopySuccess(false), 2000);
        } catch {
          setIsCopying(false);
        }
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const twoWayOptions = useMemo(() => [AUTO_VALUE].concat(variantProps), [variantProps]);

  const agentSnippet = useMemo(() => {
    const fw = settings.framework;
    const fwLine = fw === 'react' || fw === 'nextjs'
      ? '- For React/Next.js: Build as functional components with Tailwind or CSS modules. Use semantic HTML.'
      : fw === 'flutter'
      ? '- For Flutter: Build as StatelessWidget using the Material/Cupertino theme. Map layout specs to Column/Row/Padding.'
      : fw === 'vue'
      ? '- For Vue: Build as Vue 3 SFC (`<script setup>`). Use scoped CSS or Tailwind.'
      : fw === 'svelte'
      ? '- For Svelte: Build as a Svelte component. Use scoped styles or Tailwind.'
      : fw === 'react-native'
      ? '- For React Native: Build with View/Text/Image components. Map layout specs to flexbox StyleSheet.'
      : fw === 'html'
      ? '- For HTML/CSS: Build with semantic HTML and vanilla CSS. Use CSS flexbox for layout.'
      : '- Detect the framework from `package.json` and build accordingly.';
    return `## Figma-to-Code Workflow

- When given a Figma spec (YAML from Specs plugin), follow the implementation instructions in the spec header exactly.
- Use \`get_screenshot\` from the Figma MCP server to capture the design. Save to \`.figma/\` and reference it — don't re-fetch.
- Read the YAML \`chunks\` for anatomy (structure), layout (flex/grid), and repeats (deduplicated instances).
- Use \`resolved_tokens\` to map design token names to actual values (hex, font names).
- Match \`instance_of\` names to your icon library (Phosphor, Lucide, etc.) — check \`package.json\`.
${fwLine}
- After building, screenshot your output and compare with the \`.figma/*.png\` reference. Fix differences.
- Keep implementations minimal — only build what the spec describes.`;
  }, [settings.framework]);

  const copySnippet = useCallback(() => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = agentSnippet;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setSnippetCopied(true);
      setTimeout(() => setSnippetCopied(false), 2000);
    } catch { /* ignore */ }
  }, [agentSnippet]);

  const updateSetting = useCallback(<K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const onToggle = useCallback(
    (key: keyof Settings) => (value: boolean | 'indeterminate') => {
      updateSetting(key, (value === true) as Settings[typeof key]);
    },
    [updateSetting]
  );

  const onSelect = useCallback(
    (key: keyof Settings) => (value: string) => {
      updateSetting(key, value as Settings[typeof key]);
    },
    [updateSetting]
  );

  const onSelectNumber = useCallback(
    (key: keyof Settings) => (value: string) => {
      updateSetting(key, Number(value) as Settings[typeof key]);
    },
    [updateSetting]
  );

  const onNumber = useCallback(
    (key: keyof Settings) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      if (Number.isNaN(value)) return;
      updateSetting(key, value as Settings[typeof key]);
    },
    [updateSetting]
  );

  const applyPreset = useCallback(
    (preset: Preset) => {
      if (preset === 'handoff') {
        setSettings((prev) => ({
          ...prev,
          anatomy: true,
          properties: true,
          layout: true,
          data: true,
          inventory: true,
          variables: true,
          modes: true,
          includeDataAttributes: true,
          agentReadyData: true,
          aiCompactMode: false,
          showOuterLayout: true,
          multiColumn: true,
          columnCount: 2
        }));
        setSelectedPreset('handoff');
        console.log('[SpecsPlugin UI] preset applied', 'handoff');
        return;
      }
      if (preset === 'agent') {
        setSettings((prev) => ({
          ...prev,
          anatomy: true,
          tabularAnatomy: false,
          completeAnatomy: false,
          includeNestedComponents: false,
          properties: false,
          twoWay: false,
          layout: false,
          data: true,
          inventory: false,
          variables: false,
          modes: false,
          includeDataAttributes: false,
          agentReadyData: true,
          aiCompactMode: true,
          showOuterLayout: false,
          multiColumn: false,
          showRawValues: false
        }));
        setSelectedPreset('agent');
        console.log('[SpecsPlugin UI] preset applied', 'agent');
        return;
      }
      setSettings((prev) => ({
        ...prev,
        anatomy: true,
        properties: false,
        layout: true,
        data: false,
        inventory: false,
        variables: false,
        modes: false,
        agentReadyData: true,
        aiCompactMode: true,
        twoWay: false,
        includeNestedComponents: false,
        showOuterLayout: true,
        multiColumn: false
      }));
      setSelectedPreset('compact');
      console.log('[SpecsPlugin UI] preset applied', 'compact');
    },
    []
  );

  const send = useCallback(() => {
    setErrorMessage(null);
    setIsGenerating(true);
    setGenerateSuccess(false);
    const normalizedSettings = {
      ...settings,
      multiColumn: settings.agentReadyData && settings.aiCompactMode ? false : settings.multiColumn
    };
    console.log('[SpecsPlugin UI] generate clicked', normalizedSettings);
    parent.postMessage(
      {
        pluginMessage: {
          type: 'generate',
          settings: {
            ...normalizedSettings,
            twoWayPropA: normalizedSettings.twoWayPropA === AUTO_VALUE ? '' : normalizedSettings.twoWayPropA,
            twoWayPropB: normalizedSettings.twoWayPropB === AUTO_VALUE ? '' : normalizedSettings.twoWayPropB
          }
        }
      },
      '*'
    );
  }, [settings]);

  const copyAiSpecs = useCallback(() => {
    setIsCopying(true);
    setCopySuccess(false);
    console.log('[SpecsPlugin UI] copy-ai-specs clicked');
    parent.postMessage(
      {
        pluginMessage: {
          type: 'copy-ai-specs',
          settings: {
            ...settings,
            agentReadyData: true,
            data: true
          }
        }
      },
      '*'
    );
    setTimeout(() => setIsCopying(false), 5000);
  }, [settings]);

  return (
    <div className="min-h-dvh pb-20">
      {/* Compact Header */}
      <header className="space-y-1 p-4 pb-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-2 py-1 text-xs font-medium text-muted-foreground">
          <SparkleIcon size={14} />
          Specs Plugin
        </div>
        <p className="text-sm text-muted-foreground">
          Generate visual specs from any selected component.
        </p>
      </header>

      {/* Tab Bar */}
      <div className="px-4 pb-3">
        <div
          role="tablist"
          aria-label="Specs plugin sections"
          className="inline-flex w-full gap-2 rounded-xl border border-border bg-muted/40 p-1"
        >
          <Button
            id="tab-generate"
            type="button"
            role="tab"
            aria-controls="panel-generate"
            aria-selected={activeTab === 'generate'}
            tabIndex={activeTab === 'generate' ? 0 : -1}
            className="h-10 flex-1"
            variant={activeTab === 'generate' ? 'default' : 'secondary'}
            onClick={() => setActiveTab('generate')}
          >
            Generate
          </Button>
          <Button
            id="tab-learn"
            type="button"
            role="tab"
            aria-controls="panel-learn"
            aria-selected={activeTab === 'learn'}
            tabIndex={activeTab === 'learn' ? 0 : -1}
            className="h-10 flex-1"
            variant={activeTab === 'learn' ? 'default' : 'secondary'}
            onClick={() => setActiveTab('learn')}
          >
            Learn
          </Button>
          <Button
            id="tab-agents"
            type="button"
            role="tab"
            aria-controls="panel-agents"
            aria-selected={activeTab === 'agents'}
            tabIndex={activeTab === 'agents' ? 0 : -1}
            className="h-10 flex-1"
            variant={activeTab === 'agents' ? 'default' : 'secondary'}
            onClick={() => setActiveTab('agents')}
          >
            AGENTS.md
          </Button>
        </div>
      </div>

      {/* Learn Tab */}
      {activeTab === 'learn' ? (
        <div id="panel-learn" role="tabpanel" aria-labelledby="tab-learn" className="space-y-4 px-4">
          {/* How to use — timeline steps */}
          <section className={panelClass}>
            <h2 className="mb-3 text-sm font-semibold text-foreground">How to use</h2>
            <div className="relative ml-2.5 border-l-2 border-border pl-5">
              {[
                { n: '1', title: 'Select a component', hint: 'Click any component, instance, or frame on your canvas.' },
                { n: '2', title: 'Choose a preset', hint: 'Pick Full handoff, AI agent, or Quick check. Fine-tune settings below.' },
                { n: '3', title: 'Generate', hint: 'Hit Generate. The button turns green when your spec is ready.' },
                { n: '4', title: 'Copy for AI', hint: 'Tap Copy AI Specs to grab structured YAML for your coding tool.' }
              ].map((step, i) => (
                <div key={step.n} className={`relative ${i < 3 ? 'pb-4' : ''}`}>
                  <div className="absolute -left-[1.625rem] top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {step.n}
                  </div>
                  <p className="text-sm font-medium leading-5 text-foreground">{step.title}</p>
                  <p className="text-xs text-muted-foreground">{step.hint}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What each section does — compact icon rows */}
          <section className={panelClass}>
            <h2 className="mb-3 text-sm font-semibold text-foreground">What each section does</h2>
            <div className="grid gap-1.5">
              {[
                { icon: <RowsIcon size={14} />, title: 'Layer breakdown', hint: 'Every layer with its key visual details.' },
                { icon: <FlowArrowIcon size={14} />, title: 'Variant properties', hint: 'How each variant option changes the component.' },
                { icon: <ArrowsOutCardinalIcon size={14} />, title: 'Layout & spacing', hint: 'Auto-layout direction, gaps, padding, and sizing.' },
                { icon: <BracketsCurlyIcon size={14} />, title: 'Data export', hint: 'Structured YAML for dev tools and AI agents.' },
                { icon: <SwatchesIcon size={14} />, title: 'Style inventory', hint: 'Colors, text styles, variables, and tokens used.' },
                { icon: <GridFourIcon size={14} />, title: 'Variables', hint: 'Resolved value of each Figma variable.' },
                { icon: <StackIcon size={14} />, title: 'Modes', hint: 'Compare across variable modes (e.g. light/dark).' }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-2.5 rounded-md px-1 py-1.5">
                  <span className="mt-0.5 shrink-0 text-muted-foreground">{item.icon}</span>
                  <span className="text-xs">
                    <span className="font-medium text-foreground">{item.title}</span>
                    <span className="text-muted-foreground"> — {item.hint}</span>
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* AI workflow tips — single callout */}
          <section className={`${panelClass} bg-primary/5`}>
            <h2 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
              <SparkleIcon size={14} className="text-primary" />
              Tips for AI workflows
            </h2>
            <ul className="grid gap-1.5 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <InfoIcon size={12} className="mt-0.5 shrink-0 text-primary/70" />
                Use the AI / code agent preset for the smallest output.
              </li>
              <li className="flex items-start gap-2">
                <InfoIcon size={12} className="mt-0.5 shrink-0 text-primary/70" />
                Compact mode cuts output length by ~60%.
              </li>
              <li className="flex items-start gap-2">
                <InfoIcon size={12} className="mt-0.5 shrink-0 text-primary/70" />
                After generating, use Copy AI Specs for structured YAML.
              </li>
              <li className="flex items-start gap-2">
                <InfoIcon size={12} className="mt-0.5 shrink-0 text-primary/70" />
                Generate from focused frames, not entire pages.
              </li>
            </ul>
          </section>

        </div>
      ) : null}

      {/* Agents Tab */}
      {activeTab === 'agents' ? (
        <div id="panel-agents" role="tabpanel" aria-labelledby="tab-agents" className="space-y-4 px-4">

          {/* Intro */}
          <section className={panelClass}>
            <h2 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
              <CubeIcon size={14} className="text-primary" />
              CLAUDE.md / AGENTS.md
            </h2>
            <p className="text-xs text-muted-foreground">
              Add this snippet to your project's <code className="rounded bg-muted px-1 py-0.5 text-[10px] font-medium">CLAUDE.md</code> or <code className="rounded bg-muted px-1 py-0.5 text-[10px] font-medium">AGENTS.md</code> so
              your AI coding agent knows how to consume Specs plugin output.
            </p>
          </section>

          {/* Framework selector (mirrors Generate tab) */}
          <section className={panelClass}>
            <div className="space-y-1">
              <Label className="text-xs font-medium text-muted-foreground" htmlFor="agents-framework">
                Target framework
              </Label>
              <Select value={settings.framework} onValueChange={onSelect('framework')}>
                <SelectTrigger id="agents-framework" className={inputTriggerClass}>
                  <SelectValue placeholder="Auto-detect" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Auto-detect</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="nextjs">Next.js</SelectItem>
                  <SelectItem value="vue">Vue</SelectItem>
                  <SelectItem value="svelte">Svelte</SelectItem>
                  <SelectItem value="flutter">Flutter</SelectItem>
                  <SelectItem value="html">HTML / CSS</SelectItem>
                  <SelectItem value="react-native">React Native</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                The snippet adapts its framework-specific line based on this selection.
              </p>
            </div>
          </section>

          {/* Snippet preview + copy */}
          <section className={panelClass}>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-foreground">Snippet</h2>
              <Button
                size="sm"
                variant="outline"
                className="h-7 gap-1.5 text-xs"
                onClick={copySnippet}
              >
                {snippetCopied ? (
                  <span className="flex items-center gap-1">
                    <CheckCircleIcon size={12} weight="bold" />
                    Copied!
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <CopyIcon size={12} />
                    Copy snippet
                  </span>
                )}
              </Button>
            </div>
            <pre className="overflow-auto rounded-md border border-border bg-muted/40 p-3 text-[10px] leading-relaxed text-foreground">
              {agentSnippet}
            </pre>
          </section>

          {/* How to use it */}
          <section className={panelClass}>
            <h2 className="mb-2 text-sm font-semibold text-foreground">How to use</h2>
            <div className="grid gap-1.5 text-xs text-muted-foreground">
              <div className="flex items-start gap-2.5 rounded-md px-1 py-1">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">1</span>
                <span>Copy the snippet above.</span>
              </div>
              <div className="flex items-start gap-2.5 rounded-md px-1 py-1">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">2</span>
                <span>Paste it into <code className="rounded bg-muted px-1 py-0.5 text-[10px] font-medium">CLAUDE.md</code> (Claude Code) or <code className="rounded bg-muted px-1 py-0.5 text-[10px] font-medium">AGENTS.md</code> (Codex / other agents) at your project root.</span>
              </div>
              <div className="flex items-start gap-2.5 rounded-md px-1 py-1">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">3</span>
                <span>Select a component in Figma, hit <strong>Copy AI Specs</strong>, and paste the YAML into your agent's chat.</span>
              </div>
              <div className="flex items-start gap-2.5 rounded-md px-1 py-1">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">4</span>
                <span>The agent reads the snippet instructions, fetches the Figma screenshot, and builds the component from the YAML spec.</span>
              </div>
            </div>
          </section>

          {/* Supported agents */}
          <section className={`${panelClass} bg-primary/5`}>
            <h2 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-foreground">
              <SparkleIcon size={14} className="text-primary" />
              Supported agents
            </h2>
            <ul className="grid gap-1.5 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <InfoIcon size={12} className="mt-0.5 shrink-0 text-primary/70" />
                <strong>Claude Code</strong> — place snippet in <code className="rounded bg-muted px-1 py-0.5 text-[10px] font-medium">CLAUDE.md</code>
              </li>
              <li className="flex items-start gap-2">
                <InfoIcon size={12} className="mt-0.5 shrink-0 text-primary/70" />
                <strong>OpenAI Codex</strong> — place snippet in <code className="rounded bg-muted px-1 py-0.5 text-[10px] font-medium">AGENTS.md</code>
              </li>
              <li className="flex items-start gap-2">
                <InfoIcon size={12} className="mt-0.5 shrink-0 text-primary/70" />
                <strong>Cursor / Windsurf</strong> — place snippet in <code className="rounded bg-muted px-1 py-0.5 text-[10px] font-medium">.cursorrules</code> or project instructions
              </li>
              <li className="flex items-start gap-2">
                <InfoIcon size={12} className="mt-0.5 shrink-0 text-primary/70" />
                Works with any agent that reads project-level instruction files.
              </li>
            </ul>
          </section>
        </div>
      ) : null}

      {/* Generate Tab */}
      {activeTab === 'generate' ? (
        <div id="panel-generate" role="tabpanel" aria-labelledby="tab-generate" className="space-y-4 px-4">

          {/* Quick Start — Preset Cards */}
          <section className={panelClass}>
            <div className="mb-3 space-y-1">
              <h2 className="text-sm font-semibold text-foreground">Quick start</h2>
              <p className="text-xs text-muted-foreground">Pick a starting point. Adjust settings below if needed.</p>
            </div>
            <div className="grid gap-2" role="radiogroup" aria-label="Preset selection">
              <PresetCard
                title="Full handoff"
                description="Everything a developer needs to build this."
                selected={selectedPreset === 'handoff'}
                onClick={() => applyPreset('handoff')}
              />
              <PresetCard
                title="AI / code agent"
                description="Compact JSON for AI tools and code generators."
                selected={selectedPreset === 'agent'}
                onClick={() => applyPreset('agent')}
              />
              <PresetCard
                title="Quick check"
                description="Just anatomy and layout for a fast review."
                selected={selectedPreset === 'compact'}
                onClick={() => applyPreset('compact')}
              />
            </div>
          </section>

          {/* Error message */}
          {errorMessage ? (
            <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive">
              {errorMessage}
            </div>
          ) : null}

          {/* What to Include — Section Toggles */}
          <section className={panelClass}>
            <div className="mb-3 space-y-1">
              <h2 className="text-sm font-semibold text-foreground">What to include</h2>
              <p className="text-xs text-muted-foreground">Toggle what appears in the generated spec.</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <ToggleField
                id="anatomy"
                title="Layer breakdown"
                hint="Every layer with its key visual details."
                checked={settings.anatomy}
                onCheckedChange={onToggle('anatomy')}
              />
              <ToggleField
                id="properties"
                title="Variant properties"
                hint="How each variant option changes the component."
                checked={settings.properties}
                onCheckedChange={onToggle('properties')}
              />
              <ToggleField
                id="layout"
                title="Layout & spacing"
                hint="Auto-layout direction, gaps, padding, and sizing."
                checked={settings.layout}
                onCheckedChange={onToggle('layout')}
              />
              <ToggleField
                id="data"
                title="Data export"
                hint="Structured JSON for dev tools and AI agents."
                checked={settings.data}
                onCheckedChange={onToggle('data')}
              />
              <ToggleField
                id="inventory"
                title="Style inventory"
                hint="Colors, text styles, variables, and tokens used."
                checked={settings.inventory}
                onCheckedChange={onToggle('inventory')}
              />
              <ToggleField
                id="variables"
                title="Variables"
                hint="Resolved value of each Figma variable."
                checked={settings.variables}
                onCheckedChange={onToggle('variables')}
              />
              <ToggleField
                id="modes"
                title="Modes"
                hint="Compare the component across variable modes (e.g. light/dark)."
                checked={settings.modes}
                onCheckedChange={onToggle('modes')}
              />
            </div>
          </section>

          {/* Collapsible: Layer breakdown details */}
          <CollapsibleSection
            title="Layer breakdown details"
            icon={<RowsIcon size={16} />}
            hidden={!settings.anatomy}
          >
            <div className="grid gap-2">
              <ToggleField
                id="tabularAnatomy"
                title="Table format"
                hint="Show layers in a table instead of annotated artwork."
                checked={settings.tabularAnatomy}
                onCheckedChange={onToggle('tabularAnatomy')}
              />
              <ToggleField
                id="completeAnatomy"
                title="Include all variants"
                hint="Break down every variant, not just the default."
                checked={settings.completeAnatomy}
                onCheckedChange={onToggle('completeAnatomy')}
              />
              <ToggleField
                id="nestedComponents"
                title="Include nested components"
                hint="Also spec components used inside this one."
                checked={settings.includeNestedComponents}
                onCheckedChange={onToggle('includeNestedComponents')}
              />
            </div>
          </CollapsibleSection>

          {/* Collapsible: Variant comparison */}
          <CollapsibleSection
            title="Variant comparison"
            icon={<FlowArrowIcon size={16} />}
            hidden={!settings.properties}
          >
            <div className="space-y-3">
              <ToggleField
                id="twoWay"
                title="Compare two properties at once"
                hint="Grid showing every combination of two properties."
                checked={settings.twoWay}
                onCheckedChange={onToggle('twoWay')}
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <Label className="text-xs font-medium text-muted-foreground" htmlFor="twoWayPropA">
                    First property
                  </Label>
                  <Select
                    value={settings.twoWayPropA || AUTO_VALUE}
                    onValueChange={onSelect('twoWayPropA')}
                    disabled={!settings.twoWay}
                  >
                    <SelectTrigger id="twoWayPropA" className={inputTriggerClass}>
                      <SelectValue placeholder="Auto" />
                    </SelectTrigger>
                    <SelectContent>
                      {twoWayOptions.map((option) => (
                        <SelectItem key={`twoWayA-${option}`} value={option}>
                          {option === AUTO_VALUE ? 'Auto' : option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <Label className="text-xs font-medium text-muted-foreground" htmlFor="twoWayPropB">
                    Second property
                  </Label>
                  <Select
                    value={settings.twoWayPropB || AUTO_VALUE}
                    onValueChange={onSelect('twoWayPropB')}
                    disabled={!settings.twoWay}
                  >
                    <SelectTrigger id="twoWayPropB" className={inputTriggerClass}>
                      <SelectValue placeholder="Auto" />
                    </SelectTrigger>
                    <SelectContent>
                      {twoWayOptions.map((option) => (
                        <SelectItem key={`twoWayB-${option}`} value={option}>
                          {option === AUTO_VALUE ? 'Auto' : option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                {variantProps.length > 0
                  ? `Found ${variantProps.length} properties in your selection.`
                  : 'Select a variant component to auto-detect property axes.'}
              </p>
            </div>
          </CollapsibleSection>

          {/* Collapsible: Output & AI options */}
          <CollapsibleSection
            title="Output & AI options"
            icon={<BracketsCurlyIcon size={16} />}
          >
            <div className="grid gap-2">
              <ToggleField
                id="dataAttributes"
                title="Detailed data attributes"
                hint="Include fill, stroke, and effect details in JSON."
                checked={settings.includeDataAttributes}
                onCheckedChange={onToggle('includeDataAttributes')}
              />
              <ToggleField
                id="agentPack"
                title="AI-ready JSON"
                hint="Add metadata AI tools (Codex, MCP, Claude) can use."
                checked={settings.agentReadyData}
                onCheckedChange={onToggle('agentReadyData')}
              />
              <ToggleField
                id="aiCompact"
                title="Compact mode"
                hint="Shorter output using fewer AI tokens."
                checked={settings.aiCompactMode}
                disabled={!settings.agentReadyData}
                onCheckedChange={onToggle('aiCompactMode')}
              />
              <ToggleField
                id="outerLayout"
                title="Show parent layout"
                hint="Annotate the frame around your component too."
                checked={settings.showOuterLayout}
                onCheckedChange={onToggle('showOuterLayout')}
              />
            </div>
            <div className="mt-3 space-y-1">
              <Label className="text-xs font-medium text-muted-foreground" htmlFor="framework">
                Target framework
              </Label>
              <Select value={settings.framework} onValueChange={onSelect('framework')}>
                <SelectTrigger id="framework" className={inputTriggerClass}>
                  <SelectValue placeholder="Auto-detect" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Auto-detect</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="nextjs">Next.js</SelectItem>
                  <SelectItem value="vue">Vue</SelectItem>
                  <SelectItem value="svelte">Svelte</SelectItem>
                  <SelectItem value="flutter">Flutter</SelectItem>
                  <SelectItem value="html">HTML / CSS</SelectItem>
                  <SelectItem value="react-native">React Native</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Tailors Copy AI Specs instructions to this framework.
              </p>
            </div>
          </CollapsibleSection>

          {/* Collapsible: Number & color formatting */}
          <CollapsibleSection
            title="Number & color formatting"
            icon={<FadersHorizontalIcon size={16} />}
          >
            <div className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <ToggleField
                  id="multiColumn"
                  title="Multi-column output"
                  hint="Arrange sections side by side."
                  checked={settings.multiColumn}
                  onCheckedChange={onToggle('multiColumn')}
                />
                <div className="space-y-1">
                  <Label className="text-xs font-medium text-muted-foreground" htmlFor="columnCount">
                    Columns
                  </Label>
                  <Select
                    value={String(settings.columnCount)}
                    onValueChange={onSelectNumber('columnCount')}
                    disabled={!settings.multiColumn}
                  >
                    <SelectTrigger id="columnCount" className={inputTriggerClass} aria-label="Column count">
                      <SelectValue placeholder="2 columns" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 columns</SelectItem>
                      <SelectItem value="3">3 columns</SelectItem>
                      <SelectItem value="4">4 columns</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <Label className="text-xs font-medium text-muted-foreground" htmlFor="colorFormat">
                    Color format
                  </Label>
                  <Select value={settings.colorFormat} onValueChange={onSelect('colorFormat')}>
                    <SelectTrigger id="colorFormat" className={inputTriggerClass}>
                      <SelectValue placeholder="HEX" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hex">HEX</SelectItem>
                      <SelectItem value="hsla">HSLA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1">
                  <Label className="text-xs font-medium text-muted-foreground" htmlFor="spacingUnit">
                    Spacing unit
                  </Label>
                  <Select value={settings.spacingUnit} onValueChange={onSelect('spacingUnit')}>
                    <SelectTrigger id="spacingUnit" className={inputTriggerClass}>
                      <SelectValue placeholder="px" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="px">px</SelectItem>
                      <SelectItem value="rem">rem</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <Label className="text-xs font-medium text-muted-foreground" htmlFor="remBase">
                    Base font size (for rem)
                  </Label>
                  <Input
                    id="remBase"
                    type="number"
                    min={8}
                    max={32}
                    value={settings.remBase}
                    onChange={onNumber('remBase')}
                    className="h-11"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs font-medium text-muted-foreground" htmlFor="precision">
                    Decimal places
                  </Label>
                  <Input
                    id="precision"
                    type="number"
                    min={0}
                    max={4}
                    value={settings.valuePrecision}
                    onChange={onNumber('valuePrecision')}
                    className="h-11"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label className="text-xs font-medium text-muted-foreground" htmlFor="valuePreference">
                  Prefer variables or tokens
                </Label>
                <Select value={settings.valuePreference} onValueChange={onSelect('valuePreference')}>
                  <SelectTrigger id="valuePreference" className={inputTriggerClass}>
                    <SelectValue placeholder="Variable" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="variable">Show variable names</SelectItem>
                    <SelectItem value="token">Show token names</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <ToggleField
                  id="showRaw"
                  title="Show raw numbers"
                  hint="Display computed numbers next to names."
                  checked={settings.showRawValues}
                  onCheckedChange={onToggle('showRawValues')}
                />
                <ToggleField
                  id="typographyFormat"
                  title="Custom text styles"
                  hint="Use local Figma text styles in the spec."
                  checked={settings.typographyFormat}
                  onCheckedChange={onToggle('typographyFormat')}
                />
              </div>
            </div>
          </CollapsibleSection>
        </div>
      ) : null}

      {/* Sticky Footer */}
      <footer className="sticky-footer z-10 mt-4 border-t border-border bg-background px-4 py-3">
        <div className="flex gap-2">
          <Button
            id="generate"
            onClick={send}
            disabled={isGenerating}
            className={`h-11 flex-1 active:bg-primary/80 ${generateSuccess ? 'bg-green-600 hover:bg-green-700 text-white' : ''}`}
          >
            {isGenerating ? (
              'Generating...'
            ) : generateSuccess ? (
              <span className="flex items-center justify-center gap-1.5">
                <CheckCircleIcon size={16} weight="bold" />
                Generated
              </span>
            ) : (
              'Generate specs'
            )}
          </Button>
          {generateSuccess && (
            <Button
              id="copy-ai-specs"
              onClick={copyAiSpecs}
              disabled={isCopying}
              className={`h-11 shrink-0 ${copySuccess ? 'bg-green-600 hover:bg-green-700 text-white' : ''}`}
            >
              {copySuccess ? (
                <span className="flex items-center gap-1.5">
                  <CheckCircleIcon size={16} weight="bold" />
                  Copied!
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <CopyIcon size={16} />
                  Copy AI Specs
                </span>
              )}
            </Button>
          )}
        </div>
      </footer>
    </div>
  );
};

export const mount = (rootElement: HTMLElement) => {
  createRoot(rootElement).render(<App />);
};
