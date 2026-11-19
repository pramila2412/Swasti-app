'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TrueFocusProps {
  sentence: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
  className?: string;
}

export default function TrueFocus({
  sentence = 'Precision Molecular Nuclear Imaging',
  manualMode = false,
  blurAmount = 4,
  borderColor = '#0d9488',
  glowColor = 'rgba(13, 148, 136, 0.45)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 2,
  className = '',
}: TrueFocusProps) {
  const words = sentence.split(' ');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (manualMode) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);
    return () => clearInterval(interval);
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  return (
    <div className={`relative inline-flex flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            onMouseEnter={() => manualMode && setCurrentIndex(index)}
            className="relative cursor-pointer select-none px-2 py-1 transition-all duration-300"
            style={{
              filter: isActive ? 'blur(0px)' : `blur(${blurAmount}px)`,
              opacity: isActive ? 1 : 0.45,
              transform: isActive ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            {isActive && (
              <motion.span
                layoutId="focus-box"
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  border: `2px solid ${borderColor}`,
                  boxShadow: `0 0 18px ${glowColor}`,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                }}
              >
                {/* Glowing corner bracket accents */}
                <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-teal-400" />
                <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-teal-400" />
                <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-teal-400" />
                <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-teal-400" />
              </motion.span>
            )}
            <span className="font-black tracking-tight">{word}</span>
          </span>
        );
      })}
    </div>
  );
}
