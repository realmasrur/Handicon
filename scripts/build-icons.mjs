// Generates everything that depends on icons/source.mjs:
//   package/dist/index.js   ESM build of the npm package
//   package/dist/index.cjs  CommonJS build
//   package/dist/index.d.ts TypeScript types
//   package/svg/*.svg       raw SVG files
//   src/data/icons.json     data for the website
import { mkdirSync, writeFileSync, rmSync, readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { icons, categories } from "../icons/source.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pkgDir = join(root, "package");
const dist = join(pkgDir, "dist");
const svgDir = join(pkgDir, "svg");

const DEFAULT_STROKE = 1.75;

const pascal = (name) =>
  name.split("-").map((p) => p[0].toUpperCase() + p.slice(1)).join("");

const camel = (attr) => attr.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

// Body strings contain only self-closing tags, so a small parser is enough.
function parseBody(body) {
  const nodes = [];
  const tagRe = /<(\w+)([^>]*?)\/>/g;
  let m;
  while ((m = tagRe.exec(body))) {
    const props = {};
    const attrRe = /([\w-]+)="([^"]*)"/g;
    let a;
    while ((a = attrRe.exec(m[2]))) props[camel(a[1])] = a[2];
    nodes.push({ tag: m[1], props });
  }
  if (!nodes.length) throw new Error(`No nodes parsed from body: ${body}`);
  return nodes;
}

const names = new Set();
for (const icon of icons) {
  if (names.has(icon.name)) throw new Error(`Duplicate icon name: ${icon.name}`);
  names.add(icon.name);
  if (!categories.includes(icon.category)) {
    throw new Error(`Unknown category "${icon.category}" on ${icon.name}`);
  }
  icon.component = pascal(icon.name);
  icon.nodes = parseBody(icon.body);
}

rmSync(dist, { recursive: true, force: true });
rmSync(svgDir, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
mkdirSync(svgDir, { recursive: true });
mkdirSync(join(root, "src/data"), { recursive: true });

// ---------- runtime shared by both builds ----------
const runtime = `
const defaults = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function createIcon(name, displayName, nodes) {
  const Icon = forwardRef(function Icon(
    { size = 24, color = "currentColor", strokeWidth = ${DEFAULT_STROKE}, className, children, ...rest },
    ref
  ) {
    return createElement(
      "svg",
      {
        ref,
        ...defaults,
        width: size,
        height: size,
        stroke: color,
        strokeWidth,
        className: ["handicon", "handicon-" + name, className].filter(Boolean).join(" "),
        "aria-hidden": rest["aria-label"] || rest["aria-labelledby"] || rest.role ? undefined : true,
        ...rest,
      },
      ...nodes.map(([tag, props], i) => createElement(tag, { key: i, ...props })),
      children
    );
  });
  Icon.displayName = displayName;
  return Icon;
}
`;

const nodeLiteral = (nodes) =>
  JSON.stringify(nodes.map((n) => [n.tag, n.props]));

const declarations = icons
  .map(
    (i) =>
      `const ${i.component} = /*#__PURE__*/ createIcon(${JSON.stringify(i.name)}, ${JSON.stringify(i.component)}, ${nodeLiteral(i.nodes)});`
  )
  .join("\n");

const names_ = JSON.stringify(icons.map((i) => i.name));

const esm = `import { createElement, forwardRef } from "react";
${runtime}
${declarations}

export const iconNames = ${names_};

export {
${icons.map((i) => `  ${i.component},\n  ${i.component} as ${i.component}Icon,`).join("\n")}
};
`;

const cjs = `"use strict";
const { createElement, forwardRef } = require("react");
${runtime}
${declarations}

module.exports = {
  iconNames: ${names_},
${icons.map((i) => `  ${i.component},\n  ${i.component}Icon: ${i.component},`).join("\n")}
};
`;

const dts = `import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export interface HandiconProps extends Omit<SVGProps<SVGSVGElement>, "ref"> {
  /** Width and height in px. Default: 24 */
  size?: number | string;
  /** Stroke color. Default: currentColor */
  color?: string;
  /** Stroke width on the 24px grid. Default: ${DEFAULT_STROKE} */
  strokeWidth?: number | string;
}

export type HandiconComponent = ForwardRefExoticComponent<
  HandiconProps & RefAttributes<SVGSVGElement>
>;

export type IconName =
${icons.map((i) => `  | ${JSON.stringify(i.name)}`).join("\n")};

export declare const iconNames: readonly IconName[];

${icons
  .map((i) => `export declare const ${i.component}: HandiconComponent;\nexport declare const ${i.component}Icon: HandiconComponent;`)
  .join("\n")}
`;

writeFileSync(join(dist, "index.js"), esm);
writeFileSync(join(dist, "index.cjs"), cjs);
writeFileSync(join(dist, "index.d.ts"), dts);

// ---------- raw svg files ----------
const svgString = (icon, { stroke = "currentColor", strokeWidth = DEFAULT_STROKE, size = 24 } = {}) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round">\n  ${icon.nodes.length ? icon.body.replace(/\/><(?=[a-z])/g, "/>\n  <") : ""}\n</svg>\n`;

for (const icon of icons) writeFileSync(join(svgDir, `${icon.name}.svg`), svgString(icon));

// ---------- website data ----------
writeFileSync(
  join(root, "src/data/icons.json"),
  JSON.stringify(
    {
      defaultStrokeWidth: DEFAULT_STROKE,
      categories,
      icons: icons.map(({ name, component, category, tags, body, nodes }) => ({
        name, component, category, tags, body, nodes,
      })),
    },
    null,
    1
  )
);

// ---------- keep the package README in step with the icon list ----------
const readmePath = join(pkgDir, "README.md");
if (existsSync(readmePath)) {
  const list = categories
    .map((c) => {
      const names = icons.filter((i) => i.category === c).map((i) => "`" + i.name + "`");
      return `- **${c}** (${names.length}): ${names.join(", ")}`;
    })
    .join("\n");
  let readme = readFileSync(readmePath, "utf8");
  readme = readme.replace(/<!-- icons:start -->[\s\S]*<!-- icons:end -->/, `<!-- icons:start -->\n${list}\n<!-- icons:end -->`);
  readme = readme.replace(/\d+ icons on a 24px grid/, `${icons.length} icons on a 24px grid`);
  writeFileSync(readmePath, readme);
}

console.log(`Built ${icons.length} icons -> package/dist, package/svg, src/data/icons.json`);
