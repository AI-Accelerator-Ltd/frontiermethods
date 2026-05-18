"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Lock } from "lucide-react";
import { PUBLIC_NAV, ARIA_NAV, ARIA_ZONE_PATHS, SITE } from "@/lib/nav";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isAria =
    pathname.startsWith("/aria") ||
    ARIA_ZONE_PATHS.includes(pathname);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/aria") return pathname === "/aria";
    return pathname.startsWith(href);
  };

  const NAV = isAria ? ARIA_NAV : PUBLIC_NAV;

  return (
    <header className="sticky top-0 z-50 bg-gable-deep border-b border-white/5 backdrop-blur">
      {/* Zone indicator strip */}
      {isAria && (
        <div className="bg-turq text-gable text-[11px] font-semibold tracking-wider uppercase text-center py-1.5">
          ARIA Cohort 2 · Bid companion · For reviewers · Not indexed
        </div>
      )}

      <div className="max-w-8xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href={isAria ? "/aria" : "/"} className="flex items-center gap-3 group">
            <div className="w-2 h-7 bg-turq rounded-sm transition-all group-hover:h-8" />
            <div className="leading-tight">
              <div className="text-white text-sm font-semibold tracking-tight">
                {SITE.name}
              </div>
              <div className="text-white/40 text-[10px] uppercase tracking-wider">
                {isAria ? "ARIA bid companion" : SITE.tagline}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 text-white/70">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 py-1.5 rounded text-[12px] font-medium tracking-wide transition ${
                  isActive(item.href)
                    ? "bg-white/10 text-white"
                    : "hover:text-white hover:bg-white/5"
                }`}
              >
                {item.short ?? item.label}
              </Link>
            ))}
          </nav>

          {/* Zone-cross link */}
          <div className="hidden lg:flex items-center gap-3 text-[11px] text-white/40">
            {isAria ? (
              <Link href="/" className="hover:text-white transition flex items-center gap-1">
                ← Public site
              </Link>
            ) : (
              <Link
                href="/aria"
                className="hover:text-turq transition flex items-center gap-1.5 px-2 py-1 rounded border border-white/10 hover:border-turq/40"
              >
                <Lock size={11} /> ARIA reviewer entrance
              </Link>
            )}
          </div>

          <button
            type="button"
            className="lg:hidden text-white p-2"
            aria-label="Open menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <div className="lg:hidden bg-gable-deep border-t border-white/5 px-5 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          <div className="text-white/40 text-[10px] uppercase tracking-wider px-2 pt-2 pb-1">
            {isAria ? "Bid companion" : "Frontier Methods"}
          </div>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block px-2 py-2 rounded text-sm transition ${
                isActive(item.href)
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t border-white/10 mt-3 pt-3">
            {isAria ? (
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block px-2 py-2 rounded text-sm text-turq"
              >
                ← Back to public site
              </Link>
            ) : (
              <Link
                href="/aria"
                onClick={() => setOpen(false)}
                className="block px-2 py-2 rounded text-sm text-turq"
              >
                <Lock size={11} className="inline mr-1" /> ARIA reviewer entrance →
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
