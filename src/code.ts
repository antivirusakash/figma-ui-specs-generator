// Specs Plugin - local implementation based on specsplugin-docs
import {
  FONT_MEDIUM,
  FONT_REGULAR,
  SPECS_COLUMN_GAP,
  SPECS_COLUMN_WIDTH,
  UI_HEIGHT,
  UI_WIDTH
} from "./plugin/constants";
import { Inventory } from "./plugin/inventory";
import { log, logError } from "./plugin/logger";
import { createAnatomySection as createAnatomySectionModule } from "./plugin/sections/anatomy-section";
import { createDataSection as createDataSectionModule } from "./plugin/sections/data-section";
import {
  collectLayoutData as collectLayoutDataModule,
  createLayoutSection as createLayoutSectionModule
} from "./plugin/sections/layout-section";
import { createInventorySection as createInventorySectionModule } from "./plugin/sections/inventory-section";
import {
  buildElementKey as buildElementKeyModule,
  buildLayoutKey as buildLayoutKeyModule,
  collectPropertySpecs as collectPropertySpecsModule,
  collectTwoWaySpec as collectTwoWaySpecModule,
  createPropertiesSection as createPropertiesSectionModule,
  createTwoWaySection as createTwoWaySectionModule
} from "./plugin/sections/properties-section";
import {
  createModesSection as createModesSectionModule,
  createVariablesSection as createVariablesSectionModule
} from "./plugin/sections/variables-section";
import { clamp, getTheme } from "./plugin/theme";
import type {
  AnatomyElement,
  DataModel,
  LayoutSpec,
  Settings,
  SpecTextRole,
  Theme,
  TwoWaySpec
} from "./plugin/types";

// Helpers
import { formatColor, formatSpacing, solidFill, truncateText } from "./plugin/helpers/format";
import {
  collectAnatomyElements,
  getMainComponentSafe,
  resolveComponentSet
} from "./plugin/helpers/anatomy-collector";
import {
  createArtworkFrame,
  createContentCard,
  createSectionFrame as createSectionFrameHelper,
  createTableRow as createTableRowHelper
} from "./plugin/helpers/frame-builders";
import {
  createTextNode,
  fitTextSingleLine,
  fitTextToWidth,
  getSectionContentWidth,
  normalizeTextWrapping
} from "./plugin/helpers/text-helpers";

figma.showUI(__html__, { width: UI_WIDTH, height: UI_HEIGHT });
figma.skipInvisibleInstanceChildren = true;
log("Runtime configured", {
  documentAccess: "dynamic-page",
  skipInvisibleInstanceChildren: figma.skipInvisibleInstanceChildren
});

figma.on("selectionchange", () => {
  log("Selection changed", figma.currentPage.selection.map((node) => `${node.type}:${node.name}`));
  void sendVariantPropsToUi();
});
void sendVariantPropsToUi();

let useSpecTextStyles = false;
let specTextStyles: Partial<Record<SpecTextRole, TextStyle>> = {};

figma.ui.onmessage = async (msg) => {
  try {
    log("UI message received", msg?.type);
    if (msg.type === "close") {
      figma.closePlugin();
      return;
    }
    if (msg.type === "generate") {
      await generateSpecs(msg.settings as Settings);
    }
  } catch (error) {
    logError("UI message handler failed", error);
    figma.notify("Specs failed. Check the console for details.");
  }
};

// Thin wrappers that bind module-level state
function createText(
  text: string,
  size = 12,
  font = FONT_REGULAR,
  color = "#2b3345",
  role?: SpecTextRole
) {
  return createTextNode(text, size, font, color, role, specTextStyles, useSpecTextStyles);
}

function createSectionFrame(title: string, theme: Theme) {
  return createSectionFrameHelper(title, theme, createText);
}

function createTableRow(
  columns: Array<{ label: string; width: number; wrap?: boolean }>,
  theme: Theme,
  isHeader: boolean,
  rowIndex = 0
) {
  return createTableRowHelper(columns, theme, isHeader, rowIndex, createText, fitTextSingleLine, fitTextToWidth);
}

function normalizeTextWrappingLocal(root: BaseNode) {
  normalizeTextWrapping(root, fitTextToWidth);
}

