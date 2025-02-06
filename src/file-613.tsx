import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{message: string, timestamp: number}>()
  const [clientCounter, setClientCounter] = useState(0)

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello')
        const data = await response.json()
        setServerData(data)
      } catch (error) {
        console.error('Failed to fetch server data')
      }
    }
    fetchServerData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8 text-white">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-black/20 p-4 rounded-xl">
            <h2 className="text-xl font-bold mb-4">🚀 Server Data</h2>
            {serverData ? (
              <div className="space-y-2">
                <p className="text-sm">{serverData.message}</p>
                <p className="text-xs text-gray-300">
                  Timestamp: {new Date(serverData.timestamp).toLocaleString()}
                </p>
              </div>
            ) : (
              <div className="animate-pulse text-gray-300">Loading...</div>
            )}
          </div>
          
          <div className="bg-black/20 p-4 rounded-xl flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4">🖱️ Client Counter</h2>
            <div className="text-6xl font-bold mb-4">{clientCounter}</div>
            <button 
              onClick={() => setClientCounter(c => c + 1)}
              className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full transition-all transform hover:scale-110 active:scale-95"
            >
              Increment
            </button>
          </div>
        </div>
      </div>

      <div className="text-center opacity-70 text-sm">
        Built with 💖 using Bun, React & TypeScript
      </div>
    </div>
  )
}
