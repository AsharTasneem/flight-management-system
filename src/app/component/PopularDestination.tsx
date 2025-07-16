'use client';
import React from 'react';

const staticDestinations = [
  {
    destination: 'PAR', // Paris
    departureDate: '2025-07-10',
    price: { total: '230.00' },
  },
  {
    destination: 'NYC', // New York City
    departureDate: '2025-07-12',
    price: { total: '450.00' },
  },
  {
    destination: 'DXB', // Dubai
    departureDate: '2025-07-15',
    price: { total: '380.00' },
  },
  {
    destination: 'IST', // Istanbul
    departureDate: '2025-07-18',
    price: { total: '310.00' },
  },
];

export default function PopularDestinations() {
  return (
    <div className="px-6 sm:px-8 md:px-12 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Popular Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {staticDestinations.map((dest, idx) => (
          <div
            key={idx}
            className={`
              relative overflow-hidden border-0 rounded-3xl p-6 
              bg-gradient-to-br from-white via-gray-50 to-gray-100
              shadow-lg hover:shadow-2xl 
              transform transition-all duration-500 ease-out
              hover:scale-105 hover:-translate-y-2
              hover:z-10
              group
              before:absolute before:inset-0 before:bg-gradient-to-br 
              before:from-[#009688]/10 before:to-transparent 
              before:opacity-0 before:transition-opacity before:duration-300
              hover:before:opacity-100
            `}
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#009688]/20 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#009688]/15 to-transparent rounded-full translate-y-8 -translate-x-8 group-hover:scale-110 transition-transform duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-[#009688] transition-colors duration-300">
                  To: <span className="text-[#009688] group-hover:text-[#00796b] transition-colors duration-300">{dest.destination}</span>
                </h3>
                <button className="w-8 h-8 bg-gradient-to-br from-[#009688] to-[#00796b] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
              
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#009688]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Departure: {dest.departureDate}</span>
                </div>
                
                <div className="pt-2 border-t border-gray-200 group-hover:border-[#009688]/30 transition-colors duration-300">
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#009688] to-[#00796b] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    ${dest.price.total}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Starting from</p>
                </div>
              </div>
            </div>
            
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#009688]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
