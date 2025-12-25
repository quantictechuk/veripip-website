'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles, Zap } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with trading journaling.',
    features: [
      'Daily P/L logging',
      'Basic goal setting',
      'Trading rules tracking',
      'Up to 30 log entries',
      'Basic statistics',
    ],
    cta: 'Download Free',
    href: '#download',
    popular: false,
  },
  {
    name: 'Pro Monthly',
    price: '$4.99',
    period: '/month',
    description: 'Unlock all features and take your trading to the next level.',
    features: [
      'Everything in Free',
      'Unlimited log entries',
      'Advanced analytics',
      'Win rate trends',
      'Session performance',
      'Multi-device sync',
      'Priority support',
    ],
    cta: 'Start 7-Day Free Trial',
    href: '#download',
    popular: false,
  },
  {
    name: 'Pro Yearly',
    price: '$24.99',
    period: '/year',
    description: 'Save 58% with annual billing. Best value for serious traders.',
    features: [
      'Everything in Pro Monthly',
      'Save $34.89/year',
      'Early access to new features',
      'Exclusive trading insights',
    ],
    cta: 'Start 7-Day Free Trial',
    href: '#download',
    popular: true,
    savings: 'Save 58%',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark via-surface-card/50 to-surface-dark" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-teal/5 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent-teal text-sm font-semibold tracking-wider uppercase mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent
            <br />
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start free and upgrade when you&apos;re ready. All Pro plans include a 7-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col h-full ${
                plan.popular
                  ? 'bg-gradient-to-b from-accent-teal/20 to-surface-card border-2 border-accent-teal/50'
                  : 'glass'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-gradient-to-r from-accent-teal to-success text-black text-sm font-semibold">
                    <Sparkles size={14} />
                    Best Value
                  </div>
                </div>
              )}

              {/* Savings Badge */}
              {plan.savings && (
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-success/20 text-success text-xs font-semibold">
                    {plan.savings}
                  </span>
                </div>
              )}

              {/* Plan Info */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 text-lg">{plan.period}</span>
              </div>

              {/* Features - grows to fill available space */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? 'bg-accent-teal' : 'bg-accent-teal/20'
                    }`}>
                      <Check size={12} className={plan.popular ? 'text-black' : 'text-accent-teal'} />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA - always at bottom */}
              <Link
                href={plan.href}
                className={`block w-full py-4 rounded-xl font-semibold text-center transition-all duration-300 mt-auto ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16 text-gray-500 text-sm"
        >
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-accent-teal" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-success" />
            <span>7-day free trial on Pro</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-success" />
            <span>Secure payments via Apple</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

