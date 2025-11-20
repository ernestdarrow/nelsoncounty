import React from "react"
import { addPropertyControls, ControlType } from "framer"

/**
 * PhoneLink Component for Framer
 * 
 * Makes phone numbers clickable with tel: protocol
 * Works on mobile and desktop (desktop opens phone app if available)
 * 
 * Usage:
 * 1. Add this component to your CMS page
 * 2. Connect "phone" property to your CMS field
 * 3. Customize styling as needed
 */

interface PhoneLinkProps {
    phone?: string
    displayText?: string
    showIcon?: boolean
    textColor?: string
    fontSize?: number
    fontWeight?: string
    underline?: boolean
}

export default function PhoneLink({
    phone = "",
    displayText = "",
    showIcon = true,
    textColor = "#2d6a4f",
    fontSize = 14,
    fontWeight = "400",
    underline = false
}: PhoneLinkProps) {
    // Clean phone number for tel: link (remove spaces, dashes, parentheses)
    const cleanPhone = phone ? phone.replace(/[^0-9+]/g, '') : ''
    
    // Use displayText if provided, otherwise use phone number
    const display = displayText || phone || ""
    
    // Don't render if no phone number
    if (!phone || !cleanPhone) {
        return null
    }
    
    return (
        <a
            href={`tel:${cleanPhone}`}
            style={{
                color: textColor,
                fontSize: `${fontSize}px`,
                fontWeight: fontWeight,
                textDecoration: underline ? 'underline' : 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.8'
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1'
            }}
        >
            {showIcon && (
                <svg
                    width={fontSize}
                    height={fontSize}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={textColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            )}
            <span>{display}</span>
        </a>
    )
}

addPropertyControls(PhoneLink, {
    phone: {
        type: ControlType.String,
        title: "Phone Number",
        defaultValue: "",
        placeholder: "(434) 555-1234"
    },
    displayText: {
        type: ControlType.String,
        title: "Display Text",
        defaultValue: "",
        placeholder: "Leave empty to use phone number"
    },
    showIcon: {
        type: ControlType.Boolean,
        title: "Show Icon",
        defaultValue: true
    },
    textColor: {
        type: ControlType.Color,
        title: "Text Color",
        defaultValue: "#2d6a4f"
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
    fontWeight: {
        type: ControlType.Enum,
        title: "Font Weight",
        options: ["300", "400", "500", "600", "700"],
        optionTitles: ["Light", "Regular", "Medium", "Semi Bold", "Bold"],
        defaultValue: "400"
    },
    underline: {
        type: ControlType.Boolean,
        title: "Underline",
        defaultValue: false
    }
})

