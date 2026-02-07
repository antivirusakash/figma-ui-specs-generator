import { log } from "../logger";
import type { TokenValueMap } from "../types";

export const SHARED_PLUGIN_NAMESPACES = ["tokens", "tokensstudio", "figma.tokens"];
export const SHARED_NAMESPACE_PATTERN = /^[A-Za-z0-9_.]+$/;

export function normalizeTokenKey(key: string) {
  return key.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function extractTokensStudioMap(node: SceneNode): TokenValueMap {
  const map: TokenValueMap = new Map();
  if (!("getSharedPluginDataKeys" in node)) return map;
  SHARED_PLUGIN_NAMESPACES.forEach((namespace) => {
    const keys = getSafeSharedPluginDataKeys(node, namespace);
    keys.forEach((key) => {
      const value = node.getSharedPluginData(namespace, key);
      if (!value) return;
      const normalized = normalizeTokenKey(key);
      map.set(normalized, value);
      if (value.trim().startsWith("{") && value.trim().endsWith("}")) {
        try {
          const parsed = JSON.parse(value);
          if (parsed && typeof parsed === "object") {
            Object.entries(parsed).forEach(([entryKey, entryValue]) => {
              if (typeof entryValue === "string") {
                map.set(normalizeTokenKey(entryKey), entryValue);
              }
            });
          }
        } catch {
          // ignore invalid JSON payloads
        }
      }
    });
  });
  return map;
}

export function findTokenValue(tokens: TokenValueMap, candidates: string[]) {
  for (const candidate of candidates) {
    const normalized = normalizeTokenKey(candidate);
    const direct = tokens.get(normalized);
    if (direct) return direct;
    for (const [key, value] of tokens.entries()) {
      if (key.includes(normalized)) return value;
    }
  }
  return undefined;
}

export function getSafeSharedPluginDataKeys(node: SceneNode, namespace: string) {
  if (!SHARED_NAMESPACE_PATTERN.test(namespace)) {
    log("Skipping shared plugin namespace with unsupported characters", {
      node: node.name,
      namespace
    });
    return [];
  }
  try {
    return node.getSharedPluginDataKeys(namespace);
  } catch (error) {
    log("Shared plugin namespace skipped", {
      node: node.name,
      namespace,
      error
    });
    return [];
  }
}
