import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useT } from "@/i18n/language-hooks";

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-midnight-950 text-slate-300 relative overflow-hidden">
      <div className="container py-20 grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-10 w-10 rounded-lg bg-teal-600 text-white flex items-center justify-center font-display font-bold text-lg">
              YW
            </div>
            <div>
              <div className="font-display font-bold text-white text-lg">{t.brand.tagline}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-teal-300 font-semibold">
                {t.brand.subtag}
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">{t.footer.blurb}</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="h-9 w-9 rounded-full border border-white/10 hover:border-teal-400 hover:text-teal-300 flex items-center justify-center transition"
            >
              <Facebook size={15} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="h-9 w-9 rounded-full border border-white/10 hover:border-teal-400 hover:text-teal-300 flex items-center justify-center transition"
            >
              <Twitter size={15} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="h-9 w-9 rounded-full border border-white/10 hover:border-teal-400 hover:text-teal-300 flex items-center justify-center transition"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="h-9 w-9 rounded-full border border-white/10 hover:border-teal-400 hover:text-teal-300 flex items-center justify-center transition"
            >
              <Instagram size={15} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-teal-300 font-semibold mb-5">
            {t.footer.servicesLabel}
          </div>
          <ul className="space-y-3 text-sm">
            <li><Link className="hover:text-teal-300 transition" to="/routes">{t.footer.services.routes}</Link></li>
            <li><Link className="hover:text-teal-300 transition" to="/checkup">{t.footer.services.checkup}</Link></li>
            <li><Link className="hover:text-teal-300 transition" to="/tcm">{t.footer.services.tcm}</Link></li>
            <li><Link className="hover:text-teal-300 transition" to="/about">{t.footer.services.about}</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-teal-300 font-semibold mb-5">
            {t.footer.resourcesLabel}
          </div>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-teal-300 transition">{t.footer.resources.visa}</a></li>
            <li><a href="#" className="hover:text-teal-300 transition">{t.footer.resources.hospitals}</a></li>
            <li><a href="#" className="hover:text-teal-300 transition">{t.footer.resources.stories}</a></li>
            <li><a href="#" className="hover:text-teal-300 transition">{t.footer.resources.newsroom}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-teal-300 font-semibold mb-5">
            {t.footer.contact}
          </div>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <Phone size={14} className="mt-1 text-teal-400" />
              <a href="tel:+864006261911" className="hover:text-teal-300">400 · 626 · 1911</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={14} className="mt-1 text-teal-400" />
              <a href="mailto:concierge@yujian-wellness.cn" className="hover:text-teal-300">
                concierge@yujian-wellness.cn
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-1 text-teal-400" />
              <span>重庆 · 渝中 · 解放碑 CBD</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-teal-300 font-semibold mb-5">
            {t.footer.newsletterLabel}
          </div>
          <p className="text-sm text-slate-400 mb-4">{t.footer.newsletterDesc}</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              (e.target as HTMLFormElement).reset();
            }}
            className="flex items-center bg-white/5 border border-white/10 rounded-full pl-4 pr-1 py-1"
          >
            <input
              required
              type="email"
              placeholder={t.footer.subscribePlaceholder}
              className="flex-1 bg-transparent text-sm placeholder:text-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-2 transition"
            >
              {t.footer.subscribeCta}
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© {year} {t.footer.rights}</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-teal-300">{t.footer.privacy}</a>
            <a href="#" className="hover:text-teal-300">{t.footer.terms}</a>
            <a href="#" className="hover:text-teal-300">{t.footer.hipaa}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
