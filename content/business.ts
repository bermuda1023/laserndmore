export const businessInfo = {
  name: "Laser & More",
  owner: "Anzhelika",
  domain: "https://www.laserndmore.com",
  phone: "(407) 371-8806",
  /** E.164 form for schema / tel: links */
  phoneE164: "+14073718806",
  email: "hello@laserndmore.com",
  address: {
    street: "17086 Collins Ave",
    city: "Sunny Isles Beach",
    region: "FL",
    postalCode: "33160",
    country: "US"
  },
  /** Aligned with Google Maps / booking platform pin */
  coordinates: {
    latitude: 25.9338876,
    longitude: -80.1233403
  },
  bookingUrl: "https://laserndmore.glossgenius.com/services",
  giftCardsUrl: "https://laserndmore.glossgenius.com/shop/gift-cards",
  aboutUrl: "https://laserndmore.glossgenius.com/about",
  googleUrl: "https://share.google/hBk0echr2LHgH1JZ5",
  googleReviewUrl: "https://g.page/r/CZ3S9-kpgq9yEBE/review",
  instagramUrl: "https://www.instagram.com/laserndmore",
  tiktokUrl: "https://www.tiktok.com/@laserndmore",
  hours: [
    { day: "Monday", open: "10:00", close: "19:30" },
    { day: "Tuesday", open: "10:00", close: "19:30" },
    { day: "Wednesday", open: "10:00", close: "19:30" },
    { day: "Thursday", open: "10:00", close: "19:30" },
    { day: "Friday", open: "10:00", close: "19:30" },
    { day: "Saturday", open: "10:00", close: "18:00" },
    { day: "Sunday", open: null, close: null }
  ],
  cancellationPolicy:
    "20% cancellation fee for no-shows or cancellations made within 24 hours of the appointment.",
  languages: ["English", "Russian"]
} as const;

/** Social / citation profiles for schema sameAs */
export const businessSameAs = [
  businessInfo.instagramUrl,
  businessInfo.tiktokUrl,
  businessInfo.googleUrl
] as const;

/** Canonical paths for SEO images (served from /public) */
export const seoAssets = {
  ogImage: "/images/og-default.jpg",
  primaryImage: "/images/business-primary.jpg",
  logo: "/images/logo.png",
  ownerPortrait: "/images/owner-portrait.png",
  ownerCloseup: "/images/owner-closeup.png",
  ownerTreatment: "/images/owner-treatment.png",
  favicon: "/images/favicon.ico",
  appleTouchIcon: "/images/apple-touch-icon.png",
  icon192: "/images/icon-192.png",
  icon512: "/images/icon-512.png"
} as const;

/** Convert "HH:MM" (24h) to "h:MM AM/PM" for display. */
export function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 || 12;
  return m === 0 ? `${hour12} ${period}` : `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
}

/** Full NAP line for consistent local citations */
export function formatAddressLine(): string {
  const { street, city, region, postalCode } = businessInfo.address;
  return `${street}, ${city}, ${region} ${postalCode}`;
}
