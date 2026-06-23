import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import {
  Search,
  Stethoscope,
  Plane,
  Building2,
  ScrollText,
  ShieldCheck,
  Calendar,
  ChevronDown,
  ArrowRight,
  Star,
  Phone,
  MapPin,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { useLanguage, useT } from "@/i18n/language-hooks";
import { getTestimonials } from "@/data/testimonials";

const SPECIALTY_KEYS = [
  "oncology",
  "cardiology",
  "orthopedics",
  "neurology",
  "reproductive",
  "tcm",
  "cosmetic",
  "dental",
] as const;

const DESTINATION_KEYS = [
  "chongqing",
  "beijing",
  "shanghai",
  "guangzhou",
  "shenzhen",
  "hangzhou",
] as const;

const PILLAR_ICONS = [Stethoscope, Building2, Plane, ScrollText];
const PROCESS_ICONS = [Search, ScrollText, ShieldCheck, Plane, Stethoscope, Calendar];

export default function Home() {
  const { locale } = useLanguage();
  const t = useT();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchOpen, setSearchOpen] = useState(false);

  const testimonials = useMemo(() => getTestimonials(locale), [locale]);

  return (
    <div className="bg-white text-slate-900 font-sans">
      {/* Hero */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=2000&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        </div>
        <div className="container relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-teal-700 font-semibold mb-6">
              <span className="h-px w-8 bg-teal-600" />
              {t.home.heroEyebrow}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-slate-900">
              {t.home.heroTitle}
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
              {t.home.heroSub}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/about#contact"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3.5 rounded-full font-semibold transition shadow-lg shadow-teal-600/20"
              >
                {t.home.heroBtnConsult} <ArrowRight size={18} />
              </Link>
              <button
                onClick={() => setSearchOpen((v) => !v)}
                className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-teal-600 hover:text-teal-700 text-slate-700 px-6 py-3.5 rounded-full font-semibold transition"
              >
                <Search size={18} /> {t.home.heroBtnSearch}
              </button>
            </div>

            {/* Search bar */}
            {searchOpen && (
              <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 shadow-xl">
                <div className="grid md:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                      {t.home.searchSpecialty}
                    </label>
                    <div className="relative mt-1">
                      <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 pr-9 text-sm focus:outline-none focus:border-teal-500">
                        {SPECIALTY_KEYS.map((k) => (
                          <option key={k}>{t.data.departments[k]}</option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                      {t.home.searchDestination}
                    </label>
                    <div className="relative mt-1">
                      <select className="w-full appearance-none bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 pr-9 text-sm focus:outline-none focus:border-teal-500">
                        {DESTINATION_KEYS.map((k) => (
                          <option key={k}>{t.data.cities[k]}</option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>
                  <button className="mt-5 md:mt-0 bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-5 py-3 font-semibold flex items-center justify-center gap-2 transition">
                    <Search size={18} /> {t.home.searchBtn}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Floating card */}
          <Reveal delay={200} className="hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80"
                alt="Hospital"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-slate-900/95 to-transparent text-white">
                <div className="text-[10px] uppercase tracking-widest text-teal-300 font-semibold">
                  {t.home.featuredEyebrow}
                </div>
                <div className="text-xl font-display font-bold mt-1">
                  {t.home.featuredTitle}
                </div>
                <div className="text-sm text-slate-300 mt-1">
                  {t.home.featuredDesc}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
        <div className="container">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {t.home.stats.map((s) => (
                <div key={s.label} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-display font-bold text-teal-700">
                    {s.value}
                  </div>
                  <div className="text-sm text-slate-500 mt-1 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-xs uppercase tracking-[0.3em] text-teal-700 font-semibold mb-3">
                {t.home.pillarsEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                {t.home.pillarsTitle}
              </h2>
              <p className="mt-4 text-slate-600">{t.home.pillarsSub}</p>
            </div>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.home.pillars.map((p, i) => {
              const Icon = PILLAR_ICONS[i] ?? Stethoscope;
              return (
                <Reveal key={p.title} delay={i * 80}>
                  <div className="group p-7 rounded-2xl bg-white border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="h-12 w-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-lg font-display font-bold text-slate-900">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-teal-100 font-semibold mb-2">
                {t.home.ctaBannerEyebrow}
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                {t.home.ctaBannerTitle}
              </h3>
              <p className="mt-2 text-teal-50/90">{t.home.ctaBannerSub}</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <Link
              to="/about#contact"
              className="inline-flex items-center gap-2 bg-white text-teal-700 hover:bg-teal-50 px-7 py-3.5 rounded-full font-semibold transition shadow-lg whitespace-nowrap"
            >
              {t.home.ctaBannerBtn} <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Hospitals */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-teal-700 font-semibold mb-3">
                  {t.home.networkEyebrow}
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                  {t.home.networkTitle}
                </h2>
              </div>
              <Link
                to="/routes"
                className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold"
              >
                {t.home.networkViewAll} <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.home.hospitals.map((h, i) => (
              <Reveal key={h.city} delay={i * 60}>
                <div className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-teal-200 hover:shadow-lg transition flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 font-semibold">
                      <MapPin size={12} /> {h.tag}
                    </div>
                    <div className="text-xl font-display font-bold text-slate-900 mt-2">
                      {h.city}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">{h.beds} beds</div>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition">
                    <Building2 size={20} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-xs uppercase tracking-[0.3em] text-teal-700 font-semibold mb-3">
                {t.home.processEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                {t.home.processTitle}
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {t.home.processSteps.map((s, i) => {
              const Icon = PROCESS_ICONS[i] ?? Search;
              return (
                <Reveal key={s.title} delay={i * 70}>
                  <div className="relative text-center p-5 rounded-xl bg-white border border-slate-100">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-[10px] font-bold rounded-full w-7 h-7 flex items-center justify-center">
                      {i + 1}
                    </div>
                    <Icon size={26} className="mx-auto text-teal-600 mt-3" />
                    <div className="mt-3 font-semibold text-slate-900">{s.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{s.desc}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Voices */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-xs uppercase tracking-[0.3em] text-teal-700 font-semibold mb-3">
                {t.home.voicesEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                {t.home.voicesTitle}
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((v, i) => (
              <Reveal key={v.id} delay={i * 80}>
                <div className="bg-white p-7 rounded-2xl border border-slate-100 h-full flex flex-col">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <p className="mt-4 text-slate-700 leading-relaxed text-sm">“{v.quote}”</p>
                  <div className="mt-auto pt-5 border-t border-slate-100">
                    <div className="font-semibold text-slate-900">{v.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{v.city}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <Reveal>
            <div className="text-center">
              <div className="text-xs uppercase tracking-[0.3em] text-teal-700 font-semibold mb-3">
                {t.home.faqEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                {t.home.faqTitle}
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 space-y-3">
            {t.home.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition"
                  >
                    <span className="font-semibold text-slate-900">{f.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-teal-600 transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      <div className="pt-4">{f.a}</div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 bg-midnight-950 text-white">
        <div className="container text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-teal-300 font-semibold mb-3">
              {t.home.finalEyebrow}
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold max-w-3xl mx-auto leading-tight">
              {t.home.finalTitle}
            </h2>
            <p className="mt-5 text-slate-300 max-w-2xl mx-auto">{t.home.finalSub}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/about#contact"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-7 py-3.5 rounded-full font-semibold transition"
              >
                {t.home.finalBtn} <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${t.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-2 border border-white/20 hover:border-teal-300 text-white px-7 py-3.5 rounded-full font-semibold transition"
              >
                <Phone size={18} /> {t.contact.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
