// Framer Code Override - Amenity Pills Styling
// 
// SETUP INSTRUCTIONS:
// 1. In Framer, go to the "Code" tab (top menu)
// 2. Click "+ New File" and name it "amenityPills.tsx" (or .js)
// 3. Copy and paste this entire file into that new file
// 4. Save the file
// 5. Now select a Text component or Page component
// 6. In the right panel, go to "Override" tab
// 7. You should see "AmenityPillOverride" or "AmenityPillPage" in the dropdown
//
// Usage:
// - Apply "AmenityPillOverride" to individual Text components
// - Apply "AmenityPillPage" to a Page/Frame for automatic styling of all matching text

import { Override } from "framer"
import React, { useEffect } from "react"

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
    margin: '0 4px 4px 0',
    gap: '8px' // Gap between pills
}

// Check if text matches any amenity keyword
function isAmenityText(text: string | undefined | React.ReactNode): boolean {
    if (!text) return false
    const textStr = typeof text === 'string' ? text : String(text)
    const trimmed = textStr.trim()
    return amenityKeywords.some(keyword => trimmed === keyword)
}

// Get text from props - handles various Framer Text component formats
function getTextFromProps(props: any): string {
    // Try different ways Framer might store text
    if (typeof props.children === 'string') return props.children
    if (typeof props.text === 'string') return props.text
    if (props.text) return String(props.text)
    if (props.children) {
        if (typeof props.children === 'string') return props.children
        if (Array.isArray(props.children)) {
            return props.children
                .map((child: any) => {
                    if (typeof child === 'string') return child
                    if (typeof child === 'number') return String(child)
                    return ''
                })
                .filter(Boolean)
                .join('')
        }
        // Try to get text from nested children
        if (props.children.props?.text) return props.children.props.text
        if (props.children.props?.children) return getTextFromProps(props.children.props)
    }
    return String(props.children || props.text || '')
}

// Style override - applies pill styling to text components
export const AmenityPillStyle: Override = (props) => {
    const text = getTextFromProps(props)
    const isMatch = isAmenityText(text)
    
    // Debug: log to console (remove in production)
    if (text && text.length < 50) {
        console.log('AmenityPillStyle - Text:', text, 'Match:', isMatch)
    }
    
    if (isMatch) {
        const mergedStyle = {
            ...(props.style || {}),
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
        }
        
        return {
            ...props,
            style: mergedStyle
        }
    }
    
    return props
}

// Props override - applies styling if text matches
export const AmenityPillProps: Override = (props) => {
    const text = getTextFromProps(props)
    const isMatch = isAmenityText(text)
    
    if (isMatch) {
        const mergedStyle = {
            ...(props.style || {}),
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
        }
        
        return {
            ...props,
            style: mergedStyle
        }
    }
    
    return props
}

