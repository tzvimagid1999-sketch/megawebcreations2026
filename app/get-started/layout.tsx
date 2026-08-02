import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Started — New Client Questionnaire | MegaWebCreations',
  description: 'Tell us about your business and goals so we can build an SEO and growth plan tailored to you. Takes about 5 minutes.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://www.megawebcreations.com/get-started',
  },
}

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
