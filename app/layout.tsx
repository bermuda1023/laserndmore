import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { cookies } from "next/headers";
import "@/app/globals.css";
import { businessInfo } from "@/content/business";
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

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.domain),
  title: {
    default: `${businessInfo.name} | Aesthetic Studio in Sunny Isles Beach, Miami`,
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
  openGraph: {
    type: "website",
    siteName: businessInfo.name,
    url: businessInfo.domain,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-default.jpg"]
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
    icon: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.png"
  },
  manifest: "/manifest.webmanifest"
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
