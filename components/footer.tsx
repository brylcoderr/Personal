'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black pt-24 pb-12 neo-border-t border-white">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-8 lg:col-span-1">
             <Link href="/" className="flex items-center gap-4 group transition-transform">
                <div className="w-16 h-16 relative overflow-hidden bg-white neo-border rounded-2xl neo-shadow-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all flex items-center justify-center shrink-0 p-2">
                   <img src="/logo.png" alt="BrylCodes" className="w-full h-full object-contain" />
                </div>
                <span className="text-4xl font-black text-white tracking-tighter uppercase">BrylCodes.</span>
             </Link>
             <p className="text-white font-bold leading-tight max-w-xs text-pretty">
                Engineering resilient, scalable digital ecosystems for world-class enterprises. High-performance automation, delivered with precision.
             </p>
          </div>
          
          {[
            { 
              title: 'Services', 
              links: [
                { label: 'Full-Stack Engineering', href: '/services' },
                { label: 'API Development', href: '/services' },
                { label: 'System Architecture', href: '/services' },
                { label: 'Mobile Apps', href: '/services' }
              ] 
            },
            { 
              title: 'Company', 
              links: [
                { label: 'About Me', href: '/about' },
                { label: 'Case Studies', href: '/work' },
                { label: 'Methodology', href: '/process' },
                { label: 'Experience', href: '/experience' },
                { label: 'Connect', href: '/contact' }
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
            <div key={i} className="space-y-8">
              <h4 className="text-sm font-black uppercase tracking-widest text-neo-secondary">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href} className="text-white/60 hover:text-neo-accent font-black uppercase tracking-widest text-xs transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-12 border-t-4 border-white flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-xs font-black uppercase tracking-widest text-white/40">
              &copy; {currentYear} BrylCodes | All rights reserved. 
           </p>
           <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/40">
              <span className="bg-white text-black px-2 py-1 neo-border">Engineering Standards</span>
              <span className="bg-white text-black px-2 py-1 neo-border">Global Availability</span>
           </div>
        </div>
      </div>
    </footer>
  )
}
