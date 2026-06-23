import type { LocalizedRoute } from "../routes";

const routes: Record<string, LocalizedRoute> = {
  "hot-spring-healing": {
    title: "Beiwenquan · Retiro de aguas termales",
    subtitle: "Retiro de 3 días",
    highlight: "Sanación en un manantial milenario al pie del monte Jinyun, con baños de hierbas y tai chi matutino.",
    tags: ["Aguas termales", "Baño de hierbas", "Tai chi", "Zen"],
    itinerary: [
      { day: 1, title: "Llegada · Registro", detail: "Traslado privado desde aeropuerto/estación, registro en resort de aguas termales privado, cena medicinal." },
      { day: 2, title: "Práctica matutina · Sanación", detail: "Tai chi matutino, terapia de manantial antiguo, consulta de medicina china por la tarde." },
      { day: 3, title: "Salida · Regalos de hierbas", detail: "Caminata matutina por el bosque, regalos de hierbas personalizados, traslado." },
    ],
    includes: ["2 noches en manantial privado", "3 comidas medicinales diarias", "1 consulta de MTC", "2 sesiones de tai chi"],
    bestSeason: "Todo el año · mejor en otoño/invierno",
  },
  "gorge-mindfulness": {
    title: "Tres Gargantas del Yangtsé · Atención plena",
    subtitle: "Crucero de 5 días",
    highlight: "Crucero por el Yangtsé con meditación entre las gargantas Qutang, Wu y Xiling, ceremonia del té y cuidado de meridianos.",
    tags: ["Crucero", "Meditación", "Ceremonia del té", "Meridianos"],
    itinerary: [
      { day: 1, title: "Embarque · Salida", detail: "Embarque en el muelle Chaotianmen, ceremonia de bienvenida del té." },
      { day: 2, title: "Garganta Qutang · Amanecer", detail: "Contemplación del amanecer, ejercicios de respiración, masaje de meridianos en cubierta." },
      { day: 3, title: "Garganta Wu · Diosa", detail: "Meditación silenciosa en la niebla de Wushan, ronda del médico de MTC." },
      { day: 4, title: "Garganta Xiling · Montaña del té", detail: "Desembarque en la montaña del té, terapia del té y almuerzo medicinal." },
      { day: 5, title: "Regreso", detail: "Regreso desde Yichang, regalo: té de nube de montaña." },
    ],
    includes: ["4 noches en cabina con balcón", "2 sesiones de meridianos", "Ceremonia del té y comidas", "Entradas a atracciones"],
    bestSeason: "Primavera y otoño · abr-jun / sep-nov",
  },
  "tcm-family": {
    title: "Escuela de MTC · Aprendiz del maestro",
    subtitle: "Viaje de 4 días",
    highlight: "Aprenda de un maestro nacional de MTC, copie recetas, prepare gaofang y experimente acupuntura, tuina y moxibustión.",
    tags: ["Maestro", "Gaofang", "Acupuntura", "Tuina"],
    itinerary: [
      { day: 1, title: "Aprendizaje · Recetas", detail: "Copia de recetas en la clínica del maestro, visita al museo de medicina china." },
      { day: 2, title: "Acupuntura · Moxibustión", detail: "Experiencia personal de acupuntura y moxibustión, explicación de la constitución." },
      { day: 3, title: "Preparación de gaofang", detail: "Preparación de gaofang personal con el maestro, almuerzo medicinal." },
      { day: 4, title: "Seguimiento · Salida", detail: "Seguimiento y explicación del informe de constitución, regalo: gaofang personal." },
    ],
    includes: ["2 consultas con el maestro", "1 gaofang con hierbas", "Acupuntura / moxibustión / tuina", "Taller de gaofang"],
    bestSeason: "Todo el año",
  },
  "ancient-trail": {
    title: "Monte Jinfo · Sendero antiguo",
    subtitle: "Trekking de 5 días",
    highlight: "Caminata por bosques de rododendros y templos antiguos del monte Jinfo, con estiramientos y recuperación con cocina de hierbas.",
    tags: ["Trekking", "Cocina medicinal", "Templo antiguo", "Estiramientos"],
    itinerary: [
      { day: 1, title: "Entrada · Estiramientos", detail: "Entrada por la ladera oeste, estiramientos funcionales e instrucciones de equipo." },
      { day: 2, title: "Bosque de rododendros · Mañana", detail: "Meditación matutina en el bosque, té zen en templo antiguo." },
      { day: 3, title: "Cumbre · Mar de nubes", detail: "Ascenso a la cumbre para ver el mar de nubes, almuerzo de hierbas de montaña." },
      { day: 4, title: "Jardín de hierbas", detail: "Visita al jardín de hierbas, taller de bolsas de baño de hierbas." },
      { day: 5, title: "Descenso · Salida", detail: "Descenso pausado, evaluación de recuperación deportiva." },
    ],
    includes: ["Entrada + teleférico", "Guía profesional", "Taller de bolsas de baño", "Evaluación de recuperación"],
    bestSeason: "mayo-junio / septiembre-octubre",
  },
  "ancient-town": {
    title: "Gongtan · Quietud junto al río",
    subtitle: "Retiro de 3 días",
    highlight: "Retiro en una casa antigua de mil años en Gongtan: té junto al fuego por la noche, tai chi y caligrafía por la mañana.",
    tags: ["Pueblo antiguo", "Caligrafía", "Té junto al fuego", "Tai chi"],
    itinerary: [
      { day: 1, title: "Llegada · Té junto al fuego", detail: "Registro en Gongtan, té junto al fuego por la noche." },
      { day: 2, title: "Mañana · Caligrafía", detail: "Tai chi matutino, caligrafía, paseo junto al río Wu al atardecer." },
      { day: 3, title: "Salida", detail: "Meditación matutina, regalos: té artesanal y brocado Tujia." },
    ],
    includes: ["2 noches en casa antigua", "2 noches de té junto al fuego", "2 sesiones de tai chi", "1 sesión de caligrafía"],
    bestSeason: "Primavera y otoño",
  },
  "city-medical": {
    title: "Chongqing urbano · Estética médica",
    subtitle: "Renovación de 3 días",
    highlight: "Dermatología de hospital clase 3A y tratamientos estéticos ligeros con vistas nocturnas de la ciudad y gastronomía Michelin.",
    tags: ["Estética", "Dermatología", "Hospital 3A", "Urbano"],
    itinerary: [
      { day: 1, title: "Llegada · Consulta", detail: "Análisis de piel, consulta con experto y diseño del plan." },
      { day: 2, title: "Renovación", detail: "Tratamiento estético por la mañana, vistas nocturnas de Hongyadong." },
      { day: 3, title: "Seguimiento · Salida", detail: "Revisión post-tratamiento y kit de cuidado, regalo: set de cuidado facial." },
    ],
    includes: ["1 análisis de piel", "1 tratamiento estético", "Kit post-tratamiento", "Coche privado durante todo el viaje"],
    bestSeason: "Todo el año",
  },
};

export default routes;
