import { SECTION_SIDE_PADDING, SPECS_COLUMN_WIDTH } from "../constants";
import { logError } from "../logger";
import type { Settings, SpecTextRole } from "../types";
import { solidFill } from "./format";

export function createTextNode(
  text: string,
  size: number,
  font: FontName,
  color: string,
  role: SpecTextRole | undefined,
  specTextStyles: Partial<Record<SpecTextRole, TextStyle>>,
  useSpecTextStyles: boolean
) {
  const node = figma.createText();
  const style = role && useSpecTextStyles ? specTextStyles[role] : undefined;
  // Apply local style primitives directly to avoid async detached-node failures.
  if (style && typeof style.fontSize === "number") {
    node.fontName = style.fontName as FontName;
    node.fontSize = style.fontSize;
  } else {
    node.fontName = font;
    node.fontSize = size;
  }
  node.characters = text;
  node.fills = [solidFill(color)];
  return node;
}

export function fitTextToWidth(node: TextNode, width: number) {
  const safeWidth = Math.max(40, Math.round(width));
  const applyResize = () => {
    node.textAutoResize = "HEIGHT";
    node.resizeWithoutConstraints(safeWidth, node.height);
  };
  try {
    applyResize();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const unresolvedFont = /loadFontAsync|unresolved font|font/i.test(message);
    const detachedNode = /node not found|does not exist/i.test(message);
    if (detachedNode) return;
    if (!unresolvedFont) {
      logError("Failed to fit text to width", { nodeId: node.id, width: safeWidth, error });
      return;
    }
    const fontName = node.fontName;
    if (fontName === figma.mixed) return;
    // Retry once after ensuring the current font is loaded.
    void figma
      .loadFontAsync(fontName as FontName)
      .then(() => {
        try {
          applyResize();
        } catch (_retryError) {}
      })
      .catch((_loadError) => {});
  }
}

export function fitTextSingleLine(node: TextNode, width: number) {
  const safeWidth = Math.max(20, Math.round(width));
  const original = node.characters;
  if (!original || original.length < 2) return;
  try {
    node.textAutoResize = "WIDTH_AND_HEIGHT";
  } catch (_error) {
    return;
  }
  if (node.width <= safeWidth) return;

  let low = 1;
  let high = original.length;
  let best = "…";
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const candidate = `${original.slice(0, Math.max(1, mid)).replace(/\s+$/, "")}…`;
    node.characters = candidate;
    if (node.width <= safeWidth) {
      best = candidate;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  node.characters = best;
}

export function getSectionContentWidth(settings: Settings) {
  // Section width subtracts left/right padding; keep narrow columns readable.
  if (settings.sectionWidth) return settings.sectionWidth - SECTION_SIDE_PADDING * 2;
  return settings.multiColumn ? SPECS_COLUMN_WIDTH - SECTION_SIDE_PADDING * 2 : 800;
}

export function normalizeTextWrapping(root: BaseNode, fitTextToWidthFn: (node: TextNode, width: number) => void) {
  if (root.type === "TEXT") {
    const parent = root.parent;
    const noWrap = root.getPluginData("specsNoWrap") === "1";
    if (parent && parent.type === "FRAME" && parent.layoutMode !== "NONE" && !parent.clipsContent && !noWrap) {
      const available = Math.max(40, parent.width - parent.paddingLeft - parent.paddingRight - 2);
      fitTextToWidthFn(root, available);
    }
    return;
  }
  if ("children" in root) {
    root.children.forEach((child) => normalizeTextWrapping(child, fitTextToWidthFn));
  }
}
