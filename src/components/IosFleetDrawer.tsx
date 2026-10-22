import React from 'react';
import { FLEET_DATA, CONTACT_INFO } from '../data/cabData';
import { Users, Briefcase, X } from 'lucide-react';
import { CarIllustration } from './CarIllustration';

interface IosFleetDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCar: (carId: string) => void;
}

export const IosFleetDrawer: React.FC<IosFleetDrawerProps> = ({ isOpen, onClose, onSelectCar }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* iOS Modal Card */}
      <div className="bg-white w-full max-w-2xl rounded-t-[32px] sm:rounded-[32px] border border-neutral-200 shadow-2xl p-6 sm:p-7 max-h-[88vh] overflow-y-auto space-y-5 animate-in slide-in-from-bottom duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-black bg-neutral-100 px-2.5 py-0.5 rounded-full">
              SHIDARA CAB FLEET
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-black mt-1">
              Select Your Preferred Car
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-black transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Fleet Grid */}
        <div className="space-y-4">
          {FLEET_DATA.map((car) => {
            const carType =
              car.id === 'toyota-rumion'
                ? 'toyota-rumion'
                : car.id === 'sedan-dzire'
                ? 'sedan-dzire'
                : car.id === 'premium-innova'
                ? 'premium-innova'
                : 'hatchback-mini';

            return (
              <div
                key={car.id}
                className="bg-neutral-50 rounded-2xl border border-neutral-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-black transition-all"
              >
                {/* Car Graphic */}
                <div className="w-full sm:w-44 h-24 bg-white rounded-xl border border-neutral-200 flex items-center justify-center p-2 shrink-0">
                  <CarIllustration type={carType} className="max-h-20 w-auto" />
                </div>

                {/* Car Details */}
                <div className="flex-1 space-y-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h3 className="text-base font-black text-black">{car.name}</h3>
                    {car.badge && (
                      <span className="text-[10px] font-black bg-black text-white px-2 py-0.5 rounded">
                        {car.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-600 line-clamp-2">{car.tagline}</p>
                  <div className="flex items-center justify-center sm:justify-start gap-3 text-xs font-semibold text-neutral-700 pt-1">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-black" />
                      {car.passengers} Seats
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-black" />
                      {car.luggage} Bags
                    </span>
                    <span>·</span>
                    <span className="text-black font-bold">Chilled AC</span>
                  </div>
                </div>

                {/* Rate & Action */}
                <div className="flex flex-col items-center sm:items-end gap-2 shrink-0 w-full sm:w-auto">
                  <span className="text-lg font-black text-black font-mono">
                    ₹{car.perMileRate}/km
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectCar(car.id);
                      onClose();
                    }}
                    className="w-full sm:w-auto px-4 py-2 bg-black hover:bg-neutral-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
                  >
                    Select in Ride
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Support */}
        <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
          <span>Need custom booking for outstation tours?</span>
          <a
            href={`tel:${CONTACT_INFO.phoneClean}`}
            className="text-black hover:text-neutral-700 font-bold font-mono underline"
          >
            Call {CONTACT_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
};
