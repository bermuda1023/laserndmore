import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo } from "@/content/business";
import { isLocale } from "@/lib/i18n/config";
import { buildLocalizedMetadata } from "@/lib/seo/metadata";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  return buildLocalizedMetadata({
    locale: localeParam,
    path: "/gift-cards",
    title:
      localeParam === "ru"
        ? "Подарочные карты — Laser & More, Sunny Isles Beach"
        : "Gift Cards — Laser & More Med Spa, Sunny Isles Beach",
    description:
      localeParam === "ru"
        ? "Подарите процедуры Laser & More — подарочные карты на лазерную эпиляцию, уходы за лицом и мед-эстетику в Sunny Isles Beach, Miami."
        : "Give the gift of self-care with Laser & More gift cards for laser hair removal, facials, and med spa treatments in Sunny Isles Beach, Miami.",
    keywords: [
      "gift card med spa Miami",
      "facial gift card Sunny Isles",
      "Laser & More gift cards"
    ]
  });
}

export default async function GiftCardsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : "en";

  return (
    <section className="mx-auto max-w-2xl text-center">
      <div className="rounded-4xl border border-warm-200 bg-white p-10 shadow-soft sm:p-14">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose/10">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rose" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="8" width="18" height="14" rx="2"/>
            <path d="M12 8V22"/>
            <path d="M3 12h18"/>
            <path d="M12 8c-2-3-6-3-6 0s4 4 6 0"/>
            <path d="M12 8c2-3 6-3 6 0s-4 4-6 0"/>
          </svg>
        </div>

        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {locale === "ru"
            ? "Подарочные карты Laser & More"
            : "Laser & More Gift Cards"}
          <span className="block text-lg font-normal text-ink/40">
            Sunny Isles Beach, Miami
          </span>
        </h1>

        <p className="mt-4 text-base leading-relaxed text-ink/60">
          {locale === "ru"
            ? "Подарите заботу о себе. Подарочные карты Laser & More — идеальный подарок для тех, кто ценит качественный уход за кожей. Доступны на любые процедуры: лазерная эпиляция, уходы за лицом и контурирование тела."
            : "Share the gift of self-care. A Laser & More gift card is perfect for anyone who values quality skincare and wellness. Valid for all treatments: laser hair removal, facials, and body contouring."}
        </p>

        <Link
          href={businessInfo.giftCardsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full bg-ink px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-ink/85 hover:shadow-glow"
        >
          {locale === "ru" ? "Купить подарочную карту" : "Buy Gift Card"} &rarr;
        </Link>

        <p className="mt-6 text-xs text-ink/35">
          {locale === "ru"
            ? "Оплата через GlossGenius. Доставка мгновенная."
            : "Powered by GlossGenius. Delivered instantly."}
        </p>
      </div>
    </section>
  );
}
