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

export function formatColor(paint: Paint | undefined, settings: Settings): string {
  if (!paint) return "Unknown";
  if (paint.type === "SOLID") {
    const rgb = paint.color;
    const opacity = paint.opacity ?? 1;
    const r = Math.round(rgb.r * 255);
    const g = Math.round(rgb.g * 255);
    const b = Math.round(rgb.b * 255);
    if (settings.colorFormat === "hsla" || opacity < 1) {
      const hsl = rgbToHsl(r, g, b);
      return `hsla(${formatNumber(hsl.h, 0)}, ${formatNumber(hsl.s, 0)}%, ${formatNumber(
        hsl.l,
        0
      )}%, ${formatNumber(opacity, 2)})`;
    }
    return `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)
      .toUpperCase()}`;
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

export function getFirstSolidPaint(paints: readonly Paint[] | typeof figma.mixed | null | undefined) {
  if (!paints || paints === figma.mixed) return undefined;
  return paints.find((paint) => paint.type === "SOLID") as SolidPaint | undefined;
}
