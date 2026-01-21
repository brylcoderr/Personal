'use client'

import React from "react"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Check, Mail, Phone, MapPin } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectBrief: '',
    budget: '',
    startDate: '',
    honeypot: '', // Anti-spam field
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isClient, setIsClient] = useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBudgetChange = (value: string) => {
    setFormData((prev) => ({ ...prev, budget: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Honeypot check
    if (formData.honeypot) {
      console.log('Spam detected')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          company: '',
          projectBrief: '',
          budget: '',
          startDate: '',
          honeypot: '',
        })

        // Reset after 5 seconds
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      }
    } catch {
      console.error('Error submitting form')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <p className="text-sm font-semibold text-primary mb-2">GET IN TOUCH</p>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-foreground/70 mb-8">
                Let's discuss your project requirements and how we can help transform your digital presence.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:hello@example.com" className="text-foreground/70 hover:text-foreground transition-colors">
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+14155550100" className="text-foreground/70 hover:text-foreground transition-colors">
                    +1 (415) 555-0100
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-foreground/70">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Calendar Integration Placeholder */}
            <div className="mt-12 p-6 rounded-lg bg-primary/5 border border-primary/20">
              <h4 className="font-semibold mb-2">Quick Call?</h4>
              <p className="text-sm text-foreground/70 mb-4">
                Schedule a 30-minute discovery call to discuss your project.
              </p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="h-10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="h-10"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium mb-2">Company / Organization</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="h-10"
                  />
                </div>

                {/* Project Brief */}
                <div>
                  <label className="block text-sm font-medium mb-2">Project Brief *</label>
                  <Textarea
                    name="projectBrief"
                    value={formData.projectBrief}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className="min-h-32 resize-none"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range *</label>
                  {isClient ? (
                    <Select value={formData.budget} onValueChange={handleBudgetChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                        <SelectItem value="50k-100k">₹50,000 - ₹100,000</SelectItem>
                        <SelectItem value="100k-300k">₹100,000 - ₹300,000</SelectItem>
                        <SelectItem value="300k+">₹300,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <div className="h-10 border border-input rounded-md px-3 py-2 text-sm text-muted-foreground">
                      Select a budget range
                    </div>
                  )}
                </div>

                {/* Start Date */}
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="h-10"
                  />
                </div>

                {/* Honeypot (hidden) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  aria-hidden="true"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Project Inquiry'}
                </Button>

                <p className="text-xs text-foreground/60 text-center">
                  We'll respond within 24 hours during business days.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="h-full flex items-center justify-center py-12"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Message Received!
                  </h3>
                  <p className="text-foreground/70 max-w-md">
                    Thank you for reaching out. We'll review your project details and get back to you within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
