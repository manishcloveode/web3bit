"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from 'lucide-react'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const testimonials = [
    {
        id: 1,
        name: "Dorothy Vaughan",
        role: "Software Designer, Wise",
        image: "/client1.avif?height=50&width=50",
        quote: "The team's dedication and professionalism exceeded our expectations, and we look forward to continuing our partnership in the future."
    },
    {
        id: 2,
        name: "Jonnie Hallman",
        role: "Partner, Resvolt",
        image: "/client2.avif?height=50&width=50",
        quote: "Working with Web3bit has been a game-changer for our business. Their expertise in blockchain technology helped us streamline our operations and improve efficiency."
    },
    {
        id: 3,
        name: "Katherine Johnson",
        role: "Co-founder, Master Card",
        image: "/client3.avif?height=50&width=50",
        quote: "Choosing Web3Bit was one of the best decisions we made for our venture. It's rare to find a team that is both knowledgeable and genuinely committed to client success."
    },
    {
        id: 4,
        name: "Mary Jackson",
        role: "CTO, BlockChain Inc",
        image: "/client1.avif?height=50&width=50",
        quote: "Their innovative approach to blockchain solutions has transformed how we handle digital assets. The results speak for themselves."
    }
]

export default function TestimonialCarousel() {
    const [api, setApi] = useState(null)

    const autoplayOptions = {
        delay: 4000,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
    }

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start" },
        [Autoplay(autoplayOptions)]
    )

    return (
        <div className=" ">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 flex items-center justify-between">
                    <h2 className="text-4xl font-medium text-white md:text-5xl">
                        What Our Clients<br />Have to Say
                    </h2>
                    <div className="flex gap-4">
                        <button
                            onClick={() => emblaApi?.scrollPrev()}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-800 text-white transition-colors hover:bg-gray-800"
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={() => emblaApi?.scrollNext()}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-800 text-white transition-colors hover:bg-gray-800"
                        >
                            <ArrowRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}

                                className="flex-[0_0_33.33%] md:flex-[0_0_33.33%]"
                            >
                                <div className="mr-6">
                                    <div className="rounded-2xl border border-gray-800 hover:border-violet-600 p-8">
                                        <div className="mb-6 flex items-center gap-4">
                                            <div className="relative h-12 w-12 overflow-hidden rounded-full">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-white">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-sm text-gray-400">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-gray-400">
                                            "{testimonial.quote}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

