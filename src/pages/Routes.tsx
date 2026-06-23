import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Filter, Mountain, X, MapPin, Sun } from "lucide-react";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { getRoutes, routeThemeKeys, type RouteThemeKey } from "@/data/routes";
import { img } from "@/utils/format";
import { useLanguage, useT } from "@/i18n/language-hooks";

const pageHero = img(
  "Hiking trail winding through misty Chinese mountains with stone steps, pine trees, dawn, cinematic, photorealistic",
  "landscape_16_9"
);

type BucketId = "all" | "short" | "mid" | "long";

const BUCKET_MATCHERS: Record<BucketId, (d: number) => boolean> = {
  all: () => true,
  short: (d) => d <= 3,
  mid: (d) => d >= 4 && d <= 5,
  long: (d) => d >= 6,
};

export default function Routes() {
  const { locale } = useLanguage();
  const t = useT();
  const routes = useMemo(() => getRoutes(locale), [locale]);
  const [theme, setTheme] = useState<RouteThemeKey | "all">("all");
  const [bucket, setBucket] = useState<BucketId>("all");
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  const labelTheme = (th: RouteThemeKey) => t.data.themes[th];
  const labelIntensity = (level: "light" | "moderate" | "deep") => t.data.intensity[level];

  const dayBuckets: { id: BucketId; label: string }[] = useMemo(
    () => [
      { id: "all", label: t.routesPageV2.dayBuckets.all },
      { id: "short", label: t.routesPageV2.dayBuckets.short },
      { id: "mid", label: t.routesPageV2.dayBuckets.mid },
      { id: "long", label: t.routesPageV2.dayBuckets.long },
    ],
    [t]
  );

  const filtered = useMemo(() => {
    return routes.filter((r) => {
      const themeOk = theme === "all" || r.theme === theme;
      const bucketOk = BUCKET_MATCHERS[bucket](r.days);
      return themeOk && bucketOk;
    });
  }, [routes, theme, bucket]);

  const compareItems = useMemo(
    () => routes.filter((r) => compareIds.includes(r.id)),
    [routes, compareIds]
  );

  function toggleCompare(id: string) {
    setCompareIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length >= 3 ? prev : [...prev, id]
    );
  }

  return (
    <div className="bg-white text-slate-900 font-sans">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pageHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        <div className="container relative">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-teal-700 font-semibold mb-6">
              <span className="h-px w-8 bg-teal-600" />
              {t.routesPageV2.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 leading-[1.05] max-w-3xl">
              {t.routesPageV2.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
              {t.routesPageV2.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="container py-4 flex flex-col lg:flex-row lg:items-center gap-3">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-500 font-semibold">
            <Filter size={12} className="text-teal-600" />
            {t.routesPageV2.filterLabel}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <Pill active={theme === "all"} onClick={() => setTheme("all")}>
              {t.routesPageV2.allThemes}
            </Pill>
            {routeThemeKeys.map((th) => (
              <Pill key={th} active={theme === th} onClick={() => setTheme(th)}>
                {labelTheme(th)}
              </Pill>
            ))}
          </div>
          <div className="lg:ml-auto flex flex-wrap items-center gap-1.5">
            {dayBuckets.map((b) => (
              <Pill key={b.id} active={bucket === b.id} onClick={() => setBucket(b.id)}>
                {b.label}
              </Pill>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div className="text-sm text-slate-500">
              {t.routesPageV2.count(filtered.length)}
            </div>
            {compareIds.length > 0 ? (
              <button
                onClick={() => setShowCompare(true)}
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition"
              >
                {t.routesPageV2.compare(compareIds.length)} <ArrowRight size={14} />
              </button>
            ) : null}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((r, idx) => (
              <Reveal key={r.id} delay={(idx % 4) * 80}>
                <article className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-teal-200 transition-all">
                  <Link to={`/routes/${r.id}`} className="block">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${r.cover})` }}
                        aria-hidden
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="bg-white/95 text-slate-900 text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 font-semibold rounded-full">
                          {r.code}
                        </span>
                        <span className="bg-teal-600 text-white text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 font-semibold rounded-full">
                          {labelTheme(r.theme)}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-display font-bold text-slate-900 leading-tight">
                          <Link to={`/routes/${r.id}`} className="hover:text-teal-700 transition-colors">
                            {r.title}
                          </Link>
                        </h3>
                        <div className="text-xs text-slate-400 mt-0.5">
                          {r.subtitle}
                        </div>
                      </div>
                      <button
                        onClick={() => toggleCompare(r.id)}
                        aria-label="compare"
                        className={`shrink-0 w-9 h-9 border rounded-full flex items-center justify-center transition ${
                          compareIds.includes(r.id)
                            ? "bg-teal-600 text-white border-teal-600"
                            : "border-slate-200 text-slate-400 hover:border-teal-600 hover:text-teal-600"
                        }`}
                      >
                        {compareIds.includes(r.id) ? <Check size={14} /> : <Mountain size={14} />}
                      </button>
                    </div>
                    <p className="mt-3 text-slate-600 text-sm leading-relaxed line-clamp-2">
                      {r.highlight}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {r.tags.slice(0, 3).map((tg) => (
                        <span
                          key={tg}
                          className="text-[10px] tracking-wider uppercase text-slate-500 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded"
                        >
                          {tg}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-end justify-between">
                      <div className="text-xs text-slate-500 flex flex-col gap-1">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={11} /> {r.days}{t.routesPageV2.daysUnit} · {r.nights}{t.routesPageV2.nightsUnit} · {labelIntensity(r.intensity)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Sun size={11} /> {t.routesPageV2.bestLabel}: {r.bestSeason}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] tracking-[0.25em] text-slate-400 uppercase">
                          {t.routesPageV2.from}
                        </div>
                        <div className="text-lg font-display font-bold text-teal-700">
                          ¥{r.priceFrom.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/routes/${r.id}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-teal-700 transition group/link"
                    >
                      {t.cta.viewDetail}
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-slate-500">{t.routesPageV2.noResult}</div>
          ) : null}
        </div>
      </section>

      {/* Compare modal */}
      {showCompare ? (
        <div className="fixed inset-0 z-50 bg-midnight-950/70 backdrop-blur-sm flex items-stretch md:items-center justify-center p-0 md:p-8 overflow-y-auto">
          <div className="bg-white w-full md:max-w-5xl rounded-2xl border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-teal-700 font-semibold">
                  {t.routesPageV2.compareEyebrow}
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900">
                  {t.routesPageV2.compareTitle}
                </h3>
              </div>
              <button
                onClick={() => setShowCompare(false)}
                className="p-2 text-slate-400 hover:text-slate-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200 text-[10px] uppercase tracking-[0.25em] text-slate-500">
                    <th className="p-4">{t.routesPageV2.fieldLabel}</th>
                    {compareItems.map((c) => (
                      <th key={c.id} className="p-4 font-display text-sm text-slate-900 normal-case tracking-normal">
                        {c.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <Row label={t.routesPageV2.fieldDuration} items={compareItems.map((c) => `${c.days}${t.routesPageV2.daysUnit} ${c.nights}${t.routesPageV2.nightsUnit}`)} />
                  <Row label={t.routesPageV2.fieldIntensity} items={compareItems.map((c) => labelIntensity(c.intensity))} />
                  <Row label={t.routesPageV2.fieldSeason} items={compareItems.map((c) => c.bestSeason)} />
                  <Row label={t.routesPageV2.fieldPrice} items={compareItems.map((c) => `¥${c.priceFrom.toLocaleString()}`)} />
                  <Row label={t.routesPageV2.fieldHighlight} items={compareItems.map((c) => c.highlight)} />
                </tbody>
              </table>
            </div>
            <div className="p-6 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => setCompareIds([])}
                className="text-[10px] tracking-[0.25em] uppercase text-slate-500 hover:text-slate-900"
              >
                {t.routesPageV2.clear}
              </button>
              <Link
                to="/about#contact"
                onClick={() => setShowCompare(false)}
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition"
              >
                {t.routesPageV2.consultAdvisor} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {/* Inquiry */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-teal-700 font-semibold">
                {t.routesPageV2.tailorEyebrow}
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
                {t.routesPageV2.tailorTitle}
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed max-w-md">
                {t.routesPageV2.tailorSub}
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <InquiryForm defaultTopic="route" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-medium px-3.5 py-1.5 rounded-full border transition ${
        active
          ? "bg-teal-600 text-white border-teal-600"
          : "bg-white text-slate-600 border-slate-200 hover:border-teal-600 hover:text-teal-700"
      }`}
    >
      {children}
    </button>
  );
}

function Row({ label, items }: { label: string; items: string[] }) {
  return (
    <tr className="border-b border-slate-100">
      <td className="p-4 text-[10px] uppercase tracking-[0.25em] text-slate-500 font-semibold align-top">
        {label}
      </td>
      {items.map((it, i) => (
        <td key={i} className="p-4 text-slate-700 align-top">
          {it}
        </td>
      ))}
    </tr>
  );
}
