import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Custom Websites & AI Automation for Small Business | MegaWebCreations',
  description: 'We design conversion-focused websites, build AI automation systems, and implement SEO strategies. Help your business generate more leads, save time, and increase revenue.',
  keywords: 'web design, custom website, AI automation, chatbots, email automation, SEO optimization, lead generation, small business marketing',
  metadataBase: new URL('https://www.megawebcreations.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Custom Websites & AI Automation for Small Business',
    description: 'We design conversion-focused websites, build AI automation systems, and implement SEO strategies. Help your business generate more leads, save time, and increase revenue.',
    url: 'https://www.megawebcreations.com',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MegaWebCreations - Web Design & AI Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Websites & AI Automation for Small Business',
    description: 'We design conversion-focused websites and build AI automation systems to help your business grow.',
  },
  alternates: {
    canonical: 'https://www.megawebcreations.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
