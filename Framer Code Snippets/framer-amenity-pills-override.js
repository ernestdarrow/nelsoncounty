// Framer Code Override - Amenity Pills Styling (JavaScript version)
// Apply this override to Text components in Framer to style amenity text as pills
// 
// Usage:
// 1. Select a Text component in Framer
// 2. Go to the "Override" panel
// 3. Choose "AmenityPillOverride" for the "style" or "props" override
//
// Or use as a page-level override to style all matching text elements

import { Override } from "framer"

// List of amenity keywords to style as pills
const amenityKeywords = [
    'Pet-Friendly',
    'Outdoor Seating',
    'Tours Available',
    'Events',
    'Food Available',
    'Kid-Friendly',
    'Wheelchair Accessible',
    'Free',
    'Seasonal',
    'Live Music',
    'Photography',
    'Scenic Views',
    'Biking',
    'Appalachian Trail',
    'Pro Shop',
    'Lessons Available',
    'Cart Rental',
    'Lifeguards'
]

// Default styling values
const defaultStyles = {
    backgroundColor: '#f3f4f6',
    textColor: '#374151',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '500',
    margin: '0 4px 4px 0'
}

// Check if text matches any amenity keyword
function isAmenityText(text) {
    if (!text) return false
    const trimmed = text.trim()
    return amenityKeywords.some(keyword => trimmed === keyword)
}

// Style override - applies pill styling to text components
export const AmenityPillStyle = (props) => {
    const text = props.children?.toString() || ''
    
    if (isAmenityText(text)) {
        return {
            style: {
                display: 'inline-block',
                backgroundColor: defaultStyles.backgroundColor,
                color: defaultStyles.textColor,
                padding: defaultStyles.padding,
                borderRadius: defaultStyles.borderRadius,
                fontSize: defaultStyles.fontSize,
                fontWeight: defaultStyles.fontWeight,
                lineHeight: '1.4',
                whiteSpace: 'nowrap',
                margin: defaultStyles.margin,
                transition: 'all 0.2s ease',
                ...props.style
            }
        }
    }
    
    return props
}

// Props override - wraps text in a styled span if it matches
export const AmenityPillProps = (props) => {
    const text = props.children?.toString() || ''
    
    if (isAmenityText(text)) {
        return {
            ...props,
            style: {
                display: 'inline-block',
                backgroundColor: defaultStyles.backgroundColor,
                color: defaultStyles.textColor,
                padding: defaultStyles.padding,
                borderRadius: defaultStyles.borderRadius,
                fontSize: defaultStyles.fontSize,
                fontWeight: defaultStyles.fontWeight,
                lineHeight: '1.4',
                whiteSpace: 'nowrap',
                margin: defaultStyles.margin,
                transition: 'all 0.2s ease',
                ...props.style
            }
        }
    }
    
    return props
}

// Page-level override - automatically styles all matching text elements
export const AmenityPillPage = () => {
    // This runs once when the page loads
    if (typeof window !== 'undefined') {
        const styleId = 'amenity-pills-override-styles'
        let styleElement = document.getElementById(styleId)
        
        if (!styleElement) {
            styleElement = document.createElement('style')
            styleElement.id = styleId
            document.head.appendChild(styleElement)
        }

        const css = `
            /* Auto-style amenity pills */
            .amenity-pill-auto {
                display: inline-block !important;
                background-color: ${defaultStyles.backgroundColor} !important;
                color: ${defaultStyles.textColor} !important;
                padding: ${defaultStyles.padding} !important;
                border-radius: ${defaultStyles.borderRadius} !important;
                font-size: ${defaultStyles.fontSize} !important;
                font-weight: ${defaultStyles.fontWeight} !important;
                line-height: 1.4 !important;
                white-space: nowrap !important;
                margin: ${defaultStyles.margin} !important;
                transition: all 0.2s ease !important;
            }
            
            .amenity-pill-auto:hover {
                opacity: 0.85 !important;
                transform: translateY(-1px) !important;
            }
        `
        
        styleElement.textContent = css

        // Use MutationObserver to find and style matching text
        const observer = new MutationObserver(() => {
            amenityKeywords.forEach(keyword => {
                const allElements = document.querySelectorAll('*')
                allElements.forEach(element => {
                    const htmlElement = element
                    const text = htmlElement.textContent?.trim() || ''
                    
                    if (text === keyword && !htmlElement.classList.contains('amenity-pill-auto')) {
                        htmlElement.classList.add('amenity-pill-auto')
                    }
                })
            })
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true
        })

        // Initial scan
        setTimeout(() => {
            amenityKeywords.forEach(keyword => {
                const allElements = document.querySelectorAll('*')
                allElements.forEach(element => {
                    const htmlElement = element
                    const text = htmlElement.textContent?.trim() || ''
                    
                    if (text === keyword && !htmlElement.classList.contains('amenity-pill-auto')) {
                        htmlElement.classList.add('amenity-pill-auto')
                    }
                })
            })
        }, 100)
    }
    
    return {}
}

// Main export - use this as the override
export const AmenityPillOverride = AmenityPillStyle

