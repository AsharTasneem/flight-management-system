"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Static data for the payment page
const tripSummary = {
  outBound: {
    date: "June 10, 2023",
    departureTime: "11:45",
    departureAirport: "London Stansted (STN)",
    arrivalTime: "14:55",
    arrivalAirport: "Stockholm Arlanda (ARN)",
    duration: "2 h 10 m",
    direct: true,
  },
  return: {
    date: "August 18, 2023",
    departureTime: "18:20",
    departureAirport: "Stockholm Arlanda (ARN)",
    arrivalTime: "19:55",
    arrivalAirport: "London Stansted (STN)",
    duration: "2 h 10 m",
    direct: true,
  },
};

const fareDetails = {
  title: "Economy",
  cabin: "Economy +",
  seat: "Seat Choice Included",
  bag: "1 Cabin Baggage\n1 Checked Baggage",
  flexibility: "Non-refundable",
};

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex flex-col items-center py-10 px-6 ">
      <div className="w-full max-w-4xl space-y-8 px-6">
        {/* Trip Summary */}
        <div className="relative overflow-hidden border-0 rounded-3xl p-6 mb-6 w-full
          bg-gradient-to-br from-white via-gray-50 to-gray-100
          shadow-lg hover:shadow-2xl 
          transform transition-all duration-500 ease-out
          hover:scale-100 hover:-translate-y-2
          hover:z-10
          group
          before:absolute before:inset-0 before:bg-gradient-to-br 
          before:from-[#009688]/10 before:to-transparent 
          before:opacity-0 before:transition-opacity before:duration-300
          hover:before:opacity-100
        ">
          {/* Hover overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#009688]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <h2 className="lg:text-xl font-semibold mb-6 text-gray-800 text-center text-sm">London to Stockholm Trip Summary</h2>
          <div className="flex flex-col gap-6">
            {/* outBound */}
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-500 mb-2 font-medium">{tripSummary.outBound.date} - Departure</p>
              <div className="flex items-center w-full">
                {/* Departure Time */}
                <div className="w-20 text-center flex-shrink-0">
                  <p className="md:text-3xl font-bold text-gray-800 text-lg">{tripSummary.outBound.departureTime}</p>
                  <p className="text-xs text-gray-500 mt-1">{tripSummary.outBound.departureAirport}</p>
                </div>
                {/* Line + Plane */}
                <div className="flex-1 relative flex items-center justify-center mx-2">
                  <div className="h-0.5 bg-gray-300 w-full" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white md:h-12 md:w-12 h-8 w-8 rounded-full shadow-none">
                    <svg width="38" height="38" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        fill="#FFD600"
                        d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                      />
                    </svg>
                  </div>
                </div>
                {/* Arrival Time */}
                <div className="w-20 text-center flex-shrink-0">
                  <p className="md:text-3xl font-bold text-gray-800 text-lg">{tripSummary.outBound.arrivalTime}</p>
                  <p className="text-xs text-gray-500 mt-1">{tripSummary.outBound.arrivalAirport}</p>
                </div>
              </div>
            </div>
            {/* Return */}
            <div className="flex flex-col items-center ">
              <p className="text-sm text-gray-600 mb-2 font-medium">{tripSummary.return.date} – Return</p>
              <div className="flex items-center w-full">
                {/* Departure Time */}
                <div className="w-20 text-center flex-shrink-0">
                  <p className="md:text-3xl font-bold text-gray-800 text-lg">{tripSummary.return.departureTime}</p>
                  <p className="text-xs text-gray-500 mt-1">{tripSummary.return.departureAirport}</p>
                </div>
                {/* Line + Plane */}
                <div className="flex-1 relative flex items-center justify-center mx-2">
                  <div className="h-0.5 bg-gray-300 w-full" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-white md:h-12 md:w-12 h-8 w-8 rounded-full shadow-none">
                    <svg width="38" height="38" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                        fill="#FFD600"
                      />
                    </svg>
                  </div>
                </div>
                {/* Arrival Time */}
                <div className="w-20 text-center flex-shrink-0">
                  <p className="md:text-3xl font-bold text-gray-800 text-lg">{tripSummary.return.arrivalTime}</p>
                  <p className="text-xs text-gray-500 mt-1">{tripSummary.return.arrivalAirport}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Fare Details & No Added Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fare Details */}
          <div className="relative overflow-hidden border-0 rounded-3xl p-6 w-full
            bg-gradient-to-br from-white via-gray-50 to-gray-100
            shadow-lg hover:shadow-2xl 
            transform transition-all duration-500 ease-out
            hover:scale-100 hover:-translate-y-2
            hover:z-10
            group
            before:absolute before:inset-0 before:bg-gradient-to-br 
            before:from-[#009688]/10 before:to-transparent 
            before:opacity-0 before:transition-opacity before:duration-300
            hover:before:opacity-100
          ">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500 to-blue-600 opacity-20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500 to-blue-600 opacity-15 rounded-full translate-y-8 -translate-x-8 group-hover:scale-110 transition-transform duration-500"></div>
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#009688]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            {/* Content */}
            <div className="relative z-10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#009688] transition-colors duration-300 mb-2">
                  {fareDetails.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {fareDetails.cabin}
                </p>
              </div>
              {/* Features */}
              <div className="space-y-4 mb-2">
                {/* Feature list as in fareSelection */}
                <div className="bg-white/50 rounded-2xl p-4 border border-gray-200 group-hover:border-[#009688]/30 transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                    <p className="text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      Seat choice
                    </p>
                  </div>
                </div>
                <div className="bg-white/50 rounded-2xl p-4 border border-gray-200 group-hover:border-[#009688]/30 transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                    <p className="text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      1 Cabin + 1 Checked
                    </p>
                  </div>
                </div>
                <div className="bg-white/50 rounded-2xl p-4 border border-gray-200 group-hover:border-[#009688]/30 transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                    <p className="text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      No changes
                    </p>
                  </div>
                </div>
                <div className="bg-white/50 rounded-2xl p-4 border border-gray-200 group-hover:border-[#009688]/30 transition-colors duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                    <p className="text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      No refunds
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* No Added Services */}
          <div className="relative overflow-hidden border-0 rounded-3xl p-6 w-full
            bg-white/60 backdrop-blur-lg
            shadow-lg hover:shadow-2xl 
            transform transition-all duration-500 ease-out
            hover:scale-100 hover:-translate-y-2
            hover:z-10
            group
            before:absolute before:inset-0 before:bg-gradient-to-br 
            before:from-purple-400/20 before:to-pink-300/10
            before:opacity-0 before:transition-opacity before:duration-300
            hover:before:opacity-100
          ">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-400 to-pink-400 opacity-20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-125 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-400 to-purple-400 opacity-15 rounded-full translate-y-8 -translate-x-8 group-hover:scale-110 transition-transform duration-500"></div>
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#009688]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2 tracking-wide drop-shadow">No Added Services</h3>
              <p className="text-sm text-gray-500 mb-4 italic">You’re all set for a smooth journey!</p>
              <div className="rounded-2xl border-2 border-pink-200/60 shadow-xl p-2 bg-white/70">
                <Image src="/plane-over-red-clouds.jpg" alt="No Added Services" width={180} height={120} className="rounded-xl object-contain shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* Confirm and Pay Button */}
        <div className="flex justify-end mt-8">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300">
            Confirm and Pay
          </Button>
        </div>
      </div>
    </div>
  );
}
