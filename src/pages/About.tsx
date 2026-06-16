import { ArrowRight, Compass, Heart, Mountain, ShieldCheck, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { partners } from "@/data/testimonials";
import { img } from "@/utils/format";
import { useLocale, useT } from "@/i18n/language-hooks";

const storyBg = img(
  "Aerial view of misty Chongqing mountain city at dawn, Yangtze river, cinematic warm light, photorealistic",
  "landscape_4_3"
);
const officeBg = img(
  "Modern luxury concierge office with Chinese antiques, dark wood, brass lamps, photorealistic",
  "landscape_4_3"
);

const milestones = [
  { year: "2014", titleKey: 0, descKey: 0 },
  { year: "2017", titleKey: 1, descKey: 1 },
  { year: "2019", titleKey: 2, descKey: 2 },
  { year: "2022", titleKey: 3, descKey: 3 },
  { year: "2025", titleKey: 4, descKey: 4 },
];

const milestoneData = {
  "zh-CN": [
    { title: "品牌成立", desc: "在重庆渝中区成立渝见康养品牌。" },
    { title: "三甲联盟", desc: "与重医附一院、西南医院签署战略合作。" },
    { title: "名医顾问团", desc: "组建 12 人国家级名中医顾问团。" },
    { title: "海外拓展", desc: "与瑞士鹰阁医疗、日本藤田观光开展合作。" },
    { title: "服务 12,000+", desc: "累计服务国内外旅客 12,000 余人次。" },
  ],
  en: [
    { title: "Founded", desc: "Yujian Wellness was founded in Yuzhong, Chongqing." },
    { title: "Tier-A alliance", desc: "Strategic partnerships with CQMU Affiliated Hospital 1 and Southwest Hospital." },
    { title: "Master advisory", desc: "Assembled a 12-member national-grade TCM master advisory." },
    { title: "Global expansion", desc: "Partnerships with Switzerland's Gleneagles and Japan's Fujita Kanko." },
    { title: "12,000+ guests", desc: "Cumulatively served more than 12,000 domestic and international guests." },
  ],
  ja: [
    { title: "創業", desc: "重慶渝中区にて渝見康養ブランドを設立。" },
    { title: "三甲連携", desc: "重医附一院・西南医院と戦略提携を締結。" },
    { title: "名医顧問団", desc: "国家級名中医12名による顧問団を結成。" },
    { title: "海外展開", desc: "スイスのグレンイーグルス、日本の藤田観光と提携。" },
    { title: "12,000名以上", desc: "累計国内外ゲスト12,000名以上をお迎え。" },
  ],
};

const values = [
  { icon: Mountain, titleKey: 0, descKey: 0, cn: "山" },
  { icon: Heart, titleKey: 1, descKey: 1, cn: "心" },
  { icon: ShieldCheck, titleKey: 2, descKey: 2, cn: "盾" },
  { icon: Sparkles, titleKey: 3, descKey: 3, cn: "韵" },
];

const valueData = {
  "zh-CN": [
    { title: "本土深耕", desc: "10 年深耕重庆，把山城资源吃透。" },
    { title: "医者之心", desc: "我们不是旅行社，而是健康管家。" },
    { title: "安全第一", desc: "三甲医院绿色通道，全流程保障。" },
    { title: "东方雅韵", desc: "把康养升华为一次美学的相遇。" },
  ],
  en: [
    { title: "Local depth", desc: "Ten years inside Chongqing, with the city's resources mapped to the bone." },
    { title: "Clinician's heart", desc: "We're not a travel agency — we're wellness butlers." },
    { title: "Safety first", desc: "Tier-A hospital green channel, end-to-end coverage." },
    { title: "Eastern elegance", desc: "Wellness elevated into an aesthetic encounter." },
  ],
  ja: [
    { title: "地域深耕", desc: "10年重慶に根ざし、山街の資源を深く把握。" },
    { title: "医者の心", desc: "旅行会社ではなく、健康管家（バトラー）です。" },
    { title: "安全第一", desc: "三甲病院グリーン通道、エンドtoエンド保障。" },
    { title: "東洋の雅", desc: "養生を美学的な出会いへと昇華。" },
  ],
};

const aboutStats = [
  { v: "11", k: 0 },
  { v: "12K+", k: 1 },
  { v: "28", k: 2 },
  { v: "36", k: 3 },
];

export default function About() {
  const t = useT();
  const locale = useLocale();
  const ms = milestoneData[locale as keyof typeof milestoneData] ?? milestoneData["zh-CN"];
  const vs = valueData[locale as keyof typeof valueData] ?? valueData["zh-CN"];

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
            {values.map((v, i) => {
              const Icon = v.icon;
              const data = vs[i];
              return (
                <Reveal key={data.title} delay={i * 100}>
                  <div className="bg-smoke-50 border border-ink-100 p-8 h-full hover:border-ink-800 transition">
                    <div className="flex items-center justify-between">
                      <div className="seal seal-sm">{v.cn}</div>
                      <Icon size={18} className="text-cinnabar" />
                    </div>
                    <h3 className="mt-6 font-serif text-2xl text-ink-800">{data.title}</h3>
                    <p className="mt-3 text-sm text-ink-500 leading-relaxed">{data.desc}</p>
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
              {milestones.map((m, i) => {
                const data = ms[i];
                return (
                  <Reveal key={m.year} delay={i * 100}>
                    <div
                      className={`grid md:grid-cols-2 gap-6 md:gap-12 items-start ${
                        i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                      }`}
                    >
                      <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                        <div className="num-plate text-4xl md:text-5xl text-cinnabar">{m.year}</div>
                        <h3 className="mt-2 font-serif text-2xl text-ink-800">{data.title}</h3>
                        <p className="mt-2 text-ink-500 text-sm leading-relaxed max-w-sm md:ml-auto md:mr-0">
                          {data.desc}
                        </p>
                      </div>
                      <div className="hidden md:block" />
                      <span
                        className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 rounded-full bg-cinnabar"
                        aria-hidden
                      />
                    </div>
                  </Reveal>
                );
              })}
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
                  <li className="flex items-start gap-4">
                    <div className="seal seal-sm">话</div>
                    <div>
                      <div className="text-[11px] tracking-[0.3em] uppercase text-ink-500 font-display">{t.aboutPage.contactItems[0].type}</div>
                      <div className="font-serif text-lg text-ink-800 mt-1">{t.aboutPage.contactItems[0].ph}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="seal seal-sm">邮</div>
                    <div>
                      <div className="text-[11px] tracking-[0.3em] uppercase text-ink-500 font-display">{t.aboutPage.contactItems[1].type}</div>
                      <div className="font-serif text-lg text-ink-800 mt-1">{t.aboutPage.contactItems[1].ph}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="seal seal-sm">地</div>
                    <div>
                      <div className="text-[11px] tracking-[0.3em] uppercase text-ink-500 font-display">{t.aboutPage.contactItems[2].type}</div>
                      <div className="font-serif text-lg text-ink-800 mt-1">{t.aboutPage.contactItems[2].ph}</div>
                      <div className="text-xs text-ink-500 mt-1">{t.aboutPage.contactItems[2].hint}</div>
                    </div>
                  </li>
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
                <div className="text-[11px] tracking-[0.3em] uppercase font-display text-smoke-200/80">Salon</div>
                <div className="font-serif text-2xl mt-1">{t.aboutPage.salonTitle}</div>
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
