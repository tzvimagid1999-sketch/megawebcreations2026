export default function ConsultingService() {
  const consulting = {
    icon: '💡',
    name: 'Business Consulting',
    description: 'Strategic guidance on digital transformation and growth',
    whatItIs:
      'We work with your leadership team to assess your current digital state, identify revenue opportunities, and create a multi-year roadmap for growth through digital channels.',
    whyItMatters:
      'Most businesses fly blind. They don\'t know their actual customer acquisition cost, which channels work, or what\'s leaving money on the table. Strategic clarity changes everything.',
    benefits: [
      'Clear digital strategy aligned with goals',
      'Identify hidden revenue opportunities',
      'Know your actual unit economics',
      'Prioritized 12-month action plan',
      'Competitive analysis & positioning',
      'Risk identification & mitigation',
    ],
    useCases: [
      'Leadership confused about digital priorities',
      'Multiple initiatives competing for budget',
      'Uncertain if digital investment is worth it',
      'Planning major digital transformation',
      'Scaling too fast without strategy',
    ],
    outcomes: [
      'Clear 12-month digital roadmap',
      'Identify $50K-$500K+ hidden revenue opportunities',
      'Know exact ROI on every channel',
      'Confident investment decisions',
    ],
    timeline: '4-6 weeks for full assessment & strategy',
    investment: '$5,000 - $15,000',
    description2: 'Perfect for leadership teams ready to move strategically',
  }

  return (
    <section className="py-4xl md:py-5xl bg-background">
      <div className="max-w-5xl mx-auto px-lg">
        <div className="mb-3xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Strategic Advisory</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-md">
            Know where you stand. Know where you're going.
          </h2>
        </div>

        <div className="bg-bg-light border border-accent/10 rounded-lg overflow-hidden">
          {/* Header with gradient */}
          <div className="p-xl md:p-2xl bg-gradient-subtle border-b border-accent/10">
            <div className="flex items-start gap-lg">
              <div className="text-5xl">{consulting.icon}</div>
              <div>
                <h3 className="text-3xl font-bold text-text-primary">{consulting.name}</h3>
                <p className="text-lg text-text-secondary mt-md">{consulting.description}</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-xl md:p-2xl">
            <div className="grid md:grid-cols-2 gap-2xl mb-2xl">
              {/* Left */}
              <div className="space-y-2xl">
                <div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-md">What It Includes</p>
                  <p className="text-text-secondary leading-relaxed mb-md">{consulting.whatItIs}</p>
                  <p className="text-text-secondary leading-relaxed">{consulting.whyItMatters}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-md">Deliverables</p>
                  <ul className="space-y-sm">
                    {consulting.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-md text-text-secondary">
                        <span className="text-accent flex-shrink-0">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right */}
              <div className="space-y-2xl">
                <div className="bg-gradient-subtle rounded-lg p-lg">
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-md">Best For</p>
                  <ul className="space-y-sm">
                    {consulting.useCases.map((useCase, i) => (
                      <li key={i} className="flex gap-md text-text-secondary">
                        <span className="text-purple">•</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-subtle rounded-lg p-lg">
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-md">What You Get</p>
                  <ul className="space-y-sm">
                    {consulting.outcomes.map((outcome, i) => (
                      <li key={i} className="flex gap-md text-text-secondary">
                        <span className="text-success">↑</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="bg-bg-elevated rounded-lg p-lg mb-2xl border border-accent/10">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-md">The Process</p>
              <div className="space-y-md">
                <div className="flex gap-md">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 font-bold text-accent text-sm">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Audit Current State</p>
                    <p className="text-sm text-text-secondary">Analysis of existing channels, traffic, conversions, costs</p>
                  </div>
                </div>
                <div className="flex gap-md">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 font-bold text-accent text-sm">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Identify Opportunities</p>
                    <p className="text-sm text-text-secondary">Competitive benchmarking, gap analysis, hidden potential</p>
                  </div>
                </div>
                <div className="flex gap-md">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 font-bold text-accent text-sm">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Create Roadmap</p>
                    <p className="text-sm text-text-secondary">12-month strategy with priorities, timeline, budget</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment */}
            <div className="grid sm:grid-cols-2 gap-lg mb-2xl">
              <div className="bg-gradient-subtle rounded-lg p-lg">
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-md">Timeline</p>
                <p className="text-xl font-bold text-text-primary">{consulting.timeline}</p>
                <p className="text-xs text-text-tertiary mt-md">Typically 4-6 weeks from kickoff</p>
              </div>
              <div className="bg-gradient-subtle rounded-lg p-lg">
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-md">Investment</p>
                <p className="text-xl font-bold text-accent">{consulting.investment}</p>
                <p className="text-xs text-text-tertiary mt-md">ROI typically 10x+ in first year</p>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full px-lg py-lg bg-accent text-inverse font-bold rounded-md hover:shadow-glow-md transition-all duration-fast">
              Schedule Strategy Session
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
