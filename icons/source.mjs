// Handicon: source of truth for every icon.
// Each icon is drawn on a 24x24 grid, stroke only, round caps and joins.
// Bodies use only self-closing <path>, <circle> and <rect> tags.

const r2 = (n) => Math.round(n * 100) / 100;
const polar = (cx, cy, r, deg) => {
  const a = (deg * Math.PI) / 180;
  return [r2(cx + r * Math.cos(a)), r2(cy + r * Math.sin(a))];
};

const dot = (cx, cy, r = 1) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="currentColor" stroke="none"/>`;

const ring = '<circle cx="12" cy="12" r="9"/>';

const gearPath = () => {
  const pts = [];
  for (let k = 0; k < 8; k++) {
    const a = k * 45 - 90;
    for (const [da, r] of [[-17, 7.3], [-10, 9.3], [10, 9.3], [17, 7.3]]) {
      pts.push(polar(12, 12, r, a + da).join(" "));
    }
  }
  return `M${pts.join("L")}z`;
};

const starPath = () => {
  const pts = [];
  for (let k = 0; k < 10; k++) {
    const r = k % 2 === 0 ? 9.2 : 4.2;
    pts.push(polar(12, 12.9, r, -90 + k * 36).join(" "));
  }
  return `M${pts.join("L")}z`;
};

const defs = [
  // Row 1
  ["message", "Communication", ["chat", "comment", "bubble", "talk"],
    `<path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-8l-4 3.5V17H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>${dot(8, 10.5)}${dot(12, 10.5)}${dot(16, 10.5)}`],
  ["code", "Developer", ["developer", "programming", "brackets", "html"],
    `<path d="m8 8-4 4 4 4"/><path d="m16 8 4 4-4 4"/><path d="m13.5 5-3 14"/>`],
  ["analytics", "Data", ["chart", "bars", "stats", "report", "graph"],
    `<path d="M3 20.5h18"/><rect x="5" y="15" width="3.5" height="5.5" rx="1"/><rect x="10.25" y="10" width="3.5" height="10.5" rx="1"/><rect x="15.5" y="4" width="3.5" height="16.5" rx="1"/>`],
  ["wallet", "Account", ["money", "payment", "finance", "billing"],
    `<rect x="3" y="6.5" width="18" height="13.5" rx="2.5"/><path d="m6 6.5 9-2.7a1.3 1.3 0 0 1 1.6.9l.4 1.8"/><path d="M21 11h-3.2a2.25 2.25 0 0 0 0 4.5H21"/>`],
  ["image", "Media", ["photo", "picture", "gallery", "landscape"],
    `<rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="15.5" cy="9.5" r="1.6"/><path d="m3.5 17 5-5 4 4 2.5-2.5 5.5 5.5"/>`],
  ["video", "Media", ["play", "movie", "film", "youtube", "player"],
    `<rect x="3" y="5" width="18" height="14" rx="4"/><path d="M10.5 9.5v5l4-2.5z"/>`],
  ["zap", "Developer", ["bolt", "lightning", "power", "fast", "energy"],
    `<path d="M13 2.5 5 13.5h6l-1 8 8-11h-6z"/>`],
  ["settings", "Account", ["gear", "cog", "preferences", "options", "config"],
    `<path d="${gearPath()}"/><circle cx="12" cy="12" r="3"/>`],

  // Row 2
  ["search", "Interface", ["find", "magnifier", "lookup", "zoom"],
    `<circle cx="10.5" cy="10.5" r="6.5"/><path d="m20 20-4.9-4.9"/>`],
  ["bell", "Communication", ["notification", "alert", "alarm", "ring"],
    `<path d="M6 17v-6a6 6 0 0 1 12 0v6l1.5 1.5h-15z"/><path d="M10 21a2 2 0 0 0 4 0"/><path d="m19.2 4.6 1.6-1.1M19.8 7.5h2"/>`],
  ["calendar", "Interface", ["date", "schedule", "event", "planner"],
    `<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/>${dot(8, 14, 0.9)}${dot(12, 14, 0.9)}${dot(16, 14, 0.9)}${dot(8, 17.4, 0.9)}${dot(12, 17.4, 0.9)}${dot(16, 17.4, 0.9)}`],
  ["mail", "Communication", ["email", "envelope", "inbox", "message"],
    `<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m3.5 7 8.5 6.5L20.5 7"/>`],
  ["folder", "Files", ["directory", "files", "storage"],
    `<path d="M3 7.5a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`],
  ["file-text", "Files", ["document", "page", "doc", "text", "paper"],
    `<path d="M14 3H7.5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7.5z"/><path d="M14 3v3.5a1 1 0 0 0 1 1h3.5"/><path d="M9 12.5h6M9 16h6"/>`],
  ["cloud-upload", "Files", ["upload", "sync", "backup", "storage"],
    `<path d="M7.5 18.5a4 4 0 0 1-.5-7.97 5.5 5.5 0 0 1 10.6-1.1A4.5 4.5 0 0 1 17 18.5z"/><path d="M12 16v-5.5m0 0-2.2 2.2M12 10.5l2.2 2.2"/>`],
  ["cloud-download", "Files", ["download", "sync", "save", "storage"],
    `<path d="M7.5 18.5a4 4 0 0 1-.5-7.97 5.5 5.5 0 0 1 10.6-1.1A4.5 4.5 0 0 1 17 18.5z"/><path d="M12 10.5V16m0 0-2.2-2.2M12 16l2.2-2.2"/>`],

  // Row 3
  ["link", "Communication", ["chain", "url", "connect", "attach"],
    `<path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1"/><path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1"/>`],
  ["user", "Account", ["person", "profile", "avatar", "account"],
    `<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5z"/>`],
  ["users", "Account", ["people", "team", "group", "community"],
    `<circle cx="8.5" cy="8" r="3"/><path d="M2.5 19.5c0-3.3 2.6-5.5 6-5.5s6 2.2 6 5.5z"/><circle cx="16.5" cy="8" r="3"/><path d="M15.8 14.2c3 .2 5.7 2 5.7 5.3"/>`],
  ["lock", "Account", ["secure", "password", "private", "padlock"],
    `<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>${dot(12, 14.8, 1.2)}<path d="M12 15.5v2"/>`],
  ["shield-check", "Account", ["security", "protect", "verified", "safe"],
    `<path d="M12 3 4.5 5.8v5.7c0 4.6 3.1 8 7.5 9.5 4.4-1.5 7.5-4.9 7.5-9.5V5.8z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/>`],
  ["trash", "Actions", ["delete", "remove", "bin", "garbage"],
    `<path d="M4 6.5h16"/><path d="M9.5 6.5v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2"/><path d="m6 6.5 1 12.5a2 2 0 0 0 2 1.8h6a2 2 0 0 0 2-1.8l1-12.5"/><path d="M10 10.5v6M14 10.5v6"/>`],
  ["star", "Interface", ["favorite", "rating", "bookmark", "review"],
    `<path d="${starPath()}"/>`],
  ["heart", "Interface", ["like", "love", "favorite", "health"],
    `<path d="M12 20.5C7 17 3.5 13.8 3.5 9.8A4.3 4.3 0 0 1 12 8a4.3 4.3 0 0 1 8.5 1.8c0 4-3.5 7.2-8.5 10.7z"/>`],

  // Row 4
  ["map-pin", "Interface", ["location", "place", "marker", "gps"],
    `<path d="M12 21s-6.5-5.7-6.5-11a6.5 6.5 0 0 1 13 0c0 5.3-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.5"/>`],
  ["home", "Interface", ["house", "main", "start", "building"],
    `<path d="m3.5 11 8.5-7.5 8.5 7.5"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5h4v5"/>`],
  ["grid", "Interface", ["layout", "dashboard", "tiles", "squares"],
    `<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>`],
  ["toggle-on", "Interface", ["switch", "on", "enabled", "control"],
    `<rect x="2" y="7" width="20" height="10" rx="5"/><circle cx="16.5" cy="12" r="2.6" fill="currentColor"/>`],
  ["toggle-off", "Interface", ["switch", "off", "disabled", "control"],
    `<rect x="2" y="7" width="20" height="10" rx="5"/><path d="m7.5 10 4 4m0-4-4 4"/>`],
  ["refresh", "Actions", ["reload", "sync", "update", "repeat"],
    `<path d="M20 11a8 8 0 0 0-14.4-4.3L4 8.5"/><path d="M4 4v4.5h4.5"/><path d="M4 13a8 8 0 0 0 14.4 4.3l1.6-1.8"/><path d="M20 20v-4.5h-4.5"/>`],
  ["share", "Communication", ["network", "social", "connect", "send"],
    `<circle cx="6" cy="12" r="2.5"/><circle cx="17.5" cy="6" r="2.5"/><circle cx="17.5" cy="18" r="2.5"/><path d="m8.2 10.8 7.1-3.6M8.2 13.2l7.1 3.6"/>`],
  ["download", "Files", ["save", "get", "import", "tray"],
    `<path d="M12 4v11m0 0-4-4m4 4 4-4"/><path d="M4.5 16v3.5h15V16"/>`],

  // Row 5
  ["plus-circle", "Actions", ["add", "new", "create"],
    `${ring}<path d="M12 8v8M8 12h8"/>`],
  ["minus-circle", "Actions", ["remove", "subtract", "less"],
    `${ring}<path d="M8 12h8"/>`],
  ["check-circle", "Actions", ["done", "success", "complete", "ok"],
    `${ring}<path d="m8.2 12.3 2.6 2.6 5-5.3"/>`],
  ["x-circle", "Actions", ["close", "cancel", "error", "clear"],
    `${ring}<path d="m9 9 6 6m0-6-6 6"/>`],
  ["arrow-left-circle", "Arrows", ["back", "previous", "left"],
    `${ring}<path d="M16 12H8m0 0 3.5-3.5M8 12l3.5 3.5"/>`],
  ["arrow-right-circle", "Arrows", ["next", "forward", "right"],
    `${ring}<path d="M8 12h8m0 0-3.5-3.5M16 12l-3.5 3.5"/>`],
  ["arrow-up-circle", "Arrows", ["top", "up", "upload"],
    `${ring}<path d="M12 16V8m0 0-3.5 3.5M12 8l3.5 3.5"/>`],
  ["arrow-down-circle", "Arrows", ["bottom", "down", "download"],
    `${ring}<path d="M12 8v8m0 0-3.5-3.5M12 16l3.5-3.5"/>`],

  // Row 6
  ["crop", "Design", ["trim", "resize", "frame", "cut"],
    `<path d="M6.5 3v14.5H21"/><path d="M3 6.5h14.5V21"/>`],
  ["scan", "Design", ["fullscreen", "expand", "focus", "frame"],
    `<path d="M4 9V6a2 2 0 0 1 2-2h3M15 4h3a2 2 0 0 1 2 2v3M20 15v3a2 2 0 0 1-2 2h-3M9 20H6a2 2 0 0 1-2-2v-3"/>`],
  ["chevron-down", "Arrows", ["caret", "expand", "dropdown", "more"],
    `<path d="m6 9.5 6 6 6-6"/>`],
  ["chevron-up", "Arrows", ["caret", "collapse", "less"],
    `<path d="m6 14.5 6-6 6 6"/>`],
  ["chevron-left", "Arrows", ["caret", "back", "previous"],
    `<path d="m14.5 6-6 6 6 6"/>`],
  ["chevron-right", "Arrows", ["caret", "next", "forward"],
    `<path d="m9.5 6 6 6-6 6"/>`],
  ["menu", "Interface", ["hamburger", "list", "navigation", "lines"],
    `<path d="M4 7h16M4 12h16M4 17h16"/>`],
  ["apps", "Interface", ["launcher", "tiles", "modules", "squares"],
    `<rect x="5" y="5" width="5.5" height="5.5" rx="1.4"/><rect x="13.5" y="5" width="5.5" height="5.5" rx="1.4"/><rect x="5" y="13.5" width="5.5" height="5.5" rx="1.4"/><rect x="13.5" y="13.5" width="5.5" height="5.5" rx="1.4"/>`],

  // Row 7
  ["brush", "Design", ["paint", "art", "draw", "style"],
    `<path d="M20.5 3.5 12 12"/><path d="m9 11.5 3.5 3.5c0 3-2 5.5-6 5.5-2 0-3-.5-3.5-.5 1.5-1 2-2.5 2-4 0-2.3 1.7-4.5 4-4.5z"/>`],
  ["pencil", "Design", ["edit", "write", "draw", "compose"],
    `<path d="m4 20 1-4.5L16.5 4a2.1 2.1 0 0 1 3 3L8 18.5z"/><path d="m14.5 6 3 3"/>`],
  ["wand", "Design", ["magic", "ai", "sparkle", "auto"],
    `<path d="M14 7.5 16.5 10 7 19.5a1.77 1.77 0 0 1-2.5-2.5z"/><path d="M7 3.5v4M5 5.5h4"/><path d="M18 15.5v4M16 17.5h4"/>`],
  ["box", "Developer", ["package", "cube", "3d", "product"],
    `<path d="M12 3 4 7.5v9L12 21l8-4.5v-9z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>`],
  ["layers", "Design", ["stack", "levels", "copy", "arrange"],
    `<path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8z"/><path d="m3.5 12 8.5 4.5 8.5-4.5"/><path d="m3.5 16 8.5 4.5 8.5-4.5"/>`],
  ["pie-chart", "Data", ["chart", "stats", "analytics", "share"],
    `<path d="M12 12.75v-7.5a7.5 7.5 0 1 0 7.5 7.5z"/><path d="M14.5 3.75a6.5 6.5 0 0 1 6.5 6.5h-6.5z"/>`],
  ["trending-up", "Data", ["growth", "increase", "stats", "arrow"],
    `<path d="m3.5 17 6-6 4 4 7-7.5"/><path d="M15.5 7.5h5v5"/>`],
  ["bar-chart", "Data", ["chart", "stats", "levels", "signal"],
    `<rect x="4" y="13" width="4" height="7" rx="1"/><rect x="10" y="8.5" width="4" height="11.5" rx="1"/><rect x="16" y="4" width="4" height="16" rx="1"/>`],
];

export const categories = [
  "Communication", "Files", "Data", "Media", "Account",
  "Developer", "Interface", "Actions", "Arrows", "Design",
];

export const icons = defs.map(([name, category, tags, body]) => ({ name, category, tags, body }));
