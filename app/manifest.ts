import type { MetadataRoute } from "next";
import { businessInfo, seoAssets } from "@/content/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${businessInfo.name} — Aesthetic Studio`,
    short_name: businessInfo.name,
    description:
      "Aesthetic studio in Sunny Isles Beach, Miami — laser hair removal, facials, microneedling, and body contouring.",
    start_url: "/en",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#FAF8F5",
    theme_color: "#1A1A1A",
    lang: "en-US",
    categories: ["lifestyle", "health", "beauty"],
    icons: [
      {
        src: seoAssets.icon192,
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: seoAssets.icon512,
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: seoAssets.icon512,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
}
