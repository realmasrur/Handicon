"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { categories, icons, type IconData } from "@/lib/icons";
import { IconDetail } from "./IconDetail";
import { SvgIcon } from "./SvgIcon";

function haystack(icon: IconData) {
  return `${icon.name.replace(/-/g, " ")} ${icon.category} ${icon.tags.join(" ")}`.toLowerCase();
}

export function Explorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<IconData | null>(null);

  const searchRef = useRef<HTMLInputElement>(null);
  const trigger = useRef<HTMLElement | null>(null);

  const filtered = useMemo(() => {
    const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return icons.filter(
      (icon) =>
        (category === "All" || icon.category === category) &&
        tokens.every((t) => haystack(icon).includes(t)),
    );
  }, [query, category]);

  // Press "/" anywhere to jump to the search field.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing = target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName);
      if (e.key === "/" && !typing && !selected) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const close = useCallback(() => {
    setSelected(null);
    trigger.current?.focus();
  }, []);

  return (
    <section className="explorer" id="icons" aria-labelledby="icons-title">
      <div className="container">
        <div className="section-head">
          <h2 id="icons-title">All icons</h2>
          <p className="section-head__note" role="status" aria-live="polite">
            {filtered.length === icons.length
              ? `${icons.length} icons`
              : `${filtered.length} of ${icons.length} icons`}
          </p>
        </div>

        <div className="toolbar">
          <label className="search">
            <span className="visually-hidden">Search icons</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m20 20-4.9-4.9" />
            </svg>
            <input
              ref={searchRef}
              type="search"
              placeholder="Search by name or idea, like “alert” or “save”"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <kbd className="search__key" aria-hidden="true">/</kbd>
          </label>

          <div className="chips" role="group" aria-label="Category">
            {["All", ...categories].map((c) => (
              <button key={c} type="button" className="chip" aria-pressed={category === c} onClick={() => setCategory(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <ul className="grid">
            {filtered.map((icon) => (
              <li key={icon.name}>
                <button
                  type="button"
                  className="cell"
                  aria-pressed={selected?.name === icon.name}
                  onClick={(e) => {
                    trigger.current = e.currentTarget;
                    setSelected(icon);
                  }}
                >
                  <span className="cell__icon">
                    <SvgIcon icon={icon} size={28} />
                  </span>
                  <span className="cell__name">{icon.name}</span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty">
            <p>
              No icons match “{query}”
              {category !== "All" ? ` in ${category}` : ""}. Try a broader word like “arrow”, or clear the filters.
            </p>
            <button
              type="button"
              className="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {selected && <IconDetail key={selected.name} icon={selected} onClose={close} />}
    </section>
  );
}
