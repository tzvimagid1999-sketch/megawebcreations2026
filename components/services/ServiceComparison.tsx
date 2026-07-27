export default function ServiceComparison() {
  return (
    <section className="py-4xl md:py-5xl bg-bg-light">
      <div className="max-w-5xl mx-auto px-lg">
        <div className="text-center mb-3xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Service Overview</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-md">
            Which services work together?
          </h2>
          <p className="text-lg text-text-secondary mt-md max-w-2xl mx-auto">
            Some services stand alone. Others multiply results when combined.
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-xl mb-3xl">
          {/* Starter */}
          <div className="bg-background border border-accent/10 rounded-lg p-xl">
            <h3 className="text-2xl font-bold text-text-primary mb-md">Starter</h3>
            <p className="text-accent font-semibold mb-lg">For small businesses getting started</p>
            <ul className="space-y-md mb-2xl">
              <li className="flex gap-md">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-text-secondary">Custom Website Design</span>
              </li>
              <li className="flex gap-md">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-text-secondary">Basic SEO Setup</span>
              </li>
              <li className="flex gap-md">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-text-secondary">Lead Capture Form</span>
              </li>
            </ul>
            <button className="w-full px-lg py-md bg-accent/10 text-accent font-semibold rounded-md hover:bg-accent/20 transition-all duration-fast">
              Learn More
            </button>
          </div>

          {/* Growth */}
          <div className="bg-background border-2 border-accent rounded-lg p-xl relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-md py-sm bg-accent text-inverse text-xs font-bold rounded-full">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-md">Growth</h3>
            <p className="text-accent font-semibold mb-lg">For established businesses scaling</p>
            <ul className="space-y-md mb-2xl">
              <li className="flex gap-md">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-text-secondary">Website Design + Optimization</span>
              </li>
              <li className="flex gap-md">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-text-secondary">SEO Strategy + Implementation</span>
              </li>
              <li className="flex gap-md">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-text-secondary">Lead Capture + Email Automation</span>
              </li>
              <li className="flex gap-md">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-text-secondary">AI Chatbot for Support</span>
              </li>
            </ul>
            <button className="w-full px-lg py-md bg-accent text-inverse font-semibold rounded-md hover:shadow-glow-md transition-all duration-fast">
              Get Started
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-background border border-accent/10 rounded-lg p-xl">
            <h3 className="text-2xl font-bold text-text-primary mb-md">Enterprise</h3>
            <p className="text-accent font-semibold mb-lg">For high-volume/high-complexity businesses</p>
            <ul className="space-y-md mb-2xl">
              <li className="flex gap-md">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-text-secondary">Complete Digital Strategy</span>
              </li>
              <li className="flex gap-md">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-text-secondary">All Services Integrated</span>
              </li>
              <li className="flex gap-md">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-text-secondary">Custom Workflows & Automation</span>
              </li>
              <li className="flex gap-md">
                <span className="text-accent flex-shrink-0">✓</span>
                <span className="text-text-secondary">Dedicated Account Team</span>
              </li>
            </ul>
            <button className="w-full px-lg py-md bg-accent/10 text-accent font-semibold rounded-md hover:bg-accent/20 transition-all duration-fast">
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Quick Guide */}
        <div className="bg-gradient-subtle border-2 border-accent rounded-lg p-2xl">
          <h3 className="text-2xl font-bold text-text-primary mb-xl">Quick Service Guide</h3>
          <div className="grid md:grid-cols-2 gap-2xl">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-md">Start Here</p>
              <ul className="space-y-sm text-text-secondary">
                <li>✓ Website not generating leads → Website Design</li>
                <li>✓ Can't handle inquiries manually → AI Chatbot</li>
                <li>✓ Not found in search results → SEO</li>
                <li>✓ Manual tasks wasting time → Workflow Automation</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-md">Scale These</p>
              <ul className="space-y-sm text-text-secondary">
                <li>✓ Website + SEO together = 5x results</li>
                <li>✓ Chatbot + CRM = every lead tracked</li>
                <li>✓ Email + Lead Capture = passive revenue</li>
                <li>✓ All services = revenue on autopilot</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
