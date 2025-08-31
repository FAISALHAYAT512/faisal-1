import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "../components/theme-provider"
import "./globals.css"
import { Navigation } from "../components/navigation"
import { Footer } from "../components/footer"

export const metadata: Metadata = {
  title: {
    default: "Faisal Hayat — AI Automation Expert",
    template: "%s — Faisal Hayat",
  },
  description:
    "Professional AI automation expert specializing in RAG systems, intelligent agents, workflow automation, and e-commerce integrations. Transform your business with cutting-edge AI solutions.",
  keywords:
    "AI automation, RAG systems, chatbots, workflow automation, e-commerce automation, AI agents, Pakistan AI expert, machine learning, artificial intelligence, business automation, intelligent systems, AI consultant",
  authors: [{ name: "Faisal Hayat", url: "https://faisalhayat.com" }],
  creator: "Faisal Hayat",
  publisher: "Faisal Hayat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://faisalhayat.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Faisal Hayat — AI Automation Expert",
    description:
      "Transform your business with cutting-edge AI automation solutions. Expert in RAG systems, intelligent agents, and workflow automation.",
    url: "https://faisalhayat.com",
    siteName: "Faisal Hayat Portfolio",
    images: [
      {
        url: "/asif-headshot.jpg",
        width: 1200,
        height: 630,
        alt: "Faisal Hayat - AI Automation Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faisal Hayat — AI Automation Expert",
    description: "Transform your business with cutting-edge AI automation solutions.",
    images: ["/asif-headshot.jpg"],
    creator: "faisal_hayat ",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  generator: "Next.js",
  applicationName: "Faisal Hayat Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Faisal Hayat",
              url: "https://faisalhayat.com",
              image: "https://faisalhayat.com/asif-headshot.jpg",
              sameAs: ["https://linkedin.com/in/FAISALHAYAT512h", "https://github.com/FAISALHAYAT512"],
              jobTitle: "AI Automation Expert",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "RAG Systems",
                "Chatbot Development",
                "Workflow Automation",
                "E-commerce Integration",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "Pakistan",
              },
              email: "faisalhayat@gmail.com",
              telephone: "+923411094193",
            }),
          }}
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}