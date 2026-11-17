import type { ReactNode } from "react";
import { CONTACT_EMAIL, LEGAL_UPDATED } from "@/lib/site";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#content">Skip to the content</a>
      <Header />
      <main id="content" className="legal">
        <div className="container legal__inner">
          <h1>{title}</h1>
          <p className="legal__updated">Last updated {LEGAL_UPDATED}</p>
          <div className="legal__body">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/** Shows the contact email once one is set in src/lib/site.ts. */
export function ContactLine({ about }: { about: string }) {
  if (!CONTACT_EMAIL) return null;
  return (
    <p>
      Questions {about}? Write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
    </p>
  );
}
