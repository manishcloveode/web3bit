import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
export default function HeroSection() {
    return (
        <>
            <div className="relative min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a1339] to-[#2a1f5a] overflow-hidden">


                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium mb-6 max-w-5xl mx-auto leading-[1.1]">
                        Embrace the Future of Web3 and Blockchain
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl">
                        Let's collaborate to shape a future where opportunities are limitless.
                    </p>

                    <a
                        href="#"
                        className="inline-flex items-center px-8 py-3 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] transition-colors text-white font-medium group"
                    >
                        Get This Template
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
                <div className="relative h-screen">
                    <Image
                        src="/herofooter.avif"
                        height={1000}
                        width={1000}
                        alt="Hero Image"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                </div>
            </div>

        </>
    )
}

