"use client";
import React from "react";

const profile = {
  name: "鈴咲のの",
  romaji: "Nono Suzusaki",
  iconImage: "/Images/nono.jpg",
  standingImage: "/Images/nono_main.jpg",
  intro: (
    <>
      「私らしく楽しく」をモットーに、同人音楽や配信を中心に活動中。<br />
      かわいい雰囲気はもちろん、ちょっぴり大人っぽくかっこいい歌声も届けています。
    </>
  ),
};

const profileList = [
  { label: "誕生日", value: "1月23日" },
  { label: "趣味", value: "ゲーム、歌、配信、テーブルゲーム" },
  { label: "ゲーム", value: "Overwatch / ゴッドフィールド など" },
  { label: "特技", value: "歌MIX、動画制作、料理、誤字" },
  { label: "好きなもの", value: "かわいいもの、日本酒、おしゃべり" },
  { label: "活動スタイル", value: "同人音楽、イベント参加、ファンミーティングなど" },
  { label: "チャームポイント", value: "かわいさも大人っぽさも出せる歌声" },
  { label: "ひとこと", value: "これからも自分らしく、きらきら楽しく歌っていきます！" },
];

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
  members: [
    { name: "鈴咲のの", xId: "@_suzukinono", icon: "/Images/nono_icon.jpg" },
    { name: "久野兎", xId: "@poqu_", icon: "/Images/kuno_icon.jpg" },
    { name: "まりも", xId: "", icon: "/Images/marimo_icon.jpg" },
  ],
};

const history = [
  { date: "2024.04", event: "活動開始。初めてのオリジナル曲をYouTubeに投稿。" },
  { date: "2024.10", event: "秋のM3にて1st EP『Cotton Candy Room』をリリース。" },
  { date: "2025.01", event: "ボーカルユニット「くまのこべあーず」に加入。" },
  { date: "2025.10", event: "アルバム『In my Dream』をリリース。" },
  { date: "2026.04", event: "活動2周年を迎え、さらなる飛躍を目指して活動中。" },
];

export default function ProfilePage() {
  const hasStandingImage = Boolean(profile.standingImage);

  return (
    <main className="section reveal profilePageWrap" style={{ maxWidth: "980px", margin: "0 auto" }}>
      <div className="sectionTitle">
        <p>ABOUT</p>
        <h2>Profile</h2>
      </div>

      <section className="glassCard profileHeroCard" style={{ marginBottom: "44px" }}>
        <div className="profileHeroText">
          <div className="profileNameBlock">
            <div
              className="profileIconLarge"
              style={{
                backgroundImage: `url(${profile.iconImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "#ffd1dc",
              }}
            />
            <div>
              <p className="profileMiniCatch">Sweet Voice Idol</p>
              <h3 className="profileMainName">{profile.name}</h3>
              <p className="profileSubName">{profile.romaji}</p>
            </div>
          </div>

          <div className="profileMessageBox">
            <p className="profileLeadText">{profile.intro}</p>

            <ul className="profileBulletList">
              {profileList.map((item) => (
                <li key={item.label} className="profileBulletItem">
                  <span className="profileBulletLabel">{item.label}</span>
                  <span className="profileBulletValue">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="profileLinksRow">
            {officialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="profileLinkButton puni"
                style={{ color: link.color }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="profileStandingArea">
          <div className="profileStandingCard puni">
            <span className="profileStandingBadge">standing illust</span>

            {hasStandingImage ? (
              <div className="profileStandingImageWrap">
                <img
                  src={profile.standingImage}
                  alt={`${profile.name}の立ち絵`}
                  className="profileStandingImageTag"
                />
              </div>
            ) : (
              <div className="profileStandingPlaceholder">
                <span className="profileStandingEmoji">🎀✨</span>
                <p>ここに立ち絵イラスト</p>
                <small>
                  画像を追加したら
                  <br />
                  profile.standingImage にパスを入れるだけ
                </small>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="unitSection glassCard profileSoftSection" style={{ marginBottom: "44px" }}>
        <h2 className="profileSectionHeading">🧸 {unitInfo.name} 🧸</h2>
        <p className="profileSectionLead">{unitInfo.description}</p>

        <div className="profileMemberGrid">
          {unitInfo.members.map((member) => (
            <div key={member.name} className="unitMemberCard profileMemberCard">
              <div
                className="profileMemberIcon"
                style={{
                  backgroundImage: `url(${member.icon})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#eee",
                }}
              />
              <div style={{ textAlign: "left" }}>
                <div className="profileMemberName">{member.name}</div>

                {member.xId ? (
                  <a
                    href={`https://x.com/${member.xId.replace("@", "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="profileMemberLink"
                  >
                    {member.xId}
                  </a>
                ) : (
                  <span className="profileMemberLink" style={{ opacity: 0.65 }}>
                    account preparing...
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="glassCard profileSoftSection profileHistorySection">
        <h2 className="profileSectionHeading">History</h2>

        <div className="profileTimeline">
          {history.map((item, index) => (
            <div key={index} className="profileTimelineItem">
              <span className="profileTimelineDot" />
              <p className="profileTimelineDate">{item.date}</p>
              <p className="profileTimelineText">{item.event}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
