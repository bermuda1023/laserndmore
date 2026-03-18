import { type Locale } from "@/lib/i18n/config";
import en from "@/lib/i18n/dictionaries/en";
import ru from "@/lib/i18n/dictionaries/ru";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ru
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
