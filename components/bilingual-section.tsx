'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Check } from 'lucide-react'

const languages = [
  'Portuguese',
  'Italian',
  'Turkish',
  'Filipino',
  'Macedonian',
  'English',
]

export function BilingualSection() {
  return (
    <section className="py-12 md:py-20 bg-lifeful-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Icon/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-lg">
              <MessageCircle size={64} className="text-lifeful-green" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              We have bilingual staff!
            </h2>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {languages.map((language, index) => (
                <motion.div
                  key={language}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-base md:text-lg font-medium"
                >
                  <Check size={20} className="flex-shrink-0" />
                  <span>{language}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-white text-lifeful-green px-8 py-3 rounded-full font-bold hover:shadow-lg transition-shadow"
            >
              Contact us today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
