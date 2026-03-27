import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo/StructuredData";
import { businessInfo, formatTime } from "@/content/business";
import { isLocale, Locale } from "@/lib/i18n/config";
import { buildLocalizedMetadata } from "@/lib/seo/metadata";
import { createBreadcrumbSchema, createLocalBusinessSchema } from "@/lib/seo/schema";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  return buildLocalizedMetadata({
    locale: localeParam,
    path: "/contact",
    title:
      localeParam === "ru"
        ? "Контакты Laser & More — Sunny Isles Beach, Miami"
        : "Contact Laser & More — Sunny Isles Beach, Miami",
    description:
      localeParam === "ru"
        ? "Адрес, часы работы и онлайн-запись Laser & More. 17086 Collins Ave, Sunny Isles Beach, FL 33160. Обслуживаем Miami, Aventura и North Miami Beach."
        : "Find Laser & More at 17086 Collins Ave, Sunny Isles Beach, FL 33160. Business hours, online booking, and directions. Serving Miami, Aventura, and North Miami Beach.",
    keywords: [
      "Laser & More contact",
      "aesthetic studio Sunny Isles Beach address",
      "laser hair removal near me Miami",
      "17086 Collins Ave Sunny Isles"
    ]
  });
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const breadcrumbs = [
    { name: locale === "ru" ? "Главная" : "Home", url: `/${locale}` },
    { name: locale === "ru" ? "Контакты" : "Contact", url: `/${locale}/contact` }
  ];

  return (
    <div>
      <StructuredData data={createLocalBusinessSchema()} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      <nav className="mb-3 flex items-center gap-2 text-xs text-ink/40">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.url} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            {i < breadcrumbs.length - 1 ? (
              <Link href={crumb.url} className="transition-colors hover:text-ink">
                {crumb.name}
              </Link>
            ) : (
              <span className="text-ink/60">{crumb.name}</span>
            )}
          </span>
        ))}
      </nav>
      <div className="space-y-8">
      <section>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {locale === "ru"
            ? "Контакты — Laser & More в Sunny Isles Beach"
            : "Contact Laser & More in Sunny Isles Beach"}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/60">
          {locale === "ru"
            ? "Мы находимся на Collins Ave в Sunny Isles Beach, Miami. Запишитесь онлайн или свяжитесь с нами."
            : "Located on Collins Ave in Sunny Isles Beach, Miami. Book online or reach out directly."}
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-4xl border border-warm-200 bg-white p-8 shadow-soft sm:p-10">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-ink/30">
                {locale === "ru" ? "Адрес" : "Address"}
              </p>
              <p className="mt-2 text-sm font-semibold text-ink">
                {businessInfo.address.street}
              </p>
              <p className="text-sm text-ink/60">
                {businessInfo.address.city}, {businessInfo.address.region} {businessInfo.address.postalCode}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-ink/30">
                {locale === "ru" ? "Связь" : "Get in Touch"}
              </p>
              <p className="mt-2 text-sm text-ink/60">{businessInfo.phone}</p>
              <p className="text-sm text-ink/60">{businessInfo.email}</p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-ink/30">
                {locale === "ru" ? "Языки" : "Languages"}
              </p>
              <p className="mt-2 text-sm text-ink/60">English, Русский</p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-ink/30">
                {locale === "ru" ? "Обслуживаемые районы" : "Areas Served"}
              </p>
              <p className="mt-2 text-sm text-ink/60">
                Sunny Isles Beach, Miami, Aventura, North Miami Beach, Bal Harbour, Hallandale Beach
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={businessInfo.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-ink/85 hover:shadow-glow"
            >
              {locale === "ru" ? "Записаться" : "Book Online"} &rarr;
            </Link>
            <Link
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-warm-300 px-5 py-3 text-xs font-semibold text-ink/60 transition-all hover:border-ink/30 hover:text-ink"
            >
              Instagram
            </Link>
            <Link
              href={businessInfo.tiktokUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-warm-300 px-5 py-3 text-xs font-semibold text-ink/60 transition-all hover:border-ink/30 hover:text-ink"
            >
              TikTok
            </Link>
            <Link
              href={businessInfo.googleUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-warm-300 px-5 py-3 text-xs font-semibold text-ink/60 transition-all hover:border-ink/30 hover:text-ink"
            >
              Google
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-4xl border border-warm-200 bg-white p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-ink/30">
              {locale === "ru" ? "Часы работы" : "Business Hours"}
            </p>
            <div className="mt-4 space-y-2">
              {businessInfo.hours.map((entry) => (
                <div key={entry.day} className="flex justify-between text-sm">
                  <span className="font-medium text-ink/70">{entry.day}</span>
                  <span className={entry.open ? "font-semibold text-ink" : "text-ink/35"}>
                    {entry.open && entry.close ? `${formatTime(entry.open)} – ${formatTime(entry.close)}` : (locale === "ru" ? "Закрыто" : "Closed")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-warm-200 bg-white p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-ink/30">
              {locale === "ru" ? "Политика отмены" : "Cancellation Policy"}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/60">
              {businessInfo.cancellationPolicy}
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
