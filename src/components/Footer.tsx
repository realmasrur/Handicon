import { icons } from "@/lib/icons";
import { FooterInstall } from "./FooterInstall";
import { LogoMark } from "./Logo";
import { SvgIcon } from "./SvgIcon";

const GITHUB_URL = "https://github.com/realmasrur/Handicon";

// A few icons shown as a quiet row of proof above the sign-off.
const SAMPLE = ["heart", "bell", "wand", "cloud-upload", "calendar", "shield-check", "pencil", "zap", "map-pin", "layers"];
const sample = SAMPLE.map((n) => icons.find((i) => i.name === n)).filter((i): i is (typeof icons)[number] => Boolean(i));

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__cta">
          <div className="footer__cta-copy">
            <h2>Add Handicon to your project.</h2>
            <p>One command, then import the icons you need.</p>
          </div>
          <FooterInstall />
          <ul className="footer__strip" aria-hidden="true">
            {sample.map((icon) => (
              <li key={icon.name}>
                <SvgIcon icon={icon} size={26} />
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__main">
          <div className="footer__about">
            <span className="footer__brand">
              <LogoMark size={24} />
              Handicon
            </span>
            <p>Soft, rounded icons for React. {icons.length} icons on a 24px grid.</p>
          </div>

          <nav className="footer__links" aria-label="Footer">
            <a href="#icons">Icons</a>
            <a href="#usage">Usage</a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>Free for personal and commercial projects under the MIT license.</p>
          <p className="footer__credit">
            <span>A product of</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="footer__mecozx" src="/mecozx.png" alt="mecozx" width={531} height={80} />
          </p>
        </div>
      </div>
    </footer>
  );
}
