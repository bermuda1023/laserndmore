"use client";

import { useState } from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n/config";
import { Dictionary } from "@/lib/i18n/getDictionary";
import { businessInfo } from "@/content/business";

type MobileNavProps = {
  locale: Locale;
  dict: Dictionary;
};

const navItems = [
  { key: "home", path: "" },
  { key: "services", path: "/services" },
  { key: "about", path: "/about" },
  { key: "blog", path: "/blog" },
  { key: "giftCards", path: "/gift-cards" },
  { key: "contact", path: "/contact" }
] as const;

export function MobileNav({ locale, dict }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-warm-100"
        aria-label="Toggle menu"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="animate-fade-in absolute left-0 right-0 top-full border-b border-warm-200 bg-cream/98 px-5 pb-6 pt-4 backdrop-blur-xl">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.path}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-warm-100 hover:text-ink"
              >
                {dict.nav[item.key]}
              </Link>
            ))}
          </nav>
          <Link
            href={businessInfo.bookingUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex w-full justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold uppercase tracking-widest text-white"
          >
            {dict.nav.bookNow}
          </Link>
        </div>
      )}
    </div>
  );
}
