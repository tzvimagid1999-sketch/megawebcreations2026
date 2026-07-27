'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ConversionHero from '@/components/conversion/ConversionHero'
import SocialProof from '@/components/conversion/SocialProof'
import ServicesSection from '@/components/conversion/ServicesSection'
import WhyChooseUs from '@/components/conversion/WhyChooseUs'
import ProcessSection from '@/components/conversion/ProcessSection'
import FeaturedProjects from '@/components/conversion/FeaturedProjects'
import TestimonialsSection from '@/components/conversion/TestimonialsSection'
import FAQSection from '@/components/conversion/FAQSection'
import FinalCTA from '@/components/conversion/FinalCTA'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header onContactClick={() => setShowContactModal(true)} />
      <ConversionHero onCTA={() => setShowContactModal(true)} />
      <SocialProof />
      <ServicesSection onCTA={() => setShowContactModal(true)} />
      <WhyChooseUs />
      <ProcessSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA onCTA={() => setShowContactModal(true)} />
      <Footer onContactClick={() => setShowContactModal(true)} />
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </main>
  )
}
