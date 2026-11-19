'use client';

import React from 'react';

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AuroraBackground({
  children,
  className = '',
}: AuroraBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Ambient gradient meshes */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-teal-400/20 dark:bg-teal-500/15 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
      <div className="pointer-events-none absolute -top-20 -right-40 w-96 h-96 rounded-full bg-cyan-400/20 dark:bg-cyan-500/15 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse [animation-delay:2s]" />
      <div className="pointer-events-none absolute top-1/2 left-1/3 w-[30rem] h-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/15 dark:bg-emerald-500/10 blur-[140px] mix-blend-multiply dark:mix-blend-screen" />

      {/* Subtle modern dot-grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.06] dark:opacity-[0.12]" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
