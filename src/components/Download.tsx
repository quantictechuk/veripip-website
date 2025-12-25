'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Download() {
  return (
    <section id="download" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-brand-deep-blue/30 to-surface-dark" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-teal/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-success/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 rounded-3xl bg-brand-deep-blue flex items-center justify-center neon-glow overflow-hidden">
              <Image
                src="/icon.png"
                alt="VeriPip Icon"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Start Trading{' '}
            <span className="gradient-text">Smarter</span>
            <br />
            Today
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Download VeriPip and join thousands of traders who are building 
            better habits and improving their trading performance.
          </p>

          {/* App Store Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="https://apps.apple.com/app/veripip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-black font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div className="text-xl font-bold -mt-1">App Store</div>
              </div>
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <p className="mt-8 text-gray-500 text-sm">
            Free to download • Pro features require subscription
          </p>
        </motion.div>
      </div>
    </section>
  )
}

