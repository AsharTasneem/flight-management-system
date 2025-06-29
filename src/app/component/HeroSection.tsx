"use client"
import { Button } from "@/components/ui/button";
import { Typewriter } from 'react-simple-typewriter';
import Image from "next/image";
import { useState, useEffect } from "react"
import abc from "../../../public/parked.jpg"
// import { TypewriterEffect } from "@/components/magicui/typewriter-effect";
// import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export default function HeroSection() {
    return (
        <section className="relative h-[440px] overflow-hidden px-12 py-5">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                    src={abc}
                    alt="Hero"
                    fill
                    className="object-cover brightness-[0.6] rounded-lg"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center px-4">
                <h1 className="text-white text-lg md:text-4xl font-bold text-center">
                    <Typewriter
                        words={['Best deals are waiting for you']}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </h1>
            </div>
        </section>
    );
}