import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo/StructuredData";
import { getServices } from "@/content/services";
import { businessInfo } from "@/content/business";
import { isLocale, Locale } from "@/lib/i18n/config";
import { buildLocalizedMetadata } from "@/lib/seo/metadata";
import {
  createBreadcrumbSchema,
  createLocalBusinessSchema,
  createServiceItemListSchema
} from "@/lib/seo/schema";
import { notFound } from "next/navigation";

const categoryLabelsEn: Record<string, string> = {
  laser: "Laser",
  facial: "Facials",
  skin: "Skin Treatments",
  body: "Body Contouring",
  consultation: "Consultations & Add-Ons"
};

const categoryLabelsRu: Record<string, string> = {
  laser: "Лазер",
  facial: "Уходы за лицом",
  skin: "Кожные процедуры",
  body: "Контурирование тела",
  consultation: "Консультации и дополнения"
};

const categoryColors: Record<string, string> = {
  laser: "bg-rose/10 text-rose",
  facial: "bg-amber-50 text-gold",
  skin: "bg-violet-50 text-violet-600",
  body: "bg-emerald-50 text-emerald-700",
  consultation: "bg-sky-50 text-sky-600"
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  return buildLocalizedMetadata({
    locale: localeParam,
    path: "/services",
    title:
      localeParam === "ru"
        ? "Услуги — лазер, уходы, мед-эстетика в Sunny Isles Beach"
        : "Laser, Facial & Aesthetic Services in Sunny Isles Beach, Miami",
    description:
      localeParam === "ru"
        ? "Все услуги Laser & More в Sunny Isles Beach: лазерная эпиляция, Hydrafacial, микронидлинг, пилинги, RF-лифтинг, VelaShape и другие процедуры."
        : "Explore all Laser & More services in Sunny Isles Beach, Miami: laser hair removal, Hydrafacial, microneedling, chemical peels, RF skin tightening, VelaShape, and more.",
    keywords: [
      "laser hair removal Sunny Isles Beach",
      "facial services Miami",
      "aesthetic services Sunny Isles",
      "Hydrafacial near me Miami",
      "microneedling Sunny Isles Beach"
    ]
  });
}

export default async function ServicesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  const services = getServices(locale);
  const labels = locale === "ru" ? categoryLabelsRu : categoryLabelsEn;

  const categories = ["laser", "facial", "skin", "body", "consultation"] as const;
  const grouped = categories
    .map((cat) => ({
      key: cat,
      label: labels[cat] ?? cat,
      items: services.filter((s) => s.category === cat)
    }))
    .filter((g) => g.items.length > 0);
  const breadcrumbs = [
    { name: locale === "ru" ? "Главная" : "Home", url: `/${locale}` },
    { name: locale === "ru" ? "Услуги" : "Services", url: `/${locale}/services` }
  ];

  return (
    <div>
      <StructuredData data={createLocalBusinessSchema()} />
      <StructuredData data={createServiceItemListSchema(services, locale)} />
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
      <div className="space-y-14">
      <section>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {locale === "ru"
            ? "Эстетические услуги в Sunny Isles Beach"
            : "Aesthetic Services in Sunny Isles Beach"}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/60">
          {locale === "ru"
            ? "Полный список процедур Laser & More — от лазерной эпиляции до контурирования тела. Запишитесь онлайн через GlossGenius."
            : "Browse all Laser & More treatments — from laser hair removal and facials to body contouring. Book directly through GlossGenius."}
        </p>
      </section>

      {grouped.map((group) => (
        <section key={group.key}>
          <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-ink">
            <span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${categoryColors[group.key] ?? ""}`}>
              {group.label}
            </span>
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {group.items.map((service) => (
              <article
                key={service.slug}
                className="group rounded-2xl border border-warm-200 bg-white p-6 transition-all hover:border-warm-300 hover:shadow-card"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-ink">{service.name}</h3>
                  <span className="whitespace-nowrap text-sm font-bold text-ink">
                    {service.packages && service.packages.length > 0 && (
                      <span className="text-xs font-medium text-ink/40">{locale === "ru" ? "от " : "from "}</span>
                    )}
                    {service.priceFrom}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">
                  {service.shortDescription}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-warm-100 pt-3">
                  <span className="text-xs font-medium text-ink/35">{service.duration}</span>
                  <div className="flex gap-3">
                    <Link
                      href={`/${locale}/services/${service.slug}`}
                      className="text-xs font-semibold text-ink/45 transition-colors hover:text-ink"
                    >
                      {locale === "ru" ? "Подробнее" : "Details"}
                    </Link>
                    <Link
                      href={businessInfo.bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-rose transition-colors hover:text-rose-dark"
                    >
                      {locale === "ru" ? "Записаться" : "Book"}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="rounded-4xl border border-warm-200 bg-white p-8 text-center sm:p-12">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          {locale === "ru"
            ? "Не уверены, что выбрать? Бесплатная консультация в Sunny Isles Beach"
            : "Not sure which treatment? Free consultation in Sunny Isles Beach"}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-ink/60">
          {locale === "ru"
            ? "Запишитесь на бесплатную консультацию — Анжелика поможет подобрать идеальный план ухода."
            : "Book a free consultation and Anzhelika will help you find the perfect treatment plan."}
        </p>
        <Link
          href={businessInfo.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-ink/85 hover:shadow-glow"
        >
          {locale === "ru" ? "Записаться" : "Book Now"} &rarr;
        </Link>
      </section>
      </div>
    </div>
  );
}
