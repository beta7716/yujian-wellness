export type Locale = "zh-CN" | "en" | "ja";

export const LOCALES: { code: Locale; label: string; short: string; flag: string }[] = [
  { code: "zh-CN", label: "简体中文", short: "中", flag: "🇨🇳" },
  { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
  { code: "ja", label: "日本語", short: "JA", flag: "🇯🇵" },
];

export const DEFAULT_LOCALE: Locale = "zh-CN";

export type Dictionary = {
  // Common
  nav: { home: string; routes: string; checkup: string; tcm: string; about: string; book: string };
  brand: { tagline: string; subtag: string };
  cta: {
    viewRoutes: string;
    bookNow: string;
    bookConsult: string;
    viewDetail: string;
    explore: string;
    submit: string;
    another: string;
    sending: string;
  };
  // Footer
  footer: {
    blurb: string;
    nav: string;
    contact: string;
    subscribe: string;
    subscribeHint: string;
    subscribePlaceholder: string;
    subscribeCta: string;
    rights: string;
    motto: string;
  };
  // Form
  form: {
    name: string;
    phone: string;
    email: string;
    topic: string;
    topics: { route: string; checkup: string; tcm: string; other: string };
    note: string;
    notePh: string;
    consent: string;
    successTitle: string;
    successBody: (id: string) => string;
    anotherBtn: string;
    requiredHint: string;
  };
  // Home
  home: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    coord: string;
    seasons: string[];
    partnerEyebrow: string;
    inquiryEyebrow: string;
    inquiryTitle: string;
    inquirySubtitle: string;
    perks: string[];
    statLabels: string[];
    pillars: { eyebrow: string; title: string; en: string; desc: string }[];
    editorialEyebrow: string;
    editorialTitle: string;
    editorialP1: string;
    editorialP2: string;
    featuredEyebrow: string;
    featuredTitle: string;
    featuredCta: string;
    tcmEyebrow: string;
    tcmTitle: string;
    tcmDesc: string;
    voicesEyebrow: string;
    voicesTitle: string;
    voicesSub: string;
    partnersEyebrow: string;
  };
  // Routes page
  routesPage: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    filterEyebrow: string;
    allThemes: string;
    allDays: string;
    days: string;
    dayBuckets: string[];
    compare: (n: number) => string;
    daysUnit: string;
    nightsUnit: string;
    from: string;
    perPerson: string;
    intensity: string;
    best: string;
    intensityLabels: string[];
    noResult: string;
    compareTitle: string;
    compareSub: string;
    fieldTheme: string;
    fieldDuration: string;
    fieldIntensity: string;
    fieldSeason: string;
    fieldPrice: string;
    fieldHighlight: string;
    clearCompare: string;
    consultAdvisor: string;
    tailorEyebrow: string;
    tailorTitle: string;
    tailorSub: string;
  };
  // Route detail
  routeDetail: {
    notFound: string;
    back: string;
    overview: string;
    itinerary: string;
    inclusions: string;
    curatorTitle: string;
    curatorQuote: string;
    curatorName: string;
    curatorTitleRole: string;
    continueExploring: string;
    backToAll: string;
    moreRoutes: string;
    field: {
      duration: string;
      season: string;
      intensity: string;
      destination: string;
    };
    topicTags: string;
    bookingEyebrow: string;
    bookingTitle: string;
    bookingSub: string;
  };
  // Checkup page
  checkupPage: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    features: string[];
    packagesEyebrow: string;
    packagesTitle: string;
    recommended: string;
    items: string;
    from: string;
    perPerson: string;
    bookPackage: string;
    processEyebrow: string;
    processTitle: string;
    processSub: string;
    step: string;
    institutionsEyebrow: string;
    institutionsTitle: string;
    institutionsSub: string;
    tier: string;
    conciergeEyebrow: string;
    conciergeTitle: string;
    conciergeSub: string;
  };
  // TCM page
  tcmPage: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    therapiesEyebrow: string;
    therapiesTitle: string;
    benefit: string;
    doctorsEyebrow: string;
    doctorsTitle: string;
    doctorsSub: string;
    solarEyebrow: string;
    solarTitle: string;
    solarSub: string;
    solarHint: string;
    consultEyebrow: string;
    consultTitle: string;
    consultSub: string;
  };
  // About page
  aboutPage: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    titleC: string;
    subtitle: string;
    aboutEyebrow: string;
    aboutTitle: string;
    aboutP1: string;
    aboutP2: string;
    aboutP3: string;
    valuesEyebrow: string;
    valuesTitle: string;
    milestonesEyebrow: string;
    milestonesTitle: string;
    partnersEyebrow: string;
    partnersTitle: string;
    contactEyebrow: string;
    contactTitle: string;
    contactSub: string;
    contactItems: { type: string; ph: string; hint: string }[];
    languages: string;
    salonTitle: string;
    salonLocation: string;
    salonMode: string;
    openBy: string;
    stats: string[];
  };
  // Days of week/month
  calendar: { day: string; from: string; per: string };
};

