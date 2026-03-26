'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-neo-bg texture-grid">
      <Navbar />
      
      <section className="pt-44 pb-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
             <div className="mb-16">
                <span className="inline-block bg-neo-muted border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest text-black shadow-[4px_4px_0px_0px_#000] mb-6">Tracking Data</span>
                <h1 className="text-5xl md:text-8xl font-black text-black leading-none mb-8 uppercase tracking-tighter">Cookie <span className="bg-neo-secondary px-4">Policy</span></h1>
                <p className="text-xl font-bold uppercase tracking-widest text-black/60">Effective Date: March 27, 2026</p>
             </div>

             <div className="space-y-12 text-black font-bold text-lg leading-tight uppercase tracking-tight">
                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#C4B5FD] inline-block bg-white px-2">1. COOKIE BASICS</h2>
                   <p>Cookies are small text files stored on your machine to help us monitor system health and provide a smoother UX. BrylCodes uses these in alignment with US, UK, and India privacy norms (GDPR/PECR/CalOPPA).</p>
                </section>

                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#FFD93D] inline-block bg-white px-2">2. TYPES USED</h2>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="p-6 bg-neo-bg border-2 border-black">
                         <h3 className="font-black text-sm mb-2 uppercase tracking-widest text-neo-accent">ESSENTIAL</h3>
                         <p className="text-sm">Necessary for website performance and security monitoring. Cannot be disabled.</p>
                      </div>
                      <div className="p-6 bg-neo-bg border-2 border-black">
                         <h3 className="font-black text-sm mb-2 uppercase tracking-widest text-neo-secondary">ANALYTICAL</h3>
                         <p className="text-sm">Used for anonymous traffic analysis via tools like Vercel Analytics or GA4.</p>
                      </div>
                   </div>
                </section>

                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#FF6B6B] inline-block bg-white px-2">3. HOW WE USE THEM</h2>
                   <ul className="list-disc pl-6 space-y-4">
                      <li><span className="text-neo-accent">State Management:</span> Maintaining your session across complex engineering dashboard interactions.</li>
                      <li><span className="text-neo-accent">Optimization:</span> Tracking sub-second interaction metrics to refine the frontend Protocol.</li>
                      <li><span className="text-neo-accent">Security:</span> Identifying bot traffic and preventing CSRF attacks.</li>
                   </ul>
                </section>

                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#C4B5FD] inline-block bg-white px-2">4. YOUR CHOICE</h2>
                   <p>You can manage your cookie preferences through our global banner or by adjusting your browser settings. Opting out of analytical cookies will result in zero data collected from your session.</p>
                </section>

                <section className="neo-card p-10 bg-white">
                   <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter italic shadow-[4px_4px_0px_0px_#FFD93D] inline-block bg-white px-2">5. DISCLOSURE</h2>
                   <p>In the UK we follow PECR. In the US we follow CalOPPA. In India we follow the IT Rules 2011. Your choices are respected across all three regions simultaneously.</p>
                </section>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
