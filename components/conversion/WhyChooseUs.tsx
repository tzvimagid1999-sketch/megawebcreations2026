interface WhyChooseUsProps {
  onCTA: () => void
}

export default function WhyChooseUs({ onCTA }: WhyChooseUsProps) {
  const reasons = [
    {
      title: 'We Focus on Revenue, Not Activity',
      description:
        'Most agencies measure success by vanity metrics. We measure it by one thing: how much money you make. Every decision we make is based on ROI.',
    },
    {
      title: 'You Get Direct Access to Our Team',
      description:
        'No account managers or offshore contractors. You work directly with the senior strategists and developers building your projects.',
    },
    {
      title: 'We Invest in Your Success',
      description:
        "We offer performance-based pricing options. If you don't see results, we adjust strategy at no additional cost.",
    },
    {
      title: 'Transparent, Predictable Pricing',
      description:
        "No surprise invoices. No hidden fees. You know exactly what you're paying for and what to expect in return.",
    },
    {
      title: 'Ongoing Support Included',
      description:
        "We don't hand you a website and disappear. We actively optimize and support your digital assets so they keep generating revenue.",
    },
    {
      title: 'Honest, Measurable Work',
      description:
        "We report real numbers from Google Search Console—what's ranking, what's growing—so you always see exactly what you're paying for.",
    },
  ]

  return (
    <section className="py-4xl md:py-5xl bg-bg-light">
      <div className="max-w-5xl mx-auto px-lg">
        <div className="mb-3xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Partner With Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-md">
            We're different. And your results prove it.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-xl mb-3xl">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex gap-lg">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-md">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-md">{reason.title}</h3>
                <p className="text-text-secondary">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-lg border-t border-accent/10">
          <p className="text-text-secondary mb-lg">Ready to experience the difference?</p>
          <button
            onClick={onCTA}
            className="px-xl py-lg bg-accent/10 text-accent font-semibold rounded-lg hover:bg-accent/20 transition-all duration-base transform hover:scale-105 active:scale-95 will-change-transform"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  )
}
