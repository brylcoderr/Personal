'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-neo-bg texture-grid">
      <Navbar />
      
      <section className="pt-44 pb-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
             <div className="mb-16">
                <span className="inline-block bg-neo-secondary border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest text-black shadow-[4px_4px_0px_0px_#000] mb-6">Service Protocol</span>
                <h1 className="text-5xl md:text-8xl font-black text-black leading-none mb-8 uppercase tracking-tighter">Terms of <span className="bg-neo-accent px-4 text-white">Service</span></h1>
                <p className="text-xl font-bold uppercase tracking-widest text-black/60">Effective Date: March 27, 2026</p>
             </div>

             <div className="space-y-12 text-black font-bold text-lg leading-tight uppercase tracking-tight">
                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#FFD93D] inline-block bg-white px-2">1. AGREEMENT</h2>
                   <p>By accessing or using the services provided by BrylCodes, you agree to be bound by these terms across US, UK, and Indian jurisdictions. If you disagree, cease all system interactions immediately.</p>
                </section>

                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#FF6B6B] inline-block bg-white px-2">2. PROJECT DELIVERY</h2>
                   <ul className="list-disc pl-6 space-y-4">
                      <li><span className="text-neo-accent">Deliverables:</span> Code produced by BrylCodes is transferred to the client upon full payment of the agreed-upon fees.</li>
                      <li><span className="text-neo-accent">Timelines:</span> Sprints are estimated but not guaranteed under force majeure or technical scope shifts.</li>
                      <li><span className="text-neo-accent">Warranties:</span> Code is provided "as-is" for a 30-day bug-free warranty period post-deployment.</li>
                   </ul>
                </section>

                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#C4B5FD] inline-block bg-white px-2">3. INTELLECTUAL PROPERTY</h2>
                   <p>All pre-existing architectural skeletons, internal toolsets, and proprietary logic developed by BrylCodes remain our property unless explicitly licensed as per the Service Agreement.</p>
                </section>

                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#FFD93D] inline-block bg-white px-2">4. LIABILITY & JURISDICTION</h2>
                   <div className="bg-black text-white p-6 neo-border shadow-none mb-4">
                      <p className="text-sm font-black leading-none">MAXIMUM LIABILITY: NOT TO EXCEED 50% OF THE TOTAL PROJECT FEE PAID IN THE 6 MONTHS PRIOR TO THE CLAIM.</p>
                   </div>
                   <p className="text-sm">GOVERNING LAW: DELEWARE (US), ENGLAND & WALES (UK), AND NEW DELHI (INDIA) DEPENDING ON THE PRIMARY CONTRACTUAL JURISDICTION SPECIFIED IN THE SERVICE LEVEL AGREEMENT.</p>
                </section>

                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#FF6B6B] inline-block bg-white px-2">5. TERMINATION</h2>
                   <p>Contracts may be terminated by either party with 14 days written notice. Payment for all milestones achieved up to the termination date must be settled immediately.</p>
                </section>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
