"use client"

import { Facebook, Instagram, Linkedin, Globe } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/main/Future"
import Footer from "@/components/main/footer"

export default function Contact() {


    return (
        <>
            <div className=" bg-[#0a0a1a] p-4 md:p-8">

                <h1 className="text-6xl  text-white text-center mb-20 mt-20">Contact</h1>
                <div className="items-center mx-auto max-w-3xl space-y-4">
                    <div className="mb-16 grid gap-8 md:grid-cols-3">
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1a2e]">
                                <Globe className="h-6 w-6 text-[#7c3aed]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-white">Email Address</h3>
                                <p className="text-gray-400">chat@web3bit.co</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1a2e]">
                                <Globe className="h-6 w-6 text-[#7c3aed]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-white">Phone</h3>
                                <p className="text-gray-400">+21 569 3698 369</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a1a2e]">
                                <Globe className="h-6 w-6 text-[#7c3aed]" />
                            </div>
                            <div>
                                <h3 className="container text-lg font-medium text-white">Social Media</h3>
                                <div className="flex gap-4 text-gray-400">
                                    <Facebook className="h-5 w-5 cursor-pointer hover:text-white" />
                                    <Instagram className="h-5 w-5 cursor-pointer hover:text-white" />
                                    <Linkedin className="h-5 w-5 cursor-pointer hover:text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-black p-8">
                        <form className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-white">Full Name</label>
                                    <Input
                                        placeholder="John Doe"
                                        className="h-12 border-0 bg-gray-900 text-white placeholder:text-gray-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-white">Mobile Number</label>
                                    <Input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="h-12 border-0 bg-gray-900 text-white placeholder:text-gray-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-white">Email Address</label>
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="h-12 border-0 bg-gray-900 text-white placeholder:text-gray-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-white">Message</label>
                                <Textarea
                                    placeholder="Type your messages"
                                    className=" border-0 bg-gray-900 text-white placeholder:text-gray-500"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="h-12 rounded-full bg-[#7c3aed] px-8 text-white hover:bg-[#6d31e0]"
                            >
                                Send a message
                            </Button>
                        </form>
                    </div>

                </div>
                <HeroSection />
                <Footer />

            </div>

        </>
    )
}

