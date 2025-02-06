import "./style.css";
import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' })
  const [clientCount, setClientCount] = useState(0)

  useEffect(() => {
    const fetchServerData = async () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side 🖥️</h2>
            <p className="text-gray-700 font-medium">
              Server Response: 
              <span className="ml-2 text-green-600 font-bold">
                {serverData.message}
              </span>
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Side 💻</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCount(prev => prev + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                Increment
              </button>
              <span className="text-xl font-bold text-purple-700">
                Count: {clientCount}
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 italic">
          Built with 🔥 Bun, React, and Tailwind
        </div>
      </div>
    </div>
  )
}

export default BunFullstackShowcase
