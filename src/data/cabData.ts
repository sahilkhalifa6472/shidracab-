import { Vehicle, BookingFormState } from '../types/cab';

export const CONTACT_INFO = {
  name: 'Shidara Cab Service',
  phoneDisplay: '07575800775',
  phoneFormatted: '+91 75758 00775',
  phoneClean: '07575800775',
  whatsappNumber: '917575800775',
  whatsappUrlBase: 'https://wa.me/917575800775',
  operatingHours: '24/7 Available (Day & Night)',
};

export const FLEET_DATA: Vehicle[] = [
  {
    id: 'toyota-rumion',
    name: 'Toyota Rumion',
    category: '7-Seater Toyota MPV',
    tagline: 'Brand new spacious 7-seater Toyota MPV. Premium AC comfort for families & outstation journeys.',
    passengers: 7,
    luggage: 4,
    baseFare: 899,
    perMileRate: 16,
    features: ['Toyota Reliability', '7 Passenger Seating', 'Dual AC Cooling', 'Extra Boot Space & Roof Carrier'],
    recommendedFor: 'Family vacations, outstation trips & airport group travel',
    badge: 'Toyota Special ★',
  },
  {
    id: 'sedan-dzire',
    name: 'Maruti Dzire / Etios',
    category: 'Prime Sedan',
    tagline: 'Smooth, comfortable and economical sedan with dedicated luggage trunk.',
    passengers: 4,
    luggage: 3,
    baseFare: 599,
    perMileRate: 13,
    features: ['Chilled AC', 'Spacious Boot Trunk', 'Clean Sanitized Seats', 'Smooth Highway Ride'],
    recommendedFor: 'Airport drops, business meetings & couples',
    badge: 'Most Popular',
  },
  {
    id: 'premium-innova',
    name: 'Toyota Innova Crysta',
    category: 'Luxury Chauffeur MPV',
    tagline: 'The undisputed highway king for ultimate VIP comfort and long routes.',
    passengers: 7,
    luggage: 5,
    baseFare: 1299,
    perMileRate: 20,
    features: ['Captain Reclining Seats', 'Superior Shock Absorbers', 'Executive Luxury', 'Spacious Legroom'],
    recommendedFor: 'Luxury outstation tours & corporate travel',
    badge: 'Executive Toyota',
  },
  {
    id: 'hatchback-mini',
    name: 'WagonR / Swift',
    category: 'Economy Hatchback',
    tagline: 'Fast, budget-friendly AC city cab for everyday commutes and local pick-ups.',
    passengers: 4,
    luggage: 2,
    baseFare: 399,
    perMileRate: 11,
    features: ['Super Low Rates', 'Fast 10-Min Arrival', 'Air Conditioned', 'City Commute Expert'],
    recommendedFor: 'Budget daily trips & quick station drops',
    badge: 'Budget Saver',
  },
];

export const SERVICES_SUMMARY = [
  {
    id: 'local',
    title: 'Local City Cab',
    rate: 'From ₹399',
    desc: 'Instant 10-15 minute doorstep pickup for shopping, meetings & local city errands.',
  },
  {
    id: 'outstation',
    title: 'Outstation Tours (One-Way & Round-Trip)',
    rate: 'From ₹11 / km',
    desc: 'Specialized Toyota Rumion & Innova long-distance rides with professional highway drivers.',
  },
  {
    id: 'airport',
    title: 'Airport Transfer (Pickup & Drop)',
    rate: 'Fixed Rate Guarantee',
    desc: 'Guaranteed on-time terminal drop & arrival pickup with complimentary flight tracking.',
  },
];

export function calculateEstimatedFare(
  tripType: 'city' | 'airport' | 'outstation',
  vehicleId: string,
  estimatedKm: number,
  isRoundTrip: boolean
): { minFare: number; maxFare: number } {
  const vehicle = FLEET_DATA.find((v) => v.id === vehicleId) || FLEET_DATA[0];

  let ratePerKm = vehicle.perMileRate;
  if (tripType === 'outstation') {
    ratePerKm = vehicle.perMileRate - 1;
  }

  const distanceFare = estimatedKm * ratePerKm;
  let total = Math.max(vehicle.baseFare, Math.round(vehicle.baseFare * 0.4 + distanceFare));

  if (isRoundTrip) {
    total = Math.round(total * 1.8);
  }

  return {
    minFare: Math.max(vehicle.baseFare, Math.round(total * 0.95)),
    maxFare: Math.round(total * 1.08),
  };
}

export function buildWhatsAppBookingUrl(booking: BookingFormState, estimatedFare?: number): string {
  const vehicle = FLEET_DATA.find((v) => v.id === booking.vehicleId) || FLEET_DATA[0];
  const tripLabel =
    booking.tripType === 'city'
      ? 'Local City Cab'
      : booking.tripType === 'airport'
      ? 'Airport Pickup / Drop'
      : 'Outstation Journey';

  const lines = [
    `🚖 *BOOKING REQUEST - SHIDARA CAB SERVICE*`,
    `----------------------------------------`,
    `📍 *Pickup:* ${booking.pickup || 'To be specified'}`,
    `🏁 *Drop:* ${booking.dropoff || 'To be specified'}`,
    `🛣️ *Trip Type:* ${tripLabel}${booking.returnTrip ? ' (Round Trip)' : ' (One Way)'}`,
    `📅 *Date:* ${booking.date || 'Today'}`,
    `⏰ *Time:* ${booking.time || 'ASAP'}`,
    `🚗 *Vehicle:* ${vehicle.name} (${vehicle.category})`,
    `👥 *Passengers:* ${booking.passengers}`,
    `🧳 *Luggage:* ${booking.luggage} bags`,
    booking.flightNumber ? `✈️ *Flight / Train No:* ${booking.flightNumber}` : '',
    estimatedFare ? `💰 *Estimated Fare:* ~₹${estimatedFare}` : '',
    booking.notes ? `📝 *Special Request:* ${booking.notes}` : '',
    `----------------------------------------`,
    `Hello Shidara Cab, please confirm driver and car availability!`,
  ].filter(Boolean);

  const text = lines.join('\n');
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function buildQuickWhatsAppUrl(customText?: string): string {
  const text = customText || `Hello Shidara Cab Service (07575800775), I would like to book a cab right now. Please share rates and car availability.`;
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
