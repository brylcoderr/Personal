import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import Script from 'next/script'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans',
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://brylcodesdev.vercel.app'),
  title: {
    template: '%s | Shubham Kushwah - Full-Stack Developer',
    default: 'Shubham Kushwah | Full-Stack Developer & System Architect',
  },
  description: 'Passionate full-stack developer with 5+ years of experience building modern web applications. Specializing in React, Next.js, TypeScript, Node.js, and cloud architecture. Terminal enthusiast, clean code advocate, and Git flow master.',
  generator: 'Next.js',
  applicationName: 'BrylCodes Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'full-stack developer',
    'web development',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'system architect',
    'portfolio',
    'software engineer',
    'JavaScript',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Docker',
    'Shubham Kushwah'
  ],
  authors: [
    { name: 'Shubham Kushwah', url: 'https://brylcodesdev.vercel.app' }
  ],
  creator: 'Shubham Kushwah',
  publisher: 'Shubham Kushwah',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://brylcodesdev.vercel.app',
    siteName: 'Shubham Kushwah | BrylCodes',
    title: 'Shubham Kushwah | Full-Stack Developer & System Architect',
    description: 'Passionate full-stack developer with 5+ years of experience in React, Next.js, TypeScript, Node.js. Building scalable applications that serve 10M+ users.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shubham Kushwah - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shubham Kushwah | Full-Stack Developer',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript. Building efficient, scalable applications.',
    creator: '@brylcodes',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/images/icon.png',
        type: 'image/png',
      },
    ],
    shortcut: ['/images/favicon.ico'],
    apple: '/images/icon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-site-verification-code',
    yahoo: 'your-yahoo-site-verification-code',
    other: {
      'msvalidate.01': 'your-bing-site-verification-code',
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

import { SystemBoot } from '@/components/system-boot'
import { CommandCenter } from '@/components/command-center'
import { SystemLoadIndicators } from '@/components/system-load-indicators'
import { CustomCursor } from '@/components/custom-cursor'
import { SystemTerminal } from '@/components/system-terminal'
import { ScrollStressMonitor } from '@/components/scroll-stress-monitor'

import { SoundProvider } from '@/components/sound-provider'

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
              "@type": "Person",
              "name": "Shubham Kushwah",
              "jobTitle": "Full-Stack Developer & System Architect",
              "url": "https://brylcodesdev.com",
              "sameAs": [
                "https://github.com/brylcoderr",
                "https://linkedin.com/in/brylcoder",
                "https://twitter.com/brylcodes"
              ],
              "description": "Passionate full-stack developer with 5+ years of experience building modern web applications. Specializing in React, Next.js, TypeScript, Node.js, and cloud architecture."
            }
          `}
        </Script>
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground relative min-h-screen`}>
        <UIProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SoundProvider>
              <SystemBoot />
              <CommandCenter />
              <SystemLoadIndicators />
              <CustomCursor />
              <SystemTerminal />
              <ScrollStressMonitor />
              
              <div className="fixed inset-0 premium-bg pointer-events-none opacity-[0.8]" />
              <div className="scanline-overlay" />
              
              <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">
                Skip to main content
              </a>
              
              <PageTransition>
                {children}
              </PageTransition>
            </SoundProvider>

          <Analytics />

          {/* Persistent Technical Status Line */}
          <div className="fixed bottom-0 left-0 right-0 h-6 bg-secondary/80 backdrop-blur-sm border-t border-border/50 z-100 hidden md:flex items-center justify-between px-4 font-mono text-[9px] text-muted-foreground/60 uppercase tracking-tight select-none pointer-events-none">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 min-w-[80px]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
                <span>Line: 200_OK</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-primary/40">⌥</span>
                <span>Branch: main*</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span>Encoding: UTF-8</span>
              <span>Indent: 2_Spaces</span>
              <div className="bg-primary/10 text-primary px-2 py-0.5 rounded-sm flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-primary" />
                Live_Reload: STABLE
              </div>
            </div>
          </div>
        </ThemeProvider>
      </UIProvider>
    </body>
  </html>
)
}
