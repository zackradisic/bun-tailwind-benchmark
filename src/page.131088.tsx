import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
          Bun Fullstack ⚡️
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-indigo-50 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Server</h2>
            <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Client</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-4 bg-green-300 rounded w-3/4"></div>
                </div>
              ) : (
                users.map((user, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-3 rounded-lg shadow-md hover:bg-green-100 transition-colors"
                  >
                    <p className="font-semibold text-green-800">{user.name}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 flex items-center space-x-2 bg-white p-4 rounded-full shadow-lg">
        <span>🚀 Built with</span>
        <div className="flex space-x-2">
          <span className="font-bold text-blue-600">Bun</span>
          <span className="font-bold text-purple-600">React</span>
          <span className="font-bold text-teal-600">TypeScript</span>
          <span className="font-bold text-indigo-600">Tailwind</span>
        </div>
      </div>
    </div>
  )
}
