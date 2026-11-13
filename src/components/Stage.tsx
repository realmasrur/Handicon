"use client";

import { useState } from "react";
import { DEFAULT_STROKE, getIcon, type IconData } from "@/lib/icons";
import { IconNodes, SvgIcon } from "./SvgIcon";

const FEATURED = ["pencil", "bell", "cloud-upload", "settings", "heart", "wand", "calendar", "shield-check"];
const featured = FEATURED.map((n) => getIcon(n)).filter((i): i is IconData => Boolean(i));

/** The 24 x 24 construction grid every Handicon icon is drawn on. */
function Grid() {
  const lines = [];
  for (let i = 1; i < 24; i++) {
    lines.push(<path key={`v${i}`} d={`M${i} 0V24`} />);
    lines.push(<path key={`h${i}`} d={`M0 ${i}H24`} />);
  }
  return (
    <g className="stage__grid" fill="none" strokeWidth="0.05">
      {lines}
      <path className="stage__axis" d="M12 0V24M0 12H24" />
      <circle className="stage__key" cx="12" cy="12" r="10" />
      <rect className="stage__key" x="2" y="2" width="20" height="20" rx="1.5" />
    </g>
  );
}

export function Stage() {
  const [name, setName] = useState(featured[0]?.name ?? "pencil");
  const [stroke, setStroke] = useState(DEFAULT_STROKE);
  const icon = getIcon(name) ?? featured[0];

  return (
    <figure className="stage">
      <div className="stage__canvas">
        <svg
          className="stage__svg"
          viewBox="0 0 24 24"
          role="img"
          aria-label={`The ${icon.name} icon on its 24 by 24 grid`}
        >
          <Grid />
          <g
            key={icon.name}
            className="stage__icon"
            fill="none"
            stroke="currentColor"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <IconNodes icon={icon} draw />
          </g>
        </svg>
        <span className="stage__note stage__note--grid">24px grid, 2px padding</span>
        <span className="stage__note stage__note--stroke">stroke {stroke}</span>
      </div>

      <div className="stage__controls">
        <label className="stage__slider">
          <span>Stroke</span>
          <input
            type="range"
            min={1}
            max={3}
            step={0.25}
            value={stroke}
            onChange={(e) => setStroke(Number(e.target.value))}
          />
        </label>
        <div className="stage__picker" role="group" aria-label="Preview icon">
          {featured.map((f) => (
            <button
              key={f.name}
              type="button"
              className="stage__chip"
              aria-pressed={f.name === icon.name}
              aria-label={f.name}
              title={f.name}
              onClick={() => setName(f.name)}
            >
              <SvgIcon icon={f} size={20} />
            </button>
          ))}
        </div>
      </div>
    </figure>
  );
}
