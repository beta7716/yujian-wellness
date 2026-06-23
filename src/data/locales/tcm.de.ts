import type { LocalizedTcmTherapy, LocalizedTcmDoctor, LocalizedSolarTerm } from "../tcm";

const therapies: Record<string, LocalizedTcmTherapy> = {
  acupuncture: { name: "Akupunktur", en: "Acupuncture", desc: "Feine Nadeln stimulieren Meridianpunkte, um Qi und Blut zu regulieren.", benefit: "Schmerzlinderung · Besserer Schlaf · Hormonbalance" },
  cupping: { name: "Schröpfen", en: "Cupping", desc: "Negativer Druck haftet an der Haut, aktiviert die Durchblutung und vertreibt Kälte-Feuchtigkeit.", benefit: "Muskelentspannung · Entgiftung · Spannungsabbau" },
  moxibustion: { name: "Moxibustion", en: "Moxibustion", desc: "Brennender Beifuß wärmt Punkte, stärkt Yang und Immunsystem.", benefit: "Wärmt den Uterus · Stärkt Abwehr · Reguliert Verdauung" },
  tuina: { name: "Tuina", en: "Tuina", desc: "Manuelle Techniken wirken auf Meridiane, Punkte, Muskeln und Knochen.", benefit: "Nacken-Schultern · Haltung · Durchblutung" },
  "herbal-bath": { name: "Kräuterbad", en: "Herbal Bath", desc: "Kräuteraufgüsse werden dem Badewasser zugegeben, um durch die Haut aufgenommen zu werden.", benefit: "Hautnahrung · Ruhiger Schlaf · Meridian-Entspannung" },
  "diet-therapy": { name: "Ernährungstherapie", en: "Dietary Therapy", desc: "Essen als Medizin: Zutaten werden nach Konstitution kombiniert.", benefit: "Verdauungsgesundheit · Qi-Blut-Nahrung · Prävention" },
};

const doctors: Record<string, LocalizedTcmDoctor> = {
  "dr-wang": { name: "Wang Jishi", title: "Chefarzt TCM · Nationaler Meister", specialty: "Innere Medizin, Milz-Magen-Beschwerden, Subhealth-Regulation", schedule: "Mo / Mi / Fr vormittags · nach Termin" },
  "dr-li": { name: "Li Fangling", title: "Stellv. Chefarzt TCM · Akupunktur-PhD", specialty: "Akupunktur-Analgesie, Schlafstörungen & Angst, Frauengesundheit", schedule: "Di / Do / Sa ganztägig · nach Termin" },
  "dr-chen": { name: "Chen Mingtang", title: "Chefarzt TCM · Tuina-Erbe", specialty: "Nacken-, Schulter-, Rücken- und Beinschmerzen, Sportregeneration", schedule: "Mo / Do / Sa nachmittags · nach Termin" },
  "dr-zhang": { name: "Zhang Shaobai", title: "Facharzt TCM · TCM-Kosmetik", specialty: "Konstitutionsanalyse, Heilnahrung, Hautpflege", schedule: "Mi / Fr / So ganztägig · nach Termin" },
};

const solarTerms: Record<string, LocalizedSolarTerm> = {
  lichun: { name: "Frühlingsbeginn", monthLabel: "Feb", tip: "Frühlings-Yang steigt; Leber beruhigen und Qi regulieren, scharf-warme Speisen essen.", herbs: ["Bupleurum", "Rose", "Goji"] },
  yushui: { name: "Regenwasser", monthLabel: "Feb", tip: "Feuchtigkeit nimmt zu; Milz stärken und Feuchtigkeit vertreiben, kaltes Fettiges vermeiden.", herbs: ["Hiobsträne", "Poria", "Chinesischer Yam"] },
  jingzhe: { name: "Erwachen der Insekten", monthLabel: "Mär", tip: "Frühlingsdonner weckt Insekten; Lunge befeuchten, Hitze senken, Allergien vorbeugen.", herbs: ["Lilie", "Schneebirne", "Chrysantheme"] },
  chunfen: { name: "Frühlings-Tagundnachtgleiche", monthLabel: "Mär", tip: "Gleichgewicht von Yin und Yang; Leber und Milz harmonisieren, früh schlafen.", herbs: ["Goji", "Rote Datteln", "Chinesischer Yam"] },
  qingming: { name: "Qingming", monthLabel: "Apr", tip: "Leber reinigen und Augen klären; spazieren gehen und Tee trinken.", herbs: ["Chrysantheme", "Kassiasamen", "Grüner Tee"] },
  guyu: { name: "Kornregen", monthLabel: "Apr", tip: "Regen nährt Körner; Blut nähren und Milz stärken, Feuchtigkeit beachten.", herbs: ["Rote Bohne", "Hiobsträne", "Euryale"] },
  lixia: { name: "Sommerbeginn", monthLabel: "Mai", tip: "Sommer beginnt; Herz nähren und Yang schützen, leichte Kost.", herbs: ["Lotussamen", "Ophiopogon", "Mungbohne"] },
  xiaoman: { name: "Kleine Fülle", monthLabel: "Mai", tip: "Hitze und Feuchtigkeit vermischen sich; Hitze klären, Feuchtigkeit ableiten, Kälte meiden.", herbs: ["Wintermelone", "Lotusblatt", "Rote Bohne"] },
  mangzhong: { name: "Ährenbildung", monthLabel: "Jun", tip: "Besetzte Erntezeit; Flüssigkeiten bilden, Herz beruhigen.", herbs: ["Dunkle Pflaume", "Weißdorn", "Süßholz"] },
  xiazhi: { name: "Sommersonnenwende", monthLabel: "Jun", tip: "Yang erreicht Höhepunkt, Yin entsteht; spät schlafen, früh aufstehen, Mittagsschlaf.", herbs: ["Amerikanischer Ginseng", "Dendrobium", "Mungbohne"] },
  xiaoshu: { name: "Kleine Hitze", monthLabel: "Jul", tip: "Hitze nimmt zu; leichte, kühlende Kost, mehr Mungbohnensuppe.", herbs: ["Mungbohne", "Geißblatt", "Pfefferminze"] },
  dashu: { name: "Große Hitze", monthLabel: "Jul", tip: "Höhepunkt sommerlicher Feuchtigkeit; Milz stärken, Feuchtigkeit vertreiben, Winterkrankheiten im Sommer behandeln.", herbs: ["Patschuli", "Wasserdost", "Ingwer"] },
};

export default { therapies, doctors, solarTerms };
