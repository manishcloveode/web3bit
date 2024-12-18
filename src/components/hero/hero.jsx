"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
    const contentRef = useRef(null); // Reference for content container
    const btnRef = useRef(null); // Reference for the btn

    useEffect(() => {
        // GSAP Animation
        const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

        timeline
            .fromTo(
                btnRef.current,
                { x: "-100%", opacity: 0 },
                { x: "0%", opacity: 1 },
                "<0.2"
            )
            .fromTo(
                contentRef.current,
                { y: "100%", opacity: 0 },
                { y: "0%", opacity: 1 },
                "<0.2" // Delay slightly to create staggered effect
            );
    }, []);



    return (
        <div className="  relative py-10 border-b bg-black border-[#7C3AED]  min-h-screen bg-black overflow-hidden">

            <div className=" absolute right-0 top-0 w-2/3 h-full">
                <img
                    src="https://framerusercontent.com/images/DqVcgecKChw6jkoEVbhIxuYYCoA.jpg"
                    alt=""
                    className="w-full h-full object-cover object-right-bottom"
                    sizes="66vw"
                    decoding="async"
                />
            </div>


            <div
                ref={contentRef}
                className="relative z-10 min-h-screen flex flex-col justify-center px-8 lg:px-16 max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-medium max-w-3xl leading-[1.1] mb-8">
                    Your Gateway to Web3 & Blockchain Innovation.
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
                    As the digital landscape continues to evolve, our mission is to empower individuals and businesses alike with decentralized solutions that revolutionize.
                </p>

                <div
                    ref={btnRef}
                    className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="#"
                        className="inline-flex items-center px-8 py-6 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] transition-colors text-white font-medium"
                    >
                        Get Started for Free
                    </a>
                    <a
                        href="#"
                        className="bg-gray-800 inline-flex items-center px-8 py-3 rounded-full bg-black hover:bg-gray-900 transition-colors text-white font-medium border border-gray-800"
                    >
                        See All Services
                    </a>
                </div>

            </div>
        </div>
    )
}