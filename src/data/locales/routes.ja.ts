import type { LocalizedRoute } from "../routes";

const routes: Record<string, LocalizedRoute> = {
  "hot-spring-healing": {
    title: "北温泉 · 森の薬湯 3日間静修",
    subtitle: "Hot Spring Healing Retreat",
    highlight: "縉雲山の麓で千年の古湯に癒され、草本薬浴と太極拳の朝課を体験します。",
    tags: ["温泉", "草本薬浴", "太極拳", "禅"],
    itinerary: [
      { day: 1, title: "到着 · 貸切温泉宿泊", detail: "専用車で空港・駅へお迎え、縉雲山の貸切温泉リゾートにチェックイン、夕刻は薬膳の夕食。" },
      { day: 2, title: "朝練 · 古湯ヒーリング", detail: "朝の太極拳導引術、午前中は北温泉の古湯ヒーリング、午後は名中医による弁証と処方。" },
      { day: 3, title: "帰路 · 草本のお土産", detail: "朝の森の散歩、オーダーメイドの草本ギフト、専用車で空港・駅へ。" },
    ],
    includes: ["縉雲山貸切温泉 2泊", "一日三食の薬膳", "中医弁証相談 1回", "太極拳朝課 2回"],
    bestSeason: "通年 · 秋冬が特におすすめ",
  },
  "gorge-mindfulness": {
    title: "長江三峡 · 江峡养心 5日間",
    subtitle: "Yangtze Gorge Mindfulness",
    highlight: "長江クルーズに乗船し、瞿塘峡・巫峡・西陵峡の間で瞑想をし、茶道と経絡ケアを楽しみます。",
    tags: ["クルーズ", "瞑想", "茶道", "経絡"],
    itinerary: [
      { day: 1, title: "乗船 · 出航", detail: "重慶朝天門埠頭から乗船、茶道での歓迎セレモニー。" },
      { day: 2, title: "瞿塘峡 · 朝観", detail: "朝の峡谷観賞と呼吸法、午後はデッキでの経絡叩き。" },
      { day: 3, title: "巫峡 · 神女峰", detail: "巫山の霧の中で静寂瞑想、名中医の巡診。" },
      { day: 4, title: "西陵峡 · 茶山", detail: "三峡の茶山へ下船、茶療法と薬膳ランチ。" },
      { day: 5, title: "帰路", detail: "宜昌から帰路、お土産は高山雲霧茶。" },
    ],
    includes: ["長江クルーズ 4晚 バルコニー客室", "経絡調整 2回", "茶道と薬膳の全食", "三峡観光チケット"],
    bestSeason: "春秋 · 4-6月 / 9-11月",
  },
  "tcm-family": {
    title: "中医世家 · 名医跟診 4日間",
    subtitle: "TCM Heritage Journey",
    highlight: "国家級名中医に師事し、処方を写し、膏方を手作り。鍼灸、推拿、艾灸の外治法すべてを体験します。",
    tags: ["名医", "膏方", "鍼灸", "推拿"],
    itinerary: [
      { day: 1, title: "師事 · 処方写し", detail: "午前中は名医館で処方写し、午後は中医薬博物館見学。" },
      { day: 2, title: "鍼灸 · 艾灸", detail: "鍼灸と艾灸を実際に体験、名医が体質を解説。" },
      { day: 3, title: "膏方作り", detail: "師と共にオリジナル膏方を調剤、午後は薬膳。" },
      { day: 4, title: "再診 · 帰路", detail: "再診と体質レポートの解説、お土産：オーダーメイド膏方。" },
    ],
    includes: ["名医予約 2回", "膏方 1剤（薬材込み）", "鍼灸 / 艾灸 / 推拿 各1回", "膏方作り体験"],
    bestSeason: "通年",
  },
  "ancient-trail": {
    title: "金佛山 · 古道ハイキング 5日間",
    subtitle: "Ancient Trail Hiking",
    highlight: "金佛山の原生シャクナゲ林と古寺を歩き、アウトドアストレッチと高山薬膳で回復します。",
    tags: ["ハイキング", "薬膳", "古寺", "ストレッチ"],
    itinerary: [
      { day: 1, title: "入山 · ストレッチ", detail: "金仏山西坡へ入園、事前機能ストレッチと装備ガイダンス。" },
      { day: 2, title: "シャクナゲ林 · 朝課", detail: "朝のシャクナゲ林瞑想、午後は古寺禅茶。" },
      { day: 3, title: "山頂 · 雲海", detail: "金佛山山頂で雲海を観賞、高山薬膳ランチ。" },
      { day: 4, title: "薬草園", detail: "高山薬草園を訪問、草本足浴パックを DIY。" },
      { day: 5, title: "下山 · 帰路", detail: "緩やかに下山、スポーツリカバリー評価。" },
    ],
    includes: ["金佛山入園券＋ロープウェー", "プロ登山ガイド", "草本足浴パック DIY", "スポーツリカバリー評価 1回"],
    bestSeason: "5-6月 / 9-10月",
  },
  "ancient-town": {
    title: "龔灘 · 烏江古鎮静修 3日間",
    subtitle: "Riverside Stillness",
    highlight: "千年の龔灘古鎮の吊り楼閣で静修。夜は囲炉裏茶を楽しみ、朝は太極拳と書道です。",
    tags: ["古鎮", "書道", "囲炉裏茶", "太極拳"],
    itinerary: [
      { day: 1, title: "到着 · 囲炉裏茶", detail: "酉陽龔灘古鎮にチェックイン、夜は囲炉裏茶。" },
      { day: 2, title: "朝練 · 書道", detail: "朝の太極拳、午後は書道体験、夕方は烏江の散策。" },
      { day: 3, title: "帰路", detail: "朝の静坐、お土産：手作り茶と土家族の織錦。" },
    ],
    includes: ["古鎮吊り楼閣 2泊", "囲炉裏茶 2晚", "太極拳朝課 2回", "書道体験 1回"],
    bestSeason: "春秋",
  },
  "city-medical": {
    title: "重慶都市 · 美容医療リニューアル 3日間",
    subtitle: "Urban Medical Aesthetics",
    highlight: "三甲医院の皮膚管理とライト美容医療を、山城の夜景とミシュラン美食と共に。",
    tags: ["美容医療", "皮膚管理", "三甲", "都市"],
    itinerary: [
      { day: 1, title: "到着 · 相談", detail: "三甲医院で皮膚検査、専門医とのカウンセリングとプラン設計。" },
      { day: 2, title: "リニューアル", detail: "午前中はライト美容治療、夕方は洪崖洞の夜景。" },
      { day: 3, title: "経過観察 · 帰路", detail: "術後経過観察とケアキット、お土産：オーダーメイドスキンケアセット。" },
    ],
    includes: ["皮膚検査 1回", "ライト美容医療 1項目", "術後ケアキット", "終日専用車"],
    bestSeason: "通年",
  },
};

export default routes;
