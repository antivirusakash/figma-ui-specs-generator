import { ImageResponse } from "next/og";

export const alt = "Figma Specs - compact Figma specs for Claude Code and OpenAI Codex";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fdfcfc",
          color: "#000",
          padding: "56px",
          fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            borderRadius: "999px",
            border: "1px solid #e7e5e4",
            background: "#fff",
            padding: "10px 18px",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          &gt;_
          <span>Figma Specs</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "980px" }}>
          <div
            style={{
              fontSize: "68px",
              lineHeight: 1.03,
              letterSpacing: "-0.04em",
              fontWeight: 500,
            }}
          >
            Generate compact Figma specs for Claude Code and OpenAI Codex.
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#57534e",
            }}
          >
            Open-source plugin for cleaner handoff, lower token waste, and faster agent builds.
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px", fontSize: "22px", color: "#57534e" }}>
          <div style={{ borderRadius: "999px", border: "1px solid #e7e5e4", padding: "8px 14px" }}>figma-specs.dev</div>
          <div style={{ borderRadius: "999px", border: "1px solid #e7e5e4", padding: "8px 14px" }}>
            github.com/antivirusakash/figma-ui-specs-generator
          </div>
        </div>
      </div>
    ),
    size
  );
}
