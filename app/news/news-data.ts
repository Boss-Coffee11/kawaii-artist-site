/* =========================================================
   お知らせデータ — ここだけ編集すれば News ページとトップが更新されます
   ---------------------------------------------------------
   ・新しいお知らせは配列の「いちばん上」に足す
   ・トップページには上から3件だけ表示されます
   ・link は空欄 "" でもOK（入れると「詳しく見る」が出ます）
     サイト内なら "/discography?w=作品ID"、外部なら "https://..."
   ========================================================= */
export type NewsItem = {
  date: string;   // "2026.10.14" の形で
  title: string;
  text?: string;  // 2〜3行の補足（なくてもOK）
  link?: string;
};

export const NEWS: NewsItem[] = [
  {
    date: "2026.10.14",
    title: "2nd single「Luminous」のクロスフェード動画を公開しました",
    text: "10/25 頒布の新譜「Luminous」の試聴動画です。第二展示場 え-18a にてお待ちしています。",
    link: "/discography?w=luminous",
  },
  {
    date: "2026.10.14",
    title: "公式サイトをリニューアルしました",
    text: "Discography で作品ごとの詳細が見られるようになりました。お知らせはこの News ページでお届けします。",
    link: "/discography",
  },
  {
    date: "2025.10.25",
    title: "フルアルバム「In my Dream」を頒布しました",
    text: "ゲストボーカルを多数迎えた全11曲のフルアルバム。BOOTH でも頒布中です。",
    link: "/discography?w=inmydream",
  },
];
