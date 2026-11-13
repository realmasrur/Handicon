"use client";

import { useEffect, useRef } from "react";
import { toJsx, toSvg, type IconData, type IconOptions } from "@/lib/icons";
import { SvgIcon } from "./SvgIcon";
import { useCopy } from "./useCopy";

function download(name: string, svg: string) {
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `${name}.svg`;
  link.click();
  URL.revokeObjectURL(url);
}

export function IconDetail({
  icon,
  options,
  onClose,
}: {
  icon: IconData;
  options: IconOptions;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { copied, copy } = useCopy();

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

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
          <SvgIcon icon={icon} size={96} strokeWidth={options.strokeWidth} color={options.color || "currentColor"} />
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
