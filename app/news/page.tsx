import Link from "next/link";
import "./news.css";
import { NEWS } from "./news-data";

/* =========================================================
   News ページ
   お知らせの追加は news-data.ts だけでOK（このファイルは触らなくて大丈夫）
   ========================================================= */
export default function NewsPage() {
  return (
    <div className="newsPage">
      <div className="sectionTitle">
        <p>Information</p>
        <h2>News</h2>
      </div>

      {NEWS.length === 0 ? (
        <p className="newsEmpty">お知らせはまだありません</p>
      ) : (
        <ul className="newsList">
          {NEWS.map((n, i) => (
            <li key={i} className="newsItem">
              <time>{n.date}</time>
              <div>
                <h3>{n.title}</h3>
                {n.text && <p>{n.text}</p>}
                {n.link &&
                  (n.link.startsWith("http") ? (
                    <a href={n.link} target="_blank" rel="noreferrer">詳しく見る ↗</a>
                  ) : (
                    <Link href={n.link}>詳しく見る →</Link>
                  ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
