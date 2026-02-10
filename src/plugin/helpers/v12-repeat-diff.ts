/**
 * v12 compact repeat diff encoding/decoding.
 *
 * Encodes diff maps as indexed tuple arrays against a sorted varying_keys list:
 *   { "Foo/text": "Hello", "Foo/width": "200" }
 *   → [0, "Hello", 1, "200"]   (given varyingKeys = ["Foo/text", "Foo/width"])
 *
 * Reduces YAML chars by replacing repeated long diff key strings with short integers.
 */

/**
 * Encode a diff map as an indexed tuple array.
 * @param diffs  Original key→value diff map
 * @param varyingKeys  Sorted list of all possible diff keys for this template
 * @returns Flat array of [keyIndex, value, keyIndex, value, ...]
 */
export function encodeDiffs(
  diffs: Record<string, string>,
  varyingKeys: string[]
): (number | string)[] {
  const result: (number | string)[] = [];
  for (const [key, value] of Object.entries(diffs)) {
    const idx = varyingKeys.indexOf(key);
    if (idx === -1) continue; // key not in varying_keys — skip silently
    result.push(idx, value);
  }
  return result;
}

/**
 * Decode an indexed tuple array back to a key→value diff map.
 * @param encoded  Flat array of [keyIndex, value, keyIndex, value, ...]
 * @param varyingKeys  Sorted list of all possible diff keys for this template
 * @returns Reconstructed key→value diff map
 */
export function decodeDiffs(
  encoded: (number | string)[],
  varyingKeys: string[]
): Record<string, string> {
  const result: Record<string, string> = {};
  for (let i = 0; i < encoded.length - 1; i += 2) {
    const keyIndex = encoded[i];
    const value = encoded[i + 1];
    if (typeof keyIndex !== "number" || keyIndex < 0 || keyIndex >= varyingKeys.length) {
      continue; // out-of-range index — skip safely
    }
    result[varyingKeys[keyIndex]!] = String(value);
  }
  return result;
}

/**
 * Remove cascading width diffs where a child's width matches a parent's width diff.
 * For each group of width entries sharing a path prefix with the same value,
 * keep only the outermost (shortest path).
 *
 * Example:
 *   { "Foo/width": "86", "Foo/Bar/width": "86", "Foo/Bar/Baz/width": "86", "Foo/text": "Hi" }
 *   → { "Foo/width": "86", "Foo/text": "Hi" }
 */
export function deduplicateWidthDiffs(
  diffs: Record<string, string>
): Record<string, string> {
  // Collect all width entries
  const widthEntries: Array<{ key: string; path: string; value: string }> = [];
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(diffs)) {
    if (key.endsWith("/width")) {
      widthEntries.push({ key, path: key.slice(0, -6), value }); // strip "/width"
    } else {
      result[key] = value;
    }
  }

  // Sort width entries by path length (shortest first = outermost)
  widthEntries.sort((a, b) => a.path.length - b.path.length);

  // Keep only outermost width per cascading group
  for (const entry of widthEntries) {
    const isChild = widthEntries.some(
      other => other !== entry
        && other.value === entry.value
        && entry.path.startsWith(other.path + "/")
        && other.path.length < entry.path.length
    );
    if (!isChild) {
      result[entry.key] = entry.value;
    }
  }

  return result;
}
