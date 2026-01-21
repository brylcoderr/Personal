'use client'

import React from "react"

import { useEffect, useRef, useState } from 'react'
import { Card } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'

interface SwipeCard {
  id: string
  [key: string]: any
}

interface SwipeCardsProps {
  cards: SwipeCard[]
  renderCard: (card: SwipeCard) => React.ReactNode
  autoPlay?: boolean
  gap?: number
}

export function SwipeCards({
  cards,
  renderCard,
  autoPlay = false,
  gap = 24,
}: SwipeCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay)
  const [visibleCards, setVisibleCards] = useState(1)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  const cardWidth = 400 // Mobile: 280px, Desktop: 400px

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth >= 1024 ? 3 : 1)
    }
    
    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)
    
    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [])

  const handlePrev = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev === 0 ? cards.length - visibleCards : prev - 1))
  }

  const handleNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev === cards.length - visibleCards ? 0 : prev + 1))
  }

  // Handle swipe
  useEffect(() => {
    if (!containerRef.current) return

    let startX = 0
    let currentX = 0

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      setIsAutoPlay(false)
    }

    const handleTouchMove = (e: TouchEvent) => {
      currentX = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
      const diff = startX - currentX
      const threshold = 50

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          handleNext()
        } else {
          handlePrev()
        }
      }
    }

    const container = containerRef.current
    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchmove', handleTouchMove)
    container.addEventListener('touchend', handleTouchEnd)

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [visibleCards, cards.length])

  // Auto play
  useEffect(() => {
    if (!isAutoPlay) return

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === cards.length - visibleCards ? 0 : prev + 1))
    }, 5000)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlay, cards.length, visibleCards])

  // Animate to current index
  useEffect(() => {
    if (!containerRef.current) return

    const children = containerRef.current.querySelectorAll('[data-card]')
    const offsetX = -currentIndex * (cardWidth + gap)

    gsap.to(containerRef.current, {
      x: offsetX,
      duration: 0.6,
      ease: 'power2.inOut',
    })

    // Add animation to cards
    children.forEach((child, index) => {
      const isActive = index >= currentIndex && index < currentIndex + visibleCards
      gsap.to(child, {
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1 : 0.95,
        duration: 0.6,
        ease: 'power2.inOut',
      })
    })
  }, [currentIndex, cardWidth, gap, visibleCards])

  return (
    <div className="relative w-full">
      {/* Cards Container */}
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-6"
          style={{
            transform: 'translateX(0)',
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              data-card
              className="flex-shrink-0"
              style={{ width: `${cardWidth}px` }}
            >
              {renderCard(card)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="rounded-full border-primary/20 hover:border-primary/50 bg-transparent"
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="rounded-full border-primary/20 hover:border-primary/50 bg-transparent"
          >
            <ChevronRight size={20} />
          </Button>
        </div>

        {/* Indicators */}
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(cards.length / visibleCards) }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsAutoPlay(false)
                setCurrentIndex(i)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === Math.floor(currentIndex / visibleCards)
                  ? 'bg-primary w-6'
                  : 'bg-primary/30 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
