import type { Locale } from "@/i18n/dictionaries";
import partnersZhCN from "./locales/partners.zh-CN";
import partnersEn from "./locales/partners.en";
import partnersJa from "./locales/partners.ja";
import partnersKo from "./locales/partners.ko";
import partnersRu from "./locales/partners.ru";
import partnersAr from "./locales/partners.ar";
import partnersEs from "./locales/partners.es";
import partnersFr from "./locales/partners.fr";
import partnersDe from "./locales/partners.de";
import partnersPt from "./locales/partners.pt";

export interface LocalizedPartner {
  name: string;
  short: string;
}

const partnerLocales: Record<Locale, LocalizedPartner[]> = {
  "zh-CN": partnersZhCN,
  en: partnersEn,
  ja: partnersJa,
  ko: partnersKo,
  ru: partnersRu,
  ar: partnersAr,
  es: partnersEs,
  fr: partnersFr,
  de: partnersDe,
  pt: partnersPt,
};

export function getPartners(locale: Locale): LocalizedPartner[] {
  return partnerLocales[locale] ?? partnerLocales["zh-CN"];
}
