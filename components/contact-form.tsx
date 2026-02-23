'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

interface FormData {
  firstName: string
  lastName: string
  phone: string
  email: string
  contactMethod: string
  organisation: string
  message: string
}

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contact LifeFul today
          </h2>
          <p className="text-lifeful-gray mb-2">
            Give us a call on{' '}
            <span className="text-lifeful-green font-semibold">1800 543 338</span> or
            fill out the form below
          </p>
          <p className="text-lifeful-gray text-sm">
            Have a question? Our admin team are available Monday to Friday, from 9am to 5pm.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-6 md:p-8 shadow-lg mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-lifeful-dark mb-2">
                First Name <span className="text-lifeful-magenta">*</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                {...register('firstName', { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lifeful-green"
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs mt-1">This field is required</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-lifeful-dark mb-2">
                Last Name <span className="text-lifeful-magenta">*</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                {...register('lastName', { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lifeful-green"
              />
              {errors.lastName && (
                <span className="text-red-500 text-xs mt-1">This field is required</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-lifeful-dark mb-2">
                Phone/Mobile <span className="text-lifeful-magenta">*</span>
              </label>
              <input
                type="tel"
                placeholder="Mobile Number"
                {...register('phone', { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lifeful-green"
              />
              {errors.phone && (
                <span className="text-red-500 text-xs mt-1">This field is required</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-lifeful-dark mb-2">
                Email <span className="text-lifeful-magenta">*</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                {...register('email', { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lifeful-green"
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1">This field is required</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold text-lifeful-dark mb-2">
                How would you like to be contacted? <span className="text-lifeful-magenta">*</span>
              </label>
              <select
                {...register('contactMethod', { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lifeful-green"
              >
                <option value="">- Select -</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
                <option value="both">Both</option>
              </select>
              {errors.contactMethod && (
                <span className="text-red-500 text-xs mt-1">This field is required</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-lifeful-dark mb-2">
                Organisation name (for providers)
              </label>
              <input
                type="text"
                placeholder="Organisation name"
                {...register('organisation')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lifeful-green"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-lifeful-dark mb-2">
              What can we help with? <span className="text-lifeful-magenta">*</span>
            </label>
            <textarea
              placeholder="What can we help with?"
              rows={4}
              {...register('message', { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lifeful-green resize-none"
            />
            {errors.message && (
              <span className="text-red-500 text-xs mt-1">This field is required</span>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full md:w-auto bg-lifeful-magenta text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-shadow"
          >
            {submitted ? 'Thank You!' : 'Submit Enquiry'}
          </motion.button>
        </motion.form>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-12 origin-center"
        >
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500 font-semibold">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </motion.div>

        {/* Consultation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-lifeful-dark mb-6">
            Book a FREE 30-minute consultation.
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-lifeful-dark text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-shadow"
          >
            Contact us today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
