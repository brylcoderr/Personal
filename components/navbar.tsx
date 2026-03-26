'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black py-4">
      <div className="section-container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 relative overflow-hidden bg-white neo-border rounded-2xl neo-shadow-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all flex items-center justify-center shrink-0 p-2">
             <img src="/logo.png" alt="BrylCodes" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-3xl font-black text-black tracking-tighter uppercase">BrylCodes.</span>
            <span className="text-[10px] font-black text-neo-accent uppercase tracking-widest leading-none">High-Performance Engineering</span>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8">
          {[
            { label: 'Work', href: '/work' },
            { label: 'Services', href: '/services' },
            { label: 'Process', href: '/process' },
            { label: 'Stack', href: '/stack' },
            { label: 'Experience', href: '/experience' },
            { label: 'About', href: '/about' }
          ].map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className="text-sm font-black text-black hover:text-neo-accent uppercase tracking-widest transition-colors p-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <Link href="/contact" className="neo-btn bg-neo-accent text-white hover:bg-black transition-colors">
          GET STARTED
        </Link>
      </div>
    </nav>
  )
}
