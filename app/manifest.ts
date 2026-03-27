import type { MetadataRoute } from "next";
import { businessInfo } from "@/content/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: businessInfo.name,
    short_name: "Laser & More",
    description: "Aesthetic studio in Sunny Isles Beach, Miami",
    start_url: "/en",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#1A1A1A",
    icons: [
      { src: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/icon-512.png", sizes: "512x512", type: "image/png" }
    ]
  };
}
