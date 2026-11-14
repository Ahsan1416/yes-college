import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Users2,
  Calendar,
  Sparkles,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeInfo';
import StatsCounter from '@/components/StatsCounter';

export const metadata: Metadata = {
  title: 'About YES College | 30+ Years of Vocational Heritage & 2022 Business Award Winner',
  description:
    'Discover YES College (MVJ Enterprises Pty Ltd). Operating since 1987 with over 30 years of premier vocational training in Parramatta Sydney & Perth. ASQA registered, CRICOS approved.',
};

export default function AboutPage() {
  return (
    <div className="w-full pb-20 space-y-16">
      {/* Banner */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-blue-950 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-brand-gold" />
            <span>Winner: Outstanding Education Services 2022</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            About YES College Australia
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
            Delivering quality, nationally accredited vocational education and training in Sydney and Perth for over 30 years.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Our Heritage &amp; Mission
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Three Decades of Vocational Training Excellence
            </h2>
            <div className="text-slate-700 text-sm md:text-base space-y-4 leading-relaxed">
              <p>
                <strong>MVJ Enterprises Pty Ltd</strong> trading as <strong>YES College</strong> and <strong>Perth College of Beauty Therapy</strong> is a Registered Training Organisation (<strong>RTO Code: 0249</strong>) and CRICOS Provider (<strong>CRICOS Code: 03282E</strong>).
              </p>
              <p>
                We take immense pride in our students’ career achievements, remaining in continuous contact with Australian employers and industry bodies to ensure our curricula reflect the most up-to-date workplace competencies. Our courses combine rigorous theoretical foundations with extensive practical simulations and work placements so our graduates enter the workforce confident and job-ready.
              </p>
              <p>
                Prior to opening our flagship business, community, automotive, and civil construction campus in Parramatta, MVJ Enterprises Pty Ltd traded as Perth College of Beauty Therapy from Perth, Western Australia, delivering premier training for over three decades. There are only a select few private training organisations in Australia with over 30 years of continuous trading history.
              </p>
              <p>
                Originally established as a training company by <strong>Beverly Stone in 1987</strong>, our organisation has trained thousands of professionals. We are accredited by international examining bodies <strong>VTCT</strong> and <strong>ITEC</strong>, registered on CRICOS, and approved for <strong>Austudy</strong> and <strong>VET Student Loans</strong>.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-3 text-xs text-slate-700 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>ASQA Regulated (RTO 0249)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>CRICOS Approved (03282E)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>VTCT &amp; ITEC Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>VET Student Loans Approved</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative space-y-6">
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-slate-200">
              <Image
                src="/images/our-history.png"
                alt="YES College Heritage and History"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Award highlight box */}
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200/80 space-y-2">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4 text-brand-gold" />
                <span>Parramatta Local Business Awards 2022</span>
              </div>
              <h3 className="text-lg font-extrabold text-brand-navy">
                WINNER: Outstanding Education Services
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Honoured by the Parramatta business community and local government for exceptional student support, industry-aligned curricula, and educational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="max-w-7xl mx-auto px-4">
        <StatsCounter />
      </section>

      {/* Timeline of Milestones */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Milestones
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Journey of Growth &amp; Achievement
          </h2>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-slate-200">
          {[
            {
              year: '1987',
              title: 'Founding of Perth College of Beauty Therapy',
              desc: 'Beverly Stone establishes Perth College of Beauty Therapy in Western Australia to provide world-class clinical aesthetics, beauty, and wellness education.'
            },
            {
              year: 'Accreditation',
              title: 'International VTCT & ITEC Recognition',
              desc: 'Attained official examination accreditation from premier British and global beauty examining authorities VTCT and ITEC, setting national training standards.'
            },
            {
              year: 'Expansion',
              title: 'Sydney Parramatta Campus Launch',
              desc: 'MVJ Enterprises expands trading to Parramatta CBD, establishing YES College to deliver comprehensive business, automotive, and civil construction qualifications.'
            },
            {
              year: 'CRICOS',
              title: 'CRICOS Provider Registration (03282E)',
              desc: 'Registered on the Commonwealth Register of Institutions and Courses for Overseas Students, welcoming thousands of international students across 40+ countries.'
            },
            {
              year: '2022',
              title: 'Local Business Awards Winner',
              desc: 'Won the Parramatta Local Business Awards for Outstanding Education Services, solidifying YES College as one of Western Sydney’s premier educational institutes.'
            },
            {
              year: '2026+',
              title: 'Next-Generation Vocational Innovation',
              desc: 'Expanding our state-of-the-art practical training workshops, digital learning portals, and high-demand community services diploma pathways.'
            }
          ].map((item, idx) => (
            <div key={idx} className="relative flex items-start gap-6 pl-4">
              <div className="w-8 h-8 rounded-full bg-brand-navy text-brand-gold text-xs font-bold flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10">
                {idx + 1}
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 flex-1">
                <span className="text-[11px] font-bold text-brand-blue uppercase tracking-wider">
                  {item.year}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200 max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">
            Join Australia’s Longest-Standing Vocational Community
          </h2>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Discover our full range of 12 accredited qualifications and start your journey today.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/courses"
              className="bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-bold px-6 py-3 rounded-xl transition-all shadow-sm"
            >
              Browse All Courses
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold px-6 py-3 rounded-xl transition-colors shadow-sm"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

