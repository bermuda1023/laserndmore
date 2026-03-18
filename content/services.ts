import { servicesEn } from "@/content/services.en";
import { servicesRu } from "@/content/services.ru";
import { ServiceItem } from "@/content/services.types";
import { Locale } from "@/lib/i18n/config";

export function getServices(locale: Locale): ServiceItem[] {
  return locale === "ru" ? servicesRu : servicesEn;
}

export function getServiceBySlug(
  locale: Locale,
  slug: string
): ServiceItem | undefined {
  return getServices(locale).find((service) => service.slug === slug);
}
