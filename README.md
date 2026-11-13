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

## Publish to npm

```bash
npm run pack:check     # lists what would be published
npm run publish:pkg    # runs `npm publish ./package`
```

Before the first publish, check that the name `handicon` is free on npm (`npm view handicon`). If it is taken, change `name` in `package/package.json` and the install command shown on the website (`src/components/InstallCommand.tsx`, `src/app/page.tsx`, `src/components/IconDetail.tsx`, `src/lib/icons.ts`). A scoped name such as `@yourname/handicon` also works.

## Design notes

- Palette: paper white, pencil grey, ink, and one ballpoint blue.
- Type: Hanken Grotesk for text, JetBrains Mono for code, Caveat for the hand-lettered notes on the hero grid.
- The hero shows an icon on its real 24px construction grid and draws itself in when you pick one. That is the only decorative motion on the page.
