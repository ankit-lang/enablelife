'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Hero2 from './hero2'
import Cards from './Card'
import ContactAndReasons from './Contact'

export function Hero() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left Column: Text Content */}
          <div className="max-w-lg">
            <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1]">
              Live Life <br />
              on <span className="text-[#8CC63F]">your</span> <br />
              terms.
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              At times, managing your NDIS plan can feel overwhelming.
              LifeFul is here to offer guidance and work through the
              process with you. You don't have to do it on your own!
            </p>
          </div>

          {/* Right Column: Images */}
          <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:pl-12 mt-12 lg:mt-0">
            {/* Main Arch Image */}
            <div className="relative z-0 w-full aspect-[4/5] lg:aspect-[3/4] rounded-t-full overflow-hidden bg-gray-200">
              <img
                src="/banner1.png"
                alt="Support worker pushing a boy in a wheelchair outdoors"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Circular Image */}
            <div className="absolute -bottom-12 -left-8 lg:-left-16 z-10 w-48 h-48 lg:w-64 lg:h-64 rounded-full border-[8px] border-white overflow-hidden bg-gray-200 shadow-sm">
              <img
                src="/banner1.png"
                alt="Three people sitting at a table discussing"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
      <Hero2/>
      <Cards/>
      <ContactAndReasons/>
    </section>
  )
}
