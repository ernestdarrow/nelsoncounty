import React from "react"
import { addPropertyControls, ControlType } from "framer"

/**
 * Breadcrumb Component for Framer
 * 
 * Creates breadcrumb navigation that links back to filtered views.
 * Automatically generates links based on category, type, and area.
 * 
 * Usage:
 * 1. Add this component to your listing pages
 * 2. Connect to CMS fields: category, type, area
 * 3. Breadcrumbs will automatically link to filtered views
 * 
 * Example output:
 * Home > Outdoor > Biking
 * Home > Taste > Winery > Nellysford
 */

interface BreadcrumbProps {
    category?: string
    type?: string
    area?: string
    listingName?: string
    homeLabel?: string
    homeUrl?: string
    showHome?: boolean
    separator?: string
    backgroundColor?: string
    borderColor?: string
    textColor?: string
    linkColor?: string
    separatorColor?: string
    borderRadius?: number
    padding?: number
    fontSize?: number
    lastItemBackgroundColor?: string
    lastItemTextColor?: string
    lastItemPadding?: number
    lastItemBorderRadius?: number
}

export default function Breadcrumb({ 
    category = "",
    type = "",
    area = "",
    listingName = "",
    homeLabel = "Home",
    homeUrl = "/",
    showHome = true,
    separator = "›",
    backgroundColor = "#ffffff",
    borderColor = "#e8e8e8",
    textColor = "#212529",
    linkColor = "#2d6a4f",
    separatorColor = "#d1d5db",
    borderRadius = 24,
    padding = 8,
    fontSize = 14,
    lastItemBackgroundColor = "#212529",
    lastItemTextColor = "#ffffff",
    lastItemPadding = 8,
    lastItemBorderRadius = 16
}: BreadcrumbProps) {
    const items: Array<{ label: string; url: string; filterParams?: Record<string, string> }> = []
    
    // Helper to capitalize first letter
    const capitalize = (str: string) => {
        if (!str) return ""
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }
    
    // Helper to build clean URL (no parameters) - filters will be sent via postMessage
    const buildFilterUrl = (params: Record<string, string>) => {
        // Always return clean URL - filters will be sent via postMessage instead
        return "/find-your-adventure"
    }
    
    // Helper to store filter params in sessionStorage for URLParamsHelper to pick up after navigation
    const storeFilterForIframe = (params: Record<string, string>) => {
        if (typeof window === 'undefined') return
        
        // Store in sessionStorage - URLParamsHelper will check this after navigation
        try {
            const paramsString = JSON.stringify(params)
            sessionStorage.setItem('pendingBreadcrumbFilter', paramsString)
            console.log('🍞 ✅ Stored filter params in sessionStorage:', params)
            console.log('🍞 SessionStorage key "pendingBreadcrumbFilter" =', paramsString)
            
            // Verify it was stored
            const verify = sessionStorage.getItem('pendingBreadcrumbFilter')
            if (verify === paramsString) {
                console.log('🍞 ✅ Verified: Filter params stored correctly')
            } else {
                console.warn('🍞 ⚠️ Warning: Stored value does not match!')
            }
            
            // If we're already on the find-your-adventure page, trigger URLParamsHelper immediately
            // by sending directly to the iframe if it exists
            try {
                const iframe = document.getElementById('adventure-directory-iframe') as HTMLIFrameElement
                if (iframe && iframe.contentWindow) {
                    console.log('🍞 Already on find-your-adventure page - sending filter immediately')
                    // Send directly to iframe
                    iframe.contentWindow.postMessage({
                        type: 'applyFilter',
                        params: params,
                        source: 'breadcrumb'
                    }, '*')
                    console.log('🍞 ✅ Sent filter directly to iframe')
                    // Clear sessionStorage since we sent it directly
                    sessionStorage.removeItem('pendingBreadcrumbFilter')
                } else {
                    console.log('🍞 Iframe not found yet - URLParamsHelper will pick it up after navigation')
                }
            } catch (e) {
                console.log('🍞 Could not send directly (will be picked up by URLParamsHelper):', e)
            }
        } catch (e) {
            console.error('🍞 ❌ Could not store filter params in sessionStorage:', e)
        }
    }
    
    // Home link
    if (showHome) {
        items.push({ 
            label: homeLabel, 
            url: homeUrl,
            filterParams: {} // Home link doesn't filter
        })
    }
    
    // Category link (if exists)
    if (category) {
        const categoryLabel = capitalize(category)
        items.push({ 
            label: categoryLabel,
            url: buildFilterUrl({ category: category.toLowerCase() }),
            filterParams: { category: category.toLowerCase() }
        })
    }
    
    // Area link (if exists) - comes before Type
    if (area) {
        items.push({ 
            label: area,
            url: buildFilterUrl({ 
                category: category ? category.toLowerCase() : "",
                area: area 
            }),
            filterParams: { 
                category: category ? category.toLowerCase() : "",
                area: area 
            }
        })
    }
    
    // Type link (if exists) - comes after Area
    if (type) {
        items.push({ 
            label: type,
            url: buildFilterUrl({ 
                category: category ? category.toLowerCase() : "",
                type: type,
                area: area || ""
            }),
            filterParams: { 
                category: category ? category.toLowerCase() : "",
                type: type,
                area: area || ""
            }
        })
    }
    
    // Listing name as last item (if exists) - not clickable, just displays
    if (listingName) {
        items.push({ 
            label: listingName,
            url: "", // Empty URL means it's not clickable
            filterParams: {}
        })
    }
    
    // Don't render if no items
    if (items.length === 0) {
        return null
    }
    
    const handleClick = (e: React.MouseEvent, url: string, filterParams?: Record<string, string>) => {
        // Only run on client-side
        if (typeof window === 'undefined') {
            return
        }
        
        console.log('🍞 Breadcrumb clicked, navigating to:', url, 'with filters:', filterParams)
        
        // If the URL contains /find-your-adventure, navigate cleanly and send filters via postMessage
        if (url.includes('/find-your-adventure')) {
            // Build clean URL (no parameters)
            const cleanUrl = url.startsWith('http') ? url.split('?')[0] : (url.startsWith('/') ? window.location.origin + url.split('?')[0] : window.location.origin + '/' + url.split('?')[0])
            
            console.log('🍞 Navigating to clean URL:', cleanUrl)
            console.log('🍞 Filter params:', filterParams)
            
            // Prevent default to handle navigation ourselves
            e.preventDefault()
            e.stopPropagation()
            
            // Only store filter params if they exist
            if (filterParams && Object.keys(filterParams).length > 0) {
                console.log('🍞 Will send filters via postMessage:', filterParams)
                // Store filter params in sessionStorage before navigation
                // URLParamsHelper will check this after navigation and send to iframe
                storeFilterForIframe(filterParams)
            } else {
                console.log('🍞 No filter params to send')
            }
            
            // Navigate to clean URL (no parameters)
            window.location.href = cleanUrl
            
            return false
        }
        // For other links (like home), let them navigate normally
    }
    
    return (
        <nav 
            aria-label="Breadcrumb"
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: backgroundColor,
                borderRadius: `${borderRadius}px`,
                padding: `${padding}px ${padding * 2}px`,
                fontSize: `${fontSize}px`,
                border: `1px solid ${borderColor}`,
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
            }}
        >
            {items.map((item, index) => {
                const isLast = index === items.length - 1
                const nextIsLast = index + 1 === items.length - 1
                
                return (
                    <React.Fragment key={index}>
                        {item.url ? (
                            <a
                                href={item.url}
                                onClick={(e) => {
                                    // Navigate cleanly and send filters via postMessage
                                    handleClick(e, item.url, item.filterParams)
                                }}
                                style={{
                                    color: isLast ? lastItemTextColor : linkColor,
                                    backgroundColor: isLast ? lastItemBackgroundColor : 'transparent',
                                    textDecoration: 'none',
                                    fontWeight: '400',
                                    transition: 'all 0.2s',
                                    cursor: isLast ? 'default' : 'pointer',
                                    padding: isLast ? `${lastItemPadding}px ${lastItemPadding * 2.5}px` : '4px 8px',
                                    borderRadius: isLast ? `${lastItemBorderRadius}px` : `${Math.round(borderRadius / 2)}px`,
                                    whiteSpace: 'nowrap',
                                    display: 'inline-block',
                                    marginRight: isLast ? '0' : '0',
                                    marginLeft: isLast ? `${lastItemPadding}px` : '0'
                                }}
                                onMouseEnter={(e) => {
                                    if (!isLast) {
                                        e.currentTarget.style.color = '#1b4332'
                                        e.currentTarget.style.backgroundColor = '#f8f9fa'
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isLast) {
                                        e.currentTarget.style.color = linkColor
                                        e.currentTarget.style.backgroundColor = 'transparent'
                                    }
                                }}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <span
                                style={{
                                    color: isLast ? lastItemTextColor : linkColor,
                                    backgroundColor: isLast ? lastItemBackgroundColor : 'transparent',
                                    fontWeight: '400',
                                    padding: isLast ? `${lastItemPadding}px ${lastItemPadding * 2.5}px` : '4px 8px',
                                    borderRadius: isLast ? `${lastItemBorderRadius}px` : `${Math.round(borderRadius / 2)}px`,
                                    whiteSpace: 'nowrap',
                                    display: 'inline-block',
                                    marginRight: isLast ? '0' : '0',
                                    marginLeft: isLast ? `${lastItemPadding}px` : '0'
                                }}
                            >
                                {item.label}
                            </span>
                        )}
                        {/* Don't show separator before the last item (since it's in a pill) */}
                        {!isLast && !nextIsLast && (
                            <span 
                                style={{ 
                                    color: separatorColor,
                                    margin: '0 4px',
                                    userSelect: 'none',
                                    fontSize: `${Math.round(fontSize * 0.85)}px`,
                                    fontWeight: '300'
                                }}
                                aria-hidden="true"
                            >
                                {separator}
                            </span>
                        )}
                    </React.Fragment>
                )
            })}
        </nav>
    )
}

