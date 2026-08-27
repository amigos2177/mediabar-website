'use client'

import { useEffect } from 'react'

export default function HomeRevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((element) => observer.observe(element))
    const fallback = window.setTimeout(() => {
      elements.forEach((element) => element.classList.add('revealed'))
    }, 1500)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return null
}
