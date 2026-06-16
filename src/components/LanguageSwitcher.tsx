import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/language-hooks";

export default function LanguageSwitcher() {
  const { locale, setLocale, locales, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const current = locales.find((l) => l.code === locale) ?? locales[0];

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-ink-600 hover:text-cinnabar transition-colors px-2 py-1.5"
        title={t.nav.book}
      >
        <Globe size={14} className="text-cinnabar" />
        <span className="font-display">{current.flag} {current.short}</span>
        <ChevronDown
          size={12}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open ? (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-2 min-w-[180px] bg-smoke-50 border border-ink-100 shadow-2xl shadow-ink-800/10 z-50 animate-fade-in"
        >
          <div className="px-4 py-3 border-b border-ink-100">
            <div className="text-[10px] tracking-[0.4em] uppercase text-ink-400 font-display">
              Language
            </div>
          </div>
          <ul className="py-1">
            {locales.map((l) => {
              const active = l.code === locale;
              return (
                <li key={l.code}>
                  <button
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      setLocale(l.code);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                      active ? "text-cinnabar" : "text-ink-800 hover:bg-smoke-100"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-base leading-none">{l.flag}</span>
                      <span className="font-serif">{l.label}</span>
                    </span>
                    {active ? <Check size={14} className="text-cinnabar" /> : null}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
