import Image from "next/image"
import { Metadata } from "next"
import { MessageCircle, Factory, Beef, Snowflake, Truck, Shield, Package } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { FloatingWhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Commercial Services | CAULIMATE INVESTMENTS - Abattoir & Meat Processing",
  description: "Professional abattoir and meat processing services. EMA & Vet approved slaughter services, carcass cutting, cold storage, and refrigerated transport in Zimbabwe.",
}

const WHATSAPP_NUMBER = "263788559963"

const commercialServices = [
  {
    icon: Factory,
    title: "Slaughter Services",
    description: "EMA and Veterinary approved slaughter facilities. Professional and humane processing of cattle, pigs, and goats with full compliance to food safety standards.",
    features: ["EMA Approved", "Veterinary Inspected", "Humane Processing", "Health Certificates"],
    message: "Hello, I would like to inquire about your slaughter services for livestock",
  },
  {
    icon: Beef,
    title: "Carcass Cutting & Packaging",
    description: "Professional carcass breakdown and portioning. Vacuum packaging available for extended shelf life. Custom cutting specifications to meet your business needs.",
    features: ["Professional Cutting", "Vacuum Packaging", "Custom Portions", "Labeling Services"],
    message: "Hello, I would like to inquire about carcass cutting and packaging services",
  },
  {
    icon: Package,
    title: "Sausage & Polony Production",
    description: "Quality sausage and polony manufacturing. Traditional and custom recipes available. Ideal for retailers and food service businesses.",
    features: ["Boerewors", "Fresh Sausages", "Polony", "Custom Recipes"],
    message: "Hello, I would like to inquire about sausage and polony production",
  },
  {
    icon: Snowflake,
    title: "Cold Storage Services",
    description: "Reliable cold chain storage facilities. Maintain product quality with our temperature-controlled storage rooms. Short-term and long-term storage available.",
    features: ["Temperature Controlled", "24/7 Monitoring", "Flexible Duration", "Secure Facilities"],
    message: "Hello, I would like to inquire about cold storage services",
  },
  {
    icon: Truck,
    title: "Refrigerated Transport",
    description: "Temperature-controlled meat transportation. Maintain cold chain integrity from our facility to your destination. Reliable and timely delivery.",
    features: ["Refrigerated Vehicles", "Cold Chain Integrity", "Timely Delivery", "GPS Tracking"],
    message: "Hello, I would like to inquire about refrigerated meat transport",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Comprehensive quality control throughout the value chain. Full traceability from farm to final product. Documentation and certification services.",
    features: ["Traceability", "Health Certificates", "Quality Testing", "Documentation"],
    message: "Hello, I would like to inquire about your quality assurance processes",
  },
]

export default function CommercialPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/abba.jpg"
              alt="Commercial meat processing facility"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/70" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                For Farmers & Businesses
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 font-serif text-balance">
                Commercial Abattoir Services
              </h1>
              <p className="text-lg text-background/80 mb-8 leading-relaxed">
                Professional meat processing solutions for farmers, retailers, and food service businesses. EMA and Veterinary approved facilities ensuring the highest standards of quality and safety.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20commercial%20services`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 h-14 px-8">
                  <MessageCircle className="h-5 w-5" />
                  Get a Quote
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-4">
                Our Commercial Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                End-to-end meat processing solutions with professional standards and reliable service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {commercialServices.map((service, index) => (
                <Card key={index} className="group border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full gap-2 border-accent text-foreground hover:bg-accent/10">
                        <MessageCircle className="h-4 w-4" />
                        Get Quote
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-4xl font-bold font-serif text-primary mb-2">EMA</h4>
                <p className="text-muted-foreground">Approved Facility</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold font-serif text-primary mb-2">24/7</h4>
                <p className="text-muted-foreground">Cold Storage Monitoring</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold font-serif text-primary mb-2">100%</h4>
                <p className="text-muted-foreground">Quality Commitment</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Commercial */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold font-serif mb-6">Strong Communication Across the Value Chain</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We maintain strong communication across the entire value chain to ensure efficiency, transparency, and customer satisfaction at every stage. From the farmer to the final consumer, we ensure quality is maintained throughout.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our commitment to integrity, ethical practices, and honesty means you can trust us with your livestock and business needs. We build strong relationships through reliable service and consistent quality.
              </p>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  )
}
