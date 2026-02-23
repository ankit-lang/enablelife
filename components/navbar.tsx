'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = ['Home', 'About Us', 'Services', 'Contact Us', 'Blog']

  return (
    <motion.nav
      className="fixed top-0 w-full bg-white z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-lifeful-magenta rounded-full"></div>
              <span className="font-bold text-lg">
                <span className="text-lifeful-green">Life</span>
                <span className="text-lifeful-magenta">Ful</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-lifeful-dark hover:text-lifeful-green transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop Social & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-4">
              <button className="w-8 h-8 bg-lifeful-green rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
                <Facebook size={16} className="text-white" />
              </button>
              <button className="w-8 h-8 bg-lifeful-green rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
                <Instagram size={16} className="text-white" />
              </button>
              <button className="w-8 h-8 bg-lifeful-green rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
                <Linkedin size={16} className="text-white" />
              </button>
            </div>
            <Link
              href="#"
              className="text-lifeful-dark hover:text-lifeful-green transition-colors text-sm font-medium"
            >
              Referrals
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lifeful-magenta text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow"
            >
              Join LifeFul
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-lifeful-dark">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="block text-lifeful-dark hover:text-lifeful-green transition-colors py-2"
              >
                {item}
              </Link>
            ))}
            <div className="flex gap-4 pt-4">
              <button className="w-8 h-8 bg-lifeful-green rounded-full flex items-center justify-center">
                <Facebook size={16} className="text-white" />
              </button>
              <button className="w-8 h-8 bg-lifeful-green rounded-full flex items-center justify-center">
                <Instagram size={16} className="text-white" />
              </button>
              <button className="w-8 h-8 bg-lifeful-green rounded-full flex items-center justify-center">
                <Linkedin size={16} className="text-white" />
              </button>
            </div>
            <button className="w-full bg-lifeful-magenta text-white py-2 rounded-full font-medium mt-4">
              Join LifeFul
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
