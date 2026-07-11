import type { Metadata } from "next";
import { businessInfo, seoAssets } from "@/content/business";
import { type Locale, localeToLang, locales } from "@/lib/i18n/config";

type LocalizedMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  /** Open Graph type — use "article" for blog posts */
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  images?: Array<{ url: string; width?: number; height?: number; alt?: string }>;
  noIndex?: boolean;
};

function getLocalePath(locale: Locale, path?: string) {
  if (!path || path === "/") return `/${locale}`;
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Ensure a single brand suffix. Strips existing "| Laser & More" tails so we
 * never produce "Title | Laser & More | Laser & More" when combined with the
 * root layout title template.
 */
export function withBrandTitle(title: string): string {
  const brand = businessInfo.name;
  let cleaned = title.trim();

  // Collapse repeated brand suffixes first
  const brandSuffix = new RegExp(
    `(?:\\s*[|–—-]\\s*${escapeRegExp(brand)})+$`,
    "i"
  );
  cleaned = cleaned.replace(brandSuffix, "").trim();

  if (!cleaned) return brand;
  return `${cleaned} | ${brand}`;
}

export function buildLocalizedMetadata({
  locale,
  title,
  description,
  path = "/",
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  images,
  noIndex = false
}: LocalizedMetadataInput): Metadata {
  const fullTitle = withBrandTitle(title);
  const localePath = getLocalePath(locale, path);
  const absoluteUrl = `${businessInfo.domain}${localePath}`;

  const languages = Object.fromEntries(
    locales.map((currentLocale) => {
      const langCode = localeToLang[currentLocale];
      return [langCode, getLocalePath(currentLocale, path)];
    })
  );

  const ogImages = (
    images ?? [
      {
        url: seoAssets.ogImage,
        width: 1200,
        height: 630,
        alt: `${businessInfo.name} — Aesthetic studio in Sunny Isles Beach, Miami`
      }
    ]
  ).map((image) => ({
    ...image,
    url: image.url.startsWith("http")
      ? image.url
      : `${businessInfo.domain}${image.url.startsWith("/") ? image.url : `/${image.url}`}`
  }));

  const twitterImages = ogImages.map((image) => image.url);

  return {
    // absolute bypasses root layout `title.template` to prevent double-branding
    title: {
      absolute: fullTitle
    },
    description,
    applicationName: businessInfo.name,
    authors: (authors ?? [businessInfo.owner]).map((name) => ({ name })),
    creator: businessInfo.name,
    publisher: businessInfo.name,
    category: "Beauty & Wellness",
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    alternates: {
      canonical: absoluteUrl,
      languages: {
        ...Object.fromEntries(
          Object.entries(languages).map(([lang, href]) => [
            lang,
            `${businessInfo.domain}${href}`
          ])
        ),
        "x-default": `${businessInfo.domain}${getLocalePath(locales[0], path)}`
      }
    },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl,
      siteName: businessInfo.name,
      locale: localeToLang[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => localeToLang[l]),
      type,
      images: ogImages,
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            authors: authors ?? [businessInfo.owner],
            section: "Skincare"
          }
        : {})
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: twitterImages
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
          }
        }
  };
}