// Unified deps object — passed to all section modules
const deps = {
  createSectionFrame,
  createText,
  createTableRow,
  createContentCard,
  createArtworkFrame,
  fitTextToWidth,
  fitTextSingleLine,
  getSectionContentWidth,
  solidFill,
  formatSpacing,
  formatColor,
  truncateText,
  collectAnatomyElements,
  getMainComponentSafe,
  collectLayoutData,
  log,
  logError
};

async function generateSpecs(settings: Settings) {
  const selection = figma.currentPage.selection;
  log("Generate specs invoked", {
    selectionCount: selection.length,
    selection: selection.map((node) => `${node.type}:${node.name}`),
    settings
  });
  if (selection.length === 0) {
    figma.notify("Select a component, instance, or frame to generate specs.");
    return;
  }

  if (selection.length > 1) {
    figma.notify("Multiple selections detected. Using the first item.");
  }

  const target = selection[0];
  if (!target) return;

  let specsFrame: FrameNode | null = null;
  try {
    await loadFonts();

    const inventory = new Inventory();
    const theme = getTheme();
    await prepareSpecTextStyles(theme, settings.typographyFormat);

    specsFrame = createSpecsRootFrame(target.name, target, settings, theme);
    const columnCount = settings.multiColumn ? Math.min(4, Math.max(2, settings.columnCount || 2)) : 1;
    const columns = settings.multiColumn
      ? createColumnFrames(specsFrame, columnCount, SPECS_COLUMN_WIDTH)
      : [specsFrame];
    const columnHeights = columns.map(() => 0);
    let sectionCount = 0;
    const appendSection = (section: FrameNode) => {
      let targetColumnIndex = 0;
      if (settings.multiColumn && columnHeights.length > 1) {
        for (let index = 1; index < columnHeights.length; index += 1) {
          const current = columnHeights[index] ?? Number.POSITIVE_INFINITY;
          const best = columnHeights[targetColumnIndex] ?? Number.POSITIVE_INFINITY;
          if (current < best) {
            targetColumnIndex = index;
          }
        }
      }
      const column = columns[targetColumnIndex];
      if (column) {
        column.appendChild(section);
        if (settings.multiColumn) {
          // Force section width to column width before wrapping text.
          section.resizeWithoutConstraints(Math.max(240, Math.round(column.width)), Math.max(1, section.height));
        } else {
          // Single-column: force section width to root content width.
          const pad = (specsFrame?.paddingLeft ?? 0) + (specsFrame?.paddingRight ?? 0);
          const rootContentWidth = Math.max(280, Math.round((specsFrame?.width ?? 900) - pad));
          section.resizeWithoutConstraints(rootContentWidth, Math.max(1, section.height));
        }
      } else {
        specsFrame?.appendChild(section);
      }
      normalizeTextWrappingLocal(section);
      sectionCount += 1;
      columnHeights[targetColumnIndex] = (columnHeights[targetColumnIndex] ?? 0) + Math.max(220, section.height) + 18;
      log("Section appended", {
        section: section.name,
        column: targetColumnIndex + 1,
        sectionHeight: Math.round(section.height),
        estimatedColumnHeights: columnHeights.map((value) => Math.round(value))
      });
    };

    const dataModel: DataModel = {
      anatomy: [],
      properties: [],
      layout: []
    };

    // Derive side-by-side section width from artwork's natural size
    const sideBySideAnatomy = settings.anatomy && settings.layout && !settings.multiColumn;
    let artworkSectionWidth: number | undefined;
    if (sideBySideAnatomy) {
      const targetWidth = target.absoluteBoundingBox?.width ?? 320;
      const artworkPadding = 16 * 2; // padding inside artwork frame
      const sectionPadding = 20 * 2; // section frame left+right padding
      artworkSectionWidth = Math.round(targetWidth + artworkPadding + sectionPadding);
    }

    let anatomySection: FrameNode | null = null;
    if (settings.anatomy || settings.data) {
      const anatomyElements = await collectAnatomyElements(target, inventory, settings);
      log("Anatomy elements collected", anatomyElements.length);
      dataModel.anatomy = anatomyElements.map((element) => ({ ...element }));
      if (settings.anatomy) {
        const sideBySide = settings.layout && !settings.multiColumn;
        const sectionSettings = sideBySide ? { ...settings, multiColumn: true, sectionWidth: artworkSectionWidth } : settings;
        anatomySection = createAnatomySection(target, anatomyElements, sectionSettings, theme);
      }
    }

    if (settings.completeAnatomy) {
      const variantSections = await createCompleteVariantSections(target, inventory, settings, theme);
      log("Complete anatomy sections", variantSections.length);
      variantSections.forEach((section) => appendSection(section));
    }

    const propertySpecs =
      settings.properties || settings.data ? await collectPropertySpecs(target, inventory, settings) : [];
    const twoWaySpec = settings.twoWay ? await collectTwoWaySpec(target, settings, inventory) : null;

    if (settings.properties) {
      dataModel.properties = propertySpecs.map((spec) => ({ ...spec }));
      const propertiesSection = await createPropertiesSection(
        target,
        propertySpecs,
        settings,
        theme,
        twoWaySpec ?? undefined
      );
      appendSection(propertiesSection);
    }

    if (settings.twoWay && !settings.properties && twoWaySpec) {
      const twoWaySection = createTwoWaySection(twoWaySpec, theme);
      appendSection(twoWaySection);
    }

    const layoutData = settings.layout || settings.data ? collectLayoutData(target) : [];
    if (layoutData.length > 0) {
      log("Layout specs collected", layoutData.length);
    }
    if (settings.data) {
      dataModel.layout = layoutData.map((spec) => ({ ...spec }));
    }
    let layoutSection: FrameNode | null = null;
    if (settings.layout) {
      const sideBySide = settings.anatomy && !settings.multiColumn;
      const sectionSettings = sideBySide ? { ...settings, multiColumn: true, sectionWidth: artworkSectionWidth } : settings;
      layoutSection = createLayoutSection(target, layoutData, settings.showOuterLayout, theme, sectionSettings);
    }

    // Side-by-side row when both Anatomy and Layout exist (single-column mode only)
    if (anatomySection && layoutSection) {
      const row = figma.createFrame();
      row.name = "Anatomy + Layout";
      row.layoutMode = "HORIZONTAL";
      row.layoutAlign = "STRETCH";
      row.primaryAxisSizingMode = "AUTO";
      row.counterAxisSizingMode = "AUTO";
      row.itemSpacing = 18;
      row.fills = [];
      anatomySection.layoutGrow = 1;
      layoutSection.layoutGrow = 1;
      row.appendChild(anatomySection);
      row.appendChild(layoutSection);
      // Resize root frame to fit artwork-driven section widths
      if (artworkSectionWidth && specsFrame) {
        const rootPad = (specsFrame.paddingLeft ?? 0) + (specsFrame.paddingRight ?? 0);
        const newRootWidth = artworkSectionWidth * 2 + 18 + rootPad;
        specsFrame.resizeWithoutConstraints(newRootWidth, specsFrame.height);
      }
      appendSection(row);
      anatomySection.resizeWithoutConstraints(artworkSectionWidth ?? anatomySection.width, anatomySection.height);
      layoutSection.resizeWithoutConstraints(artworkSectionWidth ?? layoutSection.width, layoutSection.height);
      normalizeTextWrappingLocal(anatomySection);
      normalizeTextWrappingLocal(layoutSection);
    } else {
      if (anatomySection) appendSection(anatomySection);
      if (layoutSection) appendSection(layoutSection);
    }

    if (settings.includeNestedComponents) {
      const nestedSections = await createNestedComponentSections(target, inventory, settings, theme);
      log("Nested component sections", nestedSections.length);
      nestedSections.forEach((section) => appendSection(section));
    }

    if (settings.modes) {
      const modesSection = await createModesSection(target, inventory, settings, theme);
      if (modesSection) {
        appendSection(modesSection);
      }
    }

    if (settings.variables) {
      const variablesSection = await createVariablesSection(inventory, settings, theme);
      appendSection(variablesSection);
    }

    if (settings.data) {
      const dataSection = createDataSection(dataModel, settings.includeDataAttributes, theme, target, settings, inventory);
      appendSection(dataSection);
    }

    if (settings.inventory) {
      const inventorySection = createInventorySection(inventory, theme, settings);
      appendSection(inventorySection);
    }

    if (sectionCount === 0) {
      const emptySection = createSectionFrame("No sections enabled", theme);
      emptySection.appendChild(
        createText("Enable at least one section to generate specs.", 11, FONT_REGULAR, theme.muted, "muted")
      );
      appendSection(emptySection);
    }

    figma.currentPage.selection = [specsFrame];
    figma.viewport.scrollAndZoomIntoView([specsFrame]);
    figma.notify("Specs generated.");
    log("Specs generation complete", { sectionCount });
  } catch (error) {
    logError("Specs generation failed", error);
    if (specsFrame) {
      specsFrame.remove();
    }
    figma.notify("Specs failed to generate. Check the console for details.");
    figma.ui.postMessage({
      type: "error",
      message: error instanceof Error ? error.message : "Specs failed to generate."
    });
  }
}

