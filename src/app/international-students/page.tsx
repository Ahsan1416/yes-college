import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Globe2,
  ShieldCheck,
  CheckCircle2,
  Download,
  DollarSign,
  Briefcase,
  HeartHandshake,
  HelpCircle,
  FileCheck,
  Sparkles,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeInfo';

export const metadata: Metadata = {
  title: 'International Students | Subclass 500 Student Visa & Study in Australia',
  description:
    'Complete guide for international students studying at YES College (CRICOS: 03282E). Subclass 500 Visa CoE, Genuine Student (GS) guidelines, living costs, and student support in Sydney & Perth.',
};

export default function InternationalStudentsPage() {
  return (
    <div className="w-full pb-20 space-y-16">
      {/* Banner */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-blue-950 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>CRICOS Provider Code: {COLLEGE_INFO.cricosCode}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            International Students Guide
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
            Welcome to Australia. Explore world-class vocational qualifications, Subclass 500 Student Visa guidance, living in Sydney and Perth, and dedicated overseas student welfare support.
          </p>
        </div>
      </section>

      {/* 4 Step Visa & Enrolment Process */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Step-by-Step
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            How to Enrol &amp; Apply for Your Student Visa
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Select Course & Submit Application',
              desc: 'Choose from our 12 accredited qualifications. Submit your passport, Year 12 academic transcripts, and English test results (IELTS/PTE).'
            },
            {
              step: '02',
              title: 'Letter of Offer & Genuine Student Check',
              desc: 'Our admissions team assesses your application and issues a formal Letter of Offer and Genuine Student (GS) assessment checklist.'
            },
            {
              step: '03',
              title: 'Payment & Confirmation of Enrolment',
              desc: 'Accept your offer, pay initial tuition deposit, and arrange OSHC. We issue your official electronic Confirmation of Enrolment (eCoE).'
            },
            {
              step: '04',
              title: 'Lodge Visa 500 & Orientation',
              desc: 'Apply online for your Australian Student Visa (Subclass 500) through ImmiAccount. Arrive in Sydney/Perth for campus orientation!'
            }
          ].map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-card border border-slate-200/80 relative flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-black text-brand-gold/60 font-mono block mb-2">
                  {s.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Living Costs & Working Rights in Australia */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Work Rights */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-slate-200/80 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Working While Studying in Australia
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              International students on an active Subclass 500 Student Visa in Australia are permitted to work up to <strong>48 hours per fortnight</strong> during academic study terms, and <strong>unlimited hours</strong> during officially scheduled college term breaks and holidays.
            </p>
            <div className="space-y-2 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Protected under the Australian Fair Work Act with minimum wage standards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Opportunities in community care, hospitality, retail, salon, and trade assistants</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>YES College provides resume reviews and Tax File Number (TFN) application support</span>
              </div>
            </div>
          </div>

          {/* Living Costs */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-slate-200/80 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Estimated Cost of Living in Australia
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              The Australian Department of Home Affairs recommends international students budget approximately <strong>AUD \$29,710 per year</strong> for living costs (excluding course tuition).
            </p>
            <div className="space-y-2 text-xs text-slate-700 pt-1">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">Shared Accommodation (Weekly):</span>
                <span className="font-bold text-slate-900">\$200 – \$380 / week</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">Groceries &amp; Food (Weekly):</span>
                <span className="font-bold text-slate-900">\$100 – \$200 / week</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-600">Public Transport (Opal / SmartRider):</span>
                <span className="font-bold text-slate-900">\$35 – \$60 / week</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-600">Phone &amp; Internet:</span>
                <span className="font-bold text-slate-900">\$20 – \$40 / month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Support Services */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Student Welfare
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Overseas Student Support
            </h2>
            <p className="text-sm text-slate-600">
              We understand moving to a new country is a big step. Our friendly student support team is with you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-slate-900">Arrival &amp; Orientation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive orientation covers life in Sydney/Perth, opening Australian bank accounts, public transport cards, and safety in Australia.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-slate-900">Academic &amp; English Help</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Free academic skills workshops, assignment writing guidance, and one-on-one trainer consultations to help you succeed.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-slate-900">Welfare &amp; Wellbeing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Confidential personal counseling, accommodation search assistance, emergency contact services, and medical referrals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Essential International Downloads */}
      <section className="max-w-7xl mx-auto px-4 text-center">
        <div className="bg-brand-navy text-white rounded-3xl p-10 max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">Download Official International Enrolment Documents</h2>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Access the official International Student Enrolment Form and Student Handbook.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="https://yescollege.com.au/wp-content/uploads/2026/04/SMD-Enrolment-Form-International-Students-v5.5.docx"
              target="_blank"
              rel="noreferrer"
              className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold px-6 py-3 rounded-xl text-xs transition-all shadow-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-brand-navy" />
              <span>International Enrolment Form (DOCX)</span>
            </a>
            <a
              href="https://yescollege.com.au/wp-content/uploads/2026/09/YES_College_Student_Handbook.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3 rounded-xl text-xs transition-all border border-white/20 flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Student Handbook (PDF)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

