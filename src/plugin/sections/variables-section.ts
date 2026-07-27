import { FONT_MEDIUM, FONT_REGULAR } from "../constants";
import { formatAliasChain, resolveVariableValue } from "../helpers/variable-resolver";
import type { Inventory } from "../inventory";
import { getLimit } from "../limits";
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
  ) => Promise<FrameNode>;
  getSectionContentWidth: (settings: Settings) => number;
  truncateText: (value: string, maxLength: number) => string;
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

  const textWidth = variableTextWidth(settings, deps);
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
      capVariablePath(`${collection?.name ?? "Collection"} / ${variable.name}`, deps),
      11,
      FONT_MEDIUM,
      theme.text,
      "label"
    );
    // Variable paths wrap — they are never single-line clipped.
    deps.fitTextToWidth(header, textWidth);
    card.appendChild(header);

    const lines: string[] = [];
    for (const mode of modes) {
      const value = variable.valuesByMode[mode.modeId];
      lines.push(capVariablePath(`${mode.name}: ${await formatVariableValue(value, settings)}`, deps));
    }
    const linesNode = deps.createText(lines.join("\n"), 9, FONT_REGULAR, theme.muted, "muted");
    deps.fitTextToWidth(linesNode, textWidth);
    card.appendChild(linesNode);
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

    const serialized: string[] = [];
    for (const mode of collection.modes) {
      serialized.push(await serializeVariableValue(valuesByMode[mode.modeId], settings));
    }
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
  const textWidth = variableTextWidth(settings, deps);
  for (const { collection, variables } of collections.values()) {
    const card = deps.createContentCard(theme);
    card.appendChild(deps.createText(collection.name, 12, FONT_MEDIUM, theme.text, "heading"));

    for (const mode of collection.modes) {
      const modeFrame = figma.createFrame();
      modeFrame.name = `Mode · ${mode.name}`;
      modeFrame.layoutMode = "VERTICAL";
      modeFrame.primaryAxisSizingMode = "AUTO";
      modeFrame.counterAxisSizingMode = "FIXED";
      modeFrame.layoutAlign = "STRETCH";
      modeFrame.itemSpacing = 8;
      modeFrame.fills = [];
      modeFrame.resizeWithoutConstraints(textWidth + 24, 1);

      modeFrame.appendChild(deps.createText(mode.name, 11, FONT_MEDIUM, theme.text, "label"));
      const lines: string[] = [];
      for (const entry of variables) {
        const value = entry.valuesByMode[mode.modeId];
        // Prefix the collection: brand and theme collections can repeat variable names.
        lines.push(
          capVariablePath(
            `${collection.name} / ${entry.variable.name}: ${await formatVariableValue(value, settings)}`,
            deps
          )
        );
      }
      const linesNode = deps.createText(lines.join("\n"), 9, FONT_REGULAR, theme.muted, "muted");
      deps.fitTextToWidth(linesNode, textWidth);
      modeFrame.appendChild(linesNode);

      // Clone target temporarily to set variable mode before exporting as image.
      // The clone is removed immediately — visual bugs from .clone() don't matter
      // since exportAsync captures a pixel-perfect snapshot.
      const tempClone = target.clone();
      try {
        tempClone.setExplicitVariableModeForCollection(collection, mode.modeId);
      } catch (error) {
        deps.logError("Failed to set mode on temp clone", error);
      }
      const artwork = await deps.createArtworkFrame(tempClone, 0, theme);
      tempClone.remove();
      modeFrame.appendChild(artwork);
      card.appendChild(modeFrame);
    }

    section.appendChild(card);
  }

  return section;
}

/** Width available to a variable-path text node inside a content card. */
function variableTextWidth(settings: Settings, deps: VariablesSectionDeps) {
  return Math.max(200, deps.getSectionContentWidth(settings) - 48);
}

/** Variable paths are only ever capped by TRUNC_VARIABLE_PATH — never by name truncation. */
function capVariablePath(text: string, deps: VariablesSectionDeps) {
  return deps.truncateText(text, getLimit("TRUNC_VARIABLE_PATH"));
}

/**
 * Format a variable value for canvas display. Aliases are resolved through their full
 * chain ("Semantic/Surface/Brand -> Brand/Blue/500 -> #0A66FF"); every other shape is
 * handled by the resolver, so no branch can print "[object Object]".
 */
async function formatVariableValue(value: VariableValue | undefined, settings: Settings) {
  if (value === undefined || value === null) return "—";
  const resolved = await resolveVariableValue(value, settings);
  if (!("chain" in resolved)) return resolved.value;
  const chain = formatAliasChain(resolved);
  return resolved.unresolved ? `${chain} (unresolved: alias cycle or depth limit)` : chain;
}

/**
 * Mode-comparison key. Aliases are keyed by BOTH the target variable and its resolved
 * primitive: two modes pointing at different variables genuinely differ per mode even when
 * those targets happen to coincide in their own collection's default mode, and collapsing
 * them would drop the variable from the Modes section entirely.
 * Resolution is cached per variable id, so this stays cheap per variable per mode.
 */
async function serializeVariableValue(value: VariableValue | undefined, settings: Settings) {
  if (value === undefined || value === null) return "null";
  const resolved = await resolveVariableValue(value, settings);
  if ("chain" in resolved && resolved.unresolved) return `unresolved:${resolved.chain.join(">")}`;
  if ("id" in resolved) return `alias:${resolved.id}|value:${resolved.value}`;
  return `value:${resolved.value}`;
}
