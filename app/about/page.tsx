'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'

export default function AboutPage() {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header onContactClick={() => setShowContactModal(true)} />

      {/* Hero Section */}
      <section className="py-4xl md:py-5xl bg-background relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-lg text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-lg leading-tight">
            Complete Business Solutions
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Since 2020, we've helped 150+ businesses generate $2.3M in combined revenue by combining high-performing websites with AI automation systems that work together to capture leads, automate customer relationships, and scale businesses.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-4xl md:py-5xl bg-bg-light">
        <div className="max-w-4xl mx-auto px-lg">
          <div className="grid md:grid-cols-2 gap-2xl items-center">
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-lg">Our Story</h2>
              <p className="text-text-secondary mb-lg leading-relaxed">
                MegaWebCreations started with a simple observation: most agencies care about billable hours, not client revenue.
              </p>
              <p className="text-text-secondary mb-lg leading-relaxed">
                We watched businesses waste months and thousands of dollars on websites that didn't convert, automation that didn't work, and SEO that didn't rank.
              </p>
              <p className="text-text-secondary leading-relaxed">
                So we decided to do it differently. We built a process focused entirely on one thing: how much money you make. Not activity. Not buzzwords. Real revenue.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-2xl border border-accent/20">
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-md">150+</div>
                <div className="text-text-secondary mb-2xl">Businesses we've helped</div>
                <div className="text-3xl font-bold text-accent mb-md">$2.3M</div>
                <div className="text-text-secondary mb-2xl">Combined revenue generated</div>
                <div className="text-3xl font-bold text-accent mb-md">98%</div>
                <div className="text-text-secondary">Client retention rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-4xl md:py-5xl bg-background">
        <div className="max-w-4xl mx-auto px-lg">
          <h2 className="text-4xl font-bold text-text-primary mb-3xl text-center">Our Approach</h2>

          <div className="grid md:grid-cols-3 gap-xl mb-3xl">
            <div className="bg-bg-light rounded-lg p-xl border border-accent/10">
              <div className="text-3xl font-bold text-accent mb-lg">1</div>
              <h3 className="text-xl font-bold text-text-primary mb-md">Integrated Solutions</h3>
              <p className="text-text-secondary">Your website captures leads. Your AI automates their journey. We build both working together as one complete system, not two separate services.</p>
            </div>
            <div className="bg-bg-light rounded-lg p-xl border border-accent/10">
              <div className="text-3xl font-bold text-accent mb-lg">2</div>
              <h3 className="text-xl font-bold text-text-primary mb-md">Revenue Focus</h3>
              <p className="text-text-secondary">Every decision is filtered through one question: "Will this make our client more money?" If not, we don't do it.</p>
            </div>
            <div className="bg-bg-light rounded-lg p-xl border border-accent/10">
              <div className="text-3xl font-bold text-accent mb-lg">3</div>
              <h3 className="text-xl font-bold text-text-primary mb-md">Direct & Transparent</h3>
              <p className="text-text-secondary">You work directly with our team. No account managers. No offshore contractors. Clear pricing, zero hidden fees.</p>
            </div>
          </div>

          <div className="bg-gradient-subtle rounded-lg p-2xl border border-accent/20 text-center">
            <p className="text-text-secondary text-lg leading-relaxed">
              We don't believe in agencies that disappear after launch. Your success is our success, so we stick around, optimize continuously, and make sure you keep winning.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-4xl md:py-5xl bg-bg-light">
        <div className="max-w-4xl mx-auto px-lg">
          <h2 className="text-4xl font-bold text-text-primary mb-3xl text-center">Why Clients Choose Us</h2>

          <div className="grid md:grid-cols-2 gap-2xl">
            <div className="flex gap-lg">
              <div className="text-3xl font-bold text-accent flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-md">Proven Results</h3>
                <p className="text-text-secondary">Our clients see an average 40% revenue increase in year one. That's not luck—it's our process.</p>
              </div>
            </div>
            <div className="flex gap-lg">
              <div className="text-3xl font-bold text-accent flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-md">Speed</h3>
                <p className="text-text-secondary">From discovery to revenue in 4-6 weeks. We move fast because we know what works.</p>
              </div>
            </div>
            <div className="flex gap-lg">
              <div className="text-3xl font-bold text-accent flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-md">Reliability</h3>
                <p className="text-text-secondary">98% client retention. People stay because we deliver. Consistently.</p>
              </div>
            </div>
            <div className="flex gap-lg">
              <div className="text-3xl font-bold text-accent flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-md">Support</h3>
                <p className="text-text-secondary">We don't hand off and disappear. Ongoing optimization and support are built in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-4xl md:py-5xl bg-background text-center">
        <div className="max-w-3xl mx-auto px-lg">
          <h2 className="text-4xl font-bold text-text-primary mb-lg">Ready to grow?</h2>
          <p className="text-xl text-text-secondary mb-2xl">Let's talk about what's possible for your business.</p>
          <button
            onClick={() => setShowContactModal(true)}
            className="px-xl py-lg bg-gradient-accent text-inverse font-bold text-lg rounded-lg hover:shadow-glow-lg transition-all duration-base transform hover:scale-105 active:scale-95 will-change-transform"
          >
            Book a Discovery Call
          </button>
        </div>
      </section>

      <Footer onContactClick={() => setShowContactModal(true)} />
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </main>
  )
}
