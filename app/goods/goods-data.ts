/* =========================================================
   グッズデータ — ここだけ編集すれば Goods ページが更新されます
   ---------------------------------------------------------
   ・画像は public/Images/ に入れて "/Images/ファイル名.jpg" と書きます
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
  sub?: string;       // 価格の下に小さく出す補足（例：DL版 ¥1,500）
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
    img: "/Images/paperbag.jpg",
    badge: "NEW",
    note: "新譜＋旧譜＋紙袋",
    items: ["新譜「Luminous」", "旧譜「In my Dream」", "紙袋（なくなり次第終了）"],
  },
];

// 新作グッズ
export const NEW_GOODS: Goods[] = [
  { name: "新譜「Luminous」", price: "¥1,000", img: "/Images/Luminous.jpg", badge: "NEW", note: "4曲入（内 inst 2曲）／カード付2枚セット ¥2,000", booth: "https://etoilefleur.booth.pm/items/8970667" },
  { name: "B2タペストリー", price: "¥4,000", img: "/Images/tapestry.jpg", badge: "NEW", note: "515mm × 778mm" },
  { name: "おた活トートバッグ", price: "¥2,000", img: "/Images/totebag.jpg", badge: "NEW" },
  { name: "アクリルスタンド", price: "¥1,500", img: "/Images/acrylicstand.jpg", badge: "NEW" },
  { name: "スマホキーホルダー", price: "セット特典", img: "/Images/keyholder.jpg", note: "新譜セットに入っています" },
  { name: "クリアカード", price: "セット特典", img: "/Images/clearcard.jpg", note: "新譜セットに入っています" },
];

// プレゼント（無ければ null に）
export const PRESENT: (Goods & { condition: string }) | null = {
  name: "サイン入りトレカード",
  price: "プレゼント",
  img: "/Images/tradingcard.jpg",
  badge: "限定15枚",
  condition: "FANBOX 加入者 ＋ CD 2枚購入の方にプレゼント。なくなり次第終了です。",
};

// CD（BOOTH での販売価格）—「いつでも買えるもの」の CD タブに出ます
export const OLD_CDS: Goods[] = [
  { name: "In my Dream", price: "CD ¥3,000", sub: "DL版 ¥2,500", img: "/Images/InMyDream.jpg", note: "6th album", booth: "https://etoilefleur.booth.pm/items/7488504" },
  { name: "Ownmirage", price: "CD ¥2,300", sub: "DL版 ¥2,000", img: "/Images/Ownmirage.jpg", note: "5th mini album", booth: "https://etoilefleur.booth.pm/items/6179402" },
  { name: "桜色ピュアメモリー", price: "CD ¥2,300", sub: "DL版 ¥2,000", img: "/Images/Cherry.jpg", note: "4th mini album", booth: "https://etoilefleur.booth.pm/items/5652634" },
  { name: "Baby Blue Eyes", price: "CD ¥1,800", sub: "DL版 ¥1,500", img: "/Images/BBE.jpg", note: "3rd mini album", booth: "https://etoilefleur.booth.pm/items/4674411" },
  { name: "おまえら、こ〜ゆ〜のがスキなんだろ？", price: "CD ¥1,800", sub: "DL版 ¥1,500", img: "/Images/Omaera.jpg", note: "2nd mini album", booth: "https://etoilefleur.booth.pm/items/4348973" },
  { name: "Dreamin' Coordinate", price: "CD ¥1,500", sub: "DL版 ¥1,200", img: "/Images/Dreamin.jpg", note: "1st album", booth: "https://etoilefleur.booth.pm/items/3372514" },
];

// いつでも買えるグッズ（BOOTH で恒常販売）
// imgs に複数入れると、拡大表示で切り替えられます
export const SHOP_GOODS: Goods[] = [
  {
    name: "ねこのの＆ロゴステッカー",
    price: "¥800",
    img: "/Images/sticker-set.jpg",
    imgs: ["/Images/sticker-set.jpg", "/Images/sticker-neko.jpg", "/Images/sticker-logo.jpg"],
    badge: "2種セット",
    note: "ねこののステッカー＋In my Dream ロゴステッカー／各約8cm",
    booth: "https://etoilefleur.booth.pm/items/7716258",
  },
];
