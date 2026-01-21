'use client'

import { motion } from 'framer-motion'

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
