'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Terminal, Zap } from 'lucide-react'
import packages from '@/src/data/packages.json'

export function Services() {
  return (
    <section id="packages" className="py-16 bg-background relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="code-label">
              Service_Packages
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Simple <span className="text-primary italic">Pricing</span>
            </h2>
          </div>
          <div className="text-muted-foreground font-mono text-xs max-w-sm border-l border-border pl-6 py-2">
            SELECT * FROM services WHERE quality = 'MAX'; <br />
            // Transparent pricing, no hidden costs
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`
                ide-panel flex flex-col transition-all duration-300
                ${pkg.popular ? 'border-primary/50 shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)] scale-[1.02] z-10' : 'hover:border-primary/30'}
              `}
            >
              {/* Package Header */}
              <div className="p-8 border-b border-border/50 bg-secondary/20 h-full max-h-[160px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-mono text-sm font-bold uppercase tracking-wider">{pkg.name}</h3>
                    {pkg.popular && (
                      <span className="px-2 py-0.5 bg-primary text-primary-foreground font-mono text-[10px] font-black uppercase rounded">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-xs font-mono lowercase">
                    {pkg.description}
                  </p>
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-foreground">{pkg.price}</span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">/ Project</span>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="space-y-4 mb-10 flex-1">
                  <div className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest mb-6">
                    Included_Features[]
                  </div>
                  {pkg.deliverables.slice(0, 8).map((item, d) => (
                    <div key={d} className="flex items-start gap-3">
                      <Check size={14} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </div>
                  ))}
                  {pkg.deliverables.length > 8 && (
                    <div className="text-[10px] font-mono text-primary/40 pl-6">
                      + {pkg.deliverables.length - 8} more features
                    </div>
                  )}
                </div>

                {/* CTA */}
                <a 
                  href="#contact"
                  className={`
                    w-full py-4 font-mono text-xs font-bold uppercase tracking-widest rounded transition-all flex items-center justify-center gap-2
                    ${pkg.popular 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 glow-accent' 
                      : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border/50'}
                  `}
                >
                  <Terminal size={14} />
                  Initiate_Order
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
