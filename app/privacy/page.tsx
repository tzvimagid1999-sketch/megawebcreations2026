'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'
import ContactModal from '@/components/ContactModal'

export default function PrivacyPage() {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header onContactClick={() => setShowContactModal(true)} />

      <section className="py-4xl md:py-5xl bg-background">
        <div className="max-w-3xl mx-auto px-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-2xl">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary mb-xl leading-relaxed">
              Last updated: July 27, 2026
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-2xl mb-lg">1. Introduction</h2>
            <p className="text-text-secondary mb-lg leading-relaxed">
              MegaWebCreations ("we", "us", "our") operates the megawebcreations.com website ("Service"). We are committed to protecting your privacy. This Privacy Policy explains our practices and your rights regarding your personal data.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-2xl mb-lg">2. Information We Collect</h2>
            <p className="text-text-secondary mb-lg leading-relaxed">
              We collect information you voluntarily provide:
            </p>
            <ul className="list-disc list-inside text-text-secondary mb-lg space-y-md">
              <li>Name, email address, phone number (from contact forms)</li>
              <li>Service interests (from form submissions)</li>
              <li>Project description and goals (from inquiries)</li>
            </ul>

            <p className="text-text-secondary mb-lg leading-relaxed">
              We also automatically collect:
            </p>
            <ul className="list-disc list-inside text-text-secondary mb-lg space-y-md">
              <li>Browser type, IP address, pages visited (via analytics)</li>
              <li>Device information and operating system</li>
              <li>Referral source (how you found us)</li>
            </ul>

            <h2 className="text-2xl font-bold text-text-primary mt-2xl mb-lg">3. How We Use Information</h2>
            <p className="text-text-secondary mb-lg leading-relaxed">
              We use collected information to:
            </p>
            <ul className="list-disc list-inside text-text-secondary mb-lg space-y-md">
              <li>Respond to your inquiries and provide services</li>
              <li>Schedule and conduct discovery calls</li>
              <li>Send follow-up communications about your project</li>
              <li>Improve our website and services</li>
              <li>Analyze website performance (analytics only)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-text-primary mt-2xl mb-lg">4. Data Storage & Security</h2>
            <p className="text-text-secondary mb-lg leading-relaxed">
              Your data is stored securely and encrypted in transit. We use HTTPS for all connections. Data is retained only as long as necessary to provide services or comply with legal requirements.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-2xl mb-lg">5. Third-Party Services</h2>
            <p className="text-text-secondary mb-lg leading-relaxed">
              We use third-party services that may collect data:
            </p>
            <ul className="list-disc list-inside text-text-secondary mb-lg space-y-md">
              <li><strong>Formspree</strong> - Form submissions (email delivery)</li>
              <li><strong>Vercel</strong> - Website hosting and analytics</li>
              <li><strong>Google Analytics</strong> - Website usage analytics</li>
            </ul>
            <p className="text-text-secondary mb-lg leading-relaxed">
              These services have their own privacy policies. We encourage you to review them.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-2xl mb-lg">6. Your Rights (GDPR/CCPA)</h2>
            <p className="text-text-secondary mb-lg leading-relaxed">
              Depending on your location, you have rights to:
            </p>
            <ul className="list-disc list-inside text-text-secondary mb-lg space-y-md">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your data (right to be forgotten)</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability (receive data in standard format)</li>
            </ul>
            <p className="text-text-secondary mb-lg leading-relaxed">
              To exercise these rights, contact us at: <a href="mailto:Megwebcraetions@gmail.com" className="text-accent hover:underline">Megwebcraetions@gmail.com</a>
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-2xl mb-lg">7. Cookies</h2>
            <p className="text-text-secondary mb-lg leading-relaxed">
              Our website uses essential cookies for functionality. You can disable non-essential cookies in your browser settings. Note: this may affect website functionality.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-2xl mb-lg">8. Children's Privacy</h2>
            <p className="text-text-secondary mb-lg leading-relaxed">
              Our Service is not directed to children under 13. We do not knowingly collect personal data from children. If we become aware of this, we will delete it immediately.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-2xl mb-lg">9. Changes to This Policy</h2>
            <p className="text-text-secondary mb-lg leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of significant changes via email or prominent notice on our website.
            </p>

            <h2 className="text-2xl font-bold text-text-primary mt-2xl mb-lg">10. Contact Us</h2>
            <p className="text-text-secondary mb-lg leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact:
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong>Email:</strong> <a href="mailto:Megwebcraetions@gmail.com" className="text-accent hover:underline">Megwebcraetions@gmail.com</a><br />
              <strong>Phone:</strong> 347-782-8453
            </p>
          </div>
        </div>
      </section>

      <Footer onContactClick={() => setShowContactModal(true)} />
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </main>
  )
}
