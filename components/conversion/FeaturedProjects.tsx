export default function FeaturedProjects() {
  const projects = [
    {
      name: 'Dental Practice Network',
      challenge: 'Needed to increase patient bookings by 50%',
      solution: 'New website + AI chatbot for appointment scheduling',
      result: '+180% patient bookings in 90 days',
      metric: '180%',
      industry: 'Healthcare',
    },
    {
      name: 'Local Contracting Firm',
      challenge: 'Zero online presence, losing jobs to competitors',
      solution: 'Complete website + SEO strategy + lead automation',
      result: '8 qualified projects booked per month',
      metric: '$45K',
      industry: 'Construction',
    },
    {
      name: 'Law Firm',
      challenge: 'Wanted to scale without hiring more staff',
      solution: 'Lead qualification automation + website redesign',
      result: '156% ROI in 6 months',
      metric: '156%',
      industry: 'Legal',
    },
  ]

  return (
    <section className="py-4xl md:py-5xl bg-bg-light">
      <div className="max-w-5xl mx-auto px-lg">
        <div className="text-center mb-3xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-md mb-lg">
            Real businesses. Real results.
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            These aren't hypothetical—they're active clients generating revenue every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-xl">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-background rounded-lg border border-accent/10 overflow-hidden hover:border-accent/30 transition-all duration-fast group">
              {/* Header with metric */}
              <div className="bg-gradient-subtle border-b border-accent/10 p-xl">
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-md">Result</p>
                <div className="text-3xl font-bold text-accent">{project.metric}</div>
                <p className="text-sm text-text-secondary mt-md">{project.result}</p>
              </div>

              {/* Content */}
              <div className="p-xl space-y-lg">
                <div>
                  <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-md">Industry</p>
                  <p className="text-sm font-semibold text-text-primary">{project.industry}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-md">Challenge</p>
                  <p className="text-sm text-text-secondary">{project.challenge}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-md">Our Solution</p>
                  <p className="text-sm text-text-secondary">{project.solution}</p>
                </div>

                <button className="w-full px-lg py-md border border-accent/30 text-accent font-semibold rounded-md hover:bg-accent/10 transition-all duration-fast text-sm">
                  Read Full Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-2xl">
          <p className="text-text-secondary mb-lg">Want to see more? We have 150+ success stories.</p>
        </div>
      </div>
    </section>
  )
}
