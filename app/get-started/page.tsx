'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'

const fieldBase =
  'w-full px-lg py-md bg-bg-light border border-accent/20 rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent focus:outline-none transition text-base'

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder = '',
  hint = '',
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  hint?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-text-primary font-semibold mb-sm text-sm">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {hint && <p className="text-text-tertiary text-xs mb-sm">{hint}</p>}
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className={fieldBase} />
    </div>
  )
}

function TextArea({
  label,
  name,
  required = false,
  placeholder = '',
  hint = '',
}: {
  label: string
  name: string
  required?: boolean
  placeholder?: string
  hint?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-text-primary font-semibold mb-sm text-sm">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {hint && <p className="text-text-tertiary text-xs mb-sm">{hint}</p>}
      <textarea id={name} name={name} required={required} placeholder={placeholder} rows={3} className={fieldBase} />
    </div>
  )
}

function SectionTitle({ n, title, sub }: { n: string; title: string; sub: string }) {
  return (
    <div className="border-b border-accent/10 pb-md">
      <div className="flex items-baseline gap-md">
        <span className="text-accent font-bold text-sm">{n}</span>
        <h2 className="text-xl font-bold text-text-primary">{title}</h2>
      </div>
      <p className="text-text-secondary text-sm mt-xs">{sub}</p>
    </div>
  )
}

