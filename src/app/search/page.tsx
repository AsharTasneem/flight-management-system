'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import FlightFilters from '../component/FlightFilter';
import FlightCard from '../component/FlightCard';

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const [flights, setFlights] = useState([]);

  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';
  const departure = searchParams.get('departure') || '';
  const returnDate = searchParams.get('returnDate') || '';

  useEffect(() => {
    if (!from || !to || !departure || !returnDate) return;

    const fetchFlights = async () => {
      try {
        const res = await fetch(
          `/api/flights?from=${from}&to=${to}&departure=${departure}&return=${returnDate}`
        );
        const data = await res.json();
        setFlights(data.flights);
      } catch (err) {
        console.error('Error fetching flights:', err);
      }
    };

    fetchFlights();
  }, [from, to, departure, returnDate]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-10   py-10 bg-gray-100 min-h-screen">
      <FlightFilters />
      <div className="flex-1">
        <h1 className="text-xl font-semibold mb-4">Available Flights</h1>
        {flights.length > 0 ? (
          flights.map((flight: any, idx: number) => (
            <FlightCard
              key={idx}
              departureTime={flight.departureTime}
              arrivalTime={flight.arrivalTime}
              returnDeparture={flight.returnDeparture}
              returnArrival={flight.returnArrival}
              price={flight.price}
            />
          ))
        ) : (
          <p>No flights found.</p>
        )}
      </div>
    </div>
  );
}