// Component wrapper for page-level styling
function AmenityPillPageComponent(props: any) {
    useEffect(() => {
        const styleId = 'amenity-pills-override-styles'
        let styleElement = document.getElementById(styleId) as HTMLStyleElement
        
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

        // Function to scan and style elements
        const scanAndStyle = () => {
            let foundCount = 0
            amenityKeywords.forEach(keyword => {
                // Try multiple selectors to find text elements
                const selectors = [
                    '[class*="Text"]',
                    '[class*="text"]',
                    'span',
                    'p',
                    'div',
                    '*'
                ]
                
                selectors.forEach(selector => {
                    try {
                        const elements = document.querySelectorAll(selector)
                        elements.forEach(element => {
                            const htmlElement = element as HTMLElement
                            if (!htmlElement || htmlElement.classList.contains('amenity-pill-auto')) return
                            
                            const text = htmlElement.textContent?.trim() || ''
                            const innerText = htmlElement.innerText?.trim() || ''
                            
                            // Match exact text or check if it's the only text in the element
                            if (text === keyword || innerText === keyword) {
                                // Make sure it's not nested inside another pill
                                if (!htmlElement.closest('.amenity-pill-auto')) {
                                    htmlElement.classList.add('amenity-pill-auto')
                                    foundCount++
                                    console.log('✅ Styled amenity pill:', keyword, 'Element:', htmlElement)
                                }
                            }
                        })
                    } catch (e) {
                        // Ignore selector errors
                    }
                })
            })
            if (foundCount > 0) {
                console.log(`🎨 AmenityPillPage: Styled ${foundCount} elements`)
            }
        }

        // Use MutationObserver to find and style matching text as DOM changes
        const observer = new MutationObserver(() => {
            scanAndStyle()
        })

        // Wait for body to exist
        if (document.body) {
            observer.observe(document.body, {
                childList: true,
                subtree: true,
                characterData: true
            })
            
            // Initial scans with delays to catch different render phases
            scanAndStyle()
            setTimeout(scanAndStyle, 100)
            setTimeout(scanAndStyle, 500)
            setTimeout(scanAndStyle, 1000)
        } else {
            // If body doesn't exist yet, wait for it
            const bodyObserver = new MutationObserver(() => {
                if (document.body) {
                    observer.observe(document.body, {
                        childList: true,
                        subtree: true,
                        characterData: true
                    })
                    scanAndStyle()
                    setTimeout(scanAndStyle, 100)
                    setTimeout(scanAndStyle, 500)
                    bodyObserver.disconnect()
                }
            })
            bodyObserver.observe(document.documentElement, {
                childList: true,
                subtree: true
            })
        }

        return () => {
            observer.disconnect()
        }
    }, [])
    
    return props.children || null
}

// Page-level override - automatically styles all matching text elements
export const AmenityPillPage: Override = (props) => {
    return <AmenityPillPageComponent {...props} />
}

// Test override - always applies styling (use this to verify override system works)
export const AmenityPillTest: Override = (props) => {
    console.log('AmenityPillTest - Props:', props)
    return {
        ...props,
        style: {
            ...(props.style || {}),
            display: 'inline-block',
            backgroundColor: '#ff0000', // Red background for testing
            color: '#ffffff',
            padding: '6px 12px',
            borderRadius: '20px',
        }
    }
}

// Comma-based pill override - splits text by commas and styles each as a pill
export const AmenityPillComma: Override = (props) => {
    const text = getTextFromProps(props)
    
    // Check if text contains commas
    if (text && text.includes(',')) {
        const parts = text.split(',').map(part => part.trim()).filter(part => part.length > 0)
        
        if (parts.length > 1) {
            // Return a wrapper with flex layout and individual pills
            return {
                ...props,
                style: {
                    ...(props.style || {}),
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: defaultStyles.gap,
                    alignItems: 'center',
                },
                children: parts.map((part, index) => (
                    <span
                        key={index}
                        style={{
                            display: 'inline-block',
                            backgroundColor: defaultStyles.backgroundColor,
                            color: defaultStyles.textColor,
                            padding: defaultStyles.padding,
                            borderRadius: defaultStyles.borderRadius,
                            fontSize: defaultStyles.fontSize,
                            fontWeight: defaultStyles.fontWeight,
                            lineHeight: '1.4',
                            whiteSpace: 'nowrap',
                            margin: 0,
                            transition: 'all 0.2s ease',
                        }}
                    >
                        {part}
                    </span>
                ))
            }
        }
    }
    
    return props
}

