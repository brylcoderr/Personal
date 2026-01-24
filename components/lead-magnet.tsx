'use client'

import React from "react"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Check, Download, ArrowRight } from 'lucide-react'

export function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (!email || !name) return

    setLoading(true)

    try {
      // Call the API route to store the lead
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
        setName('')

        // Reset after 5 seconds
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to subscribe. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="lead-magnet" className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/30 rounded-2xl p-12 sm:p-16"
        >
          {!submitted ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Get Your Free Website Conversion Checklist
                </h2>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                  Discover the 10 essential steps to convert more website visitors into paying customers. Used by 100+ successful companies.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Proven conversion optimization framework',
                  'Step-by-step implementation guide',
                  'Real-world case studies included',
                  'No spam, just valuable insights',
                ].map((benefit, idx) => (
                  <div key={`benefit-${idx}-${benefit.slice(0, 10)}`} className="flex items-start gap-3">
                    <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                {/* Error Message */}
                {error && (
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="lead-name" className="sr-only">Your name</label>
                  <Input
                    id="lead-name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12"
                    disabled={loading}
                  />
                </div>
                <div>
                  <label htmlFor="lead-email" className="sr-only">Your email</label>
                  <Input
                    id="lead-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                    disabled={loading}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={!email || !name || loading}>
                  {loading ? (
                    'Downloading...'
                  ) : (
                    <>
                      <Download size={20} className="mr-2" />
                      Download Free Checklist
                      <ArrowRight size={20} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>

              <p className="text-xs text-center text-foreground/60 mt-6">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Checklist sent!
              </h3>
              <p className="text-foreground/70 mb-6">
                Check your email for the conversion checklist. If you don't see it, check your spam folder.
              </p>
              <p className="text-sm text-foreground/60">
                Redirecting you to the next step...
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
