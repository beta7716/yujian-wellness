import type { Locale } from "@/i18n/dictionaries";
import testimonialsZhCN from "./locales/testimonials.zh-CN";
import testimonialsEn from "./locales/testimonials.en";
import testimonialsJa from "./locales/testimonials.ja";
import testimonialsKo from "./locales/testimonials.ko";
import testimonialsRu from "./locales/testimonials.ru";
import testimonialsAr from "./locales/testimonials.ar";
import testimonialsEs from "./locales/testimonials.es";
import testimonialsFr from "./locales/testimonials.fr";
import testimonialsDe from "./locales/testimonials.de";
import testimonialsPt from "./locales/testimonials.pt";

export interface BaseTestimonial {
  id: string;
  accent: "cinnabar" | "bamboo" | "gold";
}

export interface LocalizedTestimonial {
  name: string;
  city: string;
  quote: string;
  program: string;
  initials: string;
}

export interface Testimonial extends BaseTestimonial, LocalizedTestimonial {}

const baseTestimonials: BaseTestimonial[] = [
  { id: "testimonial-1", accent: "cinnabar" },
  { id: "testimonial-2", accent: "bamboo" },
  { id: "testimonial-3", accent: "gold" },
  { id: "testimonial-4", accent: "cinnabar" },
];

const testimonialLocales: Record<Locale, Record<string, LocalizedTestimonial>> = {
  "zh-CN": testimonialsZhCN,
  en: testimonialsEn,
  ja: testimonialsJa,
  ko: testimonialsKo,
  ru: testimonialsRu,
  ar: testimonialsAr,
  es: testimonialsEs,
  fr: testimonialsFr,
  de: testimonialsDe,
  pt: testimonialsPt,
};

export function getTestimonials(locale: Locale): Testimonial[] {
  const localized = testimonialLocales[locale] ?? testimonialLocales["zh-CN"];
  return baseTestimonials.map((t) => {
    const loc = localized[t.id];
    if (!loc) throw new Error(`Missing testimonial localization for ${t.id} in ${locale}`);
    return { ...t, ...loc };
  });
}
