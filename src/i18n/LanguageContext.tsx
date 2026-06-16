import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, LOCALES, dictionaries, type Dictionary, type Locale } from "./dictionaries";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
  locales: typeof LOCALES;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "yujian.locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return DEFAULT_LOCALE;
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && LOCALES.some((l) => l.code === saved)) return saved;
    const browser = window.navigator.language;
    if (browser.startsWith("zh")) return "zh-CN";
    if (browser.startsWith("ja")) return "ja";
    if (browser.startsWith("en")) return "en";
    return DEFAULT_LOCALE;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, locale);
      document.documentElement.lang = locale;
    }
  }, [locale]);

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

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

export function useT() {
  return useLanguage().t;
}

export function useLocale() {
  return useLanguage().locale;
}
