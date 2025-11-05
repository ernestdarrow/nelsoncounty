// Framer Code Component - Adventure Directory
// Paste this into a Code Component in Framer
// React is automatically available in Framer Code Components

export default function AdventureDirectory() {
  const iframeRef = React.useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = React.useState(800) // Initial height

  React.useEffect(() => {
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
    
    // Also set up a listener on the iframe's contentWindow if accessible
    if (iframeRef.current) {
      const iframe = iframeRef.current
      
      // Set initial height
      iframe.style.height = `${iframeHeight}px`
      
      // Try to access iframe content (may be blocked by CORS)
      try {
        iframe.addEventListener('load', () => {
          // Give it a moment to load, then request height update
          setTimeout(() => {
            if (iframe.contentWindow) {
              iframe.contentWindow.postMessage({ type: 'requestHeight' }, '*')
            }
          }, 1000)
        })
      } catch (e) {
        // CORS might prevent access, that's okay
      }
    }

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

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

