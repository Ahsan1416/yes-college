'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  ExternalLink,
  CheckCircle2,
  Send,
  Heart
} from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeInfo';
import { COURSES } from '@/data/courses';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-8 border-t-4 border-brand-gold relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Top Grid: Brand & Accreditation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/95 p-3 rounded-2xl inline-block shadow-md">
              <Image
                src="/images/logo.png"
                alt="YES College Australia"
                width={200}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              <strong>{COLLEGE_INFO.legalName}</strong> trading as <strong className="text-white">YES College</strong> and <strong className="text-white">Perth College of Beauty Therapy</strong>. Delivering premier, nationally accredited vocational education and training in Sydney and Perth for over 30 years.
            </p>

            {/* Official Accreditation Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/15 flex items-center gap-2">
                <Image
                  src="/images/nrt-logo.png"
                  alt="Nationally Recognised Training Australia"
                  width={60}
                  height={35}
                  className="h-7 w-auto object-contain brightness-0 invert"
                />
                <span className="text-[11px] font-semibold text-white leading-tight">
                  Nationally Recognised<br />Training
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/15 flex items-center gap-2">
                <Image
                  src="/images/aqf-logo.jpg"
                  alt="Australian Qualifications Framework"
                  width={50}
                  height={30}
                  className="h-7 w-auto object-contain rounded"
                />
                <span className="text-[11px] font-semibold text-white leading-tight">
                  AQF<br />Framework
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/40 text-brand-gold-light text-xs font-semibold px-3 py-1.5 rounded-full">
              <Award className="w-4 h-4 text-brand-gold" />
              <span>Parramatta Local Business Awards WINNER 2022</span>
            </div>
          </div>

          {/* Courses Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-brand-gold/40 pb-2 inline-block">
              Accredited Programs
            </h4>
            <ul className="space-y-2 text-xs">
              {COURSES.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/courses/${c.id}`}
                    className="hover:text-brand-gold transition-colors block line-clamp-1"
                  >
                    • {c.code} {c.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/courses" className="text-brand-gold hover:underline font-semibold flex items-center gap-1">
                  View All 12 Programs &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Hub Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-brand-gold/40 pb-2 inline-block">
              Student Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/international-students" className="hover:text-white transition-colors">
                  International Student Guide (Subclass 500)
                </Link>
              </li>
              <li>
                <Link href="/campus" className="hover:text-white transition-colors">
                  Parramatta &amp; Perth Campuses
                </Link>
              </li>
              <li>
                <Link href="/documents-and-forms" className="hover:text-white transition-colors">
                  Student Handbooks &amp; Policies
                </Link>
              </li>
              <li>
                <Link href="/documents-and-forms" className="hover:text-white transition-colors">
                  Complaints &amp; Appeals Procedure
                </Link>
              </li>
              <li>
                <Link href="/education-agents" className="hover:text-white transition-colors">
                  Education Agents Directory &amp; Portal
                </Link>
              </li>
              <li>
                <Link href="/documents-and-forms" className="hover:text-white transition-colors">
                  VET Student Loans (VSL) Info
                </Link>
              </li>
              <li>
                <Link href="/pitch-presentation" className="text-brand-gold hover:underline font-bold flex items-center gap-1">
                  ⚡ Next.js Pitch &amp; Performance Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Campus Contacts & Newsletter */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-brand-gold/40 pb-2 inline-block">
              Campus &amp; Admissions
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Sydney Campus:</strong>
                  <p>43-45 Marion St &amp; Level 3, 106 Church St, Parramatta NSW 2150</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`tel:${COLLEGE_INFO.phone}`} className="hover:text-white font-medium">
                  {COLLEGE_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`mailto:${COLLEGE_INFO.email}`} className="hover:text-white">
                  {COLLEGE_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Mon – Fri: 9:00 AM – 5:00 PM</span>
              </div>
            </div>

            {/* Quick Intake Alert */}
            <div className="mt-5 pt-4 border-t border-white/10">
              <span className="text-[11px] font-bold text-white uppercase block mb-1.5">
                Intake Alerts &amp; Updates:
              </span>
              {subscribed ? (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 p-2 rounded-lg border border-emerald-700/50">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed! We will alert you on next intakes.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-1.5">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-white/10 border border-white/20 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand-gold flex-1"
                  />
                  <button
                    type="submit"
                    className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Middle Regulatory Notice */}
        <div className="py-6 border-b border-white/10 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-200">Regulatory Compliance Notice:</strong> MVJ Enterprises Pty Ltd (ABN {COLLEGE_INFO.abn}) is registered as an Australian Registered Training Organisation (RTO Code: {COLLEGE_INFO.rtoCode}) by the Australian Skills Quality Authority (ASQA) and operates as an authorized Commonwealth Register of Institutions and Courses for Overseas Students (CRICOS Provider Code: {COLLEGE_INFO.cricosCode}).
          </p>
          <p>
            All vocational qualifications, certificates, and diplomas issued by YES College adhere strictly to the Standards for RTOs 2015, the Education Services for Overseas Students (ESOS) Act 2000, and the National Code of Practice for Providers of Education and Training to Overseas Students 2018.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Acknowledgement */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {COLLEGE_INFO.shortName}. All Rights Reserved. RTO Code: {COLLEGE_INFO.rtoCode} | CRICOS: {COLLEGE_INFO.cricosCode}.
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/documents-and-forms" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/documents-and-forms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/documents-and-forms" className="hover:text-white transition-colors">
              Student Complaints
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

