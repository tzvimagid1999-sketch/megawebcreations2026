import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MegaWebCreations | Web Design, AI Automation & SEO',
  description: 'We design custom websites, build AI automations, and implement SEO strategies to help your business grow. Premium web solutions for small businesses, startups, and professionals.',
  keywords: 'web design, AI automation, SEO, web development, lead generation',
  openGraph: {
    title: 'MegaWebCreations | Web Design, AI Automation & SEO',
    description: 'We design custom websites, build AI automations, and implement SEO strategies to help your business grow.',
    type: 'website',
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
