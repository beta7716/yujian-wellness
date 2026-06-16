export interface Testimonial {
  id: string;
  name: string;
  city: string;
  quote: string;
  program: string;
  initials: string;
  accent: "cinnabar" | "bamboo" | "gold";
}

export const testimonials: Testimonial[] = [
  {
    id: "t-01",
    name: "L. Chen",
    city: "上海",
    quote:
      "三天的温泉药浴与中医辨证，让我重新认识自己的身体。陈主任的膏方调理了一个冬天，体感非常明显。",
    program: "温泉疗愈三日",
    initials: "LC",
    accent: "cinnabar",
  },
  {
    id: "t-02",
    name: "M. Tanaka",
    city: "Tokyo",
    quote:
      "The VIP checkup at 御鉴 was impeccable — interpreter, concierge, and a final report in Japanese within 72 hours.",
    program: "御鉴 VIP 体检",
    initials: "MT",
    accent: "bamboo",
  },
  {
    id: "t-03",
    name: "S. Müller",
    city: "Berlin",
    quote:
      "Walking the ancient trail of 金佛山 with a TCM doctor was a revelation — I left lighter, both physically and mentally.",
    program: "古道徒步五日",
    initials: "SM",
    accent: "gold",
  },
  {
    id: "t-04",
    name: "刘女士",
    city: "深圳",
    quote:
      "带父母走了一趟三峡养心线，船上的冥想课与经络调理让他们睡得比家里还香，回来还问了什么时候再去。",
    program: "江峡养心五日",
    initials: "刘",
    accent: "bamboo",
  },
];

export const partners: { name: string; short: string }[] = [
  { name: "重庆医科大学附属第一医院", short: "重医附一院" },
  { name: "西南医院", short: "西南医院" },
  { name: "重庆市中医院", short: "市中医院" },
  { name: "重钢总医院", short: "重钢总院" },
  { name: "鹰阁医疗重庆中心", short: "鹰阁" },
  { name: "缙云山温泉度假村", short: "缙云山" },
  { name: "金佛山旅游集团", short: "金佛山" },
  { name: "长江游轮公司", short: "长江游轮" },
];
