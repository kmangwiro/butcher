import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingBag, Building2, ChefHat, Package, Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesOverview() {
  return (
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">

          {/* Section Header */}
          <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full">
            What We Offer
          </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-serif mb-6 text-balance">
              Three Ways to Serve You
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              From family meals to commercial operations and cold-chain support, we deliver complete solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* ================= RETAIL ================= */}
            <div className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <Image
                    src="/images/butcher-shop.jpg"
                    alt="Retail butchery services"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                  <ShoppingBag className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>

              <div className="p-8 pt-0 -mt-12 relative z-10">
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                  <h3 className="text-2xl font-bold font-serif mb-3">Retail Services</h3>
                  <p className="text-muted-foreground mb-6">
                    Premium cuts for your home. Fresh meat, custom processing, and delivery.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChefHat className="h-4 w-4 text-primary" />
                      Fresh Cuts
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Package className="h-4 w-4 text-primary" />
                      Braai Packs
                    </div>
                  </div>

                  <Link href="/retail">
                    <Button className="w-full gap-2 h-12">
                      Explore Retail
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* ================= COMMERCIAL ================= */}
            <div className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-72 overflow-hidden">
                <Image
                    src="/images/abba.jpg"
                    alt="Commercial services"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shadow-lg">
                  <Building2 className="h-7 w-7 text-secondary-foreground" />
                </div>
              </div>

              <div className="p-8 pt-0 -mt-12 relative z-10">
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
                  <h3 className="text-2xl font-bold font-serif mb-3">
                    Commercial Services
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Abattoir and processing services for farmers and businesses.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4 text-accent" />
                      Slaughter
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Package className="h-4 w-4 text-accent" />
                      Cold Storage
                    </div>
                  </div>

                  <Link href="/commercial">
                    <Button variant="outline" className="w-full h-12">
                      Explore Commercial
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* ================= ICE (NEW THIRD SERVICE) ================= */}

            <div className="group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">

              <div className="relative h-72 overflow-hidden">
                <Image
                    src="/images/ce2.jpg"
                    alt="Ice block supply"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* stronger overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                {/* icon */}
                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg">
                  <Snowflake className="h-7 w-7 text-white" />
                </div>
              </div>

              <div className="p-8 pt-0 -mt-12 relative z-10">
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">

                  <h3 className="text-2xl font-bold font-serif mb-3">
                    Ice Supply Services
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    Reliable ice blocks for businesses, events, and food preservation.
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Snowflake className="h-4 w-4 text-blue-500" />
                      Bulk Ice
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Package className="h-4 w-4 text-blue-500" />
                      Event Supply
                    </div>
                  </div>

                  {/* FIXED BUTTON (now HIGH CONTRAST + visible) */}
                  <Link href="/ice">
                    <Button className="w-full gap-2 h-12 ">
                      Explore Ice
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}