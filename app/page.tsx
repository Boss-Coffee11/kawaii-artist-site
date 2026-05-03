"use client";
import React from "react";

const profile = {
  name: "鈴咲のの official site",
  catch: "わたしらしく、楽しく輝く音をあなたにお届け",
  bio: "同人音楽アーティスト“鈴咲のの”の活動報告サイトです。同人音楽イベントに参加したり即売会に参加したり、ゆるやかに活動中。",
  iconText: "A",
};

const snsLinks = [
  { label: "X / Twitter", href: "https://x.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
  { label: "BOOTH", href: "https://booth.pm/" },
  { label: "SoundCloud", href: "https://soundcloud.com/" },
];

const discography = [
  {
    title: "Sugar Drop Memory",
    year: "2026",
    text: "透明感のあるボーカルと淡いシンセが重なる、王道かわいいミニアルバム。",
    tag: "Mini Album",
  },
  {
    title: "Twinkle Soda",
    year: "2025",
    text: "弾けるようなポップサウンドと、少しだけ切ないメロディのシングル。",
    tag: "Single",
  },
  {
    title: "Cotton Candy Room",
    year: "2024",
    text: "初期の世界観を詰め込んだ、やさしい雰囲気の作品集。",
    tag: "EP",
  },
];

const goods = [
  {
    name: "アクリルキーホルダー",
    price: "¥800",
    text: "淡いピンクのリボンがポイントの定番グッズ。",
  },
  {
    name: "ステッカーセット",
    price: "¥500",
    text: "スマホやノートに貼りやすい、きらきらモチーフのステッカー。",
  },
  {
    name: "ミニトートバッグ",
    price: "¥1,800",
    text: "イベントにも普段使いにも合う、シンプルかわいいトート。",
  },
];

export default function Home() {
  return (
    <div>
      {/* ヒーローセクション */}
      <section id="top" className="hero section">
        <div className="heroText reveal">
          <p className="eyebrow">Official Website</p>
          <h1>{profile.catch}</h1>
          <p className="lead">{profile.bio}</p>
          <div className="heroButtons">
            <a className="button primary" href="#discography">作品を見る</a>
            <a className="button ghost" href="#sns">SNSへ</a>
          </div>
        </div>

        <div className="heroVisual reveal delay1">
          <div className="portraitCard">
            <div className="portraitInner">
              <span className="portraitInitial">{profile.iconText}</span>
              <span className="ribbon">♡</span>
            </div>
            <p>main visual</p>
          </div>
        </div>
      </section>

      {/* プロフィール */}
      <section id="profile" className="section profileSection reveal delay2">
        <div className="sectionTitle">
          <p>About</p>
          <h2>Profile</h2>
        </div>
        <div className="profileCard glassCard">
          <div className="miniIcon">{profile.iconText}</div>
          <div>
            <h3>{profile.name}</h3>
            <p>{profile.bio}</p>
          </div>
        </div>
      </section>

      {/* 作品紹介 */}
      <section id="discography" className="section reveal">
        <div className="sectionTitle">
          <p>Works</p>
          <h2>Discography</h2>
        </div>
        <div className="cardGrid">
          {discography.map((item) => (
            <article className="workCard" key={item.title}>
              <div className="jacket"><span>{item.tag}</span></div>
              <div className="cardBody">
                <p className="year">{item.year}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* グッズ */}
      <section id="goods" className="section reveal">
        <div className="sectionTitle">
          <p>Shop</p>
          <h2>Goods</h2>
        </div>
        <div className="goodsList">
          {goods.map((item) => (
            <article className="goodsCard" key={item.name}>
              <div className="goodsImage">✦</div>
              <div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </section>

      {/* SNS */}
      <section id="sns" className="section snsSection reveal">
        <div className="sectionTitle">
          <p>Follow</p>
          <h2>SNS Links</h2>
        </div>
        <div className="snsLinks">
          {snsLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}<span>↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}