"use client";

import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CatalogCard from '../components/CatalogCard';
import { sceneOrder, scenes } from '../lib/tour/scenes';
import { Dumbbell, Waves, ShieldCheck, Trees, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const featuredProperties = [
    {
      id: 'bedroom',
      title: 'The Serene Suite',
      price: '$1,800',
      thumbnail: scenes.bedroom.thumbnail,
      tags: ['Bedroom', 'Panoramas', 'Balcony Access'],
      specs: '55 m² • 1 Bed • 1 Bath'
    },
    {
      id: 'livingroom',
      title: 'Harmony Gardens',
      price: '$3,200',
      thumbnail: scenes.livingroom.thumbnail,
      tags: ['Living Room', 'Garden View', 'Smart TV'],
      specs: '110 m² • 2 Bed • 2 Bath'
    },
    {
      id: 'kitchen',
      title: 'City View Loft',
      price: '$3,500',
      thumbnail: scenes.kitchen.thumbnail,
      tags: ['Kitchen', 'Penthouse', 'Modern Stove'],
      specs: '125 m² • 3 Bed • 2 Bath'
    }
  ];

  const amenities = [
    {
      icon: Dumbbell,
      title: 'Modern Gym',
      description: 'Fully equipped fitness center with state-of-the-art cardiovascular and strength training facilities open 24/7.',
      link: '/facilities'
    },
    {
      icon: Waves,
      title: 'Infinity Pool',
      description: 'Temperature-controlled rooftop infinity pool with panoramic views of the city skyline and lounge deck.',
      link: '/facilities'
    },
    {
      icon: ShieldCheck,
      title: '24/7 Security',
      description: 'Round-the-clock security team, smart access control cards, and comprehensive CCTV monitoring.',
      link: '/facilities'
    },
    {
      icon: Trees,
      title: 'Lush Garden',
      description: 'Beautifully landscaped botanical gardens, walking paths, and peaceful outdoor relaxation zones.',
      link: '/facilities'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#232A25]">
      {/* Navigation Header */}
      <Header />

      <main className="flex-1">
        
        {/* HERO SECTION matching Mockup 1 (Desktop 1920x1080) */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-6 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[21/9] min-h-[440px] md:min-h-[520px] flex items-center justify-center">
              
              {/* Hero Image Background */}
              <img
                src="/panorama/living-room.jpg"
                alt="Modern Living Space"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.70]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Hero Overlay Content */}
              <div className="relative z-10 text-center text-white px-6 max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold uppercase tracking-wider text-white">
                  <Sparkles className="w-3.5 h-3.5 text-[#E7EDE4]" />
                  <span>Immersive 360° Living Experience</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-heading">
                  Find Your Perfect Harmony
                </h1>

                <p className="text-lg sm:text-xl text-white/90 font-medium max-w-xl mx-auto leading-relaxed">
                  Discover Modern Living Spaces for Your Lifestyle
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/catalog"
                    className="w-full sm:w-auto px-8 py-4 bg-[#809176] hover:bg-[#6D7E64] text-white font-bold rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base"
                  >
                    <span>Explore Properties</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>

                  <Link
                    href="/catalog/bedroom"
                    className="w-full sm:w-auto px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-2xl backdrop-blur-md border border-white/30 transition-all flex items-center justify-center gap-2 text-base"
                  >
                    <span>Launch 360° Tour</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ABOUT US TEASER SECTION matching Mockup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5DDD0] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Image Thumbnail */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
              <img
                src="/panorama/bedroom.jpg"
                alt="About Harmony Property"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Content Narrative */}
            <div className="space-y-6">
              <div className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#809176]">
                Our Philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232A25] font-heading">
                About Us
              </h2>
              <p className="text-base text-[#6B756E] leading-relaxed">
                Harmony Property & Living is dedicated to redefining residential living. We combine modern architectural aesthetics, sustainable engineering, and cutting-edge 360° virtual tours to help you experience your next home before stepping inside.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#232A25]">
                  <CheckCircle2 className="w-5 h-5 text-[#809176]" />
                  <span>360° Virtual Tours</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#232A25]">
                  <CheckCircle2 className="w-5 h-5 text-[#809176]" />
                  <span>Prime Locations</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#232A25]">
                  <CheckCircle2 className="w-5 h-5 text-[#809176]" />
                  <span>Eco-Friendly Living</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-[#232A25]">
                  <CheckCircle2 className="w-5 h-5 text-[#809176]" />
                  <span>24/7 Concierge</span>
                </div>
              </div>

              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#809176] hover:bg-[#6D7E64] text-white text-sm font-semibold rounded-xl shadow-sm transition-colors mt-2"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>


        {/* FEATURED PROPERTIES SECTION matching Mockup */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#809176]">
                Curated Catalog
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232A25] font-heading mt-1">
                Featured Properties
              </h2>
            </div>
            <Link
              href="/catalog"
              className="text-sm font-bold text-[#809176] hover:text-[#6D7E64] flex items-center gap-1.5"
            >
              <span>View All Rooms</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((prop) => (
              <CatalogCard
                key={prop.id}
                id={prop.id}
                title={prop.title}
                thumbnail={prop.thumbnail}
                price={prop.price}
                tags={prop.tags}
                specs={prop.specs}
              />
            ))}
          </div>
        </section>


        {/* AMENITIES & LIFESTYLE SECTION matching Mockup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="bg-[#EBE5DB] rounded-3xl p-8 sm:p-12 border border-[#E5DDD0]">
            
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#809176]">
                World-Class Facilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#232A25] font-heading">
                Amenities & Lifestyle
              </h2>
              <p className="text-sm text-[#6B756E]">
                Designed for your physical wellness, comfort, security, and peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {amenities.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-[#E5DDD0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] text-[#809176] border border-[#E5DDD0] flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-[#232A25] mb-2">{item.title}</h3>
                      <p className="text-xs text-[#6B756E] leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <Link
                      href={item.link}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#809176] hover:bg-[#6D7E64] text-white text-xs font-semibold text-center transition-colors block"
                    >
                      View Details
                    </Link>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      {/* Footer Component matching mockup */}
      <Footer />
    </div>
  );
}
