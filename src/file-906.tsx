import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' })
  const [clientCount, setClientCount] = useState(0)

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setServerData(data))
      .catch(err => setServerData({ message: 'Error fetching data' }))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-2xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          🚀 Bun Fullstack Magic
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Side</h2>
            <p className="text-blue-600 font-medium text-lg">
              {serverData.message}
            </p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client Side</h2>
            <div className="flex items-center justify-between">
              <span className="text-purple-600 font-medium text-lg">
                Clicks: {clientCount}
              </span>
              <button 
                onClick={() => setClientCount(c => c + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                Increment
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            Built with Bun, TypeScript, React & Tailwind
          </p>
        </div>
      </div>
    </div>
  )
}
