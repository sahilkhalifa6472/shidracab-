# Shidara Cab Service — Modern Web & Mobile Booking Platform

A high-performance, mobile-responsive web application for **Shidara Cab Service** featuring an interactive fare calculator, fleet showcase, airport & outstation packages, and instant one-click WhatsApp dispatch to `07575800775`.

### User Review & Critical Decisions

> [!IMPORTANT]
> The following user preferences were confirmed in Phase 1 and are baked into this architecture:

- **Visual Style & Branding**: Clean bright modern aesthetic built on crisp white surfaces (`#FFFFFF`), structural slate neutrals (`#0F172A` / `#334155`), and premium emerald green accents (`#059669` / `#10B981`) for safety and instant trust.
- **Service Focus**: Highlighted three primary trip categories: **City Rides**, **Outstation Trips**, and **Airport Transfers** (with dedicated terminal meet-and-greet options).
- **Booking Mechanism**: Interactive ride fare estimator with instant WhatsApp message generation sent directly to `07575800775` (`https://wa.me/447575800775`), pre-filling pickup location, drop location, vehicle choice, date, time, passenger count, and estimated quote.
- **Direct Contact Affordances**: Dual fast-action channels including 1-tap direct call (`tel:07575800775`) and direct WhatsApp chat for immediate dispatch inquiries.

---

### 1. Overview & Core Concept

- **What It Does**: Shidara Cab Service provides a frictionless, app-like booking experience accessible on any smartphone or desktop browser without requiring app store installation. Riders can calculate transparent route estimates, compare vehicle classes (Sedan, Executive, SUV, XL Minivan), and finalize bookings instantly via WhatsApp.
- **Target Audience / Persona**: Daily commuters, business travelers needing airport transfers, families traveling outstation, and urgent dispatch callers in need of a reliable licensed driver.
- **Key Value**: Zero registration friction. Customers calculate real fares in seconds and send verified booking itineraries directly to the driver/operator on WhatsApp with a single tap.

---

### 2. User Experience & Visual Design

#### Key User Flows
1. **Instant Estimation & WhatsApp Dispatch**:
   - Customer enters Pickup, Drop-off, selects Trip Type (City Ride, Airport Transfer, Outstation), and chooses Journey Date & Time.
   - Live fare calculation displays real-time price brackets across vehicle tiers (Comfort Sedan, Executive Sedan, Premium SUV, Group Van).
   - Clicking "Book on WhatsApp" formats a clean, pre-structured WhatsApp dispatch message and launches WhatsApp Web or the WhatsApp mobile app directly to `07575800775`.
2. **Fleet & Capacity Discovery**:
   - Interactive vehicle cards detailing passenger seats, luggage volume, AC comfort, and per-km / flat airport transfer rates.
   - Quick selection auto-populates the booking calculator.
3. **Airport Transfer Hub**:
   - Fixed-rate airport packages with flight tracking and terminal meet-and-greet guarantees.
4. **Mobile Sticky Action Bar**:
   - Compact, high-accessibility mobile bar ($\le 12\%$ viewport height) with "Call Now" and "WhatsApp Ride" buttons for instant on-the-go bookings.

#### Visual Identity & Theme
- **Color Discipline (60-30-10)**:
  - *60% Neutral Canvas*: Pristine white (`#FFFFFF`) and warm porcelain (`#F8FAFC`) background surfaces.
  - *30% Structural Depth*: Slate typography (`#0F172A`), subtle hairline borders (`#E2E8F0`), and soft elevated cards.
  - *10% Emerald Accent*: Energetic emerald green (`#059669` hover `#047857`) for call-to-action buttons, active vehicle tabs, and WhatsApp touchpoints.
- **Typography**:
  - *Display / Brand*: `Plus Jakarta Sans` for clean, professional, and trustworthy modern styling.
  - *Body Prose*: `Plus Jakarta Sans` for crisp legibility across mobile touchscreens.
  - *Fares & Phone*: Tabular monospace figures (`tabular-nums font-mono`) for rates and telephone numbers.
- **Top Bar Contract**:
  - Clean 3-zone header: `[Shidara Cab Service]` — `[Services · Fleet · Airport · Pricing · Reviews]` — `[Book Now / 07575800775]`.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Direct WhatsApp URL Integration (`wa.me`) vs Complex Backend Form**:
  - *Chosen Approach*: URL-encoded deep-link to `wa.me/447575800775` with comprehensive pre-filled ride specifications.
  - *Why*: In taxi dispatch services, customers and drivers require immediate two-way confirmation. WhatsApp eliminates sign-up barriers, prevents lost leads, and lets dispatchers send live driver tracking links immediately.
- **Decision 2: Client-Side Dynamic Fare Estimator**:
  - *Chosen Approach*: Dynamic heuristic calculator based on estimated distance, vehicle multiplier, and trip type (one-way, round trip, airport flat fee).
  - *Why*: Instantaneous calculation with zero network latency provides delightful UX and immediate price transparency.
- **Decision 3: Mobile Touch Ergonomics**:
  - *Chosen Approach*: 48px+ touch targets, sticky quick-access action bar anchored at the bottom for thumb accessibility, and clean single-column mobile collapse.

---

### 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                    Shidara Cab Service                      │
│                Desktop & Mobile Application                 │
└──────────────────────────────┬──────────────────────────────┘
                               │
       ┌───────────────────────┼───────────────────────┐
       ▼                       ▼                       ▼
┌──────────────┐       ┌──────────────┐        ┌──────────────┐
│  Top Bar &   │       │  Interactive │        │    Fleet &   │
│  Hero Banner │       │ Fare Engine  │        │ Packages Hub │
└──────┬───────┘       └───────┬──────┘        └──────┬───────┘
       │                       │                      │
       └───────────────────────┼──────────────────────┘
                               ▼
               ┌───────────────────────────────┐
               │    Booking Dispatch Store     │
               │ (Pickup, Drop, Date, Vehicle) │
               └───────────────┬───────────────┘
                               │
               ┌───────────────┴───────────────┐
               ▼                               ▼
     ┌───────────────────┐           ┌───────────────────┐
     │   WhatsApp API    │           │  Direct Telephone │
     │  `wa.me/4475...`  │           │ `tel:07575800775` │
     └───────────────────┘           └───────────────────┘
```

#### State & Data Models
- **`BookingState`**:
  - `pickup`: string (e.g., "Heathrow Airport Terminal 2" or custom address)
  - `dropoff`: string (e.g., "Central London" or custom destination)
  - `tripType`: `'city' | 'airport' | 'outstation'`
  - `date`: string (ISO date format)
  - `time`: string (HH:MM format)
  - `vehicleId`: `'sedan' | 'executive' | 'suv' | 'minivan'`
  - `passengers`: number (1 to 8)
  - `luggage`: number (0 to 6)
  - `notes`: string (e.g., child seat, flight number)

#### Action Handlers
- `generateWhatsAppLink(state: BookingState)`: Encodes an organized summary:
  ```
  🚕 *New Booking Request - Shidara Cab Service*
  • Pickup: [Pickup Location]
  • Drop: [Drop Location]
  • Service: [City / Airport / Outstation]
  • Vehicle: [Vehicle Category]
  • Date & Time: [Date] at [Time]
  • Passengers: [Count] | Luggage: [Count]
  • Estimated Fare: [Calculated Amount]
  • Special Notes: [Customer Notes]
  ```
- `handleQuickCall()`: Triggers direct phone call to `07575800775`.
