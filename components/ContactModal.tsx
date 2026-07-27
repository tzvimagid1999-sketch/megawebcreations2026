'use client'

import { useState, useEffect } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false)
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send to Formspree endpoint
      const response = await fetch('https://formspree.io/f/xqerwvwp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, type: 'quick-contact' })
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '' })
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-lg">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal - Full width on mobile (bottom sheet), centered on desktop */}
      <div className="relative bg-background border-t md:border border-accent/30 rounded-t-lg md:rounded-lg max-w-md w-full max-h-[90vh] md:max-h-none overflow-y-auto p-lg md:p-2xl shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-lg right-lg md:top-xl md:right-xl text-text-tertiary hover:text-accent transition p-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Close booking modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            {/* Form header */}
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-md pr-lg">
              Let's talk about your project
            </h2>
            <p className="text-text-secondary mb-2xl pr-lg">
              Share your details and we'll get back to you within 24 hours.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-lg">
              {/* Name input */}
              <div>
                <label htmlFor="modal-name" className="block text-text-primary font-semibold mb-md text-sm">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  aria-label="Your full name"
                  className="w-full px-lg py-md bg-bg-light border border-accent/20 rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent focus:outline-none transition text-base"
                />
              </div>

              {/* Email input */}
              <div>
                <label htmlFor="modal-email" className="block text-text-primary font-semibold mb-md text-sm">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  inputMode="email"
                  placeholder="your@email.com"
                  aria-label="Your email address"
                  className="w-full px-lg py-md bg-bg-light border border-accent/20 rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent focus:outline-none transition text-base"
                />
              </div>

              {/* Phone input */}
              <div>
                <label htmlFor="modal-phone" className="block text-text-primary font-semibold mb-md text-sm">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  inputMode="tel"
                  placeholder="(555) 123-4567"
                  aria-label="Your phone number"
                  className="w-full px-lg py-md bg-bg-light border border-accent/20 rounded-lg text-text-primary placeholder-text-tertiary focus:border-accent focus:outline-none transition text-base"
                />
              </div>

              {/* Submit button - Large tap target */}
              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full px-xl py-lg bg-gradient-accent text-inverse font-bold rounded-lg hover:shadow-glow-lg glow-accent transition-all duration-base disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 will-change-transform text-base"
              >
                {isSubmitting ? 'Sending...' : 'Get Started'}
              </button>
            </form>

            {/* Privacy note */}
            <p className="text-center text-text-tertiary text-xs mt-lg">
              We'll contact you shortly. No spam, guaranteed.
            </p>
          </>
        ) : (
          /* Success state */
          <div className="text-center py-2xl">
            <div className="text-5xl mb-lg">✓</div>
            <h3 className="text-2xl font-bold text-text-primary mb-lg">Thank you!</h3>
            <p className="text-text-secondary mb-2xl">
              We'll review your information and reach out within 24 hours to discuss your project.
            </p>
            <button
              onClick={onClose}
              className="px-xl py-lg bg-accent/10 text-accent font-bold rounded-lg hover:bg-accent/20 transition-all duration-base transform hover:scale-105 active:scale-95 will-change-transform text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
