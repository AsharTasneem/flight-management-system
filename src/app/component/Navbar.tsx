'use client'

import { useState } from "react";
import { HelpCircle, Plane, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();
    const handleClick = (route: string) => {
      router.push(route);
    };


    return (
        <div className="w-full px-12 flex items-center justify-between py-5 sticky top-0 z-50 bg-white pb-2 bg-gradient-to-br from-teal-50 to-blue-50  ">
            <Link href="/">

            <h1 className="text-3xl font-semibold text-[#009688]">Tripzy</h1>
            </Link>

            {/* Mobile Menu Button */}
            <Button
                className="md:hidden bg-[#009688] text-white hover:bg-[#00796B] "
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
            >
                <Menu className="w-6 h-6" />
            </Button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-6">
                    <div className="flex items-center">
                        <HelpCircle className="w-5 h-5 text-[#00796B]" />
                        <span className="ml-2 text-sm">Help</span>
                    </div>
                    <div className="flex items-center">
                        <Plane className="w-5 h-5 text-[#00796B]" />
                        <span className="ml-2 text-sm">My Trips</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className=" px-5 text-xs font-normal bg-[#009688] text-white hover:bg-[#00796B]" onClick={()=>handleClick("/signup")}>
                        Sign Up
                    </Button>
                    <Button className="bg-[#009688] text-white hover:bg-[#00796B] px-5 text-xs font-normal" onClick={()=>handleClick("/login")}>
                        Login
                    </Button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div 
                className={`absolute top-16 right-4 w-48 bg-white border shadow-lg rounded-xl p-4 md:hidden z-50 transition-all duration-500 ease-in-out transform ${
                    menuOpen 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
                }`}
            >
                <div className="flex flex-col gap-4">
                    <div className={`flex items-center transition-all duration-300 ease-in-out ${
                        menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`} style={{ transitionDelay: menuOpen ? '100ms' : '0ms' }}>
                        <HelpCircle className="w-5 h-5 text-[#00796B]" />
                        <span className="ml-2 text-sm">Help</span>
                    </div>
                    <div className={`flex items-center transition-all duration-300 ease-in-out ${
                        menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`} style={{ transitionDelay: menuOpen ? '200ms' : '0ms' }}>
                        <Plane className="w-5 h-5 text-[#00796B]" />
                        <span className="ml-2 text-sm">My Trips</span>
                    </div>
                    <div className={`transition-all duration-300 ease-in-out ${
                        menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`} style={{ transitionDelay: menuOpen ? '300ms' : '0ms' }}>
                        <Button variant="outline" className="bg-[#009688] text-white hover:bg-[#00796B]px-5 text-xs font-normal w-full" onClick={()=>handleClick("/signup")}>
                            Sign Up
                        </Button>
                    </div>
                    <div className={`transition-all duration-300 ease-in-out ${
                        menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`} style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}>
                        <Button className="bg-[#009688] text-white hover:bg-[#00796B] px-5 text-xs font-normal w-full" onClick={()=>handleClick("/login")}>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
