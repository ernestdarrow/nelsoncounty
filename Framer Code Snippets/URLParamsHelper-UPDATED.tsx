import { useEffect } from "react"

/**
 * URLParamsHelper Component - UPDATED VERSION
 * 
 * This component listens for URL parameter requests from the iframe
 * and responds with the current Framer page's URL parameters.
 * 
 * Install:
 * 1. Create new file: URLParamsHelper.tsx
 * 2. Copy this entire code
 * 3. Add to your "Find Your Adventure" page (same page as AdventureDirectory)
 * 
 * Note: This component is invisible - it just handles communication
 */

export default function URLParamsHelper() {
    useEffect(() => {
        // Only run on client-side
        if (typeof window === 'undefined') {
            return
        }
        
        const handleMessage = (event: MessageEvent) => {
            // Listen for requests from the iframe
            if (
                event.data && 
                event.data.type === 'getUrlParams' && 
                event.data.source === 'find-your-adventure'
            ) {
                // Get all URL parameters from current Framer page
                const params: Record<string, string> = {}
                
                if (window.location) {
                    const searchParams = new URLSearchParams(window.location.search)
                    
                    for (const [key, value] of searchParams.entries()) {
                        params[key] = value
                    }
                }
                
                // Send response back to iframe
                if (event.source && event.source !== window) {
                    (event.source as Window).postMessage({
                        type: 'urlParamsResponse',
                        params: params
                    }, event.origin)
                }
            }
        }

        window.addEventListener('message', handleMessage)

        return () => {
            window.removeEventListener('message', handleMessage)
        }
    }, [])

    // Also send parameters proactively when URL changes
    useEffect(() => {
        // Only run on client-side
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            return
        }
        
        let lastSentParams = ''
        let paramsClearedAfterLoad = false // Track if we've cleared params after iframe load
        
        // Listen for clearAll messages from iframe
        const handleClearMessage = (event: MessageEvent) => {
            if (
                event.data && 
                event.data.type === 'setUrlParams' && 
                event.data.clearAll === true
            ) {
                // Iframe requested to clear URL - navigate to base URL immediately
                const navigateTo = event.data.navigateTo || (window.location.pathname + (window.location.hash || ''))
                const cleanUrl = window.location.origin + navigateTo
                console.log('🧹 Navigating parent to clean URL:', cleanUrl, '(current URL:', window.location.href + ')')
                
                // Navigate immediately - this will reload the page with clean URL
                window.location.href = cleanUrl
                
                // Reset lastSentParams so next sendParams will send empty params
                lastSentParams = ''
                
                // Also clear the interval to stop polling temporarily
                // (The page will reload anyway, so this is just for safety)
            }
            
            // Listen for iframe hidden message - clear URL parameters when navigating away
            if (
                event.data && 
                event.data.type === 'iframeHidden' && 
                event.data.source === 'find-your-adventure' &&
                event.data.clearUrlParams === true
            ) {
                // Iframe became hidden - clear URL parameters without reloading
                const navigateTo = window.location.pathname + (window.location.hash || '')
                const cleanUrl = window.location.origin + navigateTo
                
                // Only clear if URL actually has parameters
                if (window.location.search) {
                    console.log('🧹 Iframe hidden - clearing URL parameters:', cleanUrl, '(current URL:', window.location.href + ')')
                    
                    // Use replaceState to update URL without reloading
                    window.history.replaceState({}, '', cleanUrl)
                    
                    // Reset lastSentParams so next sendParams will send empty params
                    lastSentParams = ''
                }
            }
        }
        
        window.addEventListener('message', handleClearMessage)
        
        const sendParams = () => {
            const iframe = document.getElementById('adventure-directory-iframe') as HTMLIFrameElement
            
            // Check if iframe is visible before sending parameters
            if (iframe) {
                // Check if iframe is in viewport using IntersectionObserver or visibility
                const rect = iframe.getBoundingClientRect()
                const isVisible = rect.width > 0 && rect.height > 0 && 
                                 rect.top < window.innerHeight && 
                                 rect.bottom > 0 &&
                                 rect.left < window.innerWidth && 
                                 rect.right > 0
                
                // Also check if iframe is not hidden via CSS
                const style = window.getComputedStyle(iframe)
                const isNotHidden = style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0'
                
                if (!isVisible || !isNotHidden) {
                    // Iframe is not visible - don't send parameters
                    return
                }
            }
            
            if (iframe?.contentWindow && window.location) {
                // Don't send parameters if URL has no search params (clean URL)
                // This prevents re-applying filters when URL is clean
                if (!window.location.search) {
                    // URL is clean - reset lastSentParams so we can detect when params are added
                    lastSentParams = ''
                    return
                }
                
                const params: Record<string, string> = {}
                const searchParams = new URLSearchParams(window.location.search)
                
                searchParams.forEach((value, key) => {
                    params[key] = value
                })
                
                // Create hash of current params
                const paramsHash = JSON.stringify(params) + window.location.search
                
                // Only send if parameters actually changed
                if (lastSentParams === paramsHash) {
                    return // Skip if same as last sent
                }
                
                lastSentParams = paramsHash
                
                // Reset the cleared flag when new parameters are sent
                // This allows clearing again if URL changes
                paramsClearedAfterLoad = false
                
                // Send via postMessage (single message type to avoid duplicate processing)
                iframe.contentWindow.postMessage({
                    type: 'setUrlParams',
                    search: window.location.search,
                    params: params
                }, '*')
                
                // If iframe is already loaded, schedule clearing after a delay
                if (iframe.contentDocument?.readyState === 'complete') {
                    setTimeout(() => {
                        if (
                            window.location.search &&
                            lastSentParams &&
                            !paramsClearedAfterLoad &&
                            JSON.stringify(params) + window.location.search === lastSentParams
                        ) {
                            const cleanUrl = window.location.origin + window.location.pathname + (window.location.hash || '')
                            console.log('🧹 Clearing URL parameters after iframe load (already loaded):', cleanUrl)
                            window.history.replaceState({}, '', cleanUrl)
                            paramsClearedAfterLoad = true
                        }
                    }, 1000)
                }
            }
        }
        
        // Send immediately
        sendParams()
        
        // Also listen for URL changes (popstate for back/forward, but Framer might use pushState)
        const handlePopState = () => {
            setTimeout(sendParams, 100)
        }
        
        window.addEventListener('popstate', handlePopState)
        
        // Clear URL parameters when page becomes hidden (user navigates away)
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Page became hidden - clear URL parameters
                const navigateTo = window.location.pathname + (window.location.hash || '')
                const cleanUrl = window.location.origin + navigateTo
                
                if (window.location.search) {
                    console.log('🧹 Page hidden - clearing URL parameters:', cleanUrl)
                    window.history.replaceState({}, '', cleanUrl)
                    lastSentParams = ''
                    paramsClearedAfterLoad = false // Reset flag when navigating away
                }
            }
        }
        
        document.addEventListener('visibilitychange', handleVisibilityChange)
        
        // Clear URL parameters after iframe loads (once parameters have been sent)
        const clearParamsAfterIframeLoad = () => {
            const iframe = document.getElementById('adventure-directory-iframe') as HTMLIFrameElement
            
            if (!iframe) {
                // Iframe not found yet, try again after a short delay
                setTimeout(clearParamsAfterIframeLoad, 500)
                return
            }
            
            // Wait for iframe to load
            iframe.addEventListener('load', () => {
                // Wait a bit more to ensure parameters were sent via postMessage
                setTimeout(() => {
                    // Only clear if:
                    // 1. URL has parameters
                    // 2. We've sent parameters (lastSentParams is set)
                    // 3. We haven't cleared yet (paramsClearedAfterLoad is false)
                    // 4. URL still has the same parameters we sent
                    if (
                        window.location.search &&
                        lastSentParams &&
                        !paramsClearedAfterLoad
                    ) {
                        // Verify the current URL params match what we sent
                        const currentParams: Record<string, string> = {}
                        const searchParams = new URLSearchParams(window.location.search)
                        searchParams.forEach((value, key) => {
                            currentParams[key] = value
                        })
                        const currentParamsHash = JSON.stringify(currentParams) + window.location.search
                        
                        // Only clear if params match what we sent (to avoid clearing if user changed them)
                        if (currentParamsHash === lastSentParams) {
                            const cleanUrl = window.location.origin + window.location.pathname + (window.location.hash || '')
                            console.log('🧹 Clearing URL parameters after iframe load:', cleanUrl)
                            window.history.replaceState({}, '', cleanUrl)
                            paramsClearedAfterLoad = true
                        }
                    }
                }, 1000) // Wait 1 second after iframe load to ensure postMessage was sent
            }, { once: true }) // Only listen once
        }
        
        // Start checking for iframe after a short delay (to allow iframe to be added to DOM)
        setTimeout(clearParamsAfterIframeLoad, 100)
        
        // Check periodically but less frequently (every 2 seconds instead of 1)
        // Only send if URL actually changed
        const interval = setInterval(() => {
            sendParams()
        }, 2000)
        
        return () => {
            window.removeEventListener('message', handleClearMessage)
            window.removeEventListener('popstate', handlePopState)
            document.removeEventListener('visibilitychange', handleVisibilityChange)
            clearInterval(interval)
        }
    }, [])

    return null // This component doesn't render anything
}

