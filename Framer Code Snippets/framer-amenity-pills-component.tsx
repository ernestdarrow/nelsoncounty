// Framer Code Component - Amenity Pills
// Use this as a Code Component in your CMS pages
// 
// Setup:
// 1. In Framer, go to Code tab and create a new file
// 2. Copy this entire file
// 3. Add it to your CMS page as a Code Component
// 4. Connect it to your CMS field (text field with comma-separated values)
//
// Usage:
// - Connect the "text" property to your CMS field
// - Or pass text directly as a prop
// - The component will automatically split by commas and render as pills

import { addPropertyControls, ControlType } from "framer"
import React from "react"

// Default styling values
const defaultStyles = {
    backgroundColor: '#f3f4f6',
    textColor: '#374151',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '500',
    gap: '8px',
    borderWidth: '0px',
    borderColor: '#d1d5db',
    borderStyle: 'solid'
}

type Props = {
    text?: string
    backgroundColor?: string
    textColor?: string
    padding?: string
    borderRadius?: string
    fontSize?: string
    fontWeight?: string
    gap?: string
    borderWidth?: string
    borderColor?: string
    borderStyle?: string
}

export default function AmenityPills(props: Props) {
    const {
        text = '',
        backgroundColor = defaultStyles.backgroundColor,
        textColor = defaultStyles.textColor,
        padding = defaultStyles.padding,
        borderRadius = defaultStyles.borderRadius,
        fontSize = defaultStyles.fontSize,
        fontWeight = defaultStyles.fontWeight,
        gap = defaultStyles.gap,
        borderWidth = defaultStyles.borderWidth,
        borderColor = defaultStyles.borderColor,
        borderStyle = defaultStyles.borderStyle
    } = props

    // Split text by commas and/or newlines, then filter out empty strings
    const parts = text
        .split(/[,\n\r]+/) // Split by commas, newlines, or carriage returns
        .map(part => part.trim())
        .filter(part => part.length > 0)

    // If only one part (no separators), return as-is
    if (parts.length <= 1) {
        return (
            <div style={{ display: 'inline-block' }}>
                {text || 'No text provided'}
            </div>
        )
    }

    // Handle click on amenity pill
    const handleAmenityClick = (amenity: string) => {
        // Build filter URL
        const filterUrl = `/find-your-adventure?amenity=${encodeURIComponent(amenity)}`
        
        // Update iframe if it exists (if on same page)
        const iframe = document.getElementById('adventure-directory-iframe') as HTMLIFrameElement
        if (iframe?.contentWindow) {
            iframe.contentWindow.postMessage({
                type: 'setUrlParams',
                search: `?amenity=${encodeURIComponent(amenity)}`,
                params: { amenity: amenity }
            }, '*')
            
            iframe.contentWindow.postMessage({
                type: 'setFilters',
                params: { amenity: amenity }
            }, '*')
        }
        
        // Navigate to filtered view
        window.location.href = filterUrl
    }

    // Render as pills
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: gap,
                alignItems: 'center',
            }}
        >
            {parts.map((part, index) => (
                <span
                    key={index}
                    onClick={() => handleAmenityClick(part)}
                    style={{
                        display: 'inline-block',
                        backgroundColor: backgroundColor,
                        color: textColor,
                        padding: padding,
                        borderRadius: borderRadius,
                        fontSize: fontSize,
                        fontWeight: fontWeight,
                        lineHeight: '1.4',
                        whiteSpace: 'nowrap',
                        margin: 0,
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        userSelect: 'none',
                        borderWidth: borderWidth,
                        borderColor: borderColor,
                        borderStyle: borderStyle
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.85'
                        e.currentTarget.style.transform = 'translateY(-1px)'
                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '1'
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = 'none'
                    }}
                >
                    {part}
                </span>
            ))}
        </div>
    )
}

// Property controls for Framer
addPropertyControls(AmenityPills, {
    text: {
        type: ControlType.String,
        title: "Text",
        description: "Comma-separated text (e.g., 'Pet-Friendly, Outdoor Seating')",
        defaultValue: "Pet-Friendly, Outdoor Seating, Tours Available",
        placeholder: "Enter comma-separated text..."
    },
    backgroundColor: {
        type: ControlType.Color,
        title: "Background Color",
        defaultValue: defaultStyles.backgroundColor
    },
    textColor: {
        type: ControlType.Color,
        title: "Text Color",
        defaultValue: defaultStyles.textColor
    },
    padding: {
        type: ControlType.String,
        title: "Padding",
        defaultValue: defaultStyles.padding,
        placeholder: "6px 12px"
    },
    borderRadius: {
        type: ControlType.String,
        title: "Border Radius",
        defaultValue: defaultStyles.borderRadius,
        placeholder: "20px"
    },
    fontSize: {
        type: ControlType.String,
        title: "Font Size",
        defaultValue: defaultStyles.fontSize,
        placeholder: "13px"
    },
    fontWeight: {
        type: ControlType.String,
        title: "Font Weight",
        defaultValue: defaultStyles.fontWeight,
        placeholder: "500"
    },
    gap: {
        type: ControlType.String,
        title: "Gap Between Pills",
        defaultValue: defaultStyles.gap,
        placeholder: "8px"
    },
    borderWidth: {
        type: ControlType.String,
        title: "Border Width",
        defaultValue: defaultStyles.borderWidth,
        placeholder: "0px, 1px, 2px, etc."
    },
    borderColor: {
        type: ControlType.Color,
        title: "Border Color",
        defaultValue: defaultStyles.borderColor
    },
    borderStyle: {
        type: ControlType.Enum,
        title: "Border Style",
        options: ["solid", "dashed", "dotted", "double", "none"],
        optionTitles: ["Solid", "Dashed", "Dotted", "Double", "None"],
        defaultValue: "solid"
    }
})

