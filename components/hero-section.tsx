"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "2630785991943"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20CAULIMATE,%20I%20would%20like%20to%20place%20an%20order`

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Premium beef steaks"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            EMA Approved Abattoir in Chegutu
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-8 font-serif tracking-tight">
            Premium
            <span className="block text-primary drop-shadow-lg">Quality Meat</span>
            <span className="block text-white text-4xl sm:text-5xl lg:text-6xl mt-4 font-medium">From Our Farm to Your Table</span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl">
            Fresh cuts, traditional boerewors, braai packs, and professional slaughter services. 
            Trusted by families and businesses across Zimbabwe.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebe5d] text-white gap-3 h-16 px-10 text-lg font-bold shadow-2xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#25D366]/50">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order on WhatsApp
              </Button>
            </a>
            <Link href="/products">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white/40 bg-white/10 text-white hover:bg-white hover:text-secondary gap-2 h-16 px-10 text-lg font-bold backdrop-blur-sm transition-all duration-300">
                View Our Products
              </Button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 lg:gap-12 mb-12">
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-primary">10+</p>
              <p className="text-white/60 text-sm uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-primary">5000+</p>
              <p className="text-white/60 text-sm uppercase tracking-wider mt-1">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl lg:text-5xl font-bold text-primary">100%</p>
              <p className="text-white/60 text-sm uppercase tracking-wider mt-1">Fresh Quality</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-white/90">Chegutu, Zimbabwe</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-white/90">Mon-Sat: 6AM - 6PM</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-white/90">+263 78 855 9963</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
