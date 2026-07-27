interface ServicesProps {
  onLearnMore: () => void
}

const services = [
  {
    icon: '🎨',
    title: 'Custom Website Design',
    description: 'Beautiful, responsive websites that convert visitors into customers. Optimized for speed, mobile, and search engines.',
    benefit: 'Generate qualified leads automatically'
  },
  {
    icon: '⚡',
    title: 'AI Automation',
    description: 'Intelligent systems that handle repetitive tasks. Email sequences, scheduling, data processing—all automated.',
    benefit: 'Save 10+ hours per week'
  },
  {
    icon: '🚀',
    title: 'SEO Strategy',
    description: 'Get found by customers searching for your services. Technical SEO, content strategy, and link building that works.',
    benefit: 'Rank higher, get more traffic'
  },
]

export default function Services({ onLearnMore }: ServicesProps) {
  return (
    <section id="services" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-80 h-80 bg-purple/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            Everything you need to grow online
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            We don't just build websites. We create revenue-generating systems that work 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-8 bg-dark-lighter rounded border border-accent/10 hover:border-accent/40 hover:bg-dark-lighter/80 transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="pt-4 border-t border-accent/10">
                <div className="text-sm text-accent font-semibold">{service.benefit}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={onLearnMore}
            className="px-8 py-3 bg-accent text-dark font-semibold rounded hover:shadow-lg glow-accent transition"
          >
            Let's Talk About Your Project
          </button>
        </div>
      </div>
    </section>
  )
}
