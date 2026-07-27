import DeviceMockup from './DeviceMockup'

interface ConversionHeroProps {
  onCTA: () => void
}

export default function ConversionHero({ onCTA }: ConversionHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Hero top section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-accent/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-lg text-center py-20">
        {/* Main headline - clean and direct */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary mb-2xl leading-tight">
          <span className="text-accent">AI</span> That Grows Your Business.
        </h1>

        {/* Subheadline - short and punchy */}
        <p className="text-xl md:text-2xl text-text-secondary mb-3xl max-w-2xl mx-auto leading-relaxed">
          Intelligent automations that automate your business and generate more revenue.
        </p>

        {/* Single focused CTA */}
        <div className="mb-2xl">
          <button
            onClick={onCTA}
            className="px-2xl py-lg bg-accent text-inverse font-bold text-lg rounded-lg hover:bg-accent-light transition-all duration-base transform hover:scale-105 active:scale-95"
          >
            Book a Free Discovery Call
          </button>
        </div>

        {/* Trust indicators - minimal */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-lg text-sm text-text-secondary">
          <span>✓ No credit card</span>
          <span className="hidden sm:block">•</span>
          <span>✓ 15-minute call</span>
          <span className="hidden sm:block">•</span>
          <span>✓ Trusted by 150+ businesses</span>
        </div>
        </div>
      </div>

      {/* Device Mockup section */}
      <div className="py-4xl md:py-5xl bg-bg-light">
        <div className="max-w-6xl mx-auto px-lg">
          <DeviceMockup />
        </div>
      </div>
    </section>
  )
}
