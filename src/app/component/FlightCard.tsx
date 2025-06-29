interface FlightCardProps {
    departureTime: string;
    arrivalTime: string;
    returnDeparture: string;
    returnArrival: string;
    price: number;
  }
  
  export default function FlightCard({
    departureTime,
    arrivalTime,
    returnDeparture,
    returnArrival,
    price,
  }: FlightCardProps) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 w-full mb-6">
        <div className="mb-4">
          <p className="font-semibold">June 10 2023 - Departure</p>
          <div className="flex justify-between text-sm text-gray-700 mt-2">
            <p>{departureTime}</p>
            <p>{arrivalTime}</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-semibold">August 18 2023 - Return</p>
          <div className="flex justify-between text-sm text-gray-700 mt-2">
            <p>{returnDeparture}</p>
            <p>{returnArrival}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">${price}</p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded">
            Select this flight
          </button>
        </div>
      </div>
    );
  }
  