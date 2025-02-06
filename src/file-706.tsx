import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: '' })
  const [clientCounter, setClientCounter] = useState(0)

  useEffect(() => {
    const fetchServerData = async () => {
      const response = await fetch('/api/hello')
      const data = await response.json()
      setServerData(data)
    }
    fetchServerData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-200 to-pink-200 flex flex-col items-center justify-center space-y-8 p-6 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-4 shadow-md">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Server Side</h2>
            <p className="text-gray-700 font-medium">
              Server Message: 
              <span className="ml-2 text-green-600">
                {serverData.message || 'Loading...'}
              </span>
            </p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-4 shadow-md">
            <h2 className="text-xl font-bold text-green-700 mb-4">Client Side</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(prev => prev + 1)}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:opacity-80 transition-all"
              >
                Click: {clientCounter}
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
            Built with 🚀 Bun, React & TypeScript
          </div>
        </div>
      </div>
    </div>
  )
}
