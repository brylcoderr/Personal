'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function LoadingSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="space-y-4">
        <div className="h-8 bg-foreground/10 rounded w-3/4"></div>
        <div className="h-4 bg-foreground/10 rounded w-full"></div>
        <div className="h-4 bg-foreground/10 rounded w-5/6"></div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="h-32 bg-foreground/10 rounded"></div>
          <div className="h-32 bg-foreground/10 rounded"></div>
        </div>
      </div>
    </div>
  )
}

export function CardSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="animate-pulse"
        >
          <div className="h-64 bg-foreground/10 rounded-xl"></div>
        </motion.div>
      ))}
    </div>
  )
}

export function SectionSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center space-y-4"
      >
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-foreground/60 animate-pulse">Loading amazing content...</p>
      </motion.div>
    </div>
  )
}

export function ImageSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gradient-to-br from-primary/20 to-primary/5 ${className}`}>
      <div className="w-full h-full flex items-center justify-center">
        <svg
          className="w-10 h-10 text-primary/30"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </div>
    </div>
  )
}

interface OptimizedImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  priority?: boolean
}

export function OptimizedImage({ src, alt, fill = true, className = '', priority = false }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className={`bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center ${className}`}>
        <span className="text-primary/50 text-sm">Image unavailable</span>
      </div>
    )
  }

  return (
    <>
      {isLoading && <ImageSkeleton className="absolute inset-0" />}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false)
          setHasError(true)
        }}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </>
  )
}

export function CaseStudySkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-primary/20 overflow-hidden">
      <div className="h-48 sm:h-56 bg-gradient-to-br from-primary/20 to-primary/5" />
      <div className="p-6 space-y-4">
        <div className="flex gap-2">
          <div className="h-6 w-20 bg-foreground/10 rounded-full" />
          <div className="h-6 w-16 bg-foreground/10 rounded-full" />
        </div>
        <div className="h-6 w-3/4 bg-foreground/10 rounded" />
        <div className="h-4 w-1/4 bg-foreground/10 rounded" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-foreground/10 rounded" />
          <div className="h-4 w-5/6 bg-foreground/10 rounded" />
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/20">
          <div className="h-12 bg-foreground/10 rounded" />
          <div className="h-12 bg-foreground/10 rounded" />
        </div>
        <div className="h-10 w-full bg-foreground/10 rounded" />
      </div>
    </div>
  )
}
