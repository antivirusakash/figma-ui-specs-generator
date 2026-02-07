import { build, context } from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { spawnSync, spawn } from "node:child_process";

const args = process.argv.slice(2);
const watch = args.includes("--watch");

const root = path.resolve(process.cwd());
const outdir = path.join(root, "dist");

if (!fs.existsSync(outdir)) {
  fs.mkdirSync(outdir, { recursive: true });
}

const codeOptions = {
  entryPoints: [path.join(root, "src", "code.ts")],
  bundle: true,
  format: "iife",
  target: "es2017",
  outfile: path.join(outdir, "code.js"),
  sourcemap: watch ? "inline" : false,
  minify: !watch,
  logLevel: "info"
};

const uiOptions = {
  entryPoints: [path.join(root, "src", "ui.tsx")],
  bundle: true,
  format: "iife",
  target: "es2017",
  outfile: path.join(outdir, "ui.js"),
  sourcemap: watch ? "inline" : false,
  minify: !watch,
  logLevel: "info"
};

function copyUi() {
  const htmlPath = path.join(root, "src", "ui.html");
  const cssPath = path.join(outdir, "ui.css");
  const uiPath = path.join(outdir, "ui.js");
  const html = fs.readFileSync(htmlPath, "utf8");
  const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, "utf8") : "";
  const ui = fs.existsSync(uiPath) ? fs.readFileSync(uiPath, "utf8") : "";
  const inlined = html
    .replace("<!-- INLINE_CSS -->", () => `<style>${css}</style>`)
    .replace("<!-- INLINE_UI -->", () => `<script>${ui}</script>`);
  fs.writeFileSync(path.join(outdir, "ui.html"), inlined);
}

function buildCss() {
  const result = spawnSync(
    path.join(root, "node_modules", ".bin", "tailwindcss"),
    ["-i", path.join(root, "src", "ui.css"), "-o", path.join(outdir, "ui.css"), watch ? "--watch" : "--minify"],
    { stdio: "inherit" }
  );
  if (result.status !== 0) {
    throw new Error("tailwindcss build failed");
  }
}

function startCssWatch() {
  spawn(
    path.join(root, "node_modules", ".bin", "tailwindcss"),
    ["-i", path.join(root, "src", "ui.css"), "-o", path.join(outdir, "ui.css"), "--watch"],
    { stdio: "inherit" }
  );
}

if (watch) {
  const codeCtx = await context(codeOptions);
  const uiCtx = await context(uiOptions);
  await Promise.all([codeCtx.watch(), uiCtx.watch()]);
  buildCss();
  copyUi();
  startCssWatch();
  const uiWatcher = fs.watch(outdir, (eventType, filename) => {
    if (!filename) return;
    if (filename === "ui.css" || filename === "ui.js") {
      try {
        copyUi();
      } catch (error) {
        console.error("Failed to inline UI:", error);
      }
    }
  });
  console.log("watching for changes...");
  process.on("SIGINT", () => {
    uiWatcher.close();
    process.exit(0);
  });
} else {
  await Promise.all([build(codeOptions), build(uiOptions)]);
  buildCss();
  copyUi();
}
