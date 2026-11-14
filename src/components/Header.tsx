'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Award,
  GraduationCap,
  Sparkles,
  BookOpen,
  Building2,
  Globe2,
  FileText,
  Users,
  Search,
  CheckCircle2
} from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeInfo';
import EnquiryModal from './EnquiryModal';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  }, [pathname]);

  const courseCategories = [
    {
      name: 'Community Services',
      slug: 'community-services',
      code: 'CHC52021',
      badge: 'High In-Demand',
      desc: 'Case management, youth advocacy, and social welfare qualifications.'
    },
    {
      name: 'Automotive Mechanic & Management',
      slug: 'automotive',
      code: 'AUR30620 / AUR50116',
      badge: 'Workshop Training',
      desc: 'Light vehicle mechanical technology and dealership management.'
    },
    {
      name: 'Beauty Therapy & Make-Up',
      slug: 'beauty',
      code: 'SHB50121',
      badge: '30+ Yrs Heritage',
      desc: 'Clinical aesthetics, day spa therapies, and salon operations.'
    },
    {
      name: 'Building & Civil Construction',
      slug: 'construction',
      code: 'RII60520 / RII50520 / CPC33020',
      badge: 'Infrastructure',
      desc: 'Civil works drafting, engineering design, and trade blocklaying.'
    },
    {
      name: 'Business & Leadership',
      slug: 'business',
      code: 'BSB60420 / BSB50420 / BSB60120',
      badge: 'Corporate Career',
      desc: 'Executive leadership, change strategy, and enterprise business.'
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Top Info Bar */}
        <div className="bg-brand-navy text-slate-300 text-xs py-1.5 px-4 border-b border-white/10 hidden lg:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5 text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <strong>RTO Code:</strong> {COLLEGE_INFO.rtoCode}
                <span className="text-slate-500">|</span>
                <strong>CRICOS:</strong> {COLLEGE_INFO.cricosCode}
              </span>
              <span className="flex items-center gap-1.5 text-brand-gold font-medium">
                <Award className="w-3.5 h-3.5" />
                <span>Winner: Parramatta Local Business Awards 2022</span>
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href={`tel:${COLLEGE_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span>{COLLEGE_INFO.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${COLLEGE_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-gold" />
                <span>{COLLEGE_INFO.email}</span>
              </a>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                <span>Parramatta, Sydney &amp; Perth</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`w-full transition-all duration-200 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80'
              : 'bg-white py-3 border-b border-slate-100 shadow-sm'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-3 lg:gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-40 sm:w-44 md:w-48 h-11 flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="YES College - Australian Registered Training Organisation"
                  width={220}
                  height={70}
                  priority
                  className="object-contain h-auto max-h-11 w-auto"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1 text-[13px] 2xl:text-sm font-semibold text-slate-700 whitespace-nowrap shrink-0">
              <Link
                href="/"
                className={`whitespace-nowrap px-2.5 2xl:px-3 py-2 rounded-lg transition-colors ${
                  pathname === '/'
                    ? 'text-brand-blue bg-blue-50/70 font-bold'
                    : 'hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              {/* Courses Mega-dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCoursesDropdownOpen(true)}
                onMouseLeave={() => setCoursesDropdownOpen(false)}
              >
                <Link
                  href="/courses"
                  className={`inline-flex items-center gap-1 whitespace-nowrap px-2.5 2xl:px-3 py-2 rounded-lg transition-colors ${
                    pathname.startsWith('/courses')
                      ? 'text-brand-blue bg-blue-50/70 font-bold'
                      : 'hover:text-brand-blue hover:bg-slate-50'
                  }`}
                >
                  <span>Courses</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>

                {coursesDropdownOpen && (
                  <div className="absolute top-full left-0 w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-fadeIn whitespace-normal">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5 flex justify-between items-center border-b border-slate-100 mb-2">
                      <span>Study Disciplines</span>
                      <Link href="/courses" className="text-brand-blue hover:underline whitespace-nowrap">
                        View All 12 Courses &rarr;
                      </Link>
                    </div>
                    <div className="space-y-1">
                      {courseCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/courses?category=${cat.slug}`}
                          className="block p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm text-slate-800 group-hover:text-brand-blue transition-colors">
                              {cat.name}
                            </span>
                            <span className="text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200/60 px-2 py-0.5 rounded-full shrink-0">
                              {cat.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{cat.desc}</p>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-slate-100 bg-slate-50 rounded-xl p-2.5 flex items-center justify-between text-xs">
                      <span className="text-slate-600">Need advice on course prerequisites?</span>
                      <button
                        onClick={() => setEnquiryModalOpen(true)}
                        className="font-bold text-brand-navy hover:text-brand-blue whitespace-nowrap"
                      >
                        Ask an Advisor &rarr;
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={`whitespace-nowrap px-2.5 2xl:px-3 py-2 rounded-lg transition-colors ${
                  pathname === '/about'
                    ? 'text-brand-blue bg-blue-50/70 font-bold'
                    : 'hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                About Us
              </Link>

              <Link
                href="/campus"
                className={`whitespace-nowrap px-2.5 2xl:px-3 py-2 rounded-lg transition-colors ${
                  pathname === '/campus'
                    ? 'text-brand-blue bg-blue-50/70 font-bold'
                    : 'hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                Campuses
              </Link>

              <Link
                href="/international-students"
                className={`whitespace-nowrap px-2.5 2xl:px-3 py-2 rounded-lg transition-colors ${
                  pathname === '/international-students'
                    ? 'text-brand-blue bg-blue-50/70 font-bold'
                    : 'hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                International
              </Link>

              <Link
                href="/education-agents"
                className={`whitespace-nowrap px-2.5 2xl:px-3 py-2 rounded-lg transition-colors ${
                  pathname === '/education-agents'
                    ? 'text-brand-blue bg-blue-50/70 font-bold'
                    : 'hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                Agents
              </Link>

              <Link
                href="/documents-and-forms"
                className={`whitespace-nowrap px-2.5 2xl:px-3 py-2 rounded-lg transition-colors ${
                  pathname === '/documents-and-forms'
                    ? 'text-brand-blue bg-blue-50/70 font-bold'
                    : 'hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                Forms &amp; Policies
              </Link>

              <Link
                href="/contact"
                className={`whitespace-nowrap px-2.5 2xl:px-3 py-2 rounded-lg transition-colors ${
                  pathname === '/contact'
                    ? 'text-brand-blue bg-blue-50/70 font-bold'
                    : 'hover:text-brand-blue hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Action Buttons */}
            <div className="hidden xl:flex items-center space-x-2 2xl:space-x-3 shrink-0 whitespace-nowrap">
              <a
                href={`tel:${COLLEGE_INFO.phone}`}
                className="p-2 text-slate-600 hover:text-brand-navy hover:bg-slate-100 rounded-full transition-colors shrink-0"
                title="Call Admissions"
              >
                <Phone className="w-4 h-4 xl:w-4.5 xl:h-4.5" />
              </a>

              <button
                onClick={() => setEnquiryModalOpen(true)}
                className="bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-bold px-3.5 2xl:px-4 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-1.5 hover:shadow-md whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">Enquire Now</span>
              </button>

              <button
                onClick={() => setEnquiryModalOpen(true)}
                className="bg-brand-gold hover:bg-brand-gold-light text-brand-navy text-xs font-bold px-3.5 2xl:px-4 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-1.5 hover:shadow-md whitespace-nowrap shrink-0"
              >
                <GraduationCap className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Apply Online</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={() => setEnquiryModalOpen(true)}
                className="bg-brand-gold text-brand-navy font-bold text-xs px-3 py-2 rounded-lg"
              >
                Apply
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-brand-navy hover:bg-slate-100 rounded-xl transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 py-5 max-h-[85vh] overflow-y-auto animate-fadeIn">
            <div className="space-y-1 mb-4">
              <Link
                href="/"
                className="block px-3 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-50"
              >
                Home
              </Link>
              <Link
                href="/courses"
                className="block px-3 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-50"
              >
                All Courses (12 Programs)
              </Link>
              <div className="pl-4 space-y-1 border-l-2 border-slate-100 my-1">
                {courseCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/courses?category=${cat.slug}`}
                    className="block py-1.5 text-xs text-slate-600 hover:text-brand-blue"
                  >
                    • {cat.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/about"
                className="block px-3 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-50"
              >
                About YES College
              </Link>
              <Link
                href="/campus"
                className="block px-3 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-50"
              >
                Our Campuses (Sydney &amp; Perth)
              </Link>
              <Link
                href="/international-students"
                className="block px-3 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-50"
              >
                International Students Hub
              </Link>
              <Link
                href="/education-agents"
                className="block px-3 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-50"
              >
                Education Agents
              </Link>
              <Link
                href="/documents-and-forms"
                className="block px-3 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-50"
              >
                Documents, Handbooks &amp; Forms
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2.5 rounded-xl font-semibold text-slate-800 hover:bg-slate-50"
              >
                Contact Us
              </Link>
              <Link
                href="/pitch-presentation"
                className="block px-3 py-2.5 rounded-xl font-bold text-amber-700 bg-amber-50"
              >
                ⚡ View Next.js Pitch &amp; Performance Audit
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setEnquiryModalOpen(true);
                }}
                className="w-full bg-brand-gold text-brand-navy font-bold py-3 rounded-xl text-sm shadow-sm flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Start Enrolment Application</span>
              </button>
              <a
                href={`tel:${COLLEGE_INFO.phone}`}
                className="w-full bg-slate-100 text-slate-800 font-semibold py-3 rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-navy" />
                <span>Call Admissions: {COLLEGE_INFO.phoneDisplay}</span>
              </a>
            </div>

            <div className="mt-4 pt-3 text-[11px] text-center text-slate-400 border-t border-slate-100">
              MVJ Enterprises Pty Ltd | RTO 0249 | CRICOS 03282E
            </div>
          </div>
        )}
      </header>

      {/* Global Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />
    </>
  );
}

