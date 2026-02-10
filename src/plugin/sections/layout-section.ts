import { FONT_MEDIUM, FONT_REGULAR } from "../constants";
import { log } from "../logger";
import type { LayoutSpec, Settings, SpecTextRole, Theme } from "../types";
import { LIMITS } from "../limits";
type CreateTextFn = (
  text: string,
  size?: number,
  font?: FontName,
  color?: string,
  role?: SpecTextRole
) => TextNode;

type LayoutSectionDeps = {
  createSectionFrame: (title: string, theme: Theme) => FrameNode;
  createText: CreateTextFn;
  solidFill: (hex: string, opacity?: number) => SolidPaint;
  formatSpacing: (value: number, settings: Settings) => string;
  createArtworkFrame: (
    target: SceneNode,
    markerGutter: number,
    theme: Theme,
    maxContentWidth?: number,
    maxContentHeight?: number
  ) => Promise<FrameNode>;
  fitTextSingleLine: (node: TextNode, width: number) => void;
  fitTextToWidth: (node: TextNode, width: number) => void;
  truncateText: (value: string, maxLength: number) => string;
};


export function collectLayoutData(root: SceneNode, skipNodeIds?: Set<string>): LayoutSpec[] {
  const data: LayoutSpec[] = [];
  const rootBounds = root.absoluteBoundingBox;
  const nameCounts = new Map<string, number>();

  const walk = (node: SceneNode, path: string) => {
    if (data.length >= LIMITS.MAX_LAYOUT_SPECS) return;
    if (skipNodeIds?.has(node.id)) return;
    if ("layoutMode" in node && node.layoutMode !== "NONE") {
      const bounds = node.absoluteBoundingBox;
      const relativeBounds =
        bounds && rootBounds
          ? {
              x: bounds.x - rootBounds.x,
              y: bounds.y - rootBounds.y,
              width: bounds.width,
              height: bounds.height
            }
          : undefined;

      const gapLine = computeGapLine(node, rootBounds);

      const baseKey = `${path}/${node.type}:${node.name}`;
      const count = (nameCounts.get(baseKey) ?? 0) + 1;
      nameCounts.set(baseKey, count);
      const pathKey = count > 1 ? `${baseKey}[${count}]` : baseKey;

      data.push({
        nodeId: node.id,
        name: node.name,
        type: node.type,
        clipsContent: "clipsContent" in node ? node.clipsContent : undefined,
        layoutMode: node.layoutMode,
        primaryAxisAlignItems: node.primaryAxisAlignItems,
        counterAxisAlignItems: node.counterAxisAlignItems,
        primaryAxisSizingMode: node.primaryAxisSizingMode,
        counterAxisSizingMode: node.counterAxisSizingMode,
        itemSpacing: node.itemSpacing,
        padding: {
          left: node.paddingLeft,
          right: node.paddingRight,
          top: node.paddingTop,
          bottom: node.paddingBottom
        },
        bounds: relativeBounds,
        gapLine,
        pathKey
      });
    } else if (
      "children" in node && node.type === "FRAME" &&
      (!("layoutMode" in node) || node.layoutMode === "NONE")
    ) {
      const kids = (node as any).children.filter(
        (c: any) => c.visible !== false && c.absoluteBoundingBox
      );
      if (kids.length >= 2) {
        const a = kids[0].absoluteBoundingBox;
        const b = kids[1].absoluteBoundingBox;
        const dx = Math.abs(b.x - a.x);
        const dy = Math.abs(b.y - a.y);
        const inferredMode = dx > dy ? "HORIZONTAL" : "VERTICAL";
        let estGap = 0;
        if (inferredMode === "HORIZONTAL") {
          estGap = Math.max(0, Math.round(b.x - (a.x + a.width)));
        } else {
          estGap = Math.max(0, Math.round(b.y - (a.y + a.height)));
        }

        const bounds = node.absoluteBoundingBox;
        const relativeBounds =
          bounds && rootBounds
            ? {
                x: bounds.x - rootBounds.x,
                y: bounds.y - rootBounds.y,
                width: bounds.width,
                height: bounds.height
              }
            : undefined;

        const baseKey = `${path}/${node.type}:${node.name}`;
        const count = (nameCounts.get(baseKey) ?? 0) + 1;
        nameCounts.set(baseKey, count);
        const pathKey = count > 1 ? `${baseKey}[${count}]` : baseKey;

        // Sort kids spatially along primary axis before computing alignment
        const sortedKids = [...kids].sort((c1: any, c2: any) => {
          const bb1 = c1.absoluteBoundingBox;
          const bb2 = c2.absoluteBoundingBox;
          return inferredMode === "HORIZONTAL" ? bb1.x - bb2.x : bb1.y - bb2.y;
        });

        // Compute actual alignment from child positions
        const parentBounds = node.absoluteBoundingBox;
        const inferredAlign = parentBounds
          ? inferAlignment(sortedKids, parentBounds, inferredMode)
          : { primary: "MIN", counter: "MIN" };

        data.push({
          nodeId: node.id,
          name: node.name,
          type: node.type,
          clipsContent: "clipsContent" in node ? node.clipsContent : undefined,
          layoutMode: inferredMode,
          primaryAxisAlignItems: inferredAlign.primary,
          counterAxisAlignItems: inferredAlign.counter,
          primaryAxisSizingMode: "FIXED",
          counterAxisSizingMode: "FIXED",
          itemSpacing: estGap,
          padding: { left: 0, right: 0, top: 0, bottom: 0 },
          bounds: relativeBounds,
          gapLine: undefined,
          pathKey,
          inferred: true,
        });
      }
    }

    if ("children" in node && data.length < LIMITS.MAX_LAYOUT_SPECS) {
      node.children.forEach((child) => walk(child, `${path}/${node.name}`));
    }
  };

  walk(root, "root");
  return data;
}

