// Checks the built package the way a developer would use it.
// Run with: npm test
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { icons } from "../icons/source.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "package/dist");
const require = createRequire(import.meta.url);

const esm = await import(join(dist, "index.js"));
const cjs = require(join(dist, "index.cjs"));
const dts = readFileSync(join(dist, "index.d.ts"), "utf8");

const failures = [];
const check = (ok, message) => {
  if (!ok) failures.push(message);
};

const pascal = (name) => name.split("-").map((p) => p[0].toUpperCase() + p.slice(1)).join("");

check(esm.iconNames.length === icons.length, `iconNames has ${esm.iconNames.length}, expected ${icons.length}`);
check(cjs.iconNames.length === icons.length, "CommonJS build has a different icon count");

for (const icon of icons) {
  const Name = pascal(icon.name);
  for (const [label, mod] of [["esm", esm], ["cjs", cjs]]) {
    check(mod[Name] && mod[`${Name}Icon`], `${label}: missing export ${Name} or ${Name}Icon`);
  }
  check(dts.includes(`export declare const ${Name}:`), `types: missing ${Name}`);
  check(existsSync(join(root, "package/svg", `${icon.name}.svg`)), `svg: missing ${icon.name}.svg`);

  const html = renderToStaticMarkup(createElement(esm[Name], { size: 40, color: "#ff0000", strokeWidth: 2, className: "x" }));
  check(html.startsWith("<svg"), `${Name}: does not render an <svg>`);
  check(html.includes('width="40"') && html.includes('height="40"'), `${Name}: size prop not applied`);
  check(html.includes('stroke="#ff0000"') && html.includes('stroke-width="2"'), `${Name}: color or strokeWidth not applied`);
  check(html.includes('class="handicon handicon-' + icon.name + ' x"'), `${Name}: className not applied`);
  check(html.includes('aria-hidden="true"'), `${Name}: should be hidden from screen readers by default`);
  check(/<(path|circle|rect)\b/.test(html), `${Name}: renders no shapes`);
}

const labelled = renderToStaticMarkup(createElement(esm.Bell, { "aria-label": "Notifications" }));
check(!labelled.includes("aria-hidden"), "Bell: aria-hidden should be removed when aria-label is set");

const svgFiles = readdirSync(join(root, "package/svg")).filter((f) => f.endsWith(".svg"));
check(svgFiles.length === icons.length, `svg folder has ${svgFiles.length} files, expected ${icons.length}`);

if (failures.length) {
  console.error(`\n${failures.length} problem(s):\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log(`OK: ${icons.length} icons pass in ESM, CommonJS, types and raw SVG.`);
