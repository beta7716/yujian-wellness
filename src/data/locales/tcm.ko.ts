import type { LocalizedTcmTherapy, LocalizedTcmDoctor, LocalizedSolarTerm } from "../tcm";

const therapies: Record<string, LocalizedTcmTherapy> = {
  acupuncture: { name: "침구", en: "Acupuncture", desc: "경락혈자리에 가는 침을 놓아 기혈을 조절하고 경락을 통하게 합니다.", benefit: "통증 완화 · 수면 개선 · 남분비 조절" },
  cupping: { name: "부항", en: "Cupping", desc: "부압으로 피부에 흡착시켜 혈행을 촉진하고 한습기를 몰아냅니다.", benefit: "근육 이완 · 항독 · 긴장 완화" },
  moxibustion: { name: "뜸", en: "Moxibustion", desc: "쑥을 태워 혈자리를 따뜻하게 하고 양기를 보충하며 저항력을 높입니다.", benefit: "자궁 보온 · 면역 향상 · 비위 조절" },
  tuina: { name: "추나", en: "Tuina", desc: "손기법으로 경락혈자리와 근골에 작용하여 정렬을 회복합니다.", benefit: "목어깨 완화 · 자세 개선 · 순환 촉진" },
  "herbal-bath": { name: "약초 목욕", en: "Herbal Bath", desc: "약초 달인 물을 욕조에 넣어 피부를 통해 전신에 흡수시킵니다.", benefit: "피부 영양 · 안정 수면 · 경락 이완" },
  "diet-therapy": { name: "약선", en: "Dietary Therapy", desc: "약과 음식은 동원, 체질에 맞게 식재료를 배합합니다.", benefit: "비위 건강 · 기혈 보양 · 예방" },
};

const doctors: Record<string, LocalizedTcmDoctor> = {
  "dr-wang": { name: "왕제세", title: "주임 중의사 · 전국명중의", specialty: "내과 잡증, 비위병, 서브헬스 조정", schedule: "월 / 수 / 금 오전 · 예약제" },
  "dr-li": { name: "이방령", title: "부주임 중의사 · 침구 박사", specialty: "침구 진통, 불면 불안, 부인과 조정", schedule: "화 / 목 / 토 종일 · 예약제" },
  "dr-chen": { name: "진명당", title: "주임 중의사 · 추나 전승인", specialty: "경견요각통, 스포츠 회복, 척주 조정", schedule: "월 / 목 / 토 오후 · 예약제" },
  "dr-zhang": { name: "장소백", title: "주치 중의사 · 중의 미용", specialty: "체질 판별, 약선 요법, 피부 조정", schedule: "수 / 금 / 일 종일 · 예약제" },
};

const solarTerms: Record<string, LocalizedSolarTerm> = {
  lichun: { name: "입춘", monthLabel: "2월", tip: "봄의 양기가 솟아나, 간을 소통시키고 신온 발산 식품을 섭취.", herbs: ["시호", "장미", "구기자"] },
  yushui: { name: "우수", monthLabel: "2월", tip: "습기가 무거워지면 비를 강화하고 습을 제거, 생냉 기름진 음식 피하기.", herbs: ["율무", "복령", "산약"] },
  jingzhe: { name: "경칩", monthLabel: "3월", tip: "봄 천둥이 벌레를 깨우니, 폐를 윤택하게 하고 화를 내리고 알레르기 예방.", herbs: ["백합", "배", "국화"] },
  chunfen: { name: "춘분", monthLabel: "3월", tip: "음양 균형, 간비 조화, 일찍 자고 일찍 일어나기.", herbs: ["구기자", "대추", "산약"] },
  qingming: { name: "청명", monthLabel: "4월", tip: "간을 맑게 하고 눈을 밝게, 소풍과 명전차.", herbs: ["국화", "결명자", "녹차"] },
  guyu: { name: "곡우", monthLabel: "4월", tip: "비가 곡식을 적시니, 혈을 기르고 비를 강화, 습기 주의.", herbs: ["팥", "율무", "수실"] },
  lixia: { name: "입하", monthLabel: "5월", tip: "여름 기운 시작, 심을 보양하고 양을 지키며 담담한 식사.", herbs: ["연자", "맥동", "녹두"] },
  xiaoman: { name: "소만", monthLabel: "5월", tip: "습열이 교차, 청열 이습, 차가운 것 탐하지 않기.", herbs: ["동과", "연잎", "팥"] },
  mangzhong: { name: "망종", monthLabel: "6월", tip: "바쁜 농사철, 진액 생성하고 갈증 해소, 심신 안정.", herbs: ["오매", "산사", "감초"] },
  xiazhi: { name: "하지", monthLabel: "6월", tip: "양이 극에 달해 음이 생김, 늦게 자고 일찍 일어나며 낮잠.", herbs: ["서양삼", "석곡", "녹두"] },
  xiaoshu: { name: "소서", monthLabel: "7월", tip: "더위가 성함, 담담하게 더위를 풀고 녹두탕 자주.", herbs: ["녹두", "금은화", "박하"] },
  dashu: { name: "대서", monthLabel: "7월", tip: "서습이 가장 무거움, 비를 강화하고 습을 제거, 동병하지.", herbs: ["곽향", "배란", "생강"] },
};

export default { therapies, doctors, solarTerms };
