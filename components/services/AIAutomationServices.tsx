const aiServices = [
  {
    icon: '🤖',
    name: 'AI Chatbots',
    description: 'Answer customer questions 24/7 automatically',
    whatItIs: 'Intelligent chatbots powered by AI that handle customer inquiries, answer FAQs, qualify leads, and schedule appointments—all without human intervention.',
    whyItMatters: 'Most businesses lose leads because they can\'t respond instantly. Customers get frustrated and go to competitors. A chatbot changes everything.',
    benefits: ['Instant customer responses', 'Available 24/7', 'Qualify leads automatically', 'Reduce support costs', 'Improved customer satisfaction'],
    useCases: ['Law firms fielding client questions', 'Service businesses with recurring FAQs', 'E-commerce product questions', 'Lead qualification at scale'],
    outcomes: ['50% reduction in missed inquiries', '80% faster response times', '30% more qualified leads', 'Save 10+ hours/week'],
    timeline: '2-3 weeks',
    investment: '$3,000 - $7,000',
  },
  {
    icon: '📅',
    name: 'AI Appointment Booking',
    description: 'Automate scheduling without back-and-forth emails',
    whatItIs: 'Intelligent scheduling system that books appointments directly, checks availability, sends confirmations, and reminders—all automated.',
    whyItMatters: 'Manual scheduling is a time-waster. Clients prefer booking themselves. Automation reduces no-shows by 40%.',
    benefits: ['No scheduling back-and-forth', 'Automated confirmations & reminders', 'Timezone-aware scheduling', 'Reduce no-shows 40%+', 'Save 5+ hours/week'],
    useCases: ['Consultants with many calls', 'Dental practices and medical offices', 'Coaching and training businesses', 'Professional services'],
    outcomes: ['40% fewer no-shows', '5+ hours saved per week', '20% increase in bookings', 'Better customer experience'],
    timeline: '1-2 weeks',
    investment: '$2,000 - $4,000',
  },
  {
    icon: '🔗',
    name: 'CRM Automation',
    description: 'Sales pipeline management that runs itself',
    whatItIs: 'Automated CRM workflows that capture leads, segment prospects, send follow-ups, and track pipeline—no manual data entry.',
    whyItMatters: 'Most leads fall through the cracks because follow-up is inconsistent. Automation ensures no lead gets ignored.',
    benefits: ['Never miss a lead', 'Automatic follow-ups', 'Lead scoring & qualification', 'Sales pipeline visibility', 'Increase close rate 20%+'],
    useCases: ['Sales teams managing 50+ leads/month', 'E-commerce tracking customer interactions', 'Real estate with many prospects', 'B2B service businesses'],
    outcomes: ['20% improvement in close rate', 'Reduce sales cycle 30%', 'Never lose a lead again', '10+ hours saved weekly'],
    timeline: '2-3 weeks',
    investment: '$2,500 - $5,000',
  },
  {
    icon: '📧',
    name: 'Email Automation',
    description: 'Nurture leads automatically with personalized sequences',
    whatItIs: 'Smart email sequences that send the right message at the right time based on customer behavior—completely hands-off.',
    whyItMatters: 'Email has the highest ROI of any channel. Automation scales it to 1000+ people without extra effort.',
    benefits: ['Auto-nurture 1000+ leads', 'Behavioral triggers', 'Personalization at scale', 'Reduce churn 25%+', 'Generate revenue on autopilot'],
    useCases: ['Newsletter subscribers needing nurturing', 'E-commerce abandoned cart recovery', 'Membership/subscription businesses', 'Digital product launches'],
    outcomes: ['40% higher email open rates', '$5-10 revenue per subscriber', 'Zero wasted time on emails', 'Predictable monthly revenue'],
    timeline: '1-2 weeks',
    investment: '$1,500 - $3,500',
  },
  {
    icon: '📝',
    name: 'Lead Capture Systems',
    description: 'Turn website visitors into qualified leads automatically',
    whatItIs: 'Smart forms, popups, and landing pages that capture visitor information and automatically score leads based on fit.',
    whyItMatters: 'Most websites generate traffic but don\'t capture contact info. Every visitor that leaves is lost revenue.',
    benefits: ['Capture 5x more leads', 'Automatic lead scoring', 'Smart form logic', 'Reduce friction', 'Higher conversion rates'],
    useCases: ['Websites with high traffic but low conversions', 'Service businesses needing qualified inquiries', 'SaaS free trial signups', 'Webinar registrations'],
    outcomes: ['5x increase in captured leads', '20+ qualified leads per week', 'Higher quality prospects', '3x lead generation ROI'],
    timeline: '1-2 weeks',
    investment: '$1,000 - $2,500',
  },
  {
    icon: '⚙️',
    name: 'Workflow Automation',
    description: 'Eliminate repetitive tasks that waste your team\'s time',
    whatItIs: 'Custom automation that connects your tools and systems, eliminating manual data entry, copying, and repetitive tasks.',
    whyItMatters: 'Repetitive tasks cost businesses millions in wasted hours. Automation typically pays for itself in weeks.',
    benefits: ['Save 20+ hours/week per person', 'Zero manual data entry', 'Reduce human error 90%+', 'Faster processes', 'Happier employees'],
    useCases: ['Payroll and HR processes', 'Order fulfillment and shipping', 'Invoice creation and payment tracking', 'Customer onboarding'],
    outcomes: ['20+ hours saved weekly per person', '90% reduction in errors', 'Faster turnaround times', 'Massive cost savings'],
    timeline: '2-4 weeks',
    investment: '$3,000 - $8,000',
  },
]

