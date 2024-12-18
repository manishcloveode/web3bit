
import Marquee from "@/components/ui/marquee"

import { BarChart3, Eye, Shield, Fingerprint } from 'lucide-react'
import Image from 'next/image'

const reviews = [
    {
        name: "Jonnie Hallman",
        username: "@hellomary",
        body: "Web3bit continues to amaze me everyday.",
        img: "https://framerusercontent.com/images/JBc86lSzi6gPZZ8LjNNxYn0Rk0.png",
    },
    {
        name: "Jonnie Hallman",
        username: "@helle",
        body: "Web3bit continues to amaze me everyday.",
        img: "https://framerusercontent.com/images/4qrCceisl8kSFbT97rGRZtKr77o.svg",
    },
    {
        name: "Jonnie Hallman",
        username: "@hlo",
        body: "Web3bit continues to amaze me everyday.",
        img: "https://framerusercontent.com/images/lW7SWfw7fXSvgHZF5jYC0fNOQ5I.svg",
    },
    {
        name: "Jonnie Hallman",
        username: "@hii",
        body: "Web3bit continues to amaze me everyday.",
        img: "https://framerusercontent.com/images/zU2u9zyhoQetQueATYWd1xBkDA.jpg?scale-down-to=1024",
    },
    {
        name: "Jonnie Hallman",
        username: "@hey",
        body: "Web3bit continues to amaze me everyday.",
        img: "https://framerusercontent.com/images/yPg4Bo3jOU149p2g75QES5Imebo.png",
    },
    {
        name: "Jonnie Hallman",
        username: "@heyy",
        body: "Web3bit continues to amaze me everyday.",
        img: "https://framerusercontent.com/images/VIkFjfjtrhBJOjt7heKGJKuYZgk.png",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (

        <div className="flex flex-row items-center bg-gray-900 rounded-xl py-16 px-4 gap-4">
            <img className="rounded-full mt-10" width="50" height="50" alt="" src={img} />
            <div className="flex flex-col ">
                <blockquote className=" text-xl ml-[-40px] text-gray-200 text-sm">{body}</blockquote>
                <figcaption className=" mt-2 text-lg text-gray-200 font-medium">
                    {name}
                </figcaption>
                <p className="text-sm text-gray-200 font-medium dark:text-white/40">{username}</p>
            </div>
        </div>


    );
};

export default function ValuesSection() {
    return (
        <>
            <div className="bg-black py-24 ">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl  text-white font-medium mb-16 leading-tight">
                        Upholding Values That Define Us
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="rounded-2xl ">
                            <Image
                                src="/valuesection.avif"
                                height={300}
                                width={300}
                                alt="Abstract geometric shapes"
                                className="object-cover shadow-2xl h- "
                            />
                        </div>

                        <div className=" ml-[-150px] grid grid-cols-2 gap-8">

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
            <div className="bg-black py-24 px-8">
                <div className="">
                    <h2 className="text-4xl max-w-5xl mx-auto md:text-5xl lg:text-6xl text-white font-medium mb-16 leading-tight">
                        What Our Clients <br />Have to Say
                    </h2>
                    <div className="relative flex min-h-screen  flex-col items-center justify-center overflow-hidden  md:shadow-xl">
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {firstRow.map((review) => (
                                <ReviewCard key={review.username} {...review} />
                            ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover className="[--duration:20s]">
                            {secondRow.map((review) => (
                                <ReviewCard key={review.username} {...review} />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>


        </>

    )
}

