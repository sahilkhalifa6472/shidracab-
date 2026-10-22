import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  Phone, 
  Clock, 
  ArrowUpDown, 
  ShieldCheck, 
  Banknote, 
  Calendar,
  X,
  Plane,
  Sliders,
  CheckCircle2
} from 'lucide-react';
import { FLEET_DATA, CONTACT_INFO, buildWhatsAppBookingUrl } from '../data/cabData';
import { Vehicle } from '../types/cab';
import { CarIllustration } from './CarIllustration';

interface UberRideBookingProps {
  tripType: 'city' | 'outstation' | 'airport';
  onTripTypeChange?: (type: 'city' | 'outstation' | 'airport') => void;
  selectedVehicle: Vehicle;
  onVehicleChange: (vehicle: Vehicle) => void;
  pickup: string;
  setPickup: (val: string) => void;
  dropoff: string;
  setDropoff: (val: string) => void;
  distanceKm: number;
  setDistanceKm: (val: number) => void;
}

export const UberRideBooking: React.FC<UberRideBookingProps> = ({
  tripType,
  onTripTypeChange,
  selectedVehicle,
  onVehicleChange,
  pickup,
  setPickup,
  dropoff,
  setDropoff,
  distanceKm,
  setDistanceKm,
}) => {
  const [isScheduled, setIsScheduled] = useState(false);
  const [scheduleDate, setScheduleDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [scheduleTime, setScheduleTime] = useState('10:00');
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [flightNumber, setFlightNumber] = useState('');
  const [showDistanceSlider, setShowDistanceSlider] = useState(false);

  const handleSwap = () => {
    const temp = pickup;
    setPickup(dropoff);
    setDropoff(temp);
  };

  const handlePreset = (p: string, d: string, km: number) => {
    setPickup(p);
    setDropoff(d);
    setDistanceKm(km);
  };

  // Live estimate calculation
  let effectiveRate = selectedVehicle.perMileRate;
  if (tripType === 'outstation') {
    effectiveRate = selectedVehicle.perMileRate - 1; // bulk tour discount
  }

  const rawFare = Math.max(selectedVehicle.baseFare, Math.round(distanceKm * effectiveRate));
  const finalFare = isRoundTrip ? Math.round(rawFare * 1.8) : rawFare;
  const estMin = Math.round(finalFare * 0.95);

  // WhatsApp link builder with all selected booking parameters
  const whatsAppUrl = buildWhatsAppBookingUrl(
    {
      tripType,
      pickup: pickup.trim() || 'Please confirm on call',
      dropoff: dropoff.trim() || 'Please confirm on call',
      date: isScheduled ? scheduleDate : 'Today (Immediate / ASAP)',
      time: isScheduled ? scheduleTime : 'Immediate Dispatch',
      vehicleId: selectedVehicle.id,
      passengers: selectedVehicle.passengers,
      luggage: selectedVehicle.luggage,
      flightNumber: tripType === 'airport' ? flightNumber : '',
      notes: isRoundTrip ? 'Round Trip Journey (Both Ways)' : '',
      returnTrip: isRoundTrip,
      returnDate: '',
      returnTime: '',
    },
    estMin
  );

  return (
    <div className="w-full p-4 sm:p-5 lg:p-6 space-y-4 sm:space-y-5">
      {/* 1. Trip Mode Tabs (Segmented Controller) */}
      {onTripTypeChange && (
        <div className="grid grid-cols-3 gap-1 p-1 bg-neutral-100 rounded-2xl border border-neutral-200">
          <button
            type="button"
            onClick={() => onTripTypeChange('city')}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
              tripType === 'city'
                ? 'bg-black text-white shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            City Ride
          </button>
          <button
            type="button"
            onClick={() => onTripTypeChange('outstation')}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
              tripType === 'outstation'
                ? 'bg-black text-white shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            Outstation
          </button>
          <button
            type="button"
            onClick={() => onTripTypeChange('airport')}
            className={`py-2 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
              tripType === 'airport'
                ? 'bg-black text-white shadow-sm'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            Airport Drop
          </button>
        </div>
      )}

      {/* 2. Top Header & Schedule Toggle */}
      <div className="flex items-center justify-between gap-2 pt-0.5">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
            Book a Ride
          </h2>
          <p className="text-xs text-neutral-500 font-medium mt-0.5">
            24/7 Doorstep Pickup · No Surge Guarantee
          </p>
        </div>

        {/* Schedule for later toggle */}
        <button
          type="button"
          onClick={() => setIsScheduled(!isScheduled)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
            isScheduled
              ? 'bg-black text-white'
              : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>{isScheduled ? 'Scheduled' : 'Ride Now'}</span>
        </button>
      </div>

      {/* 3. Schedule Date & Time Row (Collapsible) */}
      {isScheduled && (
        <div className="bg-neutral-50 p-3 sm:p-3.5 rounded-2xl border border-neutral-200 grid grid-cols-2 gap-3 text-xs animate-in fade-in duration-150">
          <div>
            <label className="block text-neutral-600 font-bold mb-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-black" />
              <span>Pickup Date</span>
            </label>
            <input
              type="date"
              value={scheduleDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setScheduleDate(e.target.value)}
              className="w-full p-2 bg-white border border-neutral-300 rounded-xl font-semibold text-black focus:outline-hidden focus:border-black"
            />
          </div>
          <div>
            <label className="block text-neutral-600 font-bold mb-1 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-black" />
              <span>Pickup Time</span>
            </label>
            <input
              type="time"
              value={scheduleTime}
              onChange={(e) => setScheduleTime(e.target.value)}
              className="w-full p-2 bg-white border border-neutral-300 rounded-xl font-semibold text-black focus:outline-hidden focus:border-black"
            />
          </div>
        </div>
      )}

      {/* 4. Uber Pixel-Aligned Connected Pickup & Drop Inputs */}
      <div className="bg-neutral-50 rounded-2xl p-3 sm:p-4 border border-neutral-200 shadow-sm relative">
        <div className="flex items-center gap-3">
          {/* Left Vertical Line & Node Column */}
          <div className="flex flex-col items-center justify-between self-stretch py-2 w-5 shrink-0">
            {/* Pickup Node (Green Circle) */}
            <div className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100 shrink-0" />
            {/* Connecting Bar */}
            <div className="w-0.5 flex-1 bg-neutral-300 my-1 min-h-[22px]" />
            {/* Drop Node (Black Square) */}
            <div className="w-3 h-3 rounded-xs bg-black shrink-0" />
          </div>

          {/* Center Input Column */}
          <div className="flex-1 min-w-0 space-y-1">
            {/* Pickup Input */}
            <div className="flex items-center justify-between gap-2 py-1">
              <input
                type="text"
                placeholder="Enter pickup address / landmark..."
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-black placeholder-neutral-400 focus:outline-hidden"
              />
              {pickup && (
                <button
                  type="button"
                  onClick={() => setPickup('')}
                  className="p-1 text-neutral-400 hover:text-black cursor-pointer shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Subtle Divider */}
            <div className="border-t border-neutral-200" />

            {/* Dropoff Input */}
            <div className="flex items-center justify-between gap-2 py-1">
              <input
                type="text"
                placeholder="Where to? (Destination / Airport / City)..."
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                className="w-full bg-transparent text-sm font-semibold text-black placeholder-neutral-400 focus:outline-hidden"
              />
              {dropoff && (
                <button
                  type="button"
                  onClick={() => setDropoff('')}
                  className="p-1 text-neutral-400 hover:text-black cursor-pointer shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Swap Button */}
          <button
            type="button"
            onClick={handleSwap}
            className="w-8 h-8 rounded-full bg-white border border-neutral-200 hover:border-black flex items-center justify-center text-neutral-700 hover:text-black transition-colors cursor-pointer shrink-0 shadow-2xs"
            title="Swap Pickup and Drop Locations"
          >
            <ArrowUpDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 5. Special Options for Airport or Outstation */}
      {tripType === 'airport' && (
        <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs">
          <Plane className="w-4 h-4 text-black shrink-0" />
          <input
            type="text"
            placeholder="Flight / Terminal number (Optional, for chauffeur flight tracking)"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            className="w-full bg-transparent text-black placeholder-neutral-400 focus:outline-hidden font-medium"
          />
        </div>
      )}

      {tripType === 'outstation' && (
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs">
          <div>
            <span className="font-bold text-black block">Round Trip Tour?</span>
            <span className="text-[11px] text-neutral-500">Return journey included</span>
          </div>
          <button
            type="button"
            onClick={() => setIsRoundTrip(!isRoundTrip)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              isRoundTrip ? 'bg-black text-white' : 'bg-neutral-200 text-neutral-700'
            }`}
          >
            {isRoundTrip ? 'YES (Round Trip)' : 'NO (One Way)'}
          </button>
        </div>
      )}

      {/* 6. Distance Estimator Chips & Slider */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-neutral-600">
          <div className="flex items-center gap-1.5">
            <span>Estimated Trip: <strong className="text-black font-mono font-black">{distanceKm} km</strong></span>
            <button
              type="button"
              onClick={() => setShowDistanceSlider(!showDistanceSlider)}
              className="text-neutral-500 hover:text-black p-1 rounded-md hover:bg-neutral-100 cursor-pointer"
              title="Custom Distance"
            >
              <Sliders className="w-3.5 h-3.5" />
            </button>
          </div>
          <span className="text-[11px] text-neutral-500 font-medium">
            {distanceKm <= 15 ? 'Short City Ride' : distanceKm <= 40 ? 'Airport / Suburb' : 'Outstation Tour'}
          </span>
        </div>

        {/* Quick Distance Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
          {[10, 25, 45, 80, 150].map((km) => (
            <button
              key={km}
              type="button"
              onClick={() => setDistanceKm(km)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shrink-0 ${
                distanceKm === km
                  ? 'bg-black text-white shadow-2xs'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
            >
              {km} km
            </button>
          ))}
          <button
            type="button"
            onClick={() => handlePreset('Railway Station', 'Airport Terminal', 30)}
            className="px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold shrink-0 cursor-pointer"
          >
            Station → Airport
          </button>
        </div>

        {/* Distance Slider (Expandable) */}
        {showDistanceSlider && (
          <div className="pt-2 px-1 bg-neutral-50 p-3 rounded-xl border border-neutral-200 space-y-1 animate-in fade-in duration-150">
            <input
              type="range"
              min="5"
              max="350"
              step="5"
              value={distanceKm}
              onChange={(e) => setDistanceKm(Number(e.target.value))}
              className="w-full accent-black cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
              <span>5 km</span>
              <span>100 km</span>
              <span>200 km</span>
              <span>350 km</span>
            </div>
          </div>
        )}
      </div>

      {/* 7. Available Fleet Options (No inner scroll trap - all 4 cars clearly visible) */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs font-bold text-neutral-800">
          <span>Choose a Vehicle</span>
          <span className="text-neutral-500 font-mono text-[11px] font-normal">Fixed Transparent Rates</span>
        </div>

        <div className="space-y-2">
          {FLEET_DATA.map((car) => {
            const isSelected = selectedVehicle.id === car.id;
            const carType =
              car.id === 'toyota-rumion'
                ? 'toyota-rumion'
                : car.id === 'sedan-dzire'
                ? 'sedan-dzire'
                : car.id === 'premium-innova'
                ? 'premium-innova'
                : 'hatchback-mini';

            let carRate = car.perMileRate;
            if (tripType === 'outstation') carRate -= 1;
            const rawCarFare = Math.max(car.baseFare, Math.round(distanceKm * carRate));
            const calculatedFare = isRoundTrip ? Math.round(rawCarFare * 1.8) : rawCarFare;

            return (
              <div
                key={car.id}
                onClick={() => onVehicleChange(car)}
                className={`p-3 sm:p-3.5 rounded-2xl cursor-pointer transition-all flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'border-2 border-black bg-neutral-50 ring-1 ring-black/10 shadow-sm'
                    : 'border border-neutral-200 bg-white hover:border-neutral-400'
                }`}
              >
                {/* Vehicle Illustration */}
                <div className="w-18 sm:w-22 h-12 flex items-center justify-center shrink-0">
                  <CarIllustration type={carType} className="max-h-12 w-auto object-contain" />
                </div>

                {/* Car Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="text-sm font-black text-black truncate">
                      {car.name}
                    </h3>
                    <span className="flex items-center gap-0.5 text-xs text-neutral-600 font-bold shrink-0">
                      <Users className="w-3 h-3 text-neutral-500" />
                      {car.passengers}
                    </span>
                    {car.id === 'toyota-rumion' && (
                      <span className="text-[9px] font-black bg-black text-white px-1.5 py-0.5 rounded-xs shrink-0 tracking-wider">
                        7-SEATER
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-neutral-500 mt-0.5">
                    <span className="font-semibold text-neutral-800">3 min away</span>
                    <span>·</span>
                    <span className="truncate">{car.category}</span>
                  </div>
                </div>

                {/* Fare in INR */}
                <div className="text-right shrink-0">
                  <span className="text-base font-black text-black font-mono block">
                    ₹{calculatedFare}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono">
                    ₹{carRate}/km
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 8. Payment Method Strip */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-100 rounded-xl text-xs text-neutral-700">
        <div className="flex items-center gap-2 font-medium">
          <Banknote className="w-4 h-4 text-black shrink-0" />
          <span>Payment: <strong>Cash / UPI Directly to Driver</strong></span>
        </div>
        <span className="text-[11px] font-bold text-neutral-500 shrink-0">Pay After Ride</span>
      </div>

      {/* 9. Booking Action Buttons */}
      <div className="space-y-2 pt-1">
        {/* Primary CTA: WhatsApp */}
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3.5 sm:py-4 px-5 rounded-2xl bg-black hover:bg-neutral-800 text-white font-black text-sm sm:text-base shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2.5 text-center cursor-pointer"
        >
          <MessageSquare className="w-5 h-5 fill-white text-black shrink-0" />
          <span>Confirm {selectedVehicle.name} · ~₹{estMin}</span>
        </a>

        {/* Secondary CTA: Phone Call */}
        <a
          href={`tel:${CONTACT_INFO.phoneClean}`}
          className="w-full py-2.5 sm:py-3 px-4 rounded-xl border border-neutral-300 hover:border-black text-black font-bold text-xs sm:text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 font-mono text-center cursor-pointer"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span>Call Dispatch: {CONTACT_INFO.phoneDisplay}</span>
        </a>
      </div>

      {/* 10. Trust Markers */}
      <div className="pt-2 border-t border-neutral-100 grid grid-cols-3 gap-2 text-center text-[11px] font-semibold text-neutral-600">
        <div className="flex flex-col items-center">
          <ShieldCheck className="w-4 h-4 text-black mb-1" />
          <span>Verified Chauffeur</span>
        </div>
        <div className="flex flex-col items-center">
          <Clock className="w-4 h-4 text-black mb-1" />
          <span>10 Min Dispatch</span>
        </div>
        <div className="flex flex-col items-center">
          <CheckCircle2 className="w-4 h-4 text-black mb-1" />
          <span>Dual AC & Sanitized</span>
        </div>
      </div>
    </div>
  );
};
