'use client';

import React, { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  maxAngle?: number;
  scale?: number;
}

export default function TiltedCard({
  children,
  className = '',
  maxAngle = 8,
  scale = 1.02,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, { stiffness: 260, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 260, damping: 25 });
  const cardScale = useSpring(1, { stiffness: 260, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;

    rotateY.set(xPct * maxAngle);
    rotateX.set(-yPct * maxAngle);
  };

  const handleMouseEnter = () => {
    cardScale.set(scale);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    cardScale.set(1);
  };

  return (
    <div style={{ perspective: 1200 }} className="w-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale: cardScale,
          transformStyle: 'preserve-3d',
        }}
        className={`transition-shadow duration-300 ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
