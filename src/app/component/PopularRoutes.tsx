import Image from "next/image";

const routes = [
  { city: "Istanbul", src: "https://source.unsplash.com/400x300/?istanbul"},
  { city: "Dubai", src: "https://source.unsplash.com/400x300/?dubai" },
  { city: "Doha", src: "https://source.unsplash.com/400x300/?doha" },
  { city: "New York", src: "https://source.unsplash.com/400x300/?newyork" },
];

export default function PopularRoutes() {
  return (
    <section className="w-full my-10">
      <h2 className="text-xl font-semibold mb-4">Popular Routes</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {routes.map(({ city, src }) => (
          <div key={city} className="rounded overflow-hidden shadow-md">
            <Image src={src} alt={city} width={400} height={300} className="object-cover" />
            <div className="p-2 font-medium text-center">{city}</div>
          </div>
        ))}
      </div>
    </section>
  );
}