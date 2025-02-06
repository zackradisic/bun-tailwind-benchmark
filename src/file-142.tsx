import "./style.css";
import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' })
  const [clicks, setClicks] = useState(0)

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setServerData(data))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 space-y-8 font-sans">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center max-w-2xl transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="space-y-4">
          <div className="bg-white/10 p-6 rounded-xl border border-white/10 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server Response</h2>
            <p className="text-xl text-white/80 font-medium tracking-wide">
              {serverData.message}
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <button 
              onClick={() => setClicks(clicks + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-110 active:scale-95 shadow-lg"
            >
              Clicks: {clicks}
            </button>
          </div>
        </div>
      </div>

      <footer className="text-white/50 text-sm text-center flex flex-col items-center space-y-2">
        <div className="bg-white/10 px-4 py-2 rounded-full">
          Built with 🚀 Bun, React & TypeScript
        </div>
        <p className="opacity-70">Fullstack made incredibly simple</p>
      </footer>
    </div>
  )
}
