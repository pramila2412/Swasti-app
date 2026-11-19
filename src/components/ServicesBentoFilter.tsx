'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './reactbits/SpotlightCard';
import ShinyText from './reactbits/ShinyText';
import {
  Activity,
  Stethoscope,
  Flame,
  FlaskConical,
  ChevronRight,
  Sparkles,
  Layers,
} from 'lucide-react';
import type { Service } from '@/lib/api';

interface ServicesBentoFilterProps {
  services: Service[];
}

export default function ServicesBentoFilter({ services }: ServicesBentoFilterProps) {
  const [activeTab, setActiveTab] = useState<'ALL' | 'SCANS' | 'CLINICS' | 'THERAPY' | 'LAB'>('ALL');

  const categories = [
    { id: 'ALL', label: 'All Services', icon: Layers, count: services.length },
    { id: 'SCANS', label: 'PET/CT & Scans', icon: Activity, count: services.filter(s => s.category === 'SCANS').length },
    { id: 'CLINICS', label: 'Specialist Clinics', icon: Stethoscope, count: services.filter(s => s.category === 'CLINICS').length },
    { id: 'THERAPY', label: 'Advanced Theranostics', icon: Flame, count: services.filter(s => s.category === 'THERAPY').length },
    { id: 'LAB', label: 'Pathology & ECG', icon: FlaskConical, count: services.filter(s => s.category === 'LAB').length },
  ];

  const filteredServices = activeTab === 'ALL'
    ? services
    : services.filter((s) => s.category === activeTab);

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'SCANS':
        return {
          icon: Activity,
          color: 'teal',
          spotlight: 'rgba(20, 184, 166, 0.22)',
          hrefPrefix: '/scans',
        };
      case 'CLINICS':
        return {
          icon: Stethoscope,
          color: 'blue',
          spotlight: 'rgba(14, 165, 233, 0.22)',
          hrefPrefix: '/clinics',
        };
      case 'THERAPY':
        return {
          icon: Flame,
          color: 'amber',
          spotlight: 'rgba(245, 158, 11, 0.22)',
          hrefPrefix: '/therapy',
        };
      case 'LAB':
        return {
          icon: FlaskConical,
          color: 'emerald',
          spotlight: 'rgba(16, 185, 129, 0.22)',
          hrefPrefix: '/lab',
        };
      default:
        return {
          icon: Activity,
          color: 'teal',
          spotlight: 'rgba(20, 184, 166, 0.22)',
          hrefPrefix: '/scans',
        };
    }
  };

  return (
    <div className="space-y-8">
      {/* Interactive Category Filter Pills */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md max-w-fit sm:mx-auto">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`relative px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 whitespace-nowrap ${
                isActive
                  ? 'text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-category-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 shadow-md shadow-teal-500/25"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Spotlight Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service) => {
            const theme = getCategoryTheme(service.category);
            const Icon = theme.icon;
            const detailHref = `${theme.hrefPrefix}/${service.slug}`;

            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.35 }}
              >
                <SpotlightCard
                  spotlightColor={theme.spotlight}
                  className="h-full p-6 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div>
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-13 h-13 rounded-2xl bg-teal-50 dark:bg-teal-950/70 border border-teal-200/80 dark:border-teal-800/80 text-teal-600 dark:text-teal-400 p-3 flex items-center justify-center transition-transform group-hover:scale-110">
                        <Icon className="w-6 h-6" />
                      </div>
                      {service.badge && (
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                          <ShinyText text={service.badge} speed={3.5} />
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {service.shortDesc}
                    </p>

                    {/* Prep Tips / Machine Highlights */}
                    {service.prepTips && (
                      <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-3 mb-4 text-xs text-slate-600 dark:text-slate-300">
                        <span className="font-bold text-teal-800 dark:text-teal-300 block mb-0.5 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-teal-500" />
                          Preparation Protocol:
                        </span>
                        <span className="line-clamp-2">{service.prepTips}</span>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/90 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {service.machineDetails || 'Diagnostic Standard'}
                    </span>
                    <Link
                      href={detailHref}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-500 dark:hover:text-slate-950 text-slate-900 dark:text-slate-100 text-xs font-bold transition shadow-sm"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
