"use client";

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CatalogCard from '../../components/CatalogCard';
import { sceneOrder, scenes } from '../../lib/tour/scenes';
import { Search, Sparkles, Filter } from 'lucide-react';

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const catalogItems = [
    {
      id: 'bedroom',
      title: 'The Serene Suite (Bedroom)',
      category: 'bedroom',
      price: '$1,800',
      thumbnail: scenes.bedroom.thumbnail,
      tags: ['Bedroom', 'Balcony Access', 'Air Conditioner'],
      specs: '55 m² • 1 Bed • 1 Bath'
    },
    {
      id: 'livingroom',
      title: 'Harmony Gardens (Living Room)',
      category: 'livingroom',
      price: '$3,200',
      thumbnail: scenes.livingroom.thumbnail,
      tags: ['Living Room', 'Smart TV 55"', 'Soundbar'],
      specs: '110 m² • 2 Bed • 2 Bath'
    },
    {
      id: 'kitchen',
      title: 'City View Loft (Kitchen)',
      category: 'kitchen',
      price: '$3,500',
      thumbnail: scenes.kitchen.thumbnail,
      tags: ['Kitchen', 'Double Fridge', 'Built-in Oven'],
      specs: '125 m² • 3 Bed • 2 Bath'
    },
    {
      id: 'bathroom',
      title: 'Spa Oasis (Bathroom)',
      category: 'bathroom',
      price: '$1,500',
      thumbnail: scenes.bathroom.thumbnail,
      tags: ['Bathroom', 'Rain Shower', 'Instant Heater'],
      specs: '30 m² • 1 Bath'
    },
    {
      id: 'balcony',
      title: 'Sky Terrace (Balcony)',
      category: 'balcony',
      price: '$2,100',
      thumbnail: scenes.balcony.thumbnail,
      tags: ['Balcony', 'Panoramic View', 'Sunset Lounge'],
      specs: '40 m² Outdoor'
    }
  ];

  const filteredItems = catalogItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#232A25]">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        
        {/* Page Title & Intro Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#EBE5DB] rounded-full text-xs font-bold text-[#809176] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Property Showcase</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-heading text-[#232A25]">
            Rooms & Living Spaces Catalog
          </h1>
          <p className="text-base text-[#6B756E]">
            Explore our curated residence collection. Click any room to open its full-screen 360° virtual tour with interactive hotspots and specs.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-[#E5DDD0] shadow-sm mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#79837B]" />
              <input
                type="text"
                placeholder="Search rooms, amenities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF6F0] border border-[#E5DDD0] rounded-xl text-sm focus:outline-none focus:border-[#809176] focus:ring-2 focus:ring-[#809176]/20 transition-all text-[#232A25]"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
              <span className="text-xs font-bold text-[#79837B] uppercase mr-1 hidden lg:inline flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter:
              </span>
              {[
                { id: 'all', label: 'All Rooms' },
                { id: 'bedroom', label: 'Bedroom' },
                { id: 'livingroom', label: 'Living Room' },
                { id: 'kitchen', label: 'Kitchen' },
                { id: 'bathroom', label: 'Bathroom' },
                { id: 'balcony', label: 'Balcony' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#809176] text-white shadow-sm'
                      : 'bg-[#FAF6F0] text-[#6B756E] hover:bg-[#EBE5DB] hover:text-[#232A25]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Catalog Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <CatalogCard
                key={item.id}
                id={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
                price={item.price}
                tags={item.tags}
                specs={item.specs}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E5DDD0] text-[#6B756E]">
            <p className="text-lg font-bold text-[#232A25]">No rooms found matching your search.</p>
            <p className="text-sm mt-1">Try clearing filters or searching for different keywords.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-5 py-2.5 bg-[#809176] text-white text-xs font-semibold rounded-xl hover:bg-[#6D7E64] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
