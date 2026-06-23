import type { LocalizedCheckupPackage } from "../checkups";

const checkups: Record<string, LocalizedCheckupPackage> = {
  essential: {
    name: "Ciudad Montaña · Esencial",
    tagline: "Essential Wellness",
    recommendedFor: "30+ control de indicadores",
    highlights: ["Hemograma · orina · 12 marcadores hepáticos", "TAC de baja dosis de tórax", "Ultrasonido abdominal + tiroides", "Informe final de médico jefe"],
    flow: [
      { step: 1, title: "Reserva online", detail: "Seleccione el paquete en la mini-app y confirme la hora." },
      { step: 2, title: "Traslado privado", detail: "Traslado puerta a puerta dentro de Chongqing." },
      { step: 3, title: "Chequeo en ayunas", detail: "Acompañamiento médico, promedio 2.5 horas." },
      { step: 4, title: "Desayuno saludable", detail: "Vale de desayuno de bajo índice glucémico." },
      { step: 5, title: "Interpretación experta", detail: "Revisión individual de resultados unos 30 minutos." },
      { step: 6, title: "Gestión de salud", detail: "Seguimiento dinámico del historial durante un año." },
    ],
    institutions: ["Primer Hospital Afiliado de la Universidad Médica de Chongqing", "Hospital de MTC de Chongqing", "Hospital General Chungang"],
  },
  deep: {
    name: "Cumbre Nube · Profundo",
    tagline: "Deep Care",
    recommendedFor: "40+ riesgo de enfermedades crónicas",
    highlights: ["RMN de cuerpo entero", "TAC coronaria", "Endoscopia digestiva indolora", "12 marcadores tumorales"],
    flow: [
      { step: 1, title: "Asesor 1v1", detail: "Asesor personal diseña un plan a medida." },
      { step: 2, title: "Canal VIP", detail: "Canal VIP independiente sin colas." },
      { step: 3, title: "Estudios profundos", detail: "RMN / TAC / endoscopia / ecografía completa." },
      { step: 4, title: "Diagnóstico MTC", detail: "Análisis de constitución según MTC." },
      { step: 5, title: "Consulta multidisciplinar", detail: "Revisión conjunta de medicina interna, imagen y MTC." },
      { step: 6, title: "Seguimiento anual", detail: "Mayordomo de salud personal durante un año." },
    ],
    institutions: ["Segundo Hospital Afiliado de la Universidad Médica de Chongqing", "Hospital Oncológico de la Universidad de Chongqing", "Hospital Southwest"],
  },
  vip: {
    name: "VIP Imperial",
    tagline: "Imperial VIP",
    recommendedFor: "Ejecutivos / alto patrimonio",
    highlights: ["PET-CT corporal total", "Coronaria + MRA craneal", "168 marcadores genéticos", "Evaluación de experto académico"],
    flow: [
      { step: 1, title: "Médico personal", detail: "Médico personal de nivel jefe de servicio." },
      { step: 2, title: "Coche + hotel", detail: "Dos noches en hotel 5 estrellas con coche conserje." },
      { step: 3, title: "PET-CT / MRA", detail: "Completa todas las imágenes avanzadas en un día." },
      { step: 4, title: "Consulta académica", detail: "Consulta en vídeo con expertos de Chongqing, Pekín y Shanghái." },
      { step: 5, title: "Gaofang MTC", detail: "Gaofang personal de un maestro renombrado." },
      { step: 6, title: "Historial vitalicio", detail: "Historial en la nube de por vida + rescate global." },
    ],
    institutions: ["Departamento VIP Internacional del Hospital Southwest", "Departamento VIP Internacional del Primer Hospital", "Centro VIP del Hospital Daping"],
  },
  royal: {
    name: "Yujian · Real",
    tagline: "Royal Sanctuary",
    recommendedFor: "Top VIP / clientes internacionales",
    highlights: ["RMN 7T corporal", "Secuenciación del genoma completo", "Consulta remota internacional", "2 días de bienestar termal"],
    flow: [
      { step: 1, title: "Recepción internacional", detail: "Coche privado desde el aeropuerto + mayordomo." },
      { step: 2, title: "Termas privadas", detail: "Dos noches en un resort termal privado." },
      { step: 3, title: "Estudios reales", detail: "7T MRI / genoma / imagen avanzada completa." },
      { step: 4, title: "Panel internacional", detail: "Consulta tripartita con Mayo, Gleneagles y la Universidad Médica de Tokio." },
      { step: 5, title: "MTC + termas", detail: "Gaofang de maestro + baño de hierbas." },
      { step: 6, title: "Registro global + rescate", detail: "Miembro vitalicio de organización de rescate internacional." },
    ],
    institutions: ["Centro Suizo de Colaboración Gleneagles", "Consulta Remota Mayo Clinic", "Gleneagles Chongqing"],
  },
};

export default checkups;
