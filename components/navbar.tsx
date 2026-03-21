'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#F1E9DA] py-4">
      <div className="section-container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-[1.02]">
          <div className="w-10 h-10 relative overflow-hidden rounded-lg border border-[#F1E9DA]">
            <Image src="/logo.png" alt="BrylCodes" fill className="object-cover" />
          </div>
          <span className="text-2xl font-black text-[#541388] tracking-tighter">BrylCodes.</span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-10">
          {[
            { label: 'Services', href: '/services' },
            { label: 'Work', href: '/work' },
            { label: 'Process', href: '/process' },
            { label: 'Stack', href: '/stack' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' }
          ].map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className="text-sm font-bold text-[#2E294E] hover:text-[#D90368] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <Link href="/contact" className="px-6 py-3 bg-[#D90368] text-white text-[13px] font-black uppercase tracking-widest rounded-[8px] hover:scale-105 transition-all shadow-lg shadow-[#D90368]/20">
          Discuss Project
        </Link>
      </div>
    </nav>
  )
}
