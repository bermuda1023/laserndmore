import type { Metadata } from "next";
import Link from "next/link";
import { businessInfo } from "@/content/business";
import { isLocale, Locale } from "@/lib/i18n/config";
import { buildLocalizedMetadata } from "@/lib/seo/metadata";
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
    path: "/about",
    title:
      localeParam === "ru"
        ? "Об Анжелике — Med Spa Sunny Isles Beach"
        : "About Anzhelika — Med Spa Sunny Isles Beach, Miami",
    description:
      localeParam === "ru"
        ? "Анжелика — основатель Laser & More, мед-эстетического центра в Sunny Isles Beach, Miami. Персонализированный подход к лазерным процедурам и уходам за лицом."
        : "Meet Anzhelika, founder of Laser & More med spa in Sunny Isles Beach, Miami. Personalized laser and facial treatments with bilingual care in English and Russian.",
    keywords: [
      "Anzhelika med spa",
      "Laser & More owner",
      "med spa Sunny Isles Beach",
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

  return (
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
                : "Anzhelika is the founder of Laser & More, a med spa located in Sunny Isles Beach, Miami. She combines technical expertise with genuine personal attention to deliver effective, comfortable treatments for face and body."}
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

        <div className="flex flex-col gap-4">
          <div className="flex flex-1 items-center justify-center rounded-4xl border border-warm-200 bg-gradient-to-br from-warm-50 to-blush p-10 text-center">
            <div>
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-rose/10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rose">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="mt-4 text-sm font-medium text-ink/40">
                {locale === "ru" ? "Фото владельца скоро" : "Owner photo coming soon"}
              </p>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-4xl border border-warm-200 bg-gradient-to-br from-warm-50 to-warm-100 p-10 text-center">
            <div>
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gold/10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8.5" cy="8.5" r="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="mt-4 text-sm font-medium text-ink/40">
                {locale === "ru" ? "Фото интерьера скоро" : "Spa interior photo coming soon"}
              </p>
            </div>
          </div>
        </div>
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
  );
}
