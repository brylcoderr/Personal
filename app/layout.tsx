import React from "react"
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import Script from 'next/script'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://brylcodes.in'),
  title: {
    template: '%s | BrylCodes - AI Development Agency',
    default: 'BrylCodes | AI Development Agency — Agents, Automation & Full-Stack Engineering',
  },
  description: 'BrylCodes is an AI development agency specializing in custom AI agents, LLM integrations, RAG systems, workflow automation, and full-stack engineering for enterprises.',
  generator: 'Next.js',
  applicationName: 'BrylCodes',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'AI development agency',
    'AI automation agency',
    'custom AI agents',
    'LLM integration',
    'RAG systems',
    'AI chatbot development',
    'n8n automation agency',
    'Make.com automation',
    'workflow automation',
    'AI-powered applications',
    'full-stack AI development',
    'Next.js',
    'Node.js',
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
    title: 'BrylCodes | AI Development Agency — Agents, Automation & Engineering',
    description: 'We build custom AI agents, automation workflows, and full-stack applications that drive measurable business outcomes.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'BrylCodes AI Development Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrylCodes | AI Development Agency',
    description: 'Custom AI agents, LLM integrations, workflow automation & full-stack engineering.',
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
              "description": "BrylCodes is an AI development agency specializing in custom AI agents, LLM integrations, workflow automation, and full-stack engineering."
            }
          `}
        </Script>
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased bg-neo-bg text-black relative min-h-screen`}>
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
