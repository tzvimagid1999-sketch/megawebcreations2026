import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design System - MegaWebCreations',
  description: 'Visual guide to MegaWebCreations design system. Color palette, typography, components, and design tokens for building premium web experiences.',
  keywords: 'design system, component library, design tokens, UI kit, color palette, typography',
  openGraph: {
    title: 'Design System - MegaWebCreations',
    description: 'Comprehensive design system showcasing colors, components, and design tokens.',
    url: 'https://megawebcreations.com/showcase',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MegaWebCreations Design System',
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
