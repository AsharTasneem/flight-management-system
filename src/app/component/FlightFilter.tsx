'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Slider } from "@/components/ui/slider"
import { useRouter } from 'next/navigation';
import { z } from "zod";

export default function FlightFilters() {
    const [stops, setStops] = useState('all');
    const [cabinBaggage, setCabinBaggage] = useState(0);
    const [checkedBaggage, setCheckedBaggage] = useState(0);
    const [price, setPrice] = useState(500);
    const [adults, setAdults] = useState(1);
    const [childrens, setChildrens] = useState(0);
    const [infants, setInfants] = useState(0);


    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        from: searchParams.get("from") || "",
        to: searchParams.get("to") || "",
        departure: searchParams.get("departure") || "",
        returnDate: searchParams.get("returnDate") || "",
        stops: searchParams.get("stops") || stops,
        adults: searchParams.get("adults") || adults,
        childrens: searchParams.get("childrens") || childrens,
        infants: searchParams.get("infants") || infants,
        price: searchParams.get("price") || price,
      });

    

    // console.log(formData);

    const router = useRouter();

    const searchSchema = z
      .object({
        from: z.string().min(2, { message: "Origin city is required" }),
        to: z.string().min(2, { message: "Destination city is required" }),
        departure: z.string().min(1, { message: "Departure date is required" }),
        returnDate: z.string().optional().or(z.literal("")),
        stops: z.string().optional().or(z.literal(stops)),
      })
      .refine(
        (data) =>
          !data.returnDate || new Date(data.returnDate) > new Date(data.departure),
        {
          message: "Return date must be after departure date",
          path: ["returnDate"],
        }
      )
      .refine(
        (data) => {
          const today = new Date();
          today.setHours(0, 0, 0, 0); 
          return new Date(data.departure) > today;
        },
        {
          message: "Departure date must be in the future",
          path: ["departure"],
        }
      );

    function handleChange(fieldName: string, value: string | boolean | number ){
        if(value.toString().length >= 3){
            console.log(value);
          }
        setFormData(prev => ({ ...prev, [fieldName]: value }));
        // Clear error when user starts typing
        if (errors[fieldName]) {
          setErrors(prev => ({ ...prev, [fieldName]: '' }));
        }
      }

      function handleChangeForDates(fieldName: string, value: string | boolean ){
        console.log(value);
        setFormData(prev => ({ ...prev, [fieldName]: value }));
        // Clear error when user starts typing
        if (errors[fieldName]) {
          setErrors(prev => ({ ...prev, [fieldName]: '' }));
        }
      }

    //   function handleChangeForFilters(fieldName: string, value: string | boolean | number ){
    //     console.log(value);
    //     setFormData(prev => ({ ...prev, [fieldName]: value }));
    //     // Clear error when user starts typing
    //     if (errors[fieldName]) {
    //       setErrors(prev => ({ ...prev, [fieldName]: '' }));
    //     }
    //   }

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChangeSearch = () => {
        // const formData = { from, to, departure, returnDate };
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
        setErrors({});
        const query = new URLSearchParams({
            from: formData.from,
            to: formData.to,
            departure: formData.departure,
            returnDate: formData.returnDate,
            stops: stops,
            adults: adults.toString(),
            childrens: childrens.toString(),
            infants: infants.toString(),
            price: price.toString(),
        }).toString();
        console.log(query);

        router.push(`?${query}`);
    };



    return (
        <aside className="w-full lg:w-1/4 text-black bg-white font-medium p-5 rounded-xl shadow-md max-h-fit bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
        >

            {/* Search Summary */}
            <div>
                <h2 className="text-sm font-semibold mb-2">Your Search</h2>
                <div className="space-y-2 text-sm">
                    <div>
                        <Label className="block text-blac">From</Label>
                        <Input className="w-full border rounded px-2 py-1  focus-visible:ring-2 focus-visible:ring-[#00796B] focus-visible:ring-offset-0 my-2 text-gray-700" value={formData.from} onChange={(e) => handleChange('from', e.target.value)} />
                        {errors.from && <p className="text-red-500 text-sm mt-1">{errors.from}</p>}
                    </div>
                    <div>
                        <Label className="block text-blak">To</Label>
                        <Input className="w-full border rounded px-2 py-1  focus-visible:ring-2 focus-visible:ring-[#00796B] focus-visible:ring-offset-0 my-2 text-gray-700" value={formData.to} onChange={(e) => handleChange('to', e.target.value)} />
                        {errors.to && <p className="text-red-500 text-sm mt-1">{errors.to}</p>}
                    </div>
                    <div>
                        <Label className="block text-blac">Departure</Label>
                        <Input className="w-full border rounded px-2 py-1  focus-visible:ring-2 focus-visible:ring-[#00796B] focus-visible:ring-offset-0 my-2 text-gray-700" value={formData.departure} onChange={(e) => handleChangeForDates('departure', e.target.value)} type={"date"} />
                        {errors.departure && <p className="text-red-500 text-sm mt-1">{errors.departure}</p>}
                    </div>
                    <div>
                        <Label className="block text-blac">Return</Label>
                        <Input className="w-full border rounded px-2 py-1  focus-visible:ring-2 focus-visible:ring-[#00796B] focus-visible:ring-offset-0 my-2 text-gray-700" value={formData.returnDate} onChange={(e) => handleChangeForDates('returnDate', e.target.value)} type={"date"} />
                        {errors.returnDate && <p className="text-red-500 text-sm mt-1">{errors.returnDate}</p>}
                    </div>
                </div>
                <hr className="my-5" />
            </div>

            {/* Filters */}
            <div className="text-sm space-y-6">
                {/* Stops */}
                <div>
                    <h3 className="font-semibold mb-2">Stops</h3>
                    {['All', 'Non-stop', 'Multi-stops'].map((option) => (
                        <div key={option} className="mb-1">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="stops"
                                    value={option.toLowerCase()}
                                    checked={stops === option.toLowerCase()}
                                    onChange={(e) => setStops(e.target.value)}
                                    className="mr-2 accent-[#009688]"
                                />
                                {option}
                            </label>
                        </div>
                    ))}
                    <hr className="my-5" />

                </div>

                {/* Bags */}
                <div>
                    <h3 className="font-semibold mb-2">Bags</h3>

                    {/* Cabin Baggage */}
                    <div className="flex justify-between items-center mb-3">
                        <span>Cabin baggage</span>
                        <div className="flex items-center gap-2">
                            <Button
                                variant={"secondary"}
                                onClick={() => setCabinBaggage(prev => Math.max(0, prev - 1))}
                                className="w-6 h-6 rounded-full p-2 bg-[#009688] text-white hover:bg-[#00796B]"
                            >
                                -
                            </Button>
                            <span className="w-4 text-center">{cabinBaggage}</span>
                            <Button
                                variant={"secondary"}
                                onClick={() => setCabinBaggage(prev => prev + 1)}
                                className="w-6 h-6 rounded-full p-2 bg-[#009688] text-white hover:bg-[#00796B]"
                            >
                                +
                            </Button>
                        </div>
                    </div>

                    {/* Checked Baggage */}
                    <div className="flex justify-between items-center">
                        <span>Checked baggage</span>
                        <div className="flex items-center gap-2">
                            <Button
                                variant={"secondary"}
                                onClick={() => setCheckedBaggage(prev => Math.max(0, prev - 1))}
                                className="w-6 h-6 rounded-full p-2 bg-[#009688] text-white hover:bg-[#00796B]"
                            >
                                -
                            </Button>
                            <span className="w-4 text-center">{checkedBaggage}</span>
                            <Button
                                variant={"secondary"}
                                onClick={() => setCheckedBaggage(prev => prev + 1)}
                                className="w-6 h-6 rounded-full p-2 bg-[#009688] text-white hover:bg-[#00796B]"
                            >
                                +
                            </Button>
                        </div>
                    </div>




                    <hr className="my-5" />

                </div>
                {/* Adults & Children & infants*/}
                <div>
                    <h3 className="font-semibold mb-2">Passengers</h3>

                    {/* Adults */}
                    <div className="flex justify-between items-center mb-3">
                        <span>Adults</span>
                        <div className="flex items-center gap-2">
                            <Button
                                variant={"secondary"}
                                onClick={() => setAdults(prev => Math.max(1, prev - 1))}
                                className="w-6 h-6 rounded-full p-2 bg-[#009688] text-white hover:bg-[#00796B]"
                            >
                                -
                            </Button>
                            <span className="w-4 text-center">{adults}</span>
                            <Button
                                variant={"secondary"}
                                onClick={() => setAdults(prev => prev + 1)}
                                className="w-6 h-6 rounded-full p-2 bg-[#009688] text-white hover:bg-[#00796B]"
                            >
                                +
                            </Button>
                        </div>
                    </div>

                    {/* Children */}
                    <div className="flex justify-between items-center mb-3">
                        <span>Children</span>
                        <div className="flex items-center gap-2">
                            <Button
                                variant={"secondary"}
                                onClick={() => setChildrens(prev => Math.max(0, prev - 1))}
                                className="w-6 h-6 rounded-full p-2 bg-[#009688] text-white hover:bg-[#00796B]"
                            >
                                -
                            </Button>
                                <span className="w-4 text-center">{childrens}</span>
                            <Button
                                variant={"secondary"}
                                onClick={() => setChildrens(prev => prev + 1)}
                                className="w-6 h-6 rounded-full p-2 bg-[#009688] text-white hover:bg-[#00796B]"
                            >
                                +
                            </Button>
                        </div>
                    </div>


                    {/* Infants */}
                    <div className="flex justify-between items-center">
                        <span>Infants</span>
                        <div className="flex items-center gap-2">
                            <Button
                                variant={"secondary"}
                                onClick={() => setInfants(prev => Math.max(0, prev - 1))}
                                className="w-6 h-6 rounded-full p-2 bg-[#009688] text-white hover:bg-[#00796B]"
                            >
                                -
                            </Button>
                                <span className="w-4 text-center">{infants}</span>
                            <Button
                                variant={"secondary"}
                                onClick={() => setInfants(prev => prev + 1)}
                                className="w-6 h-6 rounded-full p-2 bg-[#009688] text-white hover:bg-[#00796B]"
                            >
                                +
                            </Button>
                        </div>
                    </div>


                    <hr className="my-5" />

                </div>


                {/* Price */}
                <div>
                    <h3 className="font-semibold mb-2">Price</h3>
                    <div className="flex justify-between text-xs mb-2 ">
                        <span>$0</span>
                        <span>${price}</span>
                    </div>
                    <Slider defaultValue={[500]} max={3000} step={75} min={0} value={[price]} onValueChange={([val]) => setPrice(val)} className="w-full rounded-xl
  [&_[role=slider]]:bg-[#00796B] 
  [&_[role=slider]]:w-5 
  [&_[role=slider]]:h-5 
  [&_[role=slider]]:border-2 
  [&_[role=slider]]:border-white 
  [&_[role=slider]]:shadow-md 
  [&_[role=slider]]:transition-all 
  [&_[role=slider]]:hover:scale-100
  [&_[role=track]]:bg-gray-200 
  [&_[role=track]]:h-2 
  [&_[role=track]]:rounded-full 
  [&_.range]:bg-white"
                    />

                </div>
                <Button variant={"secondary"} className="w-full bg-[#009688] text-white py-2 mt-3 rounded-lg hover:bg-[#00796B]" onClick={handleChangeSearch}>Change Search</Button>

            </div>

        </aside>
    );
}