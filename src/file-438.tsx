import "./style.css";
import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' })
  const [clientCounter, setClientCounter] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello')
        const data = await response.json()
        setServerData(data)
      } catch (error) {
        setServerData({ message: 'Error fetching data' })
      }
    }
    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Response</h2>
            <p className="text-lg font-medium text-gray-700 animate-pulse">
              {serverData.message}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client Counter</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(c => c - 1)} 
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                -
              </button>
              <span className="text-3xl font-bold text-purple-700">{clientCounter}</span>
              <button 
                onClick={() => setClientCounter(c => c + 1)} 
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with Bun, React & TypeScript 🚀
          </p>
        </div>
      </div>
    </div>
  )
}

// For client-side rendering
if (typeof window !== 'undefined') {
  const root = createRoot(document.getElementById('root')!)
  root.render(<BunFullstackShowcase />)
}
