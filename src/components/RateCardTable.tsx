import React from 'react';
import { MessageCircle, Check } from 'lucide-react';
import { FLEET_DATA, CONTACT_INFO } from '../data/cabData';

export const RateCardTable: React.FC = () => {
  return (
    <section id="rates" className="py-16 bg-white text-black border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Transparent Pricing in INR
          </span>
          <h2 className="text-3xl font-extrabold text-neutral-900 mt-1">
            Complete Rate Card & Vehicle Comparison
          </h2>
          <p className="mt-2 text-neutral-600 text-sm">
            No surge, no hidden surge multiplier. What you see is what you pay.
          </p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="py-4 px-4 sm:px-6 font-bold">Vehicle Model</th>
                <th className="py-4 px-4 sm:px-6 font-bold">Category</th>
                <th className="py-4 px-4 sm:px-6 font-bold">Capacity</th>
                <th className="py-4 px-4 sm:px-6 font-bold">Base Fare</th>
                <th className="py-4 px-4 sm:px-6 font-bold">Rate / KM</th>
                <th className="py-4 px-4 sm:px-6 font-bold text-right">Instant Booking</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 bg-white">
              {FLEET_DATA.map((v) => (
                <tr key={v.id} className="hover:bg-neutral-50 transition-colors">
                  <td className="py-4 px-4 sm:px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={v.imageSrc}
                        alt={v.name}
                        className="w-12 h-8 rounded object-cover bg-neutral-100 border border-neutral-200 shrink-0"
                      />
                      <div>
                        <div className="font-bold text-neutral-900">{v.name}</div>
                        <div className="text-xs text-neutral-500">{v.badge || 'Standard AC'}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-neutral-700 font-medium">
                    {v.category}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-neutral-700">
                    <div>{v.passengers} Passengers</div>
                    <div className="text-xs text-neutral-400">{v.luggage} Luggage Bags</div>
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-neutral-900">
                    ₹{v.baseFare}
                  </td>
                  <td className="py-4 px-4 sm:px-6">
                    <span className="font-extrabold text-amber-600 text-base">
                      ₹{v.perMileRate}
                    </span>
                    <span className="text-xs text-neutral-500"> / km</span>
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-right">
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Hi Shidara Cab, I want to book ${v.name} (Rate: ₹${v.perMileRate}/km). Please check availability.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-[#FFCC00] hover:bg-[#e6b800] text-black transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-black text-black" />
                      <span>Book</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note below table */}
        <div className="mt-4 p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>
            * Toll taxes, state border permits, and parking charges (if applicable) are paid as per actual government receipts.
          </span>
          <span className="font-semibold text-neutral-900 shrink-0">
            Driver Allowance Included in Outstation Rides
          </span>
        </div>

      </div>
    </section>
  );
};
