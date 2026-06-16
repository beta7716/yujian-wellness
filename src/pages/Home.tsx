import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Sparkles, Leaf, Stethoscope, Quote, MapPin, Calendar } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import InquiryForm from "@/components/InquiryForm";
import { routes } from "@/data/routes";
import { testimonials, partners } from "@/data/testimonials";
import { img } from "@/utils/format";
import { useLocale, useT } from "@/i18n/LanguageContext";

const heroBg = img(
  "Chongqing mountain city skyline at dawn with mist rising from the Yangtze and Jialing rivers, traditional Chinese painting atmosphere, cinematic golden hour, photorealistic",
  "landscape_16_9"
);
const healingBg = img(
  "Tranquil Chinese hot spring pool with mist and bamboo forest, sunset, cinematic warm light, photorealistic",
  "landscape_16_9"
);
const tcmBg = img(
  "Top view of traditional Chinese medicine ingredients and dried herbs on dark wooden table, warm lamplight, photorealistic",
  "landscape_4_3"
);

const stats = [
  { value: "28", suffix: "+", labelKey: 0 },
  { value: "12", suffix: "K", labelKey: 1 },
  { value: "36", suffix: "", labelKey: 2 },
  { value: "98", suffix: "%", labelKey: 3 },
];

const pillarsMeta = [
  { icon: Leaf, to: "/routes", img: img("Aerial view of misty Chinese mountains with winding river at sunrise, cinematic landscape", "landscape_4_3"), index: 0 },
  { icon: Stethoscope, to: "/checkup", img: img("Premium medical examination room interior, modern Chinese design, soft warm light, photorealistic", "landscape_4_3"), index: 1 },
  { icon: Sparkles, to: "/tcm", img: tcmBg, index: 2 },
];

const seasons = ["立春", "夏至", "立秋", "冬至"];

const seasonTips = {
  "zh-CN": ["疏肝理气 · 推陈出新", "养心安神 · 清暑静心", "润肺生津 · 收敛气机", "温阳补肾 · 藏精养神"],
  en: ["Soothe the liver", "Calm the heart", "Moisten the lung", "Warm the kidney"],
  ja: ["疏肝理気", "養心安神", "潤肺生津", "温陽補腎"],
};