const ALIGN_THRESHOLD = 2; // px tolerance for edge alignment

/**
 * Classify alignment along one axis.
 * startGap = distance from parent edge to first child edge
 * endGap   = distance from last child edge to parent edge
 * count    = number of children (SPACE_BETWEEN requires >= 2)
 */
function classifyAxis(startGap: number, endGap: number, count: number): string {
  const atStart = startGap <= ALIGN_THRESHOLD;
  const atEnd = endGap <= ALIGN_THRESHOLD;
  if (atStart && atEnd && count >= 2) return "SPACE_BETWEEN";
  if (atStart && !atEnd) return "MIN";
  if (atEnd && !atStart) return "MAX";
  // Both near edge with single child, or equal gaps
  if (Math.abs(startGap - endGap) <= ALIGN_THRESHOLD) {
    return atStart ? "MIN" : "CENTER";
  }
  // Asymmetric, neither edge flush — default to MIN
  return "MIN";
}

export function inferAlignment(
  kids: Array<{ absoluteBoundingBox: { x: number; y: number; width: number; height: number } }>,
  parent: { x: number; y: number; width: number; height: number },
  mode: "HORIZONTAL" | "VERTICAL"
): { primary: string; counter: string } {
  const first = kids[0]!.absoluteBoundingBox;
  const last = kids[kids.length - 1]!.absoluteBoundingBox;

  // Primary axis: uses first + last child
  let primary: string;
  if (mode === "HORIZONTAL") {
    primary = classifyAxis(first.x - parent.x, (parent.x + parent.width) - (last.x + last.width), kids.length);
  } else {
    primary = classifyAxis(first.y - parent.y, (parent.y + parent.height) - (last.y + last.height), kids.length);
  }

  // Counter axis: uses first child only
  let counter: string;
  if (mode === "HORIZONTAL") {
    counter = classifyAxis(first.y - parent.y, (parent.y + parent.height) - (first.y + first.height), 1);
  } else {
    counter = classifyAxis(first.x - parent.x, (parent.x + parent.width) - (first.x + first.width), 1);
  }

  return { primary, counter };
}

