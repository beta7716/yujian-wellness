import type { LocalizedRoute } from "../routes";

const routes: Record<string, LocalizedRoute> = {
  "hot-spring-healing": {
    title: "베이원취안 · 산속 약초 온천 3일 정수",
    subtitle: "Hot Spring Healing Retreat",
    highlight: "진윈산 기슭의 천년 온천에서 치유하고, 약초 목욕과 태극권 아침 수업을 경험합니다.",
    tags: ["온천", "약초 목욕", "태극권", "선"],
    itinerary: [
      { day: 1, title: "도착 · 프라이빗 온천 투숙", detail: "전용 차량으로 공항/역 픽업, 진윈산 프라이빗 온천 리조트 체크인, 저녁 약초식 디너." },
      { day: 2, title: "아침 수업 · 고대 온천 치유", detail: "아침 태극권 도인술, 오전 베이원취안 고대 온천 치유, 오후 명의 중의 변증 처방." },
      { day: 3, title: "귀국 · 약초 선물", detail: "아침 산속 산책, 맞춤 약초 기념품, 전용 차량으로 공항/역 이동." },
    ],
    includes: ["진윈산 프라이빗 온천 2박", "일일 3끼 약초식", "중의 변증 상담 1회", "태극권 아침 수업 2회"],
    bestSeason: "사계절 · 가을/겨울 특히 추천",
  },
  "gorge-mindfulness": {
    title: "장강 삼협 · 강협 양심 5일",
    subtitle: "Yangtze Gorge Mindfulness",
    highlight: "장강 크루즈에 승선하여 거당협·오협·서릉협 사이에서 명상하고, 다도와 경락 케어를 즐깁니다.",
    tags: ["크루즈", "명상", "다도", "경락"],
    itinerary: [
      { day: 1, title: "승선 · 출항", detail: "충칭 차오톈먼 부두에서 승선, 다도 환영 의식." },
      { day: 2, title: "거당협 · 아침 관상", detail: "아침 협곡 관상과 호흡법, 오후 덱 경락 두드리기." },
      { day: 3, title: "오협 · 신녀봉", detail: "오산 운해 속 고요 명상, 명의 중의 순회 진료." },
      { day: 4, title: "서릉협 · 차산", detail: "삼협 차산 하선, 차 요법과 약초식 런치." },
      { day: 5, title: "귀국", detail: "이창에서 귀국, 기념품: 고산 운우차." },
    ],
    includes: ["장강 크루즈 4박 발코니 객실", "경락 조정 2회", "다도와 약초식 전식", "삼협 전 구간 입장권"],
    bestSeason: "춘추 · 4-6월 / 9-11월",
  },
  "tcm-family": {
    title: "중의 가문 · 명의 진료 4일",
    subtitle: "TCM Heritage Journey",
    highlight: "국가급 명의 중의에게 사사하며 처방을 베끼고, 고방을 직접 만들고, 침구·추나·뜸 요법을 모두 경험합니다.",
    tags: ["명의", "고방", "침구", "추나"],
    itinerary: [
      { day: 1, title: "사사 · 처방 베끼기", detail: "오전 명의관 처방 베끼기, 오후 중의약 박물관 관람." },
      { day: 2, title: "침구 · 뜸", detail: "침구와 뜸을 직접 체험, 명의가 체질 해석." },
      { day: 3, title: "고방 만들기", detail: "스승과 함께 개인 고방 조제, 오후 약초식." },
      { day: 4, title: "재진 · 귀국", detail: "재진과 체질 리포트 설명, 기념품: 개인 고방." },
    ],
    includes: ["명의 예약 2회", "고방 1제（약재 포함）", "침구 / 뜸 / 추나 각 1회", "고방 만들기 체험"],
    bestSeason: "사계절",
  },
  "ancient-trail": {
    title: "진포산 · 고도 트레킹 5일",
    subtitle: "Ancient Trail Hiking",
    highlight: "진포산 원시 진달래 숲과 고찰을 걸으며, 야외 스트레칭과 고산 약초식으로 회복합니다.",
    tags: ["트레킹", "약초식", "고찰", "스트레칭"],
    itinerary: [
      { day: 1, title: "입산 · 스트레칭", detail: "진포산 서파 입산, 출발 전 기능 스트레칭과 장비 안내." },
      { day: 2, title: "진달래 숲 · 아침 수업", detail: "아침 진달래 숲 명상, 오후 고찰 선차." },
      { day: 3, title: "정상 · 운해", detail: "진포산 정상에서 운해 관상, 고산 약초식 런치." },
      { day: 4, title: "약초원", detail: "고산 약초원 방문, DIY 약초 족욕팩." },
      { day: 5, title: "하산 · 귀국", detail: "천천히 하산, 스포츠 회복 평가." },
    ],
    includes: ["진포산 입장권 + 케이블카", "전문 아웃도어 가이드", "DIY 약초 족욕팩", "스포츠 회복 평가 1회"],
    bestSeason: "5-6월 / 9-10월",
  },
  "ancient-town": {
    title: "궁탄 · 우장 고진 정수 3일",
    subtitle: "Riverside Stillness",
    highlight: "천 년 궁탄 고진의 조립 건축에서 정수하며, 밤에는 화례 차를 즐기고 아침에는 태극권과 서예를 합니다.",
    tags: ["고진", "서예", "화례 차", "태극권"],
    itinerary: [
      { day: 1, title: "도착 · 화례 차", detail: "유양 궁탄 고진 체크인, 밤 화례 차." },
      { day: 2, title: "아침 수업 · 서예", detail: "아침 태극권, 오후 서예 체험, 저녁 우장 산책." },
      { day: 3, title: "귀국", detail: "아침 정좌, 기념품: 수제 차와 투족 직금." },
    ],
    includes: ["고진 조립 건축 2박", "화례 차 2박", "태극권 아침 수업 2회", "서예 체험 1회"],
    bestSeason: "춘추",
  },
  "city-medical": {
    title: "충칭 도시 · 미용 리뉴얼 3일",
    subtitle: "Urban Medical Aesthetics",
    highlight: "三甲 병원 피부 관리와 라이트 미용 시술을 산성 야경과 미슐랭 미식과 함께합니다.",
    tags: ["미용 시술", "피부 관리", "三甲", "도시"],
    itinerary: [
      { day: 1, title: "도착 · 상담", detail: "三甲 병원 피부 검사, 전문의 대면 상담과 플랜 설계." },
      { day: 2, title: "리뉴얼", detail: "오전 라이트 미용 시술, 저녁 홍야동 야경." },
      { day: 3, title: "재진 · 귀국", detail: "순후 재진과 케어 키트, 기념품: 맞춤 스킨케어 세트." },
    ],
    includes: ["피부 검사 1회", "라이트 미용 시술 1항목", "순후 케어 키트", "종일 전용 차량"],
    bestSeason: "사계절",
  },
};

export default routes;
