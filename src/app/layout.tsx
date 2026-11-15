import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Caveat, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const hand = Caveat({ subsets: ["latin"], variable: "--font-hand", display: "swap" });

export const metadata: Metadata = {
  title: "Handicon: soft, rounded icons for React",
  description:
    "59 icons on a 24px grid. Install with npm, set size, stroke and color as props, and ship only the icons you use.",
};

// Runs before first paint so the page never flashes the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem("handicon-theme");if(!t){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${hand.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
