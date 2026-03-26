'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch('https://formspree.io/f/mjgyklko', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('Transmission failed. Please try again or reach out directly via email.')
      }
    } catch (error) {
      alert('Network protocol error. Please verify connection and retry.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-neo-bg p-12 neo-border neo-shadow-lg flex flex-col items-center text-center space-y-6"
      >
        <div className="w-24 h-24 bg-neo-secondary neo-border flex items-center justify-center mb-4 neo-shadow-sm rotate-6">
          <CheckCircle2 size={48} className="text-black" strokeWidth={3} />
        </div>
        <h3 className="text-4xl font-black text-black uppercase tracking-tight">Transmission Received</h3>
        <p className="text-xl text-black font-bold max-w-xs leading-tight">
          Our engineering team has received your inquiry and will respond within 1 hour.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="neo-btn bg-neo-accent text-white"
        >
          SEND ANOTHER TRANSMISSION
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-neo-bg p-8 md:p-12 neo-border neo-shadow-md space-y-8 relative overflow-hidden group hover:neo-shadow-lg transition-all duration-200">
      <div className="space-y-2">
        <h3 className="text-4xl font-black text-black uppercase tracking-tighter leading-none">START A PROJECT</h3>
        <p className="text-black font-bold leading-none">Currently reviewing applications for new enterprise partnerships.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-black ml-1">FULL NAME</label>
          <input 
            type="text" 
            id="name"
            name="name"
            required
            placeholder="JOHN DOE"
            className="neo-input"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-black ml-1">WORK EMAIL</label>
          <input 
            type="email" 
            id="email"
            name="email"
            required
            placeholder="JOHN@COMPANY.COM"
            className="neo-input"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="company" className="text-xs font-black uppercase tracking-widest text-black ml-1">COMPANY NAME</label>
          <input 
            type="text" 
            id="company"
            name="company"
            required
            placeholder="ENTERPRISE INC."
            className="neo-input"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-xs font-black uppercase tracking-widest text-black ml-1">PROJECT TYPE</label>
          <select 
            id="subject"
            name="project_type"
            className="neo-input appearance-none cursor-pointer"
          >
            <option>FULL-STACK ENGINEERING</option>
            <option>API & BACKEND ARCHITECTURE</option>
            <option>GROWTH & OPTIMIZATION</option>
            <option>TECHNICAL CONSULTATION</option>
            <option>OTHER / MANAGED SERVICES</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="budget" className="text-xs font-black uppercase tracking-widest text-black ml-1">ESTIMATED BUDGET</label>
          <select 
            id="budget"
            name="budget_range"
            className="neo-input appearance-none cursor-pointer"
          >
            <option>$5k — $10k</option>
            <option>$10k — $25k</option>
            <option>$25k — $50k</option>
            <option>$50k+</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="timeline" className="text-xs font-black uppercase tracking-widest text-black ml-1">TARGET TIMELINE</label>
          <select 
            id="timeline"
            name="target_timeline"
            className="neo-input appearance-none cursor-pointer"
          >
            <option>ASAP (URGENT)</option>
            <option>1 — 3 MONTHS</option>
            <option>3 — 6 MONTHS</option>
            <option>EXPORATION / FLEXIBLE</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-black ml-1">PROJECT DETAILS</label>
        <textarea 
          id="message"
          name="message"
          required
          rows={3}
          placeholder="Tell us about your project goals and technical challenges..."
          className="neo-input h-auto py-4 resize-none"
        />
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className="neo-btn w-full bg-neo-accent text-white flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed group h-16 py-0 shadow-[6px_6px_0px_0px_#000]"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            INITIALIZING...
          </span>
        ) : (
          <>
            TRANSMIT INQUIRY
            <Send size={20} strokeWidth={3} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
          </>
        )}
      </button>

      <p className="text-[10px] text-center text-black font-black uppercase tracking-widest">
        Average response time: 1 Hour
      </p>
    </form>
  )
}
