import { img } from "@/utils/format";
import type { Locale } from "@/i18n/dictionaries";
import checkupsZhCN from "./locales/checkups.zh-CN";
import checkupsEn from "./locales/checkups.en";
import checkupsJa from "./locales/checkups.ja";
import checkupsKo from "./locales/checkups.ko";
import checkupsRu from "./locales/checkups.ru";
import checkupsAr from "./locales/checkups.ar";
import checkupsEs from "./locales/checkups.es";
import checkupsFr from "./locales/checkups.fr";
import checkupsDe from "./locales/checkups.de";
import checkupsPt from "./locales/checkups.pt";

export interface BaseCheckupPackage {
  id: string;
  code: string;
  itemCount: number;
  priceFrom: number;
  cover: string;
}

export interface LocalizedCheckupPackage {
  name: string;
  tagline: string;
  recommendedFor: string;
  highlights: string[];
  flow: { step: number; title: string; detail: string }[];
  institutions: string[];
}

export interface CheckupPackage extends BaseCheckupPackage, LocalizedCheckupPackage {}

const baseCheckups: BaseCheckupPackage[] = [
  {
    id: "essential",
    code: "C · 01",
    itemCount: 86,
    priceFrom: 1880,
    cover: img(
      "Modern premium medical examination room with soft warm light, minimal design, photorealistic interior photography",
      "landscape_4_3"
    ),
  },
  {
    id: "deep",
    code: "C · 02",
    itemCount: 168,
    priceFrom: 4880,
    cover: img(
      "Premium VIP medical suite, panoramic window with mountain view, warm wood and stone interior, photorealistic",
      "landscape_4_3"
    ),
  },
  {
    id: "vip",
    code: "C · 03",
    itemCount: 268,
    priceFrom: 12880,
    cover: img(
      "Ultra luxury private medical suite, gold accents, dark wood, custom furnishings, photorealistic interior design",
      "landscape_4_3"
    ),
  },
  {
    id: "royal",
    code: "C · 04",
    itemCount: 358,
    priceFrom: 28800,
    cover: img(
      "Royal private spa and medical suite, classical Chinese elements, dark teak, jade ornaments, soft golden light, photorealistic",
      "landscape_4_3"
    ),
  },
];

const checkupLocales: Record<Locale, Record<string, LocalizedCheckupPackage>> = {
  "zh-CN": checkupsZhCN,
  en: checkupsEn,
  ja: checkupsJa,
  ko: checkupsKo,
  ru: checkupsRu,
  ar: checkupsAr,
  es: checkupsEs,
  fr: checkupsFr,
  de: checkupsDe,
  pt: checkupsPt,
};

export function getCheckupPackages(locale: Locale): CheckupPackage[] {
  const localized = checkupLocales[locale] ?? checkupLocales["zh-CN"];
  return baseCheckups.map((p) => {
    const loc = localized[p.id];
    if (!loc) throw new Error(`Missing checkup localization for ${p.id} in ${locale}`);
    return { ...p, ...loc };
  });
}
