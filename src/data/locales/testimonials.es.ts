import type { LocalizedTestimonial } from "../testimonials";

const testimonials: Record<string, LocalizedTestimonial> = {
  "testimonial-1": { name: "Sra. Lin", city: "Shanghái", quote: "Tres días en el manantial privado de la montaña Jinyun me hicieron entender de verdad qué es la sanación. Todavía sigo el plan de constitución de MTC.", program: "Beiwenquan · Retiro de aguas termales", initials: "L" },
  "testimonial-2": { name: "Sr. Anderson", city: "Nueva York", quote: "El viaje de herencia de MTC cambió mi visión del bienestar. El diagnóstico de pulso del Dr. Wang fue el más preciso que he tenido.", program: "TCM Heritage · Aprendiz del maestro", initials: "A" },
  "testimonial-3": { name: "Sra. Sato", city: "Tokio", quote: "El crucero por las Tres Gargantas del Yangtsé fue magnífico. El tai chi matinal y la ceremonia del té equilibraron mi cuerpo y mente.", program: "Tres Gargantas del Yangtsé · Atención plena", initials: "S" },
  "testimonial-4": { name: "Sr. Chen", city: "Shenzhen", quote: "Reservamos el chequeo VIP para mis padres. Desde el traslado del aeropuerto hasta la revisión del informe, todo estuvo organizado. Dijeron que fue más fácil que ir a Hong Kong.", program: "VIP Imperial", initials: "C" },
};

export default testimonials;
