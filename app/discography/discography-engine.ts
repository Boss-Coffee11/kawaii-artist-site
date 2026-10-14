// @ts-nocheck
/* =========================================================
   Discography の動き（一覧・ポップアップ・新譜の夜空演出）
   作品の追加・修正は works-data.ts だけでOK。このファイルは触らなくて大丈夫です。
   ========================================================= */
export function initDiscography(root, WORKS){
  const ac = new AbortController();
  const signal = ac.signal;
  const $ = s => root.querySelector(s);
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const cfg = { speed:1, revealTheme:"夜空のまま", glint:"#dff3ff", skipRepeat:false, horizon:true };

  /* ---------- 背景の光 ---------- */
  const bg = root.querySelector(".bg-sparkles");
  for(let i=0;i<18;i++){
    const s=document.createElement("i");
    s.style.left=(Math.random()*100)+"%"; s.style.top=(Math.random()*100)+"%";
    s.style.animationDelay=(Math.random()*4)+"s";
    bg.appendChild(s);
  }

  /* ---------- カウントダウン ---------- */
  function countText(w){
    if(!w.releaseAt) return "";
    const d = Math.ceil((new Date(w.releaseAt) - new Date())/864e5);
    if(d > 1) return `RELEASE まで あと ${d} 日`;
    if(d === 1) return `いよいよ明日リリース`;
    if(d === 0) return `本日リリース！`;
    return "";
  }

  /* ---------- 一覧 ---------- */
  const list = $("#works");
  let filter = "all", visible = [];
  function render(){
    visible = WORKS.filter(w => filter==="all" || w.type===filter);
    list.innerHTML = "";
    if(!visible.length){ list.innerHTML = `<li class="empty">この種類の作品はまだありません</li>`; return; }
    visible.forEach((w,i)=>{
      const li = document.createElement("li");
      li.className = "work-li" + (w.isNew ? " is-new" : "");
      const tw = w.isNew ? `
        <span class="tw" style="top:12%;left:14%;animation-delay:.2s"></span>
        <span class="tw" style="top:20%;right:16%;width:11px;animation-delay:1s"></span>
        <span class="tw" style="top:46%;left:70%;width:9px;animation-delay:1.6s"></span>` : "";
      li.innerHTML = `
        <button class="work${w.isNew?" is-new":""}" data-i="${i}">
          <span class="work-jk" style="display:block">
            <img src="${w.img}" alt="${w.title} ジャケット" loading="lazy">
            ${tw}
            ${w.isNew ? `<span class="new-flag"><b>NEW</b>${w.date.slice(5).replace(".", ".")} RELEASE</span>` : ""}
          </span>
          <span class="work-meta" style="display:block">
            <span class="work-type" style="display:block">${w.type}</span>
            <span class="work-title" style="display:block">${w.title}</span>
            ${w.date ? `<span class="work-date" style="display:block">${w.date}</span>` : ""}
            ${w.isNew ? `<span class="work-hint">タップして新譜を開く</span>` : ""}
          </span>
        </button>`;
      list.appendChild(li);
    });
  }
  list.addEventListener("click", e=>{
    const b = e.target.closest(".work"); if(!b) return;
    open(visible[+b.dataset.i]);
  }, { signal });
  $("#filters").addEventListener("click", e=>{
    const b = e.target.closest(".filter"); if(!b) return;
    root.querySelectorAll(".filter").forEach(x=>x.classList.toggle("is-active", x===b));
    filter = b.dataset.f; render();
  }, { signal });

  /* ---------- ポップアップ ---------- */
  const dlg = $("#dlg");
  let current = null;
  function fill(w){
    current = w;
    // 前の作品のジャケットが一瞬残らないよう、いったん空にしてから読み込む
    const img = $("#dImg");
    img.style.visibility = "hidden";
    img.removeAttribute("src");
    img.onload = () => { img.style.visibility = ""; };
    img.src = w.img; img.alt = w.title + " ジャケット";
    if(img.complete && img.naturalWidth) img.style.visibility = "";
    $("#dType").textContent = w.isNew ? `NEW RELEASE / ${w.type}` : w.type;
    $("#dTitle").textContent = w.title;
    $("#dDate").textContent = w.date ? `Release : ${w.date}` : "";
    $("#dCatch").textContent = w.catch || ""; $("#dCatch").hidden = !w.catch;
    $("#dDesc").textContent = w.desc || ""; $("#dDesc").hidden = !w.desc;
    const booth = $("#dBooth");
    booth.hidden = !w.booth; if(w.booth) booth.href = w.booth;
    $("#dCount").textContent = countText(w);
    $("#dTrackSec").hidden = !(w.tracks && w.tracks.length);
    $("#dTracks").innerHTML = (w.tracks||[]).map(t=> typeof t==="string"
      ? `<li><span>${t}</span></li>`
      : `<li><span>${t.t}${t.c?`<small>${t.c}</small>`:""}</span></li>`).join("");
    const ev = [w.event, w.price].filter(Boolean).join("　/　");
    $("#dEvent").textContent = ev; $("#dEvent").hidden = !ev;
    $("#dGuestSec").hidden = !(w.guests && w.guests.length);
    $("#dGuestLabel").textContent = w.guestsLabel || "Guest Vocal";
    $("#dGuests").innerHTML = (w.guests||[]).map(g=> g.x
      ? `<li><a href="${g.x}" target="_blank" rel="noopener">${g.name}</a></li>`
      : `<li><span>${g.name}</span></li>`).join("");
    $("#dYtSec").hidden = !w.youtube;
    $("#dYt").innerHTML = w.youtube ? `<iframe src="https://www.youtube.com/embed/${w.youtube}" title="${w.title} クロスフェード" allowfullscreen loading="lazy"></iframe>` : "";
    const idx = visible.indexOf(w);
    $("#dPrev").disabled = idx <= 0;
    $("#dNext").disabled = idx < 0 || idx >= visible.length-1;
  }
  function showDialog(w, {night=false, reveal=false}={}){
    fill(w);
    dlg.classList.toggle("is-night", night);
    $("#dBooth").classList.toggle("is-night", night);
    dlg.classList.remove("is-reveal"); void dlg.offsetWidth;
    if(reveal) dlg.classList.add("is-reveal");
    dlg.classList.add("is-open"); dlg.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
    $("#dlg .dlg-card").scrollTop = 0;
    setTimeout(()=>$(".dlg-x").focus({preventScroll:true}), 50);
  }
  function close(){
    dlg.classList.remove("is-open","is-reveal"); dlg.setAttribute("aria-hidden","true");
    $("#dYt").innerHTML = "";
    document.body.style.overflow = "";
    nightOff();
  }
  function open(w){
    if(!w) return;
    if(w.isNew) return playNight(w);
    nightOff();
    showDialog(w);
  }
  dlg.addEventListener("click", e=>{ if(e.target.closest("[data-close]")) close(); }, { signal });
  document.addEventListener("keydown", e=>{
    if(e.key==="Escape"){ if(running) finish(); else close(); }
    if(!dlg.classList.contains("is-open")) return;
    if(e.key==="ArrowRight") $("#dNext").click();
    if(e.key==="ArrowLeft") $("#dPrev").click();
  }, { signal });
  $("#dPrev").addEventListener("click", ()=>{ const i=visible.indexOf(current); if(i>0) open(visible[i-1]); }, { signal });
  $("#dNext").addEventListener("click", ()=>{ const i=visible.indexOf(current); if(i<visible.length-1) open(visible[i+1]); }, { signal });

  /* =========================================================
     新譜：暗転 → 星屑が集まる → 強い光が瞬く → 詳細が現れる
     ========================================================= */
  const night = $("#night"), cv = $("#sky"), ctx = cv.getContext("2d");
  const flash = $("#flash"), copy = $("#nightCopy"), skip = $("#skip");
  let W=0,H=0,DPR=1, stars=[], dust=[], raf=0, t0=0, running=false, timers=[], target=null, phase="idle";

  function size(){
    DPR = Math.min(devicePixelRatio||1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W*DPR; cv.height = H*DPR; ctx.setTransform(DPR,0,0,DPR,0,0);
  }
  addEventListener("resize", ()=>{ if(night.classList.contains("is-on")) size(); }, { signal });

  // 告知動画に合わせた、白〜淡い水色の星（わずかに暖色）
  const COLORS = ["255,255,255","226,240,255","190,222,240","255,244,224"];
  function seed(){
    const n = Math.round(W*H/5200);
    stars = Array.from({length:n}, ()=>({
      x:Math.random()*W, y:Math.random()*H, r:Math.random()*1.3+.3,
      ph:Math.random()*6.28, sp:Math.random()*2+.6, born:Math.random()*900,
      c:COLORS[Math.random()<.6?0:1+Math.floor(Math.random()*3)]
    }));
    // 中心へ集まる星屑
    dust = Array.from({length:160}, ()=>{
      const a = Math.random()*6.28, d = Math.max(W,H)*(.35+Math.random()*.45);
      return { a, d, d0:d, r:Math.random()*1.6+.5, spin:(Math.random()*.6+.4)*(Math.random()<.5?-1:1),
               delay:Math.random()*.5, c:COLORS[Math.floor(Math.random()*4)] };
    });
  }
  function hexToRgb(h){ const n=parseInt(h.slice(1),16); return `${n>>16&255},${n>>8&255},${n&255}`; }

  // 4方向の光条を持つ星
  function glint(x,y,size,alpha,rot){
    if(alpha<=0) return;
    const g = hexToRgb(cfg.glint);
    ctx.save(); ctx.translate(x,y); ctx.rotate(rot); ctx.globalCompositeOperation="lighter";
    const halo = ctx.createRadialGradient(0,0,0,0,0,size*1.2);
    halo.addColorStop(0,`rgba(255,255,255,${alpha})`);
    halo.addColorStop(.18,`rgba(${g},${alpha*.8})`);
    halo.addColorStop(1,`rgba(${g},0)`);
    ctx.fillStyle=halo; ctx.beginPath(); ctx.arc(0,0,size*1.2,0,6.29); ctx.fill();
    for(let k=0;k<4;k++){
      const len = size*(k%2? 2.2:3.4), wdt = size*.07;
      const lg = ctx.createLinearGradient(0,0,len,0);
      lg.addColorStop(0,`rgba(255,255,255,${alpha})`); lg.addColorStop(1,`rgba(${g},0)`);
      ctx.fillStyle=lg; ctx.beginPath(); ctx.moveTo(0,-wdt); ctx.lineTo(len,0); ctx.lineTo(0,wdt); ctx.fill();
      ctx.rotate(Math.PI/2);
    }
    ctx.restore();
  }

  const ease = {
    out:t=>1-Math.pow(1-t,3), inOut:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2, clamp:t=>Math.max(0,Math.min(1,t))
  };

  // タイムライン（秒）— speed で伸縮
  function TL(){ const s=cfg.speed; return { dust0:.7*s, gather:2.0*s, burst:2.75*s, reveal:2.95*s }; }

  function frame(now){
    const t = (now - t0)/1000, T = TL();
    ctx.clearRect(0,0,W,H);
    const cx=W/2, cy=H*.46;

    // 地平線の光（動画下部の、海に反射するような水色の光）
    if(cfg.horizon){
      const hp = ease.out(ease.clamp((t - .2)/(T.gather))) * (phase==="after" ? .75 : 1);
      const bump = 1;
      const hg = ctx.createRadialGradient(W*.5, H*1.08, 0, W*.5, H*1.08, Math.max(W*.75, H*.7));
      hg.addColorStop(0, `rgba(214,238,250,${.55*hp*bump})`);
      hg.addColorStop(.18, `rgba(150,196,220,${.38*hp*bump})`);
      hg.addColorStop(.45, `rgba(70,100,140,${.22*hp})`);
      hg.addColorStop(1, "rgba(20,30,60,0)");
      ctx.fillStyle = hg; ctx.fillRect(0,0,W,H);
      // 地平線の細い光の帯
      const ly = H*.86;
      const lg = ctx.createLinearGradient(0,0,W,0);
      lg.addColorStop(0,"rgba(220,240,255,0)"); lg.addColorStop(.5,`rgba(235,246,255,${.5*hp*bump})`); lg.addColorStop(1,"rgba(220,240,255,0)");
      ctx.fillStyle = lg; ctx.fillRect(0, ly, W, 1.2);
    }

    // 背景の星（ゆっくり瞬く）
    for(const s of stars){
      const appear = ease.clamp((t*1000 - s.born)/600);
      if(appear<=0) continue;
      const a = appear*(.25+.75*Math.pow(Math.sin(t*s.sp+s.ph),2));
      ctx.fillStyle=`rgba(${s.c},${a})`;
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,6.29); ctx.fill();
      if(s.r>1.3 && a>.85) glint(s.x,s.y,s.r*3,a*.5,0);
    }

    // 星屑が渦を描きながら中心へ
    if(phase!=="after"){
      const p = ease.clamp((t - T.dust0)/(T.gather - T.dust0));
      for(const d of dust){
        const q = ease.inOut(ease.clamp((p - d.delay*.4)/(1 - d.delay*.4)));
        if(q<=0 && t<T.dust0) continue;
        const dist = d.d0*(1-q), ang = d.a + d.spin*q*2.4;
        const x = cx + Math.cos(ang)*dist, y = cy + Math.sin(ang)*dist;
        const a = Math.min(1, (t - T.dust0)*2) * (1 - Math.max(0,(q-.92)/.08));
        if(a<=0) continue;
        ctx.fillStyle=`rgba(${d.c},${a})`;
        ctx.beginPath(); ctx.arc(x,y,d.r*(1+q*.6),0,6.29); ctx.fill();
        // 尾
        const ang2 = ang - d.spin*.08, dist2 = dist*1.06+6;
        ctx.strokeStyle=`rgba(${d.c},${a*.35})`; ctx.lineWidth=d.r*.8;
        ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(cx+Math.cos(ang2)*dist2, cy+Math.sin(ang2)*dist2); ctx.stroke();
      }
    }

    // 中心の星：集まるほど明るく → 強く瞬く
    const m = Math.min(W,H);
    if(t > T.dust0){
      const grow = ease.out(ease.clamp((t - T.dust0)/(T.gather - T.dust0)));
      let size = m*(.015 + grow*.05), alpha = .3 + grow*.7, rot = t*.25;
      // 予兆の小刻みな脈動
      if(t > T.gather - .3*cfg.speed && t < T.burst) size *= 1 + .12*Math.sin(t*38);
      // バースト：一瞬で大きく
      if(t >= T.burst){
        const b = ease.clamp((t - T.burst)/(.55));
        size = m*(.065 + ease.out(b)*.9); alpha = 1 - b*.85; rot += b*.4;
      }
      if(phase==="after"){ // 詳細表示後：控えめに残る
        const b = ease.clamp((t - T.reveal)/1.2);
        size = m*(.04); alpha = .15*b;
      }
      glint(cx,cy,size,alpha,rot);
      if(t >= T.burst && phase!=="after") glint(cx,cy,size*.55,alpha*.9,rot+Math.PI/4);
    }
    raf = requestAnimationFrame(frame);
  }

  function later(fn,ms){ timers.push(setTimeout(fn,ms)); }
  function playNight(w){
    target = w;
    const seen = sessionStorage.getItem("nono-new-seen") === w.id;
    if(REDUCED){ nightOn(false); revealNow(); return; }
    nightOn(true);
    if(cfg.skipRepeat && seen){ // 2回目以降は短縮
      t0 = performance.now() - TL().burst*1000;
      flash.classList.remove("go"); void flash.offsetWidth; flash.classList.add("go");
      later(revealNow, 200);
      return;
    }
    const T = TL();
    later(()=>skip.classList.add("show"), 600);
    later(()=>{ copy.classList.remove("show"); void copy.offsetWidth; copy.classList.add("show"); }, T.dust0*1000);
    later(()=>{ flash.classList.remove("go"); void flash.offsetWidth; flash.classList.add("go"); }, T.burst*1000);
    later(revealNow, T.reveal*1000);
  }
  function nightOn(anim){
    timers.forEach(clearTimeout); timers=[];
    size(); seed(); phase="intro"; running = true;
    night.classList.remove("is-done");
    night.classList.add("is-on"); night.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
    skip.classList.remove("show"); copy.classList.remove("show");
    cancelAnimationFrame(raf); t0 = performance.now(); raf = requestAnimationFrame(frame);
    if(!anim) t0 -= 10000;
  }
  function revealNow(){
    timers.forEach(clearTimeout); timers=[];
    running = false; phase = "after";
    sessionStorage.setItem("nono-new-seen", target.id);
    t0 = performance.now() - TL().reveal*1000; // 星空を落ち着いた状態へ
    night.classList.add("is-done");
    const keepNight = cfg.revealTheme === "夜空のまま";
    if(!keepNight){ nightOff(); }
    showDialog(target, {night:keepNight, reveal:true});
  }
  function finish(){ // SKIP / 画面タップ
    if(!running) return;
    flash.classList.remove("go"); void flash.offsetWidth; flash.classList.add("go");
    revealNow();
  }
  function nightOff(){
    timers.forEach(clearTimeout); timers=[]; running=false; phase="idle";
    night.classList.remove("is-on"); night.setAttribute("aria-hidden","true");
    setTimeout(()=>{ if(!night.classList.contains("is-on")) cancelAnimationFrame(raf); }, 800);
  }
  night.addEventListener("click", finish, { signal });
  skip.addEventListener("click", e=>{ e.stopPropagation(); finish(); }, { signal });

  list.classList.add("feature-big");
  render();

  // トップページなどから /discography?w=作品ID で来たら、その作品をすぐ開く
  const wanted = new URLSearchParams(location.search).get("w");
  if(wanted){
    const w = WORKS.find(x => x.id === wanted);
    if(w) later(() => open(w), 500);
    history.replaceState(null, "", location.pathname);
  }

  // ページを離れるときの後片付け
  return () => {
    ac.abort();
    timers.forEach(clearTimeout);
    cancelAnimationFrame(raf);
    document.body.style.overflow = "";
  };
}
