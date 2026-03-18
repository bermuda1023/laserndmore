import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import { businessInfo } from "@/content/business";

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
    default: `${businessInfo.name} | Med Spa in Sunny Isles Beach, Miami`,
    template: `%s | ${businessInfo.name}`
  },
  description:
    "Laser & More is a med spa in Sunny Isles Beach, Miami offering laser hair removal, Hydrafacial, microneedling, chemical peels, RF skin tightening, and personalized facials. Bilingual care in English and Russian.",
  keywords: [
    "laser hair removal Sunny Isles Beach",
    "laser hair removal Miami",
    "facial Sunny Isles Beach",
    "facials near me Sunny Isles",
    "med spa Sunny Isles Beach",
    "med spa Miami",
    "Hydrafacial Sunny Isles",
    "Hydrafacial Miami",
    "microneedling Sunny Isles Beach",
    "chemical peel Miami",
    "RF skin tightening Miami",
    "body contouring Sunny Isles",
    "Laser & More",
    "med spa near me Miami",
    "facial near Aventura"
  ],
  applicationName: businessInfo.name,
  openGraph: {
    type: "website",
    siteName: businessInfo.name,
    url: businessInfo.domain
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
