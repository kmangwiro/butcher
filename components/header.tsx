"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Retail", href: "/retail" },
  { name: "Commercial", href: "/commercial" },
  { name: "Ice Supply", href: "/ice" }, // ✅ Clean now
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
]

const WHATSAPP_NUMBER = "2630785991943"
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20CAULIMATE,%20I%20would%20like%20to%20place%20an%20order`

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
      <>
        {/* Top Bar */}
        <div className="bg-secondary text-secondary-foreground py-2 hidden md:block">
          <div className="container mx-auto px-4 flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              Chegutu, Zimbabwe
            </span>
              <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-accent" />
              +263 788 559 963
            </span>
            </div>
            <span className="text-secondary-foreground/70">
            Mon - Sat: 7:00 AM - 6:00 PM
          </span>
          </div>
        </div>

        {/* Main Header */}
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? "bg-background/98 backdrop-blur-md shadow-lg"
                    : "bg-background"
            }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex h-20 items-center justify-between gap-4 lg:h-24">

              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 shrink-0 group">
                <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent transition-colors">
                  <Image
                      src="/images/logo.jpg"
                      alt="CAULIMATE Logo"
                      fill
                      className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold tracking-tight text-foreground font-serif">
                  CAULIMATE
                </span>
                  <span className="text-[10px] lg:text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  Investments
                </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navigation.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="px-4 py-2 text-sm font-medium text-foreground/80 rounded-lg transition-all hover:text-primary hover:bg-primary/5"
                    >
                      {item.name}
                    </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="flex items-center gap-3">
                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex"
                >
                  <Button className="bg-[#25D366] hover:bg-[#1da851] text-white gap-2 font-semibold h-11 px-6 shadow-lg shadow-[#25D366]/25 hover:shadow-xl transition-all">
                    <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606..." />
                    </svg>
                    Order Now
                  </Button>
                </a>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild className="lg:hidden">
                    <Button variant="ghost" size="icon" className="h-11 w-11">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>

                  <SheetContent side="right" className="w-[300px] sm:w-[380px]">
                    <div className="flex flex-col gap-8 mt-8">

                      {/* Mobile Logo */}
                      <div className="flex items-center gap-3 pb-6 border-b">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent/30">
                          <Image
                              src="/images/logo.jpg"
                              alt="CAULIMATE Logo"
                              fill
                              className="object-cover"
                          />
                        </div>
                        <div>
                        <span className="text-lg font-bold font-serif">
                          CAULIMATE
                        </span>
                          <p className="text-xs text-muted-foreground">
                            Premium Butchery
                          </p>
                        </div>
                      </div>

                      {/* Mobile Nav */}
                      <nav className="flex flex-col gap-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium py-3 px-4 rounded-lg hover:bg-muted"
                            >
                              {item.name}
                            </Link>
                        ))}
                      </nav>

                      {/* Contact */}
                      <div className="space-y-3 pt-4 border-t">
                        <p className="flex items-center gap-3 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 text-accent" />
                          Chegutu, Zimbabwe
                        </p>
                        <p className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4 text-accent" />
                          +263 788 559 963
                        </p>
                      </div>

                      {/* WhatsApp */}
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-[#25D366] text-white h-14">
                          Order via WhatsApp
                        </Button>
                      </a>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

            </div>
          </div>
        </header>
      </>
  )
}