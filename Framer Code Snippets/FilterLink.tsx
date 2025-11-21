// Framer Code Component - Filter Link
// Wrap any element (image, button, text, etc.) to make it navigate to the directory with filters
//
// Setup:
// 1. In Framer, go to Code tab and create a new file called "FilterLink.tsx"
// 2. Copy this entire file
// 3. Add it to your page and wrap it around any element you want to make clickable
// 4. Set the filter properties in the property panel
//
// Usage:
// - Wrap an image, button, or any element with this component
// - Set filter properties (category, type, area, amenity, search, featured)
// - When clicked, it will navigate to /find-your-adventure with those filters applied

import { addPropertyControls, ControlType } from "framer"
import React from "react"

type Props = {
    children?: React.ReactNode
    category?: string
    type?: string
    area?: string
    amenity?: string
    search?: string
    featured?: boolean
    targetUrl?: string
    width?: number | string
    height?: number | string
    backgroundColor?: string
    borderRadius?: number
    padding?: number
    display?: string
}

export default function FilterLink(props: Props) {
    const {
        children,
        category = '',
        type = '',
        area = '',
        amenity = '',
        search = '',
        featured = false,
        targetUrl = '/find-your-adventure',
        width = '100%',
        height = '100%',
        backgroundColor = 'transparent',
        borderRadius = 0,
        padding = 0,
        display = 'inline-block'
    } = props

    // Only run on client-side
    if (typeof window === 'undefined') {
        return (
            <div style={{ width, height, backgroundColor, borderRadius, padding, display }}>
                {children}
            </div>
        )
    }

    const handleClick = (e: React.MouseEvent) => {
        // Only run on client-side
        if (typeof window === 'undefined') {
            return
        }

        // Build filter params object (only include non-empty values)
        const filterParams: Record<string, string> = {}
        
        if (category && category.trim()) {
            filterParams.category = category.trim().toLowerCase()
        }
        if (type && type.trim()) {
            filterParams.type = type.trim()
        }
        if (area && area.trim()) {
            filterParams.area = area.trim()
        }
        if (amenity && amenity.trim()) {
            filterParams.amenity = amenity.trim()
        }
        if (search && search.trim()) {
            filterParams.search = search.trim()
        }
        if (featured) {
            filterParams.featured = 'true'
        }

        // Only proceed if we have at least one filter
        if (Object.keys(filterParams).length === 0) {
            console.warn('⚠️ FilterLink: No filters specified, navigating without filters')
            window.location.href = targetUrl
            return
        }

        console.log('🔗 FilterLink clicked, navigating to:', targetUrl, 'with filters:', filterParams)

        // Store filter params in sessionStorage (same method as breadcrumbs)
        // AdventureDirectory will pick this up and send to iframe
        try {
            const paramsString = JSON.stringify(filterParams)
            sessionStorage.setItem('__pendingBreadcrumbFilter', paramsString)
            console.log('✅ FilterLink: Stored filter for AdventureDirectory:', filterParams)

            // If we're already on the find-your-adventure page, try to send directly to iframe
            // Retry a few times in case iframe is still loading
            let attempts = 0
            const maxAttempts = 10
            const trySendDirectly = () => {
                try {
                    const iframe = document.getElementById('adventure-directory-iframe') as HTMLIFrameElement
                    if (iframe && iframe.contentWindow) {
                        console.log('🔗 FilterLink: Already on find-your-adventure page - sending filter immediately')
                        // Send directly to iframe
                        iframe.contentWindow.postMessage({
                            type: 'applyFilter',
                            params: filterParams,
                            source: 'filterLink'
                        }, '*')
                        console.log('✅ FilterLink: Sent filter directly to iframe')
                        // Clear stored filter since we sent it directly
                        sessionStorage.removeItem('__pendingBreadcrumbFilter')
                        return
                    }
                } catch (e) {
                    console.warn('⚠️ FilterLink: Error sending filter directly:', e)
                }

                attempts++
                if (attempts < maxAttempts) {
                    setTimeout(trySendDirectly, 100)
                }
            }

            // Try sending directly if on same page
            trySendDirectly()

            // Navigate to clean URL (no parameters)
            window.location.href = targetUrl
        } catch (e) {
            console.warn('⚠️ FilterLink: Error storing filter:', e)
            // Fallback: navigate without filters
            window.location.href = targetUrl
        }
    }

    // Wrap children in a clickable div
    return (
        <div
            onClick={handleClick}
            style={{
                cursor: 'pointer',
                display: display,
                width: width,
                height: height,
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
                padding: padding,
                boxSizing: 'border-box'
            }}
        >
            {children}
        </div>
    )
}

// Property controls for Framer
addPropertyControls(FilterLink, {
    children: {
        type: ControlType.ComponentInstance,
        title: "Content",
        description: "The element to wrap (image, button, text, etc.)"
    },
    category: {
        type: ControlType.String,
        title: "Category",
        description: "Filter by category (e.g., 'outdoor', 'stay', 'taste', 'culture')",
        placeholder: "outdoor"
    },
    type: {
        type: ControlType.String,
        title: "Type",
        description: "Filter by type (e.g., 'Biking', 'Hiking', 'Restaurant')",
        placeholder: "Biking"
    },
    area: {
        type: ControlType.String,
        title: "Area",
        description: "Filter by area (e.g., 'Charlottesville', 'Nelson County')",
        placeholder: "Charlottesville"
    },
    amenity: {
        type: ControlType.String,
        title: "Amenity",
        description: "Filter by amenity (e.g., 'Pet-Friendly', 'Outdoor Seating')",
        placeholder: "Pet-Friendly"
    },
    search: {
        type: ControlType.String,
        title: "Search",
        description: "Search term to filter by",
        placeholder: "wine"
    },
    featured: {
        type: ControlType.Boolean,
        title: "Featured Only",
        description: "Show only featured listings",
        defaultValue: false
    },
    targetUrl: {
        type: ControlType.String,
        title: "Target URL",
        description: "URL to navigate to (default: /find-your-adventure)",
        defaultValue: "/find-your-adventure",
        placeholder: "/find-your-adventure"
    },
    width: {
        type: ControlType.String,
        title: "Width",
        description: "Width of the clickable area (e.g., '100%', '200px')",
        defaultValue: "100%",
        placeholder: "100%"
    },
    height: {
        type: ControlType.String,
        title: "Height",
        description: "Height of the clickable area (e.g., '100%', '50px')",
        defaultValue: "100%",
        placeholder: "100%"
    },
    backgroundColor: {
        type: ControlType.Color,
        title: "Background Color",
        description: "Background color (use transparent to make invisible)",
        defaultValue: "transparent"
    },
    borderRadius: {
        type: ControlType.Number,
        title: "Border Radius",
        description: "Border radius in pixels",
        defaultValue: 0,
        min: 0,
        max: 100
    },
    padding: {
        type: ControlType.Number,
        title: "Padding",
        description: "Padding in pixels",
        defaultValue: 0,
        min: 0,
        max: 100
    },
    display: {
        type: ControlType.Enum,
        title: "Display",
        description: "CSS display property",
        options: ["inline-block", "block", "flex", "inline-flex", "inline"],
        optionTitles: ["Inline Block", "Block", "Flex", "Inline Flex", "Inline"],
        defaultValue: "inline-block"
    }
})

