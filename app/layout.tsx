import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { ClickSparkle } from "../components/ClickSparkle";
import { Zen_Maru_Gothic } from 'next/font/google';

// 1. フォントの設定（変数を定義）
const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "鈴咲のの official site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 2. className に zenMaruGothic.className を適用
    <html lang="ja" className={zenMaruGothic.className}>
      <body style={{ margin: 0, overflowX: 'hidden' }}>
        <ClickSparkle />
        
        {/* フローティングボタンエリア */}
        <div style={{
          position: 'fixed', bottom: '20px', right: '20px',
          display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 1000
        }}>
          <a href="https://www.twitch.tv/suzukinono6" target="_blank" rel="noreferrer" 
             style={{
               width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#9146FF',
               display: 'flex', alignItems: 'center', justifyContent: 'center',
               color: 'white', fontSize: '2.0rem', boxShadow: '0 4px 15px rgba(145, 70, 255, 0.4)',
               transition: 'transform 0.2s', paddingBottom: '6px', lineHeight: 1
             }} className="fab-button">
            🎮
          </a>
          <a href="https://etoilefleur.booth.pm/" target="_blank" rel="noreferrer"
             style={{
               width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#3d95ff',
               display: 'grid', placeItems: 'center', color: 'white', fontSize: '2.0rem',
               boxShadow: '0 4px 15px rgba(61, 149, 255, 0.4)', transition: 'transform 0.2s'
             }} className="fab-button">
            🛒
          </a>
        </div>

        <header style={{
          position: 'fixed', top: '10px', left: '0', right: '0',
          display: 'flex', justifyContent: 'center', zIndex: 100
        }}>
          <div style={{
            width: '95%', maxWidth: '1200px', backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)', borderRadius: '25px', padding: '12px 20px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'all 0.3s ease'
          }} className="nav-container">
            <Link href="/" style={{ color: '#ff82b2', fontWeight: 'bold', textDecoration: 'none', fontSize: '1rem', whiteSpace: 'nowrap' }}>
              鈴咲のの official site
            </Link>
            <nav style={{ display: 'flex', gap: '20px', fontSize: '0.9rem' }}>
              <Link href="/profile" style={{ color: '#888', textDecoration: 'none' }}>Profile</Link>
              <Link href="/discography" style={{ color: '#888', textDecoration: 'none' }}>Discography</Link>
              <Link href="/goods" style={{ color: '#888', textDecoration: 'none' }}>Goods</Link>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}