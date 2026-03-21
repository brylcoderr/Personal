'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#1A1530] pt-24 pb-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-8 lg:col-span-1">
             <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
               <div className="w-12 h-12 relative overflow-hidden rounded-xl border border-white/10">
                 <Image src="/logo.png" alt="BrylCodes" fill className="object-cover" />
               </div>
               <span className="text-3xl font-black text-white tracking-tighter">BrylCodes.</span>
             </Link>
             <p className="text-white/60 font-medium leading-relaxed max-w-xs text-pretty">
                Engineering resilient, scalable digital ecosystems for world-class enterprises and ambitious startups.
             </p>
          </div>
          
          {[
            { 
              title: 'Services', 
              links: [
                { label: 'Full-Stack Engineering', href: '/services' },
                { label: 'API Development', href: '/services' },
                { label: 'System Architecture', href: '/services' },
                { label: 'Mobile Apps', href: '/services' },
                { label: '+91 95576 60208', href: 'tel:+919557660208' }
              ] 
            },
            { 
              title: 'Company', 
              links: [
                { label: 'About Us', href: '/about' },
                { label: 'Case Studies', href: '/work' },
                { label: 'Methodology', href: '/process' },
                { label: 'Connect', href: '/contact' }
              ] 
            },
            { 
              title: 'Legal', 
              links: [
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Cookie Policy', href: '#' },
                { label: 'SLA Agreement', href: '#' }
              ] 
            }
          ].map((col, i) => (
            <div key={i} className="space-y-8">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FFD400]">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-white/60 hover:text-[#FFD400] font-bold text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[10px] font-black uppercase tracking-widest text-white/30">
              &copy; {currentYear} BrylCodes | All rights reserved. 
           </p>
           <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/30">
              <span>ISO 27001 Methodology</span>
              <span>GDPR Aligned</span>
              <span>Enterprise SLA Available</span>
           </div>
        </div>
      </div>
    </footer>
  )
}
