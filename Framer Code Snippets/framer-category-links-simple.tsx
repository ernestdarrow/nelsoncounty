import React, { useRef } from "react"

/**
 * Simple Category Links Component
 * 
 * A simpler version that just updates the iframe URL.
 * Use this if you want a basic button/link setup.
 */

interface Props {
    category: string
    children: React.ReactNode
    iframeId?: string
}

export default function CategoryLinkSimple({ category, children, iframeId = "adventure-directory-iframe" }: Props) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        
        // Find the iframe and update its src
        const iframe = document.getElementById(iframeId) as HTMLIFrameElement
        if (iframe) {
            const currentSrc = iframe.src
            const baseUrl = currentSrc.split('?')[0]
            const newUrl = `${baseUrl}?category=${category}`
            iframe.src = newUrl
            
            // Also send postMessage (works cross-origin)
            iframe.contentWindow?.postMessage({
                type: 'setCategory',
                category: category
            }, '*')
        }
    }
    
    return (
        <a href={`#${category}`} onClick={handleClick} style={{ textDecoration: 'none' }}>
            {children}
        </a>
    )
}

