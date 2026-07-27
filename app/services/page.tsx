import Header from '@/components/Header'
import ServicesHero from '@/components/services/ServicesHero'
import WebServices from '@/components/services/WebServices'
import AIAutomationServices from '@/components/services/AIAutomationServices'
import SEOService from '@/components/services/SEOService'
import ConsultingService from '@/components/services/ConsultingService'
import ServiceComparison from '@/components/services/ServiceComparison'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Premium Web Design & AI Automation Services | MegaWebCreations',
  description: 'Custom websites, AI chatbots, SEO optimization, automation systems, and business consulting. Detailed service breakdown with pricing, timelines, and ROI expectations.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header onContactClick={() => {}} />
      <ServicesHero />
      <WebServices />
      <SEOService />
      <AIAutomationServices />
      <ConsultingService />
      <ServiceComparison />
      <Footer onContactClick={() => {}} />
    </main>
  )
}
