# Handicon

Soft, rounded icons for React. 87 icons on a 24px grid, including a set for AI products. Size, stroke and color are props, and icons you don't import stay out of your bundle.

```bash
npm install handicon
```

## Quick start

```tsx
import { Search, Bell, Sparkles } from "handicon";

export function Toolbar() {
  return (
    <div>
      <Search size={20} />
      <Bell size={20} strokeWidth={2} color="#2b45f5" />
      <Sparkles className="text-blue-600" />
    </div>
  );
}
```

Component names are PascalCase: `file-text` becomes `FileText`. Every icon is also exported with an `Icon` suffix (`SearchIcon`, `ImageIcon`) for when a short name clashes with something in your code, such as the global `Image`.

## Props

| Prop          | Default        | Description                                                                |
| ------------- | -------------- | -------------------------------------------------------------------------- |
| `size`        | `24`           | Width and height in pixels.                                                |
| `color`       | `currentColor` | Any CSS color. By default the icon takes the text color around it.         |
| `strokeWidth` | `1.75`         | Line weight on the 24px grid.                                              |
| anything else |                | Passed to the `<svg>` element (`className`, `onClick`, `style`, `ref`, ...). |

## Accessibility

Icons are decorative by default and get `aria-hidden="true"`. To make one announce itself, give it a label:

```tsx
<Bell aria-label="Notifications" />
```

For an icon-only button, label the button instead and leave the icon decorative:

```tsx
<button aria-label="Copy to clipboard"><Copy /></button>
```

## TypeScript

Types are included.

```ts
import type { HandiconProps, IconName } from "handicon";
import { iconNames } from "handicon";
```

`IconName` is a union of every icon name (`"bell" | "brain" | ...`) and `iconNames` is the same list at runtime. Avoid `import * as Icons from "handicon"` for lookups by name, because it pulls every icon into your bundle. Import the few you need and map them yourself:

```tsx
import { Bell, Brain } from "handicon";

const icons = { bell: Bell, brain: Brain };
```

## Next.js and server components

Icons have no state or effects, so they work in server components without a `"use client"` line.

## Plain SVG files

Each icon also ships as a standalone file, for plain HTML, other frameworks, or design tools:

```
node_modules/handicon/svg/heart.svg
```

The files use `currentColor`, so set `color` in CSS to recolor them when you inline them.

## Icons

<!-- icons:start -->
- **AI** (10): `brain`, `bot`, `sparkles`, `neural-network`, `ai-chip`, `wand-sparkle`, `robot`, `magic-cursor`, `model`, `workflow`
- **Communication** (6): `message`, `bell`, `mail`, `link`, `share`, `send`
- **Files** (5): `folder`, `file-text`, `cloud-upload`, `cloud-download`, `download`
- **Data** (4): `analytics`, `pie-chart`, `trending-up`, `bar-chart`
- **Media** (2): `image`, `video`
- **Account** (7): `wallet`, `settings`, `user`, `users`, `lock`, `shield-check`, `users-group`
- **Developer** (5): `code`, `zap`, `box`, `command`, `keyboard`
- **Interface** (23): `search`, `calendar`, `star`, `heart`, `map-pin`, `home`, `grid`, `toggle-on`, `toggle-off`, `menu`, `apps`, `bookmark`, `help-circle`, `info-circle`, `alert-triangle`, `warning`, `eye`, `eye-off`, `filter`, `sort`, `more-horizontal`, `more-vertical`, `calendar-days`
- **Actions** (10): `trash`, `refresh`, `plus-circle`, `minus-circle`, `check-circle`, `x-circle`, `copy`, `clipboard`, `undo`, `redo`
- **Arrows** (9): `arrow-left-circle`, `arrow-right-circle`, `arrow-up-circle`, `arrow-down-circle`, `chevron-down`, `chevron-up`, `chevron-left`, `chevron-right`, `external-link`
- **Design** (6): `crop`, `scan`, `brush`, `pencil`, `wand`, `layers`
<!-- icons:end -->

## Contributing

Icons are drawn in `icons/source.mjs` in the [repository](https://github.com/realmasrur/Handicon). Open an issue to request one.

## License

MIT
