import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "License | Handicon",
  description: "Handicon is free to use in any project. Selling or republishing the icons is not allowed.",
};

// One source of truth: the same file that ships inside the npm package.
const licenseText = readFileSync(join(process.cwd(), "package/LICENSE"), "utf8");

export default function LicensePage() {
  return (
    <LegalPage title="License">
      <p>
        Handicon is free to use in any personal or commercial project. Selling the icons, or
        republishing them as your own icon set or package, is not allowed. This is the full text, the
        same as the <code>LICENSE</code> file inside the npm package.
      </p>
      <pre className="legal__license" tabIndex={0}>{licenseText}</pre>
      <ContactLine about="about using Handicon in a way this license does not cover" />
    </LegalPage>
  );
}
