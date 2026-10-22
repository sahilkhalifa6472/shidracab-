export type TripType = 'city' | 'airport' | 'outstation';

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  tagline: string;
  passengers: number;
  luggage: number;
  baseFare: number;
  perMileRate: number;
  features: string[];
  recommendedFor: string;
  badge?: string;
}

export interface BookingFormState {
  tripType: TripType;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
  vehicleId: string;
  passengers: number;
  luggage: number;
  flightNumber: string;
  notes: string;
  returnTrip: boolean;
  returnDate: string;
  returnTime: string;
}

export interface AirportRoute {
  airportName: string;
  code: string;
  distanceEst: string;
  durationEst: string;
  basePrice: number;
  popularPickupPoints: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  actionLabel: string;
}

export interface Testimonial {
  id: string;
  name: string;
  route: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
