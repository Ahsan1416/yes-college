'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Award,
  Clock,
  MapPin,
  PhoneCall,
  Calendar,
  Download,
  Users,
  Compass,
  FileCheck,
  Building2,
  Briefcase,
  ChevronRight,
  Star
} from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeInfo';
import { COURSES } from '@/data/courses';
import { RESOURCE_DOCS } from '@/data/forms';
import CourseFinder from '@/components/CourseFinder';
import StatsCounter from '@/components/StatsCounter';
import EnquiryModal from '@/components/EnquiryModal';

export default function HomePage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedCampusTab, setSelectedCampusTab] = useState<'sydney' | 'perth'>('sydney');

  return (
    <div className="w-full space-y-20 pb-20 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-900 via-brand-navy to-brand-navy-light text-white pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden">
        {/* Glow ambient spots */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Award Pill */}
              <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/40 text-brand-gold-light text-xs font-bold px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm">
                <Award className="w-4 h-4 text-brand-gold" />
                <span>Winner: Parramatta Local Business Awards 2022</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                Yes to Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-300 to-brand-gold-light">
                  Bright Future
                </span>{' '}
                in Australia.
              </h1>

              {/* Subhead */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Australia’s trusted vocational education destination for over 30 years. Offering{' '}
                <strong className="text-white font-semibold">12 nationally recognised qualifications</strong> across Community Services, Automotive Mechanics, Beauty Therapy, Civil Construction, and Business Leadership.
              </p>

              {/* RTO & CRICOS Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-300 pt-1">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>RTO Code: {COLLEGE_INFO.rtoCode} (ASQA)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>CRICOS: {COLLEGE_INFO.cricosCode} (Subclass 500 Visa)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/15">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span>Parramatta, Sydney &amp; Perth</span>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setEnquiryModalOpen(true)}
                  className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <GraduationCap className="w-5 h-5 text-brand-navy" />
                  <span>Apply for 2026 / 2027 Intakes</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#courses-explorer"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-xl text-sm transition-all border border-white/20 flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <Compass className="w-4 h-4 text-brand-gold" />
                  <span>Explore 12 Courses</span>
                </a>
              </div>

              {/* Fast highlight indicators */}
              <div className="pt-3 grid grid-cols-3 gap-2 text-center text-xs text-slate-400 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
                <div className="py-2">
                  <div className="font-bold text-white text-sm">30+ Years</div>
                  <div>Heritage in VET</div>
                </div>
                <div className="py-2 border-x border-white/10">
                  <div className="font-bold text-white text-sm">3 Mins</div>
                  <div>To Parramatta Train</div>
                </div>
                <div className="py-2">
                  <div className="font-bold text-white text-sm">VET Loans</div>
                  <div>VSL Approved Provider</div>
                </div>
              </div>
            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-800 group">
                <Image
                  src="/images/hero-banner.png"
                  alt="YES College Campus and Students in Australia"
                  width={650}
                  height={500}
                  priority
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating Award Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-brand-gold-dark shrink-0">
                    <Award className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div className="text-slate-900">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      Local Business Awards 2022
                    </div>
                    <div className="text-sm font-extrabold text-brand-navy leading-tight">
                      Outstanding Education Services Winner
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Recognised for quality vocational training in Parramatta
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCREDITATION & TRUST STRIP */}
      <section className="-mt-16 max-w-7xl mx-auto px-4 relative z-20">
        <div className="bg-white rounded-3xl shadow-card border border-slate-200/80 p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {/* NRT */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <Image
                src="/images/nrt-logo.png"
                alt="Nationally Recognised Training"
                width={70}
                height={40}
                className="h-9 w-auto object-contain"
              />
              <div>
                <div className="text-xs font-bold text-slate-900 leading-tight">Nationally Recognised</div>
                <div className="text-[11px] text-slate-500">Australian VET Standards</div>
              </div>
            </div>

            {/* AQF */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <Image
                src="/images/aqf-logo.jpg"
                alt="Australian Qualifications Framework"
                width={65}
                height={35}
                className="h-9 w-auto object-contain rounded"
              />
              <div>
                <div className="text-xs font-bold text-slate-900 leading-tight">AQF Accredited</div>
                <div className="text-[11px] text-slate-500">Cert III to Adv. Diploma</div>
              </div>
            </div>

            {/* ASQA */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold text-xs shrink-0 border border-blue-200">
                ASQA
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 leading-tight">ASQA Regulated</div>
                <div className="text-[11px] text-slate-500">RTO Code: 0249</div>
              </div>
            </div>

            {/* CRICOS */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 border border-emerald-200">
                500
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 leading-tight">CRICOS Registered</div>
                <div className="text-[11px] text-slate-500">Code: 03282E (Subclass 500)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE COURSE FINDER & DIRECTORY */}
      <section id="courses-explorer" className="max-w-7xl mx-auto px-4 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-brand-blue font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover Your Career Path</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nationally Recognised Courses in Sydney &amp; Perth
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Every qualification is designed in collaboration with Australian industry bodies, combining rigorous theory with extensive hands-on workplace training.
          </p>
        </div>

        {/* Course Finder Component */}
        <CourseFinder />

        <div className="mt-10 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
          >
            <span>Explore All 12 Courses &amp; Units of Competency</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* STATS COUNTER */}
      <section className="max-w-7xl mx-auto px-4">
        <StatsCounter />
      </section>

      {/* WHY CHOOSE YES COLLEGE - 6 PILLARS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            The YES College Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Thousands of Local &amp; Overseas Students Choose Us
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            From our founding by Beverly Stone in 1987 to winning the 2022 Parramatta Local Business Awards, our commitment has always been student outcome excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Award,
              title: '30+ Years of Vocational Heritage',
              desc: 'Few private colleges in Australia boast over three decades of uninterrupted educational delivery. We are registered by ASQA and internationally accredited by VTCT and ITEC.'
            },
            {
              icon: Building2,
              title: 'Real Commercial Training Facilities',
              desc: 'Learn inside commercial beauty clinic salons with glowing chandeliers and beauty beds, modern automotive diagnostic workshops, and dedicated civil design computer studios.'
            },
            {
              icon: MapPin,
              title: 'Prime Central Parramatta Location',
              desc: 'Only 3-4 minutes walk from Parramatta Train and Bus Interchange, and directly opposite Westfield Parramatta. Enjoy world-class dining, shopping, and vibrant cultural events.'
            },
            {
              icon: ShieldCheck,
              title: 'CRICOS & Visa 500 Ready',
              desc: 'Full assistance with Genuine Student (GS) compliance, Confirmation of Enrolment (CoE) issuance, Overseas Student Health Cover (OSHC), and Australian workplace rights.'
            },
            {
              icon: Briefcase,
              title: 'Hands-on Practical Placement',
              desc: 'Our Community Services and Automotive courses incorporate structured practical work experience, connecting students directly with hiring employers in Sydney and NSW.'
            },
            {
              icon: Users,
              title: 'Dedicated Student Support Hub',
              desc: 'Our multilingual student services team assists with finding accommodation, CV preparation, tax file numbers (TFN), resume review, and academic tutoring.'
            }
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-card border border-slate-200/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-brand-blue">
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CAMPUS SPOTLIGHT: SYDNEY PARRAMATTA & PERTH */}
      <section className="bg-slate-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                Campus Locations
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Study in Australia’s Most Dynamic Cities
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Explore our purpose-built campuses in Parramatta (Sydney) and Perth (Western Australia).
              </p>
            </div>

            {/* Campus Tab Switcher */}
            <div className="flex gap-2 bg-white p-1 rounded-2xl border border-slate-200 shadow-sm shrink-0">
              <button
                onClick={() => setSelectedCampusTab('sydney')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCampusTab === 'sydney'
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sydney Parramatta Campus
              </button>
              <button
                onClick={() => setSelectedCampusTab('perth')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCampusTab === 'perth'
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Perth Beauty Campus
              </button>
            </div>
          </div>

          {/* Sydney Campus Card */}
          {selectedCampusTab === 'sydney' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-200/70 animate-fadeIn">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>43-45 Marion St &amp; Level 3, 106 Church St, Parramatta NSW 2150</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                  Sydney Parramatta Campus: In the Heart of Greater Sydney
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our purpose-built Parramatta campus is situated only a 3 to 4-minute walk from Parramatta Train Station and directly opposite Westfield Parramatta. Students enjoy state-of-the-art audiovisual lecture rooms, fully fitted beauty salon clinic rooms, dedicated automotive workshop links, student kitchens, and chillout breakout zones.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>3 Mins to Parramatta Station</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Opposite Westfield Parramatta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Commercial Student Salon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Free Wi-Fi &amp; PC Study Labs</span>
                  </div>
                </div>
                <div className="pt-3 flex gap-3">
                  <Link
                    href="/campus"
                    className="bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-sm"
                  >
                    View Campus Details &amp; Gallery
                  </Link>
                  <button
                    onClick={() => setEnquiryModalOpen(true)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-5 py-3 rounded-xl transition-colors"
                  >
                    Book Campus Tour
                  </button>
                </div>
              </div>

              {/* Gallery Grid of Authentic Photos */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-3">
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/campus-parramatta.png"
                    alt="YES College Campus Parramatta"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded">
                    Main Campus
                  </div>
                </div>
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/parramatta-westfield.png"
                    alt="Parramatta Westfield Shopping Centre opposite campus"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded">
                    Opposite Westfield
                  </div>
                </div>
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/parramatta-square.png"
                    alt="Parramatta Centenary Square"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded">
                    Centenary Square
                  </div>
                </div>
                <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/parramatta-events.png"
                    alt="Parramatta Cultural Events"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded">
                    Cultural Vibrancy
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Perth Campus Card */}
          {selectedCampusTab === 'perth' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-200/70 animate-fadeIn">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>Perth College of Beauty Therapy, Western Australia</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                  Perth College of Beauty Therapy: 30+ Years of Excellence
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Founded in 1987 by Beverly Stone, our Perth College of Beauty Therapy branch is one of Western Australia’s most storied private training institutions. Internationally accredited by examination bodies VTCT and ITEC, our students master dermal therapies, nail art, spa massage, and salon operations with direct industry placement.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Established in 1987</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>VTCT &amp; ITEC Accredited</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Real Public Salon Clinics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Austudy &amp; VSL Approved</span>
                  </div>
                </div>
                <div className="pt-3 flex gap-3">
                  <Link
                    href="/courses/shb50121-diploma-of-beauty-therapy"
                    className="bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-sm"
                  >
                    View Beauty Therapy Diploma
                  </Link>
                  <button
                    onClick={() => setEnquiryModalOpen(true)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-5 py-3 rounded-xl transition-colors"
                  >
                    Enquire for Perth Intakes
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 relative h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/images/course-shb50121.png"
                  alt="Perth College of Beauty Therapy"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-xs uppercase tracking-wider font-semibold text-brand-gold">
                      Western Australia Branch
                    </div>
                    <div className="text-lg font-bold">
                      Perth College of Beauty Therapy - Since 1987
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* INTERNATIONAL STUDENT ADMISSIONS & VISA 500 */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-brand-navy to-slate-900 rounded-3xl p-8 md:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold bg-brand-gold/15 border border-brand-gold/30 px-3 py-1 rounded-full uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" /> Study in Sydney or Perth
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                International Students: Your Gateway to Australian Vocational Training
              </h2>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                YES College welcomes students from over 40 countries across the globe. Our dedicated International Admissions team guides you through Genuine Student (GS) compliance, Subclass 500 Student Visa Confirmation of Enrolment (CoE), Overseas Student Health Cover (OSHC), and work-study balance in Australia.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200 pt-2">
                <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Subclass 500 Student Visa CoE</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Up to 48 Hours/Fortnight Work Rights</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Airport Welcome &amp; Orientation</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Accommodation &amp; CV Guidance</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/international-students"
                  className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold px-6 py-3.5 rounded-xl text-xs transition-all shadow-md flex items-center gap-2"
                >
                  <span>Read Full International Student Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setEnquiryModalOpen(true)}
                  className="bg-white/15 hover:bg-white/25 text-white font-semibold px-6 py-3.5 rounded-xl text-xs transition-colors border border-white/20"
                >
                  Contact International Advisor
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-300">
                    2026/2027 Intakes
                  </span>
                  <span className="text-xs font-bold text-brand-gold bg-brand-gold/20 px-2 py-0.5 rounded">
                    Open for Enrolment
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span className="text-slate-300">Term 1 Intake:</span>
                    <span className="font-bold text-white">January Intake</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span className="text-slate-300">Term 2 Intake:</span>
                    <span className="font-bold text-white">April Intake</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span className="text-slate-300">Term 3 Intake:</span>
                    <span className="font-bold text-white">July Intake</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-300">Term 4 Intake:</span>
                    <span className="font-bold text-white">October Intake</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://yescollege.com.au/wp-content/uploads/2026/04/YES-College-2026-Academic-Calendar.png"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-white text-brand-navy hover:bg-slate-100 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <Download className="w-4 h-4 text-brand-navy" />
                    <span>Download 2026-2027 Term Calendar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESSENTIAL DOWNLOADS & COMPLIANCE DOCUMENTS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Student Resource Centre
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Official Handbooks, Policies &amp; Forms
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Direct access to all ASQA-compliant forms, student handbooks, and enrolment documentation.
            </p>
          </div>
          <Link
            href="/documents-and-forms"
            className="text-brand-blue hover:underline text-xs font-bold flex items-center gap-1"
          >
            <span>View All Resource Documents</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {RESOURCE_DOCS.slice(0, 4).map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 shadow-card border border-slate-200/80 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                    {doc.format}
                  </span>
                  {doc.isImportant && (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      Essential
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2">
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <a
                  href={doc.downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-brand-navy hover:text-white text-slate-800 text-xs font-semibold py-2 px-3 rounded-xl transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download File</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600">
            Everything you need to know about enrolment, visas, and training at YES College.
          </p>
        </div>

        <div className="space-y-4">
          {COLLEGE_INFO.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 hover:border-slate-300 transition-colors"
            >
              <h3 className="text-base font-bold text-slate-900 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-50 text-brand-blue text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  Q
                </span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs md:text-sm text-slate-600 pl-9 mt-2 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CONSULTATION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-blue-950 text-white rounded-3xl p-8 md:p-14 shadow-2xl border border-white/10 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <span className="inline-flex items-center gap-1.5 text-brand-gold bg-brand-gold/20 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider border border-brand-gold/30">
              <Sparkles className="w-3.5 h-3.5" /> Start Your Vocational Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Say <span className="text-brand-gold">YES</span> to Your Future?
            </h2>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Connect with our admissions specialists for personalized guidance on course selection, credit transfer, timetable options, and intake calendar schedules.
            </p>
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setEnquiryModalOpen(true)}
                className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold px-8 py-4 rounded-xl text-sm transition-all shadow-md hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5 text-brand-navy" />
                <span>Submit Instant Online Enquiry</span>
              </button>
              <a
                href={`tel:${COLLEGE_INFO.phone}`}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-xl text-sm transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-brand-gold" />
                <span>Call Us: {COLLEGE_INFO.phoneDisplay}</span>
              </a>
            </div>
            <div className="pt-2 text-xs text-slate-400">
              MVJ Enterprises Pty Ltd | RTO 0249 | CRICOS 03282E | Parramatta NSW &amp; Perth WA
            </div>
          </div>
        </div>
      </section>

      {/* Global Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />
    </div>
  );
}

