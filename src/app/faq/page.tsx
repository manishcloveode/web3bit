"use client"

import { useState } from "react"
import HeroSection from "@/components/main/Future"
import Footer from "@/components/main/footer"


interface FAQItem {
    id: number
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        id: 1,
        question: "What is your process for working with clients?",
        answer: "Marketing automation can streamline your marketing efforts by automating repetitive tasks, nurturing leads, and delivering personalized content. It enhances efficiency, improves targeting, and ultimately helps in driving better results and ROI for your marketing campaigns.",
    },
    {
        id: 2,
        question: "What are some examples of Web3 applications?",
        answer: "Remember to tailor the answer to address the specific benefits and advantages of marketing automation for your target audience and industry.",
    },
    {
        id: 3,
        question: "How does blockchain technology work?",
        answer: "Marketing automation can streamline your marketing efforts by automating repetitive tasks, nurturing leads, and delivering personalized content. It enhances efficiency, improves targeting, and ultimately helps in driving better results and ROI for your marketing campaigns.",
    },
    {
        id: 4,
        question: "What are the benefits of Web3?",
        answer: "Marketing automation can streamline your marketing efforts by automating repetitive tasks, nurturing leads, and delivering personalized content. It enhances efficiency, improves targeting, and ultimately helps in driving better results and ROI for your marketing campaigns.",
    },
    {
        id: 5,
        question: "Is Web3 the same as blockchain?",
        answer: "Marketing automation can streamline your marketing efforts by automating repetitive tasks, nurturing leads, and delivering personalized content. It enhances efficiency, improves targeting, and ultimately helps in driving better results and ROI for your marketing campaigns.",
    },
    {
        id: 6,
        question: "How can I get involved in the Web3 space?",
        answer: "Marketing automation can streamline your marketing efforts by automating repetitive tasks, nurturing leads, and delivering personalized content. It enhances efficiency, improves targeting, and ultimately helps in driving better results and ROI for your marketing campaigns.",
    },
]

export default function FAQ() {
    const [expandedId, setExpandedId] = useState<number | null>(null)

    return (

        <>

            <div className=" bg-[#0a0a1a] p-4 md:p-8">

                <h1 className="text-5xl font-bold text-white text-center mb-20 mt-20">FAQs</h1>
                <div className="mx-auto max-w-3xl space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="rounded-lg border border-gray-800 bg-black/20 p-2 shadow-xl shadow-red-900  backdrop-blur-sm"
                        >
                            <button
                                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                                className="flex w-full items-center gap-4 p-4 text-left"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/30 text-xl font-medium text-white">
                                    {faq.id}
                                </span>
                                <h2 className="text-xl font-medium text-white">{faq.question}</h2>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedId === faq.id ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <p className="px-4 pb-4 pl-[4.5rem] text-gray-400">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <HeroSection />
            <Footer />
        </>
    )
}

