'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import HowItWorks from '@/components/HowItWorks'
import Results from '@/components/Results'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <main className="min-h-screen bg-dark">
      <Header onContactClick={() => setShowContactModal(true)} />
      <Hero onGetStarted={() => setShowContactModal(true)} />
      <Services onLearnMore={() => setShowContactModal(true)} />
      <WhyUs />
      <HowItWorks />
      <Results />
      <ContactForm onSuccess={() => setShowContactModal(false)} />
      <Footer onContactClick={() => setShowContactModal(true)} />
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </main>
  )
}
