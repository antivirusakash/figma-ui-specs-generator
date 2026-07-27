import { FONT_MEDIUM, FONT_REGULAR } from "../constants";
import type { Inventory } from "../inventory";
import type { AnatomyElement, DataModel, Settings, SpecTextRole, Theme } from "../types";
import { getActiveLimits, getLimit, LIMITS } from "../limits";
import { encodeDiffs, deduplicateWidthDiffs } from "../helpers/v12-repeat-diff";

type CreateTextFn = (
  text: string,
  size?: number,
  font?: FontName,
  color?: string,
  role?: SpecTextRole
) => TextNode;

type DataSectionDeps = {
  createSectionFrame: (title: string, theme: Theme) => FrameNode;
  createText: CreateTextFn;
  createContentCard: (theme: Theme) => FrameNode;
  fitTextToWidth: (node: TextNode, width: number) => void;
  getSectionContentWidth: (settings: Settings) => number;
  truncateText: (value: string, maxLength: number) => string;
  log: (...args: any[]) => void;
};

const MCP_AGENT_TOOLS = [
  "whoami",
  "get_metadata",
  "get_screenshot",
  "get_design_context",
  "get_variable_defs",
  "get_code_connect_map",
  "get_code_connect_suggestions",
  "add_code_connect_map",
  "send_code_connect_mappings",
  "create_design_system_rules",
  "generate_diagram",
  "get_figjam"
];

export function mapFigmaAlign(value: string): string {
  switch (value) {
    case "MIN": return "flex-start";
    case "CENTER": return "center";
    case "MAX": return "flex-end";
    case "SPACE_BETWEEN": return "space-between";
    default: return value.toLowerCase();
  }
}

export function mapFigmaSizing(value: string): string {
  switch (value) {
    case "FIXED": return "fixed";
    case "HUG": return "auto";
    case "AUTO": return "auto";
    case "FILL": return "fill";
    default: return value.toLowerCase();
  }
}

export function simplifyPadding(value: string): string | number {
  const parts = value.split(" ");
  if (parts.length !== 4) return value;
  const [t, r, b, l] = parts;
  if (t === r && r === b && b === l) {
    const n = Number(t);
    return Number.isFinite(n) ? n : t!;
  }
  if (t === b && r === l) return `${t} ${r}`;
  return value;
}

/** True when a formatted numeric value ("0", "0px", "0%") is zero. Non-numeric values are never zero. */
function isZeroValue(value: unknown): boolean {
  return parseFloat(String(value)) === 0;
}

/** Normalize an enum-ish attribute value for default comparison ("pass-through" → "PASS_THROUGH"). */
function normalizeEnum(value: unknown): string {
  return String(value).trim().toUpperCase().replace(/[\s-]+/g, "_");
}

