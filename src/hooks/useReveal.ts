import { useEffect } from 'react'

/* Adds `is-visible` to every [data-reveal] node once it scrolls into frame.
   One observer for the whole page; elements are released after revealing. */
export function useReveal(): void {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'))

    if (!('IntersectionObserver' in window)) {
      for (const node of nodes) node.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    for (const node of nodes) observer.observe(node)
    return () => observer.disconnect()
  }, [])
}
