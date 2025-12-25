'use client'

import { motion } from 'framer-motion'
import { ChevronDown, TrendingUp, Target, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-surface-dark" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-success/10 rounded-full blur-[100px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-gray-300">Now Available on iOS</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Trade</span>{' '}
              <span className="gradient-text">Smarter</span>
              <br />
              <span className="text-white">Every Day</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0">
              The trading journal that helps you track your daily P/L, stick to your rules, 
              and unlock the analytics you need to become a consistent trader.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="#download" className="btn-primary flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </Link>
              <Link href="#features" className="btn-secondary flex items-center justify-center gap-2">
                Learn More
                <ChevronDown size={18} />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: TrendingUp, label: 'Track P/L', value: 'Daily' },
                { icon: Target, label: 'Set Goals', value: 'Weekly' },
                { icon: Shield, label: 'Rule-Based', value: 'Trading' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <stat.icon className="w-6 h-6 text-accent-teal mb-2 mx-auto lg:mx-0" />
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Phone Frame with App Screenshot */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-10 bg-accent-teal/20 rounded-full blur-[80px]" />
              
              {/* Phone Frame */}
              <div className="relative w-[280px] md:w-[320px] rounded-[40px] bg-gradient-to-b from-gray-800 to-gray-900 p-[8px] shadow-2xl neon-glow">
                {/* Screen with Screenshot */}
                <div className="w-full rounded-[32px] overflow-hidden">
                  <Image
                    src="/app.png"
                    alt="VeriPip App Dashboard"
                    width={320}
                    height={693}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-gray-500" />
      </motion.div>
    </section>
  )
}

