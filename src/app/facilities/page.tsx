"use client";

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Dumbbell, Waves, ShieldCheck, Trees, Coffee, Tv, Sparkles, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function FacilitiesPage() {
  const facilityList = [
    {
      id: 'gym',
      title: 'Fitness & Wellness Center',
      category: 'Wellness',
      image: '/panorama/living-room.jpg',
      icon: Dumbbell,
      hours: 'Open 24 Hours Daily',
      description: 'Equipped with commercial-grade Technogym cardio machines, free weights, yoga mats, and personal training options.',
      features: ['24/7 Access', 'Free Weights Area', 'Yoga & Pilates Studio', 'Personal Trainers Available']
    },
    {
      id: 'pool',
      title: 'Skyline Infinity Pool & Lounge',
      category: 'Recreation',
      image: '/panorama/balcony.jpg',
      icon: Waves,
      hours: '6:00 AM – 10:00 PM',
      description: 'Temperature-controlled infinity edge pool offering panoramic views of the city line, accompanied by sun loungers and cabana services.',
      features: ['Temperature Controlled', 'Sunbathing Deck', 'Poolside Juice Bar', 'Children Safety Zone']
    },
    {
      id: 'security',
      title: '24/7 Concierge & Security',
      category: 'Services',
      image: '/panorama/test.jpg',
      icon: ShieldCheck,
      hours: '24/7 Continuous Service',
      description: 'Professional security personnel, biometric building entry, full CCTV coverage, and dedicated concierge for package handling.',
      features: ['Biometric Access', 'Package Reception', 'Visitor Escort', 'Emergency Response']
    },
    {
      id: 'garden',
      title: 'Lush Botanical Gardens',
      category: 'Outdoors',
      image: '/panorama/bedroom.jpg',
      icon: Trees,
      hours: '5:00 AM – 11:00 PM',
      description: 'Over 2,000 square meters of tranquil green gardens with shaded walking trails, outdoor seating pods, and fresh ambient fountains.',
      features: ['Walking & Jogging Path', 'Relaxation Pods', 'Organic Herb Corner', 'Ambient Lighting']
    },
    {
      id: 'lounge',
      title: 'Resident Co-Working Lounge',
      category: 'Lifestyle',
      image: '/panorama/kitchen.jpg',
      icon: Coffee,
      hours: '7:00 AM – 11:00 PM',
      description: 'High-speed gigabit Wi-Fi, private soundproof phone booths, ergonomic workstations, and complimentary gourmet coffee.',
      features: ['Gigabit Wi-Fi', 'Soundproof Booths', 'Espresso Station', 'Meeting Rooms']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#232A25]">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        
        {/* Header Title Section */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#EBE5DB] rounded-full text-xs font-bold text-[#809176] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Luxury Amenities & Lifestyle</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#232A25]">
            World-Class Facilities
          </h1>
          <p className="text-base text-[#6B756E]">
            Designed to enrich every aspect of your daily living experience. Discover spaces built for physical vitality, deep relaxation, and professional productivity.
          </p>
        </div>

        {/* Facilities Grid Showcase */}
        <div className="space-y-10">
          {facilityList.map((facility, index) => {
            const IconComp = facility.icon;
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={facility.id}
                className={`bg-white rounded-3xl overflow-hidden border border-[#E5DDD0] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 sm:p-8 ${
                  isReversed ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Image Section */}
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#EBE5DB] shadow-md group ${
                  isReversed ? 'md:col-start-2' : ''
                }`}>
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#809176] flex items-center gap-1.5">
                    <IconComp className="w-4 h-4" />
                    <span>{facility.category}</span>
                  </div>
                </div>

                {/* Text Content Section */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#79837B]">
                    <Clock className="w-3.5 h-3.5 text-[#809176]" />
                    <span>{facility.hours}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#232A25]">
                    {facility.title}
                  </h2>

                  <p className="text-sm text-[#6B756E] leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    {facility.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-[#232A25]">
                        <CheckCircle className="w-4 h-4 text-[#809176] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href="/#contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#809176] hover:bg-[#6D7E64] text-white text-xs font-bold rounded-xl shadow-sm transition-colors"
                    >
                      <span>Inquire Facility Access</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </main>

      <Footer />
    </div>
  );
}
