import React from 'react';
import { motion } from 'framer-motion';
import { Menu, ArrowUpRight } from 'lucide-react';
 
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
 
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
 
export default function Hero2() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 mt-6 pb-20">
      {/* Navigation */}
     
 
      <main className="px-4 max-w-4xl mx-auto mt-6">
        {/* Hero Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-3xl font-bold mb-4">
            <span className="text-[#632a7e]">NDIS</span> Services & Supports.
          </h1>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            LifeFul is here to provide you with the knowledge, expertise, and personalised experience to guide you through your NDIS journey and arm you with the tools you need to Live Life On Your Terms.
          </p>
          <p className="font-semibold text-sm mb-4">Please select below which option describes you:</p>
        </motion.div>
 
        {/* Option Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {[
            { title: "I have an NDIS plan", img: "/banner1.png" },
            { title: "I am new to the NDIS", img: "/banner1.png" },
            { title: "I am a parent or carer", img: "/banner1.png" },
            { title: "I'd love to work with LifeFul", img: "/banner1.png" }
          ].map((card, idx) => (
            <motion.button
              key={idx}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#99c82c] rounded-2xl p-3 flex flex-col items-center justify-between aspect-square shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-32 h-32  rounded-xl overflow-hidden mb-2 bg-white/20">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <span className="text-white text-xs font-bold text-center leading-tight">
                {card.title}
              </span>
            </motion.button>
          ))}
        </motion.div>
 
        {/* Middle Section */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-1">
            <span className="text-gray-800">NDIS Services to help you</span>
            <br />
            <span className="text-[#8dbf28]">Live Life on Your Terms.</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            LifeFul offers a comprehensive range of services including NDIS Plan Management, Support Coordination, Daily Living Supports, Supported Independent Living, and Behaviour Therapies. Operating across New South Wales, Victoria, Queensland and Western Australia, we empower you to take control of your journey, make informed decisions, and pave the way towards achieving your goals. At LifeFul, we firmly believe in the principles of choice and control, placing you in the driver's seat to shape your own path with confidence.
          </p>
        </motion.div>
 
        {/* Services Circular Grid */}
   
 
      </main>
    </div>
  );
}