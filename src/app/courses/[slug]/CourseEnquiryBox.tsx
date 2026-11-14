'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeInfo';

interface Props {
  courseCode: string;
  courseTitle: string;
  campus: string;
}

export default function CourseEnquiryBox({ courseCode, courseTitle, campus }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    applicantType: 'international',
    intake: 'Next Available (2026/2027)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-200/90 overflow-hidden relative">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-[11px] font-bold px-2 py-0.5 rounded-full border border-amber-200 uppercase tracking-wider">
          <Sparkles className="w-3 h-3 text-amber-600" /> Direct Enrolment
        </span>
      </div>

      <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
        Enquire About {courseCode}
      </h3>
      <p className="text-xs text-slate-500 mt-1 mb-4">
        Receive full course fees, timetables, and Subclass 500 CoE assistance.
      </p>

      {submitted ? (
        <div className="text-center py-6 space-y-3 bg-emerald-50/60 rounded-xl p-4 border border-emerald-200/60">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h4 className="font-bold text-sm text-slate-900">Enquiry Submitted!</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Thank you, <strong>{formData.name}</strong>. An admissions officer for <strong>{courseCode}</strong> will call or email you shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-brand-blue hover:underline pt-2 block mx-auto"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Applicant Status */}
          <div>
            <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
              Applicant Category
            </label>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, applicantType: 'international' })}
                className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                  formData.applicantType === 'international'
                    ? 'border-brand-blue bg-blue-50 text-brand-navy font-bold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                International (Visa 500)
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, applicantType: 'domestic' })}
                className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                  formData.applicantType === 'domestic'
                    ? 'border-brand-blue bg-blue-50 text-brand-navy font-bold'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Local / VSL Loan
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="eb-name" className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
              Full Name *
            </label>
            <input
              id="eb-name"
              required
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder:text-slate-400"
            />
          </div>

          <div>
            <label htmlFor="eb-email" className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
              Email Address *
            </label>
            <input
              id="eb-email"
              required
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder:text-slate-400"
            />
          </div>

          <div>
            <label htmlFor="eb-phone" className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
              Phone / WhatsApp *
            </label>
            <input
              id="eb-phone"
              required
              type="tel"
              placeholder="+61 400 000 000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder:text-slate-400"
            />
          </div>

          <div>
            <label htmlFor="eb-intake" className="block text-[11px] font-bold text-slate-600 uppercase mb-1">
              Target Intake Term
            </label>
            <select
              id="eb-intake"
              value={formData.intake}
              onChange={(e) => setFormData({ ...formData, intake: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white"
            >
              <option value="January Intake">Term 1 (January Intake)</option>
              <option value="April Intake">Term 2 (April Intake)</option>
              <option value="July Intake">Term 3 (July Intake)</option>
              <option value="October Intake">Term 4 (October Intake)</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-1.5 hover:shadow-lg disabled:opacity-60 mt-2"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-3.5 h-3.5 text-brand-gold" />
                <span>Submit {courseCode} Enquiry</span>
              </>
            )}
          </button>
        </form>
      )}

      {/* Direct Call hotline */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
        <span>Prefer to talk?</span>
        <a
          href={`tel:${COLLEGE_INFO.phone}`}
          className="font-bold text-brand-blue hover:underline flex items-center gap-1"
        >
          <PhoneCall className="w-3 h-3 text-brand-gold" />
          <span>{COLLEGE_INFO.phoneDisplay}</span>
        </a>
      </div>
    </div>
  );
}

