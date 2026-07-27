export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      duration: '15 minutes',
      description:
        'We learn about your business, challenges, revenue goals, and target customers. We ask tough questions to understand what success looks like for you.',
      outcome: "Clarity on what's holding you back and a clear roadmap",
    },
    {
      number: '02',
      title: 'Strategy & Proposal',
      duration: '3-5 days',
      description:
        'Our team develops a detailed strategy document showing exactly what we\'ll build, how it solves your problems, and the ROI you can expect.',
      outcome: 'Custom proposal with timeline and investment',
    },
    {
      number: '03',
      title: 'Design & Build',
      duration: '2-4 weeks',
      description:
        'We design and build your solution with daily progress updates. You see work in progress and provide feedback throughout.',
      outcome: 'Production-ready website or automation system',
    },
    {
      number: '04',
      title: 'Launch & Optimize',
      duration: 'Week 1',
      description:
        'We launch with confidence, monitor performance in real-time, and make immediate optimizations based on actual user behavior.',
      outcome: 'Live system ready to generate revenue',
    },
    {
      number: '05',
      title: 'Ongoing Support',
      duration: 'Month 2+',
      description:
        'We monitor performance, make continuous improvements, handle technical issues, and help you scale what\'s working.',
      outcome: 'Continuously improving ROI and results',
    },
  ]

  return (
    <section className="py-4xl md:py-5xl bg-background">
      <div className="max-w-5xl mx-auto px-lg">
        <div className="text-center mb-3xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-md mb-lg">
            From discovery to revenue in 4-6 weeks
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A proven process that minimizes risk and maximizes results. No surprises. No delays.
          </p>
        </div>

        <div className="space-y-lg">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-xl">
              {/* Timeline connector */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-accent text-inverse font-bold text-lg flex items-center justify-center mb-lg flex-shrink-0">
                  {step.number}
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-1 h-20 bg-accent/20 mb-lg"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 bg-bg-light rounded-lg border border-accent/10 p-xl mb-lg">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-lg mb-lg">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">{step.title}</h3>
                    <p className="text-sm text-accent font-semibold mt-md">{step.duration}</p>
                  </div>
                </div>

                <p className="text-text-secondary mb-lg">{step.description}</p>

                <div className="pt-lg border-t border-accent/10">
                  <p className="text-sm font-semibold text-accent mb-md">OUTCOME</p>
                  <p className="text-text-primary">{step.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
