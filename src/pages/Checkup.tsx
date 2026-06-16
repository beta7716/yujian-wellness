import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { checkupPackages } from "@/data/checkups";
import { img } from "@/utils/format";
import { useT } from "@/i18n/language-hooks";

const heroBg = img(
  "Modern luxury medical examination suite, dark wood and warm gold accents, panoramic window, photorealistic",
  "landscape_16_9"
);

export default function Checkup() {
  const t = useT();
  const recommendedId = "deep";
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
              <span className="text-cinnabar">— </span>{t.checkupPage.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl text-ink-800 leading-[1.05] max-w-4xl">
              {t.checkupPage.titleA}<br />
              <span className="text-cinnabar">{t.checkupPage.titleB}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-ink-500 text-lg max-w-2xl leading-relaxed">
              {t.checkupPage.subtitle}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-3 text-xs">
              {t.checkupPage.features.map((f) => (
                <FeatureChip key={f} icon={ShieldCheck} text={f} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 md:py-28 bg-smoke">
        <div className="container">
          <Reveal>
            <div className="mb-12">
              <div className="text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display">
                <span className="text-cinnabar">— </span>{t.checkupPage.packagesEyebrow}
              </div>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink-800">
                {t.checkupPage.packagesTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {checkupPackages.map((p, idx) => {
              const isRecommended = p.id === recommendedId;
              return (
                <Reveal key={p.id} delay={idx * 100}>
                  <article
                    className={`relative h-full flex flex-col bg-smoke-50 border transition-all ${
                      isRecommended
                        ? "border-ink-800 lg:-mt-6 lg:mb-[-24px] shadow-2xl shadow-ink-800/10"
                        : "border-ink-100 hover:border-ink-800"
                    }`}
                  >
                    {isRecommended ? (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cinnabar text-smoke-50 text-[10px] tracking-[0.3em] uppercase px-3 py-1 font-display">
                        {t.checkupPage.recommended}
                      </div>
                    ) : null}
                    <div className="aspect-[4/3] overflow-hidden bg-ink-100">
                      <div
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${p.cover})` }}
                        aria-hidden
                      />
                    </div>
                    <div className="p-6 md:p-7 flex-1 flex flex-col">
                      <div className="text-[10px] tracking-[0.3em] uppercase text-ink-400 font-display">
                        {p.code} · {p.tagline}
                      </div>
                      <h3 className="mt-3 font-serif text-2xl text-ink-800">{p.name}</h3>
                      <div className="mt-1 text-xs text-ink-500">{p.recommendedFor}</div>
                      <div className="mt-6 flex items-end gap-1">
                        <span className="font-serif text-3xl text-cinnabar">¥{p.priceFrom.toLocaleString()}</span>
                        <span className="text-xs text-ink-400 pb-1.5">{t.checkupPage.perPerson}</span>
                      </div>
                      <div className="text-[11px] tracking-[0.2em] uppercase text-ink-400 mt-1 font-display">
                        {p.itemCount} {t.checkupPage.items}
                      </div>
                      <ul className="mt-6 space-y-2.5 text-sm text-ink-600">
                        {p.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <Check size={14} className="text-bamboo mt-1 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-6 border-t border-ink-100 flex-1 flex items-end">
                        <Link
                          to="/about#contact"
                          className="w-full inline-flex items-center justify-center gap-2 border border-ink-800 text-ink-800 px-4 py-2.5 text-sm tracking-widest hover:bg-ink-800 hover:text-smoke-50 transition-colors"
                        >
                          <span>{t.checkupPage.bookPackage}</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessFlow />

      {/* Institutions */}
      <Institutions />

      {/* Inquiry */}
      <section className="py-24 md:py-32 bg-smoke-100">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div>
              <div className="text-[11px] uppercase tracking-[0.4em] text-ink-500 font-display">
                <span className="text-cinnabar">— </span>{t.checkupPage.conciergeEyebrow}
              </div>
              <h2 className="mt-6 font-serif text-4xl text-ink-800 leading-tight">
                {t.checkupPage.conciergeTitle}
              </h2>
              <p className="mt-8 text-ink-500 leading-relaxed max-w-md">
                {t.checkupPage.conciergeSub}
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <InquiryForm defaultTopic="checkup" />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FeatureChip({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 border border-ink-200 bg-smoke-50/80 backdrop-blur px-3 py-1.5 text-ink-600">
      <Icon size={12} className="text-cinnabar" />
      {text}
    </span>
  );
}

function ProcessFlow() {
  const t = useT();
  const pkg = checkupPackages[1];
  return (
    <section className="py-24 md:py-32 bg-ink-800 text-smoke-50">
      <div className="container">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="text-[11px] uppercase tracking-[0.4em] text-smoke-200/70 font-display">
                <span className="text-cinnabar-light">— </span>{t.checkupPage.processEyebrow}
              </div>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl text-smoke-50">
                {t.checkupPage.processTitle}
              </h2>
            </div>
            <p className="text-smoke-200/80 max-w-md">
              {t.checkupPage.processSub}
            </p>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 relative">
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px bg-smoke-100/20" aria-hidden />
          {pkg.flow.map((s, idx) => (
            <Reveal key={s.step} delay={idx * 80}>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="relative w-14 h-14 rounded-full bg-ink-700 border border-smoke-100/20 flex items-center justify-center font-display text-xl text-cinnabar-light num-plate">
                    {String(s.step).padStart(2, "0")}
                  </div>
                  <div className="font-serif text-xl text-smoke-50">{s.title}</div>
                </div>
                <p className="mt-4 text-smoke-200/80 text-sm leading-relaxed pl-[68px]">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Institutions() {
  const t = useT();
  const all = Array.from(new Set(checkupPackages.flatMap((p) => p.institutions)));
  return (
    <section className="py-20 md:py-24 bg-smoke">
      <div className="container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[11px] uppercase tracking-[0.4em] text-ink-500 font-display">
              <span className="text-cinnabar">— </span>{t.checkupPage.institutionsEyebrow}
            </div>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-ink-800">{t.checkupPage.institutionsTitle}</h2>
            <p className="mt-4 text-ink-500">{t.checkupPage.institutionsSub}</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {all.map((name, i) => (
            <Reveal key={name} delay={i * 80}>
              <div className="bg-smoke-50 border border-ink-100 p-6 flex items-center gap-4 hover:border-ink-800 transition">
                <div className="seal seal-sm">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className="font-serif text-base text-ink-800">{name}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-ink-400 font-display mt-1">
                    {t.checkupPage.tier}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
