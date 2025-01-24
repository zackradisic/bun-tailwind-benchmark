import React, { useState, useEffect } from 'react'

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' })
  const [clientCounter, setClientCounter] = useState(0)

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setServerData(data))
      .catch(err => setServerData({ message: 'Error fetching data' }))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8 text-white">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-2xl transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 shadow-inner">
            <h2 className="text-2xl font-bold mb-4 text-blue-200">Server Data</h2>
            <p className="text-lg font-mono text-green-300">
              {serverData.message}
            </p>
          </div>

          <div className="bg-white/10 rounded-xl p-6 shadow-inner">
            <h2 className="text-2xl font-bold mb-4 text-blue-200">Client State</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full transition-colors"
              >
                Increment
              </button>
              <span className="text-3xl font-bold text-yellow-300">
                {clientCounter}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
        <code className="bg-black/30 px-4 py-2 rounded-full">
          Built with Bun, React & TypeScript
        </code>
      </div>
    </div>
  )
}
