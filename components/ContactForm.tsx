'use client'

import { useState } from 'react'

interface ContactFormProps {
  onSuccess?: () => void
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    try {
      // Send to Formspree endpoint (replace with your actual endpoint)
      const response = await fetch('https://formspree.io/f/xqerwvwp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        onSuccess?.()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-lg">
        <div className="text-center mb-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-lg">
            Ready to grow your business?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Schedule a free consultation. No obligation, no pressure—just honest conversation about what you need.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-bg-light border border-accent/20 rounded-lg p-lg md:p-2xl">
          {/* Single column form for mobile, 2 columns on desktop */}
          <div className="grid md:grid-cols-2 gap-lg mb-lg">
            <div>
              <label htmlFor="name" className="block text-text-primary font-semibold mb-md">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-lg py-md bg-background border border-accent/20 rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent focus:outline-none transition"
                placeholder="John Doe"
                aria-label="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-text-primary font-semibold mb-md">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                inputMode="email"
                className="w-full px-lg py-md bg-background border border-accent/20 rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent focus:outline-none transition"
                placeholder="john@example.com"
                aria-label="Your email address"
              />
            </div>
          </div>

          {/* Single column on mobile */}
          <div className="grid md:grid-cols-2 gap-lg mb-lg">
            <div>
              <label htmlFor="phone" className="block text-text-primary font-semibold mb-md">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                inputMode="tel"
                className="w-full px-lg py-md bg-background border border-accent/20 rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent focus:outline-none transition"
                placeholder="(555) 123-4567"
                aria-label="Your phone number"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-text-primary font-semibold mb-md">
                What do you need? *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-lg py-md bg-background border border-accent/20 rounded-lg text-text-primary focus:border-accent focus:outline-none transition"
                aria-label="Service you are interested in"
              >
                <option value="">Select a service</option>
                <option value="website">Custom Website</option>
                <option value="automation">AI Automation</option>
                <option value="seo">SEO Strategy</option>
                <option value="multiple">Multiple Services</option>
                <option value="other">Something Else</option>
              </select>
            </div>
          </div>

          {/* Full width message field */}
          <div className="mb-lg">
            <label htmlFor="message" className="block text-text-primary font-semibold mb-md">
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-lg py-md bg-background border border-accent/20 rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent focus:outline-none transition resize-none"
              placeholder="What's your main goal? Any specific challenges?"
              aria-label="Tell us about your project"
            />
          </div>

          {/* Success message */}
          {status === 'success' && (
            <div className="p-lg bg-success/10 border border-success rounded-lg mb-lg text-success text-sm" role="alert">
              ✓ Thank you! We'll be in touch within 24 hours.
            </div>
          )}

          {/* Error message */}
          {status === 'error' && (
            <div className="p-lg bg-error/10 border border-error rounded-lg mb-lg text-error text-sm" role="alert">
              ✗ Something went wrong. Please try again or email us directly.
            </div>
          )}

          {/* Submit button - Large tap target for mobile */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-xl py-lg bg-gradient-accent text-inverse font-bold rounded-lg text-base md:text-lg hover:shadow-glow-lg transition-all duration-base disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 will-change-transform"
          >
            {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
          </button>

          {/* Alternative contact method */}
          <p className="text-center text-text-secondary text-sm mt-lg">
            Or email us: <a href="mailto:Megwebcraetions@gmail.com" className="text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">Megwebcraetions@gmail.com</a>
          </p>
        </form>
      </div>
    </section>
  )
}
