import Image from "next/image"
import NumberTicker from "@/components/ui/number-ticker";
export default function SmartContractSection() {
    return (
        <div className=" bg-black py-20  ">
            <div className="max-w-5xl mx-auto">
                <div className=" grid grid-cols-2 gap-12 items-center">
                    <Image
                        src="/smartcont1.avif"
                        height={391}
                        width={340}
                        alt="3D geometric cubes with glowing edges"
                        className="shadow-2xl shadow-[#7C3AED] object-cover  w-[450px] h-[450px]"
                    />
                    <div className="space-y-6">
                        <span className="text-[#7C3AED] text-lg">Smart Contract Development</span>

                        <h2 className="text-4xl  text-white font-medium leading-tight">
                            Integration with existing blockchain networks
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                            We design and develop smart contracts tailored to your requirements, ensuring that they accurately reflect the terms of your agreement and adhere to best practices in coding and security.
                        </p>
                    </div>
                </div>

                <div className=" mt-20  grid md:grid-cols-2 mt-16 gap-12 items-center">
                    <div className="space-y-6">
                        <span className="text-[#7C3AED] text-lg">Smart Contract Development</span>
                        <h2 className="text-4xl  text-white font-medium leading-tight">
                            Integration with existing blockchain networks
                        </h2>
                        <p className="text-gray-400 text-start text-lg leading-relaxed max-w-2xl">
                            We design and develop smart contracts tailored to your requirements, ensuring that they accurately reflect the terms of your agreement and adhere to best practices in coding and security.
                        </p>
                    </div>
                    <Image
                        src="/smartcont2.avif"
                        height={391}
                        width={340}
                        alt="3D geometric cubes with glowing edges"
                        className=" shadow-2xl shadow-[#7C3AED] object-cover  w-[450px] h-[450px] flex justify-end items-end "
                    />
                </div>

                <div className=" mx-auto mt-20  grid grid-cols-2 gap-12 items-center">
                    <Image
                        src="/smartcont3.avif"
                        height={450}
                        width={450}
                        alt="3D geometric cubes with glowing edges"
                        className=" shadow-2xl shadow-[#7C3AED] object-cover  w-[450px] h-[450px]"
                    />
                    <div className="space-y-6">
                        <span className="text-[#7C3AED] text-lg">Smart Contract Development</span>

                        <h2 className="text-4xl  text-white font-medium leading-tight">
                            Integration with existing blockchain networks
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                            We design and develop smart contracts tailored to your requirements, ensuring that they accurately reflect the terms of your agreement and adhere to best practices in coding and security.
                        </p>
                    </div>
                </div>

            </div>
            <div className="mt-20 flex flex max-w-5xl mx-auto items-end justify-between">
                <div className="space-y-6">
                    <h2 className="text-3xl text-white font-medium leading-tight">
                        Nothing great is <br /> made alone
                    </h2>

                </div>

                <div className="col-span-3 grid grid-cols-1 grid-cols-3 gap-8">

                    <div className="space-y-2">
                        <div className="text-4xl md:text-5xl text-white font-medium">

                            <p className=" text-5xl font-medium tracking-tighter text-white">
                                <NumberTicker className="text-white" value={24} />+
                            </p>
                        </div>
                        <div className="text-gray-400 text-lg">
                            Daps Integrations
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="text-4xl md:text-5xl text-white font-medium">
                            <p className=" text-5xl font-medium tracking-tighter text-white">
                                <NumberTicker className="text-white" value={32.1} />m
                            </p>
                        </div>
                        <div className="text-gray-400 text-lg">
                            NFT Minted
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="text-4xl md:text-5xl text-white font-medium">
                            <p className=" text-5xl font-medium tracking-tighter text-white">
                                <NumberTicker className="text-white" value={15.2} />m
                            </p>
                        </div>
                        <div className="text-gray-400 text-lg">
                            Active Accounts
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

