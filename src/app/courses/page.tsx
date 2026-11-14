import React, { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import CourseFinder from '@/components/CourseFinder';
import { Sparkles, ShieldCheck, Award } from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeInfo';

export const metadata: Metadata = {
  title: 'Accredited Courses & Qualifications | Community Services, Automotive, Beauty, Civil Design',
  description:
    'Browse all 12 nationally recognized vocational courses offered by YES College (RTO 0249, CRICOS 03282E). Certificate III, Certificate IV, Diploma, and Advanced Diploma programs in Sydney & Perth.',
};

export default function CoursesPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const initialCategory = searchParams?.category || 'all';

  return (
    <div className="w-full pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-blue-950 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Australian Qualifications Framework (AQF)</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Nationally Accredited Vocational Courses
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
            Choose from 12 industry-leading qualifications delivering practical vocational excellence, ASQA compliance, and CRICOS visa readiness in Sydney and Perth.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300 font-semibold">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> RTO Code: {COLLEGE_INFO.rtoCode}
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
              <ShieldCheck className="w-4 h-4 text-blue-400" /> CRICOS: {COLLEGE_INFO.cricosCode}
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
              <Award className="w-4 h-4 text-brand-gold" /> VET Student Loans Approved
            </span>
          </div>
        </div>
      </section>

      {/* Main Course Finder & List */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <Suspense fallback={<div className="text-center py-10 font-bold">Loading courses...</div>}>
          <CourseFinder initialCategory={initialCategory} showFilters={true} />
        </Suspense>
      </div>
    </div>
  );
}

