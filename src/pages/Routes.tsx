import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Filter, Mountain, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { routes, type RouteTheme } from "@/data/routes";
import { img } from "@/utils/format";
import { useT } from "@/i18n/LanguageContext";

const pageHero = img(
  "Hiking trail winding through misty Chinese mountains with stone steps, pine trees, dawn, cinematic, photorealistic",
  "landscape_16_9"
);

export default function Routes() {
  const t = useT();
  const [theme, setTheme] = useState<RouteTheme | "all">("all");
  const [bucket, setBucket] = useState<string>("all");
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  const dayBuckets: { id: string; label: string; match: (d: number) => boolean }[] = useMemo(
    () => [
      { id: "all", label: t.routesPage.allDays, match: () => true },
      { id: "short", label: t.routesPage.dayBuckets[1], match: (d) => d <= 3 },
      { id: "mid", label: t.routesPage.dayBuckets[2], match: (d) => d >= 4 && d <= 5 },
      { id: "long", label: t.routesPage.dayBuckets[3], match: (d) => d >= 6 },
    ],
    [t]
  );

  const filtered = useMemo(() => {
    return routes.filter((r) => {
      const themeOk = theme === "all" || r.theme === theme;
      const bucketOk = dayBuckets.find((b) => b.id === bucket)!.match(r.days);
      return themeOk && bucketOk;
    });
  }, [theme, bucket, dayBuckets]);

  const compareItems = useMemo(
    () => routes.filter((r) => compareIds.includes(r.id)),
    [compareIds]
  );

  function toggleCompare(id: string) {
    setCompareIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length >= 3 ? prev : [...prev, id]
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${pageHero})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-smoke/40 via-smoke/85 to-smoke" />
        <div className="container relative">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.4em] text-ink-500 font-display">
              <span className="text-cinnabar">— </span>{t.routesPage.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 font-serif text-5xl md:text-7xl text-ink-800 leading-[1.05] max-w-4xl">
              {t.routesPage.titleA}<br />
              <span className="text-cinnabar">{t.routesPage.titleB}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-ink-500 text-lg max-w-2xl leading-relaxed">
              {t.routesPage.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 bg-smoke-50/95 backdrop-blur border-y border-ink-100">
        <div className="container py-5 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display">
            <Filter size={14} className="text-cinnabar" />
            {t.routesPage.filterEyebrow}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <FilterPill active={theme === "all"} onClick={() => setTheme("all")}>
              {t.routesPage.allThemes}
            </FilterPill>
            {(["温泉疗愈", "江峡养心", "中医世家", "古道徒步", "古镇静修", "都市医美"] as RouteTheme[]).map((th) => (
              <FilterPill key={th} active={theme === th} onClick={() => setTheme(th)}>
                {th}
              </FilterPill>
            ))}
          </div>
          <div className="md:ml-auto flex flex-wrap items-center gap-2">
            {dayBuckets.map((b) => (
              <FilterPill key={b.id} active={bucket === b.id} onClick={() => setBucket(b.id)}>
                {b.label}
              </FilterPill>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 md:py-24 bg-smoke">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div className="text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display">
              <span className="text-cinnabar">— </span>
              {filtered.length} · {t.routesPage.filterEyebrow}
            </div>
            {compareIds.length > 0 ? (
              <button
                onClick={() => setShowCompare(true)}
                className="inline-flex items-center gap-2 bg-ink-800 text-smoke-50 px-4 py-2 text-sm tracking-wider"
              >
                <span>{t.routesPage.compare(compareIds.length)}</span>
                <ArrowRight size={14} />
              </button>
            ) : null}
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {filtered.map((r, idx) => (
              <Reveal key={r.id} delay={(idx % 4) * 100}>
                <article className="group relative bg-smoke-50 border border-ink-100 hover:border-ink-800 transition-all">
                  <Link to={`/routes/${r.id}`} className="block">
                    <div className="aspect-[16/10] overflow-hidden bg-ink-100 relative">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${r.cover})` }}
                        aria-hidden
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="bg-smoke-50 text-ink-800 text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 font-display">
                          {r.code}
                        </span>
                        <span className="bg-cinnabar text-smoke-50 text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 font-display">
                          {r.theme}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-7 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-2xl text-ink-800 leading-tight">
                          <Link to={`/routes/${r.id}`} className="hover:text-cinnabar transition-colors">
                            {r.title}
                          </Link>
                        </h3>
                        <div className="text-[11px] tracking-[0.2em] text-ink-400 uppercase font-display mt-1">
                          {r.subtitle}
                        </div>
                      </div>
                      <button
                        onClick={() => toggleCompare(r.id)}
                        aria-label="compare"
                        className={`shrink-0 w-9 h-9 border flex items-center justify-center transition ${
                          compareIds.includes(r.id)
                            ? "bg-ink-800 text-smoke-50 border-ink-800"
                            : "border-ink-200 text-ink-500 hover:border-ink-800 hover:text-ink-800"
                        }`}
                      >
                        {compareIds.includes(r.id) ? <Check size={14} /> : <Mountain size={14} />}
                      </button>
                    </div>
                    <p className="mt-4 text-ink-500 text-sm leading-relaxed">{r.highlight}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {r.tags.map((tg) => (
                        <span key={tg} className="text-[10px] tracking-[0.2em] uppercase text-ink-500 border border-ink-200 px-2 py-1">
                          {tg}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-ink-100 flex items-end justify-between">
                      <div className="text-sm text-ink-500">
                        {r.days} {t.routesPage.daysUnit} {r.nights} {t.routesPage.nightsUnit} · <span className="text-ink-700">{r.intensity}</span> · {t.routesPage.best} {r.bestSeason}
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] tracking-[0.3em] text-ink-400 uppercase font-display">{t.routesPage.from}</div>
                        <div className="font-serif text-2xl text-cinnabar">
                          ¥{r.priceFrom.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <Link
                        to={`/routes/${r.id}`}
                        className="group/link inline-flex items-center gap-2 text-ink-800 border-b border-ink-800 pb-0.5 text-sm tracking-widest"
                      >
                        <span>{t.cta.viewDetail}</span>
                        <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-ink-500">{t.routesPage.noResult}</div>
          ) : null}
        </div>
      </section>

      {/* Compare modal */}
      {showCompare ? (
        <div className="fixed inset-0 z-50 bg-ink-800/70 backdrop-blur-sm flex items-stretch md:items-center justify-center p-0 md:p-8 overflow-y-auto">
          <div className="bg-smoke-50 w-full md:max-w-5xl border border-ink-100">
            <div className="flex items-center justify-between p-6 border-b border-ink-100">
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display">{t.routesPage.compareSub}</div>
                <h3 className="font-serif text-2xl text-ink-800">{t.routesPage.compareTitle}</h3>
              </div>
              <button onClick={() => setShowCompare(false)} className="p-2 text-ink-600 hover:text-ink-800">
                <X size={20} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-ink-100 text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display">
                    <th className="p-4">{t.routesPage.fieldTheme}</th>
                    {compareItems.map((c) => (
                      <th key={c.id} className="p-4 font-serif text-sm text-ink-800 normal-case tracking-normal">
                        {c.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <Row label={t.routesPage.fieldDuration} items={compareItems.map((c) => `${c.days} ${t.routesPage.daysUnit} ${c.nights} ${t.routesPage.nightsUnit}`)} />
                  <Row label={t.routesPage.fieldIntensity} items={compareItems.map((c) => c.intensity)} />
                  <Row label={t.routesPage.fieldSeason} items={compareItems.map((c) => c.bestSeason)} />
                  <Row label={t.routesPage.fieldPrice} items={compareItems.map((c) => `¥${c.priceFrom.toLocaleString()}`)} />
                  <Row label={t.routesPage.fieldHighlight} items={compareItems.map((c) => c.highlight)} />
                </tbody>
              </table>
            </div>
            <div className="p-6 border-t border-ink-100 flex justify-end gap-3">
              <button
                onClick={() => setCompareIds([])}
                className="text-[11px] tracking-[0.3em] uppercase text-ink-500 hover:text-ink-800"
              >
                {t.routesPage.clearCompare}
              </button>
              <Link
                to="/about#contact"
                onClick={() => setShowCompare(false)}
                className="inline-flex items-center gap-2 bg-ink-800 text-smoke-50 px-5 py-2 text-sm tracking-widest"
              >
                {t.routesPage.consultAdvisor} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {/* Inquiry */}
      <section className="py-24 md:py-32 bg-smoke-100">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div>
              <div className="text-[11px] uppercase tracking-[0.4em] text-ink-500 font-display">
                <span className="text-cinnabar">— </span>{t.routesPage.tailorEyebrow}
              </div>
              <h2 className="mt-6 font-serif text-4xl text-ink-800 leading-tight">
                {t.routesPage.tailorTitle}
              </h2>
              <p className="mt-8 text-ink-500 leading-relaxed max-w-md">
                {t.routesPage.tailorSub}
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <InquiryForm defaultTopic="route" />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FilterPill({
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
      className={`text-xs tracking-wider px-3.5 py-1.5 border transition ${
        active
          ? "bg-ink-800 text-smoke-50 border-ink-800"
          : "bg-transparent text-ink-600 border-ink-200 hover:border-ink-800 hover:text-ink-800"
      }`}
    >
      {children}
    </button>
  );
}

function Row({ label, items }: { label: string; items: string[] }) {
  return (
    <tr className="border-b border-ink-100/60">
      <td className="p-4 text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display align-top">{label}</td>
      {items.map((it, i) => (
        <td key={i} className="p-4 text-ink-700 align-top">
          {it}
        </td>
      ))}
    </tr>
  );
}
