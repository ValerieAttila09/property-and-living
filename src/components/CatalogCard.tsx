"use client";

import React from 'react';
import Link from 'next/link';
import { Eye, ArrowUpRight, BedDouble, Maximize, Sparkles } from 'lucide-react';

interface CatalogCardProps {
  id: string;
  title: string;
  thumbnail: string;
  price?: string;
  tags?: string[];
  specs?: string;
}

export default function CatalogCard({
  id,
  title,
  thumbnail,
  price = '$1,800',
  tags = ['360° Tour', 'Furnished'],
  specs = '45 m² • 1 Bed • 1 Bath'
}: CatalogCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#E5DDD0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      
      {/* Image Thumbnail Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EBE5DB]">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Price Badge overlay matching mockup */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-extrabold text-[#232A25] shadow-sm border border-white/40 flex items-center gap-1">
          <span>{price}</span>
          <span className="text-[10px] font-medium text-[#79837B]">/mo</span>
        </div>

        {/* 360 Badge */}
        <div className="absolute top-4 right-4 bg-[#809176] text-white px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 shadow-sm">
          <Sparkles className="w-3 h-3" />
          <span>360° View</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#232A25] group-hover:text-[#809176] transition-colors">
            {title}
          </h3>
          <p className="text-xs text-[#6B756E] mt-1 font-medium">{specs}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 bg-[#F5EFE6] border border-[#E5DDD0] rounded-full text-[11px] font-medium text-[#6B756E]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button matching mockup style */}
        <div className="mt-6">
          <Link
            href={`/catalog/${id}`}
            className="w-full py-3 px-4 rounded-xl bg-[#809176] hover:bg-[#6D7E64] text-white text-xs font-semibold shadow-sm transition-colors flex items-center justify-center gap-2 group/btn"
          >
            <span>View Details / 360° Tour</span>
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

    </div>
  );
}
