import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

const BunFullstackShowcase: React.FC = () => {
  const [serverData, setServerData] = useState<{ message: string }>({ message: '' })
  const [clientCounter, setClientCounter] = useState(0)

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello')
        const data = await response.json()
        setServerData(data)
      } catch (error) {
        console.error('Failed to fetch server data', error)
      }
    }
    fetchServerData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center transform transition-all hover:scale-105">
        <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">🌐 Server Side</h2>
            <p className="text-white/80 text-lg font-medium">
              {serverData.message || 'Fetching server data...'}
            </p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">💻 Client Side</h2>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-white/80 text-lg font-medium">
                Counter: {clientCounter}
              </p>
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all transform hover:scale-110 active:scale-95"
              >
                Increment
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-white/50 text-sm">
        Built with 🍞 Bun, React & TypeScript
      </div>
    </div>
  )
}

export default BunFullstackShowcase
