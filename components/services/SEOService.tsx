export default function SEOService() {
  const seoService = {
    icon: '🔍',
    name: 'SEO Optimization',
    description: 'Get found by customers actively searching for your services',
    whatItIs:
      'Strategic SEO that ranks your website for high-intent keywords. We handle technical SEO, content strategy, competitor analysis, and link building. The result: consistent organic traffic without paid advertising.',
    whyItMatters:
      'SEO is the only marketing channel that gets better over time. Unlike ads that stop working when you stop paying, SEO builds compounding returns. Rank once, get leads forever.',
    benefits: [
      'Rank for high-intent keywords',
      'Consistent organic traffic',
      'No ongoing ad spend',
      'Local search dominance',
      'Better user experience',
      'Improved brand credibility',
    ],
    useCases: [
      'Losing business to competitors ranking above you',
      'Want to reduce reliance on paid ads',
      'Local business wanting more foot traffic',
      'Service business struggling to get calls',
      'E-commerce wanting organic sales',
    ],
    outcomes: [
      'Rank on first page for 20+ keywords',
      '5x increase in organic traffic',
      'Average cost per lead drops 70%+',
      'Year-over-year ranking improvements',
    ],
    timeline: '3-6 months to see results',
    investment: '$2,000 - $5,000/month',
  }

  return (
    <section className="py-4xl md:py-5xl bg-background">
      <div className="max-w-5xl mx-auto px-lg">
        <div className="mb-3xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Marketing Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-md">
            SEO that works
          </h2>
        </div>

        <div className="bg-bg-light border border-accent/10 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="p-xl md:p-2xl border-b border-accent/10 bg-gradient-subtle">
            <div className="flex items-start gap-lg">
              <div className="text-5xl">{seoService.icon}</div>
              <div>
                <h3 className="text-3xl font-bold text-text-primary">{seoService.name}</h3>
                <p className="text-lg text-text-secondary mt-md">{seoService.description}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-xl md:p-2xl space-y-2xl">
            <div className="grid md:grid-cols-2 gap-2xl">
              {/* Left Column */}
              <div className="space-y-2xl">
                <div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-md">What It Is</p>
                  <p className="text-text-secondary leading-relaxed">{seoService.whatItIs}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-md">Why It Matters</p>
                  <p className="text-text-secondary leading-relaxed">{seoService.whyItMatters}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-md">Key Benefits</p>
                  <ul className="space-y-sm">
                    {seoService.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-md text-text-secondary">
                        <span className="text-accent flex-shrink-0">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-2xl">
                <div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-md">Ideal For</p>
                  <ul className="space-y-sm">
                    {seoService.useCases.map((useCase, i) => (
                      <li key={i} className="flex gap-md text-text-secondary">
                        <span className="text-purple">•</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-md">Expected Outcomes</p>
                  <ul className="space-y-sm">
                    {seoService.outcomes.map((outcome, i) => (
                      <li key={i} className="flex gap-md text-text-secondary">
                        <span className="text-success">↑</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline & Investment */}
            <div className="grid sm:grid-cols-2 gap-lg pt-2xl border-t border-accent/10">
              <div className="bg-gradient-subtle rounded-lg p-lg">
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-md">Timeline</p>
                <p className="text-xl font-bold text-text-primary">{seoService.timeline}</p>
                <p className="text-xs text-text-tertiary mt-md">Results take time. But they compound.</p>
              </div>
              <div className="bg-gradient-subtle rounded-lg p-lg">
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-md">Investment</p>
                <p className="text-xl font-bold text-accent">{seoService.investment}</p>
                <p className="text-xs text-text-tertiary mt-md">ROI typically 5-10x within year</p>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full px-lg py-md bg-accent text-inverse font-semibold rounded-md hover:shadow-glow-md transition-all duration-fast">
              Get Free SEO Analysis
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
