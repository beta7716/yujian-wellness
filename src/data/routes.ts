import { img } from "@/utils/format";
import type { Locale } from "@/i18n/dictionaries";
import routesZhCN from "./locales/routes.zh-CN";
import routesEn from "./locales/routes.en";
import routesJa from "./locales/routes.ja";
import routesKo from "./locales/routes.ko";
import routesRu from "./locales/routes.ru";
import routesAr from "./locales/routes.ar";
import routesEs from "./locales/routes.es";
import routesFr from "./locales/routes.fr";
import routesDe from "./locales/routes.de";
import routesPt from "./locales/routes.pt";

export type RouteThemeKey = "hotSpring" | "gorge" | "tcm" | "trail" | "oldTown" | "aesthetic";
export type RouteIntensityKey = "light" | "moderate" | "deep";

export interface BaseRoute {
  id: string;
  code: string;
  theme: RouteThemeKey;
  intensity: RouteIntensityKey;
  days: number;
  nights: number;
  priceFrom: number;
  cover: string;
}

export interface LocalizedRoute {
  title: string;
  subtitle: string;
  highlight: string;
  tags: string[];
  itinerary: { day: number; title: string; detail: string }[];
  includes: string[];
  bestSeason: string;
}

export interface RouteItem extends BaseRoute, LocalizedRoute {}

const baseRoutes: BaseRoute[] = [
  {
    id: "hot-spring-healing",
    code: "R · 01",
    theme: "hotSpring",
    intensity: "light",
    days: 3,
    nights: 2,
    priceFrom: 4880,
    cover: img(
      "Traditional Chinese hot spring bath surrounded by misty mountains at dawn, steam rising, wooden pavilions, zen atmosphere, cinematic warm light, photorealistic",
      "landscape_4_3"
    ),
  },
  {
    id: "gorge-mindfulness",
    code: "R · 02",
    theme: "gorge",
    intensity: "moderate",
    days: 5,
    nights: 4,
    priceFrom: 9880,
    cover: img(
      "Three Gorges Yangtze River at sunrise with dramatic cliffs, mist floating over the water, traditional boat, cinematic landscape photography",
      "landscape_16_9"
    ),
  },
  {
    id: "tcm-family",
    code: "R · 03",
    theme: "tcm",
    intensity: "light",
    days: 4,
    nights: 3,
    priceFrom: 7880,
    cover: img(
      "Traditional Chinese medicine doctor taking pulse in antique wooden clinic, brass instruments, dried herbs hanging, warm lamplight, photorealistic",
      "landscape_4_3"
    ),
  },
  {
    id: "ancient-trail",
    code: "R · 04",
    theme: "trail",
    intensity: "moderate",
    days: 5,
    nights: 4,
    priceFrom: 6880,
    cover: img(
      "Misty Chinese ancient mountain trail with stone steps, pine trees, fog, hikers, cinematic golden hour, photorealistic landscape",
      "landscape_16_9"
    ),
  },
  {
    id: "ancient-town",
    code: "R · 05",
    theme: "oldTown",
    intensity: "light",
    days: 3,
    nights: 2,
    priceFrom: 3880,
    cover: img(
      "Ancient Chinese riverside town Gongtan in Chongqing at dawn, stone steps, hanging lanterns, mist, wooden houses, soft warm light, photorealistic",
      "portrait_4_3"
    ),
  },
  {
    id: "city-medical",
    code: "R · 06",
    theme: "aesthetic",
    intensity: "light",
    days: 3,
    nights: 2,
    priceFrom: 12800,
    cover: img(
      "Modern luxury medical aesthetics clinic interior, premium design, soft warm lighting, contemporary Chinese design, photorealistic",
      "landscape_4_3"
    ),
  },
];

const routeLocales: Record<Locale, Record<string, LocalizedRoute>> = {
  "zh-CN": routesZhCN,
  en: routesEn,
  ja: routesJa,
  ko: routesKo,
  ru: routesRu,
  ar: routesAr,
  es: routesEs,
  fr: routesFr,
  de: routesDe,
  pt: routesPt,
};

export function getRoutes(locale: Locale): RouteItem[] {
  const localized = routeLocales[locale] ?? routeLocales["zh-CN"];
  return baseRoutes.map((r) => {
    const loc = localized[r.id];
    if (!loc) throw new Error(`Missing route localization for ${r.id} in ${locale}`);
    return { ...r, ...loc };
  });
}

export const routeThemeKeys: RouteThemeKey[] = [
  "hotSpring",
  "gorge",
  "tcm",
  "trail",
  "oldTown",
  "aesthetic",
];
