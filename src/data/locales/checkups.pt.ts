import type { LocalizedCheckupPackage } from "../checkups";

const checkups: Record<string, LocalizedCheckupPackage> = {
  essential: {
    name: "Cidade Montanha · Essencial",
    tagline: "Essential Wellness",
    recommendedFor: "30+ controle de indicadores",
    highlights: ["Hemograma · urina · 12 marcadores hepáticos", "Tomografia de baixa dose de tórax", "Ultrassom abdominal + tireoide", "Relatório final do médico-chefe"],
    flow: [
      { step: 1, title: "Reserva online", detail: "Selecione o pacote no mini-app e confirme o horário." },
      { step: 2, title: "Transfer privado", detail: "Transfer porta a porta dentro da área urbana de Chongqing." },
      { step: 3, title: "Check-up em jejum", detail: "Acompanhamento médico, média de 2,5 horas." },
      { step: 4, title: "Café da manhã saudável", detail: "Vale para café da manhã de baixo índice glicêmico." },
      { step: 5, title: "Interpretação especializada", detail: "Revisão individual dos resultados por cerca de 30 minutos." },
      { step: 6, title: "Gestão de saúde", detail: "Acompanhamento dinâmico do prontuário por um ano." },
    ],
    institutions: ["Primeiro Hospital Afiliado da Universidade Médica de Chongqing", "Hospital de MTC de Chongqing", "Hospital Geral Chungang"],
  },
  deep: {
    name: "Cume das Nuvens · Aprofundado",
    tagline: "Deep Care",
    recommendedFor: "40+ risco de doenças crônicas",
    highlights: ["Ressonância de corpo inteiro", "Tomografia coronariana", "Endoscopia digestiva indolor", "12 marcadores tumorais"],
    flow: [
      { step: 1, title: "Assessor 1v1", detail: "Assessor pessoal elabora um plano personalizado." },
      { step: 2, title: "Canal VIP", detail: "Canal VIP exclusivo sem filas." },
      { step: 3, title: "Exames aprofundados", detail: "Ressonância / Tomografia / Endoscopia / Ultrassom completo." },
      { step: 4, title: "Diagnóstico MTC", detail: "Análise de constituição segundo a MTC." },
      { step: 5, title: "Consulta multidisciplinar", detail: "Revisão conjunta de medicina interna, imagem e MTC." },
      { step: 6, title: "Acompanhamento anual", detail: "Mordomo de saúde pessoal durante um ano." },
    ],
    institutions: ["Segundo Hospital Afiliado da Universidade Médica de Chongqing", "Hospital Oncológico da Universidade de Chongqing", "Hospital Southwest"],
  },
  vip: {
    name: "VIP Imperial",
    tagline: "Imperial VIP",
    recommendedFor: "Executivos / alta renda",
    highlights: ["PET-CT de corpo inteiro", "Coronariana + RMN craniana", "168 marcadores genéticos", "Avaliação de especialista acadêmico"],
    flow: [
      { step: 1, title: "Médico pessoal", detail: "Médico pessoal de nível chefe de serviço." },
      { step: 2, title: "Carro + hotel", detail: "Duas noites em hotel 5 estrelas com carro concierge." },
      { step: 3, title: "PET-CT / RMN", detail: "Imagem de alta complexidade completa em um dia." },
      { step: 4, title: "Consulta acadêmica", detail: "Consulta por vídeo com especialistas de Chongqing, Pequim e Xangai." },
      { step: 5, title: "Gaofang MTC", detail: "Gaofang pessoal de um mestre renomado." },
      { step: 6, title: "Prontuário vitalício", detail: "Prontuário em nuvem vitalício + resgate global." },
    ],
    institutions: ["Departamento VIP Internacional do Hospital Southwest", "Departamento VIP Internacional do Primeiro Hospital", "Centro VIP do Hospital Daping"],
  },
  royal: {
    name: "Yujian · Real",
    tagline: "Royal Sanctuary",
    recommendedFor: "Top VIP / clientes internacionais",
    highlights: ["RMN 7T de corpo inteiro", "Sequenciamento completo do genoma", "Consulta internacional remota", "2 dias de bem-estar termal"],
    flow: [
      { step: 1, title: "Recepção internacional", detail: "Carro privado do aeroporto + mordomo." },
      { step: 2, title: "Fonte termal privativa", detail: "Duas noites em resort termal privativo." },
      { step: 3, title: "Exames reais", detail: "RMN 7T / genoma / imagem de alta complexidade completa." },
      { step: 4, title: "Painel internacional", detail: "Consulta tripartite com Mayo, Gleneagles e Universidade Médica de Tóquio." },
      { step: 5, title: "MTC + termas", detail: "Gaofang do mestre + banho de ervas." },
      { step: 6, title: "Registro global + resgate", detail: "Membro vitalício de organização de resgate internacional." },
    ],
    institutions: ["Centro Suíço de Colaboração Gleneagles", "Consulta Remota Mayo Clinic", "Gleneagles Chongqing"],
  },
};

export default checkups;
