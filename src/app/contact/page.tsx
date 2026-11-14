'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Train,
  ShoppingBag,
  Building2
} from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeInfo';
import { COURSES } from '@/data/courses';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Course Enquiry',
    courseInterest: '',
    message: ''
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
    <div className="w-full pb-20 space-y-16">
      {/* Banner */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-blue-950 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            <Phone className="w-3.5 h-3.5" />
            <span>Admissions &amp; Enquiries</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Get in Touch with YES College
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
            Have questions about our courses, entry criteria, timetables, or Subclass 500 visa confirmation? Our admissions team in Parramatta and Perth is ready to assist.
          </p>
        </div>
      </section>

      {/* Main Grid: Info Cards + Form */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card border border-slate-200/80 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Campus Contact Details
              </h2>

              {/* Sydney Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-brand-blue" />
                </div>
                <div className="text-xs space-y-1">
                  <strong className="text-slate-900 text-sm block">Sydney Parramatta Campus</strong>
                  <p className="text-slate-600">43-45 Marion Street, Parramatta, NSW 2150</p>
                  <p className="text-slate-600">Level 3, 106 Church Street, Parramatta, NSW 2150</p>
                  <p className="text-slate-400 font-medium">(Opposite Westfield Parramatta, 3 mins from station)</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="text-xs">
                  <strong className="text-slate-900 text-sm block">Telephone Hotline</strong>
                  <a
                    href={`tel:${COLLEGE_INFO.phone}`}
                    className="text-brand-blue hover:underline font-bold text-sm"
                  >
                    {COLLEGE_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-xs">
                  <strong className="text-slate-900 text-sm block">Official Inquiries Email</strong>
                  <a
                    href={`mailto:${COLLEGE_INFO.email}`}
                    className="text-brand-blue hover:underline font-bold"
                  >
                    {COLLEGE_INFO.email}
                  </a>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-xs">
                  <strong className="text-slate-900 text-sm block">Campus Working Hours</strong>
                  <span className="text-slate-600">Monday – Friday: 9:00 AM – 5:00 PM (AEST)</span>
                </div>
              </div>
            </div>

            {/* Regulatory Notice Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-xs text-slate-600 space-y-2">
              <strong className="text-slate-900 block font-bold">Australian RTO Registration Details</strong>
              <p>Legal Entity: <strong>{COLLEGE_INFO.legalName}</strong></p>
              <p>RTO Code: <strong>{COLLEGE_INFO.rtoCode}</strong> (ASQA)</p>
              <p>CRICOS Provider Code: <strong>{COLLEGE_INFO.cricosCode}</strong></p>
              <p>ABN: <strong>{COLLEGE_INFO.abn}</strong></p>
            </div>
          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-200 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-bold text-slate-900">Send an Online Message</h2>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the form and our admissions team will respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-3 bg-emerald-50/70 rounded-2xl p-6 border border-emerald-200">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-bold text-slate-900">Message Delivered!</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. An authorized YES College Admissions Specialist has received your enquiry and will reply to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-brand-blue hover:underline pt-3 block mx-auto"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-name" className="block font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="ct-name"
                        required
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="ct-email" className="block font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="ct-email"
                        required
                        type="email"
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-phone" className="block font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="ct-phone"
                        required
                        type="tel"
                        placeholder="+61 400 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="ct-course" className="block font-bold text-slate-700 mb-1">
                        Course of Interest
                      </label>
                      <select
                        id="ct-course"
                        value={formData.courseInterest}
                        onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white"
                      >
                        <option value="">-- Select a Course (Optional) --</option>
                        {COURSES.map((c) => (
                          <option key={c.code} value={c.title}>
                            {c.code} - {c.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ct-message" className="block font-bold text-slate-700 mb-1">
                      Your Message / Enquiry *
                    </label>
                    <textarea
                      id="ct-message"
                      required
                      rows={4}
                      placeholder="Ask about entry requirements, timetables, credit transfers, or booking a campus tour..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-navy font-bold py-3.5 px-6 rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-60"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-brand-navy border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-brand-navy" />
                        <span>Send Message to Admissions</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

