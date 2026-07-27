import { FONT_MEDIUM, FONT_REGULAR } from "../constants";
import { log } from "../logger";
import type { Inventory } from "../inventory";
import type {
  AnatomyElement,
  Attribute,
  ComponentDefinition,
  ComponentPropertyDef,
  LayoutSpec,
  PropertyOption,
  PropertySpec,
  Settings,
  SpecTextRole,
  Theme,
  TwoWaySpec,
  VariantChange,
  VariantDiff
} from "../types";
import { getLimit } from "../limits";

type CreateTextFn = (
  text: string,
  size?: number,
  font?: FontName,
  color?: string,
  role?: SpecTextRole
) => TextNode;

type PropertiesSectionDeps = {
  createSectionFrame: (title: string, theme: Theme) => FrameNode;
  createText: CreateTextFn;
  fitTextToWidth: (node: TextNode, width: number) => void;
  getSectionContentWidth: (settings: Settings) => number;
  createArtworkFrame: (
    target: SceneNode,
    markerGutter: number,
    theme: Theme,
    maxContentWidth?: number,
    maxContentHeight?: number
  ) => Promise<FrameNode>;
  solidFill: (hex: string, opacity?: number) => SolidPaint;
  truncateText: (value: string, maxLength: number) => string;
  collectAnatomyElements: (target: SceneNode, inventory: Inventory, settings: Settings) => Promise<{ elements: AnatomyElement[]; [key: string]: any }>;
  getMainComponentSafe: (instance: InstanceNode) => Promise<ComponentNode | null>;
  collectLayoutData: (root: SceneNode) => LayoutSpec[];
};

/** Remove a temporary node without letting cleanup failures mask the original error. */
function removeNodeSafely(node: SceneNode | null) {
  if (!node) return;
  try {
    if (!node.removed) node.remove();
  } catch (error) {
    log("Failed to remove temporary node", error);
  }
}

/** Figma suffixes non-variant property keys with an id ("Icon#12:3").
 *  setProperties() requires that raw key — only the published name is cleaned. */
