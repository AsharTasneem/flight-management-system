'use client'
import { useState } from "react";
import { HelpCircle, Plane, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full px-12 flex items-center justify-between py-5">
            <h1 className="text-2xl font-semibold text-[#009688]">SkyPlane</h1>

            {/* Mobile Menu Button */}
            <Button
                className="md:hidden "
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
            >
                <Menu className="w-6 h-6" />
            </Button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-6">
                    <div className="flex items-center">
                        <HelpCircle className="w-5 h-5 text-black" />
                        <span className="ml-2 text-sm">Help</span>
                    </div>
                    <div className="flex items-center">
                        <Plane className="w-5 h-5 text-black" />
                        <span className="ml-2 text-sm">My Trips</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="bg-white text-black px-5 text-xs font-normal">
                        Sign Up
                    </Button>
                    <Button className="text-white bg-black px-5 text-xs font-normal">
                        Login
                    </Button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-16 right-4 w-48 bg-white border shadow-md rounded-md p-4 md:hidden z-50">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <HelpCircle className="w-5 h-5 text-black" />
                            <span className="ml-2 text-sm">Help</span>
                        </div>
                        <div className="flex items-center">
                            <Plane className="w-5 h-5 text-black" />
                            <span className="ml-2 text-sm">My Trips</span>
                        </div>
                        <Button variant="outline" className="bg-white text-black px-5 text-xs font-normal w-full">
                            Sign Up
                        </Button>
                        <Button className="text-white bg-black px-5 text-xs font-normal w-full">
                            Login
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
