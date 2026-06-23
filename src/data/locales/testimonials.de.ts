import type { LocalizedTestimonial } from "../testimonials";

const testimonials: Record<string, LocalizedTestimonial> = {
  "testimonial-1": { name: "Frau Lin", city: "Shanghai", quote: "Drei Tage in der privaten Thermalquelle am Jinyun-Berg ließen mich verstehen, was Heilung bedeutet. Ich halte mich immer noch an den TCM-Konstitutionsplan.", program: "Beiwenquan · Thermalbad-Retreat", initials: "L" },
  "testimonial-2": { name: "Herr Anderson", city: "New York", quote: "Die TCM-Heritage-Reise veränderte mein Verständnis von Wellness. Die Pulsdia­gnose von Dr. Wang war die präziseste, die ich je hatte.", program: "TCM-Heritage · Meisterlehre", initials: "A" },
  "testimonial-3": { name: "Frau Sato", city: "Tokio", quote: "Die Kreuzfahrt durch die Drei Schluchten des Jangtse war großartig. Morgendliches Tai-Chi und Teezeremonie brachten Körper und Geist ins Gleichgewicht.", program: "Drei Schluchten des Jangtse · Achtsamkeit", initials: "S" },
  "testimonial-4": { name: "Herr Chen", city: "Shenzhen", quote: "Wir buchten die VIP-Vorsorge für meine Eltern. Vom Flughafentransfer bis zur Ergebnisbesprechung war alles organisiert. Sie sagten, es sei einfacher als nach Hongkong zu fahren.", program: "Imperial VIP", initials: "C" },
};

export default testimonials;
