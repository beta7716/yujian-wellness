import { createContext } from "react";
import { LOCALES, type Dictionary, type Locale } from "./dictionaries";

export interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
  locales: typeof LOCALES;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
