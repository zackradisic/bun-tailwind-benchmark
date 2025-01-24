import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

const BunFullstackDemo: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center space-y-8 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-xl p-4 text-center shadow-md">
            <h2 className="font-bold text-blue-700">Server Response</h2>
            <p className="text-gray-700 mt-2">{serverData.message}</p>
          </div>

          <div className="bg-purple-50 rounded-xl p-4 text-center shadow-md">
            <h2 className="font-bold text-purple-700">Client Clicks</h2>
            <p className="text-gray-700 mt-2">{clientCount}</p>
          </div>
        </div>

        <div className="flex space-x-4">
          <button 
            onClick={() => setClientCount(prev => prev + 1)}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all active:scale-95 shadow-lg"
          >
            Increment Client Counter
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-600 text-center">
        Built with 
        <span className="mx-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Bun • React • TypeScript
        </span>
        🚀
      </div>
    </div>
  )
}

export default BunFullstackDemo
