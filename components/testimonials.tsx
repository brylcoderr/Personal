'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle2, 
  MessageSquare, 
  GitPullRequest, 
  Star, 
  Clock,
  ShieldCheck
} from 'lucide-react'
import testimonials from '@/src/data/testimonials.json'
import { Carousel } from '@/components/ui/carousel'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-background border-y border-border/20">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="code-label">
               Client_Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Clinical <span className="text-primary italic">Approvals</span>
            </h2>
          </div>
          <div className="text-muted-foreground font-mono text-xs max-w-sm border-l border-border pl-6 py-2">
            await internal_quality.verify_approvals(); <br />
            // {testimonials.length} contributions merged to production
          </div>
        </div>

        {/* Testimonials Carousel */}
        <Carousel 
          autoPlay={true} 
          delay={5000}
          slideClassName="md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
        >
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group h-full pr-4"
            >
              <div className="ide-panel bg-secondary/10 flex flex-col h-full overflow-hidden transition-all duration-500 hover:border-primary/40">
                {/* Review Header (GitHub Style) */}
                <div className="px-5 py-3 border-b border-border/50 bg-secondary/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                      {item.name.charAt(0)}
                    </div>
                    <span className="font-mono text-[11px] font-bold tracking-tight">
                      @{item.name.toLowerCase().replace(/\s+/g, '_')}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full">
                    <CheckCircle2 size={10} className="text-green-500" />
                    <span className="font-mono text-[9px] font-black text-green-500 uppercase tracking-tighter">Approved</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-4 text-muted-foreground/30 font-mono text-[9px] uppercase tracking-widest">
                    <MessageSquare size={10} />
                    <span>Review_Comment_0{idx + 1}</span>
                  </div>
                  
                  <blockquote className="flex-1 text-sm text-foreground/80 leading-relaxed font-light indent-4 italic">
                    {item.quote}
                  </blockquote>

                  {/* Metadata Tags */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 px-2 py-1 bg-background border border-border/50 rounded text-[9px] font-mono text-muted-foreground/60">
                      <ShieldCheck size={10} />
                      {item.company}
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-background border border-border/50 rounded text-[9px] font-mono text-muted-foreground/60">
                       <Clock size={10} />
                       {item.role}
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="px-5 py-2 border-t border-border/10 bg-black/20 flex items-center justify-between font-mono text-[9px] text-muted-foreground/30 uppercase tracking-[0.2em]">
                  <div className="flex items-center gap-2">
                    <GitPullRequest size={10} className="text-primary/40" />
                    <span>Merge: Stable</span>
                  </div>
                  <span>v1.0.{idx + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>

        {/* Stats Section with Technical Flair */}
        <div className="mt-24 pt-16 border-t border-border/20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { value: '50+', label: 'Commits_Merged', icon: GitPullRequest },
            { value: '5+', label: 'Uptime_Years', icon: Clock },
            { value: '100%', label: 'Quality_Score', icon: CheckCircle2 },
            { value: '10M+', label: 'User_Reach', icon: Star }
          ].map((stat, index) => (
            <div key={index} className="ide-panel p-6 bg-secondary/5 border-dashed border-border/50 group flex items-start gap-4">
               <div className="p-2 rounded bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                 <stat.icon size={18} />
               </div>
               <div>
                  <div className="text-2xl font-black text-foreground mb-1 font-mono tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-[9px] font-mono text-muted-foreground/40 uppercase tracking-widest">
                    {stat.label}
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
