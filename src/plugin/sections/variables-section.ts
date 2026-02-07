import { FONT_MEDIUM, FONT_REGULAR } from "../constants";
import type { Inventory } from "../inventory";
import type { Settings, SpecTextRole, Theme } from "../types";

type CreateTextFn = (
  text: string,
  size?: number,
  font?: FontName,
  color?: string,
  role?: SpecTextRole
) => TextNode;

type VariablesSectionDeps = {
  createSectionFrame: (title: string, theme: Theme) => FrameNode;
  createText: CreateTextFn;
  fitTextToWidth: (node: TextNode, width: number) => void;
  createContentCard: (theme: Theme) => FrameNode;
  createArtworkFrame: (
    target: SceneNode,
    markerGutter: number,
    theme: Theme,
    maxContentWidth?: number,
    maxContentHeight?: number
  ) => FrameNode;
  formatSpacing: (value: number, settings: Settings) => string;
  formatColor: (paint: Paint | undefined, settings: Settings) => string;
  log: (...args: any[]) => void;
  logError: (...args: any[]) => void;
};

export async function createVariablesSection(
  inventory: Inventory,
  settings: Settings,
  theme: Theme,
  deps: VariablesSectionDeps
) {
  const section = deps.createSectionFrame("Variables", theme);
  const variableIds = inventory.getVariableIds();

  if (variableIds.length === 0) {
    section.appendChild(deps.createText("No bound variables detected.", 11, FONT_REGULAR, theme.muted, "muted"));
    return section;
  }

  const card = deps.createContentCard(theme);
  for (const id of variableIds) {
    const variable = await figma.variables.getVariableByIdAsync(id);
    if (!variable) continue;
    const collectionId =
      variable && "variableCollectionId" in variable
        ? variable.variableCollectionId
        : (variable as any)?.collectionId;
    const collection = collectionId ? await figma.variables.getVariableCollectionByIdAsync(collectionId) : null;
    const modes = collection?.modes ?? [];
    const header = deps.createText(
      `${collection?.name ?? "Collection"} / ${variable.name}`,
      11,
      FONT_MEDIUM,
      theme.text,
      "label"
    );
    card.appendChild(header);

    const lines = modes.map((mode) => {
      const value = variable.valuesByMode[mode.modeId];
      return `${mode.name}: ${formatVariableValue(value, settings, deps)}`;
    });
    card.appendChild(deps.createText(lines.join("\n"), 9, FONT_REGULAR, theme.muted, "muted"));
  }
  section.appendChild(card);

  return section;
}

export async function createModesSection(
  target: SceneNode,
  inventory: Inventory,
  settings: Settings,
  theme: Theme,
  deps: VariablesSectionDeps
): Promise<FrameNode | null> {
  const variableIds = inventory.getVariableIds();
  if (variableIds.length === 0) {
    deps.log("Modes section skipped: no variables detected.");
    return null;
  }

  const collections = new Map<
    string,
    {
      collection: VariableCollection;
      variables: Array<{
        variable: Variable;
        valuesByMode: Record<string, VariableValue | undefined>;
      }>;
    }
  >();

  for (const id of variableIds) {
    const variable = await figma.variables.getVariableByIdAsync(id);
    if (!variable) continue;
    const collectionId =
      "variableCollectionId" in variable
        ? variable.variableCollectionId
        : (variable as any)?.collectionId;
    if (!collectionId) continue;
    const collection = await figma.variables.getVariableCollectionByIdAsync(collectionId);
    if (!collection || collection.modes.length < 2) continue;

    const valuesByMode: Record<string, VariableValue | undefined> = {};
    collection.modes.forEach((mode) => {
      valuesByMode[mode.modeId] = variable.valuesByMode[mode.modeId];
    });

    const serialized = collection.modes.map((mode) => serializeVariableValue(valuesByMode[mode.modeId]));
    const uniqueCount = new Set(serialized).size;
    if (uniqueCount < 2) continue;

    const entry = collections.get(collection.id) ?? { collection, variables: [] };
    entry.variables.push({ variable, valuesByMode });
    collections.set(collection.id, entry);
  }

  if (collections.size === 0) {
    deps.log("Modes section skipped: no collections with multi-mode variables.");
    return null;
  }

  const section = deps.createSectionFrame("Modes", theme);
  for (const { collection, variables } of collections.values()) {
    const card = deps.createContentCard(theme);
    card.appendChild(deps.createText(collection.name, 12, FONT_MEDIUM, theme.text, "heading"));

    collection.modes.forEach((mode) => {
      const modeFrame = figma.createFrame();
      modeFrame.name = `Mode · ${mode.name}`;
      modeFrame.layoutMode = "VERTICAL";
      modeFrame.primaryAxisSizingMode = "AUTO";
      modeFrame.counterAxisSizingMode = "FIXED";
      modeFrame.layoutAlign = "STRETCH";
      modeFrame.itemSpacing = 8;
      modeFrame.fills = [];
      modeFrame.resizeWithoutConstraints(settings.multiColumn ? 480 : 720, 1);

      modeFrame.appendChild(deps.createText(mode.name, 11, FONT_MEDIUM, theme.text, "label"));
      const lines = variables.map((entry) => {
        const value = entry.valuesByMode[mode.modeId];
        return `${entry.variable.name}: ${formatVariableValue(value, settings, deps)}`;
      });
      const linesNode = deps.createText(lines.join("\n"), 9, FONT_REGULAR, theme.muted, "muted");
      deps.fitTextToWidth(linesNode, settings.multiColumn ? 448 : 688);
      modeFrame.appendChild(linesNode);

      const artwork = deps.createArtworkFrame(
        target,
        0,
        theme,
        settings.multiColumn ? 460 : 520,
        settings.multiColumn ? 200 : 260
      );
      try {
        artwork.setExplicitVariableModeForCollection(collection, mode.modeId);
      } catch (error) {
        deps.logError("Failed to set mode on artwork", error);
      }
      modeFrame.appendChild(artwork);
      card.appendChild(modeFrame);
    });

    section.appendChild(card);
  }

  return section;
}

function formatVariableValue(value: VariableValue | undefined, settings: Settings, deps: VariablesSectionDeps) {
  if (value === undefined || value === null) return "—";
  if (typeof value === "number") return deps.formatSpacing(value, settings);
  if (typeof value === "string") return value;
  if (typeof value === "boolean") return value ? "true" : "false";
  if (typeof value === "object" && "r" in value) {
    return deps.formatColor({ type: "SOLID", color: value, opacity: 1 }, settings);
  }
  return String(value);
}

function serializeVariableValue(value: VariableValue | undefined) {
  if (value === undefined || value === null) return "null";
  if (typeof value === "object") {
    if ("r" in value) {
      return `rgb:${value.r}-${value.g}-${value.b}`;
    }
    if ("id" in value) {
      return `alias:${value.id}`;
    }
  }
  return String(value);
}
