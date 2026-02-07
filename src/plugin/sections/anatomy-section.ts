import { FONT_MEDIUM, FONT_REGULAR } from "../constants";
import { log } from "../logger";
import type { AnatomyElement, Settings, SpecTextRole, Theme } from "../types";

type CreateTextFn = (
  text: string,
  size?: number,
  font?: FontName,
  color?: string,
  role?: SpecTextRole
) => TextNode;

type AnatomySectionDeps = {
  createSectionFrame: (title: string, theme: Theme) => FrameNode;
  createText: CreateTextFn;
  createTableRow: (
    columns: Array<{ label: string; width: number; wrap?: boolean }>,
    theme: Theme,
    isHeader: boolean,
    rowIndex?: number
  ) => FrameNode;
  createContentCard: (theme: Theme) => FrameNode;
  createArtworkFrame: (
    target: SceneNode,
    markerGutter: number,
    theme: Theme,
    maxContentWidth?: number,
    maxContentHeight?: number
  ) => Promise<FrameNode>;
  truncateText: (value: string, maxLength: number) => string;
  solidFill: (hex: string, opacity?: number) => SolidPaint;
};

export async function createAnatomySection(
  target: SceneNode,
  elements: AnatomyElement[],
  settings: Settings,
  theme: Theme,
  deps: AnatomySectionDeps,
  title = "Anatomy"
) {
  const section = deps.createSectionFrame(title, theme);
  const compact = settings.agentReadyData && settings.aiCompactMode;
  const sectionContentWidth = settings.sectionWidth
    ? settings.sectionWidth - 40
    : (settings.multiColumn || compact) ? 500 : 800;
  const tableWidths = sectionContentWidth < 420
    ? {
        index: 16,
        element: 88,
        type: 46,
        details: 155,
        component: 80,
        dependsOn: 80,
        props: 140
      }
    : sectionContentWidth < 700
    ? {
        index: 18,
        element: 104,
        type: 54,
        details: 188,
        component: 94,
        dependsOn: 94,
        props: 158
      }
    : sectionContentWidth < 1100
    ? {
        index: 20,
        element: 180,
        type: 70,
        details: 340,
        component: 200,
        dependsOn: 180,
        props: 300
      }
    : {
        index: 20,
        element: Math.round(sectionContentWidth * 0.14),
        type: 70,
        details: Math.round(sectionContentWidth * 0.35),
        component: Math.round(sectionContentWidth * 0.16),
        dependsOn: Math.round(sectionContentWidth * 0.14),
        props: Math.round(sectionContentWidth * 0.28)
      };
  const nameMax = sectionContentWidth < 420 ? 20 : sectionContentWidth < 700 ? 22 : sectionContentWidth < 1100 ? 30 : 50;
  const highlights = pickAnatomyHighlights(target, elements, compact ? 10 : settings.tabularAnatomy ? 14 : 12);
  const instanceHighlights = highlights.filter((element) => element.type === "INSTANCE");
  const detailHighlights = highlights.filter((element) => element.type !== "INSTANCE");
  const isTruncated = highlights.length < elements.length;

  section.appendChild(
    deps.createText(
      `${highlights.length} highlighted elements from ${elements.length} detected.`,
      10,
      FONT_REGULAR,
      theme.muted,
      "muted"
    )
  );
  if (isTruncated) {
    section.appendChild(
      deps.createText(
        "Output is intentionally curated for readability on dense screens.",
        9,
        FONT_REGULAR,
        theme.muted,
        "caption"
      )
    );
  }

  const artwork = await deps.createArtworkFrame(target, 0, theme);
  renderAnatomyMarkers(artwork, highlights, theme, deps);

  if (settings.tabularAnatomy) {
    if (instanceHighlights.length > 0) {
      const card = deps.createContentCard(theme);
      card.appendChild(deps.createText("Nested components", 11, FONT_MEDIUM, theme.text, "label"));
      const header = deps.createTableRow(
        [
          { label: "#", width: tableWidths.index },
          { label: "Component", width: tableWidths.component },
          { label: "Depends on", width: tableWidths.dependsOn },
          { label: "Properties", width: tableWidths.props }
        ],
        theme,
        true
      );
      card.appendChild(header);
      instanceHighlights.forEach((element, index) => {
        const props = element.attributes
          .filter((attr) => attr.format === "PROPERTY")
          .slice(0, 4)
          .map((attr) => `${attr.propertyName}: ${deps.truncateText(attr.value, 80)}`)
          .join(", ");
        const row = deps.createTableRow(
          [
            { label: String(index + 1), width: tableWidths.index },
            { label: deps.truncateText(element.name, nameMax), width: tableWidths.component },
            { label: deps.truncateText(element.instanceOf ?? "—", nameMax), width: tableWidths.dependsOn },
            { label: deps.truncateText(props || "—", 300), width: tableWidths.props, wrap: true }
          ],
          theme,
          false,
          index
        );
        card.appendChild(row);
      });
      section.appendChild(card);
    }

    if (detailHighlights.length > 0) {
      const card = deps.createContentCard(theme);
      card.appendChild(deps.createText("Elements with attributes", 11, FONT_MEDIUM, theme.text, "label"));
      const header = deps.createTableRow(
        [
          { label: "#", width: tableWidths.index },
          { label: "Element", width: tableWidths.element },
          { label: "Type", width: tableWidths.type },
          { label: "Attributes", width: tableWidths.details }
        ],
        theme,
        true
      );
      card.appendChild(header);
      detailHighlights.forEach((element, index) => {
        const attrs = summarizeAnatomyAttributes(element, deps, 4);
        const row = deps.createTableRow(
          [
            { label: String(index + 1), width: tableWidths.index },
            { label: deps.truncateText(element.name, nameMax), width: tableWidths.element },
            { label: element.type, width: tableWidths.type },
            { label: deps.truncateText(attrs || "—", 300), width: tableWidths.details, wrap: true }
          ],
          theme,
          false,
          index
        );
        card.appendChild(row);
      });
      section.appendChild(card);
    }
  } else {
    const card = deps.createContentCard(theme);
    card.appendChild(deps.createText("Highlighted layers", 11, FONT_MEDIUM, theme.text, "label"));
    const header = deps.createTableRow(
      [
        { label: "#", width: tableWidths.index },
        { label: "Element", width: tableWidths.element },
        { label: "Type", width: tableWidths.type },
        { label: "Details", width: tableWidths.details }
      ],
      theme,
      true
    );
    card.appendChild(header);
    highlights.forEach((element, index) => {
      const details = summarizeAnatomyDetails(element, deps);
      const row = deps.createTableRow(
        [
          { label: String(index + 1), width: tableWidths.index },
          { label: deps.truncateText(element.name, nameMax), width: tableWidths.element },
          { label: element.type, width: tableWidths.type },
          { label: deps.truncateText(details, 300), width: tableWidths.details, wrap: true }
        ],
        theme,
        false,
        index
      );
      card.appendChild(row);
    });
    section.appendChild(card);

    section.appendChild(deps.createText("Numbers on the artwork map to rows in the table above.", 9, FONT_REGULAR, theme.muted, "caption"));
  }
  section.appendChild(artwork);

  log("Anatomy section composition", {
    title,
    totalElements: elements.length,
    highlighted: highlights.length,
    truncated: isTruncated,
    tabular: settings.tabularAnatomy
  });

  return section;
}

