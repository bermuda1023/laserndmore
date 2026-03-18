import type { MetadataRoute } from "next";
import { businessInfo } from "@/content/business";
import { locales } from "@/lib/i18n/config";
import { servicesEn } from "@/content/services.en";
import { servicesRu } from "@/content/services.ru";

const basePaths = ["", "/services", "/about", "/gift-cards", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticUrls = locales.flatMap((locale) =>
    basePaths.map((path) => ({
      url: `${businessInfo.domain}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8
    }))
  );

  const serviceUrls = [
    ...servicesEn.map((service) => ({
      url: `${businessInfo.domain}/en/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7
    })),
    ...servicesRu.map((service) => ({
      url: `${businessInfo.domain}/ru/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7
    }))
  ];

  return [...staticUrls, ...serviceUrls];
}
