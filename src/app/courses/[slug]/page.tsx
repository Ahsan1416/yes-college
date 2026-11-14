import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Clock,
  Calendar,
  GraduationCap,
  MapPin,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Download,
  Share2,
  Briefcase,
  Layers,
  ChevronRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { COURSES, Course } from '@/data/courses';
import { COLLEGE_INFO } from '@/data/collegeInfo';
import CourseEnquiryBox from './CourseEnquiryBox';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return COURSES.map((course) => ({
    slug: course.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = COURSES.find((c) => c.id === params.slug);
  if (!course) return { title: 'Course Not Found' };

  return {
    title: `${course.code} ${course.title} | YES College Australia`,
    description: `${course.tagline || course.description.slice(0, 160)} CRICOS: ${course.cricos}. Duration: ${course.duration}. Study at YES College Parramatta Sydney.`,
    openGraph: {
      title: `${course.code} ${course.title} | YES College`,
      description: course.description.slice(0, 200),
      images: [course.image],
    },
  };
}

export default function CourseDetailPage({ params }: Props) {
  const course = COURSES.find((c) => c.id === params.slug);
  if (!course) {
    notFound();
  }

  // Related courses in the same category or general
  const relatedCourses = COURSES.filter((c) => c.id !== course.id).slice(0, 3);

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${course.code} ${course.title}`,
    description: course.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'YES College',
      sameAs: 'https://yescollege.com.au/'
    },
    courseCode: course.code,
    educationalCredentialAwarded: course.level,
    timeToComplete: course.duration,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: course.studyMode,
      location: course.campus
    }
  };

  return (
    <div className="w-full pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      {/* Course Hero Banner */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-blue-950 text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-white">
              Courses
            </Link>
            <span>/</span>
            <span className="text-brand-gold font-medium">{course.code}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-brand-gold text-brand-navy font-bold text-xs px-3 py-1 rounded-lg">
                  {course.level}
                </span>
                <span className="bg-white/10 text-slate-200 border border-white/20 font-bold text-xs px-3 py-1 rounded-lg">
                  CRICOS: {course.cricos}
                </span>
                <span className="bg-white/10 text-brand-gold-light border border-white/20 font-semibold text-xs px-3 py-1 rounded-lg">
                  {course.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                <span className="block text-brand-gold font-mono text-2xl sm:text-3xl mb-1">
                  {course.code}
                </span>
                {course.title}
              </h1>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
                {course.tagline || course.description}
              </p>

              {/* Fast Spec Pills */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                  <div className="text-slate-400 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-brand-gold" /> Duration
                  </div>
                  <div className="font-bold text-white mt-1">{course.duration.split('(')[0].trim()}</div>
                </div>

                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                  <div className="text-slate-400 flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-brand-gold" /> Terms
                  </div>
                  <div className="font-bold text-white mt-1">{course.terms.split('(')[0].trim()}</div>
                </div>

                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                  <div className="text-slate-400 flex items-center gap-1 font-medium">
                    <Layers className="w-3.5 h-3.5 text-brand-gold" /> Units
                  </div>
                  <div className="font-bold text-white mt-1">{course.unitsSummary.split('(')[0].trim()}</div>
                </div>

                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                  <div className="text-slate-400 flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold" /> Campus
                  </div>
                  <div className="font-bold text-white mt-1">{course.campus.split(',')[0]}</div>
                </div>
              </div>
            </div>

            {/* Course image preview */}
            <div className="lg:col-span-4 relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-800">
              <Image
                src={course.image}
                alt={`${course.code} ${course.title}`}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="font-semibold bg-brand-navy/80 px-2.5 py-1 rounded backdrop-blur-sm">
                  {course.code}
                </span>
                <span className="text-brand-gold font-bold">Nationally Recognised</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Content Layout */}
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Content (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Course Overview */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-slate-200/80 space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-brand-blue" />
                <span>Qualification Overview</span>
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {course.description}
              </p>

              {course.overview && course.overview.length > 0 && (
                <div className="pt-2 space-y-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Key Educational Highlights:
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {course.overview.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Units of Competency */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-slate-200/80 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-2">
                <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-brand-blue" />
                  <span>Units of Competency</span>
                </h2>
                <span className="text-xs font-bold text-brand-navy bg-slate-100 px-3 py-1 rounded-full">
                  {course.unitsSummary}
                </span>
              </div>

              {/* Core Units */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-blue"></span>
                    <span>Core Units ({course.coreUnits.length})</span>
                  </h3>
                  <span className="text-xs text-slate-500">Mandatory for Qualification</span>
                </div>
                <div className="space-y-2">
                  {course.coreUnits.map((unit) => (
                    <div
                      key={unit.code}
                      className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/70 transition-colors flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-brand-navy bg-white px-2 py-1 rounded border border-slate-200">
                          {unit.code}
                        </span>
                        <span className="font-medium text-slate-800">{unit.name}</span>
                      </div>
                      <span className="hidden sm:inline-block text-[10px] font-bold text-brand-blue bg-blue-100/60 px-2 py-0.5 rounded">
                        Core
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Elective Units */}
              {course.electiveUnits.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-gold"></span>
                      <span>Selected Elective Units ({course.electiveUnits.length})</span>
                    </h3>
                    <span className="text-xs text-slate-500">Industry Specialization</span>
                  </div>
                  <div className="space-y-2">
                    {course.electiveUnits.map((unit) => (
                      <div
                        key={unit.code}
                        className="p-3 rounded-xl bg-slate-50 hover:bg-amber-50/40 border border-slate-200/70 transition-colors flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-slate-700 bg-white px-2 py-1 rounded border border-slate-200">
                            {unit.code}
                          </span>
                          <span className="font-medium text-slate-800">{unit.name}</span>
                        </div>
                        <span className="hidden sm:inline-block text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                          Elective
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Career Outcomes & Industry Relevance */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-slate-200/80 space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-brand-blue" />
                <span>Career Outcomes &amp; Employment Pathways</span>
              </h2>
              <p className="text-sm text-slate-600">
                Graduates of the {course.code} {course.title} are qualified to enter competitive industry roles in Australia, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {course.careerOutcomes.map((career, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/60 text-xs font-semibold text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{career}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Entry Requirements & English Language */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-slate-200/80 space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-blue" />
                <span>Admission &amp; Entry Requirements</span>
              </h2>
              <div className="space-y-2.5 text-xs md:text-sm text-slate-700">
                {course.entryRequirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Study Mode & Timetable */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-slate-200/80 space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-blue" />
                <span>Study Mode, Contact Hours &amp; Timetable</span>
              </h2>
              <div className="text-xs md:text-sm text-slate-700 space-y-3 leading-relaxed">
                <p>
                  <strong>Scheduled Contact Hours:</strong> 20 hours per week of scheduled classroom theory and practical training. Classes are scheduled between Monday to Sunday, subject to timetable stream availability.
                </p>
                <p>
                  <strong>Individual Study Hours:</strong> Students are expected to undertake at least 10 hours of self-directed research, practical project work, and assessment preparation per week.
                </p>
                <p>
                  <strong>Campus Delivery:</strong> {course.campus}. Equipped with modern audiovisual classrooms, computer study labs, and dedicated breakout rooms.
                </p>
              </div>
            </section>
          </div>

          {/* Right Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Sticky Interactive Enquiry Box */}
            <div className="sticky top-28 space-y-6">
              <CourseEnquiryBox
                courseCode={course.code}
                courseTitle={course.title}
                campus={course.campus}
              />

              {/* Brochure Download Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3 text-center">
                <FileText className="w-10 h-10 text-brand-blue mx-auto" />
                <h3 className="text-sm font-bold text-slate-900">Official Course Brochure</h3>
                <p className="text-xs text-slate-500">
                  Download the comprehensive course curriculum, fee schedule, and enrollment guide (PDF).
                </p>
                <a
                  href="https://yescollege.com.au/wp-content/uploads/2026/09/YES_College_Student_Handbook.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-brand-navy border border-slate-300 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Course Brochure</span>
                </a>
              </div>

              {/* Related Courses */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Related Programs
                </h3>
                <div className="space-y-2">
                  {relatedCourses.map((rc) => (
                    <Link
                      key={rc.id}
                      href={`/courses/${rc.id}`}
                      className="block p-2 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200 group"
                    >
                      <div className="text-[11px] font-mono text-brand-blue font-bold">
                        {rc.code}
                      </div>
                      <div className="text-xs font-bold text-slate-800 group-hover:text-brand-blue transition-colors line-clamp-1">
                        {rc.title}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 flex justify-between">
                        <span>{rc.duration.split('(')[0].trim()}</span>
                        <span>{rc.level}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

