"use client";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { date } from "zod";
import Link from "next/link";

const routes = [
  { city: "Venice", src: "https://images.unsplash.com/photo-1482690205767-61deebe15ef7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 170, departureDate: '2025-07-18', },
  { city: "Dubai", src: "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 200, departureDate: '2025-07-21', },
  { city: "Amsterdam", src: "https://plus.unsplash.com/premium_photo-1661878122586-2d75a86f3400?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 150, departureDate: '2025-07-23', },
  { city: "Paris", src: "https://plus.unsplash.com/premium_photo-1683120751032-41fdd5226ab6?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 400, departureDate: '2025-07-23', },
];

export default function PopularRoutes() {
  return (
    <section className="px-6 sm:px-8 md:px-12 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">Popular Destinations</h2>
      <div className="flex flex-col justify-center items-center md:grid  md:grid-cols-2 lg:grid-cols-4 gap-6">
        {routes.map(({ city, src, price, departureDate }) => (
          <div key={city} className="rounded overflow-hidden shadow-md ">
            <Link href={`/fareSelection`}>
              <DirectionAwareHover imageUrl={src} className="w-full h-full">
                <p className="font-bold text-xl">{city}</p>
                <p className="font-medium text-sm">{departureDate}</p>
                <p className="font-medium text-sm">{price}€</p>
              </DirectionAwareHover> 
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}