import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/language-hooks";

export default function LanguageSwitcher() {
  const { locale, setLocale, locales, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const current = locales.find((l) => l.code === locale) ?? locales[0];
  const isRtl = document.documentElement.dir === "rtl";

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
        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-slate-700 hover:text-teal-700 transition-colors px-2.5 py-1.5 rounded-full border border-slate-200 hover:border-teal-600"
        title={t.nav.book}
      >
        <Globe size={12} className="text-teal-600" />
        <span className="font-display">{current.flag} {current.short}</span>
        <ChevronDown
          size={11}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open ? (
        <div
          role="listbox"
          className={`absolute ${isRtl ? "left-0" : "right-0"} top-full mt-2 min-w-[200px] max-h-[420px] overflow-y-auto bg-white border border-slate-200 shadow-2xl shadow-slate-900/10 z-50 rounded-xl`}
        >
          <div className="px-4 py-3 border-b border-slate-100 sticky top-0 bg-white">
            <div className="text-[10px] tracking-[0.4em] uppercase text-slate-400 font-display">
              {locale === "zh-CN" ? "Language" : t.footer.nav}
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
                      const next = l.code;
                      setLocale(next);
                      document.documentElement.lang = next === "zh-CN" ? "zh" : next;
                      if (next === "zh-CN") window.scrollTo({ top: 0, behavior: "auto" });
                      else window.scrollTo({ top: 0, behavior: "smooth" });
                      setOpen(false);
                    }}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                      active
                        ? "text-teal-700 bg-teal-50"
                        : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-base leading-none">{l.flag}</span>
                      <span className="font-sans">{l.label}</span>
                    </span>
                    {active ? <Check size={14} className="text-teal-600" /> : null}
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
