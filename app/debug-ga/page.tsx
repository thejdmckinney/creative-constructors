'use client'

import { useEffect, useState } from 'react'

export default function DebugGA() {
  const [gaDetected, setGaDetected] = useState(false)
  const [dataLayerExists, setDataLayerExists] = useState(false)
  const [gtagExists, setGtagExists] = useState(false)
  const [scripts, setScripts] = useState<string[]>([])

  useEffect(() => {
    // Check if Google Analytics is loaded
    const checkGA = () => {
      // Check for dataLayer
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        setDataLayerExists(true)
      }

      // Check for gtag function
      if (typeof window !== 'undefined' && (window as any).gtag) {
        setGtagExists(true)
      }

      // Check for GA script
      const gaScripts = Array.from(document.scripts).filter(script => 
        script.src.includes('googletagmanager.com/gtag')
      )
      
      if (gaScripts.length > 0) {
        setGaDetected(true)
        setScripts(gaScripts.map(s => s.src))
      }
    }

    // Check immediately
    checkGA()

    // Check again after 2 seconds (for afterInteractive loading)
    setTimeout(checkGA, 2000)
  }, [])

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Google Analytics Debug Page</h1>
      
      <div className="space-y-4">
        <div className={`p-4 rounded ${gaDetected ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'} border-2`}>
          <h2 className="font-bold text-xl mb-2">GA Script Loaded</h2>
          <p className="text-lg">{gaDetected ? '✅ YES' : '❌ NO'}</p>
          {scripts.length > 0 && (
            <div className="mt-2 text-sm">
              {scripts.map((src, i) => (
                <div key={i} className="font-mono bg-white p-2 rounded mt-1">
                  {src}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={`p-4 rounded ${dataLayerExists ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'} border-2`}>
          <h2 className="font-bold text-xl mb-2">dataLayer Exists</h2>
          <p className="text-lg">{dataLayerExists ? '✅ YES' : '❌ NO'}</p>
          {dataLayerExists && typeof window !== 'undefined' && (window as any).dataLayer && (
            <pre className="mt-2 text-xs bg-white p-2 rounded overflow-auto">
              {JSON.stringify((window as any).dataLayer, null, 2)}
            </pre>
          )}
        </div>

        <div className={`p-4 rounded ${gtagExists ? 'bg-green-100 border-green-500' : 'bg-red-100 border-red-500'} border-2`}>
          <h2 className="font-bold text-xl mb-2">gtag Function Exists</h2>
          <p className="text-lg">{gtagExists ? '✅ YES' : '❌ NO'}</p>
        </div>

        <div className="p-4 bg-blue-100 border-blue-500 border-2 rounded">
          <h2 className="font-bold text-xl mb-2">Environment Variable</h2>
          <p className="text-sm">GA ID should be: <span className="font-mono">G-P1LZQSGP33</span></p>
          <p className="text-xs mt-2 text-gray-600">
            If scripts aren't loading, the environment variable might not be set in Vercel.
          </p>
        </div>

        <div className="p-4 bg-gray-100 border-gray-500 border-2 rounded">
          <h2 className="font-bold text-xl mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>If all checks show ✅, Google Analytics is working!</li>
            <li>Open browser DevTools → Network tab → Filter "gtag"</li>
            <li>Refresh page and look for gtag/js request</li>
            <li>Go to Google Analytics → Realtime to see yourself</li>
            <li>If nothing loads, check Vercel environment variables</li>
          </ol>
        </div>
      </div>

      <div className="mt-8">
        <a 
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  )
}
