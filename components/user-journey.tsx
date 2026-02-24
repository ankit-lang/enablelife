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
   <>
   </>
  )
}
