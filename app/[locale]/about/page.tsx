import type { Metadata } from "next";
import Link from "next/link";
import { StructuredData } from "@/components/seo/StructuredData";
import { businessInfo } from "@/content/business";
import { isLocale, Locale } from "@/lib/i18n/config";
import { buildLocalizedMetadata } from "@/lib/seo/metadata";
import {
  createBreadcrumbSchema,
  createLocalBusinessSchema,
  createPersonSchema
} from "@/lib/seo/schema";
import { notFound } from "next/navigation";
import { PhotoCarousel } from "@/components/PhotoCarousel";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  return buildLocalizedMetadata({
    locale: localeParam,
    path: "/about",
    title:
      localeParam === "ru"
        ? "Об Анжелике — эстетические процедуры в Sunny Isles Beach"
        : "About Anzhelika — Aesthetic Studio in Sunny Isles Beach, Miami",
    description:
      localeParam === "ru"
        ? "Анжелика — основатель Laser & More, мед-эстетического центра в Sunny Isles Beach, Miami. Персонализированный подход к лазерным процедурам и уходам за лицом."
        : "Meet Anzhelika, founder of Laser & More in Sunny Isles Beach, Miami. Personalized laser and facial treatments with bilingual care in English and Russian.",
    keywords: [
      "Anzhelika aesthetic studio",
      "Laser & More owner",
      "aesthetic studio Sunny Isles Beach",
      "esthetician Sunny Isles"
    ]
  });
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const breadcrumbs = [
    { name: locale === "ru" ? "Главная" : "Home", url: `/${locale}` },
    { name: locale === "ru" ? "О нас" : "About", url: `/${locale}/about` }
  ];

  return (
    <div>
      <StructuredData data={createLocalBusinessSchema()} />
      <StructuredData data={createPersonSchema()} />
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
      <div className="space-y-12">
      <section className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
        <article className="rounded-4xl border border-warm-200 bg-white p-8 shadow-soft sm:p-10">
          <p className="text-xs font-bold uppercase tracking-widest text-rose">
            {locale === "ru" ? "Основатель • Sunny Isles Beach" : "Founder • Sunny Isles Beach"}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {locale === "ru" ? "Анжелика" : "Anzhelika"}
            <span className="block text-lg font-normal text-ink/40 sm:text-xl">
              {locale === "ru" ? "Laser & More, Sunny Isles Beach, Miami" : "Laser & More, Sunny Isles Beach, Miami"}
            </span>
          </h1>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/65">
            <p>
              {locale === "ru"
                ? "Анжелика — основатель Laser & More в Sunny Isles Beach, Miami. С вниманием к каждому клиенту она подбирает наиболее эффективные и комфортные процедуры для лица и тела."
                : "Anzhelika is the founder of Laser & More, an aesthetic studio located in Sunny Isles Beach, Miami. She combines technical expertise with genuine personal attention to deliver effective, comfortable treatments for face and body."}
            </p>
            <p>
              {locale === "ru"
                ? "Консультации проводятся на английском и русском языках. Каждый визит начинается с оценки состояния кожи, обсуждения целей и вашего образа жизни — чтобы протокол процедуры был именно для вас."
                : "Consultations are available in both English and Russian. Every visit begins with a thorough assessment of your skin, goals, and lifestyle — so your treatment plan is built specifically for you."}
            </p>
            <p>
              {locale === "ru"
                ? "В Laser & More представлены передовые технологии: лазерная эпиляция, HydraFacial, микронидлинг, DMK-энзимная терапия, RF-лифтинг, VelaShape и многое другое. Мы обслуживаем клиентов из Sunny Isles Beach, Miami, Aventura и North Miami Beach."
                : "Laser & More features advanced technologies including laser hair removal, HydraFacial, microneedling, DMK enzyme therapy, RF skin tightening, VelaShape body contouring, and more. We serve clients from Sunny Isles Beach, Miami, Aventura, and North Miami Beach."}
            </p>
          </div>

          <Link
            href={businessInfo.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-ink/85 hover:shadow-glow"
          >
            {locale === "ru" ? "Записаться" : "Book Online"} &rarr;
          </Link>
        </article>

        <PhotoCarousel
          photos={[
            {
              src: "/images/owner-treatment.png",
              alt: locale === "ru" ? "Анжелика — основатель Laser & More" : "Anzhelika — Founder of Laser & More"
            },
            {
              src: "/images/owner-portrait.png",
              alt: locale === "ru" ? "Анжелика — профессиональный портрет" : "Anzhelika — Professional Portrait"
            },
            {
              src: "/images/owner-closeup.png",
              alt: locale === "ru" ? "Анжелика — портрет крупным планом" : "Anzhelika — Portrait"
            }
          ]}
        />
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          {
            label: locale === "ru" ? "Языки" : "Languages",
            value: locale === "ru" ? "Английский, Русский" : "English, Russian"
          },
          {
            label: locale === "ru" ? "Локация" : "Location",
            value: `${businessInfo.address.street}, ${businessInfo.address.city}`
          },
          {
            label: locale === "ru" ? "График" : "Hours",
            value: locale === "ru" ? "Пн-Пт 10-19:30, Сб 10-18" : "Mon-Fri 10-7:30pm, Sat 10-6pm"
          }
        ].map((fact) => (
          <div key={fact.label} className="rounded-2xl border border-warm-200 bg-white px-6 py-5">
            <p className="text-xs font-bold uppercase tracking-widest text-ink/30">{fact.label}</p>
            <p className="mt-2 text-sm font-semibold text-ink">{fact.value}</p>
          </div>
        ))}
      </section>
      </div>
    </div>
  );
}
