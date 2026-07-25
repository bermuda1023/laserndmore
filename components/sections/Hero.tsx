import Link from "next/link";
import Image from "next/image";
import { Dictionary } from "@/lib/i18n/getDictionary";
import { Locale } from "@/lib/i18n/config";
import { businessInfo } from "@/content/business";

type HeroProps = {
  dict: Dictionary;
  locale: Locale;
};

export function Hero({ dict, locale }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-4xl bg-hero-gradient px-6 py-16 sm:px-12 sm:py-22 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(201,24,74,0.08),transparent)]" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1fr,auto]">
        <div>
          <p className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-rose/15 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-rose backdrop-blur-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-rose" />
            {dict.hero.badge}
          </p>

          <h1 className="animate-fade-in-up stagger-1 mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {dict.hero.title}
          </h1>

          <p className="animate-fade-in-up stagger-2 mt-6 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
            {dict.hero.description}
          </p>

          <div className="animate-fade-in-up stagger-3 mt-10 flex flex-wrap gap-3">
            <Link
              href={businessInfo.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="group rounded-full bg-ink px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-ink/85 hover:shadow-glow"
            >
              {dict.hero.primaryCta}
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">
                &rarr;
              </span>
            </Link>
            <Link
              href={`/${locale}/services`}
              className="rounded-full border border-ink/15 bg-white/60 px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:border-ink/30 hover:bg-white hover:shadow-soft"
            >
              {dict.hero.secondaryCta}
            </Link>
          </div>

          <div className="animate-fade-in-up stagger-4 mt-12 flex flex-wrap gap-6 text-xs uppercase tracking-widest text-ink/40">
            <span>Laser Hair Removal</span>
            <span className="hidden sm:inline">Hydrafacial</span>
            <span>Microneedling</span>
            <span className="hidden md:inline">Chemical Peels</span>
            <span>RF Tightening</span>
          </div>
        </div>

        <div className="animate-fade-in-up stagger-2 hidden lg:block">
          <div className="relative h-[420px] w-[300px] overflow-hidden rounded-3xl border border-warm-200/40 shadow-soft">
            <Image
              src="/images/owner-closeup.png"
              alt="Anzhelika, founder of Laser & More aesthetic studio in Sunny Isles Beach, Miami"
              fill
              sizes="300px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
