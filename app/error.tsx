'use client'

import React from 'react'
import Link from 'next/link'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neo-bg texture-grid px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-neo-accent neo-border neo-shadow-sm text-xs font-black text-white uppercase tracking-widest rotate-1">
          <div className="w-3 h-3 bg-white neo-border animate-pulse" />
          RUNTIME ERROR
        </div>

        <div className="w-24 h-24 bg-neo-secondary neo-border flex items-center justify-center mx-auto neo-shadow-sm -rotate-6">
          <AlertTriangle className="w-12 h-12 text-black" strokeWidth={3} />
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-black uppercase tracking-tighter leading-[0.9]">
          Something <span className="bg-neo-secondary px-2">Broke</span>
        </h1>
        <p className="text-lg md:text-xl text-black font-bold uppercase tracking-tight leading-tight max-w-lg mx-auto">
          An unexpected error occurred. Our systems have logged the issue.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={reset}
            className="neo-btn bg-black text-white px-8 py-4 flex items-center gap-3 group"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" strokeWidth={3} />
            TRY AGAIN
          </button>
          <Link href="/" className="neo-btn bg-white text-black px-8 py-4 flex items-center gap-3 group">
            <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform" strokeWidth={3} />
            GO HOME
          </Link>
        </div>
      </div>
    </div>
  )
}
