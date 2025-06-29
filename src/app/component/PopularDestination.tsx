'use client';
import { useEffect, useState } from 'react';

const accessToken = 'bnNtWX7Ac6k64gCTJnCOWzmxecck';
const originCity = 'LON'; // IATA code for origin

export default function PopularDestinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const today = new Date().toISOString().split('T')[0];
      const res = await fetch(
        `https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=${originCity}&departureDate=${today}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await res.json();
      setDestinations(data.data?.slice(0, 4) || []);
    }

    fetchData();
  }, []);

  return (
    <div className="px-6 sm:px-8 md:px-12 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Popular Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.length > 0 ? (
          destinations.map((dest: any, idx: number) => (
            <div
              key={idx}
              className="border rounded-2xl p-4 bg-white shadow hover:shadow-lg transition duration-300 ease-in-out"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-1">
                To: <span className="text-[#009688]">{dest.destination}</span>
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                Departure: {dest.departureDate}
              </p>
              <p className="text-md font-bold text-[#009688]">
                ${dest.price.total}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No destinations found.
          </p>
        )}
      </div>
    </div>
  );
}
