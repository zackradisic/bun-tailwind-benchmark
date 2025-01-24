import React, { useState, useEffect } from 'react'

export default function BunFullstackShowcase() {
  const [serverMessage, setServerMessage] = useState<string>('Loading...')
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.text())
      .then(setServerMessage)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center space-y-8 p-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 text-center transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex items-center justify-center space-x-6 mb-8">
          <div className="bg-green-100 border-2 border-green-300 rounded-lg px-6 py-4 text-xl font-semibold text-green-800">
            Server Response: {serverMessage}
          </div>
          
          <button 
            onClick={() => setCounter(c => c + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-110 active:scale-95 shadow-lg"
          >
            Counter: {counter}
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-left">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">🚀 Server</h2>
            <pre className="text-sm text-blue-900 bg-blue-100 p-4 rounded-lg">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/hello')) {
      return new Response('Hello from Bun!')
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-left">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">💻 Client</h2>
            <pre className="text-sm text-purple-900 bg-purple-100 p-4 rounded-lg">
              {`const [message, setMessage] = useState('')
useEffect(() => {
  fetch('/api/hello')
    .then(res => res.text())
    .then(setMessage)
}, [])`}
            </pre>
          </div>
        </div>
      </div>
      
      <div className="text-sm text-gray-500 text-center opacity-70">
        Built with Bun, React, TypeScript & Tailwind
      </div>
    </div>
  )
}
