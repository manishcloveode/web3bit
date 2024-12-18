import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import HeroSection from "@/components/main/Future"
import Footer from "@/components/main/footer"

interface CaseStudy {
    id: number
    title: string
    description: string
    image: string
    link: string
}

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "Unveiling Real-World Blockchain Success",
        description: "Take the first step towards embracing the transformative power of blockchain.",
        image: "/casestudies1.avif?height=400&width=300",
        link: "#"
    },
    {
        id: 2,
        title: "Journey through Success Stories",
        description: "Take the first step towards embracing the transformative power of blockchain.",
        image: "/casestudies2.avif?height=400&width=300",
        link: "#"
    },
    {
        id: 3,
        title: "Inspiring Blockchain Case Studies",
        description: "Take the first step towards embracing the transformative power of blockchain.",
        image: "/casestudies3.avif?height=400&width=300",
        link: "#"
    },
    {
        id: 4,
        title: "Success Stories Unleashed",
        description: "Take the first step towards embracing the transformative power of blockchain.",
        image: "/casestudies4.avif?height=400&width=300",
        link: "#"
    },
    {
        id: 5,
        title: "Blockchain's Success",
        description: "Take the first step towards embracing the transformative power of blockchain.",
        image: "/casestudies5.avif?height=400&width=300",
        link: "#"
    },
    {
        id: 6,
        title: "Pioneering Blockchain",
        description: "Take the first step towards embracing the transformative power of blockchain.",
        image: "/casestudies6.avif?height=400&width=300",
        link: "#"
    },
    {
        id: 7,
        title: "Navigating the Blockchain Frontier",
        description: "Take the first step towards embracing the transformative power of blockchain.",
        image: "/casestudies7.avif?height=400&width=300",
        link: "#"
    }
    ,
    {
        id: 8,
        title: "Impactful Blockchain Success Journeys",
        description: "Take the first step towards embracing the transformative power of blockchain.",
        image: "/casestudies8.avif?height=400&width=300",
        link: "#"
    }

]

export default function CaseStudies() {
    return (
        <div className="bg-[#0a0a1a] p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-6xl  text-white text-center mb-20 mt-20">Case Studies</h1>

                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-6 md:grid-cols-2">
                        {caseStudies.map((study) => (
                            <Link
                                key={study.id}
                                href={study.link}
                                className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-[#0d0d1f] p-6 transition-all hover:border-gray-700"
                            >
                                <div className="flex gap-6">
                                    <div className="relative h-[200px] w-[200px] flex-shrink-0 overflow-hidden rounded-lg">
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h3 className="mb-2 text-2xl font-semibold text-white">
                                            {study.title}
                                        </h3>
                                        <p className="mb-4 text-gray-400">
                                            {study.description}
                                        </p>
                                        <div className="flex items-center text-white">
                                            <span className="mr-2">See Case Study</span>
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <HeroSection />
                <Footer />
            </div>
        </div>

    )
}

