import type { LocalizedTestimonial } from "../testimonials";

const testimonials: Record<string, LocalizedTestimonial> = {
  "testimonial-1": { name: "Sra. Lin", city: "Xangai", quote: "Três dias na fonte termal privativa da Montanha Jinyun me fizeram entender de verdade o que é cura. Ainda sigo o plano de constituição de MTC.", program: "Beiwenquan · Retiro de águas termais", initials: "L" },
  "testimonial-2": { name: "Sr. Anderson", city: "Nova York", quote: "A jornada de herança MTC mudou minha visão de bem-estar. O diagnóstico de pulso do Dr. Wang foi o mais preciso que já tive.", program: "Herança MTC · Aprendiz do mestre", initials: "A" },
  "testimonial-3": { name: "Sra. Sato", city: "Tóquio", quote: "O cruzeiro pelas Três Gargantas do Yangtzé foi magnífico. O tai chi matinal e a cerimônia do chá equilibraram corpo e mente.", program: "Três Gargantas do Yangtzé · Atenção plena", initials: "S" },
  "testimonial-4": { name: "Sr. Chen", city: "Shenzhen", quote: "Reservamos o check-up VIP para meus pais. Do transfer do aeroporto à revisão do relatório, tudo foi organizado. Disseram que foi mais fácil do que ir a Hong Kong.", program: "VIP Imperial", initials: "C" },
};

export default testimonials;
