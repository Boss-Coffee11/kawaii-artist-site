"use client";
import React from 'react';

// --- 1. リンク・データ設定 ---
const officialLinks = [
  { label: "𝕏 (Twitter)", href: "https://x.com/_suzukinono", color: "#000" },
  { label: "YouTube", href: "https://www.youtube.com/@_suzukinono", color: "#FF0000" },
  { label: "BOOTH", href: "https://etoilefleur.booth.pm/", color: "#3d95ff" },
  { label: "FANBOX", href: "https://nonochan.fanbox.cc/", color: "#fca311" },
];

const unitInfo = {
  name: "くまのこべあーず",
  description: (
    <>
      私も参加しているボーカルユニット。<br />
      こどもかわいいをテーマに、アニソンちっくな可愛いCDを作ってます！
    </>
  ),
  xUrl: "https://x.com/kmn_Bears",
  ytUrl: "https://www.youtube.com/channel/UCxqh2YS5C1rOZ585ep61b1A",
  members: [
    { name: "鈴咲のの", xId: "@_suzukinono", icon: "/Images/nono_icon.jpg" },
    { name: "久野兎", xId: "@poqu_", icon: "/Images/kuno_icon.jpg" },
    { name: "まりも", xId: "", icon: "/Images/marimo_icon.jpg" },
  ]
};

const history = [
  { date: "2024.04", event: "活動開始。初めてのオリジナル曲をYouTubeに投稿。" }, // ここに活動履歴を入れていく
  { date: "2024.10", event: "秋のM3にて1st EP『Cotton Candy Room』をリリース。" },
  { date: "2025.01", event: "ボーカルユニット「くまのこべあーず」に加入。" },
  { date: "2025.10", event: "アルバム『In my Dream』をリリース。" },
  { date: "2026.04", event: "活動2周年を迎え、さらなる飛躍を目指して活動中。" },
];

export default function ProfilePage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      
      {/* --- メインプロフィール --- */}
      <section style={{
        backgroundColor: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(12px)',
        borderRadius: '30px', padding: '40px', textAlign: 'center',
        boxShadow: '0 10px 30px rgba(255, 182, 193, 0.2)', marginBottom: '40px'
      }}>
        {/* ★ アイコン画像エリア（丸型） */}
        <div style={{ 
          width: '120px', height: '120px', 
          margin: '0 auto 20px', 
          borderRadius: '50%', 
          overflow: 'hidden',
          border: '4px solid #fff',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          backgroundImage: 'url(/Images/nono.jpg)', // public/imagesの中に画像を入れる
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#ffd1dc'
        }} />
        
        <h1 style={{ color: '#ff69b4', fontSize: '2.2rem', marginBottom: '5px' }}>鈴咲のの</h1>
        <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '20px' }}>Nono Suzuki</p>
        
        <p style={{ color: '#666', lineHeight: '1.8', margin: '10px 0' }}>
          「私らしく楽しく」をモットーに同人音楽活動中。<br />
          かわいいだけでなく大人かっこいい歌声も出せます！
        </p>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
          {officialLinks.map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{
              padding: '10px 18px', borderRadius: '20px', backgroundColor: 'white',
              color: link.color, fontSize: '0.8rem', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
            }}>{link.label}</a>
          ))}
        </div>
      </section>

      {/* --- くまのこべあーず紹介 --- */}
<section className="unitSection" style={{
  backdropFilter: 'blur(12px)', borderRadius: '30px', padding: '30px', marginBottom: '40px'
}}>
  <h2 style={{ color: '#00acc1', fontSize: '1.6rem', marginBottom: '10px', textAlign: 'center' }}>
    🧸 {unitInfo.name} 🧸
  </h2>
  
  {/* ユニット公式リンク */}
  <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px' }}>
    <a href={unitInfo.xUrl} target="_blank" rel="noreferrer" className="button ghost" style={{ fontSize: '0.8rem', padding: '8px 15px' }}>𝕏 Official</a>
    <a href={unitInfo.ytUrl} target="_blank" rel="noreferrer" className="button ghost" style={{ fontSize: '0.8rem', padding: '8px 15px' }}>YouTube</a>
  </div>

  <p style={{ color: '#555', fontSize: '0.95rem', textAlign: 'center', marginBottom: '25px', fontWeight: '500' }}>
    {unitInfo.description}
  </p>
  
  <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
    {unitInfo.members.map(m => (
      <div key={m.name} className="unitMemberCard" style={{ 
        backgroundColor: 'rgba(255,255,255,0.8)', padding: '12px 20px', borderRadius: '20px',
        display: 'flex', alignItems: 'center', gap: '12px'
      }}>
        {/* メンバーアイコンを表示（画像がない場合はグレーの円） */}
        <div style={{ 
          width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#eee',
          backgroundImage: `url(${m.icon})`, backgroundSize: 'cover'
        }} />
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontWeight: 'bold', color: '#333', fontSize: '0.9rem' }}>{m.name}</div>
          <a href={`https://x.com/${m.xId.replace('@','')}`} target="_blank" rel="noreferrer" style={{ color: '#00acee', fontSize: '0.75rem' }}>{m.xId}</a>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* --- 活動歴 (History) --- */}
      <section style={{ padding: '0 20px' }}>
        <h2 style={{ color: '#ff82b2', textAlign: 'center', marginBottom: '30px' }}>History</h2>
        <div style={{ position: 'relative', borderLeft: '2px dashed #ffb6c1', paddingLeft: '30px', marginLeft: '20px' }}>
          {history.map((item, i) => (
            <div key={i} style={{ marginBottom: '30px', position: 'relative' }}>
              <span style={{
                position: 'absolute', left: '-41px', top: '5px',
                width: '20px', height: '20px', backgroundColor: 'white',
                border: '3px solid #ffb6c1', borderRadius: '50%'
              }} />
              <p style={{ fontWeight: 'bold', color: '#ff82b2', marginBottom: '5px' }}>{item.date}</p>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>{item.event}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}