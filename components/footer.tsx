'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black pt-16 md:pt-24 pb-8 md:pb-12 neo-border-t border-white overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-16 md:mb-24">
          <div className="space-y-6 md:space-y-8 lg:col-span-1">
             <Link href="/" className="flex items-center gap-3 md:gap-4 group transition-transform">
                <div className="w-12 h-12 md:w-16 md:h-16 relative overflow-hidden bg-white neo-border rounded-xl md:rounded-2xl neo-shadow-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all flex items-center justify-center shrink-0 p-1.5 md:p-2">
                   <img src="/logo.png" alt="BrylCodes" className="w-full h-full object-contain" />
                </div>
                <span className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase">BrylCodes.</span>
             </Link>
             <p className="text-white/80 font-bold leading-tight max-w-xs text-pretty text-sm md:text-base">
                AI-powered automation and full-stack engineering, delivered with precision. We build intelligent systems that scale.
             </p>
             <div className="flex items-center gap-3">
               <a href="https://github.com/brylcoderr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 neo-border border-white/20 flex items-center justify-center hover:bg-neo-accent transition-colors">
                 <Github className="w-5 h-5 text-white" strokeWidth={2.5} />
               </a>
               <a href="https://linkedin.com/in/brylcoder" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 neo-border border-white/20 flex items-center justify-center hover:bg-neo-accent transition-colors">
                 <Linkedin className="w-5 h-5 text-white" strokeWidth={2.5} />
               </a>
               <a href="https://twitter.com/brylcodes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 neo-border border-white/20 flex items-center justify-center hover:bg-neo-accent transition-colors">
                 <Twitter className="w-5 h-5 text-white" strokeWidth={2.5} />
               </a>
             </div>
          </div>
          
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-3 grid grid-cols-3 gap-4 sm:gap-8">
            {[
              { 
                title: 'Services', 
                links: [
                  { label: 'AI Agent Development', href: '/services/ai-chatbot-development' },
                  { label: 'Workflow Automation', href: '/services/make-com-automation' },
                  { label: 'LLM & RAG Systems', href: '/services/modern-ai-solutions' },
                  { label: 'All Solutions', href: '/services' }
                ] 
              },
              { 
                title: 'Company', 
                links: [
                  { label: 'About Us', href: '/about' },
                  { label: 'Case Studies', href: '/work' },
                  { label: 'Our Process', href: '/process' },
                  { label: 'Tech Stack', href: '/stack' },
                  { label: 'Contact', href: '/contact' }
                ] 
              },
              { 
                title: 'Legal', 
                links: [
                  { label: 'Privacy Policy', href: '/privacy-policy' },
                  { label: 'Terms of Service', href: '/terms-of-service' },
                  { label: 'Cookie Policy', href: '/cookie-policy' },
                  { label: 'SLA Agreement', href: '/sla-agreement' }
                ] 
              }
            ].map((col, i) => (
              <div key={i} className="space-y-4 md:space-y-8">
                <h4 className="text-[10px] md:text-sm font-black uppercase tracking-widest text-neo-secondary leading-none">{col.title}</h4>
                <ul className="space-y-2 md:space-y-4">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <Link href={link.href} className="text-white/60 hover:text-neo-accent font-black uppercase tracking-widest text-[8px] md:text-xs transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-8 md:pt-12 border-t-2 md:border-t-4 border-white flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
           <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/40 text-center md:text-left">
              &copy; {currentYear} BrylCodes | All rights reserved. 
           </p>
           <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/40">
              <span className="bg-neo-accent text-white px-2 py-1 neo-border animate-pulse">Available for Projects</span>
              <span className="bg-white text-black px-2 py-1 neo-border">AI-First Engineering</span>
           </div>
        </div>
      </div>
    </footer>
  )
}
