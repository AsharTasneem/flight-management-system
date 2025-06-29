'use client'

export default function StepperNavbar({ steps, currentStep }: { steps: string[], currentStep: number }) {
  return (
    <div className="relative w-full mb-8 sm:mb-10">
      {/* Background line */}
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-300 z-0" />

      {/* Progress line */}
      <div
        className="absolute top-4 left-0 h-0.5 bg-emerald-600 z-10 transition-all duration-300"
        style={{
          width: `calc((100% / ${steps.length - 1}) * ${currentStep})`,
        }}
      />

      {/* Steps */}
      <div className="flex items-center justify-between relative z-20">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div key={index} className="flex flex-col items-center text-center flex-1 min-w-[50px]">
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                  isCompleted
                    ? 'bg-emerald-600'
                    : isActive
                    ? 'bg-emerald-600 ring-4 ring-emerald-200'
                    : 'bg-gray-300'
                }`}
              >
                {index + 1}
              </div>
              <span className="text-[0.5rem] sm:text-sm font-medium mt-1 sm:mt-2">{step}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
