"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { z } from "zod";
import { ArrowRight } from 'lucide-react';
import { Meteors } from '@/components/ui/meteors';

// Schema Definition using Zod
const searchSchema = z
  .object({
    from: z.string().min(2, { message: "Origin city is required" }),
    to: z.string().min(2, { message: "Destination city is required" }),
    departure: z.string().min(1, { message: "Departure date is required" }),
    returnDate: z.string().min(1, { message: "Return date is required" }),
  })
  .refine(
    (data) => new Date(data.returnDate) >= new Date(data.departure),
    {
      message: "Return date must be after departure date",
      path: ["returnDate"],
    }
  );

export default function FlightSearchBox() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departure, setDeparture] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const router = useRouter();

  const handleClick = () => {
    const formData = { from, to, departure, returnDate };
    const result = searchSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // If successful, clear errors and navigate
    setErrors({});
    // router.push("/search");
    router.push(`/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&departure=${departure}&returnDate=${returnDate}`);

  };

  return (
    <div className="bg-white shadow-md rounded-xl py-8 px-12 mx-12 max-w-full relative overflow-hidden">
      {/* <Meteors number={10} className="absolute"/> */}
      <div className="flex flex-col md:flex-row items-center gap-6 justify-between min-h-[80px]">
        
        {/* From */}
        <div className="flex flex-col w-full md:w-auto min-w-[140px]">
          <Label className="text-sm text-gray-500 mb-1">From</Label>
          <Input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="London Stansted"
            className="border-b border-gray-300 focus:outline-none mt-2 focus-visible:ring-2 focus-visible:ring-[#00796B] focus-visible:ring-offset-0"
          />
          {errors.from && <p className="text-red-500 text-sm mt-1">{errors.from}</p>}
        </div>

        {/* To */}
        <div className="flex flex-col w-full md:w-auto min-w-[140px]">
          <Label className="text-sm text-gray-500 mb-1">To</Label>
          <Input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Amsterdam"
            className="border-b border-gray-300 focus:outline-none mt-2 focus-visible:ring-2 focus-visible:ring-[#00796B] focus-visible:ring-offset-0"
          />
          {errors.to && <p className="text-red-500 text-sm mt-1">{errors.to}</p>}
        </div>

        {/* Departure */}
        <div className="flex flex-col w-full md:w-auto min-w-[140px]">
          <Label className="text-sm text-gray-500 mb-1">Departure</Label>
          <Input
            type="date"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            className="border-b border-gray-300 focus:outline-none mt-2 focus-visible:ring-2 focus-visible:ring-[#00796B] focus-visible:ring-offset-0"
          />
          {errors.departure && <p className="text-red-500 text-sm mt-1">{errors.departure}</p>}
        </div>

        {/* Return */}
        <div className="flex flex-col w-full md:w-auto min-w-[140px]">
          <Label className="text-sm text-gray-500">Return</Label>
          <Input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="border-b border-gray-300 focus:outline-none mt-2 focus-visible:ring-2 focus-visible:ring-[#00796B] focus-visible:ring-offset-0 "
          />
          {errors.returnDate && <p className="text-red-500 text-sm mt-1">{errors.returnDate}</p>}
        </div>

        {/* Search Button */}
        <Button
          onClick={handleClick}
          className="bg-[#009688] hover:bg-teal-700 text-white rounded-xl w-12 h-12 flex items-center justify-center transition-all duration-200 hover:scale-105"
          style={{ minWidth: '48px', minHeight: '48px' }}
        >
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}