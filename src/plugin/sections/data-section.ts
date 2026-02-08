import { FONT_MEDIUM, FONT_REGULAR } from "../constants";
import type { Inventory } from "../inventory";
import type { DataModel, Settings, SpecTextRole, Theme } from "../types";

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

function chunkArray<T>(items: T[], size: number) {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

function splitText(value: string, maxChars = 8000) {
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
  const maxAnatomy = compact ? 250 : 1500;
  const maxProperties = compact ? 12 : 48;
  const resolvedTokens = new Map<string, string>();

  const anatomyRecords = dataModel.anatomy.slice(0, maxAnatomy).map((element) => {
    const record: any = {
      node_id: element.nodeId ?? "",
      path_key: element.pathKey ?? "",
      name: deps.truncateText(element.name, compact ? 32 : 64),
      type: element.type
    };
    if (element.instanceOf) {
      record.instance_of = deps.truncateText(element.instanceOf, compact ? 32 : 64);
    }

    // Promoted top-level fields for AI code generation
    if (element.textContent) {
      record.text = deps.truncateText(element.textContent, compact ? 80 : 200);
    }
    if (element.childrenText?.length) {
      record.children_text = element.childrenText.map(t =>
        deps.truncateText(t, compact ? 60 : 120)
      ).slice(0, compact ? 6 : 8);
    }
    if (element.bounds) {
      record.w = Math.round(element.bounds.width);
      record.h = Math.round(element.bounds.height);
    }

    const findAttr = (key: string) =>
      element.attributes.find(a => a.key === key);

    const fill = findAttr("Fill") ?? findAttr("Text fill");
    if (fill) {
      record.fill = fill.rawValue ?? fill.value;
      if (fill.format !== "HARDCODED") {
        record.fill_ref = deps.truncateText(fill.value, compact ? 50 : 80);
        if (fill.rawValue) resolvedTokens.set(fill.value, String(fill.rawValue));
      }
      if (fill.imageHash) {
        record.fill_type = "IMAGE";
        record.image_hash = fill.imageHash;
      }
      if (fill.fillSegments && fill.fillSegments.length > 0) {
        record.fill_segments = fill.fillSegments.map(seg => ({
          text: deps.truncateText(seg.text, compact ? 40 : 80),
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
      record.font = deps.truncateText(font.value, compact ? 40 : 64);
    }
    const lineHeight = findAttr("Line height");
    if (lineHeight && lineHeight.value !== "Auto") {
      record.line_height = lineHeight.rawValue ?? lineHeight.value;
    }
    const radius = findAttr("Corner radius");
    if (radius && radius.rawValue !== 0) {
      record.radius = radius.rawValue ?? radius.value;
    }
    const padding = findAttr("Padding");
    if (padding && padding.value !== "0 0 0 0") {
      record.padding = padding.rawValue ?? padding.value;
    }
    const gap = findAttr("Item spacing");
    if (gap && gap.rawValue !== 0) {
      record.gap = gap.rawValue ?? gap.value;
    }
    const stroke = findAttr("Stroke");
    if (stroke) {
      record.stroke = stroke.rawValue ?? stroke.value;
      if (stroke.format !== "HARDCODED") {
        record.stroke_ref = deps.truncateText(stroke.value, compact ? 50 : 80);
        if (stroke.rawValue) resolvedTokens.set(stroke.value, String(stroke.rawValue));
      }
    }
    const strokeAlign = findAttr("Stroke align");
    if (strokeAlign && record.stroke) record.stroke_align = strokeAlign.value;
    const strokeSides = findAttr("Stroke sides");
    if (strokeSides) record.stroke_sides = strokeSides.value;
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
      record.text_style = deps.truncateText(textStyle.value, compact ? 40 : 64);
      if (textStyle.format !== "HARDCODED" && textStyle.rawValue) {
        resolvedTokens.set(textStyle.value, String(textStyle.rawValue));
      }
    }
    const opacity = findAttr("Opacity");
    if (opacity && opacity.rawValue !== 1 && opacity.rawValue !== "100%") {
      record.opacity = opacity.rawValue ?? opacity.value;
    }

    // Layout fields (inline on anatomy items)
    if (element.layoutDirection) {
      record.direction = element.layoutDirection === "HORIZONTAL" ? "row" : "column";
    }
    if (element.layoutAlign) record.align = element.layoutAlign;
    if (element.layoutSizing) record.sizing = element.layoutSizing;
    if (element.layoutClips) record.clips = true;
    if (element.layoutInferred) record.inferred = true;

    if (includeAttributes) {
      record.attributes = element.attributes.slice(0, compact ? 5 : 8).map((attribute) => {
        const attr: any = {
          key: attribute.key ?? attribute.propertyName,
          value: deps.truncateText(attribute.value, compact ? 50 : 80),
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
          .slice(0, compact ? 1 : 6)
          .map((line) => deps.truncateText(line, compact ? 64 : 160)),
        node_ids: option.elements
          .map((element) => element.nodeId ?? "")
          .filter(Boolean)
          .slice(0, compact ? 3 : 12)
      });
    });
  });
  const limitedPropertyRecords = propertyRecords.slice(0, maxProperties);

  const anatomyChunks = chunkArray(anatomyRecords, compact ? 12 : 16).map((items, index) => ({
    chunk_id: `anatomy_${index + 1}`,
    kind: "anatomy",
    item_count: items.length,
    path_range: items.length > 0 ? [items[0].path_key, items[items.length - 1].path_key] : [],
    node_ids: items.map((item) => item.node_id).filter(Boolean),
    items
  }));

  const propertyChunks = chunkArray(limitedPropertyRecords, compact ? 6 : 12).map((items, index) => ({
    chunk_id: `properties_${index + 1}`,
    kind: "properties",
    item_count: items.length,
    node_ids: Array.from(new Set(items.reduce<string[]>((all, item) => all.concat(item.node_ids), []))),
    items
  }));

  // Build repeats chunks from instance templates
  const repeatsChunks = (dataModel.instanceTemplates ?? []).map((tpl, index) => ({
    chunk_id: `repeats_${index + 1}`,
    kind: "repeats",
    template_node_id: tpl.templateNodeId,
    template_path_key: tpl.templatePathKey,
    instance_of: tpl.instanceOf,
    repeat_count: tpl.repeatCount,
    varying_keys: tpl.varyingKeys,
    items: tpl.repeats.map(row => {
      const item: any = {
        node_id: row.nodeId,
        path_key: row.pathKey,
        diffs: row.diffs
      };
      if (!compact && row.childrenText?.length) {
        item.children_text = row.childrenText.map(t =>
          deps.truncateText(t, 120)
        ).slice(0, 8);
      }
      return item;
    })
  }));

  const chunks = [...anatomyChunks, ...propertyChunks, ...repeatsChunks];

  // Build set of repeat node IDs to exclude from text_index
  const repeatNodeIds = new Set<string>();
  (dataModel.instanceTemplates ?? []).forEach(tpl => {
    tpl.repeats.forEach(r => repeatNodeIds.add(r.nodeId));
  });

  const textIndex = compact
    ? undefined  // compact mode: text already in anatomy records
    : dataModel.anatomy
        .filter(el => (el.textContent || el.childrenText?.length) && !repeatNodeIds.has(el.nodeId ?? ""))
        .slice(0, 500)
        .map(el => {
          const entry: any = { id: el.nodeId, path: el.pathKey };
          if (el.textContent) entry.text = deps.truncateText(el.textContent, 200);
          if (el.childrenText?.length) {
            entry.children_text = el.childrenText
              .map(t => deps.truncateText(t, 120))
              .slice(0, 8);
          }
          return entry;
        });

  const mcpPlaybook = {
    tools: compact
      ? ["get_metadata", "get_design_context", "get_screenshot", "get_variable_defs"]
      : MCP_AGENT_TOOLS,
    parse_root: "chunks",
    preferred_keys: ["node_id", "path_key", "kind", "items"]
  };

  return {
    schema: compact ? "specs-plugin.agent_pack.v10.yaml.compact" : "specs-plugin.agent_pack.v10.yaml",
    generated_at: new Date().toISOString(),
    selection: {
      node_id: target.id,
      name: target.name,
      type: target.type,
      ...("clipsContent" in target && (target as any).clipsContent ? { clips_content: true } : {})
    },
    summary: {
      anatomy_nodes_total: dataModel.anatomy.length,
      property_groups_total: dataModel.properties.length,
      property_variants_total: limitedPropertyRecords.length,
      variable_refs_total: inventory.getVariableIds().length,
      instance_templates: (dataModel.instanceTemplates ?? []).length,
      deduplicated_instances: (dataModel.instanceTemplates ?? []).reduce((sum, t) => sum + t.repeatCount, 0),
      chunks_total: chunks.length,
      truncated: {
        anatomy: dataModel.anatomy.length > maxAnatomy,
        anatomy_included: Math.min(dataModel.anatomy.length, maxAnatomy),
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

export function yamlNeedsQuoting(value: string): boolean {
  if (value.length === 0) return true;
  if (value !== value.trim()) return true;
  if (/^[\d.]+$/.test(value) || /^0x[\da-fA-F]+$/.test(value)) return true;
  if (value === "true" || value === "false" || value === "null" || value === "yes" || value === "no") return true;
  if (/[:#{\[]/.test(value)) return true;
  return false;
}

function yamlScalar(value: unknown): string {
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  const str = String(value);
  return yamlNeedsQuoting(str) ? `"${str.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : str;
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
        const [firstKey, firstVal] = entries[0];
        const firstValStr = firstVal && typeof firstVal === "object"
          ? `\n${toYaml(firstVal, indent + 4)}`
          : ` ${yamlScalar(firstVal)}`;
        lines.push(`${pad}- ${firstKey}:${firstValStr}`);
        for (let i = 1; i < entries.length; i++) {
          const [key, val] = entries[i];
          if (val && typeof val === "object") {
            lines.push(`${pad}  ${key}:`);
            lines.push(toYaml(val, indent + 4));
          } else {
            lines.push(`${pad}  ${key}: ${yamlScalar(val)}`);
          }
        }
      } else {
        lines.push(`${pad}- ${toYaml(item, 0).trim()}`);
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
        lines.push(`${pad}${key}:`);
        lines.push(toYaml(val, indent + 2));
      } else {
        lines.push(`${pad}${key}: ${yamlScalar(val)}`);
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
  const sampleSize = compact ? 6 : 8;
  const chunks = Array.isArray(payload.chunks) ? payload.chunks : [];
  return stripNulls({
    schema: payload.schema,
    generated_at: payload.generated_at,
    selection: payload.selection,
    summary: payload.summary,
    mcp_playbook: payload.mcp_playbook,
    resolved_tokens: payload.resolved_tokens,
    text_index: payload.text_index,
    chunks: chunks.map((chunk: any) => {
      const items = Array.isArray(chunk.items) ? chunk.items : [];
      const sampled = items.slice(0, sampleSize);
      const base: any = {
        chunk_id: chunk.chunk_id,
        kind: chunk.kind,
      };
      // Preserve kind-specific fields
      if (chunk.kind === "repeats") {
        base.template_node_id = chunk.template_node_id;
        base.template_path_key = chunk.template_path_key;
        base.instance_of = chunk.instance_of;
        base.repeat_count = chunk.repeat_count;
        base.varying_keys = chunk.varying_keys;
      } else {
        base.item_count = chunk.item_count;
        if (chunk.path_range) base.path_range = chunk.path_range;
        base.node_ids = Array.isArray(chunk.node_ids) ? chunk.node_ids : [];
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
        "Use chunk_manifest[].node_ids with MCP tools (get_metadata/get_design_context/get_screenshot) for precise extraction.",
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
  const chunks = splitText(serialized, 4000);
  const textChunks = chunks.slice(0, 3);
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
