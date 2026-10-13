/* =========================================================
   作品データ — ここだけ編集すれば一覧とポップアップが更新されます
   ---------------------------------------------------------
   ・新しい作品は配列の「いちばん上」に足す（新しい順に並びます）
   ・isNew: true を付けた作品だけ、クリック時に夜空の演出が出ます
   ・空欄（"" や []）の項目はポップアップに表示されません
   ・画像は public/Images/ に入れて "/Images/ファイル名.jpg" と書きます
   ========================================================= */
export const WORKS: any[] = [
  {
    id: "luminous",
    title: "Luminous",
    type: "Single",
    date: "2026.10.25",
    releaseAt: "2026-10-25T00:00:00+09:00",
    isNew: true,
    img: "/Images/Luminous.jpg",          // ※告知動画から切り出した仮画像。正式なジャケット画像に差し替えてください
    catch: "2nd single",
    desc: "",
    event: "第二展示場 え-18a",           // 頒布スペース
    price: "イベント価格 ¥1,000",
    booth: "",                           // BOOTHページができたらURLを入れる
    youtube: "",
    tracks: [
      { t: "惺解", c: "music, lyric ／ 瀬名水紀" },
      { t: "星映", c: "music, lyric ／ aon" },
      { t: "惺解 (instrumental)", c: "music ／ 瀬名水紀" },
      { t: "星映 (instrumental)", c: "music ／ aon" }
    ],
    guests: []
  },
  {
    id: "inmydream",
    title: "In my Dream",
    type: "Album",
    date: "2025.10.25",
    img: "/Images/InMyDream.jpg",
    desc: "ゲストボーカルを多数迎えて制作した、全11曲（うち新曲1曲）のフルアルバム。",
    booth: "https://etoilefleur.booth.pm/items/7488504",
    youtube: "OKIdrIeujcY",
    tracks: [
      "Bloom light", "絶対幼女☆ののちゃんです！", "咫尺天涯で踊りましょ→", "おつきみダンス",
      "Baby Blue Eyes", "桜色ピュアメモリー", "SecretMelody", "One Secret",
      "Own mirage", "ワンダーランドリサイタル", "In my dream"
    ],
    guests: [
      { name: "春瀬愛羅", x: "https://x.com/haruai_03" },
      { name: "ミドリノハサミ", x: "https://x.com/midorihasami" },
      { name: "恋摘もなか", x: "https://x.com/mona_ka_san" },
      { name: "雨汰。", x: "https://x.com/_uta3" },
      { name: "久野兎", x: "https://x.com/poqu_" },
      { name: "きゃらめる", x: "https://x.com/caramel_715" },
      { name: "ひなたいお", x: "https://x.com/empty073g" },
      { name: "咲良ゆの", x: "https://x.com/yuno_singer" }
    ]
  },
  {
    id: "fuzzy", title: "Fuzzy navel", type: "Single", date: "",
    img: "/Images/Fuzzy.jpg", desc: "",
    booth: "https://etoilefleur.booth.pm/items/6291877", youtube: "", tracks: [], guests: []
  },
  {
    id: "ownmirage", title: "Ownmirage", type: "Album", date: "",
    img: "/Images/Ownmirage.jpg", desc: "",
    booth: "https://etoilefleur.booth.pm/items/6179402", youtube: "", tracks: [], guests: []
  },
  {
    id: "siren", title: "恋のサイレン♡ハート feat.雨汰。", type: "Single", date: "",
    img: "/Images/heart.jpg", desc: "",
    booth: "https://etoilefleur.booth.pm/items/5802272", youtube: "", tracks: [],
    guests: [{ name: "雨汰。", x: "https://x.com/_uta3" }]
  },
  {
    id: "cherry", title: "桜色ピュアメモリー", type: "miniAlbum", date: "",
    img: "/Images/Cherry.jpg", desc: "",
    booth: "https://etoilefleur.booth.pm/items/5652634", youtube: "", tracks: [], guests: []
  },
  {
    id: "bbe", title: "Baby Blue Eyes", type: "miniAlbum", date: "",
    img: "/Images/BBE.jpg", desc: "",
    booth: "https://etoilefleur.booth.pm/items/4674411", youtube: "", tracks: [], guests: []
  },
  {
    id: "omaera", title: "おまえら、こ～ゆ～のがスキなんだろ？", type: "miniAlbum", date: "",
    img: "/Images/Omaera.jpg", desc: "",
    booth: "https://etoilefleur.booth.pm/items/4348973", youtube: "", tracks: [], guests: []
  },
  {
    id: "dreamin", title: "Dreamin' Coordinate", type: "Album", date: "",
    img: "/Images/Dreamin.jpg", desc: "",
    booth: "https://etoilefleur.booth.pm/items/3372514", youtube: "", tracks: [], guests: []
  }
];
