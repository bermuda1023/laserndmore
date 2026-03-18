import type { Metadata } from "next";
import { businessInfo } from "@/content/business";
import { type Locale, localeToLang, locales } from "@/lib/i18n/config";

type LocalizedMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

function getLocalePath(locale: Locale, path?: string) {
  if (!path || path === "/") return `/${locale}`;
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildLocalizedMetadata({
  locale,
  title,
  description,
  path = "/",
  keywords
}: LocalizedMetadataInput): Metadata {
  const fullTitle = `${title} | ${businessInfo.name}`;
  const localePath = getLocalePath(locale, path);
  const languages = Object.fromEntries(
    locales.map((currentLocale) => {
      const langCode = localeToLang[currentLocale];
      return [langCode, getLocalePath(currentLocale, path)];
    })
  );

  return {
    title: fullTitle,
    description,
    ...(keywords && { keywords }),
    alternates: {
      canonical: localePath,
      languages: {
        ...languages,
        "x-default": getLocalePath(locales[0], path)
      }
    },
    openGraph: {
      title: fullTitle,
      description,
      url: localePath,
      siteName: businessInfo.name,
      locale: localeToLang[locale],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description
    }
  };
}
