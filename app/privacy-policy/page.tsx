'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-neo-bg texture-grid">
      <Navbar />
      
      <section className="pt-44 pb-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
             <div className="mb-16">
                <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_#000] mb-6">GLOBAL COMPLIANCE</span>
                <h1 className="text-5xl md:text-8xl font-black text-black leading-none mb-8 uppercase tracking-tighter">Privacy <span className="bg-neo-secondary px-4">Policy</span></h1>
                <p className="text-xl font-bold uppercase tracking-tight text-black/60">Effective Date: March 27, 2026</p>
             </div>

             <div className="space-y-12 text-black font-bold text-lg leading-tight">
                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#FF6B6B] inline-block bg-white px-2">1. INTRODUCTION</h2>
                   <p>BrylCodes ("we", "us", or "our") respects the privacy of our global clients. This Privacy Policy outlines how we collect, use, and protect your information in compliance with the UK GDPR, US CCPA, and the Indian Information Technology Act, 2000.</p>
                </section>

                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#FFD93D] inline-block bg-white px-2">2. DATA COLLECTION</h2>
                   <ul className="list-disc pl-6 space-y-4">
                      <li><span className="text-neo-accent">Personal Information:</span> Name, email address, phone number, and company details provided via contact forms.</li>
                      <li><span className="text-neo-accent">Usage Data:</span> IP address, browser type, and navigation patterns collected via cookies for performance monitoring.</li>
                      <li><span className="text-neo-accent">Project Data:</span> Technical requirements and codebase access shared voluntarily during collaboration.</li>
                   </ul>
                </section>

                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#C4B5FD] inline-block bg-white px-2">3. LOCAL REGULATORY COMPLIANCE</h2>
                   <div className="grid md:grid-cols-3 gap-8">
                      <div className="p-6 bg-neo-bg border-2 border-black">
                         <h3 className="font-black text-sm mb-2 uppercase tracking-widest text-neo-accent">UK (GDPR)</h3>
                         <p className="text-sm">We process data under lawful bases (Contract/Consent) and respect your rights of access, rectification, and erasure.</p>
                      </div>
                      <div className="p-6 bg-neo-bg border-2 border-black">
                         <h3 className="font-black text-sm mb-2 uppercase tracking-widest text-neo-secondary">US (CCPA/COPPA)</h3>
                         <p className="text-sm">We do not sell personal information. We do not knowingly collect data from children under 13.</p>
                      </div>
                      <div className="p-6 bg-neo-bg border-2 border-black">
                         <h3 className="font-black text-sm mb-2 uppercase tracking-widest text-neo-muted">INDIA (IT ACT)</h3>
                         <p className="text-sm">We maintain SPDI (Sensitive Personal Data) logs and have a dedicated grievance officer as per the 2011 Rules.</p>
                      </div>
                   </div>
                </section>

                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#FF6B6B] inline-block bg-white px-2">4. SECURITY & RETENTION</h2>
                   <p>We employ ISO-grade encryption for data at rest and in transit. Project data is retained for the duration of the contract plus 2 years for archival purposes, unless project-specific SLAs dictate otherwise.</p>
                </section>

                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#FFD93D] inline-block bg-white px-2">5. CONTACT</h2>
                   <p>For data inquiries or to exercise your rights, contact our Data Protection Officer at <span className="text-neo-accent underline">brylcodes@gmail.com</span>.</p>
                </section>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
