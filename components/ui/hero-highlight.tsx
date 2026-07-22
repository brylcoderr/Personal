'use client'

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const HeroHighlight = ({
  children,
  containerClassName,
}: {
  children: React.ReactNode;
  containerClassName?: string;
}) => {
  let [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center group ${containerClassName}`}
    >
      <div
        className="absolute inset-0 bg-dot-thick-neutral-800 pointer-events-none"
      />
      <div className="absolute inset-0 pointer-events-none bg-black mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div
        className="absolute inset-0 z-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
        style={{
          maskImage: `radial-gradient(
            250px circle at ${mousePosition.x}px ${mousePosition.y}px,
            black 0%,
            transparent 100%
          )`,
          WebkitMaskImage: `radial-gradient(
            250px circle at ${mousePosition.x}px ${mousePosition.y}px,
            black 0%,
            transparent 100%
          )`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
