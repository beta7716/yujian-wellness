import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { useT } from "@/i18n/LanguageContext";

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-800 text-smoke-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#f4efe6" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="container relative py-20 grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="seal">渝</div>
            <div>
              <div className="font-serif text-2xl">{t.brand.tagline}</div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-smoke-300/70 font-display">
                {t.brand.subtag}
              </div>
            </div>
          </div>
          <p className="text-smoke-200/80 text-sm leading-relaxed max-w-md">
            {t.footer.blurb}
          </p>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.4em] text-smoke-300/70 mb-5">
            {t.footer.nav}
          </div>
          <ul className="space-y-3 text-sm">
            <li><Link className="hover:text-cinnabar-light transition" to="/routes">{t.nav.routes}</Link></li>
            <li><Link className="hover:text-cinnabar-light transition" to="/checkup">{t.nav.checkup}</Link></li>
            <li><Link className="hover:text-cinnabar-light transition" to="/tcm">{t.nav.tcm}</Link></li>
            <li><Link className="hover:text-cinnabar-light transition" to="/about">{t.nav.about}</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.4em] text-smoke-300/70 mb-5">
            {t.footer.contact}
          </div>
          <ul className="space-y-3 text-sm text-smoke-200/80">
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-1 text-cinnabar-light" />
              <span>400 · 626 · 1911</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-1 text-cinnabar-light" />
              <span>concierge@yujian-wellness.cn</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 text-cinnabar-light" />
              <span>{t.aboutPage.contactItems[2].ph}</span>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.4em] text-smoke-300/70 mb-5">
            {t.footer.subscribe}
          </div>
          <p className="text-sm text-smoke-200/80 mb-4">
            {t.footer.subscribeHint}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              (e.target as HTMLFormElement).reset();
            }}
            className="flex items-center border-b border-smoke-100/30"
          >
            <input
              required
              type="email"
              placeholder={t.footer.subscribePlaceholder}
              className="flex-1 bg-transparent py-2 text-sm placeholder:text-smoke-200/40 focus:outline-none"
            />
            <button
              type="submit"
              className="text-[11px] tracking-[0.3em] uppercase py-2 px-2 hover:text-cinnabar-light"
            >
              {t.footer.subscribeCta}
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-smoke-100/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-smoke-200/60">
          <span>© {year} {t.footer.rights}</span>
          <span className="font-display tracking-[0.3em] uppercase">{t.footer.motto}</span>
        </div>
      </div>
    </footer>
  );
}
