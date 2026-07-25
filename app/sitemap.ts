import type { MetadataRoute } from "next";
import { businessInfo, contentLastUpdated } from "@/content/business";
import { locales, localeToLang } from "@/lib/i18n/config";
import { servicesEn } from "@/content/services.en";
import { servicesRu } from "@/content/services.ru";
import { blogPostsEn } from "@/content/blog.en";
import { blogPostsRu } from "@/content/blog.ru";

const basePaths = ["", "/services", "/about", "/blog", "/gift-cards", "/contact"] as const;

function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[localeToLang[locale]] = `${businessInfo.domain}/${locale}${path}`;
  }
  languages["x-default"] = `${businessInfo.domain}/en${path}`;
  return languages;
}

function entry(
  path: string,
  options: {
    lastModified?: Date;
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority?: number;
  } = {}
): MetadataRoute.Sitemap[number] {
  return {
    url: `${businessInfo.domain}/en${path}`,
    lastModified: options.lastModified ?? new Date(),
    changeFrequency: options.changeFrequency ?? "weekly",
    priority: options.priority ?? 0.8,
    alternates: {
      languages: languageAlternates(path)
    }
  };
}

/**
 * Pair EN/RU service slugs by index (content arrays are parallel).
 * Falls back to EN-only if counts diverge.
 */
function serviceLanguageAlternates(
  enSlug: string,
  ruSlug: string | undefined
): Record<string, string> {
  const languages: Record<string, string> = {
    "en-US": `${businessInfo.domain}/en/services/${enSlug}`,
    "x-default": `${businessInfo.domain}/en/services/${enSlug}`
  };
  if (ruSlug) {
    languages["ru-RU"] = `${businessInfo.domain}/ru/services/${ruSlug}`;
  }
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Stable, real revision date — not `new Date()`, which would claim every
  // URL changed on every crawl and get lastmod discounted.
  const now = new Date(contentLastUpdated);

  const staticUrls: MetadataRoute.Sitemap = basePaths.map((path) =>
    entry(path, {
      lastModified: now,
      changeFrequency: "weekly",
      priority: path === "" ? 1 : path === "/blog" ? 0.9 : 0.8
    })
  );

  // One sitemap row per EN service with hreflang to RU counterpart
  const serviceUrls: MetadataRoute.Sitemap = servicesEn.map((service, index) => {
    const ruSlug = servicesRu[index]?.slug;
    return {
      url: `${businessInfo.domain}/en/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
      alternates: {
        languages: serviceLanguageAlternates(service.slug, ruSlug)
      }
    };
  });

  // Blog posts share the same slug across locales
  const blogUrls: MetadataRoute.Sitemap = blogPostsEn.map((post) => {
    const path = `/blog/${post.slug}`;
    return {
      url: `${businessInfo.domain}/en${path}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.65,
      alternates: {
        languages: languageAlternates(path)
      }
    };
  });

  // Also list RU service URLs as crawlable entries (Google supports both patterns)
  const ruServiceUrls: MetadataRoute.Sitemap = servicesRu.map((service, index) => {
    const enSlug = servicesEn[index]?.slug;
    return {
      url: `${businessInfo.domain}/ru/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
      ...(enSlug
        ? {
            alternates: {
              languages: serviceLanguageAlternates(enSlug, service.slug)
            }
          }
        : {})
    };
  });

  const ruBlogUrls: MetadataRoute.Sitemap = blogPostsRu.map((post) => ({
    url: `${businessInfo.domain}/ru/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
    alternates: { languages: languageAlternates(`/blog/${post.slug}`) }
  }));

  const ruStatic: MetadataRoute.Sitemap = basePaths.map((path) => ({
    url: `${businessInfo.domain}/ru${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 0.95 : 0.75,
    alternates: { languages: languageAlternates(path) }
  }));

  return [
    ...staticUrls,
    ...ruStatic,
    ...serviceUrls,
    ...ruServiceUrls,
    ...blogUrls,
    ...ruBlogUrls
  ];
}
