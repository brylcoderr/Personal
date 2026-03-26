import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { services } from '@/lib/services-data'
import { CheckCircle2, ArrowLeft, MoveRight } from 'lucide-react'
import Link from 'next/link'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return { title: 'Service Not Found' }

  return {
    title: `${service.title} | BrylCodes`,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#F1E9DA]">
      <Navbar />
      
      {/* Service Hero */}
      <section className="pt-44 pb-24 border-b border-[#541388]/5">
        <div className="section-container">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-[#541388] font-black uppercase tracking-widest text-[10px] mb-12 hover:gap-4 transition-all"
          >
            <ArrowLeft size={14} /> Back to Services
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="px-4 py-1.5 bg-[#541388] text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-8 inline-block">
                {service.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-[#2E294E] leading-tight mb-8">
                {service.title}
              </h1>
              <p className="text-xl text-[#2E294E]/70 font-medium leading-relaxed mb-12">
                {service.longDescription}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {service.metrics.map((metric, i) => (
                  <div key={i} className="bg-white px-6 py-3 border border-[#541388]/10 rounded-xl">
                    <span className="block text-2xl font-black text-[#541388]">{metric.split(' ')[0]}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2E294E]/40">
                      {metric.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square bg-[#541388] rounded-3xl overflow-hidden shadow-2xl group">
               <div className="absolute inset-0 bg-linear-to-br from-[#541388] to-[#D90368] opacity-90 transition-transform duration-700 group-hover:scale-110"></div>
               <div className="absolute inset-0 flex items-center justify-center p-20">
                  <div className="text-center">
                    <div className="text-white/20 text-[180px] font-black leading-none mb-4 tracking-tighter select-none">
                        {service.id.padStart(2, '0')}
                    </div>
                    <div className="text-white text-2xl font-black uppercase tracking-[0.2em]">
                        {service.outcome}
                    </div>
                  </div>
               </div>
               {/* Animated decorative elements */}
               <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white/10 rounded-full animate-pulse"></div>
               <div className="absolute bottom-20 left-10 w-32 h-32 border border-white/5 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-24 bg-white/40">
        <div className="section-container">
            <div className="grid md:grid-cols-2 gap-20">
                {/* Features */}
                <div>
                    <h2 className="text-3xl font-black text-[#2E294E] mb-12 flex items-center gap-4">
                        <span className="w-12 h-1 px-4 bg-[#FFD400]"></span>
                        Core Features
                    </h2>
                    <div className="space-y-6">
                        {service.features.map((feature, i) => (
                            <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-[#541388]/5 shadow-sm">
                                <CheckCircle2 className="text-[#D90368] mt-1 shrink-0" size={24} />
                                <div>
                                    <h4 className="font-black text-[#2E294E] uppercase tracking-wide text-sm mb-1">{feature}</h4>
                                    <p className="text-sm text-[#2E294E]/60 font-medium leading-relaxed">System-optimized implementation ensuring maximum scalability and performance.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits */}
                <div>
                    <h2 className="text-3xl font-black text-[#2E294E] mb-12 flex items-center gap-4">
                        <span className="w-12 h-1 px-4 bg-[#D90368]"></span>
                        Key Benefits
                    </h2>
                    <div className="space-y-6">
                        {service.benefits.map((benefit, i) => (
                            <div key={i} className="flex gap-4 items-center p-6 bg-[#541388]/5 rounded-2xl border border-[#541388]/10 transition-colors hover:bg-[#541388]/10">
                                <div className="w-10 h-10 rounded-full bg-[#541388] flex items-center justify-center text-white shrink-0">
                                    <span className="font-black text-xs">{i + 1}</span>
                                </div>
                                <span className="font-black text-[#2E294E] uppercase tracking-widest text-sm">{benefit}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-16 p-10 bg-[#FFD400] rounded-3xl">
                        <h3 className="text-2xl font-black text-[#2E294E] mb-4">Need a custom version?</h3>
                        <p className="text-[#2E294E]/70 font-medium mb-8">Every business is unique. I can tailor this {service.title} solution specifically to your operational requirements via <span className="font-bold underline decoration-2 decoration-[#541388]">BrylCodes</span>.</p>
                        <Link href="/contact" className="inline-flex items-center gap-3 bg-[#2E294E] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:gap-6 transition-all">
                            Talk to Me <MoveRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* More Services */}
      <section className="py-24">
        <div className="section-container">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#541388] opacity-60 mb-4 block">Recommended</span>
                    <h2 className="text-4xl font-black text-[#2E294E]">Other Solutions</h2>
                </div>
                <Link href="/services" className="text-sm font-black underline underline-offset-8 decoration-2 text-[#541388]">View All</Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                {services.filter(s => s.slug !== service.slug).slice(0, 3).map((other, i) => (
                    <Link key={i} href={`/services/${other.slug}`} className="group bg-white p-8 rounded-2xl border border-[#541388]/5 hover:border-[#541388]/20 transition-all duration-300 shadow-sm">
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#D90368] mb-4 block">{other.category}</span>
                        <h4 className="text-xl font-black text-[#2E294E] mb-4 group-hover:text-[#541388] transition-colors">{other.title}</h4>
                        <p className="text-sm text-[#2E294E]/60 font-medium line-clamp-2">{other.description}</p>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-[#541388]">
        <div className="section-container text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to architect your success?</h2>
            <Link href="/contact" className="px-12 py-5 bg-[#D90368] text-white rounded-lg font-black uppercase tracking-widest hover:scale-105 transition-transform inline-block shadow-2xl">
                Get a Strategy Session
            </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
