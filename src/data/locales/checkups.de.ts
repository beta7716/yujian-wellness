import type { LocalizedCheckupPackage } from "../checkups";

const checkups: Record<string, LocalizedCheckupPackage> = {
  essential: {
    name: "Bergstadt · Essential",
    tagline: "Essential Wellness",
    recommendedFor: "30+ Routinekontrolle",
    highlights: ["Blutbild · Urin · 12 Leberwerte", "Niedrigdosis-CT Thorax", "Ultraschall Abdomen + Schilddrüse", "Abschlussbericht Chefarzt"],
    flow: [
      { step: 1, title: "Online-Termin", detail: "Paket in der Mini-App wählen und Termin bestätigen." },
      { step: 2, title: "Privattransfer", detail: "Tür-zu-Tür-Transfer im Stadtgebiet Chongqing." },
      { step: 3, title: "Nüchtern-Vorsorge", detail: "Medizinische Begleitung, durchschnittlich 2,5 Stunden." },
      { step: 4, title: "Gesundes Frühstück", detail: "Gutschein für niedrig glykämisches Frühstück." },
      { step: 5, title: "Experten-Erläuterung", detail: "Individuelle Ergebnisbesprechung ca. 30 Minuten." },
      { step: 6, title: "Gesundheitsmanagement", detail: "Dynamisches Gesundheitsjournal ein Jahr lang." },
    ],
    institutions: ["Erstes Affiliiertes Krankenhaus der Medizinischen Universität Chongqing", "Chongqing TCM-Krankenhaus", "Chungang Allgemeinkrankenhaus"],
  },
  deep: {
    name: "Wolken-Gipfel · Tiefenuntersuchung",
    tagline: "Deep Care",
    recommendedFor: "40+ chronisches Risiko",
    highlights: ["Ganzkörper-MRT", "Koronar-CTA", "Schmerzfreie Magen-Darm-Endoskopie", "12 Tumormarker"],
    flow: [
      { step: 1, title: "Gesundheitsberater 1:1", detail: "Persönlicher Berater erstellt einen maßgeschneiderten Plan." },
      { step: 2, title: "VIP-Kanal", detail: "Separater VIP-Vorsorgekanal ohne Wartezeit." },
      { step: 3, title: "Tiefendiagnostik", detail: "MRT / CTA / Endoskopie / Komplettultraschall." },
      { step: 4, title: "TCM-Konstitution", detail: "Konstitutionsanalyse durch TCM-Meister." },
      { step: 5, title: "Multidisziplinäre Besprechung", detail: "Gemeinsame Besprechung durch Innere Medizin, Radiologie und TCM." },
      { step: 6, title: "Jahresbetreuung", detail: "Persönlicher Gesundheitsbutler ein Jahr lang." },
    ],
    institutions: ["Zweites Affiliiertes Krankenhaus der Medizinischen Universität Chongqing", "Onkologisches Krankenhaus der Universität Chongqing", "Southwest Hospital"],
  },
  vip: {
    name: "Imperial VIP",
    tagline: "Imperial VIP",
    recommendedFor: "Führungskräfte / vermögende Gäste",
    highlights: ["Ganzkörper-PET-CT", "Koronar + zerebrale MRA", "168 genetische Marker", "Akademiker-Expertenbewertung"],
    flow: [
      { step: 1, title: "Persönlicher Arzt", detail: "Persönlicher Arzt auf Chefarzt-Niveau." },
      { step: 2, title: "Auto + Hotel", detail: "Zwei Nächte im Fünf-Sterne-Hotel mit Concierge-Auto." },
      { step: 3, title: "PET-CT / MRA", detail: "Hochwertige Bildgebung an einem Tag komplett." },
      { step: 4, title: "Akademiker-Konsil", detail: "Videokonsil mit Experten aus Chongqing, Peking und Shanghai." },
      { step: 5, title: "TCM Gaofang", detail: "Persönliches Gaofang eines renommierten Meisters." },
      { step: 6, title: "Lebenslange Akte", detail: "Cloud-basierte lebenslange Gesundheitsakte + globaler Notfallrettung." },
    ],
    institutions: ["VIP International Abteilung Southwest Hospital", "VIP International Abteilung Erstes Krankenhaus", "VIP Zentrum Daping Hospital"],
  },
  royal: {
    name: "Yujian · Royal Sanctuary",
    tagline: "Royal Sanctuary",
    recommendedFor: "Top-VIP / internationale Gäste",
    highlights: ["Ganzkörper-7T-MRT", "Vollgenomsequenzierung", "Internationale Fernkonsultation", "2 Tage Thermalheilung"],
    flow: [
      { step: 1, title: "Internationale Abholung", detail: "Privater Flughafentransfer + Butler-Service." },
      { step: 2, title: "Private Thermalquelle", detail: "Zwei Nächte im privaten Thermalresort." },
      { step: 3, title: "Royal-Diagnostik", detail: "7T-MRT / Genom / komplette hochwertige Bildgebung." },
      { step: 4, title: "Internationales Panel", detail: "Dreiseitige Konsultation mit Mayo, Gleneagles und Tokyo Medical and Dental University." },
      { step: 5, title: "TCM + Therme", detail: "Meister-Gaofang + Kräuterbad." },
      { step: 6, title: "Globale Akte + Rettung", detail: "Lebenslanges Mitglied einer internationalen Rettungsorganisation." },
    ],
    institutions: ["Schweizer Gleneagles Kooperationszentrum", "Fernkonsultation Mayo Clinic", "Gleneagles Chongqing"],
  },
};

export default checkups;
