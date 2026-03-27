export const businessInfo = {
  name: "Laser & More",
  owner: "Anzhelika",
  domain: "https://www.laserndmore.com",
  phone: "(407) 371-8806",
  email: "hello@laserndmore.com",
  address: {
    street: "17086 Collins Ave",
    city: "Sunny Isles Beach",
    region: "FL",
    postalCode: "33160",
    country: "US"
  },
  coordinates: {
    latitude: 25.9349,
    longitude: -80.1217
  },
  bookingUrl: "https://laserndmore.glossgenius.com/services",
  giftCardsUrl: "https://laserndmore.glossgenius.com/shop/gift-cards",
  aboutUrl: "https://laserndmore.glossgenius.com/about",
  googleUrl: "https://share.google/hBk0echr2LHgH1JZ5",
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

/** Convert "HH:MM" (24h) to "h:MM AM/PM" for display. */
export function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 || 12;
  return m === 0 ? `${hour12} ${period}` : `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
}
