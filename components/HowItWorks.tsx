export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We learn about your business, goals, and challenges. No sales pitch—just real conversation.',
      time: 'Week 1'
    },
    {
      number: '02',
      title: 'Strategy & Design',
      description: 'We create a detailed strategy document and design concepts tailored to your vision.',
      time: 'Week 2-3'
    },
    {
      number: '03',
      title: 'Build & Optimize',
      description: 'We build your website, optimize for speed and SEO, and set up automation workflows.',
      time: 'Week 4-6'
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'We deploy with confidence. Then we monitor, optimize, and support you going forward.',
      time: 'Ongoing'
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            How we work with you
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            From initial consultation to launch and beyond—a streamlined process that delivers results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[200%] h-0.5 bg-gradient-to-r from-accent/40 to-transparent pointer-events-none"></div>
              )}

              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mb-6 font-bold text-dark text-xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 mb-4">{step.description}</p>
                <div className="text-sm text-accent font-semibold">{step.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
