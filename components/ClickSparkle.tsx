"use client";
import React, { useEffect, useRef } from 'react';

// エラーの原因だった宣言部分を正しく修正しました
export const ClickSparkle = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        // 可愛いパステルカラー
        const colors = ['#FFD1DC', '#B2EBF2', '#FFF9C4', '#F8BBD0', '#FFFFFF'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = Math.random() * 6 + 2;
        this.speedX = (Math.random() - 0.5) * 6;
        this.speedY = (Math.random() - 0.5) * 6;
        this.opacity = 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.015;
        if (this.size > 0.1) this.size -= 0.05;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // キラキラした星のような形
        ctx.moveTo(this.x, this.y - this.size);
        ctx.lineTo(this.x + this.size * 0.2, this.y - this.size * 0.2);
        ctx.lineTo(this.x + this.size, this.y);
        ctx.lineTo(this.x + this.size * 0.2, this.y + this.size * 0.2);
        ctx.lineTo(this.x, this.y + this.size);
        ctx.lineTo(this.x - this.size * 0.2, this.y + this.size * 0.2);
        ctx.lineTo(this.x - this.size, this.y);
        ctx.lineTo(this.x - this.size * 0.2, this.y - this.size * 0.2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 12; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].opacity <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousedown', handleClick);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999, // これで最前面にきます
      }}
    />
  );
};