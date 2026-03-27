import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/lib/i18n/config";
import { Dictionary } from "@/lib/i18n/getDictionary";
import { businessInfo } from "@/content/business";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileNav } from "@/components/MobileNav";

type HeaderProps = {
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

export function Header({ locale, dict }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-warm-200/60 bg-cream/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-1 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Laser & More"
            width={200}
            height={55}
            className="-my-2 h-16 w-auto mix-blend-multiply lg:h-18"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.path}`}
              className="rounded-lg px-4 py-2 text-base font-medium text-ink/70 transition-colors hover:bg-warm-100 hover:text-ink"
            >
              {dict.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} />
          <Link
            href={businessInfo.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-ink/85 hover:shadow-glow sm:inline-flex"
          >
            {dict.nav.bookNow}
          </Link>
          <MobileNav locale={locale} dict={dict} />
        </div>
      </div>
    </header>
  );
}
