import Link from "next/link";
import { ServiceItem } from "@/content/services.types";
import { Locale } from "@/lib/i18n/config";
import { businessInfo } from "@/content/business";

type ServiceGridProps = {
  services: ServiceItem[];
  locale: Locale;
  heading?: string;
  subheading?: string;
};

const categoryColors: Record<string, string> = {
  laser: "bg-rose/10 text-rose",
  facial: "bg-amber-50 text-gold",
  skin: "bg-violet-50 text-violet-600",
  body: "bg-emerald-50 text-emerald-700",
  consultation: "bg-sky-50 text-sky-600"
};

export function ServiceGrid({ services, locale, heading, subheading }: ServiceGridProps) {
  return (
    <section>
      {heading && (
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-3 max-w-2xl text-ink/60">{subheading}</p>
          )}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service, i) => (
          <article
            key={service.slug}
            className={`animate-fade-in-up stagger-${Math.min(i + 1, 5)} group relative rounded-2xl border border-warm-200 bg-white p-6 transition-all hover:border-warm-300 hover:shadow-card`}
          >
            <div className="flex items-start justify-between gap-3">
              <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${categoryColors[service.category] ?? "bg-warm-100 text-ink/50"}`}>
                {service.category}
              </span>
              <span className="whitespace-nowrap text-sm font-bold text-ink">
                {service.priceFrom}
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold text-ink">
              {service.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              {service.shortDescription}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-warm-100 pt-4">
              <span className="text-xs font-medium text-ink/40">
                {service.duration}
              </span>
              <div className="flex gap-3">
                <Link
                  href={`/${locale}/services/${service.slug}`}
                  className="text-xs font-semibold text-ink/50 transition-colors hover:text-ink"
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
  );
}
