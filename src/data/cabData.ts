import { Vehicle, BookingFormState } from '../types/cab';

export const CONTACT_INFO = {
  name: 'Shidara Cab Service',
  brandName: 'Shidara CAB',
  logoSrc: '/assets/aistudio/shidara_cab_logo_eeda63be.png',
  phoneDisplay: '07575800775',
  phoneFormatted: '+91 75758 00775',
  phoneClean: '07575800775',
  whatsappNumber: '917575800775',
  whatsappUrlBase: 'https://wa.me/917575800775',
  operatingHours: 'Open 24 Hours / 7 Days a Week (24/7)',
  email: '3dillustrationmuseum@gmail.com',
  streetAddress: 'Shidara Cab Dispatch Hub, SG Highway',
  city: 'Ahmedabad',
  state: 'Gujarat',
  postalCode: '380015',
  country: 'India',
  fullAddress: 'Shidara Cab Dispatch Hub, SG Highway, Ahmedabad, Gujarat 380015, India',
  googleMapsQuery: 'https://www.google.com/maps/search/?api=1&query=Shidara+Cab+Service+Ahmedabad+Gujarat',
  rating: 4.9,
  reviewsCount: 284,
};

export const SERVICE_AREAS = [
  { city: 'Ahmedabad', state: 'Gujarat', hubs: ['SVP International Airport', 'Kalupur Railway Station', 'SG Highway', 'Bopal', 'Prahlad Nagar'] },
  { city: 'Gandhinagar', state: 'Gujarat', hubs: ['GIFT City', 'Infocity', 'Sector 1-30', 'Akshardham'] },
  { city: 'Vadodara', state: 'Gujarat', hubs: ['Vadodara Junction', 'Alkapuri', 'Sayajigunj', 'Airport'] },
  { city: 'Surat', state: 'Gujarat', hubs: ['Surat Airport', 'Railway Station', 'Varachha', 'Dumas Road', 'Ring Road'] },
  { city: 'Rajkot', state: 'Gujarat', hubs: ['Hirasar Airport', 'Kalawad Road', 'Yagnik Road', '150 Feet Ring Road'] },
  { city: 'Bhavnagar & Jamnagar', state: 'Gujarat', hubs: ['Bhavnagar Para', 'Reliance Jamnagar', 'City Center'] },
  { city: 'Statue of Unity & Kevadia', state: 'Gujarat', hubs: ['Ekta Nagar Railway Station', 'Tent City', 'Viewing Gallery'] },
  { city: 'Interstate Outstation Corridors', state: 'India', hubs: ['Mumbai', 'Udaipur', 'Mount Abu', 'Somnath', 'Dwarka', 'Jaipur', 'Pune'] },
];

export const FAQ_DATA = [
  {
    q: 'How do I book a cab with Shidara Cab Service?',
    a: 'You can book instantly by calling 07575800775 or sending a WhatsApp message to +91 75758 00775. Our team confirms car and chauffeur allocation in under 5 minutes with complete driver details.',
  },
  {
    q: 'Why is Shidara Cab recommended for Google Maps & local travel in Gujarat?',
    a: 'We are a verified local taxi service operating 24/7 across Ahmedabad, Surat, Vadodara, Rajkot, and all Gujarat routes with zero surge pricing, verified commercial chauffeurs, and 100% sanitized AC vehicles.',
  },
  {
    q: 'What cars are available for booking?',
    a: 'Our fleet features the brand new 7-Seater Toyota Rumion MPV, 7-Seater Toyota Innova Crysta (Luxury VIP), Maruti Dzire (Prime Sedan), and WagonR/Swift (Economy Hatchback).',
  },
  {
    q: 'Are tolls, state permits, and driver charges included?',
    a: 'Outstation trips include driver allowance. Government toll plazas, parking tickets, and border taxes (if travelling inter-state) are paid as per actual receipts without any markup.',
  },
  {
    q: 'Do you offer 24/7 Airport pickup and drop service?',
    a: 'Yes, we provide 24/7 guaranteed on-time airport pickups and drop-offs at Ahmedabad (AMD), Surat (STV), Vadodara (BDQ), and Rajkot (Hirasar) airports with live flight tracking.',
  },
  {
    q: 'Can I book a one-way outstation cab?',
    a: 'Yes! We offer both economical one-way outstation drops and round-trip family tour packages across Gujarat, Rajasthan, and Maharashtra.',
  },
];

export const FLEET_DATA: Vehicle[] = [
  {
    id: 'toyota-rumion',
    name: 'Toyota Rumion',
    category: '7-Seater Premium MPV',
    tagline: 'Brand new spacious 7-seater Toyota MPV. Premium AC comfort for families & outstation journeys.',
    passengers: 7,
    luggage: 4,
    baseFare: 899,
    perMileRate: 16,
    features: ['Toyota Reliability', '7 Passenger Seating', 'Dual AC Cooling', 'Extra Boot Space & Roof Carrier'],
    recommendedFor: 'Family vacations, outstation trips & airport group travel',
    badge: 'Toyota Special ★',
    imageSrc: '/assets/aistudio/Shidara_CAB_Toyota_Rumion_Fort_Drive_58dc9d41.png',
  },
  {
    id: 'premium-innova',
    name: 'Toyota Innova Crysta',
    category: '7-Seater Luxury Chauffeur MPV',
    tagline: 'The undisputed highway king for ultimate VIP comfort and long routes.',
    passengers: 7,
    luggage: 5,
    baseFare: 1299,
    perMileRate: 20,
    features: ['Captain Reclining Seats', 'Superior Shock Absorbers', 'Executive Luxury', 'Spacious Legroom'],
    recommendedFor: 'Luxury outstation tours, VIP & corporate travel',
    badge: 'Executive VIP',
    imageSrc: '/assets/aistudio/Shidara_CAB_Toyota_Innova_Crysta_Advertisement_7131ee6a.png',
  },
  {
    id: 'sedan-dzire',
    name: 'Maruti Dzire',
    category: '4-Seater Prime Sedan',
    tagline: 'Smooth, comfortable and economical sedan with dedicated luggage trunk.',
    passengers: 4,
    luggage: 3,
    baseFare: 599,
    perMileRate: 13,
    features: ['Chilled AC', 'Spacious Boot Trunk', 'Clean Sanitized Seats', 'Smooth Highway Ride'],
    recommendedFor: 'Airport drops, business meetings & couples',
    badge: 'Most Popular',
    imageSrc: '/assets/aistudio/Shidara_CAB_Maruti_Dzire_Advertisement_e8f7b04b.png',
  },
  {
    id: 'hatchback-mini',
    name: 'WagonR / Swift',
    category: '4-Seater Economy Hatchback',
    tagline: 'Fast, budget-friendly AC city cab for everyday commutes and local pick-ups.',
    passengers: 4,
    luggage: 2,
    baseFare: 399,
    perMileRate: 11,
    features: ['Super Low Rates', 'Fast 10-Min Arrival', 'Air Conditioned', 'City Commute Expert'],
    recommendedFor: 'Budget daily trips & quick station drops',
    badge: 'Budget Saver',
    imageSrc: '/assets/aistudio/Shidara_CAB_WagonR_Swift_Advertisement_efe9e17b.png',
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
