import { businessInfo } from "@/content/business";

export type GoogleReview = {
  /** Reviewer display name as it appears on Google, e.g. "Jane D." */
  author: string;
  /** Star rating, 1–5 */
  rating: number;
  /** ISO date the review was published, e.g. "2025-06-01" */
  date: string;
  /** Review body. `en` is required; add `ru` to show a translated version to Russian visitors. */
  text: { en: string; ru?: string };
};

/**
 * Aggregate Google rating shown on-site and emitted in the LocalBusiness schema.
 * Keep these numbers in sync with your live Google Business Profile so the
 * on-page badge and the structured data (rich-result stars) always match.
 */
export const reviewSummary = {
  ratingValue: 5.0,
  reviewCount: 97,
  bestRating: 5,
  worstRating: 1,
  /** Link visitors to the full Google reviews listing */
  readUrl: businessInfo.googleUrl,
  /** Deep link that opens the "write a review" dialog on Google */
  writeUrl: businessInfo.googleReviewUrl
} as const;

/**
 * Real Google reviews featured as cards on the homepage.
 *
 * Paste genuine reviews copied from your Google Business Profile — do NOT
 * invent reviews. Leaving this array empty is fine: the section still shows
 * the 5.0★ rating summary and the "Read / Leave a review on Google" buttons.
 *
 * Example entry (uncomment and replace with a real review):
 *
 *   {
 *     author: "Jane D.",
 *     rating: 5,
 *     date: "2025-06-01",
 *     text: {
 *       en: "Anzhelika is incredibly knowledgeable and my skin has never looked better.",
 *       ru: "Анжелика — настоящий профессионал, моя кожа никогда не выглядела лучше."
 *     }
 *   },
 */
export const googleReviews: GoogleReview[] = [];
