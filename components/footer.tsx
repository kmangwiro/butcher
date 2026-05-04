import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Clock } from "lucide-react"

const WHATSAPP_NUMBER = "263785991943"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20CAULIMATE,%20I%20would%20like%20to%20inquire`

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-accent/30">
                <Image
                  src="/images/logo.jpg"
                  alt="CAULIMATE Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif">CAULIMATE</h3>
                <p className="text-xs tracking-widest text-secondary-foreground/60 uppercase">
                  Investments (PVT/LTD)
                </p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed mb-6">
              Premium butchery and abattoir services in Chegutu, Zimbabwe. 
              Delivering quality meat with integrity and excellence since 2014.
            </p>
            <p className="text-sm font-semibold text-accent">
              &quot;Excellence through integrity&quot;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-serif text-secondary-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Retail Services", href: "/retail" },
                { name: "Commercial Services", href: "/commercial" },
                { name: "Products", href: "/products" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-secondary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-serif text-secondary-foreground">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Fresh Meat Cuts",
                "Custom Processing",
                "Braai Packs & Hampers",
                "Slaughter Services",
                "Cold Storage",
                "Delivery Services",
              ].map((service) => (
                <li key={service} className="text-sm text-secondary-foreground/70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-serif text-secondary-foreground">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+263788559963" 
                  className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>+263 788 559 963</span>
                </a>
              </li>
              <li>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-[#25D366] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:takudzwamatangira01@gmail.com" 
                  className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-accent transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="break-all">takudzwamatangira01@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                  <div className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>Chegutu, Zimbabwe</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                  <div className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span>Mon - Sat: 7AM - 6PM</span>
                </div>
              </li>
              <li>
                <a 
                  href="https://facebook.com/CaulimateInvestments" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-[#1877F2] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center group-hover:bg-[#1877F2]/20 transition-colors">
                    <Facebook className="h-4 w-4" />
                  </div>
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-sm text-secondary-foreground/50">
              &copy; {new Date().getFullYear()} CAULIMATE INVESTMENTS (PVT/LTD). All rights reserved.
            </p>
            <p className="text-sm text-secondary-foreground/50">
              Premium Butchery & Abattoir Services in Chegutu, Zimbabwe
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
