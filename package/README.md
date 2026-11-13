# Handicon

Soft, rounded icons for React. 56 icons on a 24px grid. Size, stroke and color are props, and icons you don't import are left out of your bundle.

```bash
npm install handicon
```

```tsx
import { Search, Bell } from "handicon";

export function Toolbar() {
  return (
    <div>
      <Search size={20} />
      <Bell size={20} strokeWidth={2} color="#2b45f5" />
    </div>
  );
}
```

Every icon is also exported with an `Icon` suffix (`SearchIcon`, `ImageIcon`) if a short name clashes with something in your code, such as the global `Image`.

## Props

| Prop          | Default          | Description                                           |
| ------------- | ---------------- | ----------------------------------------------------- |
| `size`        | `24`             | Width and height in pixels.                           |
| `color`       | `currentColor`   | Any CSS color.                                        |
| `strokeWidth` | `1.75`           | Line weight on the 24px grid.                         |
| anything else |                  | Passed to the `<svg>` element (`className`, `onClick`, `aria-label`, ...). |

Icons are decorative by default and get `aria-hidden="true"`. Pass `aria-label` (or `role`) to make one announce itself.

## Next.js and server components

Icons have no state, so they work in server components without a `"use client"` line.

## Plain SVG files

Each icon also ships as a standalone file:

```
node_modules/handicon/svg/heart.svg
```

The files use `currentColor`, so set `color` in CSS to recolor them.

## Icons

message, code, analytics, wallet, image, video, zap, settings, search, bell, calendar, mail, folder, file-text, cloud-upload, cloud-download, link, user, users, lock, shield-check, trash, star, heart, map-pin, home, grid, toggle-on, toggle-off, refresh, share, download, plus-circle, minus-circle, check-circle, x-circle, arrow-left-circle, arrow-right-circle, arrow-up-circle, arrow-down-circle, crop, scan, chevron-down, chevron-up, chevron-left, chevron-right, menu, apps, brush, pencil, wand, box, layers, pie-chart, trending-up, bar-chart.

Component names are PascalCase: `file-text` becomes `FileText`.

## License

MIT
