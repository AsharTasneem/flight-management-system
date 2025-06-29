"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';


export default function FlightSearchBox() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departure, setDeparture] = useState('');
    const [returnDate, setReturnDate] = useState('');
  
    const handleSearch = () => {
      console.log({ from, to, departure, returnDate });
      // Do something with the form data here
    };
  
    return (
      <div className="bg-white shadow-md rounded-lg py-5 px-12 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-6 justify-between ">
          {/* From */}
          <div className="flex flex-col w-full md:w-auto">
            <label className="text-sm text-gray-500 mb-1">From</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="London Stansted"
              className="border-b border-gray-300 focus:outline-none"
            />
          </div>
  
          {/* To */}
          <div className="flex flex-col w-full md:w-auto">
            <label className="text-sm text-gray-500 mb-1">To</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}

              className="border-b border-gray-300 focus:outline-none"
            />
          </div>
  
          {/* Departure */}
          <div className="flex flex-col w-full md:w-auto">
            <label className="text-sm text-gray-500 mb-1">Departure</label>
            <input
              type="date"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="border-b border-gray-300 focus:outline-none"
            />
          </div>
  
          {/* Return */}
          <div className="flex flex-col w-full md:w-auto">
            <label className="text-sm text-gray-500 mb-1">Return</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="border-b border-gray-300 focus:outline-none"
            />
          </div>
  
          {/* Search Button */}
          <Button
            onClick={handleSearch}
            className="bg-[#009688] hover:bg-teal-700 text-white rounded-xl w-12 h-12 flex items-center justify-start text-xl"
          >
            →
          </Button>
        </div>
      </div>
    );
  }