function summarizeAnatomyAttributes(element: AnatomyElement, deps: AnatomySectionDeps, limit = 3) {
  const preferredKeys = ["Text fill", "Fill", "Stroke", "Font size", "Font", "Padding", "Item spacing"];
  const preferred = element.attributes.filter((attr) => attr.key && preferredKeys.includes(attr.key));
  const remainder = element.attributes.filter((attr) => attr.key && !preferredKeys.includes(attr.key));
  const ordered = preferred.concat(remainder);
  return ordered
    .slice(0, limit)
    .map((attr) => `${attr.key}: ${deps.truncateText(attr.value, 80)}`)
    .join(", ");
}

function summarizeAnatomyDetails(element: AnatomyElement, deps: AnatomySectionDeps) {
  const instanceInfo = element.instanceOf ? `depends on ${element.instanceOf}` : "";
  const attrs = summarizeAnatomyAttributes(element, deps, 3);
  if (instanceInfo && attrs) return `${instanceInfo}; ${attrs}`;
  if (instanceInfo) return instanceInfo;
  if (attrs) return attrs;
  return "No key attributes";
}

function pickAnatomyHighlights(target: SceneNode, elements: AnatomyElement[], limit: number) {
  const targetBox = target.absoluteBoundingBox;
  const targetArea = targetBox ? targetBox.width * targetBox.height : 0;
  const filtered = elements.filter((element) => {
    if (!element.bounds) return false;
    if (element.bounds.width < 4 || element.bounds.height < 4) return false;
    const informative = hasInformativeAttributes(element);
    const genericName = isGenericLayerName(element.name);
    if (targetArea > 0) {
      const area = element.bounds.width * element.bounds.height;
      const ratio = area / Math.max(1, targetArea);
      if (ratio >= 0.92 && elements.length > 8) return false;
      if (element.type === "GROUP" && (ratio >= 0.1 || (!informative && genericName))) return false;
      if (element.type === "FRAME" && ratio >= 0.75) return false;
      if ((element.type === "VECTOR" || element.type === "RECTANGLE") && ratio >= 0.65) return false;
    }
    if (element.type === "GROUP" && !informative) return false;
    if (element.type === "FRAME" && !informative && genericName) return false;
    return true;
  });

  const score = (element: AnatomyElement) => {
    const area = element.bounds ? element.bounds.width * element.bounds.height : 0;
    const hasComponentProps = element.attributes.some((attr) => attr.format === "PROPERTY");
    const genericName = isGenericLayerName(element.name);
    const informative = hasInformativeAttributes(element);
    let bonus = 0;
    if (element.type === "INSTANCE") bonus += 14000;
    if (element.type === "TEXT") bonus += 11000;
    if (element.type === "COMPONENT") bonus += 9000;
    if (element.type === "BOOLEAN_OPERATION") bonus += 3500;
    if (element.type === "GROUP") bonus -= 12000;
    if (element.type === "FRAME") bonus -= 5000;
    if (element.type === "VECTOR" || element.type === "RECTANGLE" || element.type === "ELLIPSE") bonus -= 1200;
    if (element.instanceOf) bonus += 5000;
    if (hasComponentProps) bonus += 2800;
    if (informative) bonus += 2200;
    if (genericName) bonus -= 4200;
    const density = Math.min(6, element.attributes.length) * 380;
    return Math.sqrt(Math.max(0, area)) * 16 + bonus + density;
  };

  const ranked = filtered.sort((a, b) => score(b) - score(a));
  const picked: AnatomyElement[] = [];
  const priority = ranked.filter(
    (element) =>
      element.type === "INSTANCE" ||
      element.type === "TEXT" ||
      element.type === "COMPONENT" ||
      element.attributes.some((attr) => attr.format === "PROPERTY") ||
      hasInformativeAttributes(element)
  );
  const fallback = ranked.filter((element) => !priority.includes(element));
  const instanceCounts = new Map<string, number>();
  const pushFrom = (source: AnatomyElement[], maxOverlap: number) => {
    for (const candidate of source) {
      if (!candidate.bounds) continue;
      // Cap instances of the same component to 2 picks
      if (candidate.instanceOf) {
        const count = instanceCounts.get(candidate.instanceOf) ?? 0;
        if (count >= 2) continue;
      }
      const collides = picked.some((chosen) => overlapRatio(candidate, chosen) >= maxOverlap);
      if (collides) continue;
      picked.push(candidate);
      if (candidate.instanceOf) {
        instanceCounts.set(candidate.instanceOf, (instanceCounts.get(candidate.instanceOf) ?? 0) + 1);
      }
      if (picked.length >= limit) return;
    }
  };
  pushFrom(priority, 0.78);
  if (picked.length < limit) {
    pushFrom(
      fallback.filter((element) => !isGenericLayerName(element.name) && element.type !== "GROUP"),
      0.72
    );
  }

  if (picked.length < Math.min(4, limit)) {
    pushFrom(ranked, 0.9);
  }

  log("Anatomy highlight picks", picked.map((item) => `${item.type}:${item.name}`));
  return picked;
}

