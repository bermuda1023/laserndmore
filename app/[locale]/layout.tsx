import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import "@/app/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { businessInfo, seoAssets } from "@/content/business";
import { type Locale, isLocale, locales, localeToLang } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";

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

/** Prerender both locales at build time so pages are served statically. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

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

/**
 * Root layout. It lives under `[locale]` so the document language comes from
 * the URL rather than a cookie — reading cookies here would opt every route
 * out of static rendering.
 */
export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) notFound();
  const locale: Locale = localeParam;
  const dict = getDictionary(locale);

  return (
    <html
      lang={localeToLang[locale]}
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="font-body">
        <Header locale={locale} dict={dict} />
        <main className="mx-auto w-full max-w-7xl px-5 pb-10 pt-2 lg:px-8">
          {children}
        </main>
        <Footer dict={dict} locale={locale} />
        <WhatsAppWidget locale={locale} />
      </body>
    </html>
  );
}
