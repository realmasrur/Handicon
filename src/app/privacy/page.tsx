import type { Metadata } from "next";
import { ContactLine, LegalPage } from "@/components/LegalPage";
import { OPERATOR } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy | Handicon",
  description: "What the Handicon website stores and what it does not.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy">
      <p>
        Handicon is made by {OPERATOR}. This page explains what happens to your information when you
        visit the Handicon website or use the Handicon npm package.
      </p>

      <h2>The short version</h2>
      <p>
        Handicon does not ask for your name or email, has no accounts, and does not use cookies,
        analytics or advertising. This website does not send your visit to Google or to any other
        company for tracking.
      </p>

      <h2>What the site saves on your device</h2>
      <p>The site keeps two small settings in your browser’s local storage:</p>
      <ul>
        <li>Your theme choice, light or dark.</li>
        <li>Whether you closed the announcement bar at the top of the page.</li>
      </ul>
      <p>
        These stay on your device and are never sent to us. They only remember your choices, and we do
        not use them to identify or follow you. You can remove them at any time by clearing your
        browser’s site data.
      </p>

      <h2>Fonts, scripts and images</h2>
      <p>
        Every font, icon and image on this site is served from the same address as the page. The site
        does not load fonts or scripts from Google or from other outside servers, so your browser does
        not contact them when you visit.
      </p>

      <h2>Buttons that copy</h2>
      <p>
        The Copy buttons use your device’s clipboard. What you copy is not sent anywhere.
      </p>

      <h2>Hosting and server logs</h2>
      <p>
        The site is hosted by Vercel. Like any web host, it receives the technical details your browser
        sends with every request, such as your IP address, the page you asked for, the date and time,
        and your browser type. The host uses this to deliver the page, keep it secure and fix problems.
        {" "}{OPERATOR} does not use it to identify visitors. Vercel’s own privacy policy explains how it
        handles this data.
      </p>

      <h2>The npm package</h2>
      <p>
        The <code>handicon</code> package contains icons only. It does not make network requests and
        does not collect any data. Downloading it from npm is handled by npm under its own policies.
      </p>

      <h2>Your rights</h2>
      <p>
        We do not keep personal information about visitors, so there is usually nothing to look up or
        delete. If you think we hold something about you, ask and we will tell you what it is. Depending
        on where you live, such as the European Union or the United Kingdom, you may also have the right
        to access, correct or delete personal data, and to complain to your local data protection
        authority.
      </p>

      <h2>Changes</h2>
      <p>
        If Handicon ever adds analytics, accounts, forms or anything else that handles personal
        information, this page will be updated first and the date at the top will change.
      </p>

      <ContactLine about="about your privacy" />
    </LegalPage>
  );
}
