import React from 'react';

const ExtraFeatures = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-red-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Guarantee of the best price",
      description: "We offer only the best deals, if you find the same flight cheaper elsewhere, contact us!"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      ),
      title: "Refunds and cancellations",
      description: "Your flight got cancelled? We have you covered with our instant refund services."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Safety and precautions",
      description: "We follow all the safety and health protocols to ensure a safe and healthy travel experience."
    }
  ];

  return (
    <div className="px-6 sm:px-8 md:px-12 pt-8 pb-16">
      <div className="w-full">
        <div className="flex flex-col justify-center md:flex-row md:justify-between gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-600 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-4 md:text-center text-left md:pl-0 px-5 ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraFeatures;
