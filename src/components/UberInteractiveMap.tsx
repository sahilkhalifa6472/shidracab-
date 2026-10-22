import React from 'react';
import { Vehicle } from '../types/cab';
import { CarIllustration } from './CarIllustration';

interface UberInteractiveMapProps {
  selectedVehicle: Vehicle;
  pickup: string;
  dropoff: string;
}

export const UberInteractiveMap: React.FC<UberInteractiveMapProps> = ({
  selectedVehicle,
  pickup,
  dropoff,
}) => {
  const carType =
    selectedVehicle.id === 'toyota-rumion'
      ? 'toyota-rumion'
      : selectedVehicle.id === 'sedan-dzire'
      ? 'sedan-dzire'
      : selectedVehicle.id === 'premium-innova'
      ? 'premium-innova'
      : 'hatchback-mini';

  return (
    <div className="relative w-full h-full min-h-[190px] lg:min-h-full overflow-hidden bg-neutral-100 select-none">
      {/* 1. Vector Map Canvas */}
      <svg
        className="absolute inset-0 w-full h-full object-cover"
        viewBox="0 0 1000 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Land Surface */}
        <rect width="1000" height="700" fill="#F4F4F6" />

        {/* City Blocks */}
        <rect x="80" y="60" width="220" height="130" rx="16" fill="#E4E4E7" />
        <rect x="680" y="80" width="260" height="160" rx="16" fill="#E4E4E7" />
        <rect x="100" y="440" width="240" height="180" rx="16" fill="#E4E4E7" />
        <rect x="660" y="420" width="280" height="200" rx="16" fill="#E4E4E7" />
        <rect x="380" y="80" width="240" height="80" rx="14" fill="#E4E4E7" />

        {/* Major Roads */}
        <path d="M -50 340 L 1050 340" stroke="#FFFFFF" strokeWidth="40" />
        <path d="M -50 340 L 1050 340" stroke="#D4D4D8" strokeWidth="2" strokeDasharray="16 16" />

        <path d="M 380 -50 L 380 750" stroke="#FFFFFF" strokeWidth="34" />
        <path d="M 720 -50 L 720 750" stroke="#FFFFFF" strokeWidth="30" />

        {/* Secondary Diagonal Roads */}
        <path d="M 60 100 L 940 660" stroke="#FFFFFF" strokeWidth="20" />
        <path d="M 860 80 L 140 680" stroke="#FFFFFF" strokeWidth="18" />

        {/* Active Route Polyline from Pickup to Drop */}
        <path
          d="M 300 340 Q 420 300 540 380 T 720 460"
          stroke="#000000"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Pickup Marker (Green Dot + Pulse) */}
        <g transform="translate(300, 340)">
          <circle cx="0" cy="0" r="18" fill="#10B981" fillOpacity="0.2">
            <animate attributeName="r" values="10;24;10" dur="2s" repeatCount="indefinite" />
            <animate attributeName="fill-opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="8" fill="#10B981" stroke="#FFFFFF" strokeWidth="2.5" />
        </g>

        {/* Destination Marker (Black Square) */}
        <g transform="translate(720, 460)">
          <rect x="-8" y="-8" width="16" height="16" rx="3" fill="#000000" stroke="#FFFFFF" strokeWidth="2.5" />
          <rect x="-3" y="-3" width="6" height="6" rx="1" fill="#FFFFFF" />
        </g>

        {/* Nearby Active Cabs */}
        <g transform="translate(360, 310)">
          <rect x="-8" y="-12" width="16" height="24" rx="4" fill="#000000" stroke="#FFFFFF" strokeWidth="2" />
          <rect x="-4" y="-4" width="8" height="8" rx="1" fill="#FFFFFF" />
        </g>

        <g transform="translate(620, 360)">
          <rect x="-8" y="-12" width="16" height="24" rx="4" fill="#000000" stroke="#FFFFFF" strokeWidth="2" />
          <rect x="-4" y="-4" width="8" height="8" rx="1" fill="#FFFFFF" />
        </g>

        <g transform="translate(480, 480)">
          <rect x="-8" y="-12" width="16" height="24" rx="4" fill="#000000" stroke="#FFFFFF" strokeWidth="2" />
          <rect x="-4" y="-4" width="8" height="8" rx="1" fill="#FFFFFF" />
        </g>
      </svg>

      {/* 2. Top Floating Info & Route Pill */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
        <div className="pointer-events-auto bg-black/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live Drivers Nearby · 10 Min Arrival</span>
        </div>

        {/* Dynamic Route Tag if entered */}
        {(pickup || dropoff) && (
          <div className="pointer-events-auto bg-white/95 backdrop-blur-md border border-neutral-300 text-black text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md truncate max-w-[240px] hidden sm:flex items-center gap-1.5">
            <span className="text-emerald-600 truncate">{pickup || 'Pickup'}</span>
            <span>→</span>
            <span className="text-black truncate">{dropoff || 'Drop'}</span>
          </div>
        )}
      </div>

      {/* 3. Floating Vehicle Spotlight Card (Desktop Bottom-Right) */}
      <div className="absolute bottom-6 right-6 max-w-sm w-full hidden md:block pointer-events-auto">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-neutral-300 shadow-xl p-4 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-black">
                {selectedVehicle.name}
              </span>
              {selectedVehicle.id === 'toyota-rumion' && (
                <span className="text-[10px] font-black bg-black text-white px-1.5 py-0.5 rounded tracking-wider">
                  7-SEATER MPV
                </span>
              )}
            </div>
            <span className="text-xs font-black text-black font-mono">
              ₹{selectedVehicle.perMileRate}/km
            </span>
          </div>

          {/* Car Graphic */}
          <div className="w-full h-24 bg-neutral-50 rounded-xl border border-neutral-200 p-2 flex items-center justify-center">
            <CarIllustration type={carType} className="max-h-20 w-auto object-contain" />
          </div>

          <p className="text-xs text-neutral-600 line-clamp-2">
            {selectedVehicle.tagline}
          </p>

          <div className="grid grid-cols-3 gap-1.5 text-center text-[11px] font-semibold text-neutral-700 bg-neutral-100 p-2 rounded-xl">
            <div>
              <span className="block font-black text-black">{selectedVehicle.passengers} Seats</span>
              <span className="text-[10px] text-neutral-500">Capacity</span>
            </div>
            <div>
              <span className="block font-black text-black">{selectedVehicle.luggage} Bags</span>
              <span className="text-[10px] text-neutral-500">Luggage</span>
            </div>
            <div>
              <span className="block font-black text-emerald-700">Dual AC</span>
              <span className="text-[10px] text-neutral-500">Chilled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
