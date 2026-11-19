'use client';

import React from 'react';
import SpotlightCard from './reactbits/SpotlightCard';
import CountUp from './reactbits/CountUp';
import ShinyText from './reactbits/ShinyText';
import { Activity, ShieldCheck, Clock, Award, Sparkles } from 'lucide-react';

export default function StatsCounterSection() {
  const stats = [
    {
      icon: Activity,
      number: 18500,
      suffix: '+',
      title: 'Scans & Therapies',
      subtitle: 'Molecular PET/CT, CT & Gamma imaging completed with precision.',
      badge: 'High Accuracy',
    },
    {
      icon: ShieldCheck,
      number: 100,
      suffix: '%',
      title: 'AERB Radiation Safety',
      subtitle: 'Full regulatory compliance with certified medical physicists.',
      badge: 'Certified',
    },
    {
      icon: Clock,
      number: 30,
      suffix: ' Mins',
      title: 'Rapid Pathology Turnaround',
      subtitle: 'Fast digital reports for routine blood checkups & ECG.',
      badge: 'Same-Day',
    },
    {
      icon: Award,
      number: 18,
      suffix: '+ Years',
      title: 'Clinical Experience',
      subtitle: 'Senior nuclear physicians, radiologists & cardiologists.',
      badge: 'Specialist Led',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <SpotlightCard
              key={idx}
              className="p-6 flex flex-col justify-between group hover:-translate-y-1"
              spotlightColor="rgba(20, 184, 166, 0.22)"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/70 border border-teal-200/60 dark:border-teal-800 text-teal-600 dark:text-teal-400 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <ShinyText text={s.badge} speed={3} />
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
                  <CountUp to={s.number} suffix={s.suffix} duration={2.4} />
                </div>

                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-1">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {s.subtitle}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-teal-700 dark:text-teal-400">
                <Sparkles className="w-3.5 h-3.5 text-teal-500" />
                <span>Verified Diagnostic Standard</span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
