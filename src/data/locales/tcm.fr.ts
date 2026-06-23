import type { LocalizedTcmTherapy, LocalizedTcmDoctor, LocalizedSolarTerm } from "../tcm";

const therapies: Record<string, LocalizedTcmTherapy> = {
  acupuncture: { name: "Acupuncture", en: "Acupuncture", desc: "Aiguilles fines stimulent les points des méridiens pour réguler qi et sang.", benefit: "Soulagement de la douleur · Meilleur sommeil · Équilibre endocrinien" },
  cupping: { name: "Ventouses", en: "Cupping", desc: "La pression négative adhère à la peau, active la circulation et chasse froid-humidité.", benefit: "Relaxation musculaire · Détox · Soulagement des tensions" },
  moxibustion: { name: "Moxibustion", en: "Moxibustion", desc: "L'armoise brûlante chauffe les points, tonifie le yang et renforce l'immunité.", benefit: "Réchauffe l'utérus · Renforce les défenses · Régule la digestion" },
  tuina: { name: "Tuina", en: "Tuina", desc: "Techniques manuelles agissent sur méridiens, points, muscles et os.", benefit: "Cou-épaules · Posture · Circulation" },
  "herbal-bath": { name: "Bain aux herbes", en: "Herbal Bath", desc: "Infusions herbales ajoutées à l'eau pour absorption cutanée.", benefit: "Nourrit la peau · Sommeil paisible · Relaxe les méridiens" },
  "diet-therapy": { name: "Diététique", en: "Dietary Therapy", desc: "L'aliment comme médicament : ingrédients adaptés à la constitution.", benefit: "Santé digestive · Nourrit qi et sang · Prévention" },
};

const doctors: Record<string, LocalizedTcmDoctor> = {
  "dr-wang": { name: "Wang Jishi", title: "Médecin chef MTC · Maître national", specialty: "Médecine interne, troubles digestive, ajustement sub-santé", schedule: "Lun / Mer / Ven matins · sur rendez-vous" },
  "dr-li": { name: "Li Fangling", title: "Médecin chef adjoint MTC · Doctorat en acupuncture", specialty: "Analgésie par acupuncture, insomnie et anxiété, santé féminine", schedule: "Mar / Jeu / Sam toute la journée · sur rendez-vous" },
  "dr-chen": { name: "Chen Mingtang", title: "Médecin chef MTC · Héritage tuina", specialty: "Douleurs cou, épaules, lombaires et jambes, récupération sportive", schedule: "Lun / Jeu / Sam après-midi · sur rendez-vous" },
  "dr-zhang": { name: "Zhang Shaobai", title: "Médecin MTC · Cosmétologie MTC", specialty: "Analyse de constitution, diététique, soin de la peau", schedule: "Mer / Ven / Dim toute la journée · sur rendez-vous" },
};

const solarTerms: Record<string, LocalizedSolarTerm> = {
  lichun: { name: "Début du printemps", monthLabel: "fév", tip: "Le yang printanier s'élève; apaisez le foie et régulez le qi, mangez chaud et piquant.", herbs: ["Bupleurum", "Rose", "Goji"] },
  yushui: { name: "Eau de pluie", monthLabel: "fév", tip: "L'humidité augmente; renforcez la rate, éliminez l'humidité, évitez froid et gras.", herbs: ["Larmes de Job", "Poria", "Igname chinois"] },
  jingzhe: { name: "Réveil des insectes", monthLabel: "mar", tip: "Le tonnerre de printemps réveille les insectes; humidifiez les poumons, prévenez allergies.", herbs: ["Lys", "Poire de neige", "Chrysanthème"] },
  chunfen: { name: "Équinoxe de printemps", monthLabel: "mar", tip: "Équilibre yin-yang; harmonisez foie et rate, couchez-vous et levez-vous tôt.", herbs: ["Goji", "Dattes rouges", "Igname chinois"] },
  qingming: { name: "Qingming", monthLabel: "avr", tip: "Nettoyez le foie et clarifiez la vue; promenez-vous et buvez du thé.", herbs: ["Chrysanthème", "Graines de cassia", "Thé vert"] },
  guyu: { name: "Pluie des grains", monthLabel: "avr", tip: "La pluie nourrit les grains; nourrissez le sang, renforcez la rate.", herbs: ["Haricot rouge", "Larmes de Job", "Euryale"] },
  lixia: { name: "Début de l'été", monthLabel: "mai", tip: "L'été commence; nourrissez le cœur, protégez le yang, alimentation légère.", herbs: ["Graine de lotus", "Ophiopogon", "Haricot mungo"] },
  xiaoman: { name: "Petits grains", monthLabel: "mai", tip: "Chaleur et humidité se mélangent; éliminez chaleur et humidité, évitez le froid.", herbs: ["Courge d'hiver", "Feuille de lotus", "Haricot rouge"] },
  mangzhong: { name: "Grains en épi", monthLabel: "juin", tip: "Saison agricole occupée; produisez des fluides, calmez le cœur.", herbs: ["Prune noire", "Aubépine", "Réglisse"] },
  xiazhi: { name: "Solstice d'été", monthLabel: "juin", tip: "Yang au sommet, yin naît; couchez-vous tard, levez-vous tôt, sieste.", herbs: ["Ginseng américain", "Dendrobium", "Haricot mungo"] },
  xiaoshu: { name: "Petite chaleur", monthLabel: "juil", tip: "La chaleur monte; alimentation légère et rafraîchissante, plus de soupe au haricot mungo.", herbs: ["Haricot mungo", "Chèvrefeuille", "Menthe"] },
  dashu: { name: "Grande chaleur", monthLabel: "juil", tip: "Pic d'humidité estivale; renforcez la rate, éliminez humidité, traitez les maux d'hiver en été.", herbs: ["Patchouli", "Eupatoire", "Gingembre"] },
};

export default { therapies, doctors, solarTerms };
