'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Meteors } from "@/components/ui/meteors";
import { BackgroundBeamsWithCollision } from "@/components/ui/bg-beam-with-collision";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal";
import { motion } from "motion/react";
import { useEffect } from "react";

interface FlightCardProps {
  departureTime: string;
  arrivalTime: string;
  price: number;
}

export default function FlightCard({
  departureTime,
  arrivalTime,
  price,
}: FlightCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/fareSelection");
  };
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div
      className={`
          relative overflow-hidden border-0 rounded-3xl p-6 w-full mb-6
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
        `}
    >

      {/* Content */}
      <div className="relative z-10">

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#009688] transition-colors duration-300">
            {/* <Meteors number={50} /> */}

            Flight Details
          </h3>
          {/* <d */}
        </div>

        <div className="space-y-4">
          {/* Departure Section */}
          <div className="bg-white/50 rounded-2xl p-4 border border-gray-200 group-hover:border-[#009688]/30 transition-colors duration-300">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <p className="font-semibold text-gray-800 group-hover:text-[#009688] transition-colors duration-300">Departure</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              <svg className="w-4 h-4 text-[#009688]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-medium">{departureTime}</p>
            </div>
          </div>

          {/* Arrival Section */}
          <div className="bg-white/50 rounded-2xl p-4 border border-gray-200 group-hover:border-[#009688]/30 transition-colors duration-300">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <p className="font-semibold text-gray-800 group-hover:text-[#009688] transition-colors duration-300">Arrival</p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              <svg className="w-4 h-4 text-[#009688]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="font-medium">{arrivalTime}</p>
            </div>
          </div>

          {/* Price and Button Section */}
          <div className="pt-4 border-t border-gray-200 group-hover:border-[#009688]/30 transition-colors duration-300">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold bg-gradient-to-r from-[#009688] to-[#00796b] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  ${price}
                </p>
                <p className="text-xs text-gray-500 mt-1">Total Price</p>
              </div>

              {/* <Button 
                  onClick={handleClick} 
                  className="
                    bg-gradient-to-r from-[#009688] to-[#00796b] 
                    hover:from-[#00796b] hover:to-[#00695c]
                    text-white font-semibold px-6 py-2 rounded-xl
                    transform transition-all duration-300
                    hover:scale-105 hover:shadow-lg
                    group-hover:shadow-[#009688]/25
                    border-0
                  "
                >
                  Select Flight
                </Button> */}
                
              <Modal>
                <ModalTrigger className="bg-gradient-to-r from-[#009688] to-[#00796b] 
                    hover:from-[#00796b] hover:to-[#00695c]
                    text-white font-semibold flex justify-center group/modal-btn" >
                  <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500" >
                    Book your flight
                  </span>
                  <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                    <svg width="29" height="29" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill="#E0E0E0"
                        d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
                      />
                    </svg>
                  </div>
                </ModalTrigger>
                <ModalBody className="bg-gradient-to-br from-teal-50 to-blue-50">
                  <ModalContent>
                    <h4 className="text-lg md:text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 ">
                      Book your trip to Amsterdam now! 
                    </h4>
                    <div className="flex justify-center items-center">
                      {images.map((image, idx) => (
                        <motion.div
                          key={"images" + idx}
                          style={{
                            rotate: Math.random() * 20 - 10,
                          }}
                          whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          whileTap={{
                            scale: 1.1,
                            rotate: 0,
                            zIndex: 100,
                          }}
                          className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                        >
                          <img
                            src={image}
                            alt="bali images"
                            width="500"
                            height="500"
                            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="pt-10 pb-0 flex flex-col md:flex-row flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                      <div className="flex items-center justify-center">
                        <VacationIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                          Your dream destination
                        </span>
                      </div>
                      <div className="flex  items-center justify-center">
                        <PlaneIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                          Periodically flights
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <ElevatorIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                          Hundreds of hotels
                        </span>
                      </div>
                      <div className="flex  items-center justify-center pl-0 md:pl-6">
                        <FoodIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                          Exotic cuisine
                        </span>
                      </div>
                    </div>
                  </ModalContent>
                  <ModalFooter className="gap-4 bg-gradient-to-br from-teal-50 to-blue-50 flex justify-center md:justify-end">
                    <button className="bg-gradient-to-r from-[#009688] to-[#00796b] 
                    hover:from-[#00796b] hover:to-[#00695c]
                    text-white font-normal px-2 py-1 rounded-md
                    transform transition-all duration-300
                    hover:scale-105 hover:shadow-lg
                    group-hover:shadow-[#009688]/25
                    border-0 w-28">
                      Cancel
                    </button>
                    <button className="bg-gradient-to-r from-[#009688] to-[#00796b] 
                    hover:from-[#00796b] hover:to-[#00695c]
                    text-white font-normal px-2 py-1 rounded-md
                    transform transition-all duration-300
                    hover:scale-105 hover:shadow-lg
                    group-hover:shadow-[#009688]/25
                    border-0 w-28" onClick={handleClick}>
                      Book Now
                    </button>
                  </ModalFooter>
                </ModalBody>

              </Modal>
            </div>
          </div>
        </div>

      </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#009688]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

const PlaneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  );
};

const VacationIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
      <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
      <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
      <path d="M15 9l-3 5.196" />
      <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
    </svg>
  );
};

const ElevatorIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
      <path d="M10 10l2 -2l2 2" />
      <path d="M10 14l2 2l2 -2" />
    </svg>
  );
};

const FoodIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
    </svg>
  );
};


// export const useOutsideClick = (
//   ref: React.RefObject<HTMLDivElement>, 
//   callback: Function
// ) => {
//   useEffect(() => {
//     const listener = (event: any) => {
//       // DO NOTHING if the element being clicked is the target element or their children
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }
//       callback(event);
//     };

//     document.addEventListener("mousedown", listener);
//     document.addEventListener("touchstart", listener);

//     return () => {
//       document.addEventListener("mousedown", listener);
//       document.addEventListener("touchstart", listener);
//     };
//   }, [ref, callback]);
// };