function computeGapLine(node: SceneNode, rootBounds: Rect | null | undefined) {
  if (!("children" in node)) return undefined;
  const children = node.children.filter((child) => child.visible && child.absoluteBoundingBox);
  if (children.length < 2) return undefined;
  const firstChild = children[0];
  const secondChild = children[1];
  if (!firstChild || !secondChild) return undefined;
  const first = firstChild.absoluteBoundingBox;
  const second = secondChild.absoluteBoundingBox;
  if (!first || !second || !rootBounds) return undefined;

  if ("layoutMode" in node && node.layoutMode === "HORIZONTAL") {
    const x1 = first.x + first.width - rootBounds.x;
    const x2 = second.x - rootBounds.x;
    const y = first.y + first.height / 2 - rootBounds.y;
    return { x1, y1: y, x2, y2: y };
  }
  const y1 = first.y + first.height - rootBounds.y;
  const y2 = second.y - rootBounds.y;
  const x = first.x + first.width / 2 - rootBounds.x;
  return { x1: x, y1, x2: x, y2 };
}

export async function createLayoutSection(
  target: SceneNode,
  specs: LayoutSpec[],
  showOuter: boolean,
  theme: Theme,
  settings: Settings,
  deps: LayoutSectionDeps,
  title = "Layout & Spacing"
) {
  const section = deps.createSectionFrame(title, theme);
  const compact = settings.agentReadyData && settings.aiCompactMode;

  if (specs.length === 0) {
    section.appendChild(deps.createText("No auto-layout nodes detected.", 11, FONT_REGULAR, theme.muted, "muted"));
    return section;
  }

  const rankedSpecs = [...specs].sort((a, b) => getLayoutSpecArea(b) - getLayoutSpecArea(a));
  const visualSpecs = rankedSpecs
    .filter((spec) => getLayoutSpecArea(spec) >= 800)
    .slice(0, compact ? 5 : 8);
  const displaySpecs = rankedSpecs.slice(0, compact ? 6 : 10);
  const specsForArtwork = visualSpecs.length > 0 ? visualSpecs : rankedSpecs.slice(0, compact ? 4 : 6);
  log("Layout section composition", {
    totalSpecs: specs.length,
    displayedRows: displaySpecs.length,
    artworkOverlays: specsForArtwork.length
  });

  const horizontalCount = specs.filter((spec) => spec.layoutMode === "HORIZONTAL").length;
  const verticalCount = specs.filter((spec) => spec.layoutMode === "VERTICAL").length;
  const averageGap = specs.reduce((sum, spec) => sum + Math.max(0, spec.itemSpacing), 0) / Math.max(1, specs.length);

  section.appendChild(
    deps.createText(
      "Auto-layout map with spacing, padding, alignment, and sizing behavior.",
      10,
      FONT_REGULAR,
      theme.muted,
      "muted"
    )
  );
  if (specs.length > displaySpecs.length) {
    section.appendChild(
      deps.createText(
        `Showing ${displaySpecs.length} key nodes from ${specs.length} total.`,
        9,
        FONT_REGULAR,
        theme.muted,
        "caption"
      )
    );
  }

  const body = figma.createFrame();
  body.layoutMode = "VERTICAL";
  body.primaryAxisSizingMode = "AUTO";
  body.counterAxisSizingMode = "AUTO";
  body.layoutAlign = "STRETCH";
  body.itemSpacing = 10;
  body.fills = [];
  section.appendChild(body);

  const metricsPanel = figma.createFrame();
  metricsPanel.name = "Layout Metrics";
  metricsPanel.layoutMode = "VERTICAL";
  metricsPanel.primaryAxisSizingMode = "AUTO";
  metricsPanel.counterAxisSizingMode = "AUTO";
  metricsPanel.itemSpacing = 8;
  metricsPanel.paddingLeft = 12;
  metricsPanel.paddingRight = 12;
  metricsPanel.paddingTop = 12;
  metricsPanel.paddingBottom = 12;
  metricsPanel.cornerRadius = 8;
  metricsPanel.fills = [deps.solidFill(theme.section)];
  metricsPanel.strokes = [deps.solidFill(theme.border, 0.6)];
  metricsPanel.strokeWeight = 1;
  metricsPanel.layoutAlign = "STRETCH";

  const pillRow = figma.createFrame();
  pillRow.layoutMode = "HORIZONTAL";
  pillRow.primaryAxisSizingMode = "AUTO";
  pillRow.counterAxisSizingMode = "AUTO";
  pillRow.itemSpacing = 6;
  pillRow.fills = [];
  pillRow.appendChild(createLayoutMetricPill("Nodes", String(specs.length), theme, deps));
  pillRow.appendChild(createLayoutMetricPill("Rows", String(horizontalCount), theme, deps));
  pillRow.appendChild(createLayoutMetricPill("Columns", String(verticalCount), theme, deps));
  pillRow.appendChild(createLayoutMetricPill("Avg gap", deps.formatSpacing(averageGap, settings), theme, deps));
  metricsPanel.appendChild(pillRow);

  const cards = figma.createFrame();
  cards.layoutMode = "VERTICAL";
  cards.primaryAxisSizingMode = "AUTO";
  cards.counterAxisSizingMode = "AUTO";
  cards.itemSpacing = 3;
  cards.fills = [];
  const layoutSectionContentWidth = settings.sectionWidth
    ? settings.sectionWidth - 40
    : (settings.multiColumn || compact) ? 500 : 800;
  const rowWidths = layoutSectionContentWidth < 420
    ? [16, 80, 28, 38, 64, 44]
    : layoutSectionContentWidth < 700
    ? [18, 96, 32, 44, 76, 50]
    : layoutSectionContentWidth < 1100
    ? [18, 150, 34, 80, 100, 56]
    : [20, Math.round(layoutSectionContentWidth * 0.20), 36,
       Math.round(layoutSectionContentWidth * 0.12),
       Math.round(layoutSectionContentWidth * 0.14), 60];
  cards.appendChild(createLayoutTableHeader(theme, rowWidths, deps));
  displaySpecs.forEach((spec, index) => {
    cards.appendChild(createLayoutSpecRow(spec, index, settings, theme, rowWidths, deps));
  });
  metricsPanel.appendChild(cards);
  body.appendChild(metricsPanel);

  const skipArtwork = settings.agentReadyData && settings.aiCompactMode;
  if (!skipArtwork) {
    const artworkPanel = figma.createFrame();
    artworkPanel.name = "Layout Artwork";
    artworkPanel.layoutMode = "VERTICAL";
    artworkPanel.primaryAxisSizingMode = "AUTO";
    artworkPanel.counterAxisSizingMode = "AUTO";
    artworkPanel.itemSpacing = 8;
    artworkPanel.layoutAlign = "STRETCH";
    artworkPanel.fills = [];
    artworkPanel.appendChild(createLayoutLegend(theme, deps));

    const artwork = await deps.createArtworkFrame(target, 0, theme);
    renderLayoutMarkers(artwork, specsForArtwork, showOuter, theme, deps, settings);
    artworkPanel.appendChild(artwork);
    body.appendChild(artworkPanel);
  }

  return section;
}

