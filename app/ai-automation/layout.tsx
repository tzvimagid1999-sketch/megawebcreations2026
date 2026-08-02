import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation for Small Business | Capture & Book Leads 24/7 | MegaWebCreations',
  description: 'AI automation for small business: capture, qualify, and book leads automatically, 24/7. Chatbots, lead follow-up, and scheduling that run themselves so you stop losing customers to slow replies.',
  keywords: 'AI automation for small business, business automation services, AI chatbot for business, lead automation, automated appointment booking, AI lead qualification, workflow automation, small business AI',
  openGraph: {
    title: 'AI Automation for Small Business | Capture & Book Leads 24/7',
    description: 'AI systems that capture, qualify, and book your leads automatically — 24/7 — so you never lose a customer to a slow reply.',
    url: 'https://www.megawebcreations.com/ai-automation',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MegaWebCreations — AI Automation for Small Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation for Small Business | Capture & Book Leads 24/7',
    description: 'AI systems that capture, qualify, and book your leads automatically — 24/7.',
  },
  alternates: {
    canonical: 'https://www.megawebcreations.com/ai-automation',
  },
}

export default function AIAutomationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
