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
    <main className="min-h-screen bg-neo-bg texture-grid overflow-x-hidden">
      <Navbar />
      
      {/* Service Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b-4 border-black relative overflow-hidden">
        <div className="section-container relative z-10">
          <Link 
            href="/services" 
            className="neo-btn bg-white text-black mb-8 md:mb-12 inline-flex items-center gap-3 text-sm py-2 px-4 md:py-3 md:px-6"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} /> BACK TO SOLUTIONS
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-6 md:space-y-8">
              <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 md:px-4 md:py-1 text-[10px] md:text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] md:shadow-[4px_4px_0px_0px_#000]">
                {service.category}
              </span>
              <h1 className="text-4xl md:text-8xl font-black text-black leading-[0.9] md:leading-none mb-4 md:mb-8 uppercase tracking-tighter text-pretty">
                {service.title}
              </h1>
              <p className="text-lg md:text-2xl text-black font-bold leading-tight mb-8 md:mb-12 uppercase tracking-tight">
                {service.longDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {service.metrics.map((metric, i) => (
                  <div key={i} className="neo-card bg-white p-4 md:p-6">
                    <span className="block text-3xl md:text-4xl font-black text-neo-accent mb-1 md:mb-2 uppercase tracking-tighter">{metric.split(' ')[0]}</span>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-black/40 leading-tight">
                      {metric.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group p-2 md:p-4 mt-8 lg:mt-0">
                <div className="absolute inset-0 bg-neo-secondary translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 neo-border -z-10" />
                <div className="relative aspect-square bg-black neo-border overflow-hidden">
                   <div className="absolute inset-0 bg-neo-accent/20 texture-halftone" />
                   <div className="absolute inset-0 flex items-center justify-center p-12 md:p-20 z-10">
                      <div className="text-center">
                        <div className="text-white text-[120px] md:text-[200px] font-black leading-none mb-2 md:mb-4 tracking-tighter select-none opacity-20 drop-shadow-[4px_4px_0px_#000] md:drop-shadow-[8px_8px_0px_#000]">
                            {service.id.padStart(2, '0')}
                        </div>
                        <div className="text-white text-xl md:text-3xl font-black uppercase tracking-widest md:tracking-[0.2em] drop-shadow-[2px_2px_0px_#000] md:drop-shadow-[4px_4px_0px_#000]">
                            {service.outcome}
                        </div>
                      </div>
                   </div>
                   {/* Decorative corner accents */}
                   <div className="absolute top-4 right-4 md:top-8 md:right-8 w-8 h-8 md:w-12 md:h-12 border-2 md:border-4 border-white/20" />
                   <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-8 h-8 md:w-12 md:h-12 border-2 md:border-4 border-white/20" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 md:py-32 bg-white border-b-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 texture-grid opacity-10 pointer-events-none" />
        <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
                {/* Features */}
                <div>
                    <h2 className="text-3xl md:text-6xl font-black text-black mb-10 md:mb-16 uppercase tracking-tighter italic">
                      Core <span className="bg-neo-secondary px-2 md:px-4">Features</span>
                    </h2>
                    <div className="space-y-6 md:space-y-8">
                        {service.features.map((feature, i) => (
                            <div key={i} className="neo-card bg-neo-bg p-6 md:p-8 hover:translate-x-1 md:hover:translate-x-2 transition-transform">
                                <div className="flex gap-4 md:gap-6 items-start">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-black neo-border flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="text-neo-accent w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-black uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 text-pretty">{feature}</h4>
                                        <p className="text-sm md:text-lg text-black font-bold leading-tight uppercase tracking-tight">ENGINEERED FOR MAXIMUM SCALABILITY AND MEASURABLE IMPACT.</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits */}
                <div className="space-y-12 md:space-y-16">
                    <div>
                        <h2 className="text-3xl md:text-6xl font-black text-black mb-10 md:mb-16 uppercase tracking-tighter italic">
                          Key <span className="bg-neo-accent px-2 md:px-4 text-white">Benefits</span>
                        </h2>
                        <div className="space-y-3 md:space-y-4">
                            {service.benefits.map((benefit, i) => (
                                <div key={i} className="flex gap-4 md:gap-6 items-center p-4 md:p-6 bg-white neo-border group hover:bg-black transition-colors">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-neo-secondary neo-border flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">
                                        <span className="font-black text-base md:text-lg">{i + 1}</span>
                                    </div>
                                    <span className="font-black text-black group-hover:text-white uppercase tracking-widest text-sm md:text-lg transition-colors">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="p-8 md:p-12 bg-neo-secondary neo-border shadow-[8px_8px_0px_0px_#000] md:shadow-[12px_12px_0px_0px_#000]">
                        <h3 className="text-3xl md:text-4xl font-black text-black mb-4 md:mb-6 uppercase tracking-tighter italic leading-none">NEED A CUSTOM BUILD?</h3>
                        <p className="text-lg text-black font-bold mb-8 md:mb-10 leading-tight uppercase">EVERY BUSINESS IS UNIQUE. I CAN TAILOR THIS {service.title} SOLUTION SPECIFICALLY TO YOUR SYSTEM ARCHITECTURE.</p>
                        <Link href="/contact" className="neo-btn bg-black text-white px-8 md:px-10 py-4 md:py-5 text-base md:text-lg flex items-center justify-center gap-3 md:gap-4 group">
                            HIRE ME <MoveRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* More Services */}
      <section className="py-20 md:py-32 bg-neo-bg border-b-4 border-black relative overflow-hidden">
        <div className="section-container relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-0">
                <div>
                    <span className="inline-block bg-neo-accent border-2 border-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest text-white shadow-[2px_2px_0px_0px_#000] mb-6">Expert Selection</span>
                    <h2 className="text-4xl md:text-8xl font-black text-black uppercase tracking-tighter leading-[0.9]">Other <span className="bg-neo-secondary px-2 md:px-4">Solutions</span></h2>
                </div>
                <Link href="/services" className="neo-btn bg-white text-black py-3 px-6 text-xs md:text-sm font-black">VIEW ALL</Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {services.filter(s => s.slug !== service.slug).slice(0, 3).map((other, i) => (
                    <Link key={i} href={`/services/${other.slug}`} className="neo-card bg-white p-6 md:p-10 group flex flex-col items-start h-full">
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-4 md:mb-6 bg-black text-white px-2 py-0.5 md:px-3 md:py-1 neo-border border-white border-2">{other.category}</span>
                        <h4 className="text-2xl md:text-3xl font-black text-black mb-4 md:mb-6 group-hover:text-neo-accent transition-colors uppercase tracking-tighter leading-tight">{other.title}</h4>
                        <p className="text-sm md:text-lg text-black font-bold mb-8 md:mb-10 line-clamp-2 uppercase leading-tight flex-1">{other.description}</p>
                        <div className="text-[10px] md:text-sm font-black text-black flex items-center gap-3 md:gap-4 underline underline-offset-4 md:underline-offset-8 decoration-2 md:decoration-4 decoration-neo-secondary">
                           REVEAL SPECS <MoveRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-black border-t-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 texture-grid opacity-20 pointer-events-none" />
        <div className="section-container text-center relative z-10">
            <h2 className="text-4xl md:text-[9rem] font-black text-white mb-8 md:mb-12 uppercase tracking-tighter leading-[0.8]">Ready to <span className="text-neo-accent underline decoration-4 md:decoration-8 decoration-neo-secondary">scale</span>?</h2>
            <Link href="/contact" className="neo-btn bg-white text-black py-6 md:py-8 px-12 md:px-20 text-xl md:text-2xl shadow-[8px_8px_0px_0px_#FF6B6B] md:shadow-[12px_12px_0px_0px_#FF6B6B] inline-block">
                STRATEGY SESSION <MoveRight className="inline-block ml-3 md:ml-6 w-8 h-8 md:w-10 md:h-10" strokeWidth={4} />
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
