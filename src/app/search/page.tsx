'use client';

import { useSearchParams } from 'next/navigation';
import FlightFilters from '../component/FlightFilter';
import FlightCard from '../component/FlightCard';
import StepperNavbar from "../component/StepperNavbar"
import { GlowingEffect } from '@/components/ui/glowing-effect';

export default function ResultsPage() {
  const steps = [
    'Search',
    'Choose flight',
    'Choose fare',
    'Passenger details',
    'Extra Services',
    'Payment',
  ];
  const searchParams = useSearchParams();

  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';
  const departure = searchParams.get('departure') || '';
  const returnDate = searchParams.get('returnDate') || '';


  // Static flight data
  const flights = [
    {
      departureTime: '2025-07-01T09:00',
      arrivalTime: '2025-07-01T12:00',
      price: 320
    },
    {
      departureTime: '2025-07-03T14:30',
      arrivalTime: '2025-07-03T17:30',
      price: 410
    },
    {
      departureTime: '2025-07-08T08:00',
      arrivalTime: '2025-07-08T11:00',
      price: 600,
    },
    {
      departureTime: '2025-07-08T08:00',
      arrivalTime: '2025-07-08T11:00',
      price: 600,
    },
    {
      departureTime: '2025-07-08T08:00',
      arrivalTime: '2025-07-08T11:00',
      price: 600,
    },
    {
      departureTime: '2025-07-08T08:00',
      arrivalTime: '2025-07-08T11:00',
      price: 600,
    },
  ];

  return (


    <div className="flex flex-col lg:flex-row gap-6 px-10 py-10 bg-gray-100 min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 ">
            {/* <StepperNavbar steps={steps} currentStep={} /> */}

      
      <FlightFilters/>
      <div className="flex-1">
        <h1 className="text-xl font-semibold mb-4">Available Flights</h1>
        {flights.length > 0 ? (
          flights.map((flight, idx) => (
            <div>
              
              <FlightCard
                key={idx}
                departureTime={flight.departureTime}
                arrivalTime={flight.arrivalTime}
                price={flight.price}
              />

            </div>
            
          ))
        ) : (
          <p>No flights found.</p>
        )}
      </div>
    </div>




  );
}