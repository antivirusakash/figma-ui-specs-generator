import { getLimit } from "../limits";
import type { Settings } from "../types";
import { formatNumber, formatSpacing, rgbToHsl } from "./format";

/** A Figma variable resolved through its full alias chain down to a primitive value. */
export type ResolvedVariable = {
  id: string;
  /** FULL path "Collection/Group/Sub/Name" — never truncated. */
  name: string;
  collection: string;
  /** Full alias chain, outermost first, e.g. ["Semantic/Surface/Brand", "Brand/Blue/500"] */
  chain: string[];
  /** Final formatted primitive, e.g. "#0A66FF", "16px", "true" */
  value: string;
  rawValue: string | number | boolean;
  /** Set when a cycle was detected or the alias depth cap was hit. */
  unresolved?: boolean;
};

/** Mode a consuming node resolves each variable collection to (collectionId → modeId).
 *  Read off the node once and threaded down so a variable is resolved in the mode the
 *  node actually renders in, not in its collection's default mode. */
export type ModeContext = Record<string, string>;

/** `node.resolvedVariableModes`, read defensively — it is absent on older API versions
 *  and on nodes that never resolve a mode. Returns undefined when there is nothing to use. */
export function readModeContext(node: SceneNode | null | undefined): ModeContext | undefined {
  if (!node) return undefined;
  try {
    const modes = (node as any).resolvedVariableModes as Record<string, string> | undefined;
    if (!modes || typeof modes !== "object") return undefined;
    const context: ModeContext = {};
    for (const key of Object.keys(modes)) {
      const modeId = modes[key];
      if (typeof modeId === "string" && modeId) context[key] = modeId;
    }
    return Object.keys(context).length > 0 ? context : undefined;
  } catch {
    return undefined;
  }
}

/** Stable cache-key fragment for a mode context. */
function modeSignature(modes: ModeContext | undefined): string {
  if (!modes) return "";
  return Object.keys(modes)
    .sort()
    .map((key) => `${key}=${modes[key]}`)
    .join(",");
}

/** Module-level cache keyed by variable id + consumer mode context.
 *  Cleared when value-formatting settings change. */
const variableCache = new Map<string, ResolvedVariable | null>();
let cacheFormatKey = "";

export function clearVariableCache() {
  variableCache.clear();
  cacheFormatKey = "";
}

function formatKey(settings: Settings) {
  return [settings.colorFormat, settings.spacingUnit, settings.remBase, settings.valuePrecision].join("|");
}

function syncCacheWithSettings(settings: Settings) {
  const key = formatKey(settings);
  if (key !== cacheFormatKey) {
    variableCache.clear();
    cacheFormatKey = key;
  }
}

function isAlias(value: VariableValue | undefined): value is VariableAlias {
  return (
    typeof value === "object" &&
    value !== null &&
    (value as VariableAlias).type === "VARIABLE_ALIAS" &&
    typeof (value as VariableAlias).id === "string"
  );
}

function isColor(value: VariableValue | undefined): value is RGB | RGBA {
  return typeof value === "object" && value !== null && "r" in value && "g" in value && "b" in value;
}

/** Format an RGB/RGBA variable value. Honors alpha — an RGBA with a < 1 renders as hsla(). */
export function formatRGBA(color: RGB | RGBA, settings: Settings): string {
  const alpha = "a" in color && typeof color.a === "number" ? color.a : 1;
  const r = Math.round(color.r * 255);
  const g = Math.round(color.g * 255);
  const b = Math.round(color.b * 255);
  if (settings.colorFormat === "hsla" || alpha < 1) {
    const hsl = rgbToHsl(r, g, b);
    return `hsla(${formatNumber(hsl.h, 0)}, ${formatNumber(hsl.s, 0)}%, ${formatNumber(
      hsl.l,
      0
    )}%, ${formatNumber(alpha, 2)})`;
  }
  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
}

/** Render a resolved variable as "Semantic/Surface/Brand -> Brand/Blue/500 -> #0A66FF". */
export function formatAliasChain(r: ResolvedVariable): string {
  const parts = r.chain.length > 0 ? [...r.chain] : [r.name];
  if (r.value && parts[parts.length - 1] !== r.value) parts.push(r.value);
  return parts.join(" -> ");
}

/** Format a non-alias variable value. Never falls through to String(object). */
function formatPrimitive(
  value: VariableValue | undefined,
  settings: Settings
): { value: string; rawValue: string | number | boolean } {
  if (value === undefined || value === null) return { value: "—", rawValue: "" };
  if (typeof value === "number") return { value: formatSpacing(value, settings), rawValue: value };
  if (typeof value === "string") return { value, rawValue: value };
  if (typeof value === "boolean") return { value: value ? "true" : "false", rawValue: value };
  if (isColor(value)) {
    const formatted = formatRGBA(value, settings);
    return { value: formatted, rawValue: formatted };
  }
  // Unknown object shape — serialize structurally so it can never print "[object Object]".
  let serialized = "—";
  try {
    serialized = JSON.stringify(value) ?? "—";
  } catch {
    serialized = "—";
  }
  return { value: serialized, rawValue: serialized };
}

