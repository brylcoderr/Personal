'use client'

import React from 'react'
import { Mail, MapPin, Linkedin, Twitter, Github, Phone, Calendar as CalendarIcon } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F1E9DA]">
      <Navbar />

      <section className="pt-44 pb-32">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#541388] mb-4 block">Get In Touch</span>
              <h1 className="text-5xl md:text-[80px] font-black text-[#2E294E] leading-[0.85] tracking-tight mb-12">
                Let's <span className="text-[#541388]">Engineer</span> Your Vision.
              </h1>
              <p className="text-xl text-[#2E294E]/70 max-w-lg font-medium leading-relaxed mb-16 text-pretty">
                Every project begins with a conversation. Let's discuss your technical goals and how I can help you scale via <span className="text-[#541388] font-bold">BrylCodes</span>.
              </p>

              <div className="space-y-10">
                <div className="flex gap-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-[#541388] rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#541388]/40 mb-2">Direct Reach</h4>
                    <Link href="mailto:brylcodes@gmail.com" className="text-2xl font-black text-[#2E294E] group-hover:text-[#D90368] transition-colors inline-block">brylcodes@gmail.com</Link>
                  </div>
                </div>

                <div className="flex gap-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-[#D90368] rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#541388]/40 mb-2">Direct Line</h4>
                    <Link href="tel:+919557660208" className="text-2xl font-black text-[#2E294E] group-hover:text-[#541388] transition-colors inline-block">+91 95576 60208</Link>
                  </div>
                </div>

                <div className="flex gap-6 items-center pt-10 border-t border-[#541388]/5">
                  <Link
                    href="https://cal.com/brylcodes/30min"
                    className="px-8 py-4 bg-[#FFD400] text-[#2E294E] rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:scale-105 transition-transform"
                  >
                    <CalendarIcon size={18} />
                    Schedule Sync
                  </Link>
                </div>

                <div className="pt-10 border-t border-[#541388]/5">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#541388]/40 mb-8">Professional Ecosystem</h4>
                  <div className="flex gap-8">
                    <Link href="https://linkedin.com/in/brylcoder" className="text-[#541388] hover:text-[#D90368] transition-colors"><Linkedin size={28} /></Link>
                    <Link href="https://twitter.com/brylcodes" className="text-[#541388] hover:text-[#D90368] transition-colors"><Twitter size={28} /></Link>
                    <Link href="https://github.com/brylcoderr" className="text-[#541388] hover:text-[#D90368] transition-colors"><Github size={28} /></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#D90368]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[#541388]/5 rounded-full blur-3xl pointer-events-none" />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
