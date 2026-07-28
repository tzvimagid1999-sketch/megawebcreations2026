'use client'

import { useEffect, useRef, useState } from 'react'

interface StepProps {
  number: string
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function ProcessStep({ number, icon, title, description, delay }: StepProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Large background number */}
      <div className="absolute -top-8 -left-6 text-8xl font-bold text-gray-100 select-none pointer-events-none">
        {number}
      </div>

      {/* Card */}
      <div className="relative bg-white border border-gray-200 rounded-3xl p-8 md:p-10" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}>
        {/* Icon and title container */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-6 h-6 text-blue-600 mt-1">
            {icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed ml-10">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function PremiumProcessSection({ onCTA }: { onCTA: () => void }) {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-20 md:mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            How it actually works
          </h2>
          <p className="text-xl text-gray-600 max-width-2xl max-w-2xl">
            Three steps. No complexity. Just results that show up in your bank account.
          </p>
        </div>

        {/* Timeline container */}
        <div className="space-y-8 md:space-y-16">
          {/* Step 1 - Left */}
          <div className="md:max-w-2xl">
            <ProcessStep
              number="01"
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Real conversations start here"
              description="We build systems that attract your ideal customers. No spam, no games. Just people who actually want what you offer."
              delay={0}
            />
          </div>

          {/* Connector */}
          <div className="hidden md:flex justify-center -my-4">
            <div className="text-gray-300 text-3xl">↓</div>
          </div>

          {/* Step 2 - Right */}
          <div className="md:max-w-2xl md:ml-auto">
            <ProcessStep
              number="02"
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              title="Your calendar fills itself"
              description="Qualified leads are scheduled automatically. No back-and-forth emails. No manual follow-ups. They just appear on your calendar ready to close."
              delay={100}
            />
          </div>

          {/* Connector */}
          <div className="hidden md:flex justify-center -my-4">
            <div className="text-gray-300 text-3xl">↓</div>
          </div>

          {/* Step 3 - Left */}
          <div className="md:max-w-2xl">
            <ProcessStep
              number="03"
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
              title="Watch your revenue actually grow"
              description="More qualified leads. Better conversion rates. Higher average deal size. This isn't theory—it's what happens when you remove friction from your sales process."
              delay={200}
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 md:mt-28 text-center">
          <p className="text-lg text-gray-600 mb-8">Ready to try it?</p>
          <button
            onClick={onCTA}
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 text-lg"
          >
            Get your free demo
          </button>
        </div>
      </div>
    </section>
  )
}
