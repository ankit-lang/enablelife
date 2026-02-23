'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const reasons = [
  {
    number: '01',
    title: 'Personalised',
    description: 'Each person has unique needs and goals. We tailor our services to your specific circumstances.',
  },
  {
    number: '02',
    title: 'Efficiency',
    description: 'From the moment you come on board with us to the implementation of your plan and provider payments, we value your time.',
  },
  {
    number: '03',
    title: 'NDIS Expertise',
    description: 'Our team has extensive knowledge of NDIS regulations and best practices to guide your journey.',
  },
  {
    number: '04',
    title: 'Flexibility',
    description: 'We adapt our approach to match your changing needs and preferences over time.',
  },
  {
    number: '05',
    title: 'Fraud Safety',
    description: 'Your funds and security are our top priority with comprehensive safeguards in place.',
  },
]

export function ReasonsSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Reasons List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-lifeful-magenta">5 top </span>
              <span className="text-lifeful-dark">reasons to</span>
              <br />
              <span className="text-lifeful-dark">choose LifeFul.</span>
            </h2>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-lifeful-magenta text-white font-bold text-2xl">
                      {reason.number}
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="font-bold text-lg md:text-xl text-lifeful-dark mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-lifeful-gray leading-relaxed text-sm md:text-base">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden lg:block relative h-96 lg:h-full"
          >
            <div className="sticky top-40 w-full h-96 rounded-2xl overflow-hidden shadow-lg relative">
              <Image
                src="/images/reasons.jpg"
                alt="LifeFul professional support"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
