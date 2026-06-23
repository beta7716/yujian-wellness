import { ArrowRight, Compass, Heart, Mountain, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { getPartners } from "@/data/partners";
import { img } from "@/utils/format";
import { useLanguage, useT } from "@/i18n/language-hooks";

const storyBg = img(
  "Aerial view of misty Chongqing mountain city at dawn, Yangtze river, cinematic warm light, photorealistic",
  "landscape_4_3"
);
const officeBg = img(
  "Modern luxury concierge office with Chinese antiques, dark wood, brass lamps, photorealistic",
  "landscape_4_3"
);

const VALUE_ICONS = [Mountain, Heart, ShieldCheck, Sparkles];

const aboutStats = [
  { v: "11", k: 0 },
  { v: "12K+", k: 1 },
  { v: "28", k: 2 },
  { v: "36", k: 3 },
];

export default function About() {
  const { locale } = useLanguage();
  const t = useT();
  const partners = getPartners(locale);

  const contactItems = [
    {
      seal: t.aboutPage.contactSeals.phone,
      type: t.aboutPage.contactItems[0].type,
      value: t.contact.phone,
      href: `tel:${t.contact.phone.replace(/[^0-9+]/g, "")}`,
      hint: t.aboutPage.contactItems[0].hint,
    },
    {
      seal: t.aboutPage.contactSeals.email,
      type: t.aboutPage.contactItems[1].type,
      value: t.contact.email,
      href: `mailto:${t.contact.email}`,
      hint: t.aboutPage.contactItems[1].hint,
    },
    {
      seal: t.aboutPage.contactSeals.address,
      type: t.aboutPage.contactItems[2].type,
      value: t.contact.city,
      hint: t.contact.address,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${storyBg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-smoke/40 via-smoke/85 to-smoke" />
        <div className="container relative">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-ink-500 font-display">
              <span className="text-cinnabar">— </span>{t.aboutPage.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl text-ink-800 leading-[1.05] max-w-4xl">
              {t.aboutPage.titleA}<br />
              <span className="text-cinnabar">{t.aboutPage.titleB}<br className="md:hidden" />{t.aboutPage.titleC}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-ink-500 text-lg max-w-2xl leading-relaxed">
              {t.aboutPage.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 bg-smoke">
        <div className="container grid gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden border border-ink-100">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${officeBg})` }}
                aria-hidden
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display">
                <span className="text-cinnabar">— </span>{t.aboutPage.aboutEyebrow}
              </div>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink-800 leading-tight">
                {t.aboutPage.aboutTitle}
              </h2>
              <div className="mt-8 space-y-5 text-ink-500 leading-relaxed">
                <p>{t.aboutPage.aboutP1}</p>
                <p>{t.aboutPage.aboutP2}</p>
                <p>{t.aboutPage.aboutP3}</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 max-w-md">
                {aboutStats.map((s, i) => (
                  <div key={i} className="border-l-2 border-cinnabar pl-4">
                    <div className="num-plate text-3xl text-ink-800">{s.v}</div>
                    <div className="text-[11px] tracking-[0.3em] uppercase text-ink-500 mt-1 font-display">
                      {t.aboutPage.stats[s.k]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-smoke-100">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-[11px] uppercase tracking-[0.4em] text-ink-500 font-display">
                <span className="text-cinnabar">— </span>{t.aboutPage.valuesEyebrow}
              </div>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl text-ink-800">{t.aboutPage.valuesTitle}</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.aboutPage.values.map((v, i) => {
              const Icon = VALUE_ICONS[i] ?? Mountain;
              return (
                <Reveal key={v.title} delay={i * 100}>
                  <div className="bg-smoke-50 border border-ink-100 p-8 h-full hover:border-ink-800 transition">
                    <div className="flex items-center justify-end">
                      <Icon size={18} className="text-cinnabar" />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl text-ink-800">{v.title}</h3>
                    <p className="mt-3 text-sm text-ink-500 leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-smoke">
        <div className="container">
          <Reveal>
            <div className="mb-16">
              <div className="text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display">
                <span className="text-cinnabar">— </span>{t.aboutPage.milestonesEyebrow}
              </div>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl text-ink-800">{t.aboutPage.milestonesTitle}</h2>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-ink-200" aria-hidden />
            <div className="space-y-12">
              {t.aboutPage.milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 100}>
                  <div
                    className={`grid md:grid-cols-2 gap-6 md:gap-12 items-start ${
                      i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                  >
                    <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                      <div className="num-plate text-4xl md:text-5xl text-cinnabar">{m.year}</div>
                      <h3 className="mt-2 font-serif text-2xl text-ink-800">{m.title}</h3>
                      <p className="mt-2 text-ink-500 text-sm leading-relaxed max-w-sm md:ml-auto md:mr-0">
                        {m.desc}
                      </p>
                    </div>
                    <div className="hidden md:block" />
                    <span
                      className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 rounded-full bg-cinnabar"
                      aria-hidden
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 md:py-24 bg-smoke-100 border-y border-ink-100/60">
        <div className="container">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-[11px] uppercase tracking-[0.4em] text-ink-500 font-display">
                <span className="text-cinnabar">— </span>{t.aboutPage.partnersEyebrow}
              </div>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl text-ink-800">{t.aboutPage.partnersTitle}</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <div className="bg-smoke-50 border border-ink-100 p-5 text-center hover:border-ink-800 transition">
                  <div className="font-serif text-base text-ink-800">{p.short}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-ink-400 font-display mt-1">
                    {p.name}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 bg-smoke">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <div>
                <div className="text-[11px] uppercase tracking-[0.4em] text-ink-500 font-display">
                  <span className="text-cinnabar">— </span>{t.aboutPage.contactEyebrow}
                </div>
                <h2 className="mt-6 font-serif text-4xl text-ink-800 leading-tight">
                  {t.aboutPage.contactTitle}
                </h2>
                <p className="mt-8 text-ink-500 leading-relaxed max-w-md">
                  {t.aboutPage.contactSub}
                </p>
                <ul className="mt-10 space-y-5 text-sm text-ink-600">
                  {contactItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="seal seal-sm">{item.seal}</div>
                      <div>
                        <div className="text-[11px] tracking-[0.3em] uppercase text-ink-500 font-display">{item.type}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-serif text-lg text-ink-800 mt-1 block hover:text-cinnabar transition"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="font-serif text-lg text-ink-800 mt-1">{item.value}</div>
                        )}
                        {item.hint ? <div className="text-xs text-ink-500 mt-1">{item.hint}</div> : null}
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-ink-500 font-display">
                  <Compass size={14} className="text-cinnabar" />
                  <span>{t.aboutPage.languages}</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <InquiryForm />
            </Reveal>
          </div>

          {/* Map placeholder */}
          <Reveal>
            <div className="mt-20 relative aspect-[21/9] overflow-hidden border border-ink-100">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${img(
                    "Aerial night view of Chongqing cityscape with the Yangtze and Jialing rivers converging, Hongya Cave stilted houses glowing in golden lights, misty mountains in the background, neon skyscrapers reflecting on the river surface, cinematic, photorealistic, ultra detailed",
                    "landscape_16_9"
                  )})`,
                }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink-800/40 to-transparent" />
              <div className="absolute left-8 bottom-8 text-smoke-50">
                <div className="font-serif text-2xl">{t.aboutPage.salonTitle}</div>
                <div className="text-sm text-smoke-200/80 mt-1 flex items-center gap-2">
                  {t.aboutPage.salonLocation} <ArrowRight size={14} />
                </div>
              </div>
              <div className="absolute right-8 top-8 flex items-center gap-2 text-smoke-200/80 text-[11px] tracking-[0.3em] uppercase font-display">
                <span className="w-2 h-2 rounded-full bg-cinnabar animate-pulse" />
                <span>{t.aboutPage.openBy}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
