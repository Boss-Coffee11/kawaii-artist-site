"use client";
import React from "react";

const profile = {
  name: "鈴咲のの official site",
  catch: "わたしらしく、楽しく輝く音をあなたにお届け",
  bio: "同人音楽アーティスト“鈴咲のの”の活動報告サイトです。同人音楽イベントに参加したり、Twitchでのゲーム配信など、ゆるやかに活動中。",
  mainVisual: "/Images/nono_main.jpg", 
  iconImage: "/Images/nono_icon.jpg",
};

const snsLinks = [
  { label: "X / Twitter", href: "https://x.com/_suzukinono", color: "#000" },
  { label: "YouTube", href: "https://www.youtube.com/@_suzukinono", color: "#FF0000" },
  { label: "Twitch", href: "https://www.twitch.tv/suzukinono6", color: "#9146FF" }, // ★追加
  { label: "BOOTH", href: "https://etoilefleur.booth.pm/", color: "#3d95ff" },
  { label: "FANBOX", href: "https://nonochan.fanbox.cc/", color: "#fca311" },
];

// Discographyページと共通のデータ
const newRelease = {
  title: "In my Dream",
  year: "2025",
  jacketImage: "/Images/InMyDream.jpg",
  text: "2025年秋M3新譜。ゲストボーカルを多数迎えた、夢の中にいるような全11曲のフルアルバム。",
  tag: "Album",
  booth: "https://etoilefleur.booth.pm/items/7488504"
};

const archiveWorks = [
  { title: "Dreamin' Coordinate", image: "/Images/Dreamin.jpg", tag: "Album" },
  { title: "おまえら、こ～ゆ～のがスキなんだろ？", image: "/Images/Omaera.jpg", tag: "miniAlbum" },
  { title: "Baby Blue Eyes", image: "/Images/BBE.jpg", tag: "miniAlbum" },
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
            <a className="button primary" href="/discography">作品を見る</a>
            <a className="button ghost" href="https://www.twitch.tv/suzukinono6" target="_blank" rel="noreferrer">Twitch配信を見る 🎮</a>
          </div>
        </div>

        <div className="heroVisual reveal delay1">
          <div className="portraitCard">
            <div className="portraitInner" style={{
              backgroundImage: `url(${profile.mainVisual})`,
              backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#ffd1dc'
            }}>
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
          <div className="miniIcon" style={{
            backgroundImage: `url(${profile.iconImage})`,
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#ffd1dc'
          }} />
          <div>
            <h3>{profile.name}</h3>
            <p>{profile.bio}</p>
            <a href="/profile" style={{ color: '#ff82b2', fontSize: '0.8rem', textDecoration: 'none', marginTop: '10px', display: 'inline-block' }}>詳細プロフィール・活動歴はこちら →</a>
          </div>
        </div>
      </section>

      {/* 作品紹介（最新のデータ構造を反映） */}
      <section id="discography" className="section reveal">
        <div className="sectionTitle">
          <p>Works</p>
          <h2>Discography</h2>
        </div>
        
        {/* 新譜ピックアップ */}
        <div className="workCard" style={{ 
          display: 'flex', gap: '30px', flexWrap: 'wrap', 
          backgroundColor: 'rgba(255,255,255,0.4)', padding: '25px', borderRadius: '30px',
          marginBottom: '30px', backdropFilter: 'blur(10px)'
        }}>
          <div style={{ 
            width: '200px', aspectRatio: '1/1', borderRadius: '20px',
            backgroundImage: `url(${newRelease.jacketImage})`, backgroundSize: 'cover',
            backgroundColor: '#ddd'
          }} />
          <div style={{ flex: 1, minWidth: '280px' }}>
            <span style={{ fontSize: '0.75rem', color: '#ff82b2', fontWeight: 'bold' }}>NEW RELEASE / {newRelease.tag}</span>
            <h3 style={{ margin: '10px 0', fontSize: '1.5rem' }}>{newRelease.title}</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px' }}>{newRelease.text}</p>
            <a href={newRelease.booth} target="_blank" rel="noreferrer" style={{ 
              color: '#3d95ff', textDecoration: 'none', fontWeight: 'bold', border: '1px solid #3d95ff',
              padding: '8px 20px', borderRadius: '15px'
            }}>BOOTHでチェック 🛒</a>
          </div>
        </div>

        <div className="cardGrid">
          {archiveWorks.map((item) => (
            <article className="workCard" key={item.title}>
              <div className="jacket" style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover' }}>
                <span>{item.tag}</span>
              </div>
              <div className="cardBody">
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
           <a href="/discography" className="button ghost">すべての作品リストを見る</a>
        </div>
      </section>

      {/* SNS（Twitchを追加） */}
      <section id="sns" className="section snsSection reveal">
        <div className="sectionTitle">
          <p>Follow / Stream</p>
          <h2>SNS & Links</h2>
        </div>
        <div className="snsLinks">
          {snsLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{ borderLeft: `4px solid ${link.color}` }}>
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