import { useState } from 'react';
import { UberHeader } from './components/UberHeader';
import { UberRideBooking } from './components/UberRideBooking';
import { UberInteractiveMap } from './components/UberInteractiveMap';
import { IosFleetDrawer } from './components/IosFleetDrawer';
import { FLEET_DATA } from './data/cabData';
import { Vehicle } from './types/cab';

export default function App() {
  const [activeTab, setActiveTab] = useState<'city' | 'outstation' | 'airport'>('city');
  const [fleetModalOpen, setFleetModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(FLEET_DATA[0]);
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [distanceKm, setDistanceKm] = useState(25);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white flex flex-col">
      {/* 1. Sticky Full-Width Header with Uber Navigation */}
      <UberHeader
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenFleet={() => setFleetModalOpen(true)}
      />

      {/* 2. Responsive Main Layout */}
      <main className="flex-1 flex flex-col lg:flex-row lg:h-[calc(100vh-64px)] lg:overflow-hidden min-h-0">
        {/* MOBILE TOP / DESKTOP RIGHT: Interactive Map Canvas */}
        <div className="w-full lg:flex-1 h-48 sm:h-64 lg:h-full relative bg-neutral-100 order-1 lg:order-2 overflow-hidden shrink-0 border-b lg:border-b-0 border-neutral-200">
          <UberInteractiveMap
            selectedVehicle={selectedVehicle}
            pickup={pickup}
            dropoff={dropoff}
          />
        </div>

        {/* MOBILE MAIN / DESKTOP LEFT: Booking Panel */}
        <div className="w-full lg:w-[480px] xl:w-[520px] shrink-0 bg-white border-r border-neutral-200 flex flex-col lg:h-full lg:overflow-y-auto custom-scrollbar order-2 lg:order-1 pb-12 lg:pb-6">
          <UberRideBooking
            tripType={activeTab}
            onTripTypeChange={setActiveTab}
            selectedVehicle={selectedVehicle}
            onVehicleChange={setSelectedVehicle}
            pickup={pickup}
            setPickup={setPickup}
            dropoff={dropoff}
            setDropoff={setDropoff}
            distanceKm={distanceKm}
            setDistanceKm={setDistanceKm}
          />
        </div>
      </main>

      {/* 3. Fleet & Rate Modal (Black & White iOS Card) */}
      <IosFleetDrawer
        isOpen={fleetModalOpen}
        onClose={() => setFleetModalOpen(false)}
        onSelectCar={(id) => {
          const v = FLEET_DATA.find((item) => item.id === id);
          if (v) setSelectedVehicle(v);
          setFleetModalOpen(false);
          scrollToTop();
        }}
      />
    </div>
  );
}
