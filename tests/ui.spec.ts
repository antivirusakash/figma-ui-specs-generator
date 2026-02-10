import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const uiPath = path.join(root, 'dist', 'ui.html');
const docsRoot = path.join(root, 'specsplugin-docs');
const pluginCodeRoot = path.join(root, 'src');

const readDoc = (docPath: string) =>
  fs.readFileSync(path.join(docsRoot, docPath), 'utf8');

const getPluginSourcePaths = () => {
  const results: string[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
        continue;
      }
      if (!entry.isFile() || !full.endsWith('.ts')) continue;
      if (full.endsWith(path.join('src', 'ui.tsx')) || full.endsWith(path.join('src', 'ui-app.tsx'))) continue;
      if (full.includes(`${path.sep}src${path.sep}ui${path.sep}`)) continue;
      results.push(full);
    }
  };
  walk(pluginCodeRoot);
  return results.sort();
};

const readPluginCode = () =>
  getPluginSourcePaths()
    .map((sourcePath) => fs.readFileSync(sourcePath, 'utf8'))
    .join('\n\n');

const featureMap = [
  { id: 'anatomy', doc: 'anatomy.md', heading: /#\s+Anatomy/i },
  { id: 'tabularAnatomy', doc: 'features/tabular-anatomy.md', heading: /#\s+Tabular Anatomy/i },
  { id: 'completeAnatomy', doc: 'features/complete-anatomy.md', heading: /#\s+Complete Anatomy and Layout/i },
  { id: 'nestedComponents', doc: 'features/spec-nested-components.md', heading: /#\s+Spec nested components/i },
  { id: 'properties', doc: 'properties.md', heading: /#\s+Properties/i },
  { id: 'twoWay', doc: 'features/two-way.md', heading: /#\s+Two Way Comparisons/i },
  { id: 'layout', doc: 'layout-and-spacing.md', heading: /#\s+Layout and spacing/i },
  { id: 'data', doc: 'features/data.md', heading: /#\s+Data/i },
  { id: 'inventory', doc: 'features/styling-inventory.md', heading: /#\s+Styling inventory/i },
  { id: 'variables', doc: 'features/variables.md', heading: /#\s+Variable/i },
  { id: 'modes', doc: 'features/modes.md', heading: /#\s+Modes/i },
  { id: 'multiColumn', doc: 'features/multi-column-layout.md', heading: /#\s+Multi-column layout/i },
  { id: 'colorFormat', doc: 'features/format-color.md', heading: /#\s+Custom color formats/i },
  { id: 'spacingUnit', doc: 'features/format-spacing.md', heading: /#\s+Custom spacing/i },
  { id: 'typographyFormat', doc: 'features/format-typography.md', heading: /#\s+Custom typography/i },
  { id: 'valuePreference', doc: 'features/format-values.md', heading: /#\s+Custom value formats/i },
  { id: 'precision', doc: 'features/format-values.md', heading: /#\s+Custom value formats/i },
  { id: 'showRaw', doc: 'features/format-values.md', heading: /#\s+Custom value formats/i },
  { id: 'dataAttributes', doc: 'features/data.md', heading: /#\s+Data/i }
];

test('ui exposes all documented feature controls', async ({ page }) => {
  await page.goto(`file://${uiPath}`);

  for (const feature of featureMap) {
    const doc = readDoc(feature.doc);
    expect(doc).toMatch(feature.heading);
    await expect(page.locator(`#${feature.id}`)).toHaveCount(1);
  }
});

test('tokens studio inventory is mentioned and payment UI is absent', async ({ page }) => {
  await page.goto(`file://${uiPath}`);
  const text = await page.locator('body').innerText();
  expect(text.toLowerCase()).toContain('tokens studio');
  expect(text.toLowerCase()).not.toContain('payment');
  expect(text.toLowerCase()).not.toContain('subscribe');
});

test('two-way properties accept dynamic options', async ({ page }) => {
  await page.goto(`file://${uiPath}`);

  await page.evaluate(() => {
    window.postMessage(
      {
        pluginMessage: {
          type: 'variant-props',
          props: ['state', 'variant', 'size']
        }
      },
      '*'
    );
  });

  await page.locator('#twoWayPropA').click();
  const options = page.getByRole('option');
  await expect(options).toHaveCount(4);
  await expect(options.nth(0)).toHaveText('Auto');
  await expect(options.nth(1)).toHaveText('state');
  await expect(options.nth(2)).toHaveText('variant');
  await expect(options.nth(3)).toHaveText('size');
  await page.keyboard.press('Escape');
});

test('agent-ready data pack toggle is visible and enabled by default', async ({ page }) => {
  await page.goto(`file://${uiPath}`);
  const toggle = page.locator('#agentPack');
  await expect(toggle).toHaveCount(1);
  await expect(toggle).toBeChecked();
});

test('ai compact mode toggle exists, defaults on, and follows agent-pack availability', async ({ page }) => {
  await page.goto(`file://${uiPath}`);
  const compact = page.locator('#aiCompact');
  const agentPack = page.locator('#agentPack');

  await expect(compact).toHaveCount(1);
  await expect(compact).toBeChecked();
  await expect(compact).toBeEnabled();

  await agentPack.click();
  await expect(compact).toBeDisabled();
});

test('preset actions show explicit apply labels and active confirmation', async ({ page }) => {
  await page.goto(`file://${uiPath}`);
  await expect(page.getByRole('button', { name: /apply agent extraction/i })).toHaveCount(1);
  await expect(page.getByRole('button', { name: /apply designer handoff/i })).toHaveCount(1);

  await page.getByRole('button', { name: /apply agent extraction/i }).click();
  await expect(page.getByText(/Current preset:\s*Agent extraction/i)).toHaveCount(1);
});

test('agent extraction preset applies json-focused low-token defaults', async ({ page }) => {
  await page.goto(`file://${uiPath}`);

  await page.getByRole('button', { name: /apply agent extraction/i }).click();

  await expect(page.locator('#anatomy')).toBeChecked();
  await expect(page.locator('#data')).toBeChecked();
  await expect(page.locator('#agentPack')).toBeChecked();
  await expect(page.locator('#aiCompact')).toBeChecked();

  await expect(page.locator('#properties')).not.toBeChecked();
  await expect(page.locator('#layout')).not.toBeChecked();
  await expect(page.locator('#inventory')).not.toBeChecked();
  await expect(page.locator('#dataAttributes')).not.toBeChecked();
  await expect(page.locator('#multiColumn')).not.toBeChecked();
});

test('plugin code avoids dynamic-page forbidden sync APIs', async () => {
  const code = readPluginCode();

  const forbiddenPatterns = [
    /\bmainComponent\b/,
    /\bfigma\.getNodeById\s*\(/,
    /\bfigma\.getStyleById\s*\(/,
    /\bfigma\.getLocalTextStyles\s*\(/,
    /\bfigma\.getLocalPaintStyles\s*\(/,
    /\bfigma\.getLocalEffectStyles\s*\(/,
    /\bfigma\.getLocalGridStyles\s*\(/,
    /\btextStyleId\s*=/,
    /\bfillStyleId\s*=/,
    /\bstrokeStyleId\s*=/,
    /\beffectStyleId\s*=/,
    /\bgridStyleId\s*=/,
    /\breactions\s*=/,
    /\bvectorNetwork\s*=/,
    /\bsetRangeTextStyleId\s*\(/,
    /\bsetRangeFillStyleId\s*\(/,
    /\bsetBoundVariable\s*\(/,
    /\bfigma\.variables\.getVariableById\s*\(/,
    /\bfigma\.variables\.getVariableCollectionById\s*\(/,
    /\bfigma\.variables\.getLocalVariableCollections\s*\(/,
    /\bfigma\.variables\.getLocalVariables\s*\(/,
    /\bfigma\.variables\.createVariable\s*\(/,
    /\bfigma\.root\.(findAll|findAllWithCriteria|findOne|findWidgetNodesByWidgetId)\s*\(/
  ];

  for (const pattern of forbiddenPatterns) {
    expect(code).not.toMatch(pattern);
  }
});

test('specsplugin-docs features are wired in plugin generation code', async () => {
  const code = readPluginCode();
  const featureWiringChecks: Array<{ doc: string; required: RegExp[] }> = [
    { doc: 'anatomy.md', required: [/settings\.anatomy/, /createAnatomySection/] },
    { doc: 'properties.md', required: [/settings\.properties/, /createPropertiesSection/] },
    { doc: 'layout-and-spacing.md', required: [/settings\.layout/, /createLayoutSection/] },
    { doc: 'features/data.md', required: [/settings\.data/, /createDataSection/] },
    { doc: 'features/styling-inventory.md', required: [/settings\.inventory/, /createInventorySection/] },
    { doc: 'features/complete-anatomy.md', required: [/settings\.completeAnatomy/, /createCompleteVariantSections/] },
    { doc: 'features/spec-nested-components.md', required: [/settings\.includeNestedComponents/, /createNestedComponentSections/] },
    { doc: 'features/two-way.md', required: [/settings\.twoWay/, /collectTwoWaySpec/] },
    { doc: 'features/variables.md', required: [/settings\.variables/, /createVariablesSection/] },
    { doc: 'features/modes.md', required: [/settings\.modes/, /createModesSection/] },
    { doc: 'features/dark-mode.md', required: [/getTheme/] },
    { doc: 'features/format-color.md', required: [/settings\.colorFormat/] },
    { doc: 'features/format-spacing.md', required: [/settings\.spacingUnit/, /settings\.remBase/] },
    { doc: 'features/format-typography.md', required: [/settings\.typographyFormat/, /prepareSpecTextStyles/] },
    { doc: 'features/format-values.md', required: [/settings\.valuePreference/, /settings\.showRawValues/] },
    { doc: 'features/multi-column-layout.md', required: [/settings\.multiColumn/, /createColumnFrames/] },
    { doc: 'features/tabular-anatomy.md', required: [/settings\.tabularAnatomy/] },
    { doc: 'features/tokens-studio.md', required: [/detectTokensStudio/, /tokensstudio/] }
  ];

  for (const check of featureWiringChecks) {
    const doc = readDoc(check.doc);
    expect(doc.length).toBeGreaterThan(0);
    for (const pattern of check.required) {
      expect(code).toMatch(pattern);
    }
  }
});

test('multi-column root frame sizing keeps height auto', async () => {
  const code = readPluginCode();
  expect(code).toMatch(/frame\.primaryAxisSizingMode = settings\.multiColumn \? "FIXED" : "AUTO"/);
  expect(code).toMatch(/frame\.counterAxisSizingMode = settings\.multiColumn \? "AUTO" : "FIXED"/);
});

test('shared plugin data reads are guarded against namespace runtime errors', async () => {
  const code = readPluginCode();
  expect(code).toMatch(/function getSafeSharedPluginDataKeys/);
  expect(code).toMatch(/SHARED_NAMESPACE_PATTERN/);
  expect(code).toMatch(/node\.getSharedPluginDataKeys\(namespace\)/);
});

test('layout section and data preview stay compact for multi-column readability', async () => {
  const code = readPluginCode();
  expect(code).toMatch(/body\.layoutMode = "VERTICAL"/);
  expect(code).toMatch(/toDataSectionPreview/);
  expect(code).toMatch(/chunks\[\]\.node_ids/);
  expect(code).toMatch(/textChunks = chunks\.slice\(0, LIMITS/);
});

test('agent payload supports compact low-token schema mode', async () => {
  const code = readPluginCode();
  expect(code).toMatch(/aiCompactMode/);
  expect(code).toMatch(/compact_mode/);
  expect(code).toMatch(/specs-plugin\.agent_pack\.v1[12]\.yaml\.compact/);
});

test('text nodes collect explicit text fill attribute in specs data', async () => {
  const code = readPluginCode();
  expect(code).toMatch(/key:\s*"Text fill"/);
  expect(code).toMatch(/textNode\.fills === figma\.mixed/);
});

test('anatomy section uses curated highlights and compact overlay markers', async () => {
  const code = readPluginCode();
  expect(code).toMatch(/pickAnatomyHighlights\(/);
  expect(code).toMatch(/highlighted elements from/);
  expect(code).toMatch(/summarizeAnatomyAttributes/);
  expect(code).toMatch(/overlay\.fills = \[solidFill\(theme\.accent, 0\.04\)\]/);
});

test('artwork preview prioritizes width scaling and preserves full height content', async () => {
  const code = readPluginCode();
  expect(code).toMatch(/Math\.min\(1, widthScale\)/);
  expect(code).toMatch(/const height = clone\.height \+ padding \* 2/);
});
