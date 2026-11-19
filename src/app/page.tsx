import React from 'react';
import Link from 'next/link';
import {
  apiGetSettings,
  apiGetServices,
  apiGetDoctors,
  apiGetArticles,
} from '@/lib/api';
import HeroSlider from '@/components/HeroSlider';
import StatsCounterSection from '@/components/StatsCounterSection';
import ServicesBentoFilter from '@/components/ServicesBentoFilter';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import ShinyText from '@/components/reactbits/ShinyText';
import BlurText from '@/components/reactbits/BlurText';
import TiltedCard from '@/components/reactbits/TiltedCard';
import TrueFocus from '@/components/reactbits/TrueFocus';
import AuroraBackground from '@/components/reactbits/AuroraBackground';
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  ChevronRight,
  ArrowRight,
  Calendar,
  Flame,
  Sparkles,
  MapPin,
  Clock,
  Phone,
  Radio,
} from 'lucide-react';

export const revalidate = 60; // ISR cache revalidation

export default async function HomePage() {
  const [setting, services, doctors, events, blogs] = await Promise.all([
    apiGetSettings(),
    apiGetServices(),
    apiGetDoctors(),
    apiGetArticles('EVENT'),
    apiGetArticles('BLOG'),
  ]);

  const therapies = services.filter((s) => s.category === 'THERAPY');

  return (
    <div className="space-y-16 lg:space-y-28 pb-24 overflow-x-hidden">
      {/* 1. Hero Dynamic Banner */}
      <HeroSlider settings={setting || undefined} />

      {/* 2. Interactive KPI Stats Bento (React Bits CountUp & SpotlightCard) */}
      <StatsCounterSection />

      {/* 3. Welcome & Facility Feature (React Bits TrueFocus, BlurText, TiltedCard) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/70 border border-teal-200/80 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>A Unit of Nucleuz Healthcare Pvt. Ltd.</span>
            </div>

            <div className="space-y-2">
              <TrueFocus
                sentence="Precision Molecular Nuclear Diagnostics"
                blurAmount={3.5}
                borderColor="#0d9488"
                glowColor="rgba(13, 148, 136, 0.4)"
                className="text-sm font-bold text-teal-600 dark:text-teal-400 mb-1"
              />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                <BlurText
                  text="Pioneering Molecular Imaging & Targeted Theranostics in Trivandrum"
                  delay={35}
                />
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Welcome to <strong>Swasti PET/CT Imaging and Nuclear Medicine</strong>. We are South Kerala&apos;s flagship center of clinical excellence dedicated to providing ultra-high-definition oncology scans, specialized physician OPD clinics, automated clinical pathology, and targeted radionuclide cancer therapies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <SpotlightCard className="p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">AERB Licensed Hot Lab</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Strict radiation safety standards &amp; qualified physicists.</p>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">High-Precision Scanners</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Fast acquisition, reduced radiotracer dose, sharp lesion clarity.</p>
                </div>
              </SpotlightCard>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold text-sm transition shadow-lg shadow-teal-500/25 hover:scale-105 active:scale-95"
              >
                <span>Read Company Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/md"
                className="text-sm font-bold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 underline underline-offset-4"
              >
                Managing Director&apos;s Desk &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <TiltedCard maxAngle={7} scale={1.02}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-[4/3] bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80"
                  alt="Swasti Modern Diagnostic Imaging Facility"
                  className="w-full h-full object-cover object-center brightness-95 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Center Operational Daily</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-wider mb-1">Ulloor, Trivandrum Facility</span>
                  <h3 className="text-xl sm:text-2xl font-bold">Comprehensive Nuclear Medicine &amp; Diagnostic Suite</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal-400" />
                    <span>Sreelekshmi Building, Medical College P.O. Junction, Ulloor</span>
                  </p>
                </div>
              </div>
            </TiltedCard>
          </div>
        </div>
      </section>

      {/* 4. Interactive Services Bento Section with React Bits Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/70 border border-teal-200/80 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Full Diagnostic &amp; Therapy Suite</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Clinical Offerings &amp; Specialties
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
              Switch between categories to explore ultra-high-definition scans, specialized physician OPDs, radioactive cancer therapies, and automated lab pathology.
            </p>
          </div>
          <Link
            href="/scans/pet-ct-scan"
            className="inline-flex items-center gap-1.5 text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-bold text-sm group"
          >
            <span>Complete Scan Catalog</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Interactive React Bits Bento Filter Grid */}
        <ServicesBentoFilter services={services} />
      </section>

      {/* 5. Section: ADVANCED THERANOSTICS (React Bits Aurora Background) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AuroraBackground className="rounded-3xl bg-slate-950 text-white p-8 sm:p-14 shadow-2xl border border-teal-500/20">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/40 text-xs font-bold uppercase tracking-wider mb-4">
              <Flame className="w-4 h-4 text-teal-400" />
              <span>AERB Licensed Radionuclide Theranostics</span>
            </div>

            <div className="max-w-3xl mb-10 space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                South Kerala&apos;s Flagship Theranostics Center
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Theranostics bridges precision molecular imaging with targeted radionuclide therapy. We deliver localized beta and alpha therapies for Neuroendocrine Tumors (NETs), metastatic Prostate Cancer, and Thyroid malignancies in dedicated lead-shielded isolation suites.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {therapies.map((therapy) => (
                <SpotlightCard
                  key={therapy.id}
                  spotlightColor="rgba(245, 158, 11, 0.25)"
                  className="rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 p-6 backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold">
                        <Flame className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-amber-300 border border-white/15">
                        <ShinyText text="AERB Licensed" speed={3} />
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{therapy.title}</h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">{therapy.shortDesc}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                    <span className="text-xs text-amber-300/80 font-medium">Isolation Suite</span>
                    <Link
                      href={`/therapy/${therapy.slug}`}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                    >
                      Protocol Details &rarr;
                    </Link>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </AuroraBackground>
      </section>

      {/* 6. Section: FEATURED SPECIALISTS (React Bits Tilted Cards & Spotlight) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/70 border border-teal-200/80 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Medical Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Our Specialists &amp; Consultants
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2">
              Distinguished clinical directors, nuclear medicine pioneers, radiologists, cardiologists, and internists.
            </p>
          </div>
          <Link
            href="/about/doctors"
            className="inline-flex items-center gap-1.5 text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-bold text-sm group"
          >
            <span>View All Doctors &amp; OPD Hours</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <TiltedCard key={doc.id} maxAngle={6} scale={1.02}>
              <SpotlightCard className="overflow-hidden h-full flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <img
                      src={doc.photo || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80'}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-teal-300 border border-white/10">
                      {doc.department}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-teal-700 dark:text-teal-400">{doc.designation}</p>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">{doc.qualification}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 pt-1">{doc.bio}</p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-2">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium pt-3 mb-3 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                    <span className="truncate">{doc.consultationHours}</span>
                  </div>
                  <Link
                    href="/about/doctors"
                    className="block text-center py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/90 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-500 dark:hover:text-slate-950 text-slate-800 dark:text-slate-200 text-xs font-bold transition border border-slate-200/80 dark:border-slate-700"
                  >
                    Consult Specialist
                  </Link>
                </div>
              </SpotlightCard>
            </TiltedCard>
          ))}
        </div>
      </section>

      {/* 7. Section: SPARK EMPANELMENT & REIMBURSEMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SpotlightCard
          spotlightColor="rgba(20, 184, 166, 0.3)"
          className="rounded-3xl bg-gradient-to-r from-teal-900 via-teal-800 to-cyan-950 text-white p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-teal-600/50"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-teal-200 text-xs font-bold uppercase tracking-wider">
              <Radio className="w-3.5 h-3.5 text-teal-300 animate-pulse" />
              <span>Government Employee Scheme Assistance</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Kerala Government SPARK &amp; MEDISEP Reimbursement Guidance
            </h3>
            <p className="text-teal-100 text-sm leading-relaxed">
              We assist Kerala Government employees, teachers, pensioners, and MEDISEP beneficiaries with compliant diagnostic bills, itemized estimates, and documentation required for prompt SPARK portal reimbursement.
            </p>
          </div>

          <Link
            href="/spark"
            className="flex-shrink-0 px-6 py-3.5 rounded-2xl bg-white text-teal-950 font-bold text-sm hover:bg-teal-50 transition shadow-xl hover:scale-105 active:scale-95"
          >
            SPARK Empanelment &amp; Bill Assistance &rarr;
          </Link>
        </SpotlightCard>
      </section>

      {/* 8. Section: EVENTS & BLOGS (React Bits Spotlight Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Events Column */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">Hospital Events &amp; CME</h3>
              <Link href="/events" className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline">
                All Events &rarr;
              </Link>
            </div>

            <div className="space-y-4">
              {events.map((evt) => (
                <SpotlightCard
                  key={evt.id}
                  className="p-5 flex flex-col sm:flex-row gap-4"
                >
                  <div className="w-full sm:w-28 h-28 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                    <img
                      src={evt.coverImage || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=80'}
                      alt={evt.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 text-xs text-teal-700 dark:text-teal-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{evt.eventDate ? new Date(evt.eventDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Upcoming'}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{evt.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">{evt.excerpt}</p>
                    <Link href="/events" className="inline-block text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline pt-1">
                      Read event details &rarr;
                    </Link>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Blogs Column */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">Patient Guides &amp; Blogs</h3>
              <Link href="/blogs" className="text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline">
                All Blogs &rarr;
              </Link>
            </div>

            <div className="space-y-4">
              {blogs.map((b) => (
                <SpotlightCard
                  key={b.id}
                  className="p-5 flex flex-col sm:flex-row gap-4"
                >
                  <div className="w-full sm:w-28 h-28 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
                    <img
                      src={b.coverImage || 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&auto=format&fit=crop&q=80'}
                      alt={b.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Patient Education</span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{b.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">{b.excerpt}</p>
                    <Link href={`/blogs/${b.slug}`} className="inline-block text-xs font-bold text-teal-700 dark:text-teal-400 hover:underline pt-1">
                      Read full article &rarr;
                    </Link>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Final Action Aurora Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AuroraBackground className="rounded-3xl bg-slate-950 text-white p-8 sm:p-14 text-center shadow-2xl border border-slate-800">
          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/40 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Diagnostic Care</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Need a Scan or Doctor Consultation?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our clinical coordinators assist with same-day slots, fasting preparation guidelines, and patient transportation support across Trivandrum.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-black text-sm transition shadow-xl shadow-teal-500/25 hover:scale-105 active:scale-95"
              >
                Contact &amp; Location Map
              </Link>
              <a
                href={`https://wa.me/919400004455?text=Hello%20Swasti%20PET/CT,%20I%20would%20like%20to%20book%20a%20scan.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition hover:scale-105 active:scale-95"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>
        </AuroraBackground>
      </section>
    </div>
  );
}