function chunkArray<T>(items: T[], size: number) {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

function splitText(value: string, maxChars: number = getLimit("CANVAS_SPLIT_TEXT_CHARS")) {
  const lines = value.split("\n");
  const chunks: string[] = [];
  let current = "";

  lines.forEach((line) => {
    if (current.length + line.length + 1 > maxChars) {
      if (current.length > 0) {
        chunks.push(current);
      }
      current = line;
      return;
    }
    current = current.length > 0 ? `${current}\n${line}` : line;
  });

  if (current.length > 0) {
    chunks.push(current);
  }
  return chunks;
}

function toLegacyDataPayload(dataModel: DataModel, includeAttributes: boolean) {
  return {
    anatomy: dataModel.anatomy.map((element) => ({
      name: element.name,
      type: element.type,
      nodeId: element.nodeId,
      pathKey: element.pathKey,
      instanceOf: element.instanceOf,
      attributes: includeAttributes ? element.attributes : []
    })),
    properties: dataModel.properties.map((spec) => ({
      name: spec.name,
      type: spec.type,
      default: spec.default,
      options: spec.options.map((option) => ({
        name: option.name,
        elements: includeAttributes
          ? option.elements.map((el) => ({
              name: el.name,
              type: el.type,
              nodeId: el.nodeId,
              pathKey: el.pathKey,
              instanceOf: el.instanceOf,
              attributes: el.attributes
            }))
          : option.elements.map((el) => ({
              name: el.name,
              type: el.type,
              nodeId: el.nodeId,
              pathKey: el.pathKey,
              instanceOf: el.instanceOf,
              attributes: []
            })),
        differences: option.differences
      }))
    }))
  };
}

export function toAgentReadyDataPayload(
  dataModel: DataModel,
  includeAttributes: boolean,
  target: SceneNode,
  settings: Settings,
  inventory: Inventory,
  deps: DataSectionDeps
) {
  const compact = settings.aiCompactMode;
  const isV14 = compact && settings.schemaVersion === "v14";
  const isV13 = compact && (settings.schemaVersion === "v13" || isV14);
  const isV12 = compact && (settings.schemaVersion === "v12" || isV13);
  // variant_diffs in a component_definition chunk are keyed by path_key. The chunk's own
  // node_ids map (path_key → node id) already makes those keys resolvable against each
  // record's node_id, so path_key is only restored when that map is absent — emitting both
  // would ship the same string twice per element and undo the v12 size optimisation.
  const componentDefNodeIds = dataModel.componentDefinition?.nodeIds;
  const keepPathKeys =
    isV13 &&
    Boolean(dataModel.componentDefinition) &&
    !(componentDefNodeIds && Object.keys(componentDefNodeIds).length > 0);
  const maxAnatomy = getLimit("MAX_ANATOMY_RECORDS");
  const maxProperties = getLimit("MAX_PROPERTY_RECORDS");
  const resolvedTokens = new Map<string, string>();
  const tokenAliases = new Map<string, string[]>();

  // Build set of repeat node IDs early (anatomy chunk filtering — all versions)
  const repeatNodeIds = new Set<string>();
  (dataModel.instanceTemplates ?? []).forEach(tpl => {
    repeatNodeIds.add(tpl.templateNodeId);
    tpl.repeats.forEach(r => repeatNodeIds.add(r.nodeId));
  });

  // Build an anatomy record from an AnatomyElement (used for anatomy chunks + template_attributes)
  function buildAnatomyRecord(element: AnatomyElement, opts?: { skipIdentity?: boolean }) {
    const record: any = {};
    if (!opts?.skipIdentity) {
      record.node_id = element.nodeId ?? "";
      if (!isV12 || keepPathKeys) {
        record.path_key = element.pathKey ?? "";
      }
      record.name = deps.truncateText(element.name, LIMITS.TRUNC_ELEMENT_NAME);
      record.type = element.type;
      if (element.instanceOf) {
        record.instance_of = deps.truncateText(element.instanceOf, LIMITS.TRUNC_INSTANCE_OF);
      }
      if (element.instanceVariant) {
        record.instance_variant = deps.truncateText(element.instanceVariant, LIMITS.TRUNC_INSTANCE_OF);
      }
    }

    if (element.textContent) {
      record.text = deps.truncateText(element.textContent, LIMITS.TRUNC_TEXT_CONTENT);
    }
    if (element.childrenText?.length) {
      record.children_text = element.childrenText.map(t =>
        deps.truncateText(t, LIMITS.TRUNC_CHILDREN_TEXT)
      );
    }
    if (element.bounds) {
      record.w = Math.round(element.bounds.width);
      record.h = Math.round(element.bounds.height);
    }

    const findAttr = (key: string) =>
      element.attributes.find(a => a.key === key);

    // Alias chains are a non-breaking sibling map of resolved_tokens — never truncated.
    element.attributes.forEach((attribute) => {
      const chain = attribute.aliasChain;
      if (!chain || chain.length < 2) return;
      const root = chain[0];
      if (!root || tokenAliases.has(root)) return;
      tokenAliases.set(root, chain.slice(1));
    });

    // White fills on instances are reported. The old skipWhiteFill heuristic dropped
    // them on any instance carrying text, which erased genuine white cards and buttons
    // sitting on a dark surface — a guess that lost real design data more often than
    // it suppressed a wrapper's artboard background.
    const fill = findAttr("Fill") ?? findAttr("Text fill");
    if (fill) {
      record.fill = fill.rawValue ?? fill.value;
      if (fill.format !== "HARDCODED") {
        record.fill_ref = deps.truncateText(
          fill.value,
          fill.format === "VARIABLE" ? LIMITS.TRUNC_VARIABLE_PATH : LIMITS.TRUNC_FILL_REF
        );
        record.fill_ref_type = fill.format === "STYLE" ? "color_style"
          : fill.format === "VARIABLE" ? "variable"
          : fill.format === "TOKEN" ? "token"
          : fill.format;
        if (fill.rawValue) resolvedTokens.set(fill.value, String(fill.rawValue));
      }
      if (fill.fillType && fill.fillType !== "SOLID") {
        record.fill_type = fill.fillType;
      }
      if (fill.gradient) {
        if (!record.fill_type) record.fill_type = "GRADIENT_LINEAR";
        record.gradient = {
          angle: Math.round(fill.gradient.angle),
          stops: fill.gradient.stops.map(stop => ({ pos: stop.pos, color: stop.color }))
        };
      }
      if (fill.imageHash) {
        record.fill_type = "IMAGE";
        record.image_hash = fill.imageHash;
        if (fill.scaleMode) record.scale_mode = fill.scaleMode;
      }
      if (fill.fillSegments && fill.fillSegments.length > 0) {
        record.fill_segments = fill.fillSegments.map(seg => ({
          text: deps.truncateText(seg.text, LIMITS.TRUNC_FILL_SEGMENT_TEXT),
          fill: seg.fill
        }));
      }
    }
    const fontSize = findAttr("Font size");
    if (fontSize) {
      record.font_size = fontSize.rawValue ?? fontSize.value;
    }
    const font = findAttr("Font");
    if (font) {
      record.font = deps.truncateText(font.value, LIMITS.TRUNC_FONT);
    }
    const lineHeight = findAttr("Line height");
    if (lineHeight && lineHeight.value !== "Auto") {
      record.line_height = lineHeight.rawValue ?? lineHeight.value;
    }
    const textAlign = findAttr("Text align");
    if (textAlign) record.text_align = textAlign.value;
    const letterSpacing = findAttr("Letter spacing");
    if (letterSpacing) {
      const letterSpacingValue = letterSpacing.rawValue ?? letterSpacing.value;
      if (!isZeroValue(letterSpacingValue)) record.letter_spacing = letterSpacingValue;
    }
    const textCase = findAttr("Text case");
    if (textCase && normalizeEnum(textCase.rawValue ?? textCase.value) !== "ORIGINAL") {
      record.text_case = textCase.value;
    }
    const textDecoration = findAttr("Text decoration");
    if (textDecoration && normalizeEnum(textDecoration.rawValue ?? textDecoration.value) !== "NONE") {
      record.text_decoration = textDecoration.value;
    }
    const paragraphSpacing = findAttr("Paragraph spacing");
    if (paragraphSpacing) {
      const paragraphSpacingValue = paragraphSpacing.rawValue ?? paragraphSpacing.value;
      if (!isZeroValue(paragraphSpacingValue)) record.paragraph_spacing = paragraphSpacingValue;
    }
    const maxLines = findAttr("Max lines");
    if (maxLines) record.max_lines = maxLines.rawValue ?? maxLines.value;
    const textAutoResize = findAttr("Text auto resize");
    if (textAutoResize) record.text_autoresize = textAutoResize.value;
    const radius = findAttr("Corner radius");
    if (radius && radius.rawValue !== 0) {
      record.radius = radius.rawValue ?? radius.value;
    }
    const padding = findAttr("Padding");
    if (padding && padding.value !== "0 0 0 0") {
      const paddingVal = simplifyPadding(String(padding.rawValue ?? padding.value));
      if (paddingVal !== 0 && paddingVal !== "0") {
        record.padding = paddingVal;
      }
    }
    const gap = findAttr("Item spacing");
    if (gap && gap.rawValue !== 0) {
      record.gap = gap.rawValue ?? gap.value;
    }
    const stroke = findAttr("Stroke");
    if (stroke) {
      record.stroke = stroke.rawValue ?? stroke.value;
      if (stroke.format !== "HARDCODED") {
        record.stroke_ref = deps.truncateText(
          stroke.value,
          stroke.format === "VARIABLE" ? LIMITS.TRUNC_VARIABLE_PATH : LIMITS.TRUNC_STROKE_REF
        );
        if (stroke.rawValue) resolvedTokens.set(stroke.value, String(stroke.rawValue));
      }
      // Mirror the fill branch: a gradient stroke must be machine-readable, not only a CSS string.
      if (stroke.fillType && stroke.fillType !== "SOLID") {
        record.stroke_type = stroke.fillType;
      }
      if (stroke.gradient) {
        if (!record.stroke_type) record.stroke_type = "GRADIENT_LINEAR";
        record.stroke_gradient = {
          angle: Math.round(stroke.gradient.angle),
          stops: stroke.gradient.stops.map(stop => ({ pos: stop.pos, color: stop.color }))
        };
      }
    }
    // Always emit the width alongside the colour — without it agents default every border to 1px.
    const strokeWidth = findAttr("Stroke width");
    if (strokeWidth && record.stroke) {
      record.stroke_width = strokeWidth.rawValue ?? strokeWidth.value;
    }
    const strokeAlign = findAttr("Stroke align");
    if (strokeAlign && record.stroke) record.stroke_align = strokeAlign.value;
    // Guarded like stroke_width and stroke_align above: sides without a colour describe a
    // border the design does not draw.
    const strokeSides = findAttr("Stroke sides");
    if (strokeSides && record.stroke) record.stroke_sides = strokeSides.value;
    const dash = findAttr("Dash pattern");
    if (dash) {
      const dashValue = dash.rawValue ?? dash.value;
      const dashKind = normalizeEnum(dashValue);
      if (dashKind !== "SOLID" && dashKind !== "NONE" && dashKind !== "") {
        record.dash = dashValue;
      }
    }
    const shadow = findAttr("Shadow");
    if (shadow) record.shadow = shadow.value;
    const innerShadow = findAttr("Inner shadow");
    if (innerShadow) record.inner_shadow = innerShadow.value;
    const blur = findAttr("Blur");
    if (blur) record.blur = blur.value;
    const backdropBlur = findAttr("Backdrop blur");
    if (backdropBlur) record.backdrop_blur = backdropBlur.value;
    const position = findAttr("Position");
    if (position) {
      record.position = position.value;
      if (element.bounds) {
        record.x = Math.round(element.bounds.x);
        record.y = Math.round(element.bounds.y);
      }
    }
    const constraints = findAttr("Constraints");
    if (constraints) record.constraints = constraints.value;
    const textStyle = findAttr("Text style");
    if (textStyle) {
      record.text_style = deps.truncateText(textStyle.value, LIMITS.TRUNC_TEXT_STYLE);
      if (textStyle.format !== "HARDCODED" && textStyle.rawValue) {
        resolvedTokens.set(textStyle.value, String(textStyle.rawValue));
      }
    }
    const opacity = findAttr("Opacity");
    if (opacity && opacity.rawValue !== 1 && opacity.rawValue !== "100%") {
      record.opacity = opacity.rawValue ?? opacity.value;
    }
    const rotation = findAttr("Rotation");
    if (rotation) {
      const rotationValue = rotation.rawValue ?? rotation.value;
      if (!isZeroValue(rotationValue)) record.rotation = rotationValue;
    }
    const blendMode = findAttr("Blend mode");
    if (blendMode) {
      const blendModeKind = normalizeEnum(blendMode.rawValue ?? blendMode.value);
      if (blendModeKind !== "NORMAL" && blendModeKind !== "PASS_THROUGH") {
        record.blend_mode = blendMode.value;
      }
    }
    const mask = findAttr("Mask");
    if (mask && normalizeEnum(mask.rawValue ?? mask.value) !== "FALSE") {
      record.is_mask = true;
    }
    const minWidth = findAttr("Min width");
    if (minWidth) record.min_w = minWidth.rawValue ?? minWidth.value;
    const maxWidth = findAttr("Max width");
    if (maxWidth) record.max_w = maxWidth.rawValue ?? maxWidth.value;
    const minHeight = findAttr("Min height");
    if (minHeight) record.min_h = minHeight.rawValue ?? minHeight.value;
    const maxHeight = findAttr("Max height");
    if (maxHeight) record.max_h = maxHeight.rawValue ?? maxHeight.value;

    if (element.layoutDirection) {
      record.direction = element.layoutDirection === "HORIZONTAL" ? "row" : "column";
    }
    if (element.layoutJustify) record.justify = mapFigmaAlign(element.layoutJustify);
    if (element.layoutAlignItems) record.align = mapFigmaAlign(element.layoutAlignItems);
    if (element.layoutWSizing) record.w_sizing = mapFigmaSizing(element.layoutWSizing);
    if (element.layoutHSizing) record.h_sizing = mapFigmaSizing(element.layoutHSizing);
    if (element.layoutGrow) record.grow = element.layoutGrow;
    if (element.layoutWrap === "WRAP") record.wrap = true;
    if (element.layoutClips) record.clips = true;
    if (element.layoutInferred) record.inferred = true;
    // Only present when the PARENT's layout was inferred. direction/justify/gap are a guess
    // there, so these offsets are the only reliable placement the pack can offer.
    if (element.parentOffset) {
      record.parent_x = element.parentOffset.x;
      record.parent_y = element.parentOffset.y;
    }

    // v14: omit CSS flexbox defaults (documented in defaults_omitted)
    if (isV14) {
      if (record.justify === "flex-start") delete record.justify;
      if (record.align === "flex-start") delete record.align;
      if (record.direction === "row") delete record.direction;
    }

    return record;
  }

  // Build index of anatomy elements by nodeId (for template_attributes lookup)
  const anatomyByNodeId = new Map<string, AnatomyElement>();
  dataModel.anatomy.forEach(el => {
    if (el.nodeId) anatomyByNodeId.set(el.nodeId, el);
  });

  const allAnatomyRecords = dataModel.anatomy.slice(0, maxAnatomy).map((element) => {
    const record = buildAnatomyRecord(element);

    if (includeAttributes) {
      record.attributes = element.attributes.map((attribute) => {
        const attr: any = {
          key: attribute.key ?? attribute.propertyName,
          // A VARIABLE attribute value IS a variable path — never cut it to TRUNC_ATTRIBUTE_VALUE.
          value: deps.truncateText(
            attribute.value,
            attribute.format === "VARIABLE" ? LIMITS.TRUNC_VARIABLE_PATH : LIMITS.TRUNC_ATTRIBUTE_VALUE
          ),
          format: attribute.format
        };
        if (attribute.systemId) attr.system_id = attribute.systemId;
        return attr;
      });
    }
    return record;
  });

  const propertyRecords: Array<{
    property: string;
    property_type: string;
    default_value: string;
    option: string;
    changed_elements: number;
    difference_count: number;
    differences: string[];
    node_ids: string[];
  }> = [];
  dataModel.properties.forEach((spec) => {
    const defaultValue = String(spec.default);
    const candidateOptions = compact
      ? spec.options.filter((option) => option.name !== defaultValue).slice(0, 2)
      : spec.options;
    const options = candidateOptions.length > 0 ? candidateOptions : spec.options.slice(0, 1);
    options.forEach((option) => {
      propertyRecords.push({
        property: spec.name,
        property_type: spec.type,
        default_value: defaultValue,
        option: option.name,
        changed_elements: option.elements.length,
        difference_count: option.differences.length,
        differences: option.differences
          .map((line) => deps.truncateText(line, LIMITS.TRUNC_PROPERTY_DIFF)),
        node_ids: option.elements
          .map((element) => element.nodeId ?? "")
          .filter(Boolean)
      });
    });
  });
  const limitedPropertyRecords = propertyRecords.slice(0, maxProperties);

  // Exclude repeat node_ids (templates + items) from anatomy — they're in repeats chunks
  const anatomyRecords = allAnatomyRecords.filter(r => !repeatNodeIds.has(r.node_id));

  const anatomyChunks = chunkArray(anatomyRecords, getLimit("ANATOMY_CHUNK_SIZE")).map((items, index) => {
    const chunk: any = {
      chunk_id: `anatomy_${index + 1}`,
      kind: "anatomy",
      item_count: items.length,
    };
    // O2: omit path_range in v12
    if (!isV12) {
      chunk.path_range = items.length > 0 ? [items[0].path_key, items[items.length - 1].path_key] : [];
    }
    if (!compact) {
      chunk.node_ids = items.map((item: any) => item.node_id).filter(Boolean);
    }
    chunk.items = items;
    return chunk;
  });

  const propertyChunks = chunkArray(limitedPropertyRecords, getLimit("PROPERTY_CHUNK_SIZE")).map((items, index) => ({
    chunk_id: `properties_${index + 1}`,
    kind: "properties",
    item_count: items.length,
    node_ids: Array.from(new Set(items.reduce<string[]>((all, item) => all.concat(item.node_ids), []))),
    items
  }));

  // Build repeats chunks from instance templates
  const repeatsChunks = (dataModel.instanceTemplates ?? []).map((tpl, index) => {
    // O3: sort varying_keys deterministically in v12 (needed for indexed diffs)
    const varyingKeys = isV12 ? [...tpl.varyingKeys].sort() : tpl.varyingKeys;

    const chunk: any = {
      chunk_id: `repeats_${index + 1}`,
      kind: "repeats",
      template_node_id: tpl.templateNodeId,
    };
    // O2: omit template_path_key in v12 (kept when variant_diffs reference path keys)
    if (!isV12 || keepPathKeys) {
      chunk.template_path_key = tpl.templatePathKey;
    }
    chunk.instance_of = tpl.instanceOf;
    chunk.repeat_count = tpl.repeatCount;

    // Embed template node's own attributes (since it's excluded from anatomy)
    const tplElement = anatomyByNodeId.get(tpl.templateNodeId);
    if (tplElement) {
      const tplAttrs = buildAnatomyRecord(tplElement, { skipIdentity: true });
      if (Object.keys(tplAttrs).length > 0) {
        chunk.template_attributes = tplAttrs;
      }
    }

    // O3: width dedup for all versions, indexed encoding in v12+.
    // Width dedup can drop the last diff that referenced a key, so the surviving key list has
    // to be settled BEFORE the indexed encoding. Encoding against the full list and filtering
    // afterwards shifts every index past the removed key, and the diff decodes to the wrong
    // property — or to nothing, when the index runs off the end of the shortened list.
    const dedupedByRow = tpl.repeats.map(row => deduplicateWidthDiffs(row.diffs));
    const usedKeys = new Set<string>();
    dedupedByRow.forEach(diffs => Object.keys(diffs).forEach(k => usedKeys.add(k)));
    const activeKeys = varyingKeys.filter(k => usedKeys.has(k));
    if (activeKeys.length > 0) chunk.varying_keys = activeKeys;

    chunk.items = tpl.repeats.map((row, rowIndex) => {
      const item: any = {
        node_id: row.nodeId,
      };
      // O2: omit path_key in v12 (kept when variant_diffs reference path keys)
      if (!isV12 || keepPathKeys) {
        item.path_key = row.pathKey;
      }
      const dedupedDiffs = dedupedByRow[rowIndex]!;
      const encoded = isV12 ? encodeDiffs(dedupedDiffs, activeKeys) : dedupedDiffs;
      const hasDiffs = Array.isArray(encoded)
        ? encoded.length > 0
        : Object.keys(encoded).length > 0;
      // An instance that matches its template exactly has no diffs. Emit the item anyway:
      // anatomy already dropped these node ids, so this chunk is the only record that the
      // nodes exist at all. Dropping it deleted every identical repeat from the pack.
      if (hasDiffs) item.diffs = encoded;
      if (!compact && row.childrenText?.length) {
        item.children_text = row.childrenText.map(t =>
          deps.truncateText(t, LIMITS.TRUNC_REPEAT_CHILDREN_TEXT)
        );
      }
      return item;
    });
    return chunk;
  });

  // v13: Build component_definition chunk when available
  const componentDefChunks: any[] = [];
  if (isV13 && dataModel.componentDefinition) {
    const def = dataModel.componentDefinition;
    const defChunk: any = {
      chunk_id: "component_def_1",
      kind: "component_definition",
      component_set: def.componentSetName,
      base_node_id: def.baseNodeId,
      ...(def.nodeIds && Object.keys(def.nodeIds).length > 0 ? { node_ids: def.nodeIds } : {}),
      properties: def.properties.map(p => {
        const prop: any = { name: p.name, type: p.type, default: p.default };
        if (p.options && p.options.length > 0) prop.options = p.options;
        return prop;
      }),
      variant_diffs: def.variantDiffs.map(vd => {
        const entry: any = {
          config: vd.config,
          changes: vd.changes
        };
        if (vd.added && vd.added.length > 0) entry.added = vd.added;
        if (vd.removed && vd.removed.length > 0) entry.removed = vd.removed;
        return entry;
      })
    };
    componentDefChunks.push(defChunk);
  }

  // v13: skip full property chunks when component_definition covers them
  const effectivePropertyChunks = (isV13 && dataModel.componentDefinition) ? [] : propertyChunks;

  const chunks = [...anatomyChunks, ...effectivePropertyChunks, ...componentDefChunks, ...repeatsChunks];

  // text_index: omitted in compact mode (text is in children_text on anatomy/repeat items)
  const textIndex = compact ? undefined : dataModel.anatomy
        .filter(el => (el.textContent || el.childrenText?.length) && !repeatNodeIds.has(el.nodeId ?? ""))
        .map(el => {
          const entry: any = { id: el.nodeId, path: el.pathKey };
          if (el.textContent) entry.text = deps.truncateText(el.textContent, LIMITS.TRUNC_TEXT_INDEX_TEXT);
          if (el.childrenText?.length) {
            entry.children_text = el.childrenText
              .map(t => deps.truncateText(t, LIMITS.TRUNC_TEXT_INDEX_CHILDREN));
          }
          return entry;
        });

  const mcpPlaybook = {
    tools: compact
      ? ["get_metadata", "get_design_context", "get_screenshot", "get_variable_defs"]
      : MCP_AGENT_TOOLS,
    parse_root: "chunks",
    // O2: drop path_key from preferred_keys in v12
    preferred_keys: isV12
      ? ["node_id", "kind", "items"]
      : ["node_id", "path_key", "kind", "items"]
  };

  const schemaString = isV14
    ? "specs-plugin.agent_pack.v14.yaml.compact"
    : isV13
    ? "specs-plugin.agent_pack.v13.yaml.compact"
    : isV12
      ? "specs-plugin.agent_pack.v12.yaml.compact"
      : compact
        ? "specs-plugin.agent_pack.v11.yaml.compact"
        : "specs-plugin.agent_pack.v11.yaml";

  return {
    schema: schemaString,
    generated_at: new Date().toISOString(),
    selection: {
      node_id: target.id,
      name: target.name,
      type: target.type,
      ...("clipsContent" in target && (target as any).clipsContent ? { clips_content: true } : {})
    },
    ...(isV14 ? {
      defaults_omitted: {
        justify: "flex-start",
        align: "flex-start",
        direction: "row"
      }
    } : {}),
    summary: {
      anatomy_nodes_total: dataModel.anatomy.length,
      property_groups_total: dataModel.properties.length,
      property_variants_total: limitedPropertyRecords.length,
      variable_refs_total: inventory.getVariableIds().length,
      instance_templates: (dataModel.instanceTemplates ?? []).length,
      deduplicated_instances: (dataModel.instanceTemplates ?? []).reduce((sum, t) => sum + t.repeatCount, 0),
      component_definition: dataModel.componentDefinition ? true : undefined,
      variant_diffs_total: dataModel.componentDefinition?.variantDiffs.length ?? undefined,
      chunks_total: chunks.length,
      runtime_budget: (() => {
        const active = getActiveLimits();
        return {
          max_anatomy_elements: active.MAX_ANATOMY_ELEMENTS,
          max_anatomy_records: active.MAX_ANATOMY_RECORDS,
          max_property_records: active.MAX_PROPERTY_RECORDS,
          max_layout_specs: active.MAX_LAYOUT_SPECS,
          max_variant_options: active.MAX_VARIANT_OPTIONS,
          max_anatomy_variants: active.MAX_ANATOMY_VARIANTS,
          max_canvas_text_chunks: active.CANVAS_MAX_TEXT_CHUNKS
        };
      })(),
      truncated: {
        anatomy: dataModel.anatomy.length > maxAnatomy,
        // Counted off the records actually emitted, not off the pre-dedup element list:
        // reporting the input count read as full coverage while the deduplicated nodes had
        // been moved into repeats chunks. included + deduplicated + dropped == total.
        anatomy_included: anatomyRecords.length,
        anatomy_deduplicated: allAnatomyRecords.length - anatomyRecords.length,
        anatomy_dropped: Math.max(0, dataModel.anatomy.length - maxAnatomy),
        properties: propertyRecords.length > maxProperties,
        properties_included: Math.min(propertyRecords.length, maxProperties),
        properties_dropped: Math.max(0, propertyRecords.length - maxProperties),
      }
    },
    mcp_playbook: mcpPlaybook,
    resolved_tokens: resolvedTokens.size > 0
      ? (() => { const obj: Record<string, string> = {}; resolvedTokens.forEach((v, k) => { obj[k] = v; }); return obj; })()
      : undefined,
    token_aliases: tokenAliases.size > 0
      ? (() => { const obj: Record<string, string[]> = {}; tokenAliases.forEach((v, k) => { obj[k] = v; }); return obj; })()
      : undefined,
    text_index: textIndex,
    chunks
  };
}

export function stripNulls(obj: any): any {
  if (Array.isArray(obj)) return obj.map(stripNulls);
  if (obj && typeof obj === "object") {
    const out: any = {};
    for (const [k, v] of Object.entries(obj)) {
      if (v !== null && v !== undefined) out[k] = stripNulls(v);
    }
    return out;
  }
  return obj;
}

/** Every character that is illegal raw in a YAML scalar: C0 and C1 controls (so \n, \r, \t,
 *  the U+000B Word "Shift+Enter" break and U+0085 NEL) plus U+2028/U+2029, which Figma and
 *  InDesign use for in-paragraph line breaks. One of these unquoted breaks the whole document. */
const YAML_UNPRINTABLE = /[\u0000-\u001F\u007F-\u009F\u2028\u2029]/;
/** YAML 1.1 booleans and nulls. "No", "ON" and "~" are retyped by real parsers. */
const YAML_BOOL_NULL = /^(?:y|n|yes|no|true|false|on|off|null|~)$/i;
/** YAML core int/float grammar, plus the 0x/0o/0b and .inf/.nan forms. */
const YAML_NUMBER_LIKE =
  /^(?:[-+]?(?:\d+|\d*\.\d*)(?:[eE][-+]?\d+)?|[-+]?0[xX][\dA-Fa-f]+|[-+]?0[oO][0-7]+|[-+]?0[bB][01]+|[-+]?\.(?:inf|Inf|INF)|\.(?:nan|NaN|NAN))$/;

export function yamlNeedsQuoting(value: string): boolean {
  if (value.length === 0) return true;
  if (value !== value.trim()) return true;
  if (YAML_UNPRINTABLE.test(value)) return true;
  if (YAML_NUMBER_LIKE.test(value)) return true;
  if (YAML_BOOL_NULL.test(value)) return true;
  if (/[:#{}\[\],]/.test(value)) return true;
  // YAML indicator characters are only special in first position.
  if (/^[-?&*!|>%@`'"]/.test(value)) return true;
  return false;
}

/** Double-quoted YAML scalar. Escapes losslessly so multi-line strings stay on one line. */
function yamlQuote(str: string): string {
  const escaped = str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t")
    // Catch-all: anything else unprintable is illegal even inside a double-quoted scalar.
    .replace(new RegExp(YAML_UNPRINTABLE.source, "g"), (char) => {
      const code = char.charCodeAt(0);
      return code <= 0xff
        ? `\\x${code.toString(16).padStart(2, "0")}`
        : `\\u${code.toString(16).padStart(4, "0")}`;
    });
  return `"${escaped}"`;
}

function yamlScalar(value: unknown): string {
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  const str = String(value);
  return yamlNeedsQuoting(str) ? yamlQuote(str) : str;
}

/** Mapping keys need the same quoting as scalars — a layer named "Icon: left" breaks the document. */
function yamlKey(key: string): string {
  return yamlNeedsQuoting(key) ? yamlQuote(key) : key;
}

export function toYaml(data: unknown, indent = 0): string {
  const pad = " ".repeat(indent);

  if (data === null || data === undefined) return `${pad}null`;
  if (typeof data === "number" || typeof data === "boolean") return `${pad}${data}`;
  if (typeof data === "string") return `${pad}${yamlScalar(data)}`;

  if (Array.isArray(data)) {
    if (data.length === 0) return `${pad}[]`;
    // Short primitive arrays → inline
    const allPrimitive = data.every(
      (item) => typeof item === "string" || typeof item === "number" || typeof item === "boolean"
    );
    if (allPrimitive) {
      const inline = `[${data.map((item) => yamlScalar(item)).join(", ")}]`;
      if (indent + inline.length < 80) return `${pad}${inline}`;
    }
    // Block array
    const lines: string[] = [];
    for (const item of data) {
      if (item && typeof item === "object" && !Array.isArray(item)) {
        const entries = Object.entries(item);
        if (entries.length === 0) {
          lines.push(`${pad}- {}`);
          continue;
        }
        const [firstKey, firstVal] = entries[0]!;
        const firstValStr = firstVal && typeof firstVal === "object"
          ? `\n${toYaml(firstVal, indent + 4)}`
          : ` ${yamlScalar(firstVal)}`;
        lines.push(`${pad}- ${yamlKey(firstKey)}:${firstValStr}`);
        for (let i = 1; i < entries.length; i++) {
          const [key, val] = entries[i]!;
          if (val && typeof val === "object") {
            lines.push(`${pad}  ${yamlKey(key)}:`);
            lines.push(toYaml(val, indent + 4));
          } else {
            lines.push(`${pad}  ${yamlKey(key)}: ${yamlScalar(val)}`);
          }
        }
      } else {
        // Render at the item's own indent, then splice "- " over the first line's padding.
        // Rendering at indent 0 would leave every continuation line of a nested sequence at
        // column 0, which breaks the document.
        const rendered = toYaml(item, indent + 2);
        lines.push(`${pad}- ${rendered.slice(indent + 2)}`);
      }
    }
    return lines.join("\n");
  }

  if (typeof data === "object") {
    const entries = Object.entries(data as Record<string, unknown>);
    if (entries.length === 0) return `${pad}{}`;
    const lines: string[] = [];
    for (const [key, val] of entries) {
      if (val && typeof val === "object") {
        lines.push(`${pad}${yamlKey(key)}:`);
        lines.push(toYaml(val, indent + 2));
      } else {
        lines.push(`${pad}${yamlKey(key)}: ${yamlScalar(val)}`);
      }
    }
    return lines.join("\n");
  }

  return `${pad}${String(data)}`;
}

function toDataSectionPreview(payload: any, agentReadyData: boolean) {
  if (!agentReadyData) {
    return payload;
  }

  const compact = Boolean(payload.compact_mode ?? payload.schema?.includes("compact"));
  const sampleSize = getLimit("SAMPLE_SIZE");
  const chunks = Array.isArray(payload.chunks) ? payload.chunks : [];
  return stripNulls({
    schema: payload.schema,
    generated_at: payload.generated_at,
    selection: payload.selection,
    defaults_omitted: payload.defaults_omitted,
    summary: payload.summary,
    mcp_playbook: payload.mcp_playbook,
    resolved_tokens: payload.resolved_tokens,
    token_aliases: payload.token_aliases,
    text_index: payload.text_index,
    chunks: chunks.map((chunk: any) => {
      const items = Array.isArray(chunk.items) ? chunk.items : [];
      const sampled = items.slice(0, sampleSize);
      const base: any = {
        chunk_id: chunk.chunk_id,
        kind: chunk.kind,
      };
      // Preserve kind-specific fields
      if (chunk.kind === "component_definition") {
        base.component_set = chunk.component_set;
        base.base_node_id = chunk.base_node_id;
        if (chunk.node_ids) base.node_ids = chunk.node_ids;
        base.properties = chunk.properties;
        base.variant_diffs = Array.isArray(chunk.variant_diffs)
          ? chunk.variant_diffs.slice(0, sampleSize)
          : chunk.variant_diffs;
        if (Array.isArray(chunk.variant_diffs) && chunk.variant_diffs.length > sampleSize) {
          base.truncated_variant_diffs = chunk.variant_diffs.length - sampleSize;
        }
        return base;
      }
      if (chunk.kind === "repeats") {
        base.template_node_id = chunk.template_node_id;
        base.template_path_key = chunk.template_path_key;
        base.instance_of = chunk.instance_of;
        base.repeat_count = chunk.repeat_count;
        base.varying_keys = chunk.varying_keys;
      } else {
        base.item_count = chunk.item_count;
        if (chunk.path_range) base.path_range = chunk.path_range;
        if (chunk.node_ids) base.node_ids = chunk.node_ids;
      }
      base.items = sampled;
      if (items.length > sampleSize) base.truncated_items = items.length - sampleSize;
      return base;
    })
  });
}

export function createDataSection(
  dataModel: DataModel,
  includeAttributes: boolean,
  theme: Theme,
  target: SceneNode,
  settings: Settings,
  inventory: Inventory,
  deps: DataSectionDeps
) {
  const section = deps.createSectionFrame(
    settings.agentReadyData ? "Data (YAML)" : "Data (JSON)",
    theme
  );
  const payload = settings.agentReadyData
    ? toAgentReadyDataPayload(dataModel, includeAttributes, target, settings, inventory, deps)
    : toLegacyDataPayload(dataModel, includeAttributes);
  const previewPayload = toDataSectionPreview(payload, settings.agentReadyData);

  section.appendChild(
    deps.createText(
      settings.agentReadyData
        ? settings.aiCompactMode
          ? "AI compact YAML schema with chunk manifest and reduced-token records."
          : "Agent-ready YAML schema with chunk manifest, node IDs, and MCP playbook."
        : "Legacy raw JSON payload.",
      9,
      FONT_REGULAR,
      theme.muted,
      "caption"
    )
  );
  if (settings.agentReadyData) {
    section.appendChild(
      deps.createText(
        settings.aiCompactMode
          ? "Use items[].node_id with MCP tools (get_metadata/get_design_context/get_screenshot) for precise extraction."
          : "Use chunks[].node_ids with MCP tools (get_metadata/get_design_context/get_screenshot) for precise extraction.",
        9,
        FONT_REGULAR,
        theme.muted,
        "caption"
      )
    );
  }

  const serialized = settings.agentReadyData
    ? toYaml(stripNulls(previewPayload))
    : JSON.stringify(previewPayload, null, 2);
  const chunks = splitText(serialized, getLimit("CANVAS_TEXT_CHUNK_CHARS"));
  const textChunks = chunks.slice(0, getLimit("CANVAS_MAX_TEXT_CHUNKS"));
  deps.log("Data section payload", {
    mode: settings.agentReadyData ? "agent-pack-preview" : "legacy",
    chars: serialized.length,
    chunks: chunks.length,
    renderedChunks: textChunks.length
  });
  // Lay out chunk cards in sub-columns (side by side) when multiple chunks exist
  const sectionContentWidth = deps.getSectionContentWidth(settings);
  if (textChunks.length > 1) {
    const columnsRow = figma.createFrame();
    columnsRow.name = "Data Chunks";
    columnsRow.layoutMode = "HORIZONTAL";
    columnsRow.layoutAlign = "STRETCH";
    columnsRow.primaryAxisSizingMode = "FIXED";
    columnsRow.counterAxisSizingMode = "AUTO";
    columnsRow.itemSpacing = 8;
    columnsRow.fills = [];
    columnsRow.resizeWithoutConstraints(sectionContentWidth, 1);

    const chunkColWidth = Math.max(200, Math.floor((sectionContentWidth - 8 * (textChunks.length - 1)) / textChunks.length));

    textChunks.forEach((chunk, index) => {
      const card = deps.createContentCard(theme);
      card.layoutGrow = 1;
      card.resizeWithoutConstraints(chunkColWidth, 1);
      card.appendChild(deps.createText(`Chunk ${index + 1}/${textChunks.length}`, 9, FONT_MEDIUM, theme.text, "label"));
      const chunkNode = deps.createText(chunk, 9, FONT_REGULAR, theme.text, "body");
      deps.fitTextToWidth(chunkNode, chunkColWidth - 24);
      card.appendChild(chunkNode);
      columnsRow.appendChild(card);
    });

    section.appendChild(columnsRow);
  } else {
    textChunks.forEach((chunk) => {
      const card = deps.createContentCard(theme);
      const chunkNode = deps.createText(chunk, 9, FONT_REGULAR, theme.text, "body");
      deps.fitTextToWidth(chunkNode, sectionContentWidth - 24);
      card.appendChild(chunkNode);
      section.appendChild(card);
    });
  }
  if (chunks.length > textChunks.length) {
    section.appendChild(
      deps.createText(
        `Preview truncated in canvas (${chunks.length - textChunks.length} chunks omitted).`,
        9,
        FONT_REGULAR,
        theme.muted,
        "caption"
      )
    );
  }
  return section;
}
