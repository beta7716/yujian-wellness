import type { LocalizedTestimonial } from "../testimonials";

const testimonials: Record<string, LocalizedTestimonial> = {
  "testimonial-1": {
    name: "林女士",
    city: "上海",
    quote: "在缙云山私汤的三天，让我真正理解了什么叫“疗愈”。名中医的体质调理方案，我到现在还在坚持。",
    program: "北温泉 · 山林药汤三日静修",
    initials: "林",
  },
  "testimonial-2": {
    name: "Mr. Anderson",
    city: "New York",
    quote: "The TCM heritage journey changed how I see wellness. Dr. Wang’s pulse diagnosis was the most precise health check I’ve ever had.",
    program: "中医世家 · 名医跟诊四日",
    initials: "A",
  },
  "testimonial-3": {
    name: "佐藤様",
    city: "東京",
    quote: "長江三峡のクルーズは壮大でした。朝の太極拳と茶道が、心身ともに整いました。",
    program: "长江三峡 · 江峡养心五日",
    initials: "S",
  },
  "testimonial-4": {
    name: "陈先生",
    city: "深圳",
    quote: "带父母做了 VIP 体检，从接机到报告解读全程有人管。老人说这比去香港还省心。",
    program: "御鉴 · VIP 尊享",
    initials: "陈",
  },
};

export default testimonials;
