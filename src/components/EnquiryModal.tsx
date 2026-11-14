'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, GraduationCap, MapPin, Send, PhoneCall, Sparkles } from 'lucide-react';
import { COURSES } from '@/data/courses';
import { COLLEGE_INFO } from '@/data/collegeInfo';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export default function EnquiryModal({ isOpen, onClose, preselectedCourse }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    studentType: 'international',
    selectedCourse: preselectedCourse || '',
    selectedCampus: 'Sydney Parramatta Campus',
    intakeTerm: 'Next Available Intake (2026/2027)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedCourse) {
      setFormData(prev => ({ ...prev, selectedCourse: preselectedCourse }));
    }
  }, [preselectedCourse]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate high-converting fast API submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-navy to-brand-navy-light text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 bg-brand-gold/20 text-brand-gold border border-brand-gold/40 text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3 h-3" /> Priority Admissions
            </span>
            <span className="text-slate-300 text-xs">RTO: {COLLEGE_INFO.rtoCode} | CRICOS: {COLLEGE_INFO.cricosCode}</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Apply or Enquire with YES College
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            Get official course guides, fee structures, timetable options, and Subclass 500 CoE support.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Enquiry Received Successfully!</h4>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <strong className="text-brand-navy">{formData.fullName}</strong>. An authorized YES College Admissions Advisor will reach out to you within 24 business hours at <span className="underline font-medium text-brand-navy">{formData.email}</span>.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Program:</span>
                  <span className="font-semibold text-slate-900">{formData.selectedCourse || 'General Vocational Enquiry'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Preferred Campus:</span>
                  <span className="font-semibold text-slate-900">{formData.selectedCampus}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Applicant Status:</span>
                  <span className="font-semibold text-slate-900 capitalize">{formData.studentType} Applicant</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Admissions Hotlines:</span>
                  <span className="font-bold text-brand-blue">{COLLEGE_INFO.phoneDisplay}</span>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="mt-6 bg-brand-navy hover:bg-brand-navy-light text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-all shadow-md"
              >
                Close &amp; Continue Browsing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Student Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  I am applying as:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'international', label: 'International Student', sub: 'Subclass 500 Visa' },
                    { id: 'domestic', label: 'Local Australian', sub: 'Citizen / PR / VSL' },
                    { id: 'agent', label: 'Education Agent', sub: 'Agent Application' }
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, studentType: type.id })}
                      className={`p-2.5 text-left rounded-xl border text-xs transition-all ${
                        formData.studentType === type.id
                          ? 'border-brand-blue bg-blue-50/60 ring-2 ring-brand-blue/20 text-brand-navy font-semibold'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
                      }`}
                    >
                      <div className="font-medium text-[13px]">{type.label}</div>
                      <div className="text-[10px] text-slate-500">{type.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="modal-name"
                    required
                    type="text"
                    placeholder="e.g. Liam Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
                    required
                    type="email"
                    placeholder="e.g. liam@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="modal-phone"
                    required
                    type="tel"
                    placeholder="e.g. +61 400 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="modal-campus" className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Campus *
                  </label>
                  <select
                    id="modal-campus"
                    value={formData.selectedCampus}
                    onChange={(e) => setFormData({ ...formData, selectedCampus: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white"
                  >
                    <option value="Sydney Parramatta Campus">Sydney Campus (Parramatta CBD)</option>
                    <option value="Perth College of Beauty Therapy">Perth Campus (Beauty &amp; Wellness)</option>
                  </select>
                </div>
              </div>

              {/* Course Selection */}
              <div>
                <label htmlFor="modal-course" className="block text-xs font-semibold text-slate-700 mb-1">
                  Course of Interest *
                </label>
                <select
                  id="modal-course"
                  required
                  value={formData.selectedCourse}
                  onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white"
                >
                  <option value="">-- Choose a Nationally Recognised Course --</option>
                  {COURSES.map((c) => (
                    <option key={c.code} value={`${c.code} - ${c.title}`}>
                      [{c.code}] {c.title} ({c.level}) - CRICOS: {c.cricos}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="modal-msg" className="block text-xs font-semibold text-slate-700 mb-1">
                  Questions or Special Requirements (Optional)
                </label>
                <textarea
                  id="modal-msg"
                  rows={2}
                  placeholder="Tell us about your background, intended start date, credit transfer, or visa queries..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder-slate-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold py-3.5 px-6 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-60"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-brand-navy border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-brand-navy" />
                      <span>Submit Official Course Enquiry</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  🔒 Your information is confidential under the Australian Privacy Act 1988. No spam.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

