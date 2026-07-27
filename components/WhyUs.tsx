export default function WhyUs() {
  const reasons = [
    {
      title: 'Results-Focused',
      description: 'We measure success by your revenue, not vanity metrics. Everything we build is designed to convert.'
    },
    {
      title: 'No Fluff',
      description: 'Direct communication. No buzzwords. Just practical solutions that solve real problems.'
    },
    {
      title: 'Premium Quality',
      description: 'Hand-crafted, optimized code. Fast load times. Accessibility standards met. Production-ready from day one.'
    },
    {
      title: 'Ongoing Support',
      description: 'We don\'t disappear after launch. Regular optimization, updates, and support included.'
    },
    {
      title: 'Competitive Pricing',
      description: 'Premium quality at reasonable prices. We scale our services based on your budget.'
    },
    {
      title: 'Your Partner',
      description: 'We invest in your success. Your growth is our growth. Long-term relationships built on trust.'
    },
  ]

  return (
    <section id="why-us" className="py-20 md:py-32 bg-dark-lighter relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-20 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Built by experts, designed for your success
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="p-8 bg-dark rounded border border-accent/10">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-400 text-sm">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
