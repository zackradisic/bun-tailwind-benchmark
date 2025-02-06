import "./style.css";
import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/users')
        const data = await response.json()
        setServerData(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-xl shadow-inner">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Client Side</h2>
            <ul className="space-y-2">
              <li className="bg-white p-2 rounded-md shadow-sm">🚀 React Component</li>
              <li className="bg-white p-2 rounded-md shadow-sm">🎨 Tailwind Styling</li>
              <li className="bg-white p-2 rounded-md shadow-sm">⚡ Dynamic Rendering</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-xl shadow-inner">
            <h2 className="text-xl font-bold text-purple-700 mb-4">Server Side</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-purple-300 rounded"></div>
                  <div className="h-4 bg-purple-300 rounded"></div>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-semibold text-purple-600 mb-2">
                  Users Fetched: {serverData.length}
                </h3>
                <ul className="space-y-2 max-h-40 overflow-auto">
                  {serverData.map((user: any, index: number) => (
                    <li 
                      key={index} 
                      className="bg-white p-2 rounded-md shadow-sm text-sm truncate hover:bg-purple-100 transition-colors"
                    >
                      {user.name || 'Anonymous User'}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-600">
        <p className="bg-white/50 px-4 py-2 rounded-full">
          Built with 💖 using Bun + React + TypeScript
        </p>
      </div>
    </div>
  )
}
