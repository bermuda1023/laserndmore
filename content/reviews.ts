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
export const googleReviews: GoogleReview[] = [
  {
    author: "Kristina Mazhar",
    rating: 5,
    date: "2026-03-01",
    text: {
      en: "I am so happy with my laser hair removal results! I have tried different laser treatments in the past, but none of them gave me noticeable improvements. Since going to Laser & More, the change has been dramatic. My skin is much smoother, and with every treatment, my hair is thinner, lighter, and grows more slowly! This is the only laser that has truly worked for me, and the process is extremely comfortable and painless. I highly recommend going to Laser & More for effective, long-lasting results!!!",
      ru: "Я очень довольна результатами лазерной эпиляции! Раньше я пробовала разные лазерные процедуры, но ни одна не давала заметных улучшений. С тех пор как я хожу в Laser & More, изменения кардинальные. Кожа стала намного глаже, и с каждой процедурой волосы тоньше, светлее и растут медленнее! Это единственный лазер, который действительно помог мне, а сама процедура очень комфортная и безболезненная. Очень рекомендую Laser & More за эффективный и долговременный результат!!!"
    }
  },
  {
    author: "Lance Rozenfeld",
    rating: 5,
    date: "2025-12-01",
    text: {
      en: "I had an amazing experience with Anzhelika at Laser & More. From start to finish, she was incredibly professional, knowledgeable, and attentive. She took the time to explain everything clearly, made sure I was comfortable throughout the entire process, and genuinely cared about delivering the best possible results.",
      ru: "У меня был замечательный опыт с Анжеликой в Laser & More. От начала и до конца она была невероятно профессиональной, знающей и внимательной. Она не спеша всё подробно объяснила, следила за тем, чтобы мне было комфортно на протяжении всей процедуры, и искренне заботилась о том, чтобы добиться наилучшего результата."
    }
  },
  {
    author: "Mariana Arteaga",
    rating: 5,
    date: "2026-01-01",
    text: {
      en: "I've been doing laser in all my body with Anzhelika for a couple sessions, she's very professional and I saw results from the first session. My skin looks better and I'm very happy with her attention. I recommend her for this procedure and facials too 💜",
      ru: "Я уже несколько сеансов делаю лазерную эпиляцию всего тела у Анжелики — она очень профессиональна, и я увидела результат уже после первого сеанса. Кожа выглядит лучше, и я очень довольна её вниманием. Рекомендую её для этой процедуры, а также для уходов за лицом 💜"
    }
  },
  {
    author: "Allyson Powers",
    rating: 5,
    date: "2026-03-01",
    text: {
      en: "Anzhelika is a very talented woman specializing in laser. She gets the hair gone quick and efficiently and she is very fair in price as well. The environment where she works is very clean. I'm glad I found her!",
      ru: "Анжелика — очень талантливый специалист по лазерной эпиляции. Она удаляет волосы быстро и качественно, а цены очень честные. В кабинете, где она работает, очень чисто. Я рада, что нашла её!"
    }
  },
  {
    author: "O D",
    rating: 5,
    date: "2026-04-01",
    text: {
      en: "Got the best facial! Anzhelika is amazing and took beautiful care of my skin. Highly recommend!!!",
      ru: "Мне сделали лучший уход за лицом! Анжелика великолепна и прекрасно позаботилась о моей коже. Очень рекомендую!!!"
    }
  },
  {
    author: "farrah",
    rating: 5,
    date: "2026-04-01",
    text: {
      en: "Had a great experience with laser hair removal! She's super sweet and welcoming. Highly recommend!",
      ru: "Отличный опыт лазерной эпиляции! Она очень милая и гостеприимная. Очень рекомендую!"
    }
  }
];
