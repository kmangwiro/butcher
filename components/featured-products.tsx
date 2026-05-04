"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_NUMBER = "263785991943"

const featuredProducts = [
  {
    id: 1,
    name: "Weekend Braai Pack",
    description: "Premium selection for your perfect braai - boerewors, steaks, chops & more",
    image: "/images/braai-pack.jpg",
    badge: "Best Seller",
    message: "Hello CAULIMATE, I would like to order a Weekend Braai Pack",
  },
  {
    id: 2,
    name: "Family Weekly Hamper",
    description: "Complete weekly meat supply for your whole family - variety of fresh cuts",
    image: "/images/family-meal.jpg",
    badge: "Popular",
    message: "Hello CAULIMATE, I would like to order a Family Weekly Hamper",
  },
  {
    id: 3,
    name: "Premium Beef Selection",
    description: "Hand-selected premium beef cuts - T-bone, ribeye, fillet & more",
    image: "/images/premium-steak.jpg",
    badge: "Premium",
    message: "Hello CAULIMATE, I would like to order the Premium Beef Selection",
  },
  {
    id: 4,
    name: "Traditional Boerewors",
    description: "Authentic handmade boerewors with traditional spices - a braai essential",
    image: "/images/boerewors.jpg",
    badge: "Local Favorite",
    message: "Hello CAULIMATE, I would like to order Traditional Boerewors",
  },
  {
    id: 5,
    name: "cooling time",
    description: "Authentic handmade boerewors with traditional spices - a braai essential",
    image: "/images/ice4.jpg",
    badge: "Local Favorite",
    message: "Hello CAULIMATE, I would like to order Traditional Boerewors",
  },{
    id: 6,
    name: "ice",
    description: "Authentic handmade boerewors with traditional spices - a braai essential",
    image: "/images/ice6.jpg",
    badge: "family Favorite",
    message: "Hello CAULIMATE, I would like to order Traditional Boerewors",
  },{
    id: 7,
    name: "Chill with friends",
    description: "Friends day out",
    image: "/images/ice7.jpg",
    badge: "Friends time",
    message: "Hello CAULIMATE, I would like to order Traditional Boerewors",
  },{
    id: 8,
    name: "Its cooling time",
    description: "Refresh and enjoy",
    image: "/images/ice9.jpg",
    badge: "cooling time",
    message: "Hello CAULIMATE, I would like to order Traditional Boerewors",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full">
              Our Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-serif text-balance">
              Popular Meat Packs
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-lg">
              Curated selections of our finest cuts, ready for order via WhatsApp.
            </p>
          </div>
          <Link href="/products" className="shrink-0">
            <Button variant="outline" size="lg" className="gap-2 h-12 px-6 font-semibold group">
              View All Products
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block text-xs font-bold bg-accent text-accent-foreground px-3 py-1.5 rounded-full shadow-md">
                    {product.badge}
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#25D366] hover:bg-[#1da851] text-white gap-2 shadow-xl">
                      <ShoppingCart className="h-4 w-4" />
                      Order Now
                    </Button>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold font-serif mb-2 text-card-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center lg:hidden">
          <Link href="/products">
            <Button size="lg" className="gap-2 h-12 px-8 font-semibold">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
