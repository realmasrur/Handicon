# Handicon

An icon library you install from npm, plus the Next.js website that shows it off.

```
icons/source.mjs        every icon, drawn on a 24x24 grid (edit here)
scripts/build-icons.mjs generates the npm package and the website data
package/                the publishable npm package ("handicon")
src/                    the Next.js website (App Router)
```

## Run the website

```bash
npm install
npm run dev
```

`npm run dev` and `npm run build` regenerate the package and the site data first, so edits to `icons/source.mjs` show up right away.

## Add or change an icon

1. Open `icons/source.mjs` and add a line to the `defs` list: name, category, search tags and the SVG shapes.
2. Draw on a 24x24 grid with `<path>`, `<circle>` and `<rect>` only. Stroke, caps and joins are set for you (1.75 wide, round).
3. Run `npm run icons`. This rewrites `package/dist`, `package/svg` and `src/data/icons.json`.

## Test the package

```bash
npm test
```

Builds the package and checks every icon in the ESM build, the CommonJS build, the types and the raw SVG files.

## Publish to npm

Step-by-step guide, written for Termux on a phone or any computer: [PUBLISHING.md](./PUBLISHING.md). It covers creating an npm account, checking the name, logging in, publishing, releasing updates and putting the website online.

Short version:

```bash
npm view handicon      # 404 means the name is free
npm login
npm run publish:pkg
```

Changes between versions are listed in [CHANGELOG.md](./CHANGELOG.md).

## Design notes

- Palette: paper white, pencil grey, ink, and one ballpoint blue.
- Type: Hanken Grotesk for text, JetBrains Mono for code, Caveat for the hand-lettered notes on the hero grid.
- The hero shows an icon on its real 24px construction grid and draws itself in when you pick one. That is the only decorative motion on the page.
