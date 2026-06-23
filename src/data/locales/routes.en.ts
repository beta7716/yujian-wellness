import type { LocalizedRoute } from "../routes";

const routes: Record<string, LocalizedRoute> = {
  "hot-spring-healing": {
    title: "Beiwenquan · Forest Hot-Spring Retreat",
    subtitle: "3-day mountain spring healing",
    highlight: "Heal in a thousand-year-old spring at the foot of Jinyun Mountain, with herbal baths and morning tai chi.",
    tags: ["Hot spring", "Herbal bath", "Tai chi", "Zen"],
    itinerary: [
      { day: 1, title: "Arrival · Private spring check-in", detail: "Private airport/station transfer, check-in at Jinyun Mountain hot-spring resort, herbal dinner." },
      { day: 2, title: "Morning practice · Ancient spring healing", detail: "Morning tai chi, ancient Beiwenquan spring therapy, TCM constitution consultation in the afternoon." },
      { day: 3, title: "Departure · Herbal gifts", detail: "Morning forest walk, custom herbal take-home gift, private transfer to airport/station." },
    ],
    includes: ["2 nights in Jinyun Mountain private hot spring", "Three daily herbal meals", "1 TCM consultation", "2 tai chi sessions"],
    bestSeason: "Year-round · best in autumn/winter",
  },
  "gorge-mindfulness": {
    title: "Yangtze Three Gorges · Mindful Journey",
    subtitle: "5-day gorge wellness cruise",
    highlight: "Board a Yangtze cruise and practice meditation among Qutang, Wu and Xiling gorges, with tea ceremony and meridian care.",
    tags: ["Cruise", "Meditation", "Tea ceremony", "Meridian"],
    itinerary: [
      { day: 1, title: "Embark · Set sail", detail: "Board at Chongqing Chaotianmen Pier, tea-ceremony welcome." },
      { day: 2, title: "Qutang Gorge · Morning view", detail: "Gorge sunrise viewing, breathing practice; afternoon deck meridian tapping." },
      { day: 3, title: "Wu Gorge · Goddess Peak", detail: "Silent meditation in Wu Gorge mist, TCM master rounds." },
      { day: 4, title: "Xiling Gorge · Tea mountain", detail: "Disembark to Three Gorges tea mountain, tea therapy and herbal lunch." },
      { day: 5, title: "Return", detail: "Return from Yichang, take-home gift: alpine cloud tea." },
    ],
    includes: ["4 nights Yangtze cruise balcony cabin", "2 meridian sessions", "Tea ceremony and herbal meals", "Three Gorges attraction tickets"],
    bestSeason: "Spring & autumn · Apr-Jun / Sep-Nov",
  },
  "tcm-family": {
    title: "TCM Heritage · Master Apprenticeship",
    subtitle: "4-day TCM lineage journey",
    highlight: "Follow a national-grade TCM master, copy prescriptions, craft personal gaofang, and experience acupuncture, tuina and moxibustion.",
    tags: ["Master doctor", "Gaofang", "Acupuncture", "Tuina"],
    itinerary: [
      { day: 1, title: "Apprenticeship · Prescription", detail: "Morning at master clinic copying prescriptions, afternoon Chinese medicine museum tour." },
      { day: 2, title: "Acupuncture · Moxibustion", detail: "Personal acupuncture and moxibustion experience, master explains your constitution." },
      { day: 3, title: "Gaofang crafting", detail: "Prepare your personal gaofang with the master, herbal lunch." },
      { day: 4, title: "Follow-up · Return", detail: "Follow-up visit and constitution report, take-home: personal gaofang." },
    ],
    includes: ["2 master consultations", "1 gaofang (herbs included)", "Acupuncture / moxibustion / tuina each once", "Gaofang crafting experience"],
    bestSeason: "Year-round",
  },
  "ancient-trail": {
    title: "Jinfo Mountain · Ancient Trail Trek",
    subtitle: "5-day mountain hiking retreat",
    highlight: "Trek through Jinfo Mountain's primitive rhododendron forests and ancient temples, with outdoor stretching and alpine herbal recovery.",
    tags: ["Hiking", "Herbal cuisine", "Ancient temple", "Stretching"],
    itinerary: [
      { day: 1, title: "Enter mountain · Stretch", detail: "Enter Jinfo Mountain west slope, functional stretching and gear briefing." },
      { day: 2, title: "Rhododendron forest · Morning practice", detail: "Morning meditation in rhododendron forest, afternoon ancient-temple tea." },
      { day: 3, title: "Summit · Cloud sea", detail: "Summit Jinfo Mountain for cloud-sea view, alpine herbal lunch." },
      { day: 4, title: "Medicinal garden", detail: "Visit alpine medicinal garden, DIY herbal foot-bath sachets." },
      { day: 5, title: "Descent · Return", detail: "Gentle descent, sports-recovery assessment." },
    ],
    includes: ["Jinfo Mountain ticket + cable car", "Professional outdoor guide", "DIY herbal foot-bath sachets", "1 sports-recovery assessment"],
    bestSeason: "May-Jun / Sep-Oct",
  },
  "ancient-town": {
    title: "Gongtan · Riverside Old Town Stillness",
    subtitle: "3-day ancient-town retreat",
    highlight: "Retreat in a stilt house in thousand-year-old Gongtan, evening fireside tea, morning tai chi and calligraphy.",
    tags: ["Old town", "Calligraphy", "Fireside tea", "Tai chi"],
    itinerary: [
      { day: 1, title: "Arrival · Fireside tea", detail: "Check in at Youyang Gongtan old town, evening fireside tea." },
      { day: 2, title: "Morning practice · Calligraphy", detail: "Morning tai chi, afternoon calligraphy, evening Wujiang riverside stroll." },
      { day: 3, title: "Departure", detail: "Morning meditation, take-home: handcrafted tea and Tujia brocade." },
    ],
    includes: ["2 nights in old-town stilt house", "2 evenings fireside tea", "2 tai chi sessions", "1 calligraphy session"],
    bestSeason: "Spring & autumn",
  },
  "city-medical": {
    title: "Chongqing Urban · Aesthetic Renewal",
    subtitle: "3-day medical aesthetics escape",
    highlight: "Tier-A hospital dermatology and light medical-aesthetic treatments, paired with mountain-city night views and Michelin dining.",
    tags: ["Aesthetics", "Dermatology", "Tier-A hospital", "Urban"],
    itinerary: [
      { day: 1, title: "Arrival · Consultation", detail: "Tier-A hospital skin analysis, expert face-to-face consultation and plan design." },
      { day: 2, title: "Renewal", detail: "Morning light aesthetic treatment, evening Hongyadong night view." },
      { day: 3, title: "Follow-up · Return", detail: "Post-treatment follow-up and care kit, take-home: custom skincare set." },
    ],
    includes: ["1 skin analysis", "1 light aesthetic treatment", "Post-treatment care kit", "Private car throughout"],
    bestSeason: "Year-round",
  },
};

export default routes;
