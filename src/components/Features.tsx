'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Target, 
  Shield, 
  BarChart3, 
  Bell, 
  Lock,
  Zap,
  Calendar
} from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Daily P/L Tracking',
    description: 'Log your daily trading results in seconds. Track wins, losses, and your net P/L over time.',
    color: 'from-accent-teal to-success',
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Set daily and weekly profit targets. Define your account size and track progress toward your goals.',
    color: 'from-success to-accent-teal',
  },
  {
    icon: Shield,
    title: 'Trading Rules',
    description: 'Define your trading rules and track if you respected them. Stay disciplined and avoid revenge trading.',
    color: 'from-accent-teal to-brand-teal',
  },
  {
    icon: BarChart3,
    title: 'Pro Analytics',
    description: 'Unlock detailed analytics including win rate trends, P/L charts, best trading sessions, and more.',
    color: 'from-brand-teal to-success',
    isPro: true,
  },
  {
    icon: Calendar,
    title: 'Session Tracking',
    description: 'Tag your trades by session (London, New York, Asian) to discover your most profitable times.',
    color: 'from-success to-accent-teal',
  },
  {
    icon: Bell,
    title: 'Daily Reminders',
    description: 'Get notified to log your trading results every day. Build the habit of consistent journaling.',
    color: 'from-accent-teal to-success',
  },
  {
    icon: Lock,
    title: 'FaceID Security',
    description: 'Keep your trading data private with biometric authentication. Your journal, your eyes only.',
    color: 'from-brand-teal to-accent-teal',
  },
  {
    icon: Zap,
    title: 'Multi-Device Sync',
    description: 'Access your journal from any device. Your data syncs seamlessly across all your iOS devices.',
    color: 'from-success to-brand-teal',
    isPro: true,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-dark" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-teal/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-success/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent-teal text-sm font-semibold tracking-wider uppercase mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to
            <br />
            <span className="gradient-text">Trade Consistently</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built by traders, for traders. VeriPip gives you the tools to track, analyze, 
            and improve your trading performance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="feature-card glass rounded-2xl p-6 relative group"
            >
              {/* Pro Badge */}
              {feature.isPro && (
                <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-gradient-to-r from-accent-teal to-success text-xs font-semibold text-black">
                  PRO
                </div>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-5`}>
                <div className="w-full h-full rounded-xl bg-surface-dark flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-accent-teal" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-accent-teal transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-10`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

