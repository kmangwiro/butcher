import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title:
      "CAULIMATE INVESTMENTS | Fresh Quality Meat - Butchery in Chegutu Zimbabwe",

  description:
      "Premium butchery and abattoir services in Chegutu, Zimbabwe. Fresh meat cuts, braai packs, family hampers, and commercial slaughter services. Order via WhatsApp for fast delivery.",

  keywords: [
    "butchery",
    "Chegutu",
    "Zimbabwe",
    "fresh meat",
    "abattoir",
    "braai packs",
    "meat delivery",
    "beef",
    "wholesale meat",
  ],

  authors: [{ name: "CAULIMATE INVESTMENTS (PVT/LTD)" }],

  metadataBase: new URL("https://yourdomain.co.zw"), // 🔴 CHANGE THIS

  openGraph: {
    title: "CAULIMATE INVESTMENTS | Fresh Quality Meat",
    description:
        "Premium butchery and abattoir services in Chegutu, Zimbabwe. Fresh meat delivered to your doorstep.",
    url: "https://yourdomain.co.zw", // 🔴 CHANGE THIS
    siteName: "CAULIMATE INVESTMENTS",
    type: "website",
    locale: "en_ZW",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CAULIMATE Investments Butchery",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CAULIMATE INVESTMENTS | Fresh Quality Meat",
    description:
        "Premium butchery in Chegutu, Zimbabwe. Fresh meat delivered fast.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html
          lang="en"
          className={`${playfair.variable} ${inter.variable} bg-background`}
      >
      <body className="font-sans antialiased">
      {children}

      {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
      </html>
  )
}