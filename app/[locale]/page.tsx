import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { Reviews } from "@/components/sections/Reviews";
import { StructuredData } from "@/components/seo/StructuredData";
import { getServices } from "@/content/services";
import { businessInfo, formatTime } from "@/content/business";
import { isLocale, Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildLocalizedMetadata } from "@/lib/seo/metadata";
import {
  createLocalBusinessSchema,
  createFaqSchema,
  createWebSiteSchema,
  createOrganizationSchema
} from "@/lib/seo/schema";
import Link from "next/link";
import { notFound } from "next/navigation";

const homeFaqsEn = [
  { q: "Where is Laser & More located?", a: "Laser & More is located at 17086 Collins Ave, Sunny Isles Beach, FL 33160 — serving Sunny Isles, Miami, Aventura, North Miami Beach, Bal Harbour, and Hallandale Beach." },
  { q: "What services do you offer in Sunny Isles Beach?", a: "We offer laser hair removal, Hydrafacial, microneedling, chemical peels, RF skin tightening, DMK enzyme therapy, body contouring with Endosphere and VelaShape, and many more facials and skin treatments." },
  { q: "Do you offer laser hair removal in Miami?", a: "Yes — Laser & More provides laser hair removal for all body zones at our Sunny Isles Beach location, conveniently located in the greater Miami area." },
  { q: "What languages are spoken at Laser & More?", a: "Consultations and treatments are available in both English and Russian." },
  { q: "How do I book an appointment?", a: "You can book directly online through our GlossGenius booking page, available 24/7 for instant scheduling." },
  { q: "Do you offer free consultations?", a: "Yes — we offer complimentary 15-minute in-office consultations to discuss your skin goals and recommend the right treatment plan." }
];

const homeFaqsRu = [
  { q: "Где находится Laser & More?", a: "Laser & More находится по адресу 17086 Collins Ave, Sunny Isles Beach, FL 33160 — обслуживаем Sunny Isles, Miami, Aventura, North Miami Beach, Bal Harbour и Hallandale Beach." },
  { q: "Какие мед-эстетические услуги вы предлагаете?", a: "Мы предлагаем лазерную эпиляцию, Hydrafacial, микронидлинг, химические пилинги, RF-лифтинг, DMK-энзимную терапию, контурирование тела Endosphere и VelaShape, а также множество уходов за лицом." },
  { q: "Вы предлагаете лазерную эпиляцию в Майами?", a: "Да — Laser & More проводит лазерную эпиляцию для всех зон тела в нашей локации в Sunny Isles Beach, удобно расположенной в районе большого Майами." },
  { q: "На каких языках проводятся консультации?", a: "Консультации и процедуры проводятся на английском и русском языках." },
  { q: "Как записаться на прием?", a: "Вы можете записаться онлайн через нашу страницу бронирования GlossGenius — доступно 24/7." },
  { q: "Есть ли бесплатные консультации?", a: "Да — мы предлагаем бесплатные 15-минутные консультации в офисе для обсуждения ваших целей и подбора плана ухода." }
];

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  return buildLocalizedMetadata({
    locale: localeParam,
    title:
      localeParam === "ru"
        ? "Эстетические процедуры в Sunny Isles Beach, Miami"
        : "Aesthetic Studio in Sunny Isles Beach, Miami",
    description:
      localeParam === "ru"
        ? "Laser & More — мед-эстетический центр в Sunny Isles Beach, Miami. Лазерная эпиляция, Hydrafacial, микронидлинг, пилинги, RF-лифтинг и уходы за лицом. Прием на английском и русском."
        : "Laser & More is an aesthetic studio in Sunny Isles Beach, Miami offering laser hair removal, Hydrafacial, microneedling, chemical peels, RF skin tightening, and personalized facials. English and Russian.",
    keywords: [
      "aesthetic studio Sunny Isles Beach",
      "laser hair removal Miami",
      "facials Sunny Isles Beach",
      "Hydrafacial Miami",
      "aesthetic studio near me Miami"
    ]
  });
}

export default async function LocaleHomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;

  const dict = getDictionary(locale);
  const services = getServices(locale).slice(0, 6);
  const faqs = locale === "ru" ? homeFaqsRu : homeFaqsEn;

  return (
    <div>
      <StructuredData data={createWebSiteSchema()} />
      <StructuredData data={createOrganizationSchema()} />
      <StructuredData data={createLocalBusinessSchema()} />
      <StructuredData data={createFaqSchema(faqs)} />
      <div className="space-y-16">
      <Hero dict={dict} locale={locale} />

      <ServiceGrid
        services={services}
        locale={locale}
        heading={
          locale === "ru"
            ? "Популярные процедуры в Sunny Isles Beach"
            : "Featured Treatments in Sunny Isles Beach"
        }
        subheading={
          locale === "ru"
            ? "Индивидуальный подход к каждой процедуре в нашей студии"
            : "Every treatment is personalized to your skin and goals at our Sunny Isles studio"
        }
      />

      <TrustSignals dict={dict} />

      <Reviews dict={dict} locale={locale} />

      {/* Hours */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {businessInfo.hours.filter(h => h.open).map((entry) => (
          <div key={entry.day} className="rounded-xl border border-warm-200 bg-white px-5 py-4">
            <p className="text-xs font-bold uppercase tracking-widest text-ink/30">{entry.day}</p>
            <p className="mt-1 text-sm font-semibold text-ink">{formatTime(entry.open!)} &ndash; {formatTime(entry.close!)}</p>
          </div>
        ))}
        <div className="rounded-xl border border-warm-200 bg-white px-5 py-4">
          <p className="text-xs font-bold uppercase tracking-widest text-ink/30">Sunday</p>
          <p className="mt-1 text-sm font-semibold text-ink/40">{locale === "ru" ? "Закрыто" : "Closed"}</p>
        </div>
      </section>

      {/* Local FAQ section */}
      <section>
        <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {locale === "ru"
            ? "Часто задаваемые вопросы о Laser & More"
            : "Frequently Asked Questions About Laser & More"}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-warm-200 bg-white p-6">
              <h3 className="text-sm font-bold text-ink">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative overflow-hidden rounded-4xl bg-cta-gradient px-6 py-14 text-white sm:px-12 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,24,74,0.2),transparent_50%)]" />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {locale === "ru"
              ? "Запишитесь в Laser & More — Sunny Isles Beach"
              : "Book Your Visit at Laser & More — Sunny Isles Beach"}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
            {dict.contact.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={businessInfo.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="group rounded-full bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-ink transition-all hover:bg-white/90 hover:shadow-glow"
            >
              {dict.nav.bookNow}
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              {dict.nav.contact}
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
