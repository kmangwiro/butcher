import { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingWhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact Us | CAULIMATE INVESTMENTS - Butchery in Chegutu Zimbabwe",
  description: "Contact CAULIMATE INVESTMENTS for fresh meat and butchery services in Chegutu, Zimbabwe. Order via WhatsApp, call us, or visit our location.",
}

const WHATSAPP_NUMBER = "263788559963"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20I%20would%20like%20to%20inquire`

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: [
      { label: "Primary", value: "+263 785 991 943", href: "tel:+263785991943" },
      { label: "WhatsApp", value: "+263 788 559 963", href: `https://wa.me/${WHATSAPP_NUMBER}` },
    ],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: [
      { label: "Email", value: "takudzwamatangira01@gmail.com", href: "mailto:takudzwamatangira01@gmail.com" },
    ],
  },
  {
    icon: MapPin,
    title: "Location",
    details: [
      { label: "Address", value: "Chegutu, Zimbabwe", href: null },
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      { label: "Monday - Saturday", value: "6:00 AM - 6:00 PM", href: null },
      { label: "Sunday", value: "Closed", href: null },
    ],
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
                Get In Touch
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-serif mb-4 text-balance">
                Contact Us
              </h1>
              <p className="text-muted-foreground text-lg">
                Ready to order? Have questions? We&apos;re here to help. Reach out via WhatsApp for the fastest response.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((item, index) => (
                <Card key={index} className="text-center border border-border/50">
                  <CardHeader>
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-serif">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.details.map((detail, i) => (
                      <div key={i} className="mb-2 last:mb-0">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">{detail.label}</p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            target={detail.href.startsWith("http") ? "_blank" : undefined}
                            rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground font-medium hover:text-primary transition-colors break-all"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{detail.value}</p>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-serif">Quick Contact</CardTitle>
                  <p className="text-muted-foreground">Choose your preferred way to reach us</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full h-14 text-base bg-[#25D366] hover:bg-[#128C7E] text-white gap-3">
                      <MessageCircle className="h-6 w-6" />
                      Order via WhatsApp
                    </Button>
                  </a>
                  <div className="grid grid-cols-2 gap-4">
                    <a href="tel:+263785991943">
                      <Button variant="outline" className="w-full h-12 gap-2">
                        <Phone className="h-5 w-5" />
                        Call Us
                      </Button>
                    </a>
                    <a href="mailto:takudzwamatangira01@gmail.com">
                      <Button variant="outline" className="w-full h-12 gap-2">
                        <Mail className="h-5 w-5" />
                        Email Us
                      </Button>
                    </a>
                  </div>
                  <a href="https://facebook.com/CaulimateInvestments" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full h-12 gap-2 text-[#1877F2] border-[#1877F2] hover:bg-[#1877F2] hover:text-white">
                      <Facebook className="h-5 w-5" />
                      Follow us on Facebook
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">About Caulimate Investments</h2>
              <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                <p>
                  Caulimate Investments is an abattoir and butchery business dedicated to providing high-quality meat products and professional services tailored to customer needs.
                </p>
                <p>
                  We strive to deliver excellence through integrity, ethical practices, and honesty in all our operations. Our customers are the most important part of our business, and we are committed to building strong relationships through reliable service and consistent quality.
                </p>
                <p>
                  We also maintain strong communication across the entire value chain to ensure efficiency, transparency, and customer satisfaction at every stage.
                </p>
              </div>
              <div className="mt-8">
                <p className="text-primary font-semibold text-xl font-serif">
                  Fresh • Quality • Trusted Meat
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  )
}
