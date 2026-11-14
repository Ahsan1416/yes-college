'use client';

import React from 'react';
import { Award, GraduationCap, Building2, Users2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeInfo';

export default function StatsCounter() {
  const stats = [
    {
      icon: Award,
      value: '30+',
      label: 'Years of Vocational Heritage',
      sub: 'Founded in 1987 by Beverly Stone'
    },
    {
      icon: GraduationCap,
      value: '12',
      label: 'Nationally Recognised Programs',
      sub: 'ASQA Accredited & CRICOS Registered'
    },
    {
      icon: Users2,
      value: '98%',
      label: 'Graduate Satisfaction',
      sub: 'Student Support & Practical Outcomes'
    },
    {
      icon: Building2,
      value: '2',
      label: 'Campuses: Sydney & Perth',
      sub: 'Parramatta CBD & Perth WA Facilities'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-brand-navy via-brand-navy-light to-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-brand-gold shadow-inner mb-2">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-brand-gold-light">
                  {s.value}
                </span>
              </div>
              <div className="text-sm font-bold text-slate-200">
                {s.label}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {s.sub}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

