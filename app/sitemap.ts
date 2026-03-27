import type { MetadataRoute } from "next";
import { businessInfo } from "@/content/business";
import { locales } from "@/lib/i18n/config";
import { servicesEn } from "@/content/services.en";
import { servicesRu } from "@/content/services.ru";
import { blogPostsEn } from "@/content/blog.en";
import { blogPostsRu } from "@/content/blog.ru";

const basePaths = ["", "/services", "/about", "/blog", "/gift-cards", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticUrls = locales.flatMap((locale) =>
    basePaths.map((path) => ({
      url: `${businessInfo.domain}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : path === "/blog" ? 0.9 : 0.8
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

  const blogUrls = [
    ...blogPostsEn.map((post) => ({
      url: `${businessInfo.domain}/en/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6
    })),
    ...blogPostsRu.map((post) => ({
      url: `${businessInfo.domain}/ru/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];

  return [...staticUrls, ...serviceUrls, ...blogUrls];
}
