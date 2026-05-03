"use client";
import React from 'react';

const albums = [
  {
    title: "Sugar Drop Memory",
    release: "2026.04.28",
    description: "2周年を記念したミニアルバム。きらめく電子音と切ないメロディが交差する全6曲。",
    youtubeId: "dQw4w9WgXcQ", // YouTubeの動画IDを入れてください
    tracks: ["Sugar Drop", "Starlight Waltz", "Soda Float Night", "Memory"]
  },
  {
    title: "Twinkle Soda",
    release: "2025.10.25",
    description: "弾ける炭酸のような爽快なポップス。ライブでの定番曲を収録。",
    youtubeId: "dQw4w9WgXcQ", 
    tracks: ["Twinkle Soda", "Blue Sky Mermaid", "Summer Dream"]
  }
];

export default function DiscographyPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ textAlign: 'center', color: '#ff69b4', marginBottom: '60px', fontSize: '2.5rem' }}>Discography</h1>

      {albums.map((album, index) => (
        <section key={album.title} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '30px',
          padding: '30px',
          marginBottom: '60px',
          backdropFilter: 'blur(10px)'
        }}>
          {/* 左側：ジャケットと解説 */}
          <div>
            <div style={{ 
              width: '100%', aspectRatio: '1/1', backgroundColor: '#eee', 
              borderRadius: '20px', marginBottom: '20px', display: 'flex',
              alignItems: 'center', justifyContent: 'center', color: '#aaa',
              backgroundImage: 'linear-gradient(45deg, #ffd1dc, #b2ebf2)',
              fontSize: '1.2rem', fontWeight: 'bold', boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
            }}>
              JACKET IMAGE
            </div>
            <h2 style={{ color: '#333', marginBottom: '10px' }}>{album.title}</h2>
            <p style={{ color: '#ff82b2', fontSize: '0.9rem', marginBottom: '15px' }}>Release: {album.release}</p>
            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.9rem' }}>{album.description}</p>
          </div>

          {/* 右側：動画とトラックリスト */}
          <div>
            <div style={{ 
              width: '100%', aspectRatio: '16/9', borderRadius: '15px', 
              overflow: 'hidden', marginBottom: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' 
            }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${album.youtubeId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {album.tracks.map((track, i) => (
                <li key={i} style={{ 
                  padding: '8px 15px', borderBottom: '1px solid rgba(255,182,193,0.3)', 
                  color: '#555', fontSize: '0.9rem', display: 'flex', justifyContent: 'space-between'
                }}>
                  <span>{i + 1}. {track}</span>
                  <span style={{ color: '#ccc' }}>▶︎</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}