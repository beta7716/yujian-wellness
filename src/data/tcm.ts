import { img } from "@/utils/format";
import type { Locale } from "@/i18n/dictionaries";

export const solarCover = img(
  "Traditional Chinese solar terms calendar, four seasons landscape collage, mountains rivers cherry blossoms lotus golden wheat snow, elegant ink painting style blended with photorealistic detail",
  "landscape_16_9"
);
import tcmZhCN from "./locales/tcm.zh-CN";
import tcmEn from "./locales/tcm.en";
import tcmJa from "./locales/tcm.ja";
import tcmKo from "./locales/tcm.ko";
import tcmRu from "./locales/tcm.ru";
import tcmAr from "./locales/tcm.ar";
import tcmEs from "./locales/tcm.es";
import tcmFr from "./locales/tcm.fr";
import tcmDe from "./locales/tcm.de";
import tcmPt from "./locales/tcm.pt";

export interface BaseTcmTherapy {
  id: string;
  cover: string;
}

export interface LocalizedTcmTherapy {
  name: string;
  en: string;
  desc: string;
  benefit: string;
}

export interface TcmTherapy extends BaseTcmTherapy, LocalizedTcmTherapy {}

export interface BaseTcmDoctor {
  id: string;
  years: number;
  cover: string;
}

export interface LocalizedTcmDoctor {
  name: string;
  title: string;
  specialty: string;
  schedule: string;
}

export interface TcmDoctor extends BaseTcmDoctor, LocalizedTcmDoctor {}

export interface BaseSolarTerm {
  id: string;
  month: number;
  solarCover: string;
}

export interface LocalizedSolarTerm {
  name: string;
  monthLabel: string;
  tip: string;
  herbs: string[];
}

export interface SolarTerm extends BaseSolarTerm, LocalizedSolarTerm {}

export interface TcmData {
  therapies: TcmTherapy[];
  doctors: TcmDoctor[];
  solarTerms: SolarTerm[];
}

const baseTherapies: BaseTcmTherapy[] = [
  {
    id: "acupuncture",
    cover: img("Fine acupuncture needles on model meridian points, warm clinical light, photorealistic", "square"),
  },
  {
    id: "cupping",
    cover: img("Traditional Chinese cupping therapy on back with red circular marks, spa setting, photorealistic", "square"),
  },
  {
    id: "moxibustion",
    cover: img("Moxibustion treatment with burning mugwort stick near skin, warm glow, photorealistic", "square"),
  },
  {
    id: "tuina",
    cover: img("Professional Chinese tuina massage on shoulders, therapeutic room, photorealistic", "square"),
  },
  {
    id: "herbal-bath",
    cover: img("Ceramic bathtub filled with herbal water and flower petals, steam, zen bathroom, photorealistic", "square"),
  },
  {
    id: "diet-therapy",
    cover: img("Elegant Chinese medicinal cuisine soup in ceramic bowl, steam rising, photorealistic food photography", "square"),
  },
];

const baseDoctors: BaseTcmDoctor[] = [
  {
    id: "dr-wang",
    years: 40,
    cover: img("Senior Chinese medicine doctor portrait, white hair, kind expression, traditional clinic background, photorealistic", "portrait_4_3"),
  },
  {
    id: "dr-li",
    years: 28,
    cover: img("Middle-aged female Chinese medicine doctor portrait, warm smile, modern TCM clinic, photorealistic", "portrait_4_3"),
  },
  {
    id: "dr-chen",
    years: 35,
    cover: img("Chinese medicine acupuncturist portrait, calm expression, treatment room background, photorealistic", "portrait_4_3"),
  },
  {
    id: "dr-zhang",
    years: 22,
    cover: img("Young male Chinese medicine doctor portrait, confident, herbal medicine background, photorealistic", "portrait_4_3"),
  },
];

const baseSolarTerms: BaseSolarTerm[] = [
  { id: "lichun", month: 2, solarCover: img("Early spring plum blossoms on ancient Chinese garden branch, soft light, photorealistic", "square") },
  { id: "yushui", month: 2, solarCover: img("Gentle spring rain over rice terraces, misty mountains, photorealistic", "square") },
  { id: "jingzhe", month: 3, solarCover: img("Awakening insects, first spring thunder, green bamboo shoots, photorealistic", "square") },
  { id: "chunfen", month: 3, solarCover: img("Spring equinox cherry blossoms, balanced daylight, photorealistic", "square") },
  { id: "qingming", month: 4, solarCover: img("Qingming festival green tea mountains, light rain, photorealistic", "square") },
  { id: "guyu", month: 4, solarCover: img("Grain rain, tea leaves with raindrops, fresh green, photorealistic", "square") },
  { id: "lixia", month: 5, solarCover: img("Beginning of summer lotus pond, warm sunlight, photorealistic", "square") },
  { id: "xiaoman", month: 5, solarCover: img("Grain full, wheat ears turning golden, photorealistic", "square") },
  { id: "mangzhong", month: 6, solarCover: img("Mangzhong busy farming, green rice fields, photorealistic", "square") },
  { id: "xiazhi", month: 6, solarCover: img("Summer solstice, longest day, lotus flowers, photorealistic", "square") },
  { id: "xiaoshu", month: 7, solarCover: img("Minor heat, sunlit bamboo forest, cicadas, photorealistic", "square") },
  { id: "dashu", month: 7, solarCover: img("Major heat, lotus leaves under hot sun, photorealistic", "square") },
];

const tcmLocales: Record<Locale, { therapies: Record<string, LocalizedTcmTherapy>; doctors: Record<string, LocalizedTcmDoctor>; solarTerms: Record<string, LocalizedSolarTerm> }> = {
  "zh-CN": tcmZhCN,
  en: tcmEn,
  ja: tcmJa,
  ko: tcmKo,
  ru: tcmRu,
  ar: tcmAr,
  es: tcmEs,
  fr: tcmFr,
  de: tcmDe,
  pt: tcmPt,
};

export function getTcmData(locale: Locale): TcmData {
  const localized = tcmLocales[locale] ?? tcmLocales["zh-CN"];
  const therapies = baseTherapies.map((t) => {
    const loc = localized.therapies[t.id];
    if (!loc) throw new Error(`Missing therapy localization for ${t.id} in ${locale}`);
    return { ...t, ...loc };
  });
  const doctors = baseDoctors.map((d) => {
    const loc = localized.doctors[d.id];
    if (!loc) throw new Error(`Missing doctor localization for ${d.id} in ${locale}`);
    return { ...d, ...loc };
  });
  const solarTerms = baseSolarTerms.map((s) => {
    const loc = localized.solarTerms[s.id];
    if (!loc) throw new Error(`Missing solar term localization for ${s.id} in ${locale}`);
    return { ...s, ...loc };
  });
  return { therapies, doctors, solarTerms };
}
