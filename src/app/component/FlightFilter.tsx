'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function FlightFilters() {
    const [stops, setStops] = useState('non-stop');
    const [time, setTime] = useState('morning');
    const [cabinBaggage, setCabinBaggage] = useState(0);
    const [checkedBaggage, setCheckedBaggage] = useState(0);
    const [price, setPrice] = useState(500);

    return (
        <aside className="w-full lg:w-1/4 bg-white p-5 rounded-2xl shadow-md">
            {/* Search Summary */}
            <div>
                <h2 className="text-sm font-semibold mb-2">Your Search</h2>
                <div className="space-y-2 text-sm">
                    <div>
                        <label className="block text-gray-400">From</label>
                        <input className="w-full border rounded px-2 py-1" value="London Stansted" />
                    </div>
                    <div>
                        <label className="block text-gray-400">To</label>
                        <input className="w-full border rounded px-2 py-1" value="Stockholm" />
                    </div>
                    <div>
                        <label className="block text-gray-400">Departure</label>
                        <input className="w-full border rounded px-2 py-1" value="10/06/2023" />
                    </div>
                    <div>
                        <label className="block text-gray-400">Return</label>
                        <input className="w-full border rounded px-2 py-1" value="18/08/2023" />
                    </div>
                </div>
                <Button className="w-full bg-black text-white py-2 mt-3 rounded-lg">Change Search</Button>
                <hr className="my-5" />
            </div>

            {/* Filters */}
            <div className="text-sm space-y-6">
                {/* Stops */}
                <div>
                    <h3 className="font-semibold mb-2">Stops</h3>
                    {['non-stop', '1 stop', '2 stops', '3 stops'].map((option) => (
                        <div key={option} className="mb-1">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="stops"
                                    value={option}
                                    checked={stops === option}
                                    onChange={() => setStops(option)}
                                    className="mr-2 accent-[#009688]"
                                />
                                {option}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Bags */}
                <div>
                    <h3 className="font-semibold mb-2">Bags</h3>

                    {/* Cabin Baggage */}
                    <div className="flex justify-between items-center mb-3">
                        <span>Cabin baggage</span>
                        <div className="flex items-center gap-2">
                            <Button
                                onClick={() => setCabinBaggage(prev => Math.max(0, prev - 1))}
                                className="w-6 h-6 flex items-center justify-center border rounded-full p-2 border-[#009688] bg-[#009688] text-white"
                            >
                                -
                            </Button>
                            <span className="w-4 text-center">{cabinBaggage}</span>
                            <Button
                                onClick={() => setCabinBaggage(prev => prev + 1)}
                                className="w-6 h-6 flex items-center justify-center border rounded-full p-2 border-[#009688] bg-[#009688] text-white"
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
                                onClick={() => setCheckedBaggage(prev => Math.max(0, prev - 1))}
                                className="w-6 h-6 flex items-center justify-center border rounded-full p-2 border-[#009688] bg-[#009688] text-white"
                            >
                                -
                            </Button>
                            <span className="w-4 text-center">{checkedBaggage}</span>
                            <Button
                                variant={"outline"}
                                onClick={() => setCheckedBaggage(prev => prev + 1)}
                                className="h-6  w-6 flex items-center justify-center border rounded-full p-2 border-[#009688] bg-[#009688] text-white"
                            >
                                +
                            </Button>
                        </div>
                    </div>
                </div>


                {/* Time */}
                <div>
                    <h3 className="font-semibold mb-2">Time</h3>
                    {['Morning', 'Mid-day', 'Evening', 'Night'].map((option) => (
                        <div key={option} className="mb-1">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="time"
                                    value={option.toLowerCase()}
                                    checked={time === option.toLowerCase()}
                                    onChange={() => setTime(option.toLowerCase())}
                                    className="mr-2 accent-[#009688]"
                                />
                                {option}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Price */}
                <div>
                    <h3 className="font-semibold mb-2">Price</h3>
                    <div className="flex justify-between text-xs mb-1 text-gray-600">
                        <span>$0</span>
                        <span>${price}</span>
                    </div>
                    <input
                        type="range"
                        min={0}
                        max={500}
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="w-full"
                    />
                </div>
            </div>
        </aside>
    );
}



