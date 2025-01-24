import React, { useState, useEffect } from 'react'

export default function BunFullStackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' })
  const [clientCounter, setClientCounter] = useState(0)

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
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col items-center justify-center space-y-8 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
          Bun Full Stack Magic 🚀
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Server Response</h2>
            <p className="text-gray-800 font-medium tracking-wide">
              {serverData.message}
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Client State</h2>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setClientCounter(prev => prev + 1)}
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                Increment
              </button>
              <span className="text-xl font-bold text-gray-700">
                Count: {clientCounter}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white text-sm opacity-70 text-center max-w-xl">
        <p className="mb-2">
          🌟 Seamlessly combining server-side rendering and client-side interactivity
        </p>
        <p className="italic">
          Built with Bun, React, and Tailwind CSS - Full Stack Simplicity
        </p>
      </div>
    </div>
  )
}