export default function GetStartedPage() {
  const [showContactModal, setShowContactModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(false)

    const data = Object.fromEntries(new FormData(e.currentTarget).entries())

    try {
      const res = await fetch('https://formspree.io/f/xqerwvwp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'client-intake' }),
      })
      if (res.ok) {
        setSubmitted(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header onContactClick={() => setShowContactModal(true)} />

      {/* Hero */}
      <section className="bg-slate-900 py-4xl md:py-5xl">
        <div className="max-w-3xl mx-auto px-lg text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-lg">Let&apos;s get started</h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto">
            Answer a few questions about your business and goals. It takes about 5 minutes and helps us build a
            plan tailored to you — no generic templates.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-4xl md:py-5xl bg-background">
        <div className="max-w-2xl mx-auto px-lg">
          {submitted ? (
            <div className="text-center bg-bg-light border border-accent/20 rounded-2xl p-2xl">
              <div className="text-5xl mb-lg">✓</div>
              <h2 className="text-2xl font-bold text-text-primary mb-md">Thank you!</h2>
              <p className="text-text-secondary mb-xl">
                We&apos;ve got your answers. We&apos;ll review everything and reach out within 24 hours with next
                steps and a tailored plan.
              </p>
              <a
                href="/"
                className="inline-block px-xl py-lg bg-gradient-accent text-white font-bold rounded-lg hover:shadow-glow-lg transition-all duration-base"
              >
                Back to Home
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2xl">
              {/* 0. Contact */}
              <div className="space-y-lg">
                <SectionTitle n="01" title="Your contact info" sub="So we know how to reach you." />
                <Field label="Your name" name="contact_name" required placeholder="Jane Smith" />
                <Field label="Email" name="contact_email" type="email" required placeholder="you@company.com" />
                <Field label="Phone (optional)" name="contact_phone" type="tel" placeholder="(555) 123-4567" />
              </div>

              {/* 1. Business */}
              <div className="space-y-lg">
                <SectionTitle n="02" title="About your business" sub="The basics." />
                <Field label="Business name" name="business_name" required placeholder="Acme Co." />
                <Field label="Website address" name="website" required placeholder="https://yourbusiness.com" />
                <TextArea label="In a sentence or two, what does your business do?" name="what_you_do" required placeholder="We..." />
                <Field label="How long have you been in business?" name="years_in_business" placeholder="e.g. 3 years" />
              </div>

              {/* 2. Customers */}
              <div className="space-y-lg">
                <SectionTitle n="03" title="Your customers" sub="Who you're trying to reach." />
                <TextArea label="Who is your ideal customer?" name="ideal_customer" placeholder="Be specific — their industry, role, or situation." />
                <TextArea label="What problem do you solve for them?" name="problem_solved" />
                <Field label="What areas do you serve?" name="areas_served" placeholder="One city? A state? Nationwide?" />
              </div>

              {/* 3. Goals */}
              <div className="space-y-lg">
                <SectionTitle n="04" title="Your goals" sub="What a win looks like for you." />
                <Field label="How do customers usually contact you?" name="contact_method" placeholder="Phone call, contact form, email, online booking..." />
                <Field label="Which service or product do you most want more of?" name="want_more_of" />
                <Field label="What's the #1 result you want from SEO?" name="main_goal" placeholder="More calls, more form-fills, sales of X, awareness..." />
                <Field label="Roughly, what is one new customer worth to you?" name="customer_value" hint="Helps us prioritize what's worth chasing." placeholder="e.g. $500, $5,000..." />
              </div>

              {/* 4. Findability */}
              <div className="space-y-lg">
                <SectionTitle n="05" title="How customers find you" sub="The starting point for keyword research." />
                <TextArea label="What do you think people type into Google to find a business like yours?" name="search_terms" />
                <Field label="What are you best known for?" name="known_for" />
                <TextArea label="Who are your top 3 competitors?" name="competitors" placeholder="Names or websites." />
              </div>

              {/* 5. Current */}
              <div className="space-y-lg">
                <SectionTitle n="06" title="Current situation" sub="Where things stand today." />
                <Field label="Do you get customers from Google now? Roughly how many a month?" name="current_leads" />
                <Field label="Has anyone done SEO on your site before?" name="prior_seo" placeholder="Yes / No / Not sure" />
                <div>
                  <label htmlFor="platform" className="block text-text-primary font-semibold mb-sm text-sm">
                    What's your website built on?
                  </label>
                  <select id="platform" name="platform" className={fieldBase} defaultValue="">
                    <option value="" disabled>Choose one</option>
                    <option>WordPress</option>
                    <option>Wix</option>
                    <option>Squarespace</option>
                    <option>Shopify</option>
                    <option>Custom / coded</option>
                    <option>Not sure</option>
                  </select>
                </div>
              </div>

              {/* 6. Content */}
              <div className="space-y-lg">
                <SectionTitle n="07" title="Content & expertise" sub="What we can write about." />
                <Field label="Can you (or your team) answer questions to help write content?" name="can_provide_content" placeholder="Yes / No" />
                <TextArea label="What questions do customers ask you the most?" name="common_questions" hint="This is gold — these are often exactly what people Google." />
                <TextArea label="Any topics you're genuinely expert in that we could write about?" name="expert_topics" />
              </div>

              {/* 7. Guardrails */}
              <div className="space-y-lg">
                <SectionTitle n="08" title="Guardrails" sub="Anything we should know or avoid." />
                <TextArea label="Anything you do NOT want to be associated with or rank for?" name="avoid" />
                <TextArea label="Any industry rules or compliance we must follow?" name="compliance" hint="Especially important for healthcare, legal, or finance." />
              </div>

              {/* 8. Success */}
              <div className="space-y-lg">
                <SectionTitle n="09" title="The finish line" sub="Where you want to be." />
                <TextArea label="What would success look like 6 months from now?" name="success_vision" />
              </div>

              {error && (
                <p className="text-error text-sm text-center">
                  Something went wrong sending your answers. Please email us directly instead.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full px-xl py-lg bg-gradient-accent text-white font-bold rounded-lg hover:shadow-glow-lg transition-all duration-base disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-95 text-base"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
              <p className="text-center text-text-tertiary text-xs">
                Only <span className="text-accent">*</span> fields are required — answer what you can, we&apos;ll fill in the rest on our call.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer onContactClick={() => setShowContactModal(true)} />
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </main>
  )
}
