// Framer Code Component - Adventure Directory
// Paste this into a Code Component in Framer
// React is automatically available in Framer Code Components

export default function AdventureDirectory() {
  const iframeRef = React.useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = React.useState(800) // Initial height

  // Only run browser-specific code after component mounts (useEffect runs only in browser)
  React.useEffect(() => {
    // Guard all window access - only runs in browser, not during SSR
    if (typeof window === 'undefined') return
    
    const handleMessage = (event: MessageEvent) => {
      try {
        // Accept messages from the iframe source
        // Check if it's our resize message - be more flexible with the check
        if (event.data && event.data.type === 'resize') {
          const newHeight = event.data.height
          if (newHeight && typeof newHeight === 'number' && newHeight > 0 && newHeight < 10000) {
            // Sanity check: height should be reasonable (less than 10000px)
            setIframeHeight(newHeight)
            // Also directly set it on the iframe as backup
            if (iframeRef.current) {
              iframeRef.current.style.height = `${newHeight}px`
            }
          }
        }
      } catch (e) {
        // Silently ignore errors
      }
    }

    // Listen for messages from the iframe
    window.addEventListener('message', handleMessage)

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('message', handleMessage)
      }
    }
  }, [])
  
  // Handle iframe setup after mount
  React.useEffect(() => {
    // Guard all window/DOM access - only runs in browser
    if (typeof window === 'undefined') return
    if (!iframeRef.current) return
    
    const iframe = iframeRef.current
    
    // Set initial height
    try {
      iframe.style.height = `${iframeHeight}px`
    } catch (e) {
      // Ignore errors during SSR
    }
    
    // Try to access iframe content (may be blocked by CORS)
    try {
      iframe.addEventListener('load', () => {
        // Give it a moment to load, then request height update
        setTimeout(() => {
          if (iframe.contentWindow && typeof window !== 'undefined') {
            try {
              iframe.contentWindow.postMessage({ type: 'requestHeight' }, '*')
            } catch (e) {
              // CORS might prevent access, that's okay
            }
          }
        }, 1000)
      })
    } catch (e) {
      // CORS might prevent access, that's okay
    }
  }, [iframeHeight])

  return (
    <iframe
      ref={iframeRef}
      src="https://ernestdarrow.github.io/nelsoncounty/frontpage_framer.html"
      style={{
        width: '100%',
        height: `${iframeHeight}px`,
        border: 'none',
        display: 'block',
        minHeight: '400px',
      }}
      loading="lazy"
      title="Adventure Directory"
      onLoad={() => {
        // Only run in browser environment
        if (typeof window === 'undefined') return
        
        try {
          // Request height update when iframe loads
          setTimeout(() => {
            if (iframeRef.current?.contentWindow) {
              try {
                iframeRef.current.contentWindow.postMessage({ type: 'requestHeight' }, '*')
              } catch (e) {
                // Ignore errors
              }
            }
          }, 500)
          
          // Also set up a periodic check as fallback
          const interval = setInterval(() => {
            if (iframeRef.current?.contentWindow) {
              try {
                iframeRef.current.contentWindow.postMessage({ type: 'requestHeight' }, '*')
              } catch (e) {
                clearInterval(interval)
              }
            }
          }, 2000)
          
          // Clear interval after 30 seconds
          setTimeout(() => clearInterval(interval), 30000)
        } catch (e) {
          // Ignore errors
        }
      }}
    />
  )
}

