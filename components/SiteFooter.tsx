"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PUBLIC_NAV, ARIA_NAV, ARIA_ZONE_PATHS, SITE } from "@/lib/nav";

export default function SiteFooter() {
  const pathname = usePathname();
  const isAria =
    pathname.startsWith("/aria") ||
    ARIA_ZONE_PATHS.includes(pathname);

  return (
    <footer className="bg-gable-deep text-white/60 mt-24">
      <div className="max-w-8xl mx-auto px-5 lg:px-8 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-7 bg-turq rounded-sm" />
              <div>
                <div className="text-white text-sm font-semibold">
                  {SITE.name}
                </div>
                <div className="text-white/40 text-[10px] uppercase tracking-wider">
                  {SITE.tagline}
                </div>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-white/50 max-w-sm">
              Frontier Methods catalyses AI adoption across the UK frontier R&amp;D
              ecosystem by surfacing techniques across vertical boundaries,
              releasing open-source skills UK researchers can run today, and
              embedding AI Practitioner Fellows inside Creator teams.
            </p>
            <p className="text-[12px] leading-relaxed text-white/40 mt-4">
              An AI Accelerator initiative. Founder-led from London. UK-built.
            </p>
            <div className="flex gap-2 mt-4">
              <a
                href={`https://${SITE.github}`}
                className="tag tag-on-dark-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE.github}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-white/40 text-[10px] uppercase tracking-wider mb-3">
              Frontier Methods
            </div>
            <ul className="space-y-1.5 text-[13px]">
              {PUBLIC_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-white/40 text-[10px] uppercase tracking-wider mb-3">
              ARIA bid companion
            </div>
            <ul className="space-y-1.5 text-[13px]">
              {ARIA_NAV.slice(0, 7).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/aria"
                  className="text-turq hover:text-white transition"
                >
                  Open bid companion →
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-white/40 text-[10px] uppercase tracking-wider mb-3">
              Contact
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="text-[13px] text-white/70 hover:text-white transition block"
            >
              {SITE.email}
            </a>
            <div className="text-[12px] text-white/40 mt-1">
              Founder · Mike Chatterton
            </div>
            <a
              href={`mailto:${SITE.founderEmail}`}
              className="text-[13px] text-turq hover:text-white transition block mt-1"
            >
              {SITE.founderEmail}
            </a>
            {isAria && (
              <>
                <div className="text-white/40 text-[10px] uppercase tracking-wider mt-6 mb-2">
                  Bid timetable
                </div>
                <ul className="text-[12px] text-white/60 space-y-1">
                  <li>Deadline · {SITE.deadline}</li>
                  <li>Shortlist · {SITE.shortlist}</li>
                  <li>Decision · {SITE.decision}</li>
                  <li>Start · {SITE.contractStart}</li>
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-white/40">
          <div>
            © {new Date().getFullYear()} Frontier Methods is an AI Accelerator Limited initiative · UK Ltd · London SE10
          </div>
          <div className="flex items-center gap-4">
            <span>{isAria ? "For ARIA reviewers · Not for redistribution" : "Open-source, UK-built, ARIA Cohort 2 bid submitted"}</span>
          </div>
        </div>

        <div className="border-t border-white/5 mt-4 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-[10px] text-white/30">
          <div>
            Built in public ·{" "}
            <a
              href={`https://${SITE.githubRepo ?? SITE.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-turq transition underline-offset-2 hover:underline"
            >
              {SITE.githubRepo ?? SITE.github}
            </a>
          </div>
          <div>
            Next.js 14 · Tailwind · MIT-licensed source · deployed on Vercel
          </div>
        </div>
      </div>
    </footer>
  );
}
