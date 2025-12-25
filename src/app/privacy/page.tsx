import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - VeriPip',
  description: 'VeriPip Privacy Policy - Learn how we collect, use, and protect your data.',
}

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: December 2024</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              VeriPip (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting 
              your personal data. This privacy policy explains how we collect, use, and safeguard your 
              information when you use our mobile application.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We collect information that you provide directly to us:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
              <li>Account information (email address, name)</li>
              <li>Trading journal entries (daily P/L, notes, session tags)</li>
              <li>Trading goals and rules you set</li>
              <li>App preferences and settings</li>
            </ul>
            <p className="text-gray-400 leading-relaxed">
              We also automatically collect certain technical information when you use the app, 
              including device type, operating system, and app usage analytics.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Provide and maintain the VeriPip app</li>
              <li>Sync your data across devices (Pro feature)</li>
              <li>Process your subscription payments</li>
              <li>Send you notifications (if enabled)</li>
              <li>Improve and optimize the app</li>
              <li>Respond to your support requests</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Storage and Security</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Your trading data is stored securely using industry-standard encryption. We use 
              Supabase for cloud storage with row-level security policies to ensure only you 
              can access your data.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Local data on your device is protected by iOS security features, and you can 
              enable FaceID protection for additional security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li><strong className="text-white">Supabase:</strong> For authentication and data storage</li>
              <li><strong className="text-white">RevenueCat:</strong> For subscription management</li>
              <li><strong className="text-white">Apple:</strong> For Sign In with Apple and payment processing</li>
              <li><strong className="text-white">Google:</strong> For Google Sign-In (optional)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Access your personal data</li>
              <li>Request deletion of your account and data</li>
              <li>Export your trading data</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
            <p className="text-gray-400 leading-relaxed">
              We retain your data for as long as your account is active. If you delete your 
              account, we will delete your personal data within 30 days, except where we are 
              required to retain it for legal purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-gray-400 leading-relaxed">
              VeriPip is not intended for use by children under 18. We do not knowingly collect 
              personal information from children.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-400 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any 
              changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions about this privacy policy, please contact us at:{' '}
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

