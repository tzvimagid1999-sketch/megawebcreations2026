'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ServicesHero from '@/components/services/ServicesHero'
import SEOService from '@/components/services/SEOService'
import WebServices from '@/components/services/WebServices'
import ServiceComparison from '@/components/services/ServiceComparison'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'

export default function ServicesPage() {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header onContactClick={() => setShowContactModal(true)} />
      <ServicesHero onCTA={() => setShowContactModal(true)} />
      <SEOService />
      <WebServices />
      <ServiceComparison />
      <Footer onContactClick={() => setShowContactModal(true)} />
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </main>
  )
}
