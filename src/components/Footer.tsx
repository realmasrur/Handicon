import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">
          <LogoMark size={20} />
          Handicon
        </span>
        <p>Free to use in personal and commercial projects under the MIT license.</p>
      </div>
    </footer>
  );
}