async function loadFonts() {
  try {
    await figma.loadFontAsync(FONT_REGULAR);
    await figma.loadFontAsync(FONT_MEDIUM);
  } catch (error) {
    logError("Font loading failed", error);
  }
}

async function prepareSpecTextStyles(theme: Theme, enabled: boolean) {
  useSpecTextStyles = enabled;
  specTextStyles = {};
  if (!enabled) return;

  const styles = await figma.getLocalTextStylesAsync();
  const findStyle = (name: string) =>
    styles.find((style) => style.name === name || style.name === `.${name}`) ?? null;

  const ensureStyle = async (name: string, font: FontName, size: number, color: string) => {
    const baseName = `EightShapes Specs/${name}`;
    let style = findStyle(baseName);
    if (!style) {
      style = figma.createTextStyle();
      style.name = baseName;
    }
    try {
      await figma.loadFontAsync(style.fontName as FontName);
    } catch (error) {
      logError("Failed to load style font", error);
    }
    try {
      await figma.loadFontAsync(font);
    } catch (error) {
      logError("Failed to load target style font", { font, error });
    }
    try {
      style.fontName = font;
      style.fontSize = size;
    } catch (error) {
      logError("Failed to normalize style", { name: baseName, font, size, error });
    }
    return style;
  };

  const title = await ensureStyle("Title", FONT_MEDIUM, 14, theme.text);
  const heading = await ensureStyle("Heading", FONT_MEDIUM, 12, theme.text);
  const label = await ensureStyle("Label", FONT_MEDIUM, 10, theme.text);
  const body = await ensureStyle("Body", FONT_REGULAR, 10, theme.text);
  const muted = await ensureStyle("Muted", FONT_REGULAR, 10, theme.muted);
  const caption = await ensureStyle("Caption", FONT_REGULAR, 9, theme.muted);

  specTextStyles = {
    title,
    heading,
    label,
    body,
    muted,
    caption
  };
}

