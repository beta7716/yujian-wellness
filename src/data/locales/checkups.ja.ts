import type { LocalizedCheckupPackage } from "../checkups";

const checkups: Record<string, LocalizedCheckupPackage> = {
  essential: {
    name: "山城 · エッセンシャル安心",
    tagline: "Essential Wellness",
    recommendedFor: "30代以上 · 日常指標の確認",
    highlights: ["血液一般 · 尿一般 · 肝機能12項目", "胸部低被曝CT", "腹部エコー + 甲状腺", "三甲主任医師による総合判定"],
    flow: [
      { step: 1, title: "オンライン予約", detail: "ミニプログラムでプラン選択、来院時間を確定。" },
      { step: 2, title: "専用車送迎", detail: "重慶市内、自宅まで送迎。" },
      { step: 3, title: "朝の空腹健診", detail: "医療通訳が同席、平均2.5時間。" },
      { step: 4, title: "栄養朝食", detail: "低GI朝食券を提供。" },
      { step: 5, title: "専門医解説", detail: "1対1で約30分、結果を解説。" },
      { step: 6, title: "健康管理", detail: "1年間の健康記録を動的に追跡。" },
    ],
    institutions: ["重慶医科大学附属第一医院", "重慶市中医院", "重鋼総医院"],
  },
  deep: {
    name: "雲頂 · ディープケア",
    tagline: "Deep Care",
    recommendedFor: "40代以上 · 生活習慣病リスク",
    highlights: ["全身MRI", "冠動脈CTA", "苦痛のない胃・大腸内視鏡", "腫瘍マーカー12項目"],
    flow: [
      { step: 1, title: "健康アドバイザー1v1", detail: "専任アドバイザーが個別プランを設計。" },
      { step: 2, title: "VIP専用レーン", detail: "専用VIP健診レーン、待ち時間なし。" },
      { step: 3, title: "高度検査", detail: "MRI / CTA / 内視鏡 / 全身エコー。" },
      { step: 4, title: "中医体質判定", detail: "三甲の名中医による体質判定。" },
      { step: 5, title: "複合診療", detail: "内科・画像診断・中医の三者合同解説。" },
      { step: 6, title: "1年間のフォロー", detail: "専任健康管家が1年間サポート。" },
    ],
    institutions: ["重慶医科大学附属第二医院", "重慶大学附属腫瘍医院", "西南医院"],
  },
  vip: {
    name: "御鑑 · VIP 尊享",
    tagline: "Imperial VIP",
    recommendedFor: "企業経営者 / 高資産層",
    highlights: ["全身PET-CT", "冠動脈 + 頭部MRA", "遺伝子検査168項目", "院士級専門家総合判定"],
    flow: [
      { step: 1, title: "専属医", detail: "三甲主任医師クラスの専属医が対応。" },
      { step: 2, title: "専用車 + ホテル", detail: "五星ホテル2泊、終日コンシェルジュカー。" },
      { step: 3, title: "PET-CT / MRA", detail: "当日中に全高端画像検査を完了。" },
      { step: 4, title: "院士級コンシリウム", detail: "重慶・北京・上海の専門家による遠隔会診。" },
      { step: 5, title: "中医膏方", detail: "名老中医によるオーダーメイド膏方1剤。" },
      { step: 6, title: "終身記録", detail: "クラウド型終身健康記録 + 世界緊急救援。" },
    ],
    institutions: ["西南医院 VIP 国際部", "重医附一院金山国際部", "大坪医院 VIP センター"],
  },
  royal: {
    name: "渝見 · ロイヤルサンクチュアリ",
    tagline: "Royal Sanctuary",
    recommendedFor: "トップVIP / 海外ゲスト",
    highlights: ["全身7T MRI", "全ゲノムシーケンス", "海外専門家遠隔会診", "温泉ヒーリング2日"],
    flow: [
      { step: 1, title: "海外ゲスト送迎", detail: "空港専用車 + 終日バトラー対応。" },
      { step: 2, title: "貸切温泉", detail: "縉雲山貸切温泉リゾートに2泊。" },
      { step: 3, title: "最高級検査", detail: "7T MRI / 全ゲノム / 高端画像フルセット。" },
      { step: 4, title: "海外専門家団", detail: "メイヨー・グレンイーグルス・東京医科歯科の三者会診。" },
      { step: 5, title: "中医 + 温泉", detail: "名老中医膏方 + 草本薬浴。" },
      { step: 6, title: "グローバル記録 + 救援", detail: "国際救援機関の終身会員。" },
    ],
    institutions: ["スイス鷹閣医療協力センター", "メイヨー診療所遠隔会診", "鷹閣医療重慶センター"],
  },
};

export default checkups;
