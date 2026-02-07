import { logError } from "../logger";
import type { Inventory } from "../inventory";
import type { AnatomyElement, ComponentSetContext, Settings } from "../types";
import { collectAttributes } from "./attributes";
import { detectTokensStudio } from "./attributes";

const MAX_ANATOMY_ELEMENTS = 150;
const MAX_WALK_DEPTH = 12;

export async function collectAnatomyElements(
  root: SceneNode,
  inventory: Inventory,
  settings: Settings
): Promise<AnatomyElement[]> {
  const elements: AnatomyElement[] = [];
  const rootBounds = root.absoluteBoundingBox;
  const nameCounts = new Map<string, number>();

  const walk = async (node: SceneNode, path: string, depth: number) => {
    if (!node.visible) return;
    if (elements.length >= MAX_ANATOMY_ELEMENTS) return;
    if (depth > MAX_WALK_DEPTH) return;

    const isElement = isRelevantNode(node, depth);

    if (isElement) {
      const baseKey = `${path}/${node.type}:${node.name}`;
      const count = (nameCounts.get(baseKey) ?? 0) + 1;
      nameCounts.set(baseKey, count);
      const key = count > 1 ? `${baseKey}[${count}]` : baseKey;
      const bounds = node.absoluteBoundingBox;
      const relativeBounds =
        bounds && rootBounds
          ? {
              x: bounds.x - rootBounds.x,
              y: bounds.y - rootBounds.y,
              width: bounds.width,
              height: bounds.height
            }
          : undefined;

      detectTokensStudio(node, inventory);

      const instanceOf =
        node.type === "INSTANCE" ? (await getMainComponentSafe(node as InstanceNode))?.name : undefined;

      const textContent = node.type === "TEXT"
        ? (node as TextNode).characters
        : undefined;

      const childrenText = node.type === "INSTANCE"
        ? collectInstanceText(node as InstanceNode)
        : undefined;

      elements.push({
        name: node.name,
        type: node.type,
        instanceOf,
        attributes: await collectAttributes(node, inventory, settings),
        bounds: relativeBounds,
        nodeId: node.id,
        pathKey: key,
        textContent,
        childrenText: childrenText?.length ? childrenText : undefined
      });
    }

    if ("children" in node) {
      for (const child of node.children) {
        await walk(child, `${path}/${node.name}`, depth + 1);
      }
    }
  };

  await walk(root, "root", 0);
  return elements;
}

export async function getMainComponentSafe(instance: InstanceNode) {
  try {
    return await instance.getMainComponentAsync();
  } catch (error) {
    logError("Failed to resolve main component", { id: instance.id, name: instance.name, error });
    return null;
  }
}

export async function resolveComponentSet(target?: SceneNode): Promise<ComponentSetContext | null> {
  if (!target) return null;
  if (target.type === "COMPONENT_SET") {
    const set = target as ComponentSetNode;
    const baseComponent =
      set.defaultVariant ??
      (set.children.find((child) => child.type === "COMPONENT") as ComponentNode | undefined);
    if (!baseComponent) return null;
    return { componentSet: set, baseComponent };
  }
  if (target.type === "COMPONENT") {
    const component = target as ComponentNode;
    if (component.parent?.type === "COMPONENT_SET") {
      const set = component.parent as ComponentSetNode;
      const baseComponent =
        set.defaultVariant ??
        (set.children.find((child) => child.type === "COMPONENT") as ComponentNode | undefined) ??
        component;
      return { componentSet: set, baseComponent };
    }
  }
  if (target.type === "INSTANCE") {
    const instance = target as InstanceNode;
    const main = await getMainComponentSafe(instance);
    if (main?.parent?.type === "COMPONENT_SET") {
      const set = main.parent as ComponentSetNode;
      const baseComponent =
        set.defaultVariant ??
        (set.children.find((child) => child.type === "COMPONENT") as ComponentNode | undefined) ??
        main;
      return { componentSet: set, baseComponent };
    }
  }
  return null;
}

export function isRelevantNode(node: SceneNode, depth = 0) {
  // Always include instances, text, components, boolean ops
  if (node.type === "INSTANCE") return true;
  if (node.type === "TEXT") return true;
  if (node.type === "COMPONENT") return true;
  if (node.type === "BOOLEAN_OPERATION") return true;

  // Skip purely structural frames/groups at depth > 3
  if (depth > 3 && (node.type === "FRAME" || node.type === "GROUP")) {
    if (!hasVisualProperties(node)) return false;
  }

  // Skip deep vectors/shapes at depth > 4 (usually icon internals)
  if (depth > 4 && (node.type === "VECTOR" || node.type === "RECTANGLE"
      || node.type === "ELLIPSE" || node.type === "LINE"
      || node.type === "POLYGON" || node.type === "STAR")) {
    return false;
  }

  if (node.type === "FRAME" || node.type === "GROUP"
      || node.type === "RECTANGLE" || node.type === "ELLIPSE"
      || node.type === "VECTOR" || node.type === "LINE"
      || node.type === "POLYGON" || node.type === "STAR") return true;

  return false;
}

function collectInstanceText(instance: InstanceNode, maxDepth = 3): string[] {
  const texts: string[] = [];
  const walk = (n: SceneNode, depth: number) => {
    if (depth > maxDepth || !n.visible) return;
    if (n.type === "TEXT") {
      const chars = (n as TextNode).characters;
      if (chars) texts.push(chars);
    }
    if ("children" in n) {
      for (const child of (n as FrameNode).children) walk(child, depth + 1);
    }
  };
  for (const child of instance.children) walk(child, 0);
  return texts;
}

function hasVisualProperties(node: SceneNode): boolean {
  if (!("fills" in node)) return false;
  const fills = node.fills;
  if (fills && fills !== figma.mixed && fills.length > 0) {
    const hasVisibleFill = (fills as readonly Paint[]).some(f => f.visible !== false);
    if (hasVisibleFill) return true;
  }
  if ("strokes" in node) {
    const strokes = node.strokes;
    if (strokes && strokes.length > 0) return true;
  }
  if ("effects" in node) {
    const effects = node.effects;
    if (effects && effects.length > 0) {
      const hasVisibleEffect = (effects as readonly Effect[]).some(e => e.visible !== false);
      if (hasVisibleEffect) return true;
    }
  }
  return false;
}
