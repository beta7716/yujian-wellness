import type { LocalizedRoute } from "../routes";

const routes: Record<string, LocalizedRoute> = {
  "hot-spring-healing": {
    title: "Beiwenquan · Retiro de águas termais",
    subtitle: "Retiro de 3 dias",
    highlight: "Cura numa fonte milenar ao pé do Monte Jinyun, com banhos de ervas e tai chi matinal.",
    tags: ["Águas termais", "Banho de ervas", "Tai chi", "Zen"],
    itinerary: [
      { day: 1, title: "Chegada · Check-in", detail: "Transfer privado do aeroporto/estação, check-in no resort termal privado, jantar de ervas." },
      { day:  2, title: "Prática matinal · Cura termal", detail: "Tai chi matinal, terapia na fonte antiga, consulta de MTC à tarde." },
      { day: 3, title: "Partida · Presentes de ervas", detail: "Caminhada matinal na floresta, presentes de ervas personalizados, transfer." },
    ],
    includes: ["2 noites em fonte privada", "3 refeições diárias de ervas", "1 consulta de MTC", "2 sessões de tai chi"],
    bestSeason: "Todo o ano · melhor no outono/inverno",
  },
  "gorge-mindfulness": {
    title: "Três Gargantas do Yangtzé · Atenção plena",
    subtitle: "Cruzeiro de 5 dias",
    highlight: "Cruzeiro pelo Yangtzé com meditação entre as gargantas Qutang, Wu e Xiling, cerimônia do chá e cuidado dos meridianos.",
    tags: ["Cruzeiro", "Meditação", "Cerimônia do chá", "Meridianos"],
    itinerary: [
      { day: 1, title: "Embarque · Partida", detail: "Embarque no cais Chaotianmen, cerimônia de boas-vindas do chá." },
      { day: 2, title: "Garganta Qutang · Amanhecer", detail: "Contemplação ao amanhecer, exercícios de respiração, massagem de meridianos no convés." },
      { day: 3, title: "Garganta Wu · Deusa", detail: "Meditação silenciosa na névoa de Wushan, visita do médico de MTC." },
      { day: 4, title: "Garganta Xiling · Monte do chá", detail: "Desembarque nas montanhas do chá, terapia do chá e almoço de ervas." },
      { day: 5, title: "Regresso", detail: "Regresso de Yichang, presente: chá de nuvem de montanha." },
    ],
    includes: ["4 noites em cabine com varanda", "2 sessões de meridianos", "Cerimônia do chá e refeições", "Bilhetes de atrações"],
    bestSeason: "Primavera & outono · abr-jun / set-nov",
  },
  "tcm-family": {
    title: "Herança MTC · Aprendiz do mestre",
    subtitle: "Viagem de 4 dias",
    highlight: "Aprenda com um mestre nacional de MTC, copie receitas, prepare gaofang e experimente acupuntura, tuina e moxabustão.",
    tags: ["Mestre", "Gaofang", "Acupuntura", "Tuina"],
    itinerary: [
      { day: 1, title: "Aprendizado · Receitas", detail: "Cópia de receitas na clínica do mestre, visita ao museu de medicina chinesa." },
      { day: 2, title: "Acupuntura · Moxabustão", detail: "Experiência pessoal de acupuntura e moxabustão, explicação da constituição." },
      { day: 3, title: "Preparação do gaofang", detail: "Preparação de gaofang pessoal com o mestre, almoço de ervas." },
      { day: 4, title: "Acompanhamento · Partida", detail: "Acompanhamento e explicação do relatório de constituição, presente: gaofang pessoal." },
    ],
    includes: ["2 consultas com o mestre", "1 gaofang com ervas", "Acupuntura / moxabustão / tuina", "Workshop de gaofang"],
    bestSeason: "Todo o ano",
  },
  "ancient-trail": {
    title: "Monte Jinfo · Trilha antiga",
    subtitle: "Trekking de 5 dias",
    highlight: "Caminhada pelas florestas de rododendros e templos antigos do Monte Jinfo, com alongamento e recuperação com culinária de ervas.",
    tags: ["Trekking", "Culinária de ervas", "Templo antigo", "Alongamento"],
    itinerary: [
      { day: 1, title: "Entrada na montanha · Alongamento", detail: "Entrada pela encosta oeste, alongamento funcional e instruções de equipamento." },
      { day: 2, title: "Floresta de rododendros · Manhã", detail: "Meditação matinal na floresta, chá zen em templo antigo." },
      { day: 3, title: "Cume · Mar de nuvens", detail: "Subida ao cume para ver o mar de nuvens, almoço de ervas de montanha." },
      { day: 4, title: "Jardim de ervas", detail: "Visita ao jardim de ervas alpino, workshop de sachês de banho de ervas." },
      { day: 5, title: "Descida · Partida", detail: "Descida lenta, avaliação de recuperação esportiva." },
    ],
    includes: ["Bilhete de entrada + teleférico", "Guia profissional", "Workshop de sachês de banho", "Avaliação de recuperação"],
    bestSeason: "maio-junho / setembro-outubro",
  },
  "ancient-town": {
    title: "Gongtan · Quietude à beira do rio",
    subtitle: "Retiro de 3 dias",
    highlight: "Retiro numa casa antiga milenar de Gongtan: chá à lareira à noite, tai chi e caligrafia de manhã.",
    tags: ["Cidade antiga", "Caligrafia", "Chá à lareira", "Tai chi"],
    itinerary: [
      { day: 1, title: "Chegada · Chá à lareira", detail: "Check-in em Gongtan, chá à lareira à noite." },
      { day: 2, title: "Manhã · Caligrafia", detail: "Tai chi matinal, caligrafia, passeio ao entardecer pelo rio Wu." },
      { day: 3, title: "Partida", detail: "Meditação matinal, presentes: chá artesanal e brocado Tujia." },
    ],
    includes: ["2 noites em casa antiga", "2 noites de chá à lareira", "2 sessões de tai chi", "1 sessão de caligrafia"],
    bestSeason: "Primavera & outono",
  },
  "city-medical": {
    title: "Chongqing urbano · Renovação estética",
    subtitle: "Escapada de 3 dias",
    highlight: "Dermatologia em hospital classe 3A e tratamentos estéticos leves com vistas noturnas da cidade e gastronomia Michelin.",
    tags: ["Estética", "Dermatologia", "Hospital 3A", "Urbano"],
    itinerary: [
      { day: 1, title: "Chegada · Consulta", detail: "Análise de pele, consulta com especialista e design do plano." },
      { day: 2, title: "Renovação", detail: "Tratamento estético de manhã, vista noturna de Hongyadong." },
      { day: 3, title: "Acompanhamento · Partida", detail: "Revisão pós-tratamento e kit de cuidados, presente: kit de cuidados personalizado." },
    ],
    includes: ["1 análise de pele", "1 tratamento estético", "Kit pós-tratamento", "Carro privado durante toda a estadia"],
    bestSeason: "Todo o ano",
  },
};

export default routes;
