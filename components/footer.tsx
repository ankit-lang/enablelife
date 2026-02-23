'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-lifeful-dark text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          <div>
            <h3 className="font-bold text-lg mb-4">LifeFul</h3>
            <p className="text-gray-400 text-sm">
              Live Life on Your Terms with comprehensive NDIS support services.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-lifeful-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-lifeful-green transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-lifeful-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-lifeful-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-lifeful-green transition-colors">
                  NDIS Plan Management
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-lifeful-green transition-colors">
                  Support Coordination
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-lifeful-green transition-colors">
                  Daily Living Supports
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-lifeful-green transition-colors">
                  Therapies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-gray-400 mb-2">
              <span className="font-semibold text-lifeful-green">1800 543 338</span>
            </p>
            <p className="text-sm text-gray-400">
              Monday to Friday<br />
              9am to 5pm
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-px bg-gray-700 mb-8 origin-left"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            © {currentYear} LifeFul. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-lifeful-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-lifeful-green transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
