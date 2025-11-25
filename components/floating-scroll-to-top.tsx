// components/floating-scroll-to-top.tsx
'use client'

import * as React from 'react'
import { Button } from './ui/button'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FloatingScrollToTopProps {
  threshold?: number
  className?: string
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  animationType?: 'bounce' | 'pulse' | 'spin' | 'fly'
}

export function FloatingScrollToTop({
  threshold = 300,
  className,
  position = 'bottom-right',
  animationType = 'bounce'
}: FloatingScrollToTopProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const [isAnimating, setIsAnimating] = React.useState(false)

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  }

  const animationClasses = {
    bounce: 'animate-bounce',
    pulse: 'animate-pulse',
    spin: 'animate-spin',
    fly: 'animate-fly-out'
  }

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [threshold])

  const scrollToTop = async () => {
    setIsAnimating(true)
    
    // Animación antes del scroll
    await new Promise(resolve => setTimeout(resolve, 200))
    
    // Scroll suave al inicio
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

    // Animación durante el scroll
    setTimeout(() => {
      setIsAnimating(false)
    }, 800)
  }

  return (
    <>
      {isVisible && (
        <Button
          variant="default"
          size="icon-lg"
          className={cn(
            'fixed z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-500',
            'animate-in fade-in-0 zoom-in-90',
            'opacity-90 hover:opacity-100 hover:scale-110',
            'cursor-pointer transform-gpu',
            isAnimating && animationClasses[animationType],
            isAnimating && 'scale-125 bg-accent text-accent-foreground',
            positionClasses[position],
            className
          )}
          onClick={scrollToTop}
          aria-label="Volver al inicio"
          disabled={isAnimating}
        >
          <ArrowUp className={cn(
            "h-5 w-5 transition-all duration-500",
            isAnimating && "scale-150",
            animationType === 'spin' && isAnimating && "rotate-180"
          )} />
        </Button>
      )}
    </>
  )
}