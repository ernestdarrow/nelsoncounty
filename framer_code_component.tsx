import React, { useState, useRef, useEffect } from "react"

export default function AdventureDirectory() {
  const [iframeHeight, setIframeHeight] = useState(800)
  const iframeRef = useRef(null)

  useEffect(() => {
    function handleMessage(event) {
      if (event.data && event.data.type === 'resize') {
        const height = event.data.height
        if (typeof height === 'number' && height > 0 && height < 10000) {
          setIframeHeight(height)
        }
      }
      
      // Handle scroll-to-top request from iframe
      if (event.data && event.data.type === 'scrollToTop') {
        // Scroll the iframe element into view at the top
        if (iframeRef.current) {
          iframeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
          // Also scroll window to top of iframe
          setTimeout(() => {
            if (iframeRef.current) {
              const rect = iframeRef.current.getBoundingClientRect()
              window.scrollTo({ top: window.scrollY + rect.top, behavior: 'smooth' })
            }
          }, 50)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  useEffect(() => {
    if (iframeRef.current) {
      // Constrain iframe to viewport height so content scrolls inside
      // This allows position: sticky to work properly
      const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800
      // Use viewport height as max, but allow content-driven height if smaller
      const finalHeight = Math.min(viewportHeight * 0.9, Math.max(400, iframeHeight))
      iframeRef.current.style.height = finalHeight + 'px'
      iframeRef.current.style.maxHeight = viewportHeight * 0.9 + 'px'
      iframeRef.current.style.overflow = 'hidden'
      // Add scroll margin to ensure iframe scrolls into view properly
      iframeRef.current.style.scrollMarginTop = '0px'
      iframeRef.current.style.scrollSnapAlign = 'start'
    }
  }, [iframeHeight])

  // Listen to parent window scroll and ensure iframe snaps to top when scrolling near it
  useEffect(() => {
    if (!iframeRef.current || typeof window === 'undefined') return

    let scrollTimeout: number | null = null
    let isScrolling = false

    const handleScroll = () => {
      if (!iframeRef.current) return

      const rect = iframeRef.current.getBoundingClientRect()
      const viewportTop = 0
      const iframeTop = rect.top
      const iframeBottom = rect.bottom
      
      // If scrolling down and iframe top is above viewport but bottom is below
      // OR if scrolling up and iframe is partially visible
      // Snap iframe to top of viewport
      if (iframeTop < viewportTop + 100 && iframeBottom > viewportTop + 100) {
        // Iframe is near top but not aligned - snap it
        if (!isScrolling) {
          isScrolling = true
          iframeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
          
          // Reset flag after scroll completes
          setTimeout(() => {
            isScrolling = false
          }, 500)
        }
      }
    }

    // Throttle scroll events
    const throttledScroll = () => {
      if (scrollTimeout) return
      scrollTimeout = setTimeout(() => {
        handleScroll()
        scrollTimeout = null
      }, 50)
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    
    // Also use IntersectionObserver as backup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.boundingClientRect.top > 50) {
            // If iframe is entering viewport but not at top, scroll it there
            if (!isScrolling && iframeRef.current) {
              isScrolling = true
              iframeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
              setTimeout(() => {
                isScrolling = false
              }, 500)
            }
          }
        })
      },
      {
        threshold: [0, 0.1, 0.5],
        rootMargin: '0px 0px 0px 0px'
      }
    )

    observer.observe(iframeRef.current)

    return () => {
      window.removeEventListener('scroll', throttledScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current)
      }
    }
  }, [])

  return (
    <iframe
      ref={iframeRef}
      src="https://ernestdarrow.github.io/nelsoncounty/frontpage_framer.html"
      style={{
        width: '100%',
        height: '800px',
        border: 'none',
        minHeight: '400px',
        maxHeight: '100vh',
        overflow: 'hidden'
      }}
      title="Adventure Directory"
    />
  )
}
