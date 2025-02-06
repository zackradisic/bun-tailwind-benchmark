import "./style.css";
import React, { useState } from 'react'

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' })
  const [clientCount, setClientCount] = useState(0)

  const fetchServerData = async () => {
    const response = await fetch('/api/hello')
    const data = await response.json()
    setServerData(data)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 mb-6">
          ⚡ Bun Fullstack Magic ⚡
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">🌐 Server</h2>
            <button 
              onClick={fetchServerData}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg hover:opacity-90 transition-all"
            >
              Fetch Server Data
            </button>
            <pre className="mt-4 text-sm bg-purple-100 p-3 rounded-md">
              {JSON.stringify(serverData, null, 2)}
            </pre>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">💻 Client</h2>
            <div className="flex flex-col items-center space-y-4">
              <div className="text-6xl font-bold text-indigo-600">{clientCount}</div>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setClientCount(c => c + 1)}
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all"
                >
                  Increment
                </button>
                <button 
                  onClick={() => setClientCount(0)}
                  className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-all"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          Built with 🍞 Bun, React & TypeScript
        </div>
      </div>
    </div>
  )
}
