'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function SLAAgreement() {
  return (
    <main className="min-h-screen bg-neo-bg texture-grid">
      <Navbar />
      
      <section className="pt-44 pb-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-16 px-4">
             <span className="inline-block bg-neo-secondary border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest text-black shadow-[4px_4px_0px_0px_#000] mb-6 whitespace-nowrap">Service Integrity</span>
             <h1 className="text-5xl md:text-8xl font-black text-black leading-none mb-8 uppercase tracking-tighter">SLA <span className="bg-neo-accent px-4 text-white">Agreement</span></h1>
             <p className="text-xl font-bold uppercase tracking-widest text-black/60">Effective Date: March 27, 2026</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12 text-black font-black text-lg leading-tight uppercase tracking-tight px-4">
             <section className="neo-card p-10 bg-white shadow-[12px_12px_0px_0px_#000]">
                <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#FFD93D] inline-block bg-white px-2">1. DEFINITIONS</h2>
                <p>This Service Level Agreement (SLA) outlines the commitment of BrylCodes to provide enterprise-grade reliability and support for US, UK, and Indian clients.</p>
             </section>

             <div className="grid md:grid-cols-2 gap-8">
                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#FF6B6B] inline-block bg-white px-2">2. UPTIME COMMITMENT</h2>
                   <div className="text-5xl font-black text-neo-accent mb-4">99.9%</div>
                   <p className="text-sm">We guarantee 99.9% uptime for all deployed engineering solutions hosted on managed cloud infrastructure (Vercel/AWS/Azure). Excluding scheduled maintenance.</p>
                </section>

                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#C4B5FD] inline-block bg-white px-2">3. SUPPORT HOURS</h2>
                   <div className="text-5xl font-black text-neo-muted mb-4">24/5</div>
                   <p className="text-sm">Technical support is available 24 hours a day, 5 days a week across GMT (UK), EST (US), and IST (India) time zones for all critical priority incidents.</p>
                </section>
             </div>

             <section className="neo-card p-10 bg-white shadow-[12px_12px_0px_0px_#000]">
                <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#FFD93D] inline-block bg-white px-2">4. RESPONSE TARGETS</h2>
                <div className="space-y-6">
                   <div className="p-6 bg-neo-bg border-2 border-black">
                      <h3 className="font-black text-sm mb-2 uppercase tracking-widest text-neo-accent">P1: CRITICAL BLOCKED</h3>
                      <div className="text-2xl font-black mb-1 text-black">RESPONSE: 2 HOURS</div>
                      <p className="text-sm">Total system outage impacting all global users.</p>
                   </div>
                   <div className="p-6 bg-neo-bg border-2 border-black">
                      <h3 className="font-black text-sm mb-2 uppercase tracking-widest text-neo-secondary">P2: MAJOR DEGRADATION</h3>
                      <div className="text-2xl font-black mb-1 text-black">RESPONSE: 8 HOURS</div>
                      <p className="text-sm">Significant feature failure impacting regional users.</p>
                   </div>
                   <div className="p-6 bg-neo-bg border-2 border-black">
                      <h3 className="font-black text-sm mb-2 uppercase tracking-widest text-neo-muted">P3: MINOR REQ / DOCS</h3>
                      <div className="text-2xl font-black mb-1 text-black">RESPONSE: 24 HOURS</div>
                      <p className="text-sm">Minor configuration or documentation updates.</p>
                   </div>
                </div>
             </section>

             <section className="neo-card p-10 bg-white">
                <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#FF6B6B] inline-block bg-white px-2">5. REMEDIES</h2>
                <p className="text-sm">Failing to meet these targets results in Service Credits applied to the following month's maintenance fee, as explicitly defined in the project-specific contract.</p>
             </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
