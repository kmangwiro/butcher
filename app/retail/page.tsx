import Image from "next/image"
import { Metadata } from "next"
import { MessageCircle, Scissors, Package, Truck, UtensilsCrossed, ChefHat, Gift } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { FloatingWhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Retail Services | CAULIMATE INVESTMENTS - Fresh Meat Cuts in Chegutu",
  description: "Premium retail butchery services. Fresh meat cuts, custom processing, braai packs, family hampers, and home delivery in Chegutu, Zimbabwe.",
}

const WHATSAPP_NUMBER = "263788559963"

const retailServices = [
  {
    icon: Scissors,
    title: "Fresh Meat Cuts",
    description: "Premium quality beef, pork, and goat cuts. Professionally butchered to your specifications with the freshest meat available daily.",
    message: "Hello, I would like to order fresh meat cuts",
  },
  {
    icon: ChefHat,
    title: "Custom Processing",
    description: "Bring your own livestock and we'll process it exactly how you want. Professional cutting, deboning, and portioning services.",
    message: "Hello, I would like to inquire about custom meat processing",
  },
  {
    icon: Package,
    title: "Bulk Orders & Hampers",
    description: "Weekly or monthly meat hampers for families. Economical bulk purchasing options with variety packs to suit your needs.",
    message: "Hello, I would like to order a bulk meat hamper",
  },
  {
    icon: UtensilsCrossed,
    title: "Specialty Cuts & Offals",
    description: "Traditional cuts, offals, and specialty items. Liver, kidneys, tripe, and more for authentic African cooking.",
    message: "Hello, I would like to order specialty cuts or offals",
  },
  {
    icon: Gift,
    title: "Ready-to-Cook Products",
    description: "Marinated meats, boerewors, mince, and ready-to-braai packs. Save time with our pre-prepared meat products.",
    message: "Hello, I would like to order ready-to-cook meat products",
  },
  {
    icon: Truck,
    title: "Delivery Services",
    description: "Fresh meat delivered to your doorstep in Chegutu and surrounding areas. Fast, reliable delivery service.",
    message: "Hello, I would like to inquire about meat delivery",
  },
]

export default function RetailPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/retail.jpg"
              alt="Professional butcher cutting meat"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                For Home & Family
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 font-serif text-balance">
                Retail Butchery Services
              </h1>
              <p className="text-lg text-background/80 mb-8 leading-relaxed">
                Premium quality meat for your home. From fresh daily cuts to custom processing and convenient delivery services, we bring the butcher shop experience to you.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20I%20would%20like%20to%20order%20retail%20meat%20products`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 h-14 px-8">
                  <MessageCircle className="h-5 w-5" />
                  Order Now
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
                Our Retail Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Quality meat products and services tailored for families and home cooking needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {retailServices.map((service, index) => (
                <Card key={index} className="group border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-6">
                      {service.description}
                    </CardDescription>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white gap-2">
                        <MessageCircle className="h-4 w-4" />
                        Inquire Now
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Promise */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">Our Quality Promise</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Caulimate Investments, we believe in delivering excellence through integrity, ethical practices, and honesty. Every cut of meat is handled with care, ensuring you receive only the freshest, highest-quality products for your family.
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
