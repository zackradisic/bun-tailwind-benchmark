import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/bun-rocks')
        const data = await response.text()
        setServerData(data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch', error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
            <p className="text-gray-700 mb-4">React Component powered by Bun</p>
            <div className="flex items-center space-x-3">
              <span className="animate-pulse h-3 w-3 bg-blue-500 rounded-full"></span>
              <span className="text-sm font-semibold text-blue-600">React + TypeScript</span>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Side</h2>
            {loading ? (
              <div className="animate-pulse text-gray-500">Loading server response...</div>
            ) : (
              <div className="text-gray-700">
                <strong className="text-purple-600">Response:</strong> {serverData || 'No data'}
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
            Built with Bun 🚀
          </div>
        </div>
      </div>
    </div>
  )
}

// Note: This assumes a server-side route at /api/bun-rocks that returns a simple string response
