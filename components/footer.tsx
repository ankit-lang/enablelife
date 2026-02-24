'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowUpRight, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
 
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
     <footer className="bg-[#1a1c23] text-gray-300 font-sans pt-16 pb-8 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section: Brand & Description */}
        <div className="flex flex-col items-center mb-10 text-center">
          {/* Logo Placeholder - Styled like LifeFul but with Enable Life text */}
          <h2 className="text-3xl font-bold mb-2 tracking-wide">
            <span className="text-white">ENABLE </span>
            <span className="text-[#ee1585]">LIFE</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-4xl text-left sm:text-center mt-4 leading-relaxed">
            Enable Life: Where transformation, compassion, and empowerment converge to redefine possibilities and elevate the human experience.
          </p>
        </div>
 
        {/* Middle Section: Links & Contact (3 Columns layout from LifeFul) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
          {/* Column 1: Quick Links Part 1 */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors flex items-center justify-between group">About Us <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center justify-between group">Blog <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center justify-between group">Contact <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>
 
          {/* Column 2: Quick Links Part 2 */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 invisible hidden sm:block">More Links</h3>
            <ul className="space-y-3 text-sm text-gray-400 sm:mt-[3.25rem]">
              <li><a href="#" className="hover:text-white transition-colors flex items-center justify-between group">Work With us <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center justify-between group">Referral <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center justify-between group">Privacy Policy <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>
          </div>
 
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <a href="tel:0370204849" className="hover:text-white transition-colors">03 7020 4849</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <a href="mailto:support@enablelife.com.au" className="hover:text-white transition-colors">support@enablelife.com.au</a>
              </li>
              <li className="flex items-center gap-4 mt-6 pt-2">
                {/* Social Icons mapped from Enable Life */}
                <a href="#" className="bg-white text-[#1a1c23] p-1.5 rounded-full hover:bg-gray-200 transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="bg-white text-[#1a1c23] p-1.5 rounded-full hover:bg-gray-200 transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="bg-white text-[#1a1c23] p-1.5 rounded-full hover:bg-gray-200 transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="bg-white text-[#1a1c23] p-1.5 rounded-full hover:bg-gray-200 transition-colors"><Linkedin className="w-4 h-4" /></a>
              </li>
            </ul>
          </div>
        </div>
 
        {/* Locations Header with horizontal line */}
        <div className="flex items-center gap-6 mb-10">
          <h3 className="text-2xl font-bold text-white whitespace-nowrap">Locations</h3>
          <div className="h-[1px] w-full bg-gray-700/60"></div>
        </div>
 
        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
          
          {/* Location 1: Victoria */}
          <div className="flex items-start gap-4">
            <MapPin className="w-7 h-7 text-white shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <h4 className="text-white text-lg font-bold">Victoria</h4>
              <p className="text-xs text-gray-500 mb-4">(Mobile services , servicing areas across VIC)</p>
              
              <div className="mb-4">
                <h5 className="text-white font-semibold text-sm mb-1">Melbourne Office</h5>
                <p className="text-sm text-gray-400 leading-relaxed">
                  PO Box 8298 Tarneit VIC 3029<br/>
                  E: <a href="mailto:support@enablelife.com.au" className="hover:text-white">support@enablelife.com.au</a><br/>
                  P: <a href="tel:0370204849" className="hover:text-white">03 7020 4849</a>
                </p>
              </div>
            </div>
          </div>
 
          {/* Location 2: New South Wales */}
          <div className="flex items-start gap-4">
            <MapPin className="w-7 h-7 text-white shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <h4 className="text-white text-lg font-bold">New South Wales</h4>
              <p className="text-xs text-gray-500 mb-4">(Mobile services , servicing areas across NSW)</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                E: <a href="mailto:support@enablelife.com.au" className="hover:text-white">support@enablelife.com.au</a><br/>
                P: <a href="tel:0370204849" className="hover:text-white">03 7020 4849</a>
              </p>
            </div>
          </div>
 
          {/* Location 3: Western Australia */}
          <div className="flex items-start gap-4">
            <MapPin className="w-7 h-7 text-white shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <h4 className="text-white text-lg font-bold">Western Australia</h4>
              <p className="text-xs text-gray-500 mb-4">(Mobile services , servicing areas across WA)</p>
              <p className="text-sm text-gray-400 leading-relaxed">
                E: <a href="mailto:support@enablelife.com.au" className="hover:text-white">support@enablelife.com.au</a><br/>
                P: <a href="tel:0370204849" className="hover:text-white">03 7020 4849</a>
              </p>
            </div>
          </div>
 
        </div>
 
        {/* Bottom Acknowledgment & Flags */}
        <div className="flex flex-col items-center pt-8 border-t border-gray-800">
          {/* CSS-based Flag Placeholders */}
          <div className="flex gap-4 mb-6">
            {/* Aboriginal Flag Representation */}
            <div className="w-16 h-10 flex flex-col relative overflow-hidden">
               <div className="h-1/2 w-full bg-black"></div>
               <div className="h-1/2 w-full bg-[#cc0000]"></div>
               <div className="absolute inset-0 m-auto w-5 h-5 rounded-full bg-[#ffcc00]"></div>
            </div>
            {/* Torres Strait Islander Flag Representation */}
            <div className="w-16 h-10 flex flex-col relative overflow-hidden bg-[#009933]">
               <div className="absolute top-1/2 left-0 right-0 h-4 bg-[#0000cc] -translate-y-1/2 border-y border-black"></div>
               <div className="absolute inset-0 m-auto w-4 h-4 flex items-center justify-center text-white z-10 text-[10px]">★</div>
            </div>
          </div>
 
          <p className="text-xs text-gray-500 text-center max-w-4xl leading-relaxed">
            We acknowledge the traditional custodians of the land we live and work and pay our respects to the Elders of the past, present and future.
          </p>
        </div>
        
      </div>
    </footer>
  )
}
