import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Train,
  ShoppingBag,
  Utensils,
  Wifi,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  GraduationCap
} from 'lucide-react';
import { COLLEGE_INFO } from '@/data/collegeInfo';

export const metadata: Metadata = {
  title: 'Our Campuses | Parramatta Sydney & Perth Western Australia',
  description:
    'Explore YES College purpose-built campuses located in Parramatta Sydney (3-4 mins from train station, opposite Westfield) and Perth College of Beauty Therapy WA.',
};

export default function CampusPage() {
  return (
    <div className="w-full pb-20 space-y-16">
      {/* Banner */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-blue-950 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-brand-gold/20 text-brand-gold border border-brand-gold/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Sydney &amp; Perth Locations</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Our Purpose-Built Campuses
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-3 leading-relaxed">
            State-of-the-art vocational learning facilities, commercial salon clinics, automotive workshops, and modern computer labs positioned in premier Australian transport and retail hubs.
          </p>
        </div>
      </section>

      {/* SYDNEY PARRAMATTA CAMPUS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-200/80 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-slate-100 pb-6 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                Main Sydney Campus
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">
                Sydney Parramatta Campus
              </h2>
              <p className="text-xs md:text-sm text-slate-500 flex items-center gap-1 mt-1 font-medium">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>43-45 Marion Street &amp; Level 3, 106 Church Street, Parramatta NSW 2150</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-slate-100 text-slate-800 font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                <Train className="w-3.5 h-3.5 text-brand-blue" /> 3-4 Mins from Train Station
              </span>
              <span className="bg-slate-100 text-slate-800 font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-amber-600" /> Opposite Westfield
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                Our purpose-built College Campus is conveniently located at <strong>Level 3, 106 Church Street</strong> and <strong>43-45 Marion Street</strong> in the bustling suburb of <strong>Parramatta in Sydney, New South Wales</strong>.
              </p>
              <p>
                The Campus is only a short <strong>3 to 4-minute walk from Parramatta Train and Bus Station</strong>, and directly opposite one of Sydney’s largest and most famous retail complexes, <strong>Westfield Parramatta</strong>.
              </p>
              <p>
                You will feel immediately welcomed as you enter our campus and are greeted by our friendly reception team and <strong>glowing chandeliers</strong>. Theory classrooms are equipped with the latest audiovisual equipment to make lessons dynamic and engaging, while our practical training rooms replicate real commercial salons complete with professional beauty beds, beauty stations, and mirrors.
              </p>
              <p>
                Students utilize our <strong>high-speed computer labs</strong> to study, complete assessments, print and research, then relax in the student breakout lounge with kitchen refrigerators and microwaves.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 font-semibold">
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Commercial Student Beauty Salon</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Modern Automotive Training Facility</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Audiovisual Lecture Classrooms</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Student Kitchen &amp; Breakout Area</span>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/campus-parramatta.png"
                  alt="YES College Campus Parramatta"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded">
                  Campus Facilities
                </div>
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/images/parramatta-westfield.png"
                  alt="Parramatta Westfield Shopping"
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
                  Vibrant Community
                </div>
              </div>
            </div>
          </div>

          {/* Surrounding Lifestyle Perks */}
          <div className="pt-6 border-t border-slate-100">
            <h3 className="text-base font-bold text-slate-900 mb-3">
              Life in Parramatta: Sydney’s Second CBD
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-brand-gold" />
                  <span>Multicultural Dining</span>
                </div>
                <p>
                  Enjoy hundreds of food choices right outside the door: Japanese, Korean, Indian, Chinese, Italian, Australian, and Middle Eastern eateries.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Train className="w-4 h-4 text-brand-blue" />
                  <span>Connected Transit Hub</span>
                </div>
                <p>
                  Parramatta connects seamlessly via fast express trains to Sydney Central (approx. 25 mins), suburban bus interchanges, and light rail.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Festivals &amp; Culture</span>
                </div>
                <p>
                  Parramatta Centenary Square and Parramatta Park host world-famous cultural festivals, outdoor cinema, concerts, and multicultural celebrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERTH CAMPUS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-slate-200/80 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Western Australia Branch
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">
              Perth College of Beauty Therapy
            </h2>
            <p className="text-xs md:text-sm text-slate-500 flex items-center gap-1 mt-1 font-medium">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>Perth Campus Facilities, Western Australia</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                Originally established in 1987 by Beverly Stone, the <strong>Perth College of Beauty Therapy</strong> is one of Western Australia’s longest-running vocational colleges.
              </p>
              <p>
                Delivering industry-accredited training in beauty therapy, massage, facial treatments, and spa management, students benefit from intimate training cohorts, highly credentialed educators, and direct salon placement connections across Perth.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/courses/shb50121-diploma-of-beauty-therapy"
                  className="bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm"
                >
                  View Perth Beauty Course
                </Link>
                <Link
                  href="/contact"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-5 py-2.5 rounded-xl transition-colors"
                >
                  Contact Admissions
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <Image
                src="/images/course-shb50121.png"
                alt="Perth College of Beauty Therapy training clinic"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

