import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'VeriPip - Trade Smarter Every Day',
  description: 'The ultimate trading journal app for forex and futures traders. Track your daily P/L, set goals, follow your rules, and unlock professional analytics.',
  keywords: ['trading journal', 'forex trading', 'trading app', 'pip tracking', 'trading goals', 'trading analytics'],
  authors: [{ name: 'VeriPip' }],
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'VeriPip - Trade Smarter Every Day',
    description: 'The ultimate trading journal app for forex and futures traders.',
    type: 'website',
    url: 'https://veripip.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VeriPip - Trade Smarter Every Day',
    description: 'The ultimate trading journal app for forex and futures traders.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

