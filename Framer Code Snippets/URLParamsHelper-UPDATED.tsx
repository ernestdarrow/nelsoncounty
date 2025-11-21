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
        
        // Function to check if we're on find-your-adventure page
        // In Framer, the page might be at root (/) with the iframe, so check for iframe existence
        const isOnFindYourAdventurePage = () => {
            const currentPath = window.location.pathname
            const currentUrl = window.location.href
            const iframe = document.getElementById('adventure-directory-iframe') as HTMLIFrameElement
            
            // Check if URL contains /find-your-adventure
            const urlContainsFindYourAdventure = currentPath.includes('/find-your-adventure') || 
                                                 currentUrl.includes('/find-your-adventure') ||
                                                 window.location.hash.includes('/find-your-adventure')
            
            // Also check if iframe exists (indicates we're on the find-your-adventure page)
            const hasIframe = !!iframe
            
            return urlContainsFindYourAdventure || hasIframe
        }
        
        // Function to check and clear parameters if not on find-your-adventure
        const checkAndClearParamsIfNeeded = () => {
            const isFindYourAdventurePage = isOnFindYourAdventurePage()
            
            if (!isFindYourAdventurePage && window.location.search) {
                // Not on find-your-adventure page and URL has parameters - clear them immediately
                const cleanUrl = window.location.origin + window.location.pathname + (window.location.hash || '')
                console.log('🧹 Not on /find-your-adventure page - clearing URL parameters:', cleanUrl, '(current URL:', window.location.href + ')')
                window.history.replaceState({}, '', cleanUrl)
                return true // Parameters were cleared
            }
            return false // Parameters not cleared
        }
        
        // Initial check
        const currentPath = window.location.pathname
        const currentUrl = window.location.href
        const isFindYourAdventurePage = isOnFindYourAdventurePage()
        
        console.log('🔍 Initial check - Path:', currentPath, 'URL:', currentUrl, 'Has params:', !!window.location.search, 'Is find-your-adventure:', isFindYourAdventurePage)
        
        checkAndClearParamsIfNeeded()
        
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
            // First check if we need to clear params (not on find-your-adventure)
            const isFindYourAdventurePage = isOnFindYourAdventurePage()
            
            if (!isFindYourAdventurePage) {
                // Not on find-your-adventure page - clear params and don't send
                if (window.location.search) {
                    const cleanUrl = window.location.origin + window.location.pathname + (window.location.hash || '')
                    console.log('🧹 sendParams: Not on /find-your-adventure - clearing URL parameters:', cleanUrl)
                    window.history.replaceState({}, '', cleanUrl)
                    lastSentParams = ''
                    paramsClearedAfterLoad = false
                }
                return
            }
            
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
                
                // If iframe is already loaded, schedule clearing after a short delay
                // The iframe will send a 'filtersApplied' message when done, but this is a backup
                if (iframe.contentDocument?.readyState === 'complete') {
                    setTimeout(() => {
                        if (
                            window.location.search &&
                            lastSentParams &&
                            !paramsClearedAfterLoad &&
                            JSON.stringify(params) + window.location.search === lastSentParams
                        ) {
                            const cleanUrl = window.location.origin + window.location.pathname + (window.location.hash || '')
                            console.log('🧹 Clearing URL parameters after iframe load (backup, 1.5s delay):', cleanUrl)
                            window.history.replaceState({}, '', cleanUrl)
                            paramsClearedAfterLoad = true
                            lastSentParams = '' // Reset so we can detect new params
                        }
                    }, 1500) // Reduced to 1.5 seconds - filters apply quickly, and we have filtersApplied message
                }
            }
        }
        
        // Send immediately
        sendParams()
        
        // Also listen for URL changes (popstate for back/forward, but Framer might use pushState)
        const handlePopState = () => {
            // Check if we navigated to or away from /find-your-adventure
            const isFindYourAdventurePage = isOnFindYourAdventurePage()
            const currentPath = window.location.pathname
            const currentUrl = window.location.href
            
            console.log('🔍 PopState - Path:', currentPath, 'URL:', currentUrl, 'Has params:', !!window.location.search, 'Is find-your-adventure:', isFindYourAdventurePage)
            
            if (!isFindYourAdventurePage && window.location.search) {
                // Navigated away from find-your-adventure and URL has parameters - clear them
                const cleanUrl = window.location.origin + window.location.pathname + (window.location.hash || '')
                console.log('🧹 Navigated away from /find-your-adventure (popstate) - clearing URL parameters:', cleanUrl)
                window.history.replaceState({}, '', cleanUrl)
                lastSentParams = ''
                paramsClearedAfterLoad = false
            } else if (isFindYourAdventurePage) {
                // On find-your-adventure page - keep params and send them
                if (window.location.search) {
                    console.log('✅ Navigated to /find-your-adventure (popstate) - keeping URL parameters:', window.location.search)
                }
                setTimeout(sendParams, 100)
            }
        }
        
        window.addEventListener('popstate', handlePopState)
        
        // Also listen for pushState/replaceState to detect Framer navigation
        // Store original methods before overriding
        const originalPushState = window.history.pushState.bind(window.history)
        const originalReplaceState = window.history.replaceState.bind(window.history)
        
        const checkAndClearParams = () => {
            const isFindYourAdventurePage = isOnFindYourAdventurePage()
            const currentPath = window.location.pathname
            const currentUrl = window.location.href
            
            console.log('🔍 checkAndClearParams - Path:', currentPath, 'URL:', currentUrl, 'Has params:', !!window.location.search, 'Is find-your-adventure:', isFindYourAdventurePage)
            
            if (!isFindYourAdventurePage && window.location.search) {
                // Navigated away from find-your-adventure and URL has parameters - clear them
                const cleanUrl = window.location.origin + window.location.pathname + (window.location.hash || '')
                console.log('🧹 Navigated away from /find-your-adventure (pushState/replaceState) - clearing URL parameters:', cleanUrl)
                originalReplaceState({}, '', cleanUrl)
                lastSentParams = ''
                paramsClearedAfterLoad = false
            } else if (isFindYourAdventurePage && window.location.search) {
                // Navigated to find-your-adventure with parameters - keep them
                console.log('✅ Navigated to /find-your-adventure (pushState/replaceState) - keeping URL parameters:', window.location.search)
            }
        }
        
        window.history.pushState = function(...args: any[]) {
            originalPushState(...args)
            // Check after navigation
            setTimeout(checkAndClearParams, 0)
        }
        
        window.history.replaceState = function(...args: any[]) {
            originalReplaceState(...args)
            // Check after navigation
            setTimeout(checkAndClearParams, 0)
        }
        
        // Clear URL parameters when page becomes hidden (user navigates away)
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Page became hidden - check if we're still on find-your-adventure
                const currentPath = window.location.pathname
                const isFindYourAdventurePage = currentPath.includes('/find-your-adventure')
                
                if (!isFindYourAdventurePage && window.location.search) {
                    // Not on find-your-adventure page - clear URL parameters
                    const navigateTo = window.location.pathname + (window.location.hash || '')
                    const cleanUrl = window.location.origin + navigateTo
                    console.log('🧹 Page hidden - clearing URL parameters:', cleanUrl)
                    window.history.replaceState({}, '', cleanUrl)
                    lastSentParams = ''
                    paramsClearedAfterLoad = false // Reset flag when navigating away
                }
            }
        }
        
        document.addEventListener('visibilitychange', handleVisibilityChange)
        
        // Also listen for focus events (when user comes back to tab)
        const handleFocus = () => {
            // Check if we're on find-your-adventure when tab regains focus
            const currentPath = window.location.pathname
            const isFindYourAdventurePage = currentPath.includes('/find-your-adventure')
            
            if (!isFindYourAdventurePage && window.location.search) {
                // Not on find-your-adventure page - clear URL parameters
                const cleanUrl = window.location.origin + window.location.pathname + (window.location.hash || '')
                console.log('🧹 Tab focused - not on /find-your-adventure, clearing URL parameters:', cleanUrl)
                window.history.replaceState({}, '', cleanUrl)
                lastSentParams = ''
                paramsClearedAfterLoad = false
            }
        }
        
        window.addEventListener('focus', handleFocus)
        
        // Listen for confirmation from iframe that filters were applied
        const handleFilterAppliedMessage = (event: MessageEvent) => {
            if (
                event.data && 
                event.data.type === 'filtersApplied' && 
                event.data.source === 'find-your-adventure'
            ) {
                // Iframe confirmed filters were applied - clear URL immediately
                if (window.location.search && !paramsClearedAfterLoad) {
                    const cleanUrl = window.location.origin + window.location.pathname + (window.location.hash || '')
                    console.log('🧹 Filters applied - clearing URL parameters immediately:', cleanUrl)
                    window.history.replaceState({}, '', cleanUrl)
                    paramsClearedAfterLoad = true
                    lastSentParams = '' // Reset so we can detect new params
                }
            }
        }
        
        window.addEventListener('message', handleFilterAppliedMessage)
        
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
                // Clear URL aggressively after a short delay (filters should be applied quickly)
                // Reduced from 5s to 1.5s - filters apply fast, we just need to ensure postMessage was received
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
                            console.log('🧹 Clearing URL parameters after iframe load (1.5s delay):', cleanUrl)
                            window.history.replaceState({}, '', cleanUrl)
                            paramsClearedAfterLoad = true
                            lastSentParams = '' // Reset so we can detect new params
                        }
                    }
                }, 1500) // Reduced to 1.5 seconds - filters apply quickly
            }, { once: true }) // Only listen once
        }
        
        // Start checking for iframe after a short delay (to allow iframe to be added to DOM)
        setTimeout(clearParamsAfterIframeLoad, 100)
        
        // Track last known pathname to detect navigation
        let lastKnownPathname = window.location.pathname
        let lastKnownUrl = window.location.href
        let lastKnownSearch = window.location.search
        let lastKnownIframeExists = !!document.getElementById('adventure-directory-iframe')
        
        // Check periodically (every 300ms to catch navigation quickly)
        const interval = setInterval(() => {
            const currentPath = window.location.pathname
            const currentUrl = window.location.href
            const currentSearch = window.location.search
            const currentIframeExists = !!document.getElementById('adventure-directory-iframe')
            const isFindYourAdventurePage = isOnFindYourAdventurePage()
            
            // Check if pathname, URL, search params, or iframe existence changed (navigation occurred)
            if (currentPath !== lastKnownPathname || currentUrl !== lastKnownUrl || currentSearch !== lastKnownSearch || currentIframeExists !== lastKnownIframeExists) {
                lastKnownPathname = currentPath
                lastKnownUrl = currentUrl
                lastKnownSearch = currentSearch
                lastKnownIframeExists = currentIframeExists
                console.log('📍 URL/Page changed - Path:', currentPath, 'Search:', currentSearch, 'Iframe exists:', currentIframeExists, 'Full URL:', currentUrl)
            }
            
            // Always check and clear if needed (more aggressive)
            if (!isFindYourAdventurePage && window.location.search) {
                // Not on find-your-adventure page and URL has parameters - clear them immediately
                const cleanUrl = window.location.origin + window.location.pathname + (window.location.hash || '')
                console.log('🧹 Periodic check: Not on /find-your-adventure - clearing URL parameters:', cleanUrl, '(current path:', currentPath, 'search:', currentSearch, 'iframe exists:', currentIframeExists + ')')
                window.history.replaceState({}, '', cleanUrl)
                lastSentParams = ''
                paramsClearedAfterLoad = false
                lastKnownUrl = cleanUrl // Update tracked URL
                lastKnownSearch = '' // Update tracked search
            } else if (isFindYourAdventurePage) {
                // Still on find-your-adventure page - send params if needed
                sendParams()
            }
        }, 300) // Check every 300ms for faster detection
        
        return () => {
            window.removeEventListener('message', handleClearMessage)
            window.removeEventListener('message', handleFilterAppliedMessage)
            window.removeEventListener('popstate', handlePopState)
            document.removeEventListener('visibilitychange', handleVisibilityChange)
            window.removeEventListener('focus', handleFocus)
            clearInterval(interval)
            // Restore original history methods
            window.history.pushState = originalPushState
            window.history.replaceState = originalReplaceState
        }
    }, [])

    return null // This component doesn't render anything
}

