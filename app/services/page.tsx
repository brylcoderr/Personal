'use client'

import React, { useRef, useState, useMemo } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MoveRight, ChevronLeft, ChevronRight, Filter } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { services, Service } from '@/lib/services-data'

const FadeInUp = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
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
    <main className="min-h-screen bg-[#F1E9DA]">
      <Navbar />
      
      <section className="pt-44 pb-20">
        <div className="section-container text-center mb-16">
          <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#541388] mb-4 block">Personal Capabilities</span>
          <h1 className="text-5xl md:text-[80px] font-black text-[#2E294E] leading-tight mb-8">
            Advanced <span className="text-[#541388]">Automation</span> Solutions
          </h1>
          <p className="text-xl text-[#2E294E]/70 max-w-2xl mx-auto font-medium leading-relaxed">
            From custom AI integrations to complex enterprise automation, I architect the digital systems that scale your business through the <span className="text-[#541388] font-bold">BrylCodes</span> framework.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="section-container mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-[#541388] text-white shadow-lg scale-105' 
                : 'bg-white/50 text-[#2E294E]/60 hover:bg-white hover:text-[#541388]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="section-container grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="wait">
            {paginatedServices.map((service, i) => (
              <FadeInUp key={service.id} delay={i * 0.05} className="agency-card bg-white p-10 flex flex-col h-full border border-[#541388]/5 group hover:border-[#541388]/20 transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#541388] opacity-60">
                    Outcome: {service.outcome}
                  </span>
                  <span className="px-3 py-1 bg-[#F1E9DA] text-[#541388] text-[9px] font-black uppercase tracking-tighter rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h4 className="text-2xl font-black text-[#2E294E] mb-4 group-hover:text-[#541388] transition-colors">{service.title}</h4>
                <p className="text-[#2E294E]/60 font-medium mb-10 flex-1 line-clamp-3">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {service.metrics.map((m, j) => (
                    <span key={j} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-[#FFD400] text-[#2E294E] rounded-full">
                      {m}
                    </span>
                  ))}
                </div>
                
                <Link 
                  href={`/services/${service.slug}`} 
                  className="text-sm font-black uppercase tracking-widest text-[#D90368] group/link flex items-center gap-2 underline underline-offset-4 decoration-2 decoration-[#D90368]/20 hover:decoration-[#D90368] transition-all"
                >
                  View Solution <MoveRight className="group-hover/link:translate-x-2 transition-transform" size={16} />
                </Link>
              </FadeInUp>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="section-container flex justify-center items-center gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-full bg-white border border-[#541388]/10 text-[#541388] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#541388] hover:text-white transition-all shadow-sm"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 rounded-full font-black text-xs transition-all ${
                    currentPage === i + 1
                    ? 'bg-[#541388] text-white'
                    : 'bg-white text-[#2E294E]/40 hover:text-[#541388]'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full bg-white border border-[#541388]/10 text-[#541388] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#541388] hover:text-white transition-all shadow-sm"
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </section>

      {/* Hero Stats */}
      <section className="py-24 border-y border-[#541388]/5 bg-white/30 backdrop-blur-sm">
        <div className="section-container flex flex-wrap justify-around gap-12 text-center">
            {[
                { label: 'Automations Built', value: '500+' },
                { label: 'Hours Saved', value: '12k+' },
                { label: 'ROI Delivered', value: '10x' },
                { label: 'Reliability', value: '99.9%' }
            ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                    <span className="text-4xl md:text-6xl font-black text-[#541388]">{stat.value}</span>
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#2E294E]/50">{stat.label}</span>
                </div>
            ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-[#541388]">
        <div className="section-container text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to architect your success?</h2>
            <Link href="/contact" className="px-12 py-5 bg-[#D90368] text-white rounded-lg font-black uppercase tracking-widest hover:scale-105 transition-transform inline-block shadow-2xl">
                Ready to Scale? Contact BrylCodes
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
