import React, { useRef, useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

/**
 * Enhanced Adventure Directory Component with Category Support
 * 
 * This is an updated version of your existing AdventureDirectory component
 * that accepts a category prop and updates the iframe URL accordingly.
 * 
 * Usage:
 * 1. Replace your existing AdventureDirectory component with this one
 * 2. Set the category prop to filter by category
 * 3. Use Framer's "Link to Page" feature to link to this component with different category values
 */

interface AdventureDirectoryProps {
    category?: string
    iframeSrc?: string
}

export default function AdventureDirectory({ 
    category = "",
    iframeSrc = "https://odd-even.github.io/nelsoncounty/frontpage_framer.html"
}: AdventureDirectoryProps) {
    const [iframeHeight, setIframeHeight] = React.useState(800)
    const iframeRef = useRef<HTMLIFrameElement>(null)
    
    // Build iframe URL with category parameter
    const getIframeUrl = () => {
        const url = new URL(iframeSrc)
        if (category) {
            url.searchParams.set('category', category)
        } else {
            url.searchParams.delete('category')
        }
        return url.toString()
    }
    
    // Update iframe src when category changes
    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.src = getIframeUrl()
        }
    }, [category, iframeSrc])
    
    // Handle messages from iframe (resize, etc.)
    useEffect(() => {
        function handleMessage(event: MessageEvent) {
            if (event.data && event.data.type === 'resize') {
                const height = event.data.height
                if (typeof height === 'number' && height > 0 && height < 10000) {
                    setIframeHeight(height)
                }
            }
            
            // Handle scroll-to-top request from iframe
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
    
    // Scroll monitoring (same as original)
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

// Property controls for Framer
addPropertyControls(AdventureDirectory, {
    category: {
        type: ControlType.Enum,
        title: "Category Filter",
        options: ["", "community", "taste", "experience", "outdoor", "culture", "stay"],
        optionTitles: ["All", "Community", "Taste", "Experience", "Outdoor", "Culture", "Stay"],
        defaultValue: ""
    },
    iframeSrc: {
        type: ControlType.String,
        title: "Iframe Source URL",
        defaultValue: "https://odd-even.github.io/nelsoncounty/frontpage_framer.html"
    }
})

