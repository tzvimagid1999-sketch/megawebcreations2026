const webServices = [
  {
    icon: '🌐',
    name: 'Custom Website Design',
    description: 'Professional websites built from scratch for maximum impact',
    whatItIs:
      'We design and build custom websites tailored to your business. Not templates. Not generic solutions. Completely bespoke digital experiences optimized for conversions.',
    whyItMatters:
      'Your website is your most powerful sales tool. A poor website kills deals. A great website generates leads automatically 24/7.',
    benefits: [
      'Conversion-optimized design',
      'Mobile-first responsive',
      'Fast load times (99+ Lighthouse scores)',
      'SEO foundation built in',
      'Easy to update and manage',
      'Secure and scalable',
    ],
    useCases: [
      'Starting a new business online',
      'Replacing an outdated website',
      'Launch into new markets',
      'Professional presence for service businesses',
    ],
    outcomes: [
      '40% increase in qualified leads in 90 days',
      '3x improvement in conversion rate',
      '50% faster page load times',
      'Year-over-year revenue growth',
    ],
    timeline: '4-6 weeks',
    investment: '$5,000 - $15,000',
  },
  {
    icon: '✨',
    name: 'Website Redesigns',
    description: 'Transform underperforming websites into revenue machines',
    whatItIs:
      'We completely rebuild your existing website with modern design, improved conversion optimization, and better user experience. Everything stays the same except the results improve.',
    whyItMatters:
      'Most websites fail silently. You get traffic but no conversions. A strategic redesign fixes what\'s broken and unlocks hidden revenue.',
    benefits: [
      'Dramatically improved conversion rates',
      'Better user experience',
      'Modern, professional appearance',
      'Updated technology and performance',
      'Mobile optimization',
      'Improved SEO rankings',
    ],
    useCases: [
      'Website gets traffic but few conversions',
      'Website is outdated or slow',
      'High bounce rate or low time-on-site',
      'Rebranding or repositioning',
      'Struggling to compete with rivals',
    ],
    outcomes: [
      '2-3x improvement in conversion rate',
      '50+ positions gained in search rankings',
      '60% reduction in bounce rate',
      'Revenue increase of 60-100%+',
    ],
    timeline: '3-5 weeks',
    investment: '$4,000 - $12,000',
  },
]

export default function WebServices() {
  return (
    <section className="py-4xl md:py-5xl bg-bg-light">
      <div className="max-w-5xl mx-auto px-lg">
        <div className="mb-3xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Web Design Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-md">
            Websites that generate customers
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-2xl">
          {webServices.map((service, idx) => (
            <div key={idx} className="bg-background border border-accent/10 rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-fast group">
              {/* Header */}
              <div className="p-xl border-b border-accent/10 bg-gradient-subtle">
                <div className="text-4xl mb-md">{service.icon}</div>
                <h3 className="text-2xl font-bold text-text-primary">{service.name}</h3>
                <p className="text-text-secondary mt-md">{service.description}</p>
              </div>

              {/* Content */}
              <div className="p-xl space-y-xl">
                {/* What It Is */}
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-md">What It Is</p>
                  <p className="text-text-secondary">{service.whatItIs}</p>
                </div>

                {/* Why It Matters */}
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-md">Why It Matters</p>
                  <p className="text-text-secondary">{service.whyItMatters}</p>
                </div>

                {/* Benefits */}
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-md">Key Benefits</p>
                  <ul className="space-y-sm">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-md text-text-secondary text-sm">
                        <span className="text-accent flex-shrink-0">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-md">Ideal For</p>
                  <ul className="space-y-sm">
                    {service.useCases.map((useCase, i) => (
                      <li key={i} className="flex gap-md text-text-secondary text-sm">
                        <span className="text-purple">•</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expected Outcomes */}
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-md">Expected Outcomes</p>
                  <ul className="space-y-sm">
                    {service.outcomes.map((outcome, i) => (
                      <li key={i} className="flex gap-md text-text-secondary text-sm">
                        <span className="text-success">↑</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline & Investment */}
                <div className="grid grid-cols-2 gap-lg pt-xl border-t border-accent/10">
                  <div>
                    <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-md">Timeline</p>
                    <p className="text-lg font-bold text-text-primary">{service.timeline}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-md">Investment</p>
                    <p className="text-lg font-bold text-accent">{service.investment}</p>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full px-lg py-md bg-accent/10 text-accent font-semibold rounded-md hover:bg-accent/20 transition-all duration-fast">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
