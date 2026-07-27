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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-dark-lighter border border-accent/30 rounded-lg max-w-md w-full p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-accent transition"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-2">Let's talk about your project</h2>
            <p className="text-gray-400 mb-6">Share your details and we'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-dark border border-accent/20 rounded text-white placeholder-gray-500 focus:border-accent focus:outline-none transition"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-dark border border-accent/20 rounded text-white placeholder-gray-500 focus:border-accent focus:outline-none transition"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone (optional)"
                  className="w-full px-4 py-3 bg-dark border border-accent/20 rounded text-white placeholder-gray-500 focus:border-accent focus:outline-none transition"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-gradient-accent text-dark font-semibold rounded hover:shadow-lg glow-accent transition disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Get Started'}
              </button>
            </form>

            <p className="text-center text-gray-500 text-xs mt-4">
              We'll contact you shortly. No spam, guaranteed.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
            <p className="text-gray-400 mb-6">
              We'll review your information and reach out within 24 hours to discuss your project.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-accent text-dark font-semibold rounded hover:shadow-lg transition"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
