import type { LocalizedCheckupPackage } from "../checkups";

const checkups: Record<string, LocalizedCheckupPackage> = {
  essential: {
    name: "산성 · 에센셜 안심",
    tagline: "Essential Wellness",
    recommendedFor: "30대 이상 · 일상 지표 관리",
    highlights: ["혈액·소변 일반 · 간기능 12항목", "흉부 저선량 CT", "복부 초음파 + 갑상선", "3A 주임의사 종합 판정"],
    flow: [
      { step: 1, title: "온라인 예약", detail: "미니프로그램으로 패키지 선택, 방문 시간 확정." },
      { step: 2, title: "전용차 픽업", detail: "충칭 시내 픽업 서비스." },
      { step: 3, title: "아침 공복 검진", detail: "의료 안내 동행, 평균 2.5시간." },
      { step: 4, title: "영양 아침식", detail: "맞춤 저GI 아침식 쿠폰." },
      { step: 5, title: "전문의 해설", detail: "1대1 약 30분 결과 해설." },
      { step: 6, title: "건강 관리", detail: "1년간 건강 기록 동적 추적." },
    ],
    institutions: ["충칭의과대학 부속제일병원", "충칭시중병원", "충강종합병원"],
  },
  deep: {
    name: "운정 · 딥케어",
    tagline: "Deep Care",
    recommendedFor: "40대 이상 · 만성질환 리스크",
    highlights: ["전신 MRI", "관상동맥 CTA", "통증 없는 위·대장내시경", "종양 표지자 12항목"],
    flow: [
      { step: 1, title: "건강 어드바이저 1v1", detail: "전담 어드바이저가 맞춤 플랜 설계." },
      { step: 2, title: "VIP 전용 통로", detail: "전용 VIP 검진 통로, 대기 없음." },
      { step: 3, title: "심층 검사", detail: "MRI / CTA / 내시경 / 전신 초음파." },
      { step: 4, title: "중의 체질 판별", detail: "3A 명중의 체질 판별." },
      { step: 5, title: "다학제 협진", detail: "내과·영상의학·중의 3자 공동 해설." },
      { step: 6, title: "1년 추적 관리", detail: "전담 건강管家 1년간 관리." },
    ],
    institutions: ["충칭의과대학 부속제이병원", "충칭대학 부속 종양병원", "서남병원"],
  },
  vip: {
    name: "어우지엔 · VIP 존엄",
    tagline: "Imperial VIP",
    recommendedFor: "기업 임원 / 고자산층",
    highlights: ["전신 PET-CT", "관상동맥 + 뇌혈관 MRA", "유전자 검사 168항목", "원사급 전문가 종합 판정"],
    flow: [
      { step: 1, title: "전담 의사", detail: "3A 주임의사급 전담 의사." },
      { step: 2, title: "전용차 + 호텔", detail: "5성급 호텔 2박, 종일 컨시어지 차량." },
      { step: 3, title: "PET-CT / MRA", detail: "당일 고급 영상 검사 전체 완료." },
      { step: 4, title: "원사급 회진", detail: "충칭·베이징·상하이 전문가 화상 회진." },
      { step: 5, title: "중의 고방", detail: "명노중의 맞춤 고방 1제." },
      { step: 6, title: "종신 기록", detail: "클우드 종신 건강 기록 + 글로벌 긴급 구조." },
    ],
    institutions: ["서남병원 VIP 국제부", "충의부일원 진산국제부", "다핑병원 VIP 센터"],
  },
  royal: {
    name: "위젠 · 로열 생츄어리",
    tagline: "Royal Sanctuary",
    recommendedFor: "최상위 VIP / 해외 고객",
    highlights: ["전신 7T MRI", "전 게놈 시퀀싱", "해외 전문가 원격 회진", "온천 힐링 2일"],
    flow: [
      { step: 1, title: "해외 고객 픽업", detail: "공항 전용차 + 종일 버틀러 접대." },
      { step: 2, title: "프라이빗 온천", detail: "진윈산 프라이빗 온천 리조트 2박." },
      { step: 3, title: "로열 검사", detail: "7T MRI / 전 게놈 / 고급 영상 풀세트." },
      { step: 4, title: "해외 전문가단", detail: "메이요·글eneagles·도쿄 의치대 3자 회진." },
      { step: 5, title: "중의 + 온천", detail: "명노중의 고방 + 약초 약욕." },
      { step: 6, title: "글로벌 기록 + 구조", detail: "국제 구조 단체 종신 회원." },
    ],
    institutions: ["스위스 글eneagles 의료 협력 센터", "메이요 클리닉 원격 회진", "글eneagles 의료 충칭 센터"],
  },
};

export default checkups;