// Property controls for Framer
addPropertyControls(Breadcrumb, {
    category: {
        type: ControlType.String,
        title: "Category",
        defaultValue: "",
        placeholder: "e.g., outdoor, taste"
    },
    type: {
        type: ControlType.String,
        title: "Type",
        defaultValue: "",
        placeholder: "e.g., Biking, Winery"
    },
    area: {
        type: ControlType.String,
        title: "Area",
        defaultValue: "",
        placeholder: "e.g., Nellysford, Afton"
    },
    listingName: {
        type: ControlType.String,
        title: "Listing Name",
        defaultValue: "",
        placeholder: "e.g., Devil's Backbone Brewing"
    },
    homeLabel: {
        type: ControlType.String,
        title: "Home Label",
        defaultValue: "Home",
        placeholder: "Label for home link"
    },
    homeUrl: {
        type: ControlType.String,
        title: "Home URL",
        defaultValue: "/",
        placeholder: "URL for home link"
    },
    showHome: {
        type: ControlType.Boolean,
        title: "Show Home",
        defaultValue: true
    },
    separator: {
        type: ControlType.String,
        title: "Separator",
        defaultValue: "›",
        placeholder: "Breadcrumb separator"
    },
    backgroundColor: {
        type: ControlType.Color,
        title: "Background Color",
        defaultValue: "#ffffff"
    },
    borderColor: {
        type: ControlType.Color,
        title: "Border Color",
        defaultValue: "#e8e8e8"
    },
    textColor: {
        type: ControlType.Color,
        title: "Text Color (Last Item)",
        defaultValue: "#212529"
    },
    linkColor: {
        type: ControlType.Color,
        title: "Link Color",
        defaultValue: "#2d6a4f"
    },
    separatorColor: {
        type: ControlType.Color,
        title: "Separator Color",
        defaultValue: "#d1d5db"
    },
    borderRadius: {
        type: ControlType.Number,
        title: "Border Radius",
        defaultValue: 24,
        min: 0,
        max: 50,
        step: 1,
        unit: "px"
    },
    padding: {
        type: ControlType.Number,
        title: "Padding",
        defaultValue: 8,
        min: 0,
        max: 32,
        step: 1,
        unit: "px"
    },
    fontSize: {
        type: ControlType.Number,
        title: "Font Size",
        defaultValue: 14,
        min: 10,
        max: 24,
        step: 1,
        unit: "px"
    },
    lastItemBackgroundColor: {
        type: ControlType.Color,
        title: "Last Item Background",
        defaultValue: "#212529"
    },
    lastItemTextColor: {
        type: ControlType.Color,
        title: "Last Item Text Color",
        defaultValue: "#ffffff"
    },
    lastItemPadding: {
        type: ControlType.Number,
        title: "Last Item Padding",
        defaultValue: 8,
        min: 4,
        max: 20,
        step: 1,
        unit: "px"
    },
    lastItemBorderRadius: {
        type: ControlType.Number,
        title: "Last Item Border Radius",
        defaultValue: 16,
        min: 0,
        max: 30,
        step: 1,
        unit: "px"
    }
})

