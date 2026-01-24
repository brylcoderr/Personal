'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Quote } from 'lucide-react'
import testimonials from '@/src/data/testimonials.json'

import { Carousel } from '@/components/ui/carousel'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-background border-y border-border/20">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded font-mono text-[10px] tracking-widest uppercase text-primary">
              <MessageSquare size={12} />
              Wall_of_Trust
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Clinical <span className="text-primary italic">Reviews</span>
            </h2>
          </div>
          <div className="text-muted-foreground font-mono text-xs max-w-sm border-l border-border pl-6 py-2">
            const feedback = await client.getReviews(); <br />
            // {testimonials.length} success stories verified
          </div>
        </div>

        {/* Testimonials Carousel */}
        <Carousel 
          autoPlay={true} 
          delay={4000}
          slideClassName="md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col ide-panel bg-secondary/10 hover:border-primary/40 transition-all duration-500 p-8 h-full"
            >
              {/* Quote Icon */}
              <div className="mb-6 text-primary/20 group-hover:text-primary/40 transition-colors">
                <Quote size={32} />
              </div>

              {/* Quote Text */}
              <div className="flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Metadata */}
              <div className="pt-6 border-t border-border/30">
                <div className="flex flex-col">
                  <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                     {item.name}
                  </span>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground/60 uppercase tracking-widest mt-1">
                    <span>{item.role}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-primary/60">{item.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '5+', label: 'Years Experience' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '10M+', label: 'Users Impacted' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 ide-panel bg-secondary/5 border-dashed"
            >
              <div className="font-mono text-3xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
