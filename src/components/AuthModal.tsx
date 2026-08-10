"use client";

import React, { useState } from 'react';
import { X, Lock, Mail, User, Phone, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'signin' | 'signup';
}

export default function AuthModal({ isOpen, onClose, initialMode = 'signin' }: AuthModalProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-[#FAF6F0] rounded-3xl p-8 shadow-2xl border border-[#E5DDD0] text-[#232A25] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-black/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Branding */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#809176] text-white flex items-center justify-center font-bold text-lg shadow-sm">
            H
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-[#232A25]">Harmony</h3>
            <p className="text-xs text-[#79837B] uppercase tracking-wider font-medium">Property & Living</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-[#EBE5DB] p-1 rounded-xl mb-6">
          <button
            onClick={() => { setMode('signin'); setSubmitted(false); }}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
              mode === 'signin'
                ? 'bg-white text-[#232A25] shadow-sm'
                : 'text-[#6B756E] hover:text-[#232A25]'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => { setMode('signup'); setSubmitted(false); }}
            className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
              mode === 'signup'
                ? 'bg-white text-[#232A25] shadow-sm'
                : 'text-[#6B756E] hover:text-[#232A25]'
            }`}
          >
            Sign Up
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-[#809176]/15 text-[#809176] rounded-full flex items-center justify-center mx-auto">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-[#232A25]">
              {mode === 'signin' ? 'Welcome Back!' : 'Account Created!'}
            </h4>
            <p className="text-sm text-[#6B756E]">
              {mode === 'signin' 
                ? 'Successfully signed in to Harmony Virtual Tours.'
                : 'Your profile has been set up. Welcome to Harmony.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-[#6B756E] uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#79837B]" />
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-[#E5DDD0] rounded-xl text-sm focus:outline-none focus:border-[#809176] focus:ring-2 focus:ring-[#809176]/20 transition-all text-[#232A25]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#6B756E] uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#79837B]" />
                    <input
                      type="tel"
                      placeholder="+62 812 3456 7890"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-white border border-[#E5DDD0] rounded-xl text-sm focus:outline-none focus:border-[#809176] focus:ring-2 focus:ring-[#809176]/20 transition-all text-[#232A25]"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#6B756E] uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#79837B]" />
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E5DDD0] rounded-xl text-sm focus:outline-none focus:border-[#809176] focus:ring-2 focus:ring-[#809176]/20 transition-all text-[#232A25]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#6B756E] uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#79837B]" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E5DDD0] rounded-xl text-sm focus:outline-none focus:border-[#809176] focus:ring-2 focus:ring-[#809176]/20 transition-all text-[#232A25]"
                />
              </div>
            </div>

            {mode === 'signin' && (
              <div className="flex justify-end">
                <button type="button" className="text-xs text-[#809176] hover:underline font-medium">
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-[#809176] hover:bg-[#6D7E64] text-white font-semibold rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 group mt-2"
            >
              <span>{mode === 'signin' ? 'Sign In' : 'Create Account'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}

        <div className="mt-6 pt-5 border-t border-[#E5DDD0] text-center text-xs text-[#6B756E]">
          By continuing, you agree to Harmony Property & Living's{' '}
          <a href="#" className="underline text-[#232A25]">Terms of Service</a> &{' '}
          <a href="#" className="underline text-[#232A25]">Privacy Policy</a>.
        </div>
      </div>
    </div>
  );
}