function isGenericLayerName(name: string) {
  const normalized = name.trim();
  return /^(layer|frame|group|rectangle|vector|line|ellipse|polygon|star|image|mask|bg|background)(\s+\d+)?$/i.test(
    normalized
  );
}

function hasInformativeAttributes(element: AnatomyElement) {
  const nonInformativeKeys = new Set([
    "Width",
    "Height",
    "Opacity",
    "Primary sizing",
    "Counter sizing",
    "Layout direction"
  ]);
  return element.attributes.some((attr) => {
    if (attr.format === "PROPERTY" || attr.format === "STYLE" || attr.format === "TOKEN") return true;
    if (!attr.key) return false;
    return !nonInformativeKeys.has(attr.key);
  });
}

function overlapRatio(a: AnatomyElement, b: AnatomyElement) {
  if (!a.bounds || !b.bounds) return 0;
  const ax2 = a.bounds.x + a.bounds.width;
  const ay2 = a.bounds.y + a.bounds.height;
  const bx2 = b.bounds.x + b.bounds.width;
  const by2 = b.bounds.y + b.bounds.height;
  const ix = Math.max(0, Math.min(ax2, bx2) - Math.max(a.bounds.x, b.bounds.x));
  const iy = Math.max(0, Math.min(ay2, by2) - Math.max(a.bounds.y, b.bounds.y));
  const intersection = ix * iy;
  if (intersection <= 0) return 0;
  const areaA = Math.max(1, a.bounds.width * a.bounds.height);
  const areaB = Math.max(1, b.bounds.width * b.bounds.height);
  return intersection / Math.min(areaA, areaB);
}

