import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO & Web Design Services | MegaWebCreations',
  description: 'SEO, local SEO, and conversion-focused web design for small businesses. Detailed service breakdown with timelines and what to expect.',
  keywords: 'SEO services, local SEO, search engine optimization, small business web design, Google Business Profile, get found on Google',
  openGraph: {
    title: 'SEO & Web Design Services',
    description: 'SEO, local SEO, and conversion-focused web design for small businesses.',
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
