import React, { useState, useRef, useEffect } from "react"

/**
 * AdventureDirectory Component - UPDATED VERSION
 * 
 * This component:
 * 1. Embeds the adventure directory iframe
 * 2. Reads URL parameters from the Framer page
 * 3. Passes them to the iframe via URL and postMessage
 * 4. Handles dynamic resizing and scrolling
 * 
 * Install:
 * 1. Create new file: AdventureDirectory.tsx
 * 2. Copy this entire code
 * 3. Add to your "Find Your Adventure" page
 */

export default function AdventureDirectory() {
  const [iframeHeight, setIframeHeight] = useState(800)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const breadcrumbFilterSentRef = useRef(false)

  // Read URL parameters from Framer page and build iframe URL
  const getIframeUrl = () => {
    const baseUrl = "https://odd-even.github.io/nelsoncounty/frontpage_framer.html"
    
    // Check if window exists (client-side only)
    if (typeof window === 'undefined') {
      return baseUrl
    }
    
    const url = new URL(baseUrl)
    
    // Get all URL parameters from the current Framer page
    const currentParams = new URLSearchParams(window.location.search)
    
    // Copy all parameters to iframe URL
    currentParams.forEach((value, key) => {
      url.searchParams.set(key, value)
    })
    
    return url.toString()
  }

  // Update iframe URL and send parameters when page URL changes
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') {
      return
    }
    
    const updateIframe = () => {
      if (iframeRef.current) {
        const newUrl = getIframeUrl()
        // Only update if URL actually changed (prevents infinite loops)
        if (iframeRef.current.src !== newUrl) {
          iframeRef.current.src = newUrl
        }
        
        // Also send via postMessage for immediate updates
        if (iframeRef.current.contentWindow && window.location) {
          const params: Record<string, string> = {}
          const searchParams = new URLSearchParams(window.location.search)
          
          searchParams.forEach((value, key) => {
            params[key] = value
          })
          
          // Send to iframe via multiple methods
          iframeRef.current.contentWindow.postMessage({
            type: 'setUrlParams',
            search: window.location.search,
            params: params
          }, '*')
          
          iframeRef.current.contentWindow.postMessage({
            type: 'setFilters',
            params: params
          }, '*')
        }
      }
      
      // After updating iframe, check for breadcrumb filter (in case we just navigated here)
      // Reset the sent flag when navigating to allow new filters
      breadcrumbFilterSentRef.current = false
      setTimeout(() => {
        const storedFilter = (window as any).__pendingBreadcrumbFilter
        if (storedFilter && !breadcrumbFilterSentRef.current) {
          console.log('🍞 AdventureDirectory: Found breadcrumb filter after navigation:', storedFilter)
          // The breadcrumb filter handler will pick it up
        }
      }, 500)
    }
    
    // Update immediately
    updateIframe()
    
    // Listen for URL changes (popstate for back/forward)
    window.addEventListener('popstate', updateIframe)
    
    // Also check periodically (fallback for Framer's navigation)
    const interval = setInterval(updateIframe, 500)
    
    return () => {
      window.removeEventListener('popstate', updateIframe)
      clearInterval(interval)
    }
  }, [])

  // Handle breadcrumb filter - check for stored filter and send to iframe
  useEffect(() => {
    if (typeof window === 'undefined') return

    const sendBreadcrumbFilter = (filterParams: Record<string, string>, attempt: number = 0) => {
      if (!iframeRef.current) {
        if (attempt < 50) {
          setTimeout(() => sendBreadcrumbFilter(filterParams, attempt + 1), 100)
        } else {
          console.warn('🍞 AdventureDirectory: Iframe not found after 5 seconds')
        }
        return
      }

      try {
        if (iframeRef.current.contentWindow) {
          iframeRef.current.contentWindow.postMessage({
            type: 'applyFilter',
            params: filterParams,
            source: 'breadcrumb'
          }, '*')
          
          console.log('🍞 ✅ AdventureDirectory sent breadcrumb filter to iframe:', filterParams)
          breadcrumbFilterSentRef.current = true
          
          // Clear stored filter
          if ((window as any).__pendingBreadcrumbFilter) {
            delete (window as any).__pendingBreadcrumbFilter
          }
          
          // Send again after delay to ensure iframe received it
          setTimeout(() => {
            if (iframeRef.current?.contentWindow) {
              iframeRef.current.contentWindow.postMessage({
                type: 'applyFilter',
                params: filterParams,
                source: 'breadcrumb'
              }, '*')
              console.log('🍞 ✅ AdventureDirectory sent breadcrumb filter again (backup)')
            }
          }, 1000)
        } else {
          if (attempt < 50) {
            setTimeout(() => sendBreadcrumbFilter(filterParams, attempt + 1), 100)
          }
        }
      } catch (e) {
        console.warn('🍞 AdventureDirectory: Error sending breadcrumb filter:', e)
        if (attempt < 50) {
          setTimeout(() => sendBreadcrumbFilter(filterParams, attempt + 1), 100)
        }
      }
    }

    // Check for stored breadcrumb filter
    const checkForBreadcrumbFilter = () => {
      if (breadcrumbFilterSentRef.current) return
      
      try {
        const storedFilter = (window as any).__pendingBreadcrumbFilter
        if (storedFilter) {
          console.log('🍞 AdventureDirectory found pending breadcrumb filter:', storedFilter)
          sendBreadcrumbFilter(storedFilter)
        }
      } catch (e) {
        // Ignore
      }
    }

    // Check immediately
    setTimeout(checkForBreadcrumbFilter, 100)
    
    // Check after iframe loads
    if (iframeRef.current) {
      const sendOnLoad = () => {
        setTimeout(checkForBreadcrumbFilter, 500)
      }
      iframeRef.current.addEventListener('load', sendOnLoad, { once: true })
    }
    
    // Also check periodically
    const checkInterval = setInterval(() => {
      if (!breadcrumbFilterSentRef.current) {
        checkForBreadcrumbFilter()
      }
    }, 500)
    
    setTimeout(() => clearInterval(checkInterval), 10000) // Stop after 10 seconds
  }, [])

  // Handle messages from iframe (resize, etc.)
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data && event.data.type === 'resize') {
        const height = event.data.height
        if (typeof height === 'number' && height > 0 && height < 10000) {
          setIframeHeight(height)
        }
      }
      
      if (event.data && event.data.type === 'scrollToTop') {
        if (iframeRef.current) {
          iframeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
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

  // Handle iframe height
  useEffect(() => {
    if (iframeRef.current) {
      const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800
      const finalHeight = Math.max(viewportHeight, Math.max(400, iframeHeight))
      iframeRef.current.style.height = finalHeight + 'px'
      iframeRef.current.style.maxHeight = viewportHeight * 1.1 + 'px'
      iframeRef.current.style.overflow = 'hidden'
      iframeRef.current.style.scrollMarginTop = '0px'
      iframeRef.current.style.scrollSnapAlign = 'start'
      iframeRef.current.style.scrollSnapStop = 'always'
    }
  }, [iframeHeight])

  // Scroll monitoring
  useEffect(() => {
    if (!iframeRef.current || typeof window === 'undefined') return

    let scrollEndTimeout: number | null = null
    let isRecentering = false
    let lastScrollY = window.scrollY
    const ALLOWED_PAST = 400
    const SCROLL_STOP_DELAY = 200

    const handleScroll = () => {
      lastScrollY = window.scrollY
      
      if (scrollEndTimeout) {
        clearTimeout(scrollEndTimeout)
      }
      
      scrollEndTimeout = setTimeout(() => {
        if (!iframeRef.current || isRecentering) return

        const rect = iframeRef.current.getBoundingClientRect()
        const iframeTop = rect.top
        const iframeBottom = rect.bottom
        const viewportHeight = window.innerHeight

        const bottomIsVisible = iframeBottom <= viewportHeight + 50
        
        if (!bottomIsVisible && iframeTop < -ALLOWED_PAST) {
          isRecentering = true
          iframeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
          
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
      id="adventure-directory-iframe"
      src={getIframeUrl()}
      style={{
        width: '100%',
        height: '800px',
        border: 'none',
        minHeight: '400px',
        maxHeight: '110vh',
        overflow: 'hidden'
      }}
      title="Adventure Directory"
    />
  )
}

