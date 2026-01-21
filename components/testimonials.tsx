'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'
import testimonials from '@/src/data/testimonials.json'
import { SwipeCards } from './swipe-cards'

export function Testimonials() {
  const renderTestimonialCard = (testimonial: any) => (
    <Card className="p-8 h-full flex flex-col bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
      {/* Quote Icon */}
      <div className="text-4xl text-primary/30 mb-4 group-hover:text-primary/50 transition-colors">
        "
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Star key={i} size={18} className="fill-primary text-primary" />
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <p className="text-lg text-foreground/80 mb-6 flex-1 leading-relaxed italic font-light">
        "{testimonial.quote}"
      </p>

      {/* Divider */}
      <div className="w-8 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6"></div>

      {/* Author */}
      <div className="space-y-1">
        <h4 className="font-semibold text-foreground text-base">{testimonial.name}</h4>
        <p className="text-sm text-foreground/60">
          {testimonial.role}
        </p>
        <p className="text-xs text-primary/70 font-medium">{testimonial.company}</p>
      </div>
    </Card>
  )

  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by Founders & Leaders
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            See what our clients have to say about working with us.
          </p>
        </motion.div>

        {/* Swipe Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SwipeCards cards={testimonials} renderCard={renderTestimonialCard} />
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-primary/20"
        >
          <p className="text-center text-sm text-foreground/60 mb-8 uppercase tracking-wider font-semibold">
            Trusted by Industry Leaders
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {['Acme Co', 'DataSync', 'Nexus', 'InsightData', 'TechStart', 'CloudNine'].map((company, idx) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(147, 51, 234, 0.3)' }}
                className="flex items-center justify-center h-14 bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-lg text-foreground/60 font-medium text-sm text-center px-4 hover:text-primary/80 transition-colors cursor-pointer"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
