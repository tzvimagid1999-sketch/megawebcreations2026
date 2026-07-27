export default function ServicesHero() {
  return (
    <section className="pt-32 pb-4xl bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-lg text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-lg leading-tight">
          Premium Services Designed to Drive Revenue
        </h1>
        <p className="text-xl text-text-secondary mb-2xl max-w-2xl mx-auto">
          From custom websites to AI automation—each service is engineered for measurable business outcomes. No fluff. Just results.
        </p>

        <div className="grid sm:grid-cols-3 gap-lg max-w-2xl mx-auto">
          <div>
            <div className="text-3xl font-bold text-accent mb-md">10+</div>
            <div className="text-sm text-text-tertiary">Service Types</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-md">4-6 Weeks</div>
            <div className="text-sm text-text-tertiary">Average Implementation</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-md">40%</div>
            <div className="text-sm text-text-tertiary">Avg Revenue Growth</div>
          </div>
        </div>
      </div>
    </section>
  )
}
