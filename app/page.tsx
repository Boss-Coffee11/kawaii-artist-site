"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Quicksand } from "next/font/google";
import { FadeIn } from "../components/FadeIn";
import { NightSky } from "../components/NightSky";
import { WORKS } from "./discography/works-data";
import { NEWS } from "./news/news-data";
import "./home.css";

const quicksand = Quicksand({ weight: ["500", "700"], subsets: ["latin"], display: "swap", variable: "--font-quicksand" });

/* =========================================================
   トップページ
   ・新譜や作品の情報は app/discography/works-data.ts から自動で読み込みます
   ・お知らせは app/news/news-data.ts から自動で読み込みます
   ・夜空ジャックは、works-data.ts の jackUntil の日時を過ぎると自動で終わります
   ========================================================= */

const profile = {
  name: "鈴咲のの official site",
  catch: (
    <>
      これからも<br />
      私らしく輝いて<br />
      歌いたい
    </>
  ),
  bio: "同人音楽アーティスト“鈴咲のの”の活動報告サイトです。同人音楽イベントに参加したり、Twitchでのゲーム配信など、ゆるやかに活動中。",
  mainVisual: "/Images/nono_main.jpg",
  iconImage: "/Images/nono_icon.jpg",
};

const snsLinks = [
  { label: "X", href: "https://x.com/_suzukinono" },
  { label: "YouTube", href: "https://www.youtube.com/@_suzukinono" },
  { label: "Twitch", href: "https://www.twitch.tv/suzukinono6" },
  { label: "BOOTH", href: "https://etoilefleur.booth.pm/" },
  { label: "FANBOX", href: "https://nonochan.fanbox.cc/" },
];

const workLink = (id: string) => `/discography?w=${id}`;

/* ---------- カウントダウン ---------- */
function useNow(ms = 30000) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), ms);
    return () => clearInterval(id);
  }, [ms]);
  return now;
}

function Countdown({ releaseAt, now }: { releaseAt: string; now: number | null }) {
  if (now === null) return <div className="nhCount" style={{ visibility: "hidden" }}><span><b>00</b><em>DAYS</em></span></div>;
  const rel = new Date(releaseAt).getTime();
  const diff = rel - now;
  if (diff <= 0) {
    const sameDay = now - rel < 864e5;
    return <p className="nhNow">{sameDay ? "本日頒布！" : "NOW ON SALE"}</p>;
  }
  const d = Math.floor(diff / 864e5), h = Math.floor((diff % 864e5) / 36e5), m = Math.floor((diff % 36e5) / 6e4);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="nhCount" aria-label={`リリースまであと${d}日${h}時間${m}分`}>
      <span><b>{pad(d)}</b><em>DAYS</em></span>
      <span><b>{pad(h)}</b><em>HRS</em></span>
      <span><b>{pad(m)}</b><em>MIN</em></span>
    </div>
  );
}

