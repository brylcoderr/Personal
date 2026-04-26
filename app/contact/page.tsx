'use client'

import React from 'react'
import { Mail, MapPin, Linkedin, Twitter, Github, Phone, Calendar as CalendarIcon } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neo-bg texture-grid overflow-x-hidden">
      <Navbar />

      <section className="pt-32 md:pt-44 pb-20 md:pb-32 relative overflow-hidden">
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="space-y-8 md:space-y-12">
              <div>
                <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">START A PROJECT</span>
                <h1 className="text-4xl md:text-[90px] font-black text-black leading-[0.9] md:leading-none mb-6 md:mb-12 uppercase tracking-tighter">
                  Let's <span className="bg-neo-secondary px-2 md:px-4">Build</span> Your AI System.
                </h1>
                <p className="text-lg md:text-2xl text-black max-w-lg font-bold leading-tight mb-8 md:mb-16 uppercase tracking-tight">
                  Every project starts with understanding your goals. Tell us what you need automated.
                </p>
              </div>

              <div className="space-y-8 md:space-y-12">
                <div className="flex gap-4 md:gap-8 group cursor-pointer items-center overflow-hidden">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-black neo-border flex items-center justify-center shrink-0 neo-shadow-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
                    <Mail className="text-white w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-neo-accent mb-1 md:mb-2 text-pretty">Direct Reach</h4>
                    <Link href="mailto:brylcodes@gmail.com" className="text-xl md:text-3xl font-black text-black hover:text-neo-accent transition-colors inline-block uppercase tracking-tighter truncate w-full">brylcodes@gmail.com</Link>
                  </div>
                </div>

                <div className="flex gap-4 md:gap-8 group cursor-pointer items-center overflow-hidden">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-neo-secondary neo-border flex items-center justify-center shrink-0 neo-shadow-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
                    <Phone className="text-black w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-neo-accent mb-1 md:mb-2 text-pretty">Direct Line</h4>
                    <Link href="tel:+919557660208" className="text-xl md:text-3xl font-black text-black hover:text-neo-accent transition-colors inline-block uppercase tracking-tighter">+91 95576 60208</Link>
                  </div>
                </div>

                <div className="flex gap-8 items-center pt-8 md:pt-12 border-t-4 border-black">
                  <Link
                    href="https://cal.com/brylcodes/30min"
                    className="neo-btn bg-black text-white py-4 md:py-6 px-8 md:px-12 text-lg md:text-xl shadow-[4px_4px_0px_0px_#FF6B6B] md:shadow-[6px_6px_0px_0px_#FF6B6B] flex-1 text-center sm:flex-none"
                  >
                    <CalendarIcon className="inline-block mr-2 md:mr-4 mb-1" size={24} strokeWidth={3} />
                    BOOK A SYNC
                  </Link>
                </div>

                <div className="pt-8 md:pt-12 border-t-4 border-black">
                  <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-neo-accent mb-6 md:mb-8 text-pretty">Professional Ecosystem</h4>
                  <div className="flex flex-wrap gap-4 md:gap-10">
                    <Link href="https://linkedin.com/in/brylcoder" className="text-black hover:text-neo-accent p-3 md:p-4 neo-border bg-white neo-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"><Linkedin className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} /></Link>
                    <Link href="https://twitter.com/brylcodes" className="text-black hover:text-neo-accent p-3 md:p-4 neo-border bg-white neo-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"><Twitter className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} /></Link>
                    <Link href="https://github.com/brylcoderr" className="text-black hover:text-neo-accent p-3 md:p-4 neo-border bg-white neo-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"><Github className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} /></Link>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="pt-8 md:pt-12 border-t-4 border-black border-dashed">
                <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-neo-accent mb-6">WHY WORK WITH US</h4>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    { num: '50+', label: 'AI Projects' },
                    { num: '6+', label: 'Years Exp.' },
                    { num: '10M+', label: 'Users Served' },
                    { num: '98+', label: 'Lighthouse Score' }
                  ].map((s, i) => (
                    <div key={i} className="p-3 md:p-4 bg-white neo-border text-center">
                      <span className="text-xl md:text-2xl font-black text-black block">{s.num}</span>
                      <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-black/50">{s.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-black/50 font-bold uppercase tracking-tight mt-4 italic">
                  &ldquo;BrylCodes built an AI system that cut our operational overhead by 60%.&rdquo; — Rob G., CTO
                </p>
              </div>
            </div>

            <div className="relative p-4 md:p-8 mt-12 lg:mt-0 overflow-hidden">
               <div className="absolute inset-0 bg-neo-accent neo-border translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 -z-10" />
               <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
