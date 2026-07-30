import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About MegaWebCreations | Our Story & Team',
  description: 'Learn about MegaWebCreations, our mission to drive revenue for businesses, and why 150+ companies trust us.',
  keywords: 'about us, web design agency, AI automation company, team',
  openGraph: {
    title: 'About MegaWebCreations',
    description: 'Obsessed with your revenue. 150+ businesses, $2.3M generated.',
    url: 'https://www.megawebcreations.com/about',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MegaWebCreations About',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About MegaWebCreations',
    description: 'Obsessed with your revenue. 150+ businesses helped.',
  },
  alternates: {
    canonical: 'https://www.megawebcreations.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
