import React from "react"
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import Script from 'next/script'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://brylcodes.in'),
  title: {
    template: '%s | BrylCodes - Advanced Software Studio',
    default: 'BrylCodes | Advanced Software Engineering & System Architecture',
  },
  description: 'BrylCodes is a premier software engineering studio specialized in building scalable enterprise applications and high-performance digital ecosystems.',
  generator: 'Next.js',
  applicationName: 'BrylCodes',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'software engineering agency',
    'development studio',
    'system architect',
    'enterprise software',
    'React engineering',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Distributed Systems',
    'BrylCodes'
  ],
  authors: [{ name: 'BrylCodes', url: 'https://brylcodes.in' }],
  creator: 'BrylCodes',
  publisher: 'BrylCodes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brylcodes.in',
    siteName: 'BrylCodes',
    title: 'BrylCodes | Advanced Software Engineering Studio',
    description: 'Premier engineering studio specializing in scalable web architectures and performant enterprise applications.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'BrylCodes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrylCodes | Software Engineering Studio',
    description: 'Specializing in enterprise-grade React, Next.js, and Distributed Systems.',
    creator: '@brylcodes',
    images: ['/og-image.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

import { UIProvider } from '@/components/ui-provider'
import { PageTransition } from '@/components/page-transition'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BrylCodes",
              "url": "https://brylcodes.in",
              "logo": "https://brylcodes.in/logo.png",
              "sameAs": [
                "https://github.com/brylcoderr",
                "https://linkedin.com/in/brylcoder",
                "https://twitter.com/brylcodes"
              ],
              "description": "BrylCodes is an advanced software engineering studio specialized in building scalable enterprise applications and high-performance digital ecosystems."
            }
          `}
        </Script>
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-agency-bg text-agency-heading relative min-h-screen`}>
        <UIProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            forcedTheme="light"
          >
            <PageTransition>
              {children}
            </PageTransition>
            <Analytics />
          </ThemeProvider>
        </UIProvider>
      </body>
    </html>
  )
}
