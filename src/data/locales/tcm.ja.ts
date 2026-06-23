import type { LocalizedTcmTherapy, LocalizedTcmDoctor, LocalizedSolarTerm } from "../tcm";

const therapies: Record<string, LocalizedTcmTherapy> = {
  acupuncture: { name: "鍼灸", en: "Acupuncture", desc: "経絡穴位に細い鍼を刺し、気血を調え経絡を通じさせます。", benefit: "痛み緩和 · 睡眠改善 · 内分泌調整" },
  cupping: { name: "吸い玉", en: "Cupping", desc: "負圧で皮膚に吸い付け、血行促進と寒気湿気を追います。", benefit: "筋肉緩和 · デトックス · 緊張緩和" },
  moxibustion: { name: "お灸", en: "Moxibustion", desc: "艾を燃やして穴位を温め、陽気を補い抵抗力を高めます。", benefit: "子宮温め · 免疫向上 · 脾胃調整" },
  tuina: { name: "推拿", en: "Tuina", desc: "手技で経絡穴位と筋骨に働きかけ、調整します。", benefit: "肩こり緩和 · 姿勢改善 · 血行促進" },
  "herbal-bath": { name: "薬草風呂", en: "Herbal Bath", desc: "薬草煎じ汁をお風呂に入れ、皮膚から全身に吸収させます。", benefit: "美肌 · 安眠 · 経絡緩和" },
  "diet-therapy": { name: "薬膳", en: "Dietary Therapy", desc: "薬と食は同源、体質に合わせて食材を組み合わせます。", benefit: "脾胃健活 · 気血栄養 · 未病予防" },
};

const doctors: Record<string, LocalizedTcmDoctor> = {
  "dr-wang": { name: "王済世", title: "主任中医師 · 全国名中医", specialty: "内科雑症、脾胃病、サブヘルス調整", schedule: "月 / 水 / 金 午前 · 予約制" },
  "dr-li": { name: "李芳苓", title: "副主任中医師 · 鍼灸博士", specialty: "鍼灸鎮痛、不眠不安、婦人科調整", schedule: "火 / 木 / 土 終日 · 予約制" },
  "dr-chen": { name: "陳明堂", title: "主任中医師 · 推拿伝承人", specialty: "頸肩腰脚痛、スポーツリカバリー、脊柱調整", schedule: "月 / 木 / 土 午後 · 予約制" },
  "dr-zhang": { name: "張少白", title: "主治中医師 · 中医美容", specialty: "体質判定、薬膳食療、肌調整", schedule: "水 / 金 / 日 終日 · 予約制" },
};

const solarTerms: Record<string, LocalizedSolarTerm> = {
  lichun: { name: "立春", monthLabel: "2月", tip: "春の陽気が生じ、肝を疎らかにし、辛温の食べ物を。", herbs: ["柴胡", "薔薇", "枸杞"] },
  yushui: { name: "雨水", monthLabel: "2月", tip: "湿気が増し、脾を強め湿を取り、生冷膩滞を避ける。", herbs: ["ハトムギ", "茯苓", "山薬"] },
  jingzhe: { name: "啓蟄", monthLabel: "3月", tip: "春雷が虫を起こし、肺を潤し火を下げ、アレルギー予防。", herbs: ["百合", "雪梨", "菊花"] },
  chunfen: { name: "春分", monthLabel: "3月", tip: "陰陽バランス、肝脾を調和させ、早寝早起き。", herbs: ["枸杞", "紅棗", "山薬"] },
  qingming: { name: "清明", monthLabel: "4月", tip: "肝を清め目を明るく、散歩と明前茶。", herbs: ["菊花", "決明子", "緑茶"] },
  guyu: { name: "穀雨", monthLabel: "4月", tip: "雨が穀を潤し、血を養い脾を強め、湿気に注意。", herbs: ["小豆", "ハトムギ", "茨実"] },
  lixia: { name: "立夏", monthLabel: "5月", tip: "夏の気が始まり、心を養い陽を守り、淡白な食事。", herbs: ["蓮子", "麦門冬", "緑豆"] },
  xiaoman: { name: "小満", monthLabel: "5月", tip: "湿熱が交じり、清熱利湿、冷たいものを控える。", herbs: ["冬瓜", "蓮葉", "小豆"] },
  mangzhong: { name: "芒種", monthLabel: "6月", tip: "忙しい農作期、津液を生じ渇きを止め、心を養う。", herbs: ["烏梅", "山楂", "甘草"] },
  xiazhi: { name: "夏至", monthLabel: "6月", tip: "陽が極まり陰が生じ、遅寝早起き、昼寝。", herbs: ["西洋人参", "石斛", "緑豆"] },
  xiaoshu: { name: "小暑", monthLabel: "7月", tip: "暑気が盛んに、清淡な食事で暑を除き、緑豆湯。", herbs: ["緑豆", "金銀花", "薄荷"] },
  dashu: { name: "大暑", monthLabel: "7月", tip: "暑湿が最も重く、脾を強め湿を取り、冬病を夏治。", herbs: ["藿香", "佩蘭", "生姜"] },
};

export default { therapies, doctors, solarTerms };
