'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Terminal } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#approach', label: 'Approach' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#packages', label: 'Packages' },
  { href: '#contact', label: 'Contact' }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border/50" 
          : "bg-transparent"
      )}>
        <nav className="section-container">
          <div className="flex items-center h-20 gap-x-12">
            {/* Left Zone: Logo */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="flex items-center gap-2 group font-mono font-bold text-xl tracking-tighter"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded bg-primary text-primary-foreground shadow-[0_0_15px_-3px_rgba(139,92,246,0.5)]">
                  <Terminal size={18} strokeWidth={2.5} />
                </div>
                <span className="hidden sm:inline-block">
                  BrylCodes<span className="text-primary">.Dev</span>
                </span>
              </Link>
            </div>

            {/* Center Zone: Navigation */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <div className="flex items-center gap-x-8">
                {navLinks.map(link => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60 hover:text-primary transition-colors focus-ring py-2 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Zone: Utils & CTA */}
            <div className="flex-shrink-0 flex items-center gap-6">
              {/* Subtle System Status */}
              <div className="hidden 2xl:flex items-center gap-4 border-l border-border/50 pl-6 font-mono text-[9px] text-muted-foreground/30 uppercase tracking-[0.2em]">
                <div className="flex items-center gap-2 text-green-500/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  <span>200_OK</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-primary/30">⌥</span>
                  <span>main*</span>
                </div>
              </div>

              <Link 
                href="#contact"
                className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground font-mono text-[10px] font-bold uppercase tracking-widest rounded hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] glow-accent"
              >
                Hire_Me
              </Link>
              
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 text-muted-foreground hover:text-foreground focus-ring rounded-md"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </nav>
      </header>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-lg">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between h-20 px-6 border-b border-border/50">
              <Link 
                href="/" 
                className="flex items-center gap-2 font-mono font-bold text-xl tracking-tighter"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded bg-primary text-primary-foreground">
                  <Terminal size={18} strokeWidth={2.5} />
                </div>
                <span>BrylCodes<span className="text-primary">.Dev</span></span>
              </Link>
              <button 
                className="p-2 text-muted-foreground hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-10">
              <div className="space-y-6">
                {navLinks.map((link, index) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="flex items-center gap-6 py-4 text-3xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="font-mono text-xs text-primary/40 group-hover:text-primary transition-colors">0{index + 1}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="p-10 border-t border-border/50">
              <Link 
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-5 bg-primary text-primary-foreground font-mono font-bold uppercase tracking-widest rounded transition-all hover:bg-primary/90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire_Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
