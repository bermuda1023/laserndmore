import Link from "next/link";
import Image from "next/image";
import { businessInfo } from "@/content/business";
import { Dictionary } from "@/lib/i18n/getDictionary";
import { Locale } from "@/lib/i18n/config";

type FooterProps = {
  dict: Dictionary;
  locale: Locale;
};

export function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="mt-24 border-t border-warm-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/images/logo.png"
            alt="Laser & More — Aesthetic studio in Sunny Isles Beach, Miami"
            width={150}
            height={42}
            className="h-9 w-auto mix-blend-multiply"
          />
          <p className="mt-3 text-sm leading-relaxed text-ink/50">
            {dict.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-ink/30">
            {locale === "ru" ? "Навигация" : "Navigation"}
          </h3>
          <nav className="mt-4 flex flex-col gap-2.5">
            <Link href={`/${locale}/services`} className="text-sm text-ink/60 transition-colors hover:text-rose">{dict.nav.services}</Link>
            <Link href={`/${locale}/about`} className="text-sm text-ink/60 transition-colors hover:text-rose">{dict.nav.about}</Link>
            <Link href={`/${locale}/blog`} className="text-sm text-ink/60 transition-colors hover:text-rose">{dict.nav.blog}</Link>
            <Link href={`/${locale}/gift-cards`} className="text-sm text-ink/60 transition-colors hover:text-rose">{dict.nav.giftCards}</Link>
            <Link href={`/${locale}/contact`} className="text-sm text-ink/60 transition-colors hover:text-rose">{dict.nav.contact}</Link>
          </nav>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-ink/30">
            {locale === "ru" ? "Локация" : "Location"}
          </h3>
          <address className="mt-4 text-sm not-italic leading-relaxed text-ink/60">
            {businessInfo.address.street}
            <br />
            {businessInfo.address.city}, {businessInfo.address.region}{" "}
            {businessInfo.address.postalCode}
          </address>
          <p className="mt-2 text-sm text-ink/60">
            <a
              href={`tel:${businessInfo.phoneE164}`}
              className="transition-colors hover:text-rose"
            >
              {businessInfo.phone}
            </a>
          </p>
          <p className="mt-1 text-sm text-ink/60">
            <a
              href={`mailto:${businessInfo.email}`}
              className="transition-colors hover:text-rose"
            >
              {businessInfo.email}
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-ink/30">
            {locale === "ru" ? "Связь" : "Connect"}
          </h3>
          <div className="mt-4 flex flex-col gap-2.5">
            <Link
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-ink/60 transition-colors hover:text-rose"
            >
              Instagram
            </Link>
            <Link
              href={businessInfo.tiktokUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-ink/60 transition-colors hover:text-rose"
            >
              TikTok
            </Link>
            <Link
              href={businessInfo.googleUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-ink/60 transition-colors hover:text-rose"
            >
              Google Business
            </Link>
            <Link
              href={businessInfo.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-rose transition-colors hover:text-rose-dark"
            >
              {dict.nav.bookNow} &rarr;
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-warm-100">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs text-ink/30 lg:px-8">
          &copy; {new Date().getFullYear()} {businessInfo.name}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
