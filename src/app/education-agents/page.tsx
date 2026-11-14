'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Download,
  Send,
  Sparkles,
  PhoneCall,
  Mail
} from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeInfo';

export default function EducationAgentsPage() {
  const [formData, setFormData] = useState({
    agencyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    qeacMara: '',
    yearsInBusiness: '',
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
    }, 600);
  };

  return (
    <div className="w-full pb-20 space-y-16">
      {/* Banner */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-blue-950 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Agent Partnerships</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Education Agents Portal
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
            Partner with YES College to represent 12 accredited Australian vocational qualifications across Sydney and Perth. Benefit from fast offer turnarounds, competitive commissions, and dedicated marketing support.
          </p>
        </div>
      </section>

      {/* Why Represent YES College */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Agent Benefits
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Partner with YES College?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-card border border-slate-200/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold">
              ⚡
            </div>
            <h3 className="text-base font-bold text-slate-900">48-Hour Offer Turnaround</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our streamlined admissions team processes complete international student applications within 24–48 hours, accelerating your student conversion.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-card border border-slate-200/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              💰
            </div>
            <h3 className="text-base font-bold text-slate-900">Competitive &amp; Timely Commission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Transparent, competitive commission structures paid promptly upon student census date confirmation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-card border border-slate-200/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              🛡️
            </div>
            <h3 className="text-base font-bold text-slate-900">ESOS &amp; ASQA Compliance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full alignment with the National Code 2018 and ESOS Act, giving your agency complete peace of mind and ethical credibility.
            </p>
          </div>
        </div>
      </section>

      {/* Agent Application Form */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-200 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
              New Representative Application
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              Apply to Become an Approved YES College Education Agent
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Complete the form below to initiate an Agency Agreement with MVJ Enterprises Pty Ltd.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-3 bg-emerald-50/70 rounded-2xl p-6 border border-emerald-200">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for applying to represent YES College. Our Agent Relations Manager will review your credentials and contact you at <strong>{formData.email}</strong> with the formal Agency Agreement and marketing toolkit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="agent-agency" className="block font-bold text-slate-700 mb-1">
                    Agency Legal Name *
                  </label>
                  <input
                    id="agent-agency"
                    required
                    type="text"
                    placeholder="e.g. Global Education Consultants Ltd"
                    value={formData.agencyName}
                    onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="agent-person" className="block font-bold text-slate-700 mb-1">
                    Contact Person &amp; Title *
                  </label>
                  <input
                    id="agent-person"
                    required
                    type="text"
                    placeholder="e.g. John Doe, Director"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="agent-email" className="block font-bold text-slate-700 mb-1">
                    Official Business Email *
                  </label>
                  <input
                    id="agent-email"
                    required
                    type="email"
                    placeholder="contact@agency.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="agent-phone" className="block font-bold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="agent-phone"
                    required
                    type="tel"
                    placeholder="+61 2 9000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="agent-country" className="block font-bold text-slate-700 mb-1">
                    Country of Operation *
                  </label>
                  <input
                    id="agent-country"
                    required
                    type="text"
                    placeholder="e.g. Australia, Nepal, India, Philippines"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="agent-qeac" className="block font-bold text-slate-700 mb-1">
                    QEAC / MARA Number (if applicable)
                  </label>
                  <input
                    id="agent-qeac"
                    type="text"
                    placeholder="e.g. QEAC #Q123 or MARA #1234567"
                    value={formData.qeacMara}
                    onChange={(e) => setFormData({ ...formData, qeacMara: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="agent-years" className="block font-bold text-slate-700 mb-1">
                    Years in Business
                  </label>
                  <input
                    id="agent-years"
                    type="text"
                    placeholder="e.g. 5 Years"
                    value={formData.yearsInBusiness}
                    onChange={(e) => setFormData({ ...formData, yearsInBusiness: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="agent-msg" className="block font-bold text-slate-700 mb-1">
                  Brief Agency Profile &amp; Target Student Market
                </label>
                <textarea
                  id="agent-msg"
                  rows={3}
                  placeholder="Tell us about the courses your students are most interested in, student volume, and marketing regions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue text-slate-900 bg-white placeholder:text-slate-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3.5 px-6 rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-60"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4 text-brand-gold" />
                    <span>Submit Agency Representation Application</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

