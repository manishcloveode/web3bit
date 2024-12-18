"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { Globe, ChartNoAxesCombined, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Card } from "@/components/ui/card"
export default function BlockchainFeatures() {

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
        <div className="relative  bg-black  text-white py-20  ">
            <div className=" grid md:grid-cols-2   max-w-5xl mx-auto items-center">
                <div
                    ref={btnRef}
                    className="rounded-3xl  position-absolute flex items-start justify-start ">
                    <Image
                        src="/devloping.avif?height=309&width=320"
                        alt="Blockchain geometric illustration"
                        width={320}
                        height={309}
                        className="object-cover shadow-2xl shadow-[#7C3AED]  rounded-3xl"
                    />
                </div>
                <div
                    ref={contentRef}
                    className='height-full ml-[-120px] w-full'>
                    <h2 className="text-3xl font-medium leading-tight">
                        Developing Blockchain Solutions for Your Needs
                    </h2>

                    <div className="grid md:grid-cols-2 mt-8 grid gap-8">

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-[#1a1f2d]">
                                    <ChartNoAxesCombined className="w-6 h-6 text-[#7C3AED]" />
                                </div>
                                <h3 className="text-xl font-medium">Scalable</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                The scalable blockchain market refers to the segment of the blockchain industry that focuses on developing.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-[#1a1f2d]">
                                    <Globe className="w-6 h-6 text-[#7C3AED]" />
                                </div>
                                <h3 className="text-xl font-medium">Scalable</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                Sharding involves partitioning the blockchain network into smaller groups called shards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-5xl mx-auto mt-20 ">
                <div
                    className="flex  items-center justify-center">
                    <h1 className="text-5xl  text-white  mb-6 leading-relaxed">
                        Most secured Blockchain Solutions.
                    </h1>
                </div>

                <div
                    className="flex items-center justify-center">
                    <p className="text-lg  text-gray-400 max-w-2xl mb-6 leading-relaxed">
                        Reduce costs, scale effortlessly, and make your business come alive. Hundreds of companies use Cosmos SDK to build fast.
                    </p>
                </div>


                <div className="grid md:grid-cols-2 gap-4 p-10">

                    <Card className="bg-black h-[522px] w-[423px] hover:border-[#7C3AED] p-8  rounded-3xl">
                        <div className="space-y-4">
                            <h2 className="text-2xl text-white md:text-4xl font-medium leading-tight">
                                Impactful Blockchain Success Journeys
                            </h2>
                            <p className="text-gray-400">
                                Take the first step towards embracing the transformative power of...
                            </p>
                        </div>

                        <a
                            href="#"
                            className="inline-flex items-center mt-8 text-white hover:opacity-80 transition-opacity"
                        >
                            See Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </a>

                        <div className="mt-6 overflow-hidden ">
                            <Image
                                src="/solution1.avif?height=300&width=500"
                                height={300}
                                width={500}
                                alt="Hand holding golden Bitcoin"
                                className="w-full h-[200px] object-cover mt-4 rounded-lg "
                            />
                        </div>
                    </Card>


                    <Card className="bg-black h-[522px] w-[423px] hover:border-[#7C3AED]  p-8 rounded-3xl">
                        <div className="space-y-4">
                            <h2 className="text-2xl text-white md:text-4xl font-medium leading-tight">
                                Navigating the Blockchain Frontier
                            </h2>
                            <p className="text-gray-400">
                                Take the first step towards embracing the transformative power of...
                            </p>
                        </div>
                        <a
                            href="#"
                            className="inline-flex mt-8 items-center text-white hover:opacity-80 transition-opacity"
                        >
                            See Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                        <div className="mt-6 rounded-lg overflow-hidden">
                            <Image
                                src="/solution2.avif?height=300&width=500"
                                height={300}
                                width={500}
                                alt="Abstract blue blockchain grid"
                                className="w-full h-[200px] object-cover mt-4 rounded-lg "
                            />
                        </div>
                    </Card>
                </div>
            </div>

        </div>
    )
}

