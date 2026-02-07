import type { Theme } from "./types";

export function getTheme(): Theme {
  return {
    background: "#eef2f6",
    section: "#ffffff",
    sectionBg: "#f5f7fa",
    tableHeaderBg: "#eaeff4",
    tableRowAlt: "#f7f9fb",
    border: "#dce4ee",
    text: "#142033",
    muted: "#5e6d82",
    accent: "#2563eb",
    accentSoft: "#86a9f8",
    overlayBlue: "#3e7bf5",
    overlayGreen: "#2fa874",
    overlayOrange: "#f1893f"
  };
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
