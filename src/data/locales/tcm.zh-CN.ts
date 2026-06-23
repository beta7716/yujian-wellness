import type { LocalizedTcmTherapy, LocalizedTcmDoctor, LocalizedSolarTerm } from "../tcm";

const therapies: Record<string, LocalizedTcmTherapy> = {
  acupuncture: {
    name: "针灸",
    en: "Acupuncture",
    desc: "以毫针刺激经络穴位，调和气血、疏通经络。",
    benefit: "缓解疼痛 · 改善睡眠 · 调节内分泌",
  },
  cupping: {
    name: "拔罐",
    en: "Cupping",
    desc: "利用负压吸附体表，活血祛风、散寒除湿。",
    benefit: "舒筋活络 · 祛湿排毒 · 缓解肌肉紧张",
  },
  moxibustion: {
    name: "艾灸",
    en: "Moxibustion",
    desc: "以艾条温热刺激穴位，温阳补气、扶正祛邪。",
    benefit: "暖宫驱寒 · 提升免疫 · 调理脾胃",
  },
  tuina: {
    name: "推拿",
    en: "Tuina",
    desc: "通过手法作用于经络穴位与筋骨，理筋整复。",
    benefit: "舒缓颈肩 · 改善体态 · 促进循环",
  },
  "herbal-bath": {
    name: "药浴",
    en: "Herbal Bath",
    desc: "以草本煎汤入浴，透皮吸收，调理全身。",
    benefit: "美肤养肤 · 安神助眠 · 疏通经络",
  },
  "diet-therapy": {
    name: "药膳",
    en: "Dietary Therapy",
    desc: "药食同源，根据体质配伍食材，日常调养。",
    benefit: "健脾养胃 · 补气养血 · 未病先防",
  },
};

const doctors: Record<string, LocalizedTcmDoctor> = {
  "dr-wang": {
    name: "王济世",
    title: "主任中医师 · 全国名中医",
    specialty: "内科杂症、脾胃病、亚健康调理",
    schedule: "周一 / 三 / 五 上午 · 预约制",
  },
  "dr-li": {
    name: "李芳苓",
    title: "副主任中医师 · 针灸博士",
    specialty: "针灸镇痛、失眠焦虑、妇科调理",
    schedule: "周二 / 四 / 六 全天 · 预约制",
  },
  "dr-chen": {
    name: "陈明堂",
    title: "主任中医师 · 推拿传承人",
    specialty: "颈肩腰腿痛、运动康复、脊柱调理",
    schedule: "周一 / 四 / 六 下午 · 预约制",
  },
  "dr-zhang": {
    name: "张少白",
    title: "主治中医师 · 中医美容",
    specialty: "体质辨识、药膳食疗、皮肤调养",
    schedule: "周三 / 五 / 日 全天 · 预约制",
  },
};

const solarTerms: Record<string, LocalizedSolarTerm> = {
  lichun: { name: "立春", monthLabel: "2月", tip: "春生阳气，宜疏肝理气，食辛温升散之品。", herbs: ["柴胡", "玫瑰花", "枸杞"] },
  yushui: { name: "雨水", monthLabel: "2月", tip: "湿气渐重，宜健脾祛湿，少食生冷油腻。", herbs: ["薏苡仁", "茯苓", "山药"] },
  jingzhe: { name: "惊蛰", monthLabel: "3月", tip: "春雷惊虫，宜润肺清火，防过敏。", herbs: ["百合", "雪梨", "菊花"] },
  chunfen: { name: "春分", monthLabel: "3月", tip: "阴阳平衡，宜调和肝脾，早睡早起。", herbs: ["枸杞", "红枣", "山药"] },
  qingming: { name: "清明", monthLabel: "4月", tip: "清肝明目，宜踏青疏肝，饮明前茶。", herbs: ["菊花", "决明子", "绿茶"] },
  guyu: { name: "谷雨", monthLabel: "4月", tip: "雨生百谷，宜养血健脾，防湿邪困脾。", herbs: ["红豆", "薏米", "芡实"] },
  lixia: { name: "立夏", monthLabel: "5月", tip: "夏气初起，宜养心护阳，饮食清淡。", herbs: ["莲子", "麦冬", "绿豆"] },
  xiaoman: { name: "小满", monthLabel: "5月", tip: "湿热交蒸，宜清热利湿，勿贪凉。", herbs: ["冬瓜", "荷叶", "赤小豆"] },
  mangzhong: { name: "芒种", monthLabel: "6月", tip: "忙种时节，宜生津止渴，养心安神。", herbs: ["乌梅", "山楂", "甘草"] },
  xiazhi: { name: "夏至", monthLabel: "6月", tip: "阳极阴生，宜晚睡早起，午间小憩。", herbs: ["西洋参", "石斛", "绿豆"] },
  xiaoshu: { name: "小暑", monthLabel: "7月", tip: "暑热渐盛，宜清淡消暑，多饮绿豆汤。", herbs: ["绿豆", "金银花", "薄荷"] },
  dashu: { name: "大暑", monthLabel: "7月", tip: "暑湿最重，宜健脾祛湿，冬病夏治。", herbs: ["藿香", "佩兰", "生姜"] },
};

export default { therapies, doctors, solarTerms };
