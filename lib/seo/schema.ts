import { businessInfo, businessSameAs, seoAssets } from "@/content/business";
import { ServiceItem } from "@/content/services.types";
import { BlogPost } from "@/content/blog.types";
import { Locale, localeToLang } from "@/lib/i18n/config";

const dayMap: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday"
};

const areaServed = [
  { "@type": "City", name: "Sunny Isles Beach" },
  { "@type": "City", name: "Miami" },
  { "@type": "City", name: "Aventura" },
  { "@type": "City", name: "North Miami Beach" },
  { "@type": "City", name: "Hallandale Beach" },
  { "@type": "City", name: "Bal Harbour" },
  { "@type": "City", name: "Golden Beach" },
  { "@type": "City", name: "Surfside" }
];

function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${businessInfo.domain}${path.startsWith("/") ? path : `/${path}`}`;
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: businessInfo.address.street,
    addressLocality: businessInfo.address.city,
    addressRegion: businessInfo.address.region,
    postalCode: businessInfo.address.postalCode,
    addressCountry: businessInfo.address.country
  };
}

function parsePrice(priceFrom: string): string | undefined {
  const match = priceFrom.replace(/[^0-9.]/g, "");
  return match || undefined;
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "LocalBusiness", "HealthAndBeautyBusiness"],
    "@id": `${businessInfo.domain}/#business`,
    name: businessInfo.name,
    alternateName: ["Laser and More", "Laser N More"],
    image: [
      absoluteUrl(seoAssets.primaryImage),
      absoluteUrl(seoAssets.ogImage),
      absoluteUrl(seoAssets.logo)
    ],
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(seoAssets.logo),
      width: 810,
      height: 288
    },
    url: businessInfo.domain,
    telephone: businessInfo.phoneE164,
    email: businessInfo.email,
    description:
      "Laser & More is an aesthetic studio in Sunny Isles Beach, Miami offering laser hair removal, facials, microneedling, chemical peels, RF skin tightening, and body contouring.",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.coordinates.latitude,
      longitude: businessInfo.coordinates.longitude
    },
    areaServed,
    sameAs: [...businessSameAs],
    hasMap: businessInfo.googleUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "97",
      bestRating: "5",
      worstRating: "1"
    },
    availableLanguage: businessInfo.languages,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: businessInfo.phoneE164,
        contactType: "customer service",
        email: businessInfo.email,
        areaServed: "US",
        availableLanguage: businessInfo.languages
      }
    ],
    makesOffer: {
      "@type": "Offer",
      url: businessInfo.bookingUrl,
      description: "Online booking for aesthetic treatments at Laser & More"
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

export function createWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${businessInfo.domain}/#website`,
    name: businessInfo.name,
    url: businessInfo.domain,
    description:
      "Official website for Laser & More aesthetic studio in Sunny Isles Beach, Miami.",
    inLanguage: ["en-US", "ru-RU"],
    publisher: {
      "@id": `${businessInfo.domain}/#business`
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: businessInfo.bookingUrl,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      result: {
        "@type": "Reservation",
        name: "Book an appointment"
      }
    }
  };
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${businessInfo.domain}/#organization`,
    name: businessInfo.name,
    url: businessInfo.domain,
    logo: absoluteUrl(seoAssets.logo),
    email: businessInfo.email,
    telephone: businessInfo.phoneE164,
    sameAs: [...businessSameAs],
    address: postalAddress()
  };
}

export function createServiceSchema(service: ServiceItem, locale: Locale = "en") {
  const price = parsePrice(service.priceFrom);
  const serviceUrl = absoluteUrl(`/${locale}/services/${service.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.name,
    description: service.longDescription,
    serviceType: service.category,
    url: serviceUrl,
    provider: {
      "@id": `${businessInfo.domain}/#business`,
      "@type": "BeautySalon",
      name: businessInfo.name,
      url: businessInfo.domain,
      address: postalAddress(),
      telephone: businessInfo.phoneE164
    },
    areaServed,
    ...(price
      ? {
          offers: {
            "@type": "AggregateOffer",
            url: businessInfo.bookingUrl,
            priceCurrency: "USD",
            lowPrice: price,
            offerCount: service.packages?.length
              ? String(service.packages.length)
              : "1",
            availability: "https://schema.org/InStock",
            priceValidUntil: `${new Date().getFullYear() + 1}-12-31`
          }
        }
      : {
          offers: {
            "@type": "Offer",
            url: businessInfo.bookingUrl,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock"
          }
        })
  };
}

export function createServiceItemListSchema(
  services: ServiceItem[],
  locale: Locale
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name:
      locale === "ru"
        ? "Услуги Laser & More"
        : "Laser & More Aesthetic Services",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: absoluteUrl(`/${locale}/services/${service.slug}`),
      description: service.shortDescription
    }))
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
      item: absoluteUrl(item.url)
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
  const pageUrl = absoluteUrl(`/${locale}/blog/${post.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${pageUrl}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: localeToLang[locale],
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.content.join(" ").split(/\s+/).filter(Boolean).length,
    timeRequired: `PT${post.readTime}M`,
    image: [absoluteUrl(seoAssets.ogImage), absoluteUrl(seoAssets.primaryImage)],
    author: {
      "@type": "Person",
      name: businessInfo.owner,
      url: absoluteUrl(`/${locale}/about`),
      jobTitle: "Founder & Esthetician"
    },
    publisher: {
      "@type": "Organization",
      name: businessInfo.name,
      url: businessInfo.domain,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(seoAssets.logo)
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl
    },
    isPartOf: {
      "@type": "Blog",
      name: `${businessInfo.name} Blog`,
      url: absoluteUrl(`/${locale}/blog`)
    }
  };
}

export function createBlogListSchema(posts: BlogPost[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "ru" ? "Блог Laser & More" : "Laser & More Skincare Blog",
    numberOfItems: posts.length,
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: absoluteUrl(`/${locale}/blog/${post.slug}`)
    }))
  };
}

export function createPersonSchema(locale: Locale = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${businessInfo.domain}/#founder`,
    name: businessInfo.owner,
    jobTitle: "Founder & Esthetician",
    image: absoluteUrl(seoAssets.ownerPortrait),
    worksFor: {
      "@id": `${businessInfo.domain}/#business`,
      "@type": "BeautySalon",
      name: businessInfo.name,
      url: businessInfo.domain
    },
    url: absoluteUrl(`/${locale}/about`),
    sameAs: [...businessSameAs],
    knowsLanguage: businessInfo.languages
  };
}
