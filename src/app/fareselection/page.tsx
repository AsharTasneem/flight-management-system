'use client';
import StepperNavbar from "../component/StepperNavbar"

export default function FareSelectionPage() {
  const steps = [
    'Search',
    'Choose flight',
    'Choose fare',
    'Passenger details',
    'Extra Services',
    'Payment',
  ];

  const currentStep = 2;

  const data = {
    route: 'London to Stockholm',
    fares: [
      {
        title: 'Lowfare',
        cabin: 'Economy',
        seat: 'Automatically Allocated',
        bag: '1 Cabin Baggage',
        flexibility: 'Non-refundable',
        price: 90,
      },
      {
        title: 'Economy',
        cabin: 'Economy +',
        seat: 'Seat Choice Included',
        bag: '1 Cabin Baggage, 1 Checked Baggage',
        flexibility: 'Non-refundable',
        price: 120,
      },
      {
        title: 'Premium',
        cabin: 'First Class',
        seat: 'Seat Choice Included',
        bag: '2 Cabin Baggage, 2 Checked Baggage',
        flexibility: 'Change of Date Possible',
        price: 350,
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-12 py-10">
            <StepperNavbar steps={steps} currentStep={2} />
        

      {/* Route Info */}
      <h2 className="text-xl font-semibold mb-6">{data.route}</h2>

      {/* Fare Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {data.fares.map((fare, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 min-h-[320px] flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div>
              <h3 className="text-lg font-bold mb-1">{fare.title}</h3>
              <p className="text-sm text-gray-600 mb-2">Cabin: {fare.cabin}</p>
              <div className="text-sm space-y-1">
                <p><strong>Seat:</strong> {fare.seat}</p>
                <p><strong>Bag:</strong> {fare.bag}</p>
                <p><strong>Flexibility:</strong> {fare.flexibility}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xl font-bold">${fare.price}</p>
              <button className="bg-emerald-500 text-white px-5 py-2 rounded hover:bg-emerald-600 transition">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
