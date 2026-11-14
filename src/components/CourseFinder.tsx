'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  Clock,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2,
  Building,
  Layers
} from 'lucide-react';
import { COURSES, Course } from '@/data/courses';
import EnquiryModal from './EnquiryModal';

interface CourseFinderProps {
  initialCategory?: string;
  showFilters?: boolean;
  limit?: number;
}

export default function CourseFinder({
  initialCategory = 'all',
  showFilters = true,
  limit
}: CourseFinderProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalCourse, setModalCourse] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Disciplines' },
    { id: 'community-services', name: 'Community Services' },
    { id: 'automotive', name: 'Automotive & Mechanic' },
    { id: 'beauty', name: 'Beauty & Make-Up' },
    { id: 'construction', name: 'Building & Civil Construction' },
    { id: 'business', name: 'Business & Management' }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'Certificate III', name: 'Certificate III' },
    { id: 'Certificate IV', name: 'Certificate IV' },
    { id: 'Diploma', name: 'Diploma' },
    { id: 'Advanced Diploma', name: 'Advanced Diploma' }
  ];

  const filteredCourses = useMemo(() => {
    return COURSES.filter((c) => {
      // Category filter
      if (selectedCategory !== 'all' && c.categorySlug !== selectedCategory) {
        return false;
      }
      // Level filter
      if (selectedLevel !== 'all' && c.level !== selectedLevel) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesCode = c.code.toLowerCase().includes(q);
        const matchesTitle = c.title.toLowerCase().includes(q);
        const matchesDesc = c.description.toLowerCase().includes(q);
        const matchesCricos = c.cricos.toLowerCase().includes(q);
        const matchesCareers = c.careerOutcomes.some((co) => co.toLowerCase().includes(q));
        if (!matchesCode && !matchesTitle && !matchesDesc && !matchesCricos && !matchesCareers) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  const displayedCourses = limit ? filteredCourses.slice(0, limit) : filteredCourses;

  return (
    <section className="w-full">
      {/* Search & Filter Bar */}
      {showFilters && (
        <div className="bg-white rounded-2xl shadow-card border border-slate-200/80 p-5 md:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by course code, keyword, or career (e.g. CHC52021, automotive, beauty, design)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue bg-slate-50/50 hover:bg-white text-slate-900 transition-colors placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 bg-slate-200 px-1.5 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Level Filter Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full py-3 px-3.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue bg-slate-50/50 text-slate-800 font-medium cursor-pointer"
              >
                {levels.map((lvl) => (
                  <option key={lvl.id} value={lvl.id}>
                    {lvl.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Result counter */}
            <div className="md:col-span-3 text-right text-xs text-slate-500 font-medium">
              Showing <strong className="text-brand-navy font-bold text-sm">{displayedCourses.length}</strong> of{' '}
              {COURSES.length} accredited courses
            </div>
          </div>

          {/* Discipline Category Pills */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Discipline:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-navy text-white shadow-sm ring-2 ring-brand-navy/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Courses Grid */}
      {displayedCourses.length === 0 ? (
        <div className="bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-12 text-center">
          <GraduationCap className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-slate-800">No matching programs found</h4>
          <p className="text-sm text-slate-500 max-w-md mx-auto mt-1 mb-4">
            We couldn’t find any courses matching your specific search criteria. Try clearing filters or exploring our full catalog.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedLevel('all');
              setSearchQuery('');
            }}
            className="bg-brand-navy text-white text-xs font-bold px-4 py-2 rounded-xl"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 border border-slate-200/70 overflow-hidden flex flex-col group hover:-translate-y-1"
            >
              {/* Course Image Header */}
              <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={course.image}
                  alt={`${course.code} ${course.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />

                {/* Level badge */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-brand-navy/90 backdrop-blur-md text-white font-bold text-[11px] px-2.5 py-1 rounded-lg border border-white/20 shadow-sm">
                    {course.level}
                  </span>
                  {course.featured && (
                    <span className="bg-brand-gold text-brand-navy font-bold text-[11px] px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Popular
                    </span>
                  )}
                </div>

                {/* CRICOS Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded font-mono text-[11px]">
                    CRICOS: {course.cricos}
                  </span>
                  <span className="text-[11px] font-semibold text-brand-gold-light bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                    {course.campus.split(',')[0]}
                  </span>
                </div>
              </div>

              {/* Course Details Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Category & Code */}
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-brand-blue uppercase tracking-wider text-[11px]">
                      {course.category}
                    </span>
                    <span className="font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px]">
                      {course.code}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                    <Link href={`/courses/${course.id}`}>
                      {course.title}
                    </Link>
                  </h3>

                  {/* Tagline / Snippet */}
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {course.tagline || course.description}
                  </p>
                </div>

                {/* Metadata & Career tags */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      {course.duration.split('(')[0].trim()}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {course.unitsSummary.split('(')[0].trim()}
                    </span>
                  </div>

                  {/* Career tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {course.careerOutcomes.slice(0, 2).map((career, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] bg-slate-50 text-slate-700 border border-slate-200/70 px-2 py-0.5 rounded-md"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                        {career}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <Link
                    href={`/courses/${course.id}`}
                    className="w-full text-center bg-slate-100 hover:bg-slate-200 text-brand-navy font-bold text-xs py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <button
                    onClick={() => setModalCourse(`${course.code} - ${course.title}`)}
                    className="w-full text-center bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-colors shadow-sm"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {modalCourse && (
        <EnquiryModal
          isOpen={true}
          onClose={() => setModalCourse(null)}
          preselectedCourse={modalCourse}
        />
      )}
    </section>
  );
}

