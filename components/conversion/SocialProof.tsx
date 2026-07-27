export default function SocialProof() {
  const logos = [
    { name: 'Legal Firm', initials: 'LF' },
    { name: 'Medical Practice', initials: 'MP' },
    { name: 'Service Co', initials: 'SC' },
    { name: 'Startup Inc', initials: 'SI' },
    { name: 'Local Business', initials: 'LB' },
    { name: 'Professional Services', initials: 'PS' },
  ]

  return (
    <section className="py-3xl md:py-4xl bg-bg-light border-y border-accent/10">
      <div className="max-w-5xl mx-auto px-lg">
        <p className="text-center text-text-tertiary text-sm font-semibold uppercase tracking-wider mb-2xl">
          Trusted by businesses across industries
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-lg md:gap-xl">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <div className="w-full aspect-square bg-bg-elevated rounded-lg border border-accent/10 flex items-center justify-center hover:border-accent/30 transition-all duration-fast">
                <span className="text-sm font-bold text-accent">{logo.initials}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-text-secondary text-sm mt-2xl">
          From dental practices to law firms to e-commerce businesses, our clients see average revenue growth of 40% in year one.
        </p>
      </div>
    </section>
  )
}
