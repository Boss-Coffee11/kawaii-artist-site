import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { ClickSparkle } from "../components/ClickSparkle";

export const metadata: Metadata = {
  title: "鈴咲のの official site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body style={{ margin: 0, overflowX: 'hidden' }}>
        <ClickSparkle />
        
// app/layout.tsx (header部分のみ抜粋して修正)
        <header style={{
          position: 'fixed', top: '10px', left: '0', right: '0',
          display: 'flex', justifyContent: 'center', zIndex: 100
          }}>
          <div style={{
            width: '95%', maxWidth: '1200px', backgroundColor: 'rgba(255, 255, 255, 0.8)',
           backdropFilter: 'blur(10px)', borderRadius: '25px', padding: '12px 20px',
           display: 'flex', 
           flexDirection: 'column', // 基本は縦並び(スマホ用)
           alignItems: 'center',
            gap: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            // 画面幅が600px以上のときは横並びにする
            transition: 'all 0.3s ease'
          }} className="nav-container">
            <Link href="/" style={{ 
              color: '#ff82b2', fontWeight: 'bold', textDecoration: 'none', 
              fontSize: '1rem', whiteSpace: 'nowrap' 
              }}>
              鈴咲のの official site
            </Link>
           <nav style={{ 
             display: 'flex', gap: '20px', fontSize: '0.9rem' 
              }}>
             <Link href="/profile" style={{ color: '#888', textDecoration: 'none' }}>Profile</Link>
             <Link href="/discography" style={{ color: '#888', textDecoration: 'none' }}>Disco</Link>
             <Link href="/goods" style={{ color: '#888', textDecoration: 'none' }}>Goods</Link>
            </nav>
          </div>
        </header>
        <main style={{ paddingTop: '120px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}