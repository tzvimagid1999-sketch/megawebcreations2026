interface ServicesSectionProps {
  onCTA: () => void
}

const services = [
  {
    icon: '🌐',
    title: 'Custom Websites That Sell',
    problem: 'Your current website isn't generating leads.',
    solution: 'We design conversion machines—not online brochures. Every element is optimized to turn visitors into customers.',
    outcomes: [
      '40% increase in qualified leads',
      '3x improvement in conversion rate',
      'Built for mobile (where 60% of traffic comes from)',
    ],
    cta: 'Book a Website Audit',
  },
  {
    icon: '⚡',
    title: 'AI Automation Systems',
    problem: 'You\'re manually handling tasks that waste 10+ hours per week.',
    solution: 'We implement AI systems that handle customer inquiries, scheduling, follow-ups, and data entry automatically.',
    outcomes: [
      '15+ hours saved per week',
      'Zero missed follow-ups',
      'Customers get instant responses 24/7',
    ],
    cta: 'Explore Automation',
  },
  {
    icon: '🔍',
    title: 'SEO That Brings Customers',
    problem: 'You\'re losing business to competitors ranking above you.',
    solution: 'Strategic SEO that gets your business found when customers are actively searching for your services.',
    outcomes: [
      'Rank for high-intent keywords',
      '5x organic traffic increase',
      'Consistent lead flow without ads',
    ],
    cta: 'Get Free SEO Analysis',
  },
]

export default function ServicesSection({ onCTA }: ServicesSectionProps) {
  return (
    <section className="py-4xl md:py-5xl bg-background">
      <div className="max-w-5xl mx-auto px-lg">
        {/* Section header */}
        <div className="text-center mb-3xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-md mb-lg">
            Solutions that solve real business problems
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We don't offer generic services. Each solution is built around your specific challenges and revenue goals.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-xl mb-3xl">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-bg-light border border-accent/10 rounded-lg p-xl hover:border-accent/30 hover:shadow-lg transition-all duration-fast group"
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

              {/* CTA */}
              <button
                onClick={onCTA}
                className="w-full px-lg py-md bg-accent/10 text-accent font-semibold rounded-md hover:bg-accent/20 transition-all duration-fast group-hover:translate-y-[-2px]"
              >
                {service.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-text-secondary mb-lg">Not sure which service you need?</p>
          <button
            onClick={onCTA}
            className="px-xl py-lg bg-gradient-accent text-inverse font-bold rounded-lg hover:shadow-glow-lg transition-all duration-fast"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
