export const locales = ["en", "ru"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeToLang = {
  en: "en-US",
  ru: "ru-RU"
} as const;
