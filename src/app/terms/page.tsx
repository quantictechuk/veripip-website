import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - VeriPip',
  description: 'VeriPip Terms of Service - Read our terms and conditions for using the app.',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-surface-dark">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="VeriPip"
              width={120}
              height={35}
              className="h-9 w-auto"
            />
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: December 2024</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              By downloading, installing, or using VeriPip (&quot;the App&quot;), you agree to be bound 
              by these Terms of Service. If you do not agree to these terms, do not use the App.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="text-gray-400 leading-relaxed">
              VeriPip is a trading journal application designed to help traders track their 
              daily performance, set goals, follow trading rules, and analyze their trading 
              patterns. The App is intended for informational and personal use only.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              To use certain features of the App, you must create an account. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Subscriptions and Payments</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              VeriPip offers both free and paid subscription tiers:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li><strong className="text-white">Free Tier:</strong> Basic features with limited functionality</li>
              <li><strong className="text-white">Pro Monthly:</strong> $4.99/month with 7-day free trial</li>
              <li><strong className="text-white">Pro Yearly:</strong> $24.99/year with 7-day free trial</li>
            </ul>
            <p className="text-gray-400 leading-relaxed mb-4">
              Payment will be charged to your Apple ID account at confirmation of purchase. 
              Subscriptions automatically renew unless auto-renew is turned off at least 24 
              hours before the end of the current period.
            </p>
            <p className="text-gray-400 leading-relaxed">
              You can manage or cancel your subscription in your Apple ID account settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the App&apos;s functionality</li>
              <li>Reverse engineer or attempt to extract the source code</li>
              <li>Share your account with others</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. Financial Disclaimer</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              <strong className="text-warning">Important:</strong> VeriPip is a journaling tool only. 
              It does not provide:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>Financial advice or recommendations</li>
              <li>Trading signals or market predictions</li>
              <li>Investment guidance</li>
            </ul>
            <p className="text-gray-400 leading-relaxed">
              Trading forex, futures, and other financial instruments carries significant risk. 
              You are solely responsible for your trading decisions. Past performance recorded 
              in the App does not guarantee future results.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
            <p className="text-gray-400 leading-relaxed">
              The App, including its design, features, and content, is owned by VeriPip and 
              protected by intellectual property laws. You may not copy, modify, or distribute 
              any part of the App without our written permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              To the maximum extent permitted by law, VeriPip shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, including 
              without limitation, loss of profits, data, or trading losses arising from your 
              use of the App.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">9. Account Termination</h2>
            <p className="text-gray-400 leading-relaxed">
              We reserve the right to terminate or suspend your account at any time for 
              violations of these terms. You may delete your account at any time through 
              the App settings, which will result in the deletion of your data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              We may modify these terms at any time. Continued use of the App after changes 
              constitutes acceptance of the new terms. We will notify you of significant 
              changes through the App or via email.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2>
            <p className="text-gray-400 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of 
              the jurisdiction in which VeriPip operates, without regard to its conflict of 
              law provisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
            <p className="text-gray-400 leading-relaxed">
              For questions about these Terms of Service, please contact us at:{' '}
              <a href="mailto:support@veripip.com" className="text-accent-teal hover:underline">
                support@veripip.com
              </a>
            </p>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <Link 
            href="/" 
            className="text-accent-teal hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

