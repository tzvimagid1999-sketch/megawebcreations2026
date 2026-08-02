'use client'

import { useState } from 'react'
import Script from 'next/script'
import Header from '@/components/Header'
import ConversionHeroNew from '@/components/conversion/ConversionHeroNew'
import ServicesSection from '@/components/conversion/ServicesSection'
import WhyChooseUs from '@/components/conversion/WhyChooseUs'
import PremiumProcessSection from '@/components/conversion/PremiumProcessSection'
import FAQSection from '@/components/conversion/FAQSection'
import FinalCTA from '@/components/conversion/FinalCTA'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'

// Organization schema for SEO
const organizationSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MegaWebCreations',
  url: 'https://www.megawebcreations.com',
  logo: 'https://www.megawebcreations.com/logo.jpg',
  description: 'We help small businesses get found on Google with SEO, local SEO, and conversion-focused websites that turn searches into customers.',
  sameAs: [
    'https://www.facebook.com/megawebcreations',
    'https://www.linkedin.com/company/megawebcreations',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    email: 'Megwebcraetions@gmail.com',
    availableLanguage: 'en',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
}

// FAQ schema for SEO
const faqSchemaData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a website cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our custom websites range from $5,000 to $25,000 depending on complexity, features, and integrations needed. Most clients spend $8,000-$12,000. We offer performance-based options where you only pay if we hit revenue targets.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most websites are live in 4-6 weeks from kickoff. That includes design, development, copywriting, and SEO optimization.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you guarantee results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We cannot guarantee specific revenue numbers—every business is different. We offer performance-based pricing options because we are confident in our results.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if we want to end our relationship?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No long-term contracts. You can end the relationship anytime. Though most clients stay 3+ years because they keep getting results.',
      },
    },
  ],
}

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchemaData) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      <main className="min-h-screen bg-background">
        <Header onContactClick={() => setShowContactModal(true)} />
        <ConversionHeroNew onCTA={() => setShowContactModal(true)} />
        <ServicesSection onCTA={() => setShowContactModal(true)} />
        <WhyChooseUs onCTA={() => setShowContactModal(true)} />
        <PremiumProcessSection onCTA={() => setShowContactModal(true)} />
        <FAQSection onCTA={() => setShowContactModal(true)} />
        <FinalCTA onCTA={() => setShowContactModal(true)} />
        <Footer onContactClick={() => setShowContactModal(true)} />
        <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
      </main>
    </>
  )
}
