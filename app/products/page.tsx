"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Search, MessageCircle, Filter } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { FloatingWhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const WHATSAPP_NUMBER = "263788559963"

type Category = "all" | "packs" | "beef" | "pork" | "specialty" | "ice"

const products = [
  {
    id: 1,
    name: "Braai Pack for 4",
    description: "Perfect for a family braai. Includes 500g boerewors, 4 lamb chops, 4 beef steaks, and 4 chicken pieces.",
    image: "/images/braai-pack.jpg",
    category: "packs",
    message: "Hello, I would like to order a Braai Pack for 4 people",
  },
  {
    id: 2,
    name: "Braai Pack for 6",
    description: "Ideal for gatherings. Includes 750g boerewors, 6 lamb chops, 6 beef steaks, and 6 chicken pieces.",
    image: "/images/braai-pack.jpg",
    category: "packs",
    message: "Hello, I would like to order a Braai Pack for 6 people",
  },
  {
    id: 3,
    name: "Family Hamper Weekly",
    description: "Complete weekly meat supply.",
    image: "/images/family-hamper.jpg",
    category: "packs",
    message: "Hello, I would like to order a Weekly Family Hamper",
  },
  {
    id: 4,
    name: "Family Hamper Monthly",
    description: "Monthly meat supply with mixed cuts.",
    image: "/images/family-hamper.jpg",
    category: "packs",
    message: "Hello, I would like to order a Monthly Family Hamper",
  },
  {
    id: 5,
    name: "Bulk Beef Pack 10kg",
    description: "Economical bulk beef.",
    image: "/images/bulk-beef.jpg",
    category: "beef",
    message: "Hello, I would like to order a 10kg Bulk Beef Pack",
  },
  {
    id: 6,
    name: "Bulk Beef Pack 20kg",
    description: "Large bulk beef order.",
    image: "/images/bulk-beef.jpg",
    category: "beef",
    message: "Hello, I would like to order a 20kg Bulk Beef Pack",
  },
  {
    id: 7,
    name: "Premium Steak Selection",
    description: "Sirloin, rump, and T-bone steaks.",
    image: "/images/hero-meat.jpg",
    category: "beef",
    message: "Hello, I would like to order the Premium Steak Selection",
  },
  {
    id: 8,
    name: "Fresh Beef Mince 1kg",
    description: "Freshly ground beef mince.",
    image: "/images/bulk-beef.jpg",
    category: "beef",
    message: "Hello, I would like to order 1kg Fresh Beef Mince",
  },
  {
    id: 9,
    name: "Boerewors 1kg",
    description: "Traditional boerewors.",
    image: "/images/braai-pack.jpg",
    category: "specialty",
    message: "Hello, I would like to order 1kg Boerewors",
  },
  {
    id: 10,
    name: "Pork Chops Pack",
    description: "Fresh pork chops (pack of 6).",
    image: "/images/family-hamper.jpg",
    category: "pork",
    message: "Hello, I would like to order Pork Chops",
  },
  {
    id: 11,
    name: "Pork Sausages 1kg",
    description: "Quality pork sausages.",
    image: "/images/braai-pack.jpg",
    category: "pork",
    message: "Hello, I would like to order 1kg Pork Sausages",
  },
  {
    id: 12,
    name: "Offal Selection",
    description: "Liver, kidneys, tripe.",
    image: "/images/butcher-cutting.jpg",
    category: "specialty",
    message: "Hello, I would like to order Offal",
  },
  {
    id: 13,
    name: "Soup Bones Pack",
    description: "Perfect for soup stock.",
    image: "/images/bulk-beef.jpg",
    category: "specialty",
    message: "Hello, I would like to order Soup Bones",
  },
  {
    id: 14,
    name: "Stewing Beef 2kg",
    description: "Cubed beef for stews.",
    image: "/images/bulk-beef.jpg",
    category: "beef",
    message: "Hello, I would like to order 2kg Stewing Beef",
  },
  {
    id: 15,
    name: "Marinated Beef Strips",
    description: "Ready-to-cook beef strips.",
    image: "/images/hero-meat.jpg",
    category: "specialty",
    message: "Hello, I would like to order Marinated Beef Strips",
  },

  // ❄️ ICE PRODUCTS
  {
    id: 16,
    name: "Ice Blocks (Single)",
    description: "High-quality ice blocks for daily use.",
    image: "/images/ce2.jpg",
    category: "ice",
    message: "Hello, I would like to order ice blocks",
  },
  {
    id: 17,
    name: "Bulk Ice Supply",
    description: "Bulk ice for businesses and butcheries.",
    image: "/images/ice3.jpg",
    category: "ice",
    message: "Hello, I would like to order bulk ice blocks",
  },
  {
    id: 18,
    name: "Event Ice Supply",
    description: "Ice for weddings and events.",
    image: "/images/ice4.jpg",
    category: "ice",
    message: "Hello, I need ice blocks for an event",
  },
  {
    id: 19,
    name: "Ice Delivery Service",
    description: "Fast delivery of ice blocks.",
    image: "/images/ice5.jpg",
    category: "ice",
    message: "Hello, I would like ice delivered",
  },
]

const categories = [
  { value: "all", label: "All Products" },
  { value: "packs", label: "Meat Packs" },
  { value: "beef", label: "Beef" },
  { value: "pork", label: "Pork" },
  { value: "specialty", label: "Specialty" },
  { value: "ice", label: "Ice Blocks ❄️" },
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory =
          activeCategory === "all" || product.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  return (
      <>
        <Header />
        <main>

          {/* HERO */}
          <section className="py-16 lg:py-24 bg-secondary/30">
            <div className="container mx-auto px-4 text-center max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                Fresh Meat & Ice Products
              </h1>
              <p className="text-muted-foreground mb-6">
                Browse and order via WhatsApp quickly and easily.
              </p>

              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5" />
                <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                />
              </div>
            </div>
          </section>

          {/* PRODUCTS */}
          <section className="py-12 lg:py-20">
            <div className="container mx-auto px-4">

              <Tabs value={activeCategory} onValueChange={(v) => setActiveCategory(v as Category)} className="mb-8">
                <TabsList className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                      <TabsTrigger key={cat.value} value={cat.value}>
                        {cat.label}
                      </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <Card key={product.id}>
                      <div className="relative h-48">
                        <Image src={product.image} alt={product.name} fill className="object-cover" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold mb-2">{product.name}</h3>
                        <p className="text-sm mb-4">{product.description}</p>
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.message)}`}
                            target="_blank"
                        >
                          <Button className="w-full bg-[#25D366] text-white">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Order Now
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                ))}
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