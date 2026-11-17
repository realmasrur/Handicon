"use client";

import { useEffect, useState } from "react";

// Launch promotion. It shows until the end of 20 Nov 2026 in Bangladesh time (three days after launch)
// and then removes itself, with no redeploy needed. To run another promotion, change this date and the text.
const SHOW_UNTIL = new Date("2026-11-20T23:59:59+06:00").getTime();
const DISMISS_KEY = "handicon-promo-dismissed";

export function PromoBar() {
  // Visible on the first render so people inside the three days never see the page jump.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      /* storage can be blocked; the bar then just shows until it expires */
    }
    if (Date.now() > SHOW_UNTIL || dismissed) setVisible(false);
  }, []);

  if (!visible) return null;

  function dismiss() {
    setVisible(false);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* nothing more to do */
    }
  }

  return (
    <div className="promo" role="region" aria-label="Announcement">
      <div className="promo__inner">
        <p>
          Handicon is live, use it <span aria-hidden="true">🔥</span>
          <span className="visually-hidden">.</span>{" "}
          <a href="#icons">Browse the icons</a>
        </p>
        <button type="button" className="promo__close" onClick={dismiss} aria-label="Dismiss announcement">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
