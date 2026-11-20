import { CodeBlock } from "@/components/CodeBlock";
import { Explorer } from "@/components/Explorer";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InstallCommand } from "@/components/InstallCommand";
import { Stage } from "@/components/Stage";
import { icons } from "@/lib/icons";

const REACT_EXAMPLE = `import { Search, Bell } from "handicon";

export function Toolbar() {
  return (
    <div>
      <button>
        <Search size={20} />
        Search
      </button>
      <Bell size={20} strokeWidth={2} color="#2b45f5" />
    </div>
  );
}`;

const SVG_EXAMPLE = `<!-- node_modules/handicon/svg/heart.svg -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
  viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 20.5C7 17 3.5 13.8 3.5 9.8A4.3 ..."/>
</svg>`;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#icons">Skip to the icons</a>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__copy">
              <h1>Soft, rounded icons you install with one command.</h1>
              <p className="hero__lede">
                {icons.length} icons on a 24px grid. Size, stroke and color are props, and the icons you
                don’t import never reach your bundle.
              </p>
              <InstallCommand />
              <p className="hero__note">
                Works with React 17 and up, including Next.js server components. Every icon also ships as a
                plain SVG file.
              </p>
            </div>
            <Stage />
          </div>
        </section>

        <Explorer />

        <section className="usage" id="usage" aria-labelledby="usage-title">
          <div className="container">
            <div className="section-head">
              <h2 id="usage-title">Use it in your app</h2>
            </div>
            <div className="usage__grid">
              <div className="usage__text">
                <p>
                  Import the icons you need by name. Each one is a small React component with no state, so it
                  renders on the server without a <code>"use client"</code> line.
                </p>
                <dl className="props">
                  <div>
                    <dt><code>size</code></dt>
                    <dd>Width and height in pixels. Default 24.</dd>
                  </div>
                  <div>
                    <dt><code>color</code></dt>
                    <dd>Any CSS color. Default is the text color around the icon.</dd>
                  </div>
                  <div>
                    <dt><code>strokeWidth</code></dt>
                    <dd>Line weight on the 24px grid. Default 1.75.</dd>
                  </div>
                  <div>
                    <dt><code>className</code>, <code>onClick</code>, and the rest</dt>
                    <dd>Anything else you pass goes straight to the <code>svg</code> element.</dd>
                  </div>
                </dl>
              </div>
              <div className="usage__code">
                <CodeBlock title="React" code={REACT_EXAMPLE} />
                <CodeBlock title="Plain SVG" code={SVG_EXAMPLE} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
