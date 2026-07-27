import { FONT_REGULAR } from "../constants";
import { log, logError } from "../logger";
import type { Inventory } from "../inventory";
import type { Attribute, AttributeFormat, BoundVariablesMap, FillSegment, Settings, TokenValueMap } from "../types";
import {
  formatColor,
  formatGradient,
  formatNumber,
  formatSpacing,
  isMixed,
  extractIconColor,
  resolveTopPaint,
  resolveTopSolidPaint,
  type PaintSize
} from "./format";
import { extractTokensStudioMap, findTokenValue, getSafeSharedPluginDataKeys, SHARED_PLUGIN_NAMESPACES } from "./tokens";
import { readModeContext, resolveVariableById, type ModeContext } from "./variable-resolver";
import { LIMITS } from "../limits";

const SIZE_CONSTRAINTS: Array<{ field: string; key: string; tokenKeys: string[] }> = [
  { field: "minWidth", key: "Min width", tokenKeys: ["minwidth"] },
  { field: "maxWidth", key: "Max width", tokenKeys: ["maxwidth"] },
  { field: "minHeight", key: "Min height", tokenKeys: ["minheight"] },
  { field: "maxHeight", key: "Max height", tokenKeys: ["maxheight"] }
];

const PADDING_SIDES = [
  { field: "paddingTop", label: "t" },
  { field: "paddingRight", label: "r" },
  { field: "paddingBottom", label: "b" },
  { field: "paddingLeft", label: "l" }
] as const;

/** `cornerRadius` is NOT a bindable node field — Figma exposes the binding on each corner. */
const CORNER_SIDES = [
  { field: "topLeftRadius", label: "tl" },
  { field: "topRightRadius", label: "tr" },
  { field: "bottomRightRadius", label: "br" },
  { field: "bottomLeftRadius", label: "bl" }
] as const;

type PaintDetails = Partial<Pick<Attribute, "paintIndex" | "fillType" | "gradient" | "imageHash" | "scaleMode">>;

/** Extra record fields describing the paint a Fill/Stroke attribute was read from. */
function paintDetails(paint: Paint, index: number, settings: Settings, size?: PaintSize): PaintDetails {
  const details: PaintDetails = { paintIndex: index, fillType: paint.type };
  if (
    paint.type === "GRADIENT_LINEAR" ||
    paint.type === "GRADIENT_RADIAL" ||
    paint.type === "GRADIENT_ANGULAR" ||
    paint.type === "GRADIENT_DIAMOND"
  ) {
    details.gradient = formatGradient(paint, settings, size);
  }
  if (paint.type === "IMAGE") {
    const image = paint as ImagePaint;
    if (image.imageHash) details.imageHash = image.imageHash;
    if (image.scaleMode) details.scaleMode = image.scaleMode;
  }
  return details;
}

