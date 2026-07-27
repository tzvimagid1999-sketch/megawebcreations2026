export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "We went from zero online presence to landing 8 projects per month. The ROI was immediate and it's been 18 months of consistent growth. Best business investment we've made.",
      author: 'Michael Chen',
      title: 'Founder, Local Contracting Firm',
      metric: '+$540K revenue',
      color: 'accent',
    },
    {
      quote:
        'The automation they built saved us from hiring two full-time employees. Our response time to leads dropped from 24 hours to instant. Clients love it.',
      author: 'Sarah Johnson',
      title: 'Practice Manager, Dental Group',
      metric: '+180% bookings',
      color: 'purple',
    },
    {
      quote:
        "They didn't just build a website—they built a revenue machine. Every month we see more qualified leads, and the team doesn't have to spend time on tasks that were taking forever.",
      author: 'Lisa Rodriguez',
      title: 'Partner, Law Firm',
      metric: '156% ROI',
      color: 'accent',
    },
    {
      quote:
        'Professional, responsive, and actually cares about our results. Not just another agency trying to upsell. They delivered exactly what they promised.',
      author: 'David Kumar',
      title: 'CEO, SaaS Startup',
      metric: '3x lead quality',
      color: 'purple',
    },
  ]

  return (
    <section className="py-4xl md:py-5xl bg-background">
      <div className="max-w-5xl mx-auto px-lg">
        <div className="text-center mb-3xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-md">
            What our clients say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-xl">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-bg-light border border-accent/10 rounded-lg p-xl hover:border-accent/30 transition-all duration-fast"
            >
              {/* Stars */}
              <div className="flex gap-sm mb-lg">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-text-primary mb-xl text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author info */}
              <div className="border-t border-accent/10 pt-lg">
                <p className="font-semibold text-text-primary">{testimonial.author}</p>
                <p className="text-sm text-text-secondary mb-md">{testimonial.title}</p>
                <p className={`text-sm font-bold ${testimonial.color === 'accent' ? 'text-accent' : 'text-purple'}`}>
                  {testimonial.metric}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
