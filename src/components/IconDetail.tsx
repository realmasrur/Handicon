"use client";

import { useEffect, useRef, useState } from "react";
import { DEFAULT_STROKE, toJsx, toSvg, type IconData } from "@/lib/icons";
import { SvgIcon } from "./SvgIcon";
import { useCopy } from "./useCopy";

const START_SIZE = 48;
const SWATCHES = [
  { label: "Current text color", value: "" },
  { label: "Blue", value: "#2b45f5" },
  { label: "Red", value: "#e5484d" },
  { label: "Green", value: "#12a150" },
  { label: "Amber", value: "#f5a524" },
];

function download(name: string, svg: string) {
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `${name}.svg`;
  link.click();
  URL.revokeObjectURL(url);
}

/** Opens for one icon. Size, stroke and color belong to this icon only and reset when another is opened. */
export function IconDetail({ icon, onClose }: { icon: IconData; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { copied, copy } = useCopy();

  const [size, setSize] = useState(START_SIZE);
  const [strokeWidth, setStrokeWidth] = useState(DEFAULT_STROKE);
  const [color, setColor] = useState("");

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const options = { size, strokeWidth, color };
  const changed = size !== START_SIZE || strokeWidth !== DEFAULT_STROKE || color !== "";
  const svg = toSvg(icon, options);
  const jsx = toJsx(icon, options);
  const importLine = `import { ${icon.component} } from "handicon";`;
  const alsoFoundAs = icon.tags.join(", ");

  return (
    <div className="drawer">
      <div className="drawer__scrim" onClick={onClose} aria-hidden="true" />
      <aside className="drawer__panel" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <header className="drawer__head">
          <div>
            <h3 id="drawer-title" className="drawer__title">{icon.component}</h3>
            <p className="drawer__meta">{icon.category}</p>
          </div>
          <button ref={closeRef} type="button" className="icon-button" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </header>

        <div className="drawer__preview">
          <SvgIcon icon={icon} size={size} strokeWidth={strokeWidth} color={color || "currentColor"} />
        </div>

        <div className="tune">
          <label className="tune__row">
            <span className="tune__label">Size</span>
            <input type="range" min={16} max={112} step={4} value={size} onChange={(e) => setSize(Number(e.target.value))} />
            <output className="tune__value">{size}px</output>
          </label>
          <label className="tune__row">
            <span className="tune__label">Stroke</span>
            <input type="range" min={1} max={3} step={0.25} value={strokeWidth} onChange={(e) => setStrokeWidth(Number(e.target.value))} />
            <output className="tune__value">{strokeWidth}</output>
          </label>
          <div className="tune__row" role="group" aria-label="Color">
            <span className="tune__label">Color</span>
            <div className="swatches">
              {SWATCHES.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  className={`swatch${s.value === "" ? " swatch--default" : ""}`}
                  style={s.value ? { background: s.value } : undefined}
                  aria-label={s.label}
                  aria-pressed={color === s.value}
                  onClick={() => setColor(s.value)}
                />
              ))}
              <input
                type="color"
                className="swatch-input"
                aria-label="Pick a custom color"
                value={color || "#161821"}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            {changed && (
              <button
                type="button"
                className="button button--small tune__reset"
                onClick={() => {
                  setSize(START_SIZE);
                  setStrokeWidth(DEFAULT_STROKE);
                  setColor("");
                }}
              >
                Reset
              </button>
            )}
          </div>
        </div>

        <div className="drawer__actions">
          <button type="button" className="button button--primary" onClick={() => copy("svg", svg)}>
            {copied === "svg" ? "Copied" : "Copy SVG"}
          </button>
          <button type="button" className="button" onClick={() => copy("jsx", jsx)}>
            {copied === "jsx" ? "Copied" : "Copy JSX"}
          </button>
          <button type="button" className="button" onClick={() => download(icon.name, svg)}>
            Download SVG
          </button>
        </div>

        <div className="drawer__section">
          <h4>Import</h4>
          <div className="snippet">
            <code>{importLine}</code>
            <button type="button" className="button button--small" onClick={() => copy("import", importLine)}>
              {copied === "import" ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        <div className="drawer__section">
          <h4>Use</h4>
          <div className="snippet">
            <code>{jsx}</code>
            <button type="button" className="button button--small" onClick={() => copy("use", jsx)}>
              {copied === "use" ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        <div className="drawer__section">
          <h4>Raw file</h4>
          <div className="snippet">
            <code>handicon/svg/{icon.name}.svg</code>
            <button type="button" className="button button--small" onClick={() => copy("path", `handicon/svg/${icon.name}.svg`)}>
              {copied === "path" ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        <p className="drawer__tags">Also found as: {alsoFoundAs}.</p>
        <p className="visually-hidden" role="status" aria-live="polite">
          {copied ? "Copied to clipboard" : ""}
        </p>
      </aside>
    </div>
  );
}
