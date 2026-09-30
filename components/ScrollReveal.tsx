'use client'

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale'

type ScrollRevealProps = {
  children: ReactNode
  direction?: RevealDirection
  delay?: number
  className?: string
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = revealRef.current

    if (!element) {
      return
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      element.dataset.revealed = 'true'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.18) {
          element.dataset.revealed = 'true'
          observer.unobserve(element)
        }
      },
      {
        threshold: [0.15, 0.3, 0.5],
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={revealRef}
      className={`scroll-reveal scroll-reveal-${direction} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}