const zh: Dictionary = {
  nav: { home: "首页", routes: "康养线路", checkup: "高端体检", tcm: "中医药", about: "关于", book: "预约咨询" },
  brand: { tagline: "渝见·康养", subtag: "Chongqing Wellness" },
  cta: {
    viewRoutes: "查看线路",
    bookNow: "立即预约",
    bookConsult: "预约咨询",
    viewDetail: "查看行程",
    explore: "探索",
    submit: "提交咨询",
    another: "提交另一份咨询",
    sending: "提交中…",
  },
  footer: {
    blurb: "以山城雾色为幕，融合高端医疗与传统中医药疗愈，呈现独一无二的重庆康养之旅。",
    nav: "导航",
    contact: "联系",
    subscribe: "订阅",
    subscribeHint: "每月一封「山城康养手记」，节气养生、独家线路。",
    subscribePlaceholder: "你的邮箱",
    subscribeCta: "订阅",
    rights: "渝见康养 · 重庆医疗旅游",
    motto: "山 · 雾 · 汤 · 药 · 城",
  },
  form: {
    name: "姓名",
    phone: "电话",
    email: "邮箱",
    topic: "感兴趣方向",
    topics: { route: "康养线路", checkup: "高端体检", tcm: "中医药", other: "其他" },
    note: "备注",
    notePh: "出行日期、人数、特殊需求……",
    consent: "提交即同意我们保存您的咨询信息，专属健康顾问将在 24 小时内与您联系。",
    successTitle: "感谢您的咨询",
    successBody: (id) =>
      `我们已收到您的预约请求，专属健康顾问将在 24 小时内与您联系（编号：${id}）。`,
    anotherBtn: "提交另一份咨询",
    requiredHint: "*",
  },
  home: {
    eyebrow: "Chongqing · Medical Tourism",
    titleA: "渝见",
    titleB: "康养",
    subtitle:
      "把重庆的山、雾、汤、药、城，凝缩进一次疗愈之旅。看 · 养 · 游 · 疗，尽在此间。",
    coord: "29.56° N · 106.55° E",
    seasons: ["立春", "夏至", "立秋", "冬至"],
    partnerEyebrow: "Trusted partners",
    inquiryEyebrow: "Begin your journey",
    inquiryTitle: "告诉我们，您想如何被疗愈。",
    inquirySubtitle:
      "留下您的信息，专属健康顾问将在 24 小时内回访，为您定制从体检、中医到线路的完整方案。",
    perks: ["1v1 健康顾问全程陪同", "三甲医院绿色通道", "多语种服务（中文 / EN / 日）"],
    statLabels: ["合作三甲医院", "累计服务旅客", "康养主题线路", "客户满意度"],
    pillars: [
      { eyebrow: "Pillar · 01", title: "康养线路", en: "Wellness Itineraries", desc: "温泉、峡江、古镇、医美 — 把重庆的山水人文编织成可一站式预定的康养旅程。" },
      { eyebrow: "Pillar · 02", title: "高端体检", en: "Premium Health Screening", desc: "与重庆顶级三甲医院深度合作，4 档套餐满足从基础到至臻皇室的全场景需求。" },
      { eyebrow: "Pillar · 03", title: "中医药", en: "Traditional Chinese Medicine", desc: "针灸、推拿、艾灸、药浴、膏方 — 与国家级名中医同行，体验千年岐黄之术。" },
    ],
    editorialEyebrow: "The Healing",
    editorialTitle: "不是旅行的疗愈，是疗愈的旅行。",
    editorialP1: "在缙云山脚下的千年古汤中入夜，被草本药香与夜雾轻轻托起；清晨由太极老师带领晨课，午后让名中医为你把脉辨证。",
    editorialP2: "渝见康养不把「疗愈」当作套餐加项，而把整段旅程重新定义 — 把它当作你身体的第四次呼吸。",
    featuredEyebrow: "Featured Itineraries",
    featuredTitle: "推荐康养线路",
    featuredCta: "查看全部 36 条",
    tcmEyebrow: "Heritage · 中医药",
    tcmTitle: "千年岐黄，在山城相遇。",
    tcmDesc: "与国家级名中医同行，亲制膏方，体验针灸、推拿、艾灸、药浴五大传统外治法。渝见康养与重庆市中医院、西南医院中医科深度合作，组建名医顾问团。",
    voicesEyebrow: "Voices",
    voicesTitle: "来自旅客的手记。",
    voicesSub: "他们来自上海、东京、柏林、深圳……带着不同的身体与期待，最后带走的是一段被重新校准的呼吸。",
    partnersEyebrow: "Trusted partners",
  },
  routesPage: {
    eyebrow: "Wellness Itineraries",
    titleA: "山城康养，",
    titleB: "三十六条归途。",
    subtitle: "从温泉古汤到江峡冥想，从中医世家到古镇静修 — 每一段路线都由康养顾问与本地主理人共同打磨。",
    filterEyebrow: "筛选",
    allThemes: "全部主题",
    allDays: "全部天数",
    days: "天",
    dayBuckets: ["全部天数", "1-3 天", "4-5 天", "6 天+"],
    compare: (n) => `对比 (${n})`,
    daysUnit: "天",
    nightsUnit: "晚",
    from: "起价",
    perPerson: "/人起",
    intensity: "强度",
    best: "最佳",
    intensityLabels: ["轻养", "中度", "深度"],
    noResult: "没有匹配的线路，换个筛选试试。",
    compareTitle: "线路对比",
    compareSub: "Compare",
    fieldTheme: "主题",
    fieldDuration: "时长",
    fieldIntensity: "强度",
    fieldSeason: "最佳季节",
    fieldPrice: "起价",
    fieldHighlight: "亮点",
    clearCompare: "清空对比",
    consultAdvisor: "咨询顾问",
    tailorEyebrow: "Tailored for you",
    tailorTitle: "没有合适的线路？我们为您定制。",
    tailorSub: "告诉我们出行日期、人数与偏好 — 顾问将在 24 小时内提供 2-3 个定制方案。",
  },
  routeDetail: {
    notFound: "未找到该线路",
    back: "返回线路列表",
    overview: "Overview",
    itinerary: "Itinerary",
    inclusions: "Inclusions",
    curatorTitle: "来自主理人的话",
    curatorQuote: '"我们不希望你只是\'走完\'一段行程 — 我们希望你的身体在这几天里被慢下来、调回来。山城雾色会替你承担一部分呼吸，你只需要把自己交给这条线路。"',
    curatorName: "陈主理",
    curatorTitleRole: "Senior Curator · 渝见康养",
    continueExploring: "Continue exploring",
    moreRoutes: "更多康养线路",
    backToAll: "返回全部线路",
    field: { duration: "行程", season: "最佳季节", intensity: "强度", destination: "主目的地" },
    topicTags: "主题",
    bookingEyebrow: "Booking",
    bookingTitle: "准备好了吗？我们等您。",
    bookingSub: "提交后，专属顾问将在 24 小时内联系您，提供详细行程与报价单。",
  },
  checkupPage: {
    eyebrow: "Premium Health Screening",
    titleA: "一日，",
    titleB: "阅尽身体之书。",
    subtitle: "渝见康养 × 重庆顶级三甲医院 — 从基础到至臻皇室，4 档套餐对应不同生命阶段。我们把检查的焦虑，翻译成一次安静的阅读。",
    features: ["三甲医院", "主任医师终评", "VIP 绿色通道", "1v1 健康管家"],
    packagesEyebrow: "Packages",
    packagesTitle: "四档体检 · 一种从容",
    recommended: "Most chosen",
    items: "项检查",
    from: "起价",
    perPerson: "/人起",
    bookPackage: "预约此套餐",
    processEyebrow: "The Process",
    processTitle: "六步流程 · 一次完整体检",
    processSub: "以「云顶·深度臻享」为例。每一档套餐都遵循同样的服务标准。",
    step: "Day",
    institutionsEyebrow: "Institutions",
    institutionsTitle: "合作医疗机构",
    institutionsSub: "重庆顶尖三甲医院、国际医疗中心、专项检测实验室",
    tier: "Tier-A Hospital",
    conciergeEyebrow: "Concierge",
    conciergeTitle: "一通电话，从预约到报告解读。",
    conciergeSub: "留下信息后，我们将在 24 小时内为您匹配适合的体检套餐与到院时间，并提供全程专车与导医。",
  },
  tcmPage: {
    eyebrow: "Traditional Chinese Medicine",
    titleA: "千年岐黄，",
    titleB: "在山城苏醒。",
    subtitle: "我们与重庆市中医院、西南医院中医科组建名医顾问团。从针灸到膏方，五种传统外治法对应五种生命状态。",
    therapiesEyebrow: "Five Therapies",
    therapiesTitle: "五种外治法 · 一种平衡",
    benefit: "适用",
    doctorsEyebrow: "Renowned Doctors",
    doctorsTitle: "名医馆",
    doctorsSub: "4 位常驻名医，平均行医经验 30 年。可预约 1v1 抄方、辨证、膏方配制。",
    solarEyebrow: "24 Solar Terms",
    solarTitle: "节气养生，顺时而行。",
    solarSub: "中医讲究「顺四时而适寒暑」。点击下方任一节气，获取该时令的养生建议与推荐药材。",
    solarHint: "↑ 点击节气卡片查看详情",
    consultEyebrow: "Consult a Master",
    consultTitle: "预约名医，把脉辨证。",
    consultSub: "留下您的症状与期望，我们将在 24 小时内为您匹配名医并安排面诊或视频会诊。",
  },
  aboutPage: {
    eyebrow: "Our Story",
    titleA: "一群人，",
    titleB: "十一年，",
    titleC: "一座城。",
    subtitle: "渝见康养是重庆最早专注于医疗旅游的本地品牌。2014 年至今，我们用一通通电话、一份份膏方、一程程接送，把山城资源翻译成可被信赖的康养方案。",
    aboutEyebrow: "About Yujian",
    aboutTitle: "重庆医疗旅游的早期开拓者。",
    aboutP1: "2014 年，三位创始人在重庆南山的一次夜话中决定：\"重庆的山水、温泉、药材和三甲医院，是全世界独一无二的康养资源 — 但没有人把它们串成一段可被信赖的旅程。\"",
    aboutP2: "于是有了渝见康养。我们不是旅行社，不做低价跟团；我们是健康管家，把每一位旅客的身体与期待，翻译为精确的方案、清晰的报价与可追溯的服务。",
    aboutP3: "11 年来，我们累计服务 12,000+ 旅客，沉淀了 36 条主题线路、4 档体检套餐、12 位名医顾问、28 家三甲医院合作网络。",
    valuesEyebrow: "Our Values",
    valuesTitle: "我们相信什么",
    milestonesEyebrow: "Milestones",
    milestonesTitle: "关键里程碑",
    partnersEyebrow: "Partners",
    partnersTitle: "合作机构",
    contactEyebrow: "Contact",
    contactTitle: "与我们开始一次对话。",
    contactSub: "欢迎企业团检、家族康养、海外客户与我们联系。专属顾问将在 24 小时内回访。",
    contactItems: [
      { type: "24h Concierge", ph: "400 · 626 · 1911", hint: "" },
      { type: "Email", ph: "concierge@yujian-wellness.cn", hint: "" },
      { type: "Salon", ph: "重庆 · 渝中 · 解放碑 CBD", hint: "康养国际会客厅（预约制）" },
    ],
    languages: "Languages · 中文 · English · 日本語",
    salonTitle: "康养国际会客厅",
    salonLocation: "解放碑 CBD · 预约制",
    salonMode: "Open by appointment",
    openBy: "Open by appointment",
    stats: ["年深耕", "累计服务", "合作医院", "主题线路"],
  },
  calendar: { day: "Day", from: "from", per: "/人起" },
};

