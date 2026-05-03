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
        
        <header style={{
          position: 'fixed', top: '20px', left: '0', right: '0',
          display: 'flex', justifyContent: 'center', zIndex: 100
        }}>
          <div style={{
            width: '90%', maxWidth: '1200px', backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)', borderRadius: '50px', padding: '15px 40px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
          }}>
            <Link href="/" style={{ color: '#ff82b2', fontWeight: 'bold', textDecoration: 'none' }}>
              鈴咲のの official site
            </Link>
            <nav style={{ display: 'flex', gap: '30px' }}>
              <Link href="/profile" style={{ color: '#888', textDecoration: 'none' }}>Profile</Link>
              <Link href="/discography" style={{ color: '#888', textDecoration: 'none' }}>Discography</Link>
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