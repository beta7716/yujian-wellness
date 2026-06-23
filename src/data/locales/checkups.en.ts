import type { LocalizedCheckupPackage } from "../checkups";

const checkups: Record<string, LocalizedCheckupPackage> = {
  essential: {
    name: "Mountain City · Essential Care",
    tagline: "Essential Wellness",
    recommendedFor: "Age 30+ routine indicators",
    highlights: ["Blood & urine routine · 12 liver markers", "Low-dose chest CT", "Abdominal ultrasound + thyroid", "Chief-physician final report"],
    flow: [
      { step: 1, title: "Online booking", detail: "Select package in the mini-app and confirm appointment time." },
      { step: 2, title: "Private transfer", detail: "Door-to-door private car within Chongqing urban area." },
      { step: 3, title: "Morning fasting screening", detail: "Full escort by a medical guide, average 2.5 hours." },
      { step: 4, title: "Nutritious breakfast", detail: "Custom low-GI breakfast voucher." },
      { step: 5, title: "Expert interpretation", detail: "One-on-one report review for about 30 minutes." },
      { step: 6, title: "Health management", detail: "One-year dynamic health record tracking." },
    ],
    institutions: ["Chongqing Medical University Affiliated First Hospital", "Chongqing TCM Hospital", "Chonggang General Hospital"],
  },
  deep: {
    name: "Cloud Summit · Deep Care",
    tagline: "Deep Care",
    recommendedFor: "Age 40+ chronic disease risk",
    highlights: ["Whole-body MRI", "Coronary CTA", "Painless gastro/colonoscopy", "12 tumor markers"],
    flow: [
      { step: 1, title: "1-on-1 health advisor", detail: "Personal advisor designs a tailored plan." },
      { step: 2, title: "VIP channel", detail: "Dedicated VIP screening lane, no queue." },
      { step: 3, title: "Deep imaging", detail: "MRI / CTA / endoscopy / full ultrasound set." },
      { step: 4, title: "TCM constitution", detail: "Constitution analysis by a tier-A TCM master." },
      { step: 5, title: "Multidisciplinary review", detail: "Joint review by internal medicine, imaging and TCM." },
      { step: 6, title: "Year-long follow-up", detail: "Dedicated health butler for one year." },
    ],
    institutions: ["Chongqing Medical University Affiliated Second Hospital", "Chongqing University Cancer Hospital", "Southwest Hospital"],
  },
  vip: {
    name: "Imperial VIP",
    tagline: "Imperial VIP",
    recommendedFor: "Executives / high-net-worth guests",
    highlights: ["Whole-body PET-CT", "Coronary + cranial MRA", "168 genetic markers", "Academician-level expert review"],
    flow: [
      { step: 1, title: "Personal physician", detail: "Chief-physician-level personal doctor in charge." },
      { step: 2, title: "Car + hotel", detail: "Two nights in a five-star hotel with full concierge car." },
      { step: 3, title: "PET-CT / MRA", detail: "Complete high-end imaging on the same day." },
      { step: 4, title: "Academician consultation", detail: "Video consultation with experts in Chongqing, Beijing and Shanghai." },
      { step: 5, title: "TCM gaofang", detail: "One personal gaofang from a renowned TCM master." },
      { step: 6, title: "Lifetime record", detail: "Cloud lifetime health record + global emergency rescue." },
    ],
    institutions: ["Southwest Hospital VIP International Department", "CQMU First Hospital Jinshan International Department", "Daping Hospital VIP Center"],
  },
  royal: {
    name: "Yujian · Royal Sanctuary",
    tagline: "Royal Sanctuary",
    recommendedFor: "Top VIP / overseas clients",
    highlights: ["Whole-body 7T MRI", "Whole-genome sequencing", "Overseas expert remote consultation", "2-day hot-spring healing"],
    flow: [
      { step: 1, title: "Overseas pickup", detail: "Airport private car + butler reception throughout." },
      { step: 2, title: "Private hot spring", detail: "Two nights at Jinyun Mountain private hot-spring resort." },
      { step: 3, title: "Royal imaging", detail: "7T MRI / whole genome / full high-end imaging." },
      { step: 4, title: "Global expert panel", detail: "Tri-party consultation with Mayo, Gleneagles and Tokyo Medical and Dental University." },
      { step: 5, title: "TCM + hot spring", detail: "Renowned master gaofang + herbal bath." },
      { step: 6, title: "Global record + rescue", detail: "Lifetime member of international rescue organization." },
    ],
    institutions: ["Swiss Gleneagles Medical Collaboration Center", "Mayo Clinic Remote Consultation", "Gleneagles Chongqing Center"],
  },
};

export default checkups;
