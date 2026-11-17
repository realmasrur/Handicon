/** The Handicon mark: a rounded square with a lowercase h drawn inside it. */
export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="6" />
      <path d="M8.5 7v10M8.5 12.6c0-1.9 1.4-3 3.1-3s3 1.1 3 3V17" />
    </svg>
  );
}

export function Logo() {
  return (
    <a className="logo" href="/#top" aria-label="Handicon, back to top">
      <LogoMark />
      <span className="logo__word">Handicon</span>
    </a>
  );
}
