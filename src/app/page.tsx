import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-dark">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Download />
      <Footer />
    </main>
  )
}

