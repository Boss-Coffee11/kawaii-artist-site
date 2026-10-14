"use client";
import React, { useEffect, useState } from "react";
import { Quicksand } from "next/font/google";
import "./goods.css";
import { EVENT, SETS, NEW_GOODS, PRESENT, OLD_CDS, SHOP_GOODS, Goods } from "./goods-data";

const quicksand = Quicksand({ weight: ["500", "700"], subsets: ["latin"], display: "swap", variable: "--font-quicksand" });

/* =========================================================
   Goods ページ
   グッズの追加・修正は goods-data.ts だけでOK（このファイルは触らなくて大丈夫）
   ========================================================= */

function Card({ g, dark, onZoom }: { g: Goods; dark?: boolean; onZoom: (g: Goods) => void }) {
  return (
    <article className={`gCard${dark ? " dark" : ""}${g.soldOut ? " sold" : ""}`}>
      <button className="gImg" onClick={() => onZoom(g)} aria-label={`${g.name} の画像を拡大`}>
        <img src={g.img} alt={g.name} loading="lazy" />
        {g.badge && <span className="gBadge">{g.badge}</span>}
        {g.soldOut && <span className="gSold">SOLD OUT</span>}
      </button>
      <div className="gBody">
        <h3>{g.name}</h3>
        {g.note && <p className="gNote">{g.note}</p>}
        <p className="gPrice">{g.price}</p>
        {g.sub && <p className="gSub">{g.sub}</p>}
        {g.booth && <a className="gBooth" href={g.booth} target="_blank" rel="noreferrer">BOOTHで見る ↗</a>}
      </div>
    </article>
  );
}

export default function GoodsPage() {
  const [zoom, setZoomRaw] = useState<Goods | null>(null);
  const [zoomIdx, setZoomIdx] = useState(0);
  const setZoom = (g: Goods | null) => { setZoomIdx(0); setZoomRaw(g); };
  const [tab, setTab] = useState<"cd" | "goods">("cd");
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setZoom(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  return (
    <div className={`goodsPage ${quicksand.variable}`}>
      <div className="sectionTitle">
        <p>Event &amp; Shop</p>
        <h2>Goods</h2>
      </div>

      {EVENT.show && (
        <section className="gNight">
          <div className="gEvent">
            <p className="gEventDate">{EVENT.date}　{EVENT.name}</p>
            <p className="gEventSpace"><span>{EVENT.circle}</span>{EVENT.space}</p>
            {EVENT.note && <p className="gEventNote">{EVENT.note}</p>}
            {EVENT.priceNote && <p className="gPriceNote">{EVENT.priceNote}</p>}
          </div>

          <h3 className="gHead"><span>SET</span>お得なセット</h3>
          <div className="gSets">
            {SETS.map((s) => (
              <article key={s.name} className="gSet">
                <button className="gImg" onClick={() => setZoom(s)} aria-label={`${s.name} の画像を拡大`}>
                  <img src={s.img} alt={s.name} loading="lazy" />
                  {s.badge && <span className="gBadge">{s.badge}</span>}
                </button>
                <div className="gBody">
                  <h3>{s.name}</h3>
                  <p className="gPrice big">{s.price}</p>
                  <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>

          <h3 className="gHead"><span>NEW</span>新作グッズ</h3>
          <div className="gGrid">
            {NEW_GOODS.map((g) => <Card key={g.name} g={g} dark onZoom={setZoom} />)}
          </div>

          {PRESENT && (
            <div className="gPresent">
              <button className="gImg" onClick={() => setZoom(PRESENT)} aria-label="画像を拡大">
                <img src={PRESENT.img} alt={PRESENT.name} loading="lazy" />
              </button>
              <div>
                <p className="gPresentK">PRESENT{PRESENT.badge ? ` ・ ${PRESENT.badge}` : ""}</p>
                <h3>{PRESENT.name}</h3>
                <p>{PRESENT.condition}</p>
              </div>
            </div>
          )}
        </section>
      )}

      <section className="gDay">
        <div className="gDayHead">
          <p className="gDayK">ALWAYS ON BOOTH</p>
          <h3>いつでも買えるもの</h3>
          <p className="gDayLead">BOOTH で通販中の作品です。価格は BOOTH での販売価格（税込）です</p>
        </div>

        <div className="gTabs" role="tablist" aria-label="種類で切り替え">
          <button role="tab" aria-selected={tab === "cd"} className={tab === "cd" ? "on" : ""} onClick={() => setTab("cd")}>
            CD<small>{OLD_CDS.length}</small>
          </button>
          <button role="tab" aria-selected={tab === "goods"} className={tab === "goods" ? "on" : ""} onClick={() => setTab("goods")}>
            グッズ<small>{SHOP_GOODS.length}</small>
          </button>
        </div>

        {tab === "cd" ? (
          <div className="gPanel" key="cd">
            <div className="gGrid cds">
              {OLD_CDS.map((g) => <Card key={g.name} g={g} onZoom={setZoom} />)}
            </div>
          </div>
        ) : (
          <div className="gPanel" key="goods">
            <div className="gShopList">
              {SHOP_GOODS.map((g) => (
                <article key={g.name} className="gFeature">
                  <button className="gImg" onClick={() => setZoom(g)} aria-label={`${g.name} の画像を拡大`}>
                    <img src={g.img} alt={g.name} loading="lazy" />
                  </button>
                  <div className="gFeatureBody">
                    {g.badge && <span className="gChip">{g.badge}</span>}
                    <h4>{g.name}</h4>
                    {g.note && <p className="gNote">{g.note}</p>}
                    {g.imgs && g.imgs.length > 1 && (
                      <div className="gThumbs">
                        {g.imgs.map((src, k) => (
                          <button key={src} onClick={() => { setZoomRaw(g); setZoomIdx(k); }} aria-label={`${k + 1}枚目を拡大`}>
                            <img src={src} alt="" loading="lazy" />
                          </button>
                        ))}
                      </div>
                    )}
                    <div className="gFeatureFoot">
                      <p className="gPrice">{g.price}</p>
                      {g.booth && <a className="gBoothBtn" href={g.booth} target="_blank" rel="noreferrer">BOOTHで買う ↗</a>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="gShop">
          <p>通販は BOOTH で受け付けています</p>
          <a href="https://etoilefleur.booth.pm/" target="_blank" rel="noreferrer" className="button primary">BOOTH を開く ↗</a>
        </div>
      </section>

      {zoom && (
        <div className="gZoom" onClick={() => setZoom(null)} role="dialog" aria-modal="true" aria-label={zoom.name}>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={(zoom.imgs && zoom.imgs[zoomIdx]) || zoom.img} alt={zoom.name} />
            {zoom.imgs && zoom.imgs.length > 1 && (
              <div className="gZoomThumbs">
                {zoom.imgs.map((src, k) => (
                  <button key={src} className={k === zoomIdx ? "on" : ""} onClick={() => setZoomIdx(k)} aria-label={`${k + 1}枚目`}>
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
            )}
            <figcaption>{zoom.name}　<b>{zoom.price}</b></figcaption>
            <button className="gZoomX" onClick={() => setZoom(null)} aria-label="閉じる">×</button>
          </figure>
        </div>
      )}
    </div>
  );
}
