interface ConversionHeroProps {
  onCTA: () => void
}

export default function ConversionHero({ onCTA }: ConversionHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-lg text-center">
        {/* Subheading - fade in */}
        <div className="inline-block mb-lg px-md py-sm bg-accent/10 border border-accent/30 rounded-full animate-fade" style={{ animationDelay: '100ms' }}>
          <span className="text-sm font-semibold text-accent">Trusted by 150+ Businesses</span>
        </div>

        {/* Main headline - slide up */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-lg leading-tight animate-slide-up" style={{ animationDelay: '200ms' }}>
          Websites that generate customers.{' '}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            AI that automates your business.
          </span>
        </h1>

        {/* Subheadline - fade in */}
        <p className="text-lg md:text-xl text-text-secondary mb-2xl max-w-2xl mx-auto leading-relaxed animate-fade" style={{ animationDelay: '300ms' }}>
          Stop wasting time on manual tasks. Stop building websites that don't sell. We design websites built to convert and AI systems that handle your repetitive work—so you can focus on growing.
        </p>

        {/* Social proof stats - staggered animation */}
        <div className="grid grid-cols-3 gap-lg md:gap-2xl mb-2xl max-w-xl mx-auto">
          <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
            <div className="text-3xl md:text-4xl font-bold text-accent">150+</div>
            <div className="text-sm text-text-tertiary">Projects</div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '500ms' }}>
            <div className="text-3xl md:text-4xl font-bold text-accent">$2.3M</div>
            <div className="text-sm text-text-tertiary">Revenue Generated</div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '600ms' }}>
            <div className="text-3xl md:text-4xl font-bold text-accent">98%</div>
            <div className="text-sm text-text-tertiary">Client Retention</div>
          </div>
        </div>

        {/* CTAs - fade in with hover animations */}
        <div className="flex flex-col sm:flex-row gap-lg justify-center mb-xl animate-fade" style={{ animationDelay: '700ms' }}>
          <button
            onClick={onCTA}
            className="px-xl py-lg bg-gradient-accent text-inverse font-bold text-lg rounded-lg hover:shadow-glow-lg hover:brightness-110 active:brightness-95 transition-all duration-base transform hover:scale-105 active:scale-95 will-change-transform"
          >
            Book a Free Discovery Call
          </button>
          <button className="px-xl py-lg border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-base transform hover:scale-105 active:scale-95 will-change-transform">
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
