'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "Outsmarting Online Scammers with AI",
    date: "27 Feb, 2024",
    description: "Reduce costs, scale effortlessly, and make your business come alive.",
    image: "/blog1.avif?"
  },
  {
    id: 2,
    title: "Power and Potential of Blockchain Technology",
    date: "27 Feb, 2024",
    description: "Reduce costs, scale effortlessly, and make your business come alive.",
    image: "/blog2.avif?"
  },
  {
    id: 3,
    title: "Secury's Vision for the Future of Privacy Protection",
    date: "27 Feb, 2024",
    description: "Reduce costs, scale effortlessly, and make your business come alive.",
    image: "/blog3.avif"
  }
]

export default function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)


  const circularPosts = [...blogPosts, ...blogPosts, ...blogPosts]


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)
  }

  return (
    <div className="bg-black ">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white font-medium">
            Stay Update with<br />Latest in Web3
          </h2>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-2  text-white  transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2  text-white  transition-colors"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative py-12  mx-auto overflow-hidden">
          <div
            className="flex max-w-5xl   transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex + blogPosts.length) * (100 / 3)}%)` }}
          >
            {circularPosts.map((post, index) => (
              <div
                key={`${post.id}-${index}`}
                className="w-1/3  flex-shrink-0 px-2 "
              >
                <div className="p-4 border border-gray-800 hover:border-violet-600 rounded-3xl ">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[200px] w-[265px] aspect-[4/3] object-cover rounded-xl mb-4"
                  />
                  <div className="">
                    <h3 className="text-xl text-white font-medium mb-4">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {post.date}
                    </p>
                    <p className="text-gray-400 mb-6">
                      {post.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-white hover:opacity-80 transition-opacity"
                    >
                      Read more
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}