function createLayoutMetricPill(label: string, value: string, theme: Theme, deps: LayoutSectionDeps) {
  const pill = figma.createFrame();
  pill.layoutMode = "HORIZONTAL";
  pill.primaryAxisSizingMode = "AUTO";
  pill.counterAxisSizingMode = "AUTO";
  pill.itemSpacing = 4;
  pill.paddingLeft = 8;
  pill.paddingRight = 8;
  pill.paddingTop = 4;
  pill.paddingBottom = 4;
  pill.cornerRadius = 999;
  pill.fills = [deps.solidFill(theme.tableRowAlt)];
  pill.strokes = [deps.solidFill(theme.border)];
  pill.strokeWeight = 1;
  pill.appendChild(deps.createText(label, 8, FONT_REGULAR, theme.muted, "caption"));
  pill.appendChild(deps.createText(value, 9, FONT_MEDIUM, theme.text, "label"));
  return pill;
}

function createLayoutTableHeader(theme: Theme, widths: number[], deps: LayoutSectionDeps) {
  return createLayoutRowCells(["#", "Node", "Dir", "Gap", "Pad", "Size"], widths, theme, true, deps);
}

function createLayoutSpecRow(
  spec: LayoutSpec,
  index: number,
  settings: Settings,
  theme: Theme,
  widths: number[],
  deps: LayoutSectionDeps
) {
  const direction = spec.layoutMode === "HORIZONTAL" ? "Row" : "Col";
  const dirLabel = spec.inferred ? `${direction}*` : direction;
  const gap = deps.formatSpacing(spec.itemSpacing, settings);
  const padding = formatPaddingShort(spec.padding, settings, deps);
  const sizing = `${shortSizing(spec.primaryAxisSizingMode)}/${shortSizing(spec.counterAxisSizingMode)}`;
  const cw = settings.sectionWidth
    ? settings.sectionWidth - 40
    : settings.multiColumn ? 500 : 800;
  const nameMax = cw < 420 ? 18 : cw < 700 ? 22 : cw < 1100 ? 28 : 45;

  const wrapCols = new Set([4]);
  return createLayoutRowCells(
    [
      String(index + 1),
      deps.truncateText(spec.name, nameMax),
      dirLabel,
      gap,
      deps.truncateText(padding, 60),
      sizing
    ],
    widths,
    theme,
    false,
    deps,
    index,
    wrapCols
  );
}

