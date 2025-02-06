import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: string }>()
  const [clientCounter, setClientCounter] = useState(0)

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(setServerData)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center space-y-8 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          ⚡️ Bun Fullstack Magic
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Response</h2>
            {serverData ? (
              <div className="space-y-2">
                <p className="text-lg font-medium text-blue-800">{serverData.message}</p>
                <p className="text-sm text-blue-600">Timestamp: {serverData.timestamp}</p>
              </div>
            ) : (
              <div className="animate-pulse text-blue-400">Loading server data...</div>
            )}
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Counter</h2>
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setClientCounter(c => c - 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-all"
              >
                -
              </button>
              <span className="text-4xl font-bold text-purple-800">{clientCounter}</span>
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-all"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with Bun, React, TypeScript & Tailwind - Fullstack in one file! 🚀
          </p>
        </div>
      </div>
    </div>
  )
}
