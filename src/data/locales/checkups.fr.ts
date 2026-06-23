import type { LocalizedCheckupPackage } from "../checkups";

const checkups: Record<string, LocalizedCheckupPackage> = {
  essential: {
    name: "Ville Montagne · Essentiel",
    tagline: "Essential Wellness",
    recommendedFor: "30+ suivi des indicateurs",
    highlights: ["NFS · BU · 12 marqueurs hépatiques", "Scanner thoracique faible dose", "Échographie abdominale + thyroïde", "Rapport final du chef de service"],
    flow: [
      { step: 1, title: "Réservation en ligne", detail: "Choix du forfait dans la mini-app et confirmation du rendez-vous." },
      { step: 2, title: "Transfert privé", detail: "Transfert porte-à-porte dans la zone urbaine de Chongqing." },
      { step: 3, title: "Bilan à jeun", detail: "Accompagnement médical, durée moyenne 2,5 h." },
      { step: 4, title: "Petit-déjeuner sain", detail: "Coupon petit-déjeuner à faible indice glycémique." },
      { step: 5, title: "Interprétation experte", detail: "Revue individuelle des résultats environ 30 min." },
      { step: 6, title: "Gestion santé", detail: "Suivi dynamique du dossier pendant un an." },
    ],
    institutions: ["Premier hôpital affilié de l'université médicale de Chongqing", "Hôpital de MTC de Chongqing", "Hôpital général Chungang"],
  },
  deep: {
    name: "Sommet Nuage · Approfondi",
    tagline: "Deep Care",
    recommendedFor: "40+ risque de maladies chroniques",
    highlights: ["IRM corps entier", "Scanner coronaire", "Endoscopie digestive indolore", "12 marqueurs tumoraux"],
    flow: [
      { step: 1, title: "Conseiller 1v1", detail: "Conseiller personnel conçoit un plan sur mesure." },
      { step: 2, title: "Voie VIP", detail: "Voie VIP dédiée sans file d'attente." },
      { step: 3, title: "Examens approfondis", detail: "IRM / Scanner / Endoscopie / Échographie complète." },
      { step: 4, title: "Diagnostic MTC", detail: "Analyse de constitution selon la MTC." },
      { step: 5, title: "Consultation pluridisciplinaire", detail: "Revue conjointe médecine interne, imagerie et MTC." },
      { step: 6, title: "Suivi annuel", detail: "Majordome de santé dédié pendant un an." },
    ],
    institutions: ["Deuxième hôpital affilié de l'université médicale de Chongqing", "Hôpital oncologique de l'université de Chongqing", "Hôpital Southwest"],
  },
  vip: {
    name: "VIP Impérial",
    tagline: "Imperial VIP",
    recommendedFor: "Dirigeants / grandes fortunes",
    highlights: ["PET-CT corps entier", "Coronaire + IRM crânienne", "168 marqueurs génétiques", "Évaluation par expert académicien"],
    flow: [
      { step: 1, title: "Médecin personnel", detail: "Médecin personnel de niveau chef de service." },
      { step: 2, title: "Voiture + hôtel", detail: "Deux nuits en hôtel 5 étoiles avec voiture concierge." },
      { step: 3, title: "PET-CT / IRM", detail: "Imagerie haut de gamme complète dans la journée." },
      { step: 4, title: "Consultation académique", detail: "Consultation vidéo avec experts de Chongqing, Pékin et Shanghai." },
      { step: 5, title: "Gaofang MTC", detail: "Gaofang personnel d'un maître renommé." },
      { step: 6, title: "Dossier à vie", detail: "Dossier santé cloud à vie + secours mondial." },
    ],
    institutions: ["Département VIP international de l'hôpital Southwest", "Département VIP international du Premier hôpital", "Centre VIP de l'hôpital Daping"],
  },
  royal: {
    name: "Yujian · Royal",
    tagline: "Royal Sanctuary",
    recommendedFor: "Top VIP / clients internationaux",
    highlights: ["IRM 7T corps entier", "Séquençage génomique complet", "Consultation internationale à distance", "2 jours de cure thermale"],
    flow: [
      { step: 1, title: "Accueil international", detail: "Voiture privée depuis l'aéroport + majordome." },
      { step: 2, title: "Source thermale privée", detail: "Deux nuits dans un resort thermal privé." },
      { step: 3, title: "Bilan royal", detail: "IRM 7T / génome / imagerie haut de gamme complète." },
      { step: 4, title: "Panel international", detail: "Consultation tripartite avec Mayo, Gleneagles et l'université médicale de Tokyo." },
      { step: 5, title: "MTC + thermes", detail: "Gaofang de maître + bain de plantes." },
      { step: 6, title: "Dossier global + secours", detail: "Membre à vie d'une organisation de secours internationale." },
    ],
    institutions: ["Centre suisse de collaboration Gleneagles", "Consultation à distance Mayo Clinic", "Gleneagles Chongqing"],
  },
};

export default checkups;
