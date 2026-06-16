import { useState } from "react";
import { Calendar, Leaf, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { therapies, doctors, solarTerms, solarCover } from "@/data/tcm";
import { img } from "@/utils/format";
import { useLocale, useT } from "@/i18n/LanguageContext";

const heroBg = img(
  "Traditional Chinese apothecary with wooden drawers, hanging dried herbs, brass instruments, warm lamplight, photorealistic",
  "landscape_16_9"
);

const therapyNameMap: Record<string, { zh: string; en: string; ja: string }> = {
  acupuncture: { zh: "针灸", en: "Acupuncture", ja: "針灸" },
  tuina: { zh: "推拿", en: "Tuina", ja: "推拿" },
  moxibustion: { zh: "艾灸", en: "Moxibustion", ja: "艾灸" },
  "herbal-bath": { zh: "草本药浴", en: "Herbal Bath", ja: "薬浴" },
  gaofang: { zh: "膏方", en: "Gaofang", ja: "膏方" },
};

export default function TCM() {
  const t = useT();
  const locale = useLocale();
  const [activeTherapy, setActiveTherapy] = useState(therapies[0].id);
  const [activeTerm, setActiveTerm] = useState<string | null>(null);

  const current = therapies.find((th) => th.id === activeTherapy)!;
  const currentTerm = solarTerms.find((s) => s.id === activeTerm);

  const getTherapyName = (id: string) => {
    const map = therapyNameMap[id];
    if (!map) return id;
    if (locale === "en") return map.en;
    if (locale === "ja") return map.ja;
    return map.zh;
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-smoke/40 via-smoke/85 to-smoke" />
        <div className="container relative">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-ink-500 font-display">
              <span className="text-cinnabar">— </span>{t.tcmPage.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl text-ink-800 leading-[1.05] max-w-4xl">
              {t.tcmPage.titleA}<br />
              <span className="text-cinnabar">{t.tcmPage.titleB}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-ink-500 text-lg max-w-2xl leading-relaxed">
              {t.tcmPage.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Therapies */}
      <section className="py-24 md:py-32 bg-smoke">
        <div className="container">
          <Reveal>
            <div className="mb-12">
              <div className="text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display">
                <span className="text-cinnabar">— </span>{t.tcmPage.therapiesEyebrow}
              </div>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink-800">
                {t.tcmPage.therapiesTitle}
              </h2>
            </div>
          </Reveal>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-ink-100 pb-4">
            {therapies.map((th) => (
              <button
                key={th.id}
                onClick={() => setActiveTherapy(th.id)}
                className={`text-sm tracking-widest px-5 py-3 border transition relative ${
                  activeTherapy === th.id
                    ? "border-ink-800 text-ink-800 bg-smoke-50"
                    : "border-transparent text-ink-500 hover:text-ink-800"
                }`}
              >
                <span className="font-serif text-base mr-2">{getTherapyName(th.id)}</span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-display">
                  {th.en}
                </span>
                {activeTherapy === th.id ? (
                  <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-cinnabar" />
                ) : null}
              </button>
            ))}
          </div>

          {/* Active therapy */}
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <Reveal key={`img-${current.id}`}>
              <div className="aspect-[4/5] overflow-hidden border border-ink-100">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${current.cover})` }}
                  aria-hidden
                />
              </div>
            </Reveal>
            <Reveal key={`txt-${current.id}`} delay={100}>
              <div>
                <div className="text-[11px] tracking-[0.3em] uppercase text-ink-400 font-display">
                  {current.en}
                </div>
                <h3 className="mt-3 font-serif text-4xl md:text-5xl text-ink-800">
                  {getTherapyName(current.id)}
                </h3>
                <p className="mt-8 text-ink-500 text-lg leading-relaxed">{current.desc}</p>
                <div className="mt-10 inline-flex items-center gap-3 border-t border-ink-100 pt-6">
                  <Sparkles size={16} className="text-cinnabar" />
                  <span className="text-sm text-ink-700 tracking-wider">{t.tcmPage.benefit}：{current.benefit}</span>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-3">
                  {therapies.map((th) => (
                    <button
                      key={th.id}
                      onClick={() => setActiveTherapy(th.id)}
                      className={`text-xs py-2 border ${
                        activeTherapy === th.id
                          ? "border-ink-800 bg-ink-800 text-smoke-50"
                          : "border-ink-200 text-ink-600 hover:border-ink-800"
                      }`}
                    >
                      {getTherapyName(th.id)}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-24 md:py-32 bg-smoke-100 border-y border-ink-100/60">
        <div className="container">
          <Reveal>
            <div className="mb-12">
              <div className="text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display">
                <span className="text-cinnabar">— </span>{t.tcmPage.doctorsEyebrow}
              </div>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink-800">{t.tcmPage.doctorsTitle}</h2>
              <p className="mt-3 text-ink-500 max-w-2xl">
                {t.tcmPage.doctorsSub}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d, idx) => (
              <Reveal key={d.id} delay={idx * 100}>
                <article className="bg-smoke-50 border border-ink-100 hover:border-ink-800 transition-all group">
                  <div className="aspect-[3/4] overflow-hidden bg-ink-100">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${d.cover})` }}
                      aria-hidden
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-ink-400 font-display">
                      {d.years} · {d.schedule}
                    </div>
                    <h3 className="mt-2 font-serif text-xl text-ink-800">{d.name}</h3>
                    <div className="text-xs text-cinnabar mt-1">{d.title}</div>
                    <p className="mt-3 text-sm text-ink-500 leading-relaxed">{d.specialty}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Terms */}
      <section className="py-24 md:py-32 bg-smoke">
        <div className="container">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <Reveal>
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display">
                  <span className="text-cinnabar">— </span>{t.tcmPage.solarEyebrow}
                </div>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink-800 leading-tight">
                  {t.tcmPage.solarTitle}
                </h2>
                <p className="mt-6 text-ink-500 leading-relaxed max-w-md">
                  {t.tcmPage.solarSub}
                </p>

                <div className="mt-10 aspect-[4/3] overflow-hidden border border-ink-100">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${solarCover})` }}
                    aria-hidden
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {solarTerms.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveTerm(s.id === activeTerm ? null : s.id)}
                      className={`group relative aspect-square border flex flex-col items-center justify-center transition ${
                        activeTerm === s.id
                          ? "border-ink-800 bg-ink-800 text-smoke-50"
                          : "border-ink-100 bg-smoke-50 text-ink-800 hover:border-ink-800"
                      }`}
                    >
                      <Leaf
                        size={14}
                        className={`mb-1 ${
                          activeTerm === s.id ? "text-cinnabar-light" : "text-cinnabar"
                        }`}
                      />
                      <span className="font-serif text-lg">{s.name}</span>
                      <span
                        className={`text-[10px] tracking-[0.2em] uppercase font-display mt-1 ${
                          activeTerm === s.id ? "text-smoke-200/70" : "text-ink-400"
                        }`}
                      >
                        {s.month}
                      </span>
                    </button>
                  ))}
                </div>

                {currentTerm ? (
                  <div className="mt-8 border-l-2 border-cinnabar pl-6">
                    <div className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-ink-500 font-display">
                      <Calendar size={12} className="text-cinnabar" />
                      {currentTerm.name} · {currentTerm.month}
                    </div>
                    <p className="mt-3 text-ink-700 leading-relaxed">{currentTerm.tip}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {currentTerm.herbs.map((h) => (
                        <span
                          key={h}
                          className="text-xs border border-ink-200 text-ink-700 px-3 py-1.5"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="mt-8 text-sm text-ink-400">{t.tcmPage.solarHint}</p>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section className="py-24 md:py-32 bg-smoke-100">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div>
              <div className="text-[11px] uppercase tracking-[0.4em] text-ink-500 font-display">
                <span className="text-cinnabar">— </span>{t.tcmPage.consultEyebrow}
              </div>
              <h2 className="mt-6 font-serif text-4xl text-ink-800 leading-tight">
                {t.tcmPage.consultTitle}
              </h2>
              <p className="mt-8 text-ink-500 leading-relaxed max-w-md">
                {t.tcmPage.consultSub}
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <InquiryForm defaultTopic="tcm" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
