import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

const BunFullstackDemo: React.FC = () => {
  const [serverData, setServerData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello')
        const data = await response.json()
        setServerData(data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch server data', error)
        setLoading(false)
      }
    }

    fetchServerData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">🚀 Client Side</h2>
            <ul className="space-y-2 text-blue-600">
              <li>• React + TypeScript</li>
              <li>• Dynamic Rendering</li>
              <li>• Interactive UI</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">💻 Server Side</h2>
            {loading ? (
              <div className="animate-pulse text-purple-600">Loading...</div>
            ) : (
              <div className="text-purple-700">
                <p>Message: {serverData?.message}</p>
                <p>Timestamp: {new Date().toLocaleString()}</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-110"
          >
            Build Fullstack App
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-500 text-center">
        Powered by <span className="font-bold text-blue-600">Bun</span> • 
        Styled with <span className="font-bold text-purple-600">Tailwind</span>
      </div>
    </div>
  )
}

export default BunFullstackDemo
