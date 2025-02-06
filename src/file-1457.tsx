import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{message: string, timestamp: number}>()
  const [clientCount, setClientCount] = useState(0)

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setServerData(data))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-2xl transform hover:scale-105 transition-all duration-300">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Response</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm">
              {serverData ? JSON.stringify(serverData, null, 2) : 'Loading...'}
            </pre>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client Interactions</h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-xl font-semibold text-purple-600">
                Clicks: {clientCount}
              </p>
              <button 
                onClick={() => setClientCount(c => c + 1)}
                className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors active:scale-95"
              >
                Increment
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Built with 🚀 Bun, React & TypeScript
        </div>
      </div>
    </div>
  )
}
