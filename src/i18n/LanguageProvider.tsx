import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_LOCALE, LOCALES, dictionaries, type Locale } from "./dictionaries";
import { LanguageContext, type LanguageContextValue } from "./LanguageContext";

export const STORAGE_KEY = "yujian.locale";

// Title segments by locale
const SITE_TITLE: Record<Locale, string> = {
  "zh-CN": "渝见康养 · 医疗旅游 · 中国",
  en: "Yujian Wellness · Medical Tourism · China",
  ja: "渝見康養 · 医療観光 · 中国",
  ko: "위젠웰니스 · 의료관광 · 중국",
  ru: "Yujian Wellness · Медицинский туризм · Китай",
  ar: "يوجيان ويلنس · السياحة العلاجية · الصين",
  es: "Yujian Wellness · Turismo Médico · China",
  fr: "Yujian Wellness · Tourisme Médical · Chine",
  de: "Yujian Wellness · Medizintourismus · China",
  pt: "Yujian Wellness · Turismo Médico · China",
};

function pageTitle(pathname: string, locale: Locale): string {
  const base = dictionaries[locale];
  const t = SITE_TITLE[locale];
  // Use the localized nav.home / nav.routes etc. as a page segment
  if (pathname === "/" || pathname === "") return `${t} · ${base.nav.home}`;
  if (pathname.startsWith("/routes")) return `${base.nav.routes} · ${t}`;
  if (pathname.startsWith("/checkup")) return `${base.nav.checkup} · ${t}`;
  if (pathname.startsWith("/tcm")) return `${base.nav.tcm} · ${t}`;
  if (pathname.startsWith("/about")) return `${base.nav.about} · ${t}`;
  return t;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return DEFAULT_LOCALE;
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && LOCALES.some((l) => l.code === saved)) return saved;
    const browser = window.navigator.language;
    if (browser.startsWith("zh")) return "zh-CN";
    if (browser.startsWith("ja")) return "ja";
    if (browser.startsWith("ko")) return "ko";
    if (browser.startsWith("ru")) return "ru";
    if (browser.startsWith("ar")) return "ar";
    if (browser.startsWith("es")) return "es";
    if (browser.startsWith("fr")) return "fr";
    if (browser.startsWith("de")) return "de";
    if (browser.startsWith("pt")) return "pt";
    if (browser.startsWith("en")) return "en";
    return DEFAULT_LOCALE;
  });

  const location = useLocation();

  const meta = LOCALES.find((l) => l.code === locale);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, locale);
      document.documentElement.lang = locale;
      document.documentElement.dir = meta?.rtl ? "rtl" : "ltr";
    }
  }, [locale, meta?.rtl]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title = pageTitle(location.pathname, locale);
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        const descByLocale: Record<Locale, string> = {
          "zh-CN":
            "渝见康养 · 一站式中国医疗旅行管家。200+ 三甲医院、中医康养、签证与陪诊，资深顾问 24 小时响应。",
          en: "Yujian Wellness — premium medical tourism in China. 200+ tier-A hospitals, TCM, visa & concierge, 24/7 multilingual care.",
          ja: "渝見康養 — 中国医療旅行のワンストップ管家。200超の三甲病院・中医・ビザ・同行、24時間対応。",
          ko: "위젠웰니스 — 중국 의료여행 원스톱 컨시어지. 200곳 이상 3A 병원·중의학·비자·동행, 24시간 지원.",
          ru: "Yujian Wellness — премиальный медтуризм в Китае. 200+ больниц 3A, ТКМ, визы и консьерж, 24/7.",
          ar: "يوجيان ويلنس — خدمات السياحة العلاجية في الصين. أكثر من 200 مستشفى فئة 3A والطب الصيني التقليدي وخدمة الكونسيرج على مدار الساعة.",
          es: "Yujian Wellness — turismo médico premium en China. Más de 200 hospitales 3A, MTC, visados y conserjería 24/7.",
          fr: "Yujian Wellness — tourisme médical premium en Chine. 200+ hôpitaux 3A, MTC, visas et conciergerie 24/7.",
          de: "Yujian Wellness — Premium-Medizintourismus in China. 200+ 3A-Krankenhäuser, TCM, Visa & Concierge, 24/7.",
          pt: "Yujian Wellness — turismo médico premium na China. Mais de 200 hospitais 3A, MTC, vistos e concierge 24/7.",
        };
        meta.setAttribute("content", descByLocale[locale]);
      }
      const og = document.querySelector('meta[property="og:title"]');
      if (og) og.setAttribute("content", SITE_TITLE[locale]);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", SITE_TITLE[locale]);
    }
  }, [locale, location.pathname]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      t: dictionaries[locale],
      locales: LOCALES,
    }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
