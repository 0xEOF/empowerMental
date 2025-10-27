// ============================================
// FILE: app/page.tsx
// ============================================
'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Modalities from '@/components/Modalities'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CalendlyModal from '@/components/CalendlyModal'

export default function Home() {
  const [showCalendly, setShowCalendly] = useState(false)

  const openCalendly = () => setShowCalendly(true)
  const closeCalendly = () => setShowCalendly(false)

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation onBookClick={openCalendly} />
      <Hero onBookClick={openCalendly} />
      <About />
      <Modalities />
      <CTA onBookClick={openCalendly} />
      <Contact />
      <Footer />
      <CalendlyModal isOpen={showCalendly} onClose={closeCalendly} />
    </main>
  )
}