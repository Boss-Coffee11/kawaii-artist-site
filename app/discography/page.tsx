"use client";
import React, { useEffect, useRef } from "react";
import { Quicksand } from "next/font/google";
import "./discography.css";
import { WORKS } from "./works-data";
import { initDiscography } from "./discography-engine";

// 英字の見出しに使うフォント（試作と同じ Quicksand）
const quicksand = Quicksand({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

/* =========================================================
   Discography ページ
   作品の追加・修正は works-data.ts だけでOK（このファイルは触らなくて大丈夫）
   ========================================================= */
export default function DiscographyPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const cleanup = initDiscography(rootRef.current, WORKS);
    return cleanup;
  }, []);

  return (
    <div ref={rootRef} className={`disco ${quicksand.variable}`}>
      {/* 背景のふわふわ光 */}
      <div className="bg-sparkles" aria-hidden="true"></div>

      <div className="page" data-screen-label="Discography">
        <div className="page-head">
          <p className="eyebrow">Works</p>
          <h1>Discography</h1>
        </div>

        <div className="filters" id="filters" role="tablist" aria-label="作品の種類で絞り込み">
          <button className="filter is-active" data-f="all">#All</button>
          <button className="filter" data-f="Album">#Album</button>
          <button className="filter" data-f="miniAlbum">#miniAlbum</button>
          <button className="filter" data-f="Single">#Single</button>
        </div>

        <ul className="works" id="works"></ul>
      </div>

      {/* ============ 通常の詳細ポップアップ ============ */}
      <div className="dlg" id="dlg" aria-hidden="true">
        <div className="dlg-scrim" data-close></div>
        <article className="dlg-card" role="dialog" aria-modal="true" aria-labelledby="dTitle">
          <button className="dlg-x" data-close aria-label="閉じる"><span></span><span></span></button>
          <div className="dlg-grid">
            <figure className="dlg-jacket"><img id="dImg" alt="" /></figure>
            <div className="dlg-info">
              <p className="dlg-type" id="dType"></p>
              <h2 className="dlg-title" id="dTitle"></h2>
              <p className="dlg-date" id="dDate"></p>
              <p className="dlg-catch" id="dCatch"></p>
              <p className="dlg-desc" id="dDesc"></p>
              <p className="dlg-event" id="dEvent"></p>
              <div className="dlg-actions">
                <a className="btn-booth" id="dBooth" target="_blank" rel="noopener">BOOTHで購入する</a>
                <span className="dlg-count" id="dCount"></span>
              </div>
              <section className="dlg-sec" id="dTrackSec">
                <h3>Track List</h3>
                <ol id="dTracks"></ol>
              </section>
              <section className="dlg-sec" id="dGuestSec">
                <h3 id="dGuestLabel">Guest Vocal</h3>
                <ul className="guests" id="dGuests"></ul>
              </section>
              <section className="dlg-sec" id="dYtSec">
                <h3>Crossfade</h3>
                <div className="yt" id="dYt"></div>
              </section>
            </div>
          </div>
          <div className="dlg-nav">
            <button id="dPrev" aria-label="前の作品">‹ <span>PREV</span></button>
            <button id="dNext" aria-label="次の作品"><span>NEXT</span> ›</button>
          </div>
        </article>
      </div>

      {/* ============ 新譜：夜空の演出 ============ */}
      <div className="night" id="night" aria-hidden="true">
        <canvas id="sky"></canvas>
        <div className="night-flash" id="flash"></div>
        <p className="night-copy" id="nightCopy"><span>the brightest star tonight</span></p>
        <button className="night-skip" id="skip">SKIP</button>
      </div>
    </div>
  );
}
