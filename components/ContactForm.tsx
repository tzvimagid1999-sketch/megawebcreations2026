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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to grow your business?
          </h2>
          <p className="text-gray-400 text-lg">
            Schedule a free consultation. No obligation, no pressure—just honest conversation about what you need.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-dark-lighter border border-accent/20 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark border border-accent/20 rounded text-white placeholder-gray-500 focus:border-accent focus:outline-none transition"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark border border-accent/20 rounded text-white placeholder-gray-500 focus:border-accent focus:outline-none transition"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="phone" className="block text-white font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark border border-accent/20 rounded text-white placeholder-gray-500 focus:border-accent focus:outline-none transition"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-white font-semibold mb-2">
                What do you need?
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dark border border-accent/20 rounded text-white focus:border-accent focus:outline-none transition"
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

          <div className="mb-6">
            <label htmlFor="message" className="block text-white font-semibold mb-2">
              Tell us about your project
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-dark border border-accent/20 rounded text-white placeholder-gray-500 focus:border-accent focus:outline-none transition resize-none"
              placeholder="What's your main goal? Any specific challenges?"
            />
          </div>

          {status === 'success' && (
            <div className="p-4 bg-accent/10 border border-accent rounded mb-6 text-accent">
              Thank you! We'll be in touch within 24 hours.
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500 rounded mb-6 text-red-400">
              Something went wrong. Please try again or email us directly.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-accent text-dark font-bold rounded text-lg hover:shadow-lg glow-accent transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
          </button>

          <p className="text-center text-gray-400 text-sm mt-4">
            Or email us: <a href="mailto:Megwebcraetions@gmail.com" className="text-accent hover:underline">Megwebcraetions@gmail.com</a>
          </p>
        </form>
      </div>
    </section>
  )
}
