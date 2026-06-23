import type { LocalizedRoute } from "../routes";

const routes: Record<string, LocalizedRoute> = {
  "hot-spring-healing": {
    title: "Beiwenquan · Thermalbad-Retreat",
    subtitle: "3-tägige Stille",
    highlight: "Heilung in einer jahrtausendealten Quelle am Fuße des Jinyun-Berges, mit Kräuterbädern und morgendlichem Tai-Chi.",
    tags: ["Thermalbad", "Kräuterbad", "Tai-Chi", "Zen"],
    itinerary: [
      { day: 1, title: "Ankunft · Check-in", detail: "Privater Transfer vom Flughafen/Bahnhof, Check-in im privaten Thermalbad-Resort, Kräuterabendessen." },
      { day: 2, title: "Morgenübung · Heilquelle", detail: "Morgendliches Tai-Chi, Therapie in der alten Quelle, TCM-Beratung am Nachmittag." },
      { day: 3, title: "Abreise · Kräutergeschenke", detail: "Morgendlicher Waldspaziergang, individuelle Kräutergeschenke, Transfer." },
    ],
    includes: ["2 Nächte im privaten Thermalbad", "3 tägliche Kräutermahlzeiten", "1 TCM-Beratung", "2 Tai-Chi-Einheiten"],
    bestSeason: "Ganzjährig · beste Reisezeit Herbst/Winter",
  },
  "gorge-mindfulness": {
    title: "Drei Schluchten des Jangtse · Achtsamkeit",
    subtitle: "5-tägige Flusskreuzfahrt",
    highlight: "Kreuzfahrt auf dem Jangtse mit Meditation zwischen den Qutang-, Wu- und Xiling-Schluchten, Teezeremonie und Meridian-Pflege.",
    tags: ["Kreuzfahrt", "Meditation", "Teezeremonie", "Meridiane"],
    itinerary: [
      { day: 1, title: "Einschiffung · Abfahrt", detail: "Einschiffung am Chaotianmen-Kai, Willkommens-Teezeremonie." },
      { day: 2, title: "Qutang-Schlucht · Morgen", detail: "Morgendliche Schluchtbetrachtung, Atemübungen, Meridian-Klopfmassage an Deck." },
      { day: 3, title: "Wu-Schlucht · Göttinnen-Gipfel", detail: "Stille Meditation im Wushan-Nebel, Visite des TCM-Arztes." },
      { day: 4, title: "Xiling-Schlucht · Teeberge", detail: "Landgang in den Teebergen, Tee-Therapie und Kräuter-Mittagessen." },
      { day: 5, title: "Rückkehr", detail: "Rückkehr aus Yichang, Geschenk: Hochgebirgs-Wolkentee." },
    ],
    includes: ["4 Nächte Balkonkabine", "2 Meridian-Sitzungen", "Teezeremonie und Mahlzeiten", "Eintrittskarten"],
    bestSeason: "Frühling & Herbst · Apr-Jun / Sep-Nov",
  },
  "tcm-family": {
    title: "TCM-Heritage · Meisterlehre",
    subtitle: "4-tägige Reise",
    highlight: "Lernen Sie bei einem nationalen TCM-Meister, kopieren Sie Rezepte, bereiten Sie Gaofang zu und erleben Sie Akupunktur, Tuina und Moxibustion.",
    tags: ["Meisterarzt", "Gaofang", "Akupunktur", "Tuina"],
    itinerary: [
      { day: 1, title: "Lehre · Rezepte", detail: "Vormittags Rezepte kopieren in der Meisterklinik, nachmittags Museum für chinesische Medizin." },
      { day: 2, title: "Akupunktur · Moxibustion", detail: "Persönliche Akupunktur- und Moxibustion-Erfahrung, Erklärung der Konstitution." },
      { day: 3, title: "Gaofang-Zubereitung", detail: "Zubereitung persönlichen Gaofang mit dem Meister, Kräuter-Mittagessen." },
      { day: 4, title: "Kontrolle · Abreise", detail: "Kontrolluntersuchung und Erklärung des Konstitutionsberichts, Geschenk: persönliches Gaofang." },
    ],
    includes: ["2 Meister-Konsultationen", "1 Gaofang mit Kräutern", "Akupunktur / Moxibustion / Tuina", "Gaofang-Workshop"],
    bestSeason: "Ganzjährig",
  },
  "ancient-trail": {
    title: "Jinfo-Berg · Alter Pfad",
    subtitle: "5-tägiges Trekking",
    highlight: "Wanderung durch ursprüngliche Rhododendronwälder und alte Tempel des Jinfo-Berges, mit Dehnübungen und alpinem Kräuter-Essen.",
    tags: ["Trekking", "Kräuterküche", "Alter Tempel", "Dehnen"],
    itinerary: [
      { day: 1, title: "Einstieg · Dehnen", detail: "Einstieg am Westhang, funktionelles Dehnen und Ausrüstungsbriefing." },
      { day: 2, title: "Rhododendronwald · Morgen", detail: "Morgendliche Meditation im Wald, Zen-Tee im alten Tempel." },
      { day: 3, title: "Gipfel · Wolkenmeer", detail: "Gipfelbesteigung für Wolkenmeer-Blick, alpines Kräuter-Mittagessen." },
      { day: 4, title: "Kräutergarten", detail: "Besuch des alpinen Kräutergartens, Workshop für Kräuter-Fußbadsäckchen." },
      { day: 5, title: "Abstieg · Abreise", detail: "Langsamer Abstieg, Bewertung der sportlichen Erholung." },
    ],
    includes: ["Eintritt + Seilbahn", "Professioneller Guide", "DIY Kräuter-Fußbäder", "Erholungsbewertung"],
    bestSeason: "Mai-Juni / Sep-Okt",
  },
  "ancient-town": {
    title: "Gongtan · Stille am Fluss",
    subtitle: "3-tägige Stille",
    highlight: "Retreat in einem tausendjährigen Stelzenhaus in Gongtan: abends Tee am Feuer, morgens Tai-Chi und Kalligraphie.",
    tags: ["Alte Stadt", "Kalligraphie", "Tee am Feuer", "Tai-Chi"],
    itinerary: [
      { day: 1, title: "Ankunft · Tee am Feuer", detail: "Check-in in Gongtan, abendlicher Tee am Feuer." },
      { day: 2, title: "Morgen · Kalligraphie", detail: "Morgendliches Tai-Chi, Kalligraphie, abendlicher Spaziergang am Wu-Fluss." },
      { day: 3, title: "Abreise", detail: "Morgendliche Meditation, Geschenke: handgemachter Tee und Tujia-Brokat." },
    ],
    includes: ["2 Nächte im Stelzenhaus", "2 Abende Tee am Feuer", "2 Tai-Chi-Einheiten", "1 Kalligraphie-Einheit"],
    bestSeason: "Frühling & Herbst",
  },
  "city-medical": {
    title: "Chongqing urban · Ästhetische Erneuerung",
    subtitle: "3-tägiger Aufenthalt",
    highlight: "Dermatologie im Krankenhaus der Klasse 3A und leichte ästhetische Behandlungen mit Nachtblick auf die Stadt und Michelin-Küche.",
    tags: ["Ästhetik", "Dermatologie", "Krankenhaus 3A", "Urban"],
    itinerary: [
      { day: 1, title: "Ankunft · Beratung", detail: "Hautanalyse, Expertenberatung und Planung." },
      { day: 2, title: "Erneuerung", detail: "Ästhetische Behandlung am Morgen, nächtlicher Blick auf Hongyadong." },
      { day: 3, title: "Kontrolle · Abreise", detail: "Nachkontrolle und Pflegeset, Geschenk: individuelles Pflegeset." },
    ],
    includes: ["1 Hautanalyse", "1 ästhetische Behandlung", "Pflegeset nach Behandlung", "Privatwagen während des Aufenthalts"],
    bestSeason: "Ganzjährig",
  },
};

export default routes;