function cleanPropertyName(propName: string) {
  return propName.replace(/#[\d:]+$/, "");
}

/** PropertySpec plus the raw Figma property key. `name` is the cleaned, published name;
 *  `key` is what setProperties() needs (canvas variant previews call it). */
type KeyedPropertySpec = PropertySpec & { key: string };

export async function collectPropertySpecs(
  target: SceneNode,
  inventory: Inventory,
  settings: Settings,
  deps: PropertiesSectionDeps
): Promise<PropertySpec[]> {
  log("Collecting property specs", target.type);
  let baseInstance: InstanceNode | null = null;
  let tempFrame: FrameNode | null = null;

  try {
    let componentSet: ComponentSetNode | null = null;

    if (target.type === "INSTANCE") {
      const source = target as InstanceNode;
      baseInstance = source.clone();
      const main = await deps.getMainComponentSafe(source);
      if (main?.parent?.type === "COMPONENT_SET") {
        componentSet = main.parent as ComponentSetNode;
      }
    } else if (target.type === "COMPONENT_SET") {
      componentSet = target as ComponentSetNode;
      if (componentSet.defaultVariant) {
        baseInstance = componentSet.defaultVariant.createInstance();
      }
    } else if (target.type === "COMPONENT") {
      const component = target as ComponentNode;
      baseInstance = component.createInstance();
      if (component.parent?.type === "COMPONENT_SET") {
        componentSet = component.parent as ComponentSetNode;
      }
    }

    if (!baseInstance || !componentSet) {
      log("No component set or instance found for properties.");
      return [];
    }

    tempFrame = figma.createFrame();
    tempFrame.name = "__specs_temp__";
    tempFrame.visible = false;
    tempFrame.locked = true;
    figma.currentPage.appendChild(tempFrame);
    tempFrame.appendChild(baseInstance);

    const { elements: baseElements } = await deps.collectAnatomyElements(baseInstance, inventory, settings);
    const properties = baseInstance.componentProperties;
    const specs: KeyedPropertySpec[] = [];
    log("Property keys", Object.keys(properties));

    for (const [propName, prop] of Object.entries(properties)) {
      if (!prop) continue;
      const cleanName = cleanPropertyName(propName);
      if (prop.type === "VARIANT") {
        const allOptions = componentSet.variantGroupProperties[propName]?.values ?? [];
        const options = allOptions.slice(0, getLimit("MAX_VARIANT_OPTIONS"));
        const optionSpecs: PropertyOption[] = [];
        for (const option of options) {
          const variantInstance = baseInstance.clone();
          tempFrame.appendChild(variantInstance);
          try {
            try {
              variantInstance.setProperties({ [propName]: option });
            } catch {
              // ignore invalid variants
            }
            const { elements } = await deps.collectAnatomyElements(variantInstance, inventory, settings);
            const differences = diffElements(baseElements, elements);
            optionSpecs.push({ name: option, elements, differences });
          } finally {
            removeNodeSafely(variantInstance);
          }
        }

        specs.push({
          name: cleanName,
          key: propName,
          type: "VARIANT",
          default: String(prop.value),
          options: optionSpecs
        });
      } else if (prop.type === "BOOLEAN") {
        const optionSpecs: PropertyOption[] = [];
        const booleanOptions = [true, false];
        for (const option of booleanOptions) {
          const variantInstance = baseInstance.clone();
          tempFrame.appendChild(variantInstance);
          try {
            try {
              variantInstance.setProperties({ [propName]: option });
            } catch {
              // ignore
            }
            const { elements } = await deps.collectAnatomyElements(variantInstance, inventory, settings);
            const differences = diffElements(baseElements, elements);
            optionSpecs.push({ name: String(option), elements, differences });
          } finally {
            removeNodeSafely(variantInstance);
          }
        }

        specs.push({
          name: cleanName,
          key: propName,
          type: "BOOLEAN",
          default: Boolean(prop.value),
          options: optionSpecs
        });
      } else {
        specs.push({
          name: cleanName,
          key: propName,
          type: prop.type,
          default: String(prop.value),
          options: [
            {
              name: String(prop.value),
              elements: baseElements,
              differences: []
            }
          ]
        });
      }
    }

    return specs;
  } finally {
    // tempFrame owns baseInstance once appended; baseInstance is removed separately because
    // clone()/createInstance() parent it in the user's document before we adopt it.
    removeNodeSafely(tempFrame);
    removeNodeSafely(baseInstance);
  }
}

/** Attribute label for display: strips the internal "key:"/"prop:"/"attr:" map prefix. */
function displayAttributeKey(attrKey: string) {
  return attrKey.replace(/^(key:|prop:|attr:)/, "");
}

/** Full display value of an attribute: variable-backed attributes render their whole alias
 *  chain ("Semantic/Surface/Brand -> Brand/Blue/500 -> #0A66FF"). Never truncated here —
 *  the canvas renderer applies TRUNC_CANVAS_DIFF_LINE, and the YAML path keeps it intact.
 *  attr.value is the variable's own full path (chain[0]); attr.rawValue is the primitive the
 *  chain resolves to. */
function describeAttributeValue(attr: Attribute) {
  if (!attr.aliasChain || attr.aliasChain.length === 0) return attr.value;
  const parts = attr.aliasChain[0] === attr.value ? [...attr.aliasChain] : [attr.value, ...attr.aliasChain];
  const primitive = attr.rawValue === undefined || attr.rawValue === null ? "" : String(attr.rawValue);
  if (primitive && parts[parts.length - 1] !== primitive) parts.push(primitive);
  return parts.join(" -> ");
}

function diffElements(baseElements: AnatomyElement[], variantElements: AnatomyElement[]) {
  const baseMap = mapElementsByPath(baseElements);
  const variantMap = mapElementsByPath(variantElements);
  const diffs: string[] = [];

  for (const [key, baseEl] of baseMap.entries()) {
    const variantEl = variantMap.get(key);
    if (!variantEl) {
      diffs.push(`Removed element: ${baseEl.name}`);
      continue;
    }

    const baseAttrs = attributeMap(baseEl.attributes);
    const variantAttrs = attributeMap(variantEl.attributes);
    for (const [attrKey, baseAttr] of baseAttrs.entries()) {
      const variantAttr = variantAttrs.get(attrKey);
      if (variantAttr === undefined) {
        diffs.push(`${baseEl.name} · ${displayAttributeKey(attrKey)} removed`);
        continue;
      }
      if (baseAttr.value !== variantAttr.value) {
        diffs.push(
          `${baseEl.name} · ${displayAttributeKey(attrKey)}: ${describeAttributeValue(baseAttr)} → ${describeAttributeValue(
            variantAttr
          )}`
        );
      }
    }

    for (const attrKey of variantAttrs.keys()) {
      if (!baseAttrs.has(attrKey)) {
        diffs.push(`${baseEl.name} · ${displayAttributeKey(attrKey)} added`);
      }
    }
  }

  for (const [key, variantEl] of variantMap.entries()) {
    if (!baseMap.has(key)) {
      diffs.push(`Added element: ${variantEl.name}`);
    }
  }

  // Cap kept at 24: this list is the human/YAML prose diff and bounds output size. v13+ carries
  // the complete, uncapped diff through computeStructuredDiff, so nothing is lost there.
  return diffs.slice(0, 24);
}

/**
 * v13: Compute a structured diff between base and variant anatomy.
 * Returns a VariantChange mapping path_key → {attributeKey: newValue} for changed attributes,
 * plus lists of added/removed path_keys.
 *
 * LIMITATION: pathKey embeds the layer name (".../FRAME:Icon"), so a variant that RENAMES a
 * layer registers as removed + added rather than changed. ComponentDefinition.nodeIds maps
 * those path keys back to document node ids for the base configuration only.
 */
export function computeStructuredDiff(
  baseElements: AnatomyElement[],
  variantElements: AnatomyElement[]
): { changes: VariantChange; added: string[]; removed: string[] } {
  const baseMap = mapElementsByPath(baseElements);
  const variantMap = mapElementsByPath(variantElements);
  const changes: VariantChange = {};
  const added: string[] = [];
  const removed: string[] = [];

  for (const [key, baseEl] of baseMap.entries()) {
    const variantEl = variantMap.get(key);
    if (!variantEl) {
      removed.push(key);
      continue;
    }
    // Use pathKey (stable across clones) as the diff key, not nodeId (unique per clone)
    const diffKey = key;
    const nodeChanges: Record<string, string | number | boolean> = {};

    // Compare promoted fields
    if (baseEl.bounds && variantEl.bounds) {
      const bw = Math.round(baseEl.bounds.width);
      const vw = Math.round(variantEl.bounds.width);
      if (bw !== vw) nodeChanges.w = vw;
      const bh = Math.round(baseEl.bounds.height);
      const vh = Math.round(variantEl.bounds.height);
      if (bh !== vh) nodeChanges.h = vh;
    }

    // Compare attributes by key
    const baseAttrs = attributeMap(baseEl.attributes);
    const variantAttrs = attributeMap(variantEl.attributes);
    for (const [attrKey, baseAttr] of baseAttrs.entries()) {
      const variantAttr = variantAttrs.get(attrKey);
      if (variantAttr === undefined) {
        // Attribute removed — record as empty string
        nodeChanges[displayAttributeKey(attrKey)] = "";
      } else if (baseAttr.value !== variantAttr.value) {
        nodeChanges[displayAttributeKey(attrKey)] = variantAttr.value;
      }
    }
    for (const [attrKey, variantAttr] of variantAttrs.entries()) {
      if (!baseAttrs.has(attrKey)) {
        nodeChanges[displayAttributeKey(attrKey)] = variantAttr.value;
      }
    }

    // Compare text content
    if (baseEl.textContent !== variantEl.textContent) {
      nodeChanges.text = variantEl.textContent ?? "";
    }

    // Compare visibility (element present in both but type changes suggest hidden)
    // (visibility is typically handled through attribute differences)

    if (Object.keys(nodeChanges).length > 0) {
      changes[diffKey] = nodeChanges;
    }
  }

  for (const [key] of variantMap.entries()) {
    if (!baseMap.has(key)) {
      added.push(key);
    }
  }

  return { changes, added, removed };
}

/**
 * Translate a node id collected from the throwaway base instance into the id of the node it
 * mirrors in the user's document. Figma composes instance descendant ids as
 * "I<instance id chain>;<component-side id chain>", so:
 *   - the temp instance root maps to the live root it was cloned/instantiated from;
 *   - when the temp instance mirrors a live INSTANCE, the same component-side chain hangs off
 *     the live instance id;
 *   - when it is synthetic (COMPONENT / COMPONENT_SET target), the component-side chain alone
 *     already addresses the layer inside the main component, which lives in the document.
 * Returns null for ids we cannot translate — a dead reference is worse than no reference.
 */
function liveNodeIdFor(nodeId: string, tempRootId: string, liveRootId: string, mirrorsInstance: boolean): string | null {
  if (nodeId === tempRootId) return liveRootId;
  const prefix = `I${tempRootId};`;
  if (!nodeId.startsWith(prefix)) return null;
  const componentChain = nodeId.slice(prefix.length);
  if (mirrorsInstance) {
    const liveBase = liveRootId.startsWith("I") ? liveRootId.slice(1) : liveRootId;
    return `I${liveBase};${componentChain}`;
  }
  // A chain with a separator is itself nested inside an instance within the component.
  return componentChain.includes(";") ? `I${componentChain}` : componentChain;
}

function buildLiveNodeIdMap(
  elements: AnatomyElement[],
  tempRootId: string,
  liveRootId: string,
  mirrorsInstance: boolean
): Record<string, string> {
  const map: Record<string, string> = {};
  for (const element of elements) {
    if (!element.pathKey || !element.nodeId) continue;
    const liveId = liveNodeIdFor(element.nodeId, tempRootId, liveRootId, mirrorsInstance);
    if (liveId) map[element.pathKey] = liveId;
  }
  return map;
}

/**
 * v13: Collect a ComponentDefinition from a component set.
 * Defines the structure once (base variant) and records only diffs per variant option.
 */
export async function collectComponentDefinition(
  target: SceneNode,
  inventory: Inventory,
  settings: Settings,
  deps: PropertiesSectionDeps
): Promise<ComponentDefinition | null> {
  let baseInstance: InstanceNode | null = null;
  let tempFrame: FrameNode | null = null;

  try {
    let componentSet: ComponentSetNode | null = null;
    // Node in the user's document that the temporary base instance mirrors.
    let liveRootId = target.id;

    if (target.type === "INSTANCE") {
      const source = target as InstanceNode;
      baseInstance = source.clone();
      const main = await deps.getMainComponentSafe(source);
      if (main?.parent?.type === "COMPONENT_SET") {
        componentSet = main.parent as ComponentSetNode;
      }
    } else if (target.type === "COMPONENT_SET") {
      componentSet = target as ComponentSetNode;
      if (componentSet.defaultVariant) {
        baseInstance = componentSet.defaultVariant.createInstance();
        liveRootId = componentSet.defaultVariant.id;
      }
    } else if (target.type === "COMPONENT") {
      const component = target as ComponentNode;
      baseInstance = component.createInstance();
      if (component.parent?.type === "COMPONENT_SET") {
        componentSet = component.parent as ComponentSetNode;
      }
    }

    if (!baseInstance || !componentSet) {
      return null;
    }

    tempFrame = figma.createFrame();
    tempFrame.name = "__specs_v13_def__";
    tempFrame.visible = false;
    tempFrame.locked = true;
    figma.currentPage.appendChild(tempFrame);
    tempFrame.appendChild(baseInstance);

    const { elements: baseElements } = await deps.collectAnatomyElements(baseInstance, inventory, settings);

    // Build property definitions from component set
    const propDefs: ComponentPropertyDef[] = [];
    const properties = baseInstance.componentProperties;
    const variantGroupProps = componentSet.variantGroupProperties ?? {};

    for (const [propName, prop] of Object.entries(properties)) {
      if (!prop) continue;
      const cleanName = cleanPropertyName(propName);
      if (prop.type === "VARIANT") {
        const allOptions = variantGroupProps[propName]?.values ?? [];
        propDefs.push({
          name: cleanName,
          type: "VARIANT",
          default: String(prop.value),
          options: allOptions.slice(0, getLimit("MAX_VARIANT_OPTIONS"))
        });
      } else if (prop.type === "BOOLEAN") {
        propDefs.push({
          name: cleanName,
          type: "BOOLEAN",
          default: Boolean(prop.value),
          options: ["true", "false"]
        });
      } else if (prop.type === "TEXT") {
        propDefs.push({
          name: cleanName,
          type: "TEXT",
          default: String(prop.value)
        });
      } else if (prop.type === "INSTANCE_SWAP") {
        propDefs.push({
          name: cleanName,
          type: "INSTANCE_SWAP",
          default: String(prop.value)
        });
      }
    }

    // Collect variant diffs for each non-default option
    const variantDiffs: VariantDiff[] = [];

    for (const [propName, prop] of Object.entries(properties)) {
      if (!prop) continue;
      const cleanName = cleanPropertyName(propName);

      if (prop.type === "VARIANT") {
        const allOptions = variantGroupProps[propName]?.values ?? [];
        const options = allOptions.slice(0, getLimit("MAX_VARIANT_OPTIONS"));
        for (const option of options) {
          if (option === String(prop.value)) continue; // skip default
          const variantInstance = baseInstance.clone();
          tempFrame.appendChild(variantInstance);
          try {
            try {
              variantInstance.setProperties({ [propName]: option });
            } catch {
              continue;
            }
            const { elements } = await deps.collectAnatomyElements(variantInstance, inventory, settings);
            const { changes, added, removed } = computeStructuredDiff(baseElements, elements);
            if (Object.keys(changes).length > 0 || added.length > 0 || removed.length > 0) {
              const diff: VariantDiff = {
                config: { [cleanName]: option },
                changes
              };
              if (added.length > 0) diff.added = added;
              if (removed.length > 0) diff.removed = removed;
              variantDiffs.push(diff);
            }
          } finally {
            removeNodeSafely(variantInstance);
          }
        }
      } else if (prop.type === "BOOLEAN") {
        // Only collect the non-default value
        const nonDefault = !Boolean(prop.value);
        const variantInstance = baseInstance.clone();
        tempFrame.appendChild(variantInstance);
        try {
          try {
            variantInstance.setProperties({ [propName]: nonDefault });
          } catch {
            continue;
          }
          const { elements } = await deps.collectAnatomyElements(variantInstance, inventory, settings);
          const { changes, added, removed } = computeStructuredDiff(baseElements, elements);
          if (Object.keys(changes).length > 0 || added.length > 0 || removed.length > 0) {
            const diff: VariantDiff = {
              config: { [cleanName]: nonDefault },
              changes
            };
            if (added.length > 0) diff.added = added;
            if (removed.length > 0) diff.removed = removed;
            variantDiffs.push(diff);
          }
        } finally {
          removeNodeSafely(variantInstance);
        }
      }
      // TEXT and INSTANCE_SWAP don't produce structural diffs
    }

    // variant_diffs are keyed by path_key; carry the document node id alongside so the
    // linkage stays resolvable even when path_key is dropped from anatomy records.
    const nodeIds = buildLiveNodeIdMap(baseElements, baseInstance.id, liveRootId, target.type === "INSTANCE");

    const definition: ComponentDefinition = {
      componentSetName: componentSet.name,
      // The live node the spec was generated from — the temp instance id dies with tempFrame.
      baseNodeId: liveRootId,
      properties: propDefs,
      variantDiffs
    };
    if (Object.keys(nodeIds).length > 0) definition.nodeIds = nodeIds;
    return definition;
  } finally {
    removeNodeSafely(tempFrame);
    removeNodeSafely(baseInstance);
  }
}

function mapElementsByPath(elements: AnatomyElement[]) {
  const map = new Map<string, AnatomyElement>();
  elements.forEach((element, index) => {
    const key = element.pathKey ?? `${element.type}:${element.name}:${index}`;
    map.set(key, element);
  });
  return map;
}

export function buildElementKey(element: AnatomyElement) {
  return element.pathKey ?? `${element.type}:${element.name}`;
}

export function buildLayoutKey(spec: LayoutSpec) {
  return spec.pathKey ?? `${spec.type}:${spec.name}`;
}

function attributeMap(attributes: Attribute[]) {
  const map = new Map<string, Attribute>();
  attributes.forEach((attr, index) => {
    const key = attr.key ? `key:${attr.key}` : attr.propertyName ? `prop:${attr.propertyName}` : `attr:${index}`;
    map.set(key, attr);
  });
  return map;
}

export async function collectTwoWaySpec(
  target: SceneNode,
  settings: Settings,
  inventory: Inventory,
  deps: PropertiesSectionDeps
): Promise<TwoWaySpec | null> {
  log("Collecting two-way spec", target.type);
  let baseInstance: InstanceNode | null = null;
  let tempFrame: FrameNode | null = null;

  try {
    let componentSet: ComponentSetNode | null = null;

    if (target.type === "INSTANCE") {
      const source = target as InstanceNode;
      baseInstance = source.clone();
      const main = await deps.getMainComponentSafe(source);
      if (main?.parent?.type === "COMPONENT_SET") {
        componentSet = main.parent as ComponentSetNode;
      }
    } else if (target.type === "COMPONENT_SET") {
      componentSet = target as ComponentSetNode;
      if (componentSet.defaultVariant) {
        baseInstance = componentSet.defaultVariant.createInstance();
      }
    } else if (target.type === "COMPONENT") {
      const component = target as ComponentNode;
      baseInstance = component.createInstance();
      if (component.parent?.type === "COMPONENT_SET") {
        componentSet = component.parent as ComponentSetNode;
      }
    }

    if (!baseInstance || !componentSet) {
      log("Two-way spec skipped: missing component set/instance.");
      return null;
    }

    const variantProps = Object.keys(componentSet.variantGroupProperties ?? {});
    if (variantProps.length < 2) {
      log("Two-way spec skipped: less than two variant props.");
      return null;
    }

    const requestedA = settings.twoWayPropA?.trim();
    const requestedB = settings.twoWayPropB?.trim();
    const propA = requestedA && variantProps.includes(requestedA) ? requestedA : variantProps[0];
    const propB =
      requestedB && variantProps.includes(requestedB)
        ? requestedB
        : variantProps.find((prop) => prop !== propA) ?? variantProps[1];
    if (!propA || !propB || propA === propB) {
      log("Two-way spec skipped: invalid property selection.", { propA, propB });
      return null;
    }
    const optionsA = componentSet.variantGroupProperties[propA]?.values ?? [];
    const optionsB = componentSet.variantGroupProperties[propB]?.values ?? [];

    tempFrame = figma.createFrame();
    tempFrame.name = "__specs_two_way__";
    tempFrame.visible = false;
    tempFrame.locked = true;
    figma.currentPage.appendChild(tempFrame);
    tempFrame.appendChild(baseInstance);

    const { elements: baseElements } = await deps.collectAnatomyElements(baseInstance, inventory, settings);
    const combinations: TwoWaySpec["combinations"] = [];
    for (const a of optionsA) {
      if (combinations.length >= getLimit("MAX_TWO_WAY_COMBOS")) break;
      for (const b of optionsB) {
        if (combinations.length >= getLimit("MAX_TWO_WAY_COMBOS")) break;
        const variantInstance = baseInstance.clone();
        tempFrame.appendChild(variantInstance);
        try {
          try {
            variantInstance.setProperties({ [propA]: a, [propB]: b });
          } catch {
            // ignore
          }
          const { elements } = await deps.collectAnatomyElements(variantInstance, inventory, settings);
          const differences = diffElements(baseElements, elements);
          combinations.push({ a, b, differences });
        } finally {
          removeNodeSafely(variantInstance);
        }
      }
    }

    return { propA, propB, combinations };
  } finally {
    removeNodeSafely(tempFrame);
    removeNodeSafely(baseInstance);
  }
}

/** Diff lines carry full variable paths ("Brand/Theme/Semantic/Surface/Interactive/Primary"),
 *  so the old 72/120 char caps cut the variable name itself. getLimit keeps tier overrides live. */
function diffLineLimit(compact: boolean) {
  return compact ? getLimit("TRUNC_CANVAS_DIFF_LINE_COMPACT") : getLimit("TRUNC_CANVAS_DIFF_LINE");
}

export async function createPropertiesSection(
  target: SceneNode,
  specs: PropertySpec[],
  settings: Settings,
  theme: Theme,
  twoWaySpec: TwoWaySpec | undefined,
  deps: PropertiesSectionDeps
) {
  const section = deps.createSectionFrame("Properties", theme);
  const compact = settings.agentReadyData && settings.aiCompactMode;

  if (twoWaySpec) {
    const twoWayFrame = figma.createFrame();
    twoWayFrame.layoutMode = "VERTICAL";
    twoWayFrame.primaryAxisSizingMode = "AUTO";
    twoWayFrame.counterAxisSizingMode = "AUTO";
    twoWayFrame.itemSpacing = 12;
    twoWayFrame.fills = [];

    twoWayFrame.appendChild(deps.createText("Two-Way Comparison", 12, FONT_MEDIUM, theme.text, "heading"));
    twoWayFrame.appendChild(
      deps.createText(`Properties: ${twoWaySpec.propA} × ${twoWaySpec.propB}`, 10, FONT_REGULAR, theme.muted, "muted")
    );

    const grouped = new Map<string, TwoWaySpec["combinations"]>();
    twoWaySpec.combinations.forEach((combo) => {
      const list = grouped.get(combo.a) ?? [];
      list.push(combo);
      grouped.set(combo.a, list);
    });

    grouped.forEach((combos, a) => {
      const row = figma.createFrame();
      row.layoutMode = "VERTICAL";
      row.primaryAxisSizingMode = "AUTO";
      row.counterAxisSizingMode = "AUTO";
      row.itemSpacing = 6;
      row.fills = [];
      row.appendChild(deps.createText(`${twoWaySpec.propA}: ${a}`, 10, FONT_MEDIUM, theme.text, "label"));

      combos.slice(0, compact ? 2 : 5).forEach((combo) => {
        const comboFrame = figma.createFrame();
        comboFrame.layoutMode = "VERTICAL";
        comboFrame.primaryAxisSizingMode = "AUTO";
        comboFrame.counterAxisSizingMode = "AUTO";
        comboFrame.itemSpacing = 4;
        comboFrame.paddingLeft = 8;
        comboFrame.paddingRight = 8;
        comboFrame.paddingTop = 6;
        comboFrame.paddingBottom = 6;
        comboFrame.cornerRadius = 8;
        comboFrame.fills = [deps.solidFill(theme.background)];
        comboFrame.strokes = [deps.solidFill(theme.border)];
        comboFrame.strokeWeight = 1;

        comboFrame.appendChild(deps.createText(`${twoWaySpec.propB}: ${combo.b}`, 9, FONT_MEDIUM, theme.text, "label"));
        const detail = combo.differences.length
          ? combo.differences
              .slice(0, compact ? 1 : 3)
              .map((line) => `• ${deps.truncateText(line, diffLineLimit(compact))}`)
              .join("\n")
          : "No detected differences.";
        const detailNode = deps.createText(detail, 8, FONT_REGULAR, theme.muted, "caption");
        deps.fitTextToWidth(detailNode, deps.getSectionContentWidth(settings) - 48);
        comboFrame.appendChild(detailNode);

        if (!compact) {
          const preview = createVariantPreviewForProps(
            target,
            { [twoWaySpec.propA]: combo.a, [twoWaySpec.propB]: combo.b },
            theme,
            deps
          );
          if (preview) {
            comboFrame.appendChild(preview);
          }
        }

        row.appendChild(comboFrame);
      });

      if (combos.length > (compact ? 2 : 5)) {
        row.appendChild(
          deps.createText(
            `+${combos.length - (compact ? 2 : 5)} combinations omitted in preview.`,
            8,
            FONT_REGULAR,
            theme.muted,
            "caption"
          )
        );
      }

      twoWayFrame.appendChild(row);
    });

    section.appendChild(twoWayFrame);
  }

  if (specs.length === 0) {
    section.appendChild(deps.createText("No variant or boolean properties detected.", 11, FONT_REGULAR, theme.muted, "muted"));
    return section;
  }

  for (const spec of specs) {
    const propFrame = figma.createFrame();
    propFrame.layoutMode = "VERTICAL";
    propFrame.primaryAxisSizingMode = "AUTO";
    propFrame.counterAxisSizingMode = "AUTO";
    propFrame.itemSpacing = 8;
    propFrame.fills = [];

    const title = deps.createText(`${spec.name} (${spec.type})`, 12, FONT_MEDIUM, theme.text, "heading");
    propFrame.appendChild(title);

    const options = compact ? spec.options.slice(0, 3) : spec.options;
    for (const option of options) {
      const optionFrame = figma.createFrame();
      optionFrame.layoutMode = "VERTICAL";
      optionFrame.primaryAxisSizingMode = "AUTO";
      optionFrame.counterAxisSizingMode = "AUTO";
      optionFrame.itemSpacing = 6;
      optionFrame.paddingLeft = 8;
      optionFrame.paddingRight = 8;
      optionFrame.paddingTop = 6;
      optionFrame.paddingBottom = 6;
      optionFrame.cornerRadius = 8;
      optionFrame.fills = [deps.solidFill(theme.background)];
      optionFrame.strokes = [deps.solidFill(theme.border)];
      optionFrame.strokeWeight = 1;

      const optionLabel = deps.createText(`Option: ${option.name}`, 11, FONT_MEDIUM, theme.text, "label");
      optionFrame.appendChild(optionLabel);

      const diffText = option.differences.length
        ? option.differences
            .slice(0, compact ? 2 : 6)
            .map((line) => `• ${deps.truncateText(line, diffLineLimit(compact))}`)
            .join("\n")
        : "No detected differences.";
      const diffNode = deps.createText(diffText, 10, FONT_REGULAR, theme.muted, "muted");
      deps.fitTextToWidth(diffNode, deps.getSectionContentWidth(settings) - 48);
      optionFrame.appendChild(diffNode);

      if (!compact && (spec.type === "VARIANT" || spec.type === "BOOLEAN")) {
        const previewValue = spec.type === "BOOLEAN" ? option.name === "true" : option.name;
        // setProperties() needs the raw suffixed key; spec.name is the cleaned display name.
        const rawPropertyKey = (spec as Partial<KeyedPropertySpec>).key ?? spec.name;
        const preview = createVariantPreview(target, rawPropertyKey, previewValue, theme, deps);
        if (preview) {
          optionFrame.appendChild(preview);
        }
      }

      propFrame.appendChild(optionFrame);
    }

    section.appendChild(propFrame);
  }

  if (compact) {
    section.appendChild(
      deps.createText(
        "AI compact mode is on: property options and differences are intentionally truncated.",
        9,
        FONT_REGULAR,
        theme.muted,
        "caption"
      )
    );
  }

  return section;
}

function createVariantPreview(
  target: SceneNode,
  propName: string,
  optionValue: string | boolean,
  theme: Theme,
  deps: PropertiesSectionDeps
) {
  const instance = createPreviewInstance(target);
  if (!instance) return null;
  try {
    instance.setProperties({ [propName]: optionValue });
  } catch (error) {
    instance.remove();
    log("Variant preview unavailable", error);
    return createUnavailablePreview(theme, deps);
  }
  return wrapPreviewInstance(instance, theme, deps);
}

function createVariantPreviewForProps(
  target: SceneNode,
  props: Record<string, string | boolean>,
  theme: Theme,
  deps: PropertiesSectionDeps
) {
  const instance = createPreviewInstance(target);
  if (!instance) return null;
  try {
    instance.setProperties(props);
  } catch (error) {
    instance.remove();
    log("Variant preview unavailable", error);
    return createUnavailablePreview(theme, deps);
  }
  return wrapPreviewInstance(instance, theme, deps);
}

function createPreviewInstance(target: SceneNode): InstanceNode | null {
  if (target.type === "INSTANCE") {
    return (target as InstanceNode).clone();
  }
  if (target.type === "COMPONENT") {
    return (target as ComponentNode).createInstance();
  }
  if (target.type === "COMPONENT_SET") {
    const set = target as ComponentSetNode;
    const base =
      set.defaultVariant ?? (set.children.find((child) => child.type === "COMPONENT") as ComponentNode | undefined);
    return base ? base.createInstance() : null;
  }
  return null;
}

function wrapPreviewInstance(instance: InstanceNode, theme: Theme, deps: PropertiesSectionDeps) {
  const frame = figma.createFrame();
  frame.layoutMode = "NONE";
  frame.fills = [deps.solidFill(theme.background)];
  frame.strokes = [deps.solidFill(theme.border)];
  frame.strokeWeight = 1;
  frame.cornerRadius = 6;
  frame.appendChild(instance);

  const maxWidth = 160;
  const maxHeight = 220;
  const scale = Math.min(1, maxWidth / Math.max(1, instance.width), maxHeight / Math.max(1, instance.height));
  instance.x = 8;
  instance.y = 8;
  if (scale < 1) {
    instance.resizeWithoutConstraints(instance.width * scale, instance.height * scale);
  }
  frame.resizeWithoutConstraints(instance.width + 16, instance.height + 16);
  return frame;
}

function createUnavailablePreview(theme: Theme, deps: PropertiesSectionDeps) {
  const frame = figma.createFrame();
  frame.layoutMode = "VERTICAL";
  frame.primaryAxisSizingMode = "AUTO";
  frame.counterAxisSizingMode = "AUTO";
  frame.itemSpacing = 4;
  frame.fills = [deps.solidFill(theme.section)];
  frame.strokes = [deps.solidFill(theme.border)];
  frame.strokeWeight = 1;
  frame.cornerRadius = 6;
  frame.paddingLeft = 8;
  frame.paddingRight = 8;
  frame.paddingTop = 6;
  frame.paddingBottom = 6;
  frame.appendChild(deps.createText("Variant unavailable", 9, FONT_MEDIUM, theme.muted, "caption"));
  return frame;
}

/** Width of a combination cell in the standalone two-way grid (no Settings available here). */
const TWO_WAY_CELL_WIDTH = 240;

export function createTwoWaySection(spec: TwoWaySpec, theme: Theme, deps: PropertiesSectionDeps) {
  const section = deps.createSectionFrame("Two-Way Comparison", theme);
  section.appendChild(deps.createText(`Properties: ${spec.propA} × ${spec.propB}`, 11, FONT_MEDIUM, theme.text, "label"));

  const grouped = new Map<string, TwoWaySpec["combinations"]>();
  spec.combinations.forEach((combo) => {
    const list = grouped.get(combo.a) ?? [];
    list.push(combo);
    grouped.set(combo.a, list);
  });

  grouped.forEach((combos, a) => {
    const row = figma.createFrame();
    row.layoutMode = "HORIZONTAL";
    row.primaryAxisSizingMode = "AUTO";
    row.counterAxisSizingMode = "AUTO";
    row.itemSpacing = 12;
    row.fills = [];

    const rowLabel = figma.createFrame();
    rowLabel.layoutMode = "VERTICAL";
    rowLabel.primaryAxisSizingMode = "AUTO";
    rowLabel.counterAxisSizingMode = "AUTO";
    rowLabel.itemSpacing = 4;
    rowLabel.fills = [];
    rowLabel.appendChild(deps.createText(`${spec.propA}: ${a}`, 10, FONT_MEDIUM, theme.text, "label"));
    row.appendChild(rowLabel);

    combos.forEach((combo) => {
      const cell = figma.createFrame();
      cell.layoutMode = "VERTICAL";
      cell.primaryAxisSizingMode = "AUTO";
      cell.counterAxisSizingMode = "AUTO";
      cell.itemSpacing = 4;
      cell.fills = [];

      cell.appendChild(deps.createText(`${spec.propB}: ${combo.b}`, 9, FONT_MEDIUM, theme.text, "label"));
      const detail = combo.differences.length
        ? combo.differences.map((line) => `• ${line}`).join("\n")
        : "No detected differences.";
      const detailNode = deps.createText(detail, 8, FONT_REGULAR, theme.muted, "caption");
      // Wrap instead of letting a full variable path stretch (or clip) the comparison cell.
      deps.fitTextToWidth(detailNode, TWO_WAY_CELL_WIDTH);
      cell.appendChild(detailNode);
      row.appendChild(cell);
    });

    section.appendChild(row);
  });

  return section;
}
