'use client'

import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'NDIS Plan\nManagement',
  },
  {
    id: 2,
    title: 'Support\nCoordination\nServices',
  },
  {
    id: 3,
    title: 'Daily And\nCommunity\nLiving\nSupports',
  },
  {
    id: 4,
    title: 'Therapies',
  },
  {
    id: 5,
    title: 'Support\nIndependent\nLiving',
  },
]

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="text-lifeful-dark">NDIS Services to help you</span>
            <br />
            <span className="text-lifeful-green">Live Life on Your Terms.</span>
          </h2>
          <p className="text-lifeful-gray max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            LifeFul offers a comprehensive range of services including NDIS Plan Management, Support Coordination, Daily Living Supports, Supported Independent Living, and Behaviour Therapies. Operating across New South Wales, Victoria, Queensland and Western Australia, we empower you to take control of your journey.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -20, scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-lifeful-green to-lifeful-green/50 shadow-lg flex items-center justify-center mb-4 cursor-pointer hover:shadow-xl transition-all">
                <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center">
                  <span className="text-center font-bold text-sm md:text-base text-lifeful-dark whitespace-pre-line leading-snug">
                    {service.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
