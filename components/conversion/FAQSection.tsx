'use client'

import { useState } from 'react'

export default function FAQSection() {
  const [expanded, setExpanded] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How much does a website cost?',
      a: 'Our custom websites range from $5,000 to $25,000 depending on complexity, features, and integrations needed. Most of our clients spend $8,000-$12,000. We offer performance-based options where you pay based on the ROI generated.',
    },
    {
      q: 'How long does it take to build a website?',
      a: 'Most websites are live in 4-6 weeks from kickoff. That includes design, development, copywriting, and SEO optimization. We work fast because we have a proven process.',
    },
    {
      q: 'What about AI automation? How much does it cost?',
      a: 'Automation projects range from $3,000-$15,000 depending on complexity. Simple chatbots start around $3,000. Full workflow automation costs more but usually pays for itself within 2-3 months in time savings.',
    },
    {
      q: 'Do you guarantee results?',
      a: 'We can't guarantee specific revenue numbers—every business is different. What we do guarantee is our process, our effort, and our commitment to your success. We offer performance-based pricing options because we\'re confident in our results.',
    },
    {
      q: 'What if we\'re not happy with the work?',
      a: 'We have a revision process built in. During development, you see progress daily and can request changes. If we launch and results aren\'t meeting expectations, we optimize at no additional cost until they do.',
    },
    {
      q: 'Do you provide ongoing support?',
      a: 'Yes. Support and optimization are included in our service. We monitor your site/system monthly, make improvements based on performance data, and handle technical issues.',
    },
    {
      q: 'How do we know this will work for our business?',
      a: 'That\'s what the discovery call is for. We\'ll analyze your situation, show you exactly what we\'d build, and what ROI you can realistically expect. No obligation.',
    },
    {
      q: 'What if we want to end our relationship?',
      a: 'No long-term contracts. You can end the relationship anytime. (Though most of our clients stay 3+ years because they keep getting results.)',
    },
  ]

  return (
    <section className="py-4xl md:py-5xl bg-bg-light">
      <div className="max-w-3xl mx-auto px-lg">
        <div className="text-center mb-3xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-md">
            Questions we hear often
          </h2>
        </div>

        <div className="space-y-md">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-background border border-accent/10 rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-fast"
            >
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full px-xl py-lg flex items-center justify-between hover:bg-bg-elevated transition-colors duration-fast"
              >
                <span className="text-left font-semibold text-text-primary text-lg">{faq.q}</span>
                <span
                  className={`text-accent text-2xl flex-shrink-0 ml-lg transition-transform duration-fast ${
                    expanded === idx ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {expanded === idx && (
                <div className="px-xl py-lg border-t border-accent/10 bg-bg-light">
                  <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-3xl p-xl bg-gradient-subtle border-2 border-accent rounded-lg text-center">
          <p className="text-text-secondary mb-lg">
            Still have questions? We're happy to answer them on a call.
          </p>
          <p className="text-sm text-text-tertiary">
            Email us at <a href="mailto:Megwebcraetions@gmail.com" className="text-accent hover:underline">Megwebcraetions@gmail.com</a> or call 347-782-8453
          </p>
        </div>
      </div>
    </section>
  )
}
