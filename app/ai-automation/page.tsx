'use client'

import { useState } from 'react'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Automation for Small Business',
  provider: {
    '@type': 'Organization',
    name: 'MegaWebCreations',
    url: 'https://www.megawebcreations.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  description:
    'AI automation systems for small businesses — capturing, qualifying, and booking leads automatically, 24/7, including chatbots, lead follow-up, and automated scheduling.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI automation for a small business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI automation uses software to handle repetitive customer-facing tasks on its own — answering inquiries, qualifying leads, following up, and booking appointments. Instead of you or your staff doing this manually, the system runs 24/7 so no lead slips through the cracks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can you actually automate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common wins include: instantly answering website and form inquiries, qualifying leads so you only spend time on real opportunities, booking appointments straight to your calendar, sending follow-up messages to leads who go quiet, and answering routine customer questions any time of day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will AI automation replace the personal touch with my customers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — it protects it. Automation handles the slow, repetitive parts (instant replies, scheduling, reminders) so you can spend your real attention on the conversations that close deals and build relationships.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we get started?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It begins with a free 15-minute discovery call. We look at where you are losing time or leads today, then map out a simple automation plan and a clear, fixed quote before any work starts.',
      },
    },
  ],
}

export default function AIAutomationPage() {
  const [showContactModal, setShowContactModal] = useState(false)
  const openModal = () => setShowContactModal(true)

  return (
    <>
      <Script
        id="ai-automation-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="ai-automation-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <span className="text-sm font-semibold text-accent">AI Automation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-lg">
              AI Automation for <span className="text-accent">Small Business</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-2xl">
              Stop losing customers to slow replies and missed follow-ups. We build AI systems that capture,
              qualify, and book your leads automatically — 24 hours a day — so your business keeps growing even
              when you are off the clock.
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

        {/* The problem */}
        <section className="py-4xl md:py-5xl bg-background">
          <div className="max-w-4xl mx-auto px-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-lg">
              Every slow reply is a customer walking to a competitor
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-md">
              Most small businesses lose leads not because they are bad at what they do, but because they can
              not respond fast enough. An inquiry comes in at 9pm. A form gets buried in a busy inbox. A
              promising lead never hears back and books someone else by morning.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              AI automation closes that gap. It responds in seconds, works while you sleep, and never forgets to
              follow up — turning inquiries you were quietly losing into booked, paying customers.
            </p>
          </div>
        </section>

        {/* What we automate */}
        <section className="py-4xl md:py-5xl bg-bg-light">
          <div className="max-w-5xl mx-auto px-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2xl text-center">
              What we automate for you
            </h2>
            <div className="grid md:grid-cols-2 gap-lg">
              {[
                {
                  title: 'Instant lead capture',
                  body: 'An AI assistant on your website and forms answers questions and captures details the moment someone reaches out — day or night.',
                },
                {
                  title: 'Lead qualification',
                  body: 'The system sorts hot leads from tire-kickers automatically, so you spend your time only on the opportunities worth your attention.',
                },
                {
                  title: 'Automated scheduling',
                  body: 'Qualified leads get a booking link and land straight on your calendar — no back-and-forth emails, no phone tag.',
                },
                {
                  title: 'Follow-up that never forgets',
                  body: 'Leads who go quiet get timely, personalized follow-ups automatically, so warm prospects do not slip away.',
                },
                {
                  title: '24/7 customer answers',
                  body: 'Routine questions about pricing, hours, and services get answered instantly, any time — even at 2am.',
                },
                {
                  title: 'Connected to your tools',
                  body: 'Everything flows into the tools you already use — your calendar, email, and CRM — so nothing lives in a silo.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-accent/10 rounded-2xl p-xl shadow-md">
                  <h3 className="text-lg font-bold text-text-primary mb-md">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-4xl md:py-5xl bg-background">
          <div className="max-w-4xl mx-auto px-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2xl">
              How it works
            </h2>
            <div className="space-y-xl">
              {[
                { n: '01', title: 'A lead reaches out', body: 'Someone fills out your form, messages your site, or asks a question. The system catches it instantly — no matter the hour.' },
                { n: '02', title: 'AI qualifies and responds', body: 'The AI answers in seconds, figures out how serious the lead is, and gathers what you need to know.' },
                { n: '03', title: 'It books the meeting', body: 'Hot leads get a booking link and schedule themselves onto your calendar. Quieter ones get automatic follow-ups.' },
                { n: '04', title: 'You focus on closing', body: 'You wake up to qualified appointments instead of a pile of missed messages — and spend your time on real customers.' },
              ].map((step) => (
                <div key={step.n} className="flex gap-lg items-start">
                  <div className="text-3xl font-bold text-accent/30 flex-shrink-0 w-14">{step.n}</div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-sm">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-4xl bg-bg-light">
          <div className="max-w-4xl mx-auto px-lg text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-md">
              Built for busy small businesses
            </h2>
            <p className="text-text-secondary mb-xl max-w-2xl mx-auto">
              If you rely on leads and appointments, automation pays for itself. It works especially well for:
            </p>
            <div className="flex flex-wrap justify-center gap-md">
              {['Home services & contractors', 'Medical & dental practices', 'Real estate', 'Law firms', 'Salons & spas', 'Restaurants', 'Fitness studios', 'Consultants & coaches'].map((biz) => (
                <span key={biz} className="px-lg py-md bg-white border border-accent/20 rounded-full text-text-primary font-medium">
                  {biz}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Honest positioning */}
        <section className="py-4xl md:py-5xl bg-background">
          <div className="max-w-4xl mx-auto px-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-lg">
              A founder-led studio, not a faceless agency
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-xl">
              MegaWebCreations is a new, founder-led studio. You work directly with the person building your
              automation — not an account manager or an offshore team. You get modern technology, honest
              communication, and clear pricing from the start.
            </p>
            <div className="grid md:grid-cols-2 gap-lg">
              {[
                { title: 'Direct access', body: 'Talk to the person doing the work. No layers, no runaround.' },
                { title: 'Clear, fixed pricing', body: 'A straightforward quote up front. No surprise invoices.' },
                { title: 'Built for your business', body: 'Automations mapped to how you actually win customers — not a generic template.' },
                { title: 'We stand behind it', body: "If it's not right, we make it right. Your results are the point." },
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

        {/* FAQ (visible, mirrors schema) */}
        <section className="py-4xl md:py-5xl bg-bg-light">
          <div className="max-w-3xl mx-auto px-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2xl text-center">
              Common questions
            </h2>
            <div className="space-y-lg">
              {faqSchema.mainEntity.map((qa) => (
                <div key={qa.name} className="bg-white border border-accent/10 rounded-2xl p-xl">
                  <h3 className="text-lg font-bold text-text-primary mb-md">{qa.name}</h3>
                  <p className="text-text-secondary leading-relaxed">{qa.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-4xl md:py-5xl bg-slate-900">
          <div className="max-w-3xl mx-auto px-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-lg">
              See what you could automate
            </h2>
            <p className="text-lg text-slate-300 mb-2xl">
              Book a free 15-minute call. We'll find where you're losing time or leads today and map out a
              simple plan to fix it — no pressure, no jargon.
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
