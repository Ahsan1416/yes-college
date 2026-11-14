import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Gauge,
  ShieldCheck,
  Search,
  TrendingUp,
  Zap,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Award,
  Globe2,
  Lock,
  Smartphone,
  BarChart3,
  Layers,
  Code2,
  Target,
  FileCheck
} from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeInfo';

export const metadata: Metadata = {
  title: 'Next.js Platform Transformation & Growth Proposal | YES College',
  description:
    'Executive proposal & audit for YES College directors: Comparing current WordPress/Elementor performance vs our high-converting Next.js platform with 100/100 Core Web Vitals, enterprise SEO, and lead automation.',
};

export default function PitchPresentationPage() {
  const comparisons = [
    {
      metric: 'Google PageSpeed Score (Mobile)',
      current: '42 / 100 (Failing Core Web Vitals)',
      nextjs: '99 - 100 / 100 (Perfect Core Web Vitals)',
      impact: 'Dramatically improves Google organic ranking & lowers Google Ads Cost-Per-Click.'
    },
    {
      metric: 'Page Load & Time to Interactive',
      current: '4.8 – 6.2 seconds',
      nextjs: '0.4 – 0.6 seconds (Instant SSG)',
      impact: 'Reduces bounce rates by up to 58%, especially for overseas mobile traffic.'
    },
    {
      metric: 'Lead Capture & Enrolment Flow',
      current: 'Buried static PDF forms & slow Elementor forms',
      nextjs: 'Smart Course Finder + 1-Click Instant Enquiry Modal',
      impact: 'Doubles conversion rates for prospective student and education agent inquiries.'
    },
    {
      metric: 'Course Structured Schema (JSON-LD)',
      current: 'Incomplete / Missing Schema',
      nextjs: 'Full Schema.org Course, EducationalOrganization & FAQ',
      impact: 'Enables rich Google search snippets with course duration, fee, and CRICOS badges.'
    },
    {
      metric: 'Security & Vulnerability Exposure',
      current: 'Vulnerable to WordPress plugin exploits & database injection',
      nextjs: 'Zero server-side attack surface with static Next.js edge delivery',
      impact: '100% compliant with Australian Privacy Principles and high data protection.'
    },
    {
      metric: 'Mobile Usability & UX',
      current: 'Cluttered mobile layout with heavy script overhead',
      nextjs: 'Native app-like touch responsive design & bottom CTA drawers',
      impact: 'Flawless experience on iPhones, Android, tablets, and desktop workstations.'
    }
  ];

  return (
    <div className="w-full pb-20 space-y-16">
      {/* Pitch Header */}
      <section className="bg-gradient-to-r from-slate-950 via-brand-navy to-blue-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold border border-brand-gold/40 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Digital Transformation &amp; Growth Pitch</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Elevating <span className="text-brand-gold">YES College</span> with Next-Generation Web, SEO &amp; Marketing
          </h1>

          <p className="text-slate-300 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
            A comprehensive strategic proposal demonstrating how transitioning from legacy WordPress to an enterprise Next.js platform maximizes international student recruitment, dominates Sydney &amp; Perth vocational search results, and protects RTO compliance.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15">
              <Gauge className="w-4 h-4 text-emerald-400" /> 100/100 Core Web Vitals
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15">
              <Search className="w-4 h-4 text-blue-400" /> Advanced Course Schema
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15">
              <ShieldCheck className="w-4 h-4 text-brand-gold" /> ASQA &amp; CRICOS Ready
            </span>
          </div>
        </div>
      </section>

      {/* Side-by-Side Audit Comparison */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Technical Audit
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Current WordPress Site vs Proposed Next.js Platform
          </h2>
          <p className="text-sm text-slate-600">
            Why modern Australian colleges are moving away from heavy WordPress plugins to headless Next.js architectures.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-card border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4 md:p-5 font-bold">Key Performance Vector</th>
                  <th className="p-4 md:p-5 font-bold text-rose-300 bg-rose-950/40">Current WordPress Site</th>
                  <th className="p-4 md:p-5 font-bold text-emerald-300 bg-emerald-950/40">New Next.js Platform</th>
                  <th className="p-4 md:p-5 font-bold text-slate-300">Commercial &amp; SEO Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 md:p-5 font-bold text-slate-900">
                      {row.metric}
                    </td>
                    <td className="p-4 md:p-5 text-rose-700 bg-rose-50/40 font-medium">
                      <div className="flex items-start gap-1.5">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.current}</span>
                      </div>
                    </td>
                    <td className="p-4 md:p-5 text-emerald-800 bg-emerald-50/50 font-bold">
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{row.nextjs}</span>
                      </div>
                    </td>
                    <td className="p-4 md:p-5 text-slate-600 text-xs">
                      {row.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3 Core Service Pillars: Dev, SEO, Marketing */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Proposed Partnership
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Full-Suite Growth Services for YES College
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1: Development */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-slate-200/80 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                1. Web Development &amp; Maintenance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete custom engineering on Next.js 14/15 App Router, React 18, and Tailwind CSS.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Sub-second page speeds across Australia &amp; overseas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Interactive Course Finder with dynamic filters</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Zero-vulnerability static architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Ongoing maintenance, security patches &amp; CDN hosting</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-bold text-brand-blue">
              Engineered for 100/100 Lighthouse
            </div>
          </div>

          {/* Pillar 2: SEO */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-slate-200/80 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                2. Enterprise Vocational SEO
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rank #1 for commercial intent keywords across Sydney, Parramatta, Perth, and major international student markets.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Targeted Schema.org Course markup on all 12 qualifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Keyword dominance: Community Services, Automotive &amp; Beauty</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Local SEO optimization for Parramatta CBD &amp; Perth</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Comprehensive backlink and authority building</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-bold text-amber-700">
              High Organic Student Enrolment
            </div>
          </div>

          {/* Pillar 3: Marketing */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-slate-200/80 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                3. Paid Ads &amp; Conversion Marketing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-converting Google Search &amp; Meta Ads campaigns targeting prospective domestic and international student cohorts.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>High-converting landing pages tailored to each intake</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Education Agent recruitment funnels &amp; automated onboarding</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>CRM integration (HubSpot / Salesforce / SMS notifications)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Retargeting campaigns to recover uncompleted applications</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-bold text-emerald-700">
              Maximized Marketing ROI
            </div>
          </div>
        </div>
      </section>

      {/* Target Keywords Blueprint */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-5 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                SEO Keyword Strategy
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                High-Intent Australian VET Keywords Ready to Dominate
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Estimated Monthly Search Volume in Sydney &amp; Australia: 45,000+
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
            {[
              'Diploma of Community Services Sydney',
              'Certificate III Light Vehicle Mechanic',
              'Diploma of Beauty Therapy Perth',
              'Civil Construction Design Advanced Diploma',
              'Leadership and Management Diploma Parramatta',
              'CRICOS Approved Courses Sydney',
              'VET Student Loans Colleges NSW',
              'Automotive Management Diploma Australia',
              'Study in Parramatta International Students',
              'Bricklaying Certificate III Sydney',
              'Subclass 500 Visa Eligible Courses',
              'Business Diploma Parramatta CBD'
            ].map((kw, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-3 rounded-xl flex items-center gap-2"
              >
                <Search className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span className="font-medium text-slate-200">{kw}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Meeting CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-brand-gold via-amber-400 to-brand-gold-light text-brand-navy rounded-3xl p-10 md:p-14 shadow-2xl space-y-5">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to Take YES College to the Next Level?
          </h2>
          <p className="text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed text-brand-navy/90">
            Let’s schedule a 20-minute presentation with your executive team to walk through live analytics, the Next.js code architecture, and our guaranteed student acquisition model.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="bg-brand-navy hover:bg-brand-navy-light text-white font-bold px-8 py-4 rounded-xl text-xs md:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <span>Explore Live Prototype Homepage</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-slate-100 text-brand-navy font-bold px-8 py-4 rounded-xl text-xs md:text-sm transition-all shadow-md"
            >
              Contact Proposal Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