const en: Dictionary = {
  nav: { home: "Home", routes: "Itineraries", checkup: "Health Screening", tcm: "TCM", about: "About", book: "Book" },
  brand: { tagline: "Yujian · Wellness", subtag: "Chongqing Medical Tourism" },
  cta: {
    viewRoutes: "View Itineraries",
    bookNow: "Book Now",
    bookConsult: "Request Consult",
    viewDetail: "View Itinerary",
    explore: "Explore",
    submit: "Send Inquiry",
    another: "Submit Another",
    sending: "Sending…",
  },
  footer: {
    blurb: "An one-of-a-kind Chongqing wellness journey — premium medicine and traditional Chinese healing, framed by mountain mist.",
    nav: "Navigate",
    contact: "Contact",
    subscribe: "Subscribe",
    subscribeHint: "A monthly note on solar-term wellness and exclusive itineraries.",
    subscribePlaceholder: "Your email",
    subscribeCta: "Join",
    rights: "Yujian Wellness · Chongqing Medical Tourism",
    motto: "Mountain · Mist · Spring · Herbs · City",
  },
  form: {
    name: "Name",
    phone: "Phone",
    email: "Email",
    topic: "I'm interested in",
    topics: { route: "Itinerary", checkup: "Health Screening", tcm: "TCM", other: "Other" },
    note: "Notes",
    notePh: "Travel dates, party size, special needs…",
    consent: "By submitting, you agree to be contacted within 24 hours by a dedicated wellness concierge.",
    successTitle: "Thank you",
    successBody: (id) => `We've received your request. A concierge will reach out within 24 hours (Ref: ${id}).`,
    anotherBtn: "Submit another inquiry",
    requiredHint: "*",
  },
  home: {
    eyebrow: "Chongqing · Medical Tourism",
    titleA: "Meet",
    titleB: "Chongqing",
    subtitle:
      "Compress the mountain, the mist, the spring, the herbs and the city into a single healing journey. See · Nurture · Explore · Heal.",
    coord: "29.56° N · 106.55° E",
    seasons: ["SPRING", "SUMMER", "AUTUMN", "WINTER"],
    partnerEyebrow: "Trusted partners",
    inquiryEyebrow: "Begin your journey",
    inquiryTitle: "Tell us how you'd like to be healed.",
    inquirySubtitle: "Leave your details — a dedicated concierge will reply within 24 hours with a complete plan across screening, TCM and itineraries.",
    perks: ["1-on-1 concierge", "Tier-A hospital green channel", "Multilingual (CN / EN / JP)"],
    statLabels: ["Partner hospitals", "Guests served", "Wellness itineraries", "Guest satisfaction"],
    pillars: [
      { eyebrow: "Pillar · 01", title: "Itineraries", en: "Wellness Itineraries", desc: "Hot springs, gorges, ancient towns, aesthetics — Chongqing's landscapes woven into bookable wellness journeys." },
      { eyebrow: "Pillar · 02", title: "Health Screening", en: "Premium Health Screening", desc: "Deep partnerships with Chongqing's top tier-A hospitals — four packages from essential to imperial." },
      { eyebrow: "Pillar · 03", title: "TCM", en: "Traditional Chinese Medicine", desc: "Acupuncture, tuina, moxibustion, herbal bath, gaofang — practice millennia-old healing with national masters." },
    ],
    editorialEyebrow: "The Healing",
    editorialTitle: "Not a healing trip — a trip that heals.",
    editorialP1: "Soak in thousand-year-old springs at the foot of Jinyun Mountain, lifted by herbal mist at night. Practice tai chi at dawn, and let a master physician read your pulse at noon.",
    editorialP2: "Yujian does not bolt 'healing' onto an itinerary — it re-defines the journey itself as the fourth breath of your body.",
    featuredEyebrow: "Featured Itineraries",
    featuredTitle: "Recommended Itineraries",
    featuredCta: "View all 36",
    tcmEyebrow: "Heritage · TCM",
    tcmTitle: "Millennia of wisdom, awakened in the mountain city.",
    tcmDesc: "Walk with national-grade TCM masters, hand-craft your own gaofang, and experience acupuncture, tuina, moxibustion and herbal bath.",
    voicesEyebrow: "Voices",
    voicesTitle: "Notes from our guests.",
    voicesSub: "From Shanghai, Tokyo, Berlin, Shenzhen — they came with different bodies and expectations, and left with a recalibrated breath.",
    partnersEyebrow: "Trusted partners",
  },
  routesPage: {
    eyebrow: "Wellness Itineraries",
    titleA: "Wellness in",
    titleB: "Chongqing, 36 ways home.",
    subtitle: "From ancient springs to gorge meditation, from TCM lineages to silent ancient towns — every route is curated by a wellness advisor and a local custodian.",
    filterEyebrow: "Filter",
    allThemes: "All themes",
    allDays: "Any duration",
    days: "days",
    dayBuckets: ["Any duration", "1-3 days", "4-5 days", "6+ days"],
    compare: (n) => `Compare (${n})`,
    daysUnit: "d",
    nightsUnit: "n",
    from: "from",
    perPerson: "/guest",
    intensity: "Intensity",
    best: "Best",
    intensityLabels: ["Gentle", "Moderate", "Deep"],
    noResult: "No matches — try another filter.",
    compareTitle: "Compare itineraries",
    compareSub: "Compare",
    fieldTheme: "Theme",
    fieldDuration: "Duration",
    fieldIntensity: "Intensity",
    fieldSeason: "Best season",
    fieldPrice: "From",
    fieldHighlight: "Highlight",
    clearCompare: "Clear",
    consultAdvisor: "Talk to advisor",
    tailorEyebrow: "Tailored for you",
    tailorTitle: "Nothing fits? We'll tailor one.",
    tailorSub: "Share your dates, party size and preferences — we'll send 2-3 tailored proposals within 24 hours.",
  },
  routeDetail: {
    notFound: "Itinerary not found",
    back: "Back to itineraries",
    overview: "Overview",
    itinerary: "Itinerary",
    inclusions: "Inclusions",
    curatorTitle: "From the curator",
    curatorQuote: '"We don\'t want you to just \'finish\' a trip — we want your body to slow down and recalibrate over these days. The Chongqing mist will hold part of your breath; you only need to hand yourself to this route."',
    curatorName: "Mr. Chen",
    curatorTitleRole: "Senior Curator · Yujian Wellness",
    continueExploring: "Continue exploring",
    moreRoutes: "More itineraries",
    backToAll: "Back to all",
    field: { duration: "Duration", season: "Best season", intensity: "Intensity", destination: "Destination" },
    topicTags: "Theme",
    bookingEyebrow: "Booking",
    bookingTitle: "Ready when you are.",
    bookingSub: "Submit and a dedicated advisor will contact you within 24 hours with details and pricing.",
  },
  checkupPage: {
    eyebrow: "Premium Health Screening",
    titleA: "One day,",
    titleB: "the full book of your body.",
    subtitle: "Yujian × Chongqing's top tier-A hospitals — four packages for every life stage. We translate the anxiety of a checkup into a quiet, dignified reading.",
    features: ["Tier-A hospitals", "Chief-physician review", "VIP green channel", "1-on-1 health butler"],
    packagesEyebrow: "Packages",
    packagesTitle: "Four packages, one poise",
    recommended: "Most chosen",
    items: "items",
    from: "from",
    perPerson: "/guest",
    bookPackage: "Book package",
    processEyebrow: "The Process",
    processTitle: "Six steps, one complete screening",
    processSub: "Shown with the 'Cloud Top · Deep' package. Every package follows the same service standard.",
    step: "Step",
    institutionsEyebrow: "Institutions",
    institutionsTitle: "Partner medical institutions",
    institutionsSub: "Chongqing's leading tier-A hospitals, international medical centers and specialty labs",
    tier: "Tier-A Hospital",
    conciergeEyebrow: "Concierge",
    conciergeTitle: "One call, from booking to report.",
    conciergeSub: "Leave your details — within 24 hours we'll match the right package and time, with private car and medical escort.",
  },
  tcmPage: {
    eyebrow: "Traditional Chinese Medicine",
    titleA: "Millennia of wisdom,",
    titleB: "awakened in the mountain city.",
    subtitle: "We've assembled a master TCM advisory with Chongqing TCM Hospital and Southwest Hospital's TCM department. Five traditional therapies for five states of life.",
    therapiesEyebrow: "Five Therapies",
    therapiesTitle: "Five external therapies, one balance",
    benefit: "Benefit",
    doctorsEyebrow: "Renowned Doctors",
    doctorsTitle: "Master clinic",
    doctorsSub: "Four resident masters with an average of 30 years' practice. 1-on-1 consultations, pulse reading and gaofang crafting available.",
    solarEyebrow: "24 Solar Terms",
    solarTitle: "Live with the seasons.",
    solarSub: "TCM follows the natural calendar. Tap a solar term to see its wellness tip and recommended herbs.",
    solarHint: "↑ Tap a term to see details",
    consultEyebrow: "Consult a Master",
    consultTitle: "Book a master — pulse reading & prescription.",
    consultSub: "Tell us your symptoms and expectations — we'll match a master and arrange a clinic or video visit within 24 hours.",
  },
  aboutPage: {
    eyebrow: "Our Story",
    titleA: "A team,",
    titleB: "eleven years,",
    titleC: "one city.",
    subtitle: "Yujian Wellness is Chongqing's earliest local brand dedicated to medical tourism. Since 2014, we've been translating the city's resources — call by call, prescription by prescription — into journeys you can trust.",
    aboutEyebrow: "About Yujian",
    aboutTitle: "An early pioneer of Chongqing medical tourism.",
    aboutP1: "In 2014, three founders on a night walk up Chongqing's Nanshan decided: \"Chongqing's mountains, hot springs, herbs and tier-A hospitals are a wellness resource unlike anywhere else — but no one has stitched them into a journey you can trust.\"",
    aboutP2: "So Yujian was born. We are not a travel agency; we don't do cheap group tours. We are wellness butlers — translating each guest's body and expectations into precise plans, clear pricing and traceable service.",
    aboutP3: "Over eleven years, we've served 12,000+ guests, with 36 themed itineraries, 4 screening packages, 12 master physicians and a network of 28 tier-A hospitals.",
    valuesEyebrow: "Our Values",
    valuesTitle: "What we believe",
    milestonesEyebrow: "Milestones",
    milestonesTitle: "Key milestones",
    partnersEyebrow: "Partners",
    partnersTitle: "Partner institutions",
    contactEyebrow: "Contact",
    contactTitle: "Start a conversation.",
    contactSub: "Corporate screenings, family wellness, overseas clients — a dedicated advisor will reply within 24 hours.",
    contactItems: [
      { type: "24h Concierge", ph: "400 · 626 · 1911", hint: "" },
      { type: "Email", ph: "concierge@yujian-wellness.cn", hint: "" },
      { type: "Salon", ph: "Chongqing · Yuzhong · Jiefangbei CBD", hint: "Wellness International Salon (by appointment)" },
    ],
    languages: "Languages · 中文 · English · 日本語",
    salonTitle: "Wellness International Salon",
    salonLocation: "Jiefangbei CBD · By appointment",
    salonMode: "Open by appointment",
    openBy: "Open by appointment",
    stats: ["Years of focus", "Guests served", "Partner hospitals", "Itineraries"],
  },
  calendar: { day: "Day", from: "from", per: "/guest" },
};

