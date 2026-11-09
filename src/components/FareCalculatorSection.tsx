import React, { useState } from 'react';
import { MapPin, Navigation, Calendar, Clock, MessageCircle, Phone, ArrowRight, Check } from 'lucide-react';
import { FLEET_DATA, CONTACT_INFO, calculateEstimatedFare, buildWhatsAppBookingUrl } from '../data/cabData';
import { Vehicle, TripType, BookingFormState } from '../types/cab';

interface FareCalculatorSectionProps {
  selectedVehicle: Vehicle;
  onSelectVehicle: (v: Vehicle) => void;
}

export const FareCalculatorSection: React.FC<FareCalculatorSectionProps> = ({
  selectedVehicle,
  onSelectVehicle,
}) => {
  const [tripType, setTripType] = useState<TripType>('city');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [distanceKm, setDistanceKm] = useState(25);
  const [passengers, setPassengers] = useState(2);
  const [luggage, setLuggage] = useState(1);
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [specialNotes, setSpecialNotes] = useState('');

  const fareEstimate = calculateEstimatedFare(
    tripType,
    selectedVehicle.id,
    distanceKm,
    isRoundTrip
  );

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formState: BookingFormState = {
      tripType,
      pickup: pickup.trim() || 'Specified on WhatsApp',
      dropoff: dropoff.trim() || 'Specified on WhatsApp',
      date: date || 'Today',
      time: time || 'ASAP',
      vehicleId: selectedVehicle.id,
      passengers,
      luggage,
      flightNumber: '',
      notes: specialNotes,
      returnTrip: isRoundTrip,
      returnDate: '',
      returnTime: '',
    };

    const url = buildWhatsAppBookingUrl(formState, fareEstimate.minFare);
    window.open(url, '_blank');
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-white text-black border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-2">
            Instant Fare Calculator & WhatsApp Booking
          </h2>
          <p className="mt-2 text-neutral-600 text-sm sm:text-base">
            Get estimated pricing in INR with zero surge. Click to send booking details straight to our WhatsApp dispatch team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Booking Inputs (8 cols on lg) */}
          <form
            onSubmit={handleWhatsAppSubmit}
            className="lg:col-span-7 bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-6"
          >
            {/* Trip Type Tabs */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                1. Select Ride Category
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'city', label: 'Local City' },
                  { id: 'airport', label: 'Airport Drop' },
                  { id: 'outstation', label: 'Outstation' },
                ].map((t) => (
                  <button
                    type="button"
                    key={t.id}
                    onClick={() => {
                      setTripType(t.id as TripType);
                      if (t.id === 'city' && distanceKm > 50) setDistanceKm(25);
                      if (t.id === 'outstation' && distanceKm < 100) setDistanceKm(150);
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      tripType === t.id
                        ? 'bg-black text-white shadow-sm'
                        : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle Selection Chips */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                2. Choose Vehicle
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {FLEET_DATA.map((v) => {
                  const isSelected = selectedVehicle.id === v.id;
                  return (
                    <button
                      type="button"
                      key={v.id}
                      onClick={() => onSelectVehicle(v)}
                      className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-amber-400 bg-amber-50/70 ring-2 ring-amber-400/30'
                          : 'border-neutral-200 bg-white hover:border-neutral-300'
                      }`}
                    >
                      <div className="aspect-[16/10] w-full rounded-lg overflow-hidden mb-1.5 bg-neutral-100">
                        <img src={v.imageSrc} alt={v.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="font-bold text-xs text-neutral-900 truncate">{v.name}</div>
                      <div className="text-[11px] font-semibold text-neutral-500">₹{v.perMileRate}/km</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pickup & Drop Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Pickup Location</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Airport, Hotel, Address"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1">
                  <Navigation className="w-3.5 h-3.5 text-rose-600" />
                  <span>Drop Destination</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. City Center, Railway Station"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>

            {/* Distance Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-neutral-700 mb-1">
                <span>ESTIMATED DISTANCE</span>
                <span className="text-sm font-extrabold text-black bg-amber-200 px-2.5 py-0.5 rounded-md">
                  {distanceKm} KM
                </span>
              </div>
              <input
                type="range"
                min="5"
                max={tripType === 'outstation' ? 800 : 150}
                step="5"
                value={distanceKm}
                onChange={(e) => setDistanceKm(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
                <span>5 km</span>
                <span>{tripType === 'outstation' ? '400 km' : '75 km'}</span>
                <span>{tripType === 'outstation' ? '800 km' : '150 km'}</span>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Pickup Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Pickup Time</span>
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
            </div>

            {/* Outstation Round-Trip checkbox */}
            {tripType === 'outstation' && (
              <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-neutral-200">
                <input
                  type="checkbox"
                  id="roundtrip"
                  checked={isRoundTrip}
                  onChange={(e) => setIsRoundTrip(e.target.checked)}
                  className="w-4 h-4 text-amber-500 rounded accent-amber-500 cursor-pointer"
                />
                <label htmlFor="roundtrip" className="text-xs font-bold text-neutral-800 cursor-pointer">
                  Round Trip (Driver stays with you for return journey)
                </label>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl font-extrabold bg-[#FFCC00] hover:bg-[#e6b800] text-black transition-all shadow-md flex items-center justify-center gap-2 text-base active:scale-[0.99]"
            >
              <MessageCircle className="w-5 h-5 fill-black text-black" />
              <span>Confirm & Send Booking on WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </form>

          {/* Fare Summary Card (5 cols on lg) */}
          <div className="lg:col-span-5 bg-neutral-900 text-white rounded-3xl p-6 sm:p-8 border border-neutral-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                  Selected Ride
                </span>
                <h3 className="text-xl font-bold text-white">{selectedVehicle.name}</h3>
                <span className="text-xs text-amber-400 font-medium">{selectedVehicle.category}</span>
              </div>
              <div className="w-16 h-12 rounded-lg overflow-hidden bg-neutral-800 border border-neutral-700">
                <img src={selectedVehicle.imageSrc} alt={selectedVehicle.name} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Estimated Fare Big Display */}
            <div className="bg-neutral-950 p-5 rounded-2xl border border-neutral-800 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Estimated Total Fare
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 my-1">
                ₹{fareEstimate.minFare} – ₹{fareEstimate.maxFare}
              </div>
              <span className="text-xs text-neutral-400">
                Based on ~{distanceKm} km {isRoundTrip ? '(Round Trip)' : '(One Way)'}
              </span>
            </div>

            {/* Fare Breakdown */}
            <div className="space-y-3 text-xs sm:text-sm text-neutral-300 border-t border-neutral-800 pt-4">
              <div className="flex justify-between">
                <span>Vehicle Base Fare:</span>
                <span className="font-semibold text-white">₹{selectedVehicle.baseFare}</span>
              </div>
              <div className="flex justify-between">
                <span>Rate Per Kilometer:</span>
                <span className="font-semibold text-white">₹{selectedVehicle.perMileRate} / km</span>
              </div>
              <div className="flex justify-between">
                <span>AC Chilled Ride:</span>
                <span className="font-semibold text-emerald-400">Included (Free)</span>
              </div>
              <div className="flex justify-between">
                <span>Driver Allowance & Sanitization:</span>
                <span className="font-semibold text-emerald-400">Included</span>
              </div>
              <div className="flex justify-between text-neutral-400 text-xs pt-1">
                <span>Toll & Parking (if any):</span>
                <span>As per actual receipts</span>
              </div>
            </div>

            {/* Direct Call Quick Link */}
            <div className="pt-2 border-t border-neutral-800">
              <a
                href={`tel:${CONTACT_INFO.phoneClean}`}
                className="w-full py-3 px-4 rounded-xl font-bold bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Chauffeur Desk: {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>

            <div className="text-[11px] text-center text-neutral-400 leading-relaxed">
              No cancellation charges before dispatch. 24/7 immediate support guaranteed.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
