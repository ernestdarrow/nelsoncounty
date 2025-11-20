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
        
        const sendParams = () => {
            const iframe = document.getElementById('adventure-directory-iframe') as HTMLIFrameElement
            if (iframe?.contentWindow && window.location) {
                const params: Record<string, string> = {}
                const searchParams = new URLSearchParams(window.location.search)
                
                searchParams.forEach((value, key) => {
                    params[key] = value
                })
                
                // Send via multiple methods for reliability
                iframe.contentWindow.postMessage({
                    type: 'setUrlParams',
                    search: window.location.search,
                    params: params
                }, '*')
                
                iframe.contentWindow.postMessage({
                    type: 'setFilters',
                    params: params
                }, '*')
            }
        }
        
        // Send immediately
        sendParams()
        
        // Also listen for URL changes (popstate for back/forward, but Framer might use pushState)
        const handlePopState = () => {
            setTimeout(sendParams, 100)
        }
        
        window.addEventListener('popstate', handlePopState)
        
        // Also check periodically (fallback for Framer's navigation)
        const interval = setInterval(() => {
            sendParams()
        }, 1000)
        
        return () => {
            window.removeEventListener('popstate', handlePopState)
            clearInterval(interval)
        }
    }, [])

    return null // This component doesn't render anything
}

