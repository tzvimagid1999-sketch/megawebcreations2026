import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | MegaWebCreations',
  description: 'MegaWebCreations privacy policy. Learn how we protect and use your data.',
  keywords: 'privacy policy, data protection, GDPR, CCPA',
  openGraph: {
    title: 'Privacy Policy - MegaWebCreations',
    description: 'We take your privacy seriously.',
    url: 'https://megawebcreations.com/privacy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://megawebcreations.com/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
