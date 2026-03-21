'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-[#541388]/5 flex flex-col items-center text-center space-y-6"
      >
        <div className="w-20 h-20 bg-[#541388]/10 rounded-full flex items-center justify-center mb-4">
          <CheckCircle2 size={40} className="text-[#541388]" />
        </div>
        <h3 className="text-3xl font-black text-[#2E294E]">Message Received.</h3>
        <p className="text-[#2E294E]/60 font-medium max-w-xs">
          Our engineering team has received your transmission and will respond within 24 hours.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-[#D90368] font-black uppercase tracking-widest text-xs hover:underline"
        >
          Send Another Message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/40 space-y-8 relative overflow-hidden">
      <div className="space-y-2">
        <h3 className="text-3xl font-black text-[#2E294E]">Start a Project</h3>
        <p className="text-[#2E294E]/60 font-medium">BrylCodes is currently reviewing applications for new partnerships.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#541388]/40 ml-1">Full Name</label>
          <input 
            type="text" 
            id="name"
            required
            placeholder="John Doe"
            className="w-full px-6 py-4 bg-[#F1E9DA]/50 border-2 border-transparent focus:border-[#541388]/20 focus:bg-white rounded-2xl outline-none transition-all font-bold text-[#2E294E] placeholder-[#2E294E]/20"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#541388]/40 ml-1">Work Email</label>
          <input 
            type="email" 
            id="email"
            required
            placeholder="john@company.com"
            className="w-full px-6 py-4 bg-[#F1E9DA]/50 border-2 border-transparent focus:border-[#541388]/20 focus:bg-white rounded-2xl outline-none transition-all font-bold text-[#2E294E] placeholder-[#2E294E]/20"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#541388]/40 ml-1">Project Type</label>
        <select 
          id="subject"
          className="w-full px-6 py-4 bg-[#F1E9DA]/50 border-2 border-transparent focus:border-[#541388]/20 focus:bg-white rounded-2xl outline-none transition-all font-bold text-[#2E294E] appearance-none cursor-pointer"
        >
          <option>Full-Stack Engineering</option>
          <option>API & Backend Architecture</option>
          <option>Growth & Optimization</option>
          <option>Technical Consultation</option>
          <option>Other / Managed Services</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#541388]/40 ml-1">Project Details</label>
        <textarea 
          id="message"
          required
          rows={4}
          placeholder="Tell us about your project goals and technical challenges..."
          className="w-full px-6 py-4 bg-[#F1E9DA]/50 border-2 border-transparent focus:border-[#541388]/20 focus:bg-white rounded-2xl outline-none transition-all font-bold text-[#2E294E] placeholder-[#2E294E]/20 resize-none"
        />
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className="w-full py-6 bg-[#D90368] text-white rounded-2xl font-black uppercase tracking-[0.15em] text-center hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-[#D90368]/20 flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Initializing...
          </span>
        ) : (
          <>
            Transmit Inquiry
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>

      <p className="text-[10px] text-center text-[#2E294E]/30 font-bold uppercase tracking-widest">
        Average response time: 2.4 Hours
      </p>
    </form>
  )
}
