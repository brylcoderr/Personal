'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Mail, MessageSquare, Phone, Send, Terminal, Loader2 } from 'lucide-react'
import profile from '@/src/data/profile.json'
import { toast } from 'sonner'

import { DataPacketAnimation } from './data-packet-animation'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate network latency for animation effect
    await new Promise(resolve => setTimeout(resolve, 2500))

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('https://formspree.io/f/mqepnnod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
        toast.success('Transmission successful!', {
          description: 'Data packet received by the system.',
          duration: 5000,
        })
        const form = e.target as HTMLFormElement
        form.reset()
      } else {
        throw new Error('Failed to transmit data')
      }
    } catch (error) {
      toast.error('Transmission failed.', {
        description: 'Error code: 500 Internal Relay Error',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="pt-16 pb-16 bg-background relative overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="code-label">
               Hiring_Interface
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Recruitment <span className="text-primary italic">Portal</span>
            </h2>
          </div>
          <div className="text-muted-foreground font-mono text-xs max-w-sm border-l border-border pl-6 py-2">
            POST /api/recruitment/initiate <br />
            // Open for high-impact engineering roles
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="ide-panel p-8 bg-secondary/10">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                <Terminal size={16} className="text-primary" />
                Engineering_Handshake
              </h3>
              
              <div className="space-y-4" suppressHydrationWarning>
                <div className="flex items-start gap-4 p-4 bg-background border border-border/50 rounded group hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">Direct_Relay</div>
                    <a href={`mailto:${profile.email}`} className="text-foreground font-mono text-sm hover:text-primary transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background border border-border/50 rounded group hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-1">Schedule_Technical_Sync</div>
                    <a 
                      href={profile.meetingLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground font-mono text-sm hover:text-primary transition-colors flex items-center gap-2 group/link"
                    >
                      Book Intro Call (15m)
                      <Terminal size={12} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-border/30">
                <div className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest mb-4">Current_Base</div>
                <div className="text-foreground font-mono text-sm uppercase tracking-wider">
                   {profile.location}
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 relative">
            <DataPacketAnimation isTransmitting={isSubmitting} />
            
            <div className="ide-panel p-8 md:p-10 border-primary/20 min-h-[500px] flex flex-col justify-center">
              {!isSuccess ? (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Full_Name</label>
                      <input 
                        required
                        type="text"
                        name="name"
                        className="w-full bg-background border border-border/50 rounded px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary transition-colors hover:border-border"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Work_Email</label>
                      <input 
                        required
                        type="email"
                        name="email"
                        className="w-full bg-background border border-border/50 rounded px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary transition-colors hover:border-border"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Proposed_Role</label>
                      <div className="relative">
                        <select 
                          name="role"
                          required
                          defaultValue=""
                          className="w-full bg-background border border-border/50 rounded px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary transition-colors hover:border-border appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select Role Level</option>
                          <option value="senior-dev">Senior Full-Stack Engineer</option>
                          <option value="lead-dev">Engineering Lead</option>
                          <option value="architect">System Architect</option>
                          <option value="consulting">Principal / Advisory</option>
                          <option value="other">Other High-Impact Role</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground/50 font-mono text-[10px]">
                          [ ▼ ]
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Interview_Timeline</label>
                      <div className="relative">
                        <select 
                          name="timeline"
                          required
                          defaultValue=""
                          className="w-full bg-background border border-border/50 rounded px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary transition-colors hover:border-border appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select Priority</option>
                          <option value="immediate">Urgent / Immediate</option>
                          <option value="weeks">Next 2-4 Weeks</option>
                          <option value="future">Future Talent Pool</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground/50 font-mono text-[10px]">
                          [ ▼ ]
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Inquiry_Payload</label>
                    <textarea 
                      required
                      name="message"
                      rows={6}
                      className="w-full bg-background border border-border/50 rounded px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary transition-colors min-h-[150px] resize-none"
                      placeholder="Share details about the role, team, and impact..."
                    ></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-4 bg-primary text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest rounded hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-3 glow-accent disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Transmitting_Payload...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Transmit_Inquiry
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-8"
                >
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                      <Terminal size={40} />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black tracking-tight">Transmission <span className="text-primary italic">Successful.</span></h3>
                    <div className="font-mono text-[11px] text-muted-foreground/60 uppercase tracking-[0.3em] bg-secondary/30 py-3 rounded border border-border/50 max-w-sm mx-auto">
                      Status: 200_OK // Recruitment_Log_Added
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                    Personalized handshake protocol initiated. I will review the role specifications 
                    and reach out via the provided secure relay shortly.
                  </p>
                  <div className="pt-6">
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="font-mono text-[10px] text-primary hover:text-primary/70 transition-colors uppercase tracking-[0.2em] flex items-center gap-2 mx-auto"
                    >
                      <Loader2 size={12} />
                      Initialize_New_Session
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
