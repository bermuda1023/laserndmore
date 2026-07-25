import Link from "next/link";
import { Dictionary } from "@/lib/i18n/getDictionary";
import { Locale } from "@/lib/i18n/config";
import { googleReviews, reviewSummary } from "@/content/reviews";

type ReviewsProps = {
  dict: Dictionary;
  locale: Locale;
};

/** Multi-color Google "G" mark (inline so it needs no external asset). */
function GoogleGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" className={className}>
      <path fill="#4285F4" d="M23.52 12.27c0-.82-.07-1.6-.2-2.36H12v4.46h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.73z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.95-2.91l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.28v3.09A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.28a7.2 7.2 0 0 1 0-4.56V6.63H1.28a12 12 0 0 0 0 10.74l3.99-3.09z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0A12 12 0 0 0 1.28 6.63l3.99 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
    </svg>
  );
}

/** Row of five stars, filled up to `rating`. */
function Stars({
  rating,
  size = 18,
  label
}: {
  rating: number;
  size?: number;
  /** Accessible text alternative; omit where nearby text already states the rating. */
  label?: string;
}) {
  return (
    <span
      className="inline-flex"
      {...(label
        ? { role: "img", "aria-label": label }
        : { "aria-hidden": true as const })}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < Math.round(rating) ? "#fbbc04" : "none"}
          stroke="#fbbc04"
          strokeWidth="1.5"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

export function Reviews({ dict, locale }: ReviewsProps) {
  const { ratingValue, reviewCount, readUrl, writeUrl } = reviewSummary;
  const ratingLabel = ratingValue.toFixed(1);
  const basedOn = dict.reviews.basedOn.replace("{count}", String(reviewCount));

  return (
    <section aria-labelledby="reviews-heading">
      <div className="mb-8">
        <h2
          id="reviews-heading"
          className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          {dict.reviews.title}
        </h2>
        <p className="mt-3 max-w-2xl text-ink/60">{dict.reviews.subtitle}</p>
      </div>

      {/* Rating summary + Google CTAs */}
      <div className="flex flex-col gap-6 rounded-2xl border border-warm-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <div className="text-center">
            <p className="font-display text-5xl font-bold leading-none text-ink">{ratingLabel}</p>
            <div className="mt-2 flex justify-center">
              <Stars rating={ratingValue} />
            </div>
          </div>
          <div className="border-l border-warm-200 pl-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-ink">
              <GoogleGlyph />
              Google
            </p>
            <p className="mt-1 text-sm text-ink/60">{basedOn}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={readUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition-all hover:border-ink/30 hover:shadow-soft"
          >
            {dict.reviews.readAll}
          </Link>
          <Link
            href={writeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-ink/85 hover:shadow-glow"
          >
            {dict.reviews.leaveReview}
          </Link>
        </div>
      </div>

      {/* Featured review cards (rendered only when real reviews are provided) */}
      {googleReviews.length > 0 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((review, i) => {
            const isTranslated = locale === "ru" && Boolean(review.text.ru);
            return (
              <figure
                key={`${review.author}-${i}`}
                // Delay is inline rather than a `stagger-*` class: those are
                // built from a template literal, so Tailwind can't see them.
                style={{ animationDelay: `${Math.min(i + 1, 6) * 0.1}s` }}
                className="animate-fade-in-up flex h-full flex-col rounded-2xl border border-warm-200 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <Stars
                    rating={review.rating}
                    size={16}
                    label={dict.reviews.starsLabel.replace(
                      "{rating}",
                      String(review.rating)
                    )}
                  />
                  <GoogleGlyph />
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                  &ldquo;{isTranslated ? review.text.ru : review.text.en}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-warm-100 pt-4 text-sm font-semibold text-ink">
                  {review.author}
                  {isTranslated && (
                    <span className="ml-2 font-normal text-xs text-ink/40">
                      {dict.reviews.translated}
                    </span>
                  )}
                </figcaption>
              </figure>
            );
          })}
        </div>
      )}
    </section>
  );
}
