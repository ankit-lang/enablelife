'use client'

import { motion } from 'framer-motion'

const journeyOptions = [
  {
    id: 1,
    title: 'I have an\nNDIS plan',
    icon: '👥',
  },
  {
    id: 2,
    title: 'I am new\nto the\nNDIS',
    icon: '🌟',
  },
  {
    id: 3,
    title: 'I am a\nparent or\ncarer',
    icon: '👨‍👩‍👧',
  },
  {
    id: 4,
    title: "I'd love to\nwork with\nLifeFul",
    icon: '💼',
  },
]

export function UserJourney() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center text-lifeful-gray mb-12 font-semibold"
        >
          Please select below which option describes you:
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {journeyOptions.map((option) => (
            <motion.button
              key={option.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lifeful-green text-white rounded-3xl p-8 min-h-48 flex flex-col items-center justify-center text-center font-bold text-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{option.icon}</div>
              <span className="whitespace-pre-line leading-relaxed">
                {option.title}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
