import { logError } from "../logger";
import type { Inventory } from "../inventory";
import type { AnatomyElement, ComponentSetContext, Settings } from "../types";
import { collectAttributes } from "./attributes";
import { detectTokensStudio } from "./attributes";

export async function collectAnatomyElements(
  root: SceneNode,
  inventory: Inventory,
  settings: Settings
): Promise<AnatomyElement[]> {
  const elements: AnatomyElement[] = [];
  const rootBounds = root.absoluteBoundingBox;
  const nameCounts = new Map<string, number>();

  const walk = async (node: SceneNode, path: string) => {
    if (!node.visible) return;

    const shouldStop = node.type === "INSTANCE" && node !== root;
    const isElement = isRelevantNode(node);

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

      elements.push({
        name: node.name,
        type: node.type,
        instanceOf,
        attributes: await collectAttributes(node, inventory, settings),
        bounds: relativeBounds,
        nodeId: node.id,
        pathKey: key
      });
    }

    if ("children" in node && !shouldStop) {
      for (const child of node.children) {
        await walk(child, `${path}/${node.name}`);
      }
    }
  };

  await walk(root, "root");
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

export function isRelevantNode(node: SceneNode) {
  if (node.type === "TEXT") return true;
  if (node.type === "LINE") return true;
  if (node.type === "POLYGON") return true;
  if (node.type === "STAR") return true;
  if (node.type === "RECTANGLE") return true;
  if (node.type === "ELLIPSE") return true;
  if (node.type === "VECTOR") return true;
  if (node.type === "BOOLEAN_OPERATION") return true;
  if (node.type === "INSTANCE") return true;
  if (node.type === "FRAME") return true;
  if (node.type === "COMPONENT") return true;
  if (node.type === "GROUP") return true;
  return false;
}
