'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, Terminal } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  delay?: number
  className?: string
  slideClassName?: string
}

export function Carousel({
  children,
  autoPlay = true,
  delay = 4000,
  className,
  slideClassName,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
    },
    autoPlay ? [Autoplay({ delay, stopOnInteraction: false })] : []
  )

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6">
          {children.map((child, index) => (
            <div 
              key={index} 
              className={cn("flex-[0_0_100%] min-w-0 pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]", slideClassName)}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-3">
          <button
            onClick={scrollPrev}
            className="flex items-center justify-center w-10 h-10 rounded border border-border/50 bg-secondary/20 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="flex items-center justify-center w-10 h-10 rounded border border-border/50 bg-secondary/20 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === selectedIndex 
                  ? "w-8 bg-primary shadow-[0_0_8px_rgba(139,92,246,0.4)]" 
                  : "w-1.5 bg-border hover:bg-muted-foreground"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-muted-foreground/30 uppercase tracking-[0.2em]">
          <Terminal size={12} />
          <span>Carousel_Active</span>
        </div>
      </div>
    </div>
  )
}
