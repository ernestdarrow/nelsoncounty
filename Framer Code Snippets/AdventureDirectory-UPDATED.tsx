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
  
  // Log when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('🍞 AdventureDirectory component MOUNTED')
    }
  }, [])

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
    
    let lastSentParams = ''
    let lastSentUrl = ''
    
    const updateIframe = () => {
      if (iframeRef.current) {
        const newUrl = getIframeUrl()
        const currentSearch = window.location.search || ''
        const paramsHash = currentSearch
        
        // Only update iframe src if URL actually changed (prevents infinite loops)
        if (iframeRef.current.src !== newUrl) {
          iframeRef.current.src = newUrl
          lastSentUrl = newUrl
        }
        
        // Only send postMessage if params actually changed
        if (paramsHash !== lastSentParams && iframeRef.current.contentWindow && window.location) {
          const params: Record<string, string> = {}
          const searchParams = new URLSearchParams(window.location.search)
          
          searchParams.forEach((value, key) => {
            params[key] = value
          })
          
          // Only send if URL has params (don't spam empty params)
          if (currentSearch) {
            // Send to iframe (removed deprecated setFilters)
            iframeRef.current.contentWindow.postMessage({
              type: 'setUrlParams',
              search: currentSearch,
              params: params
            }, '*')
          }
          
          lastSentParams = paramsHash
        }
      }
      
      // After updating iframe, check for breadcrumb filter (in case we just navigated here)
      // Reset the sent flag when navigating to allow new filters
      breadcrumbFilterSentRef.current = false
      setTimeout(() => {
        try {
          const storedFilterString = sessionStorage.getItem('__pendingBreadcrumbFilter')
          if (storedFilterString && !breadcrumbFilterSentRef.current) {
            const storedFilter = JSON.parse(storedFilterString)
            console.log('🍞 AdventureDirectory: Found breadcrumb filter after navigation:', storedFilter)
            // The breadcrumb filter handler will pick it up
          }
        } catch (e) {
          // Ignore
        }
      }, 500)
    }
    
    // Update immediately
    updateIframe()
    
    // Listen for URL changes (popstate for back/forward)
    window.addEventListener('popstate', updateIframe)
    
    // Check periodically but less frequently (fallback for Framer's navigation)
    // Reduced frequency to prevent spam - only check every 2 seconds
    const interval = setInterval(updateIframe, 2000)
    
    return () => {
      window.removeEventListener('popstate', updateIframe)
      clearInterval(interval)
    }
  }, [])

  // Handle breadcrumb filter - check for stored filter and send to iframe
  useEffect(() => {
    if (typeof window === 'undefined') return

    console.log('🍞 ========================================')
    console.log('🍞 AdventureDirectory: Breadcrumb filter handler initialized')
    console.log('🍞 Checking for stored filter...')
    console.log('🍞 ========================================')

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
          sessionStorage.removeItem('__pendingBreadcrumbFilter')
          
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
      if (breadcrumbFilterSentRef.current) {
        console.log('🍞 AdventureDirectory: Filter already sent, skipping check')
        return
      }
      
      try {
        const storedFilterString = sessionStorage.getItem('__pendingBreadcrumbFilter')
        console.log('🍞 AdventureDirectory checking sessionStorage:', storedFilterString ? 'FOUND!' : 'not found')
        
        if (storedFilterString) {
          const storedFilter = JSON.parse(storedFilterString)
          console.log('🍞 ✅ AdventureDirectory found pending breadcrumb filter:', storedFilter)
          sendBreadcrumbFilter(storedFilter)
        } else {
          console.log('🍞 AdventureDirectory: No pending breadcrumb filter in sessionStorage')
        }
      } catch (e) {
        console.warn('🍞 AdventureDirectory: Error checking for breadcrumb filter:', e)
      }
    }

    // Check immediately
    console.log('🍞 AdventureDirectory: Scheduling immediate check...')
    setTimeout(checkForBreadcrumbFilter, 100)
    
    // Check after iframe loads
    if (iframeRef.current) {
      console.log('🍞 AdventureDirectory: Setting up iframe load listener...')
      const sendOnLoad = () => {
        console.log('🍞 AdventureDirectory: Iframe loaded, checking for filter...')
        setTimeout(checkForBreadcrumbFilter, 500)
      }
      iframeRef.current.addEventListener('load', sendOnLoad, { once: true })
    } else {
      console.log('🍞 AdventureDirectory: Iframe ref not available yet')
    }
    
    // Also check periodically
    console.log('🍞 AdventureDirectory: Starting periodic checks...')
    const checkInterval = setInterval(() => {
      if (!breadcrumbFilterSentRef.current) {
        checkForBreadcrumbFilter()
      }
    }, 500)
    
    setTimeout(() => {
      clearInterval(checkInterval)
      console.log('🍞 AdventureDirectory: Stopped periodic checks after 10 seconds')
    }, 10000) // Stop after 10 seconds
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

