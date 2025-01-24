import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<{ message: string }>({ message: 'Loading...' })
  const [clientClicks, setClientClicks] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello')
        const data = await response.json()
        setServerData(data)
      } catch (error) {
        setServerData({ message: 'Error fetching data' })
      }
    }
    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-6 space-y-8 text-white">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-500/30 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl font-bold mb-4">Server Response</h2>
            <p className="text-xl font-semibold text-white/80">
              {serverData.message}
            </p>
          </div>
          
          <div className="bg-green-500/30 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl font-bold mb-4">Client Interaction</h2>
            <button 
              onClick={() => setClientClicks(c => c + 1)}
              className="bg-white/20 hover:bg-white/40 transition-all px-6 py-3 rounded-full text-xl font-bold"
            >
              Clicks: {clientClicks}
            </button>
          </div>
        </div>
        
        <div className="text-sm opacity-70 italic">
          Built with Bun, React & Tailwind in seconds! 🚀
        </div>
      </div>
    </div>
  )
}
