interface ServicesHeroProps {
  onCTA: () => void
}

export default function ServicesHero({ onCTA }: ServicesHeroProps) {
  return (
    <section className="pt-32 pb-4xl bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-lg text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-lg leading-tight">
          Services Built to Get You Found on Google
        </h1>
        <p className="text-xl text-text-secondary mb-2xl max-w-2xl mx-auto">
          SEO is the core of what we do—and websites are the foundation it builds on. Everything here is aimed at one thing: more of the right customers finding you.
        </p>

        <div className="grid sm:grid-cols-3 gap-lg max-w-2xl mx-auto mb-2xl">
          <div>
            <div className="text-3xl font-bold text-accent mb-md">SEO-First</div>
            <div className="text-sm text-text-tertiary">Our core focus</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-md">No Contracts</div>
            <div className="text-sm text-text-tertiary">Cancel anytime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-md">Founder-Led</div>
            <div className="text-sm text-text-tertiary">Direct access, no middlemen</div>
          </div>
        </div>

        <button
          onClick={onCTA}
          className="px-xl py-lg bg-gradient-accent text-inverse font-bold rounded-lg hover:shadow-glow-lg transition-all duration-base transform hover:scale-105 active:scale-95 will-change-transform"
        >
          Find the Right Service
        </button>
      </div>
    </section>
  )
}