// Page-level comma-based styling - finds text with commas and styles them
// This version doesn't interfere with React rendering
function AmenityPillCommaPageComponent(props: any) {
    useEffect(() => {
        const styleId = 'amenity-pills-comma-styles'
        let styleElement = document.getElementById(styleId) as HTMLStyleElement
        
        if (!styleElement) {
            styleElement = document.createElement('style')
            styleElement.id = styleId
            document.head.appendChild(styleElement)
        }

        const css = `
            /* Auto-style comma-separated pills */
            .amenity-pill-comma-container {
                display: flex !important;
                flex-wrap: wrap !important;
                gap: ${defaultStyles.gap} !important;
                align-items: center !important;
            }
            
            .amenity-pill-comma {
                display: inline-block !important;
                background-color: ${defaultStyles.backgroundColor} !important;
                color: ${defaultStyles.textColor} !important;
                padding: ${defaultStyles.padding} !important;
                border-radius: ${defaultStyles.borderRadius} !important;
                font-size: ${defaultStyles.fontSize} !important;
                font-weight: ${defaultStyles.fontWeight} !important;
                line-height: 1.4 !important;
                white-space: nowrap !important;
                margin: 0 !important;
                transition: all 0.2s ease !important;
            }
            
            .amenity-pill-comma:hover {
                opacity: 0.85 !important;
                transform: translateY(-1px) !important;
            }
        `
        
        styleElement.textContent = css

        // Function to find and style comma-separated text
        const processCommaText = () => {
            // Only target text nodes and their direct parents, not React components
            const walker = document.createTreeWalker(
                document.body,
                NodeFilter.SHOW_TEXT,
                null
            )
            
            let processedCount = 0
            let node: Node | null
            
            while (node = walker.nextNode()) {
                const textNode = node as Text
                const text = textNode.textContent?.trim() || ''
                const parent = textNode.parentElement
                
                if (!parent || !text.includes(',')) continue
                
                // Skip if already processed
                if (parent.classList.contains('amenity-pill-comma-processed')) continue
                
                // Skip if parent has complex React children structure
                if (parent.children.length > 0 && !parent.classList.contains('amenity-pill-comma-container')) continue
                
                // Only process if this text node is the only or main content
                const parentText = parent.textContent?.trim() || ''
                if (parentText === text || (parent.children.length === 0 && parentText.includes(','))) {
                    const parts = text.split(',').map(part => part.trim()).filter(part => part.length > 0)
                    
                    if (parts.length > 1) {
                        // Mark as processed first to avoid re-processing
                        parent.classList.add('amenity-pill-comma-processed')
                        
                        // Create container structure
                        parent.classList.add('amenity-pill-comma-container')
                        
                        // Store original content temporarily
                        const originalHTML = parent.innerHTML
                        
                        // Clear and rebuild with pills
                        parent.innerHTML = ''
                        
                        parts.forEach((part) => {
                            const pill = document.createElement('span')
                            pill.className = 'amenity-pill-comma'
                            pill.textContent = part
                            parent.appendChild(pill)
                        })
                        
                        processedCount++
                        console.log('✅ Created pills from:', text, '→', parts)
                    }
                }
            }
            
            if (processedCount > 0) {
                console.log(`🎨 Processed ${processedCount} comma-separated text elements`)
            }
        }

        // Use MutationObserver to process new elements
        const observer = new MutationObserver((mutations) => {
            // Only process if text nodes were added/changed
            const hasTextChanges = mutations.some(mutation => 
                mutation.type === 'childList' || 
                (mutation.type === 'characterData' && mutation.target.nodeType === Node.TEXT_NODE)
            )
            
            if (hasTextChanges) {
                // Debounce to avoid excessive processing
                setTimeout(processCommaText, 50)
            }
        })

        if (document.body) {
            observer.observe(document.body, {
                childList: true,
                subtree: true,
                characterData: true
            })
            
            // Initial scans with delays to catch different render phases
            setTimeout(processCommaText, 200)
            setTimeout(processCommaText, 500)
            setTimeout(processCommaText, 1000)
            setTimeout(processCommaText, 2000)
        } else {
            // Wait for body
            const bodyObserver = new MutationObserver(() => {
                if (document.body) {
                    observer.observe(document.body, {
                        childList: true,
                        subtree: true,
                        characterData: true
                    })
                    setTimeout(processCommaText, 200)
                    bodyObserver.disconnect()
                }
            })
            bodyObserver.observe(document.documentElement, {
                childList: true,
                subtree: true
            })
        }

        return () => {
            observer.disconnect()
        }
    }, [])
    
    // Return children unchanged - don't interfere with React rendering
    return props.children
}

// Page-level comma override - just wraps children, doesn't modify them
export const AmenityPillCommaPage: Override = (props) => {
    return <AmenityPillCommaPageComponent>{props.children}</AmenityPillCommaPageComponent>
}

// Main export - use this as the override
export const AmenityPillOverride: Override = AmenityPillComma

