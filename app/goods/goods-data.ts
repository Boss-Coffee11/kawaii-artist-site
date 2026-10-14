/* =========================================================
   グッズデータ — ここだけ編集すれば Goods ページが更新されます
   ---------------------------------------------------------
   ・画像は public/Images/goods/ に入れて "/Images/goods/ファイル名.jpg" と書きます
   ・soldOut: true を付けると「SOLD OUT」表示になります
   ・booth に URL を入れると「BOOTHで見る」ボタンが出ます
   ========================================================= */

// イベントの情報（ページ上部）。イベントがない時期は show: false に
export const EVENT = {
  show: true,
  name: "M3 2026秋",
  date: "2026.10.25",
  space: "第二展示場 え-18a",
  circle: "EtoileFleur",
  note: "旧譜も会場限定でお安くなっています。ご来場お待ちしています！",
  priceNote: "※価格はすべてM3イベント会場での価格です。BOOTHでの販売価格とは異なります",  // 価格の注釈（消すと非表示）
};

export type Goods = {
  name: string;
  price: string;
  img: string;
  note?: string;      // サイズや内容などの小さな説明
  badge?: string;     // "NEW" / "限定15枚" など
  soldOut?: boolean;
  booth?: string;
  imgs?: string[];    // 拡大表示で切り替える画像（なくてもOK）
};

// お得なセット
export const SETS: (Goods & { items: string[] })[] = [
  {
    name: "新譜セット",
    price: "¥2,500",
    img: "/Images/Luminous.jpg",
    badge: "NEW",
    note: "新譜＋グッズ2点",
    items: ["新譜「Luminous」", "スマホキーホルダー", "クリアカード"],
  },
  {
    name: "新旧譜セット",
    price: "¥3,000",
    img: "/Images/goods/paperbag.jpg",
    badge: "NEW",
    note: "新譜＋旧譜＋紙袋",
    items: ["新譜「Luminous」", "旧譜「In my Dream」", "紙袋（なくなり次第終了）"],
  },
];

// 新作グッズ
export const NEW_GOODS: Goods[] = [
  { name: "新譜「Luminous」", price: "¥1,000", img: "/Images/Luminous.jpg", badge: "NEW", note: "4曲入（内 inst 2曲）／カード付2枚セット ¥2,000", booth: "https://etoilefleur.booth.pm/items/8970667" },
  { name: "B2タペストリー", price: "¥4,000", img: "/Images/goods/tapestry.jpg", badge: "NEW", note: "515mm × 778mm" },
  { name: "おた活トートバッグ", price: "¥2,000", img: "/Images/goods/totebag.jpg", badge: "NEW" },
  { name: "アクリルスタンド", price: "¥1,500", img: "/Images/goods/acrylicstand.jpg", badge: "NEW" },
  { name: "スマホキーホルダー", price: "セット特典", img: "/Images/goods/keyholder.jpg", note: "新譜セットに入っています" },
  { name: "クリアカード", price: "セット特典", img: "/Images/goods/clearcard.jpg", note: "新譜セットに入っています" },
];

// プレゼント（無ければ null に）
export const PRESENT: (Goods & { condition: string }) | null = {
  name: "サイン入りトレカード",
  price: "プレゼント",
  img: "/Images/goods/tradingcard.jpg",
  badge: "限定15枚",
  condition: "FANBOX 加入者 ＋ CD 2枚購入の方にプレゼント。なくなり次第終了です。",
};

// 旧譜（会場価格）
export const OLD_CDS: Goods[] = [
  { name: "In my Dream", price: "¥2,000", img: "/Images/InMyDream.jpg", note: "トリビュートアルバム 全11曲" },
  { name: "Dreamin' Coordinate", price: "¥1,000", img: "/Images/Dreamin.jpg", badge: "200円引き", note: "1st album" },
  { name: "おまえら、こ〜ゆ〜のがスキなんだろ？", price: "¥1,500", img: "/Images/Omaera.jpg", note: "2nd album" },
  { name: "Baby Blue Eyes", price: "¥1,500", img: "/Images/BBE.jpg", note: "3rd album" },
  { name: "桜色ピュアメモリー", price: "¥1,500", img: "/Images/Cherry.jpg", badge: "500円引き", note: "4th album" },
  { name: "Ownmirage", price: "¥1,000", img: "/Images/Ownmirage.jpg", badge: "1,000円引き", note: "5th album" },
];

// いつでも買えるグッズ（BOOTH で恒常販売）
// imgs に複数入れると、拡大表示で切り替えられます
export const SHOP_GOODS: Goods[] = [
  {
    name: "ねこのの＆ロゴステッカー",
    price: "¥800",
    img: "/Images/goods/sticker-set.jpg",
    imgs: ["/Images/goods/sticker-set.jpg", "/Images/goods/sticker-neko.jpg", "/Images/goods/sticker-logo.jpg"],
    badge: "2種セット",
    note: "ねこののステッカー＋In my Dream ロゴステッカー／各約8cm",
    booth: "https://etoilefleur.booth.pm/items/7716258",
  },
];
