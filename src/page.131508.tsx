import { useState, useEffect } from 'react'

export default function BunFullstackShowcase() {
  const [serverData, setServerData] = useState<{ message: string; timestamp: number }>()
  const [clientCounter, setClientCounter] = useState(0)

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(setServerData)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 space-y-8 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-6 text-center">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Response</h2>
            {serverData ? (
              <div className="space-y-2">
                <p className="text-gray-700">
                  Message: <span className="font-semibold">{serverData.message}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Timestamp: {new Date(serverData.timestamp).toLocaleString()}
                </p>
              </div>
            ) : (
              <div className="animate-pulse text-gray-500">Loading server data...</div>
            )}
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow-md flex flex-col items-center">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Counter</h2>
            <div className="text-6xl font-black text-purple-600 mb-6">{clientCounter}</div>
            <div className="flex space-x-4">
              <button 
                onClick={() => setClientCounter(c => c + 1)}
                className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors shadow-md"
              >
                Increment
              </button>
              <button 
                onClick={() => setClientCounter(0)}
                className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors shadow-md"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Built with 🚀 Bun, React & TypeScript
        </div>
      </div>
    </div>
  )
}
