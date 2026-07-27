'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function SocialProof() {
  const { elementRef, isVisible } = useScrollAnimation()

  const logos = [
    { name: 'Legal Firm', initials: 'LF' },
    { name: 'Medical Practice', initials: 'MP' },
    { name: 'Service Co', initials: 'SC' },
    { name: 'Startup Inc', initials: 'SI' },
    { name: 'Local Business', initials: 'LB' },
    { name: 'Professional Services', initials: 'PS' },
  ]

  return (
    <section ref={elementRef} className="py-3xl md:py-4xl bg-bg-light border-y border-accent/10">
      <div className="max-w-5xl mx-auto px-lg">
        <p className={`text-center text-text-tertiary text-sm font-semibold uppercase tracking-wider mb-2xl transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Trusted by businesses across industries
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-lg md:gap-xl">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className={`flex items-center justify-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 50}ms` : '0ms' }}
            >
              <div className="w-full aspect-square bg-bg-elevated rounded-lg border border-accent/10 flex items-center justify-center hover:border-accent/30 hover:shadow-glow-sm transition-all duration-base transform hover:scale-105 will-change-transform">
                <span className="text-sm font-bold text-accent">{logo.initials}</span>
              </div>
            </div>
          ))}
        </div>

        <p className={`text-center text-text-secondary text-sm mt-2xl transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          From dental practices to law firms to e-commerce businesses, our clients see average revenue growth of 40% in year one.
        </p>
      </div>
    </section>
  )
}
