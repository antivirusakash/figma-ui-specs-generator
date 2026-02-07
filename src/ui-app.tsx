import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BracketsCurly,
  CheckCircle,
  Cube,
  FadersHorizontal,
  FlowArrow,
  Info,
  Rows,
  Sparkle
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
};

type PluginMessage =
  | { type: 'variant-props'; props: string[] }
  | { type: 'generate'; settings: Settings }
  | { type: 'close' }
  | { type: 'error'; message: string };

type Preset = 'handoff' | 'agent' | 'compact';
type AppTab = 'generate' | 'learn';

const AUTO_VALUE = '__auto__';

const DEFAULT_SETTINGS: Settings = {
  anatomy: true,
  tabularAnatomy: false,
  completeAnatomy: true,
  includeNestedComponents: false,
  properties: true,
  twoWay: true,
  twoWayPropA: '',
  twoWayPropB: '',
  layout: true,
  inventory: true,
  data: true,
  variables: true,
  modes: true,
  includeDataAttributes: true,
  agentReadyData: true,
  aiCompactMode: true,
  showOuterLayout: true,
  multiColumn: false,
  columnCount: 2,
  colorFormat: 'hex',
  typographyFormat: true,
  spacingUnit: 'px',
  remBase: 16,
  valuePrecision: 2,
  showRawValues: false,
  valuePreference: 'variable'
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
  const [selectedPreset, setSelectedPreset] = useState<Preset | null>(null);

  useEffect(() => {
    console.log('[SpecsPlugin UI] mounted');
    const handler = (event: MessageEvent) => {
      const message = event.data?.pluginMessage as PluginMessage | undefined;
      if (!message) return;
      console.log('[SpecsPlugin UI] message', message);
      if (message.type === 'variant-props') {
        setVariantProps(message.props || []);
      }
      if (message.type === 'error') {
        setIsGenerating(false);
        setErrorMessage(message.message || 'Something went wrong.');
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const twoWayOptions = useMemo(() => [AUTO_VALUE].concat(variantProps), [variantProps]);

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
    setTimeout(() => {
      setIsGenerating(false);
    }, 2500);
  }, [settings]);

  const close = useCallback(() => {
    console.log('[SpecsPlugin UI] close clicked');
    parent.postMessage({ pluginMessage: { type: 'close' } }, '*');
  }, []);

  return (
    <div className="min-h-dvh pb-20">
      {/* Compact Header */}
      <header className="space-y-1 p-4 pb-2">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-2 py-1 text-xs font-medium text-muted-foreground">
          <Sparkle size={14} />
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
        </div>
      </div>

      {/* Learn Tab */}
      {activeTab === 'learn' ? (
        <div id="panel-learn" role="tabpanel" aria-labelledby="tab-learn" className="space-y-4 px-4">
          {/* Section A: How to use */}
          <section className={panelClass}>
            <h2 className="mb-3 text-sm font-semibold text-foreground">How to use this plugin</h2>
            <div className="grid gap-2">
              <div className="flex items-start gap-2 rounded-lg border border-border bg-background/60 p-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">1</div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium text-foreground">Select a component</p>
                  <p className="text-xs text-muted-foreground">Click any component, instance, or frame on your canvas.</p>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-lg border border-border bg-background/60 p-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">2</div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium text-foreground">Pick a starting point</p>
                  <p className="text-xs text-muted-foreground">Choose Full handoff, AI agent, or Quick check.</p>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-lg border border-border bg-background/60 p-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">3</div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium text-foreground">Adjust if needed</p>
                  <p className="text-xs text-muted-foreground">Toggle sections, expand advanced options to fine-tune.</p>
                </div>
              </div>
              <div className="flex items-start gap-2 rounded-lg border border-border bg-background/60 p-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">4</div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium text-foreground">Hit Generate</p>
                  <p className="text-xs text-muted-foreground">A specs frame appears right next to your selection.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section B: What each section produces */}
          <CollapsibleSection title="What each section produces" defaultOpen>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-background/40 p-3">
                <p className="text-sm font-medium text-foreground">Layer breakdown</p>
                <p className="text-xs text-muted-foreground">Every layer with its key visual details.</p>
              </div>
              <div className="rounded-lg border border-border bg-background/40 p-3">
                <p className="text-sm font-medium text-foreground">Variant properties</p>
                <p className="text-xs text-muted-foreground">How each variant option changes the component.</p>
              </div>
              <div className="rounded-lg border border-border bg-background/40 p-3">
                <p className="text-sm font-medium text-foreground">Layout & spacing</p>
                <p className="text-xs text-muted-foreground">Auto-layout direction, gaps, padding, and sizing.</p>
              </div>
              <div className="rounded-lg border border-border bg-background/40 p-3">
                <p className="text-sm font-medium text-foreground">Data export</p>
                <p className="text-xs text-muted-foreground">Structured JSON for dev tools and AI agents.</p>
              </div>
              <div className="rounded-lg border border-border bg-background/40 p-3">
                <p className="text-sm font-medium text-foreground">Style inventory</p>
                <p className="text-xs text-muted-foreground">Colors, text styles, variables, and tokens used.</p>
              </div>
              <div className="rounded-lg border border-border bg-background/40 p-3">
                <p className="text-sm font-medium text-foreground">Variables</p>
                <p className="text-xs text-muted-foreground">Resolved value of each Figma variable.</p>
              </div>
              <div className="rounded-lg border border-border bg-background/40 p-3">
                <p className="text-sm font-medium text-foreground">Modes</p>
                <p className="text-xs text-muted-foreground">Compare the component across variable modes (e.g. light/dark).</p>
              </div>
            </div>
          </CollapsibleSection>

          {/* Section C: Tips for AI workflows */}
          <CollapsibleSection title="Tips for AI workflows">
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-start gap-2 rounded-lg border border-border bg-background/60 p-3">
                <Info size={14} className="mt-0.5 shrink-0 text-primary" />
                <p>Use the AI / code agent preset for smallest output.</p>
              </div>
              <div className="flex items-start gap-2 rounded-lg border border-border bg-background/60 p-3">
                <Info size={14} className="mt-0.5 shrink-0 text-primary" />
                <p>Compact mode cuts output length by ~60%.</p>
              </div>
              <div className="flex items-start gap-2 rounded-lg border border-border bg-background/60 p-3">
                <Info size={14} className="mt-0.5 shrink-0 text-primary" />
                <p>Only include sections your AI tool needs.</p>
              </div>
              <div className="flex items-start gap-2 rounded-lg border border-border bg-background/60 p-3">
                <Info size={14} className="mt-0.5 shrink-0 text-primary" />
                <p>Generate from focused frames, not entire pages.</p>
              </div>
            </div>
          </CollapsibleSection>
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
            icon={<Rows size={16} />}
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
            icon={<FlowArrow size={16} />}
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
            icon={<BracketsCurly size={16} />}
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
          </CollapsibleSection>

          {/* Collapsible: Number & color formatting */}
          <CollapsibleSection
            title="Number & color formatting"
            icon={<FadersHorizontal size={16} />}
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
            className="h-11 flex-1 active:bg-primary/80"
          >
            {isGenerating ? 'Generating specs...' : 'Generate specs'}
          </Button>
          <Button id="close" variant="secondary" onClick={close} className="h-11 active:bg-secondary/70">
            Close
          </Button>
        </div>
      </footer>
    </div>
  );
};

export const mount = (rootElement: HTMLElement) => {
  createRoot(rootElement).render(<App />);
};
