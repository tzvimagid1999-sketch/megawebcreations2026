import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Web Design & AI Automation Services | MegaWebCreations',
  description: 'Custom websites, AI chatbots, SEO optimization, automation systems, and business consulting. Detailed service breakdown with pricing, timelines, and ROI expectations.',
  keywords: 'web design services, AI automation, chatbots, email automation, SEO services, CRM automation, lead capture, workflow automation, business automation',
  openGraph: {
    title: 'Premium Web Design & AI Automation Services',
    description: 'Explore our services: custom websites, AI chatbots, SEO, automation, and business consulting for growing businesses.',
    url: 'https://www.megawebcreations.com/services',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MegaWebCreations Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Web Design & AI Automation Services',
    description: 'Custom websites, AI chatbots, SEO optimization, automation systems.',
  },
  alternates: {
    canonical: 'https://www.megawebcreations.com/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
