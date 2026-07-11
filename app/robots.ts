import type { MetadataRoute } from "next";
import { businessInfo } from "@/content/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"]
      },
      {
        userAgent: "GPTBot",
        allow: "/"
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/"
      },
      {
        userAgent: "Google-Extended",
        allow: "/"
      }
    ],
    sitemap: `${businessInfo.domain}/sitemap.xml`,
    host: businessInfo.domain
  };
}
