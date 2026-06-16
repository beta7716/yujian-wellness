import { img } from "@/utils/format";

export type RouteTheme = "温泉疗愈" | "江峡养心" | "中医世家" | "古道徒步" | "古镇静修" | "都市医美";

export interface RouteItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  theme: RouteTheme;
  days: number;
  nights: number;
  priceFrom: number;
  cover: string;
  highlight: string;
  tags: string[];
  itinerary: { day: number; title: string; detail: string }[];
  includes: string[];
  bestSeason: string;
  intensity: "轻养" | "中度" | "深度";
}

export const routes: RouteItem[] = [
  {
    id: "hot-spring-healing",
    code: "R · 01",
    title: "北温泉 · 山林药汤三日静修",
    subtitle: "Hot Spring Healing Retreat",
    theme: "温泉疗愈",
    days: 3,
    nights: 2,
    priceFrom: 4880,
    cover: img(
      "Traditional Chinese hot spring bath surrounded by misty mountains at dawn, steam rising, wooden pavilions, zen atmosphere, cinematic warm light, photorealistic",
      "landscape_4_3"
    ),
    highlight: "在缙云山脚下于千年古汤中疗愈，配以草本药浴与太极晨课。",
    tags: ["温泉", "草本药浴", "太极", "禅修"],
    itinerary: [
      { day: 1, title: "抵达 · 私汤入住", detail: "专车接机 / 接站，缙云山私汤度假村办理入住，傍晚药膳开胃。" },
      { day: 2, title: "晨练 · 古汤疗愈", detail: "晨起太极导引术，午前北温泉古汤疗愈，下午名中医辨证开方。" },
      { day: 3, title: "归程 · 草本伴手", detail: "清晨山林漫步，定制草本伴手礼，专车送机。" },
    ],
    includes: ["缙云山温泉私汤 2 晚", "一日三餐草本药膳", "中医辨证咨询 1 次", "太极晨课 2 次"],
    bestSeason: "全年 · 秋冬尤佳",
    intensity: "轻养",
  },
  {
    id: "gorge-mindfulness",
    code: "R · 02",
    title: "长江三峡 · 江峡养心五日",
    subtitle: "Yangtze Gorge Mindfulness",
    theme: "江峡养心",
    days: 5,
    nights: 4,
    priceFrom: 9880,
    cover: img(
      "Three Gorges Yangtze River at sunrise with dramatic cliffs, mist floating over the water, traditional boat, cinematic landscape photography",
      "landscape_16_9"
    ),
    highlight: "登长江游轮，于瞿塘峡、巫峡、西陵峡间静心冥想，配合茶道与经络调理。",
    tags: ["游轮", "冥想", "茶道", "经络"],
    itinerary: [
      { day: 1, title: "登船 · 启航", detail: "重庆朝天门码头登船，茶道欢迎仪式。" },
      { day: 2, title: "瞿塘峡 · 晨观", detail: "晨起观峡，呼吸法训练；午后甲板经络拍打。" },
      { day: 3, title: "巫峡 · 神女", detail: "巫山云雨时静坐冥想，名中医巡诊。" },
      { day: 4, title: "西陵峡 · 茶山", detail: "下船前往三峡茶山，茶疗与药膳午餐。" },
      { day: 5, title: "归程", detail: "宜昌返程，伴手礼：高山云雾茶。" },
    ],
    includes: ["长江游轮 4 晚阳台房", "经络调理 2 次", "茶道与药膳全餐", "三峡全程景点门票"],
    bestSeason: "春秋 · 4-6 月 / 9-11 月",
    intensity: "中度",
  },
  {
    id: "tcm-family",
    code: "R · 03",
    title: "中医世家 · 名医跟诊四日",
    subtitle: "TCM Heritage Journey",
    theme: "中医世家",
    days: 4,
    nights: 3,
    priceFrom: 7880,
    cover: img(
      "Traditional Chinese medicine doctor taking pulse in antique wooden clinic, brass instruments, dried herbs hanging, warm lamplight, photorealistic",
      "landscape_4_3"
    ),
    highlight: "跟随国家级名中医抄方学习，亲制膏方，体验针灸、推拿、艾灸全套外治法。",
    tags: ["名医", "膏方", "针灸", "推拿"],
    itinerary: [
      { day: 1, title: "拜师 · 抄方", detail: "上午名医馆抄方，下午参观中药材博物馆。" },
      { day: 2, title: "针灸 · 艾灸", detail: "亲身体验针灸与艾灸，名医解读体质。" },
      { day: 3, title: "膏方制作", detail: "跟师配制个人膏方，午后药膳。" },
      { day: 4, title: "复诊 · 返程", detail: "复诊与体质报告讲解，伴手：私人膏方。" },
    ],
    includes: ["名医挂号 2 次", "膏方一副（含药材）", "针灸 / 艾灸 / 推拿 各 1 次", "膏方制作体验"],
    bestSeason: "全年",
    intensity: "轻养",
  },
  {
    id: "ancient-trail",
    code: "R · 04",
    title: "金佛山 · 古道徒步五日",
    subtitle: "Ancient Trail Hiking",
    theme: "古道徒步",
    days: 5,
    nights: 4,
    priceFrom: 6880,
    cover: img(
      "Misty Chinese ancient mountain trail with stone steps, pine trees, fog, hikers, cinematic golden hour, photorealistic landscape",
      "landscape_16_9"
    ),
    highlight: "穿行金佛山原始杜鹃林与古刹，结合户外拉伸与高山药膳恢复。",
    tags: ["徒步", "药膳", "古刹", "拉伸"],
    itinerary: [
      { day: 1, title: "入山 · 拉伸", detail: "金佛山西坡入园，行前功能拉伸与装备指导。" },
      { day: 2, title: "杜鹃林 · 早课", detail: "清晨杜鹃林冥想，午后古寺禅茶。" },
      { day: 3, title: "山顶 · 观云", detail: "登顶金佛山观云海，高山药膳午餐。" },
      { day: 4, title: "药园", detail: "探访高山药植园，DIY 草本足浴包。" },
      { day: 5, title: "下山 · 归程", detail: "缓步下山，运动康复评估。" },
    ],
    includes: ["金佛山门票 + 索道", "专业户外领队", "草本足浴包 DIY", "运动康复评估 1 次"],
    bestSeason: "5-6 月 / 9-10 月",
    intensity: "中度",
  },
  {
    id: "ancient-town",
    code: "R · 05",
    title: "龚滩 · 乌江古镇静修三日",
    subtitle: "Riverside Stillness",
    theme: "古镇静修",
    days: 3,
    nights: 2,
    priceFrom: 3880,
    cover: img(
      "Ancient Chinese riverside town Gongtan in Chongqing at dawn, stone steps, hanging lanterns, mist, wooden houses, soft warm light, photorealistic",
      "portrait_4_3"
    ),
    highlight: "在千年龚滩古镇的吊脚楼里静修，夜晚围炉煮茶，晨起太极与书法。",
    tags: ["古镇", "书法", "围炉煮茶", "太极"],
    itinerary: [
      { day: 1, title: "抵达 · 围炉", detail: "酉阳龚滩古镇入住，夜晚围炉煮茶。" },
      { day: 2, title: "晨练 · 书法", detail: "晨起太极，午后书法体验，傍晚乌江漫步。" },
      { day: 3, title: "归程", detail: "清晨静坐，伴手：手工茶与土家织锦。" },
    ],
    includes: ["古镇吊脚楼 2 晚", "围炉煮茶 2 晚", "太极晨课 2 次", "书法体验 1 次"],
    bestSeason: "春秋",
    intensity: "轻养",
  },
  {
    id: "city-medical",
    code: "R · 06",
    title: "重庆都市 · 医美焕新三日",
    subtitle: "Urban Medical Aesthetics",
    theme: "都市医美",
    days: 3,
    nights: 2,
    priceFrom: 12800,
    cover: img(
      "Modern luxury medical aesthetics clinic interior, premium design, soft warm lighting, contemporary Chinese design, photorealistic",
      "landscape_4_3"
    ),
    highlight: "三甲医院皮肤管理与轻医美项目，搭配山城夜景与米其林美食。",
    tags: ["医美", "皮肤管理", "三甲", "都市"],
    itinerary: [
      { day: 1, title: "抵达 · 咨询", detail: "三甲医院皮肤检测，专家面诊与方案设计。" },
      { day: 2, title: "焕新", detail: "上午轻医美项目，傍晚洪崖洞夜景。" },
      { day: 3, title: "复诊 · 返程", detail: "术后复诊与护理包，伴手：定制护肤套。" },
    ],
    includes: ["皮肤检测 1 次", "轻医美 1 项", "术后护理套", "全程专车"],
    bestSeason: "全年",
    intensity: "轻养",
  },
];

export const routeThemes: RouteTheme[] = [
  "温泉疗愈",
  "江峡养心",
  "中医世家",
  "古道徒步",
  "古镇静修",
  "都市医美",
];
