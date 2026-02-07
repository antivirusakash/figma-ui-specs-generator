import { FONT_MEDIUM, FONT_REGULAR } from "../constants";
import type { SpecTextRole, Theme } from "../types";
import { solidFill } from "./format";

type CreateTextFn = (
  text: string,
  size?: number,
  font?: FontName,
  color?: string,
  role?: SpecTextRole
) => TextNode;

export function createSectionFrame(title: string, theme: Theme, createTextFn: CreateTextFn) {
  const frame = figma.createFrame();
  frame.name = title;
  frame.layoutMode = "VERTICAL";
  frame.layoutAlign = "STRETCH";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "FIXED";
  frame.itemSpacing = 12;
  frame.paddingLeft = 20;
  frame.paddingRight = 20;
  frame.paddingTop = 18;
  frame.paddingBottom = 18;
  frame.fills = [solidFill(theme.sectionBg)];
  frame.strokes = [solidFill(theme.border, 0.9)];
  frame.strokeWeight = 1;
  frame.cornerRadius = 12;
  frame.effects = [{
    type: "DROP_SHADOW",
    color: { r: 0, g: 0, b: 0, a: 0.04 },
    offset: { x: 0, y: 1 },
    radius: 3,
    spread: 0,
    visible: true,
    blendMode: "NORMAL"
  }];
  frame.resizeWithoutConstraints(100, 1);

  // Section title with accent bar
  const headerRow = figma.createFrame();
  headerRow.layoutMode = "HORIZONTAL";
  headerRow.primaryAxisSizingMode = "AUTO";
  headerRow.counterAxisSizingMode = "AUTO";
  headerRow.counterAxisAlignItems = "CENTER";
  headerRow.itemSpacing = 8;
  headerRow.fills = [];

  const accentBar = figma.createRectangle();
  accentBar.resizeWithoutConstraints(3, 16);
  accentBar.cornerRadius = 2;
  accentBar.fills = [solidFill(theme.accent)];
  headerRow.appendChild(accentBar);

  const titleNode = createTextFn(title, 14, FONT_MEDIUM, theme.text, "title");
  headerRow.appendChild(titleNode);
  frame.appendChild(headerRow);

  return frame;
}

export function createTableRow(
  columns: Array<{ label: string; width: number; wrap?: boolean }>,
  theme: Theme,
  isHeader: boolean,
  rowIndex: number,
  createTextFn: CreateTextFn,
  fitTextSingleLineFn: (node: TextNode, width: number) => void,
  fitTextToWidthFn?: (node: TextNode, width: number) => void
) {
  const hasWrapColumns = !isHeader && columns.some((col) => col.wrap);
  const row = figma.createFrame();
  if (!hasWrapColumns) row.setPluginData("specsNoWrap", "1");
  row.clipsContent = !hasWrapColumns;
  row.layoutMode = "HORIZONTAL";
  row.primaryAxisSizingMode = "FIXED";
  row.counterAxisSizingMode = "AUTO";
  row.layoutAlign = "STRETCH";
  row.itemSpacing = 8;
  row.paddingLeft = 8;
  row.paddingRight = 8;
  row.paddingTop = 5;
  row.paddingBottom = 5;

  if (isHeader) {
    row.fills = [solidFill(theme.tableHeaderBg)];
    row.cornerRadius = 6;
  } else if (rowIndex % 2 === 1) {
    row.fills = [solidFill(theme.tableRowAlt)];
    row.cornerRadius = 4;
  } else {
    row.fills = [];
  }

  const totalWidth = columns.reduce((sum, column) => sum + Math.max(24, column.width), 0) + Math.max(0, columns.length - 1) * 8 + row.paddingLeft + row.paddingRight;
  row.resizeWithoutConstraints(totalWidth, 1);

  columns.forEach((column) => {
    const cell = figma.createFrame();
    cell.layoutMode = "VERTICAL";
    cell.primaryAxisSizingMode = "AUTO";
    cell.counterAxisSizingMode = "FIXED";
    cell.fills = [];
    const shouldWrap = !isHeader && column.wrap && fitTextToWidthFn;
    cell.clipsContent = !shouldWrap;
    cell.resizeWithoutConstraints(column.width, 1);
    const text = createTextFn(
      column.label,
      10,
      isHeader ? FONT_MEDIUM : FONT_REGULAR,
      isHeader ? theme.text : theme.muted,
      isHeader ? "label" : "muted"
    );
    if (shouldWrap) {
      fitTextToWidthFn(text, Math.max(24, column.width - 2));
    } else {
      text.setPluginData("specsNoWrap", "1");
      fitTextSingleLineFn(text, Math.max(24, column.width - 2));
    }
    cell.appendChild(text);
    row.appendChild(cell);
  });

  return row;
}

export function createContentCard(theme: Theme) {
  const card = figma.createFrame();
  card.layoutMode = "VERTICAL";
  card.primaryAxisSizingMode = "AUTO";
  card.counterAxisSizingMode = "FIXED";
  card.layoutAlign = "STRETCH";
  card.itemSpacing = 4;
  card.paddingLeft = 12;
  card.paddingRight = 12;
  card.paddingTop = 12;
  card.paddingBottom = 12;
  card.cornerRadius = 8;
  card.fills = [solidFill(theme.section)];
  card.strokes = [solidFill(theme.border, 0.6)];
  card.strokeWeight = 1;
  card.resizeWithoutConstraints(100, 1);
  return card;
}

export function createArtworkFrame(
  target: SceneNode,
  markerGutter = 0,
  theme: Theme
) {
  const frame = figma.createFrame();
  frame.name = "Artwork";
  frame.layoutMode = "NONE";
  frame.layoutAlign = "INHERIT";
  frame.clipsContent = true;
  frame.fills = [solidFill(theme.section)];
  frame.strokes = [solidFill(theme.border)];
  frame.strokeWeight = 1;
  frame.cornerRadius = 8;

  const clone = target.clone();
  const padding = 16;

  const frameWidth = clone.width + padding * 2 + markerGutter;
  const frameHeight = clone.height + padding * 2;
  frame.resizeWithoutConstraints(frameWidth, frameHeight);

  frame.appendChild(clone);
  clone.x = padding;
  clone.y = padding;

  frame.setPluginData("cloneOffsetX", String(padding));
  frame.setPluginData("cloneOffsetY", String(padding));
  frame.setPluginData("cloneScale", "1");

  return frame;
}
