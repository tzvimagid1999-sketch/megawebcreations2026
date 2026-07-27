interface FinalCTAProps {
  onCTA: () => void
}

export default function FinalCTA({ onCTA }: FinalCTAProps) {
  return (
    <section className="py-4xl md:py-5xl bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-lg text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-lg">
          You know what you need to do.
        </h2>

        <p className="text-xl text-text-secondary mb-2xl max-w-xl mx-auto leading-relaxed">
          The question isn't whether you should fix this. It's how much longer you're willing to wait.
        </p>

        <div className="bg-bg-light border border-accent/10 rounded-lg p-2xl mb-2xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-md">Here's what happens next:</p>
          <ol className="text-left space-y-md max-w-lg mx-auto">
            <li className="flex gap-md">
              <span className="font-bold text-accent flex-shrink-0">1.</span>
              <span className="text-text-secondary">
                Book a 15-minute discovery call (no credit card required)
              </span>
            </li>
            <li className="flex gap-md">
              <span className="font-bold text-accent flex-shrink-0">2.</span>
              <span className="text-text-secondary">
                We analyze your situation and show you exactly what we'd build
              </span>
            </li>
            <li className="flex gap-md">
              <span className="font-bold text-accent flex-shrink-0">3.</span>
              <span className="text-text-secondary">
                You get a custom proposal with timeline and expected ROI
              </span>
            </li>
            <li className="flex gap-md">
              <span className="font-bold text-accent flex-shrink-0">4.</span>
              <span className="text-text-secondary">
                If it makes sense, we start building. If not, no hard feelings.
              </span>
            </li>
          </ol>
        </div>

        <p className="text-text-secondary mb-2xl">
          That's it. Low risk. Transparent. No pressure.
        </p>

        {/* Primary CTA */}
        <button
          onClick={onCTA}
          className="px-2xl py-lg bg-gradient-accent text-inverse font-bold text-lg rounded-lg hover:shadow-glow-lg hover:brightness-110 active:brightness-95 transition-all duration-fast mb-lg w-full sm:w-auto"
        >
          Book Your Discovery Call Now
        </button>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-lg text-sm text-text-tertiary mt-2xl pt-2xl border-t border-accent/10">
          <div className="flex items-center gap-md">
            <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Takes 15 minutes
          </div>
          <div className="hidden sm:block text-text-tertiary">•</div>
          <div className="flex items-center gap-md">
            <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No credit card
          </div>
          <div className="hidden sm:block text-text-tertiary">•</div>
          <div className="flex items-center gap-md">
            <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No sales pitch
          </div>
        </div>
      </div>
    </section>
  )
}