function renderAnatomyMarkers(artwork: FrameNode, elements: AnatomyElement[], theme: Theme, deps: AnatomySectionDeps) {
  const cloneOffsetX = Number(artwork.getPluginData("cloneOffsetX") || 16);
  const cloneOffsetY = Number(artwork.getPluginData("cloneOffsetY") || 16);
  const cloneScale = Number(artwork.getPluginData("cloneScale") || 1);

  const BADGE_SIZE = 16;

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (!element.bounds) continue;

    const elX = cloneOffsetX + element.bounds.x * cloneScale;
    const elY = cloneOffsetY + element.bounds.y * cloneScale;
    const elW = element.bounds.width * cloneScale;
    const elH = element.bounds.height * cloneScale;

    // Highlight rectangle around the element
    const highlight = figma.createRectangle();
    highlight.name = `Highlight ${i + 1}`;
    highlight.x = elX;
    highlight.y = elY;
    highlight.resizeWithoutConstraints(Math.max(4, elW), Math.max(4, elH));
    highlight.fills = [deps.solidFill(theme.overlayOrange, 0.06)];
    highlight.strokes = [deps.solidFill(theme.overlayOrange, 0.4)];
    highlight.strokeWeight = 1;
    highlight.dashPattern = [3, 2];
    highlight.cornerRadius = 2;
    artwork.appendChild(highlight);

    // Position badge at top-left corner of the element
    const badgeX = Math.max(0, elX - BADGE_SIZE / 2);
    const badgeY = Math.max(0, elY - BADGE_SIZE / 2);

    // Connector line from badge to element center
    const centerX = elX + elW / 2;
    const centerY = elY + elH / 2;
    const badgeCX = badgeX + BADGE_SIZE / 2;
    const badgeCY = badgeY + BADGE_SIZE / 2;
    const dx = centerX - badgeCX;
    const dy = centerY - badgeCY;
    const length = Math.sqrt(dx * dx + dy * dy);
    if (length > BADGE_SIZE) {
      const line = figma.createLine();
      line.strokes = [deps.solidFill(theme.overlayOrange, 0.35)];
      line.strokeWeight = 0.75;
      line.dashPattern = [3, 2];
      line.resize(length, 0);
      line.x = badgeCX;
      line.y = badgeCY;
      line.rotation = -(Math.atan2(dy, dx) * 180) / Math.PI;
      artwork.appendChild(line);
    }

    // Numbered circle badge
    const badge = figma.createFrame();
    badge.name = `Marker ${i + 1}`;
    badge.layoutMode = "HORIZONTAL";
    badge.primaryAxisSizingMode = "FIXED";
    badge.counterAxisSizingMode = "FIXED";
    badge.primaryAxisAlignItems = "CENTER";
    badge.counterAxisAlignItems = "CENTER";
    badge.resizeWithoutConstraints(BADGE_SIZE, BADGE_SIZE);
    badge.cornerRadius = BADGE_SIZE;
    badge.fills = [deps.solidFill(theme.overlayOrange)];
    badge.strokes = [deps.solidFill(theme.section)];
    badge.strokeWeight = 1;
    badge.x = badgeX;
    badge.y = badgeY;

    const numText = deps.createText(String(i + 1), 8, FONT_MEDIUM, "#FFFFFF", "caption");
    badge.appendChild(numText);
    artwork.appendChild(badge);
  }
}