async function loadVariable(id: string): Promise<Variable | null> {
  try {
    const api = (figma as any)?.variables;
    if (!api || typeof api.getVariableByIdAsync !== "function") return null;
    return (await api.getVariableByIdAsync(id)) ?? null;
  } catch {
    return null;
  }
}

async function loadCollection(variable: Variable): Promise<VariableCollection | null> {
  const collectionId =
    "variableCollectionId" in variable ? variable.variableCollectionId : (variable as any)?.collectionId;
  if (!collectionId) return null;
  try {
    const api = (figma as any)?.variables;
    if (!api || typeof api.getVariableCollectionByIdAsync !== "function") return null;
    return (await api.getVariableCollectionByIdAsync(collectionId)) ?? null;
  } catch {
    return null;
  }
}

function qualifiedName(variable: Variable, collection: VariableCollection | null) {
  return `${collection?.name ?? "Collection"}/${variable.name}`;
}

/** Value of a variable in the consuming node's mode for that collection, falling back to the
 *  collection's default mode (then its first mode) when the consumer resolves no mode for it. */
function modeValueFor(
  variable: Variable,
  collection: VariableCollection | null,
  modes: ModeContext | undefined
): VariableValue | undefined {
  const values: Record<string, VariableValue | undefined> = variable.valuesByMode ?? {};
  const consumerModeId = collection && modes ? modes[collection.id] : undefined;
  if (consumerModeId && consumerModeId in values) return values[consumerModeId];
  const defaultModeId = (collection as any)?.defaultModeId as string | undefined;
  if (defaultModeId && defaultModeId in values) return values[defaultModeId];
  const firstModeId = collection?.modes?.[0]?.modeId;
  if (firstModeId && firstModeId in values) return values[firstModeId];
  const fallbackKey = Object.keys(values)[0];
  return fallbackKey === undefined ? undefined : values[fallbackKey];
}

/** Resolve a variable id through its full alias chain. Cycle-safe and depth-capped. */
export async function resolveVariableById(
  id: string,
  settings: Settings,
  modes?: ModeContext
): Promise<ResolvedVariable | null> {
  syncCacheWithSettings(settings);
  const cacheKey = `${id}#${modeSignature(modes)}`;
  const cached = variableCache.get(cacheKey);
  if (cached !== undefined) return cached;

  const root = await loadVariable(id);
  if (!root) {
    variableCache.set(cacheKey, null);
    return null;
  }

  const rootCollection = await loadCollection(root);
  const rootName = qualifiedName(root, rootCollection);
  const chain: string[] = [rootName];
  const visited = new Set<string>([id, root.id]);
  const maxDepth = getLimit("MAX_ALIAS_CHAIN_DEPTH");

  let current = root;
  let currentCollection = rootCollection;
  let unresolved = false;
  let value = rootName;
  let rawValue: string | number | boolean = rootName;

  for (;;) {
    const modeValue = modeValueFor(current, currentCollection, modes);
    if (!isAlias(modeValue)) {
      const primitive = formatPrimitive(modeValue, settings);
      value = primitive.value;
      rawValue = primitive.rawValue;
      break;
    }

    if (chain.length >= maxDepth || visited.has(modeValue.id)) {
      unresolved = true;
      break;
    }

    const next = await loadVariable(modeValue.id);
    if (!next) {
      unresolved = true;
      chain.push(modeValue.id);
      value = modeValue.id;
      rawValue = modeValue.id;
      break;
    }

    visited.add(modeValue.id);
    visited.add(next.id);
    currentCollection = await loadCollection(next);
    current = next;
    const nextName = qualifiedName(next, currentCollection);
    chain.push(nextName);
    value = nextName;
    rawValue = nextName;
  }

  const resolved: ResolvedVariable = {
    id,
    name: rootName,
    collection: rootCollection?.name ?? "Collection",
    chain,
    value,
    rawValue
  };
  if (unresolved) resolved.unresolved = true;

  variableCache.set(cacheKey, resolved);
  return resolved;
}

/** Resolve any VariableValue: aliases walk the chain, primitives format directly.
 *  A VariableAlias never prints as "[object Object]". */
export async function resolveVariableValue(
  value: VariableValue,
  settings: Settings,
  modes?: ModeContext
): Promise<ResolvedVariable | { value: string }> {
  if (isAlias(value)) {
    const resolved = await resolveVariableById(value.id, settings, modes);
    return resolved ?? { value: value.id };
  }
  return { value: formatPrimitive(value, settings).value };
}
