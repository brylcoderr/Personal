import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { services } from '@/lib/services-data'
import { CheckCircle2, ArrowLeft, MoveRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return { title: 'Solution Not Found' }

  return {
    title: `${service.title} | BrylCodes`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-neo-bg texture-grid">
      <Navbar />
      
      {/* Service Hero */}
      <section className="pt-44 pb-24 border-b-4 border-black">
        <div className="section-container">
          <Link 
            href="/services" 
            className="neo-btn bg-white text-black mb-12 inline-flex items-center gap-3"
          >
            <ArrowLeft size={18} strokeWidth={3} /> BACK TO SOLUTIONS
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block bg-neo-accent border-2 border-black px-4 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_#000] mb-8">
                {service.category}
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-black leading-none mb-8 uppercase tracking-tighter">
                {service.title}
              </h1>
              <p className="text-2xl text-black font-bold leading-tight mb-12 uppercase tracking-tight">
                {service.longDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {service.metrics.map((metric, i) => (
                  <div key={i} className="neo-card bg-white p-6">
                    <span className="block text-4xl font-black text-neo-accent mb-2 uppercase tracking-tighter">{metric.split(' ')[0]}</span>
                    <span className="text-xs font-black uppercase tracking-widest text-black/40">
                      {metric.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group p-4">
                <div className="absolute inset-0 bg-neo-secondary translate-x-4 translate-y-4 neo-border -z-10" />
                <div className="relative aspect-square bg-black neo-border overflow-hidden">
                   <div className="absolute inset-0 bg-neo-accent/20 texture-halftone" />
                   <div className="absolute inset-0 flex items-center justify-center p-20 z-10">
                      <div className="text-center">
                        <div className="text-white text-[200px] font-black leading-none mb-4 tracking-tighter select-none opacity-20 drop-shadow-[8px_8px_0px_#000]">
                            {service.id.padStart(2, '0')}
                        </div>
                        <div className="text-white text-3xl font-black uppercase tracking-[0.2em] drop-shadow-[4px_4px_0px_#000]">
                            {service.outcome}
                        </div>
                      </div>
                   </div>
                   {/* Decorative corner accents */}
                   <div className="absolute top-8 right-8 w-12 h-12 border-4 border-white/20" />
                   <div className="absolute bottom-8 left-8 w-12 h-12 border-4 border-white/20" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-32 bg-white border-b-4 border-black relative">
        <div className="absolute inset-0 texture-grid opacity-10 pointer-events-none" />
        <div className="section-container relative z-10">
            <div className="grid md:grid-cols-2 gap-24">
                {/* Features */}
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-black mb-16 uppercase tracking-tighter italic">
                      Core <span className="bg-neo-secondary px-4">Features</span>
                    </h2>
                    <div className="space-y-8">
                        {service.features.map((feature, i) => (
                            <div key={i} className="neo-card bg-neo-bg p-8 hover:translate-x-2 transition-transform">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-black neo-border flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="text-neo-accent" size={24} strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-black uppercase tracking-widest text-sm mb-2">{feature}</h4>
                                        <p className="text-lg text-black font-bold leading-tight">SYSTEM-OPTIMIZED IMPLEMENTATION ENSURING MAXIMUM SCALABILITY AND PERFORMANCE.</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits */}
                <div className="space-y-16">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black text-black mb-16 uppercase tracking-tighter italic">
                          Key <span className="bg-neo-accent px-4 text-white">Benefits</span>
                        </h2>
                        <div className="space-y-4">
                            {service.benefits.map((benefit, i) => (
                                <div key={i} className="flex gap-6 items-center p-6 bg-white neo-border group hover:bg-black transition-colors">
                                    <div className="w-12 h-12 bg-neo-secondary neo-border flex items-center justify-center shrink-0 group-hover:bg-white">
                                        <span className="font-black text-lg">{i + 1}</span>
                                    </div>
                                    <span className="font-black text-black group-hover:text-white uppercase tracking-widest text-lg">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="p-12 bg-neo-secondary neo-border shadow-[12px_12px_0px_0px_#000]">
                        <h3 className="text-4xl font-black text-black mb-6 uppercase tracking-tighter italic">NEED A CUSTOM BUILD?</h3>
                        <p className="text-xl text-black font-bold mb-10 leading-tight uppercase">EVERY BUSINESS IS UNIQUE. I CAN TAILOR THIS {service.title} SOLUTION SPECIFICALLY TO YOUR SYSTEM ARCHITECTURE.</p>
                        <Link href="/contact" className="neo-btn bg-black text-white px-10 py-5 text-lg flex items-center justify-center gap-4 group">
                            TALK TO AN ENGINEER <MoveRight size={20} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* More Services */}
      <section className="py-32 bg-neo-bg">
        <div className="section-container">
            <div className="flex justify-between items-end mb-20">
                <div>
                    <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">Expert Selection</span>
                    <h2 className="text-5xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none">Other <span className="bg-neo-secondary px-4">Solutions</span></h2>
                </div>
                <Link href="/services" className="neo-btn bg-white text-black py-4 px-8 text-sm">VIEW ALL</Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
                {services.filter(s => s.slug !== service.slug).slice(0, 3).map((other, i) => (
                    <Link key={i} href={`/services/${other.slug}`} className="neo-card bg-white p-10 group flex flex-col items-start h-full">
                        <span className="text-[10px] font-black uppercase tracking-widest mb-6 bg-black text-white px-3 py-1 neo-border border-white border-2">{other.category}</span>
                        <h4 className="text-3xl font-black text-black mb-6 group-hover:text-neo-accent transition-colors uppercase tracking-tighter leading-none">{other.title}</h4>
                        <p className="text-lg text-black font-bold mb-10 line-clamp-2 uppercase leading-tight flex-1">{other.description}</p>
                        <div className="text-sm font-black text-black flex items-center gap-4 underline underline-offset-8 decoration-4 decoration-neo-secondary">
                           REVEAL SPECS <MoveRight size={16} strokeWidth={3} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-black border-t-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 texture-grid opacity-20 pointer-events-none" />
        <div className="section-container text-center relative z-10">
            <h2 className="text-5xl md:text-9xl font-black text-white mb-12 uppercase tracking-tighter leading-none">Ready to <span className="text-neo-accent underline decoration-8 decoration-neo-secondary">scale</span>?</h2>
            <Link href="/contact" className="neo-btn bg-white text-black py-8 px-20 text-2xl shadow-[12px_12px_0px_0px_#FF6B6B]">
                STRATEGY SESSION <MoveRight className="inline-block ml-6" size={32} strokeWidth={4} />
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
