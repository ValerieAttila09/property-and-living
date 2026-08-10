"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Play, 
  Pause, 
  Maximize2, 
  Compass, 
  Info, 
  MapPin, 
  ChevronRight,
  X,
  Eye,
  ArrowRight
} from 'lucide-react';
import { scenes, sceneOrder } from '../lib/tour/scenes';

interface TourViewerProps {
  scene: any;
  onSceneChange?: (newSceneId: string) => void;
}

export default function TourViewer({ scene, onSceneChange }: TourViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const psvRef = useRef<any>(null);
  const autorotateTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const [autorotateOn, setAutorotateOn] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<any | null>(null);
  const [showFloorplan, setShowFloorplan] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);

    async function initViewer() {
      if (!containerRef.current) return;
      
      const [{ Viewer }, { MarkersPlugin }] = await Promise.all([
        import('@photo-sphere-viewer/core'),
        import('@photo-sphere-viewer/markers-plugin'),
      ]);

      if (!mounted) return;

      // Clean existing instance if any
      if (psvRef.current) {
        try {
          psvRef.current.destroy();
        } catch (err) {}
      }

      const viewer = new Viewer({
        container: containerRef.current,
        panorama: scene?.image || '/panorama/bedroom.jpg',
        navbar: false,
        loadingImg: undefined,
        loadingTxt: '',
        defaultZoomLvl: 35,
        minFov: 30,
        maxFov: 90,
        moveInertia: true,
        mousewheelCtrlKey: false,
        plugins: [[MarkersPlugin, {}]],
      });

      psvRef.current = viewer;

      viewer.addEventListener('ready', () => {
        if (mounted) setIsLoading(false);
      });

      const markers = viewer.getPlugin(MarkersPlugin) as any;
      
      markers.addEventListener('select-marker', (e: any) => {
        const data = e.marker.config?.data;
        if (!data) return;

        if (data.type === 'nav' && data.target) {
          if (onSceneChange) {
            onSceneChange(data.target);
          } else {
            window.location.href = `/catalog/${data.target}`;
          }
        } else if (data.type === 'info') {
          setActiveHotspot(data);
        }
      });

      // Add hotspots for current scene
      if (scene?.hotspots) {
        for (const h of scene.hotspots) {
          const isNav = h.type === 'nav';
          const html = `
            <button class="hotspot ${isNav ? 'hotspot--nav' : 'hotspot--info'}" type="button" aria-label="${h.label}">
              <span class="hotspot__ring"></span>
              <span class="hotspot__core">
                ${isNav 
                  ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 19V5M12 5L6 11M12 5L18 11" stroke-linecap="round" stroke-linejoin="round"/></svg>' 
                  : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="9"/><path d="M12 11v5.5" stroke-linecap="round"/><circle cx="12" cy="7.7" r="1.1" fill="currentColor"/></svg>'
                }
              </span>
              <span class="hotspot__tooltip">
                <strong>${h.label}</strong>
                <span>${isNav ? 'Click to enter room' : 'Click for details'}</span>
              </span>
            </button>`;

          markers.addMarker({
            id: h.id,
            position: { yaw: h.yaw, pitch: h.pitch },
            html,
            anchor: 'center center',
            data: h,
          });
        }
      }
    }

    initViewer();

    return () => {
      mounted = false;
      if (autorotateTimerRef.current) {
        clearInterval(autorotateTimerRef.current);
        autorotateTimerRef.current = null;
      }
      try {
        psvRef.current?.destroy();
      } catch (e) {}
    };
  }, [scene, onSceneChange]);

  // Controls helper functions
  const rotate = (deltaYawDeg: number) => {
    const v = psvRef.current;
    if (!v) return;
    const pos = v.getPosition();
    v.rotate({
      yaw: pos.yaw + (deltaYawDeg * Math.PI) / 180,
      pitch: pos.pitch,
    });
  };

  const zoomIn = () => {
    const v = psvRef.current;
    if (!v) return;
    v.zoom(v.getZoomLevel() + 14);
  };

  const zoomOut = () => {
    const v = psvRef.current;
    if (!v) return;
    v.zoom(v.getZoomLevel() - 14);
  };

  const resetView = () => {
    const v = psvRef.current;
    if (!v) return;
    v.rotate({ yaw: 0, pitch: 0 });
    v.zoom(35);
  };

  const toggleAutorotate = () => {
    const v = psvRef.current;
    if (!v) return;

    if (autorotateOn) {
      if (autorotateTimerRef.current) {
        clearInterval(autorotateTimerRef.current);
        autorotateTimerRef.current = null;
      }
      v.setOption('moveInertia', true);
      setAutorotateOn(false);
    } else {
      v.setOption('moveInertia', false);
      autorotateTimerRef.current = setInterval(() => {
        const pos = v.getPosition();
        v.rotate({ yaw: pos.yaw + 0.005, pitch: pos.pitch });
      }, 16);
      setAutorotateOn(true);
    }
  };

  const toggleFullscreen = () => {
    const v = psvRef.current;
    if (!v) return;
    v.toggleFullscreen();
  };

  const ctrlBtnClass =
    'w-10 h-10 md:w-11 md:h-11 rounded-full grid place-items-center text-white/90 bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-200 active:scale-95 cursor-pointer backdrop-blur-md hover:text-white';

  return (
    <div className="relative w-full h-[65vh] md:h-[75vh] bg-[#121614] rounded-3xl overflow-hidden shadow-2xl border border-[#E5DDD0]">
      
      {/* 360 Viewer Canvas Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-30 bg-[#121614] flex flex-col items-center justify-center text-white gap-3 animate-pulse">
          <div className="w-10 h-10 border-4 border-[#809176] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-medium tracking-wide text-white/70">Loading 360° Panorama...</p>
        </div>
      )}

      {/* Top Header Overlay with Scene Title */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto bg-[#232A25]/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/15 text-white flex items-center gap-3 shadow-lg">
          <div className="w-2.5 h-2.5 rounded-full bg-[#809176] animate-ping" />
          <div>
            <h3 className="text-sm font-bold leading-none">{scene?.title || 'Interactive Room'}</h3>
            <p className="text-[11px] text-white/70 mt-0.5">360° Panorama View</p>
          </div>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => setShowFloorplan(!showFloorplan)}
            className={`px-3.5 py-2 rounded-2xl text-xs font-semibold backdrop-blur-md border transition-all flex items-center gap-1.5 shadow-lg ${
              showFloorplan 
                ? 'bg-[#809176] text-white border-transparent' 
                : 'bg-[#232A25]/80 text-white/90 border-white/15 hover:bg-[#232A25]'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Floorplan</span>
          </button>
        </div>
      </div>

      {/* Mini Floorplan Overlay Drawer */}
      {showFloorplan && (
        <div className="absolute top-18 right-4 z-30 w-72 bg-[#232A25]/95 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-white shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#809176]">Floorplan Navigation</h4>
            <button onClick={() => setShowFloorplan(false)} className="text-white/60 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="relative w-full aspect-[4/3] bg-black/40 rounded-xl border border-white/10 p-3 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-2 h-full">
              {sceneOrder.map((id) => {
                const s = scenes[id];
                const isCurrent = scene?.id === id;
                return (
                  <button
                    key={id}
                    onClick={() => {
                      if (onSceneChange) onSceneChange(id);
                      else window.location.href = `/catalog/${id}`;
                    }}
                    className={`p-2.5 rounded-lg border text-left transition-all ${
                      isCurrent
                        ? 'bg-[#809176] border-white/40 text-white font-bold shadow-md'
                        : 'bg-white/5 border-white/10 hover:bg-white/15 text-white/80'
                    }`}
                  >
                    <div className="text-xs font-medium">{s.title}</div>
                    <div className="text-[10px] text-white/60">Node {s.id}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Floating 360 Controls Bar */}
      <div className="absolute bottom-18 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 p-1.5 rounded-full shadow-2xl bg-[#232A25]/85 backdrop-blur-xl border border-white/15">
        <button type="button" className={ctrlBtnClass} title="Rotate Left" onClick={() => rotate(-15)}>
          <RotateCcw className="w-4 h-4" />
        </button>

        <button type="button" className={ctrlBtnClass} title="Zoom Out" onClick={zoomOut}>
          <ZoomOut className="w-4 h-4" />
        </button>

        <button
          type="button"
          className={`${ctrlBtnClass} ${
            autorotateOn ? 'bg-[#809176] text-white border-transparent shadow-[0_0_12px_rgba(128,145,118,0.5)]' : ''
          }`}
          title="Auto Rotate"
          onClick={toggleAutorotate}
        >
          {autorotateOn ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        <button type="button" className={ctrlBtnClass} title="Zoom In" onClick={zoomIn}>
          <ZoomIn className="w-4 h-4" />
        </button>

        <button type="button" className={ctrlBtnClass} title="Reset View" onClick={resetView}>
          <Compass className="w-4 h-4" />
        </button>

        <div className="w-px h-5 bg-white/20 mx-0.5" />

        <button type="button" className={ctrlBtnClass} title="Fullscreen" onClick={toggleFullscreen}>
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Room Quick Switcher Toolbar */}
      <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-center">
        <div className="flex items-center gap-2 overflow-x-auto p-1.5 rounded-2xl bg-[#232A25]/90 backdrop-blur-xl border border-white/15 max-w-full no-scrollbar shadow-lg">
          {sceneOrder.map((id) => {
            const s = scenes[id];
            const isSelected = scene?.id === id;
            return (
              <button
                key={id}
                onClick={() => {
                  if (onSceneChange) onSceneChange(id);
                  else window.location.href = `/catalog/${id}`;
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#809176] text-white shadow-sm font-bold'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{s.title}</span>
                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Hotspot Info Popup Modal */}
      {activeHotspot && (
        <div className="absolute inset-0 z-40 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm bg-[#FAF6F0] rounded-3xl p-6 shadow-2xl border border-[#E5DDD0] text-[#232A25]">
            <button
              onClick={() => setActiveHotspot(null)}
              className="absolute top-4 right-4 p-1.5 text-gray-500 hover:text-gray-900 rounded-full hover:bg-black/5"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="w-12 h-12 rounded-2xl bg-[#809176]/15 text-[#809176] flex items-center justify-center mb-4">
              <Info className="w-6 h-6" />
            </div>

            <h4 className="text-lg font-bold text-[#232A25]">{activeHotspot.label}</h4>
            <p className="text-sm text-[#6B756E] mt-2 leading-relaxed">
              {activeHotspot.description || 'Premium amenity feature included in this room.'}
            </p>

            <div className="mt-6 pt-4 border-t border-[#E5DDD0] flex justify-end">
              <button
                onClick={() => setActiveHotspot(null)}
                className="px-4 py-2 bg-[#809176] text-white text-xs font-semibold rounded-xl hover:bg-[#6D7E64] transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
