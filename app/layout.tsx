import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SEO & Web Design for Small Business | Get Found on Google | MegaWebCreations',
  description: 'We help small businesses get found on Google. SEO, local SEO, and conversion-focused websites that turn searches into customers—no long-term contracts.',
  keywords: 'SEO for small business, local SEO, search engine optimization, Google Business Profile, small business web design, get found on Google, SEO services',
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
    title: 'SEO & Web Design for Small Business | Get Found on Google',
    description: 'We help small businesses get found on Google. SEO, local SEO, and conversion-focused websites that turn searches into customers.',
    url: 'https://www.megawebcreations.com',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MegaWebCreations - SEO & Web Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO & Web Design for Small Business | Get Found on Google',
    description: 'We help small businesses get found on Google—with SEO and websites that turn searches into customers.',
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
