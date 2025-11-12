// Backup version - try this if the import version doesn't work
export default function AdventureDirectory() {
  const [iframeHeight, setIframeHeight] = React.useState(800)
  const iframeRef = React.useRef(null)

  React.useEffect(() => {
    function handleMessage(event) {
      if (event.data && event.data.type === 'resize') {
        const height = event.data.height
        if (typeof height === 'number' && height > 0 && height < 10000) {
          setIframeHeight(height)
        }
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  React.useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.style.height = iframeHeight + 'px'
    }
  }, [iframeHeight])

  return React.createElement('iframe', {
    ref: iframeRef,
    src: 'https://odd-even.github.io/nelsoncounty/frontpage_framer.html',
    style: {
      width: '100%',
      height: '800px',
      border: 'none',
      minHeight: '400px'
    },
    title: 'Adventure Directory'
  })
}

