'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Gauge, ShieldCheck } from 'lucide-react';

export default function PitchBanner() {
  return (
    <aside aria-label="Pitch presentation notification" className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-blue-900 text-white text-xs border-b border-brand-gold/30 relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-gold text-brand-navy uppercase tracking-wider shadow-sm animate-pulse">
            Next.js Prototype
          </span>
          <span className="font-medium text-slate-200">
            Engineered for YES College: 100/100 Core Web Vitals, Enterprise SEO Schema &amp; High-Converting CRO
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex items-center gap-1 text-emerald-400 font-semibold">
            <Gauge className="w-3.5 h-3.5" /> 99+ Speed Score
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-blue-300 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" /> ASQA &amp; CRICOS Ready
          </span>
          <Link
            href="/pitch-presentation"
            className="inline-flex items-center gap-1.5 bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold px-3 py-1 rounded-full text-[11px] transition-all shadow-sm hover:scale-105"
          >
            <Sparkles className="w-3 h-3 text-brand-navy" />
            <span>Why Switch to Next.js? (Pitch &amp; Audit)</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

