interface ConversionHeroProps {
  onCTA: () => void
}

export default function ConversionHero({ onCTA }: ConversionHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-lg text-center">
        {/* Subheading */}
        <div className="inline-block mb-lg px-md py-sm bg-accent/10 border border-accent/30 rounded-full">
          <span className="text-sm font-semibold text-accent">Trusted by 150+ Businesses</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-lg leading-tight">
          Websites that generate customers.{' '}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            AI that automates your business.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-text-secondary mb-2xl max-w-2xl mx-auto leading-relaxed">
          Stop spending time on tasks that could be automated. Stop building websites that don't sell. We design conversion machines and automation systems that turn your leads into customers.
        </p>

        {/* Social proof stats */}
        <div className="grid grid-cols-3 gap-lg md:gap-2xl mb-2xl max-w-xl mx-auto">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent">150+</div>
            <div className="text-sm text-text-tertiary">Projects</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent">$2.3M</div>
            <div className="text-sm text-text-tertiary">Revenue Generated</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent">98%</div>
            <div className="text-sm text-text-tertiary">Client Retention</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-lg justify-center mb-xl">
          <button
            onClick={onCTA}
            className="px-xl py-lg bg-gradient-accent text-inverse font-bold text-lg rounded-lg hover:shadow-glow-lg hover:brightness-110 active:brightness-95 transition-all duration-fast"
          >
            Book a Free Discovery Call
          </button>
          <button className="px-xl py-lg border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-fast">
            See Our Work
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-lg text-sm text-text-tertiary">
          <div className="flex items-center gap-md">
            <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No credit card required
          </div>
          <div className="hidden sm:block text-text-tertiary">•</div>
          <div className="flex items-center gap-md">
            <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            15-minute call
          </div>
          <div className="hidden sm:block text-text-tertiary">•</div>
          <div className="flex items-center gap-md">
            <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Custom roadmap
          </div>
        </div>
      </div>
    </section>
  )
}
