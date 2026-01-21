'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import packages from '@/src/data/packages.json'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary mb-2">SERVICES & PACKAGES</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tailored Solutions for Every Budget
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Choose from three carefully crafted packages designed to deliver maximum value at every stage of your growth.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`h-full ${pkg.popular ? 'md:mt-8' : ''}`}
            >
              <div className="relative">
                {pkg.popular && (
                  <motion.div
                    className="absolute -top-6 left-1/2 -translate-x-1/2 px-5 py-2 bg-gradient-to-r from-primary via-primary to-primary/80 text-primary-foreground text-xs font-bold rounded-full shadow-lg shadow-primary/40 z-50 whitespace-nowrap"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    ⭐ Most Popular
                  </motion.div>
                )}

                <Card
                  className={`h-full flex flex-col relative overflow-visible group transition-all duration-300 ${
                    pkg.popular
                      ? 'border-primary/60 bg-gradient-to-br from-primary/15 to-primary/5 md:scale-105 md:shadow-2xl md:shadow-primary/30'
                      : 'border-primary/10 bg-gradient-to-br from-card to-card/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10'
                  }`}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none"></div>

                  <CardHeader className="relative">
                    <CardTitle className="text-2xl sm:text-3xl group-hover:text-primary transition-colors">{pkg.name}</CardTitle>
                    <CardDescription className="text-foreground/60 mt-1">{pkg.description}</CardDescription>
                    <motion.div
                      className="mt-6 pt-6 border-t border-primary/20"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        {pkg.price}
                      </p>
                      <p className="text-xs sm:text-sm text-foreground/50 mt-2 font-medium uppercase tracking-wider">
                        {pkg.timeline_weeks} week timeline
                      </p>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col relative">
                    {/* Deliverables */}
                    <div className="mb-8 flex-1">
                      <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-primary/80">
                        What's Included
                      </h4>
                      <ul className="space-y-3">
                        {pkg.deliverables.map((deliverable, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start gap-3 text-sm group/item"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className="text-primary flex-shrink-0 mt-0.5"
                              whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                              <Check size={18} className="font-bold" />
                            </motion.div>
                            <span className="text-foreground/70 group-hover/item:text-foreground transition-colors">
                              {deliverable}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Add-ons */}
                    {pkg.addons.length > 0 && (
                      <div className="mb-8 pb-8 border-t border-primary/20 pt-6">
                        <h4 className="font-bold mb-3 text-xs uppercase tracking-wider text-primary/80">Add-ons</h4>
                        <ul className="space-y-2.5 text-sm">
                          {pkg.addons.map((addon, idx) => (
                            <motion.li
                              key={idx}
                              className="flex justify-between text-foreground/70 p-2 rounded hover:bg-primary/5 transition-colors"
                              whileHover={{ x: 4 }}
                            >
                              <span>{addon.name}</span>
                              <span className="font-semibold text-primary">{addon.price}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {/* CTA */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      className="w-full font-semibold"
                      variant={pkg.popular ? 'default' : 'outline'}
                    >
                      <a href="#contact">{pkg.cta_label}</a>
                    </Button>
                  </motion.div>
                </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">Payment & Timeline</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Payment Milestones</h4>
                <p className="text-foreground/70 text-sm">Projects are broken into milestones with payments aligned to deliverables, ensuring accountability and clear expectations.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Timeline Estimates</h4>
                <p className="text-foreground/70 text-sm">Timeline estimates are based on project scope and complexity. Rush projects available upon request with additional fees.</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Support & Revisions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Included Revisions</h4>
                <p className="text-foreground/70 text-sm">Each package includes 2 rounds of revisions. Additional revisions available at $150/hour.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Post-Launch Support</h4>
                <p className="text-foreground/70 text-sm">30-60 days of post-launch support included. Extended support plans available for maintenance and optimization.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
