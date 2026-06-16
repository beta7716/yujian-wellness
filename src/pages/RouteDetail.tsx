import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Compass, MapPin, Sparkles, Sun } from "lucide-react";
import Reveal from "@/components/Reveal";
import InquiryForm from "@/components/InquiryForm";
import { routes } from "@/data/routes";
import { useT } from "@/i18n/language-hooks";

export default function RouteDetail() {
  const t = useT();
  const { id } = useParams<{ id: string }>();
  // Support both id (e.g. "hot-spring-healing") and code (e.g. "R · 01" or "01")
  const route = routes.find(
    (r) => r.id === id || r.code === id || r.code.replace(/^R\s*·\s*/, "") === id
  );

  if (!route) {
    return (
      <div className="container py-40 text-center">
        <h1 className="font-serif text-3xl text-ink-800 mb-6">{t.routeDetail.notFound}</h1>
        <Link to="/routes" className="text-cinnabar hover:underline">{t.routeDetail.back}</Link>
      </div>
    );
  }

  const others = routes.filter((r) => r.id !== route.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32">
        <div className="relative h-[60vh] min-h-[480px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${route.cover})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 container pb-12 text-smoke-50">
            <Reveal>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] font-display text-smoke-200/80">
                <span>{route.code}</span>
                <span className="h-px w-8 bg-smoke-200/50" />
                <span>{route.theme}</span>
                <span className="h-px w-8 bg-smoke-200/50" />
                <span>{route.intensity}</span>
              </div>
              <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-tight max-w-4xl">{route.title}</h1>
              <div className="mt-3 text-sm tracking-[0.3em] uppercase font-display text-smoke-200/80">
                {route.subtitle}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28 bg-smoke">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          {/* Side info */}
          <aside>
            <div className="lg:sticky lg:top-28 space-y-8">
              <div className="bg-smoke-50 border border-ink-100 p-6">
                <div className="text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display">{t.routesPage.from}</div>
                <div className="mt-2 font-serif text-4xl text-cinnabar">
                  ¥{route.priceFrom.toLocaleString()}
                  <span className="text-sm text-ink-400 font-sans"> {t.routesPage.perPerson}</span>
                </div>
                <Link
                  to="/about#contact"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-ink-800 text-smoke-50 px-5 py-3 text-sm tracking-widest hover:bg-cinnabar transition-colors"
                >
                  <span>{t.cta.bookNow}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
              <ul className="space-y-4 text-sm">
                <InfoRow icon={Calendar} label={t.routeDetail.field.duration} value={`${route.days} ${t.routesPage.daysUnit} ${route.nights} ${t.routesPage.nightsUnit}`} />
                <InfoRow icon={Sun} label={t.routeDetail.field.season} value={route.bestSeason} />
                <InfoRow icon={Compass} label={t.routeDetail.field.intensity} value={route.intensity} />
                <InfoRow icon={MapPin} label={t.routeDetail.field.destination} value="Chongqing" />
              </ul>
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display mb-3">{t.routeDetail.topicTags}</div>
                <div className="flex flex-wrap gap-2">
                  {route.tags.map((tg) => (
                    <span key={tg} className="text-xs border border-ink-200 px-3 py-1.5 text-ink-700">
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-16">
            <Reveal>
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display">
                  <span className="text-cinnabar">— </span>{t.routeDetail.overview}
                </div>
                <h2 className="mt-4 font-serif text-3xl md:text-4xl text-ink-800 leading-tight">{route.highlight}</h2>
                <p className="mt-6 text-ink-500 text-lg leading-relaxed">
                  {route.days} {t.routesPage.daysUnit} {route.nights} {t.routesPage.nightsUnit} · {route.theme}
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display mb-8">
                  <span className="text-cinnabar">— </span>{t.routeDetail.itinerary}
                </div>
                <ol className="space-y-8">
                  {route.itinerary.map((d) => (
                    <li key={d.day} className="grid grid-cols-[80px_1fr] gap-6 md:gap-10">
                      <div>
                        <div className="font-display text-4xl text-cinnabar leading-none num-plate">
                          {String(d.day).padStart(2, "0")}
                        </div>
                        <div className="mt-2 text-[11px] tracking-[0.3em] uppercase text-ink-400 font-display">
                          {t.calendar.day}
                        </div>
                      </div>
                      <div className="border-l border-ink-100 pl-6 md:pl-8 relative">
                        <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-cinnabar" />
                        <h3 className="font-serif text-2xl text-ink-800">{d.title}</h3>
                        <p className="mt-3 text-ink-500 leading-relaxed">{d.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display mb-6">
                  <span className="text-cinnabar">— </span>{t.routeDetail.inclusions}
                </div>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {route.includes.map((i) => (
                    <li key={i} className="flex items-start gap-3 text-ink-700">
                      <Sparkles size={14} className="text-cinnabar mt-1 shrink-0" />
                      <span className="text-sm">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-smoke-100 border border-ink-100 p-8 md:p-10">
                <h3 className="font-serif text-2xl text-ink-800">{t.routeDetail.curatorTitle}</h3>
                <p className="mt-4 text-ink-500 leading-relaxed">
                  {t.routeDetail.curatorQuote}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="seal seal-sm">主</div>
                  <div>
                    <div className="font-serif text-ink-800">{t.routeDetail.curatorName}</div>
                    <div className="text-[11px] tracking-[0.3em] uppercase text-ink-400 font-display">
                      {t.routeDetail.curatorTitleRole}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Other routes */}
      <section className="py-20 bg-smoke-100">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-ink-500 font-display">
                <span className="text-cinnabar">— </span>{t.routeDetail.continueExploring}
              </div>
              <h3 className="mt-3 font-serif text-3xl text-ink-800">{t.routeDetail.moreRoutes}</h3>
            </div>
            <Link
              to="/routes"
              className="group inline-flex items-center gap-2 text-ink-800 border-b border-ink-800 pb-1 text-sm tracking-widest"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>{t.routeDetail.backToAll}</span>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((o) => (
              <Link
                to={`/routes/${o.id}`}
                key={o.id}
                className="group bg-smoke-50 border border-ink-100 hover:border-ink-800 transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${o.cover})` }}
                    aria-hidden
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-ink-400 font-display">
                    {o.theme} · {o.days} {t.routesPage.daysUnit}
                  </div>
                  <div className="mt-2 font-serif text-lg text-ink-800">{o.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section id="inquiry" className="py-24 bg-smoke">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div>
              <div className="text-[11px] uppercase tracking-[0.4em] text-ink-500 font-display">
                <span className="text-cinnabar">— </span>{t.routeDetail.bookingEyebrow}
              </div>
              <h2 className="mt-6 font-serif text-4xl text-ink-800 leading-tight">
                {t.routeDetail.bookingTitle}
              </h2>
              <p className="mt-8 text-ink-500 leading-relaxed max-w-md">
                {t.routeDetail.bookingSub}
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

function InfoRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <li className="flex items-start gap-4 border-b border-ink-100 pb-4">
      <Icon size={16} className="text-cinnabar mt-0.5" />
      <div className="flex-1 flex items-baseline justify-between gap-3">
        <span className="text-[11px] tracking-[0.3em] uppercase text-ink-500 font-display">{label}</span>
        <span className="text-ink-800 text-sm">{value}</span>
      </div>
    </li>
  );
}
