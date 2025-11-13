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
    gap: '8px'
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
        gap = defaultStyles.gap
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
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.85'
                        e.currentTarget.style.transform = 'translateY(-1px)'
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '1'
                        e.currentTarget.style.transform = 'translateY(0)'
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
    }
})