async function sendVariantPropsToUi() {
  try {
    const selection = figma.currentPage.selection;
    const target = selection[0];
    const props = await getVariantPropertyNames(target);
    log("Variant props to UI", props);
    figma.ui.postMessage({ type: "variant-props", props });
  } catch (error) {
    logError("Failed to send variant props to UI", error);
  }
}

async function getVariantPropertyNames(target?: SceneNode) {
  const context = await resolveComponentSet(target);
  if (!context) return [];
  return Object.keys(context.componentSet.variantGroupProperties ?? {});
}

function createSpecsRootFrame(name: string, target: SceneNode, settings: Settings, theme: Theme) {
  const frame = figma.createFrame();
  frame.name = `Specs · ${name}`;
  frame.layoutMode = settings.multiColumn ? "HORIZONTAL" : "VERTICAL";
  frame.primaryAxisSizingMode = settings.multiColumn ? "FIXED" : "AUTO";
  frame.counterAxisSizingMode = settings.multiColumn ? "AUTO" : "FIXED";
  frame.itemSpacing = settings.multiColumn ? SPECS_COLUMN_GAP : 18;
  frame.paddingLeft = 28;
  frame.paddingRight = 28;
  frame.paddingTop = 28;
  frame.paddingBottom = 28;
  frame.fills = [solidFill(theme.background)];
  frame.strokes = [solidFill(theme.border)];
  frame.strokeWeight = 1;
  frame.cornerRadius = 20;

  const targetWidth = target.absoluteBoundingBox?.width ?? 320;
  const columnCount = settings.multiColumn ? Math.min(4, Math.max(2, settings.columnCount || 2)) : 1;
  const columnWidth = SPECS_COLUMN_WIDTH;
  const singleColumnWidth = Math.round(targetWidth + 520);
  const multiColumnWidth =
    columnCount * columnWidth + (columnCount - 1) * SPECS_COLUMN_GAP + frame.paddingLeft + frame.paddingRight;
  const frameWidth = settings.multiColumn ? multiColumnWidth : singleColumnWidth;
  frame.resizeWithoutConstraints(frameWidth, frame.height);

  const box = target.absoluteBoundingBox;
  if (box) {
    frame.x = box.x + box.width + 200;
    frame.y = box.y;
  }

  return frame;
}

