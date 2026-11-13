"use client";

import { useState } from "react";
import { useCopy } from "./useCopy";

const MANAGERS = [
  { id: "npm", command: "npm install handicon" },
  { id: "pnpm", command: "pnpm add handicon" },
  { id: "yarn", command: "yarn add handicon" },
  { id: "bun", command: "bun add handicon" },
] as const;

export function InstallCommand() {
  const [active, setActive] = useState<(typeof MANAGERS)[number]["id"]>("npm");
  const { copied, copy } = useCopy();
  const current = MANAGERS.find((m) => m.id === active)!;

  return (
    <div className="install">
      <div className="install__tabs" role="tablist" aria-label="Package manager">
        {MANAGERS.map((m) => (
          <button
            key={m.id}
            type="button"
            role="tab"
            id={`install-tab-${m.id}`}
            aria-selected={m.id === active}
            aria-controls="install-panel"
            className="install__tab"
            onClick={() => setActive(m.id)}
          >
            {m.id}
          </button>
        ))}
      </div>
      <div className="install__row" role="tabpanel" id="install-panel" aria-labelledby={`install-tab-${active}`}>
        <code className="install__command">
          <span className="install__prompt" aria-hidden="true">$</span>
          {current.command}
        </code>
        <button type="button" className="button button--small" onClick={() => copy("install", current.command)}>
          {copied === "install" ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="visually-hidden" role="status" aria-live="polite">
        {copied === "install" ? "Install command copied" : ""}
      </p>
    </div>
  );
}
