"use client";
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // 最初は「透明(0)」でスタートします
  const [displayChildren, setDisplayChildren] = useState(children);
  const [opacity, setOpacity] = useState(0); 
  const [isChanging, setIsChanging] = useState(false);

  const startSparkleAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles: any[] = [];
    for (let i = 0; i < 400; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedY: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        color: ['#FFD1DC', '#B2EBF2', '#FFF9C4', '#FFFFFF'][Math.floor(Math.random() * 4)]
      });
    }
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.y += p.speedY; p.opacity -= 0.004;
        ctx.globalAlpha = p.opacity; ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
        if (p.opacity <= 0) particles.splice(i, 1);
      });
      if (particles.length > 0) requestAnimationFrame(animate);
    };
    animate();
  };

  // 初回表示時のじんわり
  useEffect(() => {
    setOpacity(1);
  }, []);

  // ページ遷移時の処理
  useLayoutEffect(() => {
    if (displayChildren === children) return;

    setOpacity(0);
    setIsChanging(true);
    startSparkleAnimation();

    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setOpacity(1);
      setIsChanging(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div style={{ 
      opacity: opacity, 
      transition: 'opacity 0.7s ease-in-out',
      minHeight: '100vh' 
    }}>
      <canvas ref={canvasRef} style={{ 
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
        zIndex: 5, pointerEvents: 'none' 
      }} />
      {displayChildren}
    </div>
  );
};