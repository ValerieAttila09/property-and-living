"use client";

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ShieldCheck, Lightbulb, Users, Leaf, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const coreValues = [
    {
      icon: ShieldCheck,
      title: 'Integrity',
      description: 'We adhere to the highest ethical standards, ensuring transparent pricing, honest disclosures, and trustworthy service in every transaction.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We pioneer virtual spatial technology with 360° tours and smart building integrations to revolutionize property exploration.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build more than structures—we design vibrant, safe, and welcoming living environments where modern communities thrive.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We prioritize eco-friendly construction, renewable energy options, and green spaces to ensure long-term environmental stewardship.'
    }
  ];

  const teamMembers = [
    {
      name: 'Serem Serene',
      role: 'Managing Director',
      image: '/panorama/bedroom.jpg',
      bio: 'Over 15 years leading luxury residential development across Southeast Asia.'
    },
    {
      name: 'Ekera Soane',
      role: 'Chief Architect',
      image: '/panorama/living-room.jpg',
      bio: 'Specialist in minimalist sustainable architecture and open living spaces.'
    },
    {
      name: 'Asian Braltk',
      role: 'Lead Interior Designer',
      image: '/panorama/kitchen.jpg',
      bio: 'Award-winning interior designer focused on modern organic aesthetics.'
    },
    {
      name: 'Luch Cbrden',
      role: 'Head of Operations',
      image: '/panorama/balcony.jpg',
      bio: 'Ensuring flawless resident experiences and 24/7 property management.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#232A25]">
      <Header />

      <main className="flex-1">

        {/* HERO BANNER SECTION matching Mockup 2 & 3 */}
        <section className="px-4 sm:px-6 lg:px-8 pt-6 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[21/8] min-h-[320px] md:min-h-[420px] flex items-center justify-center">
              <img
                src="/panorama/living-room.jpg"
                alt="Discovering Harmony Banner"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.65]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              <div className="relative z-10 text-center text-white px-6 max-w-3xl space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#E7EDE4] px-3.5 py-1 bg-white/20 rounded-full backdrop-blur-md">
                  Our Legacy & Future
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight">
                  Discovering Harmony: Our Journey.
                </h1>
              </div>
            </div>
          </div>
        </section>


        {/* OUR VISION & MISSION SECTION matching Mockup */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5DDD0] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Narrative */}
            <div className="space-y-6">
              <div className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#809176]">
                Purpose & Vision
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232A25] font-heading">
                Our Vision & Mission
              </h2>
              <p className="text-base text-[#6B756E] leading-relaxed">
                At Harmony Property & Living, our mission is to redefine urban living by harmonizing human comfort with architectural elegance. We strive to provide transparent, accessible, and immersive property experiences through interactive 360° virtual tours.
              </p>
              <p className="text-base text-[#6B756E] leading-relaxed">
                Whether you are seeking a serene personal apartment or an executive city suite, our curated properties offer sustainable design, smart technology, and thoughtful amenities tailored to your lifestyle.
              </p>

              <div className="pt-2">
                <a
                  href="/catalog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#809176] hover:bg-[#6D7E64] text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
                >
                  <span>Explore Rooms Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
              <img
                src="/panorama/test.jpg"
                alt="Our Vision & Team Collaboration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

          </div>
        </section>


        {/* CORE VALUES SECTION matching Mockup 4-card row */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#809176]">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232A25] font-heading">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-[#E5DDD0] shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF6F0] text-[#809176] border border-[#E5DDD0] flex items-center justify-center mb-4 group-hover:bg-[#809176] group-hover:text-white transition-colors">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#232A25] mb-2">{val.title}</h3>
                  <p className="text-xs text-[#6B756E] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>


        {/* OUR TEAM SECTION matching Mockup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-[#EBE5DB] rounded-3xl p-8 sm:p-12 border border-[#E5DDD0]">
            
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#809176]">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232A25] font-heading">
                Our Team
              </h2>
              <p className="text-sm text-[#6B756E]">
                Meet the passionate experts shaping the future of Harmony Property & Living.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-[#E5DDD0] shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#FAF6F0] relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover filter brightness-[0.95] hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#232A25]">{member.name}</h3>
                    <p className="text-xs font-semibold text-[#809176] mt-0.5">{member.role}</p>
                    <p className="text-[11px] text-[#6B756E] mt-2 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
