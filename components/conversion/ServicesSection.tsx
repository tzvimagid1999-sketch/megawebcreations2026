'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ServicesSectionProps {
  onCTA: () => void
}

const services = [
  {
    icon: '🔍',
    title: 'Search Engine Optimization',
    problem: 'Your customers are searching on Google—but they find your competitors instead of you.',
    solution: 'We research exactly what your customers search for, then optimize your pages and publish content that answers it—so you show up when it matters and earn steady traffic without paying for ads.',
    outcomes: [
      'Rank for what your customers actually search',
      'Steady traffic without paying per click',
      'Content that answers real buyer questions',
    ],
    cta: 'Get Free SEO Analysis',
  },
  {
    icon: '📍',
    title: 'Local SEO',
    problem: 'Nearby customers are ready to buy, but your business is nowhere in the Google map results.',
    solution: 'We optimize your Google Business Profile and local presence so you show up in the map pack when people nearby search for what you offer—often the fastest way to get found.',
    outcomes: [
      'Show up in the Google map results',
      'Turn reviews into a ranking advantage',
      'Get found by customers right nearby',
    ],
    cta: 'Get Found Locally',
  },
  {
    icon: '🌐',
    title: 'Websites Built to Rank',
    problem: 'A slow or outdated site holds back your rankings and loses visitors before they act.',
    solution: 'We build fast, mobile-first websites with SEO baked in from the start—a clean foundation that Google can read and customers want to act on.',
    outcomes: [
      'Fast, mobile-first, and search-ready',
      'A clear path from visitor to customer',
      'A foundation your SEO can build on',
    ],
    cta: 'See How It Works',
  },
]

export default function ServicesSection({ onCTA }: ServicesSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section ref={elementRef} className="py-4xl md:py-5xl bg-background">
      <div className="max-w-5xl mx-auto px-lg">
        {/* Section header */}
        <div className="text-center mb-3xl">
          <span className={`text-sm font-semibold text-accent uppercase tracking-wider transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Our Services
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold text-text-primary mt-md mb-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Get Found on Google
          </h2>
          <p className={`text-lg text-text-secondary max-w-2xl mx-auto transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
            SEO is the core of what we do. We help your business show up when customers search—and build websites that turn those searches into sales.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-xl mb-3xl">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`bg-bg-light border border-accent/10 rounded-lg p-xl hover:border-accent/30 hover:shadow-lg transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2 will-change-transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: isVisible ? `${idx * 100}ms` : '0ms' }}
            >
              {/* Icon */}
              <div className="text-4xl mb-lg">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-text-primary mb-lg">{service.title}</h3>

              {/* Problem */}
              <div className="mb-lg">
                <p className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-md">The Problem</p>
                <p className="text-text-secondary">{service.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-lg">
                <p className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-md">Our Solution</p>
                <p className="text-text-secondary">{service.solution}</p>
              </div>

              {/* Outcomes */}
              <div className="mb-xl pt-lg border-t border-accent/10">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-md">Real Outcomes</p>
                <ul className="space-y-sm">
                  {service.outcomes.map((outcome, i) => (
                    <li key={i} className="flex gap-md text-text-secondary text-sm">
                      <span className="text-accent flex-shrink-0">+</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA - Unified across all services */}
              <button
                onClick={onCTA}
                className="w-full px-lg py-md bg-accent/10 text-accent font-semibold rounded-md hover:bg-accent/20 transition-all duration-base transform hover:scale-105 active:scale-95 will-change-transform"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}>
          <p className="text-text-secondary mb-lg">Not sure which service you need?</p>
          <button
            onClick={onCTA}
            className="px-xl py-lg bg-gradient-accent text-inverse font-bold rounded-lg hover:shadow-glow-lg transition-all duration-base transform hover:scale-105 active:scale-95 will-change-transform"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
