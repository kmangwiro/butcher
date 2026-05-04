import Image from "next/image"
import { Metadata } from "next"
import { MessageCircle, Snowflake, Truck, Package, Shield, Factory, Gift } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { FloatingWhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Ice Blocks Supply | CAULIMATE INVESTMENTS",
    description: "Bulk ice blocks for businesses, events, and meat preservation.",
}

const WHATSAPP_NUMBER = "263788559963"

const iceServices = [
    {
        icon: Snowflake,
        title: "Bulk Ice Block Supply",
        description: "Consistent supply of high-quality ice blocks for businesses, events, and daily use.",
        image: "/images/ice4.jpg",
        message: "Hello, I would like to order bulk ice blocks",
    },
    {
        icon: Factory,
        title: "Commercial Ice Supply",
        description: "Reliable ice supply for butcheries, fisheries, supermarkets, and food businesses.",
        image: "/images/ice5.jpg",
        message: "Hello, I would like to inquire about commercial ice supply",
    },
    {
        icon: Gift,
        title: "Event Ice Supply",
        description: "Ice blocks for weddings, parties, and outdoor events.",
        image: "/images/placeholder-ice-3.jpg",
        message: "Hello, I need ice blocks for an event",
    },
    {
        icon: Package,
        title: "Custom Orders",
        description: "Flexible quantities tailored to your needs.",
        image: "/images/placeholder-ice-4.jpg",
        message: "Hello, I would like to place a custom ice order",
    },
    {
        icon: Truck,
        title: "Delivery Services",
        description: "Fast and reliable delivery to your location.",
        image: "/images/placeholder-ice-5.jpg",
        message: "Hello, I would like to inquire about ice delivery",
    },
    {
        icon: Shield,
        title: "Hygienic Production",
        description: "Produced under clean and controlled conditions.",
        image: "/images/placeholder-ice-6.jpg",
        message: "Hello, I would like to know about your ice production standards",
    },
]

export default function IcePage() {
    return (
        <>
            <Header />
            <main>

                {/* HERO */}
                <section className="relative py-20 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/ice6.jpg"
                            alt="Ice blocks"
                            fill
                            className="object-cover scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/60" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-2xl">
                            <p className="text-accent uppercase text-sm mb-4">Cold Chain Support</p>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
                                Ice Blocks Supply
                            </h1>
                            <p className="text-lg text-white/80 mb-8">
                                Reliable ice supply for businesses, events, and preservation.
                            </p>

                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20I%20would%20like%20to%20order%20ice`}
                                target="_blank"
                            >
                                <Button size="lg" className="bg-[#25D366] text-white h-14 px-8">
                                    <MessageCircle className="h-5 w-5" />
                                    Order Ice Now
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="relative py-20 lg:py-28 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold font-serif mb-4">Our Ice Services</h2>
                            <p className="text-muted-foreground">
                                Reliable and hygienic ice solutions for all needs.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {iceServices.map((service, index) => (
                                <Card key={index} className="overflow-hidden group">

                                    {/* IMAGE */}
                                    <div className="relative h-40">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition"
                                        />
                                    </div>

                                    <CardHeader>
                                        <service.icon className="h-6 w-6 text-primary mb-2" />
                                        <CardTitle>{service.title}</CardTitle>
                                    </CardHeader>

                                    <CardContent>
                                        <CardDescription className="mb-4">
                                            {service.description}
                                        </CardDescription>

                                        <a
                                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(service.message)}`}
                                            target="_blank"
                                        >
                                            <Button className="w-full bg-[#25D366] text-white">
                                                <MessageCircle className="h-4 w-4" />
                                                Order Now
                                            </Button>
                                        </a>
                                    </CardContent>

                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TRUST */}
                <section className="relative py-16 text-white">
                    <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <h4 className="text-4xl font-bold mb-2">24/7</h4>
                            <p>Availability</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-bold mb-2">100%</h4>
                            <p>Hygienic</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-bold mb-2">Fast</h4>
                            <p>Delivery</p>
                        </div>
                    </div>
                </section>

                {/* SUPPORT */}
                <section className="py-20 lg:py-28">
                    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

                        <div>
                            <h3 className="text-3xl font-bold font-serif mb-6">
                                Supporting Your Cooling Needs
                            </h3>
                            <p className="text-muted-foreground text-lg">
                                Our ice services support preservation, transport, and storage across industries.
                            </p>
                        </div>

                        <div className="relative h-[350px] rounded-xl overflow-hidden">
                            <Image
                                src="/images/placeholder-delivery.jpg"
                                alt="Ice delivery"
                                fill
                                className="object-cover"
                            />
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