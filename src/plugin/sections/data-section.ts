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
    })),
    layout: dataModel.layout.map((spec) => ({
      nodeId: spec.nodeId,
      name: spec.name,
      type: spec.type,
      pathKey: spec.pathKey,
      layoutMode: spec.layoutMode,
      itemSpacing: spec.itemSpacing,
      padding: spec.padding,
      primaryAxisAlignItems: spec.primaryAxisAlignItems,
      counterAxisAlignItems: spec.counterAxisAlignItems,
      primaryAxisSizingMode: spec.primaryAxisSizingMode,
      counterAxisSizingMode: spec.counterAxisSizingMode
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
  const maxAnatomy = compact ? 20 : 64;
  const maxLayout = compact ? 16 : 48;
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
      ).slice(0, compact ? 4 : 8);
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
    }
    const fontSize = findAttr("Font size");
    if (fontSize) {
      record.font_size = fontSize.rawValue ?? fontSize.value;
    }
    const font = findAttr("Font");
    if (font) {
      record.font = deps.truncateText(font.value, compact ? 40 : 64);
    }
    const radius = findAttr("Corner radius");
    if (radius && radius.rawValue !== 0) {
      record.radius = radius.rawValue ?? radius.value;
    }
    const padding = findAttr("Padding");
    if (padding) {
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
    const textStyle = findAttr("Text style");
    if (textStyle) {
      record.text_style = deps.truncateText(textStyle.value, compact ? 40 : 64);
      if (textStyle.format !== "HARDCODED" && textStyle.rawValue) {
        resolvedTokens.set(textStyle.value, String(textStyle.rawValue));
      }
    }

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

  const layoutRecords = dataModel.layout.slice(0, maxLayout).map((spec) => {
    const pad = spec.padding;
    const hasNonZeroPad = pad && (pad.top || pad.right || pad.bottom || pad.left);
    const record: any = {
      node_id: spec.nodeId,
      path_key: spec.pathKey ?? "",
      name: deps.truncateText(spec.name, compact ? 32 : 64),
      type: spec.type,
      direction: spec.layoutMode === "HORIZONTAL" ? "row" : "column",
      gap: spec.itemSpacing,
      align: `${spec.primaryAxisAlignItems} / ${spec.counterAxisAlignItems}`,
      sizing: `${spec.primaryAxisSizingMode} / ${spec.counterAxisSizingMode}`
    };
    if (hasNonZeroPad) record.padding = pad;
    if (spec.clipsContent) record.clips = true;
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

  const anatomyChunks = chunkArray(anatomyRecords, compact ? 10 : 16).map((items, index) => ({
    chunk_id: `anatomy_${index + 1}`,
    kind: "anatomy",
    item_count: items.length,
    node_ids: items.map((item) => item.node_id).filter(Boolean),
    items
  }));

  const layoutChunks = chunkArray(layoutRecords, compact ? 8 : 16).map((items, index) => ({
    chunk_id: `layout_${index + 1}`,
    kind: "layout",
    item_count: items.length,
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

  const chunks = [...anatomyChunks, ...layoutChunks, ...propertyChunks];

  const textIndex = dataModel.anatomy
    .filter(el => el.textContent || el.childrenText?.length)
    .slice(0, compact ? 40 : 100)
    .map(el => {
      const entry: any = { id: el.nodeId, path: el.pathKey };
      if (el.textContent) entry.text = deps.truncateText(el.textContent, compact ? 80 : 200);
      if (el.childrenText?.length) {
        entry.children_text = el.childrenText
          .map(t => deps.truncateText(t, compact ? 60 : 120))
          .slice(0, compact ? 4 : 8);
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
    schema: compact ? "specs-plugin.agent_pack.v5.yaml.compact" : "specs-plugin.agent_pack.v5.yaml",
    generated_at: new Date().toISOString(),
    selection: {
      node_id: target.id,
      name: target.name,
      type: target.type
    },
    summary: {
      anatomy_nodes_total: dataModel.anatomy.length,
      layout_nodes_total: dataModel.layout.length,
      property_groups_total: dataModel.properties.length,
      property_variants_total: limitedPropertyRecords.length,
      variable_refs_total: inventory.getVariableIds().length,
      chunks_total: chunks.length,
      truncated: {
        anatomy: dataModel.anatomy.length > maxAnatomy,
        layout: dataModel.layout.length > maxLayout,
        properties: propertyRecords.length > maxProperties
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
      return {
        chunk_id: chunk.chunk_id,
        kind: chunk.kind,
        item_count: chunk.item_count,
        node_ids: Array.isArray(chunk.node_ids) ? chunk.node_ids : [],
        items: sampled,
        ...(items.length > sampleSize ? { truncated_items: items.length - sampleSize } : {})
      };
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
