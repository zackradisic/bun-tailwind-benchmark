import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function fetchServerData() {
      try {
        const response = await fetch('/api/hello')
        const data = await response.json()
        setServerData(data)
      } catch (error) {
        setServerData({ message: 'Error fetching data' })
      }
    }
    fetchServerData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex items-center justify-center space-x-4 mb-6">
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-110"
          >
            Clicks: {count}
          </button>
        </div>

        <div className="bg-gray-100 border-2 border-blue-200 rounded-xl p-4 shadow-inner">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Server Response 🚀
          </h2>
          <pre className="text-left bg-white p-4 rounded-lg text-gray-800">
            {JSON.stringify(serverData, null, 2)}
          </pre>
        </div>
      </div>

      <div className="text-sm text-gray-600 opacity-70 hover:opacity-100 transition-opacity">
        Built with ❤️ using Bun, React & TypeScript
      </div>
    </div>
  )
}
