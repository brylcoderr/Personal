'use client'

import React, { useRef, useState, useMemo } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MoveRight, ChevronLeft, ChevronRight, Filter } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { services, Service } from '@/lib/services-data'
import { cn } from '@/lib/utils'

const FadeInUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay, ease: "linear" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const ITEMS_PER_PAGE = 6;

export default function ServicesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))];

  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') return services;
    return services.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const paginatedServices = filteredServices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-neo-bg texture-grid">
      <Navbar />
      
      <section className="pt-44 pb-20">
        <div className="section-container text-center mb-16">
          <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">Expert Capabilities</span>
          <h1 className="text-5xl md:text-[90px] font-black text-black leading-none mb-8 uppercase tracking-tighter">
            Advanced <span className="bg-neo-secondary px-4">Solutions</span>
          </h1>
          <p className="text-2xl text-black max-w-2xl mx-auto font-bold leading-tight uppercase tracking-tight">
            Architecting digital systems that scale through precision engineering.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="section-container mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "px-8 py-3 neo-border font-black text-xs uppercase tracking-widest transition-all duration-100",
                activeCategory === cat 
                ? 'bg-black text-white translate-x-[2px] translate-y-[2px] shadow-none' 
                : 'bg-white text-black neo-shadow-sm hover:translate-x-px hover:translate-y-px hover:shadow-none'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="section-container grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <AnimatePresence mode="wait">
            {paginatedServices.map((service, i) => (
              <FadeInUp key={service.id} delay={i * 0.05} className="neo-card flex flex-col h-full bg-white group">
                <div className="bg-neo-muted border-b-4 border-black p-4 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black">
                    OUTCOME: {service.outcome}
                  </span>
                  <span className="px-3 py-1 bg-black text-white text-[9px] font-black uppercase tracking-tighter neo-border border-white border-2">
                    {service.category}
                  </span>
                </div>
                
                <div className="p-10 flex flex-col flex-1">
                  <h4 className="text-3xl font-black text-black mb-4 uppercase tracking-tight leading-none group-hover:text-neo-accent transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-black font-bold mb-10 flex-1 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {service.metrics.map((m, j) => (
                      <span key={j} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-neo-secondary border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                        {m}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="neo-btn bg-black text-white text-center flex items-center justify-center gap-2 group/link"
                  >
                    VIEW SOLUTION <MoveRight className="group-hover/link:translate-x-2 transition-transform" size={16} strokeWidth={3} />
                  </Link>
                </div>
              </FadeInUp>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="section-container flex justify-center items-center gap-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-14 h-14 neo-border bg-white flex items-center justify-center neo-shadow-sm disabled:opacity-30 disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-none hover:bg-neo-secondary transition-all"
              aria-label="Previous page"
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </button>
            
            <div className="flex gap-4">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={cn(
                    "w-12 h-12 neo-border font-black text-sm transition-all flex items-center justify-center",
                    currentPage === i + 1
                    ? 'bg-black text-white shadow-none translate-x-[2px] translate-y-[2px]'
                    : 'bg-white text-black neo-shadow-sm hover:translate-x-px hover:translate-y-px hover:shadow-none'
                  )}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-14 h-14 neo-border bg-white flex items-center justify-center neo-shadow-sm disabled:opacity-30 disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-none hover:bg-neo-secondary transition-all"
              aria-label="Next page"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </div>
        )}
      </section>

      {/* Hero Stats */}
      <section className="py-24 bg-black border-y-4 border-black border-collapse overflow-hidden relative">
        <div className="absolute inset-0 texture-grid opacity-20 pointer-events-none" />
        <div className="section-container flex flex-wrap justify-around gap-12 text-center relative z-10">
            {[
                { label: 'Automations Built', value: '500+' },
                { label: 'Hours Saved', value: '12k+' },
                { label: 'ROI Delivered', value: '10x' },
                { label: 'Reliability', value: '99.9%' }
            ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2 group rotate-1 hover:rotate-0 transition-transform cursor-default">
                    <span className="text-5xl md:text-8xl font-black text-white drop-shadow-[4px_4px_0px_#FF6B6B]">{stat.value}</span>
                    <span className="text-xs font-black uppercase tracking-widest text-neo-secondary">{stat.label}</span>
                </div>
            ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-neo-bg texture-halftone border-b-4 border-black">
        <div className="section-container text-center">
            <h2 className="text-5xl md:text-8xl font-black text-black mb-12 uppercase tracking-tighter">Ready to architect your success?</h2>
            <Link href="/contact" className="neo-btn bg-neo-accent text-white py-6 px-16 text-xl scale-110 shadow-[8px_8px_0px_0px_#000]">
                PROJECT INQUIRY <MoveRight className="inline-block ml-4" size={24} strokeWidth={3} />
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
