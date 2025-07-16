"use client"

import { useState, useEffect } from "react"
import parkedPlane from "../../../public/parked.jpg"
import animatedPlane from "../../../public/animated-plane.jpg"
import { TypewriterEffectSmooth } from "@/components/ui/typewritter-effect2";
import { motion } from "motion/react";
import { ImagesSlider } from "@/components/ui/images-slider";
import beachView from "../../../public/beach_view.jpg"
import mountainScenery from "../../../public/mountain_scenery.jpg"
import { Typewriter } from "react-simple-typewriter";
// import { FlipWords } from "@/components/ui/flip-word";


export default function HeroSection() {
    const images = [
        parkedPlane.src,
        beachView.src,
        animatedPlane.src,
        mountainScenery.src,
    ];

    const words = [
        {
            text: `Beyond`,
            className: "text-gray-200 text-sm md:text-lg lg:text-3xl font-bold"
        },
        {
            text: `Borders,`,
            className: "bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-sm md:text-lg lg:text-3xl font-bold"
        },
        {
            text: `Beyond`,
            className: "text-gray-200 text-sm md:text-lg lg:text-3xl font-bold"
        },
        {
            text: `Ordinary,`,
            className: "bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-sm md:text-lg lg:text-3xl font-bold"
        },
        {
            text: `Beyond`,
            className: "text-gray-200 text-sm md:text-lg lg:text-3xl font-bold"
        },
        {
            text: `Imagination.`,
            className: "bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-sm md:text-lg lg:text-3xl font-bold"
        },
        
    ];

    return (
        <section className="relative h-[440px] overflow-hidden px-12 py-5">
            <div className="relative w-full h-full rounded-xl overflow-hidden">

                <ImagesSlider className="object-cover rounded-lg brightness-100 opacity-100" images={images} direction="down">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -80,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="z-50 flex flex-col justify-center items-center"
                        >

                    </motion.div>
                </ImagesSlider>
                {/* <Image
                    src={parkedPlane}
                    alt="parked-plane-image"
                    fill
                    className="object-cover brightness-[0.6] rounded-lg"
                    /> */}
            </div>
            <div className="absolute inset-0 flex items-center justify-center px-4 overflow-hidden">
                {/* <h1 className="text-gray-200 text-lg md:text-4xl font-bold text-center"> 
                     <Typewriter
                    words={['Best deals are waiting for you']}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={2000}
                    />
                    </h1> */}
                    <TypewriterEffectSmooth words={words} className="text-center max-w-full"/>
                    {/* <BackgroundBeamsWithCollision> */}
                    {/* </BackgroundBeamsWithCollision> */}
            </div>
        </section>
    );
}