export default function AIAutomationServices() {
  return (
    <section className="py-4xl md:py-5xl bg-bg-light">
      <div className="max-w-5xl mx-auto px-lg">
        <div className="mb-3xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">AI & Automation Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-md">
            Work less. Earn more. Let AI handle it.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {aiServices.map((service, idx) => (
            <div key={idx} className="bg-background border border-accent/10 rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-fast group h-full flex flex-col">
              {/* Header */}
              <div className="p-xl border-b border-accent/10">
                <div className="text-4xl mb-md">{service.icon}</div>
                <h3 className="text-xl font-bold text-text-primary mb-md">{service.name}</h3>
                <p className="text-sm text-text-secondary">{service.description}</p>
              </div>

              {/* Content */}
              <div className="p-xl space-y-lg flex-1 flex flex-col">
                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-md">What It Does</p>
                  <p className="text-sm text-text-secondary">{service.whatItIs}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-md">Why It Matters</p>
                  <p className="text-sm text-text-secondary">{service.whyItMatters}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-md">Benefits</p>
                  <ul className="space-y-xs">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-md text-xs text-text-secondary">
                        <span className="text-accent flex-shrink-0">+</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-md">Best For</p>
                  <ul className="space-y-xs">
                    {service.useCases.map((useCase, i) => (
                      <li key={i} className="text-xs text-text-secondary flex gap-md">
                        <span className="text-purple flex-shrink-0">•</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-md">Results You\'ll See</p>
                  <ul className="space-y-xs">
                    {service.outcomes.map((outcome, i) => (
                      <li key={i} className="text-xs text-text-secondary flex gap-md">
                        <span className="text-success flex-shrink-0">↑</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-md pt-lg border-t border-accent/10 mt-auto">
                  <div>
                    <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-sm">Timeline</p>
                    <p className="text-sm font-bold text-text-primary">{service.timeline}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-sm">Cost</p>
                    <p className="text-sm font-bold text-accent">{service.investment}</p>
                  </div>
                </div>

                <button className="w-full px-lg py-md bg-accent/10 text-accent font-semibold rounded-md hover:bg-accent/20 transition-all duration-fast text-sm">
                  Explore This Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
