'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="pt-20 pb-12 md:pt-32 md:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-lifeful-dark">Live Life</span>
              <br />
              <span className="text-lifeful-green">on your</span>
              <br />
              <span className="text-lifeful-dark">terms.</span>
            </h1>
            <p className="text-lifeful-gray text-lg md:text-xl leading-relaxed">
              At times, managing your NDIS plan can feel overwhelming. LifeFul is here to offer guidance and work through the process with you. You don't have to do it on your own!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lifeful-magenta text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow w-fit"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-96 md:h-full"
          >
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hero-1.jpg"
                  alt="Person enjoying independence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hero-2.jpg"
                  alt="Person with disability in supportive environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg md:col-span-2">
                <Image
                  src="/images/hero-1.jpg"
                  alt="Support and accessibility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
