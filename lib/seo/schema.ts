import { businessInfo } from "@/content/business";
import { ServiceItem } from "@/content/services.types";
import { BlogPost } from "@/content/blog.types";
import { Locale } from "@/lib/i18n/config";

const dayMap: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday"
};

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: businessInfo.name,
    image: `${businessInfo.domain}/images/placeholders/space-placeholder.svg`,
    url: businessInfo.domain,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    description:
      "Laser & More is an aesthetic studio in Sunny Isles Beach, Miami offering laser hair removal, facials, microneedling, chemical peels, RF skin tightening, and body contouring.",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.region,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.coordinates.latitude,
      longitude: businessInfo.coordinates.longitude
    },
    areaServed: [
      { "@type": "City", name: "Sunny Isles Beach" },
      { "@type": "City", name: "Miami" },
      { "@type": "City", name: "Aventura" },
      { "@type": "City", name: "North Miami Beach" },
      { "@type": "City", name: "Hallandale Beach" },
      { "@type": "City", name: "Bal Harbour" }
    ],
    sameAs: [businessInfo.instagramUrl, businessInfo.tiktokUrl, businessInfo.googleUrl],
    hasMap: businessInfo.googleUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "97",
      bestRating: "5"
    },
    availableLanguage: businessInfo.languages,
    makesOffer: {
      "@type": "Offer",
      url: businessInfo.bookingUrl
    },
    openingHoursSpecification: businessInfo.hours
      .filter((entry) => entry.open && entry.close)
      .map((entry) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[entry.day],
        opens: entry.open,
        closes: entry.close
      }))
  };
}

export function createServiceSchema(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.longDescription,
    provider: {
      "@type": "BeautySalon",
      name: businessInfo.name,
      url: businessInfo.domain,
      address: {
        "@type": "PostalAddress",
        streetAddress: businessInfo.address.street,
        addressLocality: businessInfo.address.city,
        addressRegion: businessInfo.address.region,
        postalCode: businessInfo.address.postalCode,
        addressCountry: businessInfo.address.country
      }
    },
    areaServed: [
      { "@type": "City", name: "Sunny Isles Beach" },
      { "@type": "City", name: "Miami" }
    ],
    offers: {
      "@type": "Offer",
      url: businessInfo.bookingUrl,
      priceCurrency: "USD",
      price: service.priceFrom.replace(/[^0-9.]/g, ""),
      availability: "https://schema.org/InStock"
    }
  };
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${businessInfo.domain}${item.url}`
    }))
  };
}

export function createFaqSchema(
  faqs: Array<{ q: string; a: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };
}

export function createBlogPostingSchema(post: BlogPost, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: businessInfo.owner
    },
    publisher: {
      "@type": "Organization",
      name: businessInfo.name,
      url: businessInfo.domain
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${businessInfo.domain}/${locale}/blog/${post.slug}`
    }
  };
}

export function createPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: businessInfo.owner,
    jobTitle: "Founder & Esthetician",
    worksFor: {
      "@type": "BeautySalon",
      name: businessInfo.name,
      url: businessInfo.domain
    },
    url: `${businessInfo.domain}/en/about`
  };
}
