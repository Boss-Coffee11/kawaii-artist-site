"use client";
import React from 'react';

const snsLinks = [
  { label: "𝕏 (Twitter)", href: "https://x.com/", color: "#000" },
  { label: "YouTube", href: "https://www.youtube.com/", color: "#FF0000" },
  { label: "BOOTH", href: "https://booth.pm/", color: "#3d95ff" },
];

const history = [
  { date: "2024.04", event: "活動開始。初めてのオリジナル曲をYouTubeに投稿。" },
  { date: "2024.10", event: "秋のM3にて1st EP『Cotton Candy Room』をリリース。" },
  { date: "2025.05", event: "VTuberイベントへの楽曲提供を担当。" },
  { date: "2026.04", event: "活動2周年。ミニアルバム『Sugar Drop Memory』を制作。" },
];

export default function ProfilePage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      {/* メインプロフィールカード */}
      <section style={{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(12px)',
        borderRadius: '30px',
        padding: '40px',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(255, 182, 193, 0.2)',
        marginBottom: '40px'
      }}>
        <div style={{ 
          width: '120px', height: '120px', backgroundColor: '#ffd1dc', 
          borderRadius: '50%', margin: '0 auto 20px', display: 'flex', 
          alignItems: 'center', justifyContent: 'center', fontSize: '3rem'
        }}>🌸</div>
        <h1 style={{ color: '#ff69b4', fontSize: '2.2rem', marginBottom: '10px' }}>鈴咲のの</h1>
        <p style={{ color: '#888', fontSize: '0.9rem' }}>Nono Suzusaki</p>
        
        <p style={{ color: '#666', lineHeight: '1.8', margin: '20px 0' }}>
          「わたしらしく、楽しく輝く音をあなたにお届け」をモットーに活動する音楽アーティスト。<br />
          透明感のある歌声と、キラキラしたポップサウンドを得意としています。
        </p>

        {/* SNSボタン */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          {snsLinks.map(sns => (
            <a key={sns.label} href={sns.href} target="_blank" rel="noreferrer" style={{
              padding: '10px 20px', borderRadius: '20px', backgroundColor: 'white',
              color: sns.color, fontSize: '0.85rem', fontWeight: 'bold',
              textDecoration: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
            }}>
              {sns.label}
            </a>
          ))}
        </div>
      </section>

      {/* 活動歴セクション */}
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