'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
}

export default function BlurText({
  text,
  delay = 40,
  className = '',
  animateBy = 'words',
  direction = 'top',
}: BlurTextProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={{
            filter: 'blur(12px)',
            opacity: 0,
            y: direction === 'top' ? -18 : 18,
          }}
          animate={
            isInView
              ? { filter: 'blur(0px)', opacity: 1, y: 0 }
              : { filter: 'blur(12px)', opacity: 0, y: direction === 'top' ? -18 : 18 }
          }
          transition={{
            duration: 0.55,
            delay: (i * delay) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block whitespace-pre"
        >
          {el}
          {animateBy === 'words' && i < elements.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </span>
  );
}