export async function collectAttributes(node: SceneNode, inventory: Inventory, settings: Settings): Promise<Attribute[]> {
  const attributes: Attribute[] = [];
  const tokens = extractTokensStudioMap(node);
  // Gradients are stored in normalized space — every paint read below needs the node size.
  const nodeSize: PaintSize = { width: node.width, height: node.height };
  // Variables resolve in the mode THIS node renders in, not their collection's default mode.
  const consumerModes = readModeContext(node);

  const widthValue = formatSpacing(node.width, settings);
  attributes.push({
    key: "Width",
    ...(await resolveVariableOrToken(
      node,
      "width",
      widthValue,
      node.width,
      inventory,
      settings,
      findTokenValue(tokens, ["width"]),
      consumerModes
    ))
  });

  const heightValue = formatSpacing(node.height, settings);
  attributes.push({
    key: "Height",
    ...(await resolveVariableOrToken(
      node,
      "height",
      heightValue,
      node.height,
      inventory,
      settings,
      findTokenValue(tokens, ["height"]),
      consumerModes
    ))
  });

  const opacityValue = `${formatNumber(("opacity" in node ? node.opacity : 1) * 100, settings.valuePrecision)}%`;
  attributes.push({
    key: "Opacity",
    ...(await resolveVariableOrToken(
      node,
      "opacity",
      opacityValue,
      "opacity" in node ? node.opacity : 1,
      inventory,
      settings,
      findTokenValue(tokens, ["opacity"]),
      consumerModes
    ))
  });

  if ("fills" in node && node.type !== "TEXT") {
    const topFill = resolveTopPaint(node.fills as readonly Paint[] | typeof figma.mixed | null | undefined);
    // For icon-sized instances/components, prefer the child vector stroke/fill color
    // over the container frame fill (which is often just a white background)
    const isIconLike = (node.type === "INSTANCE" || node.type === "COMPONENT")
      && Math.max(node.width, node.height) <= 48;
    const iconPaint = isIconLike ? extractIconColor(node) : undefined;
    if (iconPaint) {
      // Always a SolidPaint from a child vector — no node geometry involved.
      const value = formatColor(iconPaint, settings);
      attributes.push({
        key: "Fill",
        value,
        format: "HARDCODED" as AttributeFormat,
        rawValue: value,
        fillType: iconPaint.type
      });
    } else if (topFill) {
      const details = paintDetails(topFill.paint, topFill.index, settings, nodeSize);
      const tokenValue = findTokenValue(tokens, ["fill", "fillcolor", "background", "backgroundcolor", "color"]);
      // An IMAGE on top of a token-bound surface must not drop the surface token, so the
      // colour and its ref are read from the topmost SOLID underneath while the image
      // details (hash/scale mode) still describe the paint that is actually on top.
      const colorPaint = topFill.paint.type === "IMAGE"
        ? resolveTopSolidPaint(node.fills as readonly Paint[] | typeof figma.mixed | null | undefined)
        : topFill;
      if (!colorPaint) {
        attributes.push({
          key: "Fill",
          value: "image",
          format: "HARDCODED" as AttributeFormat,
          rawValue: "image",
          ...details
        });
      } else {
        const value = formatColor(colorPaint.paint, settings, nodeSize);
        const attr = await resolveStyleOrVariable(
          node,
          "fills",
          value,
          value,
          inventory,
          settings,
          tokenValue,
          colorPaint.index,
          colorPaint.paint,
          consumerModes
        );
        attributes.push({
          key: "Fill",
          ...attr,
          ...details
        });
      }
    }
  }

  const topStroke = "strokes" in node
    ? resolveTopPaint(node.strokes as readonly Paint[] | typeof figma.mixed | null | undefined)
    : undefined;
  if (topStroke) {
    const value = formatColor(topStroke.paint, settings, nodeSize);
    const tokenValue = findTokenValue(tokens, ["stroke", "strokecolor", "bordercolor", "border"]);
    const attr = await resolveStyleOrVariable(
      node,
      "strokes",
      value,
      value,
      inventory,
      settings,
      tokenValue,
      topStroke.index,
      topStroke.paint,
      consumerModes
    );
    attributes.push({
      key: "Stroke",
      ...attr,
      ...paintDetails(topStroke.paint, topStroke.index, settings, nodeSize)
    });
  }

  // Figma reports strokeWeight === 1 on essentially every shape/frame/text node whether or
  // not a stroke is painted, so the width is only meaningful when a visible stroke exists.
  if (topStroke && "strokeWeight" in node) {
    const strokeWeight = (node as any).strokeWeight;
    if (typeof strokeWeight === "number") {
      const strokeValue = formatSpacing(strokeWeight, settings);
      attributes.push({
        key: "Stroke width",
        ...(await resolveVariableOrToken(
          node,
          "strokeWeight",
          strokeValue,
          strokeWeight,
          inventory,
          settings,
          findTokenValue(tokens, ["strokewidth", "borderwidth", "borderweight"]),
          consumerModes
        ))
      });
    } else {
      // Per-side borders make strokeWeight figma.mixed — fall back to the side weights
      // so the width is reported instead of vanishing.
      const perSide = perSideStrokeWeights(node, settings);
      if (perSide) {
        attributes.push({
          key: "Stroke width",
          value: perSide,
          format: "HARDCODED" as AttributeFormat,
          rawValue: perSide
        });
      }
    }
  }

  if ("strokeAlign" in node && typeof node.strokeAlign === "string" && node.strokeAlign !== "CENTER") {
    attributes.push({
      key: "Stroke align",
      value: node.strokeAlign.toLowerCase(),
      format: "HARDCODED" as AttributeFormat,
    });
  }

  if ("strokeTopWeight" in node) {
    const n = node as any;
    const top = n.strokeTopWeight ?? 0;
    const right = n.strokeRightWeight ?? 0;
    const bottom = n.strokeBottomWeight ?? 0;
    const left = n.strokeLeftWeight ?? 0;
    const allSame = top === right && right === bottom && bottom === left;
    if (!allSame) {
      const sides: string[] = [];
      if (top > 0) sides.push(`border-top: ${formatSpacing(top, settings)}`);
      if (right > 0) sides.push(`border-right: ${formatSpacing(right, settings)}`);
      if (bottom > 0) sides.push(`border-bottom: ${formatSpacing(bottom, settings)}`);
      if (left > 0) sides.push(`border-left: ${formatSpacing(left, settings)}`);
      if (sides.length > 0) {
        attributes.push({
          key: "Stroke sides",
          value: sides.join(", "),
          format: "HARDCODED" as AttributeFormat,
        });
      }
    } else if (top > 0 && topStroke) {
      attributes.push({
        key: "Stroke sides",
        value: "all",
        format: "HARDCODED" as AttributeFormat,
      });
    }
  } else if (topStroke && "strokeWeight" in node
      && typeof node.strokeWeight === "number" && node.strokeWeight > 0) {
    attributes.push({
      key: "Stroke sides",
      value: "all",
      format: "HARDCODED" as AttributeFormat,
    });
  }

  if ("dashPattern" in node) {
    const dashPattern = (node as any).dashPattern as readonly number[] | undefined;
    // Omitted when solid (Figma reports an empty array for a solid stroke).
    if (Array.isArray(dashPattern) && dashPattern.length > 0) {
      attributes.push({
        key: "Dash pattern",
        value: dashPattern.map((dash) => formatSpacing(dash, settings)).join(" "),
        format: "HARDCODED" as AttributeFormat,
      });
    }
  }

  // Effects (shadows, blurs)
  if ("effects" in node) {
    const effects = (node as any).effects as readonly Effect[];
    if (effects?.length) {
      for (const effect of effects) {
        if (effect.visible === false) continue;
        if (effect.type === "DROP_SHADOW" || effect.type === "INNER_SHADOW") {
          const { r, g, b } = effect.color;
          const a = effect.color.a;
          const ri = Math.round(r * 255);
          const gi = Math.round(g * 255);
          const bi = Math.round(b * 255);
          const hex = `#${[ri, gi, bi].map(c => c.toString(16).padStart(2, "0")).join("")}`;
          const parts = [
            `${effect.offset.x}px ${effect.offset.y}px ${effect.radius}px`,
            effect.spread ? `${effect.spread}px` : null,
            a < 1 ? `rgba(${ri},${gi},${bi},${parseFloat(a.toFixed(2))})` : hex,
          ].filter(Boolean).join(" ");
          const label = effect.type === "INNER_SHADOW" ? "Inner shadow" : "Shadow";
          attributes.push({
            key: label,
            value: parts,
            format: "HARDCODED" as AttributeFormat,
          });
        }
        if (effect.type === "LAYER_BLUR" || effect.type === "BACKGROUND_BLUR") {
          const label = effect.type === "BACKGROUND_BLUR" ? "Backdrop blur" : "Blur";
          attributes.push({
            key: label,
            value: `${effect.radius}px`,
            format: "HARDCODED" as AttributeFormat,
          });
        }
      }
    }
  }

  if ("layoutPositioning" in node && (node as any).layoutPositioning === "ABSOLUTE") {
    attributes.push({
      key: "Position",
      value: "absolute",
      format: "HARDCODED" as AttributeFormat,
    });
    if ("constraints" in node) {
      const c = (node as any).constraints;
      if (c && (c.horizontal || c.vertical)) {
        attributes.push({
          key: "Constraints",
          value: `h:${(c.horizontal || "MIN").toLowerCase()}, v:${(c.vertical || "MIN").toLowerCase()}`,
          format: "HARDCODED" as AttributeFormat,
        });
      }
    }
  }

  if ("cornerRadius" in node) {
    const cornerRadius = (node as any).cornerRadius;
    const uniformRadius = typeof cornerRadius === "number";
    // Per-corner radii make cornerRadius figma.mixed — report "tl tr br bl"
    // instead of emitting no radius at all.
    const perCorner = uniformRadius ? undefined : perCornerRadius(node, settings);
    if (uniformRadius || perCorner) {
      const radiusValue = uniformRadius ? formatSpacing(cornerRadius, settings) : perCorner!;
      const radiusRaw: string | number = uniformRadius ? cornerRadius : perCorner!;
      attributes.push({
        key: "Corner radius",
        ...(await resolveCornerRadiusAttribute(
          node,
          radiusValue,
          radiusRaw,
          inventory,
          settings,
          findTokenValue(tokens, ["cornerradius", "borderradius", "radius"]),
          consumerModes
        ))
      });
    }
  }

  if ("rotation" in node && typeof (node as any).rotation === "number" && (node as any).rotation !== 0) {
    // Figma's rotation is counter-clockwise-positive ("Math.atan2(-m10, m00)"); this value is
    // emitted as a CSS-shaped "<n>deg" and consumed as transform: rotate(...), which is
    // clockwise-positive. Flip the sign so the agent reproduces the design instead of mirroring it.
    const rotation = -((node as any).rotation as number);
    attributes.push({
      key: "Rotation",
      value: `${formatNumber(rotation, settings.valuePrecision)}deg`,
      format: "HARDCODED" as AttributeFormat,
      rawValue: rotation
    });
  }

  if ("blendMode" in node) {
    const blendMode = (node as any).blendMode as string | undefined;
    if (typeof blendMode === "string" && blendMode !== "NORMAL" && blendMode !== "PASS_THROUGH") {
      attributes.push({
        key: "Blend mode",
        value: blendMode.toLowerCase(),
        format: "HARDCODED" as AttributeFormat,
        rawValue: blendMode
      });
    }
  }

  if ("isMask" in node && (node as any).isMask === true) {
    attributes.push({
      key: "Mask",
      value: "true",
      format: "HARDCODED" as AttributeFormat,
      rawValue: true
    });
  }

  for (const constraint of SIZE_CONSTRAINTS) {
    if (!(constraint.field in node)) continue;
    const raw = (node as any)[constraint.field];
    if (typeof raw !== "number") continue;
    attributes.push({
      key: constraint.key,
      ...(await resolveVariableOrToken(
        node,
        constraint.field,
        formatSpacing(raw, settings),
        raw,
        inventory,
        settings,
        findTokenValue(tokens, constraint.tokenKeys),
        consumerModes
      ))
    });
  }

  if ("layoutMode" in node && node.layoutMode !== "NONE") {
    attributes.push({
      key: "Layout direction",
      value: node.layoutMode === "HORIZONTAL" ? "Row" : "Column",
      format: "HARDCODED",
      rawValue: node.layoutMode
    });
    attributes.push({
      key: "Primary sizing",
      value: node.primaryAxisSizingMode,
      format: "HARDCODED",
      rawValue: node.primaryAxisSizingMode
    });
    attributes.push({
      key: "Counter sizing",
      value: node.counterAxisSizingMode,
      format: "HARDCODED",
      rawValue: node.counterAxisSizingMode
    });
    attributes.push({
      key: "Padding",
      ...(await resolvePaddingAttribute(
        node,
        inventory,
        settings,
        findTokenValue(tokens, ["padding", "spacing"]),
        consumerModes
      ))
    });
    const spacingValue = formatSpacing(node.itemSpacing, settings);
    attributes.push({
      key: "Item spacing",
      ...(await resolveVariableOrToken(
        node,
        "itemSpacing",
        spacingValue,
        node.itemSpacing,
        inventory,
        settings,
        findTokenValue(tokens, ["itemspacing", "gap", "spacing"]),
        consumerModes
      ))
    });
  }

  if (node.type === "TEXT") {
    const textNode = node as TextNode;
    if (textNode.fills === figma.mixed) {
      const segments = mergeAdjacentSameFill(textNode);
      attributes.push({
        key: "Text fill",
        value: "Mixed",
        format: "HARDCODED",
        rawValue: "mixed",
        ...(segments.length > 0 ? { fillSegments: segments } : {})
      });
    } else {
      const topTextFill = resolveTopPaint(textNode.fills);
      if (topTextFill) {
        const textFillValue = formatColor(topTextFill.paint, settings, nodeSize);
        const tokenValue = findTokenValue(tokens, ["textfill", "textcolor", "foreground", "color"]);
        const textFillAttr = await resolveStyleOrVariable(
          textNode,
          "fills",
          textFillValue,
          textFillValue,
          inventory,
          settings,
          tokenValue,
          topTextFill.index,
          topTextFill.paint,
          consumerModes
        );
        attributes.push({
          key: "Text fill",
          ...textFillAttr,
          ...paintDetails(topTextFill.paint, topTextFill.index, settings, nodeSize)
        });
      }
    }

    const mixedFontName = isMixed(textNode.fontName)
      ? styledSegmentValues(textNode, "fontName", (seg) => `${seg.fontName.family} ${seg.fontName.style}`)
      : [];
    if (mixedFontName.length > 0) {
      attributes.push({
        key: "Font",
        value: mixedFontName.join(", "),
        format: "HARDCODED",
        rawValue: mixedFontName.join(", ")
      });
    } else {
      const fontName = textNode.fontName !== figma.mixed ? textNode.fontName : FONT_REGULAR;
      attributes.push({
        key: "Font",
        value: `${fontName.family} ${fontName.style}`,
        format: textNode.textStyleId && !isMixed(textNode.textStyleId) ? "STYLE" : "HARDCODED",
        rawValue: fontName.family
      });
    }

    const mixedFontSize = isMixed(textNode.fontSize)
      ? styledSegmentValues(textNode, "fontSize", (seg) => formatSpacing(Number(seg.fontSize || 0), settings))
      : [];
    if (mixedFontSize.length > 0) {
      attributes.push({
        key: "Font size",
        value: mixedFontSize.join(", "),
        format: "HARDCODED",
        rawValue: mixedFontSize.join(", ")
      });
    } else if (isMixed(textNode.fontSize)) {
      // Mixed sizes with no readable segments — Number(figma.mixed) would throw.
      attributes.push({
        key: "Font size",
        value: "mixed",
        format: "HARDCODED",
        rawValue: "mixed"
      });
    } else {
      const fontSizeValue = formatSpacing(Number(textNode.fontSize || 0), settings);
      attributes.push({
        key: "Font size",
        ...(await resolveVariableOrToken(
          node,
          "fontSize",
          fontSizeValue,
          Number(textNode.fontSize || 0),
          inventory,
          settings,
          findTokenValue(tokens, ["fontsize", "type"]),
          consumerModes
        ))
      });
    }

    const mixedLineHeight = isMixed(textNode.lineHeight)
      ? styledSegmentValues(textNode, "lineHeight", (seg) => formatLineHeight(seg.lineHeight, settings))
      : [];
    if (mixedLineHeight.length > 0) {
      attributes.push({
        key: "Line height",
        value: mixedLineHeight.join(", "),
        format: "HARDCODED",
        rawValue: mixedLineHeight.join(", ")
      });
    } else {
      const lineHeightValue = formatLineHeight(textNode.lineHeight, settings);
      attributes.push({
        key: "Line height",
        ...(await resolveVariableOrToken(
          node,
          "lineHeight",
          lineHeightValue,
          lineHeightValue,
          inventory,
          settings,
          findTokenValue(tokens, ["lineheight"]),
          consumerModes
        ))
      });
    }

    const mixedLetterSpacing = isMixed(textNode.letterSpacing)
      ? styledSegmentValues(textNode, "letterSpacing", (seg) => formatLetterSpacing(seg.letterSpacing, settings))
      : [];
    if (mixedLetterSpacing.length > 0) {
      attributes.push({
        key: "Letter spacing",
        value: mixedLetterSpacing.join(", "),
        format: "HARDCODED",
        rawValue: mixedLetterSpacing.join(", ")
      });
    } else {
      // Always reported, including 0 — "explicitly 0" and "unspecified" are different
      // statements. data-section drops the zero from the compact record on its own.
      const letterSpacingValue = formatLetterSpacing(textNode.letterSpacing, settings);
      attributes.push({
        key: "Letter spacing",
        ...(await resolveVariableOrToken(
          node,
          "letterSpacing",
          letterSpacingValue,
          letterSpacingValue,
          inventory,
          settings,
          findTokenValue(tokens, ["letterspacing"]),
          consumerModes
        ))
      });
    }

    if (textNode.textAlignHorizontal && textNode.textAlignHorizontal !== "LEFT") {
      attributes.push({
        key: "Text align",
        value: textNode.textAlignHorizontal.toLowerCase(),
        format: "HARDCODED" as AttributeFormat,
      });
    }

    // Text case: an UPPER-transformed label ships its authored characters, so the
    // transform has to be reported or the agent renders the wrong string.
    // On a mixed node the default segments are kept in the list ("original"/"none")
    // so partial coverage stays visible: dropping them would report a whole-node
    // transform and the agent would uppercase text Figma renders as authored.
    const textCase = isMixed(textNode.textCase)
      ? styledSegmentValues(textNode, "textCase", (seg) => String(seg.textCase).toLowerCase())
      : typeof textNode.textCase === "string" && textNode.textCase !== "ORIGINAL"
        ? [textNode.textCase.toLowerCase()]
        : [];
    if (textCase.some((value) => value !== "original")) {
      attributes.push({
        key: "Text case",
        value: textCase.join(", "),
        format: "HARDCODED" as AttributeFormat,
        rawValue: textCase.join(", ")
      });
    }

    const textDecoration = isMixed(textNode.textDecoration)
      ? styledSegmentValues(textNode, "textDecoration", (seg) => String(seg.textDecoration).toLowerCase())
      : typeof textNode.textDecoration === "string" && textNode.textDecoration !== "NONE"
        ? [textNode.textDecoration.toLowerCase()]
        : [];
    if (textDecoration.some((value) => value !== "none")) {
      attributes.push({
        key: "Text decoration",
        value: textDecoration.join(", "),
        format: "HARDCODED" as AttributeFormat,
        rawValue: textDecoration.join(", ")
      });
    }

    if (typeof textNode.paragraphSpacing === "number" && textNode.paragraphSpacing !== 0) {
      attributes.push({
        key: "Paragraph spacing",
        value: formatSpacing(textNode.paragraphSpacing, settings),
        format: "HARDCODED" as AttributeFormat,
        rawValue: textNode.paragraphSpacing
      });
    }

    const maxLines = (textNode as any).maxLines;
    if (typeof maxLines === "number" && maxLines > 0) {
      attributes.push({
        key: "Max lines",
        value: String(maxLines),
        format: "HARDCODED" as AttributeFormat,
        rawValue: maxLines
      });
    }

    // Omitted at Figma's default (NONE), like every other new text field.
    if (typeof textNode.textAutoResize === "string" && textNode.textAutoResize !== "NONE") {
      attributes.push({
        key: "Text auto resize",
        value: textNode.textAutoResize.toLowerCase(),
        format: "HARDCODED" as AttributeFormat,
        rawValue: textNode.textAutoResize
      });
    }

    if (textNode.textStyleId && !isMixed(textNode.textStyleId)) {
      const style = await figma.getStyleByIdAsync(textNode.textStyleId as string);
      if (style) {
        inventory.add("text-style", style.name, "Typography", node.name);
        attributes.push({
          key: "Text style",
          value: style.name,
          format: "STYLE",
          systemId: textNode.textStyleId as string
        });
      }
    }
  }

  if (node.type === "INSTANCE") {
    const instance = node as InstanceNode;
    const props = instance.componentProperties;
    Object.keys(props).forEach((propName) => {
      const prop = props[propName];
      if (!prop) return;
      // Figma suffixes property keys with an id ("Icon#95:0"). Strip it for display and
      // keep the raw key in systemId — this path never feeds setProperties.
      attributes.push({
        propertyName: propName.replace(/#[\d:]+$/, ""),
        value: String(prop.value),
        format: "PROPERTY",
        systemId: propName
      });
    });
  }

  if (settings.showRawValues) {
    attributes.forEach((attr) => {
      if (attr.rawValue !== undefined) {
        attr.value = `${attr.value} (raw: ${attr.rawValue})`;
      }
    });
  }

  return attributes;
}

/** "t r b l" stroke weights, used when strokeWeight is figma.mixed (per-side borders). */
function perSideStrokeWeights(node: SceneNode, settings: Settings): string | undefined {
  const n = node as any;
  const sides = [n.strokeTopWeight, n.strokeRightWeight, n.strokeBottomWeight, n.strokeLeftWeight];
  if (!sides.every((side) => typeof side === "number")) return undefined;
  return sides.map((side: number) => formatSpacing(side, settings)).join(" ");
}

/** "tl tr br bl" radii, used when cornerRadius is figma.mixed (per-corner radii). */
function perCornerRadius(node: SceneNode, settings: Settings): string | undefined {
  const n = node as any;
  const corners = [n.topLeftRadius, n.topRightRadius, n.bottomRightRadius, n.bottomLeftRadius];
  if (!corners.every((corner) => typeof corner === "number")) return undefined;
  if (corners.every((corner: number) => corner === 0)) return undefined;
  return corners.map((corner: number) => formatSpacing(corner, settings)).join(" ");
}

/** Distinct formatted values of a styled-text field, in document order.
 *  Mirrors mergeAdjacentSameFill: tolerant of a missing API and capped at
 *  LIMITS.MAX_FILL_SEGMENTS so a heavily styled paragraph cannot blow up the output. */
function styledSegmentValues(
  textNode: TextNode,
  field: "fontName" | "fontSize" | "lineHeight" | "letterSpacing" | "textCase" | "textDecoration",
  format: (segment: any) => string
): string[] {
  try {
    const segments = textNode.getStyledTextSegments([field] as any) as any[] | undefined;
    if (!segments || segments.length === 0) return [];
    const values: string[] = [];
    for (const segment of segments) {
      let value: string;
      try {
        value = format(segment);
      } catch {
        continue;
      }
      if (!value || values.indexOf(value) !== -1) continue;
      if (values.length >= LIMITS.MAX_FILL_SEGMENTS) break;
      values.push(value);
    }
    return values;
  } catch {
    return [];
  }
}

/** Padding, with each side's bound variable resolved independently.
 *  When the four sides carry different variables they are surfaced per side
 *  ("t: Space/4, r: Space/6, …") instead of reporting paddingTop's variable for all four. */
async function resolvePaddingAttribute(
  node: SceneNode,
  inventory: Inventory,
  settings: Settings,
  tokenValue?: string,
  consumerModes?: ModeContext
): Promise<Omit<Attribute, "key">> {
  const n = node as any;
  const values = PADDING_SIDES.map((side) => Number(n[side.field] ?? 0));
  const displayValue = values.map((value) => formatSpacing(value, settings)).join(" ");
  const uniform = values.every((value) => value === values[0]);
  // Uniform padding keeps the plain number so downstream padding simplification/zero
  // filtering still works; differing sides need the full four-value string.
  const rawValue: string | number = uniform ? values[0]! : displayValue;

  const boundVars = n.boundVariables as BoundVariablesMap | undefined;
  const aliasIds = PADDING_SIDES.map((side) => {
    const alias = boundVars?.[side.field] as VariableAlias | VariableAlias[] | undefined;
    return Array.isArray(alias) ? alias[0]?.id : alias?.id;
  });

  if (aliasIds.some((id) => id)) {
    if (settings.valuePreference === "token" && tokenValue) {
      return { value: tokenValue, format: "TOKEN", rawValue };
    }
    const resolved = await Promise.all(
      aliasIds.map(async (id, index) =>
        id
          ? await buildVariableAttribute(
              id,
              PADDING_SIDES[index]!.field,
              node.name,
              displayValue,
              rawValue,
              inventory,
              settings,
              consumerModes
            )
          : null
      )
    );
    const first = resolved[0];
    if (first && resolved.every((attr) => attr !== null && attr.value === first.value)) {
      return { ...first, rawValue };
    }
    const perSide = resolved
      .map((attr, index) => `${PADDING_SIDES[index]!.label}: ${attr ? attr.value : formatSpacing(values[index]!, settings)}`)
      .join(", ");
    return { value: perSide, format: "VARIABLE", rawValue };
  }

  if (tokenValue) {
    return { value: tokenValue, format: "TOKEN", rawValue };
  }

  return { value: displayValue, format: "HARDCODED", rawValue };
}

/** Corner radius, with each corner's bound variable resolved independently.
 *  `cornerRadius` is not a VariableBindableNodeField: Figma records the binding on
 *  topLeftRadius/topRightRadius/bottomRightRadius/bottomLeftRadius, so reading
 *  boundVariables.cornerRadius alone finds nothing and every radius token is lost. */
async function resolveCornerRadiusAttribute(
  node: SceneNode,
  displayValue: string,
  rawValue: string | number,
  inventory: Inventory,
  settings: Settings,
  tokenValue?: string,
  consumerModes?: ModeContext
): Promise<Omit<Attribute, "key">> {
  const n = node as any;
  const boundVars = n.boundVariables as Record<string, VariableAlias | VariableAlias[] | undefined> | undefined;
  const aliasIdFor = (field: string) => {
    const alias = boundVars?.[field];
    return Array.isArray(alias) ? alias[0]?.id : alias?.id;
  };
  // Some node types do expose a single cornerRadius binding — honour it as a fallback.
  const uniformAliasId = aliasIdFor("cornerRadius");
  const aliasIds = CORNER_SIDES.map((corner) => aliasIdFor(corner.field) ?? uniformAliasId);

  if (aliasIds.some((id) => id)) {
    if (settings.valuePreference === "token" && tokenValue) {
      return { value: tokenValue, format: "TOKEN", rawValue };
    }
    const resolved = await Promise.all(
      aliasIds.map(async (id, index) =>
        id
          ? await buildVariableAttribute(
              id,
              CORNER_SIDES[index]!.field,
              node.name,
              displayValue,
              rawValue,
              inventory,
              settings,
              consumerModes
            )
          : null
      )
    );
    const first = resolved[0];
    if (first && resolved.every((attr) => attr !== null && attr.value === first.value)) {
      return { ...first, rawValue };
    }
    const perCorner = resolved
      .map((attr, index) => {
        const corner = CORNER_SIDES[index]!;
        const fallback = formatSpacing(Number(n[corner.field] ?? 0), settings);
        return `${corner.label}: ${attr ? attr.value : fallback}`;
      })
      .join(", ");
    return { value: perCorner, format: "VARIABLE", rawValue };
  }

  if (tokenValue) {
    return { value: tokenValue, format: "TOKEN", rawValue };
  }

  return { value: displayValue, format: "HARDCODED", rawValue };
}

/** Extract per-segment fill colors from a TEXT node with mixed fills.
 *  Merges adjacent segments sharing the same fill and caps at LIMITS.MAX_FILL_SEGMENTS entries. */
export function mergeAdjacentSameFill(textNode: TextNode): FillSegment[] {
  try {
    const segs = textNode.getStyledTextSegments(["fills"]);
    if (!segs || segs.length === 0) return [];

    const result: FillSegment[] = [];

    for (const seg of segs) {
      const solid = (seg.fills as readonly Paint[])?.find(
        (f): f is SolidPaint => f.type === "SOLID" && f.visible !== false
      );
      if (!solid) continue;
      const r = Math.round(solid.color.r * 255);
      const g = Math.round(solid.color.g * 255);
      const b = Math.round(solid.color.b * 255);
      const hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`.toUpperCase();

      const last = result[result.length - 1];
      if (last && last.fill === hex) {
        last.text += seg.characters;
      } else {
        if (result.length >= LIMITS.MAX_FILL_SEGMENTS) break;
        result.push({ text: seg.characters, fill: hex });
      }
    }

    return result;
  } catch {
    return [];
  }
}

export function formatLineHeight(lineHeight: LineHeight | typeof figma.mixed, settings: Settings) {
  if (isMixed(lineHeight)) return "mixed";
  if (lineHeight.unit === "AUTO") return "Auto";
  if (lineHeight.unit === "PIXELS") return formatSpacing(lineHeight.value, settings);
  if (lineHeight.unit === "PERCENT") return `${formatNumber(lineHeight.value, settings.valuePrecision)}%`;
  return "Unknown";
}

export function formatLetterSpacing(letterSpacing: LetterSpacing | typeof figma.mixed, settings: Settings) {
  if (isMixed(letterSpacing)) return "mixed";
  if (letterSpacing.unit === "PIXELS") return formatSpacing(letterSpacing.value, settings);
  if (letterSpacing.unit === "PERCENT") return `${formatNumber(letterSpacing.value, settings.valuePrecision)}%`;
  return "Unknown";
}

export async function buildVariableAttribute(
  aliasId: string,
  field: string,
  appliedTo: string,
  displayValue: string,
  rawValue: string | number | boolean,
  inventory: Inventory,
  settings: Settings,
  consumerModes?: ModeContext
): Promise<Omit<Attribute, "key">> {
  const resolved = await resolveVariableById(aliasId, settings, consumerModes);
  // Full "Collection/Group/Sub/Name" path — never truncated here.
  const name = resolved?.name ?? aliasId;
  inventory.add("variable", name, String(field), appliedTo);
  inventory.trackVariable(aliasId);
  const attribute: Omit<Attribute, "key"> = {
    value: name,
    format: "VARIABLE",
    rawValue,
    systemId: aliasId
  };
  if (resolved && resolved.chain.length > 1) {
    attribute.aliasChain = resolved.chain;
  }
  return attribute;
}

export async function resolveVariableOrToken(
  node: SceneNode,
  field: string,
  displayValue: string,
  rawValue: string | number | boolean,
  inventory: Inventory,
  settings: Settings,
  tokenValue?: string,
  consumerModes?: ModeContext
): Promise<Omit<Attribute, "key">> {
  const boundVars = (node as any).boundVariables as BoundVariablesMap | undefined;
  const alias = boundVars?.[field] as VariableAlias | VariableAlias[] | undefined;
  const aliasId = Array.isArray(alias) ? alias[0]?.id : alias?.id;

  if (aliasId) {
    const variableAttr = await buildVariableAttribute(
      aliasId,
      field,
      node.name,
      displayValue,
      rawValue,
      inventory,
      settings,
      consumerModes
    );
    if (settings.valuePreference === "token" && tokenValue) {
      return { value: tokenValue, format: "TOKEN", rawValue };
    }
    return variableAttr;
  }

  if (tokenValue) {
    return { value: tokenValue, format: "TOKEN", rawValue };
  }

  return {
    value: displayValue,
    format: "HARDCODED",
    rawValue
  };
}

export async function resolveStyleOrVariable(
  node: SceneNode,
  field: keyof BoundVariablesMap,
  displayValue: string,
  rawValue: string | number | boolean,
  inventory: Inventory,
  settings: Settings,
  tokenValue?: string,
  paintIndex = 0,
  paint?: Paint,
  consumerModes?: ModeContext
): Promise<Omit<Attribute, "key">> {
  const boundVars = (node as any).boundVariables as BoundVariablesMap | undefined;
  const alias = boundVars?.[field] as VariableAlias | VariableAlias[] | undefined;
  // The colour binding lives on the paint itself (Paint.boundVariables.color); the node-level
  // fills/strokes array is a parallel fallback read at the resolved paint's own index. There is
  // deliberately NO fallback to index 0: attributing a lower paint's variable to an unbound top
  // paint poisons fill_ref and the document-wide resolved_tokens map with the wrong value.
  const paintAliasId = ((paint as any)?.boundVariables?.color as VariableAlias | undefined)?.id;
  const aliasId = paintAliasId ?? (Array.isArray(alias) ? alias[paintIndex]?.id : alias?.id);

  if (aliasId) {
    const variableAttr = await buildVariableAttribute(
      aliasId,
      String(field),
      node.name,
      displayValue,
      rawValue,
      inventory,
      settings,
      consumerModes
    );
    if (settings.valuePreference === "token" && tokenValue) {
      return { value: tokenValue, format: "TOKEN", rawValue };
    }
    return variableAttr;
  }

  let styleAttr: Omit<Attribute, "key"> | null = null;
  if (field === "fills" && "fillStyleId" in node) {
    const styleId = node.fillStyleId as string | typeof figma.mixed;
    if (styleId && !isMixed(styleId)) {
      const style = await figma.getStyleByIdAsync(styleId);
      if (style) {
        inventory.add("color-style", style.name, "Fill", node.name);
        styleAttr = {
          value: style.name,
          format: "STYLE",
          rawValue,
          systemId: styleId
        };
      }
    }
  }

  if (field === "strokes" && "strokeStyleId" in node) {
    const styleId = node.strokeStyleId as string | typeof figma.mixed;
    if (styleId && !isMixed(styleId)) {
      const style = await figma.getStyleByIdAsync(styleId);
      if (style) {
        inventory.add("color-style", style.name, "Stroke", node.name);
        styleAttr = {
          value: style.name,
          format: "STYLE",
          rawValue,
          systemId: styleId
        };
      }
    }
  }

  if (node.type === "TEXT" && node.textStyleId && !isMixed(node.textStyleId)) {
    const style = await figma.getStyleByIdAsync(node.textStyleId as string);
    if (style) {
      inventory.add("text-style", style.name, "Typography", node.name);
      styleAttr = {
        value: style.name,
        format: "STYLE",
        rawValue,
        systemId: node.textStyleId as string
      };
    }
  }

  if (tokenValue) {
    return { value: tokenValue, format: "TOKEN", rawValue };
  }

  if (styleAttr) {
    return styleAttr;
  }

  return {
    value: displayValue,
    format: "HARDCODED",
    rawValue
  };
}

export function detectTokensStudio(node: SceneNode, inventory: Inventory) {
  if (!("getSharedPluginDataKeys" in node)) return;
  SHARED_PLUGIN_NAMESPACES.forEach((ns) => {
    const keys = getSafeSharedPluginDataKeys(node, ns);
    if (keys.length > 0) {
      log("Tokens Studio data detected", { node: node.name, namespace: ns, count: keys.length });
    }
    keys.forEach((key) => {
      const value = node.getSharedPluginData(ns, key);
      if (!value) return;
      const tokenName = value.length < 80 ? value : key;
      inventory.add("tokens-studio", tokenName, key, node.name);
    });
  });
}
