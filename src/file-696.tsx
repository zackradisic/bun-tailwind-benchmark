import "./style.css";
import React, { useState, useEffect } from 'react'

const BunFullstackDemo: React.FC = () => {
  const [serverData, setServerData] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch('/api/hello')
        const data = await response.text()
        setServerData(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }
    fetchServerData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Bun Fullstack Magic ✨
          </h1>
          
          <div className="w-full bg-gray-100 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Server Response</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-3 animate-pulse">
                <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
                <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
                <div className="h-4 w-4 bg-blue-400 rounded-full"></div>
              </div>
            ) : (
              <p className="text-lg text-gray-700 font-mono">{serverData || 'No data received'}</p>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setCounter(counter + 1)}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors shadow-md active:scale-95"
            >
              Increment Counter
            </button>
            <div className="text-2xl font-bold text-purple-600">
              Count: {counter}
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500 text-center max-w-xl">
        <p className="italic">
          Built with Bun 🥟 - Seamlessly integrating server and client, 
          with TypeScript, React, and Tailwind making development a breeze!
        </p>
      </div>
    </div>
  )
}

export default BunFullstackDemo
