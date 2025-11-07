// Framer Code Component - Amenity Pills Styling (JavaScript version)
// This component styles amenity text elements (Pet-Friendly, Outdoor Seating, etc.) as pill-shaped badges

import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

export default function AmenityPills(props) {
    useEffect(() => {
        // Create style element
        const styleId = 'amenity-pills-styles'
        let styleElement = document.getElementById(styleId)
        
        if (!styleElement) {
            styleElement = document.createElement('style')
            styleElement.id = styleId
            document.head.appendChild(styleElement)
        }

        // Default values
        const bgColor = props.backgroundColor || '#f3f4f6'
        const textColor = props.textColor || '#374151'
        const padding = props.padding || '6px 12px'
        const borderRadius = props.borderRadius || '20px'
        const fontSize = props.fontSize || '13px'
        const fontWeight = props.fontWeight || '500'
        const gap = props.gap || '8px'

        // List of amenity keywords to target
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

        // Build CSS for class-based targeting
        const css = `
            /* Style amenity pills - target by class names and attributes */
            
            /* Target common class patterns */
            *[class*="amenity" i],
            *[class*="badge" i],
            *[class*="tag" i],
            *[class*="pill" i],
            *[data-amenity],
            .amenity-pill {
                display: inline-block !important;
                background-color: ${bgColor} !important;
                color: ${textColor} !important;
                padding: ${padding} !important;
                border-radius: ${borderRadius} !important;
                font-size: ${fontSize} !important;
                font-weight: ${fontWeight} !important;
                line-height: 1.4 !important;
                white-space: nowrap !important;
                margin: 0 4px 4px 0 !important;
                transition: all 0.2s ease !important;
            }

            /* Container for multiple pills - flex layout */
            *[class*="amenities" i],
            *[class*="tags" i],
            *[class*="badges" i] {
                display: flex !important;
                flex-wrap: wrap !important;
                gap: ${gap} !important;
                align-items: center !important;
            }

            /* Hover effect for pills */
            .amenity-pill:hover,
            *[class*="amenity" i]:hover,
            *[class*="badge" i]:hover,
            *[class*="tag" i]:hover,
            *[class*="pill" i]:hover {
                opacity: 0.85 !important;
                transform: translateY(-1px) !important;
            }
        `

        // Use a MutationObserver to dynamically style elements as they're added
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const element = node
                        
                        // Check if element contains any amenity text
                        amenityKeywords.forEach(keyword => {
                            const text = element.textContent?.trim() || ''
                            const innerText = element.innerText?.trim() || ''
                            
                            // Match if text exactly equals keyword
                            if (text === keyword || innerText === keyword) {
                                if (!element.classList.contains('amenity-pill-processed')) {
                                    element.classList.add('amenity-pill', 'amenity-pill-processed')
                                    element.style.display = 'inline-block'
                                    element.style.backgroundColor = bgColor
                                    element.style.color = textColor
                                    element.style.padding = padding
                                    element.style.borderRadius = borderRadius
                                    element.style.fontSize = fontSize
                                    element.style.fontWeight = fontWeight
                                    element.style.lineHeight = '1.4'
                                    element.style.whiteSpace = 'nowrap'
                                    element.style.margin = '0 4px 4px 0'
                                }
                            }
                        })
                    }
                })
            })
        })

        // Start observing
        observer.observe(document.body, {
            childList: true,
            subtree: true
        })

        // Apply styles to existing elements by finding text content
        const applyStyles = () => {
            amenityKeywords.forEach(keyword => {
                // Find all elements that contain the amenity text
                const allElements = document.querySelectorAll('*')
                
                allElements.forEach(element => {
                    // Skip if already processed or if it's a script/style tag
                    if (element.classList.contains('amenity-pill-processed') ||
                        element.tagName === 'SCRIPT' ||
                        element.tagName === 'STYLE' ||
                        element.id === styleId) {
                        return
                    }
                    
                    // Check if element's text content matches exactly or contains the keyword
                    const text = element.textContent?.trim() || ''
                    const innerText = element.innerText?.trim() || ''
                    
                    // Match if text exactly equals keyword, or if it's a standalone text node
                    if (text === keyword || innerText === keyword) {
                        // Check if this is a direct text match (not nested)
                        const hasOnlyText = Array.from(element.childNodes).every(node => 
                            node.nodeType === Node.TEXT_NODE || 
                            (node.nodeType === Node.ELEMENT_NODE && node.textContent?.trim() === keyword)
                        )
                        
                        if (hasOnlyText || text === keyword) {
                            element.classList.add('amenity-pill', 'amenity-pill-processed')
                            element.style.display = 'inline-block'
                            element.style.backgroundColor = bgColor
                            element.style.color = textColor
                            element.style.padding = padding
                            element.style.borderRadius = borderRadius
                            element.style.fontSize = fontSize
                            element.style.fontWeight = fontWeight
                            element.style.lineHeight = '1.4'
                            element.style.whiteSpace = 'nowrap'
                            element.style.margin = '0 4px 4px 0'
                        }
                    }
                })
            })
        }

        // Apply on mount and after delays
        applyStyles()
        setTimeout(applyStyles, 500)
        setTimeout(applyStyles, 1500)

        // Update CSS
        styleElement.textContent = css

        return () => {
            observer.disconnect()
            const styleEl = document.getElementById(styleId)
            if (styleEl) {
                styleEl.remove()
            }
        }
    }, [props.backgroundColor, props.textColor, props.padding, props.borderRadius, props.fontSize, props.fontWeight, props.gap])

    return null // This component doesn't render anything visible
}

// Property controls for Framer
addPropertyControls(AmenityPills, {
    backgroundColor: {
        type: ControlType.Color,
        title: "Background Color",
        defaultValue: "#f3f4f6"
    },
    textColor: {
        type: ControlType.Color,
        title: "Text Color",
        defaultValue: "#374151"
    },
    padding: {
        type: ControlType.String,
        title: "Padding",
        defaultValue: "6px 12px",
        placeholder: "6px 12px"
    },
    borderRadius: {
        type: ControlType.String,
        title: "Border Radius",
        defaultValue: "20px",
        placeholder: "20px"
    },
    fontSize: {
        type: ControlType.String,
        title: "Font Size",
        defaultValue: "13px",
        placeholder: "13px"
    },
    fontWeight: {
        type: ControlType.String,
        title: "Font Weight",
        defaultValue: "500",
        placeholder: "500"
    },
    gap: {
        type: ControlType.String,
        title: "Gap Between Pills",
        defaultValue: "8px",
        placeholder: "8px"
    }
})

