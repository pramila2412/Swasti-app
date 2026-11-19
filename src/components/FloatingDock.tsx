'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MessageCircle,
  PhoneCall,
  Activity,
  UserCheck,
  ChevronUp,
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import AppointmentModal from './AppointmentModal';

export default function FloatingDock() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-1.5 p-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-slate-900/10 dark:shadow-teal-950/20 transition-all duration-300">
        {/* Book Scan Primary Trigger */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold text-xs shadow-lg shadow-teal-500/25 transition-all hover:scale-105 active:scale-95"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Scan / OPD</span>
        </button>

        {/* Quick Nav Icons */}
        <Link
          href="/scans/pet-ct-scan"
          className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors tooltip relative group"
          title="Diagnostic Scans"
        >
          <Activity className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span className="sr-only">Diagnostic Scans</span>
        </Link>

        <Link
          href="/about/doctors"
          className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors tooltip relative group"
          title="Specialist Doctors"
        >
          <UserCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
          <span className="sr-only">Our Doctors</span>
        </Link>

        <a
          href="https://wa.me/919400004455?text=Hello%20Swasti%20PET/CT,%20I%20would%20like%20to%20inquire%20about%20a%20scan%20or%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 transition-colors tooltip relative group"
          title="WhatsApp Desk"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="sr-only">WhatsApp Desk</span>
        </a>

        <a
          href="tel:+914712444455"
          className="p-2.5 rounded-full hover:bg-sky-50 dark:hover:bg-sky-950/60 text-sky-600 dark:text-sky-400 transition-colors tooltip relative group"
          title="Direct Emergency Hotline"
        >
          <PhoneCall className="w-4 h-4" />
          <span className="sr-only">Emergency Hotline</span>
        </a>

        <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1" />

        {/* Theme Toggle in Dock */}
        <div className="scale-90">
          <ThemeToggle />
        </div>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
