import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Design & AI Automation for Florida Small Businesses | MegaWebCreations',
  description: 'Florida small businesses: get a conversion-focused website plus AI automation that captures and books leads 24/7. Founder-led studio serving Miami, Orlando, Tampa, Jacksonville, and all of FL.',
  keywords: 'Florida web design, web design Miami, web design Orlando, web design Tampa, AI automation Florida, small business website Florida, SEO Florida, lead automation Florida',
  openGraph: {
    title: 'Web Design & AI Automation for Florida Small Businesses',
    description: 'A conversion-focused website plus AI that captures and books leads 24/7 — built for Florida small businesses.',
    url: 'https://www.megawebcreations.com/florida',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MegaWebCreations — Web Design & AI Automation for Florida',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & AI Automation for Florida Small Businesses',
    description: 'A conversion-focused website plus AI that captures and books leads 24/7 — built for Florida businesses.',
  },
  alternates: {
    canonical: 'https://www.megawebcreations.com/florida',
  },
}

export default function FloridaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
