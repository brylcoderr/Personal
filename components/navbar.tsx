'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, CalendarCheck } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Stack', href: '/stack' },
    { label: 'About', href: '/about' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black py-3 md:py-4">
      <div className="section-container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          <div className="w-10 h-10 md:w-12 md:h-12 relative overflow-hidden bg-white neo-border rounded-xl md:rounded-2xl neo-shadow-sm group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all flex items-center justify-center shrink-0 p-1.5 md:p-2">
             <img src="/logo.png" alt="BrylCodes" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl md:text-3xl font-black text-black tracking-tighter uppercase">BrylCodes.</span>
            <span className="text-[8px] md:text-[10px] font-black text-neo-accent uppercase tracking-widest leading-none">AI Automation & Engineering</span>
          </div>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className={cn(
                "text-sm font-black uppercase tracking-widest transition-colors p-2",
                pathname === link.href ? "text-neo-accent" : "text-black hover:text-neo-accent"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <a href="https://cal.com/brylcodes/30min" target="_blank" rel="noopener noreferrer" className="hidden md:flex neo-btn bg-white text-black hover:bg-neo-secondary transition-colors px-4 py-2 text-xs items-center gap-2">
            <CalendarCheck className="w-4 h-4" strokeWidth={3} /> BOOK A SYNC
          </a>
          <Link href="/contact" className="hidden sm:block neo-btn bg-neo-accent text-white hover:bg-black transition-colors px-4 py-2 text-xs md:text-sm md:px-6 md:py-3">
            GET STARTED
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 neo-border bg-neo-secondary text-black neo-shadow-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b-4 border-black p-6 lg:hidden flex flex-col gap-4 z-40"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
              className={cn(
                "text-xl font-black uppercase tracking-tighter border-b-2 pb-2",
                pathname === link.href ? "text-neo-accent border-neo-accent" : "text-black hover:text-neo-accent border-black/10"
              )}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="neo-btn bg-neo-accent text-white text-center mt-4"
            >
              GET STARTED
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

