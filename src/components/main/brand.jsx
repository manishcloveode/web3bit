"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Brand() {
    const contentRef = useRef(null); // Reference for content container
    const btnRef = useRef(null); // Reference for the buttons
    const sectionRef = useRef(null); // Reference for the section to observe

    useEffect(() => {
        // Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // GSAP Animation when section is in the viewport
                        const timeline = gsap.timeline({
                            defaults: { duration: 1, ease: "power3.out" },
                        });

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
                                "<0.2" // Staggered effect
                            );

                        // Disconnect observer after animation to prevent retriggering
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect(); // Cleanup observer on unmount
    }, []);

    return (
        <>
            <div
                ref={sectionRef} // Attach observer to this section
                className="p-16 py-24 border-b  bg-black border-[#7C3AED] bg-black overflow-hidden"
            >
                <div ref={contentRef} className="flex items-center justify-center">
                    <h1 className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
                        Powering tools and integrations from companies all around the world
                    </h1>
                </div>

                <div ref={btnRef} className="grid grid-cols-6 gap-12">
                    <Image
                        src="/brand1.svg"
                        alt="Example SVG"
                        width={134}
                        height={39}
                        className="opacity-50 hover:opacity-100 transition duration-300"
                    />

                    <Image
                        src="/brand2.svg"
                        alt="Example SVG"
                        width={134}
                        height={39}
                        className="opacity-50 hover:opacity-100 transition duration-300"
                    />

                    <Image
                        src="/brand3.svg"
                        alt="Example SVG"
                        width={100}
                        height={39}
                        className="opacity-50 hover:opacity-100 transition duration-300"
                    />

                    <Image
                        src="/brand4.svg"
                        alt="Example SVG"
                        width={134}
                        height={39}
                        className="opacity-50 hover:opacity-100 transition duration-300"
                    />

                    <Image
                        src="/brand5.svg"
                        alt="Example SVG"
                        width={100}
                        height={39}
                        className="opacity-50 hover:opacity-100 transition duration-300"
                    />

                    <Image
                        src="/brand6.svg"
                        alt="Example SVG"
                        width={80}
                        height={39}
                        className="opacity-50 hover:opacity-100 transition duration-300"
                    />
                </div>
            </div>
        </>
    );
}
