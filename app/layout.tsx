import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { cookies } from "next/headers";
import "@/app/globals.css";
import { businessInfo, seoAssets } from "@/content/business";
import { Locale, isLocale, localeToLang } from "@/lib/i18n/config";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F5" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1A1A" }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.domain),
  title: {
    default: `${businessInfo.name} | Aesthetic Studio in Sunny Isles Beach, Miami`,
    // Fallback only — page metadata uses absolute titles to avoid double brand
    template: `%s | ${businessInfo.name}`
  },
  description:
    "Laser & More is an aesthetic studio in Sunny Isles Beach, Miami offering laser hair removal, Hydrafacial, microneedling, chemical peels, RF skin tightening, and personalized facials. Bilingual care in English and Russian.",
  keywords: [
    "laser hair removal Sunny Isles Beach",
    "laser hair removal Miami",
    "facial Sunny Isles Beach",
    "facials near me Sunny Isles",
    "aesthetic studio Sunny Isles Beach",
    "aesthetic studio Miami",
    "Hydrafacial Sunny Isles",
    "Hydrafacial Miami",
    "microneedling Sunny Isles Beach",
    "chemical peel Miami",
    "RF skin tightening Miami",
    "body contouring Sunny Isles",
    "Laser & More",
    "aesthetic studio near me Miami",
    "facial near Aventura"
  ],
  applicationName: businessInfo.name,
  authors: [{ name: businessInfo.owner, url: `${businessInfo.domain}/en/about` }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  },
  openGraph: {
    type: "website",
    siteName: businessInfo.name,
    url: businessInfo.domain,
    title: `${businessInfo.name} | Aesthetic Studio in Sunny Isles Beach, Miami`,
    description:
      "Laser hair removal, Hydrafacial, microneedling, chemical peels, and body contouring in Sunny Isles Beach, Miami. English & Russian.",
    locale: "en_US",
    alternateLocale: ["ru_RU"],
    images: [
      {
        url: seoAssets.ogImage,
        width: 1200,
        height: 630,
        alt: "Laser & More — Aesthetic studio in Sunny Isles Beach, Miami"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessInfo.name} | Aesthetic Studio in Sunny Isles Beach, Miami`,
    description:
      "Laser hair removal, facials, and aesthetic treatments in Sunny Isles Beach, Miami.",
    images: [seoAssets.ogImage]
  },
  verification: {
    google: "xfHufKmLtA6x0UTKGjhg7_bKujXPLKeoaJXs1Vm7J_c"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [
      { url: seoAssets.favicon, sizes: "any" },
      { url: seoAssets.icon192, sizes: "192x192", type: "image/png" },
      { url: seoAssets.icon512, sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: seoAssets.appleTouchIcon, sizes: "180x180" }],
    shortcut: seoAssets.favicon
  },
  manifest: "/manifest.webmanifest",
  category: "beauty",
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Sunny Isles Beach",
    "geo.position": `${businessInfo.coordinates.latitude};${businessInfo.coordinates.longitude}`,
    ICBM: `${businessInfo.coordinates.latitude}, ${businessInfo.coordinates.longitude}`
  }
};

export default async function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const localeCookie = (await cookies()).get("NEXT_LOCALE")?.value ?? "";
  const locale: Locale = isLocale(localeCookie) ? localeCookie : "en";
  const lang = localeToLang[locale];

  return (
    <html lang={lang} className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
