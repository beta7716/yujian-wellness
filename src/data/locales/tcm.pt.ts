import type { LocalizedTcmTherapy, LocalizedTcmDoctor, LocalizedSolarTerm } from "../tcm";

const therapies: Record<string, LocalizedTcmTherapy> = {
  acupuncture: { name: "Acupuntura", en: "Acupuncture", desc: "Agulhas finas estimulam pontos meridianos para regular qi e sangue.", benefit: "Alívio da dor · Sono reparador · Equilíbrio endócrino" },
  cupping: { name: "Ventosas", en: "Cupping", desc: "A pressão negativa adere à pele, ativa a circulação e expulsa frio-umidade.", benefit: "Relaxamento muscular · Desintoxicação · Alívio de tensão" },
  moxibustion: { name: "Moxabustão", en: "Moxibustion", desc: "A artemísia em chamas aquece pontos, tonifica yang e fortalece a imunidade.", benefit: "Aquece o útero · Aumenta defesas · Regula digestão" },
  tuina: { name: "Tuina", en: "Tuina", desc: "Técnicas manuais atuam sobre meridianos, pontos, músculos e ossos.", benefit: "Pescoço-ombros · Postura · Circulação" },
  "herbal-bath": { name: "Banho de ervas", en: "Herbal Bath", desc: "Infusões de ervas são adicionadas à água para absorção cutânea.", benefit: "Nutre a pele · Sono tranquilo · Relaxa meridianos" },
  "diet-therapy": { name: "Dietoterapia", en: "Dietary Therapy", desc: "O alimento como remédio: ingredientes combinados conforme constituição.", benefit: "Saúde digestiva · Nutre qi e sangue · Prevenção" },
};

const doctors: Record<string, LocalizedTcmDoctor> = {
  "dr-wang": { name: "Wang Jishi", title: "Médico chefe de MTC · Mestre nacional", specialty: "Medicina interna, distúrbios digestivos, ajuste de sub-saúde", schedule: "Seg / Qua / Sex manhãs · com hora marcada" },
  "dr-li": { name: "Li Fangling", title: "Médica associada de MTC · Doutora em acupuntura", specialty: "Analgesia acupuntural, insônia e ansiedade, saúde feminina", schedule: "Ter / Qui / Sáb o dia todo · com hora marcada" },
  "dr-chen": { name: "Chen Mingtang", title: "Médico chefe de MTC · Herdeiro tuina", specialty: "Dores no pescoço, ombros, lombar e pernas, recuperação esportiva", schedule: "Seg / Qui / Sáb tardes · com hora marcada" },
  "dr-zhang": { name: "Zhang Shaobai", title: "Médico de MTC · Cosmetologia MTC", specialty: "Análise de constituição, dietoterapia, cuidado da pele", schedule: "Qua / Sex / Dom o dia todo · com hora marcada" },
};

const solarTerms: Record<string, LocalizedSolarTerm> = {
  lichun: { name: "Início da primavera", monthLabel: "fev", tip: "O yang primaveril sobe; acalme o fígado e regule o qi, coma alimentos picantes e quentes.", herbs: ["Bupleurum", "Rosa", "Goji"] },
  yushui: { name: "Chuva de primavera", monthLabel: "fev", tip: "A umidade aumenta; fortaleça o baço e elimine a umidade, evite comida fria e gordurosa.", herbs: ["Lágrimas de Jó", "Poria", "Inhame chinês"] },
  jingzhe: { name: "Despertar dos insetos", monthLabel: "mar", tip: "O trovão da primavera desperta insetos; umedeça os pulmões, dissipse calor, previna alergias.", herbs: ["Lírio", "Pera de neve", "Crisântemo"] },
  chunfen: { name: "Equinócio de primavera", monthLabel: "mar", tip: "Equilíbrio yin-yang; harmonize fígado e baço, durma e acorde cedo.", herbs: ["Goji", "Tâmaras vermelhas", "Inhame chinês"] },
  qingming: { name: "Qingming", monthLabel: "abr", tip: "Limpe o fígado e aclare os olhos; passeie e beba chá.", herbs: ["Crisântemo", "Sementes de cássia", "Chá verde"] },
  guyu: { name: "Chuva de grãos", monthLabel: "abr", tip: "A chuva nutre os grãos; nutra o sangue e fortaleça o baço.", herbs: ["Feijão vermelho", "Lágrimas de Jó", "Euryale"] },
  lixia: { name: "Início do verão", monthLabel: "mai", tip: "O verão começa; nutra o coração e proteja o yang, alimentação leve.", herbs: ["Semente de lótus", "Ophiopogon", "Feijão mungo"] },
  xiaoman: { name: "Pequenos grãos", monthLabel: "mai", tip: "Calor e umidade se misturam; limpe o calor e drene a umidade, evite frio.", herbs: ["Abóbora de inverno", "Folha de lótus", "Feijão vermelho"] },
  mangzhong: { name: "Grãos em espiga", monthLabel: "jun", tip: "Temporada agrícola ocupada; produza fluidos, acalme o coração.", herbs: ["Ameixa escura", "Espinheiro", "Alcaçuz"] },
  xiazhi: { name: "Solstício de verão", monthLabel: "jun", tip: "Yang no pico, yin nasce; durma tarde e acorde cedo, soneca ao meio-dia.", herbs: ["Ginseng americano", "Dendrobium", "Feijão mungo"] },
  xiaoshu: { name: "Calor menor", monthLabel: "jul", tip: "O calor aumenta; dieta leve e refrescante, mais sopa de feijão mungo.", herbs: ["Feijão mungo", "Madressilva", "Hortelã"] },
  dashu: { name: "Calor maior", monthLabel: "jul", tip: "Pico da umidade veranil; fortaleça o baço, elimine umidade, trate doenças de inverno no verão.", herbs: ["Patchouli", "Eupatório", "Gengibre"] },
};

export default { therapies, doctors, solarTerms };
