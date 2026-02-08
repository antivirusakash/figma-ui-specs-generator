import { FONT_REGULAR } from "../constants";
import { log, logError } from "../logger";
import type { Inventory } from "../inventory";
import type { Attribute, AttributeFormat, BoundVariablesMap, FillSegment, Settings, TokenValueMap } from "../types";
import { formatColor, formatNumber, formatSpacing, getFirstSolidPaint, isMixed, extractIconColor } from "./format";
import { extractTokensStudioMap, findTokenValue, getSafeSharedPluginDataKeys, SHARED_PLUGIN_NAMESPACES } from "./tokens";

export async function collectAttributes(node: SceneNode, inventory: Inventory, settings: Settings): Promise<Attribute[]> {
  const attributes: Attribute[] = [];
  const tokens = extractTokensStudioMap(node);

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
      findTokenValue(tokens, ["width"])
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
      findTokenValue(tokens, ["height"])
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
      findTokenValue(tokens, ["opacity"])
    ))
  });

  if ("fills" in node && node.type !== "TEXT") {
    const paint = getFirstSolidPaint(node.fills as readonly Paint[] | typeof figma.mixed | null | undefined);
    // For icon-sized instances/components, prefer the child vector stroke/fill color
    // over the container frame fill (which is often just a white background)
    const isIconLike = (node.type === "INSTANCE" || node.type === "COMPONENT")
      && Math.max(node.width, node.height) <= 48;
    const iconPaint = isIconLike ? extractIconColor(node) : undefined;
    const effectivePaint = iconPaint ?? paint;
    if (effectivePaint) {
      const value = formatColor(effectivePaint, settings);
      const tokenValue = findTokenValue(tokens, ["fill", "fillcolor", "background", "backgroundcolor", "color"]);
      const attr = iconPaint
        ? { value, format: "HARDCODED" as AttributeFormat, rawValue: value }
        : await resolveStyleOrVariable(node, "fills", value, value, inventory, settings, tokenValue);
      attributes.push({
        key: "Fill",
        ...attr
      });
    }
    if (!effectivePaint && "fills" in node && node.type !== "TEXT") {
      const fills = node.fills as readonly Paint[];
      if (Array.isArray(fills)) {
        const imgFill = fills.find((f): f is ImagePaint => f.type === "IMAGE" && f.visible !== false);
        if (imgFill) {
          attributes.push({
            key: "Fill",
            value: "image",
            format: "HARDCODED" as AttributeFormat,
            rawValue: "image",
            imageHash: imgFill.imageHash ?? undefined
          });
        }
      }
    }
  }

  if ("strokes" in node) {
    const paint = getFirstSolidPaint(node.strokes as readonly Paint[] | typeof figma.mixed | null | undefined);
    if (paint) {
      const value = formatColor(paint, settings);
      const tokenValue = findTokenValue(tokens, ["stroke", "strokecolor", "bordercolor", "border"]);
      const attr = await resolveStyleOrVariable(node, "strokes", value, value, inventory, settings, tokenValue);
      attributes.push({
        key: "Stroke",
        ...attr
      });
    }
  }

  if ("strokeWeight" in node && typeof node.strokeWeight === "number") {
    const strokeValue = formatSpacing(node.strokeWeight, settings);
    attributes.push({
      key: "Stroke width",
      ...(await resolveVariableOrToken(
        node,
        "strokeWeight",
        strokeValue,
        node.strokeWeight,
        inventory,
        settings,
        findTokenValue(tokens, ["strokewidth", "borderwidth", "borderweight"])
      ))
    });
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
      if (top > 0) sides.push(`top: ${formatSpacing(top, settings)}`);
      if (right > 0) sides.push(`right: ${formatSpacing(right, settings)}`);
      if (bottom > 0) sides.push(`bottom: ${formatSpacing(bottom, settings)}`);
      if (left > 0) sides.push(`left: ${formatSpacing(left, settings)}`);
      if (sides.length > 0) {
        attributes.push({
          key: "Stroke sides",
          value: sides.join(", "),
          format: "HARDCODED" as AttributeFormat,
        });
      }
    } else if (top > 0 && getFirstSolidPaint(("strokes" in node ? node.strokes : undefined) as any)) {
      attributes.push({
        key: "Stroke sides",
        value: "all",
        format: "HARDCODED" as AttributeFormat,
      });
    }
  } else if ("strokes" in node && "strokeWeight" in node
      && typeof node.strokeWeight === "number" && node.strokeWeight > 0
      && getFirstSolidPaint(node.strokes as any)) {
    attributes.push({
      key: "Stroke sides",
      value: "all",
      format: "HARDCODED" as AttributeFormat,
    });
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

  if ("cornerRadius" in node && typeof node.cornerRadius === "number") {
    const radiusValue = formatSpacing(node.cornerRadius, settings);
    attributes.push({
      key: "Corner radius",
      ...(await resolveVariableOrToken(
        node,
        "cornerRadius",
        radiusValue,
        node.cornerRadius,
        inventory,
        settings,
        findTokenValue(tokens, ["cornerradius", "borderradius", "radius"])
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
    const paddingValue = `${formatSpacing(node.paddingTop, settings)} ${formatSpacing(
      node.paddingRight,
      settings
    )} ${formatSpacing(node.paddingBottom, settings)} ${formatSpacing(node.paddingLeft, settings)}`;
    attributes.push({
      key: "Padding",
      ...(await resolveVariableOrToken(
        node,
        "paddingTop",
        paddingValue,
        node.paddingTop,
        inventory,
        settings,
        findTokenValue(tokens, ["padding", "spacing"])
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
        findTokenValue(tokens, ["itemspacing", "gap", "spacing"])
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
      const textPaint = getFirstSolidPaint(textNode.fills);
      if (textPaint) {
        const textFillValue = formatColor(textPaint, settings);
        const tokenValue = findTokenValue(tokens, ["textfill", "textcolor", "foreground", "color"]);
        const textFillAttr = await resolveStyleOrVariable(
          textNode,
          "fills",
          textFillValue,
          textFillValue,
          inventory,
          settings,
          tokenValue
        );
        attributes.push({
          key: "Text fill",
          ...textFillAttr
        });
      }
    }

    const fontName = textNode.fontName !== figma.mixed ? textNode.fontName : FONT_REGULAR;
    attributes.push({
      key: "Font",
      value: `${fontName.family} ${fontName.style}`,
      format: textNode.textStyleId && !isMixed(textNode.textStyleId) ? "STYLE" : "HARDCODED",
      rawValue: fontName.family
    });
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
        findTokenValue(tokens, ["fontsize", "type"])
      ))
    });
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
        findTokenValue(tokens, ["lineheight"])
      ))
    });
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
        findTokenValue(tokens, ["letterspacing"])
      ))
    });

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
      attributes.push({
        propertyName: propName,
        value: String(prop.value),
        format: "PROPERTY"
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

/** Extract per-segment fill colors from a TEXT node with mixed fills.
 *  Merges adjacent segments sharing the same fill and caps at 10 entries. */
export function mergeAdjacentSameFill(textNode: TextNode): FillSegment[] {
  try {
    const segs = textNode.getStyledTextSegments(["fills"]);
    if (!segs || segs.length === 0) return [];

    const MAX_SEGMENTS = 10;
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
        if (result.length >= MAX_SEGMENTS) break;
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
  inventory: Inventory
): Promise<Omit<Attribute, "key">> {
  const variable = await figma.variables.getVariableByIdAsync(aliasId);
  const collectionId =
    variable && "variableCollectionId" in variable
      ? variable.variableCollectionId
      : (variable as any)?.collectionId;
  const collection = collectionId ? await figma.variables.getVariableCollectionByIdAsync(collectionId) : null;
  const name = variable ? `${collection?.name ?? "Collection"}/${variable.name}` : aliasId;
  inventory.add("variable", name, String(field), appliedTo);
  inventory.trackVariable(aliasId);
  return {
    value: name,
    format: "VARIABLE",
    rawValue,
    systemId: aliasId
  };
}

export async function resolveVariableOrToken(
  node: SceneNode,
  field: string,
  displayValue: string,
  rawValue: string | number | boolean,
  inventory: Inventory,
  settings: Settings,
  tokenValue?: string
): Promise<Omit<Attribute, "key">> {
  const boundVars = (node as any).boundVariables as BoundVariablesMap | undefined;
  const alias = boundVars?.[field] as VariableAlias | VariableAlias[] | undefined;
  const aliasId = Array.isArray(alias) ? alias[0]?.id : alias?.id;

  if (aliasId) {
    const variableAttr = await buildVariableAttribute(aliasId, field, node.name, displayValue, rawValue, inventory);
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
  tokenValue?: string
): Promise<Omit<Attribute, "key">> {
  const boundVars = (node as any).boundVariables as BoundVariablesMap | undefined;
  const alias = boundVars?.[field] as VariableAlias | VariableAlias[] | undefined;
  const aliasId = Array.isArray(alias) ? alias[0]?.id : alias?.id;

  if (aliasId) {
    const variableAttr = await buildVariableAttribute(
      aliasId,
      String(field),
      node.name,
      displayValue,
      rawValue,
      inventory
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
