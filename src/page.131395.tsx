import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' })
  const [clientCounter, setClientCounter] = useState(0)

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setServerData(data))
      .catch(error => setServerData({ message: 'Error fetching data' }))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-200 to-pink-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side</h2>
            <p className="text-gray-700 font-medium tracking-wide">
              {serverData.message}
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Side</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(prev => prev + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                Increment
              </button>
              <span className="text-2xl font-bold text-purple-800">
                Count: {clientCounter}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-green-50 p-6 rounded-2xl shadow-lg text-center">
            <p className="text-lg font-semibold text-green-800">
              Built with 🔥 Bun, React, TypeScript & Tailwind
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-gray-600 opacity-70 text-center">
        Simple, Fast, Modern Full-stack Development
      </div>
    </div>
  )
}
