import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
  const [serverData, setServerData] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.text())
      .then(setServerData)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center space-y-8 p-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-2xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-sm text-blue-200">React Component</p>
                <p className="font-mono text-white">TypeScript & React</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg">
                <p className="text-sm text-green-200">State Management</p>
                <p className="font-mono text-white">useState Hook</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-xl border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            <div className="space-y-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <p className="text-sm text-purple-200">API Response</p>
                <p className="font-mono text-white truncate">
                  {serverData || 'Loading...'}
                </p>
              </div>
              <div className="bg-red-500/20 p-3 rounded-lg">
                <p className="text-sm text-red-200">Bun Server</p>
                <p className="font-mono text-white">Instant Fullstack</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-white/20 hover:bg-white/40 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Explore More
          </button>
        </div>
      </div>

      <div className="text-white/70 text-sm text-center max-w-xl">
        Built with Bun's lightning-fast runtime, seamless TypeScript support, 
        and integrated bundling – turning complex fullstack development into 
        a delightful, simple experience.
      </div>
    </div>
  )
}
