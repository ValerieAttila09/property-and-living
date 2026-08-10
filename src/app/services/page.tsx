"use client";

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Camera, Eye, Building2, Megaphone, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: Eye,
      title: '360° Virtual Tour Development',
      description: 'High-resolution panoramic spatial captures with custom hotspots, room connections, and interactive floorplans.'
    },
    {
      icon: Building2,
      title: 'Property Listing & Management',
      description: 'End-to-end luxury residence marketing, tenant screening, leasing management, and 24/7 resident support.'
    },
    {
      icon: Camera,
      title: 'HDR Architectural Photography',
      description: 'Professional interior and exterior photo shoots utilizing drone aerials and staged lighting.'
    },
    {
      icon: Megaphone,
      title: 'Targeted Property Marketing',
      description: 'Multi-channel digital campaigns reaching high-net-worth buyers and prospective tenants.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#232A25]">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#809176]">
            Professional Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#232A25]">
            Our Real Estate Solutions
          </h1>
          <p className="text-base text-[#6B756E]">
            Empowering property developers, owners, and residents with state-of-the-art virtual tour technology and full-service residential management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, idx) => {
            const IconComp = service.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-[#E5DDD0] shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF6F0] text-[#809176] border border-[#E5DDD0] flex items-center justify-center">
                  <IconComp className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold text-[#232A25] font-heading">{service.title}</h2>
                <p className="text-sm text-[#6B756E] leading-relaxed">{service.description}</p>
                <div className="pt-2">
                  <a href="/#contact" className="inline-flex items-center gap-2 text-xs font-bold text-[#809176] hover:text-[#6D7E64]">
                    <span>Learn More & Consult</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
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
