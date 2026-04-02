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
    <main className="min-h-screen bg-neo-bg texture-grid overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 md:pt-44 pb-20 relative overflow-hidden">
        <div className="section-container text-center mb-12 md:mb-16 relative z-10">
          <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">Expert Capabilities</span>
          <h1 className="text-4xl md:text-[90px] font-black text-black leading-[0.9] md:leading-none mb-6 md:mb-8 uppercase tracking-tighter">
            Advanced <span className="bg-neo-secondary px-2 md:px-4">Solutions</span>
          </h1>
          <p className="text-lg md:text-2xl text-black max-w-2xl mx-auto font-bold leading-tight uppercase tracking-tight">
            Architecting digital systems that scale through precision engineering.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="section-container mb-12 flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={cn(
                "px-4 md:px-8 py-2 md:py-3 neo-border font-black text-[10px] md:text-xs uppercase tracking-widest transition-all duration-100",
                activeCategory === cat 
                ? 'bg-black text-white translate-x-[2px] translate-y-[2px] shadow-none' 
                : 'bg-white text-black neo-shadow-sm hover:translate-x-px hover:translate-y-px hover:shadow-none'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="section-container grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20 relative z-10">
          <AnimatePresence mode="wait">
            {paginatedServices.map((service, i) => (
              <FadeInUp key={service.id} delay={i * 0.05} className="neo-card flex flex-col h-full bg-white group">
                <div className="bg-neo-muted border-b-4 border-black p-3 md:p-4 flex justify-between items-center">
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-black/80">
                    OUTCOME: {service.outcome}
                  </span>
                  <span className="px-2 py-0.5 bg-black text-white text-[8px] md:text-[9px] font-black uppercase tracking-tighter neo-border border-white border-2">
                    {service.category}
                  </span>
                </div>
                
                <div className="p-6 md:p-10 flex flex-col flex-1">
                  <h4 className="text-2xl md:text-3xl font-black text-black mb-3 md:mb-4 uppercase tracking-tight leading-tight group-hover:text-neo-accent transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm md:text-base text-black font-bold mb-8 md:mb-10 flex-1 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                    {service.metrics.map((m, j) => (
                      <span key={j} className="text-[8px] md:text-[9px] font-black uppercase tracking-widest px-2 py-0.5 bg-neo-secondary border-2 border-black shadow-[2px_2px_0px_#000]">
                        {m}
                      </span>
                    ))}
                  </div>
                  
                   <Link 
                    href={`/services/${service.slug}`} 
                    className="neo-btn bg-black text-white text-center flex items-center justify-center gap-2 group/link text-sm md:text-base py-3"
                  >
                    VIEW SOLUTION <MoveRight className="group-hover/link:translate-x-2 transition-transform w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                  </Link>
                </div>
              </FadeInUp>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="section-container flex justify-center items-center gap-4 md:gap-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 md:w-14 md:h-14 neo-border bg-white flex items-center justify-center neo-shadow-sm disabled:opacity-30 disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-none hover:bg-neo-secondary transition-all"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
            </button>
            
            <div className="flex gap-2 md:gap-4">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={cn(
                    "w-10 h-10 md:w-12 md:h-12 neo-border font-black text-xs md:text-sm transition-all flex items-center justify-center",
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
              className="w-10 h-10 md:w-14 md:h-14 neo-border bg-white flex items-center justify-center neo-shadow-sm disabled:opacity-30 disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-none hover:bg-neo-secondary transition-all"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
            </button>
          </div>
        )}
      </section>

      {/* Hero Stats */}
      <section className="py-16 md:py-24 bg-black border-y-4 border-black border-collapse overflow-hidden relative">
        <div className="absolute inset-0 texture-grid opacity-20 pointer-events-none" />
        <div className="section-container grid grid-cols-2 md:flex md:flex-wrap justify-around gap-8 md:gap-12 text-center relative z-10">
            {[
                { label: 'Automations Built', value: '500+' },
                { label: 'Hours Saved', value: '12k+' },
                { label: 'ROI Delivered', value: '10x' },
                { label: 'Reliability', value: '99.9%' }
            ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1 md:gap-2 group md:rotate-1 hover:rotate-0 transition-transform cursor-default">
                    <span className="text-4xl md:text-8xl font-black text-white drop-shadow-[3px_3px_0px_#FF6B6B] md:drop-shadow-[6px_6px_0px_#FF6B6B]">{stat.value}</span>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-neo-secondary">{stat.label}</span>
                </div>
            ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-neo-bg texture-halftone border-b-4 border-black relative overflow-hidden">
        <div className="section-container text-center relative z-10">
            <h2 className="text-3xl md:text-8xl font-black text-black mb-8 md:mb-12 uppercase tracking-tighter leading-[0.9]">Ready to architect your success?</h2>
            <Link href="/contact" className="neo-btn bg-neo-accent text-white py-4 md:py-6 px-10 md:px-16 text-lg md:text-xl md:scale-110 shadow-[6px_6px_0px_0px_#000] md:shadow-[8px_8px_0px_0px_#000] inline-block">
                PROJECT INQUIRY <MoveRight className="inline-block ml-2 md:ml-4 w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
