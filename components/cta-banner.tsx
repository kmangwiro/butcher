import Image from "next/image"
import { Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "263785991943"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20CAULIMATE,%20I%20would%20like%20to%20place%20an%20order`

export function CTABanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/braai-pack.jpg"
          alt="Delicious braai meat"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-secondary/95" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <span className="inline-block text-sm font-semibold tracking-widest text-accent uppercase mb-4">
            Ready to Order?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary-foreground font-serif mb-6 text-balance">
            Fresh Meat Delivered <br className="hidden sm:block" />
            <span className="text-accent">To Your Doorstep</span>
          </h2>
          <p className="text-secondary-foreground/70 text-lg mb-10 max-w-2xl mx-auto">
            Order now via WhatsApp and enjoy premium quality meat from CAULIMATE INVESTMENTS. 
            Fast delivery in Chegutu and surrounding areas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1da851] text-white gap-3 h-16 px-10 text-lg font-semibold shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order via WhatsApp
              </Button>
            </a>
            <a href="tel:+263788559963">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 gap-2 h-16 px-10 text-lg font-semibold">
                <Phone className="h-5 w-5" />
                Call Us Now
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 text-secondary-foreground/70">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span>Chegutu, Zimbabwe</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-accent" />
              <span>+263 788 559 963</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              <span>Mon-Sat: 7AM - 6PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
