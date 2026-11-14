'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Download,
  ShieldCheck,
  CheckCircle2,
  Filter,
  Search,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { RESOURCE_DOCS, ResourceDoc } from '@/data/forms';

export default function DocumentsAndFormsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Documents' },
    { id: 'Student Forms', name: 'Student Forms' },
    { id: 'Policies & Procedures', name: 'Policies & Procedures' },
    { id: 'VET Student Loans', name: 'VET Student Loans (VSL)' },
    { id: 'Academic Information', name: 'Academic Calendars' }
  ];

  const filteredDocs = RESOURCE_DOCS.filter((doc) => {
    if (selectedCategory !== 'all' && doc.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchesTitle = doc.title.toLowerCase().includes(q);
      const matchesDesc = doc.description.toLowerCase().includes(q);
      return matchesTitle || matchesDesc;
    }
    return true;
  });

  return (
    <div className="w-full pb-20 space-y-12">
      {/* Banner */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-blue-950 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Official College Documentation</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Documents, Handbooks &amp; Policies
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
            Download official student handbooks, enrolment applications, academic calendars, VET Student Loans fact sheets, and college policies in compliance with ASQA and the ESOS National Code.
          </p>
        </div>
      </section>

      {/* Main Directory */}
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Filter Controls */}
        <div className="bg-white rounded-2xl p-5 shadow-card border border-slate-200/80 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-8 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search document title or keyword (e.g. handbook, refund, deferral, VSL)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue bg-slate-50 text-slate-900 placeholder:text-slate-400"
              />
            </div>
            <div className="md:col-span-4 text-right text-xs text-slate-500 font-medium">
              Showing <strong>{filteredDocs.length}</strong> of {RESOURCE_DOCS.length} documents
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-card border border-slate-200/80 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded uppercase">
                    {doc.format} {doc.fileSize ? `• ${doc.fileSize}` : ''}
                  </span>
                  <span className="text-[11px] font-semibold text-brand-blue bg-blue-50 px-2 py-0.5 rounded">
                    {doc.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors leading-snug">
                  {doc.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100">
                <a
                  href={doc.downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-brand-navy hover:text-white text-slate-800 font-bold py-2.5 px-4 rounded-xl text-xs transition-all border border-slate-200 group-hover:border-brand-navy"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Document</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

