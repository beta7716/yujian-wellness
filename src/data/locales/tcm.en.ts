import type { LocalizedTcmTherapy, LocalizedTcmDoctor, LocalizedSolarTerm } from "../tcm";

const therapies: Record<string, LocalizedTcmTherapy> = {
  acupuncture: {
    name: "Acupuncture",
    en: "Acupuncture",
    desc: "Fine needles stimulate meridian points to regulate qi and blood and unblock channels.",
    benefit: "Pain relief · Better sleep · Endocrine balance",
  },
  cupping: {
    name: "Cupping",
    en: "Cupping",
    desc: "Negative pressure cups adhere to the skin, activating blood flow and dispelling cold-damp.",
    benefit: "Muscle relaxation · Detox · Tension relief",
  },
  moxibustion: {
    name: "Moxibustion",
    en: "Moxibustion",
    desc: "Burning mugwort warms acupuncture points, tonifies yang and strengthens resistance.",
    benefit: "Warms the uterus · Immunity boost · Spleen-stomach regulation",
  },
  tuina: {
    name: "Tuina",
    en: "Tuina",
    desc: "Manual techniques work on meridians, points, muscles and bones to restore alignment.",
    benefit: "Neck-shoulder relief · Posture improvement · Circulation",
  },
  "herbal-bath": {
    name: "Herbal Bath",
    en: "Herbal Bath",
    desc: "Herbal decoctions are added to bath water for whole-body absorption through the skin.",
    benefit: "Skin nourishment · Calming sleep · Meridian relaxation",
  },
  "diet-therapy": {
    name: "Dietary Therapy",
    en: "Dietary Therapy",
    desc: "Food as medicine: ingredients are paired according to constitution for daily wellness.",
    benefit: "Spleen-stomach health · Qi-blood nourishment · Prevention",
  },
};

const doctors: Record<string, LocalizedTcmDoctor> = {
  "dr-wang": {
    name: "Wang Jishi",
    title: "Chief TCM Physician · National Master",
    specialty: "Internal medicine, spleen-stomach disorders, sub-health conditioning",
    schedule: "Mon / Wed / Fri mornings · by appointment",
  },
  "dr-li": {
    name: "Li Fangling",
    title: "Associate Chief TCM Physician · Acupuncture PhD",
    specialty: "Acupuncture analgesia, insomnia & anxiety, women's health",
    schedule: "Tue / Thu / Sat all day · by appointment",
  },
  "dr-chen": {
    name: "Chen Mingtang",
    title: "Chief TCM Physician · Tuina Heritage",
    specialty: "Neck, shoulder, waist and leg pain, sports recovery, spinal care",
    schedule: "Mon / Thu / Sat afternoons · by appointment",
  },
  "dr-zhang": {
    name: "Zhang Shaobai",
    title: "Attending TCM Physician · TCM Cosmetology",
    specialty: "Constitution analysis, medicated diet, skin conditioning",
    schedule: "Wed / Fri / Sun all day · by appointment",
  },
};

const solarTerms: Record<string, LocalizedSolarTerm> = {
  lichun: { name: "Start of Spring", monthLabel: "Feb", tip: "Spring yang rises; soothe the liver and regulate qi, eat pungent-warm foods.", herbs: ["Bupleurum", "Rose", "Goji"] },
  yushui: { name: "Rain Water", monthLabel: "Feb", tip: "Dampness increases; strengthen the spleen and dispel dampness, avoid cold-greasy food.", herbs: ["Job's tears", "Poria", "Chinese yam"] },
  jingzhe: { name: "Awakening of Insects", monthLabel: "Mar", tip: "Spring thunder wakes insects; moisten the lungs and clear heat, prevent allergies.", herbs: ["Lily bulb", "Snow pear", "Chrysanthemum"] },
  chunfen: { name: "Spring Equinox", monthLabel: "Mar", tip: "Balance of yin and yang; harmonize liver and spleen, sleep and rise early.", herbs: ["Goji", "Red dates", "Chinese yam"] },
  qingming: { name: "Qingming", monthLabel: "Apr", tip: "Clear liver and brighten eyes; enjoy outings and drink pre-Qingming tea.", herbs: ["Chrysanthemum", "Cassia seeds", "Green tea"] },
  guyu: { name: "Grain Rain", monthLabel: "Apr", tip: "Rain nourishes grains; nourish blood and strengthen spleen, prevent dampness.", herbs: ["Red bean", "Job's tears", "Gorgon fruit"] },
  lixia: { name: "Start of Summer", monthLabel: "May", tip: "Summer begins; nourish the heart and protect yang, keep diet light.", herbs: ["Lotus seed", "Ophiopogon", "Mung bean"] },
  xiaoman: { name: "Grain Full", monthLabel: "May", tip: "Heat and dampness mingle; clear heat and drain dampness, avoid cold drinks.", herbs: ["Winter melon", "Lotus leaf", "Red bean"] },
  mangzhong: { name: "Grain in Ear", monthLabel: "Jun", tip: "Busy farming season; generate fluids, quench thirst and calm the heart.", herbs: ["Dark plum", "Hawthorn", "Licorice"] },
  xiazhi: { name: "Summer Solstice", monthLabel: "Jun", tip: "Yang peaks and yin is born; sleep late and rise early, nap at noon.", herbs: ["American ginseng", "Dendrobium", "Mung bean"] },
  xiaoshu: { name: "Minor Heat", monthLabel: "Jul", tip: "Heat builds; keep diet light and cooling, drink more mung-bean soup.", herbs: ["Mung bean", "Honeysuckle", "Peppermint"] },
  dashu: { name: "Major Heat", monthLabel: "Jul", tip: "Peak summer dampness; strengthen spleen and dispel dampness, treat winter ailments in summer.", herbs: ["Patchouli", "Eupatorium", "Ginger"] },
};

export default { therapies, doctors, solarTerms };
