interface HeroProps {
  onGetStarted: () => void
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-dark">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
          <span className="text-accent text-sm font-semibold">Premium Web Solutions</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Websites that </span>
          <span className="gradient-text">drive revenue</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Stop wasting time on manual tasks. We design stunning websites, automate your workflow with AI, and optimize for conversions so you can focus on growing your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-gradient-accent text-dark font-bold rounded text-lg hover:shadow-lg glow-accent transition transform hover:scale-105"
          >
            Get Started Now
          </button>
          <button className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded text-lg hover:bg-accent/10 transition">
            See Our Work
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent">150+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent">98%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent">$2.3M+</div>
            <div className="text-gray-400">Client Revenue Generated</div>
          </div>
        </div>
      </div>
    </section>
  )
}
