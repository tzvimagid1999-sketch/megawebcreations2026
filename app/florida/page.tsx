'use client'

import { useState } from 'react'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'

const floridaServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Design and AI Automation',
  provider: {
    '@type': 'Organization',
    name: 'MegaWebCreations',
    url: 'https://www.megawebcreations.com',
  },
  areaServed: {
    '@type': 'State',
    name: 'Florida',
  },
  description:
    'Conversion-focused websites and AI automation systems for Florida small businesses — capturing, qualifying, and booking leads 24/7.',
}

const floridaFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you work with businesses across all of Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We work remotely with small businesses throughout Florida — Miami, Orlando, Tampa, Jacksonville, Fort Lauderdale, and everywhere in between. Everything is handled over video calls, email, and shared project tools, so location is never a barrier.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI automation help a Florida small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Florida businesses often deal with seasonal demand and high competition. Our AI systems answer inquiries in seconds, qualify leads, and book appointments automatically — 24/7 — so you never lose a customer to a slow response, even during your busiest season.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it cost to get started?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It starts with a free 15-minute discovery call. We scope the project to your goals and budget and give you a clear, fixed quote before any work begins — no surprise invoices.',
      },
    },
  ],
}

export default function FloridaPage() {
  const [showContactModal, setShowContactModal] = useState(false)
  const openModal = () => setShowContactModal(true)

  return (
    <>
      <Script
        id="florida-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(floridaServiceSchema) }}
      />
      <Script
        id="florida-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(floridaFaqSchema) }}
      />

      <main className="min-h-screen bg-background">
        <Header onContactClick={openModal} />

        {/* Hero */}
        <section className="bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-lg py-5xl md:py-6xl">
            <div className="inline-block bg-accent/10 border border-accent/30 rounded-full px-md py-sm mb-lg">
              <span className="text-sm font-semibold text-accent">Serving small businesses across Florida</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-lg">
              Web Design & AI Automation for{' '}
              <span className="text-accent">Florida</span> Small Businesses
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-2xl">
              A modern, conversion-focused website paired with AI that captures, qualifies, and books
              your leads 24/7 — so you never lose a customer to a slow reply, even at your busiest.
            </p>
            <div className="flex flex-col sm:flex-row gap-lg">
              <button
                onClick={openModal}
                className="px-xl py-lg bg-gradient-accent text-white font-bold text-lg rounded-lg hover:shadow-glow-lg transition-all duration-base transform hover:scale-105 active:scale-95"
              >
                Get Your Free Strategy Call
              </button>
            </div>
          </div>
        </section>

        {/* Local context — makes the page genuinely Florida-specific */}
        <section className="py-4xl md:py-5xl bg-background">
          <div className="max-w-4xl mx-auto px-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-lg">
              Built for how Florida businesses actually win customers
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-xl">
              Florida runs on small businesses — home services and contractors, restaurants and hospitality,
              real estate, medical and dental practices, and the tourism economy that never really slows down.
              What they share is intense competition and demand that spikes with the season. When a customer
              reaches out, the business that answers first usually wins the job. That is exactly the gap we close.
            </p>

            <div className="grid md:grid-cols-3 gap-lg">
              {[
                {
                  title: 'Answer leads in seconds',
                  body: 'Your AI assistant responds instantly, day or night, so a late-night inquiry becomes a booked job instead of a missed opportunity.',
                },
                {
                  title: 'Handle the busy season',
                  body: 'When demand spikes, automation keeps qualifying and scheduling customers without you hiring or scrambling.',
                },
                {
                  title: 'Stand out locally',
                  body: 'A fast, modern website plus local SEO helps you get found by Florida customers actively searching for what you do.',
                },
              ].map((card) => (
                <div key={card.title} className="bg-white border border-accent/10 rounded-2xl p-xl shadow-md">
                  <h3 className="text-lg font-bold text-text-primary mb-md">{card.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas served */}
        <section className="py-4xl bg-bg-light">
          <div className="max-w-4xl mx-auto px-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-md">
              Serving businesses across the state
            </h2>
            <p className="text-text-secondary mb-xl max-w-2xl mx-auto">
              We work remotely with businesses everywhere in Florida — no office visit required. A few of the
              areas we serve:
            </p>
            <div className="flex flex-wrap justify-center gap-md">
              {['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale', 'St. Petersburg', 'Naples', 'Sarasota', 'West Palm Beach', 'Tallahassee'].map((city) => (
                <span key={city} className="px-lg py-md bg-white border border-accent/20 rounded-full text-text-primary font-medium">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Honest new-studio positioning — no invented track record */}
        <section className="py-4xl md:py-5xl bg-background">
          <div className="max-w-4xl mx-auto px-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-lg">
              A founder-led studio, not a faceless agency
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-xl">
              MegaWebCreations is a new, founder-led studio — which means you work directly with the person
              building your project, not an account manager or an offshore team. You get modern technology,
              honest communication, and someone genuinely invested in your results.
            </p>
            <div className="grid md:grid-cols-2 gap-lg">
              {[
                { title: 'Direct access', body: 'Talk to the person doing the work. No layers, no runaround.' },
                { title: 'Clear, fixed pricing', body: 'You get a straightforward quote up front. No surprise invoices.' },
                { title: 'Modern, fast builds', body: 'Sites built on current technology — fast, mobile-first, and SEO-ready.' },
                { title: 'We stand behind it', body: "If it's not right, we make it right. Your satisfaction is the point." },
              ].map((item) => (
                <div key={item.title} className="flex gap-md items-start">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary">{item.title}</h3>
                    <p className="text-text-secondary">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-4xl md:py-5xl bg-slate-900">
          <div className="max-w-3xl mx-auto px-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-lg">
              Ready to capture more Florida customers?
            </h2>
            <p className="text-lg text-slate-300 mb-2xl">
              Book a free 15-minute call. We'll map out exactly how a new site plus automation could work for
              your business — no pressure, no jargon.
            </p>
            <button
              onClick={openModal}
              className="px-xl py-lg bg-gradient-accent text-white font-bold text-lg rounded-lg hover:shadow-glow-lg transition-all duration-base transform hover:scale-105 active:scale-95"
            >
              Get Your Free Strategy Call
            </button>
          </div>
        </section>

        <Footer onContactClick={openModal} />
        <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
      </main>
    </>
  )
}
