'use client';

import React from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export default function ShinyText({
  text,
  disabled = false,
  speed = 3.5,
  className = '',
}: ShinyTextProps) {
  return (
    <span
      className={`inline-block text-transparent bg-clip-text bg-[linear-gradient(110deg,#0f766e,40%,#2dd4bf,50%,#0f766e,60%)] dark:bg-[linear-gradient(110deg,#94a3b8,40%,#ffffff,50%,#94a3b8,60%)] bg-[length:250%_100%] ${
        !disabled ? 'animate-shiny-text' : ''
      } ${className}`}
      style={{
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
}