/* ---------- 夜空ジャック（告知期間だけ） ---------- */
function NightHero({ w, now }: { w: any; now: number | null }) {
  return (
    <section className="nightHero">
      <NightSky />
      <div className="nhHorizon" aria-hidden="true" />
      <div className="nhInner">
        <Link href={workLink(w.id)} className="nhJacket" aria-label={`${w.title} の詳細を見る`}>
          <img src={w.img} alt={`${w.title} ジャケット`} />
        </Link>
        <div className="nhText">
          <p className="nhEyebrow">NEW {w.type.toUpperCase()} ・ {w.date}</p>
          <h1 className="nhTitle">{w.title}</h1>
          {w.catch && <p className="nhCatch">{w.catch}</p>}
          {(w.event || w.price) && <p className="nhEvent">{[w.event, w.price].filter(Boolean).join("　/　")}</p>}
          {w.releaseAt && <Countdown releaseAt={w.releaseAt} now={now} />}
          <div className="nhButtons">
            <Link href={workLink(w.id)} className="nhBtn primary">詳しく見る</Link>
            {w.youtube && (
              <a href={`https://www.youtube.com/watch?v=${w.youtube}`} target="_blank" rel="noreferrer" className="nhBtn ghost">クロスフェードを聴く ↗</a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- いつものヒーロー（夜空ジャックが終わったら） ---------- */
function DayHero() {
  return (
    <section id="top" className="hero section">
      <div className="heroText reveal">
        <p className="eyebrow">Official Website</p>
        <h1>{profile.catch}</h1>
        <p className="lead">{profile.bio}</p>
        <div className="heroButtons">
          <Link className="button primary puni" href="/discography">作品を見る</Link>
          <Link className="button ghost puni" href="/news">お知らせ</Link>
        </div>
      </div>
      <div className="heroVisual reveal delay1">
        <div className="portraitCard puni">
          <div className="portraitInner" style={{
            backgroundImage: `url(${profile.mainVisual})`, backgroundSize: "cover", backgroundPosition: "center",
            backgroundColor: "#ffd1dc", boxShadow: "0 0 20px rgba(255,255,255,0.8), inset 0 0 15px rgba(255,255,255,0.5)",
            border: "5px solid #fff",
          }}>
            <span className="ribbon" style={{ fontSize: "1.5rem", filter: "drop-shadow(0 0 5px white)" }}>♡</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const now = useNow();
  const featured = WORKS.find((w) => w.isNew);
  // ビルド時は夜空で表示し、ブラウザで日時を確かめて期間外ならいつものトップに切り替えます
  const jack = !!featured?.jackUntil && (now === null || now < new Date(featured.jackUntil).getTime());
  const latest = WORKS.slice(0, 4);
  const news = NEWS.slice(0, 3);

  return (
    <div className={`home ${quicksand.variable}`}>
      {jack ? <NightHero w={featured} now={now} /> : <DayHero />}

      {/* お知らせ */}
      <section className="section homeNews">
        <div className="sectionTitle">
          <p>Information</p>
          <h2>News</h2>
        </div>
        <ul className="homeNewsList">
          {news.map((n, i) => (
            <li key={i}>
              {n.link ? (
                n.link.startsWith("http")
                  ? <a href={n.link} target="_blank" rel="noreferrer"><time>{n.date}</time><span>{n.title}</span></a>
                  : <Link href={n.link}><time>{n.date}</time><span>{n.title}</span></Link>
              ) : (
                <div><time>{n.date}</time><span>{n.title}</span></div>
              )}
            </li>
          ))}
        </ul>
        <div className="homeMore"><Link href="/news" className="button ghost">お知らせ一覧</Link></div>
      </section>

      {/* 最新の作品4つ */}
      <section className="section homeWorks">
        <div className="sectionTitle">
          <p>Works</p>
          <h2>Discography</h2>
        </div>
        <div className="homeWorksGrid">
          {latest.map((w, i) => (
            <FadeIn key={w.id} delay={`${i * 0.12}s`}>
              <Link href={workLink(w.id)} className={`homeWork${w.isNew ? " isNew" : ""}`}>
                <span className="homeWorkJk">
                  <img src={w.img} alt={`${w.title} ジャケット`} loading="lazy" />
                  {w.isNew && <span className="homeWorkNew">NEW</span>}
                </span>
                <span className="homeWorkType">{w.type}</span>
                <span className="homeWorkTitle">{w.title}</span>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="homeMore"><Link href="/discography" className="button ghost">すべての作品を見る</Link></div>
      </section>

      {/* プロフィール */}
      <section id="profile" className="section profileSection">
        <div className="sectionTitle">
          <p>About</p>
          <h2>Profile</h2>
        </div>
        <div className="profileCard glassCard">
          <div className="miniIcon" style={{
            backgroundImage: `url(${profile.iconImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "#ffd1dc",
          }} />
          <div>
            <h3>鈴咲のの（すずき のの）</h3>
            <p>同人アイドルアーティスト。<br />ドジは多いけど優しく見守ってね！</p>
            <Link href="/profile" className="homeProfileLink">詳細プロフィール・活動歴はこちら →</Link>
          </div>
        </div>
      </section>

      {/* SNS（1行にまとめたもの） */}
      <section className="section homeSns" aria-label="SNS & Links">
        <p className="homeSnsLabel">Follow &amp; Links</p>
        <nav className="homeSnsRow">
          {snsLinks.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </nav>
      </section>

      <footer className="footer">
        <p>© 2026 {profile.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
