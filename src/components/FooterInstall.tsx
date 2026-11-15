"use client";

import { useCopy } from "./useCopy";

const COMMAND = "npm install handicon";

export function FooterInstall() {
  const { copied, copy } = useCopy();
  return (
    <div className="footer__install">
      <code>
        <span aria-hidden="true">$</span> {COMMAND}
      </code>
      <button type="button" className="button button--small" onClick={() => copy("install", COMMAND)}>
        {copied === "install" ? "Copied" : "Copy"}
      </button>
      <span className="visually-hidden" role="status" aria-live="polite">
        {copied === "install" ? "Install command copied" : ""}
      </span>
    </div>
  );
}