function createColumnFrames(parent: FrameNode, count: number, width: number) {
  const columns: FrameNode[] = [];
  for (let i = 0; i < count; i += 1) {
    const column = figma.createFrame();
    column.name = `Column ${i + 1}`;
    column.layoutMode = "VERTICAL";
    column.primaryAxisSizingMode = "AUTO";
    column.counterAxisSizingMode = "FIXED";
    column.layoutGrow = 0;
    column.layoutAlign = "INHERIT";
    column.itemSpacing = 18;
    column.fills = [];
    column.resizeWithoutConstraints(width, 1);
    parent.appendChild(column);
    columns.push(column);
  }
  return columns;
}

// Section delegate wrappers
function createAnatomySection(
  target: SceneNode,
  elements: AnatomyElement[],
  settings: Settings,
  theme: Theme,
  title = "Anatomy"
) {
  return createAnatomySectionModule(target, elements, settings, theme, {
    createSectionFrame,
    createText,
    createTableRow,
    createContentCard,
    createArtworkFrame,
    truncateText,
    solidFill
  }, title);
}

async function collectPropertySpecs(target: SceneNode, inventory: Inventory, settings: Settings) {
  return collectPropertySpecsModule(target, inventory, settings, deps);
}

function buildElementKey(element: AnatomyElement) {
  return buildElementKeyModule(element);
}

function buildLayoutKey(spec: LayoutSpec) {
  return buildLayoutKeyModule(spec);
}

async function collectTwoWaySpec(target: SceneNode, settings: Settings, inventory: Inventory) {
  return collectTwoWaySpecModule(target, settings, inventory, deps);
}

async function createPropertiesSection(
  target: SceneNode,
  specs: Parameters<typeof createPropertiesSectionModule>[1],
  settings: Settings,
  theme: Theme,
  twoWaySpec?: TwoWaySpec
) {
  return createPropertiesSectionModule(target, specs, settings, theme, twoWaySpec, deps);
}

function createTwoWaySection(spec: TwoWaySpec, theme: Theme) {
  return createTwoWaySectionModule(spec, theme, deps);
}

function collectLayoutData(root: SceneNode): LayoutSpec[] {
  return collectLayoutDataModule(root);
}

function createLayoutSection(
  target: SceneNode,
  specs: LayoutSpec[],
  showOuter: boolean,
  theme: Theme,
  settings: Settings,
  title = "Layout & Spacing"
) {
  return createLayoutSectionModule(target, specs, showOuter, theme, settings, deps, title);
}

async function createVariablesSection(inventory: Inventory, settings: Settings, theme: Theme) {
  return createVariablesSectionModule(inventory, settings, theme, deps);
}

async function createModesSection(
  target: SceneNode,
  inventory: Inventory,
  settings: Settings,
  theme: Theme
): Promise<FrameNode | null> {
  return createModesSectionModule(target, inventory, settings, theme, deps);
}

function createDataSection(
  dataModel: DataModel,
  includeAttributes: boolean,
  theme: Theme,
  target: SceneNode,
  settings: Settings,
  inventory: Inventory
) {
  return createDataSectionModule(dataModel, includeAttributes, theme, target, settings, inventory, deps);
}

function createInventorySection(inventory: Inventory, theme: Theme, settings: Settings) {
  return createInventorySectionModule(inventory, theme, settings, deps);
}

