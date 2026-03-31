import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/seo/StructuredData";
import { businessInfo } from "@/content/business";
import { getServiceBySlug, getServices } from "@/content/services";
import { isLocale, Locale, locales } from "@/lib/i18n/config";
import { buildLocalizedMetadata } from "@/lib/seo/metadata";
import {
  createFaqSchema,
  createLocalBusinessSchema,
  createServiceSchema,
  createBreadcrumbSchema
} from "@/lib/seo/schema";

type PageParams = { locale: string; slug: string };

const categoryColors: Record<string, string> = {
  laser: "bg-rose/10 text-rose",
  facial: "bg-amber-50 text-gold",
  skin: "bg-violet-50 text-violet-600",
  body: "bg-emerald-50 text-emerald-700",
  consultation: "bg-sky-50 text-sky-600"
};

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getServices(locale).map((service) => ({
      locale,
      slug: service.slug
    }))
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};
  const service = getServiceBySlug(localeParam, slug);
  if (!service) return {};

  const locationSuffix =
    localeParam === "ru" ? " в Sunny Isles Beach, Miami" : " in Sunny Isles Beach, Miami";

  return buildLocalizedMetadata({
    locale: localeParam,
    path: `/services/${slug}`,
    title: `${service.name}${locationSuffix}`,
    description: `${service.shortDescription} ${localeParam === "ru" ? "Запись онлайн в Laser & More, Sunny Isles Beach." : "Book online at Laser & More, Sunny Isles Beach, Miami."}`,
    keywords: [
      `${service.name} Sunny Isles Beach`,
      `${service.name} Miami`,
      `${service.category} Sunny Isles`,
      "Laser & More"
    ]
  });
}

export default async function ServiceDetailPage({
  params
}: {
  params: Promise<PageParams>;
}) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  const service = getServiceBySlug(locale, slug);
  if (!service) notFound();

  const breadcrumbs = [
    { name: locale === "ru" ? "Главная" : "Home", url: `/${locale}` },
    { name: locale === "ru" ? "Услуги" : "Services", url: `/${locale}/services` },
    { name: service.name, url: `/${locale}/services/${slug}` }
  ];

  return (
    <div className="mx-auto max-w-3xl">
      <StructuredData data={createLocalBusinessSchema()} />
      <StructuredData data={createServiceSchema(service)} />
      <StructuredData data={createBreadcrumbSchema(breadcrumbs)} />
      {service.faqs.length > 0 && (
        <StructuredData data={createFaqSchema(service.faqs)} />
      )}

      {/* Breadcrumb */}
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
      {/* Main card */}
      <article className="rounded-4xl border border-warm-200 bg-white p-8 shadow-soft sm:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${categoryColors[service.category] ?? "bg-warm-100 text-ink/50"}`}>
            {service.category}
          </span>
          <span className="text-xs font-medium text-ink/35">{service.duration}</span>
        </div>

        <h1 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {service.name}
          <span className="block text-lg font-normal text-ink/40 sm:text-xl">
            {locale === "ru" ? "в Sunny Isles Beach, Miami" : "in Sunny Isles Beach, Miami"}
          </span>
        </h1>

        <p className="mt-5 text-lg font-bold text-ink">
          {locale === "ru" ? "от " : "From "}{service.priceFrom}
        </p>

        <p className="mt-5 text-base leading-relaxed text-ink/65">
          {service.longDescription}
        </p>

        {service.packages && service.packages.length > 0 && (
          <div className="mt-6 rounded-2xl border border-warm-200 bg-warm-50/50 p-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-ink/40">
              {locale === "ru" ? "Варианты и цены" : "Options & Pricing"}
            </p>
            <div className="divide-y divide-warm-200">
              {service.packages.map((pkg) => (
                <div key={pkg.name} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
                  <div>
                    <span className="text-sm font-medium text-ink">{pkg.name}</span>
                    {pkg.duration && (
                      <span className="ml-2 text-xs text-ink/40">{pkg.duration}</span>
                    )}
                  </div>
                  <span className="text-sm font-bold text-ink">{pkg.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="mt-4 text-sm text-ink/50">
          {locale === "ru"
            ? `Процедура ${service.name} доступна в Laser & More по адресу ${businessInfo.address.street}, Sunny Isles Beach, FL. Обслуживаем клиентов из Miami, Aventura и North Miami Beach.`
            : `${service.name} is available at Laser & More, ${businessInfo.address.street}, Sunny Isles Beach, FL. Serving clients from Miami, Aventura, and North Miami Beach.`}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={businessInfo.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="group rounded-full bg-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-ink/85 hover:shadow-glow"
          >
            {locale === "ru" ? "Записаться" : "Book This Treatment"}
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </Link>
          <Link
            href={`/${locale}/services`}
            className="rounded-full border border-warm-300 px-7 py-3.5 text-sm font-semibold text-ink/60 transition-all hover:border-ink/30 hover:text-ink"
          >
            {locale === "ru" ? "Все услуги" : "All Services"}
          </Link>
        </div>
      </article>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="rounded-4xl border border-warm-200 bg-white p-8 sm:p-10">
          <h2 className="font-display text-2xl font-bold text-ink">
            {locale === "ru" ? "Частые вопросы" : "Frequently Asked"}
          </h2>
          <div className="mt-6 divide-y divide-warm-100">
            {service.faqs.map((faq, i) => (
              <div key={i} className="py-5 first:pt-0 last:pb-0">
                <h3 className="text-sm font-bold text-ink">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      </div>
    </div>
  );
}
