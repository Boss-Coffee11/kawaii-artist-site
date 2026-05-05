// components/FadeIn.tsx
"use client";
import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: string; // "0.1s" など指定できるようにする
}

export const FadeIn = ({ children, delay = "0s" }: Props) => {
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // 1回だけ発火させる
        }
      });
    });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={domRef} className="fade-up" style={{ transitionDelay: delay }}>
      {children}
    </div>
  );
};