function formatPaddingShort(
  padding: { top: number; right: number; bottom: number; left: number },
  settings: Settings,
  deps: LayoutSectionDeps
) {
  const top = deps.formatSpacing(padding.top, settings);
  const right = deps.formatSpacing(padding.right, settings);
  const bottom = deps.formatSpacing(padding.bottom, settings);
  const left = deps.formatSpacing(padding.left, settings);
  return `${top}/${right}/${bottom}/${left}`;
}

function createLayoutRowCells(
  values: string[],
  widths: number[],
  theme: Theme,
  isHeader: boolean,
  deps: LayoutSectionDeps,
  rowIndex = 0,
  wrapIndices?: Set<number>
) {
  const hasWrap = !isHeader && wrapIndices && wrapIndices.size > 0;
  const row = figma.createFrame();
  if (!hasWrap) row.setPluginData("specsNoWrap", "1");
  row.clipsContent = !hasWrap;
  row.layoutMode = "HORIZONTAL";
  row.primaryAxisSizingMode = "FIXED";
  row.counterAxisSizingMode = "AUTO";
  row.layoutAlign = "STRETCH";
  row.itemSpacing = 2;
  row.paddingLeft = 8;
  row.paddingRight = 8;
  row.paddingTop = 5;
  row.paddingBottom = 5;

  if (isHeader) {
    row.fills = [deps.solidFill(theme.tableHeaderBg)];
    row.cornerRadius = 6;
  } else if (rowIndex % 2 === 1) {
    row.fills = [deps.solidFill(theme.tableRowAlt)];
    row.cornerRadius = 4;
  } else {
    row.fills = [];
  }

  row.strokes = [];
  row.strokeWeight = 0;
  const contentWidth = values.reduce((sum, _value, index) => sum + Math.max(24, widths[index] ?? 40), 0);
  const horizontalPadding = row.paddingLeft + row.paddingRight;
  const spacing = Math.max(0, values.length - 1) * row.itemSpacing;
  row.resizeWithoutConstraints(contentWidth + horizontalPadding + spacing, 1);

  values.forEach((value, index) => {
    const cell = figma.createFrame();
    cell.layoutMode = "VERTICAL";
    cell.primaryAxisSizingMode = "AUTO";
    cell.counterAxisSizingMode = "FIXED";
    cell.fills = [];
    const shouldWrap = !isHeader && wrapIndices?.has(index);
    cell.clipsContent = !shouldWrap;
    cell.resizeWithoutConstraints(widths[index] ?? 40, 1);
    const text = deps.createText(
      value,
      8,
      isHeader ? FONT_MEDIUM : FONT_REGULAR,
      isHeader ? theme.muted : theme.text,
      isHeader ? "caption" : "body"
    );
    if (shouldWrap) {
      deps.fitTextToWidth(text, Math.max(24, (widths[index] ?? 40) - 2));
    } else {
      text.setPluginData("specsNoWrap", "1");
      deps.fitTextSingleLine(text, Math.max(24, (widths[index] ?? 40) - 2));
    }
    cell.appendChild(text);
    row.appendChild(cell);
  });

  return row;
}

