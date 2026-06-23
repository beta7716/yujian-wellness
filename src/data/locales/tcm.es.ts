import type { LocalizedTcmTherapy, LocalizedTcmDoctor, LocalizedSolarTerm } from "../tcm";

const therapies: Record<string, LocalizedTcmTherapy> = {
  acupuncture: { name: "Acupuntura", en: "Acupuncture", desc: "Agujas finas estimulan puntos meridianos para regular qi y sangre.", benefit: "Alivio del dolor · Sueño reparador · Equilibrio endocrino" },
  cupping: { name: "Ventosas", en: "Cupping", desc: "La presión negativa se adhiere a la piel, activa la circulación y expulsa frío-humedad.", benefit: "Relajación muscular · Detox · Alivio de tensión" },
  moxibustion: { name: "Moxibustión", en: "Moxibustion", desc: "El artemisa ardiente calienta puntos, tonifica yang y fortalece la inmunidad.", benefit: "Calienta el útero · Aumenta defensas · Regula digestión" },
  tuina: { name: "Tuina", en: "Tuina", desc: "Técnicas manuales actúan sobre meridianos, puntos, músculos y huesos.", benefit: "Cuello-hombros · Postura · Circulación" },
  "herbal-bath": { name: "Baño de hierbas", en: "Herbal Bath", desc: "Infusiones herbales se añaden al agua para absorción cutánea.", benefit: "Nutre piel · Sueño tranquilo · Relaja meridianos" },
  "diet-therapy": { name: "Dietoterapia", en: "Dietary Therapy", desc: "La comida como medicina: ingredientes combinados según constitución.", benefit: "Salud digestiva · Nutre qi y sangre · Prevención" },
};

const doctors: Record<string, LocalizedTcmDoctor> = {
  "dr-wang": { name: "Wang Jishi", title: "Médico jefe de MTC · Maestro nacional", specialty: "Medicina interna, trastornos digestivos, ajuste de sub-salud", schedule: "Lun / Mié / Vie mañanas · con cita" },
  "dr-li": { name: "Li Fangling", title: "Médico asociado de MTC · Doctora en acupuntura", specialty: "Analgesia acupuntural, insomnio y ansiedad, salud femenina", schedule: "Mar / Jue / Sáb todo el día · con cita" },
  "dr-chen": { name: "Chen Mingtang", title: "Médico jefe de MTC · Heredero tuina", specialty: "Dolor cervical, de hombros, lumbar y piernas, recuperación deportiva", schedule: "Lun / Jue / Sáb tardes · con cita" },
  "dr-zhang": { name: "Zhang Shaobai", title: "Médico de MTC · Cosmetología MTC", specialty: "Análisis de constitución, dietoterapia, cuidado de la piel", schedule: "Mié / Vie / Dom todo el día · con cita" },
};

const solarTerms: Record<string, LocalizedSolarTerm> = {
  lichun: { name: "Inicio de primavera", monthLabel: "feb", tip: "El yang primaveral asciende; calma el hígado y regula qi, come alimentos picantes y cálidos.", herbs: ["Bupleurum", "Rosa", "Goji"] },
  yushui: { name: "Lluvia de primavera", monthLabel: "feb", tip: "La humedad aumenta; fortalece el bazo y elimina humedad, evita comida fría y grasosa.", herbs: ["Lágrimas de Job", "Poria", "Ñame chino"] },
  jingzhe: { name: "Despertar de insectos", monthLabel: "mar", tip: "El trueno de primavera despierta insectos; humecta pulmones, disipa calor, previene alergias.", herbs: ["Lirio", "Pera de nieve", "Crisantemo"] },
  chunfen: { name: "Equinoccio de primavera", monthLabel: "mar", tip: "Equilibrio yin-yang; armoniza hígado y bazo, duerme y levántate temprano.", herbs: ["Goji", "Dátiles rojos", "Ñame chino"] },
  qingming: { name: "Qingming", monthLabel: "abr", tip: "Limpia hígado y aclara ojos; pasea y bebe té pre-Qingming.", herbs: ["Crisantemo", "Semillas de cassia", "Té verde"] },
  guyu: { name: "Lluvia de granos", monthLabel: "abr", tip: "La lluvia nutre granos; nutre sangre y fortalece bazo, cuida la humedad.", herbs: ["Frijol rojo", "Lágrimas de Job", "Euryale"] },
  lixia: { name: "Inicio de verano", monthLabel: "may", tip: "Comienza el verano; nutre corazón y protege yang, dieta ligera.", herbs: ["Semilla de loto", "Ophiopogon", "Frijol mungo"] },
  xiaoman: { name: "Granos pequeños", monthLabel: "may", tip: "Calor y humedad se mezclan; limpia calor y drena humedad, evita frío.", herbs: ["Calabaza de invierno", "Hoja de loto", "Frijol rojo"] },
  mangzhong: { name: "Granos en espiga", monthLabel: "jun", tip: "Temporada agrícola ocupada; genera fluidos, calma corazón.", herbs: ["Ciruela oscura", "Espino", "Regaliz"] },
  xiazhi: { name: "Solsticio de verano", monthLabel: "jun", tip: "Yang llega al pico y nace yin; acuéstate tarde y levántate temprano, siesta.", herbs: ["Ginseng americano", "Dendrobium", "Frijol mungo"] },
  xiaoshu: { name: "Calor menor", monthLabel: "jul", tip: "El calor aumenta; dieta ligera y refrescante, más sopa de frijol mungo.", herbs: ["Frijol mungo", "Madreselva", "Menta"] },
  dashu: { name: "Calor mayor", monthLabel: "jul", tip: "Pico de humedad veraniega; fortalece bazo, elimina humedad, trata enfermedades de invierno en verano.", herbs: ["Pachuli", "Eupatorio", "Jengibre"] },
};

export default { therapies, doctors, solarTerms };
