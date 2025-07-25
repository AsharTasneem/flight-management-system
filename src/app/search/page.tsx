'use client';

import { useSearchParams } from 'next/navigation';
import FlightFilters from '../component/FlightFilter';
import FlightCard from '../component/FlightCard';
import StepperNavbar from "../component/StepperNavbar"
import Loader from "../component/Loader"
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { useEffect, useState } from 'react';

export default function ResultsPage() {
  // const steps = [
  //   'Search',
  //   'Choose flight',
  //   'Choose fare',
  //   'Passenger details',
  //   'Extra Services',
  //   'Payment',
  // ];
  const searchParams = useSearchParams();

  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';
  const departure = searchParams.get('departure') || '';
  const returnDate = searchParams.get('returnDate') || '';
  const stops = searchParams.get('stops') || '';
  const adults = searchParams.get('adults') || '';
  const childrens = searchParams.get('childrens') || '';
  const infants = searchParams.get('infants') || '';
  const price = searchParams.get('price') || '';

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const asyncFetch = async () => {
      try {
        setLoading(true);
        setError(false);
        let fetchData;
        if (stops && adults && childrens && infants && price) {
          console.log("if")
          fetchData = await fetch(`https://8xbznqzs-5001.inc1.devtunnels.ms/api/flight/offers?origin=${from}&destination=${to}&departureDate=${departure}&returnDate=${returnDate}`);

        }
        else {
          fetchData = await fetch(`https://8xbznqzs-5001.inc1.devtunnels.ms/api/flight/offers?origin=${from}&destination=${to}&departureDate=${departure}&returnDate=${returnDate}`);
        }

        if (!fetchData.ok) {
          throw new Error('Failed to fetch flights');
        } 

        const data = await fetchData.json();
        setFlights(data.body);
        console.log(data.body);
      } catch (err) {
        console.error('Error fetching flights:', err);
        setError(true);
        setFlights([]);
      } finally {
        setLoading(false);
      }
    };

    asyncFetch();
  }, [from, to, departure, returnDate]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-10 py-10 bg-gray-100 min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 ">
      {/* <StepperNavbar steps={steps} currentStep={} /> */}

      <FlightFilters />
      <div className="flex-1">
        <h1 className="text-xl font-semibold mb-4">Available Flights</h1>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader />
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-2">Unable to fetch flights</div>
            <div className="text-gray-400">Please try again later</div>
          </div>
        ) : flights.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-2">No flights available</div>
            <div className="text-gray-400">Try adjusting your search criteria</div>
          </div>
        ) : (
          flights.map((flight: any, idx: number) => (
            <div key={idx}>
              <FlightCard
                departureTime={flight.departureDate}
                arrivalTime={flight.arrivalDate}
                price={flight.totalPrice}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}