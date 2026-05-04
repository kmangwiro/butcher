import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { FeaturedProducts } from "@/components/featured-products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTABanner } from "@/components/cta-banner"
import { FloatingWhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <FeaturedProducts />
        <WhyChooseUs />
        <CTABanner />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  )
}
