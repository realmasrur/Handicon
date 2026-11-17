import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";
import { OPERATOR } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use | Handicon",
  description: "The rules for using the Handicon website and icons.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use">
      <p>
        These terms cover the Handicon website and the <code>handicon</code> npm package, both made by{" "}
        {OPERATOR}. By using either one, you agree to them. If you do not agree, please do not use them.
      </p>

      <h2>Using the icons</h2>
      <p>
        You can use Handicon for free in any personal or commercial project, including client work and
        paid products. You may not sell the icons, or republish them as your own icon set or package.
        The full terms are in the <a href="/license">license</a>, and the license is the final word if
        anything here seems to differ.
      </p>

      <h2>Using the website</h2>
      <p>You agree not to:</p>
      <ul>
        <li>try to break, overload or gain unauthorized access to the site or its hosting;</li>
        <li>use automated tools to copy the whole icon set from the site in order to republish it;</li>
        <li>use the site to break the law or other people’s rights.</li>
      </ul>

      <h2>No warranty</h2>
      <p>
        Handicon is provided as it is, without promises of any kind. We do not promise that it will be
        free of errors, that it will suit your particular purpose, or that the site or package will
        always be available.
      </p>

      <h2>Limit of liability</h2>
      <p>
        To the extent the law allows, {OPERATOR} is not responsible for any loss or damage that comes
        from using, or being unable to use, Handicon. Your use of it is at your own risk.
      </p>

      <h2>Names and logos</h2>
      <p>
        The names “Handicon” and “{OPERATOR}” and their logos belong to {OPERATOR}. Using the icons does
        not give you the right to use these names or logos.
      </p>

      <h2>Other services</h2>
      <p>
        The package is delivered through npm and the site is hosted by Vercel. Those services have their
        own terms and policies, which apply when you use them.
      </p>

      <h2>Changes</h2>
      <p>
        We may change the site, the package or these terms. When the terms change, the date at the top
        of this page changes too. Continuing to use Handicon after a change means you accept it.
      </p>

      <ContactLine about="about these terms" />
    </LegalPage>
  );
}
