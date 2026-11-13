import { createElement, type CSSProperties } from "react";
import { DEFAULT_STROKE, type IconData } from "@/lib/icons";

/** The shapes of an icon, without the surrounding <svg>. */
export function IconNodes({ icon, draw = false }: { icon: IconData; draw?: boolean }) {
  return (
    <>
      {icon.nodes.map((node, i) =>
        createElement(node.tag, {
          key: i,
          ...node.props,
          ...(draw
            ? {
                pathLength: 1,
                className: "draw",
                style: { "--i": i } as CSSProperties,
              }
            : {}),
        }),
      )}
    </>
  );
}

type SvgIconProps = {
  icon: IconData;
  size?: number;
  strokeWidth?: number;
  /** Any CSS color. Defaults to the surrounding text color. */
  color?: string;
  className?: string;
};

export function SvgIcon({
  icon,
  size = 24,
  strokeWidth = DEFAULT_STROKE,
  color = "currentColor",
  className,
}: SvgIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <IconNodes icon={icon} />
    </svg>
  );
}
