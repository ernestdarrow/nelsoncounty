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
      // Use CSS scroll-snap for smoother native behavior
      iframeRef.current.style.scrollMarginTop = '0px'
      iframeRef.current.style.scrollSnapAlign = 'start'
      iframeRef.current.style.scrollSnapStop = 'always'
    }
  }, [iframeHeight])

  // Monitor scroll but only recenter when scrolling stops - allows free scrolling during active scroll
  useEffect(() => {
    if (!iframeRef.current || typeof window === 'undefined') return

    let scrollEndTimeout: number | null = null
    let isRecentering = false
    let lastScrollY = window.scrollY
    const ALLOWED_PAST = 400 // Allow scrolling 400px past top before recentering (much more leeway)
    const SCROLL_STOP_DELAY = 200 // Wait 200ms after scroll stops before checking

    const handleScroll = () => {
      lastScrollY = window.scrollY
      
      // Clear existing timeout
      if (scrollEndTimeout) {
        clearTimeout(scrollEndTimeout)
      }
      
      // Only check and recenter AFTER scrolling has stopped
      scrollEndTimeout = setTimeout(() => {
        if (!iframeRef.current || isRecentering) return

        const rect = iframeRef.current.getBoundingClientRect()
        const iframeTop = rect.top

        // Only recenter if scrolled way past (more than ALLOWED_PAST) AND scrolling has stopped
        if (iframeTop < -ALLOWED_PAST) {
          isRecentering = true
          iframeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
          
          // Reset flag after recentering completes
          setTimeout(() => {
            isRecentering = false
          }, 500)
        }
        
        scrollEndTimeout = null
      }, SCROLL_STOP_DELAY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollEndTimeout) clearTimeout(scrollEndTimeout)
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