export default function Home() {
  const t = useT();
  const locale = useLocale();
  const tips = seasonTips[locale as keyof typeof seasonTips] ?? seasonTips["zh-CN"];

  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 hero-mist" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-smoke pointer-events-none" />

        <div className="container relative h-full flex flex-col">
          <div className="flex-1 flex flex-col justify-center max-w-3xl pt-24">
            <Reveal>
              <div className="flex items-center gap-3 text-smoke-200/80 text-[11px] uppercase tracking-[0.4em] font-display">
                <span className="h-px w-10 bg-smoke-200/60" />
                <span>{t.home.eyebrow}</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-8 font-serif text-smoke-50 text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-tight">
                {t.home.titleA}
                <span className="text-cinnabar-light"> · </span>
                {t.home.titleB}
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 text-smoke-100/80 text-lg md:text-xl max-w-xl leading-relaxed">
                {t.home.subtitle}
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link
                  to="/routes"
                  className="group inline-flex items-center gap-3 bg-cinnabar hover:bg-cinnabar-dark text-smoke-50 px-7 py-4 text-sm tracking-widest transition-colors"
                >
                  <span>{t.cta.viewRoutes}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about#contact"
                  className="group inline-flex items-center gap-3 border border-smoke-100/40 text-smoke-50 px-7 py-4 text-sm tracking-widest hover:bg-smoke-50/10 transition-colors"
                >
                  <span>{t.cta.bookConsult}</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={500}>
            <div className="pb-10 flex flex-wrap items-end justify-between gap-4 text-smoke-200/70 text-[11px] uppercase tracking-[0.3em] font-display">
              <div className="flex items-center gap-2">
                <MapPin size={12} />
                <span>{t.home.coord}</span>
              </div>
              <div className="hidden md:flex items-center gap-6">
                {t.home.seasons.map((s, i) => (
                  <span key={s} className="flex items-center gap-6">
                    {i > 0 ? <span className="h-px w-8 bg-smoke-200/40" /> : null}
                    <span>{s}</span>
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={12} />
                <span>Est. 2014</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO + STATS */}
      <section className="py-28 md:py-40 bg-smoke">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] items-start">
            <Reveal>
              <SectionTitle
                eyebrow="Who we are"
                title={
                  <>
                    {t.home.editorialP1.length > 0 ? null : null}
                    <span className="text-cinnabar">{t.brand.tagline}</span>
                  </>
                }
                subtitle={t.aboutPage.subtitle}
              />
              <div className="mt-10 flex items-center gap-6">
                <div className="seal">山</div>
                <div className="text-sm text-ink-500 leading-relaxed max-w-sm">
                  {t.footer.motto} · {t.aboutPage.aboutP1}
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-px bg-ink-100 border border-ink-100">
                {stats.map((s, i) => (
                  <div key={i} className="bg-smoke-50 p-8 md:p-10 flex flex-col">
                    <div className="flex items-end gap-1">
                      <span className="num-plate text-5xl md:text-6xl text-ink-800">{s.value}</span>
                      <span className="text-cinnabar font-serif text-2xl mb-2">{s.suffix}</span>
                    </div>
                    <div className="mt-4 text-[11px] uppercase tracking-[0.3em] text-ink-500">
                      {t.home.statLabels[s.labelKey]}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-24 md:py-32 bg-smoke-100 border-y border-ink-100/60">
        <div className="container">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <SectionTitle
                eyebrow="Three pillars"
                title={t.aboutPage.aboutTitle}
              />
              <p className="text-ink-500 max-w-md text-base">
                {t.aboutPage.aboutP2}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3 md:gap-0 md:[&>*:nth-child(2)]:-mt-8">
            {pillarsMeta.map((p, idx) => {
              const Icon = p.icon;
              const pillar = t.home.pillars[p.index];
              return (
                <Reveal key={p.to} delay={idx * 120}>
                  <Link
                    to={p.to}
                    className="group block relative bg-smoke-50 border border-ink-100 hover:border-ink-800 transition-all h-full"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-ink-100">
                      <div
                        className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${p.img})` }}
                        aria-hidden
                      />
                    </div>
                    <div className="p-7">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-ink-500">
                        <span className="flex items-center gap-2">
                          <Icon size={14} className="text-cinnabar" />
                          {pillar.eyebrow}
                        </span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <h3 className="mt-5 font-serif text-2xl text-ink-800">{pillar.title}</h3>
                      <div className="text-[11px] tracking-[0.2em] text-ink-400 uppercase font-display mt-1">
                        {pillar.en}
                      </div>
                      <p className="mt-4 text-sm text-ink-500 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDITORIAL: HEALING */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] aspect-[4/5] hidden lg:block"
          aria-hidden
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${healingBg})` }}
          />
        </div>
        <div className="container relative">
          <div className="max-w-2xl">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.4em] text-ink-500 font-display">
                <span className="text-cinnabar">— </span>The Healing
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink-800 leading-tight">
                {t.home.editorialTitle}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-10 text-ink-500 text-lg leading-relaxed">
                {t.home.editorialP1}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-6 text-ink-500 text-lg leading-relaxed">
                {t.home.editorialP2}
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-8 max-w-md">
                {seasons.map((s, i) => (
                  <div key={s} className="border-l-2 border-cinnabar pl-4">
                    <div className="font-serif text-2xl text-ink-800">{s}</div>
                    <div className="text-sm text-ink-500 mt-1">{tips[i]}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={500}>
              <Link
                to="/routes"
                className="group mt-12 inline-flex items-center gap-2 text-ink-800 border-b border-ink-800 pb-1 text-sm tracking-widest"
              >
                <span>{t.cta.explore}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED ROUTES */}
      <section className="py-28 md:py-32 bg-ink-800 text-smoke-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid2" width="64" height="64" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#f4efe6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid2)" />
          </svg>
        </div>
        <div className="container relative">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <div className="text-[11px] uppercase tracking-[0.4em] text-smoke-200/70 font-display">
                  <span className="text-cinnabar-light">— </span>{t.home.featuredEyebrow}
                </div>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl text-smoke-50 leading-tight">
                  {t.home.featuredTitle}
                </h2>
              </div>
              <Link
                to="/routes"
                className="group inline-flex items-center gap-2 text-smoke-50 border-b border-smoke-50/40 pb-1 text-sm tracking-widest"
              >
                <span>{t.home.featuredCta}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          <div className="flex md:grid gap-6 md:grid-cols-3 overflow-x-auto no-scrollbar snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 pb-2">
            {routes.slice(0, 3).map((r, idx) => (
              <Reveal key={r.id} delay={idx * 120}>
                <Link
                  to={`/routes/${r.id}`}
                  className="group block min-w-[82vw] md:min-w-0 snap-start relative border border-smoke-100/10 bg-ink-700/40 hover:bg-ink-700 transition-colors"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${r.cover})` }}
                      aria-hidden
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-smoke-200/70">
                      <span>{r.code}</span>
                      <span>{r.theme}</span>
                    </div>
                    <h3 className="mt-3 font-serif text-xl text-smoke-50">{r.title}</h3>
                    <div className="text-[11px] tracking-[0.2em] text-smoke-200/60 uppercase font-display mt-1">
                      {r.subtitle}
                    </div>
                    <div className="mt-6 flex items-end justify-between">
                      <div className="text-sm text-smoke-200/80">
                        {r.days} {t.routesPage.daysUnit} {r.nights} {t.routesPage.nightsUnit}
                      </div>
                      <div className="text-cinnabar-light font-serif text-lg">
                        {t.calendar.from} ¥{r.priceFrom.toLocaleString()}
                        <span className="text-xs text-smoke-200/60"> {t.routesPage.perPerson}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TCM TEASER */}
      <section className="py-28 md:py-36 bg-smoke">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-4 aspect-[4/5] overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${tcmBg})` }}
                    aria-hidden
                  />
                </div>
                <div className="col-span-2 flex flex-col gap-4">
                  <div className="aspect-square overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${img("Traditional Chinese moxibustion therapy with rising smoke, warm light, photorealistic", "square")})`,
                      }}
                      aria-hidden
                    />
                  </div>
                  <div className="aspect-square overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${img("Elderly person practicing tai chi in misty Chinese park at dawn, cinematic, photorealistic", "square")})`,
                      }}
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <SectionTitle
                eyebrow={t.home.tcmEyebrow}
                title={t.home.tcmTitle}
                subtitle={t.home.tcmDesc}
              />
              <div className="mt-10 grid grid-cols-3 gap-4">
                {["针灸", "推拿", "艾灸", "药浴", "膏方", "太极"].map((tc, i) => (
                  <div
                    key={tc}
                    className="border border-ink-100 px-4 py-4 text-center text-sm tracking-wider text-ink-700 hover:border-ink-800 hover:text-ink-800 transition"
                  >
                    <div className="font-serif text-lg text-cinnabar">{String(i + 1).padStart(2, "0")}</div>
                    <div className="mt-1">{tc}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/tcm"
                className="group mt-10 inline-flex items-center gap-2 text-ink-800 border-b border-ink-800 pb-1 text-sm tracking-widest"
              >
                <span>{t.cta.explore}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 md:py-32 bg-smoke-200/60 border-y border-ink-100/60">
        <div className="container">
          <Reveal>
            <SectionTitle
              align="center"
              eyebrow={t.home.voicesEyebrow}
              title={t.home.voicesTitle}
              subtitle={t.home.voicesSub}
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {testimonials.map((tt, idx) => (
              <Reveal key={tt.id} delay={idx * 100}>
                <article
                  className={`relative bg-smoke-50 border border-ink-100 p-8 md:p-10 h-full ${
                    idx % 2 === 0 ? "md:translate-y-0" : "md:translate-y-8"
                  }`}
                >
                  <Quote
                    size={36}
                    className={`absolute -top-4 left-8 ${
                      tt.accent === "cinnabar"
                        ? "text-cinnabar"
                        : tt.accent === "bamboo"
                        ? "text-bamboo"
                        : "text-gold"
                    }`}
                  />
                  <p className="font-serif text-lg md:text-xl text-ink-800 leading-relaxed">
                    {tt.quote}
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-serif text-lg text-smoke-50 ${
                        tt.accent === "cinnabar"
                          ? "bg-cinnabar"
                          : tt.accent === "bamboo"
                          ? "bg-bamboo"
                          : "bg-gold"
                      }`}
                    >
                      {tt.initials}
                    </div>
                    <div>
                      <div className="font-serif text-ink-800">{tt.name}</div>
                      <div className="text-[11px] tracking-[0.3em] uppercase text-ink-400 font-display">
                        {tt.city} · {tt.program}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="py-16 bg-smoke overflow-hidden">
        <div className="container mb-8">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-ink-500 font-display">
            <span className="h-px w-10 bg-ink-300" />
            <span>{t.home.partnersEyebrow}</span>
          </div>
        </div>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-3 mx-12 text-ink-600 font-serif text-2xl opacity-70"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cinnabar" />
              <span>{p.name}</span>
              <span className="text-sm text-ink-400">· {p.short}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INQUIRY CTA */}
      <section id="inquiry" className="py-28 md:py-36 bg-smoke">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div>
              <div className="text-[11px] uppercase tracking-[0.4em] text-ink-500 font-display">
                <span className="text-cinnabar">— </span>{t.home.inquiryEyebrow}
              </div>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink-800 leading-tight">
                {t.home.inquiryTitle}
              </h2>
              <p className="mt-8 text-ink-500 leading-relaxed max-w-md">
                {t.home.inquirySubtitle}
              </p>
              <div className="mt-10 space-y-4 text-sm text-ink-600">
                {t.home.perks.map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-cinnabar rounded-full" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <InquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
