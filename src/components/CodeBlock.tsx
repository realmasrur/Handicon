"use client";

import { useCopy } from "./useCopy";

export function CodeBlock({ title, code }: { title: string; code: string }) {
  const { copied, copy } = useCopy();
  return (
    <figure className="code">
      <figcaption className="code__bar">
        <span>{title}</span>
        <button type="button" className="button button--small" onClick={() => copy("code", code)}>
          {copied === "code" ? "Copied" : "Copy"}
        </button>
      </figcaption>
      <pre className="code__pre" tabIndex={0}>
        <code>{code}</code>
      </pre>
    </figure>
  );
}
