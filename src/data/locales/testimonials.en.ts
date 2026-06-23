import type { LocalizedTestimonial } from "../testimonials";

const testimonials: Record<string, LocalizedTestimonial> = {
  "testimonial-1": {
    name: "Ms. Lin",
    city: "Shanghai",
    quote: "Three days at the Jinyun Mountain private hot spring made me truly understand what healing means. I still follow the TCM constitution plan.",
    program: "Beiwenquan · Forest Hot-Spring Retreat",
    initials: "L",
  },
  "testimonial-2": {
    name: "Mr. Anderson",
    city: "New York",
    quote: "The TCM heritage journey changed how I see wellness. Dr. Wang’s pulse diagnosis was the most precise health check I’ve ever had.",
    program: "TCM Heritage · Master Apprenticeship",
    initials: "A",
  },
  "testimonial-3": {
    name: "Ms. Sato",
    city: "Tokyo",
    quote: "The Yangtze Three Gorges cruise was magnificent. Morning tai chi and tea ceremony brought my body and mind into balance.",
    program: "Yangtze Three Gorges · Mindful Journey",
    initials: "S",
  },
  "testimonial-4": {
    name: "Mr. Chen",
    city: "Shenzhen",
    quote: "We booked the VIP checkup for my parents. From airport pickup to report review, everything was handled. They said it was easier than going to Hong Kong.",
    program: "Imperial VIP",
    initials: "C",
  },
};

export default testimonials;
