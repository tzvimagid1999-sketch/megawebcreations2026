// Schema.org structured data helpers for SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MegaWebCreations',
  url: 'https://www.megawebcreations.com',
  logo: 'https://www.megawebcreations.com/logo.jpg',
  description: 'We design custom websites, build AI automation systems, and implement SEO strategies to help small businesses generate more leads and increase revenue.',
  sameAs: [
    'https://www.facebook.com/megawebcreations',
    'https://www.linkedin.com/company/megawebcreations',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    email: 'Megwebcraetions@gmail.com',
    availableLanguage: 'en',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  founder: {
    '@type': 'Person',
    name: 'MegaWebCreations Team',
  },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MegaWebCreations',
  image: 'https://www.megawebcreations.com/logo.jpg',
  description: 'Custom website design and AI automation services for small businesses',
  url: 'https://www.megawebcreations.com',
  telephone: '347-782-8453',
  email: 'Megwebcraetions@gmail.com',
  priceRange: '$1000-$25000',
  areaServed: {
    '@type': 'Country',
    name: 'US',
  },
  serviceType: ['Web Design', 'AI Automation', 'SEO Optimization'],
}

export const serviceSchema = (name: string, description: string, priceFrom: number, priceTo: number) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  provider: {
    '@type': 'Organization',
    name: 'MegaWebCreations',
    url: 'https://www.megawebcreations.com',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: `${priceFrom}-${priceTo}`,
  },
})

export const faqSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a website cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our custom websites range from $5,000 to $25,000 depending on complexity, features, and integrations needed. Most clients spend $8,000-$12,000. We offer performance-based options where you only pay if we hit revenue targets.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build a website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most websites are live in 4-6 weeks from kickoff. That includes design, development, copywriting, and SEO optimization.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you guarantee results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We cannot guarantee specific revenue numbers—every business is different. We offer performance-based pricing options because we are confident in our results.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if we want to end our relationship?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No long-term contracts. You can end the relationship anytime. Though most clients stay 3+ years because they keep getting results.',
        },
      },
    ],
  },
]

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})
