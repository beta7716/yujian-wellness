import { img } from "@/utils/format";

export interface TcmTherapy {
  id: string;
  name: string;
  en: string;
  desc: string;
  benefit: string;
  cover: string;
}

export interface TcmDoctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  years: number;
  schedule: string;
  cover: string;
}

export interface SolarTerm {
  id: string;
  name: string;
  month: string;
  tip: string;
  herbs: string[];
  cover?: string;
}

export const therapies: TcmTherapy[] = [
  {
    id: "acupuncture",
    name: "针灸",
    en: "Acupuncture",
    desc: "以毫针循经取穴，调和气血、疏通经络，适用于慢性疼痛、失眠与亚健康调理。",
    benefit: "镇痛 · 安神 · 调节免疫",
    cover: img(
      "Traditional Chinese acupuncture treatment close-up, hands inserting fine needles, warm clinic light, photorealistic",
      "square"
    ),
  },
  {
    id: "tuina",
    name: "推拿",
    en: "Tuina",
    desc: "中医手法以按、揉、推、拿作用于经络与经筋，松解粘连，活血通络。",
    benefit: "舒筋 · 活血 · 缓解疲劳",
    cover: img(
      "Traditional Chinese tuina massage on back, hands working, warm wood and linen, photorealistic",
      "square"
    ),
  },
  {
    id: "moxibustion",
    name: "艾灸",
    en: "Moxibustion",
    desc: "点燃艾绒于穴位之上，温通经脉、散寒祛湿，是冬季调养与宫寒调理的首选。",
    benefit: "温阳 · 散寒 · 扶正气",
    cover: img(
      "Traditional Chinese moxibustion therapy, smoke rising, warm light, calm clinic, photorealistic",
      "square"
    ),
  },
  {
    id: "herbal-bath",
    name: "草本药浴",
    en: "Herbal Bath",
    desc: "以黄芪、当归、艾叶等二十余味中草药煮汤浸浴，透皮吸收，祛湿排毒。",
    benefit: "祛湿 · 排毒 · 美肤",
    cover: img(
      "Traditional Chinese herbal bath in wooden tub, herbs floating, steam, zen atmosphere, photorealistic",
      "square"
    ),
  },
  {
    id: "gaofang",
    name: "膏方",
    en: "Herbal Paste",
    desc: "名老中医辨证开方，多味药材慢火熬制浓缩成膏，一勺一冬，调补兼施。",
    benefit: "调补 · 抗衰 · 慢病管理",
    cover: img(
      "Chinese herbal paste preparation, copper pot, dark glossy paste, pharmacist hands, warm light, photorealistic",
      "square"
    ),
  },
];

export const doctors: TcmDoctor[] = [
  {
    id: "doc-01",
    name: "陈守仁",
    title: "主任中医师 · 国家级名中医",
    specialty: "脾胃病 / 亚健康调理 / 膏方",
    years: 42,
    schedule: "周二 / 周四上午",
    cover: img(
      "Senior Chinese medicine doctor portrait, white coat, kind expression, dark background, photorealistic portrait photography",
      "portrait_4_3"
    ),
  },
  {
    id: "doc-02",
    name: "李青禾",
    title: "主任医师 · 针灸学科带头人",
    specialty: "针灸 / 神经康复 / 失眠",
    years: 28,
    schedule: "周一 / 周三 / 周五全天",
    cover: img(
      "Female Chinese medicine acupuncture specialist portrait, white coat, soft studio light, photorealistic",
      "portrait_4_3"
    ),
  },
  {
    id: "doc-03",
    name: "周慕白",
    title: "副主任中医师",
    specialty: "妇科 / 体质辨识 / 药膳指导",
    years: 18,
    schedule: "周二 / 周六全天",
    cover: img(
      "Middle aged Chinese medicine doctor portrait, calm expression, dark wood background, photorealistic",
      "portrait_4_3"
    ),
  },
  {
    id: "doc-04",
    name: "赵承志",
    title: "主任中医师 · 推拿正骨",
    specialty: "脊柱 / 关节 / 运动康复",
    years: 35,
    schedule: "周一 / 周三 / 周五全天",
    cover: img(
      "Senior Chinese tuina doctor portrait, confident expression, studio lighting, photorealistic",
      "portrait_4_3"
    ),
  },
];

export const solarTerms: SolarTerm[] = [
  { id: "lichun", name: "立春", month: "2 月", tip: "疏肝理气，宜食春芽，晨起梳头 200 下。", herbs: ["柴胡", "白芍", "陈皮"] },
  { id: "yushui", name: "雨水", month: "2 月", tip: "健脾祛湿，睡前揉腹 100 圈，忌生冷。", herbs: ["茯苓", "薏苡仁", "山药"] },
  { id: "jingzhe", name: "惊蛰", month: "3 月", tip: "养肝升阳，多食韭菜与枸杞。", herbs: ["枸杞", "菊花", "决明子"] },
  { id: "chunfen", name: "春分", month: "3 月", tip: "平衡阴阳，踏青远眺，晚睡早起。", herbs: ["百合", "大枣", "蜂蜜"] },
  { id: "qingming", name: "清明", month: "4 月", tip: "柔肝养肺，菊花枸杞代茶饮。", herbs: ["菊花", "枸杞", "桑叶"] },
  { id: "guyu", name: "谷雨", month: "4 月", tip: "健脾祛湿，常饮薏米红豆汤。", herbs: ["薏苡仁", "赤小豆", "芡实"] },
  { id: "lixia", name: "立夏", month: "5 月", tip: "养心安神，多吃红色食物与豆类。", herbs: ["酸枣仁", "桂圆", "红枣"] },
  { id: "xiaoman", name: "小满", month: "5 月", tip: "清热利湿，午后静坐 15 分钟。", herbs: ["荷叶", "薏苡仁", "绿豆"] },
  { id: "mangzhong", name: "芒种", month: "6 月", tip: "防暑祛湿，多饮酸梅汤。", herbs: ["乌梅", "山楂", "甘草"] },
  { id: "xiazhi", name: "夏至", month: "6 月", tip: "养心清暑，子时前入睡。", herbs: ["麦冬", "五味子", "莲子"] },
  { id: "xiaoshu", name: "小暑", month: "7 月", tip: "健脾化湿，少食冰品，温水泡脚。", herbs: ["生姜", "藿香", "佩兰"] },
  { id: "dashu", name: "大暑", month: "7 月", tip: "清热解暑，午间小憩，忌大汗淋漓。", herbs: ["金银花", "薄荷", "竹叶"] },
];

export const solarCover = img(
  "Traditional Chinese solar term calendar with herbs and flowers, calligraphy, soft warm light, top down, photorealistic",
  "landscape_4_3"
);
