import type { LocalizedTestimonial } from "../testimonials";

const testimonials: Record<string, LocalizedTestimonial> = {
  "testimonial-1": { name: "Mme Lin", city: "Shanghai", quote: "Trois jours dans la source chaude privée de la montagne Jinyun m'ont fait comprendre ce qu'est la guérison. Je suis toujours le plan de constitution MTC.", program: "Beiwenquan · Retraite aux sources chaudes", initials: "L" },
  "testimonial-2": { name: "M. Anderson", city: "New York", quote: "Le voyage sur l'héritage MTC a changé ma vision du bien-être. Le diagnostic du pouls du Dr Wang était le plus précis que j'aie eu.", program: "Héritage MTC · Apprenti du maître", initials: "A" },
  "testimonial-3": { name: "Mme Sato", city: "Tokyo", quote: "La croisière dans les Trois Gorges du Yangtsé était magnifique. Le tai chi du matin et la cérémonie du thé ont équilibré mon corps et mon esprit.", program: "Trois Gorges du Yangtsé · Pleine conscience", initials: "S" },
  "testimonial-4": { name: "M. Chen", city: "Shenzhen", quote: "Nous avons réservé le bilan VIP pour mes parents. De l'accueil à l'aéroport à la revue des résultats, tout était organisé. Ils ont dit que c'était plus simple qu'aller à Hong Kong.", program: "VIP Impérial", initials: "C" },
};

export default testimonials;
