import data from "@/data/icons.json";

export type IconNode = {
  tag: "path" | "circle" | "rect";
  props: Record<string, string>;
};

export type IconData = {
  name: string;
  component: string;
  category: string;
  tags: string[];
  body: string;
  nodes: IconNode[];
};

export const icons = data.icons as unknown as IconData[];
export const categories = data.categories as string[];
export const DEFAULT_STROKE = data.defaultStrokeWidth as number;
export const DEFAULT_SIZE = 24;

export function getIcon(name: string): IconData | undefined {
  return icons.find((i) => i.name === name);
}

export type IconOptions = {
  size: number;
  strokeWidth: number;
  /** Empty string means currentColor. */
  color: string;
};

export function toSvg(icon: IconData, o: IconOptions): string {
  const stroke = o.color || "currentColor";
  const body = icon.body.replace(/\/></g, "/>\n  <");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${o.size}" height="${o.size}" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="${o.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">\n  ${body}\n</svg>\n`;
}

export function toJsx(icon: IconData, o: IconOptions): string {
  const props: string[] = [];
  if (o.size !== DEFAULT_SIZE) props.push(`size={${o.size}}`);
  if (o.strokeWidth !== DEFAULT_STROKE) props.push(`strokeWidth={${o.strokeWidth}}`);
  if (o.color) props.push(`color="${o.color}"`);
  return `<${icon.component}${props.length ? " " + props.join(" ") : ""} />`;
}
