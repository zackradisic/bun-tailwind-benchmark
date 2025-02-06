import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: number }>({
    message: 'Loading...',
    timestamp: 0
  })

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello')
        const data = await response.json()
        setServerData(data)
      } catch (error) {
        setServerData({ 
          message: 'Error fetching data', 
          timestamp: Date.now() 
        })
      }
    }

    fetchServerData()
    const intervalId = setInterval(fetchServerData, 5000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-2xl w-full transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center tracking-tight">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Client Side</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span>React {React.version}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span>TypeScript</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-green-500">✓</span>
                <span>Tailwind CSS</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-200">
            <h2 className="text-xl font-bold text-purple-700 mb-4">Server Side</h2>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Server Response:</p>
              <div className="bg-white p-3 rounded-xl shadow-md">
                <p className="font-mono text-sm text-gray-800">{serverData.message}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Timestamp: {new Date(serverData.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Powered by Bun - Fullstack Simplified 🚀
          </p>
        </div>
      </div>
    </div>
  )
}
