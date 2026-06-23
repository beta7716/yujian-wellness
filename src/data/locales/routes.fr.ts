import type { LocalizedRoute } from "../routes";

const routes: Record<string, LocalizedRoute> = {
  "hot-spring-healing": {
    title: "Beiwenquan · Retraite aux sources chaudes",
    subtitle: "Retraite de 3 jours",
    highlight: "Guérison dans une source millénaire au pied du mont Jinyun, avec bains aux herbes et tai chi matinal.",
    tags: ["Source chaude", "Bain aux herbes", "Tai chi", "Zen"],
    itinerary: [
      { day: 1, title: "Arrivée · Installation", detail: "Transfert privé depuis l'aéroport/gare, enregistrement au resort privé, dîner aux herbes." },
      { day: 2, title: "Pratique matinale · Source ancienne", detail: "Tai chi du matin, thérapie par source ancienne, consultation de MTC." },
      { day: 3, title: "Départ · Cadeaux aux herbes", detail: "Promenade matinale en forêt, cadeaux aux herbes personnalisés, transfert." },
    ],
    includes: ["2 nuits en source privée", "3 repas quotidiens aux herbes", "1 consultation MTC", "2 séances de tai chi"],
    bestSeason: "Toute l'année · meilleur en automne/hiver",
  },
  "gorge-mindfulness": {
    title: "Trois Gorges du Yangtsé · Pleine conscience",
    subtitle: "Croisière de 5 jours",
    highlight: "Croisière sur le Yangtsé avec méditation entre les gorges Qutang, Wu et Xiling, cérémonie du thé et soins des méridiens.",
    tags: ["Croisière", "Méditation", "Cérémonie du thé", "Méridiens"],
    itinerary: [
      { day: 1, title: "Embarquement · Départ", detail: "Embarquement au quai Chaotianmen, cérémonie de bienvenue au thé." },
      { day: 2, title: "Gorge Qutang · Aube", detail: "Contemplation à l'aube, exercices de respiration, massage des méridiens sur le pont." },
      { day: 3, title: "Gorge Wu · Déesse", detail: "Méditation silencieuse dans la brume de Wushan, visite du médecin MTC." },
      { day: 4, title: "Gorge Xiling · Montagne du thé", detail: "Débarquement dans les montagnes du thé, thérapie par le thé et déjeuner aux herbes." },
      { day: 5, title: "Retour", detail: "Retour depuis Yichang, cadeau : thé de montagne en nuage." },
    ],
    includes: ["4 nuits en cabine balcon", "2 séances de méridiens", "Cérémonie du thé et repas", "Billets d'attractions"],
    bestSeason: "Printemps & automne · avr-juin / sept-nov",
  },
  "tcm-family": {
    title: "Héritage MTC · Apprenti du maître",
    subtitle: "Voyage de 4 jours",
    highlight: "Apprenez auprès d'un maître national de MTC, copiez des prescriptions, préparez du gaofang et expérimentez acupuncture, tuina et moxibustion.",
    tags: ["Maître", "Gaofang", "Acupuncture", "Tuina"],
    itinerary: [
      { day: 1, title: "Apprentissage · Prescriptions", detail: "Copie de prescriptions à la clinique du maître, visite du musée de médecine chinoise." },
      { day: 2, title: "Acupuncture · Moxibustion", detail: "Expérience personnelle d'acupuncture et moxibustion, explication de la constitution." },
      { day: 3, title: "Préparation du gaofang", detail: "Préparation de gaofang personnel avec le maître, déjeuner aux herbes." },
      { day: 4, title: "Suivi · Départ", detail: "Suivi et explication du rapport de constitution, cadeau : gaofang personnel." },
    ],
    includes: ["2 consultations avec le maître", "1 gaofang aux herbes", "Acupuncture / moxibustion / tuina", "Atelier gaofang"],
    bestSeason: "Toute l'année",
  },
  "ancient-trail": {
    title: "Mont Jinfo · Sentier ancien",
    subtitle: "Trekking de 5 jours",
    highlight: "Randonnée à travers les forêts de rhododendrons et temples anciens du mont Jinfo, avec étirements et cuisine alpine aux herbes.",
    tags: ["Trekking", "Cuisine aux herbes", "Temple ancien", "Étirements"],
    itinerary: [
      { day: 1, title: "Entrée en montagne · Étirements", detail: "Entrée par le versant ouest, étirements fonctionnels et briefing équipement." },
      { day: 2, title: "Forêt de rhododendrons · Matin", detail: "Méditation matinale en forêt, thé zen dans un temple ancien." },
      { day: 3, title: "Sommet · Mer de nuages", detail: "Ascension au sommet pour la mer de nuages, déjeuner aux herbes alpines." },
      { day: 4, title: "Jardin d'herbes", detail: "Visite du jardin d'herbes alpin, atelier de sachets de bain aux herbes." },
      { day: 5, title: "Descente · Départ", detail: "Descente lente, évaluation de récupération sportive." },
    ],
    includes: ["Billet d'entrée + téléphérique", "Guide professionnel", "Atelier sachets de bain", "Évaluation de récupération"],
    bestSeason: "mai-juin / sept-oct",
  },
  "ancient-town": {
    title: "Gongtan · Quiétude au bord du fleuve",
    subtitle: "Retraite de 3 jours",
    highlight: "Retraite dans une maison ancienne millénaire de Gongtan : thé au coin du feu le soir, tai chi et calligraphie le matin.",
    tags: ["Village ancien", "Calligraphie", "Thé au coin du feu", "Tai chi"],
    itinerary: [
      { day: 1, title: "Arrivée · Thé au coin du feu", detail: "Enregistrement à Gongtan, thé au coin du feu le soir." },
      { day: 2, title: "Matin · Calligraphie", detail: "Tai chi matinal, calligraphie, promenade au bord de la rivière Wu le soir." },
      { day: 3, title: "Départ", detail: "Méditation matinale, cadeaux : thé artisanal et brocart Tujia." },
    ],
    includes: ["2 nuits en maison ancienne", "2 soirées thé au coin du feu", "2 séances de tai chi", "1 séance de calligraphie"],
    bestSeason: "Printemps & automne",
  },
  "city-medical": {
    title: "Chongqing urbain · Renouvellement esthétique",
    subtitle: "Escapade de 3 jours",
    highlight: "Dermatologie d'hôpital classe 3A et traitements esthétiques légers avec vues nocturnes de la ville et gastronomie Michelin.",
    tags: ["Esthétique", "Dermatologie", "Hôpital 3A", "Urbain"],
    itinerary: [
      { day: 1, title: "Arrivée · Consultation", detail: "Analyse de peau, consultation avec expert et conception du plan." },
      { day: 2, title: "Renouvellement", detail: "Traitement esthétique le matin, vues nocturnes de Hongyadong." },
      { day: 3, title: "Suivi · Départ", detail: "Contrôle post-traitement et kit de soins, cadeau : set de soins personnalisé." },
    ],
    includes: ["1 analyse de peau", "1 traitement esthétique", "Kit post-traitement", "Voiture privée pendant tout le séjour"],
    bestSeason: "Toute l'année",
  },
};

export default routes;
