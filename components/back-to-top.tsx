'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isFloatingCTAVisible, setIsFloatingCTAVisible] = useState(true)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }

    const handleScroll = () => {
      // Hide floating CTA when user scrolls down significantly
      setIsFloatingCTAVisible(window.scrollY < 100)
    }

    window.addEventListener('scroll', toggleVisibility)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {/* Premium Floating CTA */}
      <AnimatePresence>
        {isFloatingCTAVisible && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            whileHover={{ y: -2 }}
            className="fixed bottom-10 right-8 sm:right-12 z-50 group cursor-pointer pointer-events-auto"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <div className="relative flex items-center gap-4 px-6 h-14 rounded-full bg-zinc-950/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.2)] transition-all duration-500">
              {/* Background Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">
                Initialize <span className="text-primary">Talk</span>
              </span>
              
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                <ArrowUp className="w-4 h-4 rotate-45 group-hover:rotate-225 transition-transform duration-700" />
              </div>
            </div>
            
            {/* Decorative Pulse Aura */}
            <div className="absolute inset-0 -z-10 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Back up Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 sm:bottom-12 sm:right-12 z-48 w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 border border-white/10 text-white shadow-2xl hover:border-primary/50 transition-all duration-500 group"
          >
            <div className="absolute inset-0 rounded-full bg-linear-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <ArrowUp className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform" />
            <div className="absolute -inset-1 bg-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
