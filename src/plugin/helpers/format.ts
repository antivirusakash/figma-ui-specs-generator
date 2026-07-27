import type { Settings } from "../types";

export function solidFill(hex: string, opacity = 1): SolidPaint {
  const rgb = hexToRgb(hex);
  return {
    type: "SOLID",
    color: rgb,
    opacity
  };
}

export function isMixed<T>(value: T | typeof figma.mixed): value is typeof figma.mixed {
  return value === figma.mixed;
}

export function hexToRgb(hex: string) {
  const sanitized = hex.replace("#", "");
  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r: r / 255, g: g / 255, b: b / 255 };
}

export function formatNumber(value: number, precision: number) {
  const fixed = value.toFixed(precision);
  return precision === 0 ? String(Math.round(value)) : fixed.replace(/\.0+$/, "");
}

export function formatSpacing(value: number, settings: Settings) {
  if (settings.spacingUnit === "rem") {
    const base = settings.remBase && settings.remBase > 0 ? settings.remBase : 16;
    const rem = value / base;
    return `${formatNumber(rem, settings.valuePrecision)}rem`;
  }
  return `${formatNumber(value, settings.valuePrecision)}px`;
}

/** Format an RGB/RGBA colour, folding the paint-level opacity into the colour's own alpha. */
export function formatPaintColor(color: RGB | RGBA, paintOpacity: number, settings: Settings): string {
  const colorAlpha = "a" in color && typeof color.a === "number" ? color.a : 1;
  const alpha = paintOpacity * colorAlpha;
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

/** Pixel size of the node a paint belongs to. gradientTransform is expressed in the node's
 *  NORMALIZED (0..1 × 0..1) space, so the size is required to turn it into a real angle. */
export type PaintSize = { width: number; height: number };

/** CSS angle (deg, 0 = to top, clockwise) of a linear gradient.
 *  gradientTransform maps object space to gradient space, so row 0 = [a, b, tx]
 *  is the gradient axis; object-space y grows downwards. */
export function gradientAngle(paint: GradientPaint, size?: PaintSize): number {
  const transform = paint.gradientTransform as unknown as number[][] | undefined;
  const a = transform?.[0]?.[0];
  const b = transform?.[0]?.[1];
  // Figma's default linear gradient runs top → bottom.
  if (typeof a !== "number" || typeof b !== "number") return 180;
  // The axis lives in normalized space: on a 320×64 node a visually 45° gradient has a
  // normalized direction of (1/320, 1/64). Scale by the node size before taking the angle
  // or every non-square node reports a near-vertical gradient.
  const dx = size && size.width > 0 ? a * size.width : a;
  const dy = size && size.height > 0 ? b * size.height : b;
  const deg = (Math.atan2(dx, -dy) * 180) / Math.PI;
  return Math.round(((deg % 360) + 360) % 360);
}

/** Structured gradient description (contract: { angle, stops[] }). */
export function formatGradient(paint: GradientPaint, settings: Settings, size?: PaintSize) {
  // The paint's own opacity multiplies every stop, exactly as it does for SOLID paints.
  const paintOpacity = paint.opacity ?? 1;
  const stops = (paint.gradientStops ?? []).map((stop) => ({
    pos: Number(stop.position.toFixed(2)),
    color: formatPaintColor(stop.color, paintOpacity, settings)
  }));
  return { angle: gradientAngle(paint, size), stops };
}

function gradientCss(paint: GradientPaint, settings: Settings, size?: PaintSize): string {
  const { angle, stops } = formatGradient(paint, settings, size);
  if (stops.length === 0) return paint.type;
  const parts = stops.map((stop) => `${stop.color} ${formatNumber(stop.pos * 100, 0)}%`);
  if (paint.type === "GRADIENT_LINEAR") {
    return `linear-gradient(${angle}deg, ${parts.join(", ")})`;
  }
  if (paint.type === "GRADIENT_RADIAL" || paint.type === "GRADIENT_DIAMOND") {
    return `radial-gradient(${parts.join(", ")})`;
  }
  return `conic-gradient(from ${angle}deg, ${parts.join(", ")})`;
}

export function formatColor(paint: Paint | undefined, settings: Settings, size?: PaintSize): string {
  if (!paint) return "Unknown";
  if (paint.type === "SOLID") {
    return formatPaintColor(paint.color, paint.opacity ?? 1, settings);
  }
  if (
    paint.type === "GRADIENT_LINEAR" ||
    paint.type === "GRADIENT_RADIAL" ||
    paint.type === "GRADIENT_ANGULAR" ||
    paint.type === "GRADIENT_DIAMOND"
  ) {
    return gradientCss(paint, settings, size);
  }
  return paint.type;
}

export function rgbToHsl(r: number, g: number, b: number) {
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  const delta = max - min;

  if (delta !== 0) {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    switch (max) {
      case rNorm:
        h = (gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0);
        break;
      case gNorm:
        h = (bNorm - rNorm) / delta + 2;
        break;
      default:
        h = (rNorm - gNorm) / delta + 4;
        break;
    }
    h *= 60;
  }

  return {
    h,
    s: s * 100,
    l: l * 100
  };
}

export function truncateText(value: string, maxLength: number) {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, Math.max(0, maxLength - 1))}…`;
}

/** A paint plus its index in the node's paint array (needed to pick the matching
 *  entry out of boundVariables.fills / boundVariables.strokes). */
export type ResolvedPaint<T extends Paint = Paint> = {
  paint: T;
  index: number;
};

/** Topmost *visible* paint of any type. Figma stores paints bottom-first, so the
 *  visually dominant paint is the LAST visible one — not the first. Supports
 *  SOLID / GRADIENT_* / IMAGE / PATTERN alike. */
export function resolveTopPaint(
  paints: readonly Paint[] | typeof figma.mixed | null | undefined
): ResolvedPaint | undefined {
  const list = toPaintArray(paints);
  if (!list) return undefined;
  for (let index = list.length - 1; index >= 0; index -= 1) {
    const paint = list[index];
    if (!paint || paint.visible === false) continue;
    return { paint, index };
  }
  return undefined;
}

/** Topmost visible SOLID paint, for the call sites that genuinely need a SolidPaint. */
export function resolveTopSolidPaint(
  paints: readonly Paint[] | typeof figma.mixed | null | undefined
): ResolvedPaint<SolidPaint> | undefined {
  const list = toPaintArray(paints);
  if (!list) return undefined;
  for (let index = list.length - 1; index >= 0; index -= 1) {
    const paint = list[index];
    if (!paint || paint.visible === false || paint.type !== "SOLID") continue;
    return { paint, index };
  }
  return undefined;
}

function toPaintArray(
  paints: readonly Paint[] | typeof figma.mixed | null | undefined
): readonly Paint[] | undefined {
  if (!paints || paints === figma.mixed) return undefined;
  const list = paints as readonly Paint[];
  return Array.isArray(list) ? list : undefined;
}

export function getFirstSolidPaint(paints: readonly Paint[] | typeof figma.mixed | null | undefined) {
  return resolveTopSolidPaint(paints)?.paint;
}

/**
 * For icon instances (small INSTANCE/COMPONENT nodes, typically ≤48px),
 * walk child vectors to find the dominant stroke or fill color.
 * Phosphor-style icons use strokes on VECTOR children; the INSTANCE
 * frame's own `fills` is just a container background, not the icon color.
 * Returns the first visible non-white solid paint found on a child vector,
 * preferring strokes over fills (since icon libraries are stroke-based).
 */
export function extractIconColor(node: SceneNode, maxDepth = 3): SolidPaint | undefined {
  if (!("children" in node)) return undefined;
  // Only scan small nodes that look like icons
  const size = Math.max(node.width, node.height);
  if (size > 48) return undefined;

  let found: SolidPaint | undefined;

  const walk = (n: SceneNode, depth: number) => {
    if (found || depth > maxDepth || !n.visible) return;

    // Check strokes first (Phosphor icons are stroke-based)
    if ("strokes" in n) {
      const strokePaint = getFirstSolidPaint(n.strokes as readonly Paint[] | typeof figma.mixed | null | undefined);
      if (strokePaint && !isWhitePaint(strokePaint)) {
        found = strokePaint;
        return;
      }
    }
    // Then check fills on vector/shape nodes (not frames — those are containers)
    const isShape = n.type === "VECTOR" || n.type === "RECTANGLE" || n.type === "ELLIPSE"
      || n.type === "LINE" || n.type === "POLYGON" || n.type === "STAR"
      || n.type === "BOOLEAN_OPERATION";
    if (isShape && "fills" in n) {
      const fillPaint = getFirstSolidPaint(n.fills as readonly Paint[] | typeof figma.mixed | null | undefined);
      if (fillPaint && !isWhitePaint(fillPaint)) {
        found = fillPaint;
        return;
      }
    }

    if ("children" in n) {
      for (const child of (n as FrameNode).children) {
        walk(child, depth + 1);
        if (found) return;
      }
    }
  };

  for (const child of (node as FrameNode).children) {
    walk(child, 0);
    if (found) return found;
  }
  return found;
}

function isWhitePaint(paint: SolidPaint): boolean {
  const { r, g, b } = paint.color;
  return r > 0.95 && g > 0.95 && b > 0.95;
}
