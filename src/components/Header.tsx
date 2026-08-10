"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, User } from 'lucide-react';
import AuthModal from './AuthModal';

export default function Header() {
  const pathname = usePathname();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Rooms', href: '/catalog' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Contact Us', href: '/#contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#E5DDD0]/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Section matching Mockups */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#9E1B32] text-white flex items-center justify-center font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform">
              H
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-[#232A25] leading-tight">
                Harmony
              </span>
              <span className="text-[10px] font-semibold text-[#79837B] tracking-widest uppercase">
                Property & Living
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive(link.href)
                    ? 'text-[#232A25] font-semibold bg-[#EBE5DB]'
                    : 'text-[#6B756E] hover:text-[#232A25] hover:bg-[#F2ECE1]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsAuthOpen(true)}
              className="px-5 py-2.5 rounded-full bg-[#809176] hover:bg-[#6D7E64] text-white text-sm font-semibold shadow-sm transition-all hover:shadow duration-200 flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              <span>Sign In / Sign Up</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsAuthOpen(true)}
              className="p-2 text-[#809176] hover:bg-[#EBE5DB] rounded-lg transition-colors"
              aria-label="Sign in"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#232A25] hover:bg-[#EBE5DB] rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF6F0] border-b border-[#E5DDD0] px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-[#809176] text-white font-semibold'
                    : 'text-[#232A25] hover:bg-[#EBE5DB]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAuthOpen(true);
                }}
                className="w-full py-3 bg-[#809176] text-white text-center font-semibold rounded-xl shadow-sm"
              >
                Sign In / Sign Up
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal Triggered Globally */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
