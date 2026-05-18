import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://frontiermethods.com"),
  title: {
    default: "Frontier Methods — open-source AI capability for UK frontier R&D",
    template: "%s — Frontier Methods",
  },
  description:
    "Frontier Methods is a UK-built platform that surfaces AI techniques across vertical boundaries, releases open-source skills UK researchers can run today, and embeds AI Practitioner Fellows inside Creator teams.",
  openGraph: {
    title: "Frontier Methods — open-source AI capability for UK frontier R&D",
    description:
      "A UK-built platform that catalyses AI adoption across frontier R&D. Open-source skills, embedded fellows, governance-by-competency. Founder-led by AI Accelerator.",
    type: "website",
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