const ja: Dictionary = {
  nav: { home: "ホーム", routes: "養生コース", checkup: "健康診断", tcm: "中医", about: "ブランド", book: "ご予約" },
  brand: { tagline: "渝見·康養", subtag: "重慶メディカルツーリズム" },
  cta: {
    viewRoutes: "コースを見る",
    bookNow: "今すぐ予約",
    bookConsult: "相談する",
    viewDetail: "詳細を見る",
    explore: "詳しく",
    submit: "送信する",
    another: "もう一度",
    sending: "送信中…",
  },
  footer: {
    blurb: "山霧を舞台に、高度医療と伝統中医学を融合させた、唯一無二の重慶養生の旅。",
    nav: "ナビ",
    contact: "お問い合わせ",
    subscribe: "購読",
    subscribeHint: "毎月一通「山霧の養生メモ」：節気養生と限定コース。",
    subscribePlaceholder: "メールアドレス",
    subscribeCta: "登録",
    rights: "渝見康養 · 重慶メディカルツーリズム",
    motto: "山 · 霧 · 湯 · 薬 · 街",
  },
  form: {
    name: "お名前",
    phone: "電話番号",
    email: "メール",
    topic: "ご興味",
    topics: { route: "養生コース", checkup: "健康診断", tcm: "中医", other: "その他" },
    note: "ご要望",
    notePh: "ご出発日、人数、ご要望…",
    consent: "送信することで、24時間以内に専属コンシェルジュよりご連絡いたします。",
    successTitle: "ありがとうございます",
    successBody: (id) => `ご予約リクエストを受け付けました。専属コンシェルジュより24時間以内にご連絡いたします（受付番号：${id}）。`,
    anotherBtn: "もう一度送信する",
    requiredHint: "*",
  },
  home: {
    eyebrow: "Chongqing · Medical Tourism",
    titleA: "渝見",
    titleB: "康養",
    subtitle:
      "重慶の山、霧、湯、薬、街を一回の養生旅に。観る · 養う · 遊ぶ · 癒す、ここにすべて。",
    coord: "29.56° N · 106.55° E",
    seasons: ["立春", "夏至", "立秋", "冬至"],
    partnerEyebrow: "Trusted partners",
    inquiryEyebrow: "Begin your journey",
    inquiryTitle: "どのように癒されたいか、お聞かせください。",
    inquirySubtitle: "情報をお残しいただければ、24時間以内に専属コンシェルジュより、健康診断・中医・コースの総合プランをご提案します。",
    perks: ["1対1 専属コンシェルジュ", "三甲病院グリーン通道", "多言語対応（中文 / EN / 日）"],
    statLabels: ["提携三甲病院", "累計サービス", "養生コース", "顧客満足度"],
    pillars: [
      { eyebrow: "Pillar · 01", title: "養生コース", en: "Wellness Itineraries", desc: "温泉・峡谷・古镇・医美 — 重慶の山水と人文を、予約可能な養生の旅へ。" },
      { eyebrow: "Pillar · 02", title: "健康診断", en: "Premium Health Screening", desc: "重慶トップ三甲病院と連携。基礎から最上級の皇室プランまで4段階。" },
      { eyebrow: "Pillar · 03", title: "中医", en: "Traditional Chinese Medicine", desc: "針灸・推拿・艾灸・薬浴・膏方 — 国家級名中医と歩く、千年の中医学。" },
    ],
    editorialEyebrow: "The Healing",
    editorialTitle: "旅を癒すのではなく、旅が癒す。",
    editorialP1: "縉雲山麓、千年の古湯で夜を迎え、漢方の香りと夜霧に抱かれる。明け方に太極、午後に名中医が脈を取る。",
    editorialP2: "渝見康養は「癒し」をオプションにしません。旅そのものを、身体の四度目の呼吸として再定義します。",
    featuredEyebrow: "Featured Itineraries",
    featuredTitle: "おすすめコース",
    featuredCta: "全36コースを見る",
    tcmEyebrow: "Heritage · TCM",
    tcmTitle: "千年の岐黄、山の街で目覚める。",
    tcmDesc: "国家級名中医と歩き、自家製膏方、針灸・推拿・艾灸・薬浴の五大外治法を体験。",
    voicesEyebrow: "Voices",
    voicesTitle: "お客様の声。",
    voicesSub: "上海、東京、ベルリン、深圳から — 異なる身体と期待を持って来られたお客様が、再調整された呼吸を持ち帰ります。",
    partnersEyebrow: "Trusted partners",
  },
  routesPage: {
    eyebrow: "Wellness Itineraries",
    titleA: "山街の養生、",
    titleB: "三十六の帰路。",
    subtitle: "温泉の古湯から峡谷の瞑想、中医世家から古镇の静修まで — 全コースをコンシェルジュと現地キュレーターが監修。",
    filterEyebrow: "絞り込み",
    allThemes: "全テーマ",
    allDays: "全日数",
    days: "日間",
    dayBuckets: ["全日数", "1-3日", "4-5日", "6日以上"],
    compare: (n) => `比較 (${n})`,
    daysUnit: "日",
    nightsUnit: "泊",
    from: "より",
    perPerson: "/人〜",
    intensity: "強度",
    best: "最適",
    intensityLabels: ["軽養", "中度", "深度"],
    noResult: "該当するコースがありません。条件を変えてみてください。",
    compareTitle: "コース比較",
    compareSub: "Compare",
    fieldTheme: "テーマ",
    fieldDuration: "日数",
    fieldIntensity: "強度",
    fieldSeason: "最適季節",
    fieldPrice: "料金",
    fieldHighlight: "見どころ",
    clearCompare: "クリア",
    consultAdvisor: "アドバイザーに相談",
    tailorEyebrow: "Tailored for you",
    tailorTitle: "ぴったりのコースがなければ、オーダーメイド。",
    tailorSub: "出発日・人数・ご希望をお聞かせください。24時間以内に2-3案をご提案します。",
  },
  routeDetail: {
    notFound: "コースが見つかりません",
    back: "コース一覧へ戻る",
    overview: "Overview",
    itinerary: "Itinerary",
    inclusions: "Inclusions",
    curatorTitle: "キュレーターより",
    curatorQuote: '"コースを\'完了\'してほしいのではなく、数日間で身体がゆっくり調うことを大切にしています。重慶の霧が呼吸の一部を担います。あなたはこのコースに身を委ねてください。"',
    curatorName: "陳キュレーター",
    curatorTitleRole: "Senior Curator · 渝見康養",
    continueExploring: "Continue exploring",
    moreRoutes: "他のコース",
    backToAll: "全コースに戻る",
    field: { duration: "日数", season: "最適季節", intensity: "強度", destination: "目的地" },
    topicTags: "テーマ",
    bookingEyebrow: "Booking",
    bookingTitle: "準備はよろしいですか。お待ちしています。",
    bookingSub: "送信後、24時間以内に専属アドバイザーより詳細と見積をご連絡します。",
  },
  checkupPage: {
    eyebrow: "Premium Health Screening",
    titleA: "一日で、",
    titleB: "身体の書を読み尽くす。",
    subtitle: "渝見康養 × 重慶トップ三甲病院 — 基礎から最上級の皇室プランまで4段階。健康診断の不安を、静かな読書体験に翻訳します。",
    features: ["三甲病院", "主任医師レビュー", "VIPグリーン通道", "1対1健康管理"],
    packagesEyebrow: "Packages",
    packagesTitle: "4つのプラン、ひとつの余裕",
    recommended: "人気 No.1",
    items: "項目",
    from: "より",
    perPerson: "/人〜",
    bookPackage: "このプランを予約",
    processEyebrow: "The Process",
    processTitle: "6ステップ、ひとつの健康診断",
    processSub: "「雲頂·深度臻享」を例に。全プランで同じサービス基準です。",
    step: "Step",
    institutionsEyebrow: "Institutions",
    institutionsTitle: "提携医療機関",
    institutionsSub: "重慶トップ三甲病院・国際医療センター・専門検査機関",
    tier: "Tier-A Hospital",
    conciergeEyebrow: "Concierge",
    conciergeTitle: "ご予約から結果説明まで、ワンストップ。",
    conciergeSub: "情報をお残しいただければ、24時間以内に最適なプランと来院時間をご提案。専用車・看護師同行つき。",
  },
  tcmPage: {
    eyebrow: "Traditional Chinese Medicine",
    titleA: "千年の岐黄、",
    titleB: "山の街で目覚める。",
    subtitle: "重慶市中医院・西南医院中医科と名中医顧問団を結成。針灸から膏方まで、五つの外治法が五つの生命状態に応えます。",
    therapiesEyebrow: "Five Therapies",
    therapiesTitle: "五つの外治法、ひとつのバランス",
    benefit: "効能",
    doctorsEyebrow: "Renowned Doctors",
    doctorsTitle: "名医館",
    doctorsSub: "常駐4名の名医、平均臨床経験30年。1対1の抄方・辨証・膏方調合を承ります。",
    solarEyebrow: "24 Solar Terms",
    solarTitle: "節気養生、四季に従う。",
    solarSub: "中医は「四時に順い寒暑に適す」を重んじます。節気をタップして養生法と推奨生薬をご覧ください。",
    solarHint: "↑ 節気カードをタップ",
    consultEyebrow: "Consult a Master",
    consultTitle: "名医を予約、脈診と処方。",
    consultSub: "症状とご希望をお聞かせください。24時間以内に名医をマッチングし、対面またはビデオ診察を手配します。",
  },
  aboutPage: {
    eyebrow: "Our Story",
    titleA: "ひとつのチーム、",
    titleB: "十一年、",
    titleC: "ひとつの街。",
    subtitle: "渝見康養は、重慶で医療観光に特化した最も初期のローカルブランド。2014年至今、電話一本・膏方ひとつ・送迎一台で、山街の資源を信頼できる養生プランへと翻訳してきました。",
    aboutEyebrow: "About Yujian",
    aboutTitle: "重慶医療観光の先駆者。",
    aboutP1: "2014年、南山での一夜の対話から創業は始まりました。「重慶の山水・温泉・生薬・三甲病院は他に類のない養生資源だ — 誰もこれを信頼できる旅に繋げていない」",
    aboutP2: "こうして渝見康養が生まれました。旅行会社ではなく、安値の団体ツアーもしません。健康管家として、皆さまの身体と期待を、精緻なプラン・明確な見積・追跡可能なサービスへと翻訳します。",
    aboutP3: "11年で12,000名以上のお客様をお迎えし、36コース・4つの健診プラン・12名の名医顧問・28の三甲病院提携ネットワークを培いました。",
    valuesEyebrow: "Our Values",
    valuesTitle: "私たちが信じること",
    milestonesEyebrow: "Milestones",
    milestonesTitle: "歩み",
    partnersEyebrow: "Partners",
    partnersTitle: "提携機関",
    contactEyebrow: "Contact",
    contactTitle: "対話を始めましょう。",
    contactSub: "企業健診・家族での養生・海外クライアントの皆様からのご連絡をお待ちしております。24時間以内にご返信します。",
    contactItems: [
      { type: "24h Concierge", ph: "400 · 626 · 1911", hint: "" },
      { type: "Email", ph: "concierge@yujian-wellness.cn", hint: "" },
      { type: "Salon", ph: "重慶 · 渝中 · 解放碑 CBD", hint: "康養国際サロン（予約制）" },
    ],
    languages: "Languages · 中文 · English · 日本語",
    salonTitle: "康養国際サロン",
    salonLocation: "解放碑 CBD · 予約制",
    salonMode: "Open by appointment",
    openBy: "Open by appointment",
    stats: ["創業年数", "累計サービス", "提携病院", "コース数"],
  },
  calendar: { day: "Day", from: "from", per: "/人〜" },
};

export const dictionaries: Record<Locale, Dictionary> = {
  "zh-CN": zh,
  en,
  ja,
};
