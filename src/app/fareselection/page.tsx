'use client';
import StepperNavbar from "../component/StepperNavbar"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function FareSelectionPage() {
    const router = useRouter();
    const handleClick = () => {
        router.push("/payment");
    };
  const steps = [
    'Search',
    'Choose flight',
    'Choose fare',
    'Traveller details',
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
        features: ['Basic seat', '1 Cabin bag', 'No changes', 'No refunds'],
        color: 'from-red-500 to-red-600'
      },
      {
        title: 'Economy',
        cabin: 'Economy +',
        seat: 'Seat Choice Included',
        bag: '1 Cabin Baggage, 1 Checked Baggage',
        flexibility: 'Non-refundable',
        price: 120,
        features: ['Seat choice', '1 Cabin + 1 Checked', 'No changes', 'No refunds'],
        color: 'from-blue-500 to-blue-600'
      },
      {
        title: 'Premium',
        cabin: 'First Class',
        seat: 'Seat Choice Included',
        bag: '2 Cabin Baggage, 2 Checked Baggage',
        flexibility: 'Change of Date Possible',
        price: 350,
        features: ['Premium seat', '2 Cabin + 2 Checked', 'Date changes', 'Partial refunds'],
        color: 'from-purple-500 to-purple-600'
      },
       
    ],
  };

  return (
    <div className="flex flex-col gap-6 px-10 py-10 bg-gray-100 min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 max-w-full mx-6">
      {/* Stepper - Keep unchanged */}
      {/* <div className="w-full mb-6">
      </div> */}
      {/* <StepperNavbar steps={steps} currentStep={2} /> */}

      {/* Main Content */}
      <div className="flex-1">
        {/* Route Info */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Choose Your Fare</h1>
          <p className="text-lg text-gray-600">{data.route}</p>
        </div>

        {/* Fare Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.fares.map((fare, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden border-0 rounded-3xl p-6 w-full mb-6
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
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${fare.color} opacity-20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-125 transition-transform duration-500`}></div>
              <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${fare.color} opacity-15 rounded-full translate-y-8 -translate-x-8 group-hover:scale-110 transition-transform duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#009688] transition-colors duration-300 mb-2">
                    {fare.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {fare.cabin}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-6">
                  {fare.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="bg-white/50 rounded-2xl p-4 border border-gray-200 group-hover:border-[#009688]/30 transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${fare.color}`}></div>
                        <p className="text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                          {feature}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price and Button Section */}
                <div className="pt-4 border-t border-gray-200 group-hover:border-[#009688]/30 transition-colors duration-300">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold bg-gradient-to-r from-[#009688] to-[#00796b] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                        ${fare.price}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Total Price</p>
                    </div>
                    
                    <Button 
                      onClick={handleClick} 
                      className={`
                        bg-gradient-to-r ${fare.color}
                        hover:from-[#00796b] hover:to-[#00695c]
                        text-white font-semibold px-8 py-3 rounded-xl
                        transform transition-all duration-300
                        hover:scale-105 hover:shadow-lg
                        group-hover:shadow-[#009688]/25
                        border-0 w-full
                      `}
                    >
                      Select Fare
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#009688]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
