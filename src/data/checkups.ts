import { img } from "@/utils/format";

export interface CheckupPackage {
  id: string;
  code: string;
  name: string;
  tagline: string;
  itemCount: number;
  priceFrom: number;
  recommendedFor: string;
  cover: string;
  highlights: string[];
  flow: { step: number; title: string; detail: string }[];
  institutions: string[];
}

export const checkupPackages: CheckupPackage[] = [
  {
    id: "essential",
    code: "C · 01",
    name: "山城·基础安心",
    tagline: "Essential Wellness",
    itemCount: 86,
    priceFrom: 1880,
    recommendedFor: "30+ 关注日常指标",
    cover: img(
      "Modern premium medical examination room with soft warm light, minimal design, photorealistic interior photography",
      "landscape_4_3"
    ),
    highlights: ["血常规 · 尿常规 · 肝功 12 项", "胸部低剂量 CT", "腹部彩超 + 甲状腺", "三甲主任终评报告"],
    flow: [
      { step: 1, title: "线上预约", detail: "小程序选择套餐，确认到院时间。" },
      { step: 2, title: "专车到院", detail: "重庆主城专车上门接送。" },
      { step: 3, title: "晨间空腹体检", detail: "全程导医陪同，平均 2.5 小时。" },
      { step: 4, title: "营养早餐", detail: "定制低 GI 早餐券。" },
      { step: 5, title: "专家解读", detail: "1 对 1 报告解读约 30 分钟。" },
      { step: 6, title: "健康管理", detail: "为期 1 年的健康档案动态跟踪。" },
    ],
    institutions: ["重庆医科大学附属第一医院", "重庆市中医院", "重钢总医院"],
  },
  {
    id: "deep",
    code: "C · 02",
    name: "云顶·深度臻享",
    tagline: "Deep Care",
    itemCount: 168,
    priceFrom: 4880,
    recommendedFor: "40+ 关注慢病风险",
    cover: img(
      "Premium VIP medical suite, panoramic window with mountain view, warm wood and stone interior, photorealistic",
      "landscape_4_3"
    ),
    highlights: ["全身体部 MRI 平扫", "冠脉 CTA", "无痛胃肠镜", "肿瘤标志物 12 项"],
    flow: [
      { step: 1, title: "健康顾问 1v1", detail: "私人健康顾问制定个性化方案。" },
      { step: 2, title: "VIP 通道", detail: "独立 VIP 体检通道，免排队。" },
      { step: 3, title: "深度项目", detail: "MRI / CTA / 胃肠镜 / 全套彩超。" },
      { step: 4, title: "中医辨证", detail: "三甲名中医体质辨识。" },
      { step: 5, title: "多学科会诊", detail: "内科 / 影像 / 中医三方联合解读。" },
      { step: 6, title: "年度跟踪", detail: "专属健康管家 1 年。" },
    ],
    institutions: ["重庆医科大学附属第二医院", "重庆大学附属肿瘤医院", "西南医院"],
  },
  {
    id: "vip",
    code: "C · 03",
    name: "御鉴·VIP 尊享",
    tagline: "Imperial VIP",
    itemCount: 268,
    priceFrom: 12880,
    recommendedFor: "企业高管 / 高净值人群",
    cover: img(
      "Ultra luxury private medical suite, gold accents, dark wood, custom furnishings, photorealistic interior design",
      "landscape_4_3"
    ),
    highlights: ["全身 PET-CT", "冠脉 + 头颅 MRA", "基因检测 168 项", "院士级专家团终评"],
    flow: [
      { step: 1, title: "私人医生", detail: "三甲主任级私人医生全程负责。" },
      { step: 2, title: "全程专车 + 酒店", detail: "五星酒店 2 晚，全程礼宾车。" },
      { step: 3, title: "PET-CT / MRA", detail: "当日完成全部高端影像。" },
      { step: 4, title: "院士级会诊", detail: "重庆 / 北京 / 上海三地专家视频会诊。" },
      { step: 5, title: "中医膏方", detail: "名老中医私人膏方一料。" },
      { step: 6, title: "终身档案", detail: "云端终身健康档案 + 全球紧急救援。" },
    ],
    institutions: ["西南医院 VIP 国际部", "重医附一院金山国际部", "大坪医院 VIP 中心"],
  },
  {
    id: "royal",
    code: "C · 04",
    name: "渝见·至臻皇室",
    tagline: "Royal Sanctuary",
    itemCount: 358,
    priceFrom: 28800,
    recommendedFor: "顶级 VIP / 海外客户",
    cover: img(
      "Royal private spa and medical suite, classical Chinese elements, dark teak, jade ornaments, soft golden light, photorealistic",
      "landscape_4_3"
    ),
    highlights: ["全身 7T MRI", "全基因组测序", "海外专家远程会诊", "温泉疗愈 2 日"],
    flow: [
      { step: 1, title: "海外落地接送", detail: "机场专车 + 管家全程接待。" },
      { step: 2, title: "温泉私汤", detail: "缙云山私汤度假村入住 2 晚。" },
      { step: 3, title: "至尊项目", detail: "7T MRI / 全基因组 / 高端影像全套。" },
      { step: 4, title: "海外专家团", detail: "梅奥 / 鹰阁 / 东京医科齿科三方会诊。" },
      { step: 5, title: "中医 + 温泉疗愈", detail: "名老中医膏方 + 草本药浴。" },
      { step: 6, title: "全球档案 + 救援", detail: "国际救援组织终身会员。" },
    ],
    institutions: ["瑞士鹰阁医疗合作中心", "梅奥诊所远程会诊", "鹰阁医疗重庆中心"],
  },
];