async function createCompleteVariantSections(
  target: SceneNode,
  inventory: Inventory,
  settings: Settings,
  theme: Theme
) {
  const context = await resolveComponentSet(target);
  if (!context) return [];
  const { componentSet, baseComponent } = context;

  const baseInstance = baseComponent.createInstance();
  const baseElements = await collectAnatomyElements(baseInstance, inventory, settings);
  const baseElementKeys = new Set(baseElements.map(buildElementKey));
  const baseLayouts = collectLayoutData(baseInstance);
  const baseLayoutKeys = new Set(baseLayouts.map(buildLayoutKey));
  baseInstance.remove();

  const sections: FrameNode[] = [];
  const variants = componentSet.children.filter(
    (child): child is ComponentNode => child.type === "COMPONENT"
  );

  for (const variant of variants) {
    if (variant.id === baseComponent.id) continue;
    const instance = variant.createInstance();
    const elements = await collectAnatomyElements(instance, inventory, settings);
    const newElements = elements.filter((element) => !baseElementKeys.has(buildElementKey(element)));
    if (newElements.length > 0) {
      const anatomySection = createAnatomySection(
        instance,
        newElements,
        settings,
        theme,
        `Complete Anatomy · ${variant.name}`
      );
      sections.push(anatomySection);
    }

    if (settings.layout) {
      const layoutSpecs = collectLayoutData(instance);
      const newLayouts = layoutSpecs.filter((spec) => !baseLayoutKeys.has(buildLayoutKey(spec)));
      if (newLayouts.length > 0) {
        const layoutSection = createLayoutSection(
          instance,
          newLayouts,
          settings.showOuterLayout,
          theme,
          settings,
          `Complete Layout · ${variant.name}`
        );
        sections.push(layoutSection);
      }
    }
    instance.remove();
  }

  return sections;
}

function collectNestedInstances(root: SceneNode) {
  const instances: InstanceNode[] = [];

  const walk = (node: SceneNode) => {
    if (node.type === "INSTANCE" && node !== root) {
      instances.push(node as InstanceNode);
      return;
    }
    if ("children" in node) {
      node.children.forEach((child) => walk(child));
    }
  };

  walk(root);
  return instances;
}

async function createNestedComponentSections(
  target: SceneNode,
  inventory: Inventory,
  settings: Settings,
  theme: Theme
): Promise<FrameNode[]> {
  const nestedInstances = collectNestedInstances(target);
  if (nestedInstances.length === 0) return [];

  const sections: FrameNode[] = [];
  for (const instance of nestedInstances) {
    const container = figma.createFrame();
    container.name = `Nested Component · ${instance.name}`;
    container.layoutMode = "VERTICAL";
    container.primaryAxisSizingMode = "AUTO";
    container.counterAxisSizingMode = "AUTO";
    container.itemSpacing = 12;
    container.fills = [];

    const header = createText(`Nested Component · ${instance.name}`, 12, FONT_MEDIUM, theme.text, "heading");
    container.appendChild(header);

    const anatomyElements =
      settings.anatomy || settings.data ? await collectAnatomyElements(instance, inventory, settings) : [];
    const propertySpecs = settings.properties || settings.data
      ? await collectPropertySpecs(instance, inventory, settings)
      : [];

    if (settings.anatomy) {
      const anatomy = createAnatomySection(
        instance,
        anatomyElements,
        settings,
        theme,
        `Anatomy · ${instance.name}`
      );
      container.appendChild(anatomy);
    }

    if (settings.properties) {
      const propsSection = await createPropertiesSection(instance, propertySpecs, settings, theme);
      container.appendChild(propsSection);
    }

    const layoutData = settings.layout || settings.data ? collectLayoutData(instance) : [];

    if (settings.layout) {
      const layout = createLayoutSection(instance, layoutData, settings.showOuterLayout, theme, settings, `Layout · ${instance.name}`);
      container.appendChild(layout);
    }

    if (settings.data) {
      const model: DataModel = {
        anatomy: anatomyElements,
        properties: propertySpecs,
        layout: layoutData
      };
      const dataSection = createDataSection(model, settings.includeDataAttributes, theme, instance, settings, inventory);
      container.appendChild(dataSection);
    }

    sections.push(container);
  }

  return sections;
}
