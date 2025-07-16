'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Slider } from "@/components/ui/slider"
import { useRouter } from 'next/navigation';



export default function FlightFilters() {
    const [stops, setStops] = useState('all');
    const [time, setTime] = useState('all');
    const [cabinBaggage, setCabinBaggage] = useState(0);
    const [checkedBaggage, setCheckedBaggage] = useState(0);
    const [price, setPrice] = useState(500);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);


    const searchParams = useSearchParams();

    const [from, setFrom] = useState(searchParams.get("from") || "");
    const [to, setTo] = useState(searchParams.get("to") || "");
    const [departure, setDeparture] = useState(searchParams.get("departure") || "");
    const [returnDate, setReturnDate] = useState(searchParams.get("returnDate") || "");

    const router = useRouter();
    const handleChangeSearch = () => {
        const query = new URLSearchParams({
            from,
            to,
            departure,
            returnDate,
        }).toString();

        router.push(`?${query}`);
    };



    return (
        <aside className="w-full lg:w-1/4 text-black bg-white font-medium p-5 rounded-xl shadow-md max-h-fit bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"
            // style={{
            //     backgroundImage: 'url(/plane_facing_each_other.jpg)',
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //     backgroundRepeat: 'no-repeat',
            //     backgroundAttachment: 'scroll',
            //     // borderRadius: '10px',
            //     // margin: '20px 47px 47px 47px',
            // }}
        >

            {/* Search Summary */}
            <div>
                <h2 className="text-sm font-semibold mb-2">Your Search</h2>
                <div className="space-y-2 text-sm">
                    <div>
                        <Label className="block text-blac">From</Label>
                        <Input className="w-full border rounded px-2 py-1  focus-visible:ring-2 focus-visible:ring-[#00796B] focus-visible:ring-offset-0 my-2 text-gray-700" value={from} onChange={(e) => setFrom(e.target.value)} />
                    </div>
                    <div>
                        <Label className="block text-blak">To</Label>
                        <Input className="w-full border rounded px-2 py-1  focus-visible:ring-2 focus-visible:ring-[#00796B] focus-visible:ring-offset-0 my-2 text-gray-700" value={to} onChange={(e) => setTo(e.target.value)} />
                    </div>
                    <div>
                        <Label className="block text-blac">Departure</Label>
                        <Input className="w-full border rounded px-2 py-1  focus-visible:ring-2 focus-visible:ring-[#00796B] focus-visible:ring-offset-0 my-2 text-gray-700" value={departure} onChange={(e) => setDeparture(e.target.value)} type={"date"} />
                    </div>
                    <div>
                        <Label className="block text-blac">Return</Label>
                        <Input className="w-full border rounded px-2 py-1  focus-visible:ring-2 focus-visible:ring-[#00796B] focus-visible:ring-offset-0 my-2 text-gray-700" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} type={"date"} />
                    </div>
                </div>
                <hr className="my-5" />
            </div>

            {/* Filters */}
            <div className="text-sm space-y-6">
                {/* Stops */}
                <div>
                    <h3 className="font-semibold mb-2">Stops</h3>
                    {['All', 'Non-stop', '1 stop', '2 stops'].map((option) => (
                        <div key={option} className="mb-1">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="stops"
                                    value={option.toLowerCase()}
                                    checked={stops === option.toLowerCase()}
                                    onChange={() => setStops(option.toLowerCase())}
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
                {/* Adults & Children */}
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
                    <div className="flex justify-between items-center">
                        <span>Children</span>
                        <div className="flex items-center gap-2">
                            <Button
                                variant={"secondary"}
                                onClick={() => setChildren(prev => Math.max(0, prev - 1))}
                                className="w-6 h-6 rounded-full p-2 bg-[#009688] text-white hover:bg-[#00796B]"
                            >
                                -
                            </Button>
                                <span className="w-4 text-center">{children}</span>
                            <Button
                                variant={"secondary"}
                                onClick={() => setChildren(prev => prev + 1)}
                                className="w-6 h-6 rounded-full p-2 bg-[#009688] text-white hover:bg-[#00796B]"
                            >
                                +
                            </Button>
                        </div>
                    </div>


                    <hr className="my-5" />

                </div>


                {/* Time */}
                <div>
                    <h3 className="font-semibold mb-2">Time</h3>
                    {['All', 'Morning', 'Evening', 'Night'].map((option) => (
                        <div key={option} className="">
                            <Label className="inline-flex items-center">
                                <Input
                                    type="radio"
                                    name="time"
                                    value={option.toLowerCase()}
                                    checked={time === option.toLowerCase()}
                                    onChange={() => setTime(option.toLowerCase())}
                                    className="mr-2 accent-[#009688]"
                                />
                                {option}
                            </Label>
                        </div>
                    ))}
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