import React, { useRef, useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

/**
 * Category Link Component for Framer
 * 
 * Use this component to create links that filter the Adventure Directory by category.
 * Place this component on your "Find Your Adventure" page or anywhere you want category links.
 * 
 * Usage:
 * 1. Add this component to your Framer page
 * 2. Set the iframeId to match your AdventureDirectory iframe's ID (or leave blank for auto-detect)
 * 3. Create multiple instances for each category, or use the categories prop
 */

interface CategoryLinkProps {
    category: string
    label?: string
    iframeId?: string
    style?: React.CSSProperties
}

export default function CategoryLink({ 
    category, 
    label, 
    iframeId = "adventure-directory-iframe",
    style 
}: CategoryLinkProps) {
    const linkRef = useRef<HTMLAnchorElement>(null)
    
    // Default labels for categories
    const categoryLabels: Record<string, string> = {
        community: "Community",
        taste: "Taste",
        experience: "Experience",
        outdoor: "Outdoor",
        culture: "Culture",
        stay: "Stay"
    }
    
    const displayLabel = label || categoryLabels[category] || category.charAt(0).toUpperCase() + category.slice(1)
    
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        
        // Method 1: Update iframe src directly (if same origin or iframe allows)
        const iframe = document.getElementById(iframeId) as HTMLIFrameElement
        if (iframe) {
            const currentSrc = iframe.src
            const baseUrl = currentSrc.split('?')[0] // Remove existing params
            const newUrl = `${baseUrl}?category=${category}`
            iframe.src = newUrl
            
            // Also send postMessage to iframe (works cross-origin)
            iframe.contentWindow?.postMessage({
                type: 'setCategory',
                category: category,
                source: 'framer-category-link'
            }, '*')
        }
        
        // Method 2: Update parent page URL and send postMessage
        // This works even if iframe src can't be changed
        if (window.parent && window.parent !== window) {
            // Update URL without reload (if on same page)
            const url = new URL(window.location.href)
            url.searchParams.set('category', category)
            window.history.pushState({ category }, '', url.toString())
            
            // Send postMessage to iframe
            const iframe = document.getElementById(iframeId) as HTMLIFrameElement
            if (iframe?.contentWindow) {
                iframe.contentWindow.postMessage({
                    type: 'setCategory',
                    category: category,
                    source: 'framer-category-link'
                }, '*')
            }
        }
        
        // Method 3: Use Framer's navigation (if you want to navigate to a new page)
        // Uncomment if you want to navigate to a new Framer page instead:
        // window.location.href = `/find-your-adventure?category=${category}`
    }
    
    return (
        <a
            ref={linkRef}
            href={`#category-${category}`}
            onClick={handleClick}
            style={{
                display: 'inline-block',
                padding: '12px 24px',
                backgroundColor: '#2d6a4f',
                color: '#ffffff',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                ...style
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1b4332'
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2d6a4f'
            }}
        >
            {displayLabel}
        </a>
    )
}

// Property controls for Framer
addPropertyControls(CategoryLink, {
    category: {
        type: ControlType.Enum,
        title: "Category",
        options: ["community", "taste", "experience", "outdoor", "culture", "stay"],
        optionTitles: ["Community", "Taste", "Experience", "Outdoor", "Culture", "Stay"],
        defaultValue: "community"
    },
    label: {
        type: ControlType.String,
        title: "Label",
        defaultValue: "",
        placeholder: "Leave empty for default"
    },
    iframeId: {
        type: ControlType.String,
        title: "Iframe ID",
        defaultValue: "adventure-directory-iframe",
        placeholder: "ID of your AdventureDirectory iframe"
    }
})

