// Framer Code Component - URL Parameters Helper
// Add this to your Framer page to enable URL parameter passing to the iframe embed

import { useEffect } from "react"

export default function URLParamsHelper() {
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data && event.data.type === 'getUrlParams' && event.data.source === 'adventure-directory') {
                const params: Record<string, string> = {}
                const searchParams = new URLSearchParams(window.location.search)
                
                for (const [key, value] of searchParams.entries()) {
                    params[key] = value
                }
                
                // Send response back to iframe
                if (event.source && event.source !== window) {
                    (event.source as Window).postMessage({
                        type: 'urlParamsResponse',
                        params: params
                    }, event.origin)
                }
            }
        }

        window.addEventListener('message', handleMessage)

        return () => {
            window.removeEventListener('message', handleMessage)
        }
    }, [])

    return null // This component doesn't render anything
}

