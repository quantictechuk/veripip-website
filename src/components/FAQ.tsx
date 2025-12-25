'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is VeriPip?',
    answer: 'VeriPip is a trading journal app designed for forex and futures traders. It helps you track your daily P/L, set trading goals, follow your rules, and analyze your performance over time.',
  },
  {
    question: 'Is VeriPip free to use?',
    answer: 'Yes! VeriPip offers a free tier with essential features including daily P/L logging, basic goal setting, and rule tracking. Pro features like advanced analytics and multi-device sync require a subscription.',
  },
  {
    question: 'How does the 7-day free trial work?',
    answer: 'When you start a Pro subscription, you get full access to all Pro features for 7 days at no cost. You can cancel anytime during the trial period and won\'t be charged. After the trial, your subscription will automatically renew unless cancelled.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely! You can cancel your Pro subscription at any time through your Apple ID settings. You\'ll continue to have access to Pro features until the end of your current billing period.',
  },
  {
    question: 'Does VeriPip work offline?',
    answer: 'Yes! VeriPip stores your data locally on your device, so you can log trades and view your data even without an internet connection. Your data will sync when you\'re back online.',
  },
  {
    question: 'Is my trading data secure?',
    answer: 'Your privacy is our priority. All data is encrypted in transit and at rest. We use Apple\'s secure authentication and optional FaceID protection to keep your trading journal private.',
  },
  {
    question: 'Will there be an Android version?',
    answer: 'We\'re currently focused on delivering the best experience for iOS users. An Android version is planned for future development. Stay tuned for updates!',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our support team at support@veripip.com. We typically respond within 24 hours. Pro subscribers get priority support.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-dark" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent-teal text-sm font-semibold tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked
            <br />
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full glass rounded-2xl p-6 text-left group hover:border-accent-teal/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent-teal transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

