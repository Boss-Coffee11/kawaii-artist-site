"use client";
import React from 'react';

// --- 1. 新譜（詳細）のデータ ---
const newRelease = {
  title: "In my Dream",
  release: "2025.10.25",
  jacketImage: "/Images/InMyDream.jpg",
  description: "2025年の秋M3で販売したアルバム（全11曲）。ゲストに素敵なボーカリストのみなさんをお迎えしました。",
  youtubeId: "OKIdrIeujcY",
  boothUrl: "https://etoilefleur.booth.pm/items/7488504", // 実際のURLへ
  guests: [
    { name: "春瀬愛羅", xId: "@haruai_03" },
    { name: "ミドリノハサミ", xId: "@midorihasami" },
    { name: "恋摘もなか", xId: "@mona_ka_san" },
    { name: "雨汰。", xId: "@_uta3" },
    { name: "久野兎", xId: "@poqu_" },
    { name: "きゃらめる", xId: "@caramel_715" },
    { name: "ひなたいお", xId: "@empty073g" },
    { name: "咲良ゆの", xId: "@yuno_singer" }
  ],
  tracks: ["Bloom light", "絶対幼女☆ののちゃんです！", "咫尺天涯で踊りましょ→", "おつきみダンス", "Baby Blue Eyes", "桜色ピュアメモリー", "SecretMelody", "One Secret", "Own mirage", "ワンダーランドリサイタル", "In my dream"]
};

// --- 2. 過去作（アーカイブ）のデータ ---
// アルバム5枚、シングル2枚分などをここに追加してください
const archiveWorks = [
  { title: "Dreamin' Coordinate", image: "/Images/Dreamin.jpg", type: "Album", booth: "https://etoilefleur.booth.pm/items/3372514" },
  { title: "おまえら、こ～ゆ～のがスキなんだろ？", image: "/Images/Omaera.jpg", type: "miniAlbum", booth: "https://etoilefleur.booth.pm/items/4348973" },
  { title: "Baby Blue Eyes", image: "/Images/BBE.jpg", type: "miniAlbum", booth: "https://etoilefleur.booth.pm/items/4674411" },
  { title: "桜色ピュアメモリー", image: "/Images/Cherry.jpg", type: "miniAlbum", booth: "https://etoilefleur.booth.pm/items/5652634" },
  { title: "Ownmirage", image: "/Images/Ownmirage.jpg", type: "Album", booth: "https://etoilefleur.booth.pm/items/6179402" },
  { title: "恋のサイレン♡ハートfeat.雨汰。", image: "/Images/heart.jpg", type: "Single", booth: "https://etoilefleur.booth.pm/items/5802272" },
  { title: "Fuzzy navel", image: "/Images/Fuzzy.jpg", type: "Single", booth: "https://etoilefleur.booth.pm/items/6291877" },
];

export default function DiscographyPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', color: '#ff69b4', marginBottom: '60px', fontSize: '2.5rem' }}>Discography</h1>

      {/* --- NEW RELEASE SECTION --- */}
      <div style={{ borderLeft: '5px solid #ffb6c1', paddingLeft: '15px', marginBottom: '30px' }}>
        <h2 style={{ color: '#ff82b2', fontSize: '1.8rem' }}>New Release</h2>
      </div>

      <section style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '30px', padding: '35px', marginBottom: '80px', backdropFilter: 'blur(10px)'
      }}>
        {/* 左側：ジャケット・ゲスト */}
        <div>
          <div style={{ 
            width: '100%', aspectRatio: '1/1', borderRadius: '20px', marginBottom: '20px',
            backgroundImage: `url(${newRelease.jacketImage})`, backgroundSize: 'cover', backgroundPosition: 'center',
            backgroundColor: '#ffd1dc', boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
          }} />
          <h2 style={{ color: '#333', marginBottom: '5px' }}>{newRelease.title}</h2>
          <p style={{ color: '#ff82b2', fontSize: '0.85rem', marginBottom: '15px' }}>Release: {newRelease.release}</p>
          
          <a href={newRelease.boothUrl} target="_blank" rel="noreferrer" style={{
            display: 'block', textAlign: 'center', backgroundColor: '#3d95ff', color: 'white',
            padding: '12px', borderRadius: '15px', textDecoration: 'none', fontWeight: 'bold', marginBottom: '20px'
          }}>BOOTHで購入する 🛒</a>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '15px', borderRadius: '15px' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#ff82b2', marginBottom: '8px' }}>✦ Guest Vocal</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px' }}>
              {newRelease.guests.map(g => (
                <div key={g.name} style={{ fontSize: '0.75rem', color: '#555' }}>
                  {g.name} <a href={`https://x.com/${g.xId.replace('@','')}`} target="_blank" rel="noreferrer" style={{ color: '#00acee', textDecoration: 'none' }}>🔗</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 右側：YouTube・トラック */}
        <div>
          <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: '15px', overflow: 'hidden', marginBottom: '20px' }}>
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${newRelease.youtubeId}`} frameBorder="0" allowFullScreen></iframe>
          </div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {newRelease.tracks.map((track, i) => (
              <li key={i} style={{ padding: '8px 10px', borderBottom: '1px solid #eee', color: '#555', fontSize: '0.85rem' }}>{i + 1}. {track}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- ARCHIVE SECTION --- */}
      <div style={{ borderLeft: '5px solid #b2ebf2', paddingLeft: '15px', marginBottom: '30px' }}>
        <h2 style={{ color: '#4dd0e1', fontSize: '1.8rem' }}>Archive</h2>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
        gap: '20px' 
      }}>
        {archiveWorks.map((work, index) => (
          <div key={index} style={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '20px', padding: '15px',
            textAlign: 'center', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.3)'
          }}>
            <div style={{
              width: '100%', aspectRatio: '1/1', borderRadius: '12px', marginBottom: '10px',
              backgroundImage: `url(${work.image})`, backgroundSize: 'cover', backgroundColor: '#ddd'
            }} />
            <p style={{ fontSize: '0.7rem', color: '#ff82b2', fontWeight: 'bold', margin: '0' }}>{work.type}</p>
            <h3 style={{ fontSize: '0.9rem', color: '#333', margin: '5px 0 10px' }}>{work.title}</h3>
            <a href={work.booth} target="_blank" rel="noreferrer" style={{
              fontSize: '0.75rem', color: '#3d95ff', textDecoration: 'none', fontWeight: 'bold',
              border: '1px solid #3d95ff', padding: '4px 10px', borderRadius: '10px'
            }}>BOOTH</a>
          </div>
        ))}
      </div>
    </div>
  );
}