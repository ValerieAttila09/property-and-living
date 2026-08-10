"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import TourViewer from '../../../components/TourViewer';
import { scenes, sceneOrder, PROPERTY } from '../../../lib/tour/scenes';
import { MapPin, Sparkles, Calendar, CheckCircle2, ChevronLeft, ArrowRight, ShieldCheck } from 'lucide-react';

export default function RoomClient({ scene: initialScene }: { scene: any }) {
  const router = useRouter();
  const [currentScene, setCurrentScene] = useState<any>(initialScene);

  const handleSceneChange = (newSceneId: string) => {
    const target = scenes[newSceneId];
    if (target) {
      setCurrentScene(target);
      // Update window URL without reloading page
      window.history.pushState({}, '', `/catalog/${newSceneId}`);
    }
  };

  if (!currentScene) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#232A25]">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4 font-heading">Room Not Found</h1>
          <p className="text-[#6B756E] mb-6">The requested room scene is not available in our 360 catalog.</p>
          <Link href="/catalog" className="px-6 py-3 bg-[#809176] text-white rounded-xl font-semibold">
            Return to Rooms Catalog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#232A25]">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* Back Link & Breadcrumb Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#809176] hover:text-[#6D7E64] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Rooms Catalog</span>
          </Link>

          <div className="flex items-center gap-2 text-xs text-[#79837B]">
            <MapPin className="w-3.5 h-3.5 text-[#809176]" />
            <span>{PROPERTY.name} — {PROPERTY.address}</span>
          </div>
        </div>

        {/* Room Header Info */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EBE5DB] rounded-full text-xs font-bold text-[#809176] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>360° Virtual Experience</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#232A25]">
              {currentScene.title}
            </h1>
            <p className="text-sm text-[#6B756E] mt-1">
              Drag anywhere to look around in 360°, zoom in/out, or click interactive hotspots for room details.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-3 bg-[#809176] hover:bg-[#6D7E64] text-white text-xs font-bold rounded-xl shadow-sm transition-colors flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Schedule Live Visit</span>
            </button>
          </div>
        </div>

        {/* Interactive 360° Viewer Section */}
        <div className="mb-12">
          <TourViewer scene={currentScene} onSceneChange={handleSceneChange} />
        </div>

        {/* Room Specifications & Hotspots Features Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left 2 Columns: Room Specs & Hotspots Info */}
          <div className="lg:col-span-2 space-y-8">
            
            <div className="bg-white rounded-3xl p-8 border border-[#E5DDD0] shadow-sm space-y-6">
              <h2 className="text-2xl font-bold font-heading text-[#232A25]">
                Room Features & Amenities
              </h2>
              <p className="text-sm text-[#6B756E] leading-relaxed">
                This room is fully integrated with smart home controls, premium fixtures, high-speed connectivity, and ergonomic design built for contemporary luxury living.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E5DDD0]">
                {currentScene.hotspots?.map((spot: any) => (
                  <div key={spot.id} className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#E5DDD0] space-y-1">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#232A25]">
                      <CheckCircle2 className="w-4 h-4 text-[#809176]" />
                      <span>{spot.label}</span>
                    </div>
                    {spot.description && (
                      <p className="text-xs text-[#6B756E] pl-6 leading-relaxed">
                        {spot.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Adjacent Navigation Nodes */}
            <div className="bg-[#EBE5DB] rounded-3xl p-6 border border-[#E5DDD0]">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#6B756E] mb-4">
                Explore Connected Rooms
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {sceneOrder.map((id) => {
                  const s = scenes[id];
                  if (id === currentScene.id) return null;
                  return (
                    <button
                      key={id}
                      onClick={() => handleSceneChange(id)}
                      className="p-3 bg-white rounded-xl border border-[#E5DDD0] text-left hover:border-[#809176] transition-all group"
                    >
                      <div className="text-xs font-bold text-[#232A25] group-hover:text-[#809176]">
                        {s.title}
                      </div>
                      <div className="text-[11px] text-[#6B756E] flex items-center gap-1 mt-1">
                        <span>Enter room</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Pricing & Booking Summary Card */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-[#E5DDD0] shadow-sm space-y-6 sticky top-24">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#809176]">
                  Residence Rate
                </span>
                <div className="text-3xl font-extrabold text-[#232A25] mt-1">
                  $1,800 <span className="text-sm font-semibold text-[#79837B]">/ month</span>
                </div>
                <p className="text-xs text-[#6B756E] mt-1">Includes high-speed Wi-Fi, building service charges, and pool access.</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#E5DDD0]">
                <div className="flex justify-between text-xs py-1">
                  <span className="text-[#6B756E]">Property:</span>
                  <span className="font-semibold text-[#232A25]">{PROPERTY.name}</span>
                </div>
                <div className="flex justify-between text-xs py-1">
                  <span className="text-[#6B756E]">Occupancy:</span>
                  <span className="font-semibold text-[#232A25]">2 Persons Max</span>
                </div>
                <div className="flex justify-between text-xs py-1">
                  <span className="text-[#6B756E]">Minimum Lease:</span>
                  <span className="font-semibold text-[#232A25]">6 Months</span>
                </div>
                <div className="flex justify-between text-xs py-1">
                  <span className="text-[#6B756E]">Furnishing:</span>
                  <span className="font-semibold text-[#232A25]">Fully Furnished</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button className="w-full py-3.5 bg-[#809176] hover:bg-[#6D7E64] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm">
                  Book Virtual Consultation
                </button>
                <button className="w-full py-3 bg-[#FAF6F0] hover:bg-[#EBE5DB] text-[#232A25] font-semibold rounded-xl text-xs border border-[#E5DDD0] transition-colors">
                  Download Room Floorplan PDF
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#79837B]">
                <ShieldCheck className="w-4 h-4 text-[#809176]" />
                <span>Verified Harmony Property Listing</span>
              </div>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
