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

  // Minimal, passive approach - only snap when user stops scrolling near iframe
  // This is less intrusive and feels more natural
  useEffect(() => {
    if (!iframeRef.current || typeof window === 'undefined') return

    let scrollEndTimeout: number | null = null

    const handleScrollEnd = () => {
      if (!iframeRef.current) return

      const rect = iframeRef.current.getBoundingClientRect()
      const iframeTop = rect.top
      
      // Very narrow threshold - only snap if iframe is very close to top (within 50px)
      // This allows scrolling past it or stopping right before it without snapping
      // Only activates when very clearly near the top edge
      if (iframeTop > 0 && iframeTop < 50 && rect.bottom > 200) {
        // Very gentle snap - only when very close to top
        iframeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const handleScroll = () => {
      // Clear existing timeout
      if (scrollEndTimeout) {
        clearTimeout(scrollEndTimeout)
      }
      
      // Wait for scroll to completely stop (longer delay = less intrusive)
      scrollEndTimeout = setTimeout(() => {
        handleScrollEnd()
        scrollEndTimeout = null
      }, 300) // Longer delay = only snap when user has clearly stopped
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
