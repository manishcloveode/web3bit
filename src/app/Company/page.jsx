import Image from "next/image"
import React from 'react'
import Link from "next/link"
import Brand from "@/components/main/brand";
import NumberTicker from "@/components/ui/number-ticker";
import HeroSection from "@/components/main/Future";
import { BarChart3, Eye, Shield, Fingerprint, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import Footer from "@/components/main/footer";
import TestimonialCarousel from "@/components/company/card"

const teamMembers = [
    {
        id: 1,
        name: "Zara Synth",
        role: "Blockchain Developer",
        image: "/team1.avif?height=400&width=400",
        bgColor: "bg-[#e0d5ff]",
        socials: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        id: 2,
        name: "Nova Cipher",
        role: "Cryptoeconomist",
        image: "/team2.avif?height=400&width=400",
        bgColor: "bg-[#d5ffdb]",
        socials: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        id: 3,
        name: "Luna Byte",
        role: "Tokenization Strategist",
        image: "/team3.avif?height=400&width=400",
        bgColor: "bg-[#f5f5f5]",
        socials: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        id: 4,
        name: "Zenith Pulse",
        role: "Web3 Product Manager",
        image: "/team4.avif?height=400&width=400",
        bgColor: "bg-white",
        socials: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
            linkedin: "#"
        }
    }
]
export default function Company() {
    return (
        <div className="bg-black px-4 py-16 md:px-8">
            <div className="mx-auto max-w-5xl text-center">
                <div className="mb-8 overflow-hidden rounded-3xl">
                    <Image
                        src="/company1.avif?height=600&width=1200"
                        alt="Team collaborating in office"
                        width={1200}
                        height={600}
                        className="w-full"
                    />
                </div>
                <h2 className="text-4xl font-medium leading-relaxed text-start text-white">
                    We value strong relationships and passion in our work, always improving
                    and taking responsibility for our promises, even if it means saying no.
                </h2>

                <div className="mt-20  ">
                    <div className=" max-w-6xl">
                        <div className="grid gap-16 md:grid-cols-2">
                            <div className="space-y-6 mt-8 text-start">
                                <h2 className="text-5xl  font-medium text-white ">
                                    Numbers speak, even if they're not everything
                                </h2>
                                <p className="text-lg text-gray-400">
                                    Their commitment to excellence and innovation sets them apart, and we
                                    look forward to continuing our partnership team's responsiveness.
                                </p>
                            </div>
                            <div className="grid gap-8 grid-cols-2">
                                <div className="relative flex flex-col items-center justify-center rounded-full border border-violet-800 p-8 text-center">

                                    <div className="text-4xl font-bold text-white"><NumberTicker className="text-6xl text-white" value={15.2} />m</div>
                                    <div className="mt-2 text-xl text-gray-400">Active Transactions</div>
                                </div>
                                <div className="relative flex flex-col items-center justify-center rounded-full border border-violet-800 p-8 text-center">
                                    <div className="text-4xl font-bold text-white"><NumberTicker className="text-6xl text-white" value={99} />%</div>
                                    <div className="mt-2 text-xl text-gray-400">Uptime Record</div>
                                </div>

                                <div className="relative flex flex-col items-center justify-center rounded-full border border-violet-800  p-8 text-center">
                                    <div className="text-4xl font-bold text-white"><NumberTicker className="text-6xl text-white" value={8.2} />m</div>
                                    <div className="mt-2 text-xl text-gray-400">Active Accounts</div>
                                </div>
                                <div className="relative flex flex-col items-center justify-center rounded-full border border-violet-800 p-8 text-center">
                                    <div className="text-4xl font-bold text-white "><NumberTicker className="text-6xl text-white" value={99} />%</div>
                                    <div className="mt-2 text-xl text-gray-400">Uptime Record</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-8 mt-20 overflow-hidden rounded-3xl">
                    <Image
                        src="/company2.avif?height=600&width=1200"
                        alt="Team collaborating in office"
                        width={1200}
                        height={600}
                        className="w-full"
                    />
                </div>

                <div className=" py-24 ">
                    <div className="container">


                        <div className="grid grid-cols-2 gap-12 items-center">
                            <h2 className="text-6xl text-start text-white  mb-16 leading-tight">
                                Upholding Values That Define Us
                            </h2>

                            <div className="grid grid-cols-2 gap-8">

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-[#1a1f2d]">
                                        <BarChart3 className="w-6 h-6 text-[#7C3AED]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl text-white font-medium mb-2">Scalable</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Reduce costs, scale effortlessly, and make your business come alive.
                                        </p>
                                    </div>
                                </div>


                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-[#1a1f2d]">
                                        <Eye className="w-6 h-6 text-[#7C3AED]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl text-white font-medium mb-2">Transparency</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Committing to transparency in operations, transactions.
                                        </p>
                                    </div>
                                </div>


                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-[#1a1f2d]">
                                        <Shield className="w-6 h-6 text-[#7C3AED]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl text-white font-medium mb-2">Security</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Reduce costs, scale effortlessly, and make your business come alive.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-xl bg-[#1a1f2d]">
                                        <Fingerprint className="w-6 h-6 text-[#7C3AED]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl text-white font-medium mb-2">Ethical Conduct</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Committing to transparency in operations, transactions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="mx-auto">
                        <h2 className="mb-16 text-5xl font-medium text-white text-start">
                            Meet The Crazy<br />Team Member
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {teamMembers.map((member) => (
                                <div key={member.id} className="group overflow-hidden rounded-2xl">
                                    <div className={`relative aspect-[4/5] ${member.bgColor}`}>
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-medium text-white text-start">{member.name}</h3>
                                        <p className="text-sm text-gray-400 text-start">{member.role}</p>
                                        <div className="mt-4 flex gap-4">
                                            <Link href={member.socials.facebook} className="text-gray-400 hover:text-white">
                                                <Facebook className="h-4 w-4" />
                                            </Link>
                                            <Link href={member.socials.instagram} className="text-gray-400 hover:text-white">
                                                <Instagram className="h-4 w-4" />
                                            </Link>
                                            <Link href={member.socials.twitter} className="text-gray-400 hover:text-white">
                                                <Twitter className="h-4 w-4" />
                                            </Link>
                                            <Link href={member.socials.linkedin} className="text-gray-400 hover:text-white">
                                                <Linkedin className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Brand />
                <TestimonialCarousel />
                <HeroSection />
                <Footer />
            </div>
        </div>
    )
}