function shortSizing(mode: string) {
  if (mode === "AUTO") return "Auto";
  if (mode === "FIXED") return "Fix";
  if (mode === "INFERRED") return "?";
  return mode;
}

function getLayoutSpecArea(spec: LayoutSpec) {
  if (!spec.bounds) return 0;
  return Math.max(0, spec.bounds.width) * Math.max(0, spec.bounds.height);
}

function createLayoutLegend(theme: Theme, deps: LayoutSectionDeps) {
  const legend = figma.createFrame();
  legend.layoutMode = "HORIZONTAL";
  legend.primaryAxisSizingMode = "AUTO";
  legend.counterAxisSizingMode = "AUTO";
  legend.itemSpacing = 8;
  legend.fills = [];
  legend.appendChild(createLayoutLegendItem("Container", theme.overlayBlue, theme, deps));
  legend.appendChild(createLayoutLegendItem("Content", theme.overlayGreen, theme, deps));
  legend.appendChild(createLayoutLegendItem("Gap", theme.overlayOrange, theme, deps));
  return legend;
}

function createLayoutLegendItem(label: string, color: string, theme: Theme, deps: LayoutSectionDeps) {
  const item = figma.createFrame();
  item.layoutMode = "HORIZONTAL";
  item.primaryAxisSizingMode = "AUTO";
  item.counterAxisSizingMode = "AUTO";
  item.itemSpacing = 5;
  item.paddingLeft = 6;
  item.paddingRight = 6;
  item.paddingTop = 4;
  item.paddingBottom = 4;
  item.cornerRadius = 999;
  item.fills = [deps.solidFill(theme.section)];
  item.strokes = [deps.solidFill(theme.border)];
  item.strokeWeight = 1;

  const swatch = figma.createRectangle();
  swatch.resizeWithoutConstraints(8, 8);
  swatch.cornerRadius = 99;
  swatch.fills = [deps.solidFill(color)];
  item.appendChild(swatch);
  item.appendChild(deps.createText(label, 8, FONT_REGULAR, theme.muted, "caption"));
  return item;
}

