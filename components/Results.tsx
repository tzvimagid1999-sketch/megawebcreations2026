export default function Results() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Dental Practice Owner',
      quote: 'Our new website increased patient bookings by 180% in the first month. The AI chatbot alone saved us 15 hours per week.',
      metric: '180% more appointments'
    },
    {
      name: 'Michael Chen',
      title: 'Local Contractor',
      quote: 'Went from zero online presence to landing 8 projects a month. Best investment we\'ve made in the business.',
      metric: '$45K monthly revenue'
    },
    {
      name: 'Lisa Rodriguez',
      title: 'Law Firm Partner',
      quote: 'Professional, reliable, and results-driven. They didn\'t just build a website—they built us a lead generation machine.',
      metric: '156% ROI'
    },
    {
      name: 'David Kumar',
      title: 'Startup Founder',
      quote: 'The automation workflows saved us from hiring two FTE. Their support team is incredibly responsive.',
      metric: '$60K/year in savings'
    },
  ]

  return (
    <section id="results" className="py-20 md:py-32 bg-dark-lighter relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold">Real Results</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-white">
            What our clients achieve
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            We measure success by the impact on your bottom line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 bg-dark rounded border border-accent/20 hover:border-accent/40 transition"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t border-accent/10 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.title}</div>
                <div className="text-accent font-bold mt-2">{testimonial.metric}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-accent/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">150+</div>
            <div className="text-gray-400 mt-2">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">98%</div>
            <div className="text-gray-400 mt-2">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">$2.3M+</div>
            <div className="text-gray-400 mt-2">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">8 Yrs</div>
            <div className="text-gray-400 mt-2">Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
