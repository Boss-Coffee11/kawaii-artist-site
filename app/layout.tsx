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
              <Link href="/news" style={{ color: '#888', textDecoration: 'none' }}>News</Link>
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