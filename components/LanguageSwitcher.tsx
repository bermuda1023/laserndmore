"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/lib/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const targetLocale = locale === "en" ? "ru" : "en";
  const switchedPath = pathname.replace(/^\/(en|ru)/, `/${targetLocale}`);
  const label = locale === "en" ? "RU" : "EN";

  return (
    <Link
      href={switchedPath}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-warm-300 text-[11px] font-bold uppercase tracking-wider text-ink/60 transition-all hover:border-rose hover:text-rose"
    >
      {label}
    </Link>
  );
}
