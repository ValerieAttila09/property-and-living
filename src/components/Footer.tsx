"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#EBE5DB] text-[#232A25] pt-16 pb-8 border-t border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#D8CEBE]">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#9E1B32] text-white flex items-center justify-center font-extrabold text-lg shadow-sm">
                H
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-[#232A25] leading-tight">
                  Harmony
                </span>
                <span className="text-[9px] font-semibold text-[#79837B] tracking-widest uppercase">
                  Property & Living
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#6B756E] leading-relaxed max-w-sm">
              Discover modern living spaces tailored for your lifestyle with immersive 360° virtual tours and premium property management.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#6B756E] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-[#232A25]">
              <li>
                <Link href="/" className="hover:text-[#809176] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#809176] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-[#809176] transition-colors">Rooms & Catalog</Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#809176] transition-colors">Amenities & Lifestyle</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div id="contact">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#6B756E] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-[#6B756E]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#809176] shrink-0 mt-0.5" />
                <span>Jl. Kemang Raya No. 12, Jakarta Selatan, 12730</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#809176] shrink-0" />
                <span>+62 (21) 555-0199</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#809176] shrink-0" />
                <span>info@harmonyproperty.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials & Typography details */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#6B756E] mb-4">
              Follow Us
            </h4>
            <p className="text-xs text-[#79837B] mb-4">Inter | Google Sans Fonts</p>
            <div className="flex items-center gap-3 text-[#232A25]">
              {/* Facebook Icon */}
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#809176] hover:text-white transition-all shadow-sm" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram Icon */}
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#809176] hover:text-white transition-all shadow-sm" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Twitter / X Icon */}
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#809176] hover:text-white transition-all shadow-sm" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-[#809176] hover:text-white transition-all shadow-sm" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#79837B] gap-4">
          <p>© {new Date().getFullYear()} Harmony Property & Living — All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
