import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://shubham.dev'),
  title: 'Shubham Kushwah | Full-Stack Developer & System Architect',
  description: 'Passionate full-stack developer with 5+ years of experience building modern web applications. Specializing in React, Next.js, TypeScript, Node.js, and cloud architecture. Terminal enthusiast, clean code advocate, and Git flow master.',
  generator: 'Next.js',
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
  authors: [{ name: 'Shubham Kushwah', url: 'https://brylcodes.vercel.app' }],
  creator: 'Shubham Kushwah',
  publisher: 'Shubham Kushwah',
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
    url: 'https://shubham.dev',
    siteName: 'Shubham Kushwah Portfolio',
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
    creator: '@shubham',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
