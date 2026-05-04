import Image from "next/image"
import { Sparkles, DollarSign, Truck, Shield, Clock, Award } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Farm Fresh Quality",
    description: "Locally sourced from trusted Zimbabwean farmers, ensuring freshness in every cut.",
  },
  {
    icon: Shield,
    title: "EMA Approved",
    description: "Our facilities meet all Environmental Management Authority standards for hygiene and safety.",
  },
  {
    icon: DollarSign,
    title: "Fair Pricing",
    description: "Premium quality at competitive prices. Value for money on every purchase.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Fast, refrigerated delivery to Chegutu and surrounding areas.",
  },
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "A decade of trusted service to families and businesses across the region.",
  },
  {
    icon: Award,
    title: "Customer First",
    description: "Built on integrity and ethical practices. Your satisfaction is our priority.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/cattle-farm.jpg"
                  alt="Local Zimbabwe cattle farm"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-xl border border-border/50 max-w-xs hidden sm:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-card-foreground">Trusted Since 2014</p>
                    <p className="text-sm text-muted-foreground">Serving Chegutu</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  &quot;Excellence through integrity and ethical practices&quot;
                </p>
              </div>

              {/* Accent Circle */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4 bg-primary/10 px-4 py-2 rounded-full">
              Why CAULIMATE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-serif mb-6 text-balance">
              Excellence in Every Cut
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              We are committed to providing the freshest, highest-quality meat products 
              while maintaining the highest standards of hygiene and customer service.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