function renderLayoutMarkers(
  artwork: FrameNode,
  specs: LayoutSpec[],
  showOuter: boolean,
  theme: Theme,
  deps: LayoutSectionDeps,
  settings: Settings
) {
  const cloneOffsetX = Number(artwork.getPluginData("cloneOffsetX") || 16);
  const cloneOffsetY = Number(artwork.getPluginData("cloneOffsetY") || 16);
  const cloneScale = Number(artwork.getPluginData("cloneScale") || 1);

  const BADGE_SIZE = 16;
  const limitedSpecs = specs.slice(0, showOuter ? 8 : 5);

  for (let i = 0; i < limitedSpecs.length; i++) {
    const spec = limitedSpecs[i]!;
    if (!spec.bounds) continue;

    const bx = cloneOffsetX + spec.bounds.x * cloneScale;
    const by = cloneOffsetY + spec.bounds.y * cloneScale;
    const bw = spec.bounds.width * cloneScale;
    const bh = spec.bounds.height * cloneScale;

    // Container outline (blue dashed border)
    const container = figma.createRectangle();
    container.name = `Container ${i + 1}`;
    container.x = bx;
    container.y = by;
    container.resizeWithoutConstraints(Math.max(4, bw), Math.max(4, bh));
    container.fills = [deps.solidFill(theme.overlayBlue, 0.04)];
    container.strokes = [deps.solidFill(theme.overlayBlue, 0.5)];
    container.strokeWeight = 1;
    container.dashPattern = [4, 3];
    container.cornerRadius = 2;
    artwork.appendChild(container);

    // Content fill (green, inner area minus padding)
    const pl = spec.padding.left * cloneScale;
    const pr = spec.padding.right * cloneScale;
    const pt = spec.padding.top * cloneScale;
    const pb = spec.padding.bottom * cloneScale;
    const contentW = Math.max(2, bw - pl - pr);
    const contentH = Math.max(2, bh - pt - pb);
    if (contentW > 4 && contentH > 4) {
      const content = figma.createRectangle();
      content.name = `Content ${i + 1}`;
      content.x = bx + pl;
      content.y = by + pt;
      content.resizeWithoutConstraints(contentW, contentH);
      content.fills = [deps.solidFill(theme.overlayGreen, 0.08)];
      content.strokes = [deps.solidFill(theme.overlayGreen, 0.35)];
      content.strokeWeight = 0.5;
      content.cornerRadius = 1;
      artwork.appendChild(content);
    }

    // Gap line (orange) — shows direction between first two children
    if (spec.gapLine && spec.itemSpacing > 0) {
      const gx1 = cloneOffsetX + spec.gapLine.x1 * cloneScale;
      const gy1 = cloneOffsetY + spec.gapLine.y1 * cloneScale;
      const gx2 = cloneOffsetX + spec.gapLine.x2 * cloneScale;
      const gy2 = cloneOffsetY + spec.gapLine.y2 * cloneScale;
      const dx = gx2 - gx1;
      const dy = gy2 - gy1;
      const length = Math.sqrt(dx * dx + dy * dy);
      if (length > 2) {
        const line = figma.createLine();
        line.name = `Gap ${i + 1}`;
        line.strokes = [deps.solidFill(theme.overlayOrange, 0.7)];
        line.strokeWeight = 1.5;
        line.resize(length, 0);
        line.x = gx1;
        line.y = gy1;
        line.rotation = -(Math.atan2(dy, dx) * 180) / Math.PI;
        artwork.appendChild(line);

        // Gap value label
        const gapLabel = deps.createText(
          deps.formatSpacing(spec.itemSpacing, settings),
          7,
          FONT_MEDIUM,
          theme.overlayOrange,
          "caption"
        );
        gapLabel.x = gx1 + dx / 2 - 6;
        gapLabel.y = gy1 + dy / 2 - 10;
        artwork.appendChild(gapLabel);
      }
    }

    // Direction arrow showing layout flow
    const isHorizontal = spec.layoutMode === "HORIZONTAL";
    const arrowLen = Math.min(20, (isHorizontal ? bw : bh) * 0.3);
    if (arrowLen > 6) {
      const arrowX = isHorizontal ? bx + pl + 2 : bx + bw / 2;
      const arrowY = isHorizontal ? by + bh / 2 : by + pt + 2;
      const arrow = figma.createLine();
      arrow.name = `Direction ${i + 1}`;
      arrow.strokes = [deps.solidFill(theme.overlayBlue, 0.6)];
      arrow.strokeWeight = 1.5;
      arrow.strokeCap = "ARROW_EQUILATERAL";
      arrow.resize(arrowLen, 0);
      arrow.x = arrowX;
      arrow.y = arrowY;
      arrow.rotation = isHorizontal ? 0 : -90;
      artwork.appendChild(arrow);
    }

    // Numbered badge at top-left
    const badge = figma.createFrame();
    badge.name = `Marker ${i + 1}`;
    badge.layoutMode = "HORIZONTAL";
    badge.primaryAxisSizingMode = "FIXED";
    badge.counterAxisSizingMode = "FIXED";
    badge.primaryAxisAlignItems = "CENTER";
    badge.counterAxisAlignItems = "CENTER";
    badge.resizeWithoutConstraints(BADGE_SIZE, BADGE_SIZE);
    badge.cornerRadius = BADGE_SIZE;
    badge.fills = [deps.solidFill(theme.overlayBlue)];
    badge.strokes = [deps.solidFill(theme.section)];
    badge.strokeWeight = 1;
    badge.x = Math.max(0, bx - BADGE_SIZE / 2);
    badge.y = Math.max(0, by - BADGE_SIZE / 2);

    const numText = deps.createText(String(i + 1), 8, FONT_MEDIUM, "#FFFFFF", "caption");
    badge.appendChild(numText);
    artwork.appendChild(badge);
  }
}
