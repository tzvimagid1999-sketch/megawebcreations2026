'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ServicesSectionProps {
  onCTA: () => void
}

const services = [
  {
    icon: '⚡',
    title: 'AI Automation Systems',
    problem: 'Your team is wasting time on repetitive tasks that could be automated.',
    solution: 'We build AI systems that automate customer interactions, qualify leads, schedule appointments, and nurture relationships 24/7 without manual intervention. Your business runs itself.',
    outcomes: [
      '15+ hours saved per week per person',
      'Automate all repetitive workflows',
      'Instant customer responses 24/7',
    ],
    cta: 'Explore AI Automation',
  },
  {
    icon: '🌐',
    title: 'High-Performance Websites',
    problem: "You need a professional online presence to capture leads for your AI systems.",
    solution: 'We design conversion-optimized websites that feed leads into your automation. Beautiful, fast, and built to work seamlessly with your AI systems.',
    outcomes: [
      '40% increase in qualified leads',
      '3x improvement in conversion rate',
      'Perfect lead source for automation',
    ],
    cta: 'View Website Showcase',
  },
  {
    icon: '🔍',
    title: 'SEO Strategy',
    problem: 'Your business needs consistent organic traffic to fuel growth.',
    solution: 'Strategic SEO that gets your business found by customers actively searching for your services. More leads flowing into your automation.',
    outcomes: [
      'Rank for high-intent keywords',
      '5x organic traffic increase',
      'Consistent lead flow without ads',
    ],
    cta: 'Get Free SEO Analysis',
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
            AI Automation First
          </h2>
          <p className={`text-lg text-text-secondary max-w-2xl mx-auto transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}>
            Build intelligent systems that grow your business. Websites and SEO support the automation that actually drives results.
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
