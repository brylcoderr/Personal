'use client'

import React from 'react'
import { Mail, MapPin, Linkedin, Twitter, Github, Phone, Calendar as CalendarIcon } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ContactForm } from '@/components/contact-form'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neo-bg texture-grid">
      <Navbar />

      <section className="pt-44 pb-32">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">Connect & SCALE</span>
              <h1 className="text-5xl md:text-[90px] font-black text-black leading-none mb-12 uppercase tracking-tighter">
                Let's <span className="bg-neo-secondary px-4">Engineer</span> Your Vision.
              </h1>
              <p className="text-2xl text-black max-w-lg font-bold leading-tight mb-16 uppercase tracking-tight">
                Every project begins with a baseline assessment. Let's discuss your technical goals.
              </p>

              <div className="space-y-12">
                <div className="flex gap-8 group cursor-pointer items-center">
                  <div className="w-20 h-20 bg-black neo-border flex items-center justify-center shrink-0 neo-shadow-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
                    <Mail className="text-white" size={32} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-neo-accent mb-2">Direct Reach</h4>
                    <Link href="mailto:brylcodes@gmail.com" className="text-3xl font-black text-black hover:text-neo-accent transition-colors inline-block uppercase tracking-tighter">brylcodes@gmail.com</Link>
                  </div>
                </div>

                <div className="flex gap-8 group cursor-pointer items-center">
                  <div className="w-20 h-20 bg-neo-secondary neo-border flex items-center justify-center shrink-0 neo-shadow-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
                    <Phone className="text-black" size={32} strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-neo-accent mb-2">Direct Line</h4>
                    <Link href="tel:+919557660208" className="text-3xl font-black text-black hover:text-neo-accent transition-colors inline-block uppercase tracking-tighter">+91 95576 60208</Link>
                  </div>
                </div>

                <div className="flex gap-8 items-center pt-12 border-t-4 border-black">
                  <Link
                    href="https://cal.com/brylcodes/30min"
                    className="neo-btn bg-black text-white py-6 px-12 text-xl shadow-[6px_6px_0px_0px_#FF6B6B]"
                  >
                    <CalendarIcon className="inline-block mr-4 mb-1" size={24} strokeWidth={3} />
                    BOOK A SYNC
                  </Link>
                </div>

                <div className="pt-12 border-t-4 border-black">
                  <h4 className="text-xs font-black uppercase tracking-widest text-neo-accent mb-8">Professional Ecosystem</h4>
                  <div className="flex gap-10">
                    <Link href="https://linkedin.com/in/brylcoder" className="text-black hover:text-neo-accent p-4 neo-border bg-white neo-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"><Linkedin size={32} strokeWidth={3} /></Link>
                    <Link href="https://twitter.com/brylcodes" className="text-black hover:text-neo-accent p-4 neo-border bg-white neo-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"><Twitter size={32} strokeWidth={3} /></Link>
                    <Link href="https://github.com/brylcoderr" className="text-black hover:text-neo-accent p-4 neo-border bg-white neo-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"><Github size={32} strokeWidth={3} /></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative p-8">
               <div className="absolute inset-0 bg-neo-accent neo-border translate-x-4 translate-y-4 -z-10" />
               <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
