export type Locale = "zh-CN" | "en" | "ja";

export const LOCALES: { code: Locale; label: string; short: string; flag: string }[] = [
  { code: "zh-CN", label: "简体中文", short: "中", flag: "🇨🇳" },
  { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
  { code: "ja", label: "日本語", short: "JA", flag: "🇯🇵" },
];

export const DEFAULT_LOCALE: Locale = "en";

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
    servicesLabel: string;
    services: { routes: string; checkup: string; tcm: string; about: string };
    resourcesLabel: string;
    resources: { visa: string; hospitals: string; stories: string; newsroom: string };
    newsletterLabel: string;
    newsletterDesc: string;
    privacy: string;
    terms: string;
    hipaa: string;
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
  // Home (v2 Medora-style)
  home: {
    heroEyebrow: string;
    heroTitle: string;
    heroSub: string;
    heroBtnConsult: string;
    heroBtnSearch: string;
    searchSpecialty: string;
    searchDestination: string;
    searchBtn: string;
    featuredEyebrow: string;
    featuredTitle: string;
    featuredDesc: string;
    stats: { value: string; label: string }[];
    pillarsEyebrow: string;
    pillarsTitle: string;
    pillarsSub: string;
    pillars: { title: string; desc: string }[];
    ctaBannerEyebrow: string;
    ctaBannerTitle: string;
    ctaBannerSub: string;
    ctaBannerBtn: string;
    networkEyebrow: string;
    networkTitle: string;
    networkViewAll: string;
    hospitals: { city: string; tag: string; beds: string }[];
    processEyebrow: string;
    processTitle: string;
    processSteps: { title: string; desc: string }[];
    voicesEyebrow: string;
    voicesTitle: string;
    voices: { name: string; country: string; text: string }[];
    faqEyebrow: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
    finalEyebrow: string;
    finalTitle: string;
    finalSub: string;
    finalBtn: string;
  };
  // Routes page (v1, used by RouteDetail)
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
  // Routes page (v2)
  routesPageV2: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filterLabel: string;
    allThemes: string;
    themes: Record<"hotSpring" | "gorge" | "tcm" | "trail" | "oldTown" | "aesthetic", string>;
    dayBuckets: { all: string; short: string; mid: string; long: string };
    count: (n: number) => string;
    compare: (n: number) => string;
    daysUnit: string;
    nightsUnit: string;
    from: string;
    bestLabel: string;
    noResult: string;
    compareEyebrow: string;
    compareTitle: string;
    clear: string;
    consultAdvisor: string;
    fieldLabel: string;
    fieldDuration: string;
    fieldIntensity: string;
    fieldSeason: string;
    fieldPrice: string;
    fieldHighlight: string;
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
  brand: { tagline: "渝见康养 · Yujian Wellness", subtag: "医疗旅游 · 中国" },
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
    servicesLabel: "服务",
    services: { routes: "康养线路", checkup: "高端体检", tcm: "中医药", about: "关于我们" },
    resourcesLabel: "资源",
    resources: { visa: "签证指南", hospitals: "医院网络", stories: "用户故事", newsroom: "新闻中心" },
    newsletterLabel: "邮件订阅",
    newsletterDesc: "每月一封：资深顾问带来的中国医疗旅行手记。",
    privacy: "隐私政策",
    terms: "服务条款",
    hipaa: "HIPAA 声明",
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
    heroEyebrow: "医疗旅游 · 中国",
    heroTitle: "一站式中国医疗旅行管家",
    heroSub: "从首次视频会诊到回国随访，一段全程托管的疗愈之旅。高端西医与千年中医药，由专属健康顾问为您一站缝合。",
    heroBtnConsult: "预约咨询",
    heroBtnSearch: "搜索治疗",
    searchSpecialty: "科室",
    searchDestination: "目的地",
    searchBtn: "搜索",
    featuredEyebrow: "Featured",
    featuredTitle: "三甲医院网络",
    featuredDesc: "200+ 三甲公立医院，由国际医疗委员会严格筛选。",
    stats: [
      { value: "600+", label: "可治疗病种" },
      { value: "1,600+", label: "已开展手术术式" },
      { value: "200+", label: "合作三甲医院" },
      { value: "24/7", label: "全程管家服务" },
    ],
    pillarsEyebrow: "服务四大支柱",
    pillarsTitle: "一段完整的旅程，而非一次交易",
    pillarsSub: "四项一体化服务，从您的第一次咨询一直延续到长期随访。",
    pillars: [
      { title: "远程会诊", desc: "足不出户，与中国顶级专家通过加密视频问诊对话。" },
      { title: "医院网络", desc: "200+ 三甲公立医院与国际医疗中心，由我方医疗委员会严格筛选。" },
      { title: "签证与出行", desc: "端到端医疗签证支持、机场专车接送、私人翻译全程陪同。" },
      { title: "传统中医药", desc: "现代医学与千年中医并行：针灸、推拿、膏方、调养。" },
    ],
    ctaBannerEyebrow: "定制方案",
    ctaBannerTitle: "为您定制医疗旅行方案",
    ctaBannerSub: "告诉我们您的身体状况、时间安排与偏好 — 资深顾问将在 24 小时内与您联系。",
    ctaBannerBtn: "开始规划",
    networkEyebrow: "医院网络",
    networkTitle: "覆盖全国的 200+ 合作三甲医院",
    networkViewAll: "查看全部医院",
    hospitals: [
      { city: "重庆", tag: "三甲公立", beds: "3,200" },
      { city: "北京", tag: "国家医学中心", beds: "2,800" },
      { city: "上海", tag: "国际医疗", beds: "2,500" },
      { city: "广州", tag: "研究型医院", beds: "2,200" },
      { city: "成都", tag: "西部医疗枢纽", beds: "1,900" },
      { city: "深圳", tag: "三甲综合", beds: "1,600" },
    ],
    processEyebrow: "服务流程",
    processTitle: "从咨询到康复，六步走完",
    processSteps: [
      { title: "远程会诊", desc: "与专家视频问诊" },
      { title: "方案设计", desc: "个性化治疗方案" },
      { title: "签证办理", desc: "邀请函与签证" },
      { title: "出行接待", desc: "专车机场接送" },
      { title: "入院治疗", desc: "三甲医院住院" },
      { title: "长期随访", desc: "12 个月远程关怀" },
    ],
    voicesEyebrow: "用户声音",
    voicesTitle: "旅客怎么说",
    voices: [
      { name: "来自美国的旅客", country: "美国", text: "我来做一项复杂的心脏手术。管家团队翻译了每一份病历，安排了每一次门诊，全程陪伴。在异国医院，我从未感到孤单。" },
      { name: "来自德国的旅客", country: "德国", text: "我把髋关节置换与三周山区中医康复合在一起做。西方医学的精准与东方疗愈的从容，是我在任何其他地方都找不到的组合。" },
      { name: "来自日本的旅客", country: "日本", text: "我们一家四口来做全面体检。套餐里包含国家名中医把脉 — 这种深度的关怀，是我在东京从未体验过的。" },
    ],
    faqEyebrow: "常见问题",
    faqTitle: "您可能想了解的",
    faqs: [
      { q: "签证流程一般需要多久？", a: "大多数医疗签证在 5-10 个工作日内签出。我方团队会为您准备邀请函、医院确认函与全套支持材料。" },
      { q: "你们能翻译病历与报告吗？", a: "可以。每一份报告都由具备医学背景的双语翻译师翻译，并由您的主诊医生签字确认。" },
      { q: "家属可以陪同吗？", a: "当然可以。我们为陪同家属安排住宿、餐食与专车接送，并在合作医院提供 VIP 单人病房。" },
      { q: "回国后还能继续随访吗？", a: "我们提供 12 个月的远程随访：定期视频复诊、药品配送、与您主诊专家的直通渠道。" },
    ],
    finalEyebrow: "开启您的旅程",
    finalTitle: "告诉我们，您想被如何照护。",
    finalSub: "资深顾问将在 24 小时内与您联系，定制从首次视频问诊到 12 个月长期随访的完整方案。",
    finalBtn: "预约咨询",
  },
  routesPageV2: {
    eyebrow: "康养线路",
    title: "精选中国康养疗愈之旅",
    subtitle: "六大主题线路 — 融合传统中医、高端体检与定制旅行。每条线路都是全程私享、全程陪同。",
    filterLabel: "筛选",
    allThemes: "全部主题",
    themes: {
      hotSpring: "温泉疗愈",
      gorge: "江峡养心",
      tcm: "中医世家",
      trail: "古道徒步",
      oldTown: "古镇静修",
      aesthetic: "都市医美",
    },
    dayBuckets: { all: "全部天数", short: "1-3 天", mid: "4-5 天", long: "6 天+" },
    count: (n) => `${n} 条线路可约`,
    compare: (n) => `对比 (${n})`,
    daysUnit: "天",
    nightsUnit: "晚",
    from: "起价",
    bestLabel: "最佳",
    noResult: "没有匹配的线路，换个筛选试试。",
    compareEyebrow: "Compare",
    compareTitle: "线路对比",
    clear: "清空",
    consultAdvisor: "咨询顾问",
    fieldLabel: "项目",
    fieldDuration: "时长",
    fieldIntensity: "强度",
    fieldSeason: "最佳季节",
    fieldPrice: "起价",
    fieldHighlight: "亮点",
    tailorEyebrow: "为您定制",
    tailorTitle: "没有合适的？我们为您定制一条。",
    tailorSub: "告诉我们出行日期、人数与偏好 — 顾问将在 24 小时内提供 2-3 套定制方案。",
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
  brand: { tagline: "Yujian Wellness", subtag: "Medical Tourism · China" },
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
    servicesLabel: "Services",
    services: { routes: "Itineraries", checkup: "Health Screening", tcm: "TCM", about: "About" },
    resourcesLabel: "Resources",
    resources: { visa: "Visa Guide", hospitals: "Hospital Network", stories: "Patient Stories", newsroom: "Newsroom" },
    newsletterLabel: "Newsletter",
    newsletterDesc: "Monthly: a senior advisor's note on medical travel in China.",
    privacy: "Privacy",
    terms: "Terms",
    hipaa: "HIPAA Notice",
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
    heroEyebrow: "Medical Tourism · China",
    heroTitle: "Your all-in-one concierge for medical travel in China",
    heroSub: "A fully-managed, end-to-end journey — from your first video consult to follow-up at home. Premium Chinese medicine meets international-grade care, all stitched together by a dedicated concierge team.",
    heroBtnConsult: "Request a Consult",
    heroBtnSearch: "Search Treatment",
    searchSpecialty: "Specialty",
    searchDestination: "Destination",
    searchBtn: "Search",
    featuredEyebrow: "Featured",
    featuredTitle: "Tier-A Hospital Network",
    featuredDesc: "200+ public hospitals, vetted by an international medical board.",
    stats: [
      { value: "600+", label: "Disease types treated" },
      { value: "1,600+", label: "Surgical procedures" },
      { value: "200+", label: "Partner hospitals" },
      { value: "24/7", label: "Concierge support" },
    ],
    pillarsEyebrow: "Our Service Pillars",
    pillarsTitle: "A complete journey, not a single transaction",
    pillarsSub: "Four integrated services that follow you from your first question to your last follow-up — and beyond.",
    pillars: [
      { title: "Online Consultation", desc: "Connect with China's top specialists via encrypted video from anywhere in the world." },
      { title: "Hospital Network", desc: "200+ tier-A public hospitals and international medical centers, all vetted by our medical board." },
      { title: "Travel & Visa", desc: "End-to-end medical visa support, airport pickup, private transport and interpreter escort." },
      { title: "Heritage TCM", desc: "Pair modern medicine with millennia-old Chinese therapies: acupuncture, tuina, gaofang and more." },
    ],
    ctaBannerEyebrow: "Custom Plan",
    ctaBannerTitle: "Design my medical travel plan",
    ctaBannerSub: "Share your condition, your timeline and your preferences. A senior advisor will reach out within 24 hours.",
    ctaBannerBtn: "Start Planning",
    networkEyebrow: "Our Network",
    networkTitle: "200+ partner hospitals across China",
    networkViewAll: "View all hospitals",
    hospitals: [
      { city: "Chongqing", tag: "Tier-A Public", beds: "3,200" },
      { city: "Beijing", tag: "National Center", beds: "2,800" },
      { city: "Shanghai", tag: "International", beds: "2,500" },
      { city: "Guangzhou", tag: "Research", beds: "2,200" },
      { city: "Chengdu", tag: "Western Hub", beds: "1,900" },
      { city: "Shenzhen", tag: "Tier-A", beds: "1,600" },
    ],
    processEyebrow: "How It Works",
    processTitle: "Six steps from inquiry to recovery",
    processSteps: [
      { title: "Online consult", desc: "Video call with a specialist" },
      { title: "Plan", desc: "Personalized treatment plan" },
      { title: "Visa", desc: "Invitation letter & visa" },
      { title: "Travel", desc: "Airport pickup & escort" },
      { title: "Treat", desc: "Hospital admission" },
      { title: "Follow-up", desc: "12-month remote care" },
    ],
    voicesEyebrow: "Voices",
    voicesTitle: "What our guests say",
    voices: [
      { name: "Visitor from the U.S.", country: "United States", text: "I came for a complex cardiac procedure. The concierge team translated every medical report, scheduled every appointment, and was at my side throughout. I never felt alone in a foreign hospital." },
      { name: "Visitor from Germany", country: "Germany", text: "I combined a hip replacement with three weeks of TCM recovery in the mountains. The integration of Western precision and Eastern healing is something I could not find anywhere else." },
      { name: "Visitor from Japan", country: "Japan", text: "Our family of four came for full health screenings. The package included a master TCM physician's pulse reading — a level of care I had never experienced in Tokyo." },
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "How long does the visa process take?", a: "Most medical visas are issued within 5-10 business days. Our team prepares all invitation letters, hospital confirmation and supporting documents on your behalf." },
      { q: "Do you provide translation of medical reports?", a: "Yes. Every report is translated by a medical-certified bilingual translator and countersigned by your attending physician." },
      { q: "Can a family member accompany the patient?", a: "Absolutely. We arrange accommodation, transport and meals for accompanying family members, and a private family room is available at most partner hospitals." },
      { q: "What if I need follow-up care after returning home?", a: "We provide a 12-month remote follow-up: scheduled video consultations, prescription delivery and a direct line to your specialist." },
    ],
    finalEyebrow: "Begin Your Journey",
    finalTitle: "Tell us how you'd like to be cared for.",
    finalSub: "A senior advisor will reach out within 24 hours to design a complete plan — from your first video consult to a 12-month follow-up.",
    finalBtn: "Request a Consult",
  },
  routesPageV2: {
    eyebrow: "Wellness Itineraries",
    title: "Curated healing journeys across China",
    subtitle: "Six signature itineraries blending traditional Chinese medicine, premium screening and curated travel. Each is fully private, fully escorted.",
    filterLabel: "Filter",
    allThemes: "All themes",
    themes: {
      hotSpring: "Hot Spring",
      gorge: "River Gorge",
      tcm: "TCM Heritage",
      trail: "Ancient Trail",
      oldTown: "Old Town",
      aesthetic: "Urban Aesthetic",
    },
    dayBuckets: { all: "All", short: "1–3 days", mid: "4–5 days", long: "6+ days" },
    count: (n) => `${n} itinerary available`,
    compare: (n) => `Compare (${n})`,
    daysUnit: "d",
    nightsUnit: "n",
    from: "from",
    bestLabel: "Best",
    noResult: "No itineraries match your filters.",
    compareEyebrow: "Compare",
    compareTitle: "Itinerary comparison",
    clear: "Clear",
    consultAdvisor: "Consult an advisor",
    fieldLabel: "Field",
    fieldDuration: "Duration",
    fieldIntensity: "Intensity",
    fieldSeason: "Best season",
    fieldPrice: "From",
    fieldHighlight: "Highlight",
    tailorEyebrow: "Custom Plan",
    tailorTitle: "Don't see your fit? Tailor your own.",
    tailorSub: "Share your goals, timeline and preferences. A senior advisor will design a fully-custom plan and reach out within 24 hours.",
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
  brand: { tagline: "渝見康養 · Yujian Wellness", subtag: "医療観光 · 中国" },
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
    servicesLabel: "サービス",
    services: { routes: "養生コース", checkup: "健康診断", tcm: "中医", about: "ブランドについて" },
    resourcesLabel: "リソース",
    resources: { visa: "ビザガイド", hospitals: "病院ネットワーク", stories: "お客様の声", newsroom: "ニュースルーム" },
    newsletterLabel: "ニュースレター",
    newsletterDesc: "毎月一通：シニアアドバイザーによる中国医療旅行のメモ。",
    privacy: "プライバシー",
    terms: "利用規約",
    hipaa: "HIPAA 通知",
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
    heroEyebrow: "医療観光 · 中国",
    heroTitle: "中国での医療旅行を、ワンストップで。",
    heroSub: "初回のビデオ問診から帰国後のフォローまで、すべてを専属コンシェルジュが寄り添う旅路へ。西洋医療の精度と、千年の中医学をひとつに。",
    heroBtnConsult: "相談する",
    heroBtnSearch: "治療を検索",
    searchSpecialty: "診療科目",
    searchDestination: "目的地",
    searchBtn: "検索",
    featuredEyebrow: "Featured",
    featuredTitle: "三甲病院ネットワーク",
    featuredDesc: "200超の公立三甲病院を、国際医療委員会が厳選。",
    stats: [
      { value: "600+", label: "対応疾患" },
      { value: "1,600+", label: "実施術式" },
      { value: "200+", label: "提携三甲病院" },
      { value: "24/7", label: "専属コンシェルジュ" },
    ],
    pillarsEyebrow: "4つのサービス柱",
    pillarsTitle: "一回きりの取引ではなく、ひとつの旅路。",
    pillarsSub: "初めてのお問い合わせから長期フォローまで、4つの統合サービスが伴走します。",
    pillars: [
      { title: "オンライン問診", desc: "世界中どこからでも、暗号化ビデオで中国のトップ専門医とつながります。" },
      { title: "病院ネットワーク", desc: "医療委員会が厳選した200超の三甲公立病院と国際医療センター。" },
      { title: "ビザと渡航", desc: "医療ビザ申請・空港送迎・専用車・通訳付き添いをワンストップで。" },
      { title: "伝承中医学", desc: "現代医療と千年の中医学を融合：針灸・推拿・膏方・養生。" },
    ],
    ctaBannerEyebrow: "カスタムプラン",
    ctaBannerTitle: "あなたの医療旅行プランを設計します",
    ctaBannerSub: "症状・スケジュール・ご希望をお聞かせください。24時間以内にシニアアドバイザーよりご連絡します。",
    ctaBannerBtn: "プラン設計を始める",
    networkEyebrow: "提携ネットワーク",
    networkTitle: "中国全土200超の提携三甲病院",
    networkViewAll: "すべての病院を見る",
    hospitals: [
      { city: "重慶", tag: "三甲公立", beds: "3,200" },
      { city: "北京", tag: "国家医療センター", beds: "2,800" },
      { city: "上海", tag: "国際医療", beds: "2,500" },
      { city: "広州", tag: "研究型病院", beds: "2,200" },
      { city: "成都", tag: "西部医療拠点", beds: "1,900" },
      { city: "深圳", tag: "三甲総合", beds: "1,600" },
    ],
    processEyebrow: "サービスフロー",
    processTitle: "お問い合わせから回復まで、6ステップ。",
    processSteps: [
      { title: "オンライン問診", desc: "専門医とビデオ通話" },
      { title: "プラン設計", desc: "個別治療計画" },
      { title: "ビザ取得", desc: "招請状とビザ" },
      { title: "渡航・送迎", desc: "空港送迎と付き添い" },
      { title: "入院・治療", desc: "三甲病院での入院" },
      { title: "長期フォロー", desc: "12ヶ月の遠隔ケア" },
    ],
    voicesEyebrow: "お客様の声",
    voicesTitle: "ゲストからのメッセージ",
    voices: [
      { name: "米国からのゲスト", country: "アメリカ", text: "複雑な心臓手術を受けに来ました。コンシェルジュチームが全ての医療書類を翻訳し、予約を手配し、常にそばにいてくれました。異国の病院でも孤独を感じませんでした。" },
      { name: "ドイツからのゲスト", country: "ドイツ", text: "股関節置換と山岳地での3週間の中医回復を組み合わせました。西洋の精密さと東洋の癒しを両立できる場所は、他には見つかりません。" },
      { name: "日本からのゲスト", country: "日本", text: "家族4人で総合健康診断を受けました。コースには国家名中医の脈診も含まれており、東京では経験したことのない手厚いものでした。" },
    ],
    faqEyebrow: "よくあるご質問",
    faqTitle: "ご不明な点にお答えします",
    faqs: [
      { q: "ビザ手続きにはどのくらい時間がかかりますか？", a: "ほとんどの医療ビザは5〜10営業日で発給されます。招請状・病院確認書一式は当方にてご用意します。" },
      { q: "医療文書や報告書の翻訳もお願いできますか？", a: "はい。医療資格を持つバイリンガル翻訳者が翻訳し、主治医がクロスサインします。" },
      { q: "家族が付き添うことはできますか？", a: "もちろんです。ご家族用の宿泊・食事・専用車を手配し、提携病院では個室をご利用いただけます。" },
      { q: "帰国後のフォローはありますか？", a: "12ヶ月の遠隔フォローをご用意。定期ビデオ再診、お薬配送、主治医直通の窓口をご利用いただけます。" },
    ],
    finalEyebrow: "旅路を始める",
    finalTitle: "どのように過ごされたいか、お聞かせください。",
    finalSub: "シニアアドバイザーが24時間以内にご連絡し、初回のビデオ問診から12ヶ月の長期フォローまで、総合プランを設計します。",
    finalBtn: "相談する",
  },
  routesPageV2: {
    eyebrow: "養生コース",
    title: "中国全土の厳選 癒しの旅路",
    subtitle: "中医・ハイエンド健康診断・厳選旅行を融合した6つのシグネチャーコース。すべて完全プライベート・完全アテンド。",
    filterLabel: "絞り込み",
    allThemes: "全テーマ",
    themes: {
      hotSpring: "温泉",
      gorge: "峡谷",
      tcm: "中医",
      trail: "古道",
      oldTown: "古町",
      aesthetic: "都市美容",
    },
    dayBuckets: { all: "全日数", short: "1-3日", mid: "4-5日", long: "6日以上" },
    count: (n) => `${n} 件のコース`,
    compare: (n) => `比較 (${n})`,
    daysUnit: "日",
    nightsUnit: "泊",
    from: "より",
    bestLabel: "最適",
    noResult: "該当するコースがありません。条件を変えてみてください。",
    compareEyebrow: "Compare",
    compareTitle: "コース比較",
    clear: "クリア",
    consultAdvisor: "アドバイザーに相談",
    fieldLabel: "項目",
    fieldDuration: "日数",
    fieldIntensity: "強度",
    fieldSeason: "最適季節",
    fieldPrice: "料金",
    fieldHighlight: "見どころ",
    tailorEyebrow: "カスタムプラン",
    tailorTitle: "ぴったりがなければ、オーダーメイド。",
    tailorSub: "出発日・人数・ご希望をお聞かせください。24時間以内に2〜3案をご提案します。",